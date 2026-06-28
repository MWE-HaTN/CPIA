/* Theory — A1 (Appendix A). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["a1"]=`<h2>A1 — Engagement Lifecycle Management</h2><h3><span class="en">What CPIA expects you to know</span><span class="vi">Kiến thức CPIA yêu cầu</span></h3><ul>

<li><strong>Why IR matters:</strong> <span class="en">Reduce impact, preserve evidence, restore services, meet legal / regulatory duties, and improve controls after the incident.</span><span class="vi">Giảm thiểu tác động, bảo toàn bằng chứng, khôi phục dịch vụ, đáp ứng nghĩa vụ pháp lý / quy định và cải thiện kiểm soát sau sự cố.</span></li>

<li><strong>Preparation:</strong> <span class="en">Policies, playbooks, communication tree, logging readiness, SIEM coverage, NTP, evidence handling kits, contact lists, and escalation matrix.</span><span class="vi">Chính sách, playbook, sơ đồ liên lạc, sẵn sàng ghi log, độ phủ SIEM, NTP, bộ dụng cụ xử lý bằng chứng, danh sách liên hệ và ma trận leo thang.</span></li>

<li><strong>Lifecycle:</strong> <span class="en">Preparation → identification → containment → eradication → recovery → lessons learned.</span><span class="vi">Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned.</span></li>

<li><strong>Safe malware handling:</strong> <span class="en">Isolate environment, hash sample first, store in password-protected archive, avoid public upload without client approval.</span><span class="vi">Cô lập môi trường, hash mẫu trước, lưu trong archive có mật khẩu, không tải lên công khai nếu chưa có sự chấp thuận của khách hàng.</span></li>

<li><strong>System-log limitations:</strong> <span class="en">Logs may be missing, rotated, misconfigured, overwritten, tampered with, or timestamped incorrectly.</span><span class="vi">Log có thể thiếu, bị xoay vòng (rotate), cấu hình sai, ghi đè, bị can thiệp, hoặc sai mốc thời gian (timestamp không chính xác).</span></li>

</ul><div class="callout danger"><strong>Exam trap</strong><p><span class="en">Do not delete malware, power off a live host, interrogate a suspected insider, or change a system before evidence is preserved unless there is a justified containment reason and the action is documented.</span><span class="vi">Không được xoá malware, tắt nguồn máy đang chạy, thẩm vấn người bị nghi ngờ nội gián, hay thay đổi hệ thống trước khi bằng chứng được bảo toàn — trừ khi có lý do cô lập chính đáng và hành động được ghi lại đầy đủ.</span></p></div>

<h3><span class="en">Benefits &amp; Utility of Incident Response</span><span class="vi">Lợi ích và giá trị của Incident Response</span></h3>

<ul>

<li><strong>Minimize damage:</strong> <span class="en">Rapid structured response limits attacker dwell time and reduces breach scope</span><span class="vi">Ứng phó nhanh và có quy trình giúp rút ngắn thời gian kẻ tấn công nằm vùng (dwell time) và thu hẹp phạm vi bị xâm phạm</span></li>

<li><strong>Preserve evidence:</strong> <span class="en">Proper IR methodology ensures evidence is admissible and attributable</span><span class="vi">Quy trình IR bài bản giúp bằng chứng được tòa chấp nhận và truy nguyên được nguồn gốc</span></li>

<li><strong>Restore operations:</strong> <span class="en">Structured recovery reduces downtime and business impact</span><span class="vi">Khôi phục có hệ thống giúp giảm thời gian ngừng hoạt động (downtime) và tác động tới kinh doanh</span></li>

<li><strong>Regulatory compliance:</strong> <span class="en">Demonstrates due diligence to regulators (GDPR, PCI DSS, FCA)</span><span class="vi">Chứng minh đã làm tròn nghĩa vụ với cơ quan quản lý (GDPR, PCI DSS, FCA)</span></li>

<li><strong>Improve posture:</strong> <span class="en">Lessons Learned drives control improvements to prevent recurrence</span><span class="vi">Lessons Learned thúc đẩy cải tiến kiểm soát để ngăn sự cố tái diễn</span></li>

<li><strong>Attribution:</strong> <span class="en">Proper IR enables identification of threat actors for legal action or intelligence sharing</span><span class="vi">IR bài bản cho phép xác định threat actor để phục vụ hành động pháp lý hoặc chia sẻ tình báo</span></li>

</ul>

<h3><span class="en">The 6 Phases</span><span class="vi">6 Giai đoạn</span></h3>

<ul class="num-list">

<li><span class="num">01</span><div><strong>Preparation</strong> — <span class="en">Build IR policy, playbooks, contact lists, logging infrastructure. Done <em>before</em> an incident occurs. Client responsibility.</span><span class="vi">Xây dựng chính sách IR, playbook, danh sách liên hệ, hạ tầng ghi log. Thực hiện <em>trước</em> khi sự cố xảy ra. Trách nhiệm của khách hàng.</span></div></li>

<li><span class="num">02</span><div><strong>Identification</strong> — <span class="en">Detect and confirm whether an incident has occurred. Avoid false positives. Begin timeline documentation immediately.</span><span class="vi">Phát hiện và xác nhận sự cố có xảy ra không. Tránh cảnh báo nhầm. Bắt đầu ghi chép timeline ngay lập tức.</span></div></li>

<li><span class="num">03</span><div><strong>Containment</strong> — <span class="en">Prevent further damage while preserving evidence. Short-term (isolate) + long-term (patch / rebuild parallel).</span><span class="vi">Ngăn thiệt hại tiếp diễn trong khi bảo toàn bằng chứng. Ngắn hạn (cô lập) + dài hạn (vá lỗi / rebuild song song).</span></div></li>

<li><span class="num">04</span><div><strong>Eradication</strong> — <span class="en">Remove malware and close attack vectors. Only after forensic acquisition is complete.</span><span class="vi">Loại bỏ malware và đóng các vector tấn công. Chỉ thực hiện sau khi thu thập bằng chứng pháp y (forensic acquisition) hoàn tất.</span></div></li>

<li><span class="num">05</span><div><strong>Recovery</strong> — <span class="en">Restore systems to production. Monitor closely. Verify clean before reconnecting.</span><span class="vi">Khôi phục hệ thống vào môi trường production. Giám sát chặt chẽ. Xác minh sạch trước khi kết nối lại.</span></div></li>

<li><span class="num">06</span><div><strong>Lessons Learned</strong> — <span class="en">Post-incident review, typically within 2 weeks. Improve controls, update playbooks.</span><span class="vi">Đánh giá sau sự cố, thường trong vòng 2 tuần. Cải thiện kiểm soát, cập nhật playbook.</span></div></li>

</ul>

<div class="callout danger">

<span class="callout-icon">⚠</span>

<div class="callout-body">

<strong>Exam traps — actions to NEVER take (Risk: Evidence Corruption)</strong>

<p><span class="en">These actions risk <strong>evidence corruption</strong> — making evidence inadmissible or destroying forensic artifacts:</span><span class="vi">Các hành động này có nguy cơ <strong>làm hỏng bằng chứng</strong> — khiến bằng chứng không được chấp nhận tại tòa hoặc phá hủy artefact điều tra số (forensic artifacts):</span></p>

<div class="table-wrap"><table>

<tr><th><span class="en">Situation</span><span class="vi">Tình huống</span></th><th><span class="en">Wrong Action</span><span class="vi">Hành động sai</span></th><th><span class="en">Risk: Evidence Corruption</span><span class="vi">Nguy cơ: Hỏng bằng chứng</span></th></tr>

<tr><td><span class="en">Malware found on live system</span><span class="vi">Phát hiện malware trên hệ thống đang chạy</span></td><td><span class="en">Power off immediately</span><span class="vi">Tắt nguồn ngay</span></td><td><span class="en">Destroys RAM, running processes, network connections — volatile data lost</span><span class="vi">Phá hủy RAM, tiến trình đang chạy, kết nối mạng — mất dữ liệu volatile</span></td></tr>

<tr><td><span class="en">Malware identified</span><span class="vi">Đã xác định được malware</span></td><td><span class="en">Delete malware before forensics</span><span class="vi">Xoá malware trước khi thu thập bằng chứng</span></td><td><span class="en">Destroys evidence before acquisition</span><span class="vi">Phá hủy bằng chứng trước khi thu thập</span></td></tr>

<tr><td><span class="en">Insider threat suspected</span><span class="vi">Nghi ngờ mối đe dọa nội bộ</span></td><td><span class="en">Directly question the suspect</span><span class="vi">Hỏi thẳng người bị nghi ngờ</span></td><td><span class="en">Alerts attacker — they will destroy evidence and cover tracks</span><span class="vi">Cảnh báo kẻ tấn công — họ sẽ xoá bằng chứng và xóa dấu vết</span></td></tr>

<tr><td><span class="en">Need to isolate host</span><span class="vi">Cần cô lập máy tính</span></td><td><span class="en">Unplug without documenting</span><span class="vi">Rút cáp mạng mà không ghi lại</span></td><td><span class="en">Loses network connection state documentation</span><span class="vi">Mất tài liệu về trạng thái kết nối mạng</span></td></tr>

</table></div>

</div>

</div>

<h3><span class="en">Malware Safe Handling</span><span class="vi">Xử lý Malware An toàn</span></h3>

<ul>

<li><span class="en">Always work in an <strong>isolated VM</strong> with no network or isolated network only</span><span class="vi">Luôn làm việc trong <strong>VM được cô lập</strong>, không có mạng hoặc chỉ dùng mạng riêng biệt</span></li>

<li><strong>Hash the sample first</strong> <span class="en">(MD5 + SHA-256) before any other action</span><span class="vi">(MD5 + SHA-256) trước mọi hành động khác</span></li>

<li><span class="en">Store in <strong>password-protected archive</strong> (e.g., zip with password)</span><span class="vi">Lưu trong <strong>archive có mật khẩu</strong> (ví dụ: zip có mật khẩu)</span></li>

<li><span class="en">Never send samples via unencrypted email</span><span class="vi">Không bao giờ gửi mẫu qua email không mã hóa</span></li>

<li>VirusTotal submission: <span class="en">always <strong>obtain client consent first</strong> — samples may contain sensitive data and become public</span><span class="vi">Luôn <strong>xin phép khách hàng trước</strong> — mẫu có thể chứa dữ liệu nhạy cảm và trở nên công khai</span></li>

</ul>

<h3><span class="en">System Log Limitations</span><span class="vi">Hạn chế của System Log</span></h3>

<ul>

<li><span class="en">Logs can be <strong>tampered or deleted</strong> by attackers</span><span class="vi">Log có thể bị <strong>can thiệp hoặc xoá</strong> bởi kẻ tấn công</span></li>

<li><span class="en">Not all events are logged — depends on audit policy configuration</span><span class="vi">Không phải mọi sự kiện đều được ghi log — phụ thuộc vào cấu hình audit policy</span></li>

<li><span class="en">Log rotation may have overwritten historical events</span><span class="vi">Xoay vòng log có thể đã ghi đè các sự kiện lịch sử</span></li>

<li><span class="en">Timestamps unreliable if NTP not synchronized</span><span class="vi">Timestamps không đáng tin nếu NTP không được đồng bộ</span></li>

</ul>


<h3 class="qz-theory"><span class="en">IR Lifecycle Models — NIST vs SANS</span><span class="vi">Mô hình vòng đời IR — NIST và SANS</span></h3>
<p><span class="en">Two models describe the same work. <strong>SANS</strong> uses six steps (PICERL). <strong>NIST SP 800-61</strong> groups them into <strong>four</strong> phases, combining three activities into one. Know how they map.</span><span class="vi">Hai mô hình mô tả cùng một công việc. <strong>SANS</strong> dùng sáu bước (PICERL). <strong>NIST SP 800-61</strong> gộp thành <strong>bốn</strong> giai đoạn, gộp ba hoạt động vào một. Cần nắm cách ánh xạ.</span></p>
<div class="table-wrap"><table><thead><tr><th>NIST SP 800-61 (4)</th><th>SANS PICERL (6)</th></tr></thead><tbody>
<tr><td>Preparation</td><td>Preparation</td></tr>
<tr><td>Detection &amp; Analysis</td><td>Identification</td></tr>
<tr><td>Containment, Eradication &amp; Recovery</td><td>Containment + Eradication + Recovery</td></tr>
<tr><td>Post-Incident Activity</td><td>Lessons Learned</td></tr></tbody></table></div>
<p><span class="en">IR is a <strong>loop</strong>: Lessons Learned feeds improvements back into Preparation, closing detection/response gaps for next time.</span><span class="vi">IR là một <strong>vòng lặp</strong>: Lessons Learned đưa cải tiến trở lại Preparation, vá lỗ hổng phát hiện/ứng phó cho lần sau.</span></p>

<h3><span class="en">Order of Volatility (RFC 3227)</span><span class="vi">Thứ tự bay hơi (RFC 3227)</span></h3>
<p><span class="en">Collect the most ephemeral evidence first — it is lost on power-off:</span><span class="vi">Thu thập bằng chứng dễ mất nhất trước — nó biến mất khi tắt nguồn:</span></p>
<ol>
<li><span class="en">CPU registers and cache</span><span class="vi">Thanh ghi và cache CPU</span></li>
<li><span class="en">Routing table, ARP cache, process table, kernel statistics, RAM</span><span class="vi">Bảng định tuyến, ARP cache, bảng tiến trình, thống kê kernel, RAM</span></li>
<li><span class="en">Temporary file systems</span><span class="vi">Hệ thống tệp tạm</span></li>
<li><span class="en">Data on disk</span><span class="vi">Dữ liệu trên đĩa</span></li>
<li><span class="en">Remote logging / monitoring data</span><span class="vi">Dữ liệu log/giám sát từ xa</span></li>
<li><span class="en">Physical configuration, network topology</span><span class="vi">Cấu hình vật lý, cấu trúc mạng</span></li>
<li><span class="en">Archival media (backup tapes)</span><span class="vi">Phương tiện lưu trữ (băng sao lưu)</span></li></ol>
<div class="callout warning"><strong><span class="en">Capture RAM before shutdown</span><span class="vi">Bắt RAM trước khi tắt máy</span></strong><p><span class="en">Memory holds fileless/decrypted malware, encryption keys, live network sockets and command history. Rebooting or pulling power destroys it and may trigger wiper/anti-forensic logic.</span><span class="vi">Bộ nhớ chứa mã độc fileless/đã giải mã, khóa mã hóa, socket mạng đang sống và lịch sử lệnh. Reboot hay rút nguồn sẽ phá hủy nó và có thể kích hoạt logic wiper/chống điều tra.</span></p></div>

<h3><span class="en">Containment, Eradication &amp; Recovery — operational detail</span><span class="vi">Containment, Eradication &amp; Recovery — chi tiết vận hành</span></h3>
<ul>
<li><strong><span class="en">Short- vs long-term containment:</span><span class="vi">Cô lập ngắn hạn vs dài hạn:</span></strong> <span class="en">Short-term quarantines/isolates a host (e.g. a quarantine VLAN) to stop damage while keeping it running for analysis; long-term applies temporary fixes so production can safely continue.</span><span class="vi">Ngắn hạn cách ly host (vd VLAN cách ly) để chặn thiệt hại mà vẫn giữ chạy phục vụ phân tích; dài hạn áp dụng biện pháp tạm để production tiếp tục an toàn.</span></li>
<li><strong><span class="en">Isolate by network, not power:</span><span class="vi">Cô lập bằng mạng, không bằng nguồn:</span></strong> <span class="en">Pulling the network cable / moving to a quarantine VLAN stops C2 and lateral movement while preserving volatile memory; powering off loses it.</span><span class="vi">Rút cáp mạng / chuyển sang VLAN cách ly chặn C2 và lateral movement mà vẫn giữ bộ nhớ volatile; tắt nguồn sẽ mất.</span></li>
<li><strong><span class="en">Delay eradication until scope is known:</span><span class="vi">Hoãn eradication tới khi rõ phạm vi:</span></strong> <span class="en">Premature eradication tips off the attacker (who may deploy wipers or go quieter) and can miss persistence; scope all footholds, then remove them in a coordinated action.</span><span class="vi">Eradication vội đánh động kẻ tấn công (có thể triển khai wiper hoặc ẩn kỹ hơn) và bỏ sót persistence; khoanh vùng hết chỗ đứng rồi loại bỏ phối hợp một lần.</span></li>
<li><strong><span class="en">Out-of-band communications:</span><span class="vi">Liên lạc ngoài luồng:</span></strong> <span class="en">If the attacker may be reading internal email/chat, coordinate the response over separate secure channels (phone, dedicated platform).</span><span class="vi">Nếu kẻ tấn công có thể đọc email/chat nội bộ, hãy điều phối ứng phó qua kênh bảo mật riêng (điện thoại, nền tảng riêng).</span></li>
<li><strong><span class="en">Recover from a clean backup:</span><span class="vi">Khôi phục từ bản sao lưu sạch:</span></strong> <span class="en">Restore from a known-good backup that pre-dates the compromise — newest is not safest, as a later backup may already contain the implant.</span><span class="vi">Khôi phục từ bản sao lưu sạch có trước thời điểm xâm nhập — mới nhất chưa chắc an toàn nhất, vì bản mới hơn có thể đã chứa implant.</span></li>
<li><strong><span class="en">Wipe &amp; reimage over "cleaning":</span><span class="vi">Xóa &amp; cài lại thay vì "làm sạch":</span></strong> <span class="en">Rebuilding from a trusted golden image gives higher assurance than selective cleaning, which may leave a hidden backdoor.</span><span class="vi">Dựng lại từ golden image tin cậy đảm bảo cao hơn làm sạch chọn lọc, vốn có thể sót backdoor ẩn.</span></li></ul>

<h3><span class="en">Live Acquisition Principles</span><span class="vi">Nguyên tắc thu thập trực tiếp (live)</span></h3>
<ul>
<li><strong><span class="en">Locard / least footprint:</span><span class="vi">Locard / dấu chân tối thiểu:</span></strong> <span class="en">Every action on a live host perturbs it (the tool occupies RAM, may touch the pagefile). This is accepted as necessary — use trusted, documented tools (ideally statically linked, from read-only media) and record tool, version and actions.</span><span class="vi">Mọi hành động trên host live đều làm xáo trộn nó (công cụ chiếm RAM, có thể chạm pagefile). Điều này được chấp nhận là cần thiết — dùng công cụ tin cậy, có tài liệu (lý tưởng là liên kết tĩnh, từ phương tiện chỉ-đọc) và ghi lại công cụ, phiên bản, hành động.</span></li>
<li><strong><span class="en">Encrypted live server:</span><span class="vi">Server đã mã hóa đang chạy:</span></strong> <span class="en">A dead/offline image of a full-disk-encrypted volume yields only ciphertext. While it is live and unlocked, capture memory (which may hold the key) and triage key artefacts.</span><span class="vi">Image lúc tắt/offline của volume mã hóa toàn đĩa chỉ cho ciphertext. Khi máy còn chạy và đã mở khóa, hãy bắt bộ nhớ (có thể chứa khóa) và triage các artefact quan trọng.</span></li>
<li><strong><span class="en">Triage tools:</span><span class="vi">Công cụ triage:</span></strong> <span class="en">KAPE / CyLR collect targeted artefacts (event logs, registry, prefetch, $MFT, browser data) quickly when full imaging is impractical.</span><span class="vi">KAPE / CyLR thu thập nhanh các artefact trọng yếu (event log, registry, prefetch, $MFT, dữ liệu trình duyệt) khi image toàn bộ là bất khả thi.</span></li></ul>

<h3><span class="en">Triage, Scoping &amp; Patient Zero</span><span class="vi">Triage, khoanh vùng &amp; Patient Zero</span></h3>
<ul>
<li><strong><span class="en">Prioritise by business impact:</span><span class="vi">Ưu tiên theo tác động kinh doanh:</span></strong> <span class="en">Rank simultaneous alerts by asset/data criticality, blast radius and recoverability — not arbitrary factors.</span><span class="vi">Xếp hạng các cảnh báo đồng thời theo mức trọng yếu của tài sản/dữ liệu, phạm vi lan và khả năng khôi phục — không theo yếu tố tùy tiện.</span></li>
<li><strong><span class="en">Patient zero:</span><span class="vi">Patient zero:</span></strong> <span class="en">The first system/user compromised — the initial-access vector. Find it to close the entry point and scope the full spread.</span><span class="vi">Hệ thống/người dùng bị xâm nhập đầu tiên — vector truy cập ban đầu. Tìm nó để đóng điểm xâm nhập và khoanh vùng toàn bộ lan truyền.</span></li>
<li><strong><span class="en">Scope beyond one host:</span><span class="vi">Khoanh vùng quá một host:</span></strong> <span class="en">A single host rarely tells the whole story — modern intrusions spread via stolen credentials and shared resources, so consider lateral movement and other log sources.</span><span class="vi">Một host đơn lẻ hiếm khi kể trọn câu chuyện — xâm nhập hiện đại lan qua thông tin đăng nhập bị trộm và tài nguyên dùng chung, nên xét lateral movement và các nguồn log khác.</span></li></ul>
`;
