/* Theory — F8 (Appendix F). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["f8"]=`<h2>F8 — Windows Executable File Formats</h2><ul>

<li><span class="en">PE / EXE / COM basics: DOS header, PE header, optional header, section table, imports, exports, resources, relocations.</span><span class="vi">Cơ bản PE / EXE / COM: DOS header, PE header, optional header, bảng section, import, export, tài nguyên, relocation.</span></li>

<li><span class="en">Useful fields: compile timestamp, subsystem, entry point, image base, section names/sizes/entropy, imports, digital signature.</span><span class="vi">Trường hữu ích: timestamp biên dịch, subsystem, entry point, image base, tên / kích thước / entropy section, import, chữ ký số.</span></li>

<li><span class="en">Suspicious signs: packed sections, RWX permissions, few imports, overlay data, invalid signature, strange entry point.</span><span class="vi">Dấu hiệu đáng ngờ: section đã đóng gói, quyền RWX, ít import, dữ liệu overlay, chữ ký không hợp lệ, entry point lạ.</span></li>

<li><span class="en">Extract value: strings, resources, embedded config, certificate info, icons, URLs, mutexes, import APIs.</span><span class="vi">Trích xuất giá trị: chuỗi, tài nguyên, config nhúng, thông tin chứng chỉ, icon, URL, mutex, API import.</span></li>

</ul>

<h3>Packed vs Unpacked Indicators</h3>

<div class="table-wrap"><table>

<tr><th>Indicator</th><th>Packed</th><th>Unpacked / Legitimate</th></tr>

<tr><td>Entropy</td><td>High (&gt;7.0) in code sections — compressed / encrypted data</td><td>Lower (5.0-6.5) — readable code and data</td></tr>

<tr><td>Import table</td><td>Few imports; often only LoadLibrary + GetProcAddress</td><td>Rich import table with many specific API functions</td></tr>

<tr><td>Section names</td><td>UPX0, UPX1, .aspack, .themida, .vmp0, or random names</td><td>.text, .data, .rdata, .rsrc — standard names</td></tr>

<tr><td>Section sizes</td><td>Small original section + large appended section</td><td>Proportional section sizes</td></tr>

<tr><td>Entry point</td><td>Not at .text start; may be in unusual section</td><td>At .text section or standard entry point</td></tr>

<tr><td>Overlay data</td><td>Large data appended after PE sections</td><td>Minimal or expected overlay</td></tr>

</table></div>

<h3>.NET Assemblies and PowerShell Obfuscation</h3>

<ul>

<li><strong>.NET PE:</strong> Contains CLR metadata (type definitions, method names, strings) even when obfuscated; parse with dnSpy, ILSpy, or CFF Explorer.</li>

<li><strong>.NET indicators:</strong> mscoree.dll import, CLR header in PE optional header, .NET-specific sections (.text with CLR structures).</li>

<li><strong>PowerShell obfuscation techniques:</strong></li>

</ul>

<div class="table-wrap"><table>

<tr><th>Technique</th><th>Example</th><th>Detection</th></tr>

<tr><td>String concatenation</td><td><code>"Pow"+"er"+"Shell"</code></td><td>Reassemble strings; look for Invoke-Expression patterns.</td></tr>

<tr><td>Base64 encoding</td><td><code>-EncodedCommand</code> flag</td><td>Decode Base64 payload; Event 4104 script block logging captures decoded commands.</td></tr>

<tr><td>Character replacement</td><td><code>'IEX' -replace 'X','x'+'ec'</code></td><td>Pattern matching for -replace, -join, -f format operator.</td></tr>

<tr><td>Tick insertion</td><td><code>In\`vo\`ke-Ex\`pres\`sion</code></td><td>Remove backticks and match against known cmdlet names.</td></tr>

<tr><td>Environment variable expansion</td><td><code>$env:ComSpec[4,15,25]-join''</code></td><td>Expand environment variables and reconstruct strings.</td></tr>

<tr><td>Type casting</td><td><code>[char]101+[char]120</code></td><td>Evaluate character codes to reconstruct strings.</td></tr>

</table></div>

<div class="callout info"><strong>Exam tip:</strong> <span class="en">PowerShell Script Block Logging (Event 4104) captures the actual commands executed, even after deobfuscation. This is the most reliable source for PowerShell-based attacks.</span><span class="vi">PowerShell Script Block Logging (Event 4104) bắt các lệnh thực sự được thực thi, ngay cả sau khi deobfuscation. Đây là nguồn đáng tin cậy nhất cho các cuộc tấn công dựa trên PowerShell.</span></div>

<h3>PE Magic Bytes and Key Analysis Techniques</h3><ul><li><strong>Magic bytes:</strong> PE files start with <code>4D 5A</code> ("MZ") at byte 0. PE signature <code>50 45 00 00</code> ("PE\\0\\0") at offset in e_lfanew (byte 0x3C). These definitively identify PE files.</li><li><strong>Import table (IAT) capability map:</strong><ul><li><code>CreateRemoteThread + WriteProcessMemory</code> → process injection</li><li><code>CryptEncrypt / CryptGenKey</code> → cryptographic operations (ransomware, C2)</li><li><code>WinExec / ShellExecute</code> → code execution</li><li><code>RegSetValueEx</code> → registry persistence</li><li><code>InternetConnect / HttpSendRequest</code> → HTTP C2</li></ul></li><li><strong>Section entropy:</strong> Normal code ~6.0 bits / byte. Packed or encrypted section &gt;7.0 bits = compressed / encrypted — unpack before further analysis.</li><li><strong>CAPA tool:</strong> <code>capa malware.exe</code> → automatically maps binary capabilities to MITRE ATT&amp;CK framework. Best triage tool for rapid capability identification.</li></ul>
<h3 class="qz-theory"><span class="en">Windows Executable (PE) File Format</span><span class="vi">Định dạng file thực thi Windows (PE)</span></h3>
<ul>
<li><strong><span class="en">Identification:</span><span class="vi">Nhận diện:</span></strong> <span class="en">Every PE begins with the DOS "MZ" header; <code>e_lfanew</code> points to the "PE\\0\\0" signature. Identify by these magic bytes, not the extension (ZIP="PK", PDF="%PDF", ELF="\\x7FELF"). Legacy <code>.COM</code> = flat binary (no PE header).</span><span class="vi">Mọi PE bắt đầu bằng header DOS "MZ"; <code>e_lfanew</code> trỏ tới chữ ký "PE\\0\\0". Nhận diện bằng magic byte này, không theo đuôi (ZIP="PK", PDF="%PDF", ELF="\\x7FELF"). <code>.COM</code> cũ = binary phẳng (không có header PE).</span></li>
<li><strong>Sections:</strong> <code>.text</code> <span class="en">(code)</span><span class="vi">(mã)</span>, <code>.data/.rdata</code> <span class="en">(data, imports)</span><span class="vi">(dữ liệu, import)</span>, <code>.rsrc</code> <span class="en">(resources)</span><span class="vi">(tài nguyên)</span>, <code>.reloc</code>. <strong>IAT</strong> <span class="en">(imports) reveals capability; the loader fills it with resolved function addresses — IAT hooking swaps these pointers. <strong>EAT</strong> (exports) is relevant for DLLs. <code>AddressOfEntryPoint</code> = where execution starts (OEP after unpacking). <strong>TLS callbacks</strong> run before the entry point — used for anti-debug.</span><span class="vi">(import) lộ năng lực; loader điền nó bằng địa chỉ hàm đã phân giải — IAT hooking đổi các con trỏ này. <strong>EAT</strong> (export) liên quan tới DLL. <code>AddressOfEntryPoint</code> = nơi thực thi bắt đầu (OEP sau khi giải nén). <strong>TLS callback</strong> chạy trước entry point — dùng cho anti-debug.</span></li>
<li><strong><span class="en">Packing indicators:</span><span class="vi">Dấu hiệu pack:</span></strong> <span class="en">UPX-named sections, a W+X high-entropy section, or virtual size ≫ raw size (space for unpacked code). An <strong>overlay</strong> (data after the last section) often hides config/payload. The <strong>Rich header</strong> fingerprints the build toolchain; <code>TimeDateStamp</code> is forgeable. A PE importing <code>mscoree.dll</code> = .NET assembly (use dnSpy/ILSpy). <code>strings</code> is a fast first-pass triage.</span><span class="vi">Section tên UPX, một section W+X entropy cao, hoặc virtual size ≫ raw size (chỗ cho code giải nén). Một <strong>overlay</strong> (dữ liệu sau section cuối) thường giấu config/payload. <strong>Rich header</strong> fingerprint toolchain biên dịch; <code>TimeDateStamp</code> có thể giả. PE import <code>mscoree.dll</code> = assembly .NET (dùng dnSpy/ILSpy). <code>strings</code> là bước triage đầu nhanh.</span></li></ul>
`;
