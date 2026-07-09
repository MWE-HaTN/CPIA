/* Theory — E11 (Appendix E). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e11"]=`<h2>E11 — Malware Behaviours &amp; Anti-Forensics</h2>

<div class="tier recall" id="e11-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Timestomping:</strong> <span class="en">Faking file timestamps to blend in — detect by comparing $SI vs $FN in the MFT.</span><span class="vi">Giả mạo mốc thời gian file để hòa lẫn — phát hiện bằng so $SI vs $FN trong MFT.</span></li>
<li><strong>Log/Prefetch clearing:</strong> <span class="en">Disabling Defender, clearing event logs (Event 1102), deleting Prefetch = anti-forensics / defense evasion.</span><span class="vi">Tắt Defender, xóa event log (Event 1102), xóa Prefetch = chống điều tra / né phòng thủ.</span></li>
<li><strong>NTFS ADS:</strong> <span class="en">Alternate Data Streams hide data in an "invisible" stream that a normal directory listing won't show.</span><span class="vi">Alternate Data Streams giấu dữ liệu trong stream "vô hình" mà liệt kê thư mục thường không thấy.</span></li>
<li><strong>Steganography:</strong> <span class="en">Hiding data inside another file (e.g. an image) to conceal it.</span><span class="vi">Giấu dữ liệu bên trong một file khác (vd ảnh) để che giấu.</span></li>
<li><strong>Obfuscation / encryption / packing:</strong> <span class="en">Encode strings, encrypt config, pack the binary to defeat static analysis &amp; signatures.</span><span class="vi">Mã hóa chuỗi, mã hóa config, pack binary để vô hiệu phân tích tĩnh &amp; chữ ký.</span></li>
<li><strong>Covert storage:</strong> <span class="en">ADS, slack space, registry blobs, the WMI repository — hide payloads/config off the obvious path.</span><span class="vi">ADS, slack space, blob trong registry, kho WMI — giấu payload/config ngoài đường dẫn lộ liễu.</span></li>
<li><strong>Wipers / data-erasure apps:</strong> <span class="en">Attempt to destroy or overwrite data. Recoverability depends on media, method, coverage, backups and storage behaviour.</span><span class="vi">Cố phá hủy hoặc ghi đè dữ liệu. Khả năng khôi phục còn phụ thuộc loại media, phương pháp, mức bao phủ, backup và hành vi storage.</span></li>
</ul></div></div>

<details class="tier concept" id="e11-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Anti-forensics — che giấu &amp; phá dấu vết</h4>
<p>Mục tiêu của kẻ tấn công là làm analyst khó điều tra: <strong>timestomping</strong> (đổi mốc thời gian — bắt bằng $SI vs $FN), <strong>xóa/tắt log</strong> (Event 1102 = log cleared, tắt Defender, xóa Prefetch), <strong>steganography</strong> (giấu trong ảnh), và <strong>wiper</strong> (ghi đè để không khôi phục được). Bản thân các hành vi này lại là <em>chỉ dấu</em> (vd Event 1102, vssadmin delete shadows).</p>

<h4>NTFS Alternate Data Streams (ADS)</h4>
<p>NTFS cho phép một file có nhiều "stream" dữ liệu; stream phụ (<code>file.txt:hidden.exe</code>) <strong>không hiện trong liệt kê thư mục thông thường</strong> và không tính vào kích thước hiển thị. Malware giấu payload ở đây; phát hiện bằng <code>dir /r</code>, Streams.exe, hoặc tool forensic. Cũng lưu ý <strong>Zone.Identifier</strong> ADS = Mark-of-the-Web (file tải từ internet).</p>

<h4>Obfuscation / encryption / password protection</h4>
<p>Để chống phân tích tĩnh và chữ ký: <strong>obfuscate</strong> chuỗi (XOR, Base64 sửa đổi), <strong>mã hóa</strong> config/C2, <strong>pack</strong> binary (UPX, Themida), <strong>đặt mật khẩu</strong> cho archive chứa payload. Phân tích động (cho chạy trong lab) thường buộc nó tự bung.</p>

<h4>Covert storage &amp; covert communication</h4>
<p><strong>Covert storage</strong>: ADS, file slack, blob nhị phân trong registry, kho WMI — giấu payload/config. <strong>Covert communication</strong>: C2/recon/exfil qua kênh ngầm (DNS tunnelling, ICMP, domain fronting, dùng dịch vụ hợp lệ như paste site/cloud) để hòa vào lưu lượng thường (xem D5–D8).</p>
</div></details>

<details class="tier reference" id="e11-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Anti-forensic techniques</h4>
<div class="table-wrap"><table>
<tr><th>Technique</th><th>Goal</th><th>Detection</th></tr>
<tr><td>Timestomping</td><td>Hide file timing</td><td>$SI vs $FN mismatch</td></tr>
<tr><td>Log clearing / disable AV</td><td>Remove evidence</td><td>Event 1102, gaps, 7045/4719</td></tr>
<tr><td>NTFS ADS</td><td>Hide data in a stream</td><td>dir /r, Streams.exe</td></tr>
<tr><td>Steganography</td><td>Hide data in carrier file</td><td>Entropy/format anomalies, stego tools</td></tr>
<tr><td>Wiper / secure-delete</td><td>Destroy data</td><td>Overwrite patterns, missing data</td></tr>
</table></div>

<h4>Concealment categories</h4>
<div class="table-wrap"><table>
<tr><th>Category</th><th>Examples</th></tr>
<tr><td>Obfuscation</td><td>XOR/Base64 strings, encoded config</td></tr>
<tr><td>Encryption / packing</td><td>Encrypted C2, UPX/Themida</td></tr>
<tr><td>Password protection</td><td>Password-protected archive</td></tr>
<tr><td>Covert storage</td><td>ADS, slack, registry blob, WMI repo</td></tr>
<tr><td>Covert comms</td><td>DNS tunnel, ICMP, domain fronting</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="e11-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Phân loại concealment, destruction và communication; xác định mục tiêu anti-forensics.</li>
<li>Tìm encryption/stego/password/obfuscation, ADS/slack/hidden area, log wipe/timestomp.</li>
<li>Correlate absence/anomaly với central log, VSS, USN và memory.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>ADS name/size, changed timestamps, wiping tool, cleared event 1102.</li>
<li>Encoded config, covert DNS/ICMP, encrypted archive và stego carrier.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>
<code>dir /r</code>, <code>Get-Item -Stream *</code>; entropy/strings và timeline comparison.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>ADS hợp lệ được Windows dùng; executable ADS + autorun/process evidence mới đáng ngờ.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Encryption có legitimate use.</li>
<li>Secure erase có thể không recover được; evidence của erasure vẫn quan trọng.</li>
<li>Timestamp mismatch có nhiều nguyên nhân ngoài timestomp.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> MITRE Defense Evasion; NTFS documentation; NIST log guidance.</p>
</div>
</details>`;
