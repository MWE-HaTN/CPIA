/* Theory — B2 (Appendix B). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["b2"]=`<h2>B2 — Network Architectures</h2>

<div class="tier recall" id="b2-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Media &amp; speeds:</strong> <span class="en">CAT5e/6/6a/7 copper + single/multi-mode fibre; 10/100/1000Base-T (Gigabit over twisted pair).</span><span class="vi">Cáp đồng CAT5e/6/6a/7 + cáp quang single/multi-mode; 10/100/1000Base-T (Gigabit qua cáp xoắn).</span></li>
<li><strong>Shared vs switched vs VLAN:</strong> <span class="en">Shared media is easy to sniff; switched sends unicast only to the destination port; VLANs are logical segments — trunk/native-VLAN misconfig enables VLAN hopping.</span><span class="vi">Mạng dùng chung dễ nghe lén; switched chỉ gửi unicast tới cổng đích; VLAN là phân đoạn logic — cấu hình sai trunk/native VLAN cho phép VLAN hopping.</span></li>
<li><strong>NAT:</strong> <span class="en">Many internal hosts share one public IP — hides the true source; correlate NAT/firewall/DHCP logs for attribution.</span><span class="vi">Nhiều host nội bộ dùng chung một IP public — giấu nguồn thật; tương quan log NAT/firewall/DHCP để truy nguyên.</span></li>
<li><strong>Subnets &amp; CIDR:</strong> <span class="en">/26 = 64 addresses (62 hosts); know network/broadcast/usable range and RFC 1918 private ranges.</span><span class="vi">/26 = 64 địa chỉ (62 host); nắm network/broadcast/dải dùng được và các dải private RFC 1918.</span></li>
<li><strong>Routing &amp; ASN:</strong> <span class="en">ASN identifies the network/operator owning a block of IP space (BGP routing domain).</span><span class="vi">ASN xác định mạng/nhà vận hành sở hữu một khối IP (routing domain BGP).</span></li>
<li><strong>Wireless 802.11:</strong> <span class="en">WEP is broken; TKIP is legacy; WPA2 with AES-CCMP is substantially stronger than WEP/TKIP, while WPA3 adds newer protections.</span><span class="vi">WEP đã bị phá; TKIP là legacy; WPA2 với AES-CCMP mạnh hơn đáng kể so với WEP/TKIP, còn WPA3 bổ sung các cơ chế bảo vệ mới hơn.</span></li>
<li><strong>Windows domain:</strong> <span class="en">AD + domain controllers authenticate users (Kerberos/NTLM) and enforce GPO; domain admin = high-value target.</span><span class="vi">AD + domain controller xác thực người dùng (Kerberos/NTLM) và áp GPO; domain admin = mục tiêu giá trị cao.</span></li>
</ul></div></div>

<details class="tier concept" id="b2-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Môi trường truyền &amp; bảo mật shared/switched/VLAN</h4>
<p>Cáp đồng (CAT5e→CAT7) và cáp quang (single-mode cho khoảng xa/đường trục, multi-mode cho trong tòa nhà) ảnh hưởng cách bắt gói. <strong>Hub/shared media</strong> phát mọi frame ra mọi cổng → dễ sniff. <strong>Switch</strong> chỉ gửi unicast tới cổng đích → muốn sniff phải SPAN/TAP hoặc ARP poisoning. <strong>VLAN</strong> phân đoạn logic; nhưng trunk port hoặc native VLAN cấu hình sai cho phép <strong>VLAN hopping</strong> vượt phân đoạn.</p>

<h4>NAT &amp; truy nguyên</h4>
<p>NAT cho nhiều host nội bộ ra ngoài bằng một IP public → <strong>che nguồn thật</strong>. Để truy về máy nội bộ cụ thể, phải <strong>tương quan log NAT/translation + DHCP + firewall</strong> theo thời gian. NAT không mã hóa, không thay thế việc lọc/log.</p>

<h4>Subnet, CIDR &amp; routing</h4>
<p>CIDR /n cho biết số bit network. Ví dụ <strong>/26</strong> = 64 địa chỉ: .0 network, .63 broadcast, .1–.62 dùng được (62 host). Dải private RFC 1918: 10/8, 172.16/12, 192.168/16. <strong>Routing</strong> quyết định đường đi gói; lưu lượng đi đường bất thường (vd qua một workstation làm router) = dấu hiệu pivot. <strong>ASN</strong> gom các khối IP dưới một nhà vận hành (qua BGP) — hữu ích để gom nhóm hạ tầng.</p>

<h4>Windows domain &amp; wireless</h4>
<p><strong>AD</strong>: domain controller xác thực (Kerberos chính, NTLM dự phòng) và áp Group Policy; chiếm domain admin/DC = kiểm soát toàn miền. <strong>Wireless 802.11</strong>: WEP yếu (lỗi IV/RC4), TKIP là legacy, WPA2-AES/CCMP mạnh hơn các chuẩn cũ; WPA3 bổ sung SAE và các cải tiến bảo vệ mới hơn. 802.1X cung cấp kiểm soát truy cập theo cổng (supplicant/authenticator/RADIUS).</p>
</div></details>

<details class="tier reference" id="b2-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Cabling</h4>
<div class="table-wrap"><table>
<tr><th>Type</th><th>Max speed</th><th>Note</th></tr>
<tr><td>CAT5e</td><td>1 Gbps</td><td>Common older copper</td></tr>
<tr><td>CAT6 / 6a</td><td>1–10 Gbps</td><td>6a = full 10G at 100m</td></tr>
<tr><td>CAT7</td><td>10 Gbps</td><td>Shielded, data centre</td></tr>
<tr><td>Single-mode fibre</td><td>Long distance</td><td>Backbones, between buildings</td></tr>
<tr><td>Multi-mode fibre</td><td>Shorter distance</td><td>Inside buildings/racks</td></tr>
</table></div>

<h4>RFC 1918 private ranges &amp; subnet quick facts</h4>
<div class="table-wrap"><table>
<tr><th>Item</th><th>Value</th></tr>
<tr><td>Private ranges</td><td>10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16</td></tr>
<tr><td>/24</td><td>256 addr (254 hosts)</td></tr>
<tr><td>/26</td><td>64 addr (62 hosts)</td></tr>
<tr><td>/27</td><td>32 addr (30 hosts)</td></tr>
<tr><td>fe80::/10</td><td>IPv6 link-local</td></tr>
</table></div>

<h4>Wireless &amp; segmentation security</h4>
<div class="table-wrap"><table>
<tr><th>Item</th><th>Security note</th></tr>
<tr><td>WEP</td><td>Broken (flawed IV/RC4)</td></tr>
<tr><td>WPA2 (AES-CCMP)</td><td>Strong legacy baseline; preferable to WEP/TKIP</td></tr>
<tr><td>WPA3</td><td>Newer protections such as SAE; deployment mode still matters</td></tr>
<tr><td>TKIP</td><td>Legacy, weaker</td></tr>
<tr><td>Shared media</td><td>Easy to sniff</td></tr>
<tr><td>VLAN hopping</td><td>From trunk / native-VLAN misconfig</td></tr>
<tr><td>ASN</td><td>Network/operator owning an IP block</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="b2-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Vẽ L2/L3 path gồm VLAN, trunk, gateway, NAT, VPN, wireless và WAN.</li>
<li>Tính subnet/network/broadcast hoặc IPv6 prefix; xác định route longest-prefix rồi metric.</li>
<li>Xác định điểm quan sát phù hợp: host, access switch, inter-VLAN, egress hay cloud.</li>
<li>Đối chiếu MAC/IP/user qua switch CAM, ARP/ND, DHCP, NAT và authentication logs.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>802.1Q VLAN tag, native VLAN, STP; ARP/IPv6 ND.</li>
<li>Route table, BGP ASN/prefix, NAT translation, DHCP lease.</li>
<li>AD domain/DC/DNS/GPO; 802.11 SSID/BSSID/channel/authentication.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>
<code>ipconfig /all</code>, <code>route print</code>, <code>arp -a</code>
</li>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Linux: <code>ip addr</code>, <code>ip route</code>, <code>ip neigh</code>.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Nguồn internet chỉ thấy một public IP. NAT log ánh xạ public:port về 10.0.4.23; DHCP lease ánh xạ IP đó về MAC/hostname tại đúng thời điểm.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>VLAN là segmentation logic, không tự là security boundary nếu ACL/trunk sai.</li>
<li>MAC và DHCP hostname có thể giả; cần authentication/endpoint evidence.</li>
<li>WPA3 mạnh hơn WPA2; WPA2-AES/CCMP chỉ là lựa chọn tốt trong nhóm chuẩn cũ, không phải mạnh nhất tuyệt đối.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> IEEE 802.1Q/802.11; RFC 1918, 4632, 8200; Microsoft AD documentation.</p>
</div>
</details>`;
