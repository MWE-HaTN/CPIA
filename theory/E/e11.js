/* Theory — E11 (Appendix E). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e11"]=`<h2>E11 — Malware Behaviours and Anti-Forensics</h2>

<h3>Steganography detection methods</h3>

<ul><li><strong>File size anomalies:</strong> Compare expected size with observed size for the media type.</li><li><strong>Visual / audio review:</strong> Look for distortion, artifacts, or suspicious appended data.</li><li><strong>Metadata and strings:</strong> Use strings, exiftool, and file identification.</li><li><strong>Embedded data carving:</strong> Use binwalk or foremost to identify appended or embedded files.</li><li><strong>Specialised tools:</strong> StegDetect may help with older JPEG steganography techniques.</li></ul>

<ul>

<li><strong>Encryption:</strong> <span class="en">Protect C2 / payloads or ransomware files.</span><span class="vi">Bảo vệ C2 / payload hoặc file ransomware.</span></li>

<li><strong>Steganography:</strong> <span class="en">Hide data in images / media.</span><span class="vi">Ẩn dữ liệu trong ảnh / media.</span></li>

<li><strong>Password-protected archives:</strong> <span class="en">Evade scanners and stage data.</span><span class="vi">Vượt qua scanner và dàn dựng dữ liệu.</span></li>

<li><strong>Obfuscation:</strong> <span class="en">Encoded strings, packed executables, control-flow tricks.</span><span class="vi">Chuỗi mã hóa, executable đã đóng gói, thủ thuật luồng điều khiển.</span></li>

<li><strong>Covert storage:</strong> <span class="en">NTFS ADS, slack space, registry blobs, hidden directories.</span><span class="vi">NTFS ADS, slack space, blob registry, thư mục ẩn.</span></li>

<li><strong>Covert communications:</strong> <span class="en">DNS, HTTPS, ICMP, social / cloud platforms.</span><span class="vi">DNS, HTTPS, ICMP, nền tảng mạng xã hội / cloud.</span></li>

<li><strong>Data erasure:</strong> <span class="en">Wiping tools, log deletion, timestomping, secure delete.</span><span class="vi">Công cụ xóa, xóa log, timestomping, xóa an toàn.</span></li>

</ul>

<h3>Malware Encryption Techniques</h3>

<ul>

<li><strong>Payload encryption:</strong> Malware encrypts its C2 traffic, dropped files, and embedded data to evade detection and complicate analysis</li>

<li><strong>Common algorithms:</strong> XOR (simple, fast), AES (strong, common in commodity malware), RC4 (legacy), ChaCha20</li>

<li><strong>Custom encryption:</strong> Malware authors implement weak custom ciphers — often breakable via frequency analysis or brute force</li>

<li><strong>Ransomware:</strong> Hybrid encryption — RSA to protect symmetric key, AES to encrypt files. Without private key, files unrecoverable.</li>

<li><strong>Config encryption:</strong> C2 IP / domain, mutex, campaign ID stored encrypted in binary — decrypt by locating key and applying algorithm (see F6)</li>

</ul>

<h3>Password Protection &amp; Covert Communication Techniques</h3>

<ul>

<li><strong>Password Protection:</strong> Malware delivered in password-protected archives (ZIP, RAR, 7z) to bypass email gateway AV. Password provided separately in email body or SMS.</li>

<li><strong>Covert storage:</strong> NTFS ADS hides files in metadata streams — <code>file.txt:payload.exe</code> invisible to normal dir listing. Detect with <code>dir /r</code>.</li>

<li><strong>Covert C2 communication:</strong> Legitimate protocol abuse (HTTP / S, DNS, SMTP), domain fronting, LOLBins for C2 (certutil, bitsadmin, mshta).</li>

<li><strong>Covert recon:</strong> Passive OSINT, slow scanning below IDS thresholds, blending with legitimate admin traffic.</li>

<li><strong>Covert exfiltration:</strong> Incremental transfers, DNS-encoded data, steganography, cloud storage APIs.</li>

</ul>

<h3>Anti-Analysis &amp; Evasion Techniques</h3>

<div class="table-wrap"><table>

<tr><th>Technique</th><th>Description</th><th>Detection</th></tr>

<tr><td>Sandbox detection</td><td>Check for VM artifacts: registry keys, file paths, MAC prefix, low uptime, few files</td><td>Long sleep timers, check for CPUID VM leaves</td></tr>

<tr><td>Anti-debug</td><td>IsDebuggerPresent, CheckRemoteDebuggerPresent, timing checks (RDTSC)</td><td>NOP out checks in debugger, ScyllaHide plugin</td></tr>

<tr><td>Code obfuscation</td><td>Junk instructions, opaque predicates, API hashing</td><td>Dynamic analysis, emulation</td></tr>

<tr><td>Encrypted payload</td><td>Payload decrypted at runtime to avoid static detection</td><td>Memory dump after decryption, breakpoint on VirtualAlloc</td></tr>

<tr><td>Timestomping</td><td>Modify file timestamps to blend in</td><td>MACB timestamp analysis — Born after Modified = anomaly</td></tr>

<tr><td>NTFS ADS</td><td>Hide data / code in alternate data stream</td><td><code>dir /r</code>, streams.exe, forensic tools</td></tr>

<tr><td>Steganography</td><td>Hide data in image / audio files</td><td>Statistical analysis of file entropy, steganalysis tools</td></tr>

<tr><td>Data Erasure Applications</td><td>Tools that securely wipe files (SDelete, Eraser) — leave traces in $LogFile, USN journal</td><td>Check for known wiper tool artifacts, MFT anomalies</td></tr>

<tr><td>Covert C2 / Recon / Exfil</td><td>Using legitimate protocols (DNS, HTTP) and trusted services for covert ops</td><td>Correlate with D5 / D7 / D8 network indicators</td></tr>

<tr><td>Password Protection</td><td>Encrypted archives, password-protected docs to hide payloads</td><td>Detect encrypted archive formats, high-entropy attachments</td></tr>

</table></div>


<h3 class="qz-theory"><span class="en">Malware Behaviours &amp; Anti-Forensics</span><span class="vi">Hành vi mã độc &amp; chống điều tra</span></h3>
<ul>
<li><strong>NTFS ADS:</strong> <span class="en">Alternate Data Streams attach hidden data to a file (<code>file.txt:hidden.exe</code>) ignored by normal directory listings — detect with <code>dir /R</code> or Streams.exe.</span><span class="vi">Alternate Data Streams gắn dữ liệu ẩn vào một file (<code>file.txt:hidden.exe</code>) mà liệt kê thư mục thường bỏ qua — phát hiện bằng <code>dir /R</code> hoặc Streams.exe.</span></li>
<li><strong>Timestomping:</strong> <span class="en">Forging file MAC times to blend in; usually only $SI is altered, so compare against $FN.</span><span class="vi">Giả mạo thời gian MAC của file để hòa lẫn; thường chỉ $SI bị sửa, nên so với $FN.</span></li>
<li><strong><span class="en">Destruction &amp; evasion:</span><span class="vi">Phá hủy &amp; né tránh:</span></strong> <span class="en">A <strong>wiper</strong>/secure-deletion tool overwrites data to defeat recovery; disabling Defender, clearing event logs (1102) and deleting Prefetch are <em>defense-evasion/anti-forensic</em> behaviours — the gaps they create are themselves indicators. <strong>Steganography</strong> hides data inside another file (image/audio), concealing its very existence.</span><span class="vi"><strong>wiper</strong>/công cụ xóa an toàn ghi đè dữ liệu để vô hiệu khôi phục; tắt Defender, xóa event log (1102) và xóa Prefetch là hành vi <em>né phòng thủ/chống điều tra</em> — các khoảng trống chúng tạo ra bản thân là chỉ dấu. <strong>Steganography</strong> giấu dữ liệu trong file khác (ảnh/âm thanh), che chính sự tồn tại của nó.</span></li></ul>
`;
