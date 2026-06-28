/* Theory — B3 (Appendix B). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["b3"]=`<h2>B3 — Common Classes of Tools</h2><div class="table-wrap"><table><tr><th>Tool class</th><th>Examples</th><th>Use</th></tr><tr><td>Packet capture</td><td>Wireshark, tcpdump, Zeek</td><td>Review packets, sessions, protocol anomalies.</td></tr><tr><td>Log analysis</td><td>SIEM, grep, jq, Chainsaw, EvtxECmd</td><td>Search and correlate event data.</td></tr><tr><td>Memory analysis</td><td>Volatility, Rekall</td><td>Processes, sockets, injection, credentials.</td></tr><tr><td>Host triage</td><td>KAPE, Velociraptor, CyLR, Brimor Labs</td><td>Collect forensic artefacts.</td></tr><tr><td>Reverse engineering</td><td>Ghidra, IDA, x64dbg, strings</td><td>Understand malware functionality.</td></tr><tr><td>OSINT</td><td>WHOIS, Shodan, VirusTotal, OTX</td><td>Infrastructure and reputation pivots.</td></tr><tr><td>Hashing / fuzzy hashing</td><td>sha256sum, ssdeep, TLSH</td><td>Identify known files and similar malware.</td></tr></table></div>

<h3>SIEM — Security Information and Event Management</h3>

<p><span class="en">A SIEM aggregates logs from multiple sources, normalises them into a common schema, applies correlation rules, generates alerts, and enables ad-hoc search across historical data.</span><span class="vi">SIEM tổng hợp log từ nhiều nguồn, chuẩn hóa về schema chung, áp dụng quy tắc tương quan, sinh cảnh báo và cho phép truy vấn tự do trên dữ liệu lịch sử.</span></p>

<ul>

<li><strong>Log Aggregation:</strong> <span class="en">Collect logs from firewalls, proxies, endpoints, cloud, email, and authentication systems.</span><span class="vi">Thu thập log từ tường lửa, proxy, endpoint, cloud, email và hệ thống xác thực.</span></li>

<li><strong>Normalisation:</strong> <span class="en">Convert different log formats into a common schema for consistent querying.</span><span class="vi">Chuyển đổi các định dạng log khác nhau thành schema chung để truy vấn nhất quán.</span></li>

<li><strong>Correlation:</strong> <span class="en">Rule-based (if X then Y) and statistical (anomaly detection) analysis across sources.</span><span class="vi">Phân tích dựa trên quy tắc (nếu X thì Y) và thống kê (phát hiện bất thường) trên nhiều nguồn.</span></li>

<li><strong>Alerting:</strong> <span class="en">Generate alerts when correlation rules match suspicious patterns.</span><span class="vi">Tạo cảnh báo khi quy tắc tương quan khớp với mẫu đáng ngờ.</span></li>

<li><strong>Search / Investigation:</strong> <span class="en">Ad-hoc queries across historical data for incident response.</span><span class="vi">Truy vấn tự do trên dữ liệu lịch sử phục vụ ứng phó sự cố.</span></li>

<li><strong>Dashboards:</strong> <span class="en">Visual overview of security posture and trends.</span><span class="vi">Tổng quan trực quan về tình trạng bảo mật và xu hướng.</span></li>

</ul>

<p><strong>Common platforms:</strong> Splunk, Microsoft Sentinel, Elastic SIEM, IBM QRadar, ArcSight.</p>

<h3>Zeek Output Types</h3>

<div class="table-wrap"><table><tr><th>Log</th><th>Content</th></tr><tr><td><code>conn.log</code></td><td>Connection summaries — src / dst IP, ports, protocol, duration, bytes, state, service</td></tr><tr><td><code>dns.log</code></td><td>DNS queries and responses — query name, qtype, answers, rcode</td></tr><tr><td><code>http.log</code></td><td>HTTP requests — method, host, URI, user-agent, status_code, response_body_len</td></tr><tr><td><code>ssl.log</code></td><td>TLS sessions — version, cipher, server name, client / server certificate info</td></tr><tr><td><code>files.log</code></td><td>File analysis — source, MIME type, SHA-256, extracted files</td></tr><tr><td><code>x509.log</code></td><td>Certificate details parsed from TLS sessions</td></tr><tr><td><code>notice.log</code></td><td>Zeek's built-in detection alerts</td></tr></table></div>

<p><strong>Key advantage:</strong> <span class="en">Structured, searchable logs rather than raw packets, enabling fast correlation and scripting.</span><span class="vi">Log có cấu trúc, có thể tìm kiếm thay vì gói tin thô, giúp tương quan nhanh và viết script.</span></p>

<h3>IDS vs IPS</h3>

<div class="table-wrap"><table><tr><th></th><th>IDS</th><th>IPS</th></tr><tr><td><strong>Action</strong></td><td>Monitors and alerts only</td><td>Monitors, alerts, and can block/drop/reject</td></tr><tr><td><strong>Deployment</strong></td><td>Passive / out-of-band (SPAN / TAP)</td><td>Inline — traffic passes through</td></tr><tr><td><strong>Prevention</strong></td><td>Cannot prevent attacks</td><td>Can prevent attacks in real time</td></tr><tr><td><strong>Performance</strong></td><td>No impact on traffic flow</td><td>Introduces latency; false-positive blocks possible</td></tr><tr><td><strong>Failure mode</strong></td><td>No traffic impact</td><td>"Fail-open" passes all; "fail-closed" blocks all</td></tr></table></div>

<p><span class="en">Both use the same rule / signature engines (Snort, Suricata). Deployment mode determines IDS (passive) vs IPS (inline).</span><span class="vi">Cả hai dùng cùng engine quy tắc / chữ ký (Snort, Suricata). Chế độ triển khai quyết định đây là IDS (thụ động) hay IPS (inline).</span></p>

<h3>SIEM Explained</h3>

<p class="sub-heading">SIEM = Security Information and Event Management</p>

<p><strong>Core Functions</strong></p><ol><li><strong>Log Aggregation</strong> — Collect logs from firewalls, proxies, endpoints, cloud, email, and authentication systems.</li><li><strong>Normalisation</strong> — Convert different log formats into a common schema.</li><li><strong>Correlation</strong> — Rule-based (if X then Y) and statistical (anomaly detection) analysis across sources.</li><li><strong>Alerting</strong> — Generate alerts when correlation rules match.</li><li><strong>Search / Investigation</strong> — Ad-hoc queries across historical data.</li><li><strong>Dashboards</strong> — Visual overview of security posture.</li></ol>

<p class="sub-heading">Correlation Example</p><pre>4625 (failed logon) × 50 from external IP

  → 4624 (successful logon) from same IP

    → 4688 (process creation: powershell.exe)

      → 7045 (service installed: suspicious name)

= Brute force → compromise → persistence chain</pre>

<p><strong>Common platforms:</strong> Splunk, Microsoft Sentinel, Elastic SIEM, IBM QRadar, ArcSight.</p>


<h3 class="qz-theory"><span class="en">Classes of Analysis Tools</span><span class="vi">Các lớp công cụ phân tích</span></h3>
<p><span class="en">Match the tool class to the task:</span><span class="vi">Chọn đúng lớp công cụ cho nhiệm vụ:</span></p>
<div class="table-wrap"><table><thead><tr><th><span class="en">Task</span><span class="vi">Nhiệm vụ</span></th><th><span class="en">Tool class / examples</span><span class="vi">Lớp công cụ / ví dụ</span></th></tr></thead><tbody>
<tr><td><span class="en">Inspect packets</span><span class="vi">Xem gói tin</span></td><td><span class="en">Protocol analyser — Wireshark, tcpdump, NetworkMiner</span><span class="vi">Phân tích giao thức — Wireshark, tcpdump, NetworkMiner</span></td></tr>
<tr><td><span class="en">Machine code → assembly</span><span class="vi">Mã máy → assembly</span></td><td><span class="en">Disassembler — IDA Pro, Ghidra, radare2 (decompiler → pseudo-C)</span><span class="vi">Disassembler — IDA Pro, Ghidra, radare2 (decompiler → pseudo-C)</span></td></tr>
<tr><td><span class="en">Run &amp; inspect at runtime</span><span class="vi">Chạy &amp; soi lúc chạy</span></td><td><span class="en">Debugger — x64dbg, WinDbg, GDB (breakpoints, registers/memory)</span><span class="vi">Debugger — x64dbg, WinDbg, GDB (breakpoint, thanh ghi/bộ nhớ)</span></td></tr>
<tr><td><span class="en">Carve deleted files</span><span class="vi">Carve file đã xóa</span></td><td><span class="en">Forensic/carving — PhotoRec, foremost, Autopsy</span><span class="vi">Forensic/carving — PhotoRec, foremost, Autopsy</span></td></tr>
<tr><td><span class="en">Simulate internet for malware</span><span class="vi">Giả lập internet cho mã độc</span></td><td>INetSim, FakeNet</td></tr></tbody></table></div>
`;
