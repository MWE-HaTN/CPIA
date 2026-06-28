/* Theory — D5 (Appendix D). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d5"]=`<h2>D5 — Beaconing</h2><ul>

<li><span class="en">Beaconing is repeated outbound communication from compromised host to C2 or staging infrastructure.</span><span class="vi">Beaconing là giao tiếp ra ngoài lặp đi lặp lại từ host bị xâm phạm đến C2 hoặc cơ sở hạ tầng staging.</span></li>

<li><span class="en">Indicators: regular intervals, jitter, small payloads, uncommon destination, long-lived low-volume flows, DGA domains.</span><span class="vi">Chỉ báo: khoảng thời gian đều đặn, jitter, payload nhỏ, đích không phổ biến, flow tồn tại lâu và lượng thấp, domain DGA.</span></li>

<li><span class="en">Detection: frequency analysis, proxy / DNS logs, Zeek conn.log, JA3, HTTP URI / user-agent patterns, IDS signatures.</span><span class="vi">Phát hiện: phân tích tần số, log proxy / DNS, Zeek conn.log, JA3, mẫu HTTP URI / user-agent, chữ ký IDS.</span></li>

<li><span class="en">Distinguish from legitimate beacons: software update agents, telemetry, NTP, EDR, cloud sync.</span><span class="vi">Phân biệt với beacon hợp lệ: agent cập nhật phần mềm, telemetry, NTP, EDR, đồng bộ cloud.</span></li>

</ul>

<h3>Beaconing Detection Techniques</h3>

<ul>

<li><strong>Interval analysis:</strong> Calculate time between consecutive connections to same destination; look for consistent intervals (e.g., every 60s ± 5s jitter).</li>

<li><strong>Chi-squared test:</strong> Compare observed connection intervals against uniform distribution; beaconing shows low chi-squared p-value (non-random pattern).</li>

<li><strong>FFT (Fast Fourier Transform):</strong> Apply to connection time series; beaconing produces distinct frequency peaks at the beacon interval.</li>

<li><strong>DBSCAN clustering:</strong> Cluster Zeek conn.log entries by destination IP and inter-arrival time; tight clusters with regular spacing indicate beaconing.</li>

<li><strong>Volume analysis:</strong> Beaconing typically shows small, consistent payload sizes; contrast with bulk data transfer.</li>

</ul>

<h3>Legitimate vs Malicious Beacon Patterns</h3>

<div class="table-wrap"><table>

<tr><th>Characteristic</th><th>Legitimate beacon</th><th>Malicious beacon (C2)</th></tr>

<tr><td>Destination</td><td>Known vendor / update domain; resolves to expected IP range</td><td>Recently registered domain; resolves to VPS / cloud IP; DGA-generated</td></tr>

<tr><td>Interval</td><td>Regular but may vary with usage; follows software update schedule</td><td>Very regular with small jitter; may adapt to business hours</td></tr>

<tr><td>Payload size</td><td>Variable; larger for updates</td><td>Small and consistent (check-in); may spike on tasking</td></tr>

<tr><td>Protocol</td><td>Expected for the application (HTTPS for updates)</td><td>May use unusual protocols or ports; DNS for data exfil</td></tr>

<tr><td>TLS fingerprint</td><td>Matches known application (e.g., Windows Update, Chrome)</td><td>JA3 may match known malware or be generic / custom</td></tr>

<tr><td>User-Agent</td><td>Matches legitimate application string</td><td>Generic, missing, or impersonating legitimate browser</td></tr>

</table></div>

<h3>Detection Tools and Covert Beacon Channels</h3><ul><li><strong>RITA (Real Intelligence Threat Analytics):</strong> Purpose-built open-source beacon detector. Ingests Zeek logs → scores connections for interval regularity, long connections, and DNS anomalies automatically.</li><li><strong>Statistical method:</strong> For each src→dst pair: collect timestamps → compute inter-connection intervals → calculate StdDev. Low StdDev = regular = beacon candidate.</li><li><strong>DNS beaconing:</strong> Query <code>[encoded].c2domain.com</code> every N seconds. No TCP needed — bypasses most firewalls. Detect: high query rate to single domain, high-entropy subdomains.</li><li><strong>ICMP beaconing:</strong> Ping to C2 at regular intervals. Data encoded in ICMP echo payload. Detect: non-standard payload size / content, abnormal frequency.</li><li><strong>Sleeping implants:</strong> Very long beacon interval (hours / days) — deliberately evades short-window detection. Requires long observation window.</li></ul>
<h3 class="qz-theory"><span class="en">Beaconing Detection</span><span class="vi">Phát hiện Beaconing</span></h3>
<ul>
<li><strong><span class="en">Signature:</span><span class="vi">Dấu hiệu:</span></strong> <span class="en">Small, regular, periodic callbacks to the <em>same</em> C2 endpoint at near-fixed intervals. Human browsing is irregular and varied.</span><span class="vi">Callback nhỏ, đều đặn, định kỳ tới <em>cùng</em> endpoint C2 ở khoảng gần cố định. Duyệt web của người thì không đều, đa dạng.</span></li>
<li><strong>Jitter:</strong> <span class="en">Attackers randomise the interval (e.g. ±30%) so it no longer looks like a clockwork heartbeat. Robust detection uses <strong>statistical clustering of inter-arrival times</strong> (they still cluster around a mean), not naive fixed-interval rules.</span><span class="vi">Kẻ tấn công ngẫu nhiên hóa khoảng (vd ±30%) để không còn giống nhịp đều như đồng hồ. Phát hiện tốt dùng <strong>phân cụm thống kê thời gian giữa các gói</strong> (vẫn phân cụm quanh một trung bình), không phải rule khoảng cố định ngây thơ.</span></li>
<li><strong><span class="en">Low-and-slow:</span><span class="vi">Low-and-slow:</span></strong> <span class="en">Long-lived, low-volume connections to a single rare external IP over days are a classic C2 signature. Note legitimate updaters/telemetry also beacon — confirm destination reputation and the responsible process.</span><span class="vi">Kết nối tồn tại lâu, lưu lượng thấp tới một IP ngoài hiếm gặp trong nhiều ngày là dấu hiệu C2 kinh điển. Lưu ý updater/telemetry hợp lệ cũng beacon — xác nhận danh tiếng đích và tiến trình chịu trách nhiệm.</span></li></ul>
`;
