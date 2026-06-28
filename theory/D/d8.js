/* Theory — D8 (Appendix D). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d8"]=`<h2>D8 — Exfiltration of Data</h2><ul>

<li><span class="en">Exfiltration indicators: large outbound uploads, compression / encryption before transfer, rare destination, cloud-storage uploads, DNS tunneling, email attachments.</span><span class="vi">Chỉ báo đánh cắp dữ liệu: upload ra ngoài lớn, nén / mã hóa trước khi truyền, đích hiếm gặp, upload cloud storage, DNS tunneling, đính kèm email.</span></li>

<li><span class="en">Data staging often occurs before exfiltration: archives in temp / user folders, renamed files, 7zip / rar usage, PowerShell compression.</span><span class="vi">Dàn dựng dữ liệu thường xảy ra trước khi đánh cắp: archive trong thư mục temp / người dùng, file được đổi tên, dùng 7zip / rar, nén PowerShell.</span></li>

<li><span class="en">Sources: proxy, firewall, NetFlow, DNS, DLP, cloud audit logs, endpoint process / file telemetry.</span><span class="vi">Nguồn: proxy, tường lửa, NetFlow, DNS, DLP, log kiểm toán cloud, telemetry tiến trình / file endpoint.</span></li>

<li><span class="en">Check directionality and baseline: outbound bytes, session duration, destination reputation, user role, and business justification.</span><span class="vi">Kiểm tra chiều và baseline: byte ra ngoài, thời lượng phiên, danh tiếng đích, vai trò người dùng và lý do kinh doanh.</span></li>

</ul><h3>Cloud Storage Exfil and Statistical Detection</h3><ul><li><strong>Cloud storage exfiltration:</strong> Upload to Dropbox, OneDrive, Google Drive, AWS S3. Detect in O365 UAL: AnonymousLinkCreated before large outbound volume to cloud storage APIs.</li><li><strong>Shannon entropy for DNS tunneling:</strong> Calculate Shannon entropy of subdomain portion. Legitimate hostnames: ~3.5 bits / char. Base64-encoded data: ~5.0 bits / char. High entropy = data exfil via DNS.</li><li><strong>Volume anomaly:</strong> Baseline normal outbound bytes per host. Alert on significant spike to new / unknown destination, especially outside business hours.</li><li><strong>Data staging detection:</strong> Large internal file copies + archive creation (zip / rar/7z) just before network transfer. Detect via Sysmon Event 11 or DLP.</li></ul>

<h3>Exfiltration Techniques &amp; Indicators</h3>

<div class="table-wrap"><table>

<tr><th>Method</th><th>Description</th><th>Detection</th></tr>

<tr><td>HTTPS POST</td><td>Large data uploaded to external server</td><td>Unusual outbound bytes to new / unknown destination</td></tr>

<tr><td>DNS Tunneling</td><td>Data base64-encoded in subdomain queries</td><td>Long subdomain strings, high DNS query rate, queries to single domain</td></tr>

<tr><td>Email</td><td>Data attached / embedded in email</td><td>Large outbound email, O365 FileDownloaded before Send</td></tr>

<tr><td>Cloud Storage</td><td>Upload to Dropbox, OneDrive, Google Drive</td><td>Outbound to cloud storage APIs, AnonymousLinkCreated</td></tr>

<tr><td>ICMP</td><td>Data encoded in ping payload</td><td>High-frequency pings with large / non-standard payload</td></tr>

<tr><td>Covert channels</td><td>Data hidden in unused fields (IP ID, TCP seq)</td><td>Statistical analysis of protocol fields, requires deep inspection</td></tr>

</table></div>


<h3 class="qz-theory"><span class="en">Exfiltration of Data</span><span class="vi">Trích xuất dữ liệu</span></h3>
<ul>
<li><strong><span class="en">Volume &amp; direction:</span><span class="vi">Lưu lượng &amp; chiều:</span></strong> <span class="en">Normal clients download more than they upload; a large sustained <em>outbound</em> flow to an unusual destination inverts that ratio. A finance host uploading 20 GB to personal cloud storage at 3 a.m. is a strong exfil indicator.</span><span class="vi">Client bình thường tải xuống nhiều hơn tải lên; một luồng <em>đi ra</em> lớn kéo dài tới đích bất thường đảo ngược tỉ lệ. Host tài chính tải 20 GB lên cloud cá nhân lúc 3h sáng là dấu hiệu exfil mạnh.</span></li>
<li><strong>Staging:</strong> <span class="en">Attackers collect and compress/encrypt data into an archive on one host first (a sudden large, often password-protected RAR/ZIP) before sending.</span><span class="vi">Kẻ tấn công thu thập rồi nén/mã hóa dữ liệu thành archive trên một host trước (một RAR/ZIP lớn xuất hiện đột ngột, thường có mật khẩu) trước khi gửi.</span></li>
<li><strong><span class="en">Covert &amp; slow:</span><span class="vi">Ngầm &amp; chậm:</span></strong> <span class="en">DNS exfil encodes data in long, random subdomain labels to a single attacker zone (high volume to one domain). "Low and slow" trickles small amounts over long periods to stay under volume-based DLP/alerts — needs long-baseline statistical detection.</span><span class="vi">Exfil DNS mã hóa dữ liệu trong nhãn subdomain dài, ngẫu nhiên tới một zone của kẻ tấn công (lưu lượng cao tới một domain). "Low and slow" rỉ ra lượng nhỏ trong thời gian dài để nằm dưới DLP/cảnh báo theo lưu lượng — cần phát hiện thống kê đường nền dài.</span></li></ul>
`;
