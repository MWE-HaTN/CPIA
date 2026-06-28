/* Theory — E4 (Appendix E). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e4"]=`<h2>E4 — Windows File Structures</h2>



<h3>Important Windows Event IDs</h3>

<div class="table-wrap"><table><tr><th>Event ID</th><th>Meaning</th></tr><tr><td>4624</td><td>Successful logon</td></tr><tr><td>4625</td><td>Failed logon</td></tr><tr><td>4672</td><td>Special privileges assigned</td></tr><tr><td>4688</td><td>Process creation, if enabled</td></tr><tr><td>4697</td><td>Service installed</td></tr><tr><td>4698</td><td>Scheduled task created</td></tr><tr><td>4699</td><td>Scheduled task deleted</td></tr><tr><td>4720</td><td>User account created</td></tr><tr><td>4728</td><td>Member added to privileged global group</td></tr><tr><td>4732</td><td>Member added to local group</td></tr><tr><td>4776</td><td>NTLM credential validation</td></tr><tr><td>7045</td><td>Service installed on system</td></tr><tr><td>1102</td><td>Audit log cleared</td></tr><tr><td>4103/4104</td><td>PowerShell module / script block logging</td></tr>

<tr><td>4768</td><td>Kerberos TGT requested (AS-REQ)</td></tr>

<tr><td>4769</td><td>Kerberos service ticket requested (TGS-REQ)</td></tr>

<tr><td>4771</td><td>Kerberos pre-authentication failed</td></tr>

<tr><td>4740</td><td>User account locked out</td></tr>

<tr><td>4648</td><td>Logon using explicit credentials (RunAs)</td></tr>

</table></div>

<h3>Ransomware VSS Deletion Commands</h3>

<p><span class="en">Ransomware commonly deletes Volume Shadow Copies using these commands:</span><span class="vi">Ransomware thường xóa Volume Shadow Copy bằng các lệnh sau:</span></p>

<pre>vssadmin delete shadows /all /quiet

wmic shadowcopy delete

bcdedit /set {default} recoveryenabled No</pre>

<p><strong>Detection:</strong> <span class="en">Event 4688 with CommandLine containing <code>vssadmin</code> or <code>shadowcopy delete</code>. This is a strong ransomware indicator — seeing these commands means ransomware has / is executing.</span><span class="vi">Event 4688 với CommandLine chứa <code>vssadmin</code> hoặc <code>shadowcopy delete</code>. Đây là chỉ báo ransomware mạnh — thấy các lệnh này nghĩa là ransomware đã / đang thực thi.</span></p>

<h3>Windows Timeline / ActivitiesCache.db</h3>

<ul>

<li><strong>Location:</strong> <code>C:\\Users\\&lt;user&gt;\\AppData\\Local\\ConnectedDevicesPlatform\\&lt;GUID&gt;\\ActivitiesCache.db</code></li>

<li><strong>Format:</strong> SQLite database.</li>

<li><strong>Content:</strong> Application usage history, recent files opened, clipboard activity, clipboard text / images, cross-device activity (if synced).</li>

<li><strong>Forensic value:</strong> Shows which applications were used and when, even if Prefetch / Shimcache are missing; may contain clipboard data (passwords, sensitive text); records file paths of recently accessed documents.</li>

<li><strong>Parse with:</strong> WxTCmd (Eric Zimmerman), python scripts, or direct SQLite queries.</li>

<li><strong>Caveat:</strong> Data may be limited if Windows Timeline feature is disabled or activity history is cleared.</li>

</ul>

<div class="callout info"><strong>Cross-reference:</strong><p>Shimcache and Amcache are registry-backed artefacts but are often studied under Windows file / execution artefacts. E4 focuses on their forensic meaning; E6 focuses on registry locations and parsing context.</p></div>

<ul>

<li><strong>Prefetch:</strong> <span class="en">Execution evidence and run counts.</span><span class="vi">Bằng chứng thực thi và số lần chạy.</span></li>

<li><strong>Volume Shadow Copy / System Restore:</strong> <span class="en">Historical file / registry versions.</span><span class="vi">Phiên bản lịch sử file / registry.</span></li>

<li><strong>User profiles:</strong> <span class="en">NTUSER.DAT, AppData, Downloads, Desktop, Recent files.</span><span class="vi">NTUSER.DAT, AppData, Downloads, Desktop, file gần đây.</span></li>

<li><strong>Temporary files and Recycle Bin:</strong> <span class="en">Staging / deletion evidence.</span><span class="vi">Bằng chứng dàn dựng / xóa.</span></li>

<li><strong>hosts file and network config:</strong> <span class="en">Redirection and network settings.</span><span class="vi">Chuyển hướng và cài đặt mạng.</span></li>

<li><strong>pagefile / hibernation:</strong> <span class="en">Memory remnants.</span><span class="vi">Dữ liệu bộ nhớ còn sót lại.</span></li>

<li><strong>Shimcache / Amcache:</strong> <span class="en">Execution / install evidence.</span><span class="vi">Bằng chứng thực thi / cài đặt.</span></li>

<li><strong>Registry hives and EVTX:</strong> <span class="en">Configuration and event history.</span><span class="vi">Lịch sử cấu hình và sự kiện.</span></li>

<li><strong>NTDS.dit:</strong> <span class="en">AD credential database; high-value target.</span><span class="vi">Cơ sở dữ liệu thông tin xác thực AD; mục tiêu có giá trị cao.</span></li>

<li><strong>WMI OBJECTS.DATA:</strong> <span class="en">WMI persistence and repository data.</span><span class="vi">Persistence WMI và dữ liệu kho lưu trữ.</span></li>

</ul>

<h3>High-Value Windows Artefacts</h3>

<div class="table-wrap"><table>

<tr><th>Artefact</th><th>What it helps prove</th><th>Important caveat</th></tr>

<tr><td>Prefetch</td><td>Program execution, run count, last execution times.</td><td>May be disabled on servers; parse with tools such as PECmd.</td></tr>

<tr><td>Shimcache / AppCompatCache</td><td>File existence and possible execution-related evidence.</td><td>Does not reliably prove execution by itself on all Windows versions.</td></tr>

<tr><td>Amcache</td><td>Program metadata, path, SHA-1-like hash, install / execution-related evidence.</td><td>Timestamp interpretation requires care.</td></tr>

<tr><td>SRUM</td><td>Network and application resource usage.</td><td>Useful for timeline correlation, not standalone attribution.</td></tr>

<tr><td>EVTX</td><td>Authentication, service creation, task creation, PowerShell, system events.</td><td>Depends on audit policy and log retention.</td></tr>

<tr><td>Volume Shadow Copy</td><td>Historical copies of files and registry hives.</td><td>May be deleted by ransomware or cleanup tools.</td></tr>

</table></div>

<div class="callout info"><strong>Common confusion:</strong> <span class="en">Prefetch is stronger execution evidence than Shimcache. Shimcache is useful, but do not overstate it as definitive proof of execution.</span><span class="vi">Prefetch là bằng chứng thực thi mạnh hơn Shimcache. Shimcache hữu ích nhưng đừng thổi phồng nó thành bằng chứng dứt khoát về việc thực thi.</span></div>

<h3><code>$UsnJrnl</code> Forensic Value</h3>

<ul><li><span class="en">Records file system change <strong>reasons</strong> (create, delete, rename, close, data extend, data truncation) with timestamps.</span><span class="vi">Ghi lại <strong>lý do</strong> thay đổi hệ thống file (tạo, xóa, đổi tên, đóng, mở rộng, cắt ngắn dữ liệu) kèm timestamp.</span></li><li><span class="en">Contains: file reference number, parent reference number, USN, reason code, filename.</span><span class="vi">Chứa: số tham chiếu file, số tham chiếu thư mục cha, USN, mã lý do, tên file.</span></li><li><strong>Useful for:</strong> <span class="en">Detecting timestomping (file activity exists but SI / FN timestamps do not match USN records), recovering timing of deleted file activity, correlating file operations with execution evidence.</span><span class="vi">Phát hiện timestomping (hoạt động file tồn tại nhưng timestamp SI / FN không khớp bản ghi USN), khôi phục thời điểm hoạt động file đã xóa, tương quan thao tác file với bằng chứng thực thi.</span></li><li><strong>Parse with:</strong> MFTECmd, UsnJrnl2Csv, <code>python-ntfs</code>.</li><li><strong>Caveat:</strong> <span class="en">May not be present on all volumes; can be disabled; wraps and overwrites old entries when full.</span><span class="vi">Có thể không có trên tất cả volume; có thể bị vô hiệu hóa; ghi đè mục cũ khi đầy.</span></li></ul>

<h3>Windows Event ID 4672 Context</h3>

<p class="sub-heading">Event 4672 — Special Privileges Assigned to New Logon</p>

<ul><li><span class="en">Appears alongside Event 4624 when the logged-on user holds administrator-level privileges (SeDebugPrivilege, SeBackupPrivilege, SeRestorePrivilege, etc.).</span><span class="vi">Xuất hiện cùng Event 4624 khi người dùng đăng nhập có quyền cấp quản trị viên (SeDebugPrivilege, SeBackupPrivilege, SeRestorePrivilege, v.v.).</span></li><li><strong>Correlation:</strong> <span class="en">4624 (logon type + source IP) + 4672 (privilege list) = privileged access from a specific source.</span><span class="vi">4624 (loại đăng nhập + IP nguồn) + 4672 (danh sách quyền) = truy cập đặc quyền từ nguồn cụ thể.</span></li><li><strong>Security concern:</strong> <span class="en">Unexpected 4672 entries for non-admin users or from unusual source IPs may indicate privilege escalation.</span><span class="vi">Các mục 4672 không mong đợi cho người dùng không phải admin hoặc từ IP nguồn bất thường có thể chỉ ra leo thang đặc quyền.</span></li></ul>


<h3 class="qz-theory"><span class="en">Windows Forensic Artefacts</span><span class="vi">Artefact điều tra Windows</span></h3>
<div class="table-wrap"><table><thead><tr><th>Artefact</th><th><span class="en">What it proves</span><span class="vi">Chứng minh gì</span></th></tr></thead><tbody>
<tr><td>Prefetch (.pf)</td><td><span class="en"><strong>Execution</strong> — name, run count, last-run times</span><span class="vi"><strong>Thực thi</strong> — tên, số lần chạy, thời gian chạy cuối</span></td></tr>
<tr><td>Shimcache / Amcache</td><td><span class="en">Presence/execution (Amcache adds SHA-1); presence ≠ proof of run</span><span class="vi">Hiện diện/thực thi (Amcache thêm SHA-1); hiện diện ≠ bằng chứng đã chạy</span></td></tr>
<tr><td>LNK / Jump Lists</td><td><span class="en">Recently accessed files (path, times) — even after target deleted</span><span class="vi">File truy cập gần đây (đường dẫn, thời gian) — kể cả sau khi đích bị xóa</span></td></tr>
<tr><td>Recycle Bin $I / $R</td><td><span class="en">$I = original path/time/size; $R = the content</span><span class="vi">$I = đường dẫn gốc/thời gian/kích thước; $R = nội dung</span></td></tr>
<tr><td>VSS (shadow copies)</td><td><span class="en">Earlier versions of files/registry an attacker deleted/altered</span><span class="vi">Phiên bản trước của file/registry kẻ tấn công đã xóa/sửa</span></td></tr>
<tr><td>.evtx event logs</td><td><span class="en">Binary XML; 4624 logon etc.; clearing = event 1102</span><span class="vi">Binary XML; 4624 đăng nhập…; xóa = sự kiện 1102</span></td></tr>
<tr><td>NTDS.dit (DC)</td><td><span class="en">AD database incl. all domain password hashes</span><span class="vi">CSDL AD gồm tất cả hash mật khẩu miền</span></td></tr></tbody></table></div>
`;
