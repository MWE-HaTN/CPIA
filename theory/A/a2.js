/* Theory — A2 (Appendix A). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["a2"]=`<h2>A2 — Incident Chronology</h2>

<div class="tier recall" id="a2-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Normalise to UTC:</strong> <span class="en">Convert every source to one common reference (UTC) and record the source of each event in a "super timeline".</span><span class="vi">Quy mọi nguồn về một mốc chung (UTC) và ghi rõ nguồn của từng sự kiện trong "super timeline".</span></li>
<li><strong>MACB (NTFS):</strong> <span class="en">Modified, Accessed, metadata-Changed, Born/created.</span><span class="vi">Modified (sửa nội dung), Accessed (truy cập), metadata-Changed (đổi metadata), Born/created (tạo).</span></li>
<li><strong>Timestamp epochs:</strong> <span class="en">Windows FILETIME = 100-ns ticks since 1601-01-01; Unix = seconds since 1970; Chrome/WebKit = microseconds since 1601.</span><span class="vi">FILETIME của Windows = đơn vị 100ns tính từ 1601-01-01; Unix = giây từ 1970; Chrome/WebKit = micro-giây từ 1601.</span></li>
<li><strong>Detect timestomping:</strong> <span class="en">Compare $STANDARD_INFORMATION times against $FILE_NAME times in the MFT — a mismatch is a red flag.</span><span class="vi">So sánh mốc thời gian trong $STANDARD_INFORMATION với $FILE_NAME của MFT — lệch nhau là dấu hiệu đáng ngờ.</span></li>
<li><strong>Clock drift:</strong> <span class="en">A host with no NTP drifts; measure the offset against a trusted source and apply it as a correction.</span><span class="vi">Máy không có NTP sẽ trôi đồng hồ; đo độ lệch so với nguồn tin cậy rồi áp vào như một hiệu chỉnh.</span></li>
<li><strong>Image timestamps (EXIF):</strong> <span class="en">A photo's EXIF DateTimeOriginal is usually local camera time with NO timezone — establish the camera's offset before correlating it with UTC logs.</span><span class="vi">EXIF DateTimeOriginal của ảnh thường là giờ máy ảnh, KHÔNG có múi giờ — phải xác định độ lệch của máy ảnh trước khi đối chiếu với log UTC.</span></li>
<li><strong>Ordering events:</strong> <span class="en">The NTFS USN change journal ($UsnJrnl) records the ORDER of file operations independent of file timestamps.</span><span class="vi">NTFS USN change journal ($UsnJrnl) ghi lại THỨ TỰ các thao tác file, độc lập với mốc thời gian của file.</span></li>
<li><strong>Same-second tie:</strong> <span class="en">When two events share a second-precision time, use higher-resolution times or monotonic sequence numbers.</span><span class="vi">Khi hai sự kiện trùng mốc giây, dùng mốc độ phân giải cao hơn hoặc số thứ tự tăng dần (sequence number).</span></li>
</ul></div></div>

<details class="tier concept" id="a2-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Vì sao phải chuẩn hóa về UTC</h4>
<p>Một sự cố thường trải trên nhiều nguồn: firewall (UTC), workstation (giờ địa phương), camera (giờ máy ảnh không múi giờ)... Nếu không quy về một mốc chung, bạn sẽ sắp xếp sai trình tự và rút ra kết luận sai. Luôn quy về <strong>UTC</strong> và <strong>ghi lại nguồn + độ lệch</strong> của từng dòng.</p>

<h4>Timestomping: vì sao so $SI với $FN?</h4>
<p>NTFS lưu mỗi file 2 bộ mốc thời gian: <strong>$STANDARD_INFORMATION ($SI)</strong> — cái Windows hiển thị, <em>dễ bị sửa</em> bằng API (malware hay dùng); và <strong>$FILE_NAME ($FN)</strong> — chỉ được cập nhật bởi kernel khi tạo/đổi tên/di chuyển, <em>khó giả mạo hơn</em>. Khi $SI "cũ hơn" $FN một cách bất thường → khả năng cao là timestomping.</p>

<h4>Nhầm epoch = lệch hàng thế kỷ</h4>
<p>Ví dụ Chrome lưu thời gian là micro-giây từ 1601. Nếu đọc nhầm thành Unix epoch (giây từ 1970), kết quả lệch <strong>hàng trăm năm</strong> — một dấu hiệu rõ ràng rằng bạn đã áp sai epoch/đơn vị.</p>

<h4>Khi kẻ tấn công chỉnh đồng hồ lùi</h4>
<p>Không tin tuyệt đối vào đồng hồ cục bộ. Hãy <strong>đối chiếu với nguồn ngoài tầm kiểm soát của kẻ tấn công</strong> (log của firewall, DC, NTP server, log nhà cung cấp cloud) để khôi phục đúng trình tự.</p>

<h4>Timestamp trong ảnh (EXIF)</h4>
<p>Ảnh (JPEG) mang metadata <strong>EXIF</strong>, trong đó <strong>DateTimeOriginal</strong> thường là <em>giờ địa phương của máy ảnh, không kèm múi giờ</em>. Khi đối chiếu ảnh với log server (UTC), phải xác định múi giờ/độ lệch của máy ảnh trước — nếu không sẽ sắp sai trình tự. Lưu ý phần mềm forensic có thể hiển thị cùng một timestamp theo các múi giờ khác nhau tùy cấu hình, nên luôn ghi rõ múi giờ đang dùng.</p>

<h4>Công cụ ghi THỨ TỰ độc lập với timestamp</h4>
<p>$UsnJrnl và $LogFile của NTFS ghi nhật ký giao dịch theo trình tự — rất hữu ích khi timestamp đã bị can thiệp, vì chúng cho biết <em>cái gì xảy ra trước cái gì</em>.</p>
</div></details>

<details class="tier reference" id="a2-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Common timestamp formats</h4>
<div class="table-wrap"><table>
<tr><th>Format</th><th>Epoch / unit</th><th>Seen in</th></tr>
<tr><td>Windows FILETIME</td><td>100-ns ticks since 1601-01-01 UTC</td><td>NTFS, registry, EVTX</td></tr>
<tr><td>Unix epoch</td><td>Seconds since 1970-01-01 UTC</td><td>Linux, many apps/logs</td></tr>
<tr><td>Chrome / WebKit</td><td>Microseconds since 1601-01-01</td><td>Chromium history/cookies</td></tr>
<tr><td>FAT directory</td><td>Local time, 2-second resolution</td><td>FAT/exFAT, ZIP</td></tr>
<tr><td>Cocoa / Mac absolute</td><td>Seconds since 2001-01-01</td><td>macOS, iOS</td></tr>
</table></div>

<h4>NTFS MACB &amp; the two attribute sets</h4>
<div class="table-wrap"><table>
<tr><th>Letter</th><th>Meaning</th><th>Attribute set</th></tr>
<tr><td>M</td><td>Modified (content changed)</td><td rowspan="4">$SI = shown by Windows, easily stomped.<br/>$FN = kernel-set on create/rename/move, harder to forge.</td></tr>
<tr><td>A</td><td>Accessed</td></tr>
<tr><td>C</td><td>metadata-Changed (MFT entry)</td></tr>
<tr><td>B</td><td>Born / created</td></tr>
</table></div>

<h4>Artefacts for ordering events</h4>
<div class="table-wrap"><table>
<tr><th>Artefact</th><th>What it gives</th></tr>
<tr><td>$UsnJrnl (USN change journal)</td><td>Ordered record of file-system changes</td></tr>
<tr><td>$LogFile</td><td>NTFS transaction journal (recent ops)</td></tr>
<tr><td>Prefetch</td><td>Program execution times/order</td></tr>
<tr><td>Event logs (EVTX)</td><td>Sequenced records with event IDs</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="a2-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Ghi timezone, DST, clock source và độ lệch đồng hồ của từng nguồn; giữ timestamp gốc và thêm cột normalized UTC.</li>
<li>Chuẩn hóa format/epoch nhưng không làm mất precision; phân biệt event time, ingest time và file-system time.</li>
<li>Sắp theo UTC, gắn source/confidence, rồi dựng chuỗi cause → action → effect; dùng sequence number khi timestamp không đáng tin.</li>
<li>Kiểm tra giả thuyết bằng nguồn độc lập: logon, process, DNS, proxy, MFT, registry và memory.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Windows EventRecordID, Sysmon ProcessGuid, Zeek uid, email Message-ID và database transaction ID.</li>
<li>NTFS $STANDARD_INFORMATION/$FILE_NAME MACB; FAT local time; EXIF DateTimeOriginal/GPS time.</li>
<li>NTP logs, hypervisor time, cloud UTC timestamps và clock-skew so với nguồn chuẩn.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>
<code>Get-TimeZone</code>, <code>w32tm /query /status</code>; Linux: <code>timedatectl</code> và <code>chronyc tracking</code>.</li>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Plaso/log2timeline để tạo super-timeline; Timesketch để lọc, tag và cộng tác.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Một file có mtime 09:00 nhưng process creation ở 09:05 không nhất thiết vô lý: file có thể bị timestomp, copy bảo toàn mtime, hoặc hai nguồn lệch clock. $FN time, USN Journal và Prefetch giúp quyết định.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Không tự động cộng timezone hai lần; nhiều cloud log đã là UTC dù giao diện hiển thị local.</li>
<li>Thứ tự trong file log không luôn là thứ tự xảy ra do buffering, queue và delayed ingestion.</li>
<li>Timestamp chứng minh thời điểm hệ thống ghi nhận, không tự nó chứng minh người thực hiện.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> NIST SP 800-92; Microsoft Windows Time Service documentation; Plaso documentation.</p>
</div>
</details>`;
