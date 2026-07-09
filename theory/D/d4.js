/* Theory — D4 (Appendix D). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d4"]=`<h2>D4 — Unusual Protocol Behaviour</h2>

<div class="tier recall" id="d4-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Verify by payload, not port:</strong> <span class="en">Identify the true protocol from the actual payload — a port number can be abused by anything.</span><span class="vi">Nhận diện giao thức thật từ payload thực tế — số cổng có thể bị bất kỳ thứ gì lạm dụng.</span></li>
<li><strong>Non-HTTP on 80/443:</strong> <span class="en">Binary, non-HTTP data over TCP/80 = a non-standard protocol abusing the port to bypass egress.</span><span class="vi">Dữ liệu nhị phân, không-HTTP trên TCP/80 = giao thức phi chuẩn lạm dụng cổng để vượt egress.</span></li>
<li><strong>TLS mismatch:</strong> <span class="en">Traffic labelled or port-associated with TLS that lacks a valid handshake is suspicious for a custom/tunnelled protocol, but truncation, capture loss and mid-stream capture must be excluded.</span><span class="vi">Traffic được gắn nhãn/dùng cổng TLS nhưng thiếu handshake hợp lệ có thể là protocol tùy chỉnh/tunnel; trước tiên phải loại trừ capture giữa phiên, cắt ngắn và mất gói.</span></li>
<li><strong>DNS abuse:</strong> <span class="en">Abnormally large DNS responses or TXT records carrying binary data suggest tunnelling.</span><span class="vi">Phản hồi DNS lớn bất thường hoặc TXT mang dữ liệu nhị phân gợi ý tunnelling.</span></li>
<li><strong>Malformed packets:</strong> <span class="en">Repeated illegal/malformed packets to a service may be exploitation (e.g. cache poisoning).</span><span class="vi">Gói bất hợp lệ/dị dạng lặp lại tới một dịch vụ có thể là khai thác (vd cache poisoning).</span></li>
<li><strong>ICMP tunnelling:</strong> <span class="en">ICMP echo carrying large high-entropy payloads at a steady rate = a covert channel.</span><span class="vi">ICMP echo mang payload lớn entropy cao đều đặn = kênh ngầm.</span></li>
</ul></div></div>

<details class="tier concept" id="d4-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Cổng ≠ giao thức</h4>
<p>Nguyên tắc cốt lõi D4: <strong>xác minh giao thức bằng payload, không tin số cổng</strong>. Kẻ tấn công chạy giao thức tùy chỉnh qua cổng được phép (80/443/53) để vượt firewall. Dấu hiệu: dữ liệu <em>không khớp</em> đặc tả giao thức của cổng đó (vd nhị phân không-HTTP trên 80; "TLS" không có handshake hợp lệ; HTTP "giả" thiếu header chuẩn).</p>

<h4>Lạm dụng DNS &amp; ICMP làm kênh</h4>
<p><strong>DNS</strong>: phản hồi lớn bất thường, TXT mang dữ liệu nhị phân, nhiều subdomain dài ngẫu nhiên → tunnelling/exfil. <strong>ICMP</strong>: echo request mang payload lớn, entropy cao, đều đặn (khác ping chẩn đoán nhỏ) → ICMP tunnelling. Cả hai dùng giao thức "hạ tầng" thường được mở.</p>

<h4>Khai thác qua gói dị dạng</h4>
<p>Gói <strong>bất hợp lệ/dị dạng lặp lại</strong> gửi tới một resolver/dịch vụ có thể là nỗ lực <em>khai thác lỗ hổng</em> hoặc <strong>cache poisoning</strong> (nhồi bản ghi DNS giả). Phân biệt với lỗi mạng bình thường bằng tính chủ đích, lặp lại, nhắm đích.</p>
</div></details>

<details class="tier reference" id="d4-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Anomaly → likely meaning</h4>
<div class="table-wrap"><table>
<tr><th>Observation</th><th>Likely meaning</th></tr>
<tr><td>Binary non-HTTP on TCP/80</td><td>Protocol abusing port to bypass egress</td></tr>
<tr><td>"TLS" with no proper handshake</td><td>Custom/tunnelled protocol masquerading</td></tr>
<tr><td>Oversized DNS / binary TXT</td><td>DNS tunnelling / covert channel</td></tr>
<tr><td>Large high-entropy ICMP echo</td><td>ICMP tunnelling</td></tr>
<tr><td>Repeated malformed packets</td><td>Exploitation / cache poisoning</td></tr>
</table></div>

<h4>Analysis principle</h4>
<div class="table-wrap"><table>
<tr><th>Do</th><th>Why</th></tr>
<tr><td>Inspect the actual payload</td><td>Ports are easily abused</td></tr>
<tr><td>Compare to protocol spec</td><td>Spot non-standard behaviour</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="d4-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Nhận diện protocol bằng magic/state machine, không bằng port.</li>
<li>Reassemble stream, kiểm tra length/flags/order/rcode và so baseline cùng application.</li>
<li>Giải thích anomaly: tunnelling, evasion, corruption, implementation bug hay attack.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>HTTP trên 53, TLS trên port lạ, DNS label entropy, ICMP payload, malformed length/fragment.</li>
<li>Protocol parser alert, server response và endpoint process tạo socket.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Wireshark Decode As/Follow Stream; Zeek weird.log; Suricata app-layer fields.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>TCP/443 bắt đầu <code>SSH-2.0</code> là protocol mismatch; có thể admin tunnel hợp lệ hoặc C2, cần owner/process/context.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Non-standard không đồng nghĩa malicious.</li>
<li>Middlebox/offload tạo checksum và reassembly artefact.</li>
<li>Parser differential có thể khiến IDS và endpoint hiểu gói khác nhau.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> Wireshark/Zeek protocol documentation; relevant protocol RFCs.</p>
</div>
</details>`;
