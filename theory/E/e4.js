/* Theory — E4 (Appendix E). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e4"]=`<h2>E4 — Windows File Structures</h2>

<div class="tier recall" id="e4-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Prefetch (.pf):</strong> <span class="en">Evidence a program was EXECUTED — name, run count, last-run times.</span><span class="vi">Bằng chứng một chương trình ĐÃ CHẠY — tên, số lần chạy, lần chạy gần nhất.</span></li>
<li><strong>Shimcache / Amcache:</strong> <span class="en">Primarily program presence/inventory artefacts. Execution inferences depend on Windows version, fields and corroborating evidence.</span><span class="vi">Chủ yếu là artefact về sự hiện diện/inventory của chương trình. Suy luận thực thi phụ thuộc phiên bản Windows, trường dữ liệu và bằng chứng đối chiếu.</span></li>
<li><strong>Volume Shadow Copy (VSS):</strong> <span class="en">Snapshots of earlier file/registry state — recover data an attacker deleted/altered.</span><span class="vi">Snapshot trạng thái file/registry trước đó — khôi phục dữ liệu kẻ tấn công đã xóa/sửa.</span></li>
<li><strong>Restore points, profiles &amp; temp:</strong> <span class="en">System Restore Points preserve selected system state; user profiles and temporary folders hold per-user activity, downloads, staging and remnants.</span><span class="vi">System Restore Point giữ một phần trạng thái hệ thống; user profile và thư mục tạm chứa hoạt động theo user, file tải về, staging và dữ liệu sót.</span></li>
<li><strong>Registry hives:</strong> <span class="en">SYSTEM, SOFTWARE, SAM, SECURITY (machine) + NTUSER.DAT, UsrClass.dat (per-user).</span><span class="vi">SYSTEM, SOFTWARE, SAM, SECURITY (máy) + NTUSER.DAT, UsrClass.dat (theo user).</span></li>
<li><strong>Event logs (.evtx):</strong> <span class="en">Stored as Binary XML — need a parser, not plain text. Know key IDs (4624/4688/4672/4769/1102).</span><span class="vi">Lưu dạng Binary XML — cần parser, không phải text thường. Thuộc các ID chính (4624/4688/4672/4769/1102).</span></li>
<li><strong>Recycle Bin:</strong> <span class="en">$I file = metadata (original path, deletion time, size); $R file = the actual content.</span><span class="vi">File $I = metadata (đường dẫn gốc, thời điểm xóa, kích thước); file $R = nội dung thật.</span></li>
<li><strong>NTDS.dit:</strong> <span class="en">On a Domain Controller — the AD database containing ALL domain password hashes.</span><span class="vi">Trên Domain Controller — CSDL AD chứa TOÀN BỘ hash mật khẩu domain.</span></li>
<li><strong>Misc:</strong> <span class="en">hosts file (name overrides), pagefile/hiberfil (memory remnants), WMI OBJECTS.DATA (WMI persistence).</span><span class="vi">hosts file (ghi đè tên), pagefile/hiberfil (tàn dư bộ nhớ), WMI OBJECTS.DATA (duy trì qua WMI).</span></li>
</ul></div></div>

<details class="tier concept" id="e4-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Bằng chứng "đã chạy" (execution artefacts)</h4>
<p><strong>Prefetch</strong> (C:\\Windows\\Prefetch\\*.pf): khi được tạo, thường hỗ trợ mạnh cho việc chương trình đã chạy và có thể chứa run count/các mốc chạy tùy phiên bản. <strong>Shimcache</strong> (AppCompatCache) và <strong>Amcache.hve</strong> chủ yếu ghi nhận presence/inventory; ý nghĩa execution và timestamp thay đổi theo phiên bản/cách parse nên phải đối chiếu. <strong>UserAssist</strong> (registry, mã ROT13) hỗ trợ hoạt động chạy qua GUI kèm số lần trong các trường hợp phù hợp.</p>

<h4>Volume Shadow Copy</h4>
<p>VSS lưu snapshot định kỳ của volume → có thể khôi phục <strong>phiên bản trước của file/registry</strong> mà kẻ tấn công đã xóa hoặc sửa. <strong>System Restore Point</strong> dùng VSS để giữ một số file hệ thống, driver và registry phục vụ rollback; nó không phải backup đầy đủ dữ liệu người dùng. Lưu ý nhiều ransomware xóa shadow copy (<code>vssadmin delete shadows</code>) — chính việc đó là một chỉ dấu.</p>

<h4>User profiles &amp; temporary files</h4>
<p><strong>C:\Users\&lt;user&gt;</strong> gom artefact theo người dùng như NTUSER.DAT, Desktop, Downloads, AppData, browser data và Recent Items. <strong>%TEMP%</strong>, <strong>C:\Windows\Temp</strong> và cache có thể giữ file cài đặt, payload đã bung, tài liệu tạm hoặc staging; dữ liệu này dễ bị dọn/xoay vòng nên cần thu sớm và đối chiếu owner/timestamp.</p>

<h4>Registry hives</h4>
<p>Hive máy: <strong>SYSTEM</strong> (dịch vụ, driver, mounted devices), <strong>SOFTWARE</strong> (phần mềm cài đặt, Run keys), <strong>SAM</strong> (tài khoản cục bộ + hash), <strong>SECURITY</strong> (chính sách, LSA secrets). Hive user: <strong>NTUSER.DAT</strong> (HKCU) và <strong>UsrClass.dat</strong>. Đây là kho artefact persistence/execution rất giàu (xem E6).</p>

<h4>Event logs (.evtx) &amp; ID quan trọng</h4>
<p>Lưu dạng <strong>Binary XML</strong> nên phải dùng parser (Event Viewer, EvtxECmd, Chainsaw). ID hay gặp: <strong>4624</strong> logon thành công (kèm logon type), <strong>4625</strong> logon thất bại, <strong>4688</strong> tạo tiến trình (kèm command line nếu bật audit), <strong>4672</strong> đặc quyền nhạy cảm gán cho logon, <strong>4769</strong> yêu cầu Kerberos service ticket (Kerberoasting), <strong>1102</strong> log bị xóa.</p>

<h4>Recycle Bin, hosts, pagefile, NTDS, WMI</h4>
<p><strong>Recycle Bin</strong>: cặp <code>$I</code> (metadata) + <code>$R</code> (nội dung). <strong>hosts file</strong> (System32\\drivers\\etc): malware có thể thêm dòng để chuyển hướng tên miền. <strong>pagefile.sys / hiberfil.sys</strong>: chứa tàn dư bộ nhớ (chuỗi, khóa). <strong>NTDS.dit</strong> trên DC = mục tiêu giá trị cao (toàn bộ hash domain). <strong>WMI OBJECTS.DATA</strong>: kho WMI — nơi cài WMI event subscription để duy trì lén.</p>
</div></details>

<details class="tier reference" id="e4-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Execution / activity artefacts</h4>
<div class="table-wrap"><table>
<tr><th>Artefact</th><th>Evidence of</th></tr>
<tr><td>Prefetch (.pf)</td><td>Program executed (run count, last-run)</td></tr>
<tr><td>Shimcache (AppCompatCache)</td><td>Program presence/path/time</td></tr>
<tr><td>Amcache.hve</td><td>Program presence + SHA-1</td></tr>
<tr><td>UserAssist</td><td>GUI-launched programs (ROT13, counts)</td></tr>
<tr><td>Jump Lists</td><td>Recently accessed files per app</td></tr>
<tr><td>.lnk shortcuts</td><td>Target path/times (even after deletion)</td></tr>
</table></div>

<h4>Registry hives</h4>
<div class="table-wrap"><table>
<tr><th>Hive</th><th>Holds</th></tr>
<tr><td>SYSTEM</td><td>Services, drivers, MountedDevices, ControlSet</td></tr>
<tr><td>SOFTWARE</td><td>Installed software, Run keys</td></tr>
<tr><td>SAM</td><td>Local accounts + password hashes</td></tr>
<tr><td>SECURITY</td><td>Policy, LSA secrets</td></tr>
<tr><td>NTUSER.DAT / UsrClass.dat</td><td>Per-user settings (HKCU)</td></tr>
</table></div>

<h4>Key Windows Security event IDs</h4>
<div class="table-wrap"><table>
<tr><th>ID</th><th>Meaning</th></tr>
<tr><td>4624 / 4625</td><td>Logon success / failure (with logon type)</td></tr>
<tr><td>4688</td><td>New process created (command line if audited)</td></tr>
<tr><td>4672</td><td>Special privileges assigned to a logon</td></tr>
<tr><td>4768 / 4769 / 4771</td><td>Kerberos TGT / service ticket / pre-auth fail</td></tr>
<tr><td>1102</td><td>Audit log cleared</td></tr>
<tr><td>7045</td><td>New service installed (System log)</td></tr>
</table></div>

<h4>Other structures</h4>
<div class="table-wrap"><table>
<tr><th>Item</th><th>Note</th></tr>
<tr><td>Volume Shadow Copy</td><td>Earlier file/registry versions</td></tr>
<tr><td>System Restore Point</td><td>Selected system files, drivers and registry state for rollback</td></tr>
<tr><td>User profiles</td><td>Per-user hives, AppData, downloads, browser and recent activity</td></tr>
<tr><td>Temporary files</td><td>Short-lived payload, installer, cache and staging remnants</td></tr>
<tr><td>Recycle Bin $I / $R</td><td>$I metadata, $R content</td></tr>
<tr><td>hosts file</td><td>Name-resolution overrides (abuse)</td></tr>
<tr><td>pagefile.sys / hiberfil.sys</td><td>Memory remnants on disk</td></tr>
<tr><td>NTDS.dit</td><td>AD database — all domain hashes</td></tr>
<tr><td>WMI OBJECTS.DATA</td><td>WMI repository (subscription persistence)</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="e4-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Dựng execution timeline từ Prefetch, Amcache/Shimcache, UserAssist, LNK/Jump List và EVTX.</li>
<li>So VSS/Restore Point với current state; parse registry hives và Recycle Bin.</li>
<li>Thu profile/temp/pagefile/hiberfil/NTDS/WMI theo scope, bảo vệ credential.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Prefetch run count/times/files; $I/$R; EVTX record ID/provider/fields.</li>
<li>SYSTEM/SOFTWARE/SAM/SECURITY/NTUSER; OBJECTS.DATA; hosts; shadow copies.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-impact">PRIVILEGED/IMPACT</span>PECmd/AmcacheParser/LECmd/JLECmd/EvtxECmd; <code>vssadmin list shadows</code>.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Shimcache thường hỗ trợ suy luận presence mạnh hơn execution; Prefetch/UserAssist/4688 phù hợp đồng thời sẽ nâng confidence rằng chương trình đã chạy, nhưng vẫn cần xem version, policy và field cụ thể.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Artefact semantics thay đổi theo Windows version/config.</li>
<li>Restore Point không phải full user backup.</li>
<li>Event log có thể overwrite/clear; VSS có thể giữ bản cũ.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> Microsoft artefact documentation; Eric Zimmerman tools; SANS Windows forensic references.</p>
</div>
</details>`;
