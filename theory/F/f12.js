/* Theory — F12 (Appendix F). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["f12"]=`<h2>F12 — Behavioural Analysis</h2><ul>

<li><span class="en">Use tools to identify behaviour: Procmon, Process Hacker, Autoruns, Regshot, Wireshark, Fiddler, INetSim, sandbox reports.</span><span class="vi">Dùng công cụ để xác định hành vi: Procmon, Process Hacker, Autoruns, Regshot, Wireshark, Fiddler, INetSim, báo cáo sandbox.</span></li>

<li><span class="en">Observe file, registry, process, service, scheduled task, mutex, network, and persistence activity.</span><span class="vi">Quan sát hoạt động file, registry, tiến trình, dịch vụ, scheduled task, mutex, mạng và persistence.</span></li>

<li><span class="en">C2 aspects: destination, URI, user-agent, beacon interval, encryption / encoding, DNS pattern, fallback domains.</span><span class="vi">Khía cạnh C2: đích, URI, user-agent, khoảng beacon, mã hóa / encoding, mẫu DNS, domain dự phòng.</span></li>

<li><span class="en">Infection vectors and persistence mechanisms must be tied to evidence, not guessed.</span><span class="vi">Vector lây nhiễm và cơ chế persistence phải được gắn với bằng chứng, không được đoán.</span></li>

<li><span class="en">Sandbox limitations: malware may detect VM, require user interaction, time delay, internet, domain join, or specific locale.</span><span class="vi">Giới hạn sandbox: malware có thể phát hiện VM, yêu cầu tương tác người dùng, trì hoãn thời gian, internet, tham gia domain hoặc locale cụ thể.</span></li>

</ul>

<h3>Sandbox Analysis Framework</h3>

<div class="card-grid">

<div class="card">

<div class="card-title">File System Activity</div>

<p>Files created/modified/deleted. Temp directory drops. Executable dropped to unusual location (AppData, ProgramData, Windows\\Temp).</p>

</div>

<div class="card">

<div class="card-title">Registry Activity</div>

<p>Run key writes (persistence). HKLM vs HKCU scope. Service creation. Config data written to unusual keys.</p>

</div>

<div class="card">

<div class="card-title">Network Activity</div>

<p>DNS resolution of hardcoded domains. HTTP / S connections with unusual user-agent. Beaconing interval. Data volume outbound.</p>

</div>

<div class="card">

<div class="card-title">Process Activity</div>

<p>Child process spawned. Injection into other process. Self-deletion. Anti-analysis checks (IsDebuggerPresent, VM detection).</p>

</div>

</div>

<div class="callout success">

<span class="callout-icon">✓</span>

<div class="callout-body">

<strong>Tools Summary — Malware Analysis</strong>

<p><strong>Static:</strong> PE-bear, CFF Explorer, CAPA, DIE (Detect-It-Easy), FLOSS (string extraction), Ghidra / IDA.</p>

<p><strong>Dynamic:</strong> x64dbg, WinDbg, Process Monitor, Process Hacker, Wireshark, FakeNet-NG, Any.run, Cuckoo Sandbox.</p>

<p><strong>Memory:</strong> Volatility3, Rekall.</p>

</div>

</div>

<h3>Dynamic Analysis Workflow</h3>

<ol>

<li><strong>Setup environment:</strong> Isolated VM (no internet), snapshot before execution, INetSim or FakeNet-NG to simulate network.</li>

<li><strong>Before-state capture:</strong> Regshot snapshot 1, Procmon start, Wireshark start.</li>

<li><strong>Execute malware:</strong> Run sample, wait sufficient time (VM sandbox evasion may need &gt;5 minutes).</li>

<li><strong>After-state capture:</strong> Regshot snapshot 2 → compare, Procmon save log, Wireshark save pcap.</li>

<li><strong>Analyze outputs:</strong>

<ul>

<li><strong>File activity:</strong> files dropped/modified/deleted, especially %TEMP%, %APPDATA%, Startup.</li>

<li><strong>Registry:</strong> persistence keys (Run, RunOnce, Services, Winlogon).</li>

<li><strong>Network:</strong> C2 destinations, beacon interval, DNS queries, User-Agent.</li>

<li><strong>Process:</strong> parent-child spawning, injected processes, mutexes.</li>

</ul>

</li>

</ol>

<h3>Sandbox Evasion Indicators</h3>

<ul>

<li><span class="en">Malware checks CPUID (VM bit), number of CPU cores (&lt;2 = sandbox), uptime (&lt;10 minutes = sandbox).</span><span class="vi">Malware kiểm tra CPUID (bit VM), số lõi CPU (&lt;2 = sandbox), thời gian hoạt động (&lt;10 phút = sandbox).</span></li>

<li><span class="en">Checks number of files on Desktop, screen resolution, specific VMware / VirtualBox registry keys.</span><span class="vi">Kiểm tra số file trên Desktop, độ phân giải màn hình, khóa registry VMware / VirtualBox cụ thể.</span></li>

<li><span class="en">Delays execution beyond typical sandbox observation windows (&gt;5 minutes).</span><span class="vi">Trì hoãn thực thi vượt qua cửa sổ quan sát sandbox điển hình (&gt;5 phút).</span></li>

<li><span class="en">Requires user interaction (mouse movement, clicks) or specific environment (domain join, locale).</span><span class="vi">Yêu cầu tương tác người dùng (di chuyển chuột, click) hoặc môi trường cụ thể (tham gia domain, locale).</span></li>

</ul>


<h3 class="qz-theory"><span class="en">Behavioural (Dynamic) Analysis</span><span class="vi">Phân tích hành vi (động)</span></h3>
<ul>
<li><strong><span class="en">Precondition:</span><span class="vi">Điều kiện tiên quyết:</span></strong> <span class="en">Always detonate in an <strong>isolated lab</strong> (VM/network with no path to production/the internet); take a <strong>snapshot</strong> before each run to revert to a clean baseline and stay reproducible.</span><span class="vi">Luôn kích nổ trong <strong>lab cách ly</strong> (VM/mạng không có đường tới production/internet); chụp <strong>snapshot</strong> trước mỗi lần để khôi phục về baseline sạch và tái lập được.</span></li>
<li><strong>Toolset:</strong> <span class="en"><strong>Procmon</strong> (file/registry/process events) + <strong>Wireshark</strong> + <strong>INetSim/FakeNet</strong> (simulate internet so the sample reveals C2 without real exposure) + <strong>Regshot</strong> (before/after state diff) give the fullest behavioural picture. Observing a created service/Run key identifies persistence; named pipes (e.g. <code>\\\\.\\pipe\\msagent_xx</code>) can be host IoCs.</span><span class="vi"><strong>Procmon</strong> (sự kiện file/registry/tiến trình) + <strong>Wireshark</strong> + <strong>INetSim/FakeNet</strong> (giả lập internet để mẫu lộ C2 mà không phơi nhiễm thật) + <strong>Regshot</strong> (so sánh trạng thái trước/sau) cho bức tranh hành vi đầy đủ nhất. Quan sát service/khóa Run được tạo xác định persistence; named pipe (vd <code>\\\\.\\pipe\\msagent_xx</code>) có thể là IoC host.</span></li>
<li><strong><span class="en">Anti-analysis:</span><span class="vi">Chống phân tích:</span></strong> <span class="en">Samples evade sandboxes via VM checks (MAC OUIs, registry, low core count), time delays / mouse-movement checks, and anti-debugging (IsDebuggerPresent, PEB BeingDebugged, rdtsc timing). Counter with hardened VMs, longer run times, sleep-patching and stealth debuggers.</span><span class="vi">Mẫu né sandbox qua kiểm tra VM (OUI MAC, registry, ít nhân), trì hoãn thời gian / kiểm tra chuyển động chuột, và anti-debug (IsDebuggerPresent, PEB BeingDebugged, đo thời gian rdtsc). Đối phó bằng VM gia cố, thời gian chạy lâu hơn, vá sleep và debugger ẩn.</span></li>
<li><strong><span class="en">Strengths &amp; limits:</span><span class="vi">Điểm mạnh &amp; giới hạn:</span></strong> <span class="en">Dynamic analysis forces packed samples to unpack and reveal real behaviour, but only shows code that <em>executes</em> in that session — logic gated behind dates/commands/conditions stays dormant. Combine with static reversing for full coverage.</span><span class="vi">Phân tích động buộc mẫu đã pack tự giải nén và lộ hành vi thật, nhưng chỉ cho thấy mã <em>thực thi</em> trong phiên đó — logic phụ thuộc ngày/lệnh/điều kiện sẽ nằm im. Kết hợp với dịch ngược tĩnh để phủ đầy đủ.</span></li></ul>
`;
