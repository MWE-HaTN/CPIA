/* Theory — F2 (Appendix F). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["f2"]=`<h2>F2 — Functionality Identification</h2>

<div class="tier recall" id="f2-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Crypto by constants:</strong> <span class="en">0x67452301/0xEFCDAB89 = MD5/SHA init; the AES S-box (63 7C 77 7B…); 0x9E3779B9 = TEA/XTEA delta.</span><span class="vi">0x67452301/0xEFCDAB89 = khởi tạo MD5/SHA; S-box AES (63 7C 77 7B…); 0x9E3779B9 = delta TEA/XTEA.</span></li>
<li><strong>RC4 KSA:</strong> <span class="en">A 256-byte array filled 0..255 then key-permuted = RC4 key scheduling.</span><span class="vi">Mảng 256 byte điền 0..255 rồi hoán vị theo khóa = lập lịch khóa RC4.</span></li>
<li><strong>Network capability by imports:</strong> <span class="en">WSAStartup/socket/connect/send (Winsock) or InternetOpenUrl/HttpSendRequest (WinINet) = network comms.</span><span class="vi">WSAStartup/socket/connect/send (Winsock) hoặc InternetOpenUrl/HttpSendRequest (WinINet) = giao tiếp mạng.</span></li>
<li><strong>Receive loop:</strong> <span class="en">A loop calling recv() → buffer → decode/dispatch = a C2 command-handling loop.</span><span class="vi">Vòng lặp gọi recv() → buffer → decode/dispatch = vòng xử lý lệnh C2.</span></li>
<li><strong>Capability by API:</strong> <span class="en">SetWindowsHookEx/GetAsyncKeyState = keylogger; BitBlt/GetDC = screenshot; EnumProcesses/ReadProcessMemory = inspect/inject.</span><span class="vi">SetWindowsHookEx/GetAsyncKeyState = keylogger; BitBlt/GetDC = chụp màn hình; EnumProcesses/ReadProcessMemory = soi/tiêm.</span></li>
<li><strong>Persistence strings:</strong> <span class="en">"HKCU…Run", "schtasks", a service name, or a fixed CreateMutex name = persistence / infection marker.</span><span class="vi">"HKCU…Run", "schtasks", tên service, hoặc CreateMutex tên cố định = duy trì / dấu lây nhiễm.</span></li>
</ul></div></div>

<details class="tier concept" id="f2-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Nhận diện thuật toán mã hóa qua hằng số/lệnh</h4>
<p>Nhiều cipher/hash dùng <strong>hằng số đặc trưng</strong> dễ nhận trong binary: <strong>MD5/SHA</strong> khởi tạo 0x67452301, 0xEFCDAB89...; <strong>AES</strong> dùng <em>S-box</em> bắt đầu 0x63,0x7C,0x77,0x7B...; <strong>TEA/XTEA</strong> có delta 0x9E3779B9; <strong>RC4</strong> nhận ra qua vòng KSA (mảng 256 byte 0..255 rồi hoán vị); <strong>CRC32</strong> có bảng tra. Lệnh đặc trưng (rotate, xor, modular add) cũng gợi ý cipher.</p>

<h4>Nhận diện chức năng qua import &amp; vòng lặp</h4>
<p>Bảng <strong>import (IAT)</strong> là "bản đồ năng lực": Winsock (socket/connect/send) hay WinINet/WinHTTP (InternetOpenUrl, HttpSendRequest) = giao tiếp mạng; URLDownloadToFile = downloader; BitBlt/GetDC = screenshot; SetWindowsHookEx/GetAsyncKeyState = keylogger; EnumProcesses/OpenProcess/ReadProcessMemory = soi/tiêm tiến trình; CryptEncrypt = mã hóa (ransomware/C2). Một <strong>vòng recv→decode→dispatch</strong> là khung xử lý lệnh C2.</p>

<h4>Infection vector &amp; persistence trong code</h4>
<p>Chuỗi/hành vi tiết lộ cách lây và duy trì: ghi <code>...\\CurrentVersion\\Run</code>, gọi <code>schtasks</code>, tạo service, hoặc <strong>CreateMutex tên cố định</strong> (dấu lây nhiễm để không chạy hai lần). Đây là chỗ ánh xạ sang ATT&amp;CK (Persistence, Execution).</p>
</div></details>

<details class="tier reference" id="f2-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Crypto constants / patterns</h4>
<div class="table-wrap"><table>
<tr><th>Indicator</th><th>Algorithm</th></tr>
<tr><td>0x67452301, 0xEFCDAB89…</td><td>MD5 / SHA-1 init</td></tr>
<tr><td>S-box 63 7C 77 7B F2 6B…</td><td>AES (Rijndael)</td></tr>
<tr><td>0x9E3779B9 delta</td><td>TEA / XTEA</td></tr>
<tr><td>256-byte 0..255 permute</td><td>RC4 KSA</td></tr>
<tr><td>Lookup table + xor/shift</td><td>CRC32</td></tr>
</table></div>

<h4>Imports → capability</h4>
<div class="table-wrap"><table>
<tr><th>Imports</th><th>Capability</th></tr>
<tr><td>WSAStartup, socket, connect, send</td><td>Network comms (Winsock)</td></tr>
<tr><td>InternetOpenUrl, HttpSendRequest</td><td>HTTP comms (WinINet)</td></tr>
<tr><td>URLDownloadToFile</td><td>Downloader</td></tr>
<tr><td>BitBlt, GetDC</td><td>Screen capture</td></tr>
<tr><td>SetWindowsHookEx, GetAsyncKeyState</td><td>Keylogger</td></tr>
<tr><td>EnumProcesses, OpenProcess, ReadProcessMemory</td><td>Inspect / inject processes</td></tr>
<tr><td>RegSetValueEx → …Run</td><td>Registry persistence</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="f2-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Triage strings/imports/sections rồi tạo capability hypothesis.</li>
<li>Theo xref/call graph và data flow tới network, crypto, file/registry/process API.</li>
<li>Nhận diện loop send/recv, parser/dispatch, persistence và infection path; xác minh dynamic.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Crypto constants/S-box/rotate-xor-add; Winsock/WinINet imports.</li>
<li>Registry/service/task strings, mutex, URL, command table và error handling.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-impact">LIVE-IMPACT</span>Ghidra/IDA xrefs; capa/FLOSS; debugger breakpoint tại connect/send/recv/Crypt*.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Import <code>send</code> chỉ là capability; xref cho thấy buffer chứa host inventory và loop callback mới xác nhận chức năng C2.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Dynamic import/API hashing che IAT.</li>
<li>Dead code/import không dùng gây false inference.</li>
<li>Compiler optimization/inlining làm pattern thay đổi.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> Ghidra/IDA documentation; MITRE capa; algorithm specifications.</p>
</div>
</details>`;
