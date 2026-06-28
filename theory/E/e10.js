/* Theory — E10 (Appendix E). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e10"]=`<h2>E10 — Infection Vectors</h2><ul>

<li><span class="en">Executable / DLL infection: trojanised binaries, DLL search-order hijacking, side-loading.</span><span class="vi">Lây nhiễm qua Executable / DLL: binary đã bị trojanised, chiếm quyền thứ tự tìm kiếm DLL, side-loading.</span></li>

<li><span class="en">Documents: macros, DDE, embedded objects, template injection, malicious links.</span><span class="vi">Tài liệu: macro, DDE, đối tượng nhúng, chèn template, liên kết độc hại.</span></li>

<li><span class="en">JavaScript: droppers, browser-based payload retrieval, obfuscated scripts.</span><span class="vi">JavaScript: dropper, lấy payload qua trình duyệt, script bị làm rối.</span></li>

<li><span class="en">Drive-by downloads: exploit browser / plugin automatically after visiting site.</span><span class="vi">Tải xuống ngẫu nhiên: khai thác trình duyệt / plugin tự động sau khi truy cập trang web.</span></li>

<li><span class="en">USB / shared drives: autorun legacy, LNK files, worm propagation.</span><span class="vi">USB / ổ chia sẻ: autorun cũ, file LNK, lây lan worm.</span></li>

<li><span class="en">Passive exploitation: vulnerable service / client exploited by receiving crafted input.</span><span class="vi">Khai thác thụ động: dịch vụ / client dễ bị tấn công bằng cách nhận đầu vào được tạo thủ công.</span></li>

<li><span class="en">Email: phishing attachments, links, credential-harvesting pages.</span><span class="vi">Email: đính kèm phishing, liên kết, trang thu thập thông tin xác thực.</span></li>

</ul><h3>Mark of the Web (MOTW) and ISO Delivery</h3><ul><li><strong>Mark of the Web (MOTW):</strong> Files downloaded from internet receive NTFS ADS <code>:Zone.Identifier</code> with <code>ZoneId=3</code>. Office files with MOTW open in Protected View → macros blocked by default.</li><li><strong>Attacker bypass — ISO / IMG delivery:</strong> Windows mounts ISO natively. Contents do NOT inherit MOTW from the container. Files from ISO have no Zone.Identifier → macros execute without Protected View warning.</li><li><strong>Forensic value:</strong> No Zone.Identifier on executable in Temp / AppData = file written by process (malware drop). Present = file downloaded by user browser. Use <code>dir /r</code> or streams.exe to inspect.</li></ul>

<h3>Infection Vector Reference</h3>

<div class="table-wrap"><table>

<tr><th>Vector</th><th>How It Works</th><th>Key Forensic Artifacts</th><th>Detection</th></tr>

<tr><td>Malicious Executables / DLL</td><td>EXE / DLL delivered via phishing, USB, or download. User executes.</td><td>Prefetch entry, Amcache, Event 4688, file in Downloads / Temp</td><td>AV detection, hash lookup, Autoruns for persistence</td></tr>

<tr><td>Malicious Documents — Macros</td><td>Office doc with VBA. User enables macros → code runs.</td><td>Event 4688 (winword.exe → cmd.exe), recent doc LNK, email with attachment</td><td>Macro execution Event 4104, process tree anomaly (Office spawning shell)</td></tr>

<tr><td>Malicious Documents — DDE</td><td>Dynamic Data Exchange calls external process without macros</td><td>Event 4688 (winword.exe → cmd.exe), DDE field in doc body</td><td>olevba detection, process tree anomaly</td></tr>

<tr><td>JavaScript / HTA</td><td>.js or .hta via email → executed by wscript/cscript/mshta</td><td>Event 4688 (wscript.exe → cmd.exe), script in Downloads / Temp</td><td>Script block logging, Event 4104, AppLocker events</td></tr>

<tr><td>Drive-by Download</td><td>User visits compromised / malicious site → browser exploit → payload download</td><td>Browser history (site visited), new EXE in Downloads / Temp, browser spawning child process</td><td>Proxy logs (malicious URL), AV detection, browser spawning unexpected child</td></tr>

<tr><td>USB / External Media</td><td>AutoRun (legacy) or user manually executes from USB. LNK shortcut on USB auto-executes via Explorer.</td><td>USBSTOR registry, setupapi.dev.log (first connect timestamp), Event 4688 from removable drive path</td><td>Device control policy, USB activity logging</td></tr>

<tr><td>Passive Exploitation</td><td>No user interaction. Attacker sends crafted packet to vulnerable service → RCE. (EternalBlue, Log4Shell)</td><td>Service spawning unexpected child (lsass.exe → cmd.exe), inbound connection on service port → outbound C2</td><td>IDS signature for exploit, EDR process tree anomaly, network anomaly</td></tr>

<tr><td>Email-based Attacks (Phishing)</td><td>Malicious link or attachment. Spear-phishing = targeted. BEC = no malware, social engineering only.</td><td>Email headers (Received chain), O365 UAL (MailItemsAccessed, Send), Outlook spawning child processes</td><td>Email gateway, DMARC failure, user report, O365 alerts</td></tr>

</table></div>

<p class="sub-heading">Mark of the Web (MOTW)</p>

<ul>

<li><span class="en">Files downloaded from internet receive NTFS ADS: <code>:Zone.Identifier</code> with ZoneId=3</span><span class="vi">File tải xuống từ internet được gán NTFS ADS: <code>:Zone.Identifier</code> với ZoneId=3</span></li>

<li><span class="en">Office with MOTW → Protected View → macros blocked. Attacker bypass: deliver inside ISO / IMG — contents do NOT inherit MOTW.</span><span class="vi">Office có MOTW → Protected View → macro bị chặn. Cách vượt qua của kẻ tấn công: phân phối bên trong ISO / IMG — nội dung bên trong KHÔNG kế thừa MOTW.</span></li>

<li><strong>Forensic value:</strong> <span class="en">No Zone.Identifier on executable in Temp = file was written by another process (malware drop), not downloaded by user.</span><span class="vi">Không có Zone.Identifier trên file thực thi trong Temp = file được ghi bởi tiến trình khác (malware thả xuống), không phải người dùng tải về.</span></li>

</ul>

<div class="table-wrap"><table>

<tr><th>Vector</th><th>Description</th><th>Indicators</th></tr>

<tr><td>Malicious document</td><td>Office macro, DDE, PDF exploit</td><td>winword.exe / excel.exe spawning cmd / powershell (Event 4688)</td></tr>

<tr><td>Drive-by download</td><td>Browser exploit via watering hole</td><td>Browser spawning process, new executable in temp / download folder</td></tr>

<tr><td>Phishing / Email</td><td>Malicious attachment or link</td><td>Outlook spawning child process, email with attachment + URL + urgency</td></tr>

<tr><td>USB / External media</td><td>AutoRun malware, manually executed</td><td>USBSTOR registry entry, new process from removable drive path</td></tr>

<tr><td>Passive exploitation</td><td>Network service exploit (no user interaction)</td><td>Unexpected inbound connection succeeded, new process under system / service account</td></tr>

</table></div>


<h3 class="qz-theory"><span class="en">Infection Vectors</span><span class="vi">Vector lây nhiễm</span></h3>
<ul>
<li><strong><span class="en">Documents:</span><span class="vi">Tài liệu:</span></strong> <span class="en">A <code>.docm</code> (macro-enabled) runs a malicious VBA macro after "Enable Content"; DDE and embedded objects are related Office vectors — inspect with olevba before opening.</span><span class="vi">Một <code>.docm</code> (bật macro) chạy macro VBA độc hại sau khi "Enable Content"; DDE và đối tượng nhúng là vector Office liên quan — kiểm tra bằng olevba trước khi mở.</span></li>
<li><strong>Drive-by:</strong> <span class="en">Exploits the browser/plugins simply by visiting a malicious or compromised page — no obvious user action.</span><span class="vi">Khai thác trình duyệt/plugin chỉ bằng việc truy cập một trang độc hại hoặc bị xâm nhập — không cần hành động rõ ràng.</span></li>
<li><strong><span class="en">Delivery tricks:</span><span class="vi">Mẹo phát tán:</span></strong> <span class="en"><strong>ISO/IMG containers</strong> bypass Mark-of-the-Web so extracted files skip SmartScreen/Protected View warnings; <strong>LOLBins</strong> (mshta, regsvr32 "Squiblydoo", rundll32) run code while appearing legitimate; <strong>password-protected ZIPs</strong> evade gateway AV (the body supplies the password).</span><span class="vi"><strong>container ISO/IMG</strong> vượt Mark-of-the-Web nên file trích ra bỏ qua cảnh báo SmartScreen/Protected View; <strong>LOLBins</strong> (mshta, regsvr32 "Squiblydoo", rundll32) chạy mã trong khi trông hợp lệ; <strong>ZIP có mật khẩu</strong> né AV tại gateway (thân email cung cấp mật khẩu).</span></li></ul>
`;
