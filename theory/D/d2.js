/* Theory — D2 (Appendix D). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d2"]=`<h2>D2 — Data Sources and Network Log Sources</h2>

<h3>Windows logon types</h3>

<div class="table-wrap"><table><tr><th>Type</th><th>Name</th><th>Meaning</th></tr><tr><td>2</td><td>Interactive</td><td>Local keyboard / console logon.</td></tr><tr><td>3</td><td>Network</td><td>Network access such as SMB.</td></tr><tr><td>4</td><td>Batch</td><td>Batch job logon.</td></tr><tr><td>5</td><td>Service</td><td>Service account logon.</td></tr><tr><td>7</td><td>Unlock</td><td>Workstation unlock.</td></tr><tr><td>8</td><td>NetworkCleartext</td><td>Credentials sent to authentication package in cleartext-equivalent form.</td></tr><tr><td>9</td><td>NewCredentials</td><td>RunAs /netonly style credential use.</td></tr><tr><td>10</td><td>RemoteInteractive</td><td>RDP / Terminal Services logon.</td></tr></table></div>

<h3>Key fields by log source</h3>

<div class="table-wrap"><table><tr><th>Log Source</th><th>Key Fields to Preserve</th><th>Common Investigation Use</th></tr><tr><td>Proxy</td><td>timestamp, user, source IP, URL, method, status code, bytes, user-agent</td><td>Malware download, callback, user browsing path</td></tr><tr><td>DNS</td><td>timestamp, client IP, query, answer, record type, response code, NXDOMAIN status</td><td>DGA, tunneling, fast-flux, beaconing</td></tr><tr><td>Firewall</td><td>timestamp, action, src / dst IP, ports, protocol, NAT translation, rule ID</td><td>Allowed / blocked traffic, NAT attribution</td></tr><tr><td>DHCP</td><td>lease time, MAC address, hostname, assigned IP, lease start / end, scope</td><td>IP-to-device attribution at specific time</td></tr><tr><td>VPN</td><td>username, source IP, assigned internal IP, login / logout time, MFA result</td><td>Suspicious remote access investigation</td></tr><tr><td>Email</td><td>sender, recipient, subject, message-ID, attachment names / hashes, source IP, delivery result</td><td>Phishing tracing, affected recipients</td></tr><tr><td>Windows Event</td><td>event ID, account, logon type, source workstation / IP, host, process, command line, target object</td><td>Authentication, execution, privilege use</td></tr><tr><td>O365 Unified</td><td>user, operation, workload, client IP, user-agent, object ID, result status</td><td>Cloud mailbox, SharePoint / OneDrive activity</td></tr><tr><td>Web server</td><td>timestamp, source IP, request URI, method, status code, user-agent, bytes</td><td>Exploitation, webshell, upload paths</td></tr><tr><td>AV / EDR</td><td>timestamp, host, user, detection name, action taken, file hash, process</td><td>Detections, quarantine, telemetry</td></tr><tr><td>Domain / AD</td><td>timestamp, account, event type, source, target, attribute changes</td><td>AD auth, Kerberos, account changes</td></tr><tr><td>Database</td><td>timestamp, user, source IP, query text, affected table / row</td><td>Suspicious queries, data access</td></tr><tr><td>Internet history</td><td>timestamp, URL, title, visit count, download path</td><td>User browsing / download behaviour</td></tr></table></div>

<div class="callout warning"><strong>Exam tip:</strong> <span class="en">Always correlate DHCP + firewall / NAT + authentication logs before attributing activity to a user or host.</span><span class="vi">Luôn tương quan log DHCP + tường lửa / NAT + xác thực trước khi quy kết hoạt động cho một người dùng hoặc host.</span></div>

<h3>Critical Windows Event IDs for IR</h3><div class="table-wrap"><table><tr><th>Event ID</th><th>Meaning</th><th>IR Significance</th></tr><tr><td><strong>4624</strong></td><td>Successful logon</td><td>Check Logon Type to classify access (console, network, RDP)</td></tr><tr><td><strong>4625</strong></td><td>Failed logon</td><td>Brute force — many failures then 4624 = successful compromise</td></tr><tr><td><strong>4648</strong></td><td>Logon with explicit credentials</td><td>Pass-the-Hash, runas, lateral movement indicator</td></tr><tr><td><strong>4688</strong></td><td>New process created</td><td>Malware execution — check parent process, command line, executable path</td></tr><tr><td><strong>4697</strong></td><td>Service installed on system</td><td>Malware persistence via service installation</td></tr><tr><td><strong>4720</strong></td><td>User account created</td><td>Backdoor account creation</td></tr><tr><td><strong>4698</strong></td><td>Scheduled task created</td><td>Persistence mechanism — check task XML for command</td></tr><tr><td><strong>7045</strong></td><td>New service installed (System log)</td><td>Complements 4697 — check service binary path for malware</td></tr>

<tr><td><strong>4776</strong></td><td>NTLM credential validation attempt</td><td>Pass-the-Hash detection — 4776 from workstation to DC = NTLM auth; combine with 4625 failures = brute force or PTH</td></tr></table></div>

<p class="sub-heading">Windows Event Log Correlation Patterns</p>

<p class="sub-heading">Brute Force Detection</p><pre>4625 (failed logon) × N from same IP

  → 4624 (success) from same IP

    → 4688 (process creation)

= Brute force → successful compromise</pre>

<p class="sub-heading">Account Creation for Persistence</p><pre>4720 (user created)

  → 4732 (added to local admin group)

    → 4624 (logon with new account)

= Backdoor account</pre>

<p class="sub-heading">Service-Based Persistence</p><pre>7045 (service installed)

  → 4688 (service host process)

    → Proxy/DNS logs (outbound callback)

= Malicious service with C2</pre>

<p class="sub-heading">Scheduled Task Persistence</p><pre>4698 (scheduled task created)

  → 4688 (task execution)

    → Proxy logs (outbound connection)

= Scheduled task C2</pre>

<p class="sub-heading">Credential Theft</p><pre>4688 (process creation: mimikatz / procdump)

  → 4656 / 4663 (handle to LSASS)

= Credential dumping attempt</pre>

<p class="sub-heading">PowerShell Abuse</p><pre>4104 (script block logging) shows:

  - Download cradle

  - Encoded commands

  - AMSI bypass

= Script-based attack</pre>

<p class="sub-heading">Audit Log Tampering</p><pre>1102 (audit log cleared)

= CRITICAL: investigate who cleared and why immediately</pre>

<h3>Privilege Escalation</h3><pre>4672 (special privileges) for non-admin account

  → 4688 (process with elevated token)

= Token manipulation or misconfigured permissions</pre>

<h3>Additional Log Sources: DHCP, VPN, Web Server, AV</h3><div class="table-wrap"><table><tr><th>Log Source</th><th>Key Fields</th><th>IR Value</th></tr><tr><td><strong>DHCP logs</strong></td><td>MAC address, assigned IP, lease start / end, hostname</td><td>Map IP → MAC → hostname at specific time; identify rogue / unknown devices on network</td></tr><tr><td><strong>VPN logs</strong></td><td>Username, source IP, tunnel IP, bytes, duration, auth result</td><td>Identify compromised accounts used for remote access; correlate tunnel IP with internal activity</td></tr><tr><td><strong>Web server logs</strong></td><td>Src IP, method, URI, status code, response bytes, user-agent, referrer</td><td>Detect SQL injection, web shells, scanning, exploit attempts in HTTP request patterns</td></tr><tr><td><strong>Antivirus logs</strong></td><td>Detection name, file path, action taken (quarantine / allow), timestamp, host</td><td>Identify malware presence, detection timeline, and whether malware was contained or allowed to run</td></tr></table></div>
<h3 class="qz-theory"><span class="en">Data Sources, Log Correlation &amp; Key Event IDs</span><span class="vi">Nguồn dữ liệu, đối chiếu log &amp; Event ID quan trọng</span></h3>
<p><span class="en"><strong>Correlation across multiple sources</strong> on a common timeline/identifier is the most powerful technique when an incident spans many systems — no single log tells the whole story. DNS logs record domain resolution and proxy logs record HTTP(S) request metadata (host/URL/bytes) <em>even when payload is TLS-encrypted</em>; resolve a NATed public IP to an internal host via firewall translation + DHCP logs. A <strong>SIEM</strong> enables cross-source correlation and keeps copies off the endpoint (an attacker clearing local logs may not erase forwarded copies).</span><span class="vi"><strong>Đối chiếu nhiều nguồn</strong> trên một timeline/định danh chung là kỹ thuật mạnh nhất khi sự cố trải nhiều hệ thống — không log nào kể trọn. Log DNS ghi phân giải domain, log proxy ghi metadata yêu cầu HTTP(S) (host/URL/byte) <em>kể cả khi payload mã hóa TLS</em>; truy IP công khai sau NAT về host nội bộ qua log dịch firewall + DHCP. <strong>SIEM</strong> cho phép đối chiếu chéo và giữ bản sao ngoài endpoint (kẻ tấn công xóa log cục bộ có thể không xóa được bản đã chuyển).</span></p>
<div class="table-wrap"><table><thead><tr><th>Event ID</th><th><span class="en">Meaning</span><span class="vi">Ý nghĩa</span></th></tr></thead><tbody>
<tr><td>4624 / 4625</td><td><span class="en">Successful / failed logon (with Logon Type)</span><span class="vi">Đăng nhập thành công / thất bại (kèm Logon Type)</span></td></tr>
<tr><td>4672</td><td><span class="en">Special/admin privileges assigned to a logon</span><span class="vi">Cấp đặc quyền đặc biệt/admin cho một đăng nhập</span></td></tr>
<tr><td>4688</td><td><span class="en">Process creation (with command line if audited)</span><span class="vi">Tạo tiến trình (kèm dòng lệnh nếu bật audit)</span></td></tr>
<tr><td>1102</td><td><span class="en">Security audit log cleared (anti-forensics)</span><span class="vi">Xóa nhật ký audit bảo mật (chống điều tra)</span></td></tr>
<tr><td>7045</td><td><span class="en">New service installed (lateral movement)</span><span class="vi">Cài service mới (lateral movement)</span></td></tr></tbody></table></div>
<p><span class="en"><strong>Sysmon</strong> adds rich, hash-tagged telemetry (ID 1 process, 3 network, 11 file create, 22 DNS) beyond defaults. <strong>O365 Unified Audit Log</strong> captures sign-ins, mailbox ops and sharing — central to BEC investigations. <strong>VPN logs</strong> tie a remote session to an account, source IP and time.</span><span class="vi"><strong>Sysmon</strong> bổ sung telemetry phong phú, gắn hash (ID 1 tiến trình, 3 mạng, 11 tạo file, 22 DNS) vượt mặc định. <strong>O365 Unified Audit Log</strong> ghi đăng nhập, thao tác hộp thư và chia sẻ — trọng tâm điều tra BEC. <strong>Log VPN</strong> gắn phiên từ xa với tài khoản, IP nguồn và thời gian.</span></p>
`;
