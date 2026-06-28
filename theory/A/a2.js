/* Theory — A2 (Appendix A). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["a2"]=`<h2>A2 — Incident Chronology</h2>

<div class="callout danger"><strong>Exam trap — MACB timestamps</strong><p><span class="en">Do not confuse <strong>Modified</strong> and <strong>Changed</strong>. Modified means file content changed. Changed means NTFS metadata changed, such as permissions, ownership, rename, or timestamp updates. Timestomping indicators are suspicious only after correlation with USN Journal, event logs, and other metadata.</span><span class="vi">Đừng nhầm lẫn <strong>Modified</strong> và <strong>Changed</strong>. Modified nghĩa là nội dung file thay đổi. Changed nghĩa là metadata NTFS thay đổi, ví dụ quyền truy cập, quyền sở hữu, đổi tên hoặc cập nhật timestamp. Dấu hiệu Timestomping chỉ đáng ngờ sau khi đối chiếu với USN Journal, event log và các metadata khác.</span></p></div>



<h3><span class="en">Timeline analysis workflow</span><span class="vi">Quy trình phân tích Timeline</span></h3>

<div class="table-wrap"><table><tr><th><span class="en">Timeline type</span><span class="vi">Loại Timeline</span></th><th><span class="en">Purpose</span><span class="vi">Mục đích</span></th><th><span class="en">When to use</span><span class="vi">Khi nào dùng</span></th></tr><tr><td>Super-timeline</td><td><span class="en">Combines many artefacts into one chronological view.</span><span class="vi">Kết hợp nhiều artefact thành một cái nhìn theo thứ tự thời gian.</span></td><td><span class="en">Broad unknown-scope investigations.</span><span class="vi">Điều tra phạm vi rộng, chưa xác định được phạm vi.</span></td></tr><tr><td>Targeted timeline</td><td><span class="en">Focuses on selected hosts, users, time windows, or artefact types.</span><span class="vi">Tập trung vào các host, người dùng, khoảng thời gian hoặc loại artefact đã chọn.</span></td><td><span class="en">Known incident window or specific hypothesis testing.</span><span class="vi">Khoảng thời gian sự cố đã biết hoặc kiểm tra giả thuyết cụ thể.</span></td></tr></table></div>

<ol><li><span class="en">Define the incident window and relevant timezone.</span><span class="vi">Xác định khoảng thời gian sự cố và múi giờ liên quan.</span></li><li><span class="en">Acquire logs and artefacts without modifying originals.</span><span class="vi">Thu thập log và artefact mà không sửa đổi bản gốc.</span></li><li><span class="en">Parse with tools such as Plaso / log2timeline.</span><span class="vi">Phân tích bằng các công cụ như Plaso / log2timeline.</span></li><li><span class="en">Normalise timestamps to UTC.</span><span class="vi">Chuẩn hóa tất cả timestamp về UTC.</span></li><li><span class="en">Review in Timesketch, Timeline Explorer, or spreadsheet tooling.</span><span class="vi">Xem xét trong Timesketch, Timeline Explorer, hoặc bảng tính.</span></li><li><span class="en">Tag key events: initial access, execution, persistence, lateral movement, exfiltration, containment.</span><span class="vi">Gắn nhãn các sự kiện quan trọng: initial access, execution, persistence, lateral movement, exfiltration, containment.</span></li></ol>

<div class="callout info"><strong>Common confusion:</strong><p><span class="en"><strong>Modified</strong> means file content changed. <strong>Changed</strong> means NTFS $STANDARD_INFORMATION metadata changed, such as rename, permission, ownership, or timestamp updates.</span><span class="vi"><strong>Modified</strong> nghĩa là nội dung file thay đổi. <strong>Changed</strong> nghĩa là metadata $STANDARD_INFORMATION của NTFS thay đổi, ví dụ đổi tên, quyền truy cập, quyền sở hữu hoặc cập nhật timestamp.</span></p></div>

<h3><span class="en">Timeline fundamentals</span><span class="vi">Nguyên tắc cơ bản của Timeline</span></h3><ul>

<li><strong>Purpose:</strong> <span class="en">Reconstruct what happened, in what order, which systems were affected, and how long the attacker had access.</span><span class="vi">Tái dựng những gì đã xảy ra, theo thứ tự nào, hệ thống nào bị ảnh hưởng và attacker đã có quyền truy cập bao lâu.</span></li>

<li><strong>Start early:</strong> <span class="en">Begin chronology during identification; do not wait until the end of analysis.</span><span class="vi">Bắt đầu xây dựng timeline trong giai đoạn nhận diện; không đợi đến cuối quá trình phân tích.</span></li>

<li><strong>Normalise time:</strong> <span class="en">Convert all timestamps to UTC and document source timezone / clock skew.</span><span class="vi">Chuyển đổi tất cả timestamp về UTC và ghi lại múi giờ nguồn / clock skew.</span></li>

<li><strong>Correlate sources:</strong> <span class="en">Firewall, proxy, DNS, DHCP, VPN, endpoint, Windows Event Logs, email logs, cloud logs, and analyst actions.</span><span class="vi">Tường lửa, proxy, DNS, DHCP, VPN, endpoint, Windows Event Logs, log email, log cloud và hành động của analyst.</span></li>

<li><strong>Tools:</strong> Plaso / log2timeline, Timesketch, Timeline Explorer, SIEM queries, <span class="en">Excel for small cases.</span><span class="vi">Excel cho các vụ nhỏ.</span></li>

</ul><h3><span class="en">Disk-image timestamp interpretation</span><span class="vi">Giải thích timestamp trong disk image</span></h3><div class="table-wrap"><table><tr><th><span class="en">Concept</span><span class="vi">Khái niệm</span></th><th><span class="en">CPIA-relevant detail</span><span class="vi">Chi tiết liên quan đến CPIA</span></th></tr><tr><td>FAT</td><td><span class="en">Stores timestamps in local time; timezone context is required.</span><span class="vi">Lưu timestamp theo giờ địa phương; cần có thông tin múi giờ.</span></td></tr><tr><td>NTFS</td><td><span class="en">Stores timestamps in UTC internally; Windows Explorer displays local time.</span><span class="vi">Lưu timestamp theo UTC nội bộ; Windows Explorer hiển thị giờ địa phương.</span></td></tr><tr><td>MACB</td><td>Modified, Accessed, Changed metadata, Born / Created.</td></tr><tr><td>$STANDARD_INFORMATION vs $FILE_NAME</td><td><span class="en">Compare both attributes to detect timestomping.</span><span class="vi">So sánh cả hai thuộc tính để phát hiện timestomping.</span></td></tr><tr><td>Clock skew</td><td><span class="en">Record system time difference during acquisition.</span><span class="vi">Ghi lại chênh lệch thời gian hệ thống khi thu thập bằng chứng.</span></td></tr></table></div><div class="callout warning"><strong>Timestomping indicators</strong><p><span class="en">Born / Created time later than Modified time is abnormal. Identical MACB values across multiple files can indicate timestamp manipulation, although legitimate mass-copy operations can also create patterns. Corroborate with other evidence (USN Journal, event logs, file system metadata) before concluding timestomping.</span><span class="vi">Thời gian Born / Created muộn hơn Modified là bất thường. Giá trị MACB giống nhau trên nhiều file có thể là dấu hiệu thao túng timestamp, dù các thao tác sao chép hàng loạt hợp lệ cũng tạo ra mẫu tương tự. Đối chiếu với bằng chứng khác (USN Journal, event log, metadata hệ thống file) trước khi kết luận timestomping.</span></p></div>

<p class="sub-heading"><span class="en">Common Confusions — Timelines</span><span class="vi">Nhầm lẫn thường gặp — Timelines</span></p>

<ul>

<li><strong>NTFS stores timestamps in UTC</strong>, <span class="en">but tools may display local time.</span><span class="vi">Nhưng các công cụ có thể hiển thị giờ địa phương.</span></li>

<li><strong>FAT stores local time</strong>, <span class="en">which can be ambiguous without timezone context.</span><span class="vi">có thể gây nhầm lẫn nếu không có thông tin múi giờ.</span></li>

<li><strong>Clock skew</strong> <span class="en">Must be documented rather than silently corrected.</span><span class="vi">Phải được ghi lại thay vì tự ý điều chỉnh.</span></li>

</ul>

<h3><span class="en">The Correlation Mindset</span><span class="vi">Tư duy Tương quan Bằng chứng</span></h3><p><span class="en">No single log source tells the complete story. The core IR analyst skill is correlating evidence across multiple sources to reconstruct events.</span><span class="vi">Không có nguồn log đơn lẻ nào kể được toàn bộ câu chuyện. Kỹ năng cốt lõi của analyst IR là tương quan bằng chứng từ nhiều nguồn để tái dựng sự kiện.</span></p>

<p class="sub-heading"><span class="en">Correlation Framework</span><span class="vi">Khung Tương quan</span></p><ol><li><strong>IDENTIFY</strong> — <span class="en">What event or alert triggered the investigation?</span><span class="vi">Sự kiện hay cảnh báo nào kích hoạt cuộc điều tra?</span></li><li><strong>PIVOT</strong> — <span class="en">What other log sources contain related data?</span><span class="vi">Những nguồn log nào khác chứa dữ liệu liên quan?</span></li><li><strong>NORMALISE</strong> — <span class="en">Align timestamps to UTC; map IP→host via DHCP; map host→user via authentication logs.</span><span class="vi">Căn chỉnh timestamp về UTC; ánh xạ IP→host qua DHCP; ánh xạ host→user qua log xác thực.</span></li><li><strong>RECONSTRUCT</strong> — <span class="en">Build a timeline across sources.</span><span class="vi">Xây dựng timeline xuyên suốt các nguồn.</span></li><li><strong>VALIDATE</strong> — <span class="en">Does the combined evidence support the hypothesis?</span><span class="vi">Bằng chứng tổng hợp có ủng hộ giả thuyết không?</span></li></ol>

<h3>Example Investigation Pivot</h3><pre>IDS alert (SMB exploit attempt)

  → Firewall log (confirm traffic allowed; NAT translation)

    → DHCP log (IP → MAC → hostname at that time)

      → Windows Event 4624 (who authenticated from that host?)

        → Windows Event 4688 (what process was created?)

          → Proxy log (did the host make outbound connections?)

            → DNS log (what domains were resolved?)</pre>


<h3 class="qz-theory"><span class="en">Timestamps, Epochs &amp; Time-zone Normalisation</span><span class="vi">Timestamp, epoch &amp; chuẩn hóa múi giờ</span></h3>
<p><span class="en">The most common cause of timeline skew is <strong>time zones</strong> (UTC vs local). Before correlating, normalise every source to one reference (usually UTC) and account for DST. Different applications also store time using different <strong>epochs</strong>; applying the wrong one yields nonsensical (often centuries-off) dates.</span><span class="vi">Nguyên nhân lệch timeline phổ biến nhất là <strong>múi giờ</strong> (UTC vs giờ địa phương). Trước khi đối chiếu, chuẩn hóa mọi nguồn về một mốc (thường UTC) và tính cả DST. Mỗi ứng dụng còn lưu thời gian theo <strong>epoch</strong> khác nhau; dùng sai sẽ cho ngày vô nghĩa (thường lệch hàng thế kỷ).</span></p>
<div class="table-wrap"><table><thead><tr><th>Format</th><th><span class="en">Epoch &amp; unit</span><span class="vi">Epoch &amp; đơn vị</span></th></tr></thead><tbody>
<tr><td>Unix time</td><td><span class="en">seconds since 1970-01-01 UTC</span><span class="vi">Giây kể từ 1970-01-01 UTC</span></td></tr>
<tr><td>Windows FILETIME</td><td><span class="en">100-nanosecond intervals since 1601-01-01 UTC</span><span class="vi">khoảng 100-nano-giây kể từ 1601-01-01 UTC</span></td></tr>
<tr><td>Chrome / WebKit</td><td><span class="en">microseconds since 1601-01-01</span><span class="vi">micro-giây kể từ 1601-01-01</span></td></tr>
<tr><td>Firefox (PRTime)</td><td><span class="en">microseconds since 1970-01-01</span><span class="vi">micro-giây kể từ 1970-01-01</span></td></tr></tbody></table></div>
<p><span class="en">EXIF <code>DateTimeOriginal</code> is local camera time with no zone — establish the device's timezone before comparing to UTC logs.</span><span class="vi">EXIF <code>DateTimeOriginal</code> là giờ máy ảnh, không có múi giờ — xác định múi giờ thiết bị trước khi so với log UTC.</span></p>

<h3><span class="en">NTFS MACB Times &amp; Timestomping</span><span class="vi">Thời gian MACB của NTFS &amp; Timestomping</span></h3>
<p><span class="en"><strong>MACB</strong> = <strong>M</strong>odified, <strong>A</strong>ccessed, metadata-<strong>C</strong>hanged (MFT entry), <strong>B</strong>orn (created). Each is stored in <em>both</em> the <code>$STANDARD_INFORMATION</code> ($SI) and <code>$FILE_NAME</code> ($FN) attributes of the MFT record.</span><span class="vi"><strong>MACB</strong> = <strong>M</strong>odified (sửa nội dung), <strong>A</strong>ccessed (truy cập), <strong>C</strong>hanged metadata (bản ghi MFT), <strong>B</strong>orn (tạo). Mỗi mốc lưu ở <em>cả</em> thuộc tính <code>$STANDARD_INFORMATION</code> ($SI) và <code>$FILE_NAME</code> ($FN) của bản ghi MFT.</span></p>
<div class="callout info"><strong><span class="en">Detecting timestomping</span><span class="vi">Phát hiện timestomping</span></strong><p><span class="en">Most tools alter the easily-writable $SI times but not $FN (updated by the OS, harder to forge). A mismatch — e.g. $SI older than $FN — strongly indicates manipulation.</span><span class="vi">Đa số công cụ sửa thời gian $SI (dễ ghi) nhưng không sửa $FN (do OS cập nhật, khó giả). Sự không khớp — vd $SI cũ hơn $FN — là dấu hiệu mạnh của thao túng.</span></p></div>

<h3><span class="en">Establishing Reliable Event Order</span><span class="vi">Xác lập thứ tự sự kiện đáng tin</span></h3>
<ul>
<li><strong><span class="en">Clock drift (no NTP):</span><span class="vi">Lệch đồng hồ (không NTP):</span></strong> <span class="en">Measure the offset against a known shared event and apply it as a documented correction — don't discard the data.</span><span class="vi">Đo độ lệch so với một sự kiện chung đã biết và áp dụng như một hiệu chỉnh có ghi chép — đừng loại bỏ dữ liệu.</span></li>
<li><strong><span class="en">Attacker clock tampering:</span><span class="vi">Kẻ tấn công chỉnh đồng hồ:</span></strong> <span class="en">Local timestamps become unreliable; corroborate with sources outside the attacker's control — network/central logs (own clocks), the NTFS <code>$LogFile</code>/<code>$UsnJrnl</code> and MFT record sequence.</span><span class="vi">Mốc thời gian cục bộ trở nên không tin cậy; đối chiếu với nguồn ngoài tầm kiểm soát của kẻ tấn công — log mạng/tập trung (đồng hồ riêng), <code>$LogFile</code>/<code>$UsnJrnl</code> của NTFS và trình tự bản ghi MFT.</span></li>
<li><strong><span class="en">USN change journal:</span><span class="vi">USN change journal:</span></strong> <span class="en"><code>$UsnJrnl</code> records sequential file-system operations with monotonically increasing USNs — a true order independent of (stompable) file timestamps.</span><span class="vi"><code>$UsnJrnl</code> ghi các thao tác hệ thống tệp tuần tự với số USN tăng đơn điệu — thứ tự thật, độc lập với mốc thời gian file (có thể bị stomp).</span></li>
<li><strong><span class="en">Tie-breaking:</span><span class="vi">Phá hòa:</span></strong> <span class="en">For events sharing a second-precision timestamp, use sub-second resolution or monotonic sequence numbers (event record IDs, USN entries).</span><span class="vi">Với các sự kiện trùng mốc ở mức giây, dùng độ phân giải dưới giây hoặc số trình tự tăng đơn điệu (event record ID, mục USN).</span></li></ul>
`;
