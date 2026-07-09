/* Theory — E12 (Appendix E). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e12"]=`<h2>E12 — Rootkit Identification</h2>

<div class="tier recall" id="e12-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Definition:</strong> <span class="en">A rootkit hides its presence (processes, files, keys, connections) from the OS and tools.</span><span class="vi">Rootkit giấu sự hiện diện của nó (tiến trình, file, key, kết nối) khỏi OS và công cụ.</span></li>
<li><strong>Detect by cross-view:</strong> <span class="en">Compare what the OS reports vs an independent view (raw memory/disk). A process in a memory image but hidden from Task Manager = rootkit.</span><span class="vi">So cái OS báo cáo với góc nhìn độc lập (raw memory/disk). Tiến trình có trong image bộ nhớ nhưng ẩn khỏi Task Manager = rootkit.</span></li>
<li><strong>User-mode vs kernel-mode:</strong> <span class="en">User-mode hooks APIs in a process (ring 3); kernel-mode runs at ring 0 via a driver — stealthier, harder to detect.</span><span class="vi">User-mode hook API trong tiến trình (ring 3); kernel-mode chạy ring 0 qua driver — kín hơn, khó phát hiện hơn.</span></li>
<li><strong>DKOM:</strong> <span class="en">Direct Kernel Object Manipulation unlinks the process's EPROCESS from the active list to hide it.</span><span class="vi">DKOM gỡ EPROCESS của tiến trình khỏi danh sách hoạt động để giấu nó.</span></li>
<li><strong>Hooking:</strong> <span class="en">SSDT hooking, inline (detour) hooks, IAT hooks, and filter drivers redirect calls to attacker code.</span><span class="vi">SSDT hooking, inline (detour) hook, IAT hook, và filter driver chuyển hướng lời gọi sang mã kẻ tấn công.</span></li>
<li><strong>Bootkit:</strong> <span class="en">Infects the boot process, loading BEFORE the OS — very stealthy.</span><span class="vi">Bootkit nhiễm tiến trình khởi động, nạp TRƯỚC OS — rất kín.</span></li>
</ul></div></div>

<details class="tier concept" id="e12-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Cách phát hiện rootkit — cross-view</h4>
<p>Rootkit cố làm OS "nói dối" (giấu tiến trình/file/key/kết nối). Cách phát hiện cốt lõi: <strong>so sánh hai góc nhìn</strong> — cái OS/API báo cáo vs góc nhìn độc lập từ <strong>raw memory</strong> (Volatility psscan) hoặc <strong>raw disk</strong>. Chênh lệch (tiến trình/file thấy ở raw nhưng ẩn ở API) = bằng chứng có rootkit. Công cụ: GMER, Volatility (psxview), so file thô vs API.</p>

<h4>User-mode vs kernel-mode</h4>
<p><strong>User-mode rootkit</strong> (ring 3): hook trong không gian tiến trình (IAT/inline hook) — dễ phát hiện hơn. <strong>Kernel-mode rootkit</strong> (ring 0): chạy qua một driver, có thể sửa cấu trúc nhân → kín hơn nhiều, khó phát hiện. <strong>Bootkit</strong> còn nạp trước cả OS.</p>

<h4>Kỹ thuật hooking</h4>
<p><strong>SSDT hooking</strong>: sửa bảng System Service Descriptor Table để chuyển hướng system call. <strong>Inline/detour hook</strong>: ghi đè byte đầu của hàm bằng lệnh jump. <strong>IAT hook</strong>: thay con trỏ trong bảng import. <strong>Filter driver</strong>: chèn vào luồng I/O hệ thống file để giấu file của nó (xem F9).</p>

<h4>DKOM</h4>
<p><strong>Direct Kernel Object Manipulation</strong>: thao tác trực tiếp đối tượng nhân — vd <em>unlink EPROCESS</em> của tiến trình khỏi danh sách liên kết các tiến trình đang chạy → tiến trình "biến mất" khỏi liệt kê thông thường nhưng <strong>vẫn chạy</strong> và lộ qua pool scan (psscan).</p>
</div></details>

<details class="tier reference" id="e12-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Rootkit types</h4>
<div class="table-wrap"><table>
<tr><th>Type</th><th>Level</th><th>Stealth</th></tr>
<tr><td>User-mode</td><td>Ring 3 (in-process)</td><td>Lower — easier to spot</td></tr>
<tr><td>Kernel-mode</td><td>Ring 0 (driver)</td><td>High</td></tr>
<tr><td>Bootkit</td><td>Boot process (pre-OS)</td><td>Very high</td></tr>
</table></div>

<h4>Hooking / hiding techniques</h4>
<div class="table-wrap"><table>
<tr><th>Technique</th><th>Mechanism</th></tr>
<tr><td>SSDT hooking</td><td>Redirect kernel system-call table entries</td></tr>
<tr><td>Inline / detour hook</td><td>Overwrite a function's first bytes with a jump</td></tr>
<tr><td>IAT hook</td><td>Swap import-table function pointers</td></tr>
<tr><td>Filter driver</td><td>Intercept file-system I/O to hide files</td></tr>
<tr><td>DKOM</td><td>Unlink EPROCESS from the active list</td></tr>
</table></div>

<h4>Detection approach</h4>
<div class="table-wrap"><table>
<tr><th>Method</th><th>Why it works</th></tr>
<tr><td>Cross-view (raw vs API)</td><td>Rootkit can't lie to an independent view</td></tr>
<tr><td>Memory psscan / psxview</td><td>Finds unlinked/hidden processes</td></tr>
<tr><td>Offline disk analysis</td><td>Live OS can't hide from a dead image</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="e12-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>So view high-level với raw/kernel view; kiểm module, driver, hook và object list.</li>
<li>Phân biệt user-mode API hook, kernel inline/IAT/SSDT hook, filter driver và DKOM.</li>
<li>Xác minh signature/path/load time, memory code và disk hash trong lab.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Hidden process/file/port, unlinked module, altered pointer/prologue.</li>
<li>Driver/service key, callbacks, minifilter, SSDT và process list links.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Volatility modules/driverscan/ssdt/callbacks/malfind tùy OS support; Autoruns/Sigcheck.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Khác biệt pslist và psscan gợi unlinked process nhưng cũng có terminated object; cần exit time/handles/VAD.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>PatchGuard và security products tạo hook/callback hợp lệ.</li>
<li>Rootkit hiện đại không nhất thiết patch SSDT.</li>
<li>Live anti-rootkit tool có thể bị kernel compromise lừa.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> Windows Internals; Volatility documentation; MITRE Rootkit.</p>
</div>
</details>`;
