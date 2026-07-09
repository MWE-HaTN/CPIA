/* Theory — B4 (Appendix B). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["b4"]=`<h2>B4 — OS Fingerprinting</h2>

<div class="tier recall" id="b4-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Passive fingerprinting:</strong> <span class="en">Infer the OS from TCP/IP stack quirks in captured traffic — WITHOUT sending anything (p0f).</span><span class="vi">Suy ra OS từ các đặc điểm stack TCP/IP trong lưu lượng đã bắt — MÀ KHÔNG gửi gì (p0f).</span></li>
<li><strong>Tell-tale fields:</strong> <span class="en">Initial TTL, TCP window size, and TCP option order/values differ per OS.</span><span class="vi">TTL khởi đầu, kích thước window TCP, và thứ tự/giá trị TCP option khác nhau theo OS.</span></li>
<li><strong>TTL guide:</strong> <span class="en">Initial TTL ~64 = Linux/Unix; ~128 = Windows; ~255 = many network devices (Cisco).</span><span class="vi">TTL khởi đầu ~64 = Linux/Unix; ~128 = Windows; ~255 = nhiều thiết bị mạng (Cisco).</span></li>
<li><strong>Passive vs active:</strong> <span class="en">Passive is stealthy (no packets, lower risk of alerting); active sends crafted probes and is detectable.</span><span class="vi">Thụ động kín đáo (không gửi gói, ít rủi ro cảnh báo); chủ động gửi probe được tạo riêng và bị phát hiện.</span></li>
</ul></div></div>

<details class="tier concept" id="b4-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Vì sao đoán được OS từ traffic</h4>
<p>Mỗi OS hiện thực stack TCP/IP hơi khác nhau: <strong>TTL khởi đầu</strong> (64/128/255), <strong>TCP window size</strong>, <strong>thứ tự và giá trị TCP options</strong> (MSS, window scale, SACK, timestamp), DF flag... Những "dấu vân tay" này lộ trong gói đã bắt → công cụ như <strong>p0f</strong> đối chiếu để đoán OS mà không cần gửi gì tới mục tiêu.</p>

<h4>Passive vs active fingerprinting</h4>
<p><strong>Passive</strong>: chỉ quan sát lưu lượng có sẵn → kín, ít rủi ro cảnh báo/đụng pháp lý. <strong>Active</strong>: gửi gói được tạo đặc biệt (nmap -O) và phân tích phản hồi → chính xác hơn nhưng <em>để lại dấu vết, mục tiêu ghi log được, có thể bị coi là trinh sát</em>. Trong forensic, ưu tiên passive trên dữ liệu đã thu.</p>

<h4>Lưu ý</h4>
<p>TTL quan sát được là sau khi đã trừ số hop, nên ước lượng TTL khởi đầu bằng cách làm tròn lên (vd thấy 57 → khởi đầu ~64). NAT/proxy/tường lửa có thể chuẩn hóa hoặc làm sai lệch các trường này, nên kết quả là <em>ước lượng</em>, cần đối chiếu.</p>
</div></details>

<details class="tier reference" id="b4-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Default initial TTL</h4>
<div class="table-wrap"><table>
<tr><th>Initial TTL</th><th>Likely OS</th></tr>
<tr><td>64</td><td>Linux / Unix / macOS</td></tr>
<tr><td>128</td><td>Windows</td></tr>
<tr><td>255</td><td>Cisco / network devices</td></tr>
</table></div>

<h4>Passive vs active</h4>
<div class="table-wrap"><table>
<tr><th></th><th>Passive (p0f)</th><th>Active (nmap -O)</th></tr>
<tr><td>Sends packets?</td><td>No</td><td>Yes (crafted probes)</td></tr>
<tr><td>Detectable?</td><td>No</td><td>Yes (logged)</td></tr>
<tr><td>Based on</td><td>TTL, window size, TCP options</td><td>Probe responses</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="b4-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Thu traffic đủ dài và đúng vị trí; tách server/client direction.</li>
<li>So TTL quan sát với initial TTL khả dĩ để ước lượng hop; đọc window, MSS, window scale, SACK và TCP option order.</li>
<li>Kết hợp DHCP option fingerprint, HTTP User-Agent và TLS fingerprint.</li>
<li>Đưa ra OS family + confidence, không khẳng định tuyệt đối.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>TTL, DF, IP ID behavior, TCP window/options/order.</li>
<li>DHCP option 55 ordering; SMB dialect; HTTP/TLS fingerprints.</li>
<li>NAT/load balancer/proxy path và hop count.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>p0f/Zeek để fingerprint thụ động; Wireshark fields <code>ip.ttl</code>, <code>tcp.options</code>.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>TTL 117 thường gợi initial 128 qua khoảng 11 hop, nhưng không chứng minh Windows vì TTL chỉnh được và thiết bị trung gian có thể tạo packet.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>NAT/proxy có thể thay fingerprint của endpoint.</li>
<li>OS update và network stack tuning làm signature lệch.</li>
<li>Active fingerprinting tạo traffic và cần authorization; B4 nhấn mạnh passive.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> p0f documentation; RFC 9293; IANA protocol parameters.</p>
</div>
</details>`;
