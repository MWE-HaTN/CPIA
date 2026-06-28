/* Theory — E9 (Appendix E). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e9"]=`<h2>E9 — Memory Analysis</h2>

<div class="callout danger"><strong>Exam trap — psscan vs pslist</strong><p><span class="en"><code>pslist</code> shows processes linked in the active process list. <code>psscan</code> scans memory pool allocations and may reveal hidden, unlinked, or terminated processes. A mismatch is a strong lead for rootkit activity or process tampering, but still requires validation.</span><span class="vi"><code>pslist</code> hiển thị tiến trình được liên kết trong danh sách tiến trình active. <code>psscan</code> quét phân bổ pool bộ nhớ và có thể tiết lộ tiến trình bị ẩn, không liên kết hoặc đã kết thúc. Sự không khớp là dấu hiệu mạnh của hoạt động rootkit hoặc giả mạo tiến trình, nhưng vẫn cần xác nhận.</span></p></div>



<h3>Memory analysis details for CPIA</h3>

<div class="table-wrap"><table><tr><th>Topic</th><th>What to look for</th><th>Typical tool / output</th></tr><tr><td>Profile / symbol selection</td><td>Correct OS version / build to parse structures accurately.</td><td>Volatility 2 profiles; Volatility 3 symbols / automagic.</td></tr><tr><td>Process hollowing</td><td>Process image path appears legitimate but memory contains unmapped executable code.</td><td>malfind shows suspicious VAD with PAGE_EXECUTE_READWRITE or MZ header.</td></tr><tr><td>Injected DLL</td><td>DLL loaded from suspicious path or memory-only region.</td><td>dlllist, ldrmodules, malfind, handles.</td></tr><tr><td>Credentials</td><td>LSASS memory, hashes, cached secrets.</td><td>hashdump, lsadump, mimikatz-style artefacts where legally authorised.</td></tr><tr><td>Network connections</td><td>Suspicious remote IPs, unusual ports, unexpected process ownership.</td><td>netscan / connscan output: local address, foreign address, PID, process.</td></tr></table></div>

<pre># Volatility 3 examples (current syntax — no --profile needed, auto-detected)

vol.py -f memory.raw windows.pslist      # list active processes

vol.py -f memory.raw windows.pstree     # parent/child process relationships

vol.py -f memory.raw windows.netscan    # identify network connections

vol.py -f memory.raw windows.malfind    # find injected or suspicious executable memory

vol.py -f memory.raw windows.dlllist --pid 1234  # list DLLs loaded by a process

vol.py -f memory.raw windows.cmdline    # recover process command lines

vol.py -f memory.raw windows.hashdump   # extract SAM password hashes

vol.py -f memory.raw windows.handles --pid 1234  # open handles (files, keys, mutexes)



# Note: Volatility 2 requires explicit --profile and uses short plugin names (no windows. prefix):

# volatility -f memory.raw --profile=Win10x64_19041 pslist</pre>

<ul>

<li><span class="en">Analyse running processes, parent / child relationships, DLLs, handles, sockets, command lines, and injected memory.</span><span class="vi">Phân tích tiến trình đang chạy, quan hệ cha / con, DLL, handle, socket, dòng lệnh và bộ nhớ bị inject.</span></li>

<li><span class="en">Process acquisition extracts suspicious process memory for offline analysis.</span><span class="vi">Thu thập tiến trình trích xuất bộ nhớ tiến trình đáng ngờ để phân tích offline.</span></li>

<li><span class="en">Correlate RAM artefacts with on-disk executables, registry persistence, and network logs.</span><span class="vi">Tương quan artefact RAM với file thực thi trên đĩa, persistence registry và log mạng.</span></li>

<li><span class="en">Potential artefacts: clipboard, credentials, command history, browser history, decrypted content, network connections.</span><span class="vi">Artefact tiềm năng: clipboard, thông tin xác thực, lịch sử lệnh, lịch sử trình duyệt, nội dung đã giải mã, kết nối mạng.</span></li>

<li><span class="en">Volatility plugins: pslist / psscan, pstree, netscan, malfind, dlllist, handles, cmdline, filescan.</span><span class="vi">Plugin Volatility: pslist / psscan, pstree, netscan, malfind, dlllist, handles, cmdline, filescan.</span></li>

</ul>

<h3>Volatility 3 Credential Extraction</h3>

<pre># Extract SAM password hashes

vol.py -f memory.raw windows.hashdump



# Extract LSA secrets (service account passwords, cached domain creds)

vol.py -f memory.raw windows.lsadump



# Dump process memory for offline credential extraction

vol.py -f memory.raw windows.memmap --pid &lt;LSASS_PID&gt; --dump



# Extract cached domain logon credentials

vol.py -f memory.raw windows.cachedump</pre>

<h3>Volatility 2 vs Volatility 3 Syntax</h3>

<div class="table-wrap"><table>

<tr><th>Task</th><th>Volatility 2</th><th>Volatility 3</th></tr>

<tr><td>List processes</td><td><code>volatility -f mem.raw --profile=Win10x64 pslist</code></td><td><code>vol.py -f mem.raw windows.pslist</code></td></tr>

<tr><td>Network connections</td><td><code>volatility -f mem.raw --profile=Win10x64 netscan</code></td><td><code>vol.py -f mem.raw windows.netscan</code></td></tr>

<tr><td>Detect injection</td><td><code>volatility -f mem.raw --profile=Win10x64 malfind</code></td><td><code>vol.py -f mem.raw windows.malfind</code></td></tr>

<tr><td>Dump hashes</td><td><code>volatility -f mem.raw --profile=Win10x64 hashdump</code></td><td><code>vol.py -f mem.raw windows.hashdump</code></td></tr>

<tr><td>List DLLs</td><td><code>volatility -f mem.raw --profile=Win10x64 dlllist -p PID</code></td><td><code>vol.py -f mem.raw windows.dlllist --pid PID</code></td></tr>

<tr><td>Process tree</td><td><code>volatility -f mem.raw --profile=Win10x64 pstree</code></td><td><code>vol.py -f mem.raw windows.pstree</code></td></tr>

<tr><td>Command lines</td><td><code>volatility -f mem.raw --profile=Win10x64 cmdline</code></td><td><code>vol.py -f mem.raw windows.cmdline</code></td></tr>

</table></div>

<ul>

<li><strong>Key difference:</strong> V2 requires explicit <code>--profile</code> for OS version; V3 auto-detects using symbols / automagic.</li>

<li><strong>V2 plugin style:</strong> Plugin name after options (e.g., <code>pslist</code>).</li>

<li><strong>V3 module style:</strong> Module path after options (e.g., <code>windows.pslist</code>).</li>

<li><strong>Exam tip:</strong> Know both syntaxes. The exam may present commands in either format.</li>

</ul>

<p class="sub-heading">Memory Forensics Depth</p>

<p class="sub-heading">Advanced Volatility Workflow</p>

<pre># Step 1: Identify image profile

vol.py -f memory.raw imageinfo



# Step 2: Process list analysis

vol.py -f memory.raw pslist          # Active processes

vol.py -f memory.raw pstree          # Parent-child relationships

vol.py -f memory.raw psscan          # Hidden / terminated processes



# Step 3: Compare pslist vs psscan

#   Processes in psscan but not in pslist = potentially hidden



# Step 4: Network connections

vol.py -f memory.raw netscan         # Active connections

vol.py -f memory.raw connscan        # Historical connections



# Step 5: Injection detection

vol.py -f memory.raw malfind         # Suspicious memory regions

#   Look for: PAGE_EXECUTE_READWRITE, MZ headers in non-file-backed regions



# Step 6: Credential extraction

vol.py -f memory.raw hashdump        # SAM hashes

vol.py -f memory.raw lsadump         # LSA secrets



# Step 7: DLL analysis

vol.py -f memory.raw dlllist -p PID  # DLLs loaded by process



# Step 8: File handles

vol.py -f memory.raw handles -p PID  # Open handles (files, keys, mutexes)



# Step 9: Command lines

vol.py -f memory.raw cmdline         # All process command lines



# Step 10: Correlate with disk and network evidence

#   Match with: prefetch, shimcache, USN journal, proxy, DNS, firewall</pre>


<h3 class="qz-theory"><span class="en">Memory Analysis (Volatility)</span><span class="vi">Phân tích bộ nhớ (Volatility)</span></h3>
<p><span class="en">RAM holds volatile-only evidence: fileless/decrypted malware, encryption keys (incl. BitLocker/EFS), live network sockets, injected code, clipboard and command history — capture it before shutdown. Start by enumerating the process tree, then sockets, injected code and command lines.</span><span class="vi">RAM chứa bằng chứng chỉ-volatile: mã độc fileless/đã giải mã, khóa mã hóa (gồm BitLocker/EFS), socket mạng sống, mã được tiêm, clipboard và lịch sử lệnh — bắt nó trước khi tắt máy. Bắt đầu bằng liệt kê cây tiến trình, rồi socket, mã được tiêm và dòng lệnh.</span></p>
<div class="table-wrap"><table><thead><tr><th>Plugin</th><th><span class="en">Use</span><span class="vi">Công dụng</span></th></tr></thead><tbody>
<tr><td>pslist / pstree</td><td><span class="en">Active process list / parent-child tree</span><span class="vi">Danh sách tiến trình / cây cha-con</span></td></tr>
<tr><td>psscan</td><td><span class="en">Pool-scan for hidden/terminated processes (defeats DKOM unlinking)</span><span class="vi">Quét pool tìm tiến trình ẩn/đã kết thúc (vô hiệu DKOM gỡ liên kết)</span></td></tr>
<tr><td>malfind</td><td><span class="en">Injected code in private RWX memory with no backing file</span><span class="vi">Mã tiêm trong vùng RWX riêng không có file gốc</span></td></tr>
<tr><td>netscan</td><td><span class="en">Active network connections + owning PID</span><span class="vi">Kết nối mạng + PID sở hữu</span></td></tr>
<tr><td>cmdline / hashdump</td><td><span class="en">Process command lines / credential hashes</span><span class="vi">Dòng lệnh tiến trình / hash credential</span></td></tr></tbody></table></div>
<p><span class="en">In-memory code not matching the on-disk image = <strong>process injection/hollowing</strong>; an Office app spawning <code>cmd.exe</code>/<code>powershell.exe</code> (parent/child anomaly) = a malicious document.</span><span class="vi">Mã trong bộ nhớ không khớp image trên đĩa = <strong>process injection/hollowing</strong>; app Office sinh <code>cmd.exe</code>/<code>powershell.exe</code> (bất thường cha/con) = tài liệu độc hại.</span></p>
`;
