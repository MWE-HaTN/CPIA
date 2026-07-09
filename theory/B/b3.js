/* Theory — B3 (Appendix B). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["b3"]=`<h2>B3 — Common Classes of Tools</h2>

<div class="tier recall" id="b3-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Packet analysis:</strong> <span class="en">Wireshark, tcpdump, Zeek — inspect packets, sessions, protocol anomalies.</span><span class="vi">Wireshark, tcpdump, Zeek — soi gói tin, phiên, bất thường giao thức.</span></li>
<li><strong>Log / SIEM:</strong> <span class="en">SIEM, grep, jq, Chainsaw, EvtxECmd — search and correlate event data.</span><span class="vi">SIEM, grep, jq, Chainsaw, EvtxECmd — tìm và tương quan dữ liệu sự kiện.</span></li>
<li><strong>Memory analysis:</strong> <span class="en">Volatility, Rekall — processes, sockets, injection, credentials in RAM.</span><span class="vi">Volatility, Rekall — tiến trình, socket, injection, credential trong RAM.</span></li>
<li><strong>Disk / triage forensics:</strong> <span class="en">KAPE, FTK Imager, Autopsy, Eric Zimmerman tools, file-carving (PhotoRec/foremost).</span><span class="vi">KAPE, FTK Imager, Autopsy, bộ Eric Zimmerman, file-carving (PhotoRec/foremost).</span></li>
<li><strong>Reverse engineering:</strong> <span class="en">Disassembler (IDA/Ghidra), debugger (x64dbg/WinDbg/GDB), strings, PE viewers.</span><span class="vi">Disassembler (IDA/Ghidra), debugger (x64dbg/WinDbg/GDB), strings, trình xem PE.</span></li>
<li><strong>Sandbox / behaviour:</strong> <span class="en">Procmon, INetSim/FakeNet (fake internet), Cuckoo/Any.Run, Regshot.</span><span class="vi">Procmon, INetSim/FakeNet (giả lập internet), Cuckoo/Any.Run, Regshot.</span></li>
<li><strong>OSINT / reputation:</strong> <span class="en">WHOIS, Shodan, VirusTotal, OTX; hashing (sha256sum, ssdeep, TLSH).</span><span class="vi">WHOIS, Shodan, VirusTotal, OTX; hashing (sha256sum, ssdeep, TLSH).</span></li>
</ul></div></div>

<details class="tier concept" id="b3-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Phân loại tool theo nhiệm vụ</h4>
<p>Câu hỏi B3 thường hỏi "loại công cụ nào để làm X". Nắm <em>chức năng từng lớp</em> hơn là tên cụ thể:</p>
<ul>
<li><strong>Xem nội dung gói tin</strong> → protocol analyser / packet capture (Wireshark, tcpdump).</li>
<li><strong>Dịch ngược machine code thành assembly</strong> → disassembler (IDA, Ghidra).</li>
<li><strong>Đặt breakpoint, xem register/bộ nhớ khi chạy</strong> → debugger (x64dbg, WinDbg, GDB).</li>
<li><strong>Carve file đã xóa từ unallocated</strong> → file-carving suite (PhotoRec, foremost).</li>
<li><strong>Giả lập internet cho malware trong lab</strong> → INetSim/FakeNet.</li>
<li><strong>Phân tích RAM</strong> → memory framework (Volatility).</li>
<li><strong>Gom mẫu tương tự</strong> → fuzzy hashing (ssdeep, TLSH).</li>
</ul>

<h4>Static vs dynamic</h4>
<p><strong>Static</strong> (không chạy): strings, disassembler, PE viewer — an toàn, nhưng packing/obfuscation che bớt. <strong>Dynamic</strong> (cho chạy trong lab cô lập): debugger, sandbox, Procmon — thấy hành vi thật, buộc malware tự bung; đổi lại cần cô lập và có rủi ro.</p>
</div></details>

<details class="tier reference" id="b3-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Tool classes</h4>
<div class="table-wrap"><table>
<tr><th>Class</th><th>Examples</th><th>Use</th></tr>
<tr><td>Packet capture/analysis</td><td>Wireshark, tcpdump, Zeek</td><td>Inspect traffic, sessions, anomalies</td></tr>
<tr><td>Log analysis / SIEM</td><td>SIEM, grep/jq, Chainsaw, EvtxECmd</td><td>Search &amp; correlate logs</td></tr>
<tr><td>Memory analysis</td><td>Volatility, Rekall</td><td>RAM: processes, injection, creds</td></tr>
<tr><td>Disk / triage</td><td>KAPE, FTK Imager, Autopsy, EZ tools</td><td>Image &amp; parse artefacts</td></tr>
<tr><td>File carving</td><td>PhotoRec, foremost</td><td>Recover deleted files by signature</td></tr>
<tr><td>Disassembler</td><td>IDA Pro, Ghidra, radare2</td><td>Machine code → assembly</td></tr>
<tr><td>Debugger</td><td>x64dbg, WinDbg, GDB</td><td>Run-time inspection, breakpoints</td></tr>
<tr><td>Sandbox / net-sim</td><td>Cuckoo, Any.Run, INetSim, FakeNet</td><td>Behavioural analysis, fake internet</td></tr>
<tr><td>Hashing</td><td>sha256sum, ssdeep, TLSH</td><td>Identify known / similar files</td></tr>
<tr><td>OSINT / reputation</td><td>WHOIS, Shodan, VirusTotal, OTX</td><td>Infrastructure &amp; reputation pivots</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="b3-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Đặt câu hỏi điều tra trước rồi chọn lớp công cụ, tránh chạy mọi tool.</li>
<li>Thu bằng công cụ forensic, parse bằng công cụ độc lập, giữ raw output và version.</li>
<li>Xác minh finding quan trọng bằng nguồn/công cụ thứ hai.</li>
<li>Ghi command/config, hash input/output và limitation.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>PCAP/flow, EVTX/syslog, disk image, memory image, binary và OSINT result.</li>
<li>Parser warnings, dropped events, symbol/profile version và timezone.</li>
<li>Tool provenance, license, update/signature date và audit log.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-impact">LIVE-IMPACT</span>Wireshark/Zeek cho network; KAPE/Autopsy cho disk; Volatility cho RAM; Ghidra/x64dbg cho binary.</li>
<li>
<span class="cmd-safety cmd-impact">LIVE-IMPACT</span>Không upload evidence nhạy cảm lên VirusTotal/online sandbox nếu chưa được phép.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>Strings thấy một domain chưa đủ kết luận C2; kiểm tra xref trong disassembler, DNS/PCAP và runtime callback trong lab.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Tool output là diễn giải, không phải ground truth.</li>
<li>Parser cũ có thể không hỗ trợ artefact phiên bản mới.</li>
<li>Dynamic tool làm thay đổi hệ thống; static tool có thể bị packing đánh lừa.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> NIST SP 800-86; tool documentation and validation datasets.</p>
</div>
</details>`;
