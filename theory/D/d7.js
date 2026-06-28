/* Theory — D7 (Appendix D). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d7"]=`<h2>D7 — Command and Control Channels</h2><ul>

<li><span class="en">C2 can be overt or covert over HTTP / S, DNS, SMTP, IRC, ICMP, SMB, cloud APIs, or social platforms.</span><span class="vi">C2 có thể công khai hoặc bí mật qua HTTP / S, DNS, SMTP, IRC, ICMP, SMB, API cloud hoặc nền tảng mạng xã hội.</span></li>

<li><span class="en">Detection: statistical patterns, known IoCs, protocol anomalies, domain age, beacon interval, URI patterns, headers, JA3, DNS TXT / subdomain abuse.</span><span class="vi">Phát hiện: mẫu thống kê, IoC đã biết, bất thường giao thức, tuổi domain, khoảng beacon, mẫu URI, header, JA3, lạm dụng DNS TXT / subdomain.</span></li>

<li><span class="en">Common evasion: HTTPS, domain fronting, fast-flux, DGA, CDN use, encrypted payloads, user-agent impersonation.</span><span class="vi">Trốn tránh phổ biến: HTTPS, domain fronting, fast-flux, DGA, dùng CDN, payload mã hóa, giả mạo user-agent.</span></li>

<li><span class="en">Manual review should answer: who talked to whom, how often, what protocol, what data volume, and what changed after contact.</span><span class="vi">Xem xét thủ công nên trả lời: ai giao tiếp với ai, tần suất thế nào, giao thức gì, lượng dữ liệu bao nhiêu và gì đã thay đổi sau khi liên lạc.</span></li>

</ul>

<h3>Cloud-Based C2</h3>

<p><span class="en">Attackers increasingly abuse legitimate cloud services for C2 to blend with normal traffic and bypass allowlist-based security controls.</span><span class="vi">Kẻ tấn công ngày càng lạm dụng các dịch vụ cloud hợp pháp cho C2 để hòa lẫn với lưu lượng bình thường và vượt qua kiểm soát bảo mật dựa trên allowlist.</span></p>

<div class="table-wrap"><table>

<tr><th>Platform</th><th>Abuse method</th><th>Detection</th></tr>

<tr><td>OneDrive / SharePoint</td><td>Store payloads or receive tasking via shared files; beacon to Microsoft Graph API.</td><td>Unusual API calls; access from unexpected endpoints; large downloads from shared links.</td></tr>

<tr><td>Google Drive</td><td>Host payloads; exfiltrate data via upload; receive commands via document edits.</td><td>OAuth tokens from unexpected apps; large uploads; access patterns outside normal user behaviour.</td></tr>

<tr><td>Slack / Teams</td><td>Use webhooks or bot APIs for bidirectional C2; send commands via messages.</td><td>Webhook creation by non-admin users; messages to unknown channels; API calls from unexpected IPs.</td></tr>

<tr><td>Telegram</td><td>Bot API for command relay; channels for payload distribution.</td><td>API calls to api.telegram.org from non-browser processes; unusual outbound Telegram traffic volume.</td></tr>

<tr><td>AWS / Azure / GCP</td><td>Use serverless functions (Lambda, Azure Functions) as C2 relay; abuse cloud metadata APIs.</td><td>Unexpected Lambda invocations; metadata API access from compromised instances; unusual API call patterns.</td></tr>

</table></div>

<h3>Common C2 Frameworks and Indicators</h3>

<div class="table-wrap"><table>

<tr><th>Framework</th><th>Typical indicators</th></tr>

<tr><td>Cobalt Strike</td><td>Default JA3 hash; "/jquery-3.3.1.min.js" URI pattern; named pipe "\\\\msagent_XX"; Beacon config in memory; DNS TXT beaconing; watermark in metadata.</td></tr>

<tr><td>Sliver</td><td>mTLS or WireGuard C2; unusual certificate patterns; default HTTP headers; DNS-over-HTTPS C2; generate binary with embedded config.</td></tr>

<tr><td>Brute Ratel</td><td>Designed to evade EDR; uses syscall-based execution; encrypted memory artifacts; HTTP / DNS / DoH C2; attempts to blend with legitimate traffic patterns.</td></tr>

<tr><td>Mythic</td><td>GraphQL-based C2 communication; REST API on management port; agent callbacks with JSON structure; supports multiple C2 profiles (HTTP, DNS, SMB, WebSocket).</td></tr>

<tr><td>Metasploit / Meterpreter</td><td>Default stage URI "/XXXX"; known payload hashes; reverse_tcp / reverse_http patterns; stdapi extension loading.</td></tr>

</table></div>

<div class="callout warning"><strong>Exam tip:</strong> <span class="en">C2 frameworks can be customised to change default indicators. Do not rely solely on default signatures — combine with behavioural analysis (beaconing, data volume, endpoint telemetry).</span><span class="vi">Framework C2 có thể được tùy chỉnh để thay đổi chỉ báo mặc định. Không chỉ dựa vào chữ ký mặc định — kết hợp với phân tích hành vi (beacon, khối lượng dữ liệu, telemetry endpoint).</span></div>

<h3>DNS-Based C2 and Domain Fronting Detail</h3><ul><li><strong>DNS C2 mechanism:</strong> Implant encodes results in DNS subdomain queries: <code>base64chunk.c2domain.com</code>. Attacker answers with encoded commands in DNS response (TXT, CNAME, A records).</li><li><strong>Detection:</strong> High query rate to single domain, subdomain labels &gt;50 chars, high Shannon entropy subdomains (~5.0 bits / char vs legitimate ~3.5), unusual query types (TXT, NULL, CNAME in high volume)</li><li><strong>Domain fronting:</strong> HTTPS request — SNI shows legitimate CDN (cloudflare.com), Host header routes to attacker backend. Firewall sees legit CDN → allows. Detection: TLS inspection; compare SNI vs Host header mismatch.</li></ul>

<div class="callout danger"><strong>Why DNS C2 is dangerous — bypass mechanism</strong><p><span class="en">Implant sends queries via <strong>UDP port 53</strong> — no TCP connection needed. Firewalls typically allow outbound DNS unconditionally. No TCP handshake → no connection log. Data is encoded in subdomains: <code>base64data.c2domain.com</code>. Detection is only possible through DNS log analysis (RITA, Zeek dns.log, Shannon entropy of subdomains).</span><span class="vi">Implant gửi truy vấn qua <strong>UDP port 53</strong> — không cần kết nối TCP. Tường lửa thường cho phép DNS ra ngoài vô điều kiện. Không có TCP handshake → không có log kết nối. Dữ liệu được mã hóa trong subdomain: <code>base64data.c2domain.com</code>. Chỉ có thể phát hiện thông qua phân tích log DNS (RITA, Zeek dns.log, Shannon entropy của subdomain).</span></p></div>
<h3 class="qz-theory"><span class="en">Command &amp; Control Channels</span><span class="vi">Kênh điều khiển từ xa (C2)</span></h3>
<ul>
<li><strong><span class="en">Covert channels:</span><span class="vi">Kênh ngầm:</span></strong> <span class="en">DNS tunnelling (commands in subdomain labels, responses in TXT) and ICMP echo payloads hide C2 inside normally-allowed protocols; detect via anomaly/volume analysis, not port blocking.</span><span class="vi">DNS tunnelling (lệnh trong nhãn subdomain, phản hồi trong TXT) và payload ICMP echo giấu C2 trong giao thức thường được cho phép; phát hiện qua phân tích bất thường/lưu lượng, không phải chặn cổng.</span></li>
<li><strong>HTTP(S) C2:</strong> <span class="en">Regular GET (fetch task) / POST (return Base64/encrypted result) to a fixed URI; a newly-registered domain + self-signed cert + rare JA3 + regular POSTs strongly fits framework C2 (Cobalt Strike-style). Default C2 profiles have recognisable URIs/headers/JA3/named pipes — operators customise them, so combine network + host indicators.</span><span class="vi">GET đều đặn (lấy tác vụ) / POST (trả kết quả Base64/đã mã hóa) tới một URI cố định; domain mới đăng ký + cert tự ký + JA3 hiếm + POST đều rất khớp C2 framework (kiểu Cobalt Strike). Profile C2 mặc định có URI/header/JA3/named pipe nhận ra được — người vận hành tùy biến, nên kết hợp chỉ dấu mạng + host.</span></li>
<li><strong><span class="en">Evasion:</span><span class="vi">Né tránh:</span></strong> <span class="en"><em>Domain fronting</em> uses a permitted domain in the TLS SNI while the encrypted Host header routes to the C2 behind the same CDN; <em>living off trusted services</em> (paste sites, Telegram, cloud APIs) defeats domain-reputation blocking — shift to behavioural detection.</span><span class="vi"><em>Domain fronting</em> dùng một domain được phép trong SNI của TLS trong khi host header đã mã hóa định tuyến tới C2 sau cùng CDN; <em>living off trusted services</em> (trang paste, Telegram, API đám mây) vô hiệu chặn theo danh tiếng domain — chuyển sang phát hiện theo hành vi.</span></li></ul>
`;
