/* Theory — D11 (Appendix D). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d11"]=`<h2>D11 — Internal Spread &amp; Privilege Escalation</h2>

<div class="tier recall" id="d11-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Lateral movement on the wire:</strong> <span class="en">A burst of SMB (445) from one host to many, plus admin logons, = lateral movement.</span><span class="vi">Một loạt SMB (445) từ một host tới nhiều host, kèm logon admin, = di chuyển ngang.</span></li>
<li><strong>Pass-the-Hash:</strong> <span class="en">Authenticate with a stolen NTLM hash — no plaintext password needed.</span><span class="vi">Xác thực bằng NTLM hash đánh cắp — không cần mật khẩu rõ.</span></li>
<li><strong>Kerberoasting:</strong> <span class="en">A spike of TGS (4769) requests for many SPNs from one account, RC4 (0x17) — crack service passwords offline.</span><span class="vi">Tăng đột biến yêu cầu TGS (4769) cho nhiều SPN từ một tài khoản, RC4 (0x17) — crack mật khẩu service offline.</span></li>
<li><strong>PsExec-style:</strong> <span class="en">Remote execution via the ADMIN$ share + a newly-created service.</span><span class="vi">Thực thi từ xa qua share ADMIN$ + một service mới tạo.</span></li>
<li><strong>Privilege escalation sign:</strong> <span class="en">Event 4672 (special privileges assigned to a new logon) flags a logon that gained sensitive rights.</span><span class="vi">Event 4672 (đặc quyền nhạy cảm gán cho logon mới) đánh dấu một phiên giành được quyền nhạy cảm.</span></li>
<li><strong>Golden/Silver Ticket:</strong> <span class="en">Forged Kerberos tickets (KRBTGT/service) = deep domain compromise.</span><span class="vi">Vé Kerberos giả mạo (KRBTGT/service) = xâm phạm domain sâu.</span></li>
<li><strong>Corroborate:</strong> <span class="en">Confirm spread/escalation by manually correlating network traffic with authentication, process, service and endpoint logs; offensive tools may use many protocols.</span><span class="vi">Xác nhận lan truyền/leo quyền bằng cách rà và tương quan traffic mạng với log xác thực, tiến trình, service và endpoint; công cụ tấn công có thể dùng nhiều giao thức.</span></li>
</ul></div></div>

<details class="tier concept" id="d11-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Lan truyền nội bộ (lateral movement)</h4>
<p>Sau khi có một host, kẻ tấn công sang máy khác. Dấu hiệu trên mạng/log: <strong>SMB (445) từ một host tới nhiều host</strong> kèm <strong>logon admin</strong> (4624 logon type 3), <strong>PsExec</strong> (ADMIN$ + service mới — Event 7045), <strong>WMI/WinRM</strong>, RDP. Công cụ tấn công (offensive tooling) như Cobalt Strike, Impacket, BloodHound có khả năng tự động hóa các bước này.</p>

<h4>Tấn công thông tin xác thực &amp; Kerberos</h4>
<p><strong>Pass-the-Hash</strong>: dùng NTLM hash thay mật khẩu. <strong>Kerberoasting</strong>: yêu cầu nhiều service ticket (4769, mã hóa RC4 0x17) rồi crack offline lấy mật khẩu service. <strong>Golden Ticket</strong> (giả TGT bằng hash KRBTGT) / <strong>Silver Ticket</strong> (giả service ticket) = kiểm soát sâu. Phát hiện qua bất thường trong 4768/4769/4771 (xem E4/B2).</p>

<h4>Leo thang đặc quyền</h4>
<p>Dấu hiệu: <strong>Event 4672</strong> (đặc quyền nhạy cảm gán cho logon), lạm dụng token, UAC bypass, service có ACL yếu (xem B9), khai thác lỗ hổng local. Theo dõi tài khoản thường bỗng có quyền admin, hoặc tiến trình con bất thường chạy với quyền cao.</p>
</div></details>

<details class="tier reference" id="d11-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Lateral movement techniques</h4>
<div class="table-wrap"><table>
<tr><th>Technique</th><th>Tell</th></tr>
<tr><td>Pass-the-Hash</td><td>NTLM auth without plaintext</td></tr>
<tr><td>PsExec</td><td>ADMIN$ + new service (7045)</td></tr>
<tr><td>WMI / WinRM</td><td>Remote exec via management protocols</td></tr>
<tr><td>RDP (3389)</td><td>Interactive remote access</td></tr>
<tr><td>Kerberoasting</td><td>Many TGS (4769) RC4 from one account</td></tr>
</table></div>

<h4>Privilege-escalation indicators</h4>
<div class="table-wrap"><table>
<tr><th>Indicator</th><th>Meaning</th></tr>
<tr><td>Event 4672</td><td>Special privileges assigned to a logon</td></tr>
<tr><td>Golden / Silver Ticket</td><td>Forged Kerberos tickets</td></tr>
<tr><td>Token manipulation / UAC bypass</td><td>Local escalation</td></tr>
<tr><td>Weak service ACL abuse</td><td>Replace binary → run as SYSTEM</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="d11-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Dựng graph source→target theo SMB/RDP/WMI/WinRM và logon account.</li>
<li>Correlate network với 4624 type, 4648, 4672, 4688, 4769, 7045 và EDR.</li>
<li>Xác định credential technique, privilege boundary và offensive-tool artefact; scope tiếp.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>ADMIN$, service/task creation, remote process, NTLM/Kerberos ticket anomaly.</li>
<li>Burst east-west, same account many hosts, token/UAC/service ACL abuse.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Query account+LogonId/ProcessGuid; không nối chỉ bằng username.</li>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>BloodHound dùng để hiểu path nhưng output không chứng minh exploitation.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>4672 xuất hiện cho nhiều admin logon hợp lệ; bất thường là account thường nhận 4672 sau remote logon từ compromised host kèm service mới.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Event ID cần field/context, không dùng ID đơn lẻ.</li>
<li>PsExec hợp lệ của IT giống attacker.</li>
<li>Golden Ticket detection khó; cần ticket/domain context và DC logs.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> Microsoft Windows auditing; MITRE Lateral Movement/Privilege Escalation; Sysmon.</p>
</div>
</details>`;
