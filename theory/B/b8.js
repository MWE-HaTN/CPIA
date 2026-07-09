/* Theory — B8 (Appendix B). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["b8"]=`<h2>B8 — Applications of Cryptography</h2>

<div class="tier recall" id="b8-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>TLS:</strong> <span class="en">Modern TLS separates authentication from key establishment: certificates/signatures commonly authenticate, while (EC)DHE or PSK establishes shared secrets; symmetric AEAD protects records.</span><span class="vi">TLS hiện đại tách authentication khỏi key establishment: certificate/signature thường dùng để xác thực, (EC)DHE hoặc PSK tạo shared secret, rồi AEAD đối xứng bảo vệ record.</span></li>
<li><strong>IPSec:</strong> <span class="en">ESP = confidentiality (encryption); AH = integrity/authentication only; IKE = key exchange.</span><span class="vi">ESP = bí mật (mã hóa); AH = chỉ toàn vẹn/xác thực; IKE = trao khóa.</span></li>
<li><strong>SSH:</strong> <span class="en">Provides encrypted remote services; host-key verification can detect an unexpected server identity, but users must validate first-use keys and investigate legitimate rotations.</span><span class="vi">Cung cấp dịch vụ từ xa được mã hóa; kiểm tra host key có thể phát hiện server identity bất ngờ, nhưng người dùng phải xác minh khóa lần đầu và phân biệt key rotation hợp lệ.</span></li>
<li><strong>OpenPGP:</strong> <span class="en">Supports encryption and signatures for messages/files. Trust may use a web-of-trust model, direct verification, or organisational policy.</span><span class="vi">Hỗ trợ mã hóa và ký message/file. Trust có thể dựa trên web of trust, xác minh trực tiếp hoặc chính sách tổ chức.</span></li>
<li><strong>Wireless:</strong> <span class="en">WEP is broken and TKIP is legacy. WPA2-AES/CCMP is a strong legacy baseline; WPA3 adds newer protections such as SAE.</span><span class="vi">WEP đã bị phá và TKIP là legacy. WPA2-AES/CCMP là baseline cũ tương đối mạnh; WPA3 bổ sung bảo vệ mới hơn như SAE.</span></li>
<li><strong>Cert validation:</strong> <span class="en">Chains to a trusted CA, in-date, and the hostname matches — a padlock alone proves nothing.</span><span class="vi">Chuỗi tới CA tin cậy, còn hạn, và hostname khớp — chỉ cái khóa móc không chứng minh gì.</span></li>
</ul></div></div>

<details class="tier concept" id="b8-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>TLS/SSL — kết hợp hai loại mã hóa</h4>
<p>Trong TLS hiện đại, certificate và chữ ký thường xác thực server; (EC)DHE hoặc PSK tham gia key establishment; key schedule sinh traffic keys và AEAD đối xứng bảo vệ record. Certificate validation còn gồm trust path, hostname/SAN, validity, key usage/policy và có thể revocation theo client. TLS 1.3 cipher suite biểu thị AEAD + HKDF hash, không gói toàn bộ authentication/key-exchange như cách đặt tên cipher suite cũ.</p>

<h4>IPSec — AH vs ESP</h4>
<p><strong>ESP (Encapsulating Security Payload)</strong>: cung cấp <em>bí mật</em> (mã hóa payload) + toàn vẹn. <strong>AH (Authentication Header)</strong>: chỉ <em>toàn vẹn/xác thực</em>, không mã hóa. <strong>IKE</strong> đảm nhận trao khóa. Câu hỏi hay hỏi: "thành phần nào cung cấp confidentiality?" → ESP.</p>

<h4>SSH &amp; PGP</h4>
<p><strong>SSH</strong>: shell từ xa mã hóa; lần đầu kết nối client lưu <em>host key</em> của server — lần sau nếu host key đổi = cảnh báo MITM/giả mạo. <strong>PGP</strong>: mã hóa và ký email/file bằng cặp khóa, tin cậy theo <em>web of trust</em> (không CA tập trung).</p>

<h4>Mã hóa không dây</h4>
<p><strong>WEP</strong>: lỗi thiết kế IV/RC4 → phá dễ dàng, không dùng. <strong>WPA</strong> (TKIP) cải thiện nhưng vẫn yếu. <strong>WPA2</strong> với <strong>AES-CCMP</strong> là chuẩn mạnh phổ biến. <strong>WPA3</strong> mới hơn. <strong>802.1X</strong> thêm xác thực theo cổng (EAP-TLS mạnh nhất, dùng cert).</p>
</div></details>

<details class="tier reference" id="b8-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Crypto applications</h4>
<div class="table-wrap"><table>
<tr><th>Protocol</th><th>Provides</th><th>Note</th></tr>
<tr><td>TLS / SSL</td><td>Server auth + encrypted session</td><td>Asymmetric → symmetric</td></tr>
<tr><td>IPSec ESP</td><td>Confidentiality + integrity</td><td>Encrypts payload</td></tr>
<tr><td>IPSec AH</td><td>Integrity / authentication</td><td>No encryption</td></tr>
<tr><td>SSH</td><td>Encrypted shell (22)</td><td>Host key detects MITM</td></tr>
<tr><td>PGP</td><td>Email/file encrypt + sign</td><td>Web of trust</td></tr>
</table></div>

<h4>Wireless encryption</h4>
<div class="table-wrap"><table>
<tr><th>Scheme</th><th>Cipher</th><th>Status</th></tr>
<tr><td>WEP</td><td>RC4 + weak IV</td><td>Broken</td></tr>
<tr><td>WPA</td><td>TKIP</td><td>Legacy / weaker</td></tr>
<tr><td>WPA2</td><td>AES-CCMP</td><td>Strong legacy baseline; configuration still matters</td></tr>
<tr><td>WPA3-Personal</td><td>SAE authentication; protected data cipher suite</td><td>Newer protections than WPA2-Personal PSK</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="b8-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Xác định protocol bảo vệ layer nào và threat model.</li>
<li>Đọc negotiation: version, cipher, authentication, key exchange và certificate.</li>
<li>Kiểm tra endpoint validation, key storage, downgrade và legacy fallback.</li>
<li>Phân biệt traffic encrypted với traffic trusted/benign.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>TLS ClientHello/ServerHello, SNI, ALPN, chain và hostname.</li>
<li>IPsec AH/ESP, transport/tunnel, IKE SA; SSH host key; PGP web of trust.</li>
<li>802.11 RSN, 4-way handshake, CCMP/TKIP và enterprise 802.1X.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-active">NETWORK-ACTIVE</span>
<code>openssl s_client -showcerts -connect host:443</code>
</li>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Wireshark TLS handshake fields; <code>ssh-keygen -lf key</code>.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>TLS hợp lệ tới domain mới vẫn có thể là C2. Encryption bảo vệ kênh, không xác nhận mục đích của ứng dụng.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>SSLv2/v3 và WEP/TKIP là legacy yếu.</li>
<li>IPsec AH không cung cấp confidentiality; ESP thường có.</li>
<li>Bỏ qua certificate warning phá authentication dù encryption còn hoạt động.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> RFC 8446 §§2, 4.1, 7.1 (TLS 1.3); RFC 4301/4302/4303 (IPsec/AH/ESP); RFC 4251 (SSH architecture); RFC 9580 (OpenPGP); IEEE 802.11 và Wi-Fi Alliance WPA3 guidance.</p>
</div>
</details>`;
