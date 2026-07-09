/* Theory — C3 (Appendix C). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["c3"]=`<h2>C3 — Open-Source Investigation &amp; Web Enumeration</h2>

<div class="tier recall" id="c3-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Passive vs active:</strong> <span class="en">Passive OSINT uses third-party/public data with NO target contact; active enumeration probes the target directly (may be logged).</span><span class="vi">OSINT thụ động dùng dữ liệu bên thứ ba/công khai, KHÔNG chạm mục tiêu; liệt kê chủ động thăm dò trực tiếp (có thể bị ghi log).</span></li>
<li><strong>Search operators (dorks):</strong> <span class="en">site:, filetype:, intitle:, inurl:, cache: — surface exposed documents, panels and indexed content.</span><span class="vi">site:, filetype:, intitle:, inurl:, cache: — làm lộ tài liệu, panel, nội dung đã được lập chỉ mục.</span></li>
<li><strong>Key sources:</strong> <span class="en">Shodan/Censys (exposed services), Certificate Transparency / crt.sh (subdomains), Wayback Machine (history), theHarvester, Maltego.</span><span class="vi">Shodan/Censys (dịch vụ phơi ra), Certificate Transparency / crt.sh (subdomain), Wayback Machine (lịch sử), theHarvester, Maltego.</span></li>
<li><strong>Social networks reveal:</strong> <span class="en">Employee names, roles, tech stack (job posts), org structure — spear-phishing targets.</span><span class="vi">Tên nhân viên, vai trò, công nghệ dùng (tin tuyển dụng), cơ cấu tổ chức — mục tiêu spear-phishing.</span></li>
<li><strong>Code repos / paste sites:</strong> <span class="en">Public GitHub/paste sites can leak committed secrets — API keys, credentials, internal hostnames.</span><span class="vi">GitHub/paste site công khai có thể lộ bí mật bị commit — API key, credential, hostname nội bộ.</span></li>
<li><strong>Fingerprinting:</strong> <span class="en">Identify server/app/OS from banners, headers, TLS certs, error pages — corroborate before concluding.</span><span class="vi">Nhận diện server/app/OS từ banner, header, cert TLS, trang lỗi — xác minh trước khi kết luận.</span></li>
</ul></div></div>

<details class="tier concept" id="c3-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Thụ động vs chủ động — vì sao quan trọng</h4>
<p><strong>Thụ động</strong> (search engine, WHOIS, passive DNS, CT log, Wayback, mạng xã hội) không gửi gói tới mục tiêu nên <em>không bị mục tiêu phát hiện</em>. <strong>Chủ động</strong> (quét cổng, banner grabbing, brute-force subdomain qua DNS của mục tiêu) gửi lưu lượng mục tiêu <em>có thể ghi log</em> → ồn hơn, có rủi ro pháp lý nếu chưa được ủy quyền.</p>

<h4>Khai thác search engine (dorks)</h4>
<p>Toán tử thu hẹp kết quả: <code>site:</code> giới hạn 1 site, <code>filetype:pdf</code> tìm tài liệu lộ, <code>intitle:/inurl:</code> tìm panel quản trị, <code>cache:</code> xem bản cache. Kết hợp lại có thể lộ tài liệu nội bộ bị index, trang đăng nhập, file cấu hình.</p>

<h4>Nguồn OSINT chính</h4>
<p><strong>Shodan/Censys</strong>: dữ liệu quét toàn internet về dịch vụ phơi ra (banner, cổng, cert). <strong>Certificate Transparency (crt.sh)</strong>: log mọi cert đã cấp → phát hiện subdomain (kể cả nội bộ vô tình được cấp cert). <strong>Wayback Machine</strong>: ảnh chụp lịch sử của site, gồm cả nội dung đã gỡ. <strong>robots.txt</strong> có thể liệt kê đường dẫn nhạy cảm.</p>

<h4>OSINT từ mạng xã hội</h4>
<p>LinkedIn lộ cơ cấu tổ chức, vai trò, công nghệ (qua tin tuyển dụng) → chọn mục tiêu spear-phishing và đoán định dạng email (first.last@org.com). GitHub lộ mã nguồn, lịch sử commit, đôi khi cả secret. Dữ liệu rò rỉ (breach data) cho biết nhân viên nào từng lộ mật khẩu (rủi ro dùng lại).</p>

<h4>Fingerprinting host/dịch vụ</h4>
<p>Banner dịch vụ, HTTP header (Server:, X-Powered-By), cert TLS, trang lỗi, User-Agent, metadata tài liệu đều giúp đoán phần mềm + phiên bản → ánh xạ tới CVE đã biết. Lưu ý banner <strong>có thể bị giả/ẩn</strong>, nên luôn đối chiếu nhiều nguồn.</p>
</div></details>

<details class="tier reference" id="c3-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Search operators</h4>
<div class="table-wrap"><table>
<tr><th>Operator</th><th>Finds</th></tr>
<tr><td>site:example.com</td><td>Pages on one site</td></tr>
<tr><td>filetype:pdf / ext:</td><td>Exposed documents of a type</td></tr>
<tr><td>intitle: / inurl:</td><td>Keywords in title/URL (admin panels)</td></tr>
<tr><td>cache:</td><td>Search-engine cached copy</td></tr>
</table></div>

<h4>OSINT tools &amp; sources</h4>
<div class="table-wrap"><table>
<tr><th>Tool / source</th><th>Use</th><th>Passive?</th></tr>
<tr><td>Shodan / Censys</td><td>Internet-wide scan/banner data on exposed services</td><td>Passive (pre-collected)</td></tr>
<tr><td>Certificate Transparency / crt.sh</td><td>Subdomain discovery via issued certs</td><td>Passive</td></tr>
<tr><td>theHarvester</td><td>Emails, subdomains, hosts from public sources</td><td>Passive</td></tr>
<tr><td>Maltego</td><td>Visual link analysis of entities</td><td>Passive</td></tr>
<tr><td>Wayback Machine</td><td>Historical site snapshots (incl. removed)</td><td>Passive</td></tr>
<tr><td>DNS subdomain brute-force</td><td>Guess subdomains against target DNS</td><td>Active (logged)</td></tr>
<tr><td>Port scan / banner grab (nmap)</td><td>Probe target services directly</td><td>Active (logged)</td></tr>
</table></div>

<h4>Social-network intel</h4>
<div class="table-wrap"><table>
<tr><th>Platform</th><th>Reveals</th><th>IR use</th></tr>
<tr><td>LinkedIn</td><td>Names, roles, tech stack, org chart</td><td>Spear-phishing targets, tech in use</td></tr>
<tr><td>GitHub</td><td>Code, commits, leaked keys, internal names</td><td>Credentials, infra mapping</td></tr>
<tr><td>Breach-data sources</td><td>Staff emails in past breaches</td><td>Password-reuse risk</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="c3-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Viết collection plan: câu hỏi, phạm vi, passive/active, tài khoản và thời hạn lưu.</li>
<li>Thu nguồn gốc/provenance, timestamp và screenshot/raw export; pivot có kiểm soát.</li>
<li>Tách fact, self-asserted data và inference; xác minh qua ít nhất hai nguồn.</li>
<li>Bảo vệ OPSEC: tài khoản nghiên cứu, proxy được phê duyệt, không tương tác đối tượng nếu chưa cho phép.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Search result/cache/archive, social profile/post, code repo, job ad.</li>
<li>Certificate, passive DNS, Shodan/Censys banner và public cloud asset.</li>
<li>Username/email reuse, image EXIF/reverse image và relationship/time pattern.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Search operators <code>site:</code>, <code>filetype:</code>, quoted phrase, exclusion.</li>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Lưu URL, access time, query và hash file tải về.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Job post nhắc Splunk và AWS là clue công nghệ, không chứng minh phiên bản hay exposure; xác minh bằng public service/certificate và giữ mức confidence.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Search result thay đổi và cá nhân hóa.</li>
<li>Social identity có thể giả; cùng username không đủ attribution.</li>
<li>Active scan có thể vượt authority và cảnh báo mục tiêu.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> Berkeley Protocol on Digital Open Source Investigations; search-engine documentation; OWASP Web Security Testing Guide.</p>
</div>
</details>`;
