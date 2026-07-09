/* Theory — D10 (Appendix D). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d10"]=`<h2>D10 — Reconnaissance</h2>

<div class="tier recall" id="d10-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Port scan:</strong> <span class="en">One source IP hitting many ports across many hosts in seconds = scanning/recon.</span><span class="vi">Một IP nguồn quét nhiều cổng trên nhiều host trong vài giây = quét/trinh sát.</span></li>
<li><strong>Ping sweep:</strong> <span class="en">ICMP echo to every host in a /24 = host discovery.</span><span class="vi">ICMP echo tới mọi host trong một /24 = phát hiện host.</span></li>
<li><strong>Scan types:</strong> <span class="en">SYN/half-open (-sS, stealthier) vs connect (-sT, completes handshake → often logged by apps); XMAS sets FIN/PSH/URG.</span><span class="vi">SYN/half-open (-sS, kín hơn) vs connect (-sT, hoàn tất handshake → app hay log); XMAS đặt cờ FIN/PSH/URG.</span></li>
<li><strong>Internal recon:</strong> <span class="en">After a foothold: enumerating AD users/shares, pinging internal subnets, bulk LDAP queries to a DC.</span><span class="vi">Sau khi có chỗ đứng: liệt kê user/share AD, ping subnet nội bộ, truy vấn LDAP hàng loạt tới DC.</span></li>
<li><strong>External (passive) recon:</strong> <span class="en">WHOIS, public job posts, the company website — no contact with internal hosts.</span><span class="vi">WHOIS, tin tuyển dụng công khai, website công ty — không chạm host nội bộ.</span></li>
<li><strong>Detection:</strong> <span class="en">Use statistical fan-out/rate, scan signatures and manual traffic/log review across internal and perimeter telemetry.</span><span class="vi">Dùng thống kê fan-out/tần suất, chữ ký scan và rà tay traffic/log trên cả telemetry nội bộ lẫn biên mạng.</span></li>
</ul></div></div>

<details class="tier concept" id="d10-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Nhận diện quét/trinh sát</h4>
<p>Dấu hiệu thống kê: <strong>một nguồn → nhiều đích/cổng trong thời gian ngắn</strong>. <strong>Port scan</strong> (quét cổng để tìm dịch vụ mở), <strong>ping sweep</strong> (ICMP tới cả dải để tìm host sống), <strong>service/version enumeration</strong>. Các scan thất bại tạo nhiều RST/ICMP unreachable — mẫu dễ nhận.</p>

<h4>Loại scan &amp; khả năng bị log</h4>
<p><strong>SYN/half-open (-sS)</strong>: gửi SYN, nhận SYN-ACK rồi RST (không hoàn tất) → kín hơn, app ít log. <strong>Connect (-sT)</strong>: hoàn tất bắt tay → <em>ứng dụng thường ghi log</em> kết nối. <strong>XMAS scan</strong>: đặt cờ FIN/PSH/URG; cổng đóng trả RST, cổng mở im lặng (theo stack tuân chuẩn). Hiểu khác biệt giúp đoán kẻ tấn công đang dùng kỹ thuật nào và nơi tìm dấu vết.</p>

<h4>Internal vs external recon</h4>
<p><strong>External</strong> (trước khi vào): chủ yếu passive — WHOIS, OSINT, website, job post (xem Appendix C). <strong>Internal</strong> (sau khi có foothold): liệt kê AD (user/group/share), ping subnet, <strong>LDAP query hàng loạt tới DC</strong>, BloodHound — để tìm đường lateral movement và mục tiêu giá trị.</p>
</div></details>

<details class="tier reference" id="d10-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Recon indicators</h4>
<div class="table-wrap"><table>
<tr><th>Observation</th><th>Activity</th></tr>
<tr><td>One IP → many ports/hosts fast</td><td>Port/network scan</td></tr>
<tr><td>ICMP echo to a whole /24</td><td>Ping sweep (host discovery)</td></tr>
<tr><td>Bulk LDAP to a DC</td><td>Internal AD reconnaissance</td></tr>
<tr><td>WHOIS / job posts / website</td><td>External passive recon</td></tr>
</table></div>

<h4>nmap scan types</h4>
<div class="table-wrap"><table>
<tr><th>Scan</th><th>Flags / behaviour</th><th>Logged?</th></tr>
<tr><td>SYN / half-open (-sS)</td><td>SYN → SYN-ACK → RST</td><td>Often not by app</td></tr>
<tr><td>Connect (-sT)</td><td>Full 3-way handshake</td><td>Often by app</td></tr>
<tr><td>XMAS</td><td>FIN+PSH+URG set</td><td>Closed→RST, open→silent</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="d10-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Đo fan-out/fan-in, port diversity, rate và failure ratio; tách external/internal.</li>
<li>Nhận diện SYN/connect/UDP/ICMP/service/AD enumeration.</li>
<li>Map source process/user và hoạt động tiếp theo để phân biệt admin/scanner/actor.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>One-to-many SYN/RST, ICMP sweep, LDAP burst, share/user enumeration.</li>
<li>Firewall/IDS, DC LDAP, EDR command line và scanner schedule.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>
<code>tshark -Y "tcp.flags.syn==1 &amp;&amp; tcp.flags.ack==0"</code>
</li>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Baseline approved vulnerability scanners.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>SCCM/vulnerability scanner fan-out cao nhưng có owner/schedule; workstation thường chạy <code>net group /domain</code> rồi SMB nhiều host là internal recon đáng ngờ.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Slow scan né rate threshold.</li>
<li>NAT che nhiều external scanners sau một IP.</li>
<li>Passive OSINT không xuất hiện trong network log nội bộ.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> MITRE Discovery/Reconnaissance; Nmap documentation; IDS guidance.</p>
</div>
</details>`;
