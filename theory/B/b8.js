/* Theory — B8 (Appendix B). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["b8"]=`<h2>B8 — Applications of Cryptography</h2>

<h3>TLS handshake flow and JA3</h3>

<ol><li><strong>ClientHello:</strong> <span class="en">Client proposes TLS version, cipher suites, extensions, and supported groups.</span><span class="vi">Client đề xuất phiên bản TLS, cipher suite, extension và nhóm được hỗ trợ.</span></li><li><strong>ServerHello:</strong> <span class="en">Server selects parameters.</span><span class="vi">Server chọn các tham số.</span></li><li><strong>Certificate:</strong> <span class="en">Server presents certificate chain for identity validation.</span><span class="vi">Server trình bày chuỗi chứng chỉ để xác minh danh tính.</span></li><li><strong>Key exchange:</strong> <span class="en">Session keys are established.</span><span class="vi">Khóa phiên được thiết lập.</span></li><li><strong>Finished:</strong> <span class="en">Both sides confirm the handshake and encrypted application data begins.</span><span class="vi">Cả hai bên xác nhận handshake và dữ liệu ứng dụng mã hóa bắt đầu.</span></li></ol>

<p><strong>JA3 fingerprinting</strong> <span class="en">Hashes selected ClientHello fields to fingerprint TLS clients. It can help identify malware families even when payload content is encrypted, but it is not definitive attribution.</span><span class="vi">Hash các trường ClientHello được chọn để tạo dấu vân tay TLS client. Có thể giúp xác định họ malware ngay cả khi nội dung payload được mã hóa, nhưng không phải là truy nguyên dứt khoát.</span></p>

<h3>Wireless Encryption Quick Comparison</h3>

<div class="table-wrap"><table>

<tr><th>Protocol</th><th>Status</th><th>Key point</th></tr>

<tr><td>WEP</td><td>Broken</td><td>RC4-based; should be treated as insecure.</td></tr>

<tr><td>WPA / TKIP</td><td>Deprecated</td><td>Transitional design; no longer considered strong.</td></tr>

<tr><td>WPA2 / AES-CCMP</td><td>Common baseline</td><td>Security depends heavily on PSK strength and configuration.</td></tr>

<tr><td>WPA3 / SAE</td><td>Modern</td><td>Improves password-based authentication and resistance to offline guessing.</td></tr>

</table></div>

<div class="callout warning"><strong>Common confusion:</strong> <span class="en">WPA2 is not automatically secure if the passphrase is weak, WPS is enabled, or enterprise authentication is misconfigured.</span><span class="vi">WPA2 không tự động an toàn nếu cụm mật khẩu yếu, WPS được bật hoặc xác thực doanh nghiệp bị cấu hình sai.</span></div>

<h3>TLS Certificate Analysis Checklist</h3>

<ul class="checklist"><li><strong>Subject</strong> and <strong>Subject Alternative Names (SAN)</strong> — <span class="en">does identity match the observed domain?</span><span class="vi">Danh tính có khớp với domain quan sát được không?</span></li><li><strong>Issuer</strong> and <strong>trust chain</strong> — <span class="en">is the issuer a legitimate CA?</span><span class="vi">người phát hành có phải CA hợp lệ không?</span></li><li><strong>Validity dates</strong> — <span class="en">currently valid? Suspiciously short-lived?</span><span class="vi">hiện có hiệu lực không? Ngắn đến mức đáng ngờ?</span></li><li><strong>Serial number</strong> — <span class="en">unique identifier for revocation lookup.</span><span class="vi">định danh duy nhất để tra cứu thu hồi.</span></li><li><strong>Key usage</strong> and <strong>extended key usage</strong> — <span class="en">appropriate for the observed protocol?</span><span class="vi">phù hợp với giao thức quan sát được không?</span></li><li><strong>Fingerprint / thumbprint</strong> — <span class="en">hash for quick comparison.</span><span class="vi">hash để so sánh nhanh.</span></li><li><strong>Revocation status</strong> — <span class="en">is it revoked or expired?</span><span class="vi">đã bị thu hồi hoặc hết hạn chưa?</span></li><li><strong>Mismatch</strong> between certificate identity and observed domain — <span class="en">strong indicator of C2 or phishing.</span><span class="vi">chỉ báo mạnh của C2 hoặc phishing.</span></li></ul>

<h3>SSL / TLS, IPSec, SSH, PGP</h3><div class="table-wrap"><table><tr><th>Protocol</th><th>Purpose</th><th>Key Exam Points</th></tr><tr><td><strong>SSL / TLS</strong></td><td>Encrypted transport (HTTPS, SMTPS)</td><td>SSLv3 / TLS 1.0/1.1 broken (POODLE, BEAST). TLS 1.2 acceptable; TLS 1.3 current best. JA3 fingerprints the ClientHello.</td></tr><tr><td><strong>IPSec</strong></td><td>Network-layer VPN encryption</td><td>AH = integrity only (no encryption). ESP = encryption + integrity. Transport mode (host-host) vs Tunnel mode (gateway VPN).</td></tr><tr><td><strong>SSH</strong></td><td>Secure remote shell, SFTP</td><td>Port 22. Key-based auth uses ~/.ssh/authorized_keys — backdoor persistence method. SSH tunneling bypasses firewall rules.</td></tr><tr><td><strong>PGP / GPG</strong></td><td>Email encryption and signing</td><td>Hybrid encryption: RSA for key exchange, symmetric for data. Web of Trust model — no central CA.</td></tr></table></div>
<h3 class="qz-theory"><span class="en">Applied Cryptography — TLS, IPSec, SSH, Wireless</span><span class="vi">Mật mã ứng dụng — TLS, IPSec, SSH, không dây</span></h3>
<ul>
<li><strong>Wireless:</strong> <span class="en"><strong>WEP</strong> (RC4 + short reused 24-bit IV) is broken in minutes; <strong>WPA</strong> used TKIP (RC4 stopgap); <strong>WPA2</strong> mandates <strong>AES-CCMP</strong>; WPA3 added SAE.</span><span class="vi"><strong>WEP</strong> (RC4 + IV 24-bit ngắn, lặp) bị phá trong vài phút; <strong>WPA</strong> dùng TKIP (RC4 tạm); <strong>WPA2</strong> bắt buộc <strong>AES-CCMP</strong>; WPA3 thêm SAE.</span></li>
<li><strong>TLS:</strong> <span class="en">Hybrid — asymmetric crypto (certificate, key exchange) authenticates the server and agrees a symmetric session key; bulk data then uses fast symmetric AES.</span><span class="vi">Lai — mật mã bất đối xứng (chứng chỉ, trao đổi khóa) xác thực máy chủ và thống nhất khóa phiên đối xứng; dữ liệu lớn dùng AES đối xứng nhanh.</span></li>
<li><strong>IPSec:</strong> <span class="en"><strong>ESP</strong> provides confidentiality (encryption) + optional integrity; <strong>AH</strong> provides integrity/authentication but NO encryption. Transport mode encrypts the payload; tunnel mode the whole inner packet.</span><span class="vi"><strong>ESP</strong> cung cấp bảo mật (mã hóa) + toàn vẹn tùy chọn; <strong>AH</strong> cung cấp toàn vẹn/xác thực nhưng KHÔNG mã hóa. Transport mode mã hóa payload; tunnel mode mã hóa toàn bộ gói trong.</span></li>
<li><strong>SSH:</strong> <span class="en">Encrypted remote shell/transfer/forwarding. The server <em>host key</em> (saved in known_hosts) authenticates the server — a sudden host-key-changed warning can indicate MITM. (Telnet/FTP/HTTP are cleartext.)</span><span class="vi">Shell/truyền/forward từ xa đã mã hóa. <em>Host key</em> của máy chủ (lưu trong known_hosts) xác thực máy chủ — cảnh báo host-key-changed bất ngờ có thể là MITM. (Telnet/FTP/HTTP là cleartext.)</span></li></ul>
`;
