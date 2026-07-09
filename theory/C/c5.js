/* Theory — C5 (Appendix C). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["c5"]=`<h2>C5 — Community Knowledge</h2>

<div class="tier recall" id="c5-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>AV names are low-confidence:</strong> <span class="en">"Trojan.Generic", "Heur." etc. are heuristic/generic labels — not authoritative family names. Confirm before relying on them.</span><span class="vi">"Trojan.Generic", "Heur."... là nhãn heuristic/chung — không phải tên họ chính xác. Xác nhận thêm trước khi tin.</span></li>
<li><strong>Eliminate false positives:</strong> <span class="en">An AV flag on a legitimate admin/dual-use tool may be a false positive — corroborate across sources and analyse behaviour.</span><span class="vi">AV gắn cờ một công cụ admin/lưỡng dụng hợp lệ có thể là false positive — đối chiếu nhiều nguồn và phân tích hành vi.</span></li>
<li><strong>Multi-engine lookup:</strong> <span class="en">VirusTotal aggregates many engines; treat detection ratio as a signal, not proof.</span><span class="vi">VirusTotal gộp nhiều engine; coi tỉ lệ phát hiện là tín hiệu, không phải bằng chứng tuyệt đối.</span></li>
<li><strong>Hash search &gt; upload:</strong> <span class="en">Search a file's hash first — it checks reputation WITHOUT exposing the (possibly sensitive) sample.</span><span class="vi">Tra hash của file trước — kiểm tra danh tiếng MÀ KHÔNG để lộ mẫu (có thể nhạy cảm).</span></li>
<li><strong>Key resources:</strong> <span class="en">VirusTotal, abuse.ch (URLhaus/MalwareBazaar/Feodo), MITRE ATT&amp;CK, CVE/NVD, YARA rules, vendor threat reports.</span><span class="vi">VirusTotal, abuse.ch (URLhaus/MalwareBazaar/Feodo), MITRE ATT&amp;CK, CVE/NVD, rule YARA, báo cáo của hãng.</span></li>
<li><strong>TLP 2.0:</strong> <span class="en">Traffic Light Protocol controls sharing: TLP:RED, TLP:AMBER (and AMBER+STRICT), TLP:GREEN, and TLP:CLEAR. WHITE is the retired TLP 1.0 label.</span><span class="vi">Traffic Light Protocol kiểm soát chia sẻ bằng TLP:RED, TLP:AMBER (và AMBER+STRICT), TLP:GREEN, TLP:CLEAR. WHITE là nhãn cũ của TLP 1.0.</span></li>
<li><strong>Sandbox OPSEC:</strong> <span class="en">Uploading a sensitive sample to a public sandbox may leak victim data and alert the attacker.</span><span class="vi">Upload mẫu nhạy cảm lên sandbox công khai có thể lộ dữ liệu nạn nhân và báo động kẻ tấn công.</span></li>
</ul></div></div>

<details class="tier concept" id="c5-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Đọc báo cáo/nhãn antivirus</h4>
<p>Tên AV thường không thống nhất giữa các hãng và phần lớn là <strong>heuristic/generic</strong> ("Trojan.Generic", "Gen:Variant", "Heur"). Đừng coi đó là họ malware chính xác. Tỉ lệ phát hiện trên VirusTotal là <em>chỉ báo</em>: ít engine bắt chưa chắc lành; nhiều engine bắt chưa chắc đúng họ. Luôn nhìn thêm hành vi và bối cảnh.</p>

<h4>Loại bỏ false positive</h4>
<p>Nhiều công cụ <strong>lưỡng dụng (dual-use)</strong> hợp lệ (PsExec, PowerShell, mimikatz dùng trong test) bị AV gắn cờ. Cách loại false positive đáng tin nhất: <strong>đối chiếu nhiều nguồn + phân tích hành vi thực tế</strong> trong ngữ cảnh, thay vì tin một engine. "AV kêu" không tự động = độc hại.</p>

<h4>Hash search vs upload — OPSEC</h4>
<p>Khi điều tra một sự cố có chủ đích, <strong>tra hash</strong> cho biết mẫu đã được biết chưa mà <em>không tiết lộ</em> chính mẫu. <strong>Upload file</strong> lên dịch vụ công khai có thể (1) lộ dữ liệu nạn nhân nhúng trong mẫu, (2) <em>báo động kẻ tấn công</em> nếu chúng theo dõi sandbox công khai. Cân nhắc kỹ trước khi upload.</p>

<h4>TLP — chia sẻ tình báo có kiểm soát</h4>
<p>Traffic Light Protocol quy định phạm vi lan truyền của thông tin chia sẻ. Nắm bậc RED/AMBER/GREEN/CLEAR để không chia sẻ quá phạm vi cho phép (xem bảng).</p>

<h4>Nguồn cộng đồng đáng tin</h4>
<p>VirusTotal (đa engine), abuse.ch (URLhaus, MalwareBazaar, Feodo Tracker), MITRE ATT&amp;CK (TTP), CVE/NVD (lỗ hổng), YARA (rule khớp mẫu họ malware), CERT advisories, blog/forum DFIR. Luôn ưu tiên nguồn uy tín và đối chiếu chéo.</p>
</div></details>

<details class="tier reference" id="c5-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Open-source resources</h4>
<div class="table-wrap"><table>
<tr><th>Resource</th><th>Provides</th></tr>
<tr><td>VirusTotal</td><td>Multi-engine scan + community + relations</td></tr>
<tr><td>abuse.ch (URLhaus, MalwareBazaar, Feodo)</td><td>Malicious URLs, samples, C2 indicators</td></tr>
<tr><td>MITRE ATT&amp;CK</td><td>Tactics / techniques mapping</td></tr>
<tr><td>CVE / NVD</td><td>Known vulnerabilities by version</td></tr>
<tr><td>YARA rules</td><td>Pattern-match files/memory to malware families</td></tr>
<tr><td>Vendor threat reports / DFIR blogs</td><td>Campaign &amp; TTP write-ups</td></tr>
</table></div>

<h4>Interpreting AV names</h4>
<div class="table-wrap"><table>
<tr><th>Label style</th><th>Meaning</th></tr>
<tr><td>Trojan.Generic / Gen:Variant</td><td>Generic — low-confidence, confirm</td></tr>
<tr><td>Heur. / ML.Attribute</td><td>Heuristic / machine-learning detection</td></tr>
<tr><td>Family + variant (e.g. Emotet.AB)</td><td>More specific, still corroborate</td></tr>
</table></div>

<h4>Traffic Light Protocol (TLP)</h4>
<div class="table-wrap"><table>
<tr><th>Level</th><th>Share with</th></tr>
<tr><td>TLP:RED</td><td>Named recipients only — do not share further</td></tr>
<tr><td>TLP:AMBER</td><td>Your organisation &amp; clients on a need-to-know</td></tr>
<tr><td>TLP:GREEN</td><td>The community / peers</td></tr>
<tr><td>TLP:AMBER+STRICT</td><td>Restricted to the recipient's organisation</td></tr>
<tr><td>TLP:CLEAR</td><td>Public; replaces the retired TLP:WHITE label</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="c5-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Đọc report theo engine/date/sample hash; tách family label, behavior và generic heuristic.</li>
<li>Pivot IOC qua nguồn cộng đồng nhưng giữ provenance/TLP và kiểm tra freshness.</li>
<li>Xác minh false positive bằng signature, prevalence, context, static/dynamic behavior.</li>
<li>Chuyển finding thành hypothesis/detection, không sao chép verdict mù quáng.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>Hash, file type/size/signature, first/last seen, detection ratio.</li>
<li>YARA/Sigma/Suricata rule, sandbox process/network behavior.</li>
<li>Vendor write-up, CERT advisory, CVE/vendor bulletin và community discussion.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Tra hash an toàn; không upload file nhạy cảm nếu chưa được phép.</li>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>So rule với benign corpus và sample liên quan trước deployment.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>1/70 engine báo generic có thể false positive; 40 engine cùng với macro→PowerShell→C2 là confidence cao hơn, nhưng detection count vẫn không thay thế phân tích.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Tên malware giữa vendor không chuẩn hóa.</li>
<li>IOC cũ có thể reassigned/sinkholed/shared hosting.</li>
<li>Nguồn cộng đồng có thể sai hoặc bị poisoning; ưu tiên primary evidence.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> FIRST TLP 2.0; MITRE ATT&amp;CK; CISA/CERT and vendor advisories; Sigma/YARA documentation.</p>
</div>
</details>`;
