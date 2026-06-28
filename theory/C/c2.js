/* Theory — C2 (Appendix C). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["c2"]=`<h2>C2 — Domain Name Server (DNS)</h2><div class="table-wrap"><table><tr><th>Record</th><th><span class="en">Meaning</span><span class="vi">Ý nghĩa</span></th><th><span class="en">IR use</span><span class="vi">Ứng dụng IR</span></th></tr><tr><td>A / AAAA</td><td>Host to IPv4 / IPv6</td><td>Identify infrastructure.</td></tr><tr><td>NS</td><td>Authoritative nameserver</td><td>Pivot to related domains.</td></tr><tr><td>MX</td><td>Mail exchanger</td><td>Email infrastructure.</td></tr><tr><td>TXT</td><td>Arbitrary text</td><td>SPF / DKIM / DMARC or DNS tunneling data.</td></tr><tr><td>SOA</td><td>Zone authority</td><td>Admin/contact/serial info.</td></tr><tr><td>PTR</td><td>Reverse DNS</td><td>IP-to-name clue.</td></tr><tr><td>CNAME</td><td>Alias</td><td>CDN or indirection.</td></tr><tr><td>HINFO</td><td>Host info</td><td>Rare; can leak system details.</td></tr><tr><td>SRV</td><td>Service location (host + port)</td><td>Maps a service to a host/port, e.g. _ldap._tcp / _kerberos._tcp — heavily used by Active Directory; enumerating SRV records can reveal internal services.</td></tr><tr><td>CAA</td><td>Certificate Authority Authorization</td><td>Restricts which CAs may issue certificates for the domain; with Certificate Transparency logs, helps detect rogue/mis-issued certs.</td></tr></table></div><ul>

<li><span class="en">Zone transfer (AXFR) can expose all records if misconfigured.</span><span class="vi">Zone transfer (AXFR) có thể lộ tất cả bản ghi nếu cấu hình sai.</span></li>

<li><span class="en">Zone transfer (AXFR / IXFR) uses <strong>TCP port 53</strong> — not UDP. TCP is used because responses are larger than 512 bytes. Test with: <code>dig axfr @ns1.target.com target.com</code>. If not restricted → all DNS records are exposed.</span><span class="vi">Zone transfer (AXFR / IXFR) dùng <strong>TCP port 53</strong> — không phải UDP. TCP được dùng vì response lớn hơn 512 byte. Kiểm tra bằng: <code>dig axfr @ns1.target.com target.com</code>. Nếu không bị hạn chế → tất cả bản ghi DNS bị lộ.</span></li>

<li><span class="en">Dynamic DNS allows rapidly changing IP mappings and is often abused by malware.</span><span class="vi">Dynamic DNS cho phép thay đổi ánh xạ IP nhanh chóng và thường bị malware lạm dụng.</span></li>

<li><span class="en">Fast-flux: many rapidly changing A records with short TTLs; used to hide backend infrastructure.</span><span class="vi">Fast-flux: nhiều bản ghi A thay đổi nhanh với TTL ngắn; dùng để ẩn cơ sở hạ tầng backend.</span></li>

<li><span class="en">DNS tunneling indicators: long / random subdomains, high TXT volume, unusual NXDOMAIN patterns.</span><span class="vi">Chỉ báo DNS tunneling: subdomain dài / ngẫu nhiên, lượng truy vấn TXT lớn, mẫu NXDOMAIN bất thường.</span></li>

</ul>

<h3>DNS Tunneling Detection Examples</h3>

<pre># Zeek dns.log indicators for DNS tunneling:

# - High entropy subdomain labels (encoded data)

# - Unusually long query names (&gt;50 characters)

# - High volume of TXT queries to single domain

# - Unusual record types (NULL, CNAME chains)



# Suricata rule example for DNS tunneling:

alert dns any any -&gt; any 53 (msg:"Possible DNS tunneling - long subdomain"; \\

  dns.query; content:"."; depth:1; pcre:"/^[a-zA-Z0-9]{30,}\\..+\\..+$/"; \\

  sid:2000001; rev:1;)</pre>

<h3>DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT)</h3>

<ul>

<li><strong>DoH (DNS-over-HTTPS):</strong> <span class="en">DNS queries sent over HTTPS (port 443) to resolvers like Cloudflare (1.1.1.1) or Google (8.8.8.8). Blends with normal web traffic — traditional DNS monitoring tools cannot see queries.</span><span class="vi">Truy vấn DNS gửi qua HTTPS (port 443) đến các resolver như Cloudflare (1.1.1.1) hoặc Google (8.8.8.8). Hòa lẫn với lưu lượng web bình thường — công cụ giám sát DNS truyền thống không thể thấy truy vấn.</span></li>

<li><strong>DoT (DNS-over-TLS):</strong> <span class="en">DNS queries sent over TLS (port 853). Easier to identify than DoH because it uses a dedicated port, but content is encrypted.</span><span class="vi">Truy vấn DNS gửi qua TLS (port 853). Dễ nhận diện hơn DoH vì dùng port riêng, nhưng nội dung được mã hóa.</span></li>

<li><strong>Blind spot:</strong> <span class="en">Both bypass corporate DNS resolvers and logging. Malware using DoH / DoT is invisible to DNS-layer security controls.</span><span class="vi">Cả hai đều vượt qua DNS resolver và logging của doanh nghiệp. Malware dùng DoH / DoT vô hình với các kiểm soát bảo mật tầng DNS.</span></li>

<li><strong>Detection:</strong> <span class="en">Monitor for outbound connections to known DoH / DoT resolvers; endpoint DNS logs may still capture queries; check for TLS connections to port 853.</span><span class="vi">Giám sát kết nối ra ngoài đến resolver DoH / DoT đã biết; log DNS endpoint có thể vẫn bắt được truy vấn; kiểm tra kết nối TLS đến port 853.</span></li>

<li><strong>Investigation:</strong> <span class="en">Proxy logs may show HTTPS connections to DoH endpoints; JA3 fingerprinting can identify DoH clients; endpoint telemetry (EDR) can capture DNS before encryption.</span><span class="vi">Log proxy có thể hiển thị kết nối HTTPS đến endpoint DoH; JA3 fingerprinting có thể xác định DoH client; telemetry endpoint (EDR) có thể bắt DNS trước khi mã hóa.</span></li>

</ul>


<h3><span class="en">Fast-Flux DNS — In Depth</span><span class="vi">DNS Fast-Flux — Chuyên sâu</span></h3>

<p><span class="en">Fast-flux is a DNS evasion technique used by botnets and criminal hosting providers to rapidly cycle IP addresses behind a single domain, making IP-based blocking and infrastructure takedowns extremely difficult. The domain name stays constant; the IPs behind it change every 60–300 seconds.</span><span class="vi">Fast-flux là kỹ thuật né tránh DNS được botnet và nhà cung cấp hosting tội phạm dùng để luân phiên nhanh địa chỉ IP sau một domain, khiến việc chặn theo IP và gỡ hạ tầng trở nên cực kỳ khó. Tên domain không đổi; IP phía sau thay đổi mỗi 60–300 giây.</span></p>

<div class="table-wrap"><table>
<tr><th></th><th><span class="en">Single-Flux</span><span class="vi">Single-Flux</span></th><th><span class="en">Double-Flux</span><span class="vi">Double-Flux</span></th></tr>
<tr><td><span class="en">What rotates</span><span class="vi">Thành phần luân phiên</span></td><td><span class="en">A records only (many IPs per query)</span><span class="vi">Chỉ bản ghi A (nhiều IP mỗi truy vấn)</span></td><td><span class="en">Both A records AND NS records</span><span class="vi">Cả bản ghi A VÀ bản ghi NS</span></td></tr>
<tr><td>TTL</td><td><span class="en">Very short: 60–300 s</span><span class="vi">Rất ngắn: 60–300 giây</span></td><td><span class="en">Very short at both A and NS level</span><span class="vi">Rất ngắn ở cả cấp A và NS</span></td></tr>
<tr><td><span class="en">Resilience to takedown</span><span class="vi">Khả năng chống gỡ bỏ</span></td><td><span class="en">Moderate — NS servers are fixed targets</span><span class="vi">Trung bình — NS server vẫn là mục tiêu cố định</span></td><td><span class="en">High — NS records also cycle through compromised hosts</span><span class="vi">Cao — bản ghi NS cũng luân phiên qua host bị xâm phạm</span></td></tr>
<tr><td><span class="en">Backend location</span><span class="vi">Vị trí backend</span></td><td><span class="en">Flux nodes proxy traffic; real server is hidden</span><span class="vi">Flux node chuyển tiếp lưu lượng; server thật bị ẩn</span></td><td><span class="en">Two flux layers — true origin very hard to locate</span><span class="vi">Hai lớp flux — nguồn gốc thật rất khó định vị</span></td></tr>
</table></div>

<ul>
<li><span class="en"><strong>Dynamic DNS (DDNS) abuse:</strong> Legitimate DDNS providers (No-IP, DynDNS, duckdns) map hostnames to changing IPs. Malware embeds a free DDNS hostname in the binary and automatically updates it as the C2 IP rotates — the domain stays constant, eliminating the need for DGA. Detect: monitor known DDNS provider domains as higher-risk; correlate hostnames against threat intel.</span><span class="vi"><strong>Lạm dụng Dynamic DNS:</strong> Nhà cung cấp DDNS hợp lệ (No-IP, DynDNS, duckdns) ánh xạ hostname đến IP thay đổi. Malware nhúng hostname DDNS miễn phí vào binary và tự động cập nhật khi IP C2 thay đổi — domain không đổi, không cần DGA. Phát hiện: giám sát domain nhà cung cấp DDNS đã biết với nguy cơ cao; đối chiếu hostname với threat intel.</span></li>
<li><span class="en"><strong>Fast-flux vs CDN:</strong> Legitimate CDNs (Cloudflare, Akamai, Fastly) also return many IPs with short TTLs — this is normal behaviour. Distinguish by ASN: CDN IPs belong to well-known CDN ASNs (e.g., AS13335 Cloudflare, AS20940 Akamai); fast-flux IPs scatter across residential and consumer ISP ASNs (compromised home routers and PCs acting as proxies).</span><span class="vi"><strong>Fast-flux vs CDN:</strong> CDN hợp lệ (Cloudflare, Akamai, Fastly) cũng trả về nhiều IP với TTL ngắn — đây là hành vi bình thường. Phân biệt bằng ASN: IP CDN thuộc ASN CDN nổi tiếng (ví dụ AS13335 Cloudflare, AS20940 Akamai); IP fast-flux phân tán qua ASN dân dụng và ISP tiêu dùng (router gia đình và PC đóng vai proxy).</span></li>
<li><span class="en"><strong>Fast-flux vs DGA:</strong> DGA generates new domain names on a schedule; fast-flux keeps the same domain but rapidly changes its resolved IPs. Both techniques can be combined: a DGA-generated domain using fast-flux to distribute backend IPs, compounding evasion difficulty.</span><span class="vi"><strong>Fast-flux vs DGA:</strong> DGA tạo tên domain mới theo lịch; fast-flux giữ nguyên domain nhưng thay đổi nhanh IP phân giải. Cả hai có thể kết hợp: domain do DGA tạo ra dùng fast-flux để phân tán IP backend, tăng gấp đôi khó khăn né tránh.</span></li>
</ul>

<h3><span class="en">Fast-Flux Detection Indicators</span><span class="vi">Chỉ báo phát hiện Fast-Flux</span></h3>

<div class="table-wrap"><table>
<tr><th><span class="en">Indicator</span><span class="vi">Chỉ báo</span></th><th><span class="en">Fast-flux pattern</span><span class="vi">Dấu hiệu fast-flux</span></th><th><span class="en">Investigation source</span><span class="vi">Nguồn điều tra</span></th></tr>
<tr><td>TTL</td><td><span class="en">&lt;300 s — often 60–120 s</span><span class="vi">&lt;300 giây — thường 60–120 giây</span></td><td>Zeek dns.log, <code>dig +ttl</code></td></tr>
<tr><td><span class="en">A records per query</span><span class="vi">Bản ghi A mỗi truy vấn</span></td><td><span class="en">&gt;5–10 different IPs for one hostname</span><span class="vi">&gt;5–10 IP khác nhau cho một hostname</span></td><td><code>dig</code>, DNS resolver logs</td></tr>
<tr><td><span class="en">IP diversity</span><span class="vi">Đa dạng IP</span></td><td><span class="en">IPs span many /24 blocks; residential / consumer ISP ASNs</span><span class="vi">IP trải nhiều /24; ASN ISP dân dụng / tiêu dùng</span></td><td>WHOIS, BGP ASN lookup</td></tr>
<tr><td><span class="en">NS record rotation</span><span class="vi">Luân phiên bản ghi NS</span></td><td><span class="en">NS records also change between queries (double-flux)</span><span class="vi">Bản ghi NS cũng thay đổi giữa các truy vấn (double-flux)</span></td><td>Passive DNS, <code>dig ns</code></td></tr>
<tr><td><span class="en">Domain age</span><span class="vi">Tuổi domain</span></td><td><span class="en">Recently registered; no reputation history</span><span class="vi">Mới đăng ký; không có lịch sử danh tiếng</span></td><td>WHOIS, DomainTools</td></tr>
<tr><td><span class="en">IP history</span><span class="vi">Lịch sử IP</span></td><td><span class="en">IPs not previously associated with this domain</span><span class="vi">IP không từng liên kết với domain này trước đây</span></td><td>Passive DNS, VirusTotal</td></tr>
</table></div>

<div class="callout warning"><strong><span class="en">Exam tip — Fast-Flux</span><span class="vi">Mẹo thi — Fast-Flux</span></strong><p><span class="en"><strong>Single-flux</strong> rotates A records only. <strong>Double-flux</strong> rotates both A and NS records — significantly harder to take down. The criminal backend hides behind flux nodes acting as proxies. Key indicators: TTL &lt;300 s, many IPs from residential ASNs, IPs differ between repeated queries. Distinguish from CDN by ASN: CDN IPs register to known CDN providers (Cloudflare, Akamai), not residential ISPs.</span><span class="vi"><strong>Single-flux</strong> chỉ luân phiên bản ghi A. <strong>Double-flux</strong> luân phiên cả bản ghi A lẫn NS — khó gỡ bỏ hơn đáng kể. Backend tội phạm ẩn sau flux node đóng vai proxy. Chỉ báo chính: TTL &lt;300 giây, nhiều IP từ ASN dân dụng, IP khác nhau giữa các truy vấn lặp lại. Phân biệt với CDN bằng ASN: IP CDN đăng ký với nhà cung cấp CDN đã biết (Cloudflare, Akamai), không phải ISP dân dụng.</span></p></div>


<h3 class="qz-theory"><span class="en">DNS Resolution, Records &amp; Abuse — deep dive</span><span class="vi">Phân giải DNS, bản ghi &amp; lạm dụng — đào sâu</span></h3>
<ul>
<li><strong><span class="en">Record types (extra):</span><span class="vi">Loại bản ghi (thêm):</span></strong> <span class="en">A=IPv4, AAAA=IPv6, MX=mail servers, NS=authoritative servers (delegation), SOA=zone authority (its <em>minimum/negative TTL</em> governs NXDOMAIN caching), PTR=reverse lookup under <code>in-addr.arpa</code>/<code>ip6.arpa</code>, CNAME=alias, TXT=SPF/DKIM/DMARC + verification, SRV=service host+port (<code>_ldap._tcp</code>), CAA=which CAs may issue certs, HINFO=host info (can leak OS — recon). A <strong>glue record</strong> supplies the IP of a name server living inside the zone it serves, breaking a lookup loop.</span><span class="vi">A=IPv4, AAAA=IPv6, MX=máy chủ mail, NS=máy chủ authoritative (ủy quyền), SOA=thẩm quyền zone (<em>TTL tối thiểu/negative</em> điều khiển cache NXDOMAIN), PTR=tra ngược trong <code>in-addr.arpa</code>/<code>ip6.arpa</code>, CNAME=bí danh, TXT=SPF/DKIM/DMARC + xác minh, SRV=host+cổng dịch vụ (<code>_ldap._tcp</code>), CAA=CA nào được cấp cert, HINFO=thông tin host (có thể lộ OS — recon). <strong>Glue record</strong> cung cấp IP của name server nằm trong chính zone nó phục vụ, phá vòng tra cứu.</span></li>
<li><strong><span class="en">Resolution:</span><span class="vi">Phân giải:</span></strong> <span class="en">A <em>recursive</em> resolver chases referrals (root→TLD→authoritative) and returns the final answer; <em>iterative</em> has the client follow referrals. Query with <code>dig</code>/<code>nslookup -type=</code>. DNSSEC signs records to prevent tampering/cache poisoning (integrity, not confidentiality).</span><span class="vi">Resolver <em>đệ quy</em> tự đi theo referral (root→TLD→authoritative) và trả câu trả lời cuối; <em>lặp (iterative)</em> để client tự đi. Truy vấn bằng <code>dig</code>/<code>nslookup -type=</code>. DNSSEC ký bản ghi để chống can thiệp/cache poisoning (toàn vẹn, không bảo mật).</span></li>
<li><strong><span class="en">Malware indicators:</span><span class="vi">Chỉ dấu mã độc:</span></strong> <span class="en"><strong>DGA</strong> — many random domains, mostly NXDOMAIN, until the attacker-registered one resolves. <strong>Fast-flux</strong> — very low TTL + rapidly rotating IPs. <strong>Dynamic DNS</strong> (no-ip, duckdns) — stable hostname over a freely-changing IP. <strong>DoH</strong> (port 443) hides DNS inside HTTPS to bypass plaintext DNS monitoring. <strong>Passive DNS</strong> records historical domain↔IP resolutions for pivoting.</span><span class="vi"><strong>DGA</strong> — nhiều domain ngẫu nhiên, phần lớn NXDOMAIN, tới khi domain kẻ tấn công đăng ký phân giải được. <strong>Fast-flux</strong> — TTL rất thấp + IP xoay nhanh. <strong>Dynamic DNS</strong> (no-ip, duckdns) — hostname ổn định trên IP đổi tự do. <strong>DoH</strong> (cổng 443) giấu DNS trong HTTPS để né giám sát DNS dạng rõ. <strong>Passive DNS</strong> ghi lịch sử phân giải domain↔IP để pivot.</span></li></ul>
`;
