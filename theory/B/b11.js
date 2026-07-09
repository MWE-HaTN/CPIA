/* Theory — B11 (Appendix B). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["b11"]=`<h2>B11 — Understanding Common Data Formats</h2>

<div class="tier recall" id="b11-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Email Received chain:</strong> <span class="en">Read Received: headers bottom-up; the bottom-most (added by your own servers) is the most reliable origin.</span><span class="vi">Đọc header Received: từ dưới lên; dòng dưới cùng (do máy chủ của bạn thêm) là nguồn gốc đáng tin nhất.</span></li>
<li><strong>Spoofable header fields:</strong> <span class="en">From, Reply-To, X-Mailer are client-supplied — easily forged. SPF/DKIM/DMARC help verify.</span><span class="vi">From, Reply-To, X-Mailer do client cung cấp — dễ giả. SPF/DKIM/DMARC giúp xác minh.</span></li>
<li><strong>Encoding ≠ encryption:</strong> <span class="en">Base64 (text-safe) and URL-encoding are reversible with NO secret; MIME wraps attachments in Base64.</span><span class="vi">Base64 (an toàn text) và URL-encoding đảo ngược được mà KHÔNG cần bí mật; MIME bọc đính kèm bằng Base64.</span></li>
<li><strong>URL-encoded attacks:</strong> <span class="en">"%3Cscript%3E" = "&lt;script&gt;" (XSS probe); "..%2f" = "../" (path traversal).</span><span class="vi">"%3Cscript%3E" = "&lt;script&gt;" (thăm dò XSS); "..%2f" = "../" (path traversal).</span></li>
<li><strong>PKI certificate binds:</strong> <span class="en">A public key to a subject identity, signed by a CA; check chain, validity and hostname.</span><span class="vi">Một khóa công khai với một danh tính subject, được CA ký; kiểm tra chuỗi, thời hạn và hostname.</span></li>
</ul></div></div>

<details class="tier concept" id="b11-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Đọc email header &amp; độ tin cậy</h4>
<p>Mỗi mail server trên đường đi thêm một dòng <strong>Received:</strong> lên <em>đầu</em> → đọc <strong>từ dưới lên</strong> để lần theo hành trình. Dòng <em>dưới cùng</em> (do hệ thống của bạn thêm) đáng tin nhất; các dòng trên có thể do server không tin cậy thêm. Các trường <strong>From, Reply-To, X-Mailer</strong> do người gửi tự đặt → <em>dễ giả mạo</em>; dùng <strong>SPF</strong> (IP gửi có được phép?), <strong>DKIM</strong> (chữ ký), <strong>DMARC</strong> (chính sách) để đánh giá tính xác thực.</p>

<h4>Encoding dùng trong web/email</h4>
<p><strong>Base64</strong>: biến nhị phân thành text an toàn để truyền (đính kèm email qua MIME, dữ liệu trong web) — <em>không phải mã hóa</em>, ai cũng giải được. <strong>URL/percent-encoding</strong>: mã hóa ký tự đặc biệt trong URL; kẻ tấn công dùng để né lọc (vd <code>%3Cscript%3E</code> = <code>&lt;script&gt;</code> cho XSS; <code>..%2f</code> = <code>../</code> cho path traversal). Nhận ra encoding để giải mã và đánh giá ý đồ.</p>

<h4>Chứng chỉ PKI</h4>
<p>Một chứng chỉ X.509 <strong>gắn một khóa công khai với một danh tính (subject)</strong>, được một <strong>CA</strong> ký. Khi kiểm tra để bắt giả mạo: (1) chuỗi tới một <strong>CA tin cậy</strong>, (2) còn <strong>trong hạn</strong>, (3) <strong>hostname khớp</strong> (CN/SAN). Trường issuer, serial, ngày tạo, SAN còn hữu ích để pivot hạ tầng (xem C3 — Certificate Transparency).</p>
</div></details>

<details class="tier reference" id="b11-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Email header fields</h4>
<div class="table-wrap"><table>
<tr><th>Field</th><th>Reliability</th></tr>
<tr><td>Received: (bottom-most)</td><td>Most reliable origin (your servers)</td></tr>
<tr><td>From / Reply-To</td><td>Client-supplied — spoofable</td></tr>
<tr><td>X-Mailer / User-Agent</td><td>Mail client + version (spoofable)</td></tr>
<tr><td>SPF / DKIM / DMARC results</td><td>Authentication verdicts</td></tr>
</table></div>

<h4>Encodings</h4>
<div class="table-wrap"><table>
<tr><th>Encoding</th><th>Use</th><th>Reversible?</th></tr>
<tr><td>Base64</td><td>Binary → text (MIME attachments)</td><td>Yes (no key)</td></tr>
<tr><td>URL / percent</td><td>Special chars in URLs</td><td>Yes (no key)</td></tr>
<tr><td>Quoted-printable</td><td>Mostly-text email bodies</td><td>Yes (no key)</td></tr>
</table></div>

<h4>PKI certificate checks</h4>
<div class="table-wrap"><table>
<tr><th>Check</th><th>Why</th></tr>
<tr><td>Chains to a trusted CA</td><td>Trust anchor</td></tr>
<tr><td>In validity period</td><td>Not expired/not-yet-valid</td></tr>
<tr><td>Hostname matches (CN/SAN)</td><td>Spot impersonation</td></tr>
<tr><td>Revocation (CRL/OCSP)</td><td>Not revoked</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="b11-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Parse raw format bảo toàn folding/order; xác định trường nào do sender, relay hay recipient tạo.</li>
<li>Email: đọc Received từ dưới lên và đối chiếu SPF/DKIM/DMARC, Message-ID, Return-Path.</li>
<li>Certificate: chain, subject/SAN, issuer, validity, key usage, signature, revocation.</li>
<li>Decode theo từng layer: URL percent, HTML entity, Base64, quoted-printable, MIME rồi mới phân tích payload.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Received hops, timestamps/timezones, Authentication-Results, DKIM signature.</li>
<li>X.509 SAN, EKU, serial, fingerprints, AIA/CRL/OCSP.</li>
<li>Content-Type, boundary, Content-Transfer-Encoding và charset.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>
<code>openssl x509 -in cert.pem -text -noout</code>
</li>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>CyberChef hoặc script offline; luôn giữ input/output và recipe.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>From hiển thị CEO không đáng tin; Received chain + SPF fail + DKIM absent + Reply-To khác domain mới tạo bằng chứng phishing mạnh.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Header phía sender có thể giả; relay tin cậy thêm header đáng tin hơn.</li>
<li>Encoding không bảo mật; decode nhiều lớp có thể tạo binary nguy hiểm.</li>
<li>Certificate hợp lệ chỉ chứng minh CA cấp cho tên, không chứng minh site là benign.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> RFC 5322, 2045–2049, 5280, 6376, 7208, 7489.</p>
</div>
</details>`;
