/* Theory — C4 (Appendix C). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["c4"]=`<h2>C4 — Extraction of Document Meta Data</h2>

<div class="tier recall" id="c4-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>What metadata leaks:</strong> <span class="en">Author, organisation, application + version, machine/user names, OS, internal/template paths, print info, timestamps.</span><span class="vi">Tác giả, tổ chức, ứng dụng + phiên bản, tên máy/người dùng, OS, đường dẫn nội bộ/template, thông tin in, mốc thời gian.</span></li>
<li><strong>Tool:</strong> <span class="en">ExifTool reads/writes metadata across many file formats; metagoofil/FOCA automate harvesting docs + metadata.</span><span class="vi">ExifTool đọc/ghi metadata cho nhiều định dạng; metagoofil/FOCA tự động thu thập tài liệu + metadata.</span></li>
<li><strong>Images (EXIF):</strong> <span class="en">Photos can carry GPS coordinates, camera make/model, and timestamps.</span><span class="vi">Ảnh có thể mang tọa độ GPS, hãng/đời máy ảnh, và mốc thời gian.</span></li>
<li><strong>App version → patch level:</strong> <span class="en">"Microsoft Word 2010" suggests software version and likely patch/vulnerability exposure.</span><span class="vi">"Microsoft Word 2010" gợi ý phiên bản và khả năng vá/lỗ hổng.</span></li>
<li><strong>Failed redaction:</strong> <span class="en">A "redacted" PDF where black boxes can be removed / text copied = the text was never actually removed.</span><span class="vi">PDF "đã che" mà gỡ được ô đen / copy được chữ = thực ra chữ chưa bị xóa.</span></li>
<li><strong>Track changes / hidden data:</strong> <span class="en">Revision history and comments can expose earlier wording and author identities.</span><span class="vi">Lịch sử sửa đổi và comment có thể lộ nội dung cũ và danh tính tác giả.</span></li>
<li><strong>Sanitise before sharing:</strong> <span class="en">Use a proper inspect/remove-metadata step — renaming or zipping does NOT strip it.</span><span class="vi">Dùng bước kiểm tra/xóa metadata đúng cách — đổi tên hay nén ZIP KHÔNG xóa được nó.</span></li>
</ul></div></div>

<details class="tier concept" id="c4-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Vì sao metadata quý cho điều tra</h4>
<p>Một tài liệu rò rỉ thường mang theo "dấu vết" tạo ra nó: <strong>tác giả, tổ chức, tên máy/người dùng, đường dẫn nội bộ, template path</strong> (vd <code>\\\\fileserver\\templates\\...</code>) — giúp <em>vẽ bản đồ hạ tầng nội bộ</em> và xác định nguồn. <strong>Phiên bản ứng dụng + OS</strong> giúp đoán mức vá và lỗ hổng khả dĩ.</p>

<h4>Định dạng nào chứa metadata gì</h4>
<p><strong>Office hiện đại (.docx/.xlsx)</strong> = container ZIP chứa XML → giải nén ra xem được tác giả, app, revision. <strong>Office cũ (.doc)</strong> = OLE compound. <strong>PDF</strong> có khối metadata (Application, Producer, CreationDate) và có thể chứa text dưới lớp "che". <strong>Ảnh JPEG</strong> mang EXIF (GPS, camera, time).</p>

<h4>Redaction thất bại — bẫy kinh điển</h4>
<p>Vẽ một hộp đen lên PDF <em>không xóa</em> chữ bên dưới: vẫn copy được hoặc gỡ hộp ra là thấy. Redaction đúng phải <strong>xóa hẳn nội dung</strong>, không chỉ che hiển thị.</p>

<h4>Làm sạch metadata trước khi công bố</h4>
<p>Đổi tên file hay nén ZIP <strong>không</strong> loại bỏ metadata. Phải dùng bước "Inspect Document / Remove Metadata" (Office) hoặc công cụ sanitise chuyên dụng. Đây cũng là rủi ro OPSEC khi chính bạn chia sẻ tài liệu trong báo cáo.</p>
</div></details>

<details class="tier reference" id="c4-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Metadata by format</h4>
<div class="table-wrap"><table>
<tr><th>Format</th><th>Internally</th><th>Typical metadata</th></tr>
<tr><td>.docx / .xlsx / .pptx</td><td>ZIP of XML (OOXML)</td><td>Author, company, app+version, revision, template path</td></tr>
<tr><td>.doc / .xls (legacy)</td><td>OLE compound file</td><td>Author, last-saved-by, machine names</td></tr>
<tr><td>PDF</td><td>Object structure</td><td>Application, Producer, Create/Modify dates; hidden text under redaction</td></tr>
<tr><td>JPEG / images</td><td>EXIF block</td><td>GPS, camera make/model, original date/time</td></tr>
</table></div>

<h4>Fields that map infrastructure / source</h4>
<div class="table-wrap"><table>
<tr><th>Field</th><th>Reveals</th></tr>
<tr><td>Author / Last-saved-by</td><td>User identity</td></tr>
<tr><td>Company / Organisation</td><td>Owning org</td></tr>
<tr><td>Application + version</td><td>Software &amp; likely patch level</td></tr>
<tr><td>Template / file paths</td><td>Internal servers, usernames</td></tr>
<tr><td>Machine name</td><td>Host that created it</td></tr>
<tr><td>GPS (EXIF)</td><td>Where a photo was taken</td></tr>
</table></div>

<h4>Tools</h4>
<div class="table-wrap"><table>
<tr><th>Tool</th><th>Use</th></tr>
<tr><td>ExifTool</td><td>Read/write metadata across many formats</td></tr>
<tr><td>metagoofil / FOCA</td><td>Harvest public docs and extract their metadata</td></tr>
<tr><td>Office "Inspect Document"</td><td>Find &amp; remove metadata before sharing</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="c4-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Làm việc trên bản sao; xác định magic/container trước extension.</li>
<li>Trích metadata bằng ít nhất hai phương pháp; giải nén OOXML/OLE/PDF khi cần.</li>
<li>Chuẩn hóa timestamp/timezone; pivot author, path, printer, machine và software version.</li>
<li>Ghi tool/version và phân biệt embedded metadata với filesystem metadata.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>OOXML docProps/core.xml/app.xml, relationships và embedded media.</li>
<li>OLE SummaryInformation; PDF Info/XMP/Producer; EXIF GPS/time/camera.</li>
<li>Revision/comment/hidden sheet, template path, print spool/printer name.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>
<code>exiftool -G1 -a -s file</code>, <code>file</code>, <code>unzip -l docx</code>
</li>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>PDF: <code>pdfinfo</code>; OLE/OOXML parsers trong oletools.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Author “Admin” yếu; UNC template path chứa hostname + username và cùng xuất hiện ở nhiều tài liệu là pivot hạ tầng mạnh hơn.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Metadata dễ sửa/xóa và có thể do template kế thừa.</li>
<li>CreationDate không nhất thiết là thời điểm nội dung được tạo.</li>
<li>Mở tài liệu bằng Office có thể cập nhật metadata; dùng copy/read-only.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> ECMA-376 OOXML; PDF specification; ExifTool documentation.</p>
</div>
</details>`;
