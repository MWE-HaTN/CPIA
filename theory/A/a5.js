/* Theory — A5 (Appendix A). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["a5"]=`<h2>A5 — Threat Assessment</h2>

<div class="tier recall" id="a5-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Cyber Kill Chain (7):</strong> <span class="en">Reconnaissance → Weaponization → Delivery → Exploitation → Installation → C2 → Actions on Objectives.</span><span class="vi">Reconnaissance → Weaponization → Delivery → Exploitation → Installation → C2 → Actions on Objectives.</span></li>
<li><strong>MITRE ATT&amp;CK:</strong> <span class="en">A matrix of Tactics (the WHY/goal) and Techniques (the HOW).</span><span class="vi">Ma trận gồm Tactics (mục tiêu — TẠI SAO) và Techniques (cách làm — NHƯ THẾ NÀO).</span></li>
<li><strong>Diamond Model:</strong> <span class="en">Adversary — Capability — Infrastructure — Victim. Pivot between vertices to find related activity.</span><span class="vi">Adversary — Capability — Infrastructure — Victim. Xoay giữa các đỉnh để tìm hoạt động liên quan.</span></li>
<li><strong>Pyramid of Pain:</strong> <span class="en">hash &lt; IP &lt; domain &lt; host/network artefacts &lt; tools &lt; TTPs. TTPs are hardest for the attacker to change.</span><span class="vi">hash &lt; IP &lt; domain &lt; artefact host/mạng &lt; công cụ &lt; TTP. TTP là thứ kẻ tấn công khó thay nhất.</span></li>
<li><strong>IoC vs IoA:</strong> <span class="en">IoC = forensic artefact of a breach (hash, IP, key); IoA = behaviour/intent in progress (early, behavioural).</span><span class="vi">IoC = artefact pháp y của vụ xâm nhập (hash, IP, khóa); IoA = hành vi/ý đồ đang diễn ra (sớm, theo hành vi).</span></li>
<li><strong>Attribution is probabilistic:</strong> <span class="en">Built from converging indicators; tools and language strings can be planted as false flags.</span><span class="vi">Dựng từ nhiều chỉ dấu hội tụ; công cụ và chuỗi ngôn ngữ có thể bị cài làm false flag.</span></li>
<li><strong>Phishing types:</strong> <span class="en">Whaling (executives), spear-phishing (specific target), watering-hole (a trusted site the target visits).</span><span class="vi">Whaling (lãnh đạo), spear-phishing (mục tiêu cụ thể), watering-hole (site tin cậy mà mục tiêu hay vào).</span></li>
<li><strong>APT vs commodity:</strong> <span class="en">APT = well-resourced, targeted, persistent (espionage); commodity = opportunistic, automated, financial.</span><span class="vi">APT = nhiều nguồn lực, nhắm mục tiêu, bền bỉ (gián điệp); commodity = cơ hội, tự động, vì tiền.</span></li>
<li><strong>Attacker motivations:</strong> <span class="en">Financial gain, espionage/IP theft, hacktivism, disruption/sabotage, notoriety, insider abuse.</span><span class="vi">Lợi ích tài chính, gián điệp/đánh cắp IP, hacktivism, phá hoại, nổi tiếng, lạm dụng nội bộ.</span></li>
<li><strong>Likely targets:</strong> <span class="en">Executives, finance, HR, IT admins, developers — anyone with access to valuable data or privileged systems.</span><span class="vi">Lãnh đạo, tài chính, nhân sự, quản trị IT, lập trình viên — bất kỳ ai có quyền truy cập dữ liệu giá trị hoặc hệ thống đặc quyền.</span></li>
</ul></div></div>

<details class="tier concept" id="a5-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Cyber Kill Chain — vì sao hữu ích</h4>
<p>Mô tả 7 giai đoạn tuần tự của một cuộc xâm nhập. Giá trị: xác định kẻ tấn công đang ở giai đoạn nào và <strong>gián đoạn càng sớm thì thiệt hại và phạm vi càng nhỏ</strong>. Phá vỡ một mắt xích (vd chặn Delivery) làm hỏng cả chuỗi.</p>

<h4>MITRE ATT&amp;CK — Tactics vs Techniques</h4>
<p><strong>Tactic</strong> = mục tiêu của kẻ tấn công (vd Persistence, Defense Evasion, Credential Access). <strong>Technique</strong> = cách cụ thể để đạt mục tiêu đó (vd Run keys cho Persistence, dump LSASS — T1003 — cho Credential Access). Một technique có thể thuộc nhiều tactic tùy ý đồ.</p>

<h4>Diamond Model — xoay trục (pivoting)</h4>
<p>Bốn đỉnh: <strong>Adversary, Capability, Infrastructure, Victim</strong>. Khi biết một đỉnh (vd một IP hạ tầng) có thể <em>xoay</em> sang đỉnh khác để phát hiện sự cố liên quan (cùng hạ tầng → nạn nhân khác). Tốt để lập bản đồ chiến dịch.</p>

<h4>Pyramid of Pain — vì sao TTP bền nhất</h4>
<p>Xếp chỉ dấu theo mức "đau" mà kẻ tấn công phải chịu khi bị buộc phải thay: hash/IP đổi rất dễ; còn <strong>TTP (cách hành xử)</strong> rất khó đổi. Vì vậy phát hiện dựa trên <strong>hành vi/TTP</strong> bền hơn nhiều so với chặn hash/IP.</p>

<h4>IoC vs IoA</h4>
<p><strong>IoC</strong> là <em>dấu vết của việc đã/đang xảy ra</em> (hash, IP độc hại, khóa registry) — mang tính phản ứng. <strong>IoA</strong> phản ánh <em>hành vi/ý đồ đang diễn ra</em> (vd một tài liệu Office sinh ra PowerShell) — cho phép phát hiện sớm theo hành vi.</p>

<h4>Attribution &amp; false flag</h4>
<p>Attribution mang tính <strong>xác suất</strong>, dựng từ các chỉ dấu hội tụ (TTP, hạ tầng, mục tiêu, thời điểm). Một công cụ/chuỗi ngôn ngữ đơn lẻ rất yếu và <strong>có thể bị cài cố ý (false flag)</strong>. Khi tools/strings chỉ về Nhóm X nhưng targeting/timing hợp với Nhóm Y → phải cân nhắc khả năng giả mạo, đừng kết luận vội.</p>

<h4>Insider vs external; dịch sang ngữ cảnh kinh doanh</h4>
<p>Dấu hiệu <strong>insider</strong>: dùng thông tin đăng nhập hợp lệ truy cập dữ liệu bất thường, trong giờ làm, từ thiết bị của chính họ — khác với brute-force/khai thác từ ngoài. <strong>Dịch sang kinh doanh</strong> = trả lời: mối đe dọa này đe dọa <em>tài sản/dữ liệu trọng yếu</em> nào và <em>tác động</em> ra sao — để lãnh đạo hiểu rủi ro.</p>
</div></details>

<details class="tier reference" id="a5-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Cyber Kill Chain (Lockheed Martin) — 7 stages</h4>
<div class="table-wrap"><table>
<tr><th>#</th><th>Stage</th><th>Evidence / example</th></tr>
<tr><td>1</td><td>Reconnaissance</td><td>OSINT, scanning, email harvesting</td></tr>
<tr><td>2</td><td>Weaponization</td><td>Pairing an exploit with a payload (e.g. maldoc)</td></tr>
<tr><td>3</td><td>Delivery</td><td>Phishing email / link / web / USB</td></tr>
<tr><td>4</td><td>Exploitation</td><td>Vuln or user action triggers code</td></tr>
<tr><td>5</td><td>Installation</td><td>Backdoor / persistence installed</td></tr>
<tr><td>6</td><td>Command &amp; Control (C2)</td><td>Beaconing to attacker infrastructure</td></tr>
<tr><td>7</td><td>Actions on Objectives</td><td>Collection, exfiltration, ransomware, destruction</td></tr>
</table></div>

<h4>MITRE ATT&amp;CK Enterprise tactics — syllabus-era 14-tactic model</h4>
<p><strong>Version note:</strong> Bảng dưới phản ánh mô hình 14 tactic phổ biến trong tài liệu/đề theo syllabus 2023. ATT&amp;CK là knowledge base có version và live Enterprise matrix có thể thêm/đổi tactic; khi làm nghiệp vụ phải ghi version/permalink thay vì mặc định danh sách này luôn là bản mới nhất.</p>
<div class="table-wrap"><table>
<tr><th>#</th><th>Tactic</th><th>Goal</th><th>Example technique</th></tr>
<tr><td>1</td><td>Reconnaissance</td><td>Gather target info</td><td>OSINT, scanning, email harvesting</td></tr>
<tr><td>2</td><td>Resource Development</td><td>Prepare resources</td><td>Register domains, build/stage payloads, set up C2</td></tr>
<tr><td>3</td><td>Initial Access</td><td>Get in</td><td>Spear-phishing attachment, exploit public-facing app</td></tr>
<tr><td>4</td><td>Execution</td><td>Run code</td><td>PowerShell, WScript, scheduled task</td></tr>
<tr><td>5</td><td>Persistence</td><td>Stay</td><td>Run keys, services, scheduled tasks</td></tr>
<tr><td>6</td><td>Privilege Escalation</td><td>Higher rights</td><td>Token manipulation, UAC bypass</td></tr>
<tr><td>7</td><td>Defense Evasion</td><td>Avoid detection</td><td>Clear logs (T1070), obfuscation, timestomping</td></tr>
<tr><td>8</td><td>Credential Access</td><td>Steal creds</td><td>Dump LSASS (T1003), Kerberoasting</td></tr>
<tr><td>9</td><td>Discovery</td><td>Map the env</td><td>AD / share / host enumeration</td></tr>
<tr><td>10</td><td>Lateral Movement</td><td>Spread</td><td>Pass-the-Hash, PsExec, RDP</td></tr>
<tr><td>11</td><td>Collection</td><td>Gather target data</td><td>Screen capture, keylogging, archive/staging</td></tr>
<tr><td>12</td><td>Command &amp; Control (C2)</td><td>Remote control</td><td>Beaconing over HTTP/S, DNS, custom protocol</td></tr>
<tr><td>13</td><td>Exfiltration</td><td>Steal data out</td><td>Exfil over C2 channel, DNS, cloud sync</td></tr>
<tr><td>14</td><td>Impact</td><td>Disrupt / destroy / monetise</td><td>Ransomware (T1486), data wiping, defacement</td></tr>
</table></div>

<h4>Pyramid of Pain</h4>
<div class="table-wrap"><table>
<tr><th>Indicator</th><th>Pain to change</th></tr>
<tr><td>Hash values</td><td>Trivial</td></tr>
<tr><td>IP addresses</td><td>Easy</td></tr>
<tr><td>Domain names</td><td>Simple</td></tr>
<tr><td>Host / network artefacts</td><td>Annoying</td></tr>
<tr><td>Tools</td><td>Challenging</td></tr>
<tr><td>TTPs</td><td>Tough (most durable to detect on)</td></tr>
</table></div>

<h4>Threat-intelligence levels &amp; phishing types</h4>
<div class="table-wrap"><table>
<tr><th>Intel level</th><th>For whom</th><th>Phishing type</th><th>Target</th></tr>
<tr><td>Strategic</td><td>Leadership (trends, geopolitics)</td><td>Whaling</td><td>Executives</td></tr>
<tr><td>Operational</td><td>Campaign / intent</td><td>Spear-phishing</td><td>A specific person/team</td></tr>
<tr><td>Tactical</td><td>TTPs / IoCs for detections</td><td>Watering-hole</td><td>A trusted site the target visits</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="a5-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Xác định asset, business process, data owner và hậu quả CIA; phân biệt threat, vulnerability, likelihood và impact.</li>
<li>Lập hypothesis về actor/campaign nhưng chấm confidence; map observation sang ATT&amp;CK technique và Kill Chain stage.</li>
<li>Phân tích capability, intent, opportunity và targeting; ưu tiên người/tài sản có access hoặc ảnh hưởng cao.</li>
<li>Chuyển thành quyết định: detection gap, containment priority, protective monitoring và risk owner.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>TTP, infrastructure, malware family, victimology, timing, language/build artefact và operational mistakes.</li>
<li>IoC dễ đổi: hash/IP/domain; IoA/TTP bền hơn: process chain, credential access, lateral movement.</li>
<li>Business evidence: crown-jewel inventory, dependency, RTO/RPO, regulatory và safety impact.</li>
</ul>
</div>
</div>
<h4>Tình huống diễn giải</h4>
<p>Cùng một beacon trên kiosk và domain controller có technical IOC giống nhau nhưng business risk khác hẳn. DC có blast radius, credential và recovery impact cao hơn nên ưu tiên containment/forensics.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>ATT&amp;CK là knowledge base, không phải risk score hay bằng chứng attribution.</li>
<li>Kill Chain tuyến tính có thể không mô tả insider, cloud abuse hoặc bước lặp.</li>
<li>Một compiler string, timezone hay malware family có thể là false flag; attribution cần nhiều nguồn độc lập.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> MITRE ATT&amp;CK; Lockheed Martin Cyber Kill Chain; Diamond Model; NIST SP 800-30.</p>
</div>
</details>`;
