/* Theory — E8 (Appendix E). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e8"]=`<h2>E8 — Storage Media</h2>

<h3>HPA and DCO</h3>

<ul><li><strong>Host Protected Area (HPA):</strong> Hidden disk area normally inaccessible to the operating system; may hide data from ordinary imaging.</li><li><strong>Device Configuration Overlay (DCO):</strong> Firmware-level configuration that can report a smaller apparent disk size than physical capacity.</li><li><strong>Forensic implication:</strong> Acquisition tools should detect and document HPA / DCO so evidence scope is defensible.</li></ul>

<ul>

<li><span class="en">Hard disk interfaces: PATA / SATA / SCSI / SAS; understand physical / logical acquisition differences.</span><span class="vi">Giao diện ổ cứng: PATA / SATA / SCSI / SAS; hiểu sự khác biệt giữa thu thập vật lý / logic.</span></li>

<li><span class="en">HPA / DCO can hide disk areas; forensic tools should detect / report them.</span><span class="vi">HPA / DCO có thể ẩn vùng đĩa; công cụ điều tra số nên phát hiện / báo cáo chúng.</span></li>

<li><span class="en">Password protection and full-disk encryption can block acquisition without keys.</span><span class="vi">Bảo vệ mật khẩu và mã hóa toàn đĩa có thể chặn việc thu thập nếu không có khóa.</span></li>

<li><span class="en">SSDs / flash: wear levelling and TRIM affect deleted-data recovery.</span><span class="vi">SSD / flash: cân bằng ghi (wear levelling) và TRIM ảnh hưởng đến khả năng phục hồi dữ liệu đã xóa.</span></li>

<li><span class="en">RAID: know levels, parity / mirroring / striping, and need for controller / order metadata.</span><span class="vi">RAID: nắm các cấp độ, parity / mirroring / striping và yêu cầu metadata bộ điều khiển / thứ tự.</span></li>

<li><span class="en">NAS: network shares, snapshots, logs, user permissions, and remote acquisition considerations.</span><span class="vi">NAS: chia sẻ mạng, snapshot, log, quyền người dùng và các lưu ý thu thập từ xa.</span></li>

</ul>

<p class="sub-heading">HPA and DCO Explained</p>

<div class="table-wrap"><table>

<tr><th>Feature</th><th>Meaning</th><th>Forensic implication</th></tr>

<tr><td>HPA — Host Protected Area</td><td>A disk area hidden from the operating system by drive configuration.</td><td>May hide data from normal acquisition if the tool does not detect it.</td></tr>

<tr><td>DCO — Device Configuration Overlay</td><td>Drive-level configuration that can reduce apparent disk size or expose / disable features.</td><td>Can conceal sectors and must be reported during forensic acquisition.</td></tr>

</table></div>

<div class="callout warning"><strong>Exam tip:</strong> if the physical disk size does not match expected capacity, consider HPA / DCO and document tool findings.</div>

<h3>RAID Levels and Full Disk Encryption</h3><div class="table-wrap"><table><tr><th>RAID Level</th><th>Redundancy</th><th>Forensic Approach</th></tr><tr><td>RAID 0 (Striping)</td><td>None — any disk failure = total loss</td><td>Must acquire ALL disks; reconstruct RAID before analysis</td></tr><tr><td>RAID 1 (Mirroring)</td><td>Any one disk survives</td><td>Image either disk — mirrors are identical. Both should hash identically.</td></tr><tr><td>RAID 5 (Stripe + Parity)</td><td>Any one disk failure tolerated</td><td>Acquire all disks; reconstruct with RAID tools before evidence analysis</td></tr><tr><td>RAID 6 (Dual Parity)</td><td>Any two disk failures tolerated</td><td>Same approach as RAID 5 — more resilient</td></tr></table></div><ul><li><strong>BitLocker (Windows FDE):</strong> Volume appears as random data without decryption key. Recovery key (48 digits) stored in AD or printed. Obtain BEFORE acquisition. In memory dumps, BitLocker VMK may be extractable.</li><li><strong>VeraCrypt / TrueCrypt:</strong> Cross-platform FDE — no key escrow. If live system, image while decrypted. Check memory for mounted container keys.</li></ul>
<h3 class="qz-theory"><span class="en">Storage Media &amp; RAID</span><span class="vi">Phương tiện lưu trữ &amp; RAID</span></h3>
<ul>
<li><strong>SSD:</strong> <span class="en"><strong>wear-levelling</strong> remaps logical blocks to changing physical cells and <strong>TRIM</strong>/garbage collection can zero deleted blocks soon after deletion — even behind a write blocker — making "deleted file" recovery far less reliable than HDDs.</span><span class="vi"><strong>wear-levelling</strong> ánh xạ lại khối logic tới cell vật lý thay đổi và <strong>TRIM</strong>/garbage collection có thể zero khối đã xóa ngay sau khi xóa — kể cả sau write blocker — khiến khôi phục "file đã xóa" kém tin cậy hơn HDD.</span></li>
<li><strong>HPA/DCO:</strong> <span class="en">Firmware areas that hide sectors from the OS by reducing the reported size — a thorough imager detects/removes them to capture the full physical disk. An <strong>ATA password</strong> can lock the drive until unlocked.</span><span class="vi">Vùng firmware ẩn sector khỏi OS bằng cách giảm dung lượng báo cáo — trình tạo image kỹ lưỡng phát hiện/gỡ chúng để bắt toàn bộ đĩa vật lý. <strong>Mật khẩu ATA</strong> có thể khóa ổ tới khi mở khóa.</span></li></ul>
<div class="table-wrap"><table><thead><tr><th>RAID</th><th><span class="en">Behaviour / fault tolerance</span><span class="vi">Hành vi / chịu lỗi</span></th></tr></thead><tbody>
<tr><td>0</td><td><span class="en">Striping, no redundancy — any disk fails = total loss</span><span class="vi">Striping, không dự phòng — hỏng đĩa bất kỳ = mất hết</span></td></tr>
<tr><td>1</td><td><span class="en">Mirroring</span><span class="vi">Mirror</span></td></tr>
<tr><td>5</td><td><span class="en">Striping + distributed parity — survives one disk failure</span><span class="vi">Striping + parity phân tán — chịu được một đĩa hỏng</span></td></tr>
<tr><td>10</td><td><span class="en">Mirror + stripe</span><span class="vi">Mirror + stripe</span></td></tr></tbody></table></div>
<p><span class="en">For acquisition you often must reconstruct the array; <strong>NAS</strong> units use Linux filesystems + RAID — decide between imaging disks or a live/logical acquisition.</span><span class="vi">Khi thu thập thường phải tái dựng mảng; <strong>NAS</strong> dùng hệ thống tệp Linux + RAID — chọn giữa image từng đĩa hay thu thập live/logic.</span></p>
`;
