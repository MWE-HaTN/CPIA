/* Theory — A4 (Appendix A). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["a4"]=`<h2>A4 — Record Keeping &amp; Interim Reporting</h2>

<div class="tier recall" id="a4-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Contemporaneous notes:</strong> <span class="en">Recorded at the time of each action — that is what makes them accurate and credible in court.</span><span class="vi">Ghi ngay tại thời điểm hành động — chính điều đó khiến chúng chính xác và đáng tin tại tòa.</span></li>
<li><strong>Report structure:</strong> <span class="en">An executive summary (business language) PLUS detailed technical evidence.</span><span class="vi">Một tóm tắt cho lãnh đạo (ngôn ngữ kinh doanh) CỘNG bằng chứng kỹ thuật chi tiết.</span></li>
<li><strong>Fact vs inference:</strong> <span class="en">Clearly separate observed fact/evidence from the analyst's inference/assessment.</span><span class="vi">Tách rõ sự kiện/bằng chứng quan sát được khỏi suy luận/đánh giá của analyst.</span></li>
<li><strong>Methodology:</strong> <span class="en">Document tools, versions and steps so a competent peer can reproduce and verify the findings.</span><span class="vi">Ghi rõ công cụ, phiên bản, các bước để một người có năng lực khác tái lập và kiểm chứng được.</span></li>
<li><strong>Interim reporting:</strong> <span class="en">On long engagements, timely updates let the client make early containment decisions.</span><span class="vi">Với engagement dài, báo cáo tạm kịp thời giúp khách hàng ra quyết định cô lập sớm.</span></li>
<li><strong>State limitations:</strong> <span class="en">Be honest about gaps, e.g. "logs were rotated, so activity before X could not be confirmed."</span><span class="vi">Trung thực về giới hạn, vd "log đã bị xoay vòng nên không xác nhận được hoạt động trước thời điểm X".</span></li>
</ul></div></div>

<details class="tier concept" id="a4-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Vì sao "contemporaneous" quan trọng đến vậy?</h4>
<p>Ghi chép <strong>ngay lúc làm</strong> có giá trị pháp lý cao hơn nhiều so với viết lại sau vài tuần từ trí nhớ. Nó chứng minh tính chính xác, giúp tái lập, và đứng vững khi bị chất vấn (cross-examination). Ghi: thời gian, công cụ + phiên bản, lệnh đã chạy, kết quả, và <em>lý do</em> cho mỗi quyết định.</p>

<h4>Cấu trúc báo cáo theo đối tượng đọc</h4>
<p>Một báo cáo tốt phục vụ <strong>hai nhóm độc giả</strong>: lãnh đạo (cần <em>executive summary</em> ngắn, ngôn ngữ rủi ro/kinh doanh, không thuật ngữ) và đội kỹ thuật (cần <em>bằng chứng chi tiết</em>, IoC, timeline, phương pháp). Đừng dán nguyên output thô không diễn giải, và đừng gộp tất cả thành một khối văn bản không nhãn.</p>

<h4>Tách "sự kiện" khỏi "suy luận"</h4>
<p>Đây là điểm cốt lõi và hay bị hỏi. <strong>Sự kiện</strong> = điều bạn quan sát trực tiếp ("Event 4624 logon type 3 từ IP X lúc Y"). <strong>Suy luận</strong> = diễn giải/đánh giá của bạn ("nhiều khả năng là truy cập từ xa của kẻ tấn công"). Trộn lẫn hai thứ làm báo cáo mất độ tin cậy và dễ bị bác.</p>

<h4>Phương pháp tái lập được (reproducibility)</h4>
<p>Ghi đủ <strong>công cụ, phiên bản, tham số, các bước</strong> để một analyst có năng lực khác làm lại và ra cùng kết quả. Đây cũng là tinh thần của ACPO nguyên tắc 3 (audit trail).</p>

<h4>Khi bằng chứng không đầy đủ</h4>
<p>Đừng phóng đại ("kẻ tấn công bắt đầu chính xác lúc X") cũng đừng giấu giới hạn. Nêu rõ: "log đã xoay vòng nên không xác nhận được trước X" — trung thực về độ không chắc chắn làm báo cáo <em>mạnh hơn</em>, không yếu hơn.</p>
</div></details>

<details class="tier reference" id="a4-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Report structure checklist</h4>
<div class="table-wrap"><table>
<tr><th>Section</th><th>Audience</th><th>Contents</th></tr>
<tr><td>Executive summary</td><td>Leadership</td><td>What happened, business impact, risk, recommendations — no jargon</td></tr>
<tr><td>Scope &amp; methodology</td><td>Technical / QA</td><td>What was examined, tools + versions, steps — reproducible</td></tr>
<tr><td>Findings</td><td>Technical</td><td>Observed facts, evidence, IoCs, timeline (UTC)</td></tr>
<tr><td>Analysis / assessment</td><td>Technical</td><td>Inference clearly labelled as such; confidence levels</td></tr>
<tr><td>Limitations</td><td>All</td><td>Gaps, missing logs, assumptions</td></tr>
<tr><td>Recommendations</td><td>Leadership / IT</td><td>Containment, remediation, control improvements</td></tr>
</table></div>

<h4>Good vs poor reporting statements</h4>
<div class="table-wrap"><table>
<tr><th>✗ Poor</th><th>✓ Better</th></tr>
<tr><td>"The attacker definitely started at 09:00."</td><td>"First observed malicious logon at 09:00 UTC; earlier activity could not be confirmed (logs rotated)."</td></tr>
<tr><td>Raw tool output pasted with no interpretation</td><td>Evidence shown, then a clearly-labelled assessment of what it means</td></tr>
<tr><td>One unlabelled block of text</td><td>Structured sections with fact separated from inference</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="a4-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Dùng template case note có timestamp, author, action, reason, result, evidence ID và next step.</li>
<li>Ghi contemporaneously; nếu sửa, giữ lịch sử và lý do. Tách observation, interpretation, assumption và recommendation.</li>
<li>Interim report nêu điều đã biết/chưa biết, confidence, tác động, containment hiện tại và quyết định cần khách hàng đưa ra.</li>
<li>Final report có executive summary, scope, methodology, timeline, findings, evidence mapping, limitations và remediation.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Notebook/case-management audit trail, command transcript, screenshots có context và exported logs.</li>
<li>Finding ID liên kết evidence ID; IOC có type/value/first seen/last seen/source/confidence.</li>
<li>Versioned report, reviewer comments, approvals và distribution list.</li>
</ul>
</div>
</div>
<h4>Tình huống diễn giải</h4>
<p>Viết “Event 4688 cho thấy WINWORD.EXE sinh powershell.exe với encoded command lúc 10:14 UTC” tốt hơn “người dùng chạy malware”; vế sau là suy luận cần thêm user/session và nội dung command.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Screenshot không thay thế raw evidence có thể tìm kiếm và xác minh.</li>
<li>Không che uncertainty; dùng confirmed/probable/possible kèm căn cứ.</li>
<li>Không đưa secret, password hoặc malware sống vào báo cáo phân phối rộng.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> NIST SP 800-61 reporting guidance; ISO/IEC 27037; CREST incident-response guidance.</p>
</div>
</details>`;
