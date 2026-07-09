/* Theory — F8 (Appendix F). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["f8"]=`<h2>F8 — Windows Executable File Formats</h2>

<div class="tier recall" id="f8-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>PE identification:</strong> <span class="en">Starts with "MZ" (DOS header); e_lfanew points to the "PE\\0\\0" signature. Identify by magic bytes, not extension.</span><span class="vi">Bắt đầu bằng "MZ" (DOS header); e_lfanew trỏ tới chữ ký "PE\\0\\0". Nhận diện bằng magic byte, không theo đuôi.</span></li>
<li><strong>COM vs EXE:</strong> <span class="en">Legacy .COM = flat binary (no PE header); .EXE = PE-based.</span><span class="vi">.COM cũ = binary phẳng (không có header PE); .EXE = dựa trên PE.</span></li>
<li><strong>Sections:</strong> <span class="en">.text (code), .data/.rdata (data/imports), .rsrc (resources), .reloc; IAT = imports, EAT = exports (DLLs).</span><span class="vi">.text (mã), .data/.rdata (dữ liệu/import), .rsrc (tài nguyên), .reloc; IAT = import, EAT = export (DLL).</span></li>
<li><strong>Entry point &amp; TLS:</strong> <span class="en">AddressOfEntryPoint = where execution starts; TLS callbacks run BEFORE the entry point (anti-debug).</span><span class="vi">AddressOfEntryPoint = nơi thực thi bắt đầu; TLS callback chạy TRƯỚC entry point (anti-debug).</span></li>
<li><strong>Packed signs:</strong> <span class="en">High entropy, tiny import table, UPX/odd section names, W+X sections = packed.</span><span class="vi">Entropy cao, bảng import nhỏ, tên section UPX/lạ, section W+X = bị pack.</span></li>
<li><strong>Useful fields:</strong> <span class="en">TimeDateStamp (forgeable), Rich header (build toolchain), .NET = imports mscoree.dll.</span><span class="vi">TimeDateStamp (giả mạo được), Rich header (chuỗi công cụ build), .NET = import mscoree.dll.</span></li>
</ul></div></div>

<details class="tier concept" id="f8-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Cấu trúc PE</h4>
<p>Mọi PE bắt đầu bằng <strong>DOS header "MZ"</strong>; trường <code>e_lfanew</code> (offset 0x3C) trỏ tới chữ ký <strong>"PE\\0\\0"</strong> rồi đến file header + optional header + bảng section. Nhận diện file bằng <em>magic byte</em> chứ không theo đuôi (ZIP="PK", PDF="%PDF", ELF=0x7F ELF). <strong>.COM</strong> cũ là binary phẳng không có header PE.</p>

<h4>Section, IAT, EAT, entry point</h4>
<p>Section điển hình: <strong>.text</strong> (mã), <strong>.data/.rdata</strong> (dữ liệu/import), <strong>.rsrc</strong> (tài nguyên: icon, config nhúng), <strong>.reloc</strong>. <strong>IAT (Import Address Table)</strong> = các hàm/DLL mà binary gọi (bản đồ năng lực); loader điền địa chỉ đã phân giải — IAT hooking đổi con trỏ này. <strong>EAT (Export)</strong> liên quan tới DLL (hàm phơi ra). <strong>AddressOfEntryPoint</strong> = nơi bắt đầu chạy; <strong>TLS callback</strong> chạy <em>trước</em> entry point → hay dùng cho anti-debug.</p>

<h4>Trích thông tin giá trị &amp; dấu hiệu pack</h4>
<p>Hữu ích: <strong>strings</strong> (URL/IP/path/API), <strong>imports</strong> (năng lực), <strong>TimeDateStamp</strong> (manh mối build nhưng <em>giả mạo/zero được</em>), <strong>Rich header</strong> (lấy dấu chuỗi công cụ build để gom mẫu), chữ ký số, tài nguyên nhúng. <strong>Dấu hiệu pack</strong>: entropy section cao (&gt;7.0), import table rất nhỏ (chỉ LoadLibrary+GetProcAddress), tên section UPX0/.themida, section W+X. <strong>.NET</strong>: import mscoree.dll + .NET metadata → dùng dnSpy/ILSpy.</p>
</div></details>

<details class="tier reference" id="f8-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>PE structure</h4>
<div class="table-wrap"><table>
<tr><th>Part</th><th>Role</th></tr>
<tr><td>DOS header ("MZ")</td><td>Start; e_lfanew → PE signature</td></tr>
<tr><td>PE signature ("PE\\0\\0")</td><td>Marks the PE</td></tr>
<tr><td>.text</td><td>Executable code</td></tr>
<tr><td>.data / .rdata</td><td>Data / imports / constants</td></tr>
<tr><td>.rsrc</td><td>Resources (icons, embedded config)</td></tr>
<tr><td>IAT</td><td>Imported functions (capability map)</td></tr>
<tr><td>EAT</td><td>Exports (DLLs)</td></tr>
<tr><td>AddressOfEntryPoint</td><td>Where execution begins</td></tr>
<tr><td>TLS callbacks</td><td>Run before entry point (anti-debug)</td></tr>
</table></div>

<h4>Packed vs clean</h4>
<div class="table-wrap"><table>
<tr><th>Signal</th><th>Packed</th><th>Clean</th></tr>
<tr><td>Section entropy</td><td>High (&gt;7.0)</td><td>~5–6.5</td></tr>
<tr><td>Import table</td><td>Tiny</td><td>Rich, specific APIs</td></tr>
<tr><td>Section names</td><td>UPX0, .themida</td><td>.text/.data/.rdata</td></tr>
<tr><td>Permissions</td><td>W+X section</td><td>Standard</td></tr>
</table></div>

<h4>Useful PE fields</h4>
<div class="table-wrap"><table>
<tr><th>Field</th><th>Use</th></tr>
<tr><td>TimeDateStamp</td><td>Build clue (forgeable/zeroed)</td></tr>
<tr><td>Rich header</td><td>Build toolchain fingerprint</td></tr>
<tr><td>Imports mscoree.dll</td><td>.NET / managed assembly</td></tr>
<tr><td>Overlay (after last section)</td><td>Hidden config / 2nd-stage payload</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="f8-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Validate MZ→e_lfanew→PE signature; parse COFF/Optional Header/data directories/sections.</li>
<li>Map RVA↔file offset; đọc entry point, imports/exports/resources/relocations/TLS/debug/certificate/overlay.</li>
<li>Đánh giá entropy/permissions/size mismatch và packer; extract config/payload trên copy.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Machine/subsystem/ImageBase/AddressOfEntryPoint, section RVA/raw size.</li>
<li>IAT/EAT, resource, Rich header, timestamp, Authenticode, .NET metadata.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>PE-bear/CFF Explorer/pefile; <code>dumpbin /headers</code>; FLOSS/capa.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Certificate table nằm ngoài mapped image và overlay sau last section có thể chứa config/payload; không bỏ qua dữ liệu ngoài section.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>TimeDateStamp/Rich header giả được.</li>
<li>W+X/high entropy là heuristic.</li>
<li>COM là flat legacy binary; DLL/SYS cũng dùng PE.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> Microsoft Learn “PE Format” (current PE/COFF structure, including DOS header, PE signature, COFF/optional headers and data directories); Microsoft Authenticode documentation; ECMA-335 .NET metadata specification.</p>
</div>
</details>`;
