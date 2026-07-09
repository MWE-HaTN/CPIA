/* Theory — D5 (Appendix D). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d5"]=`<h2>D5 — Beaconing</h2>

<div class="tier recall" id="d5-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Beaconing pattern:</strong> <span class="en">Small, regular, periodic connections to the same external host — machine-like regularity unlike human activity.</span><span class="vi">Kết nối nhỏ, đều, định kỳ tới cùng một host ngoài — đều đặn kiểu máy móc, khác hành vi con người.</span></li>
<li><strong>Jitter:</strong> <span class="en">Attackers add random jitter to beacon intervals to evade fixed-interval detection.</span><span class="vi">Kẻ tấn công thêm jitter ngẫu nhiên vào chu kỳ beacon để né phát hiện theo chu kỳ cố định.</span></li>
<li><strong>Detect despite jitter:</strong> <span class="en">Inter-arrival times still CLUSTER statistically even with jitter.</span><span class="vi">Khoảng cách thời gian vẫn CO CỤM về thống kê dù có jitter.</span></li>
<li><strong>Long-lived low-volume:</strong> <span class="en">A persistent, low-volume connection to a single rare external IP over days = likely C2 beacon.</span><span class="vi">Một kết nối lâu dài, lưu lượng thấp tới một IP ngoài hiếm trong nhiều ngày = khả năng beacon C2.</span></li>
<li><strong>Detection methods:</strong> <span class="en">Statistical analysis (timing regularity), signatures (known JA3/URI), and manual review of traffic/logs.</span><span class="vi">Phân tích thống kê (đều về thời gian), signature (JA3/URI đã biết), và rà tay traffic/log.</span></li>
</ul></div></div>

<details class="tier concept" id="d5-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Beaconing là gì &amp; vì sao lộ</h4>
<p>Malware "gọi về" C2 định kỳ để nhận lệnh — tạo ra <strong>các kết nối nhỏ, đều, lặp lại</strong> tới cùng đích. Sự đều đặn <em>kiểu máy móc</em> (vd đúng mỗi 60 giây) rất khác hoạt động con người (rải rác, đa dạng) → đó là điểm để phát hiện.</p>

<h4>Jitter &amp; cách phát hiện</h4>
<p>Để né phát hiện theo chu kỳ cố định, kẻ tấn công thêm <strong>jitter</strong> (ngẫu nhiên hóa khoảng cách, vd ±20%). Nhưng <strong>phân tích thống kê</strong> khoảng cách giữa các lần (inter-arrival) vẫn thấy chúng <em>co cụm</em> quanh một giá trị → vẫn lộ. Kết hợp: thống kê (timing), <strong>signature</strong> (URI mặc định, fingerprint JA3/TLS của framework như Cobalt Strike), và <strong>rà tay</strong>.</p>

<h4>Phân biệt với traffic bình thường</h4>
<p>Beacon: kết nối nhỏ/đều/bền tới host hiếm. Traffic bình thường: tải một lần lớn từ CDN, duyệt web đa dạng theo giờ làm, đồng bộ NTP định kỳ (nhưng tới NTP server hợp lệ). Đối chiếu baseline mạng giúp loại nhiễu.</p>
</div></details>

<details class="tier reference" id="d5-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Beacon indicators</h4>
<div class="table-wrap"><table>
<tr><th>Feature</th><th>Beacon</th><th>Normal</th></tr>
<tr><td>Timing</td><td>Regular/periodic (even with jitter)</td><td>Irregular, human-driven</td></tr>
<tr><td>Volume</td><td>Small, steady</td><td>Variable / bursty</td></tr>
<tr><td>Destination</td><td>Single rare external host</td><td>Many known sites/CDNs</td></tr>
<tr><td>Duration</td><td>Long-lived, persistent</td><td>Short sessions</td></tr>
</table></div>

<h4>Detection methods</h4>
<div class="table-wrap"><table>
<tr><th>Method</th><th>Looks for</th></tr>
<tr><td>Statistical</td><td>Clustering of inter-arrival times</td></tr>
<tr><td>Signature</td><td>Known URIs, JA3/TLS fingerprints</td></tr>
<tr><td>Manual review</td><td>Patterns in traffic/logs</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="d5-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Tạo time series theo host-destination và inter-arrival; tính median, variance/jitter, duration và byte ratio.</li>
<li>So baseline/allowlist, enrich domain/ASN/certificate rồi kiểm tra process/DNS.</li>
<li>Tìm beacon cố định, jittered, failed callback và multi-protocol fallback.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Periodic connection, fixed URI/size, low byte volume, long-lived pattern.</li>
<li>DNS→TCP sequence, JA3/JA4-like fingerprint, SNI/cert và EDR network event.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Zeek conn.log nhóm theo id.orig_h/id.resp_h; histogram inter-arrival.</li>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Không chỉ dùng một ngưỡng periodicity; kiểm tra nhiều cửa sổ.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Update agent 60 phút/lần và malware beacon đều periodic; signer/process, approved domain, response payload và fleet prevalence phân biệt chúng.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Jitter phá exact interval nhưng không xóa distribution.</li>
<li>Sleep/offline host tạo gap tự nhiên.</li>
<li>NAT gộp nhiều host làm flow-level pattern méo.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> Zeek documentation; MITRE ATT&amp;CK T1071; vendor beacon-analysis research.</p>
</div>
</details>`;
