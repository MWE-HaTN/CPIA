/* Theory — F9 (Appendix F). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["f9"]=`<h2>F9 — Hiding Techniques</h2><ul>

<li><span class="en">Process injection: CreateRemoteThread, WriteProcessMemory, process hollowing, reflective DLL injection, APC injection.</span><span class="vi">Tiêm tiến trình: CreateRemoteThread, WriteProcessMemory, process hollowing, tiêm DLL phản chiếu, tiêm APC.</span></li>

<li><span class="en">Rootkit hiding: SSDT patching, filter drivers, DKOM / process list manipulation, file / registry hiding.</span><span class="vi">Ẩn náu rootkit: vá SSDT, driver filter, DKOM / thao túng danh sách tiến trình, ẩn file / registry.</span></li>

<li><span class="en">Detection: memory malfind-style checks, suspicious RWX regions, hidden drivers, discrepancies between API and raw enumeration.</span><span class="vi">Phát hiện: kiểm tra kiểu malfind trong bộ nhớ, vùng RWX đáng ngờ, driver ẩn, sự không khớp giữa API và liệt kê thô.</span></li>

<li><span class="en">Hiding often overlaps with defence evasion and persistence.</span><span class="vi">Ẩn náu thường chồng chéo với trốn tránh phòng thủ và persistence.</span></li>

</ul>

<h3>Common Techniques for Process Injection</h3>

<div class="table-wrap"><table>

<tr><th>Technique</th><th>API Sequence</th><th>Memory Indicator</th></tr>

<tr><td><strong>Classic DLL Injection</strong></td><td>OpenProcess → VirtualAllocEx → WriteProcessMemory → CreateRemoteThread(LoadLibrary)</td><td>Unexpected DLL at unusual path in dlllist</td></tr>

<tr><td><strong>Process Hollowing</strong></td><td>CreateProcess(suspended) → UnmapViewOfSection → VirtualAllocEx → WriteProcessMemory → SetThreadContext → ResumeThread</td><td>Legit process name, wrong image base in malfind</td></tr>

<tr><td><strong>Reflective DLL Injection</strong></td><td>Custom loader in DLL maps itself from memory — no LoadLibrary call</td><td>MZ / PE header in heap / stack, absent from module list</td></tr>

<tr><td><strong>Thread Hijacking</strong></td><td>SuspendThread → GetThreadContext → modify EIP / RIP → SetThreadContext → ResumeThread</td><td>RWX memory region not backed by file on disk</td></tr>

<tr><td><strong>APC Injection</strong></td><td>QueueUserAPC into alertable thread of target process</td><td>Unusual write to target process memory + APC queue</td></tr>

</table></div>

<h3>SSDT Patching</h3>

<pre>SSDT = System Service Descriptor Table

  → Maps syscall numbers to kernel function addresses



Rootkit patches SSDT entries to point to malicious functions:

  Original: NtQuerySystemInformation → ntoskrnl!NtQuerySystemInformation

  Patched:  NtQuerySystemInformation → rootkit!FakeNtQuerySystemInformation



Effect: When userspace calls NtQuerySystemInformation (used by Task Manager,

        Process Explorer), the rootkit filters out its own process from results.



Detection: Compare live SSDT values against ntoskrnl.exe export addresses

           Tools: GMER, Volatility ssdt plugin, Windbg !chkimg</pre>

<h3>DKOM — Direct Kernel Object Manipulation</h3>

<pre>EPROCESS structures form a doubly-linked list (ActiveProcessLinks)

  Rootkit unlinks target EPROCESS from the list:

  

  Normal:   ProcessA ←→ ProcessB ←→ ProcessC

  After:    ProcessA ←→ ProcessC  (ProcessB unlinked but still in memory)



Effect: Tools using PsGetNextProcess (pslist) won't see ProcessB

        Tools scanning raw memory (psscan) WILL find ProcessB



Detection: psscan vs pslist discrepancy = DKOM indicator</pre>

<h3>Filter Driver Hiding</h3>

<ul>

<li>Malicious filter driver registered in I / O stack (filesystem, network, keyboard)</li>

<li>Intercepts IRP (I / O Request Packets) and modifies results</li>

<li>Can hide files (filesystem filter), network connections (TDI / NDIS filter), keystrokes (keyboard filter)</li>

<li>Detection: enumerate loaded drivers via Volatility <code>modules</code> / <code>driverscan</code>, check against signed driver list</li>

</ul>


<h3 class="qz-theory"><span class="en">Hiding Techniques — Injection &amp; Hooking</span><span class="vi">Kỹ thuật ẩn giấu — Tiêm &amp; Hook</span></h3>
<p><span class="en">All <strong>process injection</strong> variants aim to run malicious code inside a legitimate process — evading detection and inheriting its trust/permissions.</span><span class="vi">Mọi biến thể <strong>process injection</strong> nhằm chạy mã độc bên trong một tiến trình hợp lệ — né phát hiện và thừa hưởng tin cậy/quyền của nó.</span></p>
<div class="table-wrap"><table><thead><tr><th><span class="en">Technique</span><span class="vi">Kỹ thuật</span></th><th><span class="en">How</span><span class="vi">Cách thức</span></th></tr></thead><tbody>
<tr><td>CreateRemoteThread</td><td>OpenProcess → VirtualAllocEx → WriteProcessMemory → CreateRemoteThread</td></tr>
<tr><td><span class="en">Process hollowing</span><span class="vi">Process hollowing</span></td><td><span class="en">Start a legit process suspended, unmap its image, write malicious code, resume</span><span class="vi">Khởi chạy tiến trình hợp lệ suspended, gỡ ánh xạ image, ghi mã độc, resume</span></td></tr>
<tr><td><span class="en">Reflective DLL</span><span class="vi">Reflective DLL</span></td><td><span class="en">Map &amp; run a DLL from memory (no disk file, not in module list)</span><span class="vi">Ánh xạ &amp; chạy DLL từ bộ nhớ (không có file đĩa, không trong danh sách module)</span></td></tr>
<tr><td>APC / thread hijacking</td><td>QueueUserAPC, or SuspendThread + SetThreadContext + resume</td></tr></tbody></table></div>
<ul>
<li><strong>Hooking:</strong> <span class="en"><em>IAT hooking</em> swaps import-table pointers; <em>inline (detour)</em> overwrites a function's first bytes with a jump to attacker code (works even for dynamically resolved calls).</span><span class="vi"><em>IAT hooking</em> đổi con trỏ bảng import; <em>inline (detour)</em> ghi đè các byte đầu của hàm bằng lệnh nhảy tới mã của kẻ tấn công (chạy cả với lời gọi phân giải động).</span></li>
<li><strong><span class="en">Kernel hiding:</span><span class="vi">Ẩn ở kernel:</span></strong> <span class="en"><strong>SSDT patching</strong> reroutes system calls through attacker code; <strong>DKOM</strong> unlinks the EPROCESS from the active-process list (psscan defeats it); <strong>filter drivers</strong> alter file-system I/O responses. <strong>DLL search-order hijacking / side-loading</strong> places a malicious DLL where Windows finds it before the legitimate one (or a signed EXE loads a malicious DLL from its folder).</span><span class="vi"><strong>Vá SSDT</strong> chuyển hướng system call qua mã của kẻ tấn công; <strong>DKOM</strong> gỡ EPROCESS khỏi danh sách tiến trình hoạt động (psscan vô hiệu nó); <strong>filter driver</strong> sửa phản hồi I/O hệ thống tệp. <strong>DLL search-order hijacking / side-loading</strong> đặt DLL độc hại nơi Windows tìm trước DLL hợp lệ (hoặc EXE đã ký nạp DLL độc hại từ thư mục của nó).</span></li></ul>
`;
