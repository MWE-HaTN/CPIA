/* Theory — E7 (Appendix E). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e7"]=`<h2>E7 — Identifying Suspect Files</h2>

<div class="tier recall" id="e7-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Known-good hash sets (NSRL):</strong> <span class="en">Filter OUT known OS/app files to focus on the unknown — it is NOT a malware blocklist.</span><span class="vi">Lọc BỎ các file OS/ứng dụng đã biết để tập trung vào file lạ — KHÔNG phải danh sách chặn malware.</span></li>
<li><strong>Strings:</strong> <span class="en">Reveal URLs, IPs, paths, registry keys, API names — fast first-pass triage.</span><span class="vi">Lộ URL, IP, đường dẫn, khóa registry, tên API — bước phân loại nhanh đầu tiên.</span></li>
<li><strong>Packed executable:</strong> <span class="en">High entropy + tiny import table + odd section names (UPX0) = likely packed; unpack before analysis.</span><span class="vi">Entropy cao + bảng import nhỏ + tên section lạ (UPX0) = khả năng bị pack; giải nén trước khi phân tích.</span></li>
<li><strong>Fuzzy hashing (ssdeep):</strong> <span class="en">Finds SIMILAR variant files, where exact MD5/SHA would differ.</span><span class="vi">Tìm file BIẾN THỂ tương tự, nơi MD5/SHA chính xác sẽ khác nhau.</span></li>
<li><strong>Signature analysis:</strong> <span class="en">Identify a file by magic bytes, not extension — a renamed .exe is still "MZ".</span><span class="vi">Nhận diện file bằng magic byte, không theo đuôi — .exe bị đổi tên vẫn là "MZ".</span></li>
<li><strong>File path/permissions:</strong> <span class="en">svchost.exe outside System32, or odd write permissions, are red flags.</span><span class="vi">svchost.exe ngoài System32, hoặc quyền ghi lạ, là dấu hiệu đáng ngờ.</span></li>
<li><strong>Authenticode signature:</strong> <span class="en">Tells you WHO signed it and that it is unaltered — NOT that it is safe.</span><span class="vi">Cho biết AI ký và file không bị sửa — KHÔNG có nghĩa là an toàn.</span></li>
</ul></div></div>

<details class="tier concept" id="e7-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Hash tables: known-good vs known-bad</h4>
<p><strong>NSRL</strong> (NIST) là tập hash <em>known-good</em>: dùng để <strong>loại</strong> các file hệ điều hành/ứng dụng đã biết, thu hẹp về các file lạ cần xem. Đừng nhầm: nó không phải để "bắt malware bằng hash" (đó là known-bad list như VirusTotal/abuse.ch). Hash chính xác (MD5/SHA) chỉ khớp file <em>y hệt từng byte</em>.</p>

<h4>Fuzzy hashing — vì sao cần</h4>
<p>Malware thường tạo nhiều biến thể chỉ khác vài byte → MD5/SHA hoàn toàn khác. <strong>Fuzzy hash (ssdeep, TLSH)</strong> tính "độ tương tự" → gom nhóm các mẫu cùng họ dù không trùng byte. <strong>imphash</strong> (hash bảng import) cũng giúp gom binary cùng cách build.</p>

<h4>Strings &amp; packing</h4>
<p><strong>strings</strong> là triage nhanh: URL/IP/path/registry/API gợi ý chức năng. Nếu file <strong>gần như không có chuỗi nghĩa + import table rất nhỏ + entropy cao</strong> → khả năng bị <strong>pack/obfuscate</strong> (UPX, Themida...), phải <em>giải nén</em> (hoặc cho chạy động để tự bung) trước khi phân tích sâu.</p>

<h4>Signature analysis &amp; chữ ký số</h4>
<p>Ưu tiên nhận diện bằng <strong>magic bytes/structure</strong> thay vì chỉ extension. <strong>Authenticode</strong> hợp lệ hỗ trợ rằng nội dung được ký chưa đổi kể từ khi ký và signature liên kết tới certificate/chain được kiểm tra; nó không tự chứng minh người vận hành private key hay file lành. Certificate có thể bị đánh cắp/lạm dụng và trust/revocation/timestamp policy đều quan trọng.</p>
</div></details>

<details class="tier reference" id="e7-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Identification techniques</h4>
<div class="table-wrap"><table>
<tr><th>Technique</th><th>Finds</th><th>Note</th></tr>
<tr><td>Known-good hashes (NSRL)</td><td>Filter out known files</td><td>NOT a malware blocklist</td></tr>
<tr><td>Known-bad hashes (VT/abuse.ch)</td><td>Match exact known malware</td><td>Exact byte match only</td></tr>
<tr><td>Fuzzy hashing (ssdeep/TLSH)</td><td>Similar variants</td><td>Cluster families</td></tr>
<tr><td>imphash</td><td>Same import table</td><td>Cluster by build</td></tr>
<tr><td>Strings</td><td>URLs/IPs/APIs/paths</td><td>Fast triage</td></tr>
<tr><td>Signature (magic bytes)</td><td>True file type</td><td>Beats renamed extensions</td></tr>
</table></div>

<h4>Packed-file indicators</h4>
<div class="table-wrap"><table>
<tr><th>Indicator</th><th>Meaning</th></tr>
<tr><td>High section entropy (&gt;7.0)</td><td>Compressed/encrypted</td></tr>
<tr><td>Tiny import table</td><td>APIs resolved at runtime</td></tr>
<tr><td>Section names UPX0/UPX1, .themida</td><td>Known packers</td></tr>
<tr><td>Few meaningful strings</td><td>Obfuscated</td></tr>
</table></div>

<h4>Authenticode signature — what it does / doesn't prove</h4>
<div class="table-wrap"><table>
<tr><th>Supports when validation succeeds</th><th>Does NOT prove</th></tr>
<tr><td>Who signed it; file unaltered since signing</td><td>That the file is safe (certs get stolen/abused)</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="e7-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Hash exact rồi kiểm known-good/bad; xác định type bằng magic.</li>
<li>Kiểm signature, strings/imports/resources/entropy/sections và fuzzy similarity.</li>
<li>Đưa mẫu nghiêm trọng sang static/dynamic analysis cô lập.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>SHA-256, Authenticode chain/status, ssdeep/TLSH score.</li>
<li>Packed section, overlay, suspicious permissions, compile metadata và ACL/path.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>
<code>Get-FileHash -Algorithm SHA256</code>, Sigcheck, strings, capa, FLOSS.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Signed binary không tự benign: certificate có thể stolen hoặc signed binary bị DLL side-load.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>MD5 collision risk; dùng SHA-256 cho identity.</li>
<li>Fuzzy score phụ thuộc kích thước/algorithm, không là verdict.</li>
<li>High entropy cũng có thể là compressed resource.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> NIST hash policy; Microsoft Authenticode; YARA/capa documentation.</p>
</div>
</details>`;
