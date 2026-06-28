/* Theory — E14 (Appendix E). Edit the HTML below. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e14"]=`<h2>E14 — Linux OS File Structures</h2><div class="table-wrap"><table><tr><th>Artefact</th><th>Use</th></tr><tr><td>/var/log/auth.log or secure</td><td>SSH, sudo, su, authentication.</td></tr><tr><td>/var/log/syslog or messages</td><td>System / service events.</td></tr><tr><td>~/.bash_history</td><td>User commands; may be missing or tampered.</td></tr><tr><td>/etc/passwd, /etc/shadow</td><td>Accounts and password hashes.</td></tr><tr><td>/etc/sudoers, sudoers.d</td><td>Privilege configuration.</td></tr><tr><td>cron directories / crontab</td><td>Persistence / scheduled tasks.</td></tr><tr><td>systemd service files</td><td>Service persistence.</td></tr><tr><td>~/.ssh/authorized_keys</td><td>SSH persistence.</td></tr><tr><td>Apache / Nginx logs</td><td>Web compromise evidence.</td></tr><tr><td>/tmp, /var/tmp, /dev/shm</td><td>Common malware staging locations.</td></tr></table></div>

<h3>auditd — Linux Audit Framework</h3>

<ul>

<li><strong>What:</strong> Kernel-level auditing subsystem that logs security-relevant events (file access, syscalls, authentication, process execution).</li>

<li><strong>Config:</strong> <code>/etc/audit/auditd.conf</code> and <code>/etc/audit/rules.d/</code></li>

<li><strong>Log location:</strong> <code>/var/log/audit/audit.log</code></li>

<li><strong>Key commands:</strong></li>

</ul>

<pre># Search audit logs by time range

ausearch -ts today -te now



# Summary report of audit events

aureport --summary



# Failed login attempts

aureport --auth --failed



# Executed programs

aureport --executable



# File access events

ausearch -f /etc/shadow -ts recent</pre>

<ul>

<li><strong>Forensic value:</strong> Provides syscall-level evidence of file access, process execution, and privilege use; more reliable than bash_history which can be edited.</li>

<li><strong>Caveat:</strong> Must be configured before the incident; default rules may not cover all relevant events.</li>

</ul>

<h3>journald — systemd Journal</h3>

<ul>

<li><strong>What:</strong> Modern replacement for traditional syslog; stores structured logs in binary format.</li>

<li><strong>Log location:</strong> <code>/var/log/journal/</code> (persistent) or <code>/run/log/journal/</code> (volatile).</li>

<li><strong>Key commands:</strong></li>

</ul>

<pre># View all journal entries

journalctl



# Filter by service

journalctl -u sshd



# Filter by time

journalctl --since "2024-01-01" --until "2024-01-02"



# Filter by PID

journalctl _PID=1234



# Export for offline analysis

journalctl -o json &gt; journal_export.json</pre>

<ul>

<li><strong>Forensic value:</strong> Structured metadata (PID, UID, command, timestamp); tamper-evident (forward sealing); can store kernel messages, service logs, and authentication events in one place.</li>

<li><strong>Caveat:</strong> Binary format requires journalctl or compatible tools; may not be available on older distributions.</li>

</ul>

<h3>Linux Persistence Mechanisms</h3>

<div class="table-wrap"><table>

<tr><th>Mechanism</th><th>Location / Method</th><th>Detection</th></tr>

<tr><td>systemd service</td><td><code>/etc/systemd/system/</code>, <code>/usr/lib/systemd/system/</code></td><td>List: <code>systemctl list-unit-files --type=service</code>; check for recently modified service files.</td></tr>

<tr><td>systemd timer</td><td><code>/etc/systemd/system/*.timer</code></td><td>List: <code>systemctl list-timers --all</code>; check for unusual timers.</td></tr>

<tr><td>cron jobs</td><td><code>/etc/crontab</code>, <code>/etc/cron.d/</code>, <code>/var/spool/cron/</code>, user crontabs</td><td>Check all cron directories; compare against known-good baseline.</td></tr>

<tr><td>LD_PRELOAD</td><td><code>/etc/ld.so.preload</code> or environment variable</td><td>Check <code>/etc/ld.so.preload</code> for unexpected libraries; inspect environment variables of running processes.</td></tr>

<tr><td>PAM backdoor</td><td>Modified PAM modules in <code>/lib/security/</code> or <code>/lib/x86_64-linux-gnu / security/</code></td><td>Compare PAM module hashes against package manager; check for recently modified .so files in PAM directories.</td></tr>

<tr><td>/etc/rc.local</td><td>Commands executed at boot (legacy but still works on some systems)</td><td>Check <code>/etc/rc.local</code> for unexpected entries.</td></tr>

<tr><td>SSH authorized_keys</td><td><code>~/.ssh/authorized_keys</code></td><td>Check for unexpected public keys; compare against user provisioning records.</td></tr>

<tr><td>Shell profile</td><td><code>~/.bashrc</code>, <code>~/.bash_profile</code>, <code>/etc/profile.d/</code></td><td>Check for reverse shell commands, environment variable manipulation, or script execution.</td></tr>

<tr><td>Kernel module</td><td><code>/lib/modules/</code>, loaded via <code>insmod</code>/<code>modprobe</code></td><td><code>lsmod</code> for loaded modules; compare against known-good; check <code>dmesg</code> for module load events.</td></tr>

</table></div>

<h3>Linux Analysis Commands</h3><div class="table-wrap"><table><tr><th>Command</th><th>What It Shows</th><th>IR Use</th></tr><tr><td><code>ps auxf</code></td><td>All processes as forest (parent-child tree)</td><td>Identify unexpected parent-child: sshd spawning bash = backdoor</td></tr><tr><td><code>lsof -i</code></td><td>All open network connections with process</td><td>Find C2 connections and listening backdoors</td></tr><tr><td><code>lsof -p [PID]</code></td><td>All open files for specific process</td><td>Identify files a suspicious process has open</td></tr><tr><td><code>ss -tulnp</code></td><td>Listening sockets with process names</td><td>Find backdoors on unexpected ports</td></tr><tr><td><code>find / -perm -4000 -type f</code></td><td>All SUID executables</td><td>Find malicious SUID binaries planted for privilege escalation</td></tr><tr><td><code>find /tmp /dev/shm -executable -type f</code></td><td>Executables in world-writable temp dirs</td><td>Malware staging area detection</td></tr></table></div>


<h3><span class="en">/proc/ Filesystem — Live System Forensics</span><span class="vi">Hệ thống tệp /proc/ — Pháp y hệ thống trực tiếp</span></h3>

<p><span class="en">The <code>/proc/</code> pseudo-filesystem exposes kernel and process state as files. It is volatile — contents exist only while the system is running and are not stored on disk. Critical for live response; not available in a disk image.</span><span class="vi">Hệ thống tệp giả <code>/proc/</code> hiển thị trạng thái kernel và tiến trình dưới dạng tệp. Nó biến động — nội dung chỉ tồn tại khi hệ thống đang chạy và không được lưu trên đĩa. Quan trọng cho phản ứng trực tiếp; không có sẵn trong image đĩa.</span></p>

<div class="table-wrap"><table>
<tr><th><span class="en">Path</span><span class="vi">Đường dẫn</span></th><th><span class="en">What it contains</span><span class="vi">Nội dung</span></th><th><span class="en">Forensic use</span><span class="vi">Ứng dụng pháp y</span></th></tr>
<tr><td><code>/proc/[PID]/cmdline</code></td><td><span class="en">Full command line used to launch the process</span><span class="vi">Dòng lệnh đầy đủ để khởi chạy tiến trình</span></td><td><span class="en">Reveals arguments and flags — catches renamed or obfuscated binaries</span><span class="vi">Tiết lộ đối số và cờ — phát hiện binary đổi tên hoặc che giấu</span></td></tr>
<tr><td><code>/proc/[PID]/exe</code></td><td><span class="en">Symlink to the executable file on disk</span><span class="vi">Symlink đến file thực thi trên đĩa</span></td><td><span class="en">Points to original binary path; shows <code>(deleted)</code> if binary was removed after execution (fileless indicator)</span><span class="vi">Trỏ đến đường dẫn binary gốc; hiển thị <code>(deleted)</code> nếu binary bị xóa sau khi chạy (chỉ báo fileless)</span></td></tr>
<tr><td><code>/proc/[PID]/fd/</code></td><td><span class="en">Open file descriptors (files, sockets, pipes)</span><span class="vi">File descriptor đang mở (tệp, socket, pipe)</span></td><td><span class="en">Identify open network connections, log files, and staging files held by the process</span><span class="vi">Xác định kết nối mạng đang mở, tệp log và staging file mà tiến trình đang giữ</span></td></tr>
<tr><td><code>/proc/[PID]/maps</code></td><td><span class="en">Memory map — all regions loaded into process address space</span><span class="vi">Bản đồ bộ nhớ — tất cả vùng được nạp vào không gian địa chỉ tiến trình</span></td><td><span class="en">Detect injected DLLs (.so) or shellcode regions not backed by a file on disk</span><span class="vi">Phát hiện DLL (.so) hoặc vùng shellcode bị chèn không có tệp tương ứng trên đĩa</span></td></tr>
<tr><td><code>/proc/[PID]/net/tcp</code></td><td><span class="en">Active TCP connections for the process</span><span class="vi">Kết nối TCP đang hoạt động của tiến trình</span></td><td><span class="en">Identify C2 connections; correlate with <code>lsof -p</code> and <code>ss -tulnp</code></span><span class="vi">Xác định kết nối C2; đối chiếu với <code>lsof -p</code> và <code>ss -tulnp</code></span></td></tr>
<tr><td><code>/proc/[PID]/environ</code></td><td><span class="en">Environment variables at process launch time</span><span class="vi">Biến môi trường tại thời điểm khởi chạy tiến trình</span></td><td><span class="en">Reveal LD_PRELOAD injections, unusual PATH, or credentials passed as env vars</span><span class="vi">Tiết lộ chèn LD_PRELOAD, PATH bất thường hoặc thông tin xác thực được truyền qua env var</span></td></tr>
<tr><td><code>/proc/net/tcp</code></td><td><span class="en">System-wide TCP connection table (hex format)</span><span class="vi">Bảng kết nối TCP toàn hệ thống (định dạng hex)</span></td><td><span class="en">Rootkit check: compare against <code>ss</code> / <code>netstat</code> output — discrepancies indicate hidden connections</span><span class="vi">Kiểm tra rootkit: so sánh với output <code>ss</code> / <code>netstat</code> — sự khác biệt cho thấy kết nối bị ẩn</span></td></tr>
<tr><td><code>/proc/[PID]/status</code></td><td><span class="en">Process metadata: PID, PPID, UID, GID, state</span><span class="vi">Metadata tiến trình: PID, PPID, UID, GID, trạng thái</span></td><td><span class="en">Verify parent-child relationships and effective UID (privilege escalation indicator)</span><span class="vi">Xác minh mối quan hệ cha-con và UID hiệu lực (chỉ báo leo thang đặc quyền)</span></td></tr>
</table></div>

<pre># Read full command line of PID 1234
cat /proc/1234/cmdline | tr '\\0' ' '; echo

# Check if binary was deleted after execution (fileless malware indicator)
ls -la /proc/1234/exe

# List all open files for PID 1234
ls -la /proc/1234/fd/

# Check memory regions — look for rwx anonymous mappings (shellcode)
grep 'rwx' /proc/1234/maps | grep -v '\\.so'

# Compare /proc/net/tcp against ss output (rootkit check)
cat /proc/net/tcp  # hex-encoded IPs/ports
ss -tulnp          # userspace view — rootkit may hide entries here but not in /proc</pre>

<h3><span class="en">Linux File Timestamps</span><span class="vi">Timestamps tệp Linux</span></h3>

<p><span class="en">Linux (ext4) tracks three timestamps per file. Understanding them is critical for timeline reconstruction and detecting timestamp tampering (timestomping).</span><span class="vi">Linux (ext4) theo dõi ba timestamp trên mỗi tệp. Hiểu chúng rất quan trọng để tái tạo timeline và phát hiện giả mạo timestamp (timestomping).</span></p>

<div class="table-wrap"><table>
<tr><th><span class="en">Timestamp</span><span class="vi">Timestamp</span></th><th><span class="en">Updated when</span><span class="vi">Cập nhật khi nào</span></th><th><span class="en">Forensic significance</span><span class="vi">Ý nghĩa pháp y</span></th></tr>
<tr><td>mtime <span class="en">(modify)</span><span class="vi">(sửa đổi)</span></td><td><span class="en">File contents are written</span><span class="vi">Nội dung tệp được ghi</span></td><td><span class="en">When data last changed; most useful for detecting file creation / modification events</span><span class="vi">Khi dữ liệu thay đổi lần cuối; hữu ích nhất để phát hiện sự kiện tạo / sửa đổi tệp</span></td></tr>
<tr><td>atime <span class="en">(access)</span><span class="vi">(truy cập)</span></td><td><span class="en">File is read (unless <code>noatime</code> mount option)</span><span class="vi">Tệp được đọc (trừ khi dùng tùy chọn mount <code>noatime</code>)</span></td><td><span class="en">When file was last accessed; often disabled on modern systems for performance — treat as unreliable indicator</span><span class="vi">Khi tệp được truy cập lần cuối; thường bị tắt trên hệ thống hiện đại vì hiệu suất — coi là chỉ báo không đáng tin</span></td></tr>
<tr><td>ctime <span class="en">(change)</span><span class="vi">(thay đổi)</span></td><td><span class="en">Metadata changes: permissions, ownership, hard link count, mtime itself</span><span class="vi">Thay đổi metadata: quyền, chủ sở hữu, số hard link, bản thân mtime</span></td><td><span class="en">Cannot be directly set by userspace <code>touch</code> — ctime always updates when mtime is changed; timestomping changes mtime but ctime reveals it was tampered with</span><span class="vi">Không thể đặt trực tiếp bằng <code>touch</code> userspace — ctime luôn cập nhật khi mtime thay đổi; timestomping thay đổi mtime nhưng ctime tiết lộ sự giả mạo</span></td></tr>
</table></div>

<ul>
<li><span class="en"><strong>Timestomping detection:</strong> If <code>mtime</code> predates <code>ctime</code> by a significant gap, the mtime was likely manipulated (<code>touch -t</code> changes mtime and atime but always updates ctime to now).</span><span class="vi"><strong>Phát hiện timestomping:</strong> Nếu <code>mtime</code> trước <code>ctime</code> một khoảng đáng kể, mtime có thể đã bị thao túng (<code>touch -t</code> thay đổi mtime và atime nhưng luôn cập nhật ctime về hiện tại).</span></li>
<li><span class="en"><strong>Timeline tool:</strong> <code>stat filename</code> shows all three timestamps. Forensic timeline tools (log2timeline / plaso) correlate file system timestamps with log entries to reconstruct attack sequence.</span><span class="vi"><strong>Công cụ timeline:</strong> <code>stat filename</code> hiển thị cả ba timestamp. Công cụ timeline pháp y (log2timeline / plaso) đối chiếu timestamp hệ thống tệp với mục log để tái tạo trình tự tấn công.</span></li>
</ul>

<pre># Show all three timestamps for a file
stat /usr/local/bin/suspicious

# Find files modified in last 24 hours
find /etc /usr/bin /usr/sbin -newer /tmp/reference_file -ls 2>/dev/null

# Check mtime vs ctime discrepancy (timestomping indicator)
stat file | grep -E "Modify|Change"</pre>

<h3><span class="en">Package Manager Audit Logs</span><span class="vi">Log kiểm tra trình quản lý gói</span></h3>

<p><span class="en">Package manager logs record software installation, removal, and upgrades — a key source for establishing what software was installed and when, which can identify attacker-installed tools or backdoors.</span><span class="vi">Log trình quản lý gói ghi lại việc cài đặt, gỡ bỏ và nâng cấp phần mềm — nguồn chính để xác định phần mềm nào được cài đặt và khi nào, có thể xác định công cụ hoặc backdoor do kẻ tấn công cài.</span></p>

<div class="table-wrap"><table>
<tr><th><span class="en">Distribution</span><span class="vi">Bản phân phối</span></th><th><span class="en">Package manager</span><span class="vi">Trình quản lý gói</span></th><th><span class="en">Log / history location</span><span class="vi">Vị trí log / lịch sử</span></th></tr>
<tr><td>Debian / Ubuntu</td><td>apt / dpkg</td><td><code>/var/log/dpkg.log</code>, <code>/var/log/apt/history.log</code></td></tr>
<tr><td>RHEL / CentOS 7</td><td>yum</td><td><code>/var/log/yum.log</code>, <code>yum history list</code></td></tr>
<tr><td>RHEL / CentOS 8+, Fedora</td><td>dnf</td><td><code>/var/log/dnf.log</code>, <code>dnf history list</code></td></tr>
<tr><td><span class="en">Any (installed packages)</span><span class="vi">Bất kỳ (gói đã cài)</span></td><td>rpm</td><td><code>rpm -qa --last</code> <span class="en">(sorted by install time)</span><span class="vi">(sắp xếp theo thời gian cài đặt)</span></td></tr>
</table></div>

<pre># Debian/Ubuntu: show recent package installations
grep " install " /var/log/dpkg.log | tail -50

# RHEL/CentOS: show yum transaction history
yum history list | head -20
yum history info [transaction-id]

# RPM: list all packages sorted by installation date (newest first)
rpm -qa --queryformat '%{INSTALLTIME:date} %{NAME}-%{VERSION}\\n' | sort -r | head -30

# Look for tools commonly used by attackers
rpm -qa | grep -iE 'nmap|netcat|nc|socat|masscan|metasploit'
dpkg -l | grep -iE 'nmap|netcat|nc|socat|masscan'</pre>

<div class="callout info"><strong><span class="en">Exam tip — Linux forensic evidence chain</span><span class="vi">Mẹo thi — Chuỗi bằng chứng pháp y Linux</span></strong><p><span class="en">Typical Linux compromise timeline evidence: (1) <code>/var/log/auth.log</code> — initial access (SSH brute force or key); (2) <code>/proc/[PID]/exe (deleted)</code> — fileless dropper executed; (3) <code>ctime</code> newer than <code>mtime</code> — timestomping; (4) package manager log — attacker installed tools post-compromise; (5) crontab / systemd service — persistence mechanism. Correlate timestamps across all sources.</span><span class="vi">Chuỗi bằng chứng timeline xâm phạm Linux điển hình: (1) <code>/var/log/auth.log</code> — truy cập ban đầu (SSH brute force hoặc key); (2) <code>/proc/[PID]/exe (deleted)</code> — dropper không cần tệp đã chạy; (3) <code>ctime</code> mới hơn <code>mtime</code> — timestomping; (4) log trình quản lý gói — kẻ tấn công cài công cụ sau khi xâm phạm; (5) crontab / dịch vụ systemd — cơ chế duy trì. Đối chiếu timestamp qua tất cả nguồn.</span></p></div>

<p class="sub-heading">Linux Investigation Patterns</p>

<p class="sub-heading">SSH Compromise Detection</p><pre>auth.log: Failed password for admin from X.X.X.X (multiple)

  → Accepted publickey for attacker from X.X.X.X

    → authorized_keys file modified timestamp matches

= SSH brute force or key-based backdoor</pre>

<p class="sub-heading">Web Server Compromise</p><pre>access.log: POST to /uploads/suspicious.php

  → New process: /usr/sbin/apache2 -k start → child

    → Outbound connection from www-data to external IP

= Webshell with reverse shell</pre>

<p class="sub-heading">Cron-Based Persistence</p><pre>crontab -l shows unusual entry (e.g., curl to external URL)

  → File referenced in cron entry is recently created

    → /var/log/auth.log shows sudo access before cron modification

= Cron-based persistence</pre>

<p class="sub-heading">Rootkit Indicators</p><pre>ps aux shows fewer processes than /proc/[pid] enumeration

  → lsof shows connections invisible to netstat

    → lsmod shows unexpected kernel module

= Possible user-mode or kernel-mode rootkit</pre>

<p class="sub-heading">Log Tampering</p><pre>auth.log gap (missing entries for time window)

  → .bash_history deleted or truncated

    → /var/log/wtmp modified timestamp unusual

= Anti-forensics / log cleanup</pre>


<h3 class="qz-theory"><span class="en">Linux OS File Structures &amp; Artefacts</span><span class="vi">Cấu trúc tệp &amp; artefact Linux</span></h3>
<div class="table-wrap"><table><thead><tr><th><span class="en">Artefact</span><span class="vi">Artefact</span></th><th><span class="en">Use</span><span class="vi">Công dụng</span></th></tr></thead><tbody>
<tr><td><code>/etc/passwd</code> / <code>/etc/shadow</code></td><td><span class="en">Accounts / hashed passwords — watch new accounts, UID 0 duplicates</span><span class="vi">Tài khoản / hash mật khẩu — chú ý tài khoản mới, trùng UID 0</span></td></tr>
<tr><td><span class="en">cron, systemd units, <code>~/.bashrc</code>, <code>~/.ssh/authorized_keys</code></span><span class="vi">Cron, unit systemd, <code>~/.bashrc</code>, <code>~/.ssh/authorized_keys</code></span></td><td><span class="en">Persistence (authorized_keys = passwordless SSH)</span><span class="vi">Persistence (authorized_keys = SSH không mật khẩu)</span></td></tr>
<tr><td><code>auth.log</code> / <code>secure</code></td><td><span class="en">Authentication, sudo, SSH login events</span><span class="vi">Sự kiện xác thực, sudo, đăng nhập SSH</span></td></tr>
<tr><td>wtmp / btmp / lastlog</td><td><span class="en">Logins / failed logins / last login + source IP</span><span class="vi">Đăng nhập / thất bại / lần cuối + IP nguồn</span></td></tr>
<tr><td><span class="en">SUID binaries (<code>find / -perm -4000</code>)</span><span class="vi">Binary SUID (<code>find / -perm -4000</code>)</span></td><td><span class="en">Run as owner (often root) — privilege-escalation route</span><span class="vi">Chạy dưới quyền chủ (thường root) — con đường leo thang</span></td></tr></tbody></table></div>
<p><span class="en">Attackers may tamper with these logs — corroborate with bash history, file timestamps and other sources.</span><span class="vi">Kẻ tấn công có thể can thiệp các log này — đối chiếu với bash history, mốc thời gian file và nguồn khác.</span></p>
`;
