/* Theory — E12 (Appendix E). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e12"]=`<h2>E12 — Rootkit Identification</h2><ul>

<li><span class="en">Rootkits hide files, processes, registry keys, drivers, or network connections.</span><span class="vi">Rootkit ẩn file, tiến trình, khóa registry, driver hoặc kết nối mạng.</span></li>

<li><span class="en">Hooking: user-mode API hooks, kernel SSDT hooks, inline patching, filter drivers.</span><span class="vi">Hooking: hook API user-mode, hook SSDT kernel, vá inline, driver filter.</span></li>

<li><span class="en">Detection: compare high-level API output with raw disk / memory views; look for hidden drivers, suspicious kernel modules, and discrepancies.</span><span class="vi">Phát hiện: so sánh đầu ra API cấp cao với view đĩa / bộ nhớ thô; tìm driver ẩn, module kernel đáng ngờ và sự không khớp.</span></li>

<li><span class="en">Tools / approach: memory analysis, driver enumeration, GMER-like checks, Autoruns, kernel module review.</span><span class="vi">Công cụ / cách tiếp cận: phân tích bộ nhớ, liệt kê driver, kiểm tra kiểu GMER, Autoruns, xem xét module kernel.</span></li>

</ul><h3>Cross-View Detection — psscan vs pslist and Bootkits</h3><ul><li><strong>psscan vs pslist discrepancy:</strong> pslist walks EPROCESS doubly-linked list (manipulable). psscan scans raw memory for EPROCESS structures. Process in psscan but missing from pslist = DKOM rootkit hiding it.</li><li><strong>modules vs modscan:</strong> Same cross-view for kernel drivers — modscan finds hidden drivers absent from module list.</li><li><strong>SSDT hook detection:</strong> Volatility <code>ssdt</code> plugin. SSDT entries pointing outside ntoskrnl.exe / win32k.sys address ranges = kernel hook by rootkit.</li><li><strong>Bootkit:</strong> Infects MBR or VBR — loads before OS, patches kernel during boot. Detect: compare first 512 bytes of disk against known-good baseline. Secure Boot prevents unsigned pre-OS code.</li><li><strong>Filter driver detection:</strong> <code>fltMC filters</code> lists active mini-filter drivers. Unknown filter not in signed driver database = rootkit candidate.</li></ul>

<h3>How to Identify Rootkits — Cross-View Detection</h3>

<p><span class="en">Rootkits subvert the OS to hide their presence. Detection compares <strong>what the OS reports</strong> (potentially manipulated) against <strong>raw memory / disk reads</strong> (harder to manipulate). Discrepancy = rootkit indicator.</span><span class="vi">Rootkit phá hoại OS để ẩn sự hiện diện. Phát hiện so sánh <strong>những gì OS báo cáo</strong> (có thể bị thao túng) với <strong>đọc bộ nhớ / đĩa thô</strong> (khó thao túng hơn). Sự không khớp = chỉ báo rootkit.</span></p>

<div class="table-wrap"><table>

<tr><th>What to Compare</th><th>Raw / Trusted Source</th><th>OS / Untrusted Source</th><th>Tool</th></tr>

<tr><td>Running processes</td><td>psscan (scans raw memory for EPROCESS structures)</td><td>pslist (walks EPROCESS linked list — manipulable by DKOM)</td><td>Volatility: <code>psscan</code> vs <code>pslist</code></td></tr>

<tr><td>Files on disk</td><td>Raw MFT enumeration</td><td>Directory listing via OS API (filterable)</td><td>MFTECmd, Autopsy raw volume parsing</td></tr>

<tr><td>Registry keys</td><td>Raw hive file parsing</td><td>Live registry via API (filterable)</td><td>RegRipper, RECmd (offline parsing)</td></tr>

<tr><td>Network connections</td><td>Raw socket structure scan in memory</td><td>netstat (uses OS API)</td><td>Volatility: <code>netscan</code></td></tr>

<tr><td>SSDT entries</td><td>Known ntoskrnl.exe export addresses</td><td>Live SSDT values</td><td>Volatility: <code>ssdt</code>, GMER</td></tr>

<tr><td>Loaded drivers</td><td>Raw driver scan in memory</td><td>Device Manager / sc query</td><td>Volatility: <code>modules</code> vs <code>modscan</code></td></tr>

</table></div>

<h3>Rootkit Categories and Hooking Techniques</h3>

<div class="table-wrap"><table>

<tr><th>Type</th><th>Hiding Technique</th><th>Detection</th></tr>

<tr><td>User-mode rootkit</td><td>IAT hooking (modifies Import Address Table), EAT hooking, inline hooking (overwrites first bytes of function with JMP)</td><td>Compare live IAT / EAT vs module on disk; look for unexpected JMP at function start</td></tr>

<tr><td>Kernel-mode (SSDT patch)</td><td>Replaces kernel function pointer in SSDT with pointer to malicious function</td><td>Volatility <code>ssdt</code> plugin — non-ntoskrnl / win32k pointer = hooked</td></tr>

<tr><td>DKOM</td><td>Unlinks EPROCESS from ActiveProcessLinks doubly-linked list — process runs but pslist skips it</td><td>psscan finds orphaned EPROCESS — compare vs pslist discrepancy</td></tr>

<tr><td>Filter Driver Rootkit</td><td>Malicious mini-filter intercepts file system / network I / O</td><td><code>fltMC filters</code>, Volatility <code>driverscan</code>, check against signed driver list</td></tr>

<tr><td>Bootkit</td><td>Infects MBR or VBR — loads before OS, patches kernel in memory during boot</td><td>MBR comparison vs known-good; Secure Boot enforcement</td></tr>

</table></div>

<p class="sub-heading">Key Detection Principle</p>

<div class="callout info">

<span class="callout-icon">🔍</span>

<div class="callout-body">

<strong>Cross-view detection</strong>

<p>Compare what the OS reports (potentially compromised view) against raw memory / disk reads. Discrepancies between psscan and pslist, or between directory listing and raw MFT enumeration, indicate rootkit hiding activity.</p>

</div>

</div>


<h3 class="qz-theory"><span class="en">Rootkit Identification</span><span class="vi">Nhận diện rootkit</span></h3>
<ul>
<li><strong><span class="en">Cross-view detection:</span><span class="vi">Phát hiện chéo góc nhìn:</span></strong> <span class="en">When forensic memory analysis sees a process that live OS tools (Task Manager, tasklist) hide, a rootkit is manipulating the view — via API hooking or <strong>DKOM</strong> (unlinking the EPROCESS).</span><span class="vi">Khi phân tích bộ nhớ forensic thấy một tiến trình mà công cụ OS live (Task Manager, tasklist) ẩn, một rootkit đang thao túng góc nhìn — qua hook API hoặc <strong>DKOM</strong> (gỡ liên kết EPROCESS).</span></li>
<li><strong><span class="en">User vs kernel mode:</span><span class="vi">User vs kernel mode:</span></strong> <span class="en">User-mode rootkits hook APIs within processes; <strong>kernel-mode</strong> ones load a driver at ring 0 (DKOM, SSDT patching) to subvert the OS system-wide and resist user-space tools.</span><span class="vi">Rootkit user-mode hook API trong tiến trình; loại <strong>kernel-mode</strong> nạp driver ở ring 0 (DKOM, vá SSDT) để lật đổ OS toàn hệ thống và kháng công cụ user-space.</span></li>
<li><strong>Bootkit:</strong> <span class="en">Infects the boot process (MBR/VBR/bootloader) to load <em>before</em> the OS and its defences — detect via offline disk/firmware/Secure Boot checks rather than trusting the running OS.</span><span class="vi">Lây nhiễm quá trình boot (MBR/VBR/bootloader) để nạp <em>trước</em> OS và phòng thủ — phát hiện qua kiểm tra đĩa offline/firmware/Secure Boot thay vì tin OS đang chạy.</span></li></ul>
`;
