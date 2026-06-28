/* Theory — F6 (Appendix F). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["f6"]=`<h2>F6 — Cryptographic Techniques</h2><ul>

<li><span class="en">Find key material in strings, config blobs, resources, registry, command-line args, memory, or network handshake.</span><span class="vi">Tìm vật liệu khóa trong chuỗi, blob config, tài nguyên, registry, tham số dòng lệnh, bộ nhớ hoặc handshake mạng.</span></li>

<li><span class="en">Common mistakes: hardcoded keys, reused IVs / nonces, weak XOR / RC4, static salts, predictable PRNG.</span><span class="vi">Lỗi thường gặp: khóa nhúng cứng, IV / nonce tái sử dụng, XOR / RC4 yếu, salt tĩnh, PRNG có thể đoán được.</span></li>

<li><span class="en">Extract encrypted config by identifying decrypt routine and input buffer; emulate or debug if needed.</span><span class="vi">Trích xuất config mã hóa bằng cách xác định quy trình giải mã và bộ đệm đầu vào; mô phỏng hoặc debug nếu cần.</span></li>

<li><span class="en">Implementation weaknesses may allow decoding C2 traffic or recovering ransomware keys in poor designs.</span><span class="vi">Yếu điểm trong thực hiện có thể cho phép giải mã lưu lượng C2 hoặc phục hồi khóa ransomware trong thiết kế kém.</span></li>

</ul><h3>Implementation Weaknesses — Identification Table</h3><div class="table-wrap"><table><tr><th>Weakness</th><th>Code Indicator</th><th>Exploit Approach</th></tr><tr><td><strong>ECB mode</strong></td><td>AES called with no IV; ECB mode constant in call</td><td>Same plaintext block → same ciphertext. Statistical analysis reveals plaintext patterns from ciphertext alone.</td></tr><tr><td><strong>IV reuse</strong></td><td>IV hardcoded as <code>\\x00\\x00...\\x00</code> (16 zeros)</td><td>Same IV every session → same keystream. XOR two ciphertexts → cancel keystream → recover XOR of plaintexts.</td></tr><tr><td><strong>Hardcoded key</strong></td><td>Key as global constant in .data or .rdata</td><td>Extract from binary → decrypt ALL victims' traffic with single extracted key.</td></tr><tr><td><strong>srand(time()) weak RNG</strong></td><td><code>srand(time(NULL))</code> before keygen; CryptGenRandom absent</td><td>Key predictable from infection timestamp. Brute-force small timestamp range → candidate keys.</td></tr><tr><td><strong>Rolling XOR (short key)</strong></td><td>XOR loop with <code>i % key_len</code> for index</td><td>Kasiski test finds key length → frequency analysis per position → recover key.</td></tr></table></div>

<h3>Encryption Key Material — Identification and Extraction</h3>

<div class="table-wrap"><table>

<tr><th>Key Type</th><th>How to Find in Binary</th><th>Extraction Method</th></tr>

<tr><td>Hardcoded AES key (16/24/32 bytes)</td><td>High-entropy byte array in .data or .rdata section. Entropy analysis: binwalk -E. 16/32 non-printable consecutive bytes.</td><td>Find array in disassembly → extract bytes → use in CyberChef AES decrypt</td></tr>

<tr><td>XOR key (1-4 bytes)</td><td>Short constant in XOR loop. Loop structure + XOR instruction + small immediate value.</td><td>Single byte: brute-force all 256 values → check for readable ASCII. Tool: xortool</td></tr>

<tr><td>Derived key (PBKDF2)</td><td>Password string + salt constant + CryptDeriveKey or EVP_BytesToKey imports</td><td>Extract password + salt → run same derivation function</td></tr>

<tr><td>Config blob key</td><td>Blob decrypted early in execution (WinMain / DllMain). Set breakpoint after decryption → dump from memory.</td><td>Dynamic analysis — memory dump after decryption routine runs</td></tr>

<tr><td>RSA public key</td><td>Large byte array (~256 bytes for 2048-bit), DER / PEM header, or CryptImportKey call</td><td>Can extract public key — cannot decrypt without attacker private key (ransomware scenario)</td></tr>

</table></div>

<p class="sub-heading">Key Material Identification</p>

<ul>

<li><span class="en">Hardcoded keys: look for <strong>high-entropy byte arrays</strong> in .data or .rdata sections (16/24/32 bytes for AES)</span><span class="vi">Khóa nhúng cứng: tìm <strong>mảng byte entropy cao</strong> trong section .data hoặc .rdata (16/24/32 byte cho AES)</span></li>

<li><span class="en">Key derivation: PBKDF2, bcrypt — look for password string + salt constant</span><span class="vi">Dẫn xuất khóa: PBKDF2, bcrypt — tìm chuỗi mật khẩu + hằng số salt</span></li>

<li><span class="en">XOR keys: often short (1-4 bytes), applied in loop — easy to identify via loop + XOR instruction pattern</span><span class="vi">Khóa XOR: thường ngắn (1-4 byte), áp dụng trong vòng lặp — dễ xác định qua mẫu vòng lặp + lệnh XOR</span></li>

<li><span class="en">Key stored in config block: look for encrypted / obfuscated config blob decrypted early in execution</span><span class="vi">Khóa lưu trong khối config: tìm blob config mã hóa / làm rối được giải mã sớm trong quá trình thực thi</span></li>

</ul>


<h3 class="qz-theory"><span class="en">Cryptographic Techniques in Malware</span><span class="vi">Kỹ thuật mật mã trong mã độc</span></h3>
<ul>
<li><strong><span class="en">Key extraction:</span><span class="vi">Trích khóa:</span></strong> <span class="en">Even obfuscated keys must be cleartext in memory at the moment of use — set a breakpoint just after key setup/decryption and read the key buffer (or registers) at runtime. Then dump all decrypted strings from process memory at once.</span><span class="vi">Khóa dù bị làm rối vẫn phải ở dạng rõ trong bộ nhớ lúc dùng — đặt breakpoint ngay sau khi thiết lập/giải mã khóa và đọc buffer khóa (hoặc thanh ghi) lúc chạy. Rồi dump toàn bộ chuỗi đã giải mã từ bộ nhớ tiến trình một lần.</span></li>
<li><strong>XOR:</strong> <span class="en">Single-byte XOR has only 256 possible keys — brute force, or XOR a known plaintext (a PE "MZ" header) against the blob to derive the key. A hard-coded key + known algorithm/length lets you decrypt the blob directly.</span><span class="vi">XOR một byte chỉ có 256 khóa khả dĩ — brute force, hoặc XOR một plaintext đã biết (header "MZ" của PE) với khối để suy khóa. Khóa hard-code + biết thuật toán/độ dài cho phép giải mã khối trực tiếp.</span></li>
<li><strong><span class="en">Implementation weaknesses:</span><span class="vi">Điểm yếu hiện thực:</span></strong> <span class="en">Strong algorithms don't help if the key is embedded/recoverable — extract it and decrypt captured C2. <em>IV/nonce reuse</em> leaks plaintext relationships; <em>ECB</em> shows repeating 16-byte ciphertext blocks for repeating plaintext; a key derived from a fixed string is identical on every infection (no real secrecy). Authors roll their own buggy crypto to stay small/evade signatures, often introducing exploitable flaws.</span><span class="vi">Thuật toán mạnh vô nghĩa nếu khóa được nhúng/khôi phục được — trích nó và giải mã C2 đã bắt. <em>Tái dùng IV/nonce</em> làm lộ quan hệ plaintext; <em>ECB</em> cho khối ciphertext 16 byte lặp khi plaintext lặp; khóa dẫn xuất từ chuỗi cố định là giống hệt ở mọi lần lây nhiễm (không bí mật thật). Tác giả tự viết crypto đầy lỗi để nhỏ gọn/né signature, thường tạo lỗ hổng khai thác được.</span></li></ul>
`;
