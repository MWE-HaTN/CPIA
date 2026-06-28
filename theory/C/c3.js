/* Theory — C3 (Appendix C). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["c3"]=`<h2>C3 — Open-Source Investigation and Web Enumeration</h2><ul>

<li><span class="en">Use search operators: site:, filetype:, intitle:, inurl:, cache where available.</span><span class="vi">Dùng toán tử tìm kiếm: site:, filetype:, intitle:, inurl:, cache khi có sẵn.</span></li>

<li><span class="en">Social networks reveal employee names, roles, technologies, org structure, and spearphishing targets.</span><span class="vi">Mạng xã hội tiết lộ tên nhân viên, vai trò, công nghệ, cơ cấu tổ chức và mục tiêu spearphishing.</span></li>

<li><span class="en">Fingerprint internet-facing services with Shodan / Censys / banners but validate before concluding exposure.</span><span class="vi">Fingerprint dịch vụ đối ngoại bằng Shodan / Censys / banner nhưng cần xác minh trước khi kết luận về mức độ lộ lọt.</span></li>

<li><span class="en">Tools: theHarvester, Shodan, Censys, Maltego, Recon-ng, DNSdumpster, crt.sh.</span><span class="vi">Công cụ: theHarvester, Shodan, Censys, Maltego, Recon-ng, DNSdumpster, crt.sh.</span></li>

</ul>

<h3>Additional OSINT Tools</h3>

<div class="table-wrap"><table>

<tr><th>Tool</th><th>Use</th></tr>

<tr><td>URLScan.io</td><td>URL scanning and analysis; provides screenshots, resources, redirects, and certificate details.</td></tr>

<tr><td>RiskIQ / PassiveTotal</td><td>Infrastructure pivoting: domain-to-IP, SSL certificate, WHOIS, passive DNS, and threat intelligence enrichment.</td></tr>

<tr><td>GreyNoise</td><td>Identify mass internet scanning and background noise; distinguish targeted attacks from opportunistic scanning.</td></tr>

<tr><td>SecurityTrails</td><td>Historical DNS, WHOIS, and subdomain enumeration.</td></tr>

<tr><td>Hunter.io</td><td>Email format discovery and employee email enumeration for phishing assessment.</td></tr>

</table></div>

<h3>OSINT Methodology</h3>

<ol>

<li><strong>Scoping:</strong> <span class="en">Define what you are looking for — domains, IPs, people, technologies, leaked data. Set boundaries to avoid scope creep.</span><span class="vi">Xác định những gì cần tìm — domain, IP, người, công nghệ, dữ liệu bị rò rỉ. Đặt ranh giới để tránh phạm vi lan rộng.</span></li>

<li><strong>Collection:</strong> <span class="en">Gather data from multiple sources — DNS, WHOIS, search engines, social media, code repositories, paste sites, threat intel platforms.</span><span class="vi">Thu thập dữ liệu từ nhiều nguồn — DNS, WHOIS, công cụ tìm kiếm, mạng xã hội, kho code, paste site, nền tảng threat intel.</span></li>

<li><strong>Processing:</strong> <span class="en">Normalise data; remove duplicates; correlate across sources; build relationships (domain → IP → ASN → organisation).</span><span class="vi">Chuẩn hóa dữ liệu; loại bỏ trùng lặp; tương quan đa nguồn; xây dựng quan hệ (domain → IP → ASN → tổ chức).</span></li>

<li><strong>Analysis:</strong> <span class="en">Assess reliability, timeliness, and relevance. Identify patterns, infrastructure clusters, and attack timelines.</span><span class="vi">Đánh giá độ tin cậy, tính kịp thời và mức độ liên quan. Xác định mẫu, cụm cơ sở hạ tầng và timeline tấn công.</span></li>

<li><strong>Dissemination:</strong> <span class="en">Document findings with sources and timestamps; produce actionable IoCs; brief stakeholders with confidence levels.</span><span class="vi">Ghi chép phát hiện kèm nguồn và timestamp; tạo IoC khả dụng để triển khai; báo cáo với các bên liên quan kèm mức độ tin cậy.</span></li>

</ol>

<div class="callout warning"><strong>Analyst caution</strong><p><span class="en">OSINT findings can be stale. Confirm with timestamps, multiple sources, and current DNS / network evidence.</span><span class="vi">Phát hiện OSINT có thể đã lỗi thời. Xác nhận bằng timestamp, nhiều nguồn và bằng chứng DNS / mạng hiện tại.</span></p></div>

<h3>Social Networks and OSINT Fingerprinting Tools</h3><div class="table-wrap"><table><tr><th>Platform / Tool</th><th>What It Reveals</th><th>IR Use</th></tr><tr><td>LinkedIn</td><td>Employee names, roles, technology stack (job postings), org chart</td><td>Identify spearphishing targets, IT staff, technology in use</td></tr><tr><td>GitHub</td><td>Source code, commit history, API keys in code, internal tool names</td><td>Leaked credentials, developer usernames, internal infrastructure mapping</td></tr><tr><td>theHarvester</td><td>Emails, subdomains, IPs from search engines and DNS</td><td>Enumerate organisation external footprint automatically</td></tr><tr><td>Maltego</td><td>Visual link analysis connecting domains, IPs, persons</td><td>Map attacker infrastructure relationships graphically</td></tr><tr><td>Shodan / Censys</td><td>Internet-facing devices, banners, certificates</td><td>Passive discovery — find org exposures without scanning</td></tr></table></div>
<h3 class="qz-theory"><span class="en">Open-Source Investigation &amp; Web Enumeration</span><span class="vi">Điều tra nguồn mở &amp; liệt kê web</span></h3>
<ul>
<li><strong><span class="en">Passive vs active:</span><span class="vi">Thụ động vs chủ động:</span></strong> <span class="en">Passive OSINT uses third-party/public data with no target contact (search engines, WHOIS, CT logs, social media); active enumeration probes the target directly (port scans, banner grabbing, <strong>DNS subdomain brute-forcing</strong>) and may be logged.</span><span class="vi">OSINT thụ động dùng dữ liệu bên thứ ba/công khai, không chạm mục tiêu (công cụ tìm kiếm, WHOIS, log CT, mạng xã hội); liệt kê chủ động thăm dò trực tiếp mục tiêu (quét cổng, banner grabbing, <strong>brute-force subdomain DNS</strong>) và có thể bị ghi log.</span></li>
<li><strong><span class="en">Search operators (dorks):</span><span class="vi">Toán tử tìm kiếm (dork):</span></strong> <code>site:</code> <span class="en">(one site)</span><span class="vi">(một site)</span>, <code>filetype:</code>, <code>intitle:</code>/<code>inurl:</code>, <code>cache:</code> <span class="en">— surface exposed documents, panels and indexed content.</span><span class="vi">— làm lộ tài liệu, panel và nội dung đã lập chỉ mục.</span></li>
<li><strong><span class="en">Key sources:</span><span class="vi">Nguồn chính:</span></strong> <span class="en"><strong>Shodan/Censys</strong> (internet-wide scan/banner data on exposed services), <strong>Certificate Transparency</strong>/crt.sh (subdomain discovery via issued certs), <strong>theHarvester</strong> (emails/subdomains/hosts), <strong>Maltego</strong> (link analysis), <strong>Wayback Machine</strong> (historical snapshots incl. removed content), <strong>robots.txt</strong> (may list sensitive paths), <strong>LinkedIn</strong> (org structure for spear-phishing), public code repos (leaked API keys/credentials), breach-data sources (password-reuse risk).</span><span class="vi"><strong>Shodan/Censys</strong> (dữ liệu quét/banner toàn internet về dịch vụ phơi), <strong>Certificate Transparency</strong>/crt.sh (phát hiện subdomain qua cert đã cấp), <strong>theHarvester</strong> (email/subdomain/host), <strong>Maltego</strong> (phân tích liên kết), <strong>Wayback Machine</strong> (ảnh chụp lịch sử gồm cả nội dung đã gỡ), <strong>robots.txt</strong> (có thể liệt kê đường dẫn nhạy cảm), <strong>LinkedIn</strong> (cấu trúc tổ chức cho spear-phishing), repo mã công khai (API key/credential bị rò), nguồn dữ liệu rò rỉ (rủi ro dùng lại mật khẩu).</span></li>
<li><strong><span class="en">Email format:</span><span class="vi">Định dạng email:</span></strong> <span class="en">Knowing the convention (<code>first.last@org.com</code>) + harvested names lets attackers infer valid addresses for phishing. Always <strong>corroborate</strong> OSINT — public data can be stale, ambiguous or planted (false flags).</span><span class="vi">Biết quy ước (<code>first.last@org.com</code>) + tên thu thập cho phép suy ra địa chỉ hợp lệ để phishing. Luôn <strong>đối chiếu</strong> OSINT — dữ liệu công khai có thể cũ, mơ hồ hoặc bị cài (false flag).</span></li></ul>
`;
