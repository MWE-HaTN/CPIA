/* Theory — D8 (Appendix D). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d8"]=`<h2>D8 — Exfiltration of Data</h2>

<div class="tier recall" id="d8-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Staging:</strong> <span class="en">Compressing data into an archive on one host before sending it out.</span><span class="vi">Nén dữ liệu thành một archive trên một máy trước khi gửi ra.</span></li>
<li><strong>Egress/ingress ratio:</strong> <span class="en">Clients normally download more than they upload — a reversed (upload-heavy) ratio is suspicious.</span><span class="vi">Client thường tải về nhiều hơn tải lên — tỉ lệ đảo ngược (upload nhiều) là đáng ngờ.</span></li>
<li><strong>Large sustained upload:</strong> <span class="en">A finance workstation uploading 20 GB to a personal cloud at 3 a.m. = likely exfiltration.</span><span class="vi">Một máy kế toán upload 20 GB tới cloud cá nhân lúc 3 giờ sáng = khả năng exfil.</span></li>
<li><strong>DNS exfiltration:</strong> <span class="en">High volume of long, random subdomain labels to one domain.</span><span class="vi">Nhiều nhãn subdomain dài, ngẫu nhiên tới một domain.</span></li>
<li><strong>Low and slow:</strong> <span class="en">Tiny amounts over a long time to stay under volume thresholds and blend in.</span><span class="vi">Từng chút một trong thời gian dài để giữ dưới ngưỡng khối lượng và hòa lẫn.</span></li>
<li><strong>Detection:</strong> <span class="en">Combine statistics/baselines, DLP or protocol signatures, and manual review of traffic and proxy/firewall/DNS logs; cover both obvious and covert channels.</span><span class="vi">Kết hợp thống kê/baseline, chữ ký DLP hoặc giao thức, và rà tay traffic cùng log proxy/firewall/DNS; phải bao phủ cả kênh lộ lẫn kênh ngầm.</span></li>
</ul></div></div>

<details class="tier concept" id="d8-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Vòng đời exfil &amp; staging</h4>
<p>Trước khi tuồn, kẻ tấn công thường <strong>staging</strong>: gom + nén dữ liệu (archive, đôi khi mã hóa/đặt mật khẩu) trên một host trung gian → sau đó gửi ra. Phát hiện staging: file archive lớn xuất hiện ở thư mục lạ, hoạt động nén bất thường.</p>

<h4>Dấu hiệu trên mạng</h4>
<p><strong>Tỉ lệ byte egress/ingress</strong>: client bình thường <em>download &gt; upload</em>; nếu một host <em>upload nhiều bất thường</em> → cờ đỏ. <strong>Upload lớn, kéo dài</strong> tới đích lạ (cloud cá nhân, host hiếm), nhất là ngoài giờ. <strong>DNS exfil</strong>: nhiều subdomain dài ngẫu nhiên (dữ liệu mã hóa) tới một domain. <strong>Low and slow</strong>: tuồn từng ít để dưới ngưỡng cảnh báo — khó bắt, cần phân tích xu hướng dài hạn.</p>

<h4>Phân biệt với bình thường</h4>
<p>Backup/đồng bộ cloud hợp lệ cũng upload lớn — phân biệt bằng <em>đích</em> (dịch vụ được duyệt vs lạ), <em>tài khoản/giờ giấc</em>, và việc có khớp chính sách không. Đối chiếu DLP/proxy/firewall logs.</p>

<h4>Ba cách phát hiện bổ trợ nhau</h4>
<p><strong>Thống kê</strong> bắt lệch baseline (tỉ lệ byte, volume, thời điểm, low-and-slow); <strong>signature/DLP</strong> bắt mẫu dữ liệu hoặc giao thức đã biết; <strong>rà tay traffic và log</strong> xác nhận ngữ cảnh, đích và tài khoản. Dùng cùng nhau để nhận diện cả exfil công khai lẫn covert trên nhiều giao thức.</p>
</div></details>

<details class="tier reference" id="d8-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Exfiltration indicators</h4>
<div class="table-wrap"><table>
<tr><th>Indicator</th><th>Meaning</th></tr>
<tr><td>Reversed egress/ingress ratio</td><td>Upload-heavy = suspicious</td></tr>
<tr><td>Large sustained outbound transfer</td><td>Bulk exfil to unfamiliar host</td></tr>
<tr><td>Long random DNS subdomains</td><td>DNS exfiltration</td></tr>
<tr><td>Archive staging on a host</td><td>Pre-exfil collection</td></tr>
<tr><td>Low-and-slow trickle</td><td>Evades volume thresholds</td></tr>
</table></div>

<h4>Channels</h4>
<div class="table-wrap"><table>
<tr><th>Channel</th><th>Example</th></tr>
<tr><td>HTTPS upload</td><td>To cloud storage / paste site</td></tr>
<tr><td>DNS</td><td>Encoded in subdomains</td></tr>
<tr><td>Over C2</td><td>Exfil within the C2 channel</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="d8-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Tìm staging trên host rồi phân tích outbound volume/direction/destination/time.</li>
<li>Kết hợp DLP/signature, statistical baseline và manual session/log review.</li>
<li>Chứng minh dữ liệu rời boundary, xác định loại/khối lượng và account/process.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Archive/encryption command, large new file, cloud client, USB write.</li>
<li>Proxy upload bytes, firewall flow, DNS long labels, SaaS audit và DLP match.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>So egress/ingress theo host và peer; query rare destination + off-hours + upload.</li>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Hash/sample payload chỉ khi policy cho phép.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>20 GB tới backup vendor theo schedule là benign; 200 MB ZIP chia nhỏ tới personal cloud lúc 03:00 từ máy HR đáng ngờ hơn dù volume thấp.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Volume không cho biết nội dung.</li>
<li>TLS/approved cloud tạo blind spot.</li>
<li>Staging không đồng nghĩa exfil thành công; cần network/SaaS evidence.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> MITRE ATT&amp;CK Exfiltration; NIST SP 800-94; DLP/proxy schemas.</p>
</div>
</details>`;
