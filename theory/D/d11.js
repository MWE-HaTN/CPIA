/* Theory — D11 (Appendix D). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d11"]=`<h2>D11 — Internal Spread and Privilege Escalation</h2><ul>

<li><span class="en">Internal spread evidence: SMB / RDP / WinRM / PsExec connections, admin shares, service creation, copied binaries, remote scheduled tasks.</span><span class="vi">Bằng chứng lây lan nội bộ: kết nối SMB / RDP / WinRM / PsExec, chia sẻ admin, tạo dịch vụ, sao chép binary, scheduled task từ xa.</span></li>

<li><span class="en">Privilege escalation evidence: new admin membership, token impersonation, UAC bypass, suspicious service binary path, credential dumping.</span><span class="vi">Bằng chứng leo thang đặc quyền: thành viên admin mới, mạo danh token, vượt UAC, đường dẫn binary dịch vụ đáng ngờ, dump thông tin xác thực.</span></li>

<li><span class="en">Offensive tools: PsExec, WMI, PowerShell Remoting, Cobalt Strike, Mimikatz, Impacket, BloodHound-related activity.</span><span class="vi">Công cụ tấn công: PsExec, WMI, PowerShell Remoting, Cobalt Strike, Mimikatz, Impacket, hoạt động liên quan BloodHound.</span></li>

<li><span class="en">Correlate endpoint logs with network flows; lateral movement usually leaves both host and network artefacts.</span><span class="vi">Tương quan log endpoint với flow mạng; lateral movement thường để lại cả artefact ở host lẫn trên mạng.</span></li>

</ul>

<h3>Lateral Movement Indicators in Logs</h3>

<div class="table-wrap"><table>

<tr><th>Technique</th><th>Log Evidence</th><th>Key Event IDs</th></tr>

<tr><td>Pass-the-Hash</td><td>Event 4648 (explicit credentials) + Logon Type 3 on destination</td><td>4648, 4624 Type 3</td></tr>

<tr><td>PsExec</td><td>Service PSEXESVC created on target, admin share access</td><td>4697, 7045, 5140 (share access)</td></tr>

<tr><td>WMI remote execution</td><td>WMI activity log, wmiprvse.exe spawning child process on remote host</td><td>4624, Microsoft-Windows-WMI-Activity</td></tr>

<tr><td>RDP lateral movement</td><td>Logon Type 10 from internal IP at unusual time</td><td>4624 Type 10, 4778 (session reconnect)</td></tr>

<tr><td>SMB file copy + execution</td><td>Admin share (C$, ADMIN$) accessed, followed by service or scheduled task creation</td><td>5140, 4697, 4698</td></tr>

<tr><td>Scheduled task (remote)</td><td>schtasks /s [remote host] in command line, task created on remote system</td><td>4698 (task created), 4702 (task modified)</td></tr>

</table></div>

<h3>Privilege Escalation Indicators</h3>

<ul>

<li><strong>Token impersonation:</strong> Process running under low-privilege account suddenly executing high-privilege operations — check parent process and token</li>

<li><strong>UAC bypass:</strong> Process elevated without UAC prompt — fodhelper.exe, eventvwr.exe, sdclt.exe spawning child processes, unexpected high-integrity process without elevation event</li>

<li><strong>New local admin account:</strong> Event 4720 (user created) + 4728 (added to Administrators group)</li>

<li><strong>Service account abuse:</strong> Service account performing interactive logon (Logon Type 2/10) — service accounts should not log on interactively</li>

<li><strong>Kerberoasting:</strong> Single user account requesting many Kerberos service tickets (TGS-REQ) for various SPNs in short time — Event 4769</li>

</ul>

<h3>Understanding Offensive Tool Capabilities</h3>

<div class="table-wrap"><table>

<tr><th>Tool</th><th>Capability</th><th>Detection</th></tr>

<tr><td>Mimikatz</td><td>LSASS dump, Pass-the-Hash, Golden / Silver ticket, DCSync</td><td>lsass.exe memory access by non-system process, Event 4662 (DCSync)</td></tr>

<tr><td>BloodHound / SharpHound</td><td>AD path enumeration — finds shortest path to DA</td><td>Bulk LDAP queries, SMB sessions to many hosts rapidly</td></tr>

<tr><td>CobaltStrike</td><td>C2 framework, beacon, lateral movement, post-exploitation</td><td>Characteristic beacon interval, named pipes, JA3 hash, JARM</td></tr>

<tr><td>Impacket</td><td>Python suite: PsExec, WMI exec, secretsdump, SMB relay</td><td>Characteristic SMB patterns, secretsdump DRSUAPI calls</td></tr>

<tr><td>Metasploit</td><td>Exploitation, Meterpreter payload, post-exploitation modules</td><td>Characteristic Meterpreter TLS cert, staged payload patterns</td></tr>

</table></div>


<h3 class="qz-theory"><span class="en">Internal Spread &amp; Privilege Escalation</span><span class="vi">Lan truyền nội bộ &amp; leo thang đặc quyền</span></h3>
<ul>
<li><span class="en">One host suddenly authenticating to many peers over <strong>SMB (445)</strong> / admin shares = lateral movement; correlate with logon events (type 3, 4624/4672).</span><span class="vi">một host bỗng xác thực tới nhiều máy qua <strong>SMB (445)</strong> / admin share = lateral movement; đối chiếu với sự kiện đăng nhập (type 3, 4624/4672).</span></li>
<li><strong>Pass-the-Hash:</strong> <span class="en">NTLM accepts the hash directly, so a dumped hash (e.g. via Mimikatz) authenticates as that user <em>without</em> cracking the password.</span><span class="vi">NTLM chấp nhận hash trực tiếp, nên một hash bị dump (vd qua Mimikatz) xác thực dưới danh nghĩa người dùng đó <em>mà không</em> cần bẻ mật khẩu.</span></li>
<li><strong>Kerberoasting:</strong> <span class="en">A spike of Kerberos service-ticket (TGS, event 4769) requests for many SPNs from one account → harvesting tickets to crack service-account passwords offline.</span><span class="vi">Đợt tăng yêu cầu service-ticket Kerberos (TGS, sự kiện 4769) cho nhiều SPN từ một tài khoản → thu thập ticket để bẻ mật khẩu tài khoản dịch vụ offline.</span></li>
<li><strong>PsExec-style:</strong> <span class="en">Copy a binary to <code>ADMIN$</code> and create/start a service to run it remotely as SYSTEM (traces: 7045, 5145). WMI/WinRM are alternative channels. Event <strong>4672</strong> (admin privileges) on unusual accounts/hosts can indicate escalation/misuse.</span><span class="vi">Copy một binary tới <code>ADMIN$</code> và tạo/khởi động service để chạy từ xa dưới SYSTEM (dấu: 7045, 5145). WMI/WinRM là kênh thay thế. Sự kiện <strong>4672</strong> (quyền admin) trên tài khoản/host bất thường có thể cho thấy leo thang/lạm dụng.</span></li></ul>
`;
