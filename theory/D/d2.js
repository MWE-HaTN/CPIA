/* Theory — D2 (Appendix D). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d2"]=`<h2>D2 — Data Sources &amp; Network Log Sources</h2>

<div class="tier recall" id="d2-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Proxy logs:</strong> <span class="en">Can record the FULL URL a user visited (path), even over HTTPS via the proxy.</span><span class="vi">Có thể ghi URL ĐẦY ĐỦ (cả path) người dùng truy cập, kể cả HTTPS qua proxy.</span></li>
<li><strong>DNS logs:</strong> <span class="en">Show that a client queried/resolved a domain; they do not by themselves prove a subsequent connection to that destination.</span><span class="vi">Cho biết client đã truy vấn/phân giải domain; riêng DNS log không chứng minh client đã kết nối tới đích sau đó.</span></li>
<li><strong>Firewall logs:</strong> <span class="en">Connection records (IP/port/allow-deny) — endpoints, not full URL.</span><span class="vi">Bản ghi kết nối (IP/port/cho-chặn) — đầu cuối, không phải URL đầy đủ.</span></li>
<li><strong>NAT + DHCP:</strong> <span class="en">Correlate to resolve a public IP back to the specific internal workstation behind NAT.</span><span class="vi">Tương quan để truy một IP public về đúng máy trạm nội bộ sau NAT.</span></li>
<li><strong>Windows event logs:</strong> <span class="en">4624 logon, 4688 process, 4672 priv, 4769 Kerberos, 1102 cleared.</span><span class="vi">4624 logon, 4688 process, 4672 priv, 4769 Kerberos, 1102 bị xóa.</span></li>
<li><strong>O365 Unified Audit Log:</strong> <span class="en">Cloud mailbox access, sign-ins, sharing and admin actions.</span><span class="vi">Truy cập mailbox cloud, đăng nhập, chia sẻ và thao tác admin.</span></li>
<li><strong>Complete source set:</strong> <span class="en">Also consider syslog, email/web/AV/domain/database logs and browser/internet history; no single source gives the whole picture.</span><span class="vi">Cũng phải xét syslog, log email/web/AV/domain/database và lịch sử trình duyệt/internet; không nguồn đơn lẻ nào cho toàn bộ bức tranh.</span></li>
<li><strong>SIEM:</strong> <span class="en">Centralises sources to enable cross-source correlation on a common timeline.</span><span class="vi">Tập trung các nguồn để tương quan đa nguồn trên một timeline chung.</span></li>
</ul></div></div>

<details class="tier concept" id="d2-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Mỗi nguồn log cho biết gì (chọn đúng nguồn)</h4>
<p>Câu hỏi D2 thường là "log nào BEST để xác nhận X". Nắm <em>điểm mạnh từng nguồn</em>:</p>
<ul>
<li><strong>Proxy</strong>: URL đầy đủ (path) — biết chính xác trang/đường dẫn đã truy cập.</li>
<li><strong>DNS</strong>: tên miền đã được truy vấn/phân giải — vẫn thấy được dấu vết tên miền khi phiên ứng dụng mã hóa, nhưng phải đối chiếu proxy/firewall/endpoint để xác nhận kết nối tiếp theo.</li>
<li><strong>Firewall</strong>: IP/port/allow-deny — đầu cuối kết nối, không có path.</li>
<li><strong>VPN concentrator</strong>: tài khoản nào kết nối từ xa, từ IP nào, khi nào.</li>
<li><strong>DHCP</strong>: ánh xạ IP ↔ máy theo thời gian (kết hợp NAT để truy nguyên qua NAT).</li>
<li><strong>O365 Unified</strong>: hoạt động mailbox/đăng nhập/chia sẻ cloud.</li>
<li><strong>Syslog</strong>: cơ chế chuyển sự kiện từ thiết bị Unix/Linux và thiết bị mạng về nơi tập trung; độ chi tiết phụ thuộc facility/severity và cấu hình nguồn.</li>
<li><strong>Email / web server / AV</strong>: luồng thư và message ID; request/response vào dịch vụ công khai; phát hiện, xử lý và quarantine của endpoint.</li>
<li><strong>Domain / database</strong>: xác thực và thay đổi trong AD/domain; truy vấn, đăng nhập và thay đổi dữ liệu nếu database auditing đã bật.</li>
<li><strong>Internet/browser history</strong>: URL, thời điểm, download và cache phía người dùng; có thể bị xóa hoặc ở chế độ private nên phải đối chiếu nguồn khác.</li>
</ul>

<h4>Tương quan đa nguồn &amp; SIEM</h4>
<p>Một sự cố trải nhiều nguồn; sức mạnh lớn nhất là <strong>tương quan</strong> chúng trên một <strong>timeline chung (UTC)</strong> thay vì đọc lẻ một nguồn. <strong>SIEM</strong> gom log tập trung để làm việc này. Lưu ý đồng bộ thời gian (NTP) giữa các nguồn để tương quan đúng.</p>

<h4>Sysmon &amp; làm giàu endpoint</h4>
<p><strong>Sysmon</strong> bổ sung cho log Windows mặc định: ghi rich telemetry về tạo tiến trình (kèm hash, command line), kết nối mạng, tạo file — rất giá trị khi điều tra host.</p>
</div></details>

<details class="tier reference" id="d2-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Log sources &amp; what they answer</h4>
<div class="table-wrap"><table>
<tr><th>Source</th><th>Best for</th></tr>
<tr><td>Proxy logs</td><td>Full URLs / paths visited</td></tr>
<tr><td>DNS logs</td><td>Domains queried/resolved; correlate with connection/endpoint telemetry for later contact</td></tr>
<tr><td>Firewall logs</td><td>Connections: IP/port/allow-deny</td></tr>
<tr><td>VPN logs</td><td>Remote account, source IP, time</td></tr>
<tr><td>DHCP logs</td><td>IP ↔ host mapping over time</td></tr>
<tr><td>Web server logs</td><td>Requests to your public services (attacks)</td></tr>
<tr><td>Email logs</td><td>Mail flow, sender/recipient</td></tr>
<tr><td>AV logs</td><td>Detections / quarantines</td></tr>
<tr><td>Syslog</td><td>Central device/Unix events (facility, severity, message)</td></tr>
<tr><td>Domain / AD logs</td><td>Authentication, account and directory changes</td></tr>
<tr><td>Database logs</td><td>Logins, queries and data changes when auditing is enabled</td></tr>
<tr><td>Internet / browser history</td><td>User-side URLs, downloads, times and cached content</td></tr>
<tr><td>O365 Unified Audit</td><td>Cloud mailbox/sign-in/admin actions</td></tr>
<tr><td>Windows event logs</td><td>Logon/process/privilege (4624/4688/4672…)</td></tr>
</table></div>

<h4>Common attribution combo</h4>
<div class="table-wrap"><table>
<tr><th>Question</th><th>Sources to correlate</th></tr>
<tr><td>Public IP → internal host (NAT)</td><td>NAT/translation + DHCP logs</td></tr>
<tr><td>Was C2 domain contacted?</td><td>DNS + proxy logs</td></tr>
<tr><td>Which URL (path) over HTTPS?</td><td>Proxy logs</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="d2-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Lập source matrix: câu hỏi→nguồn→field→retention→owner→timezone.</li>
<li>Chuẩn hóa UTC/identity nhưng giữ raw event; correlate bằng IP+port+time, user, host, message/process ID.</li>
<li>Đánh giá logging gap, NTP drift, parsing loss và retention trước khi kết luận absence.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Proxy URL/status/user; DNS qname/rcode; firewall 5-tuple/action; DHCP lease; NAT translation.</li>
<li>Windows/Sysmon process/logon; mail Message-ID; O365 operation; DB query/audit; browser history.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>SIEM join theo cửa sổ thời gian có tolerance; lưu query và result ID.</li>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Test parser bằng event mẫu, so raw count với indexed count.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Public IP cần NAT public-port+time để về private IP, DHCP để về host, rồi 4624/EDR để về user; bỏ port hoặc timezone dễ gán nhầm.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>No log không có nghĩa no event.</li>
<li>Proxy có full URL HTTPS chỉ khi client dùng proxy/inspection phù hợp.</li>
<li>DHCP IP→host không chứng minh user đang điều khiển host.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> NIST SP 800-92; Microsoft audit/Sysmon documentation; vendor log schemas.</p>
</div>
</details>`;
