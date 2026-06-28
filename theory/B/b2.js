/* Theory — B2 (Appendix B). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["b2"]=`<h2>B2 — Network Architectures</h2><ul>

<li><strong>Media:</strong> <span class="en">CAT5/6/7 copper, fibre, 10/100/1000Base Ethernet, single-mode / multi-mode fibre.</span><span class="vi">Cáp đồng CAT5/6/7, cáp quang, Ethernet 10/100/1000Base, cáp quang đơn mode / đa mode.</span></li>

<li><strong>Shared vs switched:</strong> <span class="en">Shared media is easier to sniff; switched networks usually require SPAN / TAP.</span><span class="vi">Mạng dùng chung dễ nghe lén hơn; mạng switched thường cần SPAN hoặc TAP.</span></li>

<li><strong>VLANs:</strong> <span class="en">Logical segmentation; misconfigured trunks or ACLs can expose sensitive networks.</span><span class="vi">Phân đoạn logic; trunk hoặc ACL cấu hình sai có thể làm lộ mạng nhạy cảm.</span></li>

<li><strong>NAT:</strong> <span class="en">Translates private to public addresses; correlate NAT / firewall / DHCP logs for attribution.</span><span class="vi">Chuyển đổi địa chỉ private sang public; tương quan log NAT / firewall / DHCP để truy nguyên.</span></li>

<li><strong>Windows domains:</strong> <span class="en">AD, domain controllers, Kerberos / NTLM, GPO, domain admin risk.</span><span class="vi">AD, domain controller, Kerberos / NTLM, GPO, rủi ro từ domain admin.</span></li>

<li><strong>Routing / Subnets / ASN:</strong> <span class="en">Determine traffic path, ownership, and internet routing context.</span><span class="vi">Xác định đường đi lưu lượng, quyền sở hữu và bối cảnh định tuyến internet.</span></li>

<li><strong>Wireless:</strong> <span class="en">802.11 security depends on encryption, authentication, and rogue AP detection.</span><span class="vi">Bảo mật 802.11 phụ thuộc vào mã hóa, xác thực và phát hiện AP giả mạo.</span></li>

</ul>

<h3>Cable Categories and Fibre Types</h3>

<div class="table-wrap"><table>

<tr><th>Medium</th><th>Typical use</th><th>Investigation relevance</th></tr>

<tr><td>CAT5 / CAT5e</td><td>Legacy / common copper Ethernet</td><td>Usually supports 100 Mbps to 1 Gbps depending on environment.</td></tr>

<tr><td>CAT6</td><td>Modern copper access layer</td><td>Common for 1 Gbps and short-distance 10 Gbps deployments.</td></tr>

<tr><td>CAT6A / CAT7</td><td>Higher bandwidth / shielded copper</td><td>May increase capture throughput requirements.</td></tr>

<tr><td>Single-mode fibre</td><td>Long-distance links / backbones</td><td>Often used between buildings, data centres, or WAN links.</td></tr>

<tr><td>Multi-mode fibre</td><td>Shorter-distance LAN / data-centre links</td><td>Often used inside buildings or racks.</td></tr>

</table></div>

<div class="callout info"><strong>Exam tip:</strong> <span class="en">Media type affects how traffic can be captured. Switched copper or fibre links normally require SPAN, TAP, or device logs rather than passive hub-style sniffing.</span><span class="vi">Loại phương tiện truyền ảnh hưởng đến cách bắt lưu lượng. Cáp đồng hay cáp quang dạng switched thường cần SPAN, TAP hoặc log thiết bị, thay vì nghe lén thụ động kiểu hub.</span></div>

<h3>Kerberos authentication flow and attack patterns</h3>

<div class="table-wrap"><table><tr><th>Step</th><th>Meaning</th><th>Investigation relevance</th></tr><tr><td>AS-REQ / AS-REP</td><td>Client requests and receives a Ticket Granting Ticket from the KDC.</td><td>AS-REP Roasting abuses accounts without pre-authentication.</td></tr><tr><td>TGS-REQ / TGS-REP</td><td>Client requests a service ticket for a target SPN.</td><td>Kerberoasting targets service tickets encrypted with service account keys.</td></tr><tr><td>AP-REQ / AP-REP</td><td>Client presents service ticket to the service.</td><td>Used when validating service access and lateral movement evidence.</td></tr></table></div>

<ul><li><strong>Golden Ticket:</strong> <span class="en">Forged TGT using the KRBTGT hash; indicates severe domain compromise.</span><span class="vi">TGT giả mạo dùng hash KRBTGT; chỉ ra rằng domain đã bị xâm phạm nghiêm trọng.</span></li><li><strong>Silver Ticket:</strong> <span class="en">Forged service ticket for a specific service.</span><span class="vi">Service ticket giả mạo cho một dịch vụ cụ thể.</span></li><li><strong>Kerberoasting:</strong> <span class="en">Requesting service tickets and cracking them offline.</span><span class="vi">Yêu cầu service ticket rồi crack offline.</span></li><li><strong>AS-REP Roasting:</strong> <span class="en">Cracking AS-REP responses for accounts without Kerberos pre-authentication.</span><span class="vi">Crack phản hồi AS-REP cho các tài khoản không yêu cầu Kerberos pre-authentication.</span></li></ul>

<h3>Kerberos Attack Detection Indicators</h3>

<div class="table-wrap"><table>

<tr><th>Attack</th><th>Key detection indicators</th><th>Log source</th></tr>

<tr><td>Golden Ticket</td><td>TGT with unusual lifetime (e.g., 10 years); TGS requests without preceding AS-REQ; Event 4769 with unusual encryption type; KRBTGT password reset not matching TGT frequency.</td><td>Windows Security Event Log (4768, 4769, 4771)</td></tr>

<tr><td>Silver Ticket</td><td>Service ticket used without corresponding TGS-REQ in logs; access to service from unusual source; Event 4769 for service SPN without prior 4768.</td><td>Windows Security Event Log (4769)</td></tr>

<tr><td>Kerberoasting</td><td>Multiple TGS-REQ for different SPNs from single account in short time; Event 4769 with encryption type 0x17 (RC4); requests for SPNs of service accounts.</td><td>Windows Security Event Log (4769)</td></tr>

<tr><td>AS-REP Roasting</td><td>AS-REQ for accounts without pre-authentication; Event 4768 without pre-auth data; bulk AS-REP requests from single source.</td><td>Windows Security Event Log (4768, 4771)</td></tr>

</table></div>

<h3>802.1X and Network Access Control (NAC)</h3>

<p><span class="en">802.1X provides port-based network access control. Devices must authenticate before gaining network access.</span><span class="vi">802.1X cung cấp kiểm soát truy cập mạng dựa trên port. Thiết bị phải xác thực trước khi được phép vào mạng.</span></p>

<ul>

<li><strong>Components:</strong> <span class="en">Supplicant (device), Authenticator (switch / AP), Authentication server (RADIUS).</span><span class="vi">Supplicant (thiết bị), Authenticator (switch / AP), máy chủ xác thực (RADIUS).</span></li>

<li><strong>EAP methods:</strong> <span class="en">EAP-TLS (certificate-based, strongest), PEAP (password in TLS tunnel), EAP-TTLS.</span><span class="vi">EAP-TLS (dựa trên chứng chỉ, mạnh nhất), PEAP (mật khẩu trong tunnel TLS), EAP-TTLS.</span></li>

<li><strong>NAC enforcement:</strong> <span class="en">Check device compliance (patches, AV, domain membership) before granting access.</span><span class="vi">Kiểm tra tuân thủ thiết bị (bản vá, AV, tư cách thành viên domain) trước khi cấp quyền truy cập.</span></li>

<li><strong>Investigation relevance:</strong> <span class="en">NAC logs show which device authenticated, when, from which port, and compliance status.</span><span class="vi">Log NAC cho biết thiết bị nào đã xác thực, khi nào, từ port nào và trạng thái tuân thủ.</span></li>

<li><strong>Bypass risks:</strong> <span class="en">MAC spoofing, rogue devices on unmanaged ports, VLAN hopping, NAC misconfiguration.</span><span class="vi">Giả mạo MAC, thiết bị giả mạo trên port không được quản lý, VLAN hopping, cấu hình sai NAC.</span></li>

<li><strong>Posture assessment:</strong> <span class="en">Non-compliant devices may be quarantined to a remediation VLAN.</span><span class="vi">Thiết bị không tuân thủ có thể bị cách ly vào VLAN khắc phục.</span></li>

</ul>

<div class="callout info"><strong>Exam tip:</strong> <span class="en">802.1X logs from RADIUS can correlate with DHCP and authentication logs to identify which physical device was connected at a specific time.</span><span class="vi">Log 802.1X từ RADIUS có thể tương quan với log DHCP và xác thực để xác định thiết bị vật lý nào đã kết nối vào một thời điểm cụ thể.</span></div>

<p class="sub-heading">Cable Categories (CAT)</p><div class="table-wrap"><table><tr><th>Category</th><th>Max Speed</th><th>Notes</th></tr><tr><td><strong>CAT 5</strong></td><td>100 Mbps</td><td>Legacy; largely replaced</td></tr><tr><td><strong>CAT 5e</strong></td><td>1 Gbps</td><td>Most common in older deployments</td></tr><tr><td><strong>CAT 6</strong></td><td>1 Gbps (10G up to 55m)</td><td>Reduced crosstalk vs CAT 5e</td></tr><tr><td><strong>CAT 6a</strong></td><td>10 Gbps</td><td>Full 10G at 100m</td></tr><tr><td><strong>CAT 7</strong></td><td>10 Gbps</td><td>Shielded — data centre use</td></tr><tr><td><strong>CAT 8</strong></td><td>25/40 Gbps</td><td>Short-range (&lt;30m) data centre</td></tr></table></div>
<h3 class="qz-theory"><span class="en">Switching, VLANs &amp; ARP</span><span class="vi">Switching, VLAN &amp; ARP</span></h3>
<ul>
<li><span class="en">A <strong>hub</strong> repeats every frame to all ports (trivial sniffing); a <strong>switch</strong> forwards unicast only to the destination port. To sniff on a switch an attacker uses <strong>ARP poisoning</strong> (MITM). VLANs add isolation but <strong>VLAN hopping</strong> (switch-spoofing/DTP or double-tagging on a mismatched native VLAN) can defeat it.</span><span class="vi"><strong>Hub</strong> lặp mọi frame ra mọi cổng (dễ sniff); <strong>switch</strong> chỉ chuyển unicast tới cổng đích. Để sniff trên switch, kẻ tấn công dùng <strong>ARP poisoning</strong> (MITM). VLAN tăng cô lập nhưng <strong>VLAN hopping</strong> (switch-spoofing/DTP hoặc double-tagging trên native VLAN không khớp) có thể phá.</span></li></ul>
<h3><span class="en">IP Addressing &amp; Subnetting</span><span class="vi">Địa chỉ IP &amp; Subnetting</span></h3>
<p><span class="en">RFC 1918 private ranges: <code>10.0.0.0/8</code>, <code>172.16.0.0/12</code> (172.16–172.31 only — 172.32+ is public), <code>192.168.0.0/16</code>. Subnet math: a /26 = 64 addresses (62 usable), a /27 = 32 (30 usable).</span><span class="vi">Dải riêng RFC 1918: <code>10.0.0.0/8</code>, <code>172.16.0.0/12</code> (chỉ 172.16–172.31 — 172.32 trở đi là công khai), <code>192.168.0.0/16</code>. Toán subnet: /26 = 64 địa chỉ (62 dùng được), /27 = 32 (30 dùng được).</span></p>
<div class="table-wrap"><table><thead><tr><th>CIDR</th><th>Mask</th><th><span class="en">Addresses / usable</span><span class="vi">Địa chỉ / dùng được</span></th><th><span class="en">Example block</span><span class="vi">Khối ví dụ</span></th></tr></thead><tbody>
<tr><td>/26</td><td>255.255.255.192</td><td>64 / 62</td><td><span class="en">.0 net, .63 bcast → .1–.62</span><span class="vi">.0 net, .63 bcast → .1–.62</span></td></tr>
<tr><td>/27</td><td>255.255.255.224</td><td>32 / 30</td><td><span class="en">.64 net, .95 bcast → .65–.94</span><span class="vi">.64 net, .95 bcast → .65–.94</span></td></tr></tbody></table></div>
<ul>
<li><strong>NAT/PAT:</strong> <span class="en">Many internal hosts share one public IP, hiding the true source — resolve via firewall translation logs + internal DHCP.</span><span class="vi">Nhiều host nội bộ dùng chung một IP công khai, che nguồn thật — xác định qua log dịch NAT của firewall + DHCP nội bộ.</span></li>
<li><strong>ASN:</strong> <span class="en">Identifies the routing domain/operator owning a block of IP space — cluster related infrastructure and find the hosting/ISP.</span><span class="vi">Xác định miền định tuyến/nhà vận hành sở hữu một khối IP — gom hạ tầng liên quan và tìm nhà hosting/ISP.</span></li>
<li><strong>MAC OUI:</strong> <span class="en">First 24 bits = vendor (IEEE-assigned); can expose virtualisation (VMware/VirtualBox OUIs).</span><span class="vi">24 bit đầu = hãng (IEEE cấp); có thể lộ ảo hóa (OUI VMware/VirtualBox).</span></li>
<li><strong>1000BASE-T</strong> = <span class="en">Gigabit Ethernet over twisted-pair copper. <strong>Active Directory:</strong> domain controllers centralise authentication (Kerberos/NTLM) and policy (GPO), and rely on DNS; a compromised DC (NTDS.dit) can yield domain-wide credentials.</span><span class="vi">Gigabit Ethernet trên cáp đồng xoắn đôi. <strong>Active Directory:</strong> domain controller tập trung xác thực (Kerberos/NTLM) và chính sách (GPO), phụ thuộc DNS; một DC bị xâm nhập (NTDS.dit) có thể lộ credential toàn miền.</span></li></ul>
`;
