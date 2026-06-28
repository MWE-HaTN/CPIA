/* Theory — B1 (Appendix B). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["b1"]=`<h2>B1 — IP Protocols</h2>

<h3><span class="en">Common ports reference</span><span class="vi">Bảng tham chiếu cổng thông dụng</span></h3>

<div class="table-wrap"><table><tr><th>Port</th><th>Protocol</th><th>Service</th><th>Security relevance</th></tr><tr><td>20/21</td><td>TCP</td><td>FTP</td><td>Plaintext credentials, file transfer, possible exfiltration.</td></tr><tr><td>22</td><td>TCP</td><td>SSH</td><td>Remote admin; check brute force and unauthorized keys.</td></tr><tr><td>25</td><td>TCP</td><td>SMTP</td><td>Email delivery, phishing path, open relay abuse.</td></tr><tr><td>53</td><td>UDP / TCP</td><td>DNS</td><td>Tunneling, DGA, fast-flux, suspicious TXT queries.</td></tr><tr><td>80/443</td><td>TCP</td><td>HTTP / HTTPS</td><td>Web traffic and common C2 channel.</td></tr><tr><td>110/995</td><td>TCP</td><td>POP3 / POP3S</td><td>Email retrieval, credential exposure if unencrypted.</td></tr><tr><td>143/993</td><td>TCP</td><td>IMAP / IMAPS</td><td>Mailbox access and compromise investigation.</td></tr><tr><td>123</td><td>UDP</td><td>NTP</td><td>Time sync; timestamp reliability depends on it.</td></tr><tr><td>135/139/445</td><td>TCP</td><td>RPC / NetBIOS / SMB</td><td>Lateral movement, file shares, ransomware spread.</td></tr><tr><td>3389</td><td>TCP</td><td>RDP</td><td>Remote interactive logons and brute force target.</td></tr><tr><td>5985/5986</td><td>TCP</td><td>WinRM</td><td>Remote PowerShell administration and lateral movement.</td></tr></table></div>

<div class="table-wrap"><table><tr><th>Protocol</th><th>Purpose</th><th>Investigation relevance</th></tr><tr><td>IPv4 / IPv6</td><td>Network addressing</td><td>IPv6 may be enabled but unmonitored; check dual-stack blind spots.</td></tr><tr><td>TCP</td><td>Reliable connection-oriented transport</td><td>Flags and handshakes help identify scans, sessions, resets, and C2.</td></tr><tr><td>UDP</td><td>Connectionless transport</td><td>Common for DNS, VPN, VoIP, beaconing, and tunneling.</td></tr><tr><td>ICMP</td><td>Diagnostics / control</td><td>Ping sweeps and covert ICMP tunnels.</td></tr><tr><td>HTTP / HTTPS</td><td>Web traffic</td><td>Most common malware C2 because it blends into normal traffic.</td></tr><tr><td>SMTP</td><td>Email transfer</td><td>Phishing delivery and email-based C2.</td></tr><tr><td>DNS</td><td>Name resolution</td><td>DGA, tunneling, fast-flux, suspicious TXT / subdomain queries.</td></tr><tr><td>IRC</td><td>Legacy chat protocol</td><td>Classic botnet C2 pattern.</td></tr><tr><td>DHCP</td><td>Dynamic IP allocation</td><td>Map IP address to host / MAC at a specific time.</td></tr><tr><td>FTP</td><td>File transfer</td><td>Plaintext credentials and exfiltration path.</td></tr><tr><td>SMB</td><td>Windows file sharing</td><td>Lateral movement, ransomware spread, file access evidence.</td></tr><tr><td>SNMP</td><td>Network management</td><td>Weak community strings leak device details.</td></tr></table></div><ul>

<li><span class="en">Know web browser / server flow: DNS resolution → TCP connection → TLS handshake for HTTPS → HTTP request / response.</span><span class="vi">Nắm luồng trình duyệt / web server: phân giải DNS → kết nối TCP → TLS handshake (với HTTPS) → HTTP request / response.</span></li>

<li><span class="en">Know email flow: user agent → submission server → mail transfer agents → recipient mailbox; Received headers record hops.</span><span class="vi">Nắm luồng email: user agent → máy chủ gửi → mail transfer agents → hộp thư người nhận; header Received ghi lại từng bước chặng.</span></li>

</ul>

<div class="callout info"><strong>DNS port 53 — UDP vs TCP</strong><p><span class="en">DNS queries use <strong>UDP</strong>. Zone transfers (AXFR) use <strong>TCP</strong>. Responses &gt;512 bytes also fall back to TCP (unless EDNS0 is negotiated, which allows larger UDP payloads). This is why DNS C2 bypasses firewalls — attackers exploit UDP port 53 because most firewalls allow outbound DNS unconditionally.</span><span class="vi">Truy vấn DNS dùng <strong>UDP</strong>. Zone transfer (AXFR) dùng <strong>TCP</strong>. Response &gt;512 byte cũng chuyển sang TCP (trừ khi EDNS0 được thương lượng, cho phép UDP payload lớn hơn). Đây là lý do DNS C2 vượt được tường lửa — kẻ tấn công khai thác UDP port 53 vì hầu hết tường lửa đều cho phép DNS ra ngoài vô điều kiện.</span></p></div>

<div class="callout info"><strong>SMTP port 587 vs 25</strong><p><span class="en">Port <strong>587</strong> = submission (client → server, requires authentication). Port <strong>25</strong> = server-to-server relay (no auth required). Distinguish these when analysing email routing and investigating phishing / spam origin.</span><span class="vi">Port <strong>587</strong> = gửi thư (client → server, cần xác thực). Port <strong>25</strong> = chuyển tiếp giữa các server (không cần auth). Phân biệt hai port này khi phân tích định tuyến email và điều tra nguồn gốc phishing / spam.</span></p></div>

<h3>TCP Flags — Exam-Relevant Quick Table</h3>

<div class="table-wrap"><table>

<tr><th>Flag</th><th>Purpose</th><th>Security relevance</th></tr>

<tr><td>SYN</td><td>Start TCP connection</td><td>SYN scans and SYN floods.</td></tr>

<tr><td>ACK</td><td>Acknowledge data</td><td>ACK scans and firewall behaviour testing.</td></tr>

<tr><td>FIN</td><td>Graceful session close</td><td>FIN scans may bypass simple filters.</td></tr>

<tr><td>RST</td><td>Reset connection</td><td>Closed port response or session disruption.</td></tr>

<tr><td>PSH</td><td>Push buffered data</td><td>Seen in normal traffic and payload delivery.</td></tr>

<tr><td>URG</td><td>Urgent pointer</td><td>Rare in normal traffic; unusual combinations may indicate scanning.</td></tr>

<tr><td>NULL</td><td>No flags set</td><td>NULL scan technique.</td></tr>

<tr><td>XMAS</td><td>FIN + PSH + URG</td><td>Stealth scan pattern.</td></tr>

</table></div>

<h3>IPv4 vs IPv6</h3>

<div class="table-wrap"><table>

<tr><th>Feature</th><th>IPv4</th><th>IPv6</th><th>Investigation relevance</th></tr>

<tr><td>Address size</td><td>32-bit (e.g., 192.168.1.1)</td><td>128-bit (e.g., 2001:db8::1)</td><td>IPv6 addresses are harder to pattern-match in logs.</td></tr>

<tr><td>Header size</td><td>20-60 bytes, variable</td><td>40 bytes fixed + extension headers</td><td>IPv6 extension headers can be abused to evade filters.</td></tr>

<tr><td>Fragmentation</td><td>Routers and sender can fragment</td><td>Only sender fragments</td><td>Fragmentation-based evasion differs between versions.</td></tr>

<tr><td>ARP</td><td>Used for MAC resolution</td><td>Replaced by NDP (ICMPv6)</td><td>NDP spoofing is the IPv6 equivalent of ARP spoofing.</td></tr>

<tr><td>Security</td><td>IPsec optional</td><td>IPsec designed-in (but rarely enforced)</td><td>Do not assume IPv6 is more secure in practice.</td></tr>

<tr><td>Autoconfiguration</td><td>DHCP required</td><td>SLAAC + optional DHCPv6</td><td>SLAAC can assign addresses without central logging.</td></tr>

<tr><td>Dual-stack risk</td><td>N / A</td><td>Hosts may have both IPv4 and IPv6</td><td>IPv6 traffic may bypass IPv4-only security controls and monitoring.</td></tr>

</table></div>

<div class="callout warning"><strong>Exam tip:</strong> <span class="en">IPv6 may be enabled but unmonitored. Always check for dual-stack blind spots — an attacker can use IPv6 to bypass IPv4-only firewall rules and IDS signatures.</span><span class="vi">IPv6 có thể đã được bật nhưng chưa được giám sát. Luôn kiểm tra điểm mù dual-stack — kẻ tấn công có thể dùng IPv6 để vượt qua quy tắc tường lửa và chữ ký IDS chỉ dùng IPv4.</span></div>

<h3>ARP and ARP Attacks</h3>

<p><span class="en">Address Resolution Protocol maps IP addresses to MAC addresses on local networks. It is stateless and trust-based, making it vulnerable to spoofing.</span><span class="vi">Giao thức ARP ánh xạ địa chỉ IP thành địa chỉ MAC trên mạng nội bộ. Giao thức này không trạng thái và dựa trên sự tin tưởng, nên dễ bị giả mạo.</span></p>

<div class="table-wrap"><table>

<tr><th>Attack</th><th>How it works</th><th>Detection</th></tr>

<tr><td>ARP spoofing / poisoning</td><td>Attacker sends forged ARP replies to associate their MAC with a victim's IP (typically the gateway).</td><td>Duplicate MAC for different IPs in ARP table; tools like arpwatch, XARP; unexpected MAC in switch CAM table.</td></tr>

<tr><td>ARP cache poisoning</td><td>Poisoned ARP entries redirect traffic through attacker for man-in-the-middle.</td><td>Network latency increase; unexpected traffic paths; IDS alerts for ARP anomalies.</td></tr>

<tr><td>Gratuitous ARP abuse</td><td>Unsolicited ARP replies to update all hosts' caches without request.</td><td>Gratuitous ARP from unexpected sources; ARP monitoring tools.</td></tr>

</table></div>

<h3>UDP Amplification Attacks</h3>

<p><span class="en">Attackers send small requests with spoofed source IP to amplifiers, which respond with much larger replies to the victim.</span><span class="vi">Kẻ tấn công gửi yêu cầu nhỏ với IP nguồn giả mạo đến các máy khuếch đại, chúng sẽ phản hồi với các reply lớn hơn nhiều đến nạn nhân.</span></p>

<div class="table-wrap"><table>

<tr><th>Protocol</th><th>Amplification factor</th><th>Port</th><th>Indicator</th></tr>

<tr><td>DNS</td><td>28-54x</td><td>53 / UDP</td><td>Large DNS responses to non-authoritative queries; ANY or TXT record abuse.</td></tr>

<tr><td>NTP</td><td>556x</td><td>123 / UDP</td><td>monlist command responses from exposed NTP servers.</td></tr>

<tr><td>SSDP</td><td>30x</td><td>1900 / UDP</td><td>M-SEARCH responses to spoofed source; UPnP device abuse.</td></tr>

<tr><td>Memcached</td><td>10,000-51,000x</td><td>11211 / UDP</td><td>Large responses from exposed memcached instances.</td></tr>

<tr><td>CLDAP</td><td>56-70x</td><td>389 / UDP</td><td>Connectionless LDAP responses to spoofed requests.</td></tr>

</table></div>


<h3 class="qz-theory"><span class="en">Transport Protocols, Ports &amp; Common Services</span><span class="vi">Giao thức vận chuyển, cổng &amp; dịch vụ phổ biến</span></h3>
<p><span class="en"><strong>TCP</strong> is connection-oriented (handshake, sequencing, retransmission). <strong>UDP</strong> is connectionless with no delivery guarantee — fast and often abused for DNS-based C2/exfiltration. <strong>ICMP</strong> is a control protocol (no ports).</span><span class="vi"><strong>TCP</strong> hướng kết nối (bắt tay, sắp thứ tự, truyền lại). <strong>UDP</strong> không kết nối, không đảm bảo gửi tới — nhanh và thường bị lạm dụng cho C2/exfil qua DNS. <strong>ICMP</strong> là giao thức điều khiển (không có cổng).</span></p>
<ul>
<li><strong><span class="en">TCP handshake:</span><span class="vi">Bắt tay TCP:</span></strong> <code>SYN → SYN-ACK → ACK</code>. <span class="en">Graceful close uses FIN/ACK both ways; <code>RST</code> = abrupt reset/refused (closed port or abort).</span><span class="vi">Đóng êm dùng FIN/ACK hai chiều; <code>RST</code> = reset/từ chối đột ngột (cổng đóng hoặc hủy).</span></li>
<li><strong>DHCP:</strong> <code>Discover → Offer → Request → Acknowledge</code> (DORA).</li>
<li><strong>SMTP:</strong> <code>HELO/EHLO → MAIL FROM</code> (envelope sender) <code>→ RCPT TO → DATA → QUIT</code>. <span class="en">Envelope MAIL FROM can differ from the header From: — useful for spoofing analysis.</span><span class="vi">MAIL FROM ở envelope có thể khác header From: — hữu ích phân tích giả mạo.</span></li>
<li><strong>FTP:</strong> <span class="en">Control on 21; <em>active</em> mode opens an inbound data connection from server (TCP/20) back to client (firewall-unfriendly); <em>passive</em> mode has the client open both.</span><span class="vi">Điều khiển trên 21; chế độ <em>active</em> server mở kết nối dữ liệu vào từ TCP/20 về client (khó qua firewall); <em>passive</em> client mở cả hai.</span></li>
<li><strong>DNS:</strong> <span class="en">UDP/53 for normal queries; switches to TCP/53 for zone transfers (AXFR) and responses &gt;512 bytes.</span><span class="vi">UDP/53 cho truy vấn thường; chuyển TCP/53 cho zone transfer (AXFR) và phản hồi &gt;512 byte.</span></li>
<li><strong>IRC (6667):</strong> <span class="en">Classic botnet C2 channel.</span><span class="vi">Kênh C2 botnet kinh điển.</span> <strong>SNMP (UDP 161/162):</strong> <span class="en">Default community strings "public"/"private" act like passwords — disclosure/reconfig if unchanged.</span><span class="vi">Community string mặc định "public"/"private" như mật khẩu — lộ thông tin/cấu hình lại nếu không đổi.</span></li></ul>
<div class="table-wrap"><table><thead><tr><th><span class="en">Port</span><span class="vi">Cổng</span></th><th><span class="en">Service</span><span class="vi">Dịch vụ</span></th></tr></thead><tbody>
<tr><td>21 / 20</td><td>FTP control / data</td></tr><tr><td>22</td><td>SSH</td></tr><tr><td>23</td><td>Telnet</td></tr><tr><td>25</td><td>SMTP</td></tr><tr><td>53</td><td>DNS (UDP/TCP)</td></tr><tr><td>80 / 443</td><td>HTTP / HTTPS</td></tr><tr><td>445</td><td>SMB</td></tr><tr><td>6667</td><td>IRC</td></tr></tbody></table></div>
<h3><span class="en">ICMP Message Types &amp; IPv6</span><span class="vi">Loại thông điệp ICMP &amp; IPv6</span></h3>
<ul>
<li><span class="en">ICMP type 8/0 = echo request/reply (ping); type 3 = destination unreachable; type 11 = time exceeded — returned by routers when TTL hits 0, which <strong>traceroute</strong> relies on. Oversized/high-entropy echo payloads can hide ICMP tunnelling.</span><span class="vi">ICMP type 8/0 = echo request/reply (ping); type 3 = destination unreachable; type 11 = time exceeded — router trả về khi TTL=0, mà <strong>traceroute</strong> dựa vào. Payload echo quá lớn/entropy cao có thể giấu ICMP tunnelling.</span></li>
<li><span class="en"><strong>IPv6:</strong> 128-bit addresses, no broadcast (uses multicast + Neighbor Discovery/NDP instead of ARP). <code>fe80::/10</code> = link-local (local segment only). Watch dual-stack hosts leaking via unmonitored IPv6.</span><span class="vi"><strong>IPv6:</strong> địa chỉ 128-bit, không broadcast (dùng multicast + Neighbor Discovery/NDP thay ARP). <code>fe80::/10</code> = link-local (chỉ đoạn cục bộ). Chú ý host dual-stack rò qua IPv6 không được giám sát.</span></li></ul>
`;
