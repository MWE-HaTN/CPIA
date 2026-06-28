/* Theory — E1 (Appendix E). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e1"]=`<h2>E1 — Host-based Data Acquisition</h2>

<h3>Evidence volatility order</h3>

<ol><li><span class="en">CPU registers and cache</span><span class="vi">Thanh ghi và cache CPU</span></li><li><span class="en">RAM / memory</span><span class="vi">RAM / bộ nhớ</span></li><li><span class="en">Network state and active connections</span><span class="vi">Trạng thái mạng và kết nối đang hoạt động</span></li><li><span class="en">Running processes</span><span class="vi">Các tiến trình đang chạy</span></li><li><span class="en">Disk data</span><span class="vi">Dữ liệu đĩa</span></li><li><span class="en">Archival media</span><span class="vi">Phương tiện lưu trữ lâu dài</span></li><li><span class="en">Remote logging and monitoring systems</span><span class="vi">Hệ thống ghi log và giám sát từ xa</span></li></ol>

<div class="callout warning"><strong>Exam tip:</strong><p><span class="en">Collect the most volatile evidence first when it is safe and within scope. Powering off may destroy RAM, processes, and network state.</span><span class="vi">Thu thập bằng chứng dễ mất trước khi có thể và trong phạm vi. Tắt nguồn có thể phá hủy RAM, tiến trình và trạng thái mạng.</span></p></div>

<ul>

<li><span class="en">Static acquisition: disk image or powered-off evidence; lower volatility but preserves disk state.</span><span class="vi">Thu thập tĩnh: ảnh đĩa hoặc bằng chứng khi tắt nguồn; ít dễ mất hơn nhưng bảo toàn trạng thái đĩa.</span></li>

<li><span class="en">Dynamic / live acquisition: collect volatile data from running system; changes state but preserves RAM/process/network evidence.</span><span class="vi">Thu thập động / trực tiếp: thu thập dữ liệu dễ mất từ hệ thống đang chạy; thay đổi trạng thái nhưng bảo toàn bằng chứng RAM / tiến trình / mạng.</span></li>

<li><span class="en">Volatility reminder: RAM, network state, and process state are volatile and should be collected before disk-only artefacts when safe and within scope.</span><span class="vi">Nhắc nhở về tính dễ mất: RAM, trạng thái mạng và trạng thái tiến trình đều dễ mất và nên thu thập trước artefact chỉ-đĩa khi an toàn và trong phạm vi.</span></li>

<li><span class="en">Local vs remote acquisition: local may require physical access; remote is scalable but depends on credentials / network trust.</span><span class="vi">Thu thập cục bộ vs từ xa: cục bộ có thể cần truy cập vật lý; từ xa có thể mở rộng nhưng phụ thuộc vào thông tin xác thực / niềm tin mạng.</span></li>

<li><span class="en">Tools: KAPE, CyLR, Brimor Labs (Live Response Collection), Velociraptor, FTK Imager, dd, Magnet RAM Capture, DumpIt.</span><span class="vi">Công cụ: KAPE, CyLR, Brimor Labs (Live Response Collection), Velociraptor, FTK Imager, dd, Magnet RAM Capture, DumpIt.</span></li>

</ul><div class="callout warning"><strong>Documentation</strong><p><span class="en">Record tool versions, command lines, time, hashes, target identity, acquisition format, and examiner actions.</span><span class="vi">Ghi lại phiên bản công cụ, dòng lệnh, thời gian, hash, định danh mục tiêu, định dạng thu thập và hành động của điều tra viên.</span></p></div><h3>Write Blockers and Acquisition Integrity</h3><ul><li><strong>Write blocker:</strong> Hardware device preventing any write commands reaching the evidence drive during imaging. Required for forensically sound disk acquisition — preserves original evidence state.</li><li><strong>Hardware vs software:</strong> Hardware write blockers preferred — operate at hardware / firmware level, cannot be bypassed by OS. Software blockers can fail due to OS-level issues.</li><li><strong>Procedure:</strong> (1) Connect drive through write blocker. (2) Hash source (MD5 + SHA-256). (3) Image drive. (4) Hash image. (5) Verify hashes match. (6) Document write blocker make/model/serial in evidence log.</li><li><strong>Live acquisition caveat:</strong> Cannot use write blocker when system cannot be powered off. Accept that acquisition alters some metadata — document all changes and justify in case notes.</li></ul>

<h3>Cloud Artefact Awareness</h3>

<p class="sub-heading">Cloud-Specific Log Sources</p>

<div class="table-wrap"><table><tr><th>Platform</th><th>Log Source</th><th>Content</th></tr><tr><td>AWS</td><td>CloudTrail</td><td>API calls, user activity, resource changes</td></tr><tr><td>Azure</td><td>Azure AD Sign-in Logs</td><td>Authentication events, conditional access, MFA</td></tr><tr><td>GCP</td><td>Audit Logs</td><td>Admin activity, data access, system events</td></tr><tr><td>Microsoft 365</td><td>Unified Audit Log</td><td>Mailbox, SharePoint, OneDrive, Teams activity</td></tr></table></div>

<p class="sub-heading">Key Cloud Indicators</p><ul><li><span class="en">Unusual API calls from unfamiliar source IPs.</span><span class="vi">Lệnh gọi API bất thường từ IP nguồn không quen thuộc.</span></li><li><span class="en">New access keys created unexpectedly.</span><span class="vi">Khóa truy cập mới được tạo bất ngờ.</span></li><li><span class="en">Security group / firewall rule changes.</span><span class="vi">Thay đổi nhóm bảo mật / quy tắc tường lửa.</span></li><li><span class="en">Data transfer to external storage buckets.</span><span class="vi">Truyền dữ liệu đến bucket lưu trữ bên ngoài.</span></li><li><span class="en">Login from impossible geolocation (impossible travel detection).</span><span class="vi">Đăng nhập từ vị trí địa lý không thể (phát hiện di chuyển không thể).</span></li></ul>

<h3>Cloud Forensics</h3>

<p class="sub-heading">Microsoft 365 / Azure AD</p>

<div class="table-wrap"><table>

<tr><th>Log source</th><th>Content</th><th>Key events</th></tr>

<tr><td>Unified Audit Log (UAL)</td><td>Mailbox, SharePoint, OneDrive, Teams, admin activity</td><td>MailItemsAccessed, New-InboxRule, Set-Mailbox, file downloads, sharing changes</td></tr>

<tr><td>Azure AD Sign-in Logs</td><td>Authentication events, MFA status, conditional access</td><td>Successful / failed sign-ins, risk detections, impossible travel, MFA registration</td></tr>

<tr><td>Azure AD Audit Logs</td><td>Directory changes, role assignments, app registrations</td><td>User created, role assigned, OAuth consent, service principal created</td></tr>

<tr><td>Message Trace</td><td>Email delivery path, sender / recipient, status</td><td>Phishing delivery, forwarded messages, transport rule matches</td></tr>

</table></div>

<p class="sub-heading">AWS</p>

<div class="table-wrap"><table>

<tr><th>Log source</th><th>Content</th><th>Key events</th></tr>

<tr><td>CloudTrail</td><td>API calls across all AWS services</td><td>ConsoleLogin, AssumeRole, CreateAccessKey, RunInstances, PutObject</td></tr>

<tr><td>VPC Flow Logs</td><td>Network traffic metadata (src / dst IP, ports, bytes, accept / reject)</td><td>Unexpected outbound connections, lateral movement, data exfiltration</td></tr>

<tr><td>GuardDuty</td><td>Threat detection findings</td><td>Recon:EC2 / PortProbe, UnauthorizedAccess:EC2 / SSHBruteForce, CryptoCurrency:EC2</td></tr>

<tr><td>S3 Access Logs</td><td>Bucket-level access events</td><td>GetObject, PutObject from unusual IPs; bucket policy changes</td></tr>

</table></div>

<p class="sub-heading">Google Cloud Platform</p>

<div class="table-wrap"><table>

<tr><th>Log source</th><th>Content</th><th>Key events</th></tr>

<tr><td>Cloud Audit Logs</td><td>Admin activity, data access, system events</td><td>IAM changes, compute instance creation, storage access</td></tr>

<tr><td>VPC Flow Logs</td><td>Network traffic metadata</td><td>Same as AWS — unexpected connections, exfiltration</td></tr>

<tr><td>Cloud IDS</td><td>Threat detection alerts</td><td>Malware, command-and-control, cryptomining</td></tr>

</table></div>

<p class="sub-heading">Cloud Investigation Key Principles</p>

<ul>

<li><strong>Shared responsibility model:</strong> <span class="en">Cloud provider secures infrastructure; customer secures identities, data, and configurations.</span><span class="vi">Nhà cung cấp cloud bảo mật cơ sở hạ tầng; khách hàng bảo mật danh tính, dữ liệu và cấu hình.</span></li>

<li><strong>Identity is the new perimeter:</strong> <span class="en">Compromised credentials (OAuth tokens, API keys, service accounts) are the primary attack vector.</span><span class="vi">Thông tin xác thực bị xâm phạm (OAuth token, khóa API, tài khoản dịch vụ) là vector tấn công chính.</span></li>

<li><strong>Log retention varies:</strong> <span class="en">UAL retains 90 days (default) to 1 year; CloudTrail can be configured for longer. Collect logs before they rotate.</span><span class="vi">UAL lưu giữ 90 ngày (mặc định) đến 1 năm; CloudTrail có thể được cấu hình lâu hơn. Thu thập log trước khi chúng bị xoay vòng.</span></li>

<li><strong>API-driven everything:</strong> <span class="en">All cloud actions are API calls — CloudTrail / Activity Logs are the primary forensic source.</span><span class="vi">Tất cả hành động cloud là lệnh gọi API — CloudTrail / Activity Log là nguồn pháp y chính.</span></li>

<li><strong>Ephemeral resources:</strong> <span class="en">VMs, containers, and serverless functions may be short-lived — collect evidence before resources are terminated.</span><span class="vi">VM, container và hàm serverless có thể tồn tại ngắn — thu thập bằng chứng trước khi tài nguyên bị chấm dứt.</span></li>

</ul>


<h3 class="qz-theory"><span class="en">Host-based Acquisition — integrity &amp; order</span><span class="vi">Thu thập trên host — toàn vẹn &amp; thứ tự</span></h3>
<ul>
<li><strong><span class="en">Preserve the source:</span><span class="vi">Bảo toàn nguồn:</span></strong> <span class="en">Use a <strong>write blocker</strong> and create a hashed bit-for-bit image; a <em>hardware</em> blocker physically prevents writes at the interface (independent of the analysis OS), more reliable than a software one. Work from the verified image, never the original.</span><span class="vi">Dùng <strong>write blocker</strong> và tạo image từng bit có hash; blocker <em>phần cứng</em> chặn ghi vật lý ngay tại giao diện (độc lập với OS phân tích), đáng tin hơn loại phần mềm. Làm việc trên image đã xác minh, không bao giờ trên bản gốc.</span></li>
<li><strong><span class="en">Image formats:</span><span class="vi">Định dạng image:</span></strong> <span class="en"><code>dd</code>/raw = bare bit-for-bit copy; <strong>E01</strong> (EWF) adds compression, case metadata and built-in integrity hashes. Both are forensically sound.</span><span class="vi"><code>dd</code>/raw = bản sao từng bit trần; <strong>E01</strong> (EWF) thêm nén, metadata vụ việc và hash toàn vẹn tích hợp. Cả hai đều hợp lệ forensic.</span></li>
<li><strong><span class="en">Live host:</span><span class="vi">Host đang chạy:</span></strong> <span class="en">Capture <strong>volatile memory first</strong>, then triage artefacts; for systems that can't be taken down, use live/triage tools (<strong>KAPE</strong>, <strong>CyLR</strong>) to grab targeted artefacts, documenting every action.</span><span class="vi">Bắt <strong>bộ nhớ volatile trước</strong>, rồi triage artefact; với hệ thống không thể tắt, dùng công cụ live/triage (<strong>KAPE</strong>, <strong>CyLR</strong>) lấy artefact trọng yếu, ghi lại mọi hành động.</span></li></ul>
`;
