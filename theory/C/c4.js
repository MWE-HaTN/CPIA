/* Theory — C4 (Appendix C). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["c4"]=`<h2>C4 — Extraction of Document Meta Data</h2><ul>

<li><span class="en">Metadata can reveal author, last modified by, company, application version, machine name, template path, print path, timestamps, and GPS coordinates.</span><span class="vi">Metadata có thể tiết lộ tác giả, người chỉnh sửa cuối, công ty, phiên bản ứng dụng, tên máy, đường dẫn template, đường dẫn in, timestamp và tọa độ GPS.</span></li>

<li><span class="en">Office documents may expose internal usernames, file paths, software versions, and macro / DDE indicators.</span><span class="vi">Tài liệu Office có thể lộ username nội bộ, đường dẫn file, phiên bản phần mềm và các chỉ báo macro / DDE.</span></li>

<li><span class="en">PDFs may contain creator tools, embedded files, JavaScript, launch actions, and object metadata.</span><span class="vi">PDF có thể chứa công cụ tạo, file nhúng, JavaScript, hành động khởi chạy và metadata đối tượng.</span></li>

<li><span class="en">Images / media may contain EXIF device, time, GPS, and software data.</span><span class="vi">Hình ảnh / media có thể chứa dữ liệu EXIF về thiết bị, thời gian, GPS và phần mềm.</span></li>

</ul><div class="table-wrap"><table><tr><th>Tool</th><th>Best use</th></tr><tr><td>ExifTool</td><td>General metadata extraction / removal across many formats.</td></tr><tr><td>oletools / olevba</td><td>Office OLE / OOXML macros, DDE, suspicious indicators.</td></tr><tr><td>pdfid / pdf-parser</td><td>PDF suspicious objects and structure.</td></tr><tr><td>FOCA</td><td>Bulk metadata extraction from public documents.</td></tr><tr><td>strings</td><td>Quick triage for paths, usernames, URLs, versions.</td></tr></table></div><ul>

<li><span class="en">Sanitisation: remove metadata before publishing using tools such as ExifTool or document-inspection features.</span><span class="vi">Làm sạch: xóa metadata trước khi xuất bản bằng các công cụ như ExifTool hoặc tính năng kiểm tra tài liệu.</span></li>

</ul>

<h3>Metadata Extraction from Common Document Formats</h3>

<p><span class="en">Document metadata can reveal sensitive information about an organisation's internal infrastructure, personnel, and software stack.</span><span class="vi">Metadata tài liệu có thể tiết lộ thông tin nhạy cảm về cơ sở hạ tầng nội bộ, nhân sự và software stack của tổ chức.</span></p>

<div class="table-wrap"><table>

<tr><th>Metadata Field</th><th>What It Reveals</th><th>Tool</th></tr>

<tr><td>Author / Last Modified By</td><td>Usernames, real names, internal account names</td><td>ExifTool, strings</td></tr>

<tr><td>Company</td><td>Organisation name, sometimes subsidiary info</td><td>ExifTool</td></tr>

<tr><td>Application Version</td><td>Software fingerprinting (Office version, OS)</td><td>ExifTool, file properties</td></tr>

<tr><td>Machine Name / Computer Name</td><td>Internal hostname naming convention</td><td>ExifTool, Autopsy</td></tr>

<tr><td>Print server / Print path</td><td>Internal network paths, share names</td><td>ExifTool</td></tr>

<tr><td>Template path</td><td>Internal file server paths</td><td>ExifTool, olevba</td></tr>

<tr><td>GPS coordinates</td><td>Physical location (images / photos)</td><td>ExifTool</td></tr>

<tr><td>Creation / Modified timestamps</td><td>Timeline of document, timezone of author's system</td><td>ExifTool</td></tr>

</table></div>

<p><strong>Supported formats:</strong> Word (.docx/.doc), Excel (.xlsx), PowerPoint (.pptx), PDF, JPEG / PNG / TIFF images, MP3 / MP4 media files.</p>


<h3 class="qz-theory"><span class="en">Document &amp; File Metadata Extraction</span><span class="vi">Trích siêu dữ liệu tài liệu &amp; file</span></h3>
<ul>
<li><strong><span class="en">What it reveals:</span><span class="vi">Lộ ra gì:</span></strong> <span class="en">Office/PDF metadata can expose authors, usernames, organisation, software versions, template/UNC paths, machine and printer names — mapping internal users and infrastructure. Photo <strong>EXIF GPS</strong> tags can reveal where an image was taken.</span><span class="vi">Metadata Office/PDF có thể lộ tác giả, username, tổ chức, phiên bản phần mềm, đường dẫn template/UNC, tên máy và máy in — vẽ user và hạ tầng nội bộ. Thẻ <strong>EXIF GPS</strong> của ảnh có thể lộ nơi chụp.</span></li>
<li><strong>Tools:</strong> <span class="en"><strong>ExifTool</strong> reads/writes metadata across many formats; <strong>FOCA</strong>/<strong>metagoofil</strong> automate harvesting documents from a target domain and extracting this at scale.</span><span class="vi"><strong>ExifTool</strong> đọc/ghi metadata trên nhiều định dạng; <strong>FOCA</strong>/<strong>metagoofil</strong> tự động thu thập tài liệu từ domain mục tiêu và trích ở quy mô lớn.</span></li>
<li><strong><span class="en">Common findings:</span><span class="vi">Phát hiện phổ biến:</span></strong> <span class="en">A <em>failed redaction</em> (text still extractable under a black box — the underlying data was never removed); <em>track-changes/hidden revisions</em> exposing earlier wording, comments and authors; an app/version field (e.g. "Microsoft Word 2010") hinting at patch level.</span><span class="vi"><em>che thất bại</em> (vẫn trích được chữ dưới ô đen — dữ liệu nền chưa bị xóa); <em>track-changes/bản sửa ẩn</em> lộ câu chữ trước, nhận xét và tác giả; trường app/phiên bản (vd "Microsoft Word 2010") gợi ý mức vá.</span></li>
<li><strong><span class="en">Sanitisation:</span><span class="vi">Làm sạch:</span></strong> <span class="en">Renaming/zipping does NOT remove metadata — use an explicit sanitisation step (document inspector, <code>exiftool -all=</code>, print-to-clean-PDF) before publishing.</span><span class="vi">Đổi tên/nén KHÔNG xóa metadata — dùng bước làm sạch tường minh (document inspector, <code>exiftool -all=</code>, in ra PDF sạch) trước khi công bố.</span></li></ul>
`;
