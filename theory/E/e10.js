/* Theory — E10 (Appendix E). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e10"]=`<h2>E10 — Infection Vectors</h2>

<div class="tier recall" id="e10-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Malicious documents:</strong> <span class="en">Office macros (VBA), DDE field commands, and remote-template injection are top vectors.</span><span class="vi">Macro Office (VBA), lệnh DDE, và remote-template injection là các vector hàng đầu.</span></li>
<li><strong>Executables/DLLs:</strong> <span class="en">Infected EXE/DLL, plus DLL search-order hijacking / side-loading via a trusted app.</span><span class="vi">EXE/DLL nhiễm, cùng DLL search-order hijacking / side-loading qua app tin cậy.</span></li>
<li><strong>Drive-by &amp; malicious JavaScript:</strong> <span class="en">Visiting a malicious/compromised page runs malicious JavaScript that exploits the browser or plugins — often via an exploit kit.</span><span class="vi">Vào trang độc hại/bị chiếm chạy JavaScript độc hại khai thác trình duyệt/plugin — thường qua exploit kit.</span></li>
<li><strong>Email-based:</strong> <span class="en">Phishing with malicious attachments or links; password-protected ZIPs evade gateway AV.</span><span class="vi">Phishing kèm đính kèm/link độc hại; ZIP có mật khẩu né AV gateway.</span></li>
<li><strong>USB / external media:</strong> <span class="en">Malicious USB, autorun, or LNK files on shared drives.</span><span class="vi">USB độc hại, autorun, hoặc file LNK trên ổ chia sẻ.</span></li>
<li><strong>Passive exploitation:</strong> <span class="en">No user action needed — e.g. a wormable network service vulnerability.</span><span class="vi">Không cần thao tác người dùng — vd lỗ hổng dịch vụ mạng kiểu sâu (wormable).</span></li>
<li><strong>LOLBins &amp; containers:</strong> <span class="en">mshta/regsvr32/rundll32 abuse; ISO/IMG containers bypass Mark-of-the-Web warnings.</span><span class="vi">Lạm dụng mshta/regsvr32/rundll32; container ISO/IMG né cảnh báo Mark-of-the-Web.</span></li>
</ul></div></div>

<details class="tier concept" id="e10-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Tài liệu độc hại</h4>
<p>Vector phổ biến nhất qua email. <strong>Macro VBA</strong> (AutoOpen/AutoClose tự chạy), <strong>DDE</strong> (field-code chạy lệnh không cần macro), <strong>remote template injection</strong> (.docx tải template chứa macro từ xa), và <strong>OLE object</strong> nhúng. Một <code>invoice.docm</code> mở ra → macro tải/chạy payload là kịch bản kinh điển.</p>

<h4>Executable, DLL &amp; side-loading</h4>
<p>EXE/DLL nhiễm chạy trực tiếp, hoặc tinh vi hơn: <strong>DLL search-order hijacking / side-loading</strong> — đặt DLL độc cạnh một app ký hợp lệ để app tự nạp nó. <strong>LOLBins</strong> (mshta.exe, regsvr32.exe, rundll32.exe) là binary hệ thống hợp lệ bị lợi dụng để chạy mã, né phát hiện.</p>

<h4>Drive-by &amp; passive exploitation</h4>
<p><strong>Drive-by download</strong>: chỉ cần truy cập trang là trình duyệt/plugin bị khai thác (qua exploit kit) — người dùng không bấm gì thêm. <strong>Passive exploitation</strong>: không cần tương tác người dùng, vd lỗ hổng dịch vụ mạng lan kiểu sâu (EternalBlue/SMB).</p>

<h4>Email, USB, container</h4>
<p>Email: đính kèm/link; <strong>ZIP có mật khẩu</strong> để gateway AV không mở/quét được. USB/ổ chia sẻ: file LNK độc, autorun. <strong>ISO/IMG</strong>: mount lên ổ ảo → file bên trong <em>không mang Mark-of-the-Web</em> nên bỏ qua cảnh báo "file tải từ internet".</p>
</div></details>

<details class="tier reference" id="e10-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Infection vectors</h4>
<div class="table-wrap"><table>
<tr><th>Vector</th><th>Mechanism</th><th>User action?</th></tr>
<tr><td>Document macro / DDE</td><td>VBA / field command runs payload</td><td>Open + enable</td></tr>
<tr><td>Remote template injection</td><td>.docx pulls macro template remotely</td><td>Open</td></tr>
<tr><td>Infected EXE/DLL</td><td>Direct execution</td><td>Run</td></tr>
<tr><td>DLL side-loading</td><td>Trusted app loads malicious DLL</td><td>Run trusted app</td></tr>
<tr><td>Drive-by download</td><td>Browser/plugin exploit on visit</td><td>Visit page</td></tr>
<tr><td>Email attachment/link</td><td>Phishing; password-ZIP evades AV</td><td>Open/click</td></tr>
<tr><td>USB / shared drive</td><td>Malicious LNK/autorun</td><td>Insert/open</td></tr>
<tr><td>Passive / network exploit</td><td>Wormable service vuln</td><td>None</td></tr>
</table></div>

<h4>Evasion helpers</h4>
<div class="table-wrap"><table>
<tr><th>Technique</th><th>Effect</th></tr>
<tr><td>Password-protected ZIP</td><td>Gateway AV can't open the archive</td></tr>
<tr><td>ISO/IMG container</td><td>Inner files lack Mark-of-the-Web</td></tr>
<tr><td>LOLBins (mshta/regsvr32/rundll32)</td><td>Run code via trusted system binaries</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="e10-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Dựng delivery→execution→persistence→C2 theo process/file/network.</li>
<li>Email/document: header→attachment→macro/DDE/JS→child process; web: redirect→download→exploit.</li>
<li>USB/share: device/mount/LNK/file execution; xác định user action hay passive exploit.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>MOTW/Zone.Identifier, browser download, mail attachment, Office child process.</li>
<li>DLL side-load pair, autorun/LNK, exploit crash và payload.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-impact">LIVE-IMPACT</span>Map ProcessGuid/hash/URL/Message-ID xuyên nguồn; sandbox chỉ trong lab.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>File từ email có MOTW, WINWORD→powershell→download là chain mạnh; chỉ có file trong Downloads chưa chứng minh execution.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Container/ISO có thể thay propagation của MOTW tùy phiên bản.</li>
<li>Drive-by có thể cần browser/version cụ thể.</li>
<li>Initial vector khác root cause; vá cả lỗ hổng và credential.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> MITRE Initial Access/Execution; Microsoft MOTW/Office guidance.</p>
</div>
</details>`;
