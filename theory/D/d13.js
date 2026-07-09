/* Theory — D13 (Appendix D). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d13"]=`<h2>D13 — False Positive Acknowledgement</h2>

<div class="tier recall" id="d13-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Four outcomes:</strong> <span class="en">True positive (real, alerted), false positive (benign, alerted), false negative (real, missed), true negative (benign, ignored).</span><span class="vi">True positive (thật, có báo), false positive (lành, báo nhầm), false negative (thật, bỏ sót), true negative (lành, đúng bỏ qua).</span></li>
<li><strong>False positive:</strong> <span class="en">A benign event wrongly alerted as malicious.</span><span class="vi">Một sự kiện lành tính bị báo nhầm là độc hại.</span></li>
<li><strong>False negative:</strong> <span class="en">A real attack the system FAILED to alert on — the dangerous one.</span><span class="vi">Một tấn công thật mà hệ thống KHÔNG báo — loại nguy hiểm.</span></li>
<li><strong>Confirm via context:</strong> <span class="en">Before escalating, judge an alert in context — e.g. decode a "powershell -enc" Base64 command first.</span><span class="vi">Trước khi leo thang, đánh giá cảnh báo theo ngữ cảnh — vd giải mã lệnh "powershell -enc" Base64 trước.</span></li>
<li><strong>Tune, don't disable:</strong> <span class="en">A noisy rule should be made MORE specific (and whitelist known-good), not deleted.</span><span class="vi">Một rule ồn nên làm CỤ THỂ hơn (và whitelist known-good), không phải xóa.</span></li>
<li><strong>Baseline first:</strong> <span class="en">Knowing "normal" lets you tell real anomalies from routine activity.</span><span class="vi">Biết "bình thường" giúp phân biệt bất thường thật với hoạt động định kỳ.</span></li>
</ul></div></div>

<details class="tier concept" id="d13-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>True/false positive/negative</h4>
<p><strong>True positive</strong>: tấn công thật, có cảnh báo (đúng). <strong>False positive</strong>: lành tính nhưng báo nhầm → gây mệt mỏi cảnh báo (alert fatigue). <strong>False negative</strong>: tấn công thật <em>bị bỏ sót</em> → nguy hiểm nhất. <strong>True negative</strong>: lành tính, đúng khi bỏ qua. Mục tiêu: giảm cả false positive và false negative.</p>

<h4>Xác định một alert là hit hay false positive</h4>
<p>Đừng leo thang/wipe vội. <strong>Đánh giá theo ngữ cảnh + đối chiếu nhiều nguồn + phân tích hành vi</strong>. Ví dụ alert "powershell -enc" → <em>giải Base64</em> xem lệnh thật rồi mới kết luận; "Nikto/sqlmap" UA → kiểm tra có request tấn công thật không. Công cụ dual-use (PsExec, PowerShell) hay gây false positive — cần ngữ cảnh.</p>
</div></details>

<details class="tier reference" id="d13-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Detection outcomes</h4>
<div class="table-wrap"><table>
<tr><th></th><th>Alerted</th><th>Not alerted</th></tr>
<tr><td>Actually malicious</td><td>True positive</td><td>False negative (bad)</td></tr>
<tr><td>Actually benign</td><td>False positive</td><td>True negative</td></tr>
</table></div>

<h4>Improving a noisy signature</h4>
<div class="table-wrap"><table>
<tr><th>Action</th><th>Effect</th></tr>
<tr><td>Make the pattern more specific</td><td>Fewer false positives</td></tr>
<tr><td>Whitelist known-good sources</td><td>Reduce benign matches</td></tr>
<tr><td>Add context/correlation conditions</td><td>Higher fidelity</td></tr>
<tr><td>Establish a baseline</td><td>Distinguish anomaly from routine</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="d13-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Đọc alert rule + packet/log gốc; xác nhận field, direction, state và asset context.</li>
<li>Phân loại TP/FP/TN/FN; tìm root cause noise rồi tune điều kiện, threshold hoặc scope.</li>
<li>Replay/test trên malicious và benign corpus; theo dõi recall sau tuning.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Signature SID/revision, matched bytes, flow, payload, host/process và surrounding events.</li>
<li>Alert volume, unique hosts, prevalence, suppression reason và missed incidents.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Suricata <code>fast.log/eve.json</code>, rule test/replay PCAP.</li>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Ưu tiên thêm context hơn suppress toàn SID.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Chuỗi <code>cmd.exe</code> trong file tải về có thể FP; HTTP response executable + process execution + outbound C2 làm TP.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>True positive alert không luôn là successful compromise.</li>
<li>Tune quá hẹp tăng false negative.</li>
<li>Whitelist theo IP/CDN rộng có thể che attacker.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> NIST SP 800-94; Suricata/Snort rule documentation; detection engineering practice.</p>
</div>
</details>`;
