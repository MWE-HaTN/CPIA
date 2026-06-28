/* Theory — C5 (Appendix C). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["c5"]=`<h2>C5 — Community Knowledge</h2><ul>

<li><span class="en">Interpret AV names cautiously; naming is not standardised across vendors.</span><span class="vi">Diễn giải tên AV một cách thận trọng; tên gọi không được chuẩn hóa giữa các nhà cung cấp.</span></li>

<li><span class="en">VirusTotal detection ratio is context, not proof; 1/70 may be false positive or targeted malware, 40/70 usually indicates known malware.</span><span class="vi">Tỷ lệ phát hiện VirusTotal là bối cảnh, không phải bằng chứng; 1/70 có thể là false positive hoặc malware nhắm mục tiêu, 40/70 thường cho thấy malware đã biết.</span></li>

<li><span class="en">Use sandbox reports to understand behaviour rather than relying only on labels.</span><span class="vi">Dùng báo cáo sandbox để hiểu hành vi thay vì chỉ dựa vào nhãn phân loại.</span></li>

<li><span class="en">Eliminate false positives by correlating with internal context: scanner activity, admin tool use, maintenance windows, and known business systems.</span><span class="vi">Loại bỏ false positive bằng cách tương quan với bối cảnh nội bộ: hoạt động scanner, sử dụng công cụ quản trị, cửa sổ bảo trì và hệ thống kinh doanh đã biết.</span></li>

</ul><div class="table-wrap"><table><tr><th>Resource</th><th>Use</th></tr><tr><td>VirusTotal</td><td>File / URL / domain / IP reputation and behaviour.</td></tr><tr><td>MalwareBazaar / abuse.ch</td><td>Malware samples, C2 trackers, URLhaus, ThreatFox.</td></tr><tr><td>AlienVault OTX</td><td>Community IoCs and threat pulses.</td></tr><tr><td>MITRE ATT&amp;CK</td><td>Technique mapping and actor / tool references.</td></tr><tr><td>CISA / NCSC / ENISA</td><td>Authoritative advisories.</td></tr><tr><td>SANS ISC</td><td>Community incident diaries and trend monitoring.</td></tr><tr><td>NVD / CVE</td><td>Vulnerability data and CVSS.</td></tr></table></div>

<h3>Interpreting Open-Source Research &amp; Eliminating False Positives</h3>

<ul>

<li><span class="en">Cross-reference findings across multiple sources before concluding malicious — one AV detection is not confirmation</span><span class="vi">Tham chiếu chéo phát hiện qua nhiều nguồn trước khi kết luận là độc hại — một phát hiện AV không phải là xác nhận</span></li>

<li><span class="en">Check VirusTotal detection ratio: 1/70 = likely FP; 40+/70 = high confidence malicious</span><span class="vi">Kiểm tra tỷ lệ phát hiện VirusTotal: 1/70 = có thể false positive; 40+/70 = độ tin cậy cao là độc hại</span></li>

<li><span class="en">Read sandbox reports (Any.run, Cuckoo) to understand actual behaviour, not just detection</span><span class="vi">Đọc báo cáo sandbox (Any.run, Cuckoo) để hiểu hành vi thực tế, không chỉ phát hiện</span></li>

<li><span class="en">Check MITRE ATT&amp;CK for technique context — understand if observed behaviour matches known TTPs</span><span class="vi">Kiểm tra MITRE ATT&amp;CK để có bối cảnh kỹ thuật — hiểu xem hành vi quan sát có khớp với TTP đã biết không</span></li>

<li><span class="en">Verify IoCs against multiple threat intel feeds before blocking or escalating</span><span class="vi">Xác minh IoC với nhiều feed threat intel trước khi chặn hoặc leo thang</span></li>

</ul>

<h3>Popular Open-Source Security Resources</h3>

<div class="table-wrap"><table>

<tr><th>Resource</th><th>Type</th><th>Use</th></tr>

<tr><td>VirusTotal</td><td>Multi-AV scanner</td><td>File / URL / IP / domain reputation</td></tr>

<tr><td>MalwareBazaar</td><td>Sample repo</td><td>Download / search malware samples with context</td></tr>

<tr><td>AlienVault OTX</td><td>Threat intel feed</td><td>IoC sharing, threat pulses</td></tr>

<tr><td>Shodan</td><td>Device search</td><td>Internet-facing host discovery</td></tr>

<tr><td>MITRE ATT&amp;CK</td><td>TTP framework</td><td>Map behaviours to tactics / techniques</td></tr>

<tr><td>CVE / NVD</td><td>Vulnerability DB</td><td>CVE details, CVSS scores, affected products</td></tr>

<tr><td>Exploit-DB</td><td>Exploit repo</td><td>PoC exploits for known CVEs</td></tr>

<tr><td>abuse.ch</td><td>Threat tracking</td><td>Feodo Tracker (C2 IPs), URLhaus, ThreatFox</td></tr>

<tr><td>SANS ISC</td><td>Community reporting</td><td>Daily threat diaries, port monitoring</td></tr>

</table></div>


<h3 class="qz-theory"><span class="en">Community Knowledge, Reputation &amp; Sharing</span><span class="vi">Tri thức cộng đồng, danh tiếng &amp; chia sẻ</span></h3>
<ul>
<li><strong><span class="en">AV verdicts:</span><span class="vi">Phán quyết AV:</span></strong> <span class="en">"Generic"/"Heuristic" names are low-confidence broad detections, not authoritative family IDs; vendor naming is inconsistent. AV flags false positives and legitimate dual-use tools (PsExec, PowerShell) — corroborate by behaviour and multiple sources; the most reliable way to clear a false positive is cross-source corroboration + context.</span><span class="vi">Tên "Generic"/"Heuristic" là phát hiện rộng độ tin thấp, không phải định danh họ có thẩm quyền; cách đặt tên giữa các hãng không nhất quán. AV gắn cờ false positive và công cụ lưỡng dụng hợp lệ (PsExec, PowerShell) — đối chiếu hành vi và nhiều nguồn; cách đáng tin nhất để loại false positive là đối chiếu chéo + bối cảnh.</span></li>
<li><strong><span class="en">Reputation &amp; OPSEC:</span><span class="vi">Danh tiếng &amp; OPSEC:</span></strong> <span class="en">To check a sample, <em>search its hash</em> on a multi-engine service rather than uploading the file — uploading a sensitive/targeted sample can leak victim data and alert the attacker. (No detections ≠ clean.) Online sandboxes (Any.Run, Hybrid Analysis) carry the same exposure risk for targeted incidents.</span><span class="vi">Để kiểm tra một mẫu, <em>tra hash của nó</em> trên dịch vụ đa engine thay vì upload file — upload mẫu nhạy cảm/nhắm mục tiêu có thể rò dữ liệu nạn nhân và báo động kẻ tấn công. (Không có phát hiện ≠ sạch.) Sandbox trực tuyến (Any.Run, Hybrid Analysis) cũng có rủi ro phơi nhiễm tương tự với sự cố nhắm mục tiêu.</span></li>
<li><strong><span class="en">Community sources:</span><span class="vi">Nguồn cộng đồng:</span></strong> <span class="en"><strong>abuse.ch</strong> (URLhaus = malware URLs, MalwareBazaar = samples, Feodo Tracker = botnet C2, SSLBL); <strong>YARA</strong> rules describe patterns to detect/hunt malware families; <strong>CVE/NVD</strong> map identified software versions to known vulnerabilities/exploits.</span><span class="vi"><strong>abuse.ch</strong> (URLhaus = URL mã độc, MalwareBazaar = mẫu, Feodo Tracker = C2 botnet, SSLBL); rule <strong>YARA</strong> mô tả mẫu để phát hiện/săn họ mã độc; <strong>CVE/NVD</strong> ánh xạ phiên bản phần mềm đã xác định tới lỗ hổng/exploit đã biết.</span></li>
<li><strong><span class="en">Traffic Light Protocol (TLP):</span><span class="vi">Traffic Light Protocol (TLP):</span></strong> <span class="en">Governs sharing — <strong>RED</strong> (named recipients only) → <strong>AMBER</strong> (recipient's org/clients, need-to-know) → <strong>GREEN</strong> (community) → <strong>CLEAR/WHITE</strong> (public).</span><span class="vi">Điều chỉnh việc chia sẻ — <strong>RED</strong> (chỉ người nhận được nêu tên) → <strong>AMBER</strong> (tổ chức/khách của người nhận, cần-mới-biết) → <strong>GREEN</strong> (cộng đồng) → <strong>CLEAR/WHITE</strong> (công khai).</span></li></ul>
`;
