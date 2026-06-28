/* Theory — B11 (Appendix B). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["b11"]=`<h2>B11 — Understanding Common Data Formats</h2><ul>

<li><strong>Email headers:</strong> <span class="en">Read Received chain from bottom upward; earliest trusted server is most useful.</span><span class="vi">Đọc chuỗi Received từ dưới lên trên; server tin cậy sớm nhất là hữu ích nhất.</span></li>

<li><strong>Header reliability:</strong> <span class="en">Client-supplied fields such as From, Reply-To, X-Mailer, and User-Agent can be spoofed.</span><span class="vi">Các trường do client cung cấp như From, Reply-To, X-Mailer và User-Agent có thể bị giả mạo.</span></li>

<li><strong>PKI certificates:</strong> <span class="en">Subject, Issuer, SAN, validity, serial, fingerprint, public key, key usage, CA trust path.</span><span class="vi">Subject, Issuer, SAN, thời hạn hiệu lực, serial, fingerprint, khóa công khai, key usage, đường dẫn tin cậy CA.</span></li>

<li><strong>Transmission encodings:</strong> <span class="en">Base64, URL encoding, quoted-printable, hex, HTML entities; decode before analysis.</span><span class="vi">Base64, URL encoding, quoted-printable, hex, thực thể HTML; giải mã trước khi phân tích.</span></li>

<li><strong>Common data formats:</strong> <span class="en">JSON, XML, CSV, MIME email, PCAP, EVTX, SQLite, Office Open XML, OLE, PDF.</span><span class="vi">JSON, XML, CSV, email MIME, PCAP, EVTX, SQLite, Office Open XML, OLE, PDF.</span></li>

</ul>

<h3>Common Data Formats (Expanded)</h3>

<p class="sub-heading">Format Descriptions</p>

<p><strong>PCAP — Packet Capture</strong></p><p>Structure: Global Header (magic number, version, snaplen, link type) → Per-Packet Header (timestamp, captured length, original length) → Packet Data. Readable by Wireshark, tcpdump, tshark, and Zeek.</p>

<p class="sub-heading">EVTX — Windows Event Log</p><p>Binary XML format with chunked storage. Parse with Event Viewer, <code>python-evtx</code>, EvtxECmd, or Chainsaw. Each record contains Event ID, Level, TimeCreated, Provider, Channel, and EventData fields.</p>

<p class="sub-heading">SQLite — Embedded Database</p><p>Single-file relational database (no server). Used by browsers (history, cookies, downloads), mobile apps, chat clients, cloud sync tools, and forensic tools. Queryable with <code>sqlite3</code> CLI or DB Browser for SQLite.</p>

<p class="sub-heading">Office Open XML (<code>.docx</code> / <code>.xlsx</code> / <code>.pptx</code>)</p><p>ZIP archive containing XML files, media, and metadata. Unzip and inspect <code>document.xml</code>, <code>core.xml</code> (author, dates), <code>app.xml</code> (application version). Macros stored in <code>vbaProject.bin</code> inside the ZIP.</p>

<p class="sub-heading">OLE (<code>.doc</code> / <code>.xls</code> / <code>.ppt</code>)</p><p>Binary compound document format. Older Office format. Macros stored directly in VBA streams. Parse with <code>oletools</code> / <code>olevba</code>. Higher risk of embedded malicious macros.</p>

<p class="sub-heading">PDF</p><p>Structure: header, body (objects), cross-reference table, trailer. Can contain JavaScript (<code>/JS</code>), <code>/OpenAction</code>, <code>/Launch</code> actions, embedded files (<code>/EmbeddedFiles</code>), and streams. Parse with <code>pdfid</code>, <code>pdf-parser</code>.</p>

<p class="sub-heading">MIME — Multipurpose Internet Mail Extensions</p><p>Email format with headers (From, To, Subject, Received chain) and body (text, HTML, attachments as Base64-encoded parts). Boundary markers separate multipart sections.</p>


<h3 class="qz-theory"><span class="en">Email Headers, Certificates &amp; Encodings</span><span class="vi">Header email, chứng chỉ &amp; encoding</span></h3>
<ul>
<li><strong><span class="en">Email headers:</span><span class="vi">Header email:</span></strong> <span class="en"><code>From:</code>/<code>Reply-To:</code> are trivially spoofed. <code>Received:</code> lines are stamped by each MTA and read <em>bottom-up</em> (oldest first); only hops you control are reliable. <strong>SPF</strong> (TXT) lists authorised sending servers; <strong>DKIM</strong> adds a signature; <strong>DMARC</strong> sets policy/alignment.</span><span class="vi"><code>From:</code>/<code>Reply-To:</code> dễ giả. Dòng <code>Received:</code> do từng MTA đóng dấu, đọc <em>từ dưới lên</em> (cũ nhất trước); chỉ các hop bạn kiểm soát mới đáng tin. <strong>SPF</strong> (TXT) liệt kê máy chủ gửi được phép; <strong>DKIM</strong> thêm chữ ký; <strong>DMARC</strong> đặt chính sách/alignment.</span></li>
<li><strong>MIME:</strong> <span class="en">Attachments are encoded as <strong>Base64</strong> (text-safe) — encoding, not encryption; decode to inspect.</span><span class="vi">File đính kèm mã hóa <strong>Base64</strong> (an toàn dạng text) — encoding, không phải mã hóa; giải mã để kiểm tra.</span></li>
<li><strong><span class="en">PKI / X.509 certificate:</span><span class="vi">Chứng chỉ PKI / X.509:</span></strong> <span class="en">Binds a public key to a subject identity, signed by a CA. Validate: chains to a trusted CA, in-date, and subject/SAN matches the hostname (and not revoked). Self-signed/expired/mismatched certs are red flags.</span><span class="vi">Ràng buộc khóa công khai với danh tính chủ thể, do CA ký. Kiểm tra: dây chuyền tới CA tin cậy, còn hạn, subject/SAN khớp hostname (và không bị thu hồi). Cert tự ký/hết hạn/không khớp là cờ đỏ.</span></li>
<li><strong><span class="en">URL/percent encoding:</span><span class="vi">Mã hóa URL/percent:</span></strong> <span class="en"><code>%3C</code>/<code>%3E</code> decode to <code>&lt;</code>/<code>&gt;</code>, so <code>%3Cscript%3E</code> = <code>&lt;script&gt;</code> — an XSS probe in logs. Recognise URL/Base64/hex/HTML-entity encodings to spot obfuscated attacks.</span><span class="vi"><code>%3C</code>/<code>%3E</code> giải ra <code>&lt;</code>/<code>&gt;</code>, nên <code>%3Cscript%3E</code> = <code>&lt;script&gt;</code> — thăm dò XSS trong log. Nhận diện mã hóa URL/Base64/hex/HTML-entity để phát hiện tấn công bị làm rối.</span></li></ul>
`;
