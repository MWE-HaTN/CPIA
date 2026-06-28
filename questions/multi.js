/* ===================================================================
   CPIA Question Bank — Multi-answer (choose-all-that-apply)
   Schema adds: correct = ARRAY of correct option indices, opts may have 5-6 items.
   The engine renders these as checkboxes and grades by exact-set match.
=================================================================== */
(window.CPIA_BANK = window.CPIA_BANK || []).push(

  {
    "app": "A", "sec": "a1",
    "secLabel": { "en": "A1 — Engagement Lifecycle Management", "vi": "A1 — Quản lý vòng đời incident" },
    "q": {
      "en": "Which of the following are valid PREPARATION-phase activities that improve later incident response? (Select all that apply)",
      "vi": "Những hoạt động nào thuộc giai đoạn CHUẨN BỊ giúp ích cho ứng phó sự cố về sau? (Chọn tất cả đáp án đúng)"
    },
    "opts": [
      { "en": "Maintaining an up-to-date asset inventory and baselines", "vi": "Duy trì kiểm kê tài sản và baseline cập nhật" },
      { "en": "Pre-agreeing an escalation matrix and contact tree", "vi": "Thống nhất trước ma trận leo thang và sơ đồ liên hệ" },
      { "en": "Granting all staff standing domain-admin rights", "vi": "Cấp sẵn quyền domain-admin cho toàn bộ nhân viên" },
      { "en": "Deploying and testing centralised logging/SIEM coverage", "vi": "Triển khai và kiểm thử độ phủ ghi log/SIEM tập trung" },
      { "en": "Disabling verbose logging to save disk space", "vi": "Tắt log chi tiết để tiết kiệm dung lượng" }
    ],
    "correct": [0, 1, 3],
    "exp": {
      "en": "Preparation is about readiness: inventories/baselines, agreed escalation and contacts, and logging/SIEM coverage. Standing domain-admin for everyone and disabling logging weaken both security and the later investigation.",
      "vi": "Chuẩn bị là sự sẵn sàng: kiểm kê/baseline, leo thang và liên hệ đã thống nhất, độ phủ log/SIEM. Cấp sẵn domain-admin cho mọi người và tắt log làm yếu cả bảo mật lẫn việc điều tra sau này."
    }
  },

  {
    "app": "A", "sec": "a5",
    "secLabel": { "en": "A5 — Threat Assessment", "vi": "A5 — Đánh giá mối đe dọa" },
    "q": {
      "en": "On the Pyramid of Pain, which indicators are MORE costly for an attacker to change (so more durable for defenders)? (Select all that apply)",
      "vi": "Trên Pyramid of Pain, chỉ dấu nào tốn kém hơn để kẻ tấn công thay đổi (nên bền hơn cho bên phòng thủ)? (Chọn tất cả)"
    },
    "opts": [
      { "en": "TTPs — tactics, techniques and procedures", "vi": "TTP — chiến thuật, kỹ thuật và quy trình" },
      { "en": "A single file hash value", "vi": "Một giá trị hash file đơn lẻ" },
      { "en": "The attacker's tools/toolsets", "vi": "Công cụ/bộ công cụ của kẻ tấn công" },
      { "en": "Host/network artefacts such as mutexes or named pipes", "vi": "Artefact host/mạng như mutex hoặc named pipe" },
      { "en": "A single source IP address", "vi": "Một địa chỉ IP nguồn đơn lẻ" }
    ],
    "correct": [0, 2, 3],
    "exp": {
      "en": "The pyramid runs hash < IP < domain < host/network artefacts < tools < TTPs. Artefacts, tools and especially TTPs are hardest to change, so detections built on them are the most durable; hashes and IPs are trivial to swap.",
      "vi": "Thứ tự: hash < IP < domain < artefact host/mạng < công cụ < TTP. Artefact, công cụ và nhất là TTP khó thay nhất, nên phát hiện dựa vào chúng bền nhất; hash và IP đổi rất dễ."
    }
  },

  {
    "app": "B", "sec": "b1",
    "secLabel": { "en": "B1 — IP Protocols", "vi": "B1 — Giao thức IP" },
    "q": {
      "en": "Which statements about TCP and UDP are TRUE? (Select all that apply)",
      "vi": "Những phát biểu nào về TCP và UDP là ĐÚNG? (Chọn tất cả)"
    },
    "opts": [
      { "en": "TCP establishes a connection with a three-way handshake", "vi": "TCP thiết lập kết nối bằng bắt tay ba bước" },
      { "en": "UDP is connectionless with no delivery guarantee", "vi": "UDP phi kết nối, không đảm bảo phân phát" },
      { "en": "UDP guarantees ordered, reliable delivery", "vi": "UDP đảm bảo phân phát tin cậy, đúng thứ tự" },
      { "en": "DNS can use UDP for queries and TCP for zone transfers", "vi": "DNS dùng UDP cho truy vấn và TCP cho zone transfer" },
      { "en": "TCP and UDP both use 48-bit port numbers", "vi": "TCP và UDP đều dùng số cổng 48-bit" }
    ],
    "correct": [0, 1, 3],
    "exp": {
      "en": "TCP is connection-oriented (3-way handshake, reliable, ordered); UDP is connectionless and best-effort. DNS uses UDP for normal queries and TCP for zone transfers / large responses. Ports are 16-bit, not 48-bit.",
      "vi": "TCP hướng kết nối (bắt tay 3 bước, tin cậy, đúng thứ tự); UDP phi kết nối, nỗ lực tối đa. DNS dùng UDP cho truy vấn thường và TCP cho zone transfer / phản hồi lớn. Cổng là 16-bit, không phải 48-bit."
    }
  },

  {
    "app": "B", "sec": "b7",
    "secLabel": { "en": "B7 — Cryptography", "vi": "B7 — Mật mã học" },
    "q": {
      "en": "Which of the following are SYMMETRIC encryption algorithms? (Select all that apply)",
      "vi": "Những thuật toán nào là mã hóa ĐỐI XỨNG? (Chọn tất cả)"
    },
    "opts": [
      { "en": "AES", "vi": "AES" },
      { "en": "RSA", "vi": "RSA" },
      { "en": "3DES", "vi": "3DES" },
      { "en": "RC4", "vi": "RC4" },
      { "en": "SHA-256", "vi": "SHA-256" }
    ],
    "correct": [0, 2, 3],
    "exp": {
      "en": "AES, 3DES and RC4 are symmetric (one shared key). RSA is asymmetric (public/private key pair). SHA-256 is a one-way hash, not encryption at all.",
      "vi": "AES, 3DES và RC4 là đối xứng (một khóa chung). RSA là bất đối xứng (cặp khóa công khai/riêng). SHA-256 là hàm băm một chiều, không phải mã hóa."
    }
  },

  {
    "app": "C", "sec": "c2",
    "secLabel": { "en": "C2 — Domain Name Server (DNS)", "vi": "C2 — Máy chủ tên miền (DNS)" },
    "q": {
      "en": "Which DNS record types are commonly relevant to email routing and anti-spoofing? (Select all that apply)",
      "vi": "Những loại bản ghi DNS nào thường liên quan tới định tuyến email và chống giả mạo? (Chọn tất cả)"
    },
    "opts": [
      { "en": "MX (mail exchanger)", "vi": "MX (mail exchanger)" },
      { "en": "TXT (e.g. SPF/DKIM/DMARC)", "vi": "TXT (vd SPF/DKIM/DMARC)" },
      { "en": "AAAA (IPv6 address)", "vi": "AAAA (địa chỉ IPv6)" },
      { "en": "PTR (reverse DNS for the sending IP)", "vi": "PTR (DNS ngược cho IP gửi)" },
      { "en": "CNAME (canonical alias)", "vi": "CNAME (bí danh chuẩn)" }
    ],
    "correct": [0, 1, 3],
    "exp": {
      "en": "MX names the mail servers; TXT carries SPF/DKIM/DMARC authentication; PTR (reverse DNS of the sending IP) is widely checked by anti-spam. AAAA and CNAME are general-purpose records, not email-authentication mechanisms.",
      "vi": "MX nêu máy chủ thư; TXT chứa xác thực SPF/DKIM/DMARC; PTR (DNS ngược của IP gửi) được chống spam kiểm tra rộng rãi. AAAA và CNAME là bản ghi đa dụng, không phải cơ chế xác thực email."
    }
  },

  {
    "app": "C", "sec": "c5",
    "secLabel": { "en": "C5 — Community Knowledge", "vi": "C5 — Tri thức cộng đồng" },
    "q": {
      "en": "Which are legitimate community / threat-intelligence resources an analyst might use? (Select all that apply)",
      "vi": "Đâu là nguồn tri thức cộng đồng / threat-intel hợp lệ mà analyst có thể dùng? (Chọn tất cả)"
    },
    "opts": [
      { "en": "VirusTotal", "vi": "VirusTotal" },
      { "en": "abuse.ch (URLhaus / MalwareBazaar)", "vi": "abuse.ch (URLhaus / MalwareBazaar)" },
      { "en": "MITRE ATT&amp;CK", "vi": "MITRE ATT&amp;CK" },
      { "en": "A paste-site link supplied by the attacker", "vi": "Một link paste-site do chính kẻ tấn công cung cấp" },
      { "en": "The suspect host's own hosts file", "vi": "File hosts của chính máy bị nghi" }
    ],
    "correct": [0, 1, 2],
    "exp": {
      "en": "VirusTotal, abuse.ch feeds and MITRE ATT&amp;CK are trusted community resources. A link the attacker supplies is untrustworthy, and the suspect's own hosts file is local evidence to examine, not a community intel source.",
      "vi": "VirusTotal, các feed abuse.ch và MITRE ATT&amp;CK là nguồn cộng đồng đáng tin. Link do kẻ tấn công đưa thì không tin được, còn file hosts của máy nghi là bằng chứng cục bộ cần xem xét, không phải nguồn tình báo cộng đồng."
    }
  },

  {
    "app": "D", "sec": "d7",
    "secLabel": { "en": "D7 — Command and Control", "vi": "D7 — Điều khiển từ xa (C2)" },
    "q": {
      "en": "Which observations are consistent with covert command-and-control (C2)? (Select all that apply)",
      "vi": "Những quan sát nào phù hợp với điều khiển từ xa (C2) lén lút? (Chọn tất cả)"
    },
    "opts": [
      { "en": "Regular, periodic beaconing to a rare external host", "vi": "Beaconing đều đặn, định kỳ tới một host ngoài hiếm gặp" },
      { "en": "DNS TXT queries carrying encoded data", "vi": "Truy vấn DNS TXT mang dữ liệu được mã hóa" },
      { "en": "A one-off large download from a well-known CDN", "vi": "Một lần tải lớn một lần từ CDN nổi tiếng" },
      { "en": "HTTPS POSTs to a newly-registered domain with a rare JA3", "vi": "HTTPS POST tới domain mới đăng ký với JA3 hiếm" },
      { "en": "Routine hourly NTP synchronisation", "vi": "Đồng bộ NTP định kỳ mỗi giờ" }
    ],
    "correct": [0, 1, 3],
    "exp": {
      "en": "Periodic beaconing, data smuggled in DNS, and HTTPS check-ins to fresh domains with rare TLS fingerprints are classic C2 signs. A one-off CDN download and routine NTP are normal background traffic.",
      "vi": "Beaconing định kỳ, dữ liệu lén trong DNS, và HTTPS check-in tới domain mới với fingerprint TLS hiếm là dấu hiệu C2 kinh điển. Tải một lần từ CDN và NTP định kỳ là lưu lượng nền bình thường."
    }
  },

  {
    "app": "D", "sec": "d11",
    "secLabel": { "en": "D11 — Internal Spread & Privilege Escalation", "vi": "D11 — Lan truyền nội bộ & leo thang đặc quyền" },
    "q": {
      "en": "Which techniques are used for lateral movement or privilege escalation? (Select all that apply)",
      "vi": "Những kỹ thuật nào dùng để di chuyển ngang hoặc leo thang đặc quyền? (Chọn tất cả)"
    },
    "opts": [
      { "en": "Pass-the-Hash with a stolen NTLM hash", "vi": "Pass-the-Hash với một NTLM hash đánh cắp" },
      { "en": "Kerberoasting service accounts", "vi": "Kerberoasting các tài khoản dịch vụ" },
      { "en": "Browsing the company's public website", "vi": "Duyệt website công khai của công ty" },
      { "en": "PsExec via the ADMIN$ share and a new service", "vi": "PsExec qua share ADMIN$ và một service mới" },
      { "en": "Reading a routine internal newsletter", "vi": "Đọc một bản tin nội bộ định kỳ" }
    ],
    "correct": [0, 1, 3],
    "exp": {
      "en": "Pass-the-Hash, Kerberoasting and PsExec-style ADMIN$/service execution are core lateral-movement / escalation techniques. Browsing a public site or reading a newsletter are benign user actions.",
      "vi": "Pass-the-Hash, Kerberoasting và thực thi kiểu PsExec qua ADMIN$/service là kỹ thuật di chuyển ngang/leo thang cốt lõi. Duyệt site công khai hay đọc bản tin là hành vi người dùng lành tính."
    }
  },

  {
    "app": "E", "sec": "e4",
    "secLabel": { "en": "E4 — Windows File Structures", "vi": "E4 — Cấu trúc tệp Windows" },
    "q": {
      "en": "Which Windows artefacts provide evidence that a program was EXECUTED? (Select all that apply)",
      "vi": "Những artefact Windows nào là bằng chứng một chương trình ĐÃ CHẠY? (Chọn tất cả)"
    },
    "opts": [
      { "en": "Prefetch (.pf) files", "vi": "File Prefetch (.pf)" },
      { "en": "Amcache.hve / Shimcache", "vi": "Amcache.hve / Shimcache" },
      { "en": "The desktop wallpaper setting", "vi": "Thiết lập hình nền desktop" },
      { "en": "UserAssist registry values", "vi": "Giá trị registry UserAssist" },
      { "en": "The DNS resolver cache", "vi": "Cache của resolver DNS" }
    ],
    "correct": [0, 1, 3],
    "exp": {
      "en": "Prefetch, Amcache/Shimcache and UserAssist are classic execution artefacts (presence, paths, times, run counts). The wallpaper setting and the DNS cache say nothing about program execution.",
      "vi": "Prefetch, Amcache/Shimcache và UserAssist là artefact thực thi kinh điển (sự hiện diện, đường dẫn, thời gian, số lần chạy). Hình nền và cache DNS không nói gì về việc chạy chương trình."
    }
  },

  {
    "app": "E", "sec": "e9",
    "secLabel": { "en": "E9 — Memory Analysis", "vi": "E9 — Phân tích bộ nhớ" },
    "q": {
      "en": "Which evidence is typically recoverable from a memory (RAM) image but NOT from a dead disk image? (Select all that apply)",
      "vi": "Bằng chứng nào thường lấy được từ image bộ nhớ (RAM) nhưng KHÔNG từ image đĩa đã tắt? (Chọn tất cả)"
    },
    "opts": [
      { "en": "Injected code in a process's private RWX memory", "vi": "Mã được tiêm trong vùng nhớ RWX riêng của tiến trình" },
      { "en": "Live network sockets and connections", "vi": "Các socket và kết nối mạng đang hoạt động" },
      { "en": "Decryption keys held in use by a process", "vi": "Khóa giải mã đang được một tiến trình dùng" },
      { "en": "The on-disk $MFT", "vi": "Bảng $MFT trên đĩa" },
      { "en": "Installed program files under Program Files", "vi": "File chương trình đã cài dưới Program Files" }
    ],
    "correct": [0, 1, 2],
    "exp": {
      "en": "Injected/fileless code, live sockets and in-use keys exist only in volatile memory. The $MFT and installed files are on-disk artefacts available from a normal disk image.",
      "vi": "Mã được tiêm/fileless, socket đang sống và khóa đang dùng chỉ tồn tại trong bộ nhớ volatile. $MFT và file đã cài là artefact trên đĩa, lấy được từ image đĩa thường."
    }
  },

  {
    "app": "F", "sec": "f2",
    "secLabel": { "en": "F2 — Functionality Identification", "vi": "F2 — Nhận diện chức năng" },
    "q": {
      "en": "Which imported-API sets in a binary indicate NETWORK communication capability? (Select all that apply)",
      "vi": "Những bộ API được import nào cho thấy khả năng giao tiếp MẠNG? (Chọn tất cả)"
    },
    "opts": [
      { "en": "WSAStartup, socket, connect, send", "vi": "WSAStartup, socket, connect, send" },
      { "en": "InternetOpenUrl, URLDownloadToFile", "vi": "InternetOpenUrl, URLDownloadToFile" },
      { "en": "BitBlt, GetDC", "vi": "BitBlt, GetDC" },
      { "en": "HttpSendRequest, InternetConnect", "vi": "HttpSendRequest, InternetConnect" },
      { "en": "SetWindowsHookEx, GetAsyncKeyState", "vi": "SetWindowsHookEx, GetAsyncKeyState" }
    ],
    "correct": [0, 1, 3],
    "exp": {
      "en": "Winsock (WSAStartup/socket/connect/send) and WinINet/WinHTTP (InternetOpenUrl, HttpSendRequest, InternetConnect) are networking APIs. BitBlt/GetDC are screen-capture; SetWindowsHookEx/GetAsyncKeyState are keylogging.",
      "vi": "Winsock (WSAStartup/socket/connect/send) và WinINet/WinHTTP (InternetOpenUrl, HttpSendRequest, InternetConnect) là API mạng. BitBlt/GetDC là chụp màn hình; SetWindowsHookEx/GetAsyncKeyState là ghi phím."
    }
  },

  {
    "app": "F", "sec": "f12",
    "secLabel": { "en": "F12 — Behavioural Analysis", "vi": "F12 — Phân tích hành vi" },
    "q": {
      "en": "Which behaviours suggest a sample is performing sandbox / anti-analysis evasion? (Select all that apply)",
      "vi": "Những hành vi nào cho thấy mẫu đang né sandbox / chống phân tích? (Chọn tất cả)"
    },
    "opts": [
      { "en": "Checking for VM artefacts (MAC OUIs, registry keys) then exiting", "vi": "Kiểm tra artefact VM (MAC OUI, khóa registry) rồi thoát" },
      { "en": "Sleeping for long periods, then checking for mouse movement", "vi": "Ngủ lâu rồi kiểm tra chuyển động chuột" },
      { "en": "Calling IsDebuggerPresent or reading the PEB BeingDebugged flag", "vi": "Gọi IsDebuggerPresent hoặc đọc cờ BeingDebugged trong PEB" },
      { "en": "Immediately writing a Run key for persistence", "vi": "Lập tức ghi một khóa Run để duy trì" },
      { "en": "Opening a single TLS socket to a well-known CDN", "vi": "Mở một socket TLS tới một CDN nổi tiếng" }
    ],
    "correct": [0, 1, 2],
    "exp": {
      "en": "VM/sandbox checks, long sleeps with interaction checks, and debugger detection are all anti-analysis evasion. Writing a Run key is persistence, and a TLS connection to a CDN is ordinary network behaviour.",
      "vi": "Kiểm tra VM/sandbox, ngủ lâu kèm kiểm tra tương tác, và phát hiện debugger đều là né phân tích. Ghi khóa Run là duy trì, còn kết nối TLS tới CDN là hành vi mạng bình thường."
    }
  },

  {
    "app": "A", "sec": "a2",
    "secLabel": { "en": "A2 — Incident Chronology", "vi": "A2 — Dòng thời gian sự cố" },
    "q": {
      "en": "Which are valid, benign explanations for two log sources showing different timestamps for the same event? (Select all that apply)",
      "vi": "Đâu là những lý do lành tính khiến hai nguồn log ghi thời gian khác nhau cho cùng một sự kiện? (Chọn tất cả)"
    },
    "opts": [
      { "en": "One source logs in UTC and the other in local time", "vi": "Một nguồn ghi theo UTC, nguồn kia theo giờ địa phương" },
      { "en": "A host with no NTP synchronisation has drifted", "vi": "Một máy không đồng bộ NTP đã bị trôi đồng hồ" },
      { "en": "The two sources use different time-zone offsets", "vi": "Hai nguồn dùng độ lệch múi giờ khác nhau" },
      { "en": "One of the log files is therefore definitely corrupted", "vi": "Do đó chắc chắn một file log đã hỏng" },
      { "en": "The attacker must have forged both timestamps", "vi": "Kẻ tấn công chắc chắn đã giả mạo cả hai mốc thời gian" }
    ],
    "correct": [0, 1, 2],
    "exp": {
      "en": "Most timestamp gaps come from UTC-vs-local logging, clock drift on un-synchronised hosts, or differing time-zone offsets — reconcile everything to one reference (UTC). Corruption or forgery are possible but are not the default benign explanation.",
      "vi": "Phần lớn chênh lệch do ghi UTC vs giờ địa phương, trôi đồng hồ khi không đồng bộ, hoặc lệch múi giờ — hãy quy về một mốc chung (UTC). Hỏng file hay giả mạo là có thể nhưng không phải lý do lành tính mặc định."
    }
  },

  {
    "app": "A", "sec": "a3",
    "secLabel": { "en": "A3 — Law & Compliance", "vi": "A3 — Pháp lý & Tuân thủ" },
    "q": {
      "en": "Which are core principles of the ACPO Good Practice Guide / a sound chain of custody? (Select all that apply)",
      "vi": "Đâu là nguyên tắc cốt lõi của ACPO Good Practice Guide / chuỗi hành trình chứng cứ đúng đắn? (Chọn tất cả)"
    },
    "opts": [
      { "en": "No action should change data later relied upon in court", "vi": "Không hành động nào được làm thay đổi dữ liệu sẽ dùng tại tòa" },
      { "en": "If originals must be accessed, the person must be competent and justify it", "vi": "Nếu phải truy cập bản gốc, người làm phải đủ năng lực và biện minh được" },
      { "en": "An audit trail of all actions is created and preserved", "vi": "Tạo và lưu giữ một audit trail cho mọi hành động" },
      { "en": "The original media is edited first to speed up analysis", "vi": "Sửa bản gốc trước để phân tích cho nhanh" },
      { "en": "Recording hashes removes the need to document handling", "vi": "Ghi hash thì khỏi cần tài liệu hóa quá trình xử lý" }
    ],
    "correct": [0, 1, 2],
    "exp": {
      "en": "ACPO: don't alter evidence relied on in court; if you must touch originals be competent and justify it; keep a full audit trail. Editing originals or skipping documentation destroys integrity.",
      "vi": "ACPO: không làm thay đổi bằng chứng dùng tại tòa; nếu phải chạm bản gốc thì phải đủ năng lực và biện minh; giữ audit trail đầy đủ. Sửa bản gốc hay bỏ tài liệu hóa làm hỏng tính toàn vẹn."
    }
  },

  {
    "app": "A", "sec": "a4",
    "secLabel": { "en": "A4 — Record Keeping & Interim Reporting", "vi": "A4 — Ghi chép & Báo cáo tạm" },
    "q": {
      "en": "Which belong in a well-structured intrusion report? (Select all that apply)",
      "vi": "Những phần nào thuộc một báo cáo xâm nhập có cấu trúc tốt? (Chọn tất cả)"
    },
    "opts": [
      { "en": "An executive summary in business language", "vi": "Tóm tắt cho lãnh đạo bằng ngôn ngữ kinh doanh" },
      { "en": "A methodology section enabling reproducibility", "vi": "Phần phương pháp giúp tái lập được kết quả" },
      { "en": "Clear separation of observed fact from analyst inference", "vi": "Tách rõ sự kiện quan sát được khỏi suy luận của analyst" },
      { "en": "Raw tool output pasted in with no interpretation", "vi": "Dán nguyên output công cụ mà không diễn giải" },
      { "en": "Speculative attribution stated as certain fact", "vi": "Quy kết suy đoán nhưng trình bày như sự thật chắc chắn" }
    ],
    "correct": [0, 1, 2],
    "exp": {
      "en": "Good reports carry an executive summary, a reproducible methodology, and a clear fact-vs-inference split. Dumping raw output without interpretation, or stating speculation as certainty, undermines credibility.",
      "vi": "Báo cáo tốt có tóm tắt cho lãnh đạo, phương pháp tái lập được, và tách rõ sự kiện với suy luận. Dán output thô không diễn giải, hay nói suy đoán như chắc chắn, làm mất độ tin cậy."
    }
  },

  {
    "app": "B", "sec": "b2",
    "secLabel": { "en": "B2 — Network Architectures", "vi": "B2 — Kiến trúc mạng" },
    "q": {
      "en": "Which address blocks are reserved for PRIVATE use under RFC 1918? (Select all that apply)",
      "vi": "Những dải địa chỉ nào được dành cho dùng RIÊNG theo RFC 1918? (Chọn tất cả)"
    },
    "opts": [
      { "en": "10.0.0.0 – 10.255.255.255", "vi": "10.0.0.0 – 10.255.255.255" },
      { "en": "172.16.0.0 – 172.31.255.255", "vi": "172.16.0.0 – 172.31.255.255" },
      { "en": "192.168.0.0 – 192.168.255.255", "vi": "192.168.0.0 – 192.168.255.255" },
      { "en": "11.0.0.0 – 11.255.255.255", "vi": "11.0.0.0 – 11.255.255.255" },
      { "en": "172.32.0.0 – 172.47.255.255", "vi": "172.32.0.0 – 172.47.255.255" }
    ],
    "correct": [0, 1, 2],
    "exp": {
      "en": "RFC 1918 private space is 10/8, 172.16/12 (172.16–172.31) and 192.168/16. 11.0.0.0 and 172.32+ are public, routable ranges.",
      "vi": "Không gian riêng RFC 1918 gồm 10/8, 172.16/12 (172.16–172.31) và 192.168/16. 11.0.0.0 và 172.32+ là dải công khai, định tuyến được."
    }
  },

  {
    "app": "B", "sec": "b6",
    "secLabel": { "en": "B6 — Network Access Control Analysis", "vi": "B6 — Phân tích kiểm soát truy cập mạng" },
    "q": {
      "en": "Which findings in a firewall rule base are genuine security concerns? (Select all that apply)",
      "vi": "Những phát hiện nào trong bộ luật tường lửa là mối lo bảo mật thật sự? (Chọn tất cả)"
    },
    "opts": [
      { "en": "An any/any allow rule near the top of the list", "vi": "Một luật allow any/any nằm gần đầu danh sách" },
      { "en": "No egress (outbound) filtering at all", "vi": "Hoàn toàn không lọc egress (ra ngoài)" },
      { "en": "Permit and deny rules with no logging", "vi": "Các luật cho/chặn nhưng không ghi log" },
      { "en": "An explicit deny-all rule at the very bottom", "vi": "Một luật deny-all tường minh ở cuối cùng" },
      { "en": "A specific allow for one host to one server on TCP/443", "vi": "Một allow cụ thể cho một host tới một server qua TCP/443" }
    ],
    "correct": [0, 1, 2],
    "exp": {
      "en": "Broad early allow rules, missing egress filtering and unlogged rules are real weaknesses. A bottom deny-all and a tight, specific allow are exactly what good policy looks like.",
      "vi": "Luật allow rộng đặt sớm, thiếu lọc egress và luật không log là điểm yếu thật. Deny-all ở cuối và một allow cụ thể, hẹp lại chính là dấu hiệu chính sách tốt."
    }
  },

  {
    "app": "B", "sec": "b8",
    "secLabel": { "en": "B8 — Applications of Cryptography", "vi": "B8 — Ứng dụng mật mã" },
    "q": {
      "en": "Which protocols encrypt the data they carry in transit? (Select all that apply)",
      "vi": "Những giao thức nào mã hóa dữ liệu khi truyền? (Chọn tất cả)"
    },
    "opts": [
      { "en": "SSH", "vi": "SSH" },
      { "en": "TLS / HTTPS", "vi": "TLS / HTTPS" },
      { "en": "IPsec (ESP)", "vi": "IPsec (ESP)" },
      { "en": "Telnet", "vi": "Telnet" },
      { "en": "Plain FTP", "vi": "FTP thường" }
    ],
    "correct": [0, 1, 2],
    "exp": {
      "en": "SSH, TLS and IPsec ESP encrypt traffic in transit. Telnet and plain FTP transmit everything — including credentials — in clear text.",
      "vi": "SSH, TLS và IPsec ESP mã hóa lưu lượng khi truyền. Telnet và FTP thường gửi mọi thứ — kể cả thông tin đăng nhập — dưới dạng rõ."
    }
  },

  {
    "app": "C", "sec": "c1",
    "secLabel": { "en": "C1 — Registration Records", "vi": "C1 — Bản ghi đăng ký" },
    "q": {
      "en": "Which information can WHOIS / registration records provide to an investigator? (Select all that apply)",
      "vi": "WHOIS / bản ghi đăng ký có thể cung cấp thông tin nào cho điều tra viên? (Chọn tất cả)"
    },
    "opts": [
      { "en": "The registrar's abuse contact for reporting", "vi": "Liên hệ abuse của nhà đăng ký để báo cáo" },
      { "en": "The domain's creation / registration date", "vi": "Ngày tạo / đăng ký của domain" },
      { "en": "The authoritative name servers for the domain", "vi": "Các name server authoritative của domain" },
      { "en": "The decrypted contents of the site's traffic", "vi": "Nội dung đã giải mã của lưu lượng trang web" },
      { "en": "The live contents of the server's RAM", "vi": "Nội dung RAM trực tiếp của máy chủ" }
    ],
    "correct": [0, 1, 2],
    "exp": {
      "en": "WHOIS yields abuse contacts, registration dates and name servers — all useful for pivoting and reporting. It cannot decrypt traffic or read server memory.",
      "vi": "WHOIS cho biết liên hệ abuse, ngày đăng ký và name server — đều hữu ích để xoay trục và báo cáo. Nó không giải mã lưu lượng hay đọc bộ nhớ máy chủ."
    }
  },

  {
    "app": "C", "sec": "c3",
    "secLabel": { "en": "C3 — Open-Source Investigation", "vi": "C3 — Điều tra nguồn mở" },
    "q": {
      "en": "Which techniques are PASSIVE OSINT (no direct contact with the target)? (Select all that apply)",
      "vi": "Những kỹ thuật nào là OSINT THỤ ĐỘNG (không chạm trực tiếp mục tiêu)? (Chọn tất cả)"
    },
    "opts": [
      { "en": "Searching Certificate Transparency logs (crt.sh)", "vi": "Tra log Certificate Transparency (crt.sh)" },
      { "en": "Querying WHOIS and passive DNS", "vi": "Tra WHOIS và passive DNS" },
      { "en": "Using search-engine dorks and the Wayback Machine", "vi": "Dùng dork công cụ tìm kiếm và Wayback Machine" },
      { "en": "Brute-forcing subdomains against the target's DNS", "vi": "Brute-force subdomain trực tiếp vào DNS của mục tiêu" },
      { "en": "Port-scanning the target's servers", "vi": "Quét cổng các máy chủ của mục tiêu" }
    ],
    "correct": [0, 1, 2],
    "exp": {
      "en": "CT logs, WHOIS/passive DNS, dorks and Wayback rely on third-party data, so the target never sees you — passive. Subdomain brute-forcing and port scanning send traffic the target can log — active.",
      "vi": "CT log, WHOIS/passive DNS, dork và Wayback dựa vào dữ liệu bên thứ ba nên mục tiêu không thấy bạn — thụ động. Brute-force subdomain và quét cổng gửi lưu lượng mục tiêu ghi log được — chủ động."
    }
  },

  {
    "app": "C", "sec": "c4",
    "secLabel": { "en": "C4 — Document Meta Data", "vi": "C4 — Siêu dữ liệu tài liệu" },
    "q": {
      "en": "Which can extracting metadata from a leaked Office document reveal? (Select all that apply)",
      "vi": "Trích siêu dữ liệu từ một tài liệu Office bị lộ có thể tiết lộ gì? (Chọn tất cả)"
    },
    "opts": [
      { "en": "Author and organisation names", "vi": "Tên tác giả và tổ chức" },
      { "en": "The authoring software and its version", "vi": "Phần mềm soạn thảo và phiên bản" },
      { "en": "Internal file/template paths or usernames", "vi": "Đường dẫn file/template nội bộ hoặc tên người dùng" },
      { "en": "The document recipient's password", "vi": "Mật khẩu của người nhận tài liệu" },
      { "en": "The document's symmetric encryption key", "vi": "Khóa mã hóa đối xứng của tài liệu" }
    ],
    "correct": [0, 1, 2],
    "exp": {
      "en": "Office metadata commonly leaks authors, the software/version, and internal paths/usernames — useful for mapping infrastructure. It does not contain recipients' passwords or encryption keys.",
      "vi": "Metadata Office hay làm lộ tác giả, phần mềm/phiên bản và đường dẫn/tên người dùng nội bộ — hữu ích để vẽ bản đồ hạ tầng. Nó không chứa mật khẩu người nhận hay khóa mã hóa."
    }
  },

  {
    "app": "D", "sec": "d5",
    "secLabel": { "en": "D5 — Beaconing", "vi": "D5 — Beaconing" },
    "q": {
      "en": "Which traffic features point to malware beaconing rather than normal use? (Select all that apply)",
      "vi": "Những đặc điểm lưu lượng nào chỉ ra beaconing của malware thay vì dùng bình thường? (Chọn tất cả)"
    },
    "opts": [
      { "en": "Small, regular, periodic connections to the same host", "vi": "Kết nối nhỏ, đều, định kỳ tới cùng một host" },
      { "en": "Inter-arrival times that still cluster despite added jitter", "vi": "Khoảng cách thời gian vẫn co cụm dù đã thêm jitter" },
      { "en": "A long-lived, low-volume link to a rare external IP", "vi": "Một kết nối lâu dài, lưu lượng thấp tới một IP ngoài hiếm" },
      { "en": "A single one-off large download from a CDN", "vi": "Một lần tải lớn một lần từ CDN" },
      { "en": "High-volume, varied web browsing during work hours", "vi": "Duyệt web đa dạng, lưu lượng cao trong giờ làm" }
    ],
    "correct": [0, 1, 2],
    "exp": {
      "en": "Beaconing shows machine-like regularity: periodic small calls, timing that clusters even with jitter, and persistent low-volume links to rare hosts. One-off downloads and varied browsing look human.",
      "vi": "Beaconing có sự đều đặn kiểu máy móc: gọi nhỏ định kỳ, thời gian co cụm dù có jitter, và kết nối lưu lượng thấp bền bỉ tới host hiếm. Tải một lần và duyệt đa dạng trông giống con người."
    }
  },

  {
    "app": "D", "sec": "d9",
    "secLabel": { "en": "D9 — Incoming Attacks", "vi": "D9 — Tấn công đến" },
    "q": {
      "en": "Which web-log patterns indicate an incoming attack? (Select all that apply)",
      "vi": "Những mẫu trong web-log nào cho thấy một cuộc tấn công đến? (Chọn tất cả)"
    },
    "opts": [
      { "en": "id=1' OR '1'='1 in a query string", "vi": "id=1' OR '1'='1 trong query string" },
      { "en": "../../../../etc/passwd in a request path", "vi": "../../../../etc/passwd trong đường dẫn yêu cầu" },
      { "en": "A user-agent of \"Nikto\" or \"sqlmap\"", "vi": "User-agent là \"Nikto\" hoặc \"sqlmap\"" },
      { "en": "A normal GET / returning HTTP 200", "vi": "Một GET / bình thường trả về HTTP 200" },
      { "en": "A standard favicon.ico request", "vi": "Một yêu cầu favicon.ico tiêu chuẩn" }
    ],
    "correct": [0, 1, 2],
    "exp": {
      "en": "SQL-injection payloads, path-traversal sequences and scanner user-agents are clear attack signatures. A normal homepage GET and a favicon request are benign background traffic.",
      "vi": "Payload SQL injection, chuỗi path-traversal và user-agent của scanner là dấu hiệu tấn công rõ ràng. GET trang chủ và yêu cầu favicon là lưu lượng nền lành tính."
    }
  },

  {
    "app": "D", "sec": "d10",
    "secLabel": { "en": "D10 — Reconnaissance", "vi": "D10 — Trinh sát" },
    "q": {
      "en": "Which observations indicate reconnaissance or scanning? (Select all that apply)",
      "vi": "Những quan sát nào cho thấy trinh sát hoặc quét? (Chọn tất cả)"
    },
    "opts": [
      { "en": "SYNs to ports 1–1024 across many hosts in seconds", "vi": "SYN tới cổng 1–1024 trên nhiều host trong vài giây" },
      { "en": "ICMP echo requests to every host in a /24 (ping sweep)", "vi": "ICMP echo tới mọi host trong một /24 (ping sweep)" },
      { "en": "Large numbers of LDAP queries to a domain controller", "vi": "Số lượng lớn truy vấn LDAP tới domain controller" },
      { "en": "A single DNS A-record lookup for a known site", "vi": "Một truy vấn bản ghi A đơn lẻ cho site đã biết" },
      { "en": "Routine hourly NTP synchronisation", "vi": "Đồng bộ NTP định kỳ mỗi giờ" }
    ],
    "correct": [0, 1, 2],
    "exp": {
      "en": "Port scans, ping sweeps and bulk LDAP enumeration are reconnaissance. A single name lookup and routine NTP are normal background activity.",
      "vi": "Quét cổng, ping sweep và liệt kê LDAP hàng loạt là trinh sát. Một truy vấn tên đơn lẻ và NTP định kỳ là hoạt động nền bình thường."
    }
  },

  {
    "app": "E", "sec": "e1",
    "secLabel": { "en": "E1 — Host-based Data Acquisition", "vi": "E1 — Thu thập dữ liệu trên host" },
    "q": {
      "en": "Which are sound forensic acquisition practices? (Select all that apply)",
      "vi": "Đâu là các thực hành thu thập pháp y đúng đắn? (Chọn tất cả)"
    },
    "opts": [
      { "en": "Use a write blocker when imaging a suspect disk", "vi": "Dùng write blocker khi tạo image đĩa nghi vấn" },
      { "en": "Create a hashed, bit-for-bit image", "vi": "Tạo image bit-for-bit có hash" },
      { "en": "On a live host, capture volatile memory before disk", "vi": "Trên máy đang chạy, thu bộ nhớ volatile trước khi lấy đĩa" },
      { "en": "Mount the source read-write to browse files first", "vi": "Mount nguồn ở chế độ đọc-ghi để xem file trước" },
      { "en": "Defragment the disk before imaging it", "vi": "Chống phân mảnh đĩa trước khi tạo image" }
    ],
    "correct": [0, 1, 2],
    "exp": {
      "en": "Write blockers, hashed bit-for-bit images and capturing volatile memory first (order of volatility) preserve integrity. Mounting read-write or defragmenting alters the very evidence you are collecting.",
      "vi": "Write blocker, image bit-for-bit có hash và thu bộ nhớ volatile trước (thứ tự bay hơi) giữ tính toàn vẹn. Mount đọc-ghi hay chống phân mảnh làm thay đổi chính bằng chứng đang thu."
    }
  },

  {
    "app": "E", "sec": "e6",
    "secLabel": { "en": "E6 — Windows Registry Essentials", "vi": "E6 — Registry Windows cốt lõi" },
    "q": {
      "en": "Which registry locations are commonly abused for persistence? (Select all that apply)",
      "vi": "Những vị trí registry nào thường bị lạm dụng để duy trì (persistence)? (Chọn tất cả)"
    },
    "opts": [
      { "en": "Run / RunOnce keys (HKLM and HKCU)", "vi": "Khóa Run / RunOnce (HKLM và HKCU)" },
      { "en": "Services configuration keys", "vi": "Các khóa cấu hình Services" },
      { "en": "Winlogon and Image File Execution Options", "vi": "Winlogon và Image File Execution Options" },
      { "en": "The TypedURLs browser-history key", "vi": "Khóa lịch sử trình duyệt TypedURLs" },
      { "en": "The desktop wallpaper key", "vi": "Khóa hình nền desktop" }
    ],
    "correct": [0, 1, 2],
    "exp": {
      "en": "Run/RunOnce, Services and Winlogon/IFEO are classic persistence locations. TypedURLs is user-activity evidence and the wallpaper key is cosmetic — neither provides persistence.",
      "vi": "Run/RunOnce, Services và Winlogon/IFEO là vị trí duy trì kinh điển. TypedURLs là bằng chứng hoạt động người dùng, khóa hình nền chỉ là thẩm mỹ — cả hai không tạo persistence."
    }
  },

  {
    "app": "E", "sec": "e11",
    "secLabel": { "en": "E11 — Malware Behaviours & Anti-Forensics", "vi": "E11 — Hành vi mã độc & chống điều tra" },
    "q": {
      "en": "Which are anti-forensic techniques used to hinder an investigation? (Select all that apply)",
      "vi": "Những kỹ thuật nào là chống điều tra (anti-forensic) nhằm cản trở điều tra? (Chọn tất cả)"
    },
    "opts": [
      { "en": "Timestomping file timestamps", "vi": "Timestomping mốc thời gian của file" },
      { "en": "Clearing or disabling event logs", "vi": "Xóa hoặc tắt event log" },
      { "en": "Hiding data in NTFS ADS or via steganography", "vi": "Giấu dữ liệu trong NTFS ADS hoặc bằng steganography" },
      { "en": "Defragmenting the disk for performance", "vi": "Chống phân mảnh đĩa để tăng hiệu năng" },
      { "en": "Hashing a file to verify its integrity", "vi": "Băm một file để xác minh toàn vẹn" }
    ],
    "correct": [0, 1, 2],
    "exp": {
      "en": "Timestomping, log clearing and hiding data (ADS/steganography) are anti-forensic. Defragmentation is routine maintenance and hashing is an integrity check — not anti-forensics.",
      "vi": "Timestomping, xóa log và giấu dữ liệu (ADS/steganography) là chống điều tra. Chống phân mảnh là bảo trì thường, băm là kiểm tra toàn vẹn — không phải anti-forensic."
    }
  },

  {
    "app": "F", "sec": "f6",
    "secLabel": { "en": "F6 — Cryptographic Techniques", "vi": "F6 — Kỹ thuật mật mã" },
    "q": {
      "en": "Which constants or patterns in a binary suggest a cryptographic / hashing routine? (Select all that apply)",
      "vi": "Những hằng số hoặc mẫu nào trong binary gợi ý một thủ tục mật mã / băm? (Chọn tất cả)"
    },
    "opts": [
      { "en": "Initial state values 0x67452301 / 0xEFCDAB89", "vi": "Giá trị trạng thái đầu 0x67452301 / 0xEFCDAB89" },
      { "en": "A 256-byte table starting 0x63,0x7C,0x77,0x7B (AES S-box)", "vi": "Bảng 256 byte bắt đầu 0x63,0x7C,0x77,0x7B (S-box AES)" },
      { "en": "0x9E3779B9 used in a rounds loop (TEA/XTEA delta)", "vi": "0x9E3779B9 dùng trong vòng lặp (delta TEA/XTEA)" },
      { "en": "The bytes 0x4D 0x5A (\"MZ\") at offset 0", "vi": "Hai byte 0x4D 0x5A (\"MZ\") ở offset 0" },
      { "en": "A loop printing \"Hello World\" to the console", "vi": "Một vòng lặp in \"Hello World\" ra console" }
    ],
    "correct": [0, 1, 2],
    "exp": {
      "en": "MD5/SHA initial constants, the AES S-box and the TEA/XTEA delta are tell-tale crypto signatures. 'MZ' is just the PE header magic, and a console print is unrelated.",
      "vi": "Hằng khởi tạo MD5/SHA, S-box AES và delta TEA/XTEA là chữ ký mật mã đặc trưng. 'MZ' chỉ là magic của header PE, còn in console thì không liên quan."
    }
  },

  {
    "app": "F", "sec": "f8",
    "secLabel": { "en": "F8 — Windows Executable File Formats", "vi": "F8 — Định dạng file thực thi Windows" },
    "q": {
      "en": "Which are signs that a PE file is packed / obfuscated? (Select all that apply)",
      "vi": "Đâu là dấu hiệu một file PE bị pack / obfuscate? (Chọn tất cả)"
    },
    "opts": [
      { "en": "Very high section entropy (>7.0)", "vi": "Entropy section rất cao (>7.0)" },
      { "en": "A tiny import table (e.g. only LoadLibrary + GetProcAddress)", "vi": "Bảng import rất nhỏ (vd chỉ LoadLibrary + GetProcAddress)" },
      { "en": "Section names like UPX0/UPX1, or a W+X section", "vi": "Tên section kiểu UPX0/UPX1, hoặc một section W+X" },
      { "en": "A rich import table with many specific API calls", "vi": "Bảng import phong phú với nhiều lời gọi API cụ thể" },
      { "en": "Standard section names (.text/.data) with normal entropy", "vi": "Tên section chuẩn (.text/.data) với entropy bình thường" }
    ],
    "correct": [0, 1, 2],
    "exp": {
      "en": "High entropy, a near-empty import table and packer/W+X sections all indicate packing. A rich import table and standard low-entropy sections indicate an unpacked, normally-compiled binary.",
      "vi": "Entropy cao, bảng import gần rỗng và section của packer/W+X đều chỉ ra việc bị pack. Bảng import phong phú và section chuẩn entropy thấp cho thấy binary chưa pack, biên dịch bình thường."
    }
  },

  {
    "app": "F", "sec": "f9",
    "secLabel": { "en": "F9 — Hiding Techniques", "vi": "F9 — Kỹ thuật ẩn giấu" },
    "q": {
      "en": "Which of the following are process-injection techniques? (Select all that apply)",
      "vi": "Những kỹ thuật nào sau đây là tiêm tiến trình (process injection)? (Chọn tất cả)"
    },
    "opts": [
      { "en": "CreateRemoteThread into another process", "vi": "CreateRemoteThread vào một tiến trình khác" },
      { "en": "Process hollowing (start suspended, unmap, write, resume)", "vi": "Process hollowing (chạy suspended, gỡ map, ghi, resume)" },
      { "en": "Reflective DLL injection from memory", "vi": "Reflective DLL injection từ bộ nhớ" },
      { "en": "APC injection via QueueUserAPC", "vi": "APC injection qua QueueUserAPC" },
      { "en": "Defragmenting the system disk", "vi": "Chống phân mảnh đĩa hệ thống" }
    ],
    "correct": [0, 1, 2, 3],
    "exp": {
      "en": "CreateRemoteThread, process hollowing, reflective DLL injection and APC injection are all process-injection methods used to run code inside another (trusted) process. Disk defragmentation is unrelated maintenance.",
      "vi": "CreateRemoteThread, process hollowing, reflective DLL injection và APC injection đều là cách tiêm tiến trình để chạy mã bên trong một tiến trình (tin cậy) khác. Chống phân mảnh đĩa là bảo trì không liên quan."
    }
  }

);
