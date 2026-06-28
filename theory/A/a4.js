/* Theory — A4 (Appendix A). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["a4"]=`<h2>A4 — Record Keeping, Interim Reporting &amp; Results</h2><ul>

<li><strong>Record in real time:</strong> <span class="en">Do not reconstruct analyst notes from memory.</span><span class="vi">Không tái dựng ghi chú từ trí nhớ.</span></li>

<li><strong>Record content:</strong> <span class="en">Timestamp, analyst, system, command / tool, result, evidence ID, decision and rationale.</span><span class="vi">Timestamp, analyst, hệ thống, lệnh / công cụ, kết quả, ID bằng chứng, quyết định và lý do.</span></li>

<li><strong>Interim reports:</strong> <span class="en">Brief the client when urgent action is required; follow verbal briefings with written confirmation.</span><span class="vi">Báo cáo ngắn cho khách hàng khi cần hành động khẩn cấp; theo dõi báo cáo miệng bằng xác nhận bằng văn bản.</span></li>

<li><strong>Final report:</strong> <span class="en">Executive summary, scope, methodology, timeline, findings, IoCs, impact, evidence list, and prioritised recommendations.</span><span class="vi">Tóm tắt điều hành, phạm vi, phương pháp, timeline, phát hiện, IoCs, tác động, danh sách bằng chứng và khuyến nghị ưu tiên.</span></li>

<li><strong>Corrections:</strong> <span class="en">Append dated corrections instead of silently editing original notes.</span><span class="vi">Thêm các sửa đổi có ngày tháng thay vì chỉnh sửa ghi chú gốc một cách lặng lẽ.</span></li>

</ul>

<h3><span class="en">Evidence Handling Checklist</span><span class="vi">Danh sách Kiểm tra Xử lý Bằng chứng</span></h3>

<div class="table-wrap"><table>

<tr><th><span class="en">Step</span><span class="vi">Bước</span></th><th><span class="en">Action</span><span class="vi">Hành động</span></th><th><span class="en">Documentation</span><span class="vi">Tài liệu hóa</span></th></tr>

<tr><td>1. Identify</td><td><span class="en">What evidence exists? (disk, memory, network, logs, cloud, mobile)</span><span class="vi">Bằng chứng nào tồn tại? (disk, bộ nhớ, mạng, log, cloud, di động)</span></td><td><span class="en">List all evidence sources with descriptions.</span><span class="vi">Liệt kê tất cả nguồn bằng chứng kèm mô tả.</span></td></tr>

<tr><td>2. Prioritise</td><td><span class="en">Volatility order: memory → network → processes → disk → archive → remote logs</span><span class="vi">Thứ tự dễ mất: bộ nhớ → mạng → tiến trình → disk → archive → log từ xa</span></td><td><span class="en">Document collection order and rationale.</span><span class="vi">Ghi lại thứ tự thu thập và lý do.</span></td></tr>

<tr><td>3. Acquire</td><td><span class="en">Use forensically sound tools; hash before and after; maintain chain of custody</span><span class="vi">Dùng công cụ đảm bảo tính pháp y (forensically sound); hash trước và sau; duy trì chain of custody</span></td><td><span class="en">Record tool name, version, command line, hash values, timestamps, analyst name.</span><span class="vi">Ghi lại tên công cụ, phiên bản, command line, hash, timestamp, tên analyst.</span></td></tr>

<tr><td>4. Verify</td><td><span class="en">Compare acquisition hash against source hash; validate integrity</span><span class="vi">So sánh hash thu thập với hash nguồn; xác nhận tính toàn vẹn</span></td><td><span class="en">Document hash comparison results.</span><span class="vi">Ghi lại kết quả so sánh hash.</span></td></tr>

<tr><td>5. Store</td><td><span class="en">Encrypted, access-controlled storage; separate from production systems</span><span class="vi">Lưu trữ mã hóa, kiểm soát truy cập; tách biệt khỏi hệ thống production</span></td><td><span class="en">Record storage location, access controls, retention period.</span><span class="vi">Ghi lại vị trí lưu trữ, kiểm soát truy cập, thời gian lưu giữ.</span></td></tr>

<tr><td>6. Analyse</td><td><span class="en">Work on copies, not originals; document every action in real time</span><span class="vi">Làm việc trên bản sao, không phải bản gốc; ghi lại mọi hành động theo thời gian thực</span></td><td><span class="en">Maintain analyst notes with timestamps, commands, and findings.</span><span class="vi">Duy trì ghi chú analyst với timestamp, lệnh và phát hiện.</span></td></tr>

<tr><td>7. Report</td><td><span class="en">Map findings to evidence IDs; conclusions traceable to specific items</span><span class="vi">Ánh xạ phát hiện đến ID bằng chứng; kết luận có thể truy nguyên đến mục cụ thể</span></td><td><span class="en">Final report includes evidence list, methodology, findings, and recommendations.</span><span class="vi">Báo cáo cuối bao gồm danh sách bằng chứng, phương pháp, phát hiện và khuyến nghị.</span></td></tr>

</table></div>

<h3><span class="en">Common IR Reporting Mistakes</span><span class="vi">Lỗi Báo cáo IR Thường Gặp</span></h3>

<div class="table-wrap"><table>

<tr><th><span class="en">Mistake</span><span class="vi">Lỗi</span></th><th><span class="en">Why it matters</span><span class="vi">Tại sao quan trọng</span></th><th><span class="en">How to avoid</span><span class="vi">Cách tránh</span></th></tr>

<tr><td><span class="en">Stating conclusions without evidence</span><span class="vi">Đưa ra kết luận không có bằng chứng</span></td><td><span class="en">Report is not defensible; cannot withstand scrutiny</span><span class="vi">Báo cáo không thể bào chữa; không chịu được kiểm tra</span></td><td><span class="en">Every conclusion must reference specific evidence items with IDs.</span><span class="vi">Mọi kết luận phải tham chiếu đến mục bằng chứng cụ thể có ID.</span></td></tr>

<tr><td><span class="en">Using technical jargon for executive audience</span><span class="vi">Dùng thuật ngữ kỹ thuật cho đối tượng điều hành</span></td><td><span class="en">Executives cannot make informed decisions</span><span class="vi">Lãnh đạo không thể đưa ra quyết định sáng suốt</span></td><td><span class="en">Include executive summary in business language; technical details in appendix.</span><span class="vi">Đưa tóm tắt điều hành bằng ngôn ngữ kinh doanh; chi tiết kỹ thuật trong phụ lục.</span></td></tr>

<tr><td><span class="en">Missing timeline of events</span><span class="vi">Thiếu timeline sự kiện</span></td><td><span class="en">Reader cannot understand attack progression</span><span class="vi">Người đọc không thể hiểu diễn biến tấn công</span></td><td><span class="en">Include chronological timeline with UTC timestamps and evidence references.</span><span class="vi">Thêm timeline theo thứ tự thời gian với UTC timestamp và tham chiếu bằng chứng.</span></td></tr>

<tr><td><span class="en">Not distinguishing confirmed vs suspected</span><span class="vi">Không phân biệt đã xác nhận và nghi ngờ</span></td><td><span class="en">Overclaiming undermines credibility</span><span class="vi">Tuyên bố quá mức làm suy yếu độ tin cậy</span></td><td><span class="en">Use clear language: "confirmed," "likely," "possible" with confidence rationale.</span><span class="vi">Dùng ngôn ngữ rõ ràng: "đã xác nhận," "có khả năng," "có thể" kèm lý do tin cậy.</span></td></tr>

<tr><td><span class="en">Forgetting to list IoCs</span><span class="vi">Quên liệt kê IoC</span></td><td><span class="en">Client cannot implement detection / blocking</span><span class="vi">Khách hàng không thể triển khai phát hiện / chặn</span></td><td><span class="en">Include prioritised IoC list (hashes, IPs, domains, TTPs) in machine-readable format.</span><span class="vi">Đưa danh sách IoC ưu tiên (hash, IP, domain, TTP) ở định dạng máy đọc được.</span></td></tr>

<tr><td><span class="en">No recommendations or vague recommendations</span><span class="vi">Không có hoặc khuyến nghị mơ hồ</span></td><td><span class="en">Client does not know what to fix</span><span class="vi">Khách hàng không biết cần sửa gì</span></td><td><span class="en">Provide specific, prioritised, actionable recommendations with effort estimates.</span><span class="vi">Đưa ra khuyến nghị cụ thể, ưu tiên, khả thi kèm ước tính công sức.</span></td></tr>

<tr><td><span class="en">Silent edits to analyst notes</span><span class="vi">Chỉnh sửa lặng lẽ ghi chú analyst</span></td><td><span class="en">Breaks chain of custody; undermines evidence integrity</span><span class="vi">Phá vỡ chain of custody; làm suy yếu tính toàn vẹn bằng chứng</span></td><td><span class="en">Append dated corrections; never modify original notes.</span><span class="vi">Thêm sửa đổi có ngày tháng; không bao giờ sửa ghi chú gốc.</span></td></tr>

<tr><td><span class="en">Not scoping the report</span><span class="vi">Không xác định phạm vi báo cáo</span></td><td><span class="en">Reader does not know what was examined</span><span class="vi">Người đọc không biết những gì đã được kiểm tra</span></td><td><span class="en">Clearly state scope: systems examined, time period, tools used, limitations.</span><span class="vi">Nêu rõ phạm vi: hệ thống đã kiểm tra, khoảng thời gian, công cụ sử dụng, hạn chế.</span></td></tr>

</table></div>


<h3 class="qz-theory"><span class="en">Record Keeping &amp; Reporting</span><span class="vi">Ghi chép &amp; Báo cáo</span></h3>
<ul>
<li><strong><span class="en">Mixed audiences:</span><span class="vi">Nhiều đối tượng:</span></strong> <span class="en">A good report has a concise <strong>executive summary</strong> (impact, risk, recommendations) for management <em>and</em> a detailed <strong>technical section</strong> (timeline, IoCs, evidence) others can verify and reproduce.</span><span class="vi">Một báo cáo tốt có <strong>executive summary</strong> ngắn gọn (tác động, rủi ro, khuyến nghị) cho lãnh đạo <em>và</em> phần <strong>kỹ thuật</strong> chi tiết (timeline, IoC, bằng chứng) để người khác kiểm chứng và tái lập.</span></li>
<li><strong><span class="en">Fact vs inference:</span><span class="vi">Sự kiện vs suy luận:</span></strong> <span class="en">Clearly separate what was directly observed (evidence) from the analyst's interpretation, and state confidence levels — blurring them produces overstated, fragile conclusions.</span><span class="vi">Phân tách rõ cái quan sát trực tiếp (bằng chứng) với diễn giải của analyst, và nêu mức độ tin cậy — lẫn lộn sẽ cho kết luận phóng đại, dễ sụp đổ.</span></li>
<li><strong><span class="en">Methodology &amp; reproducibility:</span><span class="vi">Phương pháp &amp; tái lập:</span></strong> <span class="en">Document tools, versions, steps and decisions so another competent analyst can follow the same process and reach the same result (defensibility).</span><span class="vi">Ghi lại công cụ, phiên bản, các bước và quyết định để một analyst đủ năng lực khác theo cùng quy trình và đạt cùng kết quả (khả năng bảo vệ).</span></li>
<li><strong><span class="en">State limitations honestly:</span><span class="vi">Nêu rõ giới hạn:</span></strong> <span class="en">E.g. "logs were rotated, activity before X cannot be confirmed" — avoid overreach.</span><span class="vi">Vd "log đã bị xoay vòng, không thể xác nhận hoạt động trước X" — tránh phóng đại.</span></li>
<li><strong><span class="en">Contemporaneous notes:</span><span class="vi">Ghi chép đồng thời:</span></strong> <span class="en">Made at or near the time of each action, they are far more accurate and credible than later reconstruction from memory.</span><span class="vi">Được ghi tại hoặc gần thời điểm mỗi hành động, chính xác và đáng tin hơn nhiều so với dựng lại từ trí nhớ về sau.</span></li>
<li><strong><span class="en">Interim reporting:</span><span class="vi">Báo cáo tạm:</span></strong> <span class="en">On long engagements, timely updates let the client make containment/business decisions before the final report.</span><span class="vi">Trong engagement dài, cập nhật kịp thời để khách hàng ra quyết định cô lập/kinh doanh trước báo cáo cuối.</span></li></ul>
`;
