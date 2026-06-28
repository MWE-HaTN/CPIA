/* Theory — F2 (Appendix F). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["f2"]=`<h2>F2 — Functionality Identification</h2>

<h3>YARA rules for IR and malware triage</h3>

<pre>rule Suspicious_PowerShell_Dropper

{

    meta:

        author = "IR analyst"

        description = "Detects simple PowerShell download cradle strings"

    strings:

        $s1 = "powershell" nocase

        $s2 = "DownloadString" nocase

        $s3 = /http[s]?:\\/\\// nocase

        $mz = { 4D 5A }

    condition:

        any of ($s*) or $mz at 0

}</pre>

<ul><li><strong>rule:</strong> Names the detection logic.</li><li><strong>meta:</strong> Documentation; not used for matching.</li><li><strong>strings:</strong> Text, regex, or hex byte patterns.</li><li><strong>condition:</strong> Boolean logic deciding whether the rule matches.</li><li><strong>Hashes:</strong> YARA can use hash module functions, but exact file hashes are usually better handled by hash databases or EDR / SIEM queries.</li><li><strong>IR use case:</strong> Hunt for related files across collected evidence, triage malware families, and encode resilient string / hex indicators.</li></ul>

<h3>Cryptographic constants in binaries</h3>

<div class="table-wrap"><table><tr><th>Algorithm</th><th>Specific Constants to Look For</th><th>Behavioural / Structural Indicators</th><th>Why It Matters</th></tr><tr><td>AES</td><td>S-box starting 0x63, 0x7C, 0x77…; Rcon values</td><td>16-byte block operations, AES-NI instructions, CryptoAPI / Bcrypt calls</td><td>Encrypted config, payload, ransomware file encryption</td></tr><tr><td>RC4</td><td>256-byte S-array initialisation pattern</td><td>KSA / PRGA loops, byte swaps, frequent XOR</td><td>Older malware config, traffic obfuscation</td></tr><tr><td>DES / 3DES</td><td>DES initial / final permutation tables</td><td>8-byte blocks, legacy CryptoAPI usage</td><td>Legacy recognition</td></tr><tr><td>RSA</td><td>Large integer math, public exponent 65537</td><td>Certificate / key blobs, CryptoAPI RSA imports</td><td>Key exchange; protects symmetric keys, not bulk data</td></tr><tr><td>MD5</td><td>Constants 0xd76aa478, 0xe8c7b756…</td><td>Compression rounds, hash API imports</td><td>Integrity checks, victim IDs, API hashing</td></tr><tr><td>SHA-1</td><td>Constants 0x67452301, 0xEFCDAB89, 0x98BADCFE</td><td>Compression rounds</td><td>Legacy hash recognition</td></tr><tr><td>SHA-256</td><td>K constants starting 0x428a2f98, 0x71374491…</td><td>64-round compression schedule</td><td>Current evidence integrity standard</td></tr><tr><td>Base64</td><td>Alphabet A-Z, a-z, 0-9, +, / with <code>=</code> padding</td><td>Decoded layer in payloads; encoding, not encryption</td><td>Decode before deeper analysis</td></tr></table></div>

<ul>

<li><span class="en">Crypto algorithm recognition: constants, S-boxes, API calls, loops, block sizes, imports.</span><span class="vi">Nhận diện thuật toán mã hóa: hằng số, S-box, lệnh gọi API, vòng lặp, kích thước khối, import.</span></li>

<li><span class="en">Network send / receive loops: socket/connect/send/recv, WinINet / WinHTTP, URLDownloadToFile, libcurl.</span><span class="vi">Vòng lặp gửi / nhận mạng: socket/connect/send/recv, WinINet / WinHTTP, URLDownloadToFile, libcurl.</span></li>

<li><span class="en">Persistence: Run keys, services, scheduled tasks, startup folder, WMI, launch agents.</span><span class="vi">Persistence: khóa Run, dịch vụ, scheduled task, thư mục startup, WMI, launch agent.</span></li>

<li><span class="en">Infection vectors: email, documents, exploit, drive-by, USB, trojanised binaries.</span><span class="vi">Vector lây nhiễm: email, tài liệu, exploit, drive-by, USB, binary bị trojanised.</span></li>

<li><span class="en">Use static and dynamic evidence together; strings alone are not enough.</span><span class="vi">Dùng bằng chứng tĩnh và động cùng nhau; strings đơn thuần là không đủ.</span></li>

</ul>

<h3>API Hashing Techniques</h3>

<p>Malware uses API hashing to resolve Windows API functions at runtime without importing them by name, making static analysis harder.</p>

<div class="table-wrap"><table>

<tr><th>Algorithm</th><th>How it works</th><th>Recognition</th></tr>

<tr><td>djb2</td><td>hash = hash * 33 + c; simple string hash</td><td>Common constant 5381; multiplication by 33.</td></tr>

<tr><td>FNV-1a</td><td>hash = (hash XOR byte) * prime</td><td>FNV prime (0x01000193 for 32-bit); XOR then multiply pattern.</td></tr>

<tr><td>MurmurHash</td><td>Hash with mixing operations, rotation, and finalisation</td><td>Mixing constants, bit rotation patterns, final XOR / fold.</td></tr>

<tr><td>ROR13</td><td>Rotate right 13 bits, add each character</td><td>Constant 0x0D (13) in rotation; seen in Metasploit shellcode.</td></tr>

<tr><td>CRC32</td><td>Cyclic redundancy check used as hash</td><td>CRC32 polynomial constants; lookup table.</td></tr>

</table></div>

<p><strong>Detection approach:</strong> <span class="en">Look for loops that process strings character-by-character with hash accumulation; find the hash resolution loop (compare hash against table → call resolved function); identify the hash algorithm by constants.</span><span class="vi">Tìm vòng lặp xử lý chuỗi từng ký tự với tích lũy hash; tìm vòng lặp phân giải hash (so sánh hash với bảng → gọi hàm đã phân giải); xác định thuật toán hash bằng hằng số.</span></p>

<h3>Common Malicious Windows API Patterns</h3>

<div class="table-wrap"><table>

<tr><th>API</th><th>Malicious use</th><th>ATT&amp;CK mapping</th></tr>

<tr><td>CreateRemoteThread</td><td>Inject code into another process</td><td>T1055 Process Injection</td></tr>

<tr><td>VirtualAllocEx + WriteProcessMemory</td><td>Allocate and write to remote process memory</td><td>T1055 Process Injection</td></tr>

<tr><td>NtUnmapViewOfSection</td><td>Process hollowing — replace legitimate process memory</td><td>T1055.012 Process Hollowing</td></tr>

<tr><td>SetWindowsHookEx</td><td>Install hooks for keylogging or DLL injection</td><td>T1056.001 Keylogging</td></tr>

<tr><td>AdjustTokenPrivileges</td><td>Elevate process privileges (e.g., SeDebugPrivilege)</td><td>T1134 Access Token Manipulation</td></tr>

<tr><td>OpenProcess + ReadProcessMemory</td><td>Read memory of another process (credential dumping)</td><td>T1003 OS Credential Dumping</td></tr>

<tr><td>RegSetValueEx</td><td>Write registry keys for persistence</td><td>T1547 Boot or Logon Autostart</td></tr>

<tr><td>CreateService</td><td>Install malicious service for persistence</td><td>T1543 Create or Modify System Process</td></tr>

<tr><td>URLDownloadToFile / WinHTTP</td><td>Download payload from remote server</td><td>T1105 Ingress Tool Transfer</td></tr>

<tr><td>InternetOpen / HttpSendRequest</td><td>C2 communication via HTTP</td><td>T1071 Application Layer Protocol</td></tr>

</table></div>

<div class="callout info"><strong>Exam tip:</strong> <span class="en">CPIA-level questions usually expect recognition of constants / API patterns and the purpose of crypto, not full manual implementation analysis.</span><span class="vi">Câu hỏi cấp CPIA thường yêu cầu nhận diện hằng số / mẫu API và mục đích của mã hóa, không phải phân tích thực hiện thủ công đầy đủ.</span></div>


<h3 class="qz-theory"><span class="en">Functionality Identification — imports, strings &amp; constants</span><span class="vi">Nhận diện chức năng — import, chuỗi &amp; hằng số</span></h3>
<p><span class="en">At CPIA level you summarise capability from the import table, strings and recognisable constants — not full manual analysis.</span><span class="vi">Ở cấp CPIA bạn tóm tắt năng lực từ bảng import, chuỗi và hằng số nhận ra được — không cần phân tích thủ công đầy đủ.</span></p>
<div class="table-wrap"><table><thead><tr><th><span class="en">API / string cluster</span><span class="vi">Cụm API / chuỗi</span></th><th><span class="en">Likely capability</span><span class="vi">Năng lực khả dĩ</span></th></tr></thead><tbody>
<tr><td>WSAStartup, socket, connect, send/recv</td><td><span class="en">Network / C2 (recv → decode → dispatch loop)</span><span class="vi">Mạng / C2 (vòng recv → decode → dispatch)</span></td></tr>
<tr><td>InternetOpenUrl, URLDownloadToFile</td><td><span class="en">Downloader / dropper</span><span class="vi">Downloader / dropper</span></td></tr>
<tr><td>RegSetValueEx → ...\\Run, schtasks, CreateService</td><td>Persistence</td></tr>
<tr><td>SetWindowsHookEx(WH_KEYBOARD_LL), GetAsyncKeyState</td><td>Keylogger</td></tr>
<tr><td>GetDC + BitBlt</td><td><span class="en">Screen capture</span><span class="vi">Chụp màn hình</span></td></tr>
<tr><td>EnumProcesses, OpenProcess, ReadProcessMemory</td><td><span class="en">Credential theft / injection targeting</span><span class="vi">Trộm credential / chọn mục tiêu tiêm</span></td></tr>
<tr><td>CreateMutex (fixed name)</td><td><span class="en">Infection marker (avoid double-run) — also an IoC</span><span class="vi">Dấu lây nhiễm (tránh chạy kép) — cũng là IoC</span></td></tr></tbody></table></div>
<p><span class="en"><strong>Crypto constants</strong> reveal algorithms without analysing the maths:</span><span class="vi"><strong>Hằng số crypto</strong> để lộ thuật toán mà không cần phân tích phép toán:</span></p>
<div class="table-wrap"><table><thead><tr><th><span class="en">Constant / pattern</span><span class="vi">Hằng / mẫu</span></th><th><span class="en">Algorithm</span><span class="vi">Thuật toán</span></th></tr></thead><tbody>
<tr><td><code>0x67452301, 0xEFCDAB89…</code></td><td>MD5 / SHA-1 init</td></tr>
<tr><td><code>0x63,0x7C,0x77,0x7B…</code> (S-box)</td><td>AES (Rijndael)</td></tr>
<tr><td><code>0x9E3779B9</code> (delta)</td><td>TEA / XTEA</td></tr>
<tr><td><span class="en">Fill array 0..255, permute by key</span><span class="vi">Điền mảng 0..255, hoán vị theo khóa</span></td><td>RC4 KSA</td></tr></tbody></table></div>
<p><span class="en">Few strings + a tiny import table (just LoadLibrary/GetProcAddress) = packed/obfuscated with dynamic API resolution. A custom/shuffled Base64 alphabet is obfuscation. Checks for VM artefacts (registry/MAC/CPUID) then exit = sandbox evasion.</span><span class="vi">Ít chuỗi + bảng import nhỏ (chỉ LoadLibrary/GetProcAddress) = đã pack/làm rối với phân giải API động. Bảng chữ Base64 tùy biến/xáo trộn là làm rối. Kiểm tra dấu hiệu VM (registry/MAC/CPUID) rồi thoát = né sandbox.</span></p>
`;
