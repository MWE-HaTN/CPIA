/* Theory — B5 (Appendix B). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["b5"]=`<h2>B5 — Application Fingerprinting</h2><ul>

<li><strong>Server versions:</strong> <span class="en">Service banners, HTTP headers, TLS certificates, error pages, SSH banners, SMTP greetings.</span><span class="vi">Banner dịch vụ, header HTTP, chứng chỉ TLS, trang lỗi, banner SSH, lời chào SMTP.</span></li>

<li><strong>Client versions:</strong> <span class="en">Document metadata, email headers, User-Agent strings, X-Mailer headers.</span><span class="vi">Metadata tài liệu, header email, chuỗi User-Agent, header X-Mailer.</span></li>

<li><strong>Forensics use:</strong> <span class="en">Identify vulnerable software, confirm exploit plausibility, and build attack timeline.</span><span class="vi">Xác định phần mềm dễ bị tấn công, xác nhận khả năng exploit và xây dựng timeline tấn công.</span></li>

<li><strong>Limitation:</strong> <span class="en">Banners can be hidden or falsified; corroborate with logs and behaviour.</span><span class="vi">Banner có thể bị ẩn hoặc làm giả; cần xác nhận chéo với log và hành vi.</span></li>

</ul><h3>Fingerprinting via Banners and Headers</h3><div class="table-wrap"><table><tr><th>Source</th><th>Example</th><th>Reveals</th></tr><tr><td>HTTP <code>Server</code> header</td><td><code>Server: Apache/2.4.41 (Ubuntu)</code></td><td>Web server software + version + OS distribution</td></tr><tr><td>HTTP <code>X-Powered-By</code></td><td><code>X-Powered-By: PHP/7.4.3</code></td><td>Backend language and framework version</td></tr><tr><td>SSH banner (port 22)</td><td><code>SSH-2.0-OpenSSH_8.9p1 Ubuntu</code></td><td>SSH implementation + version + OS</td></tr><tr><td>SMTP greeting (port 25)</td><td><code>220 mail.corp.com ESMTP Postfix</code></td><td>Mail transfer agent software</td></tr><tr><td>TLS JA3 / JA3S hash</td><td>Hash of ClientHello / ServerHello parameters</td><td>Fingerprint application or malware family regardless of destination IP</td></tr></table></div><p><strong>Client software via document metadata — ExifTool:</strong> <code>exiftool filename</code> extracts Author, Company, Machine Name, Application version from 100+ formats. Attacker documents reveal their OS, Office version, and internal username.</p>

<h3>Banner Grabbing</h3>

<ul>

<li><span class="en">Many services announce version on connection. Grab with: <code>nc target.com 80</code> then <code>HEAD / HTTP/1.0</code></span><span class="vi">Nhiều dịch vụ thông báo phiên bản khi kết nối. Lấy bằng: <code>nc target.com 80</code> rồi <code>HEAD / HTTP/1.0</code></span></li>

<li><span class="en">Version disclosure enables CVE identification for that exact version</span><span class="vi">Thông tin phiên bản cho phép xác định CVE cho phiên bản đó</span></li>

<li><span class="en">Absence of banner = hardened server (also informative)</span><span class="vi">Không có banner = server đã tăng cường bảo mật (cũng là thông tin hữu ích)</span></li>

<li><span class="en">Default error pages (404/500) reveal web server type and framework (Django debug page, IIS default page, Rails error)</span><span class="vi">Trang lỗi mặc định (404/500) tiết lộ loại web server và framework (trang debug Django, trang mặc định IIS, lỗi Rails)</span></li>

</ul>

<h3>Client Software Versions from Document Metadata</h3>

<ul>

<li><span class="en">Office documents embed: author, last modified by, creation tool with version, machine name, template path</span><span class="vi">Tài liệu Office nhúng: tác giả, người chỉnh sửa cuối, công cụ tạo kèm phiên bản, tên máy, đường dẫn template</span></li>

<li><span class="en">PDF: Creator, Producer fields reveal generating application and version</span><span class="vi">PDF: trường Creator, Producer tiết lộ ứng dụng tạo file và phiên bản</span></li>

<li><span class="en">Images: EXIF data contains camera model, software used, GPS if enabled</span><span class="vi">Hình ảnh: dữ liệu EXIF chứa model máy ảnh, phần mềm sử dụng, GPS nếu được bật</span></li>

<li><strong>Tool:</strong> <code>exiftool filename</code> — <span class="en">works on 100+ file formats</span><span class="vi">Hỗ trợ 100+ định dạng file</span></li>

<li><strong>IR use:</strong> <span class="en">Attacker document metadata reveals their OS, Office version, username — attribution value</span><span class="vi">Metadata tài liệu của kẻ tấn công tiết lộ OS, phiên bản Office, username — có giá trị truy dấu nguồn gốc</span></li>

</ul>

<p class="sub-heading">Application Fingerprinting</p>

<div class="table-wrap"><table>

<tr><th>Source</th><th>What It Reveals</th><th>Example</th></tr>

<tr><td>Service banners</td><td>Server software + version</td><td><code>SSH-2.0-OpenSSH_8.9p1 Ubuntu</code></td></tr>

<tr><td>HTTP Server header</td><td>Web server + version</td><td><code>Server: Apache/2.4.41 (Ubuntu)</code></td></tr>

<tr><td>HTTP X-Powered-By</td><td>Backend language / framework</td><td><code>X-Powered-By: PHP/7.4.3</code></td></tr>

<tr><td>User-Agent string</td><td>Browser + OS + version</td><td><code>Mozilla/5.0 (Windows NT 10.0; Win64; x64)...</code></td></tr>

<tr><td>Email headers (X-Mailer)</td><td>Email client used</td><td><code>X-Mailer: Microsoft Outlook 16.0</code></td></tr>

<tr><td>Document metadata</td><td>Office version, OS, username</td><td>ExifTool: <code>Creator Tool: Microsoft Word 2019</code></td></tr>

<tr><td>TLS certificate</td><td>Organization, software stack</td><td>CN, SAN fields, certificate authority used</td></tr>

<tr><td>JA3 / JA3S hash</td><td>TLS client / server fingerprint</td><td>Hash of TLS hello parameters — identifies malware families</td></tr>

</table></div>

<p><em>PKI Certificate fields are covered under B11 — Understanding Common Data Formats.</em></p>


<h3 class="qz-theory"><span class="en">Application &amp; Service Fingerprinting</span><span class="vi">Nhận dạng ứng dụng &amp; dịch vụ</span></h3>
<ul>
<li><strong><span class="en">Service banners:</span><span class="vi">Banner dịch vụ:</span></strong> <span class="en">Many services announce software + version on connect (<code>Server: Apache/2.4.49</code>, <code>SSH-2.0-OpenSSH_7.4</code>, SMTP/FTP banners). Reading them (banner grabbing — active) maps the exact version to known CVEs.</span><span class="vi">Nhiều dịch vụ tự khai phần mềm + phiên bản khi kết nối (<code>Server: Apache/2.4.49</code>, <code>SSH-2.0-OpenSSH_7.4</code>, banner SMTP/FTP). Đọc chúng (banner grabbing — chủ động) ánh xạ phiên bản chính xác tới CVE đã biết.</span></li>
<li><strong><span class="en">Client cues:</span><span class="vi">Manh mối client:</span></strong> <span class="en">HTTP <code>User-Agent</code> and email <code>X-Mailer</code> headers reveal the client software/OS; document metadata reveals authoring app versions.</span><span class="vi">Header HTTP <code>User-Agent</code> và email <code>X-Mailer</code> lộ phần mềm/OS client; metadata tài liệu lộ phiên bản app soạn thảo.</span></li>
<li><strong><span class="en">Caveat:</span><span class="vi">Lưu ý:</span></strong> <span class="en">All banners/headers are spoofable — corroborate. Precise versioning matters because it enables CVE mapping (how a breach likely occurred).</span><span class="vi">Mọi banner/header đều có thể giả — cần đối chiếu. Xác định phiên bản chính xác quan trọng vì cho phép ánh xạ CVE (cách xảy ra xâm nhập khả dĩ).</span></li></ul>
`;
