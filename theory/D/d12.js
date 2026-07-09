/* Theory — D12 (Appendix D). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d12"]=`<h2>D12 — Web Based Attacks</h2>

<div class="tier recall" id="d12-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Malicious HTML elements:</strong> <span class="en">Injected iframes pointing to an external exploit kit = a malicious redirect / drive-by.</span><span class="vi">iframe được tiêm trỏ tới exploit kit ngoài = chuyển hướng độc hại / drive-by.</span></li>
<li><strong>Obfuscated JavaScript:</strong> <span class="en">eval(unescape(...)), long hex strings, String.fromCharCode(...) hide the real payload.</span><span class="vi">eval(unescape(...)), chuỗi hex dài, String.fromCharCode(...) giấu payload thật.</span></li>
<li><strong>De-obfuscate safely:</strong> <span class="en">De-obfuscate in a sandbox to reveal the payload — never run it in your own browser.</span><span class="vi">Giải obfuscation trong sandbox để lộ payload — không bao giờ chạy trong trình duyệt của bạn.</span></li>
<li><strong>Decode, don't trust:</strong> <span class="en">Replace eval with print/console to dump the decoded result instead of executing it.</span><span class="vi">Thay eval bằng print/console để in kết quả đã giải mã thay vì thực thi nó.</span></li>
<li><strong>Common goal:</strong> <span class="en">Redirect to exploit kit, drop a downloader, or steal data/credentials.</span><span class="vi">Chuyển hướng tới exploit kit, thả downloader, hoặc đánh cắp dữ liệu/credential.</span></li>
</ul></div></div>

<details class="tier concept" id="d12-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Phần tử độc trong HTML/web</h4>
<p>Trang bị chiếm thường được chèn <strong>iframe ẩn</strong> hoặc thẻ script trỏ tới máy chủ exploit kit → khách truy cập bị <em>drive-by</em>. Cũng có thể là form giả lấy credential, redirect độc, hoặc object nhúng khai thác plugin. Tìm: thẻ lạ, domain ngoài bất thường, thuộc tính ẩn (display:none, kích thước 0).</p>

<h4>JavaScript obfuscate &amp; de-obfuscate</h4>
<p>JS độc hay bị làm rối để né chữ ký: <code>eval(unescape('%xx...'))</code>, <code>String.fromCharCode(104,116,...)</code>, chuỗi hex dài, nối chuỗi, packer. Đây là <strong>obfuscation</strong> (không phải mã hóa thật). <strong>De-obfuscate an toàn</strong>: thay <code>eval</code>/<code>document.write</code> bằng <code>console.log</code>/print để <em>in</em> ra kết quả đã giải thay vì chạy; làm trong <strong>sandbox cô lập</strong>, tuyệt đối không chạy trong trình duyệt thật. Lặp lại cho tới khi lộ URL/payload cuối.</p>
</div></details>

<details class="tier reference" id="d12-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Malicious web indicators</h4>
<div class="table-wrap"><table>
<tr><th>Element</th><th>Meaning</th></tr>
<tr><td>Hidden/injected iframe to external host</td><td>Redirect to exploit kit / drive-by</td></tr>
<tr><td>eval(unescape(...)) / fromCharCode</td><td>Obfuscated JS payload</td></tr>
<tr><td>Long hex / Base64 blobs</td><td>Encoded payload</td></tr>
<tr><td>Fake login form posting offsite</td><td>Credential phishing</td></tr>
</table></div>

<h4>Safe de-obfuscation</h4>
<div class="table-wrap"><table>
<tr><th>Do</th><th>Don't</th></tr>
<tr><td>Replace eval with console.log/print</td><td>Run it in a real browser</td></tr>
<tr><td>Work in an isolated sandbox</td><td>Assume it's harmless minification</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="d12-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Lưu file an toàn, hash và phân tích static trước; không mở bằng browser production.</li>
<li>Decode theo layer: HTML/entity/URL/Base64/string concat/packer; format code và theo data flow.</li>
<li>Tìm source/sink: location/document/cookie → eval/Function/DOM/redirect/download.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>iframe/script/object, event handler, data URI, exploit-kit redirect.</li>
<li>
<code>eval</code>, <code>atob</code>, <code>unescape</code>, char-code loops, WebAssembly và suspicious URL.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Beautifier/parser trong VM; <code>node --check</code> chỉ kiểm syntax, không chạy mẫu.</li>
<li>
<span class="cmd-safety cmd-impact">LIVE-IMPACT</span>Thay sink nguy hiểm bằng logger hoặc dùng debugger có breakpoint.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Base64 tự nó không độc; decode ra JavaScript lấy cookie và POST tới domain lạ mới là hành vi cần báo.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Beautify không deobfuscate semantic hoàn toàn.</li>
<li>Code có thể phụ thuộc DOM/date/C2 và không chạy trong lab.</li>
<li>Không paste mã độc vào console/browser thật.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> OWASP client-side guidance; ECMAScript specification; malware-analysis lab practice.</p>
</div>
</details>`;
