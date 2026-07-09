/* Theory — D3 (Appendix D). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d3"]=`<h2>D3 — Network Configuration Security Issues</h2>

<div class="tier recall" id="d3-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Egress rule gap:</strong> <span class="en">Traffic leaving on a non-standard high port despite "default deny" egress = a rule gap; tunnelling over allowed ports/protocols can deliberately bypass firewall or proxy policy.</span><span class="vi">Lưu lượng ra qua cổng cao bất thường dù có "default deny" egress = lỗ hổng luật; tunnel qua cổng/giao thức được phép có thể cố tình vượt chính sách firewall hoặc proxy.</span></li>
<li><strong>DNS information leakage:</strong> <span class="en">Internal hostnames/IPs leaking out via DNS responses (or zone transfer) expose the internal map.</span><span class="vi">Hostname/IP nội bộ rò ra qua phản hồi DNS (hoặc zone transfer) làm lộ bản đồ nội bộ.</span></li>
<li><strong>Unexpected routes:</strong> <span class="en">Traffic taking an odd path (e.g. via a workstation acting as a router) suggests a pivot or routing error.</span><span class="vi">Lưu lượng đi đường lạ (vd qua một workstation làm router) gợi ý pivot hoặc lỗi định tuyến.</span></li>
<li><strong>Open relay:</strong> <span class="en">A mail server relaying from any sender to any recipient is abusable for spam/spoofing.</span><span class="vi">Mail server cho relay từ bất kỳ người gửi tới bất kỳ người nhận bị lạm dụng để spam/giả mạo.</span></li>
<li><strong>Exposed mgmt services:</strong> <span class="en">RDP (3389) or SMB (445) reachable from the internet are prime brute-force/exploit targets.</span><span class="vi">RDP (3389) hoặc SMB (445) tiếp cận được từ internet là mục tiêu brute-force/khai thác hàng đầu.</span></li>
<li><strong>Split-tunnel VPN:</strong> <span class="en">Lets some traffic bypass corporate inspection — a monitoring blind spot.</span><span class="vi">Cho phép một phần traffic né kiểm tra của doanh nghiệp — điểm mù giám sát.</span></li>
</ul></div></div>

<details class="tier concept" id="d3-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Phát hiện firewall/rule "không hoạt động"</h4>
<p>Nếu có chính sách "default deny" egress mà vẫn thấy traffic ra qua cổng cao lạ → một <strong>lỗ hổng trong luật</strong> hoặc kẻ tấn công <strong>cố tình vượt firewall/proxy</strong> (tunnel giao thức khác qua cổng được phép như 80/443/53, hoặc kết nối thẳng để né proxy). Đối chiếu luật và proxy policy với traffic thực tế; để ý rule shadowing (xem B6).</p>

<h4>DNS information leakage &amp; email routing</h4>
<p><strong>DNS leakage</strong>: hostname/IP nội bộ lộ ra qua bản ghi DNS công khai, HINFO, hoặc zone transfer cho phép → vẽ được bản đồ nội bộ. <strong>Email routing issues</strong>: <strong>open relay</strong> (chuyển thư cho bất kỳ ai) bị lạm dụng spam/spoof; SPF/MX cấu hình sai làm thư giả qua được.</p>

<h4>Định tuyến bất thường &amp; dịch vụ phơi</h4>
<p><strong>Unexpected traffic routes</strong>: traffic đi qua một máy không phải gateway (workstation làm router) = <em>pivot của kẻ tấn công</em> hoặc lỗi cấu hình. <strong>RDP/SMB phơi internet</strong>: bị quét và brute-force liên tục — nên đứng sau VPN. <strong>Split-tunnel VPN</strong>: traffic người dùng đi thẳng internet không qua kiểm tra doanh nghiệp → điểm mù.</p>
</div></details>

<details class="tier reference" id="d3-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Misconfiguration → indicator</h4>
<div class="table-wrap"><table>
<tr><th>Issue</th><th>Sign / risk</th></tr>
<tr><td>Egress rule gap / bypass</td><td>Outbound on odd high port despite deny</td></tr>
<tr><td>DNS information leakage</td><td>Internal names/IPs in DNS; AXFR allowed</td></tr>
<tr><td>Unexpected route</td><td>Traffic via a non-gateway host (pivot)</td></tr>
<tr><td>Open relay</td><td>Mail relayed from any → any</td></tr>
<tr><td>Exposed RDP/SMB</td><td>3389/445 reachable from internet</td></tr>
<tr><td>Split-tunnel VPN</td><td>Traffic bypasses inspection</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="d3-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>So intended architecture/policy với route, ACL, NAT, DNS/MX và traffic quan sát.</li>
<li>Test từ đúng zone; tìm asymmetric route, direct-to-internet, shadow rule, open relay/recursion và split tunnel.</li>
<li>Xác định misconfiguration hay deliberate bypass; ghi business owner và blast radius.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Traceroute/route table, firewall hit, proxy bypass, DNS public record/AXFR, SMTP relay test.</li>
<li>Unexpected gateway, exposed management port và traffic trên protocol allowed nhưng nội dung khác.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-active">NETWORK-ACTIVE</span>
<code>tracert</code>/<code>traceroute</code>, <code>dig</code>, <code>Test-NetConnection</code>; relay test chỉ khi được phép.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>HTTPS trực tiếp từ workstation dù policy bắt proxy cho thấy PAC bypass, application pinning hoặc rule gap; cần proxy và firewall log để phân biệt.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Asymmetric routing có thể hợp lệ nhưng làm sensor chỉ thấy nửa session.</li>
<li>Public DNS chứa private IP là leakage nhưng đôi khi split-horizon publish nhầm.</li>
<li>Không sửa production rule trước khi đánh giá outage/rollback.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> NIST SP 800-41; DNS/SMTP RFCs; vendor firewall/proxy guidance.</p>
</div>
</details>`;
