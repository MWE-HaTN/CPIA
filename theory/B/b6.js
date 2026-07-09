/* Theory — B6 (Appendix B). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["b6"]=`<h2>B6 — Network Access Control Analysis</h2>

<div class="tier recall" id="b6-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>First match wins:</strong> <span class="en">Firewalls/ACLs evaluate top-down; the first matching rule decides — order matters.</span><span class="vi">Tường lửa/ACL duyệt từ trên xuống; luật khớp ĐẦU TIÊN quyết định — thứ tự rất quan trọng.</span></li>
<li><strong>Implicit deny:</strong> <span class="en">Anything not explicitly permitted is blocked — a "deny all" sits at the end.</span><span class="vi">Cái gì không được cho phép tường minh thì bị chặn — một "deny all" nằm cuối.</span></li>
<li><strong>Biggest concern:</strong> <span class="en">A broad "any/any allow" high in the list silently overrides everything below it.</span><span class="vi">Một luật "any/any allow" rộng đặt cao trong danh sách âm thầm vô hiệu mọi luật dưới.</span></li>
<li><strong>Rule shadowing:</strong> <span class="en">An earlier broad rule stops a later, more specific rule from ever matching.</span><span class="vi">Một luật rộng đặt trước khiến luật cụ thể hơn ở sau không bao giờ khớp.</span></li>
<li><strong>Egress filtering:</strong> <span class="en">Weak/absent outbound filtering enables C2 and exfiltration; blocking inbound alone doesn't stop outbound C2.</span><span class="vi">Lọc egress yếu/thiếu cho phép C2 và exfil; chỉ chặn inbound không ngăn được C2 đi ra.</span></li>
<li><strong>Logging:</strong> <span class="en">Rules without logging create investigative blind spots.</span><span class="vi">Luật không ghi log tạo điểm mù khi điều tra.</span></li>
<li><strong>Stateful vs stateless:</strong> <span class="en">Stateful tracks connections and auto-allows return traffic; stateless filters each packet.</span><span class="vi">Stateful theo dõi kết nối và tự cho phép gói trả về; stateless lọc từng gói.</span></li>
</ul></div></div>

<details class="tier concept" id="b6-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Cách đọc một rule base</h4>
<p>Luật được đánh giá <strong>từ trên xuống, dừng ở luật khớp đầu tiên</strong>. Mỗi luật gồm: source, destination, service/port, hướng (interface direction), hành động (permit/deny), và (nên có) logging. Vì "first match wins", <em>thứ tự</em> quyết định hành vi thực tế.</p>

<h4>Các lỗi/điểm yếu hay gặp</h4>
<p><strong>any/any allow rộng đặt sớm</strong> = vô hiệu mọi kiểm soát phía dưới (mối lo lớn nhất). <strong>Rule shadowing</strong>: luật rộng phía trước che mất luật cụ thể phía sau (luật sau không bao giờ khớp). <strong>Thiếu egress filtering</strong>: chỉ chặn inbound mà không lọc outbound → malware ra ngoài C2/exfil thoải mái. <strong>Thiếu logging</strong>: tạo điểm mù. Một implicit/explicit <strong>deny-all ở cuối</strong> là dấu hiệu chính sách tốt.</p>

<h4>Stateful vs stateless &amp; NAT</h4>
<p><strong>Stateful firewall</strong> nhớ trạng thái kết nối → tự cho phép gói trả về hợp lệ. <strong>Stateless packet filter / ACL</strong> đánh giá từng gói độc lập (thường gắn theo hướng interface). Lưu ý NAT thay đổi địa chỉ <em>không</em> thay thế việc lọc/log. Khi "luật trông đúng nhưng traffic vẫn qua", kiểm tra thứ tự luật và shadowing.</p>
</div></details>

<details class="tier reference" id="b6-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Rule-base review checklist</h4>
<div class="table-wrap"><table>
<tr><th>Check</th><th>Concern if…</th></tr>
<tr><td>any/any allow position</td><td>High in the list → overrides everything</td></tr>
<tr><td>Rule order / shadowing</td><td>Broad rule hides specific ones</td></tr>
<tr><td>Egress (outbound) filtering</td><td>Absent → C2/exfil possible</td></tr>
<tr><td>Logging on rules</td><td>Missing → blind spots</td></tr>
<tr><td>Deny-all at end</td><td>Present = good (default deny)</td></tr>
</table></div>

<h4>Firewall concepts</h4>
<div class="table-wrap"><table>
<tr><th>Term</th><th>Meaning</th></tr>
<tr><td>First match wins</td><td>Top-down; first matching rule decides</td></tr>
<tr><td>Implicit deny</td><td>Not permitted = blocked</td></tr>
<tr><td>Stateful</td><td>Tracks connections; allows return traffic</td></tr>
<tr><td>Stateless / ACL</td><td>Per-packet, interface-direction specific</td></tr>
<tr><td>Rule shadowing</td><td>Earlier rule prevents a later match</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="b6-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Xác định zone, object, direction, state và default policy.</li>
<li>Chuẩn hóa rule rồi kiểm tra top-down: shadow, overlap, any-any, stale object và broad service.</li>
<li>So rule dự kiến với hit count/traffic thực; kiểm tra NAT và return path.</li>
<li>Đề xuất least privilege kèm owner, expiry, logging và test rollback.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Rule ID/order/action/source/destination/service/time/user/log.</li>
<li>NAT, routing, security group/NACL và host firewall.</li>
<li>Change ticket, business justification, last-hit và owner.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Dùng test matrix source→destination→service; packet-tracer/vendor simulator nếu có.</li>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Tìm <code>ANY</code>, disabled logging, expired temporary rules và management exposure.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Rule allow-any ở dòng 10 làm rule deny-malware ở dòng 20 bị shadow; deny chưa bao giờ được xét dù nhìn riêng có vẻ đúng.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Stateful firewall cho return traffic mà không cần rule chiều ngược.</li>
<li>NACL cloud có thể stateless trong khi security group stateful.</li>
<li>Xóa rule ít hit có thể phá batch/DR hiếm chạy; xác minh owner trước.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> NIST SP 800-41; vendor firewall policy documentation; CIS Controls.</p>
</div>
</details>`;
