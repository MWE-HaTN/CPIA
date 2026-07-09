/* Theory — D1 (Appendix D). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d1"]=`<h2>D1 — Network Traffic Capture</h2>

<div class="tier recall" id="d1-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>TAP vs SPAN:</strong> <span class="en">A passive TAP generally provides a more faithful copy of the link than SPAN. SPAN can drop/reorder frames under load; the collector behind either method can still lose packets.</span><span class="vi">TAP thụ động thường cho bản sao đường truyền đầy đủ hơn SPAN. SPAN có thể rớt/đổi thứ tự frame khi tải cao; collector phía sau cả hai phương pháp vẫn có thể mất gói.</span></li>
<li><strong>Capture options:</strong> <span class="en">Full packet capture (everything, storage-heavy), limited capture, or NetFlow (metadata only — lightweight).</span><span class="vi">Full packet capture (toàn bộ, tốn lưu trữ), limited capture, hoặc NetFlow (chỉ metadata — nhẹ).</span></li>
<li><strong>Deployment location:</strong> <span class="en">Place at the internet egress/perimeter choke point to see all traffic entering/leaving.</span><span class="vi">Đặt tại điểm thắt egress/biên internet để thấy mọi lưu lượng vào/ra.</span></li>
<li><strong>Promiscuous/monitor mode:</strong> <span class="en">The NIC must be in promiscuous mode to capture frames not addressed to it.</span><span class="vi">NIC phải ở chế độ promiscuous để bắt cả frame không gửi cho nó.</span></li>
<li><strong>Storage estimate:</strong> <span class="en">Capture sizing ≈ link throughput × duration × a retention factor.</span><span class="vi">Ước lượng lưu trữ ≈ throughput đường × thời lượng × hệ số lưu giữ.</span></li>
<li><strong>Integrity:</strong> <span class="en">Hash a PCAP at acquisition and retain the hash so later copies can be checked for change; BPF filters apply at capture time.</span><span class="vi">Hash PCAP lúc thu và giữ lại hash để kiểm tra các bản sao về sau có thay đổi hay không; BPF filter áp lúc bắt.</span></li>
<li><strong>Deployment risk &amp; tool limits:</strong> <span class="en">Assess and document the network change; secure the sensor and management path. SPAN oversubscription, packet loss, encryption and capture filters can all create blind spots.</span><span class="vi">Đánh giá và ghi lại thay đổi mạng; bảo vệ sensor và đường quản trị. SPAN quá tải, mất gói, mã hóa và capture filter đều có thể tạo điểm mù.</span></li>
</ul></div></div>

<details class="tier concept" id="d1-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Cách &amp; nơi thu thập</h4>
<p><strong>TAP</strong> (Test Access Point) sao chép thụ động lưu lượng trên đường truyền và thường trung thực hơn SPAN; tuy nhiên cổng monitor, NIC, buffer hoặc disk của collector vẫn có thể rớt gói. <strong>SPAN/mirror port</strong> trên switch sao chép traffic ra một cổng — tiện nhưng <em>có thể rớt hoặc đổi thứ tự frame khi tải cao</em> vì switch ưu tiên chuyển mạch. <strong>Aggregating TAP</strong> gộp nhiều đường và cũng có nguy cơ oversubscription. Đặt thiết bị ở điểm quan sát phù hợp với câu hỏi điều tra, không mặc định mọi trường hợp đều là egress.</p>

<h4>Lựa chọn mức bắt &amp; ước lượng dung lượng</h4>
<p><strong>Full packet capture</strong>: lưu toàn bộ payload — đầy đủ nhất nhưng <em>tốn lưu trữ khổng lồ</em>. <strong>NetFlow/flow records</strong>: chỉ metadata (ai-nói-với-ai, byte, thời gian) — nhẹ, hợp giám sát dài hạn để bắt beaconing/exfil. Khi scoping, ước lượng dung lượng ≈ <em>throughput × thời lượng × hệ số lưu giữ</em> để không làm tràn thiết bị bắt.</p>

<h4>Tác động &amp; toàn vẹn</h4>
<p>Đưa thiết bị bắt vào mạng phải <strong>đánh giá tác động</strong> (không gây gián đoạn, không thành điểm yếu), phê duyệt thay đổi, harden sensor và tách/bảo vệ đường quản trị. Để bảo đảm/chứng minh tính toàn vẹn của dữ liệu thu: <strong>hash PCAP</strong> ngay khi acquire và lưu hash; ghi lại cấu hình thiết bị, vị trí, thời gian. <strong>Giới hạn công cụ</strong> phải được nêu rõ: SPAN quá tải có thể rớt gói; lưu lượng mã hóa che payload; snap length/BPF filter có thể bỏ sót dữ liệu. <strong>BPF capture filter</strong> (vd <code>tcp port 443</code>) áp <em>lúc bắt</em>, trước khi lưu — giảm dung lượng nhưng cũng có thể bỏ sót.</p>
</div></details>

<details class="tier reference" id="d1-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Capture methods</h4>
<div class="table-wrap"><table>
<tr><th>Method</th><th>Pros</th><th>Cons</th></tr>
<tr><td>Network TAP</td><td>Passive, generally faithful link copy</td><td>Hardware/inline change; downstream collector can still drop</td></tr>
<tr><td>SPAN / mirror port</td><td>Easy, no extra hardware</td><td>Can drop frames under load</td></tr>
<tr><td>Aggregating TAP</td><td>Combine multiple links</td><td>Cost</td></tr>
</table></div>

<h4>Capture options</h4>
<div class="table-wrap"><table>
<tr><th>Option</th><th>Data</th><th>Storage</th></tr>
<tr><td>Full packet capture</td><td>Everything incl. payload</td><td>Very high</td></tr>
<tr><td>Limited capture</td><td>Headers / first N bytes</td><td>Medium</td></tr>
<tr><td>NetFlow / flow records</td><td>Metadata only</td><td>Low</td></tr>
</table></div>

<h4>Key facts</h4>
<div class="table-wrap"><table>
<tr><th>Item</th><th>Fact</th></tr>
<tr><td>Deployment</td><td>Internet egress/perimeter choke point</td></tr>
<tr><td>NIC mode</td><td>Promiscuous to capture all frames</td></tr>
<tr><td>Sizing</td><td>throughput × duration × retention</td></tr>
<tr><td>Integrity</td><td>Hash PCAP at acquisition</td></tr>
<tr><td>BPF filter</td><td>Applied at capture time</td></tr>
<tr><td>Tool constraints</td><td>Document dropped packets, encrypted payloads, filters and other blind spots</td></tr>
<tr><td>Network assurance</td><td>Authorise the change; harden sensor and management access</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="d1-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Đặt câu hỏi thu thập, vẽ traffic path/choke point và chọn full packet, sliced packet hay flow.</li>
<li>Tính dung lượng từ average/peak bps × thời gian; kiểm tra snaplen, buffer, packet loss, clock và rotation.</li>
<li>Ghi change approval/cấu hình, harden sensor, hash/export PCAP và bảo quản bản gốc.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>SPAN/TAP direction, VLAN tag, encapsulation, interface drop counter.</li>
<li>PCAP section/interface statistics, capture filter, NTP status, chain of custody.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-impact">LIVE-IMPACT</span>
<code>dumpcap -i 1 -b duration:3600 -b files:24 -w case.pcapng</code>
</li>
<li>
<span class="cmd-safety cmd-impact">LIVE-IMPACT</span>
<code>capinfos file.pcapng</code>; <code>tcpdump -i eth0 -s 0 -B 4096 -w file.pcap</code>.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Link 1 Gbps không có nghĩa capture luôn 1 Gbps; dùng utilization thực và peak burst. SPAN gộp hai chiều có thể oversubscribe cổng đích.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>TAP sao chép frame nhưng NIC/disk phía collector vẫn có thể drop.</li>
<li>Capture filter loại dữ liệu vĩnh viễn; display filter thì không.</li>
<li>Full packet chứa credential/dữ liệu cá nhân nên cần access/retention chặt.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> NIST SP 800-94; libpcap/tcpdump and Wireshark documentation; RFC 7011 (IPFIX).</p>
</div>
</details>`;
