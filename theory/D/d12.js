/* Theory — D12 (Appendix D). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["d12"]=`<h2>D12 — Web Based Attacks</h2><ul>

<li><span class="en">Identify malicious elements in HTML / JS / PDF / Office / web content: obfuscated JavaScript, redirects, iframes, exploit kits, encoded payloads, suspicious forms.</span><span class="vi">Xác định các phần tử độc hại trong HTML / JS / PDF / Office / nội dung web: JavaScript bị làm rối, chuyển hướng, iframe, exploit kit, payload mã hóa, form đáng ngờ.</span></li>

<li><span class="en">Decode JavaScript by beautifying, unpacking eval/unescape/atob layers, deobfuscating string arrays, and observing network calls.</span><span class="vi">Giải mã JavaScript bằng cách làm đẹp, mở gói các lớp eval/unescape/atob, deobfuscate mảng chuỗi và quan sát các cuộc gọi mạng.</span></li>

<li><span class="en">Web attack examples: SQL injection, XSS, command injection, path traversal, file upload / webshell, SSRF, deserialization.</span><span class="vi">Ví dụ tấn công web: SQL injection, XSS, command injection, path traversal, upload file / webshell, SSRF, deserialization.</span></li>

<li><span class="en">Tools: browser dev tools, CyberChef, jsbeautifier, curl, Burp, Wireshark, urlscan, sandboxes.</span><span class="vi">Công cụ: DevTools trình duyệt, CyberChef, jsbeautifier, curl, Burp, Wireshark, urlscan, sandbox.</span></li>

</ul><h3>JavaScript De-obfuscation Techniques</h3><ul><li><strong><code>String.fromCharCode(72,101,108,108,111)</code>:</strong> Builds strings from char codes to hide payload strings from static analysis. Reveal: run expression in browser console → "Hello"</li><li><strong><code>eval(unescape(...))</code>:</strong> URL-decodes then executes. Replace <code>eval</code> with <code>console.log</code> to see payload without executing.</li><li><strong><code>atob("base64string")</code>:</strong> Base64 decode then execute. Decode separately first: <code>atob()</code> in browser console or CyberChef.</li><li><strong>Variable obfuscation (<code>_0x1a2b</code>):</strong> Identifiers replaced with random strings. Use JS beautifier + de4js to partially restore readability.</li><li><strong>Safe environment:</strong> Use <code>about:blank</code> DevTools console, JSDetox, or isolated VM to de-obfuscate without risk.</li></ul>

<h3>Identifying Malicious Elements in HTML and Web Files</h3>

<div class="table-wrap"><table>

<tr><th>Element</th><th>Malicious Use</th><th>Example</th></tr>

<tr><td>Hidden iframe</td><td>Load malicious page invisibly — drive-by download</td><td><code>&lt;iframe src="evil.com" width="0" height="0" style="display:none"&gt;</code></td></tr>

<tr><td>External script src</td><td>Load attacker-controlled JavaScript</td><td><code>&lt;script src="http://attacker.com / payload.js"&gt;</code></td></tr>

<tr><td>Meta refresh redirect</td><td>Silently redirect to malicious page</td><td><code>&lt;meta http-equiv="refresh" content="0;url=http://evil.com"&gt;</code></td></tr>

<tr><td>SVG with embedded JS</td><td>Execute JS inside SVG image — bypasses some content filters</td><td><code>&lt;svg onload="eval(atob('...')"&gt;</code></td></tr>

<tr><td>Data URIs</td><td>Embed executable content directly in HTML — bypasses URL filtering</td><td><code>&lt;script src="data:text / javascript;base64, ZXZhb..."&gt;</code></td></tr>

<tr><td>Object / Embed tags</td><td>Load Flash / Java applet exploit</td><td><code>&lt;object data="exploit.swf" type="application / x-shockwave-flash"&gt;</code></td></tr>

</table></div>

<p class="sub-heading">Decoding Obfuscated JavaScript</p>

<div class="table-wrap"><table>

<tr><th>Obfuscation Pattern</th><th>What It Does</th><th>De-obfuscation Approach</th></tr>

<tr><td><code>eval(unescape("..."))</code></td><td>URL-decode then execute as JS</td><td>Replace eval with console.log; run in browser DevTools (about:blank → F12)</td></tr>

<tr><td><code>String.fromCharCode(72,101,...)</code></td><td>Build string from char codes</td><td>Run the expression in browser console to see result</td></tr>

<tr><td><code>atob("base64string")</code></td><td>Base64 decode then execute</td><td>Decode with <code>atob()</code> in console or CyberChef</td></tr>

<tr><td>Variable name obfuscation (<code>_0x1a2b</code>)</td><td>All identifiers replaced with random strings</td><td>JS beautifier (beautifier.io) + de4js.github.io</td></tr>

<tr><td><code>document.write(obfuscated)</code></td><td>Dynamically inject HTML / scripts from encoded string</td><td>Replace document.write with console.log to see what would be injected</td></tr>

<tr><td><code>setTimeout("code", 0)</code></td><td>Execute after minimal delay — evades some sandbox timeouts</td><td>Remove setTimeout wrapper and execute directly</td></tr>

</table></div>

<p class="sub-heading">Determining Whether Code Is Malicious</p>

<ol class="num-steps">

<li><strong>De-obfuscate:</strong> Use browser DevTools console, CyberChef, or JSDetox</li>

<li><strong>Look for IoCs:</strong> Hardcoded IPs / domains, encoded shellcode, exploit-specific patterns</li>

<li><strong>Sandbox if unsure:</strong> Submit to Hybrid Analysis or Any.run — observe network connections and dropped files</li>

</ol>

<ul>

<li><strong>Definitive malicious indicators:</strong> Writing binary to disk via ActiveX, XMLHttpRequest to unknown domain, shellcode-like byte sequences (NOP sleds, egg hunters), attempts to exploit browser plugins</li>

<li><strong>Web shell access pattern:</strong> POST request to static-looking file → response contains command output. Web server process spawning cmd.exe / bash (Event 4688) = RCE confirmed.</li>

</ul>

<p class="sub-heading">JavaScript Obfuscation Patterns</p>

<pre>Common obfuscation indicators in malicious JS:

eval(...)                    → executes string as code

unescape(...)                → decodes URL-encoded strings  

String.fromCharCode(72,101)  → builds strings from char codes

document.write(...)          → dynamically writes HTML/scripts

setTimeout("code", 0)        → delayed execution to evade analysis

atob(...)                    → base64 decode

window["eval"]               → property access to evade static detection</pre>

<p class="sub-heading">Malicious HTML Elements</p>

<ul>

<li><strong>Hidden iframes:</strong> <code>&lt;iframe src="evil.com" width="0" height="0"&gt;</code> — drive-by download</li>

<li><strong>Script injection:</strong> External script src pointing to attacker domain</li>

<li><strong>Meta refresh:</strong> Redirect to malicious page</li>

<li><strong>SVG with embedded JavaScript:</strong> Often bypasses content filters</li>

</ul>


<h3 class="qz-theory"><span class="en">Web-Based Attacks &amp; Obfuscated Scripts</span><span class="vi">Tấn công qua web &amp; script bị làm rối</span></h3>
<ul>
<li><span class="en">Obfuscated JavaScript using <code>eval(unescape(...))</code>, <code>String.fromCharCode(...)</code>, long hex strings or packers builds strings/payloads at runtime to evade signatures. <strong>De-obfuscate safely</strong> — replace the final <code>eval</code>/<code>document.write</code> with a logging/print call (or use a JS beautifier/sandbox) to reveal the decoded intent; <em>never run it live in a browser</em>.</span><span class="vi">JavaScript làm rối dùng <code>eval(unescape(...))</code>, <code>String.fromCharCode(...)</code>, chuỗi hex dài hoặc packer dựng chuỗi/payload lúc chạy để né signature. <strong>Giải rối an toàn</strong> — thay <code>eval</code>/<code>document.write</code> cuối bằng lệnh log/print (hoặc dùng beautifier/sandbox JS) để lộ ý đồ đã giải mã; <em>tuyệt đối không chạy trực tiếp trong trình duyệt</em>.</span></li>
<li><span class="en">A hidden/0-size <strong>iframe</strong> injected into pages, pointing to an external exploit kit, silently serves drive-by downloads to visitors of a compromised site. Spot injected iframes, obfuscated <code>&lt;script&gt;</code> tags and unexpected external references.</span><span class="vi">một <strong>iframe</strong> ẩn/kích thước 0 chèn vào trang, trỏ tới bộ khai thác bên ngoài, âm thầm phục vụ drive-by download cho người truy cập site bị xâm nhập. Phát hiện iframe chèn, thẻ <code>&lt;script&gt;</code> làm rối và tham chiếu ngoài bất ngờ.</span></li></ul>
`;
