/* Theory — B10 (Appendix B). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["b10"]=`<h2>B10 — Host Analysis Techniques</h2>

<h3>Linux host analysis commands</h3>

<pre># Show listening TCP/UDP sockets with process names

ss -tulnp



# Show processes as a tree to identify suspicious parent/child relationships

ps auxf



# Show network sockets and owning processes

lsof -i



# Find recently modified shell scripts

find / -mtime -7 -name "*.sh" 2&gt;/dev/null



# Review recent login history

last

lastlog       # Show last login time per user account

who           # Show currently logged-in users



# Resolve executable path for a suspicious process

readlink -f /proc/[pid]/exe



# Inspect process memory mappings for injected or unusual regions

cat /proc/[pid]/maps



# Attach syscall tracing to a running process

strace -p [pid]</pre>

<ul>

<li><strong>Processes and sockets:</strong> <span class="en">Correlate process name, PID, parent PID, user, command line, open ports, and remote IPs.</span><span class="vi">Tương quan tên tiến trình, PID, PID cha, người dùng, dòng lệnh, cổng mở và IP từ xa.</span></li>

<li><strong>Patch level:</strong> <span class="en">Use systeminfo, wmic qfe, PowerShell Get-HotFix, and build number comparison.</span><span class="vi">Dùng systeminfo, wmic qfe, PowerShell Get-HotFix và so sánh build number.</span></li>

<li><strong>Interesting files:</strong> <span class="en">Unusual locations, recent writes, executable in user profile / temp, scripts, archives, password files.</span><span class="vi">Vị trí bất thường, ghi gần đây, file thực thi trong profile / temp người dùng, script, archive, file mật khẩu.</span></li>

<li><strong>Web servers:</strong> <span class="en">Review access / error logs, webroots, webshells, upload folders, config files, and service accounts.</span><span class="vi">Xem log truy cập / lỗi, webroot, webshell, thư mục upload, file cấu hình và tài khoản dịch vụ.</span></li>

</ul>

<h3>Hands-on Command Examples</h3>

<pre><code>netstat -ano                      # Show active network connections with owning PID

systeminfo                        # Display OS build, hotfix summary, and system details

wmic qfe list brief               # List installed Windows hotfixes

powershell Get-HotFix             # PowerShell alternative for patch listing

where /r C:\\\\Users *.exe           # Search user profiles for executable files

icacls C:\\\\path\\\\to\\\\file.exe       # Review NTFS permissions for a file</code></pre>

<h3>Web Servers and Compromise Indicators</h3><div class="table-wrap"><table><tr><th>Server</th><th>Config Location</th><th>Log Location</th></tr><tr><td>Apache</td><td><code>/etc/apache2/apache2.conf</code></td><td><code>/var/log/apache2/access.log</code></td></tr><tr><td>IIS</td><td><code>applicationHost.config</code>, IIS Manager</td><td><code>C:\\inetpub\\logs\\LogFiles\\W3SVC1\\</code></td></tr><tr><td>nginx</td><td><code>/etc/nginx/nginx.conf</code></td><td><code>/var/log/nginx/access.log</code></td></tr></table></div><ul><li><strong>Web shell indicators:</strong> <span class="en">.php/.aspx in upload or image directories, POST to static-looking filename, unusually large HTTP response to POST request</span><span class="vi">.php/.aspx trong thư mục upload hoặc ảnh, POST đến tên file trông có vẻ tĩnh, phản hồi HTTP bất thường lớn đối với POST request</span></li><li><strong>Event 4688 pattern (RCE confirmed):</strong> <code>w3wp.exe → cmd.exe</code>, <code>httpd → bash</code>, <span class="en">or any web server process spawning a shell</span><span class="vi">Hoặc bất kỳ tiến trình web server nào tạo shell</span></li></ul>
<h3 class="qz-theory"><span class="en">Windows Host Analysis Commands</span><span class="vi">Lệnh phân tích host Windows</span></h3>
<div class="table-wrap"><table><thead><tr><th><span class="en">Goal</span><span class="vi">Mục tiêu</span></th><th><span class="en">Command / tool</span><span class="vi">Lệnh / công cụ</span></th></tr></thead><tbody>
<tr><td><span class="en">Processes ↔ listening ports + PID</span><span class="vi">Tiến trình ↔ cổng nghe + PID</span></td><td><code>netstat -ano</code> (+ <code>tasklist</code>)</td></tr>
<tr><td><span class="en">Installed patches/hotfixes</span><span class="vi">Bản vá/hotfix đã cài</span></td><td><code>wmic qfe list</code> / <code>systeminfo</code></td></tr>
<tr><td><span class="en">Auto-start / persistence (broadest)</span><span class="vi">Tự khởi động / persistence (rộng nhất)</span></td><td>Sysinternals Autoruns</td></tr>
<tr><td><span class="en">Scheduled tasks</span><span class="vi">Scheduled task</span></td><td><code>schtasks /query</code> / <code>Get-ScheduledTask</code></td></tr>
<tr><td><span class="en">Attacker web requests</span><span class="vi">Request web của kẻ tấn công</span></td><td><span class="en">Web server access/error logs (IIS, Apache)</span><span class="vi">Log access/error web server (IIS, Apache)</span></td></tr></tbody></table></div>
`;
