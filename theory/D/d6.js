/* Theory — D6 (Appendix D). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d6"]=`<h2>D6 — Encryption</h2>

<div class="tier recall" id="d6-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Channel fingerprinting (JA3):</strong> <span class="en">Identify a client by HOW it negotiates TLS (the ClientHello) — works without decrypting.</span><span class="vi">Nhận diện client qua CÁCH nó thỏa thuận TLS (ClientHello) — không cần giải mã.</span></li>
<li><strong>Flow analysis without decryption:</strong> <span class="en">Volume, direction, timing and packet-size patterns still characterise an encrypted flow.</span><span class="vi">Khối lượng, chiều, thời gian và mẫu kích thước gói vẫn mô tả được một luồng mã hóa.</span></li>
<li><strong>Entropy caveat:</strong> <span class="en">High entropy alone can't tell encryption from compression — both look near-random.</span><span class="vi">Chỉ entropy cao không phân biệt được mã hóa với nén — cả hai đều gần ngẫu nhiên.</span></li>
<li><strong>Weak obfuscation:</strong> <span class="en">Single-byte XOR, ROL/ROR, or codebooks are weak, easily reversed (e.g. known-plaintext).</span><span class="vi">XOR một byte, ROL/ROR, hoặc codebook là yếu, dễ đảo (vd known-plaintext).</span></li>
<li><strong>ECB tell:</strong> <span class="en">Repeating identical ciphertext blocks reveal ECB mode (patterns leak).</span><span class="vi">Các khối ciphertext giống nhau lặp lại lộ chế độ ECB (lộ mẫu).</span></li>
</ul></div></div>

<details class="tier concept" id="d6-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Phân tích lưu lượng mã hóa mà không giải mã</h4>
<p>Không cần giải mã vẫn đặc trưng hóa được một flow: <strong>channel/TLS fingerprinting (JA3/JA3S)</strong> nhận diện client/server qua cách dựng ClientHello/ServerHello (bộ cipher, extension, thứ tự) — bắt được malware dùng thư viện TLS riêng. <strong>Flow analysis</strong>: khối lượng, chiều (upload/download), QoS, thời gian, mẫu kích thước gói — vd beacon đều đặn, exfil upload lớn.</p>

<h4>Entropy: mã hóa hay nén?</h4>
<p>Dữ liệu mã hóa và dữ liệu nén <em>đều có entropy gần cực đại</em> → chỉ nhìn entropy <strong>không phân biệt</strong> được hai loại. Cần thêm ngữ cảnh (header định dạng, cấu trúc, hành vi).</p>

<h4>Obfuscation yếu &amp; de-obfuscation</h4>
<p>Nhiều malware "mã hóa" chuỗi/C2 bằng kỹ thuật yếu: <strong>XOR một byte</strong>, <strong>ROL/ROR n bit</strong>, <strong>codebook/Base64 sửa đổi</strong>. Đây là <em>obfuscation</em>, không phải mật mã thật — đảo ngược dễ: thử <strong>known-plaintext</strong> (vd XOR một header "MZ" đã biết) hoặc brute-force khóa nhỏ. <strong>ECB mode</strong> lộ qua các khối 16-byte lặp lại giống nhau.</p>
</div></details>

<details class="tier reference" id="d6-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Analysing encrypted/obfuscated traffic</h4>
<div class="table-wrap"><table>
<tr><th>Technique</th><th>What it gives</th></tr>
<tr><td>JA3 / JA3S fingerprint</td><td>Client/server TLS identity (no decryption)</td></tr>
<tr><td>Flow analysis</td><td>Volume, direction, timing, packet sizes</td></tr>
<tr><td>Entropy</td><td>Random-looking ≠ proof of encryption</td></tr>
</table></div>

<h4>Weak obfuscation &amp; reversal</h4>
<div class="table-wrap"><table>
<tr><th>Scheme</th><th>Reversal</th></tr>
<tr><td>Single-byte XOR</td><td>Known-plaintext or brute-force 256 keys</td></tr>
<tr><td>ROL / ROR n</td><td>Rotate back</td></tr>
<tr><td>Codebook / modified Base64</td><td>Recover the table</td></tr>
<tr><td>ECB mode</td><td>Identical blocks repeat (pattern leak)</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="d6-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Không giải mã vẫn phân tích metadata: endpoints, timing, size, direction, handshake và fingerprint.</li>
<li>Phân biệt encryption/compression/encoding bằng structure, entropy và decoder test.</li>
<li>Với XOR/ROL/codebook, tìm known plaintext/key period rồi xác minh round-trip.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>TLS version/cipher/SNI/ALPN/cert; flow byte/packet distribution; entropy.</li>
<li>Repeated XOR key, rotate constant, substitution table và plaintext marker.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-active">NETWORK-ACTIVE</span>
<code>openssl s_client</code>; Wireshark TLS fields; CyberChef offline cho XOR/ROL.</li>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Entropy cao không tự chứng minh encryption.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Payload Base64 có entropy vừa và decode ra gzip; phải giải từng layer Base64→gzip, không gọi nhầm là encrypted.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Compressed data cũng entropy cao.</li>
<li>TLS fingerprint có collision và thay đổi theo library/config.</li>
<li>Không thu private key/secret ngoài authority.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> TLS RFC 8446; NIST cryptographic guidance; Wireshark TLS documentation.</p>
</div>
</details>`;
