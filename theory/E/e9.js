/* Theory — E9 (Appendix E). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e9"]=`<h2>E9 — Memory Analysis</h2>

<div class="tier recall" id="e9-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Volatile evidence:</strong> <span class="en">Live processes/sockets, injected code, keys and clipboard state are lost as live RAM state on power-off, although fragments may persist in pagefile, hibernation or crash artefacts.</span><span class="vi">Process/socket đang sống, injected code, key và clipboard mất dưới dạng trạng thái RAM live khi tắt nguồn, dù tàn dư có thể còn trong pagefile, hibernation hoặc crash artefact.</span></li>
<li><strong>Start with the process tree:</strong> <span class="en">List processes + parent/child, then network connections. Spot anomalies (winword.exe → cmd.exe → powershell.exe).</span><span class="vi">Bắt đầu bằng cây tiến trình + cha/con, rồi kết nối mạng. Bắt bất thường (winword.exe → cmd.exe → powershell.exe).</span></li>
<li><strong>pslist vs psscan:</strong> <span class="en">pslist walks the linked list; psscan scans pool memory and can reveal processes hidden/unlinked by a rootkit.</span><span class="vi">pslist đi theo linked list; psscan quét pool và lộ tiến trình bị rootkit giấu/unlink.</span></li>
<li><strong>malfind:</strong> <span class="en">Finds injected code in private RWX memory (process injection).</span><span class="vi">malfind tìm mã được tiêm trong vùng nhớ RWX riêng (process injection).</span></li>
<li><strong>Correlate memory ↔ disk:</strong> <span class="en">A process in memory whose image doesn't match the on-disk file suggests injection/hollowing.</span><span class="vi">Tiến trình trong bộ nhớ có image không khớp file trên đĩa → gợi ý injection/hollowing.</span></li>
<li><strong>Keys live in RAM:</strong> <span class="en">Encryption keys/passphrases hard to find on disk may be recoverable from a memory image.</span><span class="vi">Khóa/passphrase khó tìm trên đĩa có thể lấy được từ image bộ nhớ.</span></li>
<li><strong>Framework:</strong> <span class="en">Volatility (and Rekall) are the common memory-analysis frameworks.</span><span class="vi">Volatility (và Rekall) là framework phân tích bộ nhớ phổ biến.</span></li>
</ul></div></div>

<details class="tier concept" id="e9-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Vì sao phân tích RAM</h4>
<p>Bộ nhớ chứa thứ <em>không có trên đĩa</em>: tiến trình đang chạy, DLL đã nạp, socket/kết nối mạng, mã fileless/được tiêm, <strong>khóa mã hóa đang dùng</strong>, nội dung clipboard, lịch sử command prompt, một phần browser history. Tất cả mất khi tắt máy → phải <strong>acquire RAM trước</strong> (order of volatility).</p>

<h4>Quy trình phân tích (Volatility)</h4>
<p>Bắt đầu: <strong>pslist/pstree</strong> (cây tiến trình + cha/con) → <strong>netscan</strong> (kết nối mạng) → so cha/con bất thường (Office sinh shell). Dùng <strong>psscan</strong> để lộ tiến trình bị giấu (rootkit unlink khỏi danh sách). <strong>malfind</strong> tìm vùng RWX riêng chứa mã tiêm. <strong>dlllist, handles, cmdline, hashdump, clipboard, consoles</strong> bổ sung ngữ cảnh.</p>

<h4>Process injection &amp; tương quan với đĩa</h4>
<p>Nếu mã của một tiến trình <em>trong bộ nhớ</em> không khớp với file thực thi <em>trên đĩa</em> → dấu hiệu <strong>process injection / hollowing</strong>. Một tiến trình "thấy trong RAM nhưng ẩn khỏi Task Manager" → khả năng rootkit. Tương quan memory ↔ disk giúp khẳng định.</p>

<h4>Process acquisition &amp; nguồn khác</h4>
<p>Có thể dump riêng vùng nhớ một tiến trình (procdump) để phân tích sâu. Lưu ý lấy <strong>RAM image</strong> bằng công cụ chuyên dụng (WinPmem, FTK Imager, DumpIt) — chính việc dump cũng để lại dấu chân nhỏ, phải document.</p>
</div></details>

<details class="tier reference" id="e9-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Volatility plugins (common)</h4>
<div class="table-wrap"><table>
<tr><th>Plugin</th><th>Shows</th></tr>
<tr><td>pslist / pstree</td><td>Processes + parent/child</td></tr>
<tr><td>psscan</td><td>Pool scan — reveals hidden/unlinked processes</td></tr>
<tr><td>netscan</td><td>Network connections/sockets</td></tr>
<tr><td>malfind</td><td>Injected code in RWX memory</td></tr>
<tr><td>dlllist / handles</td><td>Loaded DLLs / open handles</td></tr>
<tr><td>cmdline / consoles</td><td>Process command lines / console history</td></tr>
<tr><td>hashdump / lsadump</td><td>Credentials from memory</td></tr>
</table></div>

<h4>RAM-only vs on-disk</h4>
<div class="table-wrap"><table>
<tr><th>Only in RAM</th><th>On disk</th></tr>
<tr><td>Injected/fileless code, live sockets, in-use keys, clipboard, command history</td><td>$MFT, installed files, registry hives, event logs</td></tr>
</table></div>

<h4>Acquisition tools</h4>
<div class="table-wrap"><table>
<tr><th>Tool</th><th>Use</th></tr>
<tr><td>WinPmem / DumpIt / FTK Imager</td><td>Acquire RAM image</td></tr>
<tr><td>Volatility / Rekall</td><td>Analyse the image</td></tr>
<tr><td>procdump</td><td>Dump a single process</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="e9-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Acquire RAM sớm, hash và ghi OS build/uptime; chọn symbol phù hợp.</li>
<li>Liệt kê process tree, command line, token, DLL, handles, sockets; tìm hidden/unlinked.</li>
<li>Scan injection, dump process, extract strings/config rồi correlate disk/network.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>EPROCESS/VAD, executable pages, hollowing, thread start, DLL path.</li>
<li>Clipboard, console history, browser artefact, credential/key material và connections.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Volatility 3: <code>windows.pslist</code>, <code>windows.pstree</code>, <code>windows.netscan</code>, <code>windows.dlllist</code>, <code>windows.malfind</code> (availability depends on version/symbol support).</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>malfind hit chỉ là candidate; JIT/AV cũng tạo RWX. Xác minh PE header, thread, disassembly và backing file.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Wrong symbols/profile tạo output sai.</li>
<li>Rootkit có thể unlink process nên cross-view.</li>
<li>Memory chứa dữ liệu cực nhạy cảm; kiểm soát access.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> Volatility 3 official documentation (symbols and Windows plugin reference); Microsoft Windows Internals; NIST SP 800-86 §4.</p>
</div>
</details>`;
