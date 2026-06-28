/* Theory — B4 (Appendix B). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["b4"]=`<h2>B4 — OS Fingerprinting</h2><ul>

<li><strong>Passive fingerprinting:</strong> <span class="en">Infer OS without probing, using TTL, TCP window size, TCP options, DHCP options, User-Agent, SMB banners, and p0f-style signatures.</span><span class="vi">Suy đoán OS mà không gửi thăm dò, dựa trên TTL, kích thước TCP window, tùy chọn TCP, tùy chọn DHCP, User-Agent, banner SMB và chữ ký kiểu p0f.</span></li>

<li><strong>Why passive:</strong> <span class="en">Lower risk of alerting attacker or changing environment than active scanning.</span><span class="vi">Ít rủi ro cảnh báo kẻ tấn công hoặc làm thay đổi môi trường hơn so với quét chủ động.</span></li>

<li><strong>Limitations:</strong> <span class="en">NAT, proxies, load balancers, VPNs, custom stacks, and middleboxes can distort fingerprints.</span><span class="vi">NAT, proxy, load balancer, VPN, stack tùy chỉnh và thiết bị trung gian có thể làm sai lệch dấu vân tay.</span></li>

</ul><div class="table-wrap"><table><tr><th>Signal</th><th>Typical clue</th></tr><tr><td>TTL 128</td><td>Often Windows</td></tr><tr><td>TTL 64</td><td>Often Linux / Unix</td></tr><tr><td>SMB negotiation</td><td>Windows version family</td></tr><tr><td>DHCP option order</td><td>Client OS fingerprint</td></tr><tr><td>User-Agent</td><td>Browser / OS but easily spoofed</td></tr></table></div>

<p class="sub-heading">Passive OS Fingerprinting — Concept</p>

<p><span class="en">Passive fingerprinting identifies the OS of a remote host by analysing characteristics of its <strong>observed network traffic</strong> — without sending any probes. Completely invisible to the target.</span><span class="vi">Fingerprinting thụ động xác định OS của host từ xa bằng cách phân tích đặc điểm <strong>lưu lượng mạng quan sát được</strong> — không gửi bất kỳ thăm dò nào. Hoàn toàn vô hình với mục tiêu.</span></p>

<h3>Key Fingerprinting Indicators</h3>

<div class="table-wrap"><table>

<tr><th>Indicator</th><th>Windows</th><th>Linux</th><th>macOS</th><th>Notes</th></tr>

<tr><td>Default TTL</td><td>128</td><td>64</td><td>64</td><td>Decrements 1 per hop. Add observed hops to get original TTL.</td></tr>

<tr><td>TCP Window Size (SYN)</td><td>8192 (old) / 65535 (modern)</td><td>5840 / 29200</td><td>65535</td><td>Initial window in first SYN packet</td></tr>

<tr><td>TCP Options order</td><td>MSS, NOP, WS, NOP, NOP, SACK</td><td>MSS, SACK, TS, NOP, WS</td><td>MSS, NOP, WS, NOP, NOP, TS, SACK</td><td>Combination is OS-distinctive</td></tr>

<tr><td>IP ID field</td><td>Sequential (older) / Random (Win7+)</td><td>Random (0 for fragments)</td><td>Random</td><td>Sequential = older Windows</td></tr>

</table></div>

<h3>Tools</h3>

<ul>

<li><strong>p0f:</strong> <span class="en">Passive-only tool. Listens on interface or parses pcap. Identifies OS from observed packets. Cannot be detected by target.</span><span class="vi">Công cụ chỉ thụ động. Lắng nghe trên interface hoặc phân tích pcap. Xác định OS từ gói tin quan sát được. Không thể bị mục tiêu phát hiện.</span></li>

<li><strong>NetworkMiner:</strong> <span class="en">Parses pcap and identifies OS, open ports, credentials from captured traffic.</span><span class="vi">Phân tích pcap và xác định OS, cổng mở, thông tin xác thực từ lưu lượng đã bắt.</span></li>

<li><strong>Wireshark:</strong> <span class="en">Manual inspection — check IP TTL field, TCP window size in SYN, TCP options.</span><span class="vi">Kiểm tra thủ công — xem trường TTL trong IP, kích thước TCP window trong gói SYN, tùy chọn TCP.</span></li>

<li><strong>TTL calculation example:</strong> <span class="en">Observed TTL=118 → likely original 128 (Windows) with 10 hops. Observed TTL=54 → likely original 64 (Linux) with 10 hops.</span><span class="vi">TTL quan sát=118 → gốc ban đầu có thể là 128 (Windows) với 10 chặng. TTL=54 → gốc 64 (Linux) với 10 chặng.</span></li>

</ul>

<h3>Limitations</h3>

<ul>

<li><span class="en">VPN endpoints mask true OS — fingerprint shows VPN appliance OS, not endpoint</span><span class="vi">VPN endpoint che giấu OS thật — dấu vân tay cho thấy OS của thiết bị VPN, không phải endpoint</span></li>

<li><span class="en">NAT / firewall may modify TTL and other fields</span><span class="vi">NAT / tường lửa có thể thay đổi TTL và các trường khác</span></li>

<li><span class="en">Hardened systems may randomise fingerprint indicators</span><span class="vi">Hệ thống đã tăng cường bảo mật có thể ngẫu nhiên hóa các chỉ số dấu vân tay</span></li>

<li><span class="en">Active fingerprinting (nmap -O) is more accurate but generates detectable traffic</span><span class="vi">Fingerprinting chủ động (nmap -O) chính xác hơn nhưng tạo ra lưu lượng có thể bị phát hiện</span></li>

</ul>


<h3 class="qz-theory"><span class="en">OS Fingerprinting — Passive vs Active</span><span class="vi">Nhận dạng OS — Thụ động vs Chủ động</span></h3>
<p><span class="en"><strong>Passive</strong> (e.g. p0f) only observes existing traffic and infers the OS from TCP/IP stack quirks — default TTL, TCP window size, option ordering — so it is stealthy. <strong>Active</strong> (nmap -O) sends crafted probes and is more accurate but detectable/loggable.</span><span class="vi"><strong>Thụ động</strong> (vd p0f) chỉ quan sát lưu lượng có sẵn và suy ra OS từ đặc thù stack TCP/IP — TTL mặc định, TCP window size, thứ tự option — nên ẩn. <strong>Chủ động</strong> (nmap -O) gửi gói thăm dò, chính xác hơn nhưng bị phát hiện/ghi log.</span></p>
<div class="table-wrap"><table><thead><tr><th><span class="en">Default TTL</span><span class="vi">TTL mặc định</span></th><th>OS</th></tr></thead><tbody>
<tr><td>64</td><td>Linux / Unix / macOS</td></tr><tr><td>128</td><td>Windows</td></tr><tr><td>255</td><td><span class="en">Network gear (Cisco), Solaris</span><span class="vi">Thiết bị mạng (Cisco), Solaris</span></td></tr></tbody></table></div>
<p><span class="en">TTL decrements per hop, so an observed 60 implies ~4 hops from a 64-default host.</span><span class="vi">TTL giảm mỗi hop, nên quan sát 60 ngụ ý ~4 hop từ host mặc định 64.</span></p>
`;
