/* Theory — D13 (Appendix D). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d13"]=`<h2>D13 — False Positive Acknowledgement</h2>



<h3>Snort / Suricata rule structure</h3>

<pre># Basic IDS rule anatomy:

# action protocol source source_port -&gt; destination destination_port (options)

alert tcp $EXTERNAL_NET any -&gt; $HOME_NET 445 (msg:"Possible SMB exploit attempt"; content:"|FF 53 4D 42|"; sid:1000001; rev:1;)</pre>

<ul><li><strong>alert:</strong> Action to take when matched.</li><li><strong>tcp:</strong> Protocol.</li><li><strong>$EXTERNAL_NET any -&gt; $HOME_NET 445:</strong> Direction and ports.</li><li><strong>msg:</strong> Human-readable alert text.</li><li><strong>content:</strong> Payload pattern to match.</li><li><strong>sid / rev:</strong> Signature ID and revision.</li></ul>

<ul>

<li><span class="en">Do not accept IDS alert title as fact; inspect packet/payload/log context.</span><span class="vi">Không chấp nhận tiêu đề cảnh báo IDS là sự thật; kiểm tra bối cảnh gói/payload/log.</span></li>

<li><span class="en">Validate source / destination role, direction, payload content, rule logic, threshold, and whether vulnerability exists.</span><span class="vi">Xác minh vai trò nguồn / đích, chiều, nội dung payload, logic quy tắc, ngưỡng và liệu lỗ hổng có tồn tại không.</span></li>

<li><span class="en">False positives: vulnerability scanner, admin tool, backup software, monitoring agent, test environment, old signature.</span><span class="vi">False positive: vulnerability scanner, công cụ quản trị, phần mềm sao lưu, agent giám sát, môi trường test, chữ ký cũ.</span></li>

<li><span class="en">Signature improvement: add flow direction, content anchors, PCRE constraints, thresholds, reputation checks, or vulnerability context.</span><span class="vi">Cải thiện chữ ký: thêm chiều flow, anchor nội dung, ràng buộc PCRE, ngưỡng, kiểm tra danh tiếng hoặc bối cảnh lỗ hổng.</span></li>

</ul>

<div class="callout warning"><strong>Common confusion:</strong><p><span class="en">A true positive means the signature matched real malicious or policy-relevant activity. A false positive means the alert fired on benign traffic. Improving signatures usually means adding context, content depth, flow direction, thresholds, or exclusions.</span><span class="vi">True positive nghĩa là chữ ký khớp hoạt động độc hại thực sự hoặc vi phạm chính sách. False positive nghĩa là cảnh báo kích hoạt trên lưu lượng vô hại. Cải thiện chữ ký thường nghĩa là thêm bối cảnh, độ sâu nội dung, chiều flow, ngưỡng hoặc ngoại lệ.</span></p></div>

<h3>Common Causes of False Positives</h3><div class="table-wrap"><table><tr><th>Cause</th><th>Example</th><th>Resolution</th></tr><tr><td>Overly broad pattern match</td><td>SQL keyword "SELECT" fires SQLi rule on legitimate app query</td><td>Add payload length threshold + context constraints</td></tr><tr><td>Known-good scanner</td><td>Internal vuln scanner fires port scan rule</td><td>Whitelist scanner source IP in rule exception</td></tr><tr><td>Outdated signature</td><td>Old attack pattern now present in benign software</td><td>Update signature to target current attack variant only</td></tr><tr><td>Protocol on wrong port</td><td>HTTP on 8080 fires rule expecting HTTP only on port 80</td><td>Update port range or use DPI-based protocol detection</td></tr><tr><td>Internal admin tools</td><td>PsExec / nmap fires lateral movement alert</td><td>Whitelist by source IP + approved time window</td></tr></table></div>

<h3>False Positive vs True Positive Decision Framework</h3>

<p class="sub-heading">Evaluation Steps</p><ol><li>Read the <strong>rule content</strong>, not just the alert title.</li><li>Check <strong>source / destination</strong> — is this expected traffic?</li><li>Inspect <strong>payload</strong> — does it match the signature intent?</li><li>Check <strong>rule logic</strong> — content anchor, PCRE breadth.</li><li>Check <strong>threshold</strong> — single event or repeated?</li><li><strong>Context:</strong> vulnerability scanner? Admin tool? Backup? Monitoring agent? Test environment?</li><li><strong>Vulnerability:</strong> does the target run the vulnerable service?</li></ol>

<p class="sub-heading">Decision Matrix</p><div class="table-wrap"><table><tr><th>Condition</th><th>Verdict</th><th>Action</th></tr><tr><td>Alert matches + payload malicious + target vulnerable</td><td><strong>True Positive</strong></td><td>Escalate</td></tr><tr><td>Alert matches + payload benign + expected traffic</td><td><strong>False Positive</strong></td><td>Tune rule</td></tr><tr><td>Alert matches + payload suspicious + target NOT vulnerable</td><td><strong>True Positive (low risk)</strong></td><td>Investigate attack source</td></tr><tr><td>Alert matches + payload benign + unexpected traffic</td><td><strong>Investigate</strong></td><td>May be novel evasion or misconfiguration</td></tr></table></div>

<h3><span class="en">Signature Improvement — Before vs After</span><span class="vi">Cải thiện chữ ký — Trước và Sau</span></h3>

<p><span class="en">A common CPIA question: given an over-firing IDS rule, identify the cause and describe how to improve it.</span><span class="vi">Câu hỏi CPIA phổ biến: cho một quy tắc IDS kích hoạt quá nhiều, xác định nguyên nhân và mô tả cách cải thiện.</span></p>

<p class="sub-heading"><span class="en">Example 1 — SQL keyword over-match</span><span class="vi">Ví dụ 1 — Khớp quá rộng từ khóa SQL</span></p>

<pre># BEFORE — fires on any TCP traffic containing "SELECT" (too broad)

alert tcp any any -> $HOME_NET 80 (msg:"SQL Injection"; content:"SELECT"; sid:2001; rev:1;)



# AFTER — HTTP context, URI field, PCRE requiring full SQL structure, threshold

alert http $EXTERNAL_NET any -> $HOME_NET $HTTP_PORTS (

  msg:"SQL Injection attempt";

  flow:to_server,established;

  http.uri; content:"SELECT"; nocase;

  pcre:"/SELECT\\s+.{1,30}\\s+FROM/i";

  threshold:type threshold,track by_src,count 5,seconds 10;

  sid:2001; rev:2;)

# Improvements: HTTP-only, URI field only, PCRE requires SELECT...FROM pattern, threshold reduces noise</pre>

<p class="sub-heading"><span class="en">Example 2 — Internal scanner false positive</span><span class="vi">Ví dụ 2 — False positive từ scanner nội bộ</span></p>

<pre># BEFORE — fires on internal vulnerability scanner (SYN flood signature)

alert tcp any any -> $HOME_NET any (msg:"Port scan"; flags:S;

  threshold:type both,track by_src,count 20,seconds 5; sid:2002; rev:1;)



# AFTER — exclude approved scanner IPs using negation

alert tcp !$TRUSTED_SCANNERS any -> $HOME_NET any (msg:"Port scan";

  flags:S; threshold:type both,track by_src,count 20,seconds 5; sid:2002; rev:2;)

# Improvement: negate $TRUSTED_SCANNERS variable (defined in snort.conf) to exclude Nessus/Qualys</pre>

<h3><span class="en">Common False Positive Scenarios — Exam Reference</span><span class="vi">Tình huống False Positive phổ biến — Tham khảo thi</span></h3>

<div class="table-wrap"><table>

<tr><th><span class="en">Alert type</span><span class="vi">Loại cảnh báo</span></th><th><span class="en">Likely FP cause</span><span class="vi">Nguyên nhân FP khả năng</span></th><th><span class="en">How to verify</span><span class="vi">Cách xác minh</span></th><th><span class="en">Signature fix</span><span class="vi">Cách sửa chữ ký</span></th></tr>

<tr><td><span class="en">SQLi alert on web app</span><span class="vi">Cảnh báo SQLi trên web app</span></td><td><span class="en">Search query contains SQL keyword (SELECT, INSERT, etc.)</span><span class="vi">Truy vấn tìm kiếm chứa từ khóa SQL</span></td><td><span class="en">Inspect full URI — does it contain actual SQL structure with operators?</span><span class="vi">Kiểm tra toàn bộ URI — có cấu trúc SQL thực với toán tử không?</span></td><td><span class="en">Add PCRE requiring SELECT…FROM…WHERE; scope to URI / POST body only</span><span class="vi">Thêm PCRE yêu cầu SELECT…FROM…WHERE; chỉ áp dụng cho URI / POST body</span></td></tr>

<tr><td><span class="en">Port scan on internal source</span><span class="vi">Quét cổng từ nguồn nội bộ</span></td><td><span class="en">Vulnerability scanner, monitoring agent, backup software</span><span class="vi">Vulnerability scanner, agent giám sát, phần mềm sao lưu</span></td><td><span class="en">Check source IP against approved scanner list; check time vs maintenance window</span><span class="vi">Đối chiếu IP nguồn với danh sách scanner được duyệt; kiểm tra thời gian so với cửa sổ bảo trì</span></td><td><span class="en">Negate approved scanner IPs; add time-of-day threshold</span><span class="vi">Phủ định IP scanner được duyệt; thêm ngưỡng theo giờ</span></td></tr>

<tr><td><span class="en">Lateral movement alert (PsExec / SMB)</span><span class="vi">Cảnh báo lateral movement (PsExec / SMB)</span></td><td><span class="en">IT admin deploying patches during maintenance window</span><span class="vi">Quản trị IT triển khai bản vá trong cửa sổ bảo trì</span></td><td><span class="en">Source user + source IP + time — matches known admin activity?</span><span class="vi">Người dùng nguồn + IP nguồn + thời gian — khớp hoạt động admin đã biết không?</span></td><td><span class="en">Whitelist admin source IPs + approved maintenance time window</span><span class="vi">Whitelist IP admin nguồn + cửa sổ thời gian bảo trì được duyệt</span></td></tr>

<tr><td><span class="en">Malware beacon alert (cloud sync)</span><span class="vi">Cảnh báo malware beacon (đồng bộ cloud)</span></td><td><span class="en">OneDrive / Dropbox periodic check-in mimics beacon timing pattern</span><span class="vi">OneDrive / Dropbox check-in định kỳ bắt chước mẫu thời gian beacon</span></td><td><span class="en">Destination IP / domain — resolves to known cloud provider? Valid TLS cert?</span><span class="vi">IP / domain đích — phân giải về nhà cung cấp cloud đã biết? Chứng chỉ TLS hợp lệ không?</span></td><td><span class="en">Whitelist known cloud sync destinations; filter by TLS SNI or JA3</span><span class="vi">Whitelist đích đồng bộ cloud đã biết; lọc theo TLS SNI hoặc JA3</span></td></tr>

<tr><td><span class="en">Exploit alert on AV activity</span><span class="vi">Cảnh báo exploit trên hoạt động AV</span></td><td><span class="en">AV scanning quarantined files that contain exploit strings</span><span class="vi">AV quét file cách ly chứa chuỗi exploit</span></td><td><span class="en">Source process — is it the AV engine? Destination — quarantine folder?</span><span class="vi">Tiến trình nguồn — là AV engine không? Đích — thư mục cách ly không?</span></td><td><span class="en">Exclude AV process name and quarantine paths from signature scope</span><span class="vi">Loại trừ tên tiến trình AV và đường dẫn cách ly khỏi phạm vi chữ ký</span></td></tr>

</table></div>

<div class="callout info"><strong>Exam tip</strong><p><span class="en">CPIA commonly asks: "An IDS alert fires every night at 02:00 from an internal host to an internal server — true positive or false positive?" Think: backup agents, AV updates, patch jobs, and monitoring beacons all run on schedules. Check source / destination, time pattern, and whether the payload matches a genuine attack structure before escalating.</span><span class="vi">CPIA thường hỏi: "Cảnh báo IDS kích hoạt mỗi đêm lúc 02:00 từ host nội bộ đến server nội bộ — true positive hay false positive?" Hãy nghĩ đến: agent sao lưu, cập nhật AV, job vá và beacon giám sát đều chạy theo lịch. Kiểm tra nguồn / đích, mẫu thời gian và liệu payload có khớp với cấu trúc tấn công thực sự trước khi leo thang.</span></p></div>


<h3 class="qz-theory"><span class="en">False Positives, Tuning &amp; Baselining</span><span class="vi">False positive, tinh chỉnh &amp; baseline</span></h3>
<div class="table-wrap"><table><thead><tr><th></th><th><span class="en">Alerted</span><span class="vi">Có cảnh báo</span></th><th><span class="en">Not alerted</span><span class="vi">Không cảnh báo</span></th></tr></thead><tbody>
<tr><td><strong><span class="en">Malicious</span><span class="vi">Độc hại</span></strong></td><td><span class="en">True positive ✓</span><span class="vi">True positive ✓</span></td><td><span class="en"><strong>False negative</strong> (missed — costliest)</span><span class="vi"><strong>False negative</strong> (bỏ sót — tốn kém nhất)</span></td></tr>
<tr><td><strong><span class="en">Benign</span><span class="vi">Lành tính</span></strong></td><td><span class="en">False positive (noise)</span><span class="vi">False positive (nhiễu)</span></td><td><span class="en">True negative ✓</span><span class="vi">True negative ✓</span></td></tr></tbody></table></div>
<ul>
<li><span class="en">High false-positive rates come from over-broad signatures — <strong>tune</strong> them (tighter pattern, context like direction/ports/length, whitelist known-good) rather than disabling the IDS, which removes detection.</span><span class="vi">Tỉ lệ false positive cao đến từ signature quá rộng — <strong>tinh chỉnh</strong> (pattern chặt hơn, bối cảnh như chiều/cổng/độ dài, whitelist known-good) thay vì tắt IDS, vốn mất khả năng phát hiện.</span></li>
<li><span class="en">Triage before acting: e.g. an alert on <code>powershell -enc</code> means a Base64-encoded command — <strong>decode it and judge by context</strong> (admin task vs malicious) first.</span><span class="vi">phân loại trước khi hành động: vd cảnh báo <code>powershell -enc</code> nghĩa là lệnh mã hóa Base64 — <strong>giải mã và xét bối cảnh</strong> (tác vụ admin vs độc hại) trước.</span></li>
<li><span class="en">A network <strong>baseline</strong> of normal hosts/ports/volumes/destinations lets you distinguish genuine anomalies from routine behaviour.</span><span class="vi"><strong>Baseline</strong> mạng về host/cổng/lưu lượng/đích bình thường giúp phân biệt bất thường thật với hành vi định kỳ.</span></li></ul>
`;
