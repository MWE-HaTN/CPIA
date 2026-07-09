/* Theory — B9 (Appendix B). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["b9"]=`<h2>B9 — File System Permissions</h2>

<div class="tier recall" id="b9-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>NTFS = ACL of ACEs:</strong> <span class="en">Each object has a DACL (allow/deny entries); each principal is a SID, not a name.</span><span class="vi">Mỗi đối tượng có một DACL (mục cho phép/từ chối); mỗi principal là một SID, không phải tên.</span></li>
<li><strong>Permission types:</strong> <span class="en">Read, Write/Modify, Read &amp; Execute, List Folder, Full Control; Modify on a binary is dangerous.</span><span class="vi">Read, Write/Modify, Read &amp; Execute, List Folder, Full Control; quyền Modify trên một binary là nguy hiểm.</span></li>
<li><strong>Share vs NTFS:</strong> <span class="en">When both apply over the network, the effective permission is the MOST restrictive.</span><span class="vi">Khi cả hai cùng áp qua mạng, quyền hiệu lực là cái HẠN CHẾ NHẤT.</span></li>
<li><strong>Escalation via weak ACL:</strong> <span class="en">Write/Modify on a service binary (or its folder) lets a low-priv user replace it and escalate.</span><span class="vi">Quyền Write/Modify trên binary của service (hoặc thư mục) cho user thấp thay thế nó và leo thang.</span></li>
<li><strong>Registry ACLs:</strong> <span class="en">Registry keys also have ACLs — weak ACL on a service's ImagePath lets an attacker point it at a malicious binary.</span><span class="vi">Key registry cũng có ACL — ACL yếu trên ImagePath của service cho phép trỏ tới binary độc hại.</span></li>
<li><strong>SID basics:</strong> <span class="en">SID identifies a user/group/computer; RID 500 = built-in Administrator.</span><span class="vi">SID định danh user/group/máy; RID 500 = Administrator dựng sẵn.</span></li>
</ul></div></div>

<details class="tier concept" id="b9-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>ACL, ACE, SID, DACL</h4>
<p>Quyền truy cập NTFS được biểu diễn bằng <strong>DACL</strong> (Discretionary ACL) — một danh sách các <strong>ACE</strong> (cho phép hoặc từ chối) gắn cho từng <strong>SID</strong> (định danh user/group/máy, không phải tên). Khi phân tích, ánh xạ SID → tài khoản để biết <em>ai có quyền gì</em>. ACE "deny" thường được ưu tiên trước "allow".</p>

<h4>Quyền hiệu lực: share vs NTFS</h4>
<p>Truy cập qua mạng tới một share chịu <em>cả hai</em> lớp quyền: <strong>share permission</strong> và <strong>NTFS permission</strong>. Quyền hiệu lực là <strong>giao của hai</strong> — tức <em>hạn chế nhất</em> thắng. (Truy cập cục bộ chỉ chịu NTFS.)</p>

<h4>ACL yếu = đường leo thang</h4>
<p>Nếu một user quyền thấp có <strong>Write/Modify</strong> trên file binary của một service (hoặc thư mục chứa nó), họ có thể <em>thay binary bằng mã độc</em> — service chạy nó với quyền cao (thường SYSTEM) → leo thang đặc quyền. Tương tự, <strong>ACL yếu trên key registry</strong> điều khiển <code>ImagePath</code> của service cho phép trỏ service tới binary độc hại. Đây là lỗi cấu hình hay bị khai thác.</p>
</div></details>

<details class="tier reference" id="b9-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>NTFS permissions</h4>
<div class="table-wrap"><table>
<tr><th>Permission</th><th>Allows</th></tr>
<tr><td>Read</td><td>View contents/attributes</td></tr>
<tr><td>Read &amp; Execute</td><td>Read + run executables</td></tr>
<tr><td>Write / Modify</td><td>Change/replace content (risk on binaries)</td></tr>
<tr><td>List Folder Contents</td><td>Enumerate a directory</td></tr>
<tr><td>Full Control</td><td>Everything incl. change permissions</td></tr>
</table></div>

<h4>Access-control concepts</h4>
<div class="table-wrap"><table>
<tr><th>Term</th><th>Meaning</th></tr>
<tr><td>DACL / ACE</td><td>Permission list / a single allow-or-deny entry</td></tr>
<tr><td>SID</td><td>Security principal ID (user/group/computer)</td></tr>
<tr><td>RID 500</td><td>Built-in Administrator</td></tr>
<tr><td>Effective (share+NTFS)</td><td>Most restrictive wins</td></tr>
<tr><td>Weak ACL on ImagePath</td><td>Service-binary hijack → escalation</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="b9-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Xác định object, owner, inheritance và DACL; phân biệt explicit/inherited allow/deny.</li>
<li>Tính effective access theo token user/group/SID và share+NTFS.</li>
<li>Tìm writable executable/service path, weak registry ACL và quyền tạo file trong parent.</li>
<li>Xác minh bằng account test có kiểm soát, không chỉ đọc GUI.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Owner, ACE type, SID, mask, inheritance flags và integrity level.</li>
<li>Share permission, NTFS DACL/SACL; registry key ACL.</li>
<li>Service account token, nested group và deny ACE.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>
<code>icacls path</code>, <code>whoami /groups</code>, PowerShell <code>Get-Acl</code>
</li>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Registry: <code>Get-Acl HKLM:\...</code>.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>User không sửa service binary nhưng có Modify trên thư mục cha nên có thể thay file sau rename/delete; phải đánh giá quyền trên cả path.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Deny thường ưu tiên nhưng ordering/inheritance và owner privilege tạo nuance.</li>
<li>Share và NTFS kết hợp theo quyền hiệu lực hạn chế hơn khi truy cập mạng.</li>
<li>Administrator không tự động đọc mọi file nếu token/UAC/ACL chặn.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> Microsoft Access Control Model; Windows security descriptors; NIST least privilege guidance.</p>
</div>
</details>`;
