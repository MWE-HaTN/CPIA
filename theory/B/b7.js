/* Theory — B7 (Appendix B). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["b7"]=`<h2>B7 — Cryptography</h2>

<div class="tier recall" id="b7-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Encryption vs encoding:</strong> <span class="en">Encryption needs a key (confidentiality); encoding (e.g. Base64) is reversible with NO secret.</span><span class="vi">Mã hóa cần khóa (bí mật); encoding (vd Base64) đảo ngược được mà KHÔNG cần bí mật.</span></li>
<li><strong>Symmetric:</strong> <span class="en">One shared key — fast. AES, 3DES, DES (weak), RC4 (stream, insecure).</span><span class="vi">Một khóa chung — nhanh. AES, 3DES, DES (yếu), RC4 (stream, không an toàn).</span></li>
<li><strong>Asymmetric:</strong> <span class="en">Public/private key pair — RSA. Slower; used for key exchange &amp; signatures.</span><span class="vi">Cặp khóa công khai/riêng — RSA. Chậm hơn; dùng để trao khóa &amp; chữ ký.</span></li>
<li><strong>Hashes:</strong> <span class="en">One-way, fixed-size digests. Different hashes prove different byte streams; matching weak hashes such as MD5/SHA-1 do not provide modern collision-resistant proof of identity.</span><span class="vi">Digest một chiều, kích thước cố định. Hash khác nhau chứng minh byte stream khác nhau; hash MD5/SHA-1 trùng nhau không cung cấp mức chứng minh định danh chống collision theo chuẩn hiện đại.</span></li>
<li><strong>HMAC:</strong> <span class="en">Keyed hash → message integrity AND authenticity.</span><span class="vi">Hash có khóa → toàn vẹn VÀ xác thực thông điệp.</span></li>
<li><strong>Digital signature:</strong> <span class="en">A signature algorithm uses a private key to sign a message representation and a public key to verify it; it is not generally “encryption with the private key”.</span><span class="vi">Thuật toán chữ ký dùng private key để ký biểu diễn của thông điệp và public key để xác minh; không nên đồng nhất chung với “mã hóa bằng private key”.</span></li>
<li><strong>Salt:</strong> <span class="en">A unique random salt before hashing passwords defeats precomputed rainbow tables.</span><span class="vi">Một salt ngẫu nhiên duy nhất trước khi hash mật khẩu vô hiệu rainbow table dựng sẵn.</span></li>
</ul></div></div>

<details class="tier concept" id="b7-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Mã hóa vs encoding vs hashing (đừng nhầm)</h4>
<p><strong>Encoding</strong> (Base64, URL-encode) chỉ đổi định dạng để truyền — <em>ai cũng đảo ngược được</em>, không có bí mật. <strong>Encryption</strong> cần <em>khóa</em> để bảo mật nội dung. <strong>Hash</strong> là một chiều (không đảo ngược), cho ra giá trị cố định dùng để kiểm tra toàn vẹn/định danh file.</p>

<h4>Đối xứng vs bất đối xứng</h4>
<p><strong>Đối xứng</strong> (AES, 3DES, DES, RC4): một khóa chung cho cả mã hóa và giải mã — <em>nhanh</em>, hợp cho dữ liệu lớn; vấn đề là <em>trao khóa an toàn</em>. <strong>Bất đối xứng</strong> (RSA): cặp khóa công khai/riêng — chậm hơn, dùng để <em>trao khóa phiên</em> và <em>chữ ký số</em>. TLS kết hợp cả hai: bất đối xứng để thỏa thuận khóa, rồi đối xứng cho phiên.</p>

<h4>Hash, HMAC, chữ ký</h4>
<p><strong>Hash</strong> (SHA-256, MD5): hỗ trợ kiểm tra toàn vẹn/định danh byte stream. Nếu hai hash khác nhau thì input khác nhau; vấn đề collision là hai input khác có thể có cùng hash, nên MD5/SHA-1 không còn phù hợp cho security collision resistance. <strong>HMAC</strong> dùng secret key để cung cấp integrity và data-origin authentication giữa các bên biết khóa; nó không tự chỉ ra cá nhân cụ thể. <strong>Chữ ký số</strong> dùng private key để tạo signature trên biểu diễn thông điệp và public key để verify; authenticity còn phụ thuộc việc public key thuộc về ai.</p>

<h4>Chế độ &amp; điểm yếu thường gặp</h4>
<p><strong>ECB mode</strong> yếu: khối plaintext giống nhau → ciphertext giống nhau (lộ mẫu, vd ảnh bitmap). <strong>IV/nonce dùng lại</strong> làm lộ quan hệ giữa các bản rõ. <strong>Salt</strong> chống rainbow table khi lưu hash mật khẩu.</p>
</div></details>

<details class="tier reference" id="b7-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Algorithm classification</h4>
<div class="table-wrap"><table>
<tr><th>Algorithm</th><th>Type</th><th>Note</th></tr>
<tr><td>AES</td><td>Symmetric (block)</td><td>Modern standard</td></tr>
<tr><td>3DES</td><td>Symmetric (block)</td><td>Legacy, slow</td></tr>
<tr><td>DES</td><td>Symmetric (block)</td><td>Weak (56-bit)</td></tr>
<tr><td>RC4</td><td>Symmetric (stream)</td><td>Insecure (biases)</td></tr>
<tr><td>RSA</td><td>Asymmetric</td><td>Key exchange, signatures</td></tr>
<tr><td>MD5</td><td>Hash</td><td>Collision-prone</td></tr>
<tr><td>SHA-1 / SHA-256</td><td>Hash</td><td>SHA-1 weak; SHA-256 OK</td></tr>
<tr><td>HMAC</td><td>Keyed hash (MIC)</td><td>Integrity + authenticity</td></tr>
</table></div>

<h4>Strength order &amp; key facts</h4>
<div class="table-wrap"><table>
<tr><th>Item</th><th>Fact</th></tr>
<tr><td>Symmetric strength</td><td>DES &lt; 3DES &lt; AES</td></tr>
<tr><td>Encoding vs encryption</td><td>Encoding = no key (Base64); encryption = key</td></tr>
<tr><td>Digital signature</td><td>Private-key signing, public-key verification; not generic private-key encryption</td></tr>
<tr><td>Salt</td><td>Defeats rainbow tables</td></tr>
<tr><td>ECB weakness</td><td>Equal blocks → equal ciphertext</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="b7-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Xác định mục tiêu: confidentiality, integrity, authenticity hay password storage.</li>
<li>Phân loại encoding/hash/MAC/encryption/signature; nhận diện algorithm, mode, key/nonce/IV.</li>
<li>Đánh giá key length, randomness, reuse, padding và key management.</li>
<li>Xác minh bằng known-answer test hoặc thư viện chuẩn, không tự thiết kế crypto.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Cipher suite, OID, salt, IV/nonce, tag, key derivation parameters.</li>
<li>Hash digest length; HMAC key usage; certificate public key/signature.</li>
<li>Hard-coded key, repeated nonce/IV, ECB pattern và weak RNG.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>
<code>certutil -hashfile file SHA256</code>; <code>openssl dgst -sha256 file</code>
</li>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Base64 decode không phải decryption.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Hai ciphertext AES-GCM dùng cùng key+nonce là lỗi nghiêm trọng dù AES mạnh; security phụ thuộc implementation và key management.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>MD5/SHA-1 không collision-resistant nhưng có thể vẫn dùng làm non-adversarial checksum.</li>
<li>RSA thường mã hóa key nhỏ hoặc ký, không mã hóa bulk data.</li>
<li>Hash không đảo ngược nhưng password yếu vẫn bị dictionary attack; cần salt + KDF.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> NIST FIPS 197 (AES); FIPS 180-4 (Secure Hash Standard); FIPS 186-5 (Digital Signature Standard); NIST SP 800-38 series; RFC 2104 (HMAC); NIST SHA-1 transition guidance.</p>
</div>
</details>`;
