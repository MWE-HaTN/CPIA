/* Theory — B5 (Appendix B). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["b5"]=`<h2>B5 — Application Fingerprinting</h2>

<div class="tier recall" id="b5-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Service banners:</strong> <span class="en">Connecting to a service often returns software + version (e.g. "SSH-2.0-OpenSSH_7.4", "Server: Apache/2.4.49").</span><span class="vi">Kết nối tới dịch vụ thường trả về phần mềm + phiên bản (vd "SSH-2.0-OpenSSH_7.4", "Server: Apache/2.4.49").</span></li>
<li><strong>HTTP headers:</strong> <span class="en">Server, X-Powered-By, Set-Cookie reveal the server/app stack.</span><span class="vi">Server, X-Powered-By, Set-Cookie lộ stack server/ứng dụng.</span></li>
<li><strong>Client software:</strong> <span class="en">User-Agent strings and email "X-Mailer" headers reveal the client browser/OS or mail client + version.</span><span class="vi">Chuỗi User-Agent và header email "X-Mailer" lộ trình duyệt/OS hoặc mail client + phiên bản.</span></li>
<li><strong>Document metadata:</strong> <span class="en">Office/PDF metadata reveals the authoring application and version (→ patch level).</span><span class="vi">Metadata Office/PDF lộ ứng dụng soạn thảo và phiên bản (→ mức vá).</span></li>
<li><strong>Why it matters:</strong> <span class="en">An exact version maps to known vulnerabilities (CVEs).</span><span class="vi">Phiên bản chính xác ánh xạ tới các lỗ hổng đã biết (CVE).</span></li>
<li><strong>Caveat:</strong> <span class="en">Banners/headers/User-Agents are all spoofable — corroborate before concluding.</span><span class="vi">Banner/header/User-Agent đều có thể giả mạo — đối chiếu trước khi kết luận.</span></li>
</ul></div></div>

<details class="tier concept" id="b5-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Server / dịch vụ fingerprinting</h4>
<p><strong>Banner grabbing</strong>: nhiều dịch vụ tự xưng phần mềm + phiên bản khi kết nối (SSH, SMTP, FTP, HTTP). HTTP header (<code>Server:</code>, <code>X-Powered-By:</code>) và <strong>TLS certificate</strong> (CN, issuer, SAN) cũng cho biết loại/phiên bản server và domain liên quan. Trang lỗi mặc định cũng tiết lộ công nghệ.</p>

<h4>Client software fingerprinting</h4>
<p>Từ dữ liệu bằng chứng: <strong>User-Agent</strong> (vd "MSIE 6.0; Windows NT 5.1" = IE6 trên Windows XP) lộ trình duyệt + OS; <strong>email header</strong> "X-Mailer"/"User-Agent" lộ mail client + phiên bản; <strong>metadata tài liệu</strong> (Office/PDF) lộ ứng dụng soạn thảo + phiên bản. Tất cả giúp đoán mức vá và lỗ hổng.</p>

<h4>Giá trị &amp; cảnh báo</h4>
<p>Biết <strong>phiên bản chính xác</strong> cho phép ánh xạ tới <strong>CVE</strong> đã biết → đánh giá khả năng bị/đã bị khai thác. Nhưng mọi trường này <strong>có thể giả mạo/ẩn</strong> (server đổi banner, User-Agent bịa) — luôn đối chiếu nhiều nguồn (log, hành vi, cert) trước khi kết luận.</p>
</div></details>

<details class="tier reference" id="b5-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Sources of version evidence</h4>
<div class="table-wrap"><table>
<tr><th>Source</th><th>Reveals</th></tr>
<tr><td>Service banner</td><td>Server software + version (SSH/SMTP/FTP/HTTP)</td></tr>
<tr><td>HTTP headers (Server, X-Powered-By)</td><td>Web server / app framework</td></tr>
<tr><td>TLS certificate</td><td>Subject/issuer/SAN — host &amp; CA</td></tr>
<tr><td>User-Agent string</td><td>Client browser + OS</td></tr>
<tr><td>Email X-Mailer / User-Agent</td><td>Mail client + version</td></tr>
<tr><td>Document metadata</td><td>Authoring app + version</td></tr>
</table></div>

<h4>Example reads</h4>
<div class="table-wrap"><table>
<tr><th>String</th><th>Interpretation</th></tr>
<tr><td>SSH-2.0-OpenSSH_7.4</td><td>OpenSSH 7.4 — check CVEs</td></tr>
<tr><td>Server: Apache/2.4.49</td><td>Apache 2.4.49 (path-traversal CVE era)</td></tr>
<tr><td>MSIE 6.0; Windows NT 5.1</td><td>IE6 on Windows XP</td></tr>
<tr><td>X-Mailer: Outlook 16.0</td><td>Composed in Outlook 2016</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="b5-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Thu banner/raw response và metadata mà không làm thay đổi dịch vụ.</li>
<li>So nhiều nguồn: TLS certificate, HTTP headers/body, favicon, protocol capability và error page.</li>
<li>Tách product, version, platform và component phía trước như CDN/WAF/reverse proxy.</li>
<li>Chấm confidence và kiểm tra version có bị che/giả.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Server/X-Powered-By, SMTP/SSH banner, SMB dialect, TLS ALPN/certificate.</li>
<li>User-Agent/client hints, email X-Mailer, Office/PDF producer metadata.</li>
<li>Hash favicon/static assets và default page/error wording.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-active">NETWORK-ACTIVE</span>
<code>curl -vkI https://host</code>, <code>openssl s_client -connect host:443</code>
</li>
<li>
<span class="cmd-safety cmd-active">NETWORK-ACTIVE</span>
<code>nmap -sV</code> chỉ khi active enumeration được phép.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Header nói nginx nhưng cookie/JSESSIONID và lỗi Java cho thấy nginx chỉ reverse proxy trước ứng dụng Java; báo cả hai tầng.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Banner dễ sửa và có thể thuộc proxy.</li>
<li>Version không tự chứng minh vulnerability; cần build/patch/config.</li>
<li>Metadata client có thể do template hoặc mail gateway tạo.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> RFC 9110; TLS RFC 8446; vendor protocol documentation.</p>
</div>
</details>`;
