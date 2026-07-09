/* Theory — D9 (Appendix D). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d9"]=`<h2>D9 — Incoming Attacks</h2>

<div class="tier recall" id="d9-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>SQL injection:</strong> <span class="en">Log entries like id=1' OR '1'='1 in a query string.</span><span class="vi">Dòng log kiểu id=1' OR '1'='1 trong query string.</span></li>
<li><strong>Path traversal:</strong> <span class="en">../../../../etc/passwd or ..%2f sequences in a request path.</span><span class="vi">Chuỗi ../../../../etc/passwd hoặc ..%2f trong đường dẫn yêu cầu.</span></li>
<li><strong>Command injection:</strong> <span class="en">A request like /cgi-bin/test.sh;cat /etc/passwd.</span><span class="vi">Yêu cầu kiểu /cgi-bin/test.sh;cat /etc/passwd.</span></li>
<li><strong>Scanner tooling:</strong> <span class="en">User-agents like "Nikto" or "sqlmap" = automated vuln-scanning/attack tooling.</span><span class="vi">User-agent kiểu "Nikto" hoặc "sqlmap" = công cụ quét lỗ hổng/tấn công tự động.</span></li>
<li><strong>Brute force:</strong> <span class="en">Hundreds of HTTP 401/403 for one account from one IP in a minute.</span><span class="vi">Hàng trăm HTTP 401/403 cho một tài khoản từ một IP trong một phút.</span></li>
<li><strong>Successful compromise sign:</strong> <span class="en">After scanning, a single successful POST creating shell.aspx = likely web-shell upload.</span><span class="vi">Sau khi quét, một POST thành công tạo shell.aspx = khả năng upload web-shell.</span></li>
<li><strong>Detection coverage:</strong> <span class="en">For public-facing web and email services, combine rate/statistical anomalies, attack signatures and manual review of traffic and logs to prove success—not merely an attempt.</span><span class="vi">Với dịch vụ web và email public-facing, kết hợp bất thường thống kê/tần suất, chữ ký tấn công và rà tay traffic/log để chứng minh thành công—không chỉ là một lần thử.</span></li>
</ul></div></div>

<details class="tier concept" id="d9-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Đọc web-log tìm tấn công</h4>
<p>Nhận ra <strong>chữ ký tấn công</strong> trong access log: <strong>SQLi</strong> (<code>' OR '1'='1</code>, UNION SELECT), <strong>path traversal</strong> (<code>../</code>, <code>..%2f</code>, <code>/etc/passwd</code>), <strong>XSS</strong> (<code>&lt;script&gt;</code>, <code>%3Cscript%3E</code>), <strong>command injection</strong> (<code>;</code>, <code>|</code>, <code>&#96;</code> + lệnh), và <strong>scanner user-agent</strong> (Nikto/sqlmap). Mã trạng thái/kích thước phản hồi giúp đoán thành/bại.</p>

<h4>Phân biệt "có" vs "thành công"</h4>
<p>Quan trọng: D9 hỏi phát hiện tấn công <strong>thành công</strong>. Nhiều 401/403 = brute-force đang thử (chưa chắc thành công); một <strong>200/302 + tạo file lạ</strong> (vd shell.aspx trong webroot) hoặc đổi byte phản hồi lớn bất thường = dấu hiệu <em>đã chiếm được</em>. Theo dõi chuỗi: scan → thử khai thác → một request thành công → hoạt động sau khai thác.</p>

<h4>Email-based incoming</h4>
<p>Tấn công đến qua email: phishing (xem header, link, đính kèm), khai thác mail server. Đối chiếu mail logs + gateway AV + endpoint để xác nhận thành công.</p>
</div></details>

<details class="tier reference" id="d9-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Web-attack signatures</h4>
<div class="table-wrap"><table>
<tr><th>Pattern</th><th>Attack</th></tr>
<tr><td>' OR '1'='1 , UNION SELECT</td><td>SQL injection</td></tr>
<tr><td>../ , ..%2f , /etc/passwd</td><td>Path traversal</td></tr>
<tr><td>&lt;script&gt; , %3Cscript%3E</td><td>XSS</td></tr>
<tr><td>; cat /etc/passwd , | , backtick</td><td>OS command injection</td></tr>
<tr><td>User-agent Nikto/sqlmap</td><td>Automated scanner/attack tool</td></tr>
</table></div>

<h4>Brute-force vs compromise</h4>
<div class="table-wrap"><table>
<tr><th>Sign</th><th>Meaning</th></tr>
<tr><td>Many 401/403, one account, one IP</td><td>Brute-force attempt</td></tr>
<tr><td>Sudden 200 after failures</td><td>Possible successful login</td></tr>
<tr><td>POST creating shell.aspx/.php</td><td>Web-shell upload (compromise)</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="d9-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Tạo chain recon→exploit attempt→success indicator→post-exploitation.</li>
<li>Đọc request đã decode cùng status, bytes, latency, backend/endpoint events.</li>
<li>Với email, theo Message-ID từ gateway→mailbox→click/process.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>SQLi/traversal/XSS/command pattern, 200/302 change, file creation, child shell.</li>
<li>SMTP/gateway verdict, attachment hash, URL click, EDR process/network.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Decode percent/Unicode một lần có kiểm soát; giữ raw request.</li>
<li>
<span class="cmd-safety cmd-ro">READ-ONLY/OFFLINE</span>Correlate WAF/web/app/OS logs theo request/correlation ID.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>HTTP 200 không tự chứng minh SQLi thành công; response content, DB error/query và dữ liệu trả về mới xác nhận.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>Scanner tạo nhiều signature nhưng không compromise.</li>
<li>WAF block log có thể là true attack nhưng successful defense.</li>
<li>Email Delivered không đồng nghĩa user executed payload.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> OWASP Testing Guide; MITRE Initial Access; web/mail vendor logs.</p>
</div>
</details>`;
