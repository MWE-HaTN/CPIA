/* Theory — D3 (Appendix D). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d3"]=`<h2>D3 — Network Configuration Security Issues</h2><ul>

<li><span class="en">Detect routing issues, DNS leakage, unexpected traffic paths, email-routing errors, and firewall / rule failures.</span><span class="vi">Phát hiện sự cố định tuyến, rò rỉ DNS, đường đi lưu lượng bất ngờ, lỗi định tuyến email và lỗi tường lửa / quy tắc.</span></li>

<li><span class="en">Firewall / proxy bypass indicators: direct internet access, non-proxy ports, split tunneling, unmonitored IPv6, rogue DNS resolvers.</span><span class="vi">Chỉ báo vượt qua tường lửa / proxy: truy cập internet trực tiếp, cổng không qua proxy, split tunneling, IPv6 không giám sát, resolver DNS giả mạo.</span></li>

<li><span class="en">Evidence: traceroute / path logs, firewall denies / permits, proxy bypass logs, DNS queries, mail headers, routing tables.</span><span class="vi">Bằng chứng: log traceroute / đường đi, từ chối / cho phép tường lửa, log vượt proxy, truy vấn DNS, header email, bảng định tuyến.</span></li>

</ul>

<p class="sub-heading">Specific Misconfiguration Examples</p>

<p><strong>DNS leakage</strong></p><p>Internal host queries an external DNS server (e.g., 8.8.8.8) instead of the approved internal resolver. This exposes internal domain names to an external observer. <strong>Detection:</strong> DNS query logs showing internal hosts as source and non-approved DNS servers as destination.</p>

<p class="sub-heading">Split tunneling</p><p>VPN client routes only corporate traffic through the tunnel; all other traffic goes direct to the internet. An attacker on a compromised VPN host can reach both the internal network and external C2 simultaneously. <strong>Detection:</strong> VPN client configuration audit, simultaneous routes to internal and external destinations from the same host.</p>

<p class="sub-heading">Rogue DNS resolver</p><p>Host uses a DNS server not on the approved list. Risk of DNS hijacking, cache poisoning, or traffic interception. <strong>Detection:</strong> DNS server field in DHCP logs compared against the approved resolver list.</p>

<p class="sub-heading">Email routing errors</p><p>MX records pointing to unexpected hosts, or missing SPF / DKIM / DMARC records. Enables email spoofing and phishing. <strong>Detection:</strong> DNS MX record audit, email header Received-chain analysis.</p>

<p class="sub-heading">Default credentials on network devices</p><p>Network devices running with default SNMP community strings (public / private) or default admin passwords. Enables unauthorised access and configuration theft. <strong>Detection:</strong> SNMP scan results, authentication logs showing default usernames.</p>

<p class="sub-heading">Firewall and Proxy Bypass Indicators</p><ul><li><strong>Protocol tunneling:</strong> SSH over HTTPS, C2 over DNS — blocked protocol carried inside allowed one. Detect with DPI — verify protocol matches port.</li><li><strong>Rogue DNS resolver:</strong> Host configured with external DNS bypassing corporate resolver. DNS logging gap. Detect: queries not going to authorised internal resolvers.</li><li><strong>Direct internet access:</strong> Host accessing internet without proxy. Detect: firewall hits to internet IPs from hosts absent in proxy logs.</li><li><strong>IPv6 bypass:</strong> IPv4 filtered but IPv6 unmonitored. Detect: ensure IPv6 firewall rules equivalent to IPv4 rules.</li><li><strong>Split tunneling:</strong> VPN client allows local and internet access simultaneously — traffic bypasses corporate inspection.</li></ul>


<h3 class="qz-theory"><span class="en">Network Configuration Security Issues</span><span class="vi">Vấn đề bảo mật cấu hình mạng</span></h3>
<ul>
<li><strong><span class="en">Information leakage:</span><span class="vi">Rò rỉ thông tin:</span></strong> <span class="en">Internal hostnames/IPs exposed to the internet via DNS (split-horizon misconfig, verbose responses, zone transfers) hands attackers reconnaissance.</span><span class="vi">Hostname/IP nội bộ lộ ra internet qua DNS (cấu hình split-horizon sai, phản hồi quá chi tiết, zone transfer) trao recon cho kẻ tấn công.</span></li>
<li><strong><span class="en">Egress &amp; rule gaps:</span><span class="vi">Lỗ hổng egress &amp; rule:</span></strong> <span class="en">Under default-deny egress, anything leaving on an unexpected port means a misconfigured/overly broad rule or a deliberate bypass; unexpected routes (a workstation acting as a router) can be an attacker pivot.</span><span class="vi">Với egress default-deny, bất cứ gì thoát ra trên cổng bất ngờ nghĩa là rule cấu hình sai/quá rộng hoặc cố ý lách; đường đi bất ngờ (máy trạm đóng vai router) có thể là pivot của kẻ tấn công.</span></li>
<li><strong><span class="en">Exposure:</span><span class="vi">Phơi nhiễm:</span></strong> <span class="en">Internet-facing RDP (3389)/SMB (445) are prime brute-force/exploit targets (common initial access) — should sit behind VPN/MFA. An <strong>open mail relay</strong> forwards mail for anyone, abusable for spam/spoofing. A <strong>split-tunnel VPN</strong> lets some endpoint traffic bypass corporate inspection.</span><span class="vi">RDP (3389)/SMB (445) hướng internet là mục tiêu brute-force/khai thác hàng đầu (truy cập ban đầu phổ biến) — nên nằm sau VPN/MFA. <strong>Open relay</strong> chuyển tiếp thư cho bất kỳ ai, bị lạm dụng spam/giả mạo. <strong>VPN split-tunnel</strong> để một phần lưu lượng endpoint lách kiểm tra của doanh nghiệp.</span></li></ul>
`;
