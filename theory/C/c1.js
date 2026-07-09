/* Theory — C1 (Appendix C). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["c1"]=`<h2>C1 — Registration Records (WHOIS)</h2>

<div class="tier recall" id="c1-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>WHOIS:</strong> <span class="en">Registration data for domains AND IP ranges — registrar, dates, registrant, name servers, abuse contacts.</span><span class="vi">Dữ liệu đăng ký của cả tên miền VÀ dải IP — nhà đăng ký, ngày tháng, chủ thể, name server, liên hệ abuse.</span></li>
<li><strong>Domain WHOIS gives:</strong> <span class="en">Registrar, creation/expiry dates, registrant (often GDPR-redacted), name servers, abuse email.</span><span class="vi">Nhà đăng ký, ngày tạo/hết hạn, chủ thể (thường bị ẩn theo GDPR), name server, email abuse.</span></li>
<li><strong>IP WHOIS = the RIRs:</strong> <span class="en">Query the right Regional Internet Registry (ARIN, RIPE, APNIC, LACNIC, AFRINIC) to find which org/ISP owns an IP block + its ASN.</span><span class="vi">Tra đúng Regional Internet Registry (ARIN, RIPE, APNIC, LACNIC, AFRINIC) để biết tổ chức/ISP sở hữu dải IP + ASN của nó.</span></li>
<li><strong>Recent creation date:</strong> <span class="en">A domain registered days ago is a common malice indicator (phishing/C2).</span><span class="vi">Tên miền mới đăng ký vài ngày là dấu hiệu độc hại phổ biến (phishing/C2).</span></li>
<li><strong>Reverse WHOIS:</strong> <span class="en">Find OTHER domains sharing the same registrant email, organisation or name servers — pivot to related infrastructure.</span><span class="vi">Tìm các tên miền KHÁC dùng chung email/tổ chức/name server — xoay trục sang hạ tầng liên quan.</span></li>
<li><strong>Registrar vs Registry:</strong> <span class="en">The registry runs the TLD (e.g. Verisign for .com); the registrar resells/registers individual domains (e.g. GoDaddy).</span><span class="vi">Registry vận hành TLD (vd Verisign cho .com); registrar bán/đăng ký từng tên miền (vd GoDaddy).</span></li>
<li><strong>Historical / passive WHOIS:</strong> <span class="en">Can reveal who registered a domain BEFORE redaction or resale.</span><span class="vi">Có thể lộ ai đã đăng ký tên miền TRƯỚC khi bị ẩn hoặc bán lại.</span></li>
</ul></div></div>

<details class="tier concept" id="c1-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>WHOIS cho biết gì và dùng để làm gì</h4>
<p>Với một <strong>tên miền</strong>: nhà đăng ký, ngày tạo/hết hạn/cập nhật, name server, và (nếu không bị ẩn) tên/email/tổ chức của chủ thể + liên hệ abuse. Với một <strong>địa chỉ IP</strong>: tổ chức/ISP sở hữu dải, ASN, và liên hệ abuse — tra ở RIR phụ trách vùng đó.</p>

<h4>Vì sao registrant hay bị ẩn (redacted)?</h4>
<p>Từ khi có <strong>GDPR</strong>, nhiều WHOIS che tên/email chủ thể, hoặc chủ thể dùng <strong>dịch vụ privacy/proxy</strong>. Khi đó dùng <strong>historical/passive WHOIS</strong> để xem dữ liệu trước khi bị ẩn, hoặc xoay trục qua name server/email còn lộ.</p>

<h4>Pivoting (xoay trục) — kỹ năng cốt lõi</h4>
<p>Nhiều tên miền tấn công dùng chung một email đăng ký hiếm, một bộ name server lạ, hoặc cùng nằm trên một dải IP/ASN. <strong>Reverse WHOIS</strong> và tra ASN giúp <em>gom nhóm hạ tầng có khả năng liên quan</em> của cùng một chiến dịch.</p>

<h4>Registrar — Registry — RIR (đừng nhầm)</h4>
<p><strong>Registry</strong>: cơ quan quản lý một TLD (.com, .uk...). <strong>Registrar</strong>: đơn vị bán tên miền cho người dùng. <strong>RIR</strong>: cơ quan cấp phát IP/ASN theo vùng. Để truy IP → org dùng <em>RIR WHOIS</em>; để truy tên miền → <em>registrar/registry WHOIS</em>.</p>

<h4>Báo cáo abuse &amp; typosquatting</h4>
<p>Trường <strong>abuse contact</strong> là điểm khởi đầu để báo lạm dụng. Tên miền giả mạo kiểu <strong>typosquatting</strong> (paypaI.com với chữ I hoa thay l) phát hiện bằng cách so chuỗi với thương hiệu và để ý homoglyph.</p>
</div></details>

<details class="tier reference" id="c1-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Domain WHOIS fields</h4>
<div class="table-wrap"><table>
<tr><th>Field</th><th>Meaning / use</th></tr>
<tr><td>Registrar</td><td>Company that registered the domain</td></tr>
<tr><td>Creation / Updated / Expiry</td><td>Age = malice signal; recent = suspicious</td></tr>
<tr><td>Registrant / Admin / Tech</td><td>Owner contacts (often GDPR-redacted)</td></tr>
<tr><td>Name servers (NS)</td><td>Pivot point — shared NS links domains</td></tr>
<tr><td>Abuse contact</td><td>Where to report misuse</td></tr>
<tr><td>Status (EPP)</td><td>clientHold, pendingDelete, etc.</td></tr>
</table></div>

<h4>IP WHOIS — the 5 RIRs</h4>
<div class="table-wrap"><table>
<tr><th>RIR</th><th>Region</th></tr>
<tr><td>ARIN</td><td>North America</td></tr>
<tr><td>RIPE NCC</td><td>Europe, Middle East, Central Asia</td></tr>
<tr><td>APNIC</td><td>Asia-Pacific</td></tr>
<tr><td>LACNIC</td><td>Latin America &amp; Caribbean</td></tr>
<tr><td>AFRINIC</td><td>Africa</td></tr>
</table></div>

<h4>Registry vs Registrar vs RIR</h4>
<div class="table-wrap"><table>
<tr><th>Entity</th><th>Role</th><th>Query for</th></tr>
<tr><td>Registry</td><td>Operates a TLD (.com, .uk)</td><td>Domain authority data</td></tr>
<tr><td>Registrar</td><td>Sells/registers domains</td><td>Domain registration data</td></tr>
<tr><td>RIR</td><td>Allocates IP ranges &amp; ASNs</td><td>IP → owning org / ISP</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="c1-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Tách domain registry/registrar/registrant khỏi IP RIR/netblock/ASN.</li>
<li>Truy vấn RDAP/WHOIS, lưu raw response và thời điểm; pivot name server, email, ASN, certificate.</li>
<li>So current với historical record khi được phép; kiểm tra privacy/proxy và reseller.</li>
<li>Chấm confidence, không đồng nhất registrant hạ tầng với attacker.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Creation/update/expiry, registrar, status, name server, DNSSEC.</li>
<li>RIR inetnum/netrange, origin ASN, abuse contact và allocation hierarchy.</li>
<li>RDAP entity/role/link/event; passive DNS và certificate transparency.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>
<code>whois domain</code>, <code>whois IP</code>; RDAP client/API.</li>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Pivot exact values; tránh search tên quá rộng gây trùng.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Cùng registrar và privacy service không liên kết hai domain; cùng rare name server, creation window và certificate pattern mạnh hơn.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>GDPR/privacy làm dữ liệu bị redacted.</li>
<li>WHOIS có thể stale/sai; cloud IP thuộc provider không phải actor.</li>
<li>Historical data từ bên thứ ba có điều khoản và sai số riêng.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> ICANN RDAP/registration data; the five RIRs; RFC 9082/9083.</p>
</div>
</details>`;
