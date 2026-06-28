/* Theory — E5 (Appendix E). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e5"]=`<h2>E5 — Application File Structures</h2><ul>

<li><strong>Archives:</strong> <span class="en">ZIP / RAR/7z may stage exfiltration; check timestamps, paths, encryption, filenames.</span><span class="vi">ZIP / RAR/7z có thể dàn dựng đánh cắp dữ liệu; kiểm tra timestamp, đường dẫn, mã hóa, tên file.</span></li>

<li><strong>Browser artefacts:</strong> <span class="en">History, downloads, cookies, cache, session data, SQLite databases.</span><span class="vi">Lịch sử, tải xuống, cookie, cache, dữ liệu phiên, cơ sở dữ liệu SQLite.</span></li>

<li><strong>PE files:</strong> <span class="en">Imports, sections, timestamps, resources, signatures, packer indicators.</span><span class="vi">Import, section, timestamp, tài nguyên, chữ ký, chỉ báo packer.</span></li>

<li><strong>Office:</strong> <span class="en">OLE / OOXML, macros, DDE, external links, embedded objects.</span><span class="vi">OLE / OOXML, macro, DDE, liên kết ngoài, đối tượng nhúng.</span></li>

<li><strong>PDF:</strong> <span class="en">JavaScript, OpenAction, Launch, embedded files.</span><span class="vi">JavaScript, OpenAction, Launch, file nhúng.</span></li>

<li><strong>Email:</strong> <span class="en">PST / OST / Exchange, MIME headers, attachments.</span><span class="vi">PST / OST / Exchange, header MIME, đính kèm.</span></li>

<li><strong>AV artefacts:</strong> <span class="en">Quarantine, detections, logs, remediation actions.</span><span class="vi">Kiểm dịch, phát hiện, log, hành động khắc phục.</span></li>

<li><strong>SQLite / log files:</strong> <span class="en">Common app storage for browsers, chat, cloud sync, and mobile-style apps.</span><span class="vi">Lưu trữ ứng dụng phổ biến cho trình duyệt, chat, đồng bộ cloud và ứng dụng dạng mobile.</span></li>

</ul>

<div class="table-wrap"><table>

<tr><th>File Type</th><th>Key Structure Details</th><th>Forensic Notes</th></tr>

<tr><td>Archive (Zip, RAR, 7z, ISO)</td><td>Central directory + local headers + data</td><td>Password-protected ZIPs bypass gateway AV. ISO delivery bypasses Mark of the Web (no MOTW applied to contents). Nested archives delay analysis.</td></tr>

<tr><td>PE (EXE / DLL / SYS)</td><td>DOS header (MZ) → PE header → Optional header → Section table → Sections</td><td>Import table = capability fingerprint. High entropy section = packed / encrypted. PE overlay = embedded payload. Compile timestamp often falsified.</td></tr>

<tr><td>Office OLE (.doc/.xls/.ppt)</td><td>Compound Document — structured storage with streams</td><td>VBA macros in VBA stream. Check with olevba. DDE fields execute commands without macros. Old format has fewer macro warnings.</td></tr>

<tr><td>Office OOXML (.docx/.xlsx)</td><td>ZIP container with XML files inside</td><td>Unzip to inspect: <code>unzip -o file.docx -d out</code>. Macros in vbaProject.bin. Relationships in _rels/ reveal external URLs (template injection).</td></tr>

<tr><td>PDF</td><td>Objects + cross-reference table + trailer</td><td>Malicious: /JavaScript, /JS, /Launch, /OpenAction, /EmbeddedFile. Streams compressed — decompress to inspect. Tool: pdfid.py, pdf-parser.py</td></tr>

<tr><td>Browser artefacts</td><td>SQLite databases in browser profile folder</td><td>Chrome: <code>%LOCALAPPDATA%\\Google\\Chrome\\User Data\\Default\\History</code>. Firefox: <code>places.sqlite</code>. Contains: URLs, downloads, cookies, cached content, form data.</td></tr>

<tr><td>Email (PST / OST)</td><td>Microsoft proprietary format</td><td>Extract with libpst (Unix) or Kernel PST Viewer. Exchange artifacts via PowerShell EWS. Attachment metadata preserved even if deleted.</td></tr>

<tr><td>AV quarantine &amp; logs</td><td>Vendor-proprietary container</td><td>Windows Defender: <code>%ProgramData%\\Microsoft\\Windows Defender\\Quarantine\\</code>. Original malware preserved — extract and analyse to understand what was caught and when.</td></tr>

<tr><td>SQLite databases</td><td>Single-file relational DB. Magic bytes: 53 51 4c 69 74 65</td><td>Used by browsers, mobile apps, forensic tools. Open with DB Browser for SQLite. Deleted rows recoverable from free pages (Undark tool).</td></tr>

<tr><td>Log files</td><td>Plain text or EVTX (binary XML)</td><td>EVTX: parse with EvtxECmd or Chainsaw. Web logs: CLF / W3C format. Check for log gaps (cleared logs = indicator of tampering).</td></tr>

</table></div>

<div class="table-wrap"><table>

<tr><th>File Type</th><th>Forensic Notes</th></tr>

<tr><td>PE (EXE / DLL)</td><td>DOS header, PE header, sections. Import table reveals capabilities. Packed executables have high entropy sections.</td></tr>

<tr><td>Office (OLE / OOXML)</td><td>Check for macros (VBA), DDE fields. OOXML = ZIP container — extract and inspect XML. OLE = structured storage.</td></tr>

<tr><td>PDF</td><td>Check for /JavaScript, /Launch, /OpenAction, /EmbeddedFile. Streams may contain compressed shellcode.</td></tr>

<tr><td>Browser artifacts</td><td>History, cache, cookies, downloads, saved passwords — SQLite databases in profile folder.</td></tr>

<tr><td>Email (PST / OST)</td><td>Outlook data files — use MAPI tools or libpst to extract. Exchange artifacts via EWS / PowerShell.</td></tr>

<tr><td>Archive formats (Zip, RAR)</td><td>Common delivery mechanism for malware. Password-protected ZIPs evade AV scanning.</td></tr>

<tr><td>AV quarantine &amp; logs</td><td>Quarantined files preserved by AV. Windows Defender quarantine: <code>%ProgramData%\\Microsoft\\Windows Defender\\Quarantine\\</code>. AV logs show detection events, excluded paths.</td></tr>

<tr><td>SQLite databases</td><td>Browser history / cookies in profile folders. Tools: DB Browser for SQLite.</td></tr>

<tr><td>Log files</td><td>Application logs, web server logs (IIS / Apache), Windows event logs (.evtx).</td></tr>

</table></div>


<h3 class="qz-theory"><span class="en">Application File Structures</span><span class="vi">Cấu trúc tệp ứng dụng</span></h3>
<ul>
<li><strong>Browsers:</strong> <span class="en">Store history, cookies, logins and downloads in <strong>SQLite</strong> databases; deleted rows may persist in freelist/unallocated pages and the WAL/journal (recoverable).</span><span class="vi">Lưu lịch sử, cookie, đăng nhập và tải xuống trong CSDL <strong>SQLite</strong>; hàng đã xóa có thể còn trong trang freelist/chưa cấp phát và WAL/journal (khôi phục được).</span></li>
<li><strong><span class="en">Office &amp; PDF:</span><span class="vi">Office &amp; PDF:</span></strong> <span class="en">Modern Office (.docx/.xlsx) are <strong>OOXML = ZIP containers</strong> (older = OLE compound) — unpack to inspect macros, embedded objects and external relationships <em>without opening in the app</em>. A PDF with <code>/OpenAction</code> + <code>/JavaScript</code> can auto-run script on open — analyse statically (pdfid).</span><span class="vi">Office hiện đại (.docx/.xlsx) là <strong>OOXML = container ZIP</strong> (cũ hơn = OLE compound) — giải nén để xem macro, đối tượng nhúng và quan hệ ngoài <em>mà không mở trong app</em>. PDF có <code>/OpenAction</code> + <code>/JavaScript</code> có thể tự chạy script khi mở — phân tích tĩnh (pdfid).</span></li>
<li><strong>Email:</strong> <span class="en">Outlook stores mail in <strong>PST</strong> (archive) or <strong>OST</strong> (cached server mailbox) files — parse to recover emails/attachments; deleted items may remain.</span><span class="vi">Outlook lưu thư trong file <strong>PST</strong> (lưu trữ) hoặc <strong>OST</strong> (cache hộp thư server) — phân tích để khôi phục email/đính kèm; mục đã xóa có thể còn.</span></li></ul>
`;
