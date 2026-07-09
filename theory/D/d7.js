/* Theory — D7 (Appendix D). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d7"]=`<h2>D7 — Command and Control Channels</h2>

<div class="tier recall" id="d7-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>HTTP(S) C2:</strong> <span class="en">Regular POSTs with Base64/encrypted bodies to a fixed URI on a newly-registered domain = agent check-in.</span><span class="vi">POST định kỳ với body Base64/mã hóa tới một URI cố định trên domain mới đăng ký = agent check-in.</span></li>
<li><strong>DNS C2:</strong> <span class="en">Commands/responses encoded in subdomain labels and TXT records.</span><span class="vi">Lệnh/phản hồi mã hóa trong nhãn subdomain và bản ghi TXT.</span></li>
<li><strong>Covert vs open:</strong> <span class="en">Open = obvious protocol/port; covert = hidden in DNS/ICMP, domain fronting, or a legitimate service (paste site, Telegram, cloud API).</span><span class="vi">Open = giao thức/cổng lộ; covert = giấu trong DNS/ICMP, domain fronting, hoặc dịch vụ hợp lệ (paste site, Telegram, cloud API).</span></li>
<li><strong>Domain fronting:</strong> <span class="en">A trusted domain in the TLS SNI, but the Host header points to the real C2.</span><span class="vi">Một domain tin cậy ở SNI của TLS, nhưng Host header trỏ tới C2 thật.</span></li>
<li><strong>Cobalt Strike:</strong> <span class="en">A default beacon is detectable by known malleable-C2 artefacts (URIs, JA3, named pipes).</span><span class="vi">Beacon mặc định lộ qua artefact malleable-C2 đã biết (URI, JA3, named pipe).</span></li>
<li><strong>Self-signed + rare JA3:</strong> <span class="en">HTTPS to a fresh domain with a self-signed cert and a rare JA3 is highly C2-consistent.</span><span class="vi">HTTPS tới domain mới với cert tự ký và JA3 hiếm rất khớp với C2.</span></li>
</ul></div></div>

<details class="tier concept" id="d7-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Các kênh C2 phổ biến</h4>
<p><strong>HTTP/S</strong>: agent gửi check-in định kỳ (POST body Base64/mã hóa) tới một URI cố định; hòa vào web traffic. <strong>DNS</strong>: nhồi lệnh vào subdomain, trả lời trong TXT. <strong>ICMP</strong>, <strong>protocol qua cổng thường</strong> (53/80/443). <strong>Dùng dịch vụ hợp lệ</strong> (paste site, Telegram, cloud API) khiến khó chặn vì lẫn với traffic bình thường được cho phép.</p>

<h4>Kỹ thuật né</h4>
<p><strong>Domain fronting</strong>: SNI dùng một domain CDN tin cậy, nhưng Host header bên trong trỏ tới C2 thật → giám sát SNI bị qua mặt. <strong>Malleable C2</strong> (Cobalt Strike) tùy biến URI/header/JA3 để giả dạng traffic hợp lệ — nhưng <em>cấu hình mặc định</em> để lại artefact đã biết (URI mặc định, JA3, named pipe <code>msagent_xx</code>).</p>

<h4>Phát hiện</h4>
<p>Kết hợp: <strong>thống kê</strong> (beaconing — xem D5), <strong>signature</strong> (JA3, URI, named pipe IoC), <strong>rà tay</strong> (domain mới đăng ký, cert tự ký, JA3 hiếm, body mã hóa định kỳ). Một host POST đều tới domain mới với cert tự ký + JA3 hiếm là rất đáng ngờ.</p>
</div></details>

<details class="tier reference" id="d7-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>C2 channels</h4>
<div class="table-wrap"><table>
<tr><th>Channel</th><th>Encoding / tell</th></tr>
<tr><td>HTTP/S</td><td>Periodic POSTs, Base64/encrypted body, fixed URI</td></tr>
<tr><td>DNS</td><td>Subdomain labels + TXT records</td></tr>
<tr><td>ICMP</td><td>Payload in echo packets</td></tr>
<tr><td>Domain fronting</td><td>Trusted SNI, Host header → real C2</td></tr>
<tr><td>Legitimate services</td><td>Paste sites, Telegram, cloud APIs</td></tr>
</table></div>

<h4>Cobalt Strike default artefacts</h4>
<div class="table-wrap"><table>
<tr><th>Artefact</th><th>Note</th></tr>
<tr><td>Default malleable-C2 URIs</td><td>Recognisable patterns</td></tr>
<tr><td>JA3 / JA3S fingerprint</td><td>TLS negotiation signature</td></tr>
<tr><td>Named pipes (msagent_xx)</td><td>Host-based IoC</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="d7-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Map channel open/covert theo protocol, destination, cadence và command-response.</li>
<li>Kết hợp flow statistics, IDS signature, TLS/DNS metadata và endpoint process tree.</li>
<li>Xác nhận callback, tasking, response hoặc host artefact; scope toàn fleet.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>HTTP URI/header/cookie, DNS TXT/subdomain, ICMP payload, cloud API.</li>
<li>Domain age/ASN, cert, fingerprint, named pipe và C2 process.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Suricata/Zeek query; Wireshark Follow Stream; passive DNS pivot.</li>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Tạo detection theo behavior + infrastructure, tránh chỉ hard-code IOC.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>POST đều tới cloud API có thể SaaS; binary unsigned trong temp + fixed encrypted body + persistence nâng confidence thành C2.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Domain fronting interpretation phụ thuộc CDN/TLS visibility.</li>
<li>Legitimate service abuse khiến block domain gây business impact.</li>
<li>Malleable profiles thay signature dễ dàng.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> MITRE ATT&amp;CK Command and Control; Zeek/Suricata; Cobalt Strike detection guidance.</p>
</div>
</details>`;
