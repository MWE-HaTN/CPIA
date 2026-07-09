/* Theory — E14 (Appendix E). 3-tier layout: Recall / Concept / Reference. */
(window.CPIA_THEORY=window.CPIA_THEORY||{})["e14"]=`<h2>E14 — Linux OS File Structures</h2>

<div class="tier recall" id="e14-recall">
<div class="tier-h"><span class="tier-num">①</span><span class="en">Recall — must know</span><span class="vi">Recall — phải thuộc</span></div>
<div class="tier-body"><ul>
<li><strong>Accounts:</strong> <span class="en">/etc/passwd (users) and /etc/shadow (password hashes); /etc/group for groups.</span><span class="vi">/etc/passwd (người dùng) và /etc/shadow (hash mật khẩu); /etc/group cho nhóm.</span></li>
<li><strong>Logins / sessions:</strong> <span class="en">wtmp/btmp/lastlog and auth.log (or secure) show interactive logins and source IPs.</span><span class="vi">wtmp/btmp/lastlog và auth.log (hoặc secure) cho biết đăng nhập tương tác và IP nguồn.</span></li>
<li><strong>Persistence:</strong> <span class="en">cron (/etc/crontab, /var/spool/cron), systemd units, rc.local, ~/.bashrc.</span><span class="vi">cron (/etc/crontab, /var/spool/cron), systemd unit, rc.local, ~/.bashrc.</span></li>
<li><strong>SUID/SGID:</strong> <span class="en">A non-root binary with the SUID bit runs with the owner's (often root) privileges — escalation risk.</span><span class="vi">Một binary non-root có bit SUID chạy với quyền của chủ sở hữu (thường root) — rủi ro leo thang.</span></li>
<li><strong>Filesystem:</strong> <span class="en">ext3/ext4 with inodes; timestamps M/A/C (and crtime on ext4); journaling.</span><span class="vi">ext3/ext4 dùng inode; mốc thời gian M/A/C (và crtime trên ext4); journaling.</span></li>
<li><strong>Live state:</strong> <span class="en">/proc and /sys are pseudo-filesystems exposing running processes/kernel state.</span><span class="vi">/proc và /sys là pseudo-filesystem phơi bày tiến trình đang chạy/trạng thái nhân.</span></li>
<li><strong>Shell history:</strong> <span class="en">~/.bash_history records commands run (can be cleared/disabled by an attacker).</span><span class="vi">~/.bash_history ghi lệnh đã chạy (kẻ tấn công có thể xóa/tắt).</span></li>
</ul></div></div>

<details class="tier concept" id="e14-concept">
<summary><span class="tier-num">②</span><span class="en">Concept — understand deeply</span><span class="vi">Concept — hiểu sâu</span></summary>
<div class="tier-body">
<h4>Tài khoản &amp; xác thực</h4>
<p><strong>/etc/passwd</strong> liệt kê user (tên, UID, shell, home) — đọc được công khai. <strong>/etc/shadow</strong> chứa hash mật khẩu (chỉ root). UID 0 = root. Để ý tài khoản lạ, UID 0 trùng, hoặc shell được gán cho tài khoản dịch vụ.</p>

<h4>Log đăng nhập &amp; phiên</h4>
<p><strong>wtmp</strong> (đăng nhập thành công), <strong>btmp</strong> (thất bại), <strong>lastlog</strong> (lần cuối mỗi user); <strong>/var/log/auth.log</strong> (Debian) hoặc <strong>secure</strong> (RHEL) ghi sự kiện xác thực, sudo, SSH kèm IP nguồn. Đây là nơi bắt brute-force, đăng nhập bất thường, leo quyền qua sudo.</p>

<h4>Persistence trên Linux</h4>
<p>Các điểm hay bị lợi dụng: <strong>cron</strong> (/etc/crontab, /etc/cron.*, /var/spool/cron), <strong>systemd</strong> service/timer, <strong>rc.local</strong>, init scripts, và file profile của shell (~/.bashrc, ~/.profile). <strong>SSH</strong>: khóa lạ trong ~/.ssh/authorized_keys = truy cập không mật khẩu bền vững.</p>

<h4>SUID/SGID &amp; quyền</h4>
<p>Bit <strong>SUID</strong> trên một binary khiến nó chạy với quyền của <em>chủ sở hữu</em> (thường root) bất kể ai chạy → nếu binary có lỗ hổng, đây là đường leo thang đặc quyền kinh điển. Tìm bằng <code>find / -perm -4000</code>. Mô hình quyền Linux: rwx cho owner/group/other.</p>

<h4>Filesystem &amp; live artefacts</h4>
<p><strong>ext3/ext4</strong> dùng <strong>inode</strong> (metadata + con trỏ block); ext4 có thêm crtime. Journaling giúp khôi phục. <strong>/proc</strong>, <strong>/sys</strong> là pseudo-fs (không trên đĩa) phơi tiến trình/kết nối/kernel — hữu ích khi live response. <strong>~/.bash_history</strong> ghi lệnh đã chạy.</p>
</div></details>

<details class="tier reference" id="e14-reference">
<summary><span class="tier-num">③</span><span class="en">Reference — lookup tables</span><span class="vi">Reference — bảng tra cứu</span></summary>
<div class="tier-body">
<h4>Key Linux artefacts</h4>
<div class="table-wrap"><table>
<tr><th>Path</th><th>Reveals</th></tr>
<tr><td>/etc/passwd</td><td>Users (name, UID, shell, home)</td></tr>
<tr><td>/etc/shadow</td><td>Password hashes (root-only)</td></tr>
<tr><td>/var/log/auth.log or secure</td><td>Auth, sudo, SSH events + source IP</td></tr>
<tr><td>wtmp / btmp / lastlog</td><td>Login success / failure / last login</td></tr>
<tr><td>~/.bash_history</td><td>Commands run by a user</td></tr>
<tr><td>~/.ssh/authorized_keys</td><td>Passwordless SSH access (persistence)</td></tr>
<tr><td>/proc, /sys</td><td>Live processes / kernel state (pseudo-fs)</td></tr>
</table></div>

<h4>Persistence locations</h4>
<div class="table-wrap"><table>
<tr><th>Location</th><th>Mechanism</th></tr>
<tr><td>cron (/etc/crontab, /var/spool/cron)</td><td>Scheduled execution</td></tr>
<tr><td>systemd units / timers</td><td>Service auto-start</td></tr>
<tr><td>rc.local / init scripts</td><td>Run at boot</td></tr>
<tr><td>~/.bashrc, ~/.profile</td><td>Run at shell start</td></tr>
<tr><td>SUID binary</td><td>Privilege escalation (runs as owner/root)</td></tr>
</table></div>

<h4>Filesystem facts</h4>
<div class="table-wrap"><table>
<tr><th>Item</th><th>Note</th></tr>
<tr><td>ext3 / ext4</td><td>Inode-based; ext4 adds crtime; journaling</td></tr>
<tr><td>Permissions</td><td>rwx for owner / group / other</td></tr>
<tr><td>Timestamps</td><td>M (modify), A (access), C (change)</td></tr>
</table></div>
</div></details>

<details class="tier deep-dive" id="e14-deep-dive">
<summary>
<span class="tier-num">④</span>Deep Dive — thực hành, diễn giải &amp; giới hạn</summary>
<div class="tier-body">
<div class="deep-grid">
<div class="deep-card">
<h4>Quy trình phân tích</h4>
<ol>
<li>Acquire disk + live state khi cần; xác định distro/filesystem/init/logging.</li>
<li>Dựng account/login/sudo/SSH/process/socket timeline; kiểm persistence cron/systemd/shell/keys.</li>
<li>Tìm SUID/capability, package/file integrity, deleted-open file và container/cloud context.</li>
</ol>
</div>
<div class="deep-card">
<h4>Artefact / dữ liệu cần đọc</h4>
<ul>
<li>passwd/shadow/group, auth.log/secure, wtmp/btmp/lastlog, journal.</li>
<li>cron/systemd, authorized_keys, bash history, /proc, auditd, web logs.</li>
</ul>
</div>
</div>
<h4>Lệnh, bộ lọc hoặc thao tác hữu ích</h4>
<ul>
<li>
<span class="cmd-safety cmd-impact">PRIVILEGED/IMPACT</span>
<code>last</code>, <code>lastb</code>, <code>journalctl</code>, <code>ss -plant</code>, <code>lsof +L1</code>, <code>find / -perm -4000</code>.</li>
</ul>
<h4>Tình huống diễn giải</h4>
<p>bash_history vắng không chứng minh không có lệnh; shell có thể disable history. auditd/journal/process accounting và file timeline bù lại.</p>
<h4>Bẫy, ngoại lệ &amp; kiểm chứng</h4>
<ul>
<li>/proc và /sys là volatile pseudo-filesystem.</li>
<li>ctime là metadata-change, không creation time.</li>
<li>Log path/format khác distro và journald config.</li>
</ul>
<p class="deep-ref">
<strong>Nguồn nên đọc tiếp:</strong> Linux man pages; systemd/journald; ext4 and auditd documentation.</p>
</div>
</details>`;
