/* Theory — E6 (Appendix E). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e6"]=`<h2>E6 — Windows Registry Essentials</h2>



<h3>USB / removable storage registry paths</h3>

<div class="table-wrap"><table><tr><th>Registry Path</th><th>Forensic Value</th></tr><tr><td><code>HKLM\\SYSTEM\\CurrentControlSet\\Enum\\USBSTOR</code></td><td>USB storage device identifiers, serial numbers, vendor / product data</td></tr><tr><td><code>HKLM\\SYSTEM\\CurrentControlSet\\Enum\\USB</code></td><td>USB device enumeration details</td></tr><tr><td><code>HKLM\\SYSTEM\\MountedDevices</code></td><td>Volume GUID and drive-letter associations</td></tr><tr><td><code>HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\MountPoints2</code></td><td>User-specific mounted volume history and labels</td></tr><tr><td><code>HKLM\\SYSTEM\\CurrentControlSet\\Control\\DeviceClasses</code></td><td>Device class relationships and connection metadata</td></tr><tr><td><code>HKLM\\SOFTWARE\\Microsoft\\Windows Portable Devices\\Devices</code></td><td>Portable device metadata</td></tr></table></div>

<div class="callout info"><strong>Cross-reference:</strong><p>Shimcache / Amcache can be described as registry artefacts and execution artefacts. Avoid double-counting them in a timeline; use them as corroborating evidence.</p></div>

<ul>

<li><strong>Registry hives:</strong> <span class="en">SYSTEM, SOFTWARE, SAM, SECURITY, NTUSER.DAT, UsrClass.dat.</span><span class="vi">SYSTEM, SOFTWARE, SAM, SECURITY, NTUSER.DAT, UsrClass.dat.</span></li>

<li><strong>USB artefacts:</strong> <span class="en">USBSTOR, MountedDevices, device serials, first / last connection.</span><span class="vi">USBSTOR, MountedDevices, serial thiết bị, lần kết nối đầu / cuối.</span></li>

<li><strong>Autorun / startup:</strong> <span class="en">Run / RunOnce keys, services, scheduled tasks, Winlogon, Shell, AppInit_DLLs.</span><span class="vi">Khóa Run / RunOnce, dịch vụ, scheduled task, Winlogon, Shell, AppInit_DLLs.</span></li>

<li><strong>User accounts:</strong> <span class="en">SAM, ProfileList, last logon-related keys.</span><span class="vi">SAM, ProfileList, khóa liên quan đến lần đăng nhập cuối.</span></li>

<li><strong>Protected storage / credentials:</strong> <span class="en">May reveal saved secrets depending on artefact and permissions.</span><span class="vi">Có thể tiết lộ bí mật đã lưu tùy thuộc vào artefact và quyền.</span></li>

<li><span class="en">ACLs on registry keys can allow persistence or privilege escalation if weak.</span><span class="vi">ACL trên khóa registry có thể cho phép persistence hoặc leo thang đặc quyền nếu yếu.</span></li>

<li><span class="en">Shimcache / Amcache / UserAssist provide execution-related evidence with caveats.</span><span class="vi">Shimcache / Amcache / UserAssist cung cấp bằng chứng liên quan thực thi có điều kiện.</span></li>

</ul>

<h3>UserAssist Detail</h3>

<ul>

<li><strong>Location:</strong> <code>HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\UserAssist\\{GUID}\\Count</code></li>

<li><strong>Content:</strong> ROT13-encoded program paths, run count, focus time, last execution timestamp.</li>

<li><strong>GUIDs:</strong> {CEBFF5CD-ACE2-4F4F-9178-9926F41749EA} = executed programs; {F4E57C4B-2036-45F0-A9AB-443BCFE33D9F} = shortcut links.</li>

<li><strong>Forensic value:</strong> Records GUI-launched program execution with timestamps and run counts; more granular than Prefetch for user-initiated execution.</li>

<li><strong>Parse with:</strong> UserAssistView (NirSoft), Registry Explorer (Eric Zimmerman), RegRipper.</li>

<li><strong>Caveat:</strong> Only tracks programs launched via Explorer shell; command-line execution may not appear.</li>

</ul>

<h3>BAM / DAM (Background Activity Moderator)</h3>

<ul>

<li><strong>Location:</strong> <code>HKLM\\SYSTEM\\CurrentControlSet\\Services\\bam\\UserSettings\\{SID}</code> and <code>...\\dam\\UserSettings\\{SID}</code></li>

<li><strong>OS:</strong> Windows 10 version 1709+ and Windows 11.</li>

<li><strong>Content:</strong> Execution timestamps and full paths for recently executed programs, including background tasks.</li>

<li><strong>Forensic value:</strong> Provides execution evidence even when Prefetch is disabled (e.g., on servers); records both foreground and background execution.</li>

<li><strong>Parse with:</strong> BAMParser / MiniTimeline, Registry Explorer, or direct registry parsing.</li>

<li><strong>Caveat:</strong> Entries are limited (typically ~100 most recent); may be cleared on system maintenance cycles.</li>

</ul>

<ul>

<li><strong>Use case:</strong> determine whether a USB device was connected, identify serial/vendor/product data, and correlate drive letters to user activity.</li>

<li><strong>Common confusion:</strong> a USB artefact may prove connection, but file access or exfiltration requires correlation with shellbags, LNK files, RecentDocs, event logs, or file timestamps.</li>

</ul>

<h3>Registry Run Key Persistence Locations</h3><div class="table-wrap"><table><tr><th>Registry Key</th><th>Scope</th><th>Trigger</th></tr><tr><td><code>HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run</code></td><td>All users</td><td>Every logon</td></tr><tr><td><code>HKCU\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run</code></td><td>Current user</td><td>Every logon</td></tr><tr><td><code>HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\RunOnce</code></td><td>All users</td><td>Once, then key deleted</td></tr><tr><td><code>HKLM\\SYSTEM\\CurrentControlSet\\Services</code></td><td>System</td><td>Service boot / auto start</td></tr><tr><td><code>HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Winlogon</code> (Userinit, Shell)</td><td>System</td><td>All logons — modified values persist</td></tr><tr><td><code>HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options\\[exe]</code></td><td>System</td><td>Debugger hijacking — target exe runs attacker binary</td></tr><tr><td>Startup folders: <code>%APPDATA%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup</code></td><td>User</td><td>Every logon</td></tr></table></div>
<h3 class="qz-theory"><span class="en">Windows Registry — hives, persistence &amp; user activity</span><span class="vi">Registry Windows — hive, persistence &amp; hoạt động người dùng</span></h3>
<ul>
<li><strong>Hives:</strong> <span class="en"><code>SYSTEM</code> (services, drivers, USBSTOR), <code>SOFTWARE</code> (installed apps), <code>SAM</code> (local accounts), <code>SECURITY</code>; per-user <code>NTUSER.DAT</code> (loaded as HKCU) + <code>UsrClass.dat</code>. Each key has a <strong>LastWrite</strong> timestamp (like a file's modified time).</span><span class="vi"><code>SYSTEM</code> (service, driver, USBSTOR), <code>SOFTWARE</code> (app đã cài), <code>SAM</code> (tài khoản cục bộ), <code>SECURITY</code>; theo người dùng <code>NTUSER.DAT</code> (nạp thành HKCU) + <code>UsrClass.dat</code>. Mỗi khóa có mốc <strong>LastWrite</strong> (như thời gian sửa của file).</span></li>
<li><strong>Persistence:</strong> <span class="en">Run/RunOnce keys, plus Services, Winlogon (Shell/Userinit), Image File Execution Options, AppInit_DLLs, scheduled tasks — enumerate with Autoruns.</span><span class="vi">Khóa Run/RunOnce, cùng Services, Winlogon (Shell/Userinit), Image File Execution Options, AppInit_DLLs, scheduled task — liệt kê bằng Autoruns.</span></li>
<li><strong><span class="en">User activity &amp; devices:</span><span class="vi">Hoạt động &amp; thiết bị:</span></strong> <span class="en"><strong>USBSTOR</strong> records connected USB devices (vendor/serial/times); <strong>UserAssist</strong> (ROT13-encoded) tracks GUI program runs with counts/times; <strong>ShellBags</strong> record folders browsed (even removed/deleted ones).</span><span class="vi"><strong>USBSTOR</strong> ghi thiết bị USB đã cắm (hãng/serial/thời gian); <strong>UserAssist</strong> (mã ROT13) theo dõi việc chạy chương trình GUI kèm số lần/thời gian; <strong>ShellBags</strong> ghi thư mục đã duyệt (kể cả đã gỡ/xóa).</span></li></ul>
`;
