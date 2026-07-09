/* Theory — B10 (Appendix B). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["b10"]=`<h2>B10 — Host Analysis Techniques</h2>

<div class="tier recall" id="b10-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Processes ↔ ports:</strong> <span class="en">netstat -ano (or Get-NetTCPConnection) maps listening ports to the owning PID.</span><span class="vi">netstat -ano (hoặc Get-NetTCPConnection) ánh xạ cổng đang nghe tới PID sở hữu.</span></li>
<li><strong>Process detail:</strong> <span class="en">tasklist / Get-Process; Process Explorer adds parent, command line, signature.</span><span class="vi">tasklist / Get-Process; Process Explorer thêm cha, command line, chữ ký.</span></li>
<li><strong>Patch level:</strong> <span class="en">systeminfo and PowerShell Get-HotFix can list installed updates. WMIC may appear in legacy exam material but the WMIC CLI is deprecated; WMI itself is not.</span><span class="vi">systeminfo và PowerShell Get-HotFix có thể liệt kê bản vá đã cài. WMIC có thể xuất hiện trong tài liệu thi cũ nhưng CLI WMIC đã deprecated; bản thân WMI không bị deprecated.</span></li>
<li><strong>Autostart / persistence:</strong> <span class="en">Autoruns shows the broadest set of auto-start locations; schtasks /query lists scheduled tasks.</span><span class="vi">Autoruns hiện tập rộng nhất các vị trí tự khởi động; schtasks /query liệt kê scheduled task.</span></li>
<li><strong>Finding interesting files:</strong> <span class="en">Look in user profile/temp, recent writes, executables in odd locations, unusual extensions.</span><span class="vi">Tìm trong profile/temp, file vừa ghi, executable ở vị trí lạ, đuôi bất thường.</span></li>
<li><strong>Web servers:</strong> <span class="en">Check IIS/Apache access &amp; error logs, webroots, upload folders for webshells.</span><span class="vi">Kiểm tra log access/error của IIS/Apache, webroot, thư mục upload tìm webshell.</span></li>
</ul></div></div>

<details class="tier concept" id="b10-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Tiến trình ↔ socket mạng</h4>
<p><code>netstat -ano</code> liệt kê cổng đang nghe/kết nối kèm <strong>PID</strong>; ghép PID với <code>tasklist</code>/Process Explorer để biết <em>tiến trình nào mở cổng nào</em> — bắt backdoor lắng nghe hoặc kết nối C2 ra ngoài. Process Explorer còn cho biết tiến trình cha (bất thường: services.exe sinh cmd.exe?), command line, và chữ ký số.</p>

<h4>Đánh giá mức vá</h4>
<p><code>systeminfo</code> (mục Hotfix) hoặc <code>Get-HotFix</code> cho danh sách KB đã cài; <code>wmic qfe list</code> là cách legacy vì WMIC CLI đã deprecated. Danh sách QFE/hotfix không bao phủ chắc chắn mọi component/update; cần đối chiếu OS build, product inventory và công cụ quản lý bản vá trước khi ánh xạ CVE.</p>

<h4>Tìm file đáng ngờ &amp; webshell</h4>
<p>Vị trí ưu tiên: thư mục <strong>profile người dùng, %TEMP%, Downloads</strong>, file vừa được ghi gần đây, <strong>executable nằm sai chỗ</strong> (svchost.exe ngoài System32), đuôi/biểu tượng giả mạo. Trên <strong>web server</strong>: soi access/error log tìm request lạ (xem D9), kiểm tra webroot và thư mục upload tìm <strong>webshell</strong> (file .aspx/.php lạ).</p>
</div></details>

<details class="tier reference" id="b10-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Useful commands</h4>
<div class="table-wrap"><table>
<tr><th>Task</th><th>Command</th></tr>
<tr><td>Ports ↔ PID</td><td>netstat -ano / Get-NetTCPConnection</td></tr>
<tr><td>List processes</td><td>tasklist / Get-Process</td></tr>
<tr><td>Patch level</td><td>systeminfo, Get-HotFix; wmic qfe is legacy/deprecated</td></tr>
<tr><td>Scheduled tasks</td><td>schtasks /query, Get-ScheduledTask</td></tr>
<tr><td>Services</td><td>sc query, Get-Service</td></tr>
<tr><td>Autostart map</td><td>Autoruns</td></tr>
</table></div>

<h4>Where to look</h4>
<div class="table-wrap"><table>
<tr><th>Goal</th><th>Location</th></tr>
<tr><td>Dropped malware</td><td>%TEMP%, user profile, Downloads, ProgramData</td></tr>
<tr><td>Webshell</td><td>Webroot, upload dirs (odd .aspx/.php)</td></tr>
<tr><td>Attacker requests</td><td>IIS/Apache access &amp; error logs</td></tr>
<tr><td>Masquerading binary</td><td>System processes in wrong paths</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="b10-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Chụp triage có timestamp: identity, uptime, process tree, sockets, users, tasks/services và autoruns.</li>
<li>Map PID↔socket↔binary↔hash↔parent/command line; kiểm tra signature và reputation offline.</li>
<li>Đánh giá patch/build và exposed software; tìm webroot, temp, downloads, startup và recent changes.</li>
<li>Thu artefact trước khi kill/quarantine; chuyển sang disk/memory analysis nếu cần.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Process parent/child, token, loaded DLL, handle và network endpoint.</li>
<li>Hotfix/build, installed software, service/task/WMI persistence.</li>
<li>Web logs/config/webroot, file timestamps, ADS và recently created executables.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>
<code>tasklist /svc</code>, <code>netstat -ano</code>, <code>Get-CimInstance Win32_Process</code>
</li>
<li>
<span class="cmd-safety cmd-deprecated">DEPRECATED</span>
<code>systeminfo</code>, <code>Get-HotFix</code>; <code>wmic qfe</code> chỉ cho hệ thống legacy; IIS <code>%SystemDrive%\inetpub\logs</code>.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>w3wp.exe kết nối outbound có thể hợp lệ; w3wp sinh cmd→powershell và webroot có .aspx mới là chuỗi mạnh cho webshell.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Command chạy trên live host làm thay đổi evidence.</li>
<li>PID tái sử dụng; cần timestamp/ProcessGuid.</li>
<li>Danh sách hotfix không đủ xác nhận mọi component đã vá.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> Microsoft Sysinternals; NIST SP 800-86; Microsoft IIS logging documentation.</p>
</div>
</details>`;
