/* Theory — A3 (Appendix A). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["a3"]=`<h2>A3 — Law &amp; Compliance</h2>

<div class="tier recall" id="a3-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>ACPO 4 principles:</strong> <span class="en">The backbone of UK digital-evidence handling (see Reference for all four).</span><span class="vi">Xương sống của xử lý bằng chứng số ở UK (xem đủ 4 ở tầng Reference).</span></li>
<li><strong>Computer Misuse Act 1990:</strong> <span class="en">The main UK law on unauthorised access/modification — your own testing must be authorised.</span><span class="vi">Luật UK chính về truy cập/sửa đổi trái phép — chính việc test của bạn phải được ủy quyền.</span></li>
<li><strong>DMCA (US) &amp; reverse engineering:</strong> <span class="en">Anti-circumvention rules (§1201) restrict bypassing copy/DRM protection — directly relevant when reverse-engineering protected malware; narrow security-research exemptions exist, so tread carefully.</span><span class="vi">Quy định chống vượt rào (§1201) hạn chế việc phá cơ chế bảo vệ bản quyền/DRM — liên quan trực tiếp khi dịch ngược malware có bảo vệ; có miễn trừ hẹp cho nghiên cứu bảo mật nên phải thận trọng.</span></li>
<li><strong>DPA 2018 / UK GDPR:</strong> <span class="en">A personal-data breach that meets the reporting threshold must be notified to the ICO without undue delay and, where feasible, within 72 hours of awareness.</span><span class="vi">Personal-data breach đạt ngưỡng phải báo cáo cần được thông báo cho ICO không chậm trễ và, khi khả thi, trong 72 giờ kể từ khi nhận biết.</span></li>
<li><strong>Communications interception:</strong> <span class="en">Live interception needs a legal basis and authority. RIPA 2000 is syllabus-relevant, while the Investigatory Powers Act 2016 is also central to the current UK framework.</span><span class="vi">Chặn bắt liên lạc trực tiếp cần cơ sở pháp lý và thẩm quyền. RIPA 2000 vẫn liên quan syllabus, còn Investigatory Powers Act 2016 cũng là phần trọng yếu của khung UK hiện hành.</span></li>
<li><strong>Chain of custody:</strong> <span class="en">Record who handled it, what, when and where — plus integrity hashes at each step.</span><span class="vi">Ghi ai xử lý, cái gì, khi nào, ở đâu — kèm hash toàn vẹn ở mỗi bước.</span></li>
<li><strong>Admissibility &amp; weight:</strong> <span class="en">Relevance, authenticity, integrity, lawful acquisition and reliable documentation affect admissibility or evidential weight; a hash alone is not sufficient.</span><span class="vi">Tính liên quan, xác thực, toàn vẹn, thu thập hợp pháp và tài liệu đáng tin ảnh hưởng khả năng chấp nhận hoặc trọng lượng bằng chứng; riêng hash là chưa đủ.</span></li>
<li><strong>CERT/CSIRT:</strong> <span class="en">Coordinate response and advise — but have NO prosecution powers (that is law enforcement).</span><span class="vi">Điều phối ứng phó và tư vấn — nhưng KHÔNG có quyền truy tố (đó là việc của cơ quan hành pháp).</span></li>
</ul></div></div>

<details class="tier concept" id="a3-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>ACPO — 4 nguyên tắc (giải thích)</h4>
<ol class="num-list">
<li><span class="num">P1</span><div>Không hành động nào được làm <strong>thay đổi dữ liệu</strong> có thể được dùng làm bằng chứng tại tòa.</div></li>
<li><span class="num">P2</span><div>Nếu <strong>bắt buộc</strong> phải truy cập dữ liệu gốc, người làm phải <strong>đủ năng lực</strong> và <strong>giải trình được</strong> sự liên quan và hệ quả của hành động đó.</div></li>
<li><span class="num">P3</span><div>Phải tạo và lưu một <strong>audit trail</strong> của mọi thao tác — để bên thứ ba độc lập có thể kiểm tra/lặp lại và ra cùng kết quả.</div></li>
<li><span class="num">P4</span><div>Người phụ trách điều tra chịu <strong>trách nhiệm tổng thể</strong> đảm bảo luật và các nguyên tắc này được tuân thủ.</div></li>
</ol>

<h4>Vì sao analyst phải nắm luật</h4>
<p>Chính các thao tác của bạn có thể <strong>phạm luật nếu không được ủy quyền</strong>: quét/truy cập hệ thống đụng <em>Computer Misuse Act</em>; bắt gói lưu lượng "sống" đụng <em>RIPA</em>; xử lý sai dữ liệu cá nhân đụng <em>GDPR/DPA</em>. Nguyên tắc vàng: <strong>luôn có phạm vi và sự cho phép rõ ràng (scope &amp; authorisation)</strong> bằng văn bản trước khi hành động.</p>

<h4>DMCA &amp; reverse engineering (vì sao CPIA hỏi)</h4>
<p>DMCA là luật bản quyền của Mỹ. Điều khoản <strong>chống vượt rào (§1201)</strong> cấm phá các cơ chế bảo vệ kỹ thuật (DRM/copy protection). Với intrusion analyst, điều này <strong>chạm tới việc dịch ngược (reverse engineering)</strong> malware/phần mềm có cơ chế bảo vệ: về nguyên tắc có thể bị coi là vi phạm, dù có một số <strong>miễn trừ hẹp cho nghiên cứu bảo mật</strong> (security research / interoperability). Bài học: khi RE, cần biết ranh giới pháp lý và có sự cho phép/căn cứ rõ ràng.</p>

<h4>Chain of custody, legal hold &amp; spoliation</h4>
<p>Mỗi lần một exhibit (vật chứng) đổi tay đều phải được ghi lại. <strong>Legal hold</strong> = nghĩa vụ ngừng xóa/rotate dữ liệu khi có khả năng tranh tụng. Làm hỏng/để mất bằng chứng = <strong>spoliation</strong>, có thể khiến bằng chứng bị bác và bất lợi pháp lý.</p>

<h4>Khi gặp bằng chứng tội phạm nghiêm trọng / dữ liệu cá nhân không liên quan</h4>
<p>Bảo toàn bằng chứng và <strong>tư vấn khách hàng về việc báo cơ quan hành pháp</strong> — không tự ý công bố, không thẩm vấn nghi phạm, không xóa nội dung. Với dữ liệu cá nhân không liên quan đến vụ việc: chỉ truy cập <strong>tối thiểu mức cần thiết</strong> và tuân thủ nghĩa vụ bảo vệ dữ liệu.</p>
<p><strong>Báo CHO AI và NHƯ THẾ NÀO:</strong> analyst làm theo authority, escalation plan và chỉ đạo của khách hàng/legal; thông thường không tự ý liên hệ law enforcement ngoài quy trình, nhưng một số vai trò/tổ chức có nghĩa vụ hoặc thẩm quyền khác. Khi bàn giao: duy trì chain of custody, đóng gói bằng chứng kèm hash, ghi lại mọi bước, và tránh làm lộ cuộc điều tra nếu việc đó có thể gây mất bằng chứng hoặc vi phạm pháp luật. Nghĩa vụ thông báo phụ thuộc loại dữ liệu, ngưỡng, jurisdiction và hợp đồng.</p>

<h4>CERT/CSIRT &amp; "constituency"</h4>
<p>Một CERT/CSIRT hoạt động trong một <strong>phạm vi/thẩm quyền (constituency)</strong> xác định (quốc gia / ngành / tổ chức). Điều này quyết định <em>họ điều phối sự cố nào và khi nào bàn giao cho bên khác</em>. Họ hỗ trợ, ra cảnh báo — nhưng không truy tố.</p>
</div></details>

<details class="tier reference" id="a3-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>UK legal &amp; standards map</h4>
<div class="table-wrap"><table>
<tr><th>Law / Standard</th><th>Covers</th><th>Analyst relevance</th></tr>
<tr><td>Computer Misuse Act 1990</td><td>Unauthorised access / modification / impairment</td><td>Your testing must be authorised &amp; in scope</td></tr>
<tr><td>DMCA (US) §1201</td><td>Anti-circumvention of copyright/DRM protection</td><td>Constrains some reverse engineering; narrow security exemptions</td></tr>
<tr><td>FSA / FCA</td><td>UK financial-sector regulation</td><td>Secondary breach-reporting duties (finance)</td></tr>
<tr><td>Data Protection Act 2018 / UK GDPR</td><td>Personal-data protection</td><td>72h breach notice to ICO; minimise PII access</td></tr>
<tr><td>RIPA 2000 / Investigatory Powers Act 2016</td><td>Communications interception and investigatory powers</td><td>Live-comms capture needs a legal basis and authority</td></tr>
<tr><td>PECR</td><td>Privacy of electronic comms (cookies, marketing)</td><td>Handling comms metadata</td></tr>
<tr><td>PACE 1984</td><td>Police powers &amp; evidence admissibility</td><td>How evidence is treated in court</td></tr>
<tr><td>ACPO Good Practice Guide</td><td>Digital-evidence handling</td><td>The 4 principles</td></tr>
<tr><td>PCI DSS</td><td>Payment-card data security</td><td>Card breach → notify acquirer/schemes</td></tr>
</table></div>

<h4>Breach-notification quick facts</h4>
<div class="table-wrap"><table>
<tr><th>Regime</th><th>Notify whom</th><th>Deadline</th></tr>
<tr><td>UK GDPR / DPA 2018</td><td>ICO when reporting threshold is met; affected people when high risk</td><td>Without undue delay; where feasible within 72h for ICO</td></tr>
<tr><td>PCI DSS</td><td>Acquiring bank / card schemes</td><td>Promptly per contract</td></tr>
</table></div>

<div class="callout info"><strong><span class="en">Exam tip</span><span class="vi">Mẹo thi</span></strong><p><span class="en">Remember the 72-hour ICO rule together with its reporting threshold, and learn the ACPO principles as syllabus-era good practice rather than absolute physical guarantees.</span><span class="vi">Học quy tắc 72 giờ cùng điều kiện đạt ngưỡng báo cáo; học các nguyên tắc ACPO như good practice theo syllabus, không biến chúng thành bảo đảm vật lý tuyệt đối.</span></p></div>
</div></details>

<details class="tier deep-dive" id="a3-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Xác định jurisdiction, loại dữ liệu, hợp đồng và authority; chuyển câu hỏi pháp lý cho counsel/DPO thay vì analyst tự kết luận.</li>
<li>Đặt legal hold khi cần; thu tối thiểu cần thiết, duy trì chain of custody và kiểm soát truy cập.</li>
<li>Phân loại nghĩa vụ báo cáo theo regulator, khách hàng, insurer, law enforcement và CERT/CSIRT; ghi deadline và người phê duyệt.</li>
<li>Tách dữ kiện kỹ thuật khỏi legal conclusion trong báo cáo.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Evidence label, nguồn, người thu, phương pháp, hash, thời điểm, mọi lần chuyển giao.</li>
<li>Warrant/consent/contract scope, retention policy, breach register và notification decision log.</li>
<li>Dữ liệu cá nhân, payment-card data, IP/trade secrets và dữ liệu ngoài phạm vi.</li>
</ul>
</div>
</div>
<h4>Tình huống diễn giải</h4>
<p>Phát hiện dữ liệu cá nhân ngoài phạm vi trong image không đồng nghĩa analyst được tự do xem hoặc gửi đi. Dừng xem phần không cần thiết, hạn chế quyền, ghi nhận phát hiện và xin chỉ đạo từ legal/DPO.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>DMCA có ngoại lệ nhưng phụ thuộc jurisdiction và mục đích; không xem syllabus là tư vấn pháp lý.</li>
<li>FSA trong tài liệu cũ có thể ám chỉ cơ quan UK tiền nhiệm; cần hiểu ngữ cảnh FCA/PRA hiện tại nhưng trả lời theo wording của syllabus.</li>
<li>Hash hỗ trợ integrity, không tự chứng minh toàn bộ provenance hay tính admissible.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> UK GDPR Article 33 và ICO personal-data-breach guidance; Data Protection Act 2018; Investigatory Powers Act 2016; ACPO Good Practice Guide for Digital Evidence (syllabus-era); U.S. Copyright Office 2024 Section 1201 rulemaking/37 CFR 201.40; PCI DSS Requirement 12.10.</p>
</div>
</details>`;
