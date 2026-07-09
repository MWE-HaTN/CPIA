/* Theory — E5 (Appendix E). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e5"]=`<h2>E5 — Application File Structures</h2>

<div class="tier recall" id="e5-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Modern Office = ZIP:</strong> <span class="en">.docx/.xlsx/.pptx (OOXML) are ZIP archives of XML — unzip to inspect macros/objects WITHOUT opening.</span><span class="vi">.docx/.xlsx/.pptx (OOXML) là archive ZIP chứa XML — giải nén để soi macro/đối tượng MÀ KHÔNG mở file.</span></li>
<li><strong>Legacy Office = OLE:</strong> <span class="en">.doc/.xls are OLE compound files; macro (VBA) and DDE are common exploit vectors.</span><span class="vi">.doc/.xls là file OLE compound; macro (VBA) và DDE là vector khai thác phổ biến.</span></li>
<li><strong>PDF danger objects:</strong> <span class="en">/OpenAction and /JavaScript can auto-run script — treat as potentially malicious.</span><span class="vi">/OpenAction và /JavaScript có thể tự chạy script — coi là có khả năng độc hại.</span></li>
<li><strong>Identify by signature:</strong> <span class="en">Magic bytes, not extension: PE="MZ", ZIP="PK", PDF="%PDF", RAR="Rar!".</span><span class="vi">Nhận diện bằng magic byte, không theo đuôi: PE="MZ", ZIP="PK", PDF="%PDF", RAR="Rar!".</span></li>
<li><strong>Browser artefacts:</strong> <span class="en">History, cookies, downloads are stored in SQLite databases.</span><span class="vi">Lịch sử, cookie, download lưu trong cơ sở dữ liệu SQLite.</span></li>
<li><strong>Email files:</strong> <span class="en">Outlook stores mail locally as PST/OST; Exchange server-side; headers reveal routing.</span><span class="vi">Outlook lưu thư cục bộ dạng PST/OST; Exchange phía server; header lộ đường đi.</span></li>
<li><strong>SQLite recovery:</strong> <span class="en">Deleted records may persist in unallocated pages and the WAL/journal.</span><span class="vi">Bản ghi đã xóa có thể còn trong unallocated pages và WAL/journal.</span></li>
<li><strong>AV artefacts:</strong> <span class="en">Quarantine stores (often obfuscated copies) and logs evidence what AV saw and when.</span><span class="vi">Kho quarantine (thường là bản sao bị làm rối) và log cho biết AV thấy gì, khi nào.</span></li>
</ul></div></div>

<details class="tier concept" id="e5-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Office: OLE vs OOXML, macro &amp; DDE</h4>
<p><strong>Office cũ (.doc/.xls)</strong> = định dạng <strong>OLE compound</strong> (giống một hệ thống file con). <strong>Office mới (.docx...)</strong> = <strong>ZIP của XML (OOXML)</strong>. Phân tích an toàn: giải nén/parse <em>không mở</em> để xem có <strong>macro VBA</strong> (vbaProject.bin) hay <strong>remote template / DDE</strong> không. <strong>DDE</strong> (Dynamic Data Exchange) cho phép field-code chạy lệnh ngoài mà không cần macro.</p>

<h4>PDF</h4>
<p>PDF có cấu trúc đối tượng; các đối tượng <strong>/OpenAction, /JavaScript, /Launch, /EmbeddedFile</strong> là dấu hiệu nguy hiểm (tự chạy script/chương trình). Cũng có thể chứa text dưới lớp "redaction" che hỏng (xem C4).</p>

<h4>Archive &amp; signature analysis</h4>
<p>ZIP/RAR có thể lồng nhau, đặt mật khẩu để né AV gateway. Luôn nhận diện file bằng <strong>magic bytes</strong> chứ không theo đuôi — kẻ tấn công hay đổi đuôi để ngụy trang. PE="MZ"/"PE\\0\\0", ZIP/OOXML="PK", PDF="%PDF", RAR="Rar!", ELF="\\x7FELF".</p>

<h4>Browser, email, SQLite, log</h4>
<p><strong>Browser</strong> hiện đại lưu history/cookie/download trong <strong>SQLite</strong> — bản ghi đã xóa có thể khôi phục từ <em>unallocated pages</em> và <em>WAL/journal</em>. <strong>Email</strong>: Outlook = PST (lưu trữ)/OST (cache); phân tích header để truy đường đi. <strong>AV artefacts</strong>: quarantine (bản sao mẫu, thường XOR/obfuscate) + log — bằng chứng quý về cái gì bị bắt và lúc nào. <strong>Log file</strong> ứng dụng cung cấp dòng thời gian hoạt động.</p>
</div></details>

<details class="tier reference" id="e5-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>File signatures (magic bytes)</h4>
<div class="table-wrap"><table>
<tr><th>Type</th><th>Signature</th></tr>
<tr><td>Windows PE (EXE/DLL)</td><td>"MZ" (4D 5A) + "PE\\0\\0"</td></tr>
<tr><td>ZIP / OOXML (docx…)</td><td>"PK" (50 4B)</td></tr>
<tr><td>RAR</td><td>"Rar!" (52 61 72 21)</td></tr>
<tr><td>PDF</td><td>"%PDF"</td></tr>
<tr><td>ELF (Linux)</td><td>0x7F "ELF"</td></tr>
</table></div>

<h4>Application artefacts</h4>
<div class="table-wrap"><table>
<tr><th>App / format</th><th>Stored as</th><th>Forensic value</th></tr>
<tr><td>Office .docx/.xlsx</td><td>ZIP of XML (OOXML)</td><td>Macros, remote templates, metadata</td></tr>
<tr><td>Office .doc/.xls</td><td>OLE compound</td><td>VBA macros, DDE</td></tr>
<tr><td>PDF</td><td>Object structure</td><td>/OpenAction, /JavaScript = auto-run</td></tr>
<tr><td>Browser</td><td>SQLite DBs</td><td>History, cookies, downloads</td></tr>
<tr><td>Outlook mail</td><td>PST / OST</td><td>Messages, attachments, headers</td></tr>
<tr><td>AV</td><td>Quarantine + logs</td><td>What was detected &amp; when</td></tr>
</table></div>

<h4>Suspicious Office/PDF indicators</h4>
<div class="table-wrap"><table>
<tr><th>Indicator</th><th>Meaning</th></tr>
<tr><td>vbaProject.bin / AutoOpen / AutoClose</td><td>Macro auto-execution</td></tr>
<tr><td>DDEAUTO / DDE field</td><td>Command execution without macros</td></tr>
<tr><td>Remote template reference</td><td>Template injection</td></tr>
<tr><td>/OpenAction, /JavaScript, /Launch (PDF)</td><td>Auto-run script/program</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="e5-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Xác định magic/container, parse an toàn và liệt kê embedded object/script/link.</li>
<li>Office: OLE/OOXML macro/DDE/relationships; PDF action/JavaScript; archive nested/password.</li>
<li>Browser/email/SQLite/log: giữ schema, WAL/journal, timezone và deleted records.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>PE headers/imports; Office VBA/oleObject; PDF OpenAction/JS; PST message/attachment.</li>
<li>Browser history/download/cache; AV quarantine/log; SQLite db-wal/db-shm.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>
<code>file</code>, <code>7z l</code>, oletools, pdfid/pdf-parser, sqlite3 read-only.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>DOCX là ZIP bình thường; đáng ngờ khi relationship external trỏ template lạ hoặc embedded OLE sinh process.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Extension giả; archive bomb/nested recursion.</li>
<li>Mở file bằng ứng dụng thật có thể execute active content.</li>
<li>Copy SQLite thiếu WAL có thể mất giao dịch mới.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> ECMA-376; PDF specification; SQLite file format; Microsoft PE format.</p>
</div>
</details>`;
