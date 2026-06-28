/* Theory — C1 (Appendix C). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["c1"]=`<h2>C1 — Registration Records</h2><ul>

<li><span class="en">WHOIS / RDAP records can identify registrant, registrar, creation date, update date, nameservers, abuse contact, and IP allocation.</span><span class="vi">Bản ghi WHOIS / RDAP có thể xác định người đăng ký, đơn vị đăng ký, ngày tạo, ngày cập nhật, nameserver, địa chỉ báo cáo lạm dụng và phân bổ IP.</span></li>

<li><span class="en">Use IP WHOIS to identify owning organisation / ASN; use domain WHOIS for registrar and registration timeline.</span><span class="vi">Dùng IP WHOIS để xác định tổ chức / ASN sở hữu; dùng domain WHOIS để biết đơn vị đăng ký và timeline đăng ký.</span></li>

<li><span class="en">Privacy protection and fake registrant data are common; avoid over-attribution.</span><span class="vi">Bảo vệ quyền riêng tư và dữ liệu người đăng ký giả rất phổ biến; tránh truy nguyên quá mức.</span></li>

</ul>

<h3>Information in IP and Domain Registries</h3>

<p><span class="en">WHOIS databases contain registration metadata for IP address blocks and domain names. This is the starting point for attributing attack infrastructure.</span><span class="vi">Cơ sở dữ liệu WHOIS chứa metadata đăng ký cho các dải IP và tên miền. Đây là điểm xuất phát để truy nguyên cơ sở hạ tầng tấn công.</span></p>

<h3>Domain WHOIS — Key Fields</h3>

<div class="table-wrap"><table>

<tr><th>Field</th><th>Contains</th><th>IR Value</th></tr>

<tr><td>Registrant Name / Org</td><td>Person or company who registered domain</td><td>Attribution — often fake / privacy-protected for malicious domains</td></tr>

<tr><td>Registrant Email</td><td>Contact email at registration</td><td>Pivot: find other domains registered with same email</td></tr>

<tr><td>Creation Date</td><td>When domain was first registered</td><td>Newly registered + malicious use = purpose-built for attack</td></tr>

<tr><td>Expiry Date</td><td>When registration expires</td><td>Short registration period = attacker not planning long-term use</td></tr>

<tr><td>Name Servers</td><td>DNS servers for domain</td><td>Shared NS across multiple malicious domains = same attacker infrastructure</td></tr>

<tr><td>Registrar</td><td>Company that sold the domain</td><td>Some registrars known for lax abuse policies (bulletproof hosting)</td></tr>

</table></div>

<h3>IP WHOIS (RIR Records)</h3>

<div class="table-wrap"><table>

<tr><th>Field</th><th>Contains</th><th>IR Value</th></tr>

<tr><td>NetRange / CIDR</td><td>IP range allocated to organisation</td><td>Confirm if C2 IP is in expected range for claimed provider</td></tr>

<tr><td>Organisation</td><td>Company owning the IP block</td><td>Hosting provider, ISP, or direct org assignment</td></tr>

<tr><td>Abuse Contact</td><td>Email / phone for abuse reports</td><td>Submit takedown requests here</td></tr>

<tr><td>Country</td><td>Country of registration</td><td>Geolocation context — inaccurate for VPNs / proxies</td></tr>

<tr><td>ASN</td><td>Autonomous System Number</td><td>Network operator — track attacker ASN across incidents</td></tr>

</table></div>

<h3>WHOIS Privacy and Evasion</h3>

<ul>

<li><span class="en">GDPR reduced public WHOIS data — registrant details often hidden behind privacy services</span><span class="vi">GDPR đã giảm dữ liệu WHOIS công khai — thông tin người đăng ký thường bị ẩn sau dịch vụ ẩn danh đăng ký (privacy protection)</span></li>

<li><strong>Historical WHOIS:</strong> <span class="en">DomainTools, SecurityTrails store historical records — may show details before privacy was enabled</span><span class="vi">DomainTools, SecurityTrails lưu trữ bản ghi lịch sử — có thể hiển thị chi tiết trước khi bảo mật quyền riêng tư được bật</span></li>

<li><strong>Passive DNS:</strong> <span class="en">Track what IPs a domain resolved to over time — reveals infrastructure changes even after domain is taken down</span><span class="vi">Theo dõi địa chỉ IP mà domain đã phân giải theo thời gian — tiết lộ thay đổi cơ sở hạ tầng ngay cả sau khi domain bị gỡ xuống</span></li>

<li><strong>Pivot technique:</strong> <span class="en">Find one real registrant email → query all domains registered with that email → reveal full attacker infrastructure</span><span class="vi">Tìm một email người đăng ký thật → truy vấn tất cả domain đăng ký với email đó → tiết lộ toàn bộ cơ sở hạ tầng của kẻ tấn công</span></li>

</ul>

<p class="sub-heading">WHOIS &amp; IP Registries</p>

<div class="table-wrap"><table>

<tr><th>Registry</th><th>Region</th></tr>

<tr><td>ARIN</td><td>North America</td></tr>

<tr><td>RIPE NCC</td><td>Europe, Middle East, Central Asia</td></tr>

<tr><td>APNIC</td><td>Asia-Pacific (including Vietnam)</td></tr>

<tr><td>LACNIC</td><td>Latin America &amp; Caribbean</td></tr>

<tr><td>AFRINIC</td><td>Africa</td></tr>

</table></div>

<h3><span class="en">Practical WHOIS Investigation Workflow</span><span class="vi">Quy trình điều tra WHOIS thực tế</span></h3>

<ol class="num-steps">

<li><span class="en"><strong>Unknown IP / domain in alert:</strong> run WHOIS immediately to determine ownership and registration timeline.</span><span class="vi"><strong>IP / domain không xác định trong cảnh báo:</strong> chạy WHOIS ngay để xác định chủ sở hữu và timeline đăng ký.</span></li>

<li><span class="en">Check <strong>creation date</strong> — domain registered days / weeks before the incident is a strong red flag for purpose-built attack infrastructure.</span><span class="vi">Kiểm tra <strong>ngày tạo</strong> — domain đăng ký vài ngày / tuần trước sự cố là dấu hiệu đỏ mạnh của cơ sở hạ tầng tấn công được tạo đặc biệt.</span></li>

<li><span class="en">Extract <strong>registrant email</strong> → query DomainTools or SecurityTrails for other domains using the same email → reveals full attacker infrastructure.</span><span class="vi">Trích xuất <strong>email người đăng ký</strong> → truy vấn DomainTools hoặc SecurityTrails tìm domain khác dùng cùng email → tiết lộ toàn bộ cơ sở hạ tầng kẻ tấn công.</span></li>

<li><span class="en">Check <strong>name servers</strong> — multiple malicious domains sharing the same NS belong to the same infrastructure cluster.</span><span class="vi">Kiểm tra <strong>name server</strong> — nhiều domain độc hại dùng chung NS thuộc cùng một cụm cơ sở hạ tầng của kẻ tấn công.</span></li>

<li><span class="en">Check IP <strong>ASN / organisation</strong> — known bulletproof hosting or VPS provider? Submit abuse report to the listed abuse contact.</span><span class="vi">Kiểm tra <strong>ASN / tổ chức</strong> của IP — bulletproof hosting hoặc nhà cung cấp VPS đã biết? Gửi báo cáo lạm dụng đến địa chỉ abuse contact được liệt kê.</span></li>

<li><span class="en">Query <strong>passive DNS</strong> history — what other domains resolved to this IP? Were any previously flagged as malicious?</span><span class="vi">Truy vấn lịch sử <strong>passive DNS</strong> — những domain nào đã phân giải về IP này? Có domain nào trước đây bị gắn cờ độc hại không?</span></li>

<li><span class="en">Document all WHOIS findings with timestamps in case notes to support chain of custody.</span><span class="vi">Ghi lại tất cả phát hiện WHOIS kèm timestamp trong ghi chú vụ án để hỗ trợ chuỗi bảo quản bằng chứng.</span></li>

</ol>

<h3><span class="en">WHOIS Red Flags</span><span class="vi">Dấu hiệu đỏ trong WHOIS</span></h3>

<div class="table-wrap"><table>

<tr><th><span class="en">Indicator</span><span class="vi">Chỉ báo</span></th><th><span class="en">Red flag meaning</span><span class="vi">Ý nghĩa cảnh báo</span></th></tr>

<tr><td><span class="en">Domain age &lt; 30 days</span><span class="vi">Domain mới dưới 30 ngày</span></td><td><span class="en">Purpose-built for the campaign; not an established business</span><span class="vi">Tạo ra đặc biệt cho chiến dịch; không phải doanh nghiệp lâu đời</span></td></tr>

<tr><td><span class="en">Registration period &lt; 1 year</span><span class="vi">Thời gian đăng ký dưới 1 năm</span></td><td><span class="en">Attacker not planning long-term use; disposable infrastructure</span><span class="vi">Kẻ tấn công không lên kế hoạch dài hạn; cơ sở hạ tầng dùng rồi bỏ</span></td></tr>

<tr><td><span class="en">Privacy protection hiding registrant</span><span class="vi">Bảo vệ quyền riêng tư ẩn người đăng ký</span></td><td><span class="en">Check historical WHOIS records before privacy service was applied</span><span class="vi">Kiểm tra bản ghi WHOIS lịch sử trước khi dịch vụ ẩn danh được áp dụng</span></td></tr>

<tr><td><span class="en">Registrar with lax abuse policy</span><span class="vi">Đơn vị đăng ký với chính sách lạm dụng lỏng lẻo</span></td><td><span class="en">Bulletproof hosting — prioritise blocking at network perimeter over takedown</span><span class="vi">Bulletproof hosting — ưu tiên chặn tại vành đai mạng hơn là gỡ bỏ</span></td></tr>

<tr><td><span class="en">Shared NS with confirmed malicious domains</span><span class="vi">Dùng chung NS với domain độc hại đã xác nhận</span></td><td><span class="en">Same attacker infrastructure — pivot to uncover additional C2 / phishing domains</span><span class="vi">Cùng cơ sở hạ tầng kẻ tấn công — pivot để tìm thêm domain C2 / phishing</span></td></tr>

<tr><td><span class="en">IP in Tor exit / VPN / proxy ASN</span><span class="vi">IP thuộc ASN Tor exit / VPN / proxy đã biết</span></td><td><span class="en">Attribution is unreliable — IP does not represent true attacker origin</span><span class="vi">Truy nguyên không đáng tin cậy — IP không đại diện nguồn gốc thực của kẻ tấn công</span></td></tr>

</table></div>

<div class="callout info"><strong>Exam tip</strong><p><span class="en">CPIA commonly tests: (1) What does a newly registered C2 domain's creation date tell you? (2) Why check historical WHOIS? (3) What does a shared name server across multiple domains indicate? — The answer always links to attacker infrastructure reuse and pivoting opportunities.</span><span class="vi">CPIA thường kiểm tra: (1) Ngày tạo domain C2 mới đăng ký cho biết gì? (2) Tại sao cần kiểm tra WHOIS lịch sử? (3) Name server dùng chung giữa nhiều domain chỉ ra điều gì? — Câu trả lời luôn liên quan đến tái sử dụng cơ sở hạ tầng của kẻ tấn công và cơ hội pivot.</span></p></div>


<h3 class="qz-theory"><span class="en">Registration Records — WHOIS, RIRs &amp; ASNs</span><span class="vi">Bản ghi đăng ký — WHOIS, RIR &amp; ASN</span></h3>
<ul>
<li><strong>WHOIS:</strong> <span class="en">Returns domain/IP registration metadata — registrant, registrar, creation/expiry dates, name servers, and an <strong>abuse contact</strong> (the best channel for takedown). It is <em>passive</em> (queries third-party databases, never touches the target).</span><span class="vi">Trả về metadata đăng ký domain/IP — chủ thể, registrar, ngày tạo/hết hạn, name server, và một <strong>liên hệ abuse</strong> (kênh tốt nhất để takedown). Nó <em>thụ động</em> (truy vấn cơ sở dữ liệu bên thứ ba, không chạm mục tiêu).</span></li>
<li><strong><span class="en">Registrar vs registry:</span><span class="vi">Registrar vs registry:</span></strong> <span class="en">The <em>registry</em> operates the TLD database (e.g. Verisign for .com); the <em>registrar</em> (e.g. GoDaddy) sells/manages domains to customers.</span><span class="vi"><em>registry</em> vận hành cơ sở dữ liệu TLD (vd Verisign cho .com); <em>registrar</em> (vd GoDaddy) bán/quản lý tên miền cho khách.</span></li>
<li><strong><span class="en">IP ownership:</span><span class="vi">Sở hữu IP:</span></strong> <span class="en">Query the relevant <strong>RIR</strong> (ARIN, RIPE, APNIC, LACNIC, AFRINIC) IP-WHOIS for the owning org, netblock, <strong>ASN</strong> and abuse contact. The ASN identifies the routing domain/operator and clusters related IP ranges.</span><span class="vi">Tra IP-WHOIS của <strong>RIR</strong> liên quan (ARIN, RIPE, APNIC, LACNIC, AFRINIC) để biết tổ chức sở hữu, netblock, <strong>ASN</strong> và liên hệ abuse. ASN xác định miền định tuyến/nhà vận hành và gom các dải IP liên quan.</span></li>
<li><strong><span class="en">Privacy &amp; pivots:</span><span class="vi">Riêng tư &amp; pivot:</span></strong> <span class="en">GDPR and privacy/proxy services redact registrant data; pivot via name servers, registrar, <strong>historical (passive) WHOIS</strong> (pre-redaction details) and <strong>reverse WHOIS</strong> (other domains sharing an email/registrant). Shared uncommon name servers cluster likely-related infrastructure.</span><span class="vi">GDPR và dịch vụ ẩn danh/proxy che dữ liệu chủ thể; pivot qua name server, registrar, <strong>WHOIS lịch sử (passive)</strong> (chi tiết trước khi che) và <strong>reverse WHOIS</strong> (domain khác cùng email/chủ thể). Name server hiếm dùng chung gom hạ tầng nhiều khả năng liên quan.</span></li>
<li><strong><span class="en">Indicators:</span><span class="vi">Chỉ dấu:</span></strong> <span class="en">A very recent creation date (domain age) is a common risk signal; <strong>typosquatting</strong>/IDN-homograph domains (<code>paypaI.com</code>, Cyrillic chars, <code>xn--</code> punycode) impersonate brands — inspect the actual characters. <code>.co.uk</code> is a ccTLD (second-level structure); <code>.com</code> is a gTLD.</span><span class="vi">Ngày tạo rất gần đây (tuổi domain) là tín hiệu rủi ro phổ biến; domain <strong>typosquatting</strong>/IDN-homograph (<code>paypaI.com</code>, ký tự Cyrillic, punycode <code>xn--</code>) giả mạo thương hiệu — soi kỹ ký tự thực. <code>.co.uk</code> là ccTLD (cấu trúc cấp hai); <code>.com</code> là gTLD.</span></li></ul>
`;
