/* Theory — E3 (Appendix E). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e3"]=`<h2>E3 — Windows File System Essentials</h2><ul>

<li><span class="en">Partitioning: MBR / GPT, volumes, file-system type, unallocated space.</span><span class="vi">Phân vùng: MBR / GPT, volume, loại hệ thống tập tin, không gian chưa phân bổ.</span></li>

<li><span class="en">FAT: file allocation table and directory entries; simpler metadata, local-time timestamp concerns.</span><span class="vi">FAT: bảng phân bổ tập tin và mục thư mục; metadata đơn giản hơn, lo ngại về timestamp giờ địa phương.</span></li>

<li><span class="en">NTFS: $MFT, $Bitmap, $LogFile, $UsnJrnl, $Secure, alternate data streams, ACLs / SIDs.</span><span class="vi">NTFS: $MFT, $Bitmap, $LogFile, $UsnJrnl, $Secure, luồng dữ liệu thay thế, ACL / SID.</span></li>

<li><span class="en">Unallocated space and file carving can recover deleted content but filenames / metadata may be lost.</span><span class="vi">Không gian chưa phân bổ và file carving có thể phục hồi nội dung đã xóa nhưng tên file / metadata có thể bị mất.</span></li>

<li><span class="en">EFS and BitLocker affect accessibility; collect keys / recovery material when available.</span><span class="vi">EFS và BitLocker ảnh hưởng đến khả năng truy cập; thu thập khóa / tài liệu phục hồi khi có.</span></li>

</ul>

<h3>Disk Partitioning</h3>

<div class="table-wrap"><table>

<tr><th>Scheme</th><th>Max Partitions</th><th>Max Disk</th><th>Notes</th></tr>

<tr><td>MBR (Master Boot Record)</td><td>4 primary (or 3+1 extended with logical)</td><td>2 TB</td><td>Legacy BIOS. Bootloader in first 446 bytes. Bootkits target MBR.</td></tr>

<tr><td>GPT (GUID Partition Table)</td><td>128 (Windows default)</td><td>18 EB</td><td>UEFI systems. Contains protective MBR. Partition GUIDs useful for forensic identification.</td></tr>

</table></div>

<h3>FAT — File Allocation Table</h3>

<ul>

<li><strong>Variants:</strong> <span class="en">FAT12 (floppy), FAT16 (old hard drives), FAT32 (USB / memory cards, max 4GB file), exFAT (flash media, no 4GB limit)</span><span class="vi">FAT12 (đĩa mềm), FAT16 (ổ cứng cũ), FAT32 (USB / thẻ nhớ, giới hạn file tối đa 4GB), exFAT (bộ nhớ flash, không giới hạn 4GB)</span></li>

<li><strong>Structure:</strong> <span class="en">Boot sector → FAT table (cluster allocation map) → Root directory entries → Data area</span><span class="vi">Boot sector → Bảng FAT (bản đồ phân bổ cluster) → Mục thư mục gốc → Vùng dữ liệu</span></li>

<li><strong>Directory entries:</strong> <span class="en">Fixed 32-byte records: 8.3 filename, attributes, first cluster, file size, created / modified / accessed timestamps</span><span class="vi">Bản ghi cố định 32 byte: tên file 8.3, thuộc tính, cluster đầu tiên, kích thước file, timestamp tạo / sửa đổi / truy cập</span></li>

<li><strong>Long File Names (LFN):</strong> <span class="en">Multiple consecutive entries with attribute 0x0F store names up to 255 chars</span><span class="vi">Nhiều mục liên tiếp với thuộc tính 0x0F lưu tên lên đến 255 ký tự</span></li>

<li><strong>Deletion:</strong> First byte of directory entry set to 0xE5. Data clusters marked free in FAT but NOT zeroed → recoverable until overwritten.</li>

<li><strong>No journaling:</strong> FAT has no transaction log. Fewer forensic artifacts than NTFS but easier to carve deleted files.</li>

</ul>

<h3>NTFS — Key Structures</h3>

<div class="table-wrap"><table>

<tr><th>Structure</th><th>Description</th><th>Forensic Value</th></tr>

<tr><td><code>$MFT</code></td><td>Master File Table — one 1KB record per file / folder containing all metadata</td><td>All MACB timestamps, file size, data runs, parent directory. Deleted files have entries marked "not in use" — recoverable.</td></tr>

<tr><td><code>$Bitmap</code></td><td>Tracks which clusters are allocated (1) or free (0)</td><td>Identify unallocated space for carving. Mismatch with MFT = potential hiding.</td></tr>

<tr><td><code>$LogFile</code></td><td>NTFS transaction journal — records metadata changes</td><td>Recover file names even after MFT record reuse.</td></tr>

<tr><td><code>$UsnJrnl</code></td><td>Update Sequence Number journal — change log for all files</td><td>Timeline of all file create/modify/delete/rename. Reconstruct attacker file activity.</td></tr>

<tr><td>ADS (Alternate Data Streams)</td><td>Additional data streams on any file: <code>file.txt:hidden</code></td><td>Malware hides payloads in ADS. Zone.Identifier stream marks downloaded files. Detect: <code>dir /r</code>.</td></tr>

<tr><td>EFS</td><td>Per-file NTFS encryption using user certificate</td><td>Files appear as random data without user private key or EFS recovery agent key.</td></tr>

<tr><td>BitLocker</td><td>Full volume encryption</td><td>Entire volume is random data. Need 48-digit recovery key. Obtain from AD or client before acquisition.</td></tr>

</table></div>

<h3>ACLs, SIDs and File Permissions</h3>

<ul>

<li><span class="en">Every NTFS file / folder has a security descriptor containing DACL (who can access), SACL (what to audit), owner SID</span><span class="vi">Mọi file / thư mục NTFS đều có security descriptor chứa DACL (ai có thể truy cập), SACL (những gì cần kiểm tra), SID chủ sở hữu</span></li>

<li><strong>Forensic check:</strong> <span class="en">Unexpected SID with Full Control on sensitive files = backdoor permission</span><span class="vi">SID không mong đợi có Full Control trên file nhạy cảm = quyền truy cập cửa hậu</span></li>

<li><strong>Unallocated space:</strong> Clusters marked free in $Bitmap but may contain deleted file data. Carve with Foremost, Scalpel, or Autopsy.</li>

</ul>

<h3>NTFS Timestamp Storage vs Display</h3>

<ul>

<li><span class="en">NTFS stores all timestamps in <strong>UTC</strong> (Universal Coordinated Time) in the $MFT.</span><span class="vi">NTFS lưu trữ tất cả timestamp theo <strong>UTC</strong> (Giờ phối hợp Quốc tế) trong $MFT.</span></li>

<li><span class="en">Windows Explorer displays timestamps in the <strong>local time</strong> of the system.</span><span class="vi">Windows Explorer hiển thị timestamp theo <strong>giờ địa phương</strong> của hệ thống.</span></li>

<li><span class="en">When mounting a forensic image on an analyst machine in a different timezone → timestamps display incorrectly → <strong>always convert to UTC before building a timeline</strong>.</span><span class="vi">Khi gắn ảnh pháp y trên máy điều tra viên ở múi giờ khác → timestamp hiển thị sai → <strong>luôn chuyển đổi sang UTC trước khi xây dựng timeline</strong>.</span></li>

<li><span class="en">FAT filesystem stores local time with no timezone metadata → ambiguous when the victim system's timezone is unknown.</span><span class="vi">FAT lưu giờ địa phương không có metadata múi giờ → không rõ ràng khi múi giờ hệ thống nạn nhân không biết.</span></li>

</ul>


<h3 class="qz-theory"><span class="en">NTFS Essentials — MFT, slack &amp; encryption</span><span class="vi">NTFS cốt lõi — MFT, slack &amp; mã hóa</span></h3>
<ul>
<li><strong>$MFT:</strong> <span class="en">The Master File Table holds one record per file (timestamps in $SI and $FN, size, attributes, run lists). Small files can be <em>resident</em> — data held inside the MFT entry itself; larger files are non-resident with run lists pointing to clusters.</span><span class="vi">Master File Table giữ một bản ghi cho mỗi file (mốc thời gian ở $SI và $FN, kích thước, thuộc tính, run list). File nhỏ có thể <em>resident</em> — dữ liệu nằm ngay trong bản ghi MFT; file lớn hơn non-resident với run list trỏ tới cluster.</span></li>
<li><strong><span class="en">Recovery surfaces:</span><span class="vi">Bề mặt khôi phục:</span></strong> <span class="en">Deleting just flags the MFT record and clusters free — data persists until overwritten (undelete/carving). <em>Unallocated space</em> holds remnants of deleted files; <em>file slack</em> (between file end and cluster end) can hold older data. The <code>$LogFile</code>/<code>$UsnJrnl</code> journal recent file-system operations.</span><span class="vi">Xóa chỉ đánh dấu bản ghi MFT và cluster là trống — dữ liệu còn tới khi bị ghi đè (undelete/carving). <em>Không gian chưa cấp phát</em> giữ tàn dư file đã xóa; <em>file slack</em> (giữa cuối file và cuối cluster) có thể giữ dữ liệu cũ. <code>$LogFile</code>/<code>$UsnJrnl</code> ghi nhật ký các thao tác hệ thống tệp gần đây.</span></li>
<li><strong>Encryption:</strong> <span class="en"><strong>BitLocker</strong> = full-volume — a dead image yields only ciphertext, so capture live while unlocked or obtain the recovery key (often in AD/Azure AD). <strong>EFS</strong> = per-file/folder, tied to a user's key/certificate.</span><span class="vi"><strong>BitLocker</strong> = toàn volume — image lúc tắt chỉ cho ciphertext, nên bắt lúc đang mở khóa hoặc lấy recovery key (thường trong AD/Azure AD). <strong>EFS</strong> = theo từng file/thư mục, gắn với khóa/chứng chỉ người dùng.</span></li></ul>
`;
