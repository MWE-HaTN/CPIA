/* Theory — A3 (Appendix A). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["a3"]=`<h2>A3 — Law &amp; Compliance</h2>

<div class="callout info"><strong>Terminology note:</strong><p><span class="en">The <strong>ACPO Good Practice Guide for Computer-Based Electronic Evidence</strong> is commonly still referenced as ACPO principles. In the UK, ACPO functions were replaced by the NPCC, but the four principles remain widely cited in digital evidence handling.</span><span class="vi"><strong>ACPO Good Practice Guide for Computer-Based Electronic Evidence</strong> vẫn thường được gọi là nguyên tắc ACPO. Tại Anh, chức năng của ACPO đã được thay thế bởi NPCC, nhưng bốn nguyên tắc này vẫn được trích dẫn rộng rãi trong xử lý bằng chứng kỹ thuật số.</span></p></div>

<ul>

<li><strong>Chain of custody:</strong> <span class="en">Who collected, handled, transferred, stored, and analysed evidence; include time, location, purpose, and signatures where required.</span><span class="vi">Ai đã thu thập, xử lý, chuyển giao, lưu trữ và phân tích bằng chứng; ghi lại thời gian, địa điểm, mục đích và chữ ký khi cần.</span></li>

<li><strong>ACPO principles:</strong> <span class="en">Avoid altering evidence; if access to original evidence is necessary, be competent and document actions; maintain audit trail; case officer is responsible.</span><span class="vi">Tránh thay đổi bằng chứng; nếu cần truy cập bản gốc, phải có năng lực và ghi lại hành động; duy trì audit trail; điều tra viên chịu trách nhiệm.</span></li>

<li><strong>Regulatory issues:</strong> <span class="en">GDPR, PCI DSS, financial regulators — the syllabus names the <strong>FSA</strong> (Financial Services Authority, UK), renamed <strong>FCA</strong> (Financial Conduct Authority) in 2013; the exam may use the older acronym — plus sector-specific reporting and contractual notification obligations.</span><span class="vi">GDPR, PCI DSS, cơ quan quản lý tài chính — syllabus dùng tên <strong>FSA</strong> (Financial Services Authority, Anh), đã đổi thành <strong>FCA</strong> (Financial Conduct Authority) từ 2013, đề thi có thể dùng tên cũ — cùng báo cáo theo ngành và nghĩa vụ thông báo hợp đồng.</span></li>

</ul>

<h3>GDPR — <span class="en">Key Timeframes</span><span class="vi">Các Mốc Thời Gian Quan Trọng</span></h3>

<ul>

<li><strong>72 hours</strong> — <span class="en">notify supervisory authority after discovering a breach.</span><span class="vi">Thông báo cho cơ quan giám sát sau khi phát hiện vi phạm.</span></li>

<li><strong>Without undue delay</strong> — <span class="en">notify data subjects if the breach poses high risk to their rights and freedoms.</span><span class="vi">thông báo cho chủ thể dữ liệu nếu vi phạm gây rủi ro cao cho quyền và tự do của họ.</span></li>

<li><strong>Log retention:</strong> <span class="en">No fixed number in GDPR, but the <em>storage limitation principle</em> requires not keeping data longer than necessary.</span><span class="vi">GDPR không quy định số cụ thể, nhưng <em>nguyên tắc giới hạn lưu trữ</em> yêu cầu không giữ dữ liệu lâu hơn cần thiết.</span></li>

<li><strong>PCI DSS:</strong> <span class="en">Minimum 12 months log retention; 3 months must be immediately accessible.</span><span class="vi">Lưu trữ log tối thiểu 12 tháng; 3 tháng phải có thể truy cập ngay lập tức.</span></li>

</ul>

<ul>

<li><strong>Law enforcement:</strong> <span class="en">Engage when criminal activity is suspected or client / legal counsel directs it; understand evidence seizure and operational impact.</span><span class="vi">Liên hệ khi nghi ngờ có hoạt động tội phạm hoặc khách hàng / cố vấn pháp lý yêu cầu; hiểu về thu giữ bằng chứng và tác động hoạt động.</span></li>

<li><strong>CERTs:</strong> <span class="en">Coordinate, advise, and share information; they are normally not law-enforcement bodies.</span><span class="vi">Phối hợp, tư vấn và chia sẻ thông tin; thông thường không phải cơ quan thực thi pháp luật.</span></li>

</ul><div class="callout danger"><strong>CSAM rule</strong><p><span class="en">If child sexual abuse material is discovered, stop unnecessary handling and escalate immediately according to law and organisational policy. Do not continue exploring the material.</span><span class="vi">Nếu phát hiện tài liệu xâm hại tình dục trẻ em (CSAM), dừng xử lý không cần thiết và leo thang ngay lập tức theo luật pháp và chính sách tổ chức. Không tiếp tục khám phá tài liệu đó.</span></p></div>

<h3>DMCA and Reverse Engineering — <span class="en">Permitted vs Problematic</span><span class="vi">Được phép và Có vấn đề</span></h3>

<div class="table-wrap"><table>

<tr><th><span class="en">Generally permitted / defensible context</span><span class="vi">Thường được phép / có thể bào chữa</span></th><th><span class="en">Problematic / high-risk context</span><span class="vi">Có vấn đề / rủi ro cao</span></th></tr>

<tr><td><span class="en">Reverse engineering malware to understand behaviour, indicators, and impact during an authorised investigation.</span><span class="vi">Dịch ngược malware để hiểu hành vi, chỉ số và tác động trong một cuộc điều tra được ủy quyền.</span></td><td><span class="en">Circumventing DRM or access controls in commercial software without authorisation.</span><span class="vi">Vượt qua DRM hoặc kiểm soát truy cập trong phần mềm thương mại mà không có ủy quyền.</span></td></tr>

<tr><td><span class="en">Interoperability research where the goal is compatibility rather than copying protected functionality.</span><span class="vi">Nghiên cứu tương tác hướng đến khả năng tương thích chứ không phải sao chép chức năng được bảo vệ.</span></td><td><span class="en">Publishing tools or instructions primarily designed to bypass copyright protection mechanisms.</span><span class="vi">Công bố công cụ hay hướng dẫn chủ yếu được thiết kế để vượt qua cơ chế bảo vệ bản quyền.</span></td></tr>

<tr><td><span class="en">Security research performed under authorisation, responsible handling, and legal / contractual boundaries.</span><span class="vi">Nghiên cứu bảo mật được thực hiện có ủy quyền, xử lý có trách nhiệm và trong phạm vi pháp lý / hợp đồng.</span></td><td><span class="en">Reverse engineering software or services outside the agreed engagement scope.</span><span class="vi">Dịch ngược phần mềm hoặc dịch vụ ngoài phạm vi đã thỏa thuận.</span></td></tr>

</table></div>

<div class="callout info"><strong>Exam tip:</strong> <span class="en">CPIA questions usually test risk judgement, not legal memorisation. For reverse engineering, ask: is it authorised, within scope, and defensible as security analysis?</span><span class="vi">Câu hỏi CPIA thường kiểm tra phán xét rủi ro, không phải ghi nhớ luật pháp. Với dịch ngược, hỏi: có được ủy quyền không, có trong phạm vi không, và có thể bào chữa như phân tích bảo mật không?</span></div>

<h3>Good Practice Guide for Computer-Based Electronic Evidence</h3>

<ul>

<li><strong>Full name:</strong> Good Practice Guide for Computer-Based Electronic Evidence.</li>

<li><strong>Core idea:</strong> <span class="en">Digital evidence handling must preserve integrity, maintain an audit trail, and allow another competent examiner to reproduce the process.</span><span class="vi">Xử lý bằng chứng kỹ thuật số phải bảo toàn tính toàn vẹn, duy trì audit trail và cho phép một examiner có năng lực khác tái hiện quy trình.</span></li>

<li><strong>Common confusion:</strong> <span class="en">Documentation is not optional admin work; it is part of evidential integrity.</span><span class="vi">Tài liệu hóa không phải công việc hành chính tùy chọn; đó là một phần của tính toàn vẹn bằng chứng.</span></li>

</ul>

<p class="sub-heading"><span class="en">Evidence Integrity Throughout the Investigation</span><span class="vi">Toàn vẹn Bằng chứng Xuyên suốt Điều tra</span></p>

<div class="table-wrap"><table><tr><th><span class="en">Stage</span><span class="vi">Giai đoạn</span></th><th><span class="en">Integrity Requirement</span><span class="vi">Yêu cầu Toàn vẹn</span></th></tr><tr><td><strong>Acquisition</strong></td><td><span class="en">Hash evidence, document tools / versions, maintain chain of custody</span><span class="vi">Hash bằng chứng, ghi lại công cụ / phiên bản, duy trì chain of custody</span></td></tr><tr><td><strong>Analysis</strong></td><td><span class="en">Work on copies, not originals; hash intermediate results; document every analyst action in real time</span><span class="vi">Làm việc trên bản sao, không phải bản gốc; hash kết quả trung gian; ghi lại mọi hành động của analyst theo thời gian thực</span></td></tr><tr><td><strong>Reporting</strong></td><td><span class="en">Evidence IDs must map to documented chain; conclusions traceable to specific evidence items</span><span class="vi">ID bằng chứng phải ánh xạ đến chain đã ghi; kết luận có thể truy nguyên đến các mục bằng chứng cụ thể</span></td></tr><tr><td><strong>Storage</strong></td><td><span class="en">Access-controlled, encrypted where appropriate, retention per policy / regulation</span><span class="vi">Kiểm soát truy cập, mã hóa khi cần, lưu giữ theo chính sách / quy định</span></td></tr></table></div>

<p><strong>Key principle:</strong> <span class="en">Another competent examiner must be able to reproduce your process from your documentation alone.</span><span class="vi">Một examiner có năng lực khác phải có thể tái hiện quy trình của bạn chỉ từ tài liệu của bạn.</span></p>


<h3 class="qz-theory"><span class="en">Evidential Integrity &amp; Chain of Custody</span><span class="vi">Toàn vẹn bằng chứng &amp; Chuỗi hành trình</span></h3>
<p><span class="en"><strong>Chain of custody</strong> records every person who handled an exhibit — who, what, when, where — plus integrity hashes, producing an unbroken auditable trail that proves the evidence is unaltered and admissible. Breaks in the chain can render evidence inadmissible.</span><span class="vi"><strong>Chain of custody</strong> ghi lại mọi người đã tiếp xúc tang vật — ai, làm gì, khi nào, ở đâu — kèm hash toàn vẹn, tạo một chuỗi liên tục kiểm toán được, chứng minh bằng chứng không bị thay đổi và được chấp nhận. Đứt gãy chuỗi có thể khiến bằng chứng bị loại.</span></p>
<p><span class="en"><strong>Integrity proof:</strong> hash the image at acquisition and re-verify later; a match proves it is bit-for-bit unchanged, a mismatch signals corruption or tampering.</span><span class="vi"><strong>Chứng minh toàn vẹn:</strong> băm image lúc thu thập và kiểm lại sau; trùng nhau chứng minh nguyên vẹn từng bit, lệch nhau báo hiệu hỏng hoặc bị can thiệp.</span></p>

<h3><span class="en">ACPO Good Practice Guide — Four Principles</span><span class="vi">ACPO Good Practice Guide — Bốn nguyên tắc</span></h3>
<p><span class="en">The UK <strong>ACPO Good Practice Guide for Computer-Based Electronic Evidence</strong> sets out four principles:</span><span class="vi"><strong>ACPO Good Practice Guide for Computer-Based Electronic Evidence</strong> (Anh) nêu bốn nguyên tắc:</span></p>
<ol>
<li><span class="en">No action should change data that may later be relied upon in court.</span><span class="vi">Không hành động nào được làm thay đổi dữ liệu có thể được dùng làm bằng chứng tại tòa.</span></li>
<li><span class="en">Where accessing original data is necessary, the person must be competent and able to explain the relevance and implications of their actions.</span><span class="vi">Khi cần truy cập dữ liệu gốc, người đó phải đủ năng lực và giải trình được mức độ liên quan và hệ quả của hành động.</span></li>
<li><span class="en">An audit trail of all processes should be created and preserved.</span><span class="vi">Phải tạo và lưu giữ audit trail cho mọi quy trình.</span></li>
<li><span class="en">The person in charge has overall responsibility for ensuring the law and these principles are followed.</span><span class="vi">Người phụ trách chịu trách nhiệm tổng thể đảm bảo tuân thủ pháp luật và các nguyên tắc này.</span></li></ol>

<h3><span class="en">Regulation, Notification &amp; Law Enforcement</span><span class="vi">Quy định, thông báo &amp; cơ quan hành pháp</span></h3>
<ul>
<li><strong>PCI DSS:</strong> <span class="en">Governs cardholder data; a card breach triggers notification to the acquiring bank/card schemes (and possibly regulators and affected individuals).</span><span class="vi">Điều chỉnh dữ liệu thẻ; vi phạm thẻ làm phát sinh nghĩa vụ thông báo cho ngân hàng thanh toán/tổ chức thẻ (và có thể cả cơ quan quản lý lẫn cá nhân bị ảnh hưởng).</span></li>
<li><strong>GDPR:</strong> <span class="en">A notifiable personal-data breach must be reported to the supervisory authority within <strong>72 hours</strong> of becoming aware.</span><span class="vi">Vi phạm dữ liệu cá nhân phải báo cho cơ quan giám sát trong vòng <strong>72 giờ</strong> kể từ khi biết.</span></li>
<li><strong>DMCA:</strong> <span class="en">Restricts circumventing protection mechanisms — relevant when reverse engineering protected code; be aware of authorisation/exemptions.</span><span class="vi">Hạn chế việc vượt qua cơ chế bảo vệ — liên quan khi dịch ngược mã được bảo vệ; cần nắm ủy quyền/miễn trừ.</span></li>
<li><strong><span class="en">CERTs / CSIRTs:</span><span class="vi">CERT / CSIRT:</span></strong> <span class="en">Coordinate response, publish advisories and support a defined <em>constituency</em> (national/sector/org). They have no prosecution powers — that is law enforcement. Their remit dictates who to engage or hand off to.</span><span class="vi">Điều phối ứng phó, phát hành khuyến cáo và hỗ trợ một <em>constituency</em> xác định (quốc gia/ngành/tổ chức). Họ không có quyền truy tố — đó là cơ quan hành pháp. Phạm vi của họ quyết định nên liên hệ ai hoặc chuyển giao cho ai.</span></li>
<li><strong><span class="en">Criminal evidence:</span><span class="vi">Bằng chứng phạm tội:</span></strong> <span class="en">Preserve it, follow the agreed escalation path, and advise the client on engaging law enforcement; never act unilaterally (disclosing, confronting the suspect, deleting).</span><span class="vi">Bảo toàn, theo quy trình leo thang đã thống nhất, và tư vấn khách hàng về việc liên hệ cơ quan hành pháp; không hành động đơn phương (công bố, đối chất nghi phạm, xóa).</span></li>
<li><strong><span class="en">Legal hold:</span><span class="vi">Legal hold:</span></strong> <span class="en">Preserve potentially relevant data and suspend routine deletion/log rotation; destroying held data can constitute spoliation.</span><span class="vi">Bảo toàn dữ liệu có thể liên quan và tạm dừng xóa/xoay vòng log định kỳ; hủy dữ liệu đang bị giữ có thể cấu thành tiêu hủy bằng chứng (spoliation).</span></li>
<li><strong><span class="en">Data minimisation:</span><span class="vi">Tối thiểu hóa dữ liệu:</span></strong> <span class="en">When you encounter personal data unrelated to the incident, access only what is relevant and protect it, per data-protection duties.</span><span class="vi">Khi gặp dữ liệu cá nhân không liên quan tới sự cố, chỉ truy cập phần liên quan và bảo vệ nó, theo nghĩa vụ bảo vệ dữ liệu.</span></li></ul>
`;
