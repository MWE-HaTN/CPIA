/* Theory — F12 (Appendix F). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["f12"]=`<h2>F12 — Behavioural Analysis</h2>

<div class="tier recall" id="f12-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Isolate first:</strong> <span class="en">Detonate only in an isolated lab with no path to production/the internet; snapshot before each run.</span><span class="vi">Chỉ detonate trong lab cô lập, không có đường ra production/internet; snapshot trước mỗi lần.</span></li>
<li><strong>Tool combo:</strong> <span class="en">Procmon + Wireshark/INetSim + Regshot give the most complete behavioural picture.</span><span class="vi">Procmon + Wireshark/INetSim + Regshot cho bức tranh hành vi đầy đủ nhất.</span></li>
<li><strong>Fake the internet:</strong> <span class="en">INetSim/FakeNet simulate services so the sample reveals C2 callbacks without real internet access.</span><span class="vi">INetSim/FakeNet giả lập dịch vụ để mẫu lộ callback C2 mà không cần internet thật.</span></li>
<li><strong>Unpacks itself:</strong> <span class="en">Running packed malware forces it to unpack, exposing real behaviour.</span><span class="vi">Cho malware bị pack chạy buộc nó tự giải nén, để lộ hành vi thật.</span></li>
<li><strong>Persistence &amp; C2 observed:</strong> <span class="en">Creating a service/Run key = persistence; beaconing to a domain = C2.</span><span class="vi">Tạo service/Run key = persistence; beaconing tới một domain = C2.</span></li>
<li><strong>Main limitation:</strong> <span class="en">Untriggered code paths (date/command-gated) stay unseen — pair with static analysis.</span><span class="vi">Các nhánh mã không được kích hoạt (theo ngày/lệnh) sẽ không lộ — kết hợp phân tích tĩnh.</span></li>
</ul></div></div>

<details class="tier concept" id="f12-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Dùng công cụ nhận diện mẫu hành vi</h4>
<p>Cho mẫu chạy (detonate) và quan sát: <strong>Procmon</strong> (file/registry/process/network API), <strong>Wireshark</strong> + <strong>INetSim/FakeNet</strong> (mạng + giả lập dịch vụ để lộ callback), <strong>Regshot</strong> (diff registry/file trước-sau), <strong>Process Explorer/Autoruns</strong>. Kết hợp ba góc (process+network+state diff) cho bức tranh đầy đủ nhất.</p>

<h4>Khía cạnh C2, infection vector &amp; persistence</h4>
<p>Khi detonate, lập bản đồ hành vi sang ATT&amp;CK: <strong>C2</strong> (kết nối ra domain/IP, beaconing — xem D5/D7), <strong>infection/execution</strong> (macro→shell, downloader), <strong>persistence</strong> (tạo service, Run key, scheduled task, WMI). Quan sát callback tới domain hard-coded → dùng INetSim trả lời giả để dụ ra thêm hành vi.</p>

<h4>Chống phân tích &amp; giới hạn</h4>
<p>Malware có thể <strong>né sandbox/anti-analysis</strong>: kiểm tra artefact VM (MAC OUI, registry, ít core) rồi thoát; <strong>sleep lâu + kiểm tra chuột</strong>; <strong>anti-debug</strong> (IsDebuggerPresent, PEB BeingDebugged). <strong>Giới hạn chính của phân tích hành vi đơn thuần</strong>: các <em>nhánh mã chỉ chạy theo điều kiện</em> (đúng ngày, đúng lệnh C2) sẽ không bao giờ lộ trong một lần chạy → phải <strong>kết hợp phân tích tĩnh</strong>.</p>
</div></details>

<details class="tier reference" id="f12-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Behavioural-analysis tools</h4>
<div class="table-wrap"><table>
<tr><th>Tool</th><th>Captures</th></tr>
<tr><td>Procmon</td><td>File/registry/process/network API events</td></tr>
<tr><td>Wireshark</td><td>Network traffic / callbacks</td></tr>
<tr><td>INetSim / FakeNet</td><td>Simulated internet services (safe callbacks)</td></tr>
<tr><td>Regshot</td><td>Before/after registry &amp; file diff</td></tr>
<tr><td>Process Explorer / Autoruns</td><td>Live process tree / persistence</td></tr>
</table></div>

<h4>Behaviours → ATT&amp;CK</h4>
<div class="table-wrap"><table>
<tr><th>Observation</th><th>Maps to</th></tr>
<tr><td>Connect/beacon to a domain</td><td>Command &amp; Control</td></tr>
<tr><td>Create service / Run key / task</td><td>Persistence</td></tr>
<tr><td>Macro → cmd → powershell</td><td>Execution / infection vector</td></tr>
<tr><td>VM checks, long sleep, anti-debug</td><td>Defense Evasion (anti-analysis)</td></tr>
</table></div>

<div class="callout warning"><strong><span class="en">Key limitation</span><span class="vi">Giới hạn chính</span></strong><p><span class="en">Dynamic analysis only shows what runs; date/command-gated paths stay hidden. Combine with static reversing.</span><span class="vi">Phân tích động chỉ thấy cái chạy ra; nhánh theo ngày/lệnh vẫn ẩn. Kết hợp dịch ngược tĩnh.</span></p></div>
</div></details>

<details class="tier deep-dive" id="f12-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Snapshot/reset lab; cấu hình fake internet, time/locale/user artefact và monitoring.</li>
<li>Chạy nhiều lần với trigger khác; ghi process/file/registry/network/memory diff.</li>
<li>Map behavior sang ATT&amp;CK, extract IOC/config và so static để tìm branch chưa chạy.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Procmon/Regshot/Autoruns, PCAP/DNS, process tree, dropped file và memory.</li>
<li>Persistence, C2 cadence/tasking, privilege attempt, anti-VM/sleep và cleanup.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-impact">LIVE-IMPACT</span>Procmon + Wireshark + FakeNet/INetSim + Process Explorer; debugger để skip sleep/branch trong lab.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Không callback có thể do domain chết, cần user click, đúng ngày hoặc phát hiện VM; không kết luận benign sau một lần chạy.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Sandbox public làm lộ mẫu/case.</li>
<li>Behavior thay đổi theo privilege/network/OS.</li>
<li>Dynamic chỉ thấy path được kích hoạt; luôn kết hợp static.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> NIST SP 800-86; MITRE ATT&amp;CK; tool documentation and safe-lab procedures.</p>
</div>
</details>`;
