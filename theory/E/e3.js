/* Theory — E3 (Appendix E). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e3"]=`<h2>E3 — Windows File System Essentials</h2>

<div class="tier recall" id="e3-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Partitioning:</strong> <span class="en">MBR (legacy, ≤2 TB, 4 primary) vs GPT (modern, UEFI). The partition table maps volumes on the disk.</span><span class="vi">MBR (cũ, ≤2 TB, 4 primary) vs GPT (mới, UEFI). Bảng phân vùng ánh xạ các volume trên đĩa.</span></li>
<li><strong>FAT:</strong> <span class="en">File Allocation Table tracks cluster chains; directory entries hold name, size, cluster, timestamps (2-sec resolution).</span><span class="vi">File Allocation Table theo dõi chuỗi cluster; directory entry chứa tên, kích thước, cluster, mốc thời gian (độ phân giải 2 giây).</span></li>
<li><strong>NTFS $MFT:</strong> <span class="en">The Master File Table — one record per file with metadata; small files are resident inside the record.</span><span class="vi">Master File Table — mỗi file một record kèm metadata; file nhỏ nằm "resident" ngay trong record.</span></li>
<li><strong>NTFS $Bitmap:</strong> <span class="en">Tracks which clusters are allocated vs free.</span><span class="vi">$Bitmap theo dõi cluster nào đã cấp phát vs còn trống.</span></li>
<li><strong>ACLs &amp; SIDs:</strong> <span class="en">NTFS permissions are an ACL of ACEs; each principal (user/group) is a SID.</span><span class="vi">Quyền NTFS là một ACL gồm các ACE; mỗi principal (user/group) là một SID.</span></li>
<li><strong>Deleted ≠ necessarily gone:</strong> <span class="en">Deletion commonly marks metadata/clusters reusable; remnants may persist until reuse, TRIM or other storage behaviour removes them. Recovery is not guaranteed.</span><span class="vi">Xóa thường đánh dấu metadata/cluster có thể tái sử dụng; tàn dư có thể còn cho tới khi bị tái dùng, TRIM hoặc cơ chế storage khác loại bỏ. Không bảo đảm khôi phục được.</span></li>
<li><strong>Encryption:</strong> <span class="en">EFS encrypts individual files/folders per user; BitLocker encrypts the whole volume.</span><span class="vi">EFS mã hóa từng file/thư mục theo user; BitLocker mã hóa cả volume.</span></li>
</ul></div></div>

<details class="tier concept" id="e3-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Phân vùng đĩa</h4>
<p><strong>MBR</strong>: bảng phân vùng cũ, tối đa ~2 TB, 4 phân vùng primary. <strong>GPT</strong>: hiện đại, dùng với UEFI, nhiều phân vùng, có bản sao dự phòng. Bảng phân vùng cho biết các volume nằm ở đâu — bước đầu khi phân tích đĩa.</p>

<h4>FAT vs NTFS</h4>
<p><strong>FAT</strong>: đơn giản, dùng bảng cấp phát (FAT) theo dõi chuỗi cluster; directory entry chứa metadata cơ bản, timestamp độ phân giải 2 giây (giờ địa phương). <strong>NTFS</strong>: dùng <strong>$MFT</strong> — mỗi file một record chứa thuộc tính ($STANDARD_INFORMATION, $FILE_NAME, $DATA). File rất nhỏ được lưu <strong>resident</strong> ngay trong MFT record (không tốn cluster riêng). <strong>$Bitmap</strong> cho biết cluster nào đang dùng.</p>

<h4>ACL &amp; SID</h4>
<p>Quyền truy cập NTFS = một <strong>ACL</strong> (danh sách các <strong>ACE</strong> — cho phép/từ chối). Mỗi user/group được định danh bằng một <strong>SID</strong> (không phải tên). Khi phân tích, ánh xạ SID → tài khoản giúp biết ai có quyền gì (xem thêm B9).</p>

<h4>Unallocated space &amp; file carving</h4>
<p>Khi xóa file thông thường, NTFS đánh dấu metadata/cluster có thể tái sử dụng; một phần nội dung <em>có thể</em> còn trong unallocated space cho tới khi bị tái dùng hoặc bị TRIM/garbage collection và cơ chế khác xử lý. <strong>File carving</strong> quét dữ liệu thô theo signature/structure nhưng có thể mất filename/path/timestamp, bỏ sót file phân mảnh hoặc sinh false positive. <strong>File slack</strong> cũng có thể chứa tàn dư, tùy cách ghi và media.</p>

<h4>EFS vs BitLocker</h4>
<p><strong>EFS</strong>: mã hóa <em>từng file/thư mục</em> gắn với khóa của user — image đĩa vẫn thấy file nhưng không đọc được nội dung nếu thiếu khóa. <strong>BitLocker</strong>: mã hóa <em>toàn bộ volume</em> — image "dead" cần khóa khôi phục; nên image <strong>live</strong> khi volume còn mở khóa.</p>
</div></details>

<details class="tier reference" id="e3-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>FAT vs NTFS</h4>
<div class="table-wrap"><table>
<tr><th></th><th>FAT / exFAT</th><th>NTFS</th></tr>
<tr><td>Core structure</td><td>File Allocation Table + directory entries</td><td>$MFT (one record per file)</td></tr>
<tr><td>Free-space map</td><td>FAT entries</td><td>$Bitmap</td></tr>
<tr><td>Permissions</td><td>None (basic)</td><td>ACLs (ACE) with SIDs</td></tr>
<tr><td>Small files</td><td>Always use clusters</td><td>Resident in MFT</td></tr>
<tr><td>Timestamps</td><td>2-sec, local time</td><td>100-ns MACB ($SI/$FN)</td></tr>
</table></div>

<h4>Key NTFS metafiles</h4>
<div class="table-wrap"><table>
<tr><th>File</th><th>Holds</th></tr>
<tr><td>$MFT</td><td>Record of every file + metadata</td></tr>
<tr><td>$Bitmap</td><td>Allocated vs free clusters</td></tr>
<tr><td>$LogFile / $UsnJrnl</td><td>Transaction / change journals</td></tr>
</table></div>

<h4>Encryption &amp; recovery concepts</h4>
<div class="table-wrap"><table>
<tr><th>Concept</th><th>Meaning</th></tr>
<tr><td>EFS</td><td>Per-file/folder encryption tied to a user</td></tr>
<tr><td>BitLocker</td><td>Full-volume encryption (needs key for dead image)</td></tr>
<tr><td>Unallocated space</td><td>Freed clusters holding recoverable deleted data</td></tr>
<tr><td>File carving</td><td>Recover files by signature, ignoring metadata</td></tr>
<tr><td>File slack</td><td>Leftover data after a file's end in its last cluster</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="e3-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Parse partition table/filesystem geometry rồi xác định allocated/unallocated/slack.</li>
<li>Trên NTFS theo MFT record, attributes, data runs, $Bitmap, $LogFile và $UsnJrnl.</li>
<li>Carve theo signature rồi xác minh structure/context; map SID/ACL và encryption.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>MBR/GPT, boot sector; FAT directory/cluster chain; NTFS $MFT/$Bitmap.</li>
<li>MACB, resident/non-resident data, ADS, deleted flag, EFS/BitLocker metadata.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Autopsy/TSK: <code>mmls</code>, <code>fsstat</code>, <code>fls</code>, <code>icat</code>.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Carved JPEG khôi phục nội dung nhưng mất filename/path/timestamps; MFT record còn lại cung cấp context mạnh hơn.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>SMF trong README có khả năng là typo của MFT; nên học MFT.</li>
<li>File carving có false positive và fragment.</li>
<li>Unallocated không đồng nghĩa dữ liệu nguyên vẹn, đặc biệt SSD/TRIM.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> Microsoft NTFS documentation; The Sleuth Kit; FAT specification.</p>
</div>
</details>`;
