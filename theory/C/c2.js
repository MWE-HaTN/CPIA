/* Theory — C2 (Appendix C). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["c2"]=`<h2>C2 — Domain Name Server (DNS)</h2>

<div class="tier recall" id="c2-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Query types:</strong> <span class="en">Recursive (resolver chases the full answer for the client) vs iterative (client follows referrals itself).</span><span class="vi">Recursive (resolver tự đuổi tới đáp án cuối cho client) vs iterative (client tự đi theo các referral).</span></li>
<li><strong>Records to know:</strong> <span class="en">A, AAAA, MX, TXT, NS, PTR, SOA, CNAME, HINFO (+ SRV, CAA) — see Reference for each.</span><span class="vi">A, AAAA, MX, TXT, NS, PTR, SOA, CNAME, HINFO (+ SRV, CAA) — xem từng cái ở Reference.</span></li>
<li><strong>Zone transfer (AXFR):</strong> <span class="en">Bulk copy of a zone. If allowed to an external party, it discloses the ENTIRE internal DNS namespace — a misconfiguration.</span><span class="vi">Sao chép cả zone. Nếu cho phép bên ngoài, nó lộ TOÀN BỘ namespace DNS nội bộ — một cấu hình sai.</span></li>
<li><strong>TCP vs UDP:</strong> <span class="en">DNS uses UDP/53 for queries; TCP/53 for zone transfers and responses larger than the UDP limit.</span><span class="vi">DNS dùng UDP/53 cho truy vấn; TCP/53 cho zone transfer và phản hồi lớn hơn giới hạn UDP.</span></li>
<li><strong>Dynamic DNS:</strong> <span class="en">Providers (no-ip, duckdns) map a stable hostname onto a freely-changing IP — abused for resilient C2.</span><span class="vi">Nhà cung cấp (no-ip, duckdns) gắn một hostname cố định vào IP đổi tự do — bị lạm dụng cho C2 bền.</span></li>
<li><strong>Fast-flux:</strong> <span class="en">Many rapidly-rotating A records with very low TTLs to hide the real server behind ever-changing IPs.</span><span class="vi">Nhiều bản ghi A xoay vòng nhanh với TTL rất thấp để giấu server thật sau các IP đổi liên tục.</span></li>
<li><strong>Malicious DNS signs:</strong> <span class="en">DGA (hundreds of random domains, mostly NXDOMAIN), DNS tunnelling (data in subdomains/TXT), DoH to hide DNS in HTTPS.</span><span class="vi">DGA (hàng trăm domain ngẫu nhiên, đa số NXDOMAIN), DNS tunnelling (dữ liệu trong subdomain/TXT), DoH giấu DNS trong HTTPS.</span></li>
</ul></div></div>

<details class="tier concept" id="c2-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Luồng truy vấn DNS</h4>
<p>Client hỏi resolver (thường <strong>recursive</strong>): resolver lần lượt hỏi root → TLD → authoritative, rồi trả lời cuối cùng cho client và cache lại theo TTL. <strong>Iterative</strong>: mỗi máy chủ chỉ trả về referral, client tự đi tiếp. Một <strong>glue record</strong> cung cấp IP của name server nằm trong chính zone đó để tránh vòng lặp.</p>

<h4>Zone transfer (AXFR) — vì sao nguy hiểm</h4>
<p>Máy phụ (secondary) đồng bộ zone từ máy chính bằng AXFR. Nếu server cho phép AXFR <em>cho bất kỳ ai</em>, kẻ tấn công tải về <strong>toàn bộ bản ghi nội bộ</strong> — vẽ được bản đồ hạ tầng (host, mail, dev...). Đây là một lỗi cấu hình kinh điển.</p>

<h4>Dynamic DNS &amp; fast-flux</h4>
<p><strong>Dynamic DNS</strong>: hostname cố định, IP nền đổi liên tục → C2 không chết khi đổi IP. <strong>Fast-flux</strong> đẩy xa hơn: một domain trỏ tới <em>nhiều IP, TTL cực thấp</em>, xoay liên tục (single-flux); double-flux còn xoay cả name server. Dấu hiệu: TTL rất thấp + tập IP đổi nhanh, rải nhiều ASN/quốc gia.</p>

<h4>DNS làm kênh ngầm</h4>
<p><strong>DGA</strong>: malware sinh hàng loạt domain theo thuật toán; phần lớn trả NXDOMAIN cho tới khi trúng domain kẻ tấn công đã đăng ký. <strong>DNS tunnelling</strong>: nhồi dữ liệu đã mã hóa vào nhãn subdomain (truy vấn) và bản ghi TXT (phản hồi) → exfil/C2 qua cổng 53 thường được mở. <strong>DoH</strong> (DNS over HTTPS, cổng 443) giấu truy vấn DNS trong HTTPS, vượt giám sát DNS truyền thống. <strong>DNSSEC</strong> chống giả mạo dữ liệu DNS (cache poisoning) bằng chữ ký, <em>không</em> mã hóa nội dung. <strong>CAA</strong> giới hạn CA nào được cấp chứng chỉ cho domain.</p>
</div></details>

<details class="tier reference" id="c2-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>DNS record types</h4>
<div class="table-wrap"><table>
<tr><th>Record</th><th>Maps / holds</th><th>Investigation note</th></tr>
<tr><td>A</td><td>Hostname → IPv4</td><td>Core resolution; low TTL = fast-flux?</td></tr>
<tr><td>AAAA</td><td>Hostname → IPv6</td><td>IPv6 equivalent of A</td></tr>
<tr><td>MX</td><td>Domain → mail servers (priority)</td><td>Where email is routed</td></tr>
<tr><td>NS</td><td>Zone → authoritative name servers</td><td>Delegation; pivot point</td></tr>
<tr><td>PTR</td><td>IP → hostname (reverse, in-addr.arpa)</td><td>Reverse DNS; anti-spam checks</td></tr>
<tr><td>SOA</td><td>Zone start-of-authority (serial, refresh, min TTL)</td><td>Primary NS, negative-cache TTL</td></tr>
<tr><td>CNAME</td><td>Alias → canonical name</td><td>Redirection / CDN</td></tr>
<tr><td>TXT</td><td>Free text (SPF, DKIM, DMARC, verification)</td><td>Email auth; can carry tunnelled data</td></tr>
<tr><td>HINFO</td><td>Host hardware / OS info</td><td>If public = recon leak</td></tr>
<tr><td>SRV</td><td>Service → host + port (e.g. _ldap._tcp)</td><td>Locates services (AD)</td></tr>
<tr><td>CAA</td><td>Which CAs may issue certs for the domain</td><td>Cert-misissuance control</td></tr>
</table></div>

<h4>Query &amp; misuse quick map</h4>
<div class="table-wrap"><table>
<tr><th>Term</th><th>Meaning</th></tr>
<tr><td>Recursive query</td><td>Resolver chases the full answer for the client</td></tr>
<tr><td>Iterative query</td><td>Server returns referrals; client follows them</td></tr>
<tr><td>AXFR</td><td>Full zone transfer (TCP/53)</td></tr>
<tr><td>Fast-flux</td><td>Many low-TTL A records rotating</td></tr>
<tr><td>DGA</td><td>Algorithmically-generated domains (many NXDOMAIN)</td></tr>
<tr><td>DNS tunnelling</td><td>Data in subdomain labels / TXT records</td></tr>
<tr><td>DoH</td><td>DNS over HTTPS (443) — bypasses DNS monitoring</td></tr>
<tr><td>DNSSEC</td><td>Signs DNS data vs forgery (not encryption)</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="c2-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Xác định recursive hay authoritative path; ghi qname/qtype/rcode/flags/TTL.</li>
<li>Theo delegation root→TLD→authoritative; kiểm tra glue, CNAME chain và DNSSEC nếu liên quan.</li>
<li>Thử AXFR chỉ khi được phép; phân tích DDNS/fast-flux bằng lịch sử IP/TTL/ASN.</li>
<li>Tương quan query với client, response và kết nối sau phân giải.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Header ID, QR/AA/RD/RA, answer/authority/additional.</li>
<li>SOA serial/timers, MX preference, TXT, PTR, CNAME, NS, HINFO.</li>
<li>NXDOMAIN rate, entropy/length label, TTL thấp, nhiều A/ASN.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-active">NETWORK-ACTIVE</span>
<code>dig +trace domain</code>, <code>dig domain SOA</code>, <code>dig @ns domain AXFR</code>
</li>
<li>
<span class="cmd-safety cmd-active">NETWORK-ACTIVE</span>Windows: <code>Resolve-DnsName</code>, <code>nslookup -type=mx</code>.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Máy hỏi domain C2 nhưng không có kết nối tiếp có thể do sinkhole/NXDOMAIN; DNS query một mình chưa chứng minh session thành công.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>TTL thấp hợp lệ với CDN; nhiều IP không tự là fast-flux.</li>
<li>PTR do owner netblock quản lý và không xác thực host.</li>
<li>DoH/DoT có thể làm resolver log truyền thống mất visibility.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> RFC 1034/1035, 1995, 2136; DNSSEC RFC 4033–4035.</p>
</div>
</details>`;
