/* Theory — E13 (Appendix E). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e13"]=`<h2>E13 — Live Malware Analysis</h2>

<div class="tier recall" id="e13-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>What live analysis shows:</strong> <span class="en">Open files, registry keys and network sockets a running process currently holds.</span><span class="vi">File đang mở, khóa registry và socket mạng mà một tiến trình đang chạy đang giữ.</span></li>
<li><strong>Process &amp; handle viewers:</strong> <span class="en">Process Explorer (+ Handle / TCPView) shows handles, DLLs and connections per process.</span><span class="vi">Process Explorer (+ Handle / TCPView) hiển thị handle, DLL và kết nối theo từng tiến trình.</span></li>
<li><strong>Process-monitoring tools:</strong> <span class="en">Procmon and Process Explorer monitor file/registry/process/network activity in real time.</span><span class="vi">Procmon và Process Explorer theo dõi hoạt động file/registry/tiến trình/mạng theo thời gian thực.</span></li>
<li><strong>State diff:</strong> <span class="en">Regshot before/after detonation reveals registry &amp; file changes the sample made.</span><span class="vi">Regshot trước/sau khi cho chạy lộ các thay đổi registry &amp; file mà mẫu tạo ra.</span></li>
<li><strong>Autostart map:</strong> <span class="en">Autoruns enumerates the broadest set of persistence/auto-start locations.</span><span class="vi">Autoruns liệt kê tập rộng nhất các vị trí persistence/tự khởi động.</span></li>
<li><strong>Isolation first:</strong> <span class="en">Detonate only in an isolated lab with no path to production/the internet; snapshot before each run.</span><span class="vi">Chỉ cho chạy trong lab cô lập, không có đường ra production/internet; snapshot trước mỗi lần.</span></li>
</ul></div></div>

<details class="tier concept" id="e13-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Live analysis quan sát gì</h4>
<p>Khi một tiến trình đáng ngờ đang chạy, ta xem nó <strong>đang giữ những gì</strong>: file đang mở, khóa registry đang truy cập, socket/kết nối mạng, DLL đã nạp, handle. Đây là góc nhìn "tại thời điểm chạy" bổ sung cho phân tích tĩnh.</p>

<h4>Bộ công cụ Sysinternals</h4>
<p><strong>Process Explorer</strong> + <strong>Handle</strong> + <strong>TCPView</strong>: xem handle (file/registry/mutex), DLL, và kết nối mạng theo tiến trình. <strong>Procmon</strong>: ghi lại từng thao tác API (CreateFile, RegSetValue, TCP connect...) theo thời gian thực — nguồn dữ liệu giàu nhất về hành vi. <strong>Autoruns</strong>: liệt kê mọi điểm tự khởi động (Run, Services, scheduled task, WMI...). <strong>Regshot</strong>: chụp trạng thái trước/sau khi cho chạy để diff thay đổi.</p>

<h4>An toàn khi phân tích sống</h4>
<p>Cho malware chạy (detonate) phải ở <strong>lab cô lập</strong> (không có đường tới production/internet thật; dùng INetSim/FakeNet giả lập mạng), và <strong>snapshot VM trước mỗi lần</strong> để revert về trạng thái sạch, có thể lặp lại. Đây là cầu nối tới F12 (behavioural analysis).</p>
</div></details>

<details class="tier reference" id="e13-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Live-analysis tools</h4>
<div class="table-wrap"><table>
<tr><th>Tool</th><th>Shows / does</th></tr>
<tr><td>Process Explorer</td><td>Process tree, DLLs, handles, verified signatures</td></tr>
<tr><td>Handle / TCPView</td><td>Open handles / live network connections</td></tr>
<tr><td>Procmon</td><td>Real-time file/registry/process/network API events</td></tr>
<tr><td>Autoruns</td><td>Broadest auto-start/persistence enumeration</td></tr>
<tr><td>Regshot</td><td>Before/after registry &amp; file state diff</td></tr>
</table></div>

<h4>What a running process exposes</h4>
<div class="table-wrap"><table>
<tr><th>Resource</th><th>Tool</th></tr>
<tr><td>Open files / registry keys / mutexes</td><td>Process Explorer + Handle</td></tr>
<tr><td>Network sockets / connections</td><td>TCPView / netstat</td></tr>
<tr><td>Loaded DLLs</td><td>Process Explorer (lower pane)</td></tr>
<tr><td>Behavioural API activity</td><td>Procmon</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="e13-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Cô lập host/lab; chụp baseline process/file/registry/network.</li>
<li>Theo PID/process tree, handles, DLL, registry, socket và persistence trong thời gian.</li>
<li>Thu IOC/config/sample rồi so before-after; kết hợp memory/disk.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Procmon operation/path/result/stack, Process Explorer signer/handles.</li>
<li>Autoruns entry, Regshot diff, DNS/PCAP và open file/key/socket.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-impact">LIVE-IMPACT</span>Procmon filter theo PID; TCPView; Process Explorer; Autoruns; Handle.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>ACCESS DENIED lặp trong Procmon có thể cho thấy malware thử persistence nhưng thất bại; Result field quan trọng như Operation.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Monitoring tool tạo noise.</li>
<li>Malware có anti-VM/sleep/user-interaction gate.</li>
<li>Không detonate trên production hoặc internet thật.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> Microsoft Sysinternals Process Monitor, Process Explorer, Autoruns and TCPView documentation; tool-version release notes; isolated malware-lab safety guidance.</p>
</div>
</details>`;
