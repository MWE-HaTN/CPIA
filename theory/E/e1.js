/* Theory — E1 (Appendix E). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e1"]=`<h2>E1 — Host-based Data Acquisition</h2>

<div class="tier recall" id="e1-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Golden rule:</strong> <span class="en">Use a write blocker and create a hashed, bit-for-bit image; verify the hash matches afterwards.</span><span class="vi">Dùng write blocker và tạo image bit-for-bit có hash; xác minh hash khớp sau khi tạo.</span></li>
<li><strong>Order of volatility:</strong> <span class="en">On a live host, capture volatile memory (RAM) BEFORE disk artefacts.</span><span class="vi">Trên máy đang chạy, thu bộ nhớ volatile (RAM) TRƯỚC khi lấy artefact trên đĩa.</span></li>
<li><strong>Static (dead) vs dynamic (live):</strong> <span class="en">Dead = power off / removed disk imaged offline; live = acquire from a running system (memory + targeted artefacts).</span><span class="vi">Dead = tắt máy / tháo đĩa rồi image offline; live = thu từ hệ thống đang chạy (memory + artefact trọng tâm).</span></li>
<li><strong>Image formats:</strong> <span class="en">Raw/dd = exact bytes only; E01 (EWF) adds metadata + built-in integrity hashes (and compression).</span><span class="vi">Raw/dd = đúng từng byte; E01 (EWF) thêm metadata + hash toàn vẹn tích hợp (và nén).</span></li>
<li><strong>Live server you can't power off:</strong> <span class="en">Do a live/triage acquisition — memory plus key artefacts — rather than nothing or a risky shutdown.</span><span class="vi">Làm live/triage acquisition — bộ nhớ cộng artefact then chốt — thay vì không thu gì hoặc tắt máy rủi ro.</span></li>
<li><strong>Triage tools:</strong> <span class="en">KAPE, CyLR, Velociraptor, Brimor Labs — rapidly collect targeted forensic artefacts.</span><span class="vi">KAPE, CyLR, Velociraptor, Brimor Labs — thu nhanh các artefact pháp y trọng tâm.</span></li>
<li><strong>Local vs remote:</strong> <span class="en">Local = physical access; remote = collect over the network via an agent when physical access isn't possible.</span><span class="vi">Local = truy cập vật lý; remote = thu qua mạng bằng agent khi không tiếp cận vật lý được.</span></li>
</ul></div></div>

<details class="tier concept" id="e1-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Write blocker &amp; hashing — vì sao</h4>
<p><strong>Write blocker</strong> giúp ngăn thao tác ghi ngoài ý muốn lên nguồn; cần xác minh cấu hình/hoạt động thay vì mặc định phần cứng luôn hoàn hảo. <strong>Hash</strong> (ưu tiên SHA-256; có thể giữ thêm hash theo yêu cầu công cụ/quy trình) lúc thu thập và kiểm tra lại sau đó cho phép phát hiện image có thay đổi hay không kể từ khi acquire. Hash hỗ trợ tính toàn vẹn nhưng không tự chứng minh provenance, chain of custody hoặc khả năng được tòa chấp nhận.</p>

<h4>Dead vs live acquisition</h4>
<p><strong>Dead/static</strong>: tắt máy hoặc tháo đĩa, image offline qua write blocker — sạch nhất nhưng <em>mất hết dữ liệu volatile</em>. <strong>Live/dynamic</strong>: thu từ máy đang chạy — bắt được RAM, socket, mã fileless, khóa đang dùng; đổi lại mỗi thao tác đều làm hệ thống thay đổi đôi chút (phải document). Chọn live khi không được tắt máy hoặc cần dữ liệu volatile.</p>

<h4>Định dạng image: raw vs E01</h4>
<p><strong>raw/dd</strong> chỉ là bản sao byte, không kèm gì. <strong>E01 (Expert Witness Format)</strong> nhúng metadata vụ việc + hash kiểm tra tính toàn vẹn + nén, nên phổ biến trong forensic. Cả hai đều là bit-for-bit của nguồn.</p>

<h4>Triage vs full image; local vs remote</h4>
<p>Khi đĩa quá lớn / không được dừng dịch vụ, dùng <strong>triage</strong>: chỉ thu nhanh các artefact giá trị cao (registry, event log, prefetch, $MFT, browser...) bằng KAPE/CyLR thay vì image toàn bộ. <strong>Remote acquisition</strong> dùng agent (Velociraptor) thu qua mạng khi không tới được máy. Lưu ý <strong>BitLocker</strong>: image "dead" cần khóa khôi phục — nên image <em>live</em> khi volume còn mở khóa.</p>
</div></details>

<details class="tier reference" id="e1-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Image formats</h4>
<div class="table-wrap"><table>
<tr><th>Format</th><th>Contents</th><th>Notes</th></tr>
<tr><td>Raw / dd</td><td>Exact bytes only</td><td>No metadata; hash separately</td></tr>
<tr><td>E01 / EWF (Expert Witness)</td><td>Bytes + case metadata + integrity hashes</td><td>Compression; verifiable</td></tr>
<tr><td>AFF</td><td>Open forensic format</td><td>Metadata + compression</td></tr>
</table></div>

<h4>Acquisition approach</h4>
<div class="table-wrap"><table>
<tr><th>Scenario</th><th>Approach</th></tr>
<tr><td>Disk can be removed/powered off</td><td>Dead image via write blocker (raw/E01)</td></tr>
<tr><td>Live server, cannot power off</td><td>Live/triage: capture RAM first, then targeted artefacts</td></tr>
<tr><td>Huge disk / time-limited</td><td>Triage collection of high-value artefacts</td></tr>
<tr><td>No physical access</td><td>Remote acquisition via agent</td></tr>
<tr><td>BitLocker-encrypted</td><td>Image live while unlocked, or supply recovery key</td></tr>
</table></div>

<h4>Triage / collection tools</h4>
<div class="table-wrap"><table>
<tr><th>Tool</th><th>Use</th></tr>
<tr><td>KAPE</td><td>Targeted artefact collection + parsing</td></tr>
<tr><td>CyLR</td><td>Fast live artefact collection</td></tr>
<tr><td>Velociraptor</td><td>Remote, fleet-wide collection</td></tr>
<tr><td>Brimor Labs (Live Response)</td><td>Scripted live collection</td></tr>
<tr><td>FTK Imager / dd / ewfacquire</td><td>Disk/memory imaging</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="e1-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Chọn dead/live/triage theo volatility, encryption, scope và downtime.</li>
<li>Ghi device identity, tool/version, source/destination; dùng write blocker khi phù hợp.</li>
<li>Acquire, tính hash trong quá trình/đầu-cuối, verify rồi niêm phong bản gốc; phân tích working copy.</li>
<li>Remote collection phải xác thực agent, mã hóa truyền và ghi packet loss/error.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Disk geometry/serial, partitions, HPA/DCO; RAM/process/network; selected artefacts.</li>
<li>Raw/E01/AFF metadata, segment, compression, hash và acquisition log.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-impact">LIVE-IMPACT</span>FTK Imager/Guymager cho disk; KAPE/CyLR/Velociraptor cho triage; WinPmem cho RAM.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>BitLocker đang unlock ưu tiên live collection khóa/RAM và logical data trước shutdown; dead image sau đó có thể chỉ thấy ciphertext.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Live acquisition thay đổi source.</li>
<li>Hash khác do format/container không nhất thiết data khác; so đúng layer.</li>
<li>Triage nhanh nhưng có selection bias và có thể bỏ artefact.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> NIST SP 800-86; ISO/IEC 27037; tool documentation.</p>
</div>
</details>`;
