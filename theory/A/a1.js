/* Theory — A1 (Appendix A). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["a1"]=`<h2>A1 — Engagement Lifecycle Management</h2>

<div class="tier recall" id="a1-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>IR lifecycle:</strong> <span class="en">Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned (SANS PICERL).</span><span class="vi">Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned (mô hình SANS PICERL).</span></li>
<li><strong>Why IR matters:</strong> <span class="en">Limit damage, preserve admissible evidence, restore service, meet legal/regulatory duties, improve controls afterwards.</span><span class="vi">Giảm thiệt hại, bảo toàn bằng chứng được tòa chấp nhận, khôi phục dịch vụ, làm tròn nghĩa vụ pháp lý, và cải thiện kiểm soát sau đó.</span></li>
<li><strong>Preparation = before the incident:</strong> <span class="en">Policies, playbooks, logging/SIEM coverage, NTP sync, contact tree, escalation matrix, evidence kits.</span><span class="vi">Chính sách, playbook, độ phủ log/SIEM, đồng bộ NTP, sơ đồ liên lạc, ma trận leo thang, bộ kit thu thập bằng chứng.</span></li>
<li><strong>Order of volatility:</strong> <span class="en">Collect MOST volatile first: CPU/registers/cache → RAM → network state → disk → logs → backups/archive (RFC 3227).</span><span class="vi">Thu thứ DỄ MẤT trước: CPU/registers/cache → RAM → trạng thái mạng → disk → log → backup/lưu trữ (RFC 3227).</span></li>
<li><strong>Safe malware handling:</strong> <span class="en">Isolate, hash the sample first, store in a password-protected archive, never upload to a public sandbox without client approval.</span><span class="vi">Cô lập, hash mẫu trước, lưu trong archive có mật khẩu, không bao giờ upload lên sandbox công khai khi chưa được khách hàng đồng ý.</span></li>
<li><strong>System-log limits:</strong> <span class="en">Logs may be missing, rotated, disabled, overwritten, tampered with, or wrongly timestamped — corroborate.</span><span class="vi">Log có thể thiếu, bị xoay vòng, bị tắt, ghi đè, can thiệp, hoặc sai mốc thời gian — phải đối chiếu.</span></li>
<li><strong>Default approach:</strong> <span class="en">Preserve evidence before powering off, deleting malware or changing a system. Immediate, documented containment may take priority when ongoing harm outweighs evidential loss.</span><span class="vi">Mặc định phải bảo toàn bằng chứng trước khi tắt máy, xóa malware hoặc thay đổi hệ thống. Containment tức thời có ghi nhận có thể được ưu tiên khi thiệt hại đang tiếp diễn lớn hơn phần bằng chứng có thể mất.</span></li>
</ul></div></div>

<details class="tier concept" id="a1-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>6 giai đoạn ứng phó sự cố</h4>
<ol class="num-list">
<li><span class="num">01</span><div><strong>Preparation</strong> — Xây chính sách IR, playbook, danh sách liên hệ, hạ tầng ghi log <em>trước</em> khi sự cố xảy ra. Đây là trách nhiệm của khách hàng/tổ chức; chuẩn bị tốt quyết định phần lớn chất lượng ứng phó.</div></li>
<li><span class="num">02</span><div><strong>Identification</strong> — Phát hiện và xác nhận có thực sự là sự cố không (tránh false positive). Bắt đầu ghi <em>timeline</em> ngay từ thời điểm này.</div></li>
<li><span class="num">03</span><div><strong>Containment</strong> — Ngăn thiệt hại lan rộng <em>trong khi vẫn bảo toàn bằng chứng</em>. Chia hai mức: <strong>ngắn hạn</strong> (cô lập nhanh, vd rút cáp mạng / chuyển sang VLAN cách ly) và <strong>dài hạn</strong> (vá lỗi, dựng lại hệ thống sạch song song).</div></li>
<li><span class="num">04</span><div><strong>Eradication</strong> — Loại bỏ malware, tài khoản lạ, cơ chế duy trì và <em>nguyên nhân gốc</em>. Thông thường thực hiện sau khi đã thu đủ bằng chứng cần thiết; có thể phải hành động sớm hơn nếu rủi ro vận hành/thiệt hại đang tiếp diễn đòi hỏi.</div></li>
<li><span class="num">05</span><div><strong>Recovery</strong> — Đưa hệ thống về production, giám sát chặt, <em>xác minh đã sạch</em> trước khi kết nối lại. Khôi phục từ backup có trước thời điểm bị xâm phạm.</div></li>
<li><span class="num">06</span><div><strong>Lessons Learned</strong> — Họp rút kinh nghiệm (thường trong vòng 2 tuần), cập nhật playbook, vá lỗ hổng quy trình — phản hồi ngược lại giai đoạn Preparation.</div></li>
</ol>

<h4>Vì sao cô lập bằng cách rút cáp mạng tốt hơn tắt nguồn?</h4>
<p>Tắt nguồn sẽ <strong>phá hủy dữ liệu volatile</strong>: RAM, tiến trình đang chạy, kết nối mạng, khóa mã hóa đang dùng. Rút cáp mạng (hoặc chuyển VLAN cách ly) <strong>chặn được kẻ tấn công nhưng vẫn giữ bộ nhớ</strong> để thu thập. Đây là tình huống "kinh điển" hay bị hỏi.</p>

<h4>Vì sao đôi khi nên trì hoãn eradication?</h4>
<p>Nếu xóa malware/đóng vector quá sớm, bạn <strong>báo động cho kẻ tấn công</strong> (chúng đổi hạ tầng, xóa dấu vết) và có thể <strong>bỏ sót các foothold khác</strong>. Cần khoanh vùng toàn bộ phạm vi (scope) trước, rồi mới đồng loạt loại bỏ.</p>

<h4>Order of volatility — vì sao quan trọng</h4>
<p>Mọi thao tác trên host đang chạy đều <strong>làm thay đổi nó</strong>. Phải thu thập theo thứ tự dễ-mất-trước: nội dung RAM mất ngay khi tắt máy, trong khi dữ liệu trên đĩa hay backup bền hơn. Bản thân việc chạy công cụ thu thập cũng để lại "dấu chân" — phải ghi lại (document) điều đó.</p>
</div></details>

<details class="tier reference" id="a1-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>The 6 phases (SANS PICERL)</h4>
<div class="table-wrap"><table>
<tr><th>Phase</th><th>Goal</th><th>Key point</th></tr>
<tr><td>Preparation</td><td>Be ready before an incident</td><td>Policies, playbooks, logging, NTP, contacts. Client responsibility.</td></tr>
<tr><td>Identification</td><td>Detect &amp; confirm an incident</td><td>Avoid false positives; start the timeline immediately.</td></tr>
<tr><td>Containment</td><td>Stop the spread</td><td>Short-term (isolate) + long-term (patch/rebuild). Preserve evidence.</td></tr>
<tr><td>Eradication</td><td>Remove the threat &amp; root cause</td><td>Normally after required evidence is preserved; balance against ongoing harm.</td></tr>
<tr><td>Recovery</td><td>Restore to production</td><td>Verify clean; restore from a backup pre-dating the compromise.</td></tr>
<tr><td>Lessons Learned</td><td>Improve for next time</td><td>Post-incident review, usually within 2 weeks. Feeds back into Preparation.</td></tr>
</table></div>

<h4>Order of volatility (RFC 3227) — collect top first</h4>
<div class="table-wrap"><table>
<tr><th>#</th><th>Evidence</th><th>Notes</th></tr>
<tr><td>1</td><td>CPU registers, cache</td><td>Most volatile — gone almost instantly</td></tr>
<tr><td>2</td><td>RAM / memory</td><td>Live processes, sockets, injected code, keys</td></tr>
<tr><td>3</td><td>Network state &amp; ARP cache</td><td>Connections, routing, ARP</td></tr>
<tr><td>4</td><td>Running processes</td><td>Process tree, open handles</td></tr>
<tr><td>5</td><td>Disk (files, pagefile)</td><td>Persistent but can still change</td></tr>
<tr><td>6</td><td>Logs (remote/centralised)</td><td>SIEM, syslog</td></tr>
<tr><td>7</td><td>Backups, archival media</td><td>Least volatile</td></tr>
</table></div>

<h4>Framework mapping</h4>
<div class="table-wrap"><table>
<tr><th>NIST SP 800-61 Rev. 2 lifecycle (historical 4-phase model)</th><th>SANS PICERL (6 phases)</th></tr>
<tr><td>Preparation</td><td>Preparation</td></tr>
<tr><td>Detection &amp; Analysis</td><td>Identification</td></tr>
<tr><td>Containment, Eradication &amp; Recovery</td><td>Containment + Eradication + Recovery</td></tr>
<tr><td>Post-Incident Activity</td><td>Lessons Learned</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="a1-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Xác nhận authority, phạm vi, đầu mối liên lạc, mức severity và tiêu chí khai báo sự cố trước khi chạm hệ thống.</li>
<li>Mở incident log; ghi ai–làm gì–khi nào–ở đâu–bằng công cụ/phiên bản nào. Đồng bộ UTC và ghi cả giờ địa phương.</li>
<li>Ưu tiên dữ liệu volatile, tạo hash, niêm phong bản gốc; phân tích trên bản sao. Chọn containment ngắn hạn rồi mới eradication.</li>
<li>Xác minh recovery bằng IOC sweep, functional test và enhanced monitoring; tổ chức lessons learned với action owner/deadline.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Scope/Rules of Engagement, sơ đồ mạng, asset owner và business criticality.</li>
<li>RAM, process/socket, ARP/routing, disk image, central logs, backup và cloud audit.</li>
<li>Evidence ID, SHA-256, collector, source, timestamps, transfer history và storage location.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>
<code>Get-Date -Format o</code>, <code>hostname</code>, <code>whoami /all</code>, <code>tasklist</code>, <code>netstat -ano</code> trước các thay đổi lớn.</li>
<li>
<span class="cmd-safety cmd-impact">PRIVILEGED/IMPACT</span>Dùng write blocker cho dead acquisition; hash trước và sau khi chuyển giao.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>EDR báo PowerShell độc trên máy kế toán. Cô lập bằng EDR network containment thay vì tắt nguồn, thu RAM và process tree, tìm lateral movement trên SIEM, rồi đồng loạt reset credential và rebuild sau khi đã xác định hết phạm vi.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Không có một hành động luôn đúng: ransomware đang mã hóa có thể buộc containment ngay cả khi làm mất một phần bằng chứng.</li>
<li>TAP không bảo đảm hệ thống thu không drop packet; phải ghi packet-drop counter và giới hạn công cụ.</li>
<li>Upload mẫu lên dịch vụ công cộng có thể làm lộ dữ liệu, IOC và sự tồn tại của cuộc điều tra.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> NIST SP 800-61 Rev. 3 (2025, CSF 2.0 Community Profile); NIST SP 800-61 Rev. 2 cho mô hình 4 phase thường gặp trong đề cũ; NIST SP 800-86; RFC 3227; ISO/IEC 27035.</p>
</div>
</details>`;
