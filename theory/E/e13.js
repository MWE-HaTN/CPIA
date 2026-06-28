/* Theory — E13 (Appendix E). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e13"]=`<h2>E13 — Live Malware Analysis</h2><ul>

<li><span class="en">Identify open files with Process Explorer / handle.exe.</span><span class="vi">Xác định file mở bằng Process Explorer / handle.exe.</span></li>

<li><span class="en">Identify registry activity with Procmon and Autoruns.</span><span class="vi">Xác định hoạt động registry bằng Procmon và Autoruns.</span></li>

<li><span class="en">Identify network sockets with TCPView, netstat, Process Hacker, or EDR telemetry.</span><span class="vi">Xác định socket mạng bằng TCPView, netstat, Process Hacker hoặc telemetry EDR.</span></li>

<li><span class="en">Monitor process creation, DLL loads, file writes, service creation, and scheduled tasks.</span><span class="vi">Giám sát tạo tiến trình, tải DLL, ghi file, tạo dịch vụ và scheduled task.</span></li>

<li><span class="en">Use isolated lab or carefully controlled live response; collect volatile evidence before shutdown.</span><span class="vi">Dùng lab cô lập hoặc live response có kiểm soát cẩn thận; thu thập bằng chứng dễ mất trước khi tắt máy.</span></li>

</ul>

<h3>Live Malware Analysis Command Examples</h3>

<pre><code>netstat -ano                                      # Map live network sockets to PIDs

handle.exe -a suspicious.exe                       # Show open files, registry keys, and handles

tcpview.exe                                        # GUI view of process-to-network activity

procmon.exe                                        # Monitor file, registry, process, and network events

reg query HKCU\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run   # Check common user Run-key persistence</code></pre>

<p>Analysing a potentially malicious process on a live running system — without taking the system offline.</p>

<h3>Sysinternals Suite — Key Tools</h3>

<div class="table-wrap"><table>

<tr><th>Tool</th><th>What It Shows</th><th>What to Look For</th></tr>

<tr><td><strong>Process Explorer</strong></td><td>Process tree, parent-child, DLLs, handles, signed / unsigned, VirusTotal integration</td><td>Processes with no icon / description, unsigned DLLs, unusual parent (svchost under explorer.exe), processes with no corresponding file on disk</td></tr>

<tr><td><strong>Process Monitor (Procmon)</strong></td><td>Real-time file system, registry, process, network events per process</td><td>Registry writes to Run keys, file drops to temp directories, network connections, WriteProcessMemory calls</td></tr>

<tr><td><strong>Autoruns</strong></td><td>All persistence: Run keys, services, scheduled tasks, browser extensions, LSA providers</td><td>Entries with no publisher / description, entries pointing to temp / appdata, newly added entries</td></tr>

<tr><td><strong>TCPView</strong></td><td>Live TCP / UDP connections with process name and PID</td><td>Connections to unknown external IPs, listening on unusual ports, connections from system processes</td></tr>

<tr><td><strong>Handle</strong></td><td>All open handles (files, registry keys, mutexes, pipes) per process</td><td>Mutex names (malware family tracker), open handles to sensitive registry keys / files</td></tr>

<tr><td><strong>Listdlls</strong></td><td>DLLs loaded per process with full paths</td><td>DLLs from temp / appdata, DLLs without path (memory-only = reflective injection)</td></tr>

</table></div>

<h3>Key Live Analysis Commands</h3>

<pre>netstat -ano              → all connections + listening ports + PID

tasklist /m               → processes + loaded modules (DLLs)

handle.exe -p [PID]       → open handles for specific process

listdlls.exe [PID]        → DLLs loaded by process

reg query HKLM\\...\\Run    → autorun entries



Correlate PID from netstat → process in tasklist / Process Explorer

Foreign address 0.0.0.0 = listening socket

Established + external IP = active C2 or data transfer</pre>

<h3>Identifying Malware Behaviour Live</h3>

<ul>

<li><strong>Procmon filter:</strong> Filter by suspect process name + RegSetValue / WriteFile / TCP Connect operations</li>

<li><strong>Memory-only process:</strong> No corresponding file on disk — fileless malware indicator</li>

<li><strong>Self-deletion:</strong> Malware deletes own file after execution — DeleteFile on its own path shortly after launch</li>

<li><strong>Mutex names:</strong> Extract via Handle tool — unique mutex = malware family identifier, cross-reference with threat intel</li>

</ul>


<h3 class="qz-theory"><span class="en">Live Malware Analysis Tools</span><span class="vi">Công cụ phân tích mã độc trực tiếp</span></h3>
<p><span class="en">In an <strong>isolated lab</strong>: <strong>Process Explorer</strong> (handles/DLLs/registry keys a process has open) and <strong>TCPView</strong> (live sockets) reveal what a running sample is touching in real time. <strong>Procmon</strong> records real-time file/registry/process events; <strong>Regshot</strong> diffs system state before vs after detonation to reveal persistence keys and dropped files; <strong>Autoruns</strong> enumerates persistence.</span><span class="vi">trong <strong>lab cách ly</strong>: <strong>Process Explorer</strong> (handle/DLL/khóa registry một tiến trình đang mở) và <strong>TCPView</strong> (socket sống) lộ những gì mẫu đang chạm theo thời gian thực. <strong>Procmon</strong> ghi sự kiện file/registry/tiến trình real-time; <strong>Regshot</strong> so sánh trạng thái trước/sau khi kích nổ để lộ khóa persistence và file được thả; <strong>Autoruns</strong> liệt kê persistence.</span></p>
`;
