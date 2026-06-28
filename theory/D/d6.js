/* Theory — D6 (Appendix D). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d6"]=`<h2>D6 — Encryption</h2>

<h3>Encryption vs obfuscation</h3>

<div class="table-wrap"><table><tr><th>Category</th><th>Purpose</th><th>Analysis approach</th></tr><tr><td>Encryption</td><td>Protect confidentiality with cryptographic keys.</td><td>Look at flow metadata, TLS fingerprints, certificate details, endpoint logs, and key material if available.</td></tr><tr><td>Obfuscation</td><td>Hide meaning without necessarily providing strong cryptographic security.</td><td>Attempt decoding / deobfuscation: XOR, ROL, Base64, custom codebooks, compression, or layered encodings.</td></tr></table></div>

<ul>

<li><span class="en">Encrypted traffic still exposes metadata: source / destination, timing, volume, direction, SNI, certificate fields, JA3 / JA3S, DNS pre-resolution.</span><span class="vi">Lưu lượng mã hóa vẫn để lộ metadata: nguồn / đích, thời điểm, khối lượng, chiều, SNI, trường chứng chỉ, JA3 / JA3S, phân giải DNS trước.</span></li>

<li><span class="en">Channel fingerprinting identifies tools / malware by TLS handshake or flow behaviour.</span><span class="vi">Fingerprinting kênh xác định công cụ / malware bằng TLS handshake hoặc hành vi flow.</span></li>

<li><span class="en">Weak obfuscation: XOR, ROL / rotate, substitution / codebooks, Base64; use CyberChef or scripts to decode.</span><span class="vi">Che giấu yếu: XOR, ROL / xoay, thay thế / codebook, Base64; dùng CyberChef hoặc script để giải mã.</span></li>

<li><span class="en">Flow analysis: exfil often shows unusual outbound volume, long sessions, or uploads to rare destinations.</span><span class="vi">Phân tích flow: đánh cắp dữ liệu thường cho thấy lượng outbound bất thường, phiên dài hoặc upload đến đích hiếm gặp.</span></li>

</ul>

<h3>JA3 / JA3S and JA4+ Fingerprinting</h3>

<p><strong>JA3</strong> hashes TLS ClientHello fields (version, cipher suites, extensions, elliptic curves, EC point formats) to create a client fingerprint. <strong>JA3S</strong> does the same for ServerHello. Together they fingerprint both sides of a TLS connection.</p>

<ul>

<li><strong>Use:</strong> Identify malware families by TLS client behaviour even when payload is encrypted; detect C2 frameworks by their default TLS configuration.</li>

<li><strong>Limitation:</strong> Modern malware randomises cipher suites or mimics legitimate browsers to rotate JA3 hashes. JA3 alone is not definitive attribution.</li>

<li><strong>Detection:</strong> Compare observed JA3 hashes against known-good (browser / update) and known-bad (Cobalt Strike, Metasploit) databases.</li>

</ul>

<p><strong>JA4+</strong> is a newer fingerprinting suite that improves on JA3 limitations:</p>

<ul>

<li><strong>JA4:</strong> Client fingerprint with structured format (TLS version, cipher count, extension count, ALPN, SNI presence).</li>

<li><strong>JA4S:</strong> Server response fingerprint.</li>

<li><strong>JA4H:</strong> HTTP client fingerprint (method, headers, order, cookies).</li>

<li><strong>JA4X:</strong> X.509 certificate fingerprint.</li>

<li><strong>Improvement:</strong> More resistant to randomisation; uses sorted cipher / extension lists; provides more granular identification.</li>

</ul>

<p><strong>JA4 format example:</strong> <code>t13d1516h2_8daaf6152771_e5627efa2ab1</code> — where <code>t13</code> = TLS 1.3, <code>d</code> = draft, <code>15</code> = number of ciphers, <code>16</code> = number of extensions, <code>h2</code> = ALPN (HTTP/2), followed by truncated hashes of sorted ciphers and extensions.</p>

<div class="callout info"><strong>Note:</strong> JA4+ is developed by FoxIO (John Althouse), not an IETF standard or RFC. It is an open-source project gaining adoption in network security tools.</div>

<div class="callout info"><strong>Exam tip:</strong> JA3 helps identify C2 tools but is not proof. Correlate with other indicators (beaconing, domain age, certificate details, endpoint process telemetry).</div>


<h3 class="qz-theory"><span class="en">Encrypted &amp; Obfuscated Traffic</span><span class="vi">Lưu lượng mã hóa &amp; làm rối</span></h3>
<ul>
<li><strong><span class="en">Weak obfuscation:</span><span class="vi">Làm rối yếu:</span></strong> <span class="en">Single-byte/repeating <strong>XOR</strong>, <strong>ROL/ROR</strong> and codebooks are reversible obfuscation, not cryptography — recover via brute force (256 keys), known-plaintext (e.g. a PE "MZ" header) or applying the inverse operation.</span><span class="vi"><strong>XOR</strong> một byte/lặp, <strong>ROL/ROR</strong> và codebook là làm rối đảo ngược được, không phải mật mã — khôi phục bằng brute force (256 khóa), known-plaintext (vd header "MZ" của PE) hoặc áp phép nghịch.</span></li>
<li><strong>Entropy:</strong> <span class="en">High entropy alone cannot distinguish encryption from compression — both look near-random; use structural cues (headers, handshake presence) and statistical/timing patterns instead.</span><span class="vi">Chỉ entropy cao không phân biệt được mã hóa với nén — cả hai trông gần ngẫu nhiên; dùng manh mối cấu trúc (header, sự hiện diện handshake) và mẫu thống kê/thời điểm.</span></li>
<li><strong><span class="en">Without decrypting TLS:</span><span class="vi">Không cần giải mã TLS:</span></strong> <span class="en">Channel/flow fingerprinting still characterises a flow — packet sizes/timing, upload/download ratio, TLS handshake fingerprints (<strong>JA3</strong>/JA3S, a hash of the ClientHello), SNI, certificate details and destination reputation. Malware using a non-browser TLS stack often yields a rare JA3.</span><span class="vi">Fingerprint kênh/flow vẫn đặc trưng hóa luồng — kích thước/thời điểm gói, tỉ lệ tải lên/xuống, dấu vân tay bắt tay TLS (<strong>JA3</strong>/JA3S, hash của ClientHello), SNI, chi tiết chứng chỉ và danh tiếng đích. Mã độc dùng stack TLS không phải trình duyệt thường cho JA3 hiếm.</span></li></ul>
`;
