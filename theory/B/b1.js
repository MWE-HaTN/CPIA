/* Theory — B1 (Appendix B). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["b1"]=`<h2>B1 — IP Protocols</h2>

<div class="tier recall" id="b1-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>TCP vs UDP vs ICMP:</strong> <span class="en">TCP = connection-oriented, reliable (3-way handshake); UDP = connectionless, no guarantee; ICMP = control/error messages (no ports).</span><span class="vi">TCP = hướng kết nối, tin cậy (bắt tay 3 bước); UDP = phi kết nối, không bảo đảm; ICMP = thông điệp điều khiển/lỗi (không có cổng).</span></li>
<li><strong>TCP handshake / teardown:</strong> <span class="en">SYN → SYN-ACK → ACK to open; FIN/ACK both ways (four-way) to close; lone RST = abrupt reset/refused.</span><span class="vi">SYN → SYN-ACK → ACK để mở; FIN/ACK cả hai chiều (bốn bước) để đóng; chỉ RST = reset đột ngột/bị từ chối.</span></li>
<li><strong>IPv4 vs IPv6:</strong> <span class="en">IPv6 = 128-bit, no broadcast (uses NDP, not ARP); fe80:: = link-local.</span><span class="vi">IPv6 = 128-bit, không broadcast (dùng NDP thay ARP); fe80:: = link-local.</span></li>
<li><strong>Trojan app-layer protocols:</strong> <span class="en">TCP, UDP, HTTP[S], SMTP, DNS — malware blends C2 into these common protocols.</span><span class="vi">TCP, UDP, HTTP[S], SMTP, DNS — malware trộn C2 vào các giao thức phổ biến này.</span></li>
<li><strong>Web &amp; email flow:</strong> <span class="en">Browser↔server over HTTP/S (DNS resolve first, then TCP+TLS); email via SMTP (send) and IMAP/POP3 (retrieve).</span><span class="vi">Trình duyệt↔server qua HTTP/S (giải DNS trước, rồi TCP+TLS); email qua SMTP (gửi) và IMAP/POP3 (nhận).</span></li>
<li><strong>Know these too:</strong> <span class="en">IRC (legacy botnet C2), DHCP (DORA), FTP (active/passive), SMB (445), SNMP (community strings).</span><span class="vi">IRC (C2 botnet đời cũ), DHCP (DORA), FTP (active/passive), SMB (445), SNMP (community string).</span></li>
</ul></div></div>

<details class="tier concept" id="b1-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>TCP, UDP, ICMP</h4>
<p><strong>TCP</strong> hướng kết nối: bắt tay 3 bước (SYN/SYN-ACK/ACK), đảm bảo thứ tự + tin cậy; đóng bằng FIN/ACK hai chiều; cờ <strong>RST</strong> đơn lẻ = reset đột ngột hoặc bị từ chối. <strong>UDP</strong> phi kết nối, nhanh, không bảo đảm — bị lạm dụng cho C2/exfil qua DNS. <strong>ICMP</strong> mang thông điệp điều khiển/lỗi (không có cổng): echo (ping), Time Exceeded (traceroute, type 11), nhưng cũng bị dùng làm kênh ngầm (ICMP tunnelling).</p>

<h4>Cách web &amp; email hoạt động</h4>
<p><strong>Web</strong>: trình duyệt giải DNS tên miền → mở TCP tới server (443) → bắt tay TLS → gửi HTTP request → nhận response. <strong>Email</strong>: gửi qua <strong>SMTP</strong> (25/587) giữa các mail server (chuỗi Received header ghi đường đi); nhận về client qua <strong>IMAP</strong> (giữ trên server) hoặc <strong>POP3</strong> (tải về). Hiểu luồng này để đọc header và bắt bất thường.</p>

<h4>DNS dùng UDP hay TCP?</h4>
<p>DNS dùng <strong>UDP/53</strong> cho truy vấn thường; chuyển sang <strong>TCP/53</strong> cho <em>zone transfer (AXFR)</em> và phản hồi lớn hơn giới hạn UDP. (Chi tiết DNS xem C2.)</p>

<h4>Giao thức nền cần nắm</h4>
<p><strong>IRC</strong> (6667): kênh C2 botnet kinh điển — kết nối ra 6667 lặp lại là dấu hiệu. <strong>DHCP</strong>: gán IP theo trình tự <strong>DORA</strong> (Discover→Offer→Request→Acknowledge); log DHCP giúp ánh xạ IP↔máy. <strong>FTP</strong>: active mode server tự mở kết nối data ngược về client (khó qua firewall). <strong>SMB</strong> (445): chia sẻ file/lateral movement. <strong>SNMP</strong>: community string mặc định "public"/"private" như mật khẩu — lộ thông tin/cấu hình nếu không đổi.</p>
</div></details>

<details class="tier reference" id="b1-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Common ports / protocols</h4>
<div class="table-wrap"><table>
<tr><th>Port</th><th>Protocol</th><th>Note</th></tr>
<tr><td>20/21</td><td>FTP (data/control)</td><td>Active vs passive mode</td></tr>
<tr><td>22</td><td>SSH</td><td>Encrypted remote shell</td></tr>
<tr><td>23</td><td>Telnet</td><td>Cleartext (insecure)</td></tr>
<tr><td>25 / 587</td><td>SMTP</td><td>Sending email</td></tr>
<tr><td>53</td><td>DNS</td><td>UDP queries, TCP zone transfer</td></tr>
<tr><td>67/68</td><td>DHCP</td><td>DORA</td></tr>
<tr><td>80 / 443</td><td>HTTP / HTTPS</td><td>Web</td></tr>
<tr><td>110 / 143</td><td>POP3 / IMAP</td><td>Retrieving email</td></tr>
<tr><td>161</td><td>SNMP</td><td>Community strings</td></tr>
<tr><td>445</td><td>SMB</td><td>File sharing / lateral movement</td></tr>
<tr><td>3389</td><td>RDP</td><td>Remote desktop</td></tr>
<tr><td>6667</td><td>IRC</td><td>Legacy botnet C2</td></tr>
</table></div>

<h4>TCP flags &amp; handshake</h4>
<div class="table-wrap"><table>
<tr><th>Event</th><th>Flags</th></tr>
<tr><td>Open connection</td><td>SYN → SYN-ACK → ACK</td></tr>
<tr><td>Graceful close</td><td>FIN/ACK both directions (four-way)</td></tr>
<tr><td>Abrupt reset / refused</td><td>RST</td></tr>
</table></div>

<h4>IPv4 vs IPv6</h4>
<div class="table-wrap"><table>
<tr><th></th><th>IPv4</th><th>IPv6</th></tr>
<tr><td>Address size</td><td>32-bit</td><td>128-bit</td></tr>
<tr><td>Local discovery</td><td>ARP, broadcast</td><td>NDP (no broadcast)</td></tr>
<tr><td>Link-local</td><td>169.254.x</td><td>fe80::/10</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="b1-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Xác định layer và flow 5-tuple; kiểm tra encapsulation, direction và state.</li>
<li>Đọc IPv4/IPv6 header, TCP flags/sequence/ack/window, UDP length và ICMP type/code.</li>
<li>Reassemble stream, nhận diện protocol theo nội dung thay vì port; theo transaction DNS/HTTP/SMTP.</li>
<li>Đối chiếu packet với firewall, proxy, DNS và endpoint process.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>IPv4 TTL, ID, flags/fragment offset, protocol; IPv6 next-header/extension headers.</li>
<li>TCP SYN/SYN-ACK/ACK, FIN/RST, retransmission; UDP request/response; ICMP error chứa header gói gây lỗi.</li>
<li>HTTP method/status/Host/User-Agent; SMTP envelope/header; DNS qname/qtype/rcode.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>
<code>tshark -r file.pcap -Y "tcp.flags.syn==1"</code>
</li>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>
<code>tcpdump -nn -r file.pcap</code>; Wireshark Follow TCP Stream.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>TCP/443 không tự động là HTTPS: nếu payload bắt đầu bằng SSH banner hoặc TLS ClientHello không hợp lệ, cần nhận diện protocol thực và khả năng tunnel.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Port chỉ là convention; malware có thể dùng bất kỳ port.</li>
<li>NAT làm đổi địa chỉ/port; checksum offload có thể khiến capture trên host trông lỗi.</li>
<li>IPv6 không có header checksum và router không fragment; extension headers có thể gây blind spot.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> RFC 8200, 9293, 768, 792/4443; HTTP Semantics RFC 9110; DNS RFC 1034/1035.</p>
</div>
</details>`;
