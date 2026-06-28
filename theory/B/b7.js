/* Theory — B7 (Appendix B). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["b7"]=`<h2>B7 — Cryptography</h2>

<div class="callout danger"><strong>Exam trap — Base64 is not encryption</strong><p><span class="en">Base64, URL encoding, and hexadecimal representation are encoding schemes. They provide no confidentiality and require no secret key. Encryption requires a key and is designed to protect confidentiality.</span><span class="vi">Base64, URL encoding và biểu diễn hex là các sơ đồ mã hóa dữ liệu. Chúng không cung cấp tính bảo mật và không cần khóa bí mật. Mã hóa (encryption) cần khóa và được thiết kế để bảo vệ tính bí mật.</span></p></div>

<div class="table-wrap"><table><tr><th>Concept</th><th>Meaning</th><th>Exam trap</th></tr><tr><td>Encoding</td><td>Reversible representation conversion such as Base64, URL encoding, hex</td><td>Not security. No key.</td></tr><tr><td>Encryption</td><td>Confidentiality using a key</td><td>Can be decrypted with the correct key.</td></tr><tr><td>Hashing</td><td>One-way fingerprint / integrity check</td><td>Not reversible; not confidentiality.</td></tr><tr><td>HMAC</td><td>Message authentication code using a hash and shared secret</td><td>Uses a two-pass construction with inner / outer padding; not simple concatenation of secret + hash.</td></tr></table></div><div class="table-wrap"><table><tr><th>Algorithm</th><th>Type</th><th>Status / note</th></tr><tr><td>DES</td><td>Symmetric</td><td>Broken; 56-bit key.</td></tr><tr><td>3DES</td><td>Symmetric</td><td>Deprecated; legacy only.</td></tr><tr><td>AES</td><td>Symmetric</td><td>Current standard; common in TLS, disk encryption, ransomware. Key sizes: 128-bit (10 rounds), 192-bit (12 rounds), 256-bit (14 rounds). No AES-64 or AES-512 — common exam trap.</td></tr><tr><td>RC4</td><td>Stream cipher</td><td>Broken; seen in legacy malware / WEP.</td></tr><tr><td>RSA</td><td>Asymmetric</td><td>Public / private key; used for key exchange / signatures, not bulk encryption. Minimum 2048-bit (current recommendation). 1024-bit = broken. 4096-bit = high security. RSA is slow → used for key exchange, not bulk encryption.</td></tr><tr><td>MD5</td><td>Hash</td><td>Collision-vulnerable; still used for malware lookup, not strong evidence alone.</td></tr><tr><td>SHA-256</td><td>Hash</td><td>Current standard for evidence integrity.</td></tr></table></div><ul>

<li><span class="en">For evidence, compute at least SHA-256; MD5 may be included for tool compatibility.</span><span class="vi">Với bằng chứng, tính ít nhất SHA-256; MD5 có thể bổ sung để tương thích công cụ.</span></li>

<li><span class="en">Hybrid encryption: encrypt data with AES, encrypt AES key with RSA.</span><span class="vi">Mã hóa lai: mã hóa dữ liệu bằng AES, mã hóa khóa AES bằng RSA.</span></li>

</ul>

<p class="sub-heading">Common Confusions — Crypto</p>

<ul>

<li><strong>Base64 is encoding, not encryption:</strong> <span class="en">No key is required to reverse it.</span><span class="vi">Không cần khóa để đảo ngược.</span></li>

<li><strong>Hashing is not encryption:</strong> <span class="en">Hashes are one-way fingerprints.</span><span class="vi">Hash là dấu vân tay một chiều.</span></li>

<li><strong>HMAC is not just a hash:</strong> <span class="en">It includes a shared secret for integrity / authenticity.</span><span class="vi">Nó bao gồm khóa bí mật chung cho tính toàn vẹn / xác thực.</span></li>

<li><strong>RSA is not normally used for bulk data:</strong> <span class="en">Hybrid encryption commonly uses AES for data and RSA to protect the AES key.</span><span class="vi">Mã hóa lai thường dùng AES cho dữ liệu và RSA để bảo vệ khóa AES.</span></li>

</ul>

<div class="callout info"><strong>Exam tip:</strong> <span class="en">Match the primitive to the security property: encryption = confidentiality, hash = integrity / fingerprint, HMAC = integrity / authenticity, signature = authenticity / non-repudiation.</span><span class="vi">Ghép primitive với thuộc tính bảo mật: mã hóa = tính bí mật, hash = tính toàn vẹn / dấu vân tay, HMAC = toàn vẹn / xác thực, chữ ký = xác thực / không thể chối bỏ.</span></div>

<div class="callout info"><strong>Common confusion:</strong><p><span class="en">Encoding changes representation, encryption protects confidentiality with a key, hashing creates a one-way digest, and HMAC authenticates a message using a shared secret with inner / outer padding.</span><span class="vi">Encoding thay đổi cách biểu diễn, encryption bảo vệ tính bí mật bằng khóa, hashing tạo digest một chiều, và HMAC xác thực thông điệp dùng khóa bí mật chung với padding trong / ngoài.</span></p></div>

<h3>TLS 1.2 vs TLS 1.3</h3>

<div class="table-wrap"><table>

<tr><th>Feature</th><th>TLS 1.2</th><th>TLS 1.3</th></tr>

<tr><td>Handshake round trips</td><td>2 round trips (full handshake)</td><td>1 round trip (1-RTT); 0-RTT resumption possible</td></tr>

<tr><td>Key exchange</td><td>RSA, DHE, ECDHE (configurable)</td><td>ECDHE or DHE only (forward secrecy mandatory)</td></tr>

<tr><td>Cipher suites</td><td>Many combinations (e.g., RSA key exchange + AES-CBC)</td><td>Only 5 cipher suites; all use AEAD (AES-GCM, ChaCha20)</td></tr>

<tr><td>Static RSA key exchange</td><td>Supported (no forward secrecy)</td><td>Removed — forward secrecy mandatory</td></tr>

<tr><td>Certificate signing</td><td>RSA or ECDSA</td><td>RSA or ECDSA</td></tr>

<tr><td>0-RTT</td><td>Not supported</td><td>Supported (replay attack risk)</td></tr>

<tr><td>Server certificate visibility</td><td>Visible in handshake</td><td>Encrypted in handshake</td></tr>

<tr><td>Legacy algorithms</td><td>RC4, 3DES, SHA-1 still possible</td><td>All removed</td></tr>

</table></div>

<div class="callout warning"><strong>Exam tip:</strong> <span class="en">TLS 1.3 encrypts the server certificate, which means network monitoring tools cannot see certificate details without decryption. This affects IR visibility — rely on endpoint logs, JA3 / JA4 fingerprints, and SNI (which is still visible).</span><span class="vi">TLS 1.3 mã hóa chứng chỉ server, nghĩa là công cụ giám sát mạng không thể thấy chi tiết chứng chỉ mà không giải mã. Điều này ảnh hưởng đến tầm nhìn IR — hãy dựa vào log endpoint, dấu vân tay JA3 / JA4 và SNI (vẫn còn nhìn thấy được).</span></div>

<h3>Certificate Pinning</h3>

<ul>

<li><strong>What:</strong> <span class="en">Application hardcodes expected certificate or public key; rejects connections with different certificates even if trusted by the OS.</span><span class="vi">Ứng dụng nhúng cứng chứng chỉ hoặc khóa công khai mong đợi; từ chối kết nối với chứng chỉ khác dù được OS tin tưởng.</span></li>

<li><strong>Purpose:</strong> <span class="en">Prevents MITM even with a compromised CA; protects against certificate mis-issuance.</span><span class="vi">Ngăn MITM ngay cả khi CA bị xâm phạm; bảo vệ khỏi việc cấp chứng chỉ sai.</span></li>

<li><strong>IR impact:</strong> <span class="en">Legitimate inspection tools (corporate proxies, forensic capture) may be blocked by pinning — the application sees the proxy's certificate and rejects it.</span><span class="vi">Công cụ kiểm tra hợp lệ (proxy công ty, bắt gói pháp y) có thể bị pinning chặn — ứng dụng thấy chứng chỉ của proxy và từ chối.</span></li>

<li><strong>Examples:</strong> <span class="en">Chrome previously used HPKP (deprecated); mobile apps often implement custom pinning; certificate transparency logs help detect mis-issuance.</span><span class="vi">Chrome trước đây dùng HPKP (đã bị deprecated); ứng dụng mobile thường triển khai pinning tùy chỉnh; log certificate transparency giúp phát hiện cấp chứng chỉ sai.</span></li>

<li><strong>Bypass for IR:</strong> <span class="en">Use endpoint-based capture rather than network interception; check application trust stores; some pinning can be bypassed with Frida or similar tools in authorised testing.</span><span class="vi">Dùng bắt gói dựa trên endpoint thay vì chặn mạng; kiểm tra trust store của ứng dụng; một số pinning có thể bị vượt qua với Frida hoặc công cụ tương tự trong kiểm thử được ủy quyền.</span></li>

</ul>

<p class="sub-heading">Encryption Across the Investigation Lifecycle</p>

<div class="table-wrap"><table><tr><th>Section</th><th>Context</th></tr><tr><td>B7 / B8</td><td>Understanding crypto primitives — what they do</td></tr><tr><td>D6</td><td>Encrypted traffic analysis — what metadata survives</td></tr><tr><td>D7</td><td>C2 encryption — attacker hides communications</td></tr><tr><td>D8</td><td>Exfiltration encryption — attacker hides stolen data</td></tr><tr><td>E11</td><td>Ransomware encryption — attacker destroys data</td></tr><tr><td>F6</td><td>Malware crypto analysis — finding keys and weaknesses</td></tr></table></div>

<p>A single scenario question may require combining knowledge from multiple sections. For example: <em>"Encrypted outbound traffic to a rare destination with small regular payloads"</em> requires combining D5 (beaconing), D6 (encrypted traffic), D7 (C2), and A5 (IoC classification).</p>


<h3 class="qz-theory"><span class="en">Cryptography Fundamentals</span><span class="vi">Nền tảng mật mã</span></h3>
<ul>
<li><strong><span class="en">Encoding ≠ encryption:</span><span class="vi">Encoding ≠ encryption:</span></strong> <span class="en">Encoding (Base64, hex, URL) only changes representation and is reversible by anyone — no confidentiality. Encryption needs a key.</span><span class="vi">Encoding (Base64, hex, URL) chỉ đổi cách biểu diễn và ai cũng đảo ngược được — không bảo mật. Encryption cần khóa.</span></li>
<li><strong><span class="en">Symmetric vs asymmetric:</span><span class="vi">Đối xứng vs bất đối xứng:</span></strong> <span class="en">Symmetric (AES, 3DES, RC4) uses one shared key; asymmetric (RSA) uses a public/private key pair for key exchange and signatures.</span><span class="vi">Đối xứng (AES, 3DES, RC4) dùng một khóa chung; bất đối xứng (RSA) dùng cặp khóa công khai/riêng cho trao đổi khóa và chữ ký.</span></li>
<li><strong><span class="en">Block vs stream:</span><span class="vi">Block vs stream:</span></strong> <span class="en">AES is a block cipher (128-bit blocks); RC4 is a stream cipher with known biases — now insecure (broke WEP).</span><span class="vi">AES là block cipher (khối 128-bit); RC4 là stream cipher có thiên lệch — nay không an toàn (phá WEP).</span></li>
<li><strong><span class="en">Strength order:</span><span class="vi">Thứ tự độ mạnh:</span></strong> DES (56-bit, broken) &lt; 3DES &lt; AES (128/192/256).</li>
<li><strong>Hashes:</strong> <span class="en">SHA-256/SHA family &amp; MD5 give an integrity fingerprint (any change → different hash). MD5 is collision-prone, so a matching MD5 no longer proves identical content — use SHA-256 for integrity.</span><span class="vi">Họ SHA-256/SHA &amp; MD5 cho dấu vân tay toàn vẹn (thay đổi bất kỳ → hash khác). MD5 dễ va chạm, nên MD5 trùng không còn chứng minh nội dung giống hệt — dùng SHA-256 cho toàn vẹn.</span></li>
<li><strong>HMAC:</strong> <span class="en">Hash + shared secret → message integrity AND authenticity (not confidentiality).</span><span class="vi">Hash + bí mật chung → toàn vẹn VÀ xác thực thông điệp (không bảo mật).</span></li>
<li><strong><span class="en">Digital signature:</span><span class="vi">Chữ ký số:</span></strong> <span class="en">Sign a hash with your <em>private</em> key; verify with your <em>public</em> key. (Encrypting FOR someone uses <em>their</em> public key.)</span><span class="vi">Ký một hash bằng khóa <em>riêng</em> của bạn; xác minh bằng khóa <em>công khai</em> của bạn. (Mã hóa GỬI CHO ai đó dùng khóa công khai của <em>họ</em>.)</span></li>
<li><strong><span class="en">Mode &amp; salting:</span><span class="vi">Chế độ &amp; salt:</span></strong> <span class="en">ECB encrypts equal plaintext blocks to equal ciphertext (leaks patterns — the "ECB penguin"); use CBC/CTR/GCM. A per-password <strong>salt</strong> defeats precomputed rainbow tables and makes equal passwords hash differently.</span><span class="vi">ECB mã hóa các khối plaintext bằng nhau thành ciphertext bằng nhau (lộ mẫu — "ECB penguin"); dùng CBC/CTR/GCM. <strong>Salt</strong> theo từng mật khẩu vô hiệu rainbow table tính trước và làm mật khẩu giống nhau cho hash khác nhau.</span></li></ul>
`;
