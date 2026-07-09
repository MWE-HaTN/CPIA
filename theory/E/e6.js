/* Theory — E6 (Appendix E). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e6"]=`<h2>E6 — Windows Registry Essentials</h2>

<div class="tier recall" id="e6-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Hive format:</strong> <span class="en">The registry is a set of binary hive files (SYSTEM, SOFTWARE, SAM, SECURITY, NTUSER.DAT, UsrClass.dat) made of keys/values.</span><span class="vi">Registry là tập các file hive nhị phân (SYSTEM, SOFTWARE, SAM, SECURITY, NTUSER.DAT, UsrClass.dat) gồm key/value.</span></li>
<li><strong>LastWrite time:</strong> <span class="en">Each key has a LastWrite timestamp = when it last changed (like a file's modified time).</span><span class="vi">Mỗi key có mốc LastWrite = lần thay đổi gần nhất (giống thời gian sửa của file).</span></li>
<li><strong>Persistence locations:</strong> <span class="en">Run/RunOnce, Services, Winlogon, Image File Execution Options, scheduled tasks.</span><span class="vi">Run/RunOnce, Services, Winlogon, Image File Execution Options, scheduled task.</span></li>
<li><strong>USB artefacts:</strong> <span class="en">USBSTOR and MountedDevices can support that Windows enumerated a removable device and mapped storage; correlate serial, setup logs and timestamps before attributing use.</span><span class="vi">USBSTOR và MountedDevices có thể cho thấy Windows đã enumerate thiết bị rời và ánh xạ storage; cần đối chiếu serial, setup log và timestamp trước khi quy kết việc sử dụng.</span></li>
<li><strong>User accounts:</strong> <span class="en">SAM hive holds local accounts (and hashes); SIDs map to usernames.</span><span class="vi">Hive SAM chứa tài khoản cục bộ (và hash); SID ánh xạ tới tên người dùng.</span></li>
<li><strong>Execution evidence:</strong> <span class="en">Shimcache (in SYSTEM), UserAssist (NTUSER, ROT13), ShellBags (folders browsed).</span><span class="vi">Shimcache (trong SYSTEM), UserAssist (NTUSER, ROT13), ShellBags (thư mục đã duyệt).</span></li>
<li><strong>ACLs &amp; protected storage:</strong> <span class="en">Registry keys have ACLs; weak ACLs on service ImagePath enable hijack. Protected storage / LSA secrets hold credentials.</span><span class="vi">Key registry có ACL; ACL yếu trên ImagePath của service cho phép chiếm quyền. Protected storage / LSA secrets giữ thông tin xác thực.</span></li>
</ul></div></div>

<details class="tier concept" id="e6-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Cấu trúc hive &amp; LastWrite</h4>
<p>Registry là CSDL phân cấp gồm các <strong>hive nhị phân</strong>. Mỗi <strong>key</strong> có một mốc <strong>LastWrite</strong> — tương đương "modified time" của file, rất hữu ích để xác định <em>khi nào</em> một thay đổi (vd cài persistence) xảy ra. Tool: RegRipper, Registry Explorer (Eric Zimmerman).</p>

<h4>Vị trí persistence (rất hay hỏi)</h4>
<p><strong>Run/RunOnce</strong> (HKLM &amp; HKCU): chạy khi đăng nhập. <strong>Services</strong>: chạy lúc boot với quyền cao. <strong>Winlogon</strong> (Shell/Userinit). <strong>Image File Execution Options (IFEO)</strong>: gắn "debugger" để chiếm thực thi một exe. Phân biệt với <strong>TypedURLs</strong> hay <strong>wallpaper</strong> — đó là hoạt động/thẩm mỹ, không phải persistence.</p>

<h4>USB / removable storage artefacts</h4>
<p><strong>USBSTOR</strong> (HKLM\\SYSTEM\\CurrentControlSet\\Enum\\USBSTOR) lưu vendor/product/serial của thiết bị USB từng cắm; kết hợp <strong>MountedDevices</strong>, <strong>USB</strong> key và setupapi log để dựng lại thời điểm cắm và ánh xạ tới ổ đĩa.</p>

<h4>Tài khoản, ACL, protected storage</h4>
<p><strong>SAM</strong> chứa tài khoản cục bộ + hash; <strong>SID</strong> định danh principal. Key registry cũng có <strong>ACL</strong> — ACL yếu trên <code>ImagePath</code> của một service cho phép kẻ tấn công trỏ service tới binary độc hại (chạy với quyền của service). <strong>LSA secrets / protected storage</strong> giữ credential dịch vụ, có thể bị trích.</p>

<h4>Bằng chứng thực thi trong registry</h4>
<p><strong>Shimcache</strong> (AppCompatCache trong SYSTEM): chủ yếu hỗ trợ sự hiện diện/path; không mặc định là bằng chứng execution trên mọi phiên bản. <strong>UserAssist</strong> (NTUSER, mã ROT13): hỗ trợ chương trình chạy qua GUI + số lần trong bối cảnh phù hợp. <strong>ShellBags</strong>: cho thấy shell đã lưu thông tin hiển thị thư mục, kể cả một số đường dẫn không còn tồn tại; không tự chứng minh người dùng đã mở mọi file bên trong.</p>
</div></details>

<details class="tier reference" id="e6-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Registry persistence locations</h4>
<div class="table-wrap"><table>
<tr><th>Location</th><th>Effect</th></tr>
<tr><td>Run / RunOnce (HKLM, HKCU)</td><td>Run at logon</td></tr>
<tr><td>Services (CurrentControlSet\\Services)</td><td>Run at boot, high privilege</td></tr>
<tr><td>Winlogon (Shell, Userinit)</td><td>Run during logon</td></tr>
<tr><td>Image File Execution Options</td><td>Hijack execution of a target exe</td></tr>
</table></div>

<h4>USB &amp; account artefacts</h4>
<div class="table-wrap"><table>
<tr><th>Key</th><th>Reveals</th></tr>
<tr><td>USBSTOR (Enum)</td><td>Connected USB devices (vendor/serial)</td></tr>
<tr><td>MountedDevices</td><td>Device → drive-letter mapping</td></tr>
<tr><td>SAM</td><td>Local accounts + hashes</td></tr>
</table></div>

<h4>Execution / activity in registry</h4>
<div class="table-wrap"><table>
<tr><th>Artefact</th><th>Evidence of</th></tr>
<tr><td>Shimcache (SYSTEM)</td><td>Program presence/path/time</td></tr>
<tr><td>UserAssist (NTUSER, ROT13)</td><td>GUI program execution + count</td></tr>
<tr><td>ShellBags</td><td>Folders browsed + view settings</td></tr>
<tr><td>RecentDocs / TypedURLs</td><td>Recently opened files / typed URLs</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="e6-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Mount hive offline với transaction logs; xác định active ControlSet.</li>
<li>Parse persistence, USB, accounts, protected storage và execution artefact.</li>
<li>Dùng LastWrite như key-level time rồi correlate nguồn khác.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Run/RunOnce, Services, Winlogon, IFEO; USBSTOR/MountedDevices.</li>
<li>SAM/SID, LSA secrets, Shimcache, UserAssist, ShellBags.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Registry Explorer/RECmd/RegRipper; PowerShell <code>Get-Acl</code> trên live copy.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Run key LastWrite cho biết key đổi lúc nào, không chắc value cụ thể nào đổi nếu nhiều value.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Hive dirty cần LOG1/LOG2 replay.</li>
<li>CurrentControlSet là alias trên live system.</li>
<li>Protected credential handling cần scope và bảo mật cao.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> Microsoft Registry format/forensics; Eric Zimmerman Registry tools.</p>
</div>
</details>`;
