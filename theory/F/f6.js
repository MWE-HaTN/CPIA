/* Theory — F6 (Appendix F). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["f6"]=`<h2>F6 — Cryptographic Techniques</h2>

<div class="tier recall" id="f6-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Recover key at runtime:</strong> <span class="en">Breakpoint the crypto/key-setup routine and read the key from memory — the most reliable way.</span><span class="vi">Đặt breakpoint tại thủ tục mã hóa/thiết lập khóa và đọc khóa từ bộ nhớ — cách đáng tin nhất.</span></li>
<li><strong>Single-byte XOR:</strong> <span class="en">Recover with known-plaintext (XOR a known 'MZ' header) or brute-force all 256 keys.</span><span class="vi">Khôi phục bằng known-plaintext (XOR một header 'MZ' đã biết) hoặc brute-force cả 256 khóa.</span></li>
<li><strong>Hard-coded key = weakness:</strong> <span class="en">If AES is used but the key is shipped inside the binary, analysts can extract it and decrypt captured C2.</span><span class="vi">Nếu dùng AES nhưng khóa nằm trong binary, analyst trích được và giải mã C2 đã bắt.</span></li>
<li><strong>ECB tell:</strong> <span class="en">Repeating 16-byte blocks in "encrypted" output = ECB mode (identical plaintext blocks repeat).</span><span class="vi">Khối 16-byte lặp lại trong output "mã hóa" = chế độ ECB (khối plaintext giống nhau lặp lại).</span></li>
<li><strong>IV/nonce reuse:</strong> <span class="en">Reusing the same IV/nonce leaks relationships between plaintexts.</span><span class="vi">Dùng lại IV/nonce làm lộ quan hệ giữa các bản rõ.</span></li>
<li><strong>Static "key":</strong> <span class="en">A key derived from a fixed string hashed once is static/reproducible — no real secrecy.</span><span class="vi">Khóa dẫn xuất từ một chuỗi cố định băm một lần là cố định/tái tạo được — không có bí mật thật.</span></li>
</ul></div></div>

<details class="tier concept" id="f6-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Tìm &amp; trích key material</h4>
<p>Cách đáng tin nhất để lấy khóa/decryption key: <strong>phân tích động</strong> — đặt breakpoint <em>sau khi key được thiết lập</em> (hoặc tại thủ tục crypto) rồi đọc buffer khóa từ bộ nhớ. Với obfuscation yếu (XOR một byte): dùng <strong>known-plaintext</strong> (vd biết file bắt đầu bằng "MZ" → XOR ra khóa) hoặc brute-force 256 khóa. Sau khi có routine giải mã, cho chạy trong debugger và dump chuỗi đã giải.</p>

<h4>Điểm yếu hiện thực (implementation weakness)</h4>
<p>Malware thường dùng mật mã <em>sai cách</em>, tạo điểm yếu để khai thác/giải mã:</p>
<ul>
<li><strong>Khóa nhúng trong binary</strong> → analyst trích ra và giải mã được C2 đã bắt.</li>
<li><strong>ECB mode</strong> → khối plaintext giống nhau cho khối ciphertext giống nhau (lộ mẫu, lặp 16-byte).</li>
<li><strong>IV/nonce dùng lại</strong> → lộ quan hệ giữa các bản rõ.</li>
<li><strong>"Khóa" tĩnh</strong> (chuỗi cố định băm một lần) → giống hệt mọi lần lây, tái tạo được.</li>
<li><strong>Tự viết crypto lỗi</strong> → thường có sai sót khai thác được.</li>
</ul>
</div></details>

<details class="tier reference" id="f6-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Recovering keys</h4>
<div class="table-wrap"><table>
<tr><th>Situation</th><th>Approach</th></tr>
<tr><td>Key set up at runtime</td><td>Breakpoint after key setup, read memory</td></tr>
<tr><td>Single-byte XOR</td><td>Known-plaintext or brute-force 256 keys</td></tr>
<tr><td>Hard-coded key</td><td>Extract from binary → decrypt captured C2</td></tr>
<tr><td>After decrypt routine</td><td>Run in debugger, dump decrypted strings</td></tr>
</table></div>

<h4>Implementation weaknesses</h4>
<div class="table-wrap"><table>
<tr><th>Weakness</th><th>Consequence</th></tr>
<tr><td>Embedded key</td><td>Decryptable by analysts</td></tr>
<tr><td>ECB mode</td><td>Repeating blocks leak patterns</td></tr>
<tr><td>IV/nonce reuse</td><td>Plaintext relationships leak</td></tr>
<tr><td>Static derived key</td><td>Reproducible, no secrecy</td></tr>
<tr><td>Custom/buggy crypto</td><td>Exploitable flaws</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="f6-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Tìm key/IV/nonce/KDF quanh crypto call, constants, config và memory.</li>
<li>Đặt breakpoint trước/ sau encrypt/decrypt; dump input/output/key với provenance.</li>
<li>Đánh giá hard-coded key, nonce reuse, weak RNG/mode/padding và verify bằng decrypt round-trip.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Key schedule, expanded key, password/salt/iterations, CryptoAPI/OpenSSL context.</li>
<li>Stack/heap buffer, registry/file config, network session key.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-impact">LIVE-IMPACT</span>Debugger watchpoint/breakpoint tại BCrypt*/Crypt*/EVP_*; memory search known plaintext.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Không cần phá AES nếu malware hard-code key hoặc giữ plaintext/key trong RAM; implementation thường là điểm yếu.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Key-like bytes có nhiều false positive.</li>
<li>Dump sai thời điểm có thể lấy expanded key thay raw key.</li>
<li>Xử lý key thật như sensitive evidence.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> NIST SP 800-38/57/132; platform crypto API documentation.</p>
</div>
</details>`;
