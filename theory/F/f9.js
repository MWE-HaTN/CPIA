/* Theory — F9 (Appendix F). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["f9"]=`<h2>F9 — Hiding Techniques</h2>

<div class="tier recall" id="f9-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Classic injection:</strong> <span class="en">OpenProcess → VirtualAllocEx → WriteProcessMemory → CreateRemoteThread.</span><span class="vi">OpenProcess → VirtualAllocEx → WriteProcessMemory → CreateRemoteThread.</span></li>
<li><strong>Process hollowing:</strong> <span class="en">Start a legit process suspended, unmap its image, write malicious code, then resume.</span><span class="vi">Chạy một tiến trình hợp lệ ở suspended, gỡ ánh xạ image, ghi mã độc, rồi resume.</span></li>
<li><strong>Reflective DLL injection:</strong> <span class="en">A loader maps a DLL image from memory without the normal LoadLibrary path. The injected image need not be written as a conventional DLL on the target, although related artefacts may still exist on disk.</span><span class="vi">Loader tự ánh xạ image DLL từ bộ nhớ, không đi theo đường LoadLibrary thông thường. DLL được tiêm không nhất thiết phải được ghi thành file DLL thông thường trên máy đích, nhưng artefact liên quan vẫn có thể tồn tại trên đĩa.</span></li>
<li><strong>APC / thread hijack:</strong> <span class="en">QueueUserAPC to a thread, or suspend a thread and set its EIP to the payload.</span><span class="vi">QueueUserAPC vào một luồng, hoặc suspend luồng và đặt EIP tới payload.</span></li>
<li><strong>SSDT patching:</strong> <span class="en">Kernel rootkit hooking the System Service Descriptor Table to filter syscalls.</span><span class="vi">Rootkit nhân hook System Service Descriptor Table để lọc syscall.</span></li>
<li><strong>Filter driver &amp; DKOM:</strong> <span class="en">Filter drivers hide files via file-system I/O; DKOM unlinks EPROCESS to hide a process.</span><span class="vi">Filter driver giấu file qua I/O hệ thống file; DKOM gỡ EPROCESS để giấu tiến trình.</span></li>
</ul></div></div>

<details class="tier concept" id="f9-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Process injection (mục tiêu: chạy mã trong tiến trình tin cậy)</h4>
<p>Tiêm mã vào tiến trình hợp lệ để <strong>né phát hiện</strong> (chạy dưới danh nghĩa tiến trình tin cậy). Các kỹ thuật:</p>
<ul>
<li><strong>CreateRemoteThread</strong>: OpenProcess → VirtualAllocEx → WriteProcessMemory → CreateRemoteThread.</li>
<li><strong>Process hollowing (RunPE)</strong>: tạo tiến trình suspended, unmap image gốc, ghi mã độc, set context, resume → vỏ ngoài là tiến trình hợp lệ.</li>
<li><strong>Reflective DLL injection</strong>: loader tự ánh xạ DLL từ buffer bộ nhớ thay vì cơ chế LoadLibrary thông thường; giảm một số artefact module/file nhưng không bảo đảm toàn bộ chuỗi là fileless.</li>
<li><strong>APC injection</strong>: xếp một APC vào luồng alertable để chạy shellcode.</li>
<li><strong>Thread execution hijacking</strong>: suspend luồng, đổi con trỏ lệnh (EIP/RIP) sang payload, resume.</li>
</ul>

<h4>Rootkit — giấu file/tài nguyên hệ thống</h4>
<p><strong>SSDT patching</strong>: sửa bảng system-call của nhân để chuyển hướng/lọc kết quả syscall (ví dụ ẩn file/tiến trình khi liệt kê). <strong>Filter driver</strong>: chèn vào luồng I/O hệ thống file để giấu file của nó. <strong>Process list manipulation (DKOM)</strong>: gỡ <code>EPROCESS</code> khỏi danh sách tiến trình hoạt động → tiến trình "biến mất" khỏi liệt kê thường nhưng vẫn chạy. Phát hiện bằng cross-view (raw memory psscan, offline) — xem E12.</p>
</div></details>

<details class="tier reference" id="f9-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Process-injection techniques</h4>
<div class="table-wrap"><table>
<tr><th>Technique</th><th>Mechanism</th></tr>
<tr><td>CreateRemoteThread</td><td>Alloc + write + remote thread in target</td></tr>
<tr><td>Process hollowing</td><td>Suspend, unmap, write, resume</td></tr>
<tr><td>Reflective DLL injection</td><td>Manually map DLL from memory; related disk artefacts may still exist</td></tr>
<tr><td>APC injection</td><td>QueueUserAPC to a thread</td></tr>
<tr><td>Thread execution hijack</td><td>Suspend thread, set EIP to payload</td></tr>
</table></div>

<h4>Rootkit hiding techniques</h4>
<div class="table-wrap"><table>
<tr><th>Technique</th><th>Hides by</th></tr>
<tr><td>SSDT patching</td><td>Hooking kernel syscall table</td></tr>
<tr><td>Filter driver</td><td>Intercepting file-system I/O</td></tr>
<tr><td>Process list manipulation (DKOM)</td><td>Unlinking EPROCESS from active list</td></tr>
<tr><td>Inline / IAT hooks</td><td>Redirecting function calls</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="f9-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Nhận diện injection theo chuỗi allocate→write/map→execute và target process.</li>
<li>So process/module/thread high-level với memory scan; kiểm VAD, backing file và start address.</li>
<li>Với rootkit kiểm hook, filter, DKOM/callback và cross-view; map persistence driver/service.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>VirtualAllocEx/WriteProcessMemory/CreateRemoteThread; section mapping/APC/hollowing.</li>
<li>Unbacked RX/RWX, replaced image, anomalous parent, SSDT/filter/process-list manipulation.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-impact">LIVE-IMPACT</span>Volatility malfind/vadinfo/ldrmodules; debugger/API trace; Sysmon 8/10 khi cấu hình.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>OpenProcess không đủ kết luận injection; quyền, WriteProcessMemory và remote thread/unbacked code tạo chuỗi mạnh.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>EDR/debugger/JIT dùng kỹ thuật giống injection.</li>
<li>SSDT patching thiên về hệ Windows cũ; kỹ thuật hiện đại đa dạng hơn.</li>
<li>Process list manipulation có thể để object trong pool cho scanner tìm.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> MITRE ATT&amp;CK T1055 Process Injection and its sub-techniques; Microsoft Windows Internals; Volatility 3 Windows plugin documentation. ATT&amp;CK describes observed techniques, not a complete implementation specification.</p>
</div>
</details>`;
