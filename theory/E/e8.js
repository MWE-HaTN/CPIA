/* Theory — E8 (Appendix E). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e8"]=`<h2>E8 — Storage Media</h2>

<div class="tier recall" id="e8-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Disk interfaces:</strong> <span class="en">PATA/IDE (legacy ribbon), SATA (modern consumer), SCSI/SAS (enterprise/servers).</span><span class="vi">PATA/IDE (cáp dẹt cũ), SATA (phổ thông hiện đại), SCSI/SAS (doanh nghiệp/máy chủ).</span></li>
<li><strong>HPA &amp; DCO:</strong> <span class="en">Hidden areas the OS doesn't see — the imager must be set to capture them or evidence is missed.</span><span class="vi">Vùng ẩn mà OS không thấy — công cụ imaging phải được bật để thu, nếu không sẽ sót bằng chứng.</span></li>
<li><strong>ATA password:</strong> <span class="en">A firmware-level drive password can lock the drive until it is unlocked.</span><span class="vi">Mật khẩu ổ ở mức firmware có thể khóa ổ cho tới khi được mở khóa.</span></li>
<li><strong>SSD ≠ magnetic:</strong> <span class="en">TRIM/garbage collection can wipe deleted blocks; wear-levelling remaps blocks — both hinder recovery.</span><span class="vi">TRIM/garbage collection có thể xóa block đã xóa; wear-levelling ánh xạ lại block — cả hai cản trở khôi phục.</span></li>
<li><strong>Removable solid-state media:</strong> <span class="en">USB pen drives and memory cards use flash too; controllers, wear-levelling and proprietary layouts can make physical acquisition and deleted-data recovery differ from magnetic disks.</span><span class="vi">USB/pen drive và thẻ nhớ cũng dùng flash; controller, wear-levelling và bố cục riêng khiến thu thập vật lý/khôi phục dữ liệu xóa khác đĩa từ.</span></li>
<li><strong>Full Disk Encryption:</strong> <span class="en">A dead image is unreadable without the key — image live while unlocked, or obtain the key.</span><span class="vi">Image "dead" không đọc được nếu thiếu khóa — image live khi còn mở khóa, hoặc lấy khóa.</span></li>
<li><strong>RAID:</strong> <span class="en">RAID 0 = striping (no redundancy); 1 = mirror; 5 = striping + distributed parity (survives one disk failure).</span><span class="vi">RAID 0 = striping (không dự phòng); 1 = mirror; 5 = striping + parity phân tán (sống sót khi mất 1 đĩa).</span></li>
<li><strong>NAS:</strong> <span class="en">Consider its file system / RAID layout and how to acquire it (often can't just pull one disk).</span><span class="vi">Cân nhắc file system / bố cục RAID của nó và cách thu thập (thường không thể chỉ rút một đĩa).</span></li>
</ul></div></div>

<details class="tier concept" id="e8-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Giao tiếp đĩa &amp; vùng ẩn (HPA/DCO)</h4>
<p>Biết loại giao tiếp (PATA/SATA/SCSI/SAS) để chọn đúng write blocker/adapter. <strong>HPA (Host Protected Area)</strong> và <strong>DCO (Device Configuration Overlay)</strong> là các vùng ẩn của ổ mà OS thường không thấy — kẻ tấn công có thể giấu dữ liệu ở đó. Công cụ imaging phải được cấu hình để <em>thu cả HPA/DCO</em>, nếu không sẽ bỏ sót.</p>

<h4>SSD vì sao khó khôi phục</h4>
<p>Khác đĩa từ: SSD dùng <strong>wear-levelling</strong> (phân tán ghi để đều hao mòn → controller ánh xạ lại block, dữ liệu cũ "biến mất" khỏi địa chỉ logic) và <strong>TRIM + garbage collection</strong> (chủ động xóa block đã đánh dấu trống ngay cả khi không ghi đè). Hệ quả: dữ liệu đã xóa trên SSD thường <em>không khôi phục được</em> như trên đĩa từ. <strong>USB/pen drive và thẻ nhớ</strong> cũng là flash; tùy controller, giao diện và việc hỗ trợ TRIM, logical image có thể không thấy các page dự phòng/đã remap, còn chip-off cần chuyên môn và cách tái dựng riêng.</p>

<h4>Mật khẩu ổ &amp; mã hóa toàn đĩa</h4>
<p><strong>ATA password</strong> (Security Feature Set) khóa ổ ở firmware. <strong>Full Disk Encryption</strong> (BitLocker, FileVault, LUKS): image "dead" sẽ chỉ là dữ liệu mã hóa — cần image <em>live</em> khi volume mở khóa, hoặc có khóa/recovery key.</p>

<h4>RAID &amp; NAS</h4>
<p><strong>RAID</strong> trải/nhân dữ liệu trên nhiều đĩa: 0 (striping, nhanh, không dự phòng), 1 (mirror), 5 (striping + parity phân tán — sống sót khi mất 1 đĩa nhờ tái dựng từ parity), 6 (2 parity), 10 (mirror+stripe). Khi thu thập, <em>không thể chỉ image một đĩa</em> — phải tái dựng cả set. <strong>NAS</strong> đóng gói RAID + file system riêng; thường acquire qua giao diện quản trị hoặc tháo cả cụm đĩa và tái dựng.</p>
</div></details>

<details class="tier reference" id="e8-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>RAID levels</h4>
<div class="table-wrap"><table>
<tr><th>Level</th><th>Layout</th><th>Fault tolerance</th></tr>
<tr><td>RAID 0</td><td>Striping</td><td>None (any disk fails = data lost)</td></tr>
<tr><td>RAID 1</td><td>Mirroring</td><td>Survives 1 disk</td></tr>
<tr><td>RAID 5</td><td>Striping + distributed parity</td><td>Survives 1 disk (rebuild from parity)</td></tr>
<tr><td>RAID 6</td><td>Striping + double parity</td><td>Survives 2 disks</td></tr>
<tr><td>RAID 10</td><td>Mirror + stripe</td><td>Survives 1 per mirror</td></tr>
</table></div>

<h4>Acquisition complications</h4>
<div class="table-wrap"><table>
<tr><th>Feature</th><th>Impact on acquisition</th></tr>
<tr><td>HPA / DCO</td><td>Hidden areas — enable capture or miss them</td></tr>
<tr><td>ATA password</td><td>Drive locked until unlocked</td></tr>
<tr><td>SSD TRIM / wear-levelling</td><td>Deleted data often unrecoverable</td></tr>
<tr><td>USB pen drive / memory card</td><td>Flash controller and proprietary mapping can complicate physical acquisition</td></tr>
<tr><td>Full Disk Encryption</td><td>Dead image unreadable without key</td></tr>
<tr><td>RAID / NAS</td><td>Must reassemble the set, not one disk</td></tr>
</table></div>

<h4>Disk interfaces</h4>
<div class="table-wrap"><table>
<tr><th>Interface</th><th>Typical use</th></tr>
<tr><td>PATA / IDE</td><td>Legacy</td></tr>
<tr><td>SATA</td><td>Modern consumer</td></tr>
<tr><td>SCSI / SAS</td><td>Servers / enterprise</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="e8-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Nhận diện interface/media, capacity, firmware lock, HPA/DCO và encryption.</li>
<li>Với RAID ghi disk order/stripe/parity/offset; image từng member rồi reconstruct copy.</li>
<li>Với SSD/USB/card cân nhắc TRIM, wear-leveling, controller và logical vs physical acquisition.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>PATA/SATA/SCSI/SAS identity; HPA/DCO sizes; SMART.</li>
<li>RAID metadata; NAS filesystem/share/audit; FDE state/key.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-impact">PRIVILEGED/IMPACT</span>Hardware write blocker/imager có log; vendor-neutral RAID reconstruction tool.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Một disk RAID5 không chứa file hoàn chỉnh liên tục; cần đúng order/stripe/parity để dựng volume.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>RAID không phải backup.</li>
<li>TRIM có thể chạy sau seizure nếu thiết bị còn powered.</li>
<li>Chip-off flash cần tái dựng controller mapping chuyên biệt.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> NIST media sanitization/acquisition guidance; storage vendor specifications.</p>
</div>
</details>`;
