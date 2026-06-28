/* Theory — B6 (Appendix B). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["b6"]=`<h2>B6 — Network Access Control Analysis</h2><ul>

<li><strong>Review rule bases top-down:</strong> <span class="en">First match wins; broad early permits can shadow later denies.</span><span class="vi">Quy tắc khớp đầu tiên thắng; quy tắc cho phép rộng ở trên có thể che khuất các lệnh từ chối bên dưới.</span></li>

<li><strong>Check default policy:</strong> <span class="en">Explicit deny-all or implicit deny should exist at the end.</span><span class="vi">Nên có từ chối tất cả rõ ràng hoặc từ chối ngầm định ở cuối.</span></li>

<li><strong>Check ingress and egress:</strong> <span class="en">Weak outbound filtering enables C2 and exfiltration.</span><span class="vi">Lọc đầu ra yếu cho phép C2 và đánh cắp dữ liệu.</span></li>

<li><strong>Check logging:</strong> <span class="en">Permit and deny rules without logs create investigative blind spots.</span><span class="vi">Quy tắc cho phép và từ chối không có log tạo ra điểm mù điều tra.</span></li>

<li><strong>Check scope:</strong> <span class="en">Source, destination, service, interface direction, NAT, object groups, stale rules.</span><span class="vi">Nguồn, đích, dịch vụ, chiều interface, NAT, nhóm đối tượng, quy tắc lỗi thời.</span></li>

<li><strong>Router / switch ACLs:</strong> <span class="en">Often stateless and interface-direction specific.</span><span class="vi">Thường không trạng thái và đặc thù theo chiều interface.</span></li>

</ul><div class="table-wrap"><table><tr><th>Misconfiguration</th><th>Risk</th></tr><tr><td>Any / Any permit</td><td>Bypasses intended segmentation and allows malware egress.</td></tr><tr><td>Public management interfaces</td><td>SSH / RDP / admin panels exposed to the internet.</td></tr><tr><td>Overly broad source / destination</td><td>Unintended partner, guest, or whole-subnet access.</td></tr><tr><td>No egress filtering</td><td>C2 and exfiltration over arbitrary ports.</td></tr><tr><td>Overlapping / shadowed rules</td><td>Rule ordering causes unexpected access.</td></tr><tr><td>IPv6 not filtered</td><td>Dual-stack hosts bypass IPv4-only controls.</td></tr></table></div><ul>

<li><span class="en">Bypass examples: protocol tunneling, port manipulation, fragmentation, encrypted channels, domain fronting, and IPv6 blind spots.</span><span class="vi">Ví dụ vượt qua: tunneling giao thức, thao tác cổng, phân mảnh, kênh mã hóa, domain fronting và điểm mù IPv6.</span></li>

</ul>

<p class="sub-heading">Common Confusions — Firewall and ACL Review</p>

<ul>

<li><strong>Firewall rule order matters:</strong> <span class="en">First matching rule usually decides the action.</span><span class="vi">Quy tắc khớp đầu tiên thường quyết định hành động.</span></li>

<li><strong>Ingress and egress are both important:</strong> <span class="en">Blocking inbound attacks does not stop outbound C2.</span><span class="vi">Chặn tấn công đầu vào không ngăn được C2 đầu ra.</span></li>

<li><strong>NAT is not a security control:</strong> <span class="en">It changes addressing; it does not replace filtering or logging.</span><span class="vi">Nó thay đổi địa chỉ; nó không thay thế việc lọc hay ghi log.</span></li>

</ul>

<div class="callout warning"><strong>Exam tip:</strong> <span class="en">When a rule appears correct but traffic still passes, check rule order, object groups, NAT, interface direction, IPv6, and shadowed rules.</span><span class="vi">Khi quy tắc có vẻ đúng nhưng lưu lượng vẫn đi qua, hãy kiểm tra thứ tự quy tắc, nhóm đối tượng, NAT, chiều interface, IPv6 và quy tắc bị che khuất.</span></div>


<h3 class="qz-theory"><span class="en">Reviewing Firewall Rule Bases &amp; ACLs</span><span class="vi">Rà soát bộ rule firewall &amp; ACL</span></h3>
<ul>
<li><strong><span class="en">Order matters (first match wins):</span><span class="vi">Thứ tự quan trọng (rule trúng đầu thắng):</span></strong> <span class="en">A broad <code>any/any allow</code> high in the list silently overrides all specific rules below it — effectively no filtering.</span><span class="vi">Một <code>any/any allow</code> rộng nằm trên cùng âm thầm ghi đè mọi rule cụ thể bên dưới — coi như không lọc.</span></li>
<li><strong><span class="en">Implicit deny:</span><span class="vi">Deny ngầm:</span></strong> <span class="en">Most ACLs end with deny-all — anything not explicitly permitted is dropped (default-deny/whitelist). Good practice.</span><span class="vi">Đa số ACL kết thúc bằng deny-all — bất cứ gì không được phép tường minh đều bị bỏ (default-deny/whitelist). Thực hành tốt.</span></li>
<li><strong><span class="en">Rule shadowing:</span><span class="vi">Rule shadowing:</span></strong> <span class="en">An earlier, broader rule prevents a later, specific rule from ever matching — the specific rule is dead.</span><span class="vi">Một rule rộng ở trước khiến rule cụ thể sau không bao giờ khớp — rule cụ thể "chết".</span></li>
<li><strong><span class="en">Stateful vs stateless:</span><span class="vi">Stateful vs stateless:</span></strong> <span class="en">A stateful firewall tracks connection state and auto-allows legitimate return traffic; a stateless filter evaluates each packet alone and needs explicit rules both ways.</span><span class="vi">Firewall stateful theo dõi trạng thái kết nối và tự cho phép lưu lượng trả về hợp lệ; bộ lọc stateless xét từng gói riêng và cần rule tường minh hai chiều.</span></li></ul>
`;
