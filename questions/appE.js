/* ===================================================================
   CPIA Question Bank  —  Appendix E : Analysing Host Intrusions
   79 question(s). To add: append more objects to push().
   Schema: app, sec (index.html anchor), secLabel{en,vi}, q{en,vi},
           opts[4]{en,vi}, correct (0-3), exp{en,vi}, note{en,vi}? (optional)
   =================================================================== */
(window.CPIA_BANK = window.CPIA_BANK || []).push(

  {
    "app": "E",
    "sec": "e1",
    "secLabel": {
      "en": "E1 — Host-based Data Acquisition",
      "vi": "E1 — Thu thập dữ liệu trên host"
    },
    "q": {
      "en": "To preserve evidential integrity when imaging a suspect disk, you should:",
      "vi": "Để bảo toàn tính toàn vẹn bằng chứng khi tạo image một đĩa nghi vấn, bạn nên:"
    },
    "opts": [
      {
        "en": "Mount it read-write to browse files first",
        "vi": "Mount đọc-ghi để xem file trước"
      },
      {
        "en": "Use a write blocker and create a hashed bit-for-bit image",
        "vi": "Dùng write blocker và tạo image từng bit có hash"
      },
      {
        "en": "Copy a few important files via Explorer",
        "vi": "Sao vài file quan trọng qua Explorer"
      },
      {
        "en": "Defragment before imaging",
        "vi": "Chống phân mảnh trước khi tạo image"
      }
    ],
    "correct": 1,
    "exp": {
      "en": "A hardware/software write blocker prevents any modification to the source, and a bit-for-bit (forensic) image with verified hashes proves nothing changed. Working from the verified image — never the original — preserves admissibility.",
      "vi": "Write blocker phần cứng/phần mềm ngăn mọi thay đổi lên nguồn, và image từng bit (forensic) với hash đã kiểm chứng chứng minh không có gì thay đổi. Luôn làm việc trên image đã xác minh — không bao giờ trên bản gốc — để giữ tính chấp nhận được."
    },
    "note": {
      "en": "Write blocker + verified hash = defensible acquisition.",
      "vi": "Write blocker + hash đã xác minh = thu thập có thể bảo vệ trước tòa."
    }
  },

  {
    "app": "E",
    "sec": "e9",
    "secLabel": {
      "en": "E9 — Memory Analysis",
      "vi": "E9 — Phân tích bộ nhớ"
    },
    "q": {
      "en": "Which evidence is typically ONLY available in a memory (RAM) image, not on disk?",
      "vi": "Bằng chứng nào THƯỜNG chỉ có trong image bộ nhớ (RAM), không có trên đĩa?"
    },
    "opts": [
      {
        "en": "Fileless malware, live sockets, injected code",
        "vi": "Mã độc fileless, socket sống, mã được tiêm"
      },
      {
        "en": "The on-disk NTFS Master File Table",
        "vi": "Master File Table NTFS trên đĩa"
      },
      {
        "en": "Installed program files on disk",
        "vi": "Các file chương trình đã cài trên đĩa"
      },
      {
        "en": "The pagefile stored on the disk",
        "vi": "Pagefile lưu trên đĩa"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "RAM holds volatile-only artefacts: fileless/decrypted malware, active TCP connections, injected code, clipboard, command history and encryption keys. Volatility can list processes, parent/child relationships, DLLs and sockets. This is why memory is captured before shutdown.",
      "vi": "RAM chứa các artefact chỉ volatile: mã độc fileless/đã giải mã, kết nối TCP đang hoạt động, mã được tiêm, clipboard, lịch sử lệnh và khóa mã hóa. Volatility liệt kê được tiến trình, quan hệ cha/con, DLL và socket. Vì vậy phải bắt bộ nhớ trước khi tắt máy."
    },
    "note": {
      "en": "Capture RAM first — fileless malware may exist nowhere else.",
      "vi": "Bắt RAM trước — mã độc fileless có thể không tồn tại ở đâu khác."
    }
  },

  {
    "app": "E",
    "sec": "e9",
    "secLabel": {
      "en": "E9 — Memory Analysis",
      "vi": "E9 — Phân tích bộ nhớ"
    },
    "q": {
      "en": "In Volatility, finding a process whose code in memory does not match its on-disk image suggests:",
      "vi": "Trong Volatility, một tiến trình có mã trong bộ nhớ không khớp với image trên đĩa gợi ý:"
    },
    "opts": [
      {
        "en": "Process injection / process hollowing",
        "vi": "Tiêm tiến trình / process hollowing"
      },
      {
        "en": "Routine operating-system patching",
        "vi": "Vá hệ điều hành định kỳ"
      },
      {
        "en": "A transient disk read error",
        "vi": "Một lỗi đọc đĩa thoáng qua"
      },
      {
        "en": "A simple time-zone mismatch",
        "vi": "Một lệch múi giờ đơn giản"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A mismatch between in-memory code and the backing file image is a hallmark of process injection/hollowing, where a legitimate process is started and its memory overwritten with malicious code. Volatility plugins (malfind, hollowfind) detect such anomalies and RWX private memory regions.",
      "vi": "Sự không khớp giữa mã trong bộ nhớ và file gốc là dấu hiệu đặc trưng của process injection/hollowing, khi một tiến trình hợp lệ được khởi chạy rồi ghi đè bộ nhớ bằng mã độc. Các plugin Volatility (malfind, hollowfind) phát hiện các bất thường đó và vùng nhớ riêng RWX."
    }
  },

  {
    "app": "E",
    "sec": "e4",
    "secLabel": {
      "en": "E4 — Windows File Structures",
      "vi": "E4 — Cấu trúc tệp Windows"
    },
    "q": {
      "en": "Which artefact is BEST evidence that a specific executable was actually RUN on a Windows host?",
      "vi": "Artefact nào là bằng chứng TỐT NHẤT cho thấy một file thực thi cụ thể đã thực sự được CHẠY trên host Windows?"
    },
    "opts": [
      {
        "en": "A DNS cache entry",
        "vi": "Một mục cache DNS"
      },
      {
        "en": "Windows Prefetch files",
        "vi": "File Prefetch của Windows"
      },
      {
        "en": "The Recycle Bin",
        "vi": "Thùng rác (Recycle Bin)"
      },
      {
        "en": "The hosts file",
        "vi": "File hosts"
      }
    ],
    "correct": 1,
    "exp": {
      "en": "Prefetch records executable name, run count and last-run timestamps — strong evidence of execution. Shimcache/Amcache and UserAssist also help. Mere presence of a file (or a DNS entry) does not prove it was executed.",
      "vi": "Prefetch ghi tên file thực thi, số lần chạy và mốc thời gian chạy gần nhất — bằng chứng mạnh về việc thực thi. Shimcache/Amcache và UserAssist cũng hỗ trợ. Việc một file chỉ tồn tại (hay một mục DNS) không chứng minh nó đã được chạy."
    },
    "note": {
      "en": "Prefetch = proof of execution + run count + timestamps.",
      "vi": "Prefetch = bằng chứng thực thi + số lần chạy + mốc thời gian."
    }
  },

  {
    "app": "E",
    "sec": "e6",
    "secLabel": {
      "en": "E6 — Windows Registry Essentials",
      "vi": "E6 — Registry Windows cốt lõi"
    },
    "q": {
      "en": "To find malware that auto-starts at boot/login, which registry locations are MOST relevant?",
      "vi": "Để tìm mã độc tự khởi động khi boot/đăng nhập, vị trí registry nào liên quan NHẤT?"
    },
    "opts": [
      {
        "en": "Run and RunOnce keys in HKLM and HKCU",
        "vi": "Khóa Run và RunOnce trong HKLM và HKCU"
      },
      {
        "en": "The Uninstall keys under CurrentVersion",
        "vi": "Các khóa Uninstall dưới CurrentVersion"
      },
      {
        "en": "The MountedDevices key",
        "vi": "Khóa MountedDevices"
      },
      {
        "en": "The TypedURLs browser-history key",
        "vi": "Khóa lịch sử trình duyệt TypedURLs"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Run/RunOnce keys (and Services, Scheduled Tasks, Winlogon, startup folders) are classic persistence/autostart locations. Tools like Autoruns enumerate them. USB history (USBSTOR), shimcache and user accounts are also key registry artefacts.",
      "vi": "Khóa Run/RunOnce (cùng Services, Scheduled Tasks, Winlogon, thư mục startup) là vị trí persistence/autostart kinh điển. Công cụ như Autoruns liệt kê chúng. Lịch sử USB (USBSTOR), shimcache và tài khoản người dùng cũng là artefact registry quan trọng."
    }
  },

  {
    "app": "E",
    "sec": "e6",
    "secLabel": {
      "en": "E6 — Windows Registry Essentials",
      "vi": "E6 — Registry Windows cốt lõi"
    },
    "q": {
      "en": "Which registry artefact helps prove a specific USB storage device was connected?",
      "vi": "Artefact registry nào giúp chứng minh một thiết bị lưu trữ USB cụ thể đã được kết nối?"
    },
    "opts": [
      {
        "en": "USBSTOR keys under CurrentControlSet\\Enum",
        "vi": "Khóa USBSTOR dưới CurrentControlSet\\Enum"
      },
      {
        "en": "The RecentDocs MRU key",
        "vi": "Khóa MRU RecentDocs"
      },
      {
        "en": "The TypedURLs browser-history key",
        "vi": "Khóa lịch sử trình duyệt TypedURLs"
      },
      {
        "en": "The UserAssist execution key",
        "vi": "Khóa thực thi UserAssist"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "USBSTOR (and MountedDevices, USB Enum) record device vendor, product, serial number and first/last connection times — used to tie a specific USB device to the host, relevant for exfiltration and infection-vector analysis.",
      "vi": "USBSTOR (cùng MountedDevices, USB Enum) ghi nhà sản xuất, sản phẩm, số sê-ri và thời gian kết nối đầu/cuối của thiết bị — dùng để gắn một thiết bị USB cụ thể với host, liên quan tới phân tích exfil và vector lây nhiễm."
    }
  },

  {
    "app": "E",
    "sec": "e11",
    "secLabel": {
      "en": "E11 — Malware Behaviours & Anti-Forensics",
      "vi": "E11 — Hành vi mã độc & chống điều tra"
    },
    "q": {
      "en": "Malware stores its payload in an \"invisible\" stream so it does not appear in a normal directory listing. This NTFS technique is:",
      "vi": "Mã độc lưu payload trong một luồng \"vô hình\" để không xuất hiện khi liệt kê thư mục thông thường. Kỹ thuật NTFS này là:"
    },
    "opts": [
      {
        "en": "NTFS Alternate Data Streams",
        "vi": "Alternate Data Streams của NTFS"
      },
      {
        "en": "Routine disk defragmentation",
        "vi": "Chống phân mảnh đĩa định kỳ"
      },
      {
        "en": "Standard file compression",
        "vi": "Nén tệp tiêu chuẩn"
      },
      {
        "en": "Search content indexing",
        "vi": "Lập chỉ mục nội dung tìm kiếm"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "NTFS Alternate Data Streams attach hidden data to a file (file.txt:hidden.exe) that standard dir/Explorer views ignore. Use dir /R or Streams.exe to detect them. ADS is a classic covert-storage/anti-forensic trick.",
      "vi": "NTFS Alternate Data Streams gắn dữ liệu ẩn vào một file (file.txt:hidden.exe) mà dir/Explorer thông thường bỏ qua. Dùng dir /R hoặc Streams.exe để phát hiện. ADS là thủ thuật lưu trữ ngầm/chống điều tra kinh điển."
    },
    "note": {
      "en": "List ADS with \"dir /R\" — hidden streams won't show in a normal listing.",
      "vi": "Liệt kê ADS bằng \"dir /R\" — luồng ẩn không hiện khi liệt kê thường."
    }
  },

  {
    "app": "E",
    "sec": "e7",
    "secLabel": {
      "en": "E7 — Identifying Suspect Files",
      "vi": "E7 — Nhận diện file nghi vấn"
    },
    "q": {
      "en": "A file's entropy is very high and its strings are mostly garbage. This MOST likely indicates:",
      "vi": "Entropy của một file rất cao và chuỗi (strings) hầu hết là vô nghĩa. Điều này KHẢ NĂNG cho thấy:"
    },
    "opts": [
      {
        "en": "A packed or encrypted executable",
        "vi": "Một file thực thi đã pack hoặc mã hóa"
      },
      {
        "en": "A plain-text application log",
        "vi": "Một file log ứng dụng dạng text"
      },
      {
        "en": "An ordinary Word document",
        "vi": "Một tài liệu Word thông thường"
      },
      {
        "en": "An empty placeholder file",
        "vi": "Một file rỗng giữ chỗ"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "High entropy (near 8 bits/byte) with few meaningful strings is typical of packed/encrypted code (UPX, custom packers) used to defeat signature and string analysis. Detect packers with PEiD/Detect-It-Easy; unpack before deeper static analysis. Fuzzy hashing (ssdeep) can still cluster variants.",
      "vi": "Entropy cao (gần 8 bit/byte) với ít chuỗi có nghĩa là đặc trưng của mã đã pack/mã hóa (UPX, packer tùy biến) nhằm vô hiệu phân tích signature và string. Phát hiện packer bằng PEiD/Detect-It-Easy; giải nén trước khi phân tích tĩnh sâu. Fuzzy hashing (ssdeep) vẫn gom nhóm được các biến thể."
    },
    "note": {
      "en": "High entropy + few strings = likely packed/encrypted; unpack first.",
      "vi": "Entropy cao + ít chuỗi = nhiều khả năng đã pack/mã hóa; giải nén trước."
    }
  },

  {
    "app": "E",
    "sec": "e3",
    "secLabel": {
      "en": "E3 — Windows File System Essentials",
      "vi": "E3 — Hệ thống tệp Windows cốt lõi"
    },
    "q": {
      "en": "On NTFS, the master record of every file and its metadata is the:",
      "vi": "Trên NTFS, bản ghi chính của mọi file và metadata của nó là:"
    },
    "opts": [
      {
        "en": "$MFT, the Master File Table",
        "vi": "$MFT, tức Master File Table"
      },
      {
        "en": "The FAT allocation table",
        "vi": "Bảng cấp phát FAT"
      },
      {
        "en": "The system pagefile.sys",
        "vi": "Pagefile.sys hệ thống"
      },
      {
        "en": "The network hosts file",
        "vi": "File hosts mạng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "The $MFT holds an entry per file with timestamps ($STANDARD_INFORMATION and $FILE_NAME), size, attributes and run lists. Small files may be resident in the MFT itself. $Bitmap tracks allocated clusters. The FAT table belongs to FAT, not NTFS.",
      "vi": "$MFT chứa một mục cho mỗi file với mốc thời gian ($STANDARD_INFORMATION và $FILE_NAME), kích thước, thuộc tính và run list. File nhỏ có thể nằm thường trú ngay trong MFT. $Bitmap theo dõi cluster đã cấp phát. Bảng FAT thuộc FAT, không phải NTFS."
    },
    "note": {
      "en": "Compare $STANDARD_INFO vs $FILE_NAME times to spot timestomping.",
      "vi": "So sánh thời gian $STANDARD_INFO với $FILE_NAME để phát hiện timestomping."
    }
  },

  {
    "app": "E",
    "sec": "e12",
    "secLabel": {
      "en": "E12 — Rootkit Identification",
      "vi": "E12 — Nhận diện rootkit"
    },
    "q": {
      "en": "A process is visible in a raw memory image but hidden from Task Manager and tasklist. This strongly suggests:",
      "vi": "Một tiến trình hiện trong image bộ nhớ thô nhưng bị ẩn khỏi Task Manager và tasklist. Điều này gợi ý mạnh:"
    },
    "opts": [
      {
        "en": "A rootkit hiding the process",
        "vi": "Một rootkit đang giấu tiến trình"
      },
      {
        "en": "A normal background service host",
        "vi": "Một service host nền bình thường"
      },
      {
        "en": "A routine Windows update task",
        "vi": "Một tác vụ Windows update định kỳ"
      },
      {
        "en": "A crashed process not yet cleaned up",
        "vi": "Một tiến trình đã crash chưa được dọn"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "When live OS tools hide a process that forensic memory analysis still sees, a rootkit is likely manipulating the view — via API hooking or Direct Kernel Object Manipulation (unlinking the EPROCESS). Cross-view comparison (live vs raw memory) is the standard rootkit detection method.",
      "vi": "Khi công cụ OS trực tiếp ẩn một tiến trình mà phân tích bộ nhớ forensic vẫn thấy, nhiều khả năng rootkit đang thao túng góc nhìn — qua hook API hoặc DKOM (gỡ liên kết EPROCESS). So sánh chéo (live vs raw memory) là cách phát hiện rootkit chuẩn."
    }
  },

  {
    "app": "E",
    "sec": "e10",
    "secLabel": {
      "en": "E10 — Infection Vectors",
      "vi": "E10 — Vector lây nhiễm"
    },
    "q": {
      "en": "A user opened an invoice.docm and was infected. The MOST likely infection vector is:",
      "vi": "Người dùng mở invoice.docm và bị nhiễm. Vector lây nhiễm KHẢ NĂNG nhất là:"
    },
    "opts": [
      {
        "en": "A malicious VBA macro",
        "vi": "Một macro VBA độc hại"
      },
      {
        "en": "A linked remote template (template injection)",
        "vi": "Một template từ xa được liên kết (template injection)"
      },
      {
        "en": "An embedded OLE package object",
        "vi": "Một đối tượng OLE package nhúng"
      },
      {
        "en": "A DDE field-code command",
        "vi": "Một lệnh field-code DDE"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "The .docm extension denotes a macro-enabled document. Phishing lures the user to \"Enable Content\", running a VBA macro that downloads/executes the payload. DDE and embedded objects are related Office vectors. Inspect with oletools (olevba) before opening.",
      "vi": "Đuôi .docm cho biết tài liệu có bật macro. Phishing dụ người dùng \"Enable Content\", chạy macro VBA tải/thực thi payload. DDE và đối tượng nhúng là các vector Office liên quan. Kiểm tra bằng oletools (olevba) trước khi mở."
    }
  },

  {
    "app": "E",
    "sec": "e14",
    "secLabel": {
      "en": "E14 — Linux OS File Structures",
      "vi": "E14 — Cấu trúc tệp Linux"
    },
    "q": {
      "en": "On a Linux host, which file MOST directly reveals scheduled persistence created by an attacker?",
      "vi": "Trên host Linux, file nào lộ TRỰC TIẾP nhất cơ chế persistence theo lịch do kẻ tấn công tạo?"
    },
    "opts": [
      {
        "en": "crontab and cron-directory entries",
        "vi": "Các mục crontab và thư mục cron"
      },
      {
        "en": "The /etc/hostname config file",
        "vi": "File cấu hình /etc/hostname"
      },
      {
        "en": "The /etc/motd login banner",
        "vi": "Banner đăng nhập /etc/motd"
      },
      {
        "en": "The /proc/cpuinfo pseudo-file",
        "vi": "File giả /proc/cpuinfo"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Cron jobs are a primary Linux persistence mechanism; check /etc/crontab, /etc/cron.*, and per-user spools. Also review systemd units, ~/.bashrc, /etc/rc.local and authorized_keys. bash history and auth.log/wtmp aid timeline reconstruction.",
      "vi": "Cron job là cơ chế persistence chính trên Linux; kiểm tra /etc/crontab, /etc/cron.*, và spool theo người dùng. Cũng xem các unit systemd, ~/.bashrc, /etc/rc.local và authorized_keys. bash history và auth.log/wtmp hỗ trợ dựng lại timeline."
    }
  },

  {
    "app": "E",
    "sec": "e5",
    "secLabel": {
      "en": "E5 — Application File Structures",
      "vi": "E5 — Cấu trúc tệp ứng dụng"
    },
    "q": {
      "en": "Browser history, cookies and downloads on modern browsers are most often stored in:",
      "vi": "Lịch sử duyệt, cookie và tải xuống trên trình duyệt hiện đại thường được lưu trong:"
    },
    "opts": [
      {
        "en": "Plain .txt files",
        "vi": "Các file .txt thuần"
      },
      {
        "en": "SQLite databases",
        "vi": "Cơ sở dữ liệu SQLite"
      },
      {
        "en": "The registry only",
        "vi": "Chỉ trong registry"
      },
      {
        "en": "The pagefile",
        "vi": "Pagefile"
      }
    ],
    "correct": 1,
    "exp": {
      "en": "Chrome/Firefox store history, cookies, logins and downloads in SQLite files (e.g. History, places.sqlite). Forensic value is high; note deleted rows may persist in unallocated DB pages and the WAL/journal. Tools like browser parsers or sqlite recovery extract them.",
      "vi": "Chrome/Firefox lưu lịch sử, cookie, đăng nhập và tải xuống trong các file SQLite (vd History, places.sqlite). Giá trị forensic cao; lưu ý các hàng đã xóa có thể còn trong trang DB chưa cấp phát và WAL/journal. Các trình phân tích trình duyệt hoặc khôi phục sqlite trích xuất chúng."
    }
  },

  {
    "app": "E",
    "sec": "e1",
    "secLabel": {
      "en": "E1 — Host-based Data Acquisition",
      "vi": "E1 — Thu thập dữ liệu trên host"
    },
    "q": {
      "en": "A live server cannot be powered off. The appropriate acquisition approach is:",
      "vi": "Một server đang chạy không thể tắt. Cách thu thập phù hợp là:"
    },
    "opts": [
      {
        "en": "Live/triage acquisition of memory and key artefacts",
        "vi": "Thu thập live/triage bộ nhớ và artefact trọng yếu"
      },
      {
        "en": "Refuse to collect any evidence",
        "vi": "Từ chối thu thập bằng chứng nào"
      },
      {
        "en": "Yank the power cable immediately",
        "vi": "Rút phích cắm điện ngay lập tức"
      },
      {
        "en": "Format the disk before imaging",
        "vi": "Format đĩa trước khi tạo image"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "For systems that cannot be taken offline, perform live acquisition: capture RAM first, then collect targeted artefacts (logs, registry, prefetch) using trusted, documented tools (KAPE, CyLR) while recording every action. Pulling power loses volatile evidence and risks corruption.",
      "vi": "Với hệ thống không thể đưa offline, hãy thu thập live: bắt RAM trước, rồi thu các artefact trọng yếu (log, registry, prefetch) bằng công cụ tin cậy có tài liệu (KAPE, CyLR) và ghi lại mọi hành động. Rút điện làm mất bằng chứng volatile và có thể gây hỏng dữ liệu."
    }
  },

  {
    "app": "E",
    "sec": "e4",
    "secLabel": {
      "en": "E4 — Windows File Structures",
      "vi": "E4 — Cấu trúc tệp Windows"
    },
    "q": {
      "en": "Volume Shadow Copies (VSS) are valuable in forensics because they:",
      "vi": "Volume Shadow Copy (VSS) có giá trị trong điều tra số (forensic) vì chúng:"
    },
    "opts": [
      {
        "en": "They retain earlier versions of files an attacker deleted or altered",
        "vi": "Chúng giữ lại các phiên bản trước của file mà kẻ tấn công đã xóa hoặc sửa"
      },
      {
        "en": "They fully encrypt the system disk",
        "vi": "Chúng mã hóa toàn bộ đĩa hệ thống"
      },
      {
        "en": "They make the host boot faster",
        "vi": "Chúng làm host boot nhanh hơn"
      },
      {
        "en": "They store passwords in plaintext",
        "vi": "Chúng lưu mật khẩu dạng plaintext"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "VSS snapshots may retain prior states of files, registry hives and even deleted artefacts, letting you recover data an attacker later wiped or modified. Note some ransomware deletes shadow copies (vssadmin delete shadows) — itself an indicator.",
      "vi": "Snapshot VSS có thể giữ trạng thái trước của file, hive registry và cả artefact đã xóa, cho phép khôi phục dữ liệu kẻ tấn công xóa/sửa sau đó. Lưu ý một số ransomware xóa shadow copy (vssadmin delete shadows) — bản thân điều đó là một chỉ dấu."
    }
  },

  {
    "app": "E",
    "sec": "e5",
    "secLabel": {
      "en": "E5 — Application File Structures",
      "vi": "E5 — Cấu trúc tệp ứng dụng"
    },
    "q": {
      "en": "A .docx or .xlsx file is internally:",
      "vi": "Một file .docx hay .xlsx về bản chất bên trong là:"
    },
    "opts": [
      {
        "en": "A ZIP archive of XML and media parts",
        "vi": "Một archive ZIP gồm XML và media"
      },
      {
        "en": "A single large encrypted blob",
        "vi": "Một khối mã hóa lớn duy nhất"
      },
      {
        "en": "A Windows PE executable file",
        "vi": "Một file thực thi PE Windows"
      },
      {
        "en": "A binary registry hive file",
        "vi": "Một file hive registry nhị phân"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Office Open XML files are ZIP containers — rename to .zip and unpack to inspect XML, embedded objects, external relationships (which can reveal template-injection/remote URLs) and metadata, without opening the document in Office.",
      "vi": "File Office Open XML là container ZIP — đổi tên thành .zip rồi giải nén để xem XML, đối tượng nhúng, quan hệ ngoài (có thể lộ template-injection/URL từ xa) và metadata, mà không cần mở tài liệu trong Office."
    },
    "note": {
      "en": "Unzip OOXML files to inspect macros/relationships safely.",
      "vi": "Giải nén file OOXML để kiểm tra macro/quan hệ một cách an toàn."
    }
  },

  {
    "app": "E",
    "sec": "e8",
    "secLabel": {
      "en": "E8 — Storage Media",
      "vi": "E8 — Phương tiện lưu trữ"
    },
    "q": {
      "en": "Why can SSDs be problematic for forensic recovery of deleted data?",
      "vi": "Vì sao SSD có thể gây khó cho việc khôi phục forensic dữ liệu đã xóa?"
    },
    "opts": [
      {
        "en": "TRIM/garbage collection can wipe deleted blocks",
        "vi": "TRIM/garbage collection có thể xóa các khối đã xóa"
      },
      {
        "en": "They never actually store any data",
        "vi": "Chúng không bao giờ thực sự lưu dữ liệu"
      },
      {
        "en": "They are always encrypted by law",
        "vi": "Chúng luôn bị mã hóa theo luật"
      },
      {
        "en": "They cannot be imaged at all",
        "vi": "Chúng hoàn toàn không thể tạo image"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "SSDs use wear-levelling and TRIM, so deleted blocks may be zeroed by the controller's garbage collection shortly after deletion — even with a write blocker — making \"deleted file\" recovery far less reliable than on magnetic disks. Also consider HPA/DCO on HDDs and full-disk encryption.",
      "vi": "SSD dùng wear-levelling và TRIM, nên các khối đã xóa có thể bị controller zero hóa qua garbage collection ngay sau khi xóa — kể cả khi có write blocker — khiến khôi phục \"file đã xóa\" kém tin cậy hơn nhiều so với đĩa từ. Cũng cân nhắc HPA/DCO trên HDD và mã hóa toàn đĩa."
    }
  },

  {
    "app": "E",
    "sec": "e7",
    "secLabel": {
      "en": "E7 — Identifying Suspect Files",
      "vi": "E7 — Nhận diện file nghi vấn"
    },
    "q": {
      "en": "Fuzzy hashing (e.g. ssdeep) is preferred over MD5/SHA when you want to:",
      "vi": "Fuzzy hashing (vd ssdeep) được ưu tiên hơn MD5/SHA khi bạn muốn:"
    },
    "opts": [
      {
        "en": "Find similar variant files, not byte-identical ones",
        "vi": "Tìm file biến thể tương tự, không giống hệt từng byte"
      },
      {
        "en": "Encrypt the files being compared",
        "vi": "Mã hóa các file đang so sánh"
      },
      {
        "en": "Prove perfect bit-for-bit integrity",
        "vi": "Chứng minh toàn vẹn từng bit tuyệt đối"
      },
      {
        "en": "Compress the files to save space",
        "vi": "Nén file để tiết kiệm dung lượng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Cryptographic hashes change completely with one byte, so they only match identical files. Fuzzy/context-triggered piecewise hashing scores similarity, clustering malware variants that share code even after minor changes. Use exact hashes for integrity, fuzzy hashes for similarity hunting.",
      "vi": "Hash mật mã thay đổi hoàn toàn chỉ với một byte nên chỉ khớp file giống hệt. Fuzzy hashing chấm điểm tương tự, gom nhóm các biến thể mã độc dùng chung mã dù đã sửa nhỏ. Dùng hash chính xác cho toàn vẹn, fuzzy hash để săn tương tự."
    }
  },

  {
    "app": "E",
    "sec": "e3",
    "secLabel": {
      "en": "E3 — Windows File System Essentials",
      "vi": "E3 — Hệ thống tệp Windows cốt lõi"
    },
    "q": {
      "en": "\"Unallocated space\" on a disk is important to examine because it may hold:",
      "vi": "\"Không gian chưa cấp phát\" trên đĩa quan trọng để xem xét vì có thể chứa:"
    },
    "opts": [
      {
        "en": "Remnants of deleted files recoverable by carving",
        "vi": "Tàn dư file đã xóa, khôi phục được bằng carving"
      },
      {
        "en": "Only zeros, in every single case",
        "vi": "Chỉ toàn số 0, trong mọi trường hợp"
      },
      {
        "en": "The currently running OS kernel",
        "vi": "Nhân OS đang chạy hiện tại"
      },
      {
        "en": "The live, running processes",
        "vi": "Các tiến trình đang chạy"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Deleting a file usually just unlinks it; the clusters become unallocated but still hold data until overwritten. File carving recovers files from unallocated space by header/footer signatures, independent of the file system metadata. (Note SSD TRIM may erase this.)",
      "vi": "Xóa file thường chỉ gỡ liên kết; các cluster trở thành chưa cấp phát nhưng vẫn giữ dữ liệu cho tới khi bị ghi đè. File carving khôi phục file từ không gian chưa cấp phát dựa trên signature header/footer, độc lập với metadata hệ thống tệp. (Lưu ý TRIM của SSD có thể xóa.)"
    }
  },

  {
    "app": "E",
    "sec": "e6",
    "secLabel": {
      "en": "E6 — Windows Registry Essentials",
      "vi": "E6 — Registry Windows cốt lõi"
    },
    "q": {
      "en": "Which hive primarily stores per-user settings and is loaded as HKCU?",
      "vi": "Hive nào lưu chủ yếu cài đặt theo người dùng và được nạp thành HKCU?"
    },
    "opts": [
      {
        "en": "NTUSER.DAT",
        "vi": "NTUSER.DAT"
      },
      {
        "en": "SYSTEM",
        "vi": "SYSTEM"
      },
      {
        "en": "SECURITY",
        "vi": "SECURITY"
      },
      {
        "en": "SAM",
        "vi": "SAM"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Each user profile has an NTUSER.DAT hive (loaded as HKCU) holding their settings, MRU lists, UserAssist (program execution) and typed paths — rich user-activity evidence. SYSTEM/SOFTWARE/SAM/SECURITY are machine-wide hives.",
      "vi": "Mỗi hồ sơ người dùng có một hive NTUSER.DAT (nạp thành HKCU) giữ cài đặt, danh sách MRU, UserAssist (thực thi chương trình) và đường dẫn đã gõ — bằng chứng hoạt động người dùng phong phú. SYSTEM/SOFTWARE/SAM/SECURITY là hive cấp toàn máy."
    }
  },

  {
    "app": "E",
    "sec": "e10",
    "secLabel": {
      "en": "E10 — Infection Vectors",
      "vi": "E10 — Vector lây nhiễm"
    },
    "q": {
      "en": "A \"drive-by download\" infects a victim by:",
      "vi": "Một \"drive-by download\" lây nhiễm nạn nhân bằng cách:"
    },
    "opts": [
      {
        "en": "Exploiting the browser/plugins by visiting a malicious page",
        "vi": "Khai thác trình duyệt/plugin chỉ bằng truy cập một trang độc"
      },
      {
        "en": "Requiring the user to install a signed driver",
        "vi": "Yêu cầu người dùng cài một driver đã ký"
      },
      {
        "en": "Physically swapping out the hard disk",
        "vi": "Tráo ổ cứng vật lý"
      },
      {
        "en": "Sending the victim a paper fax",
        "vi": "Gửi nạn nhân một bản fax giấy"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Drive-by downloads exploit vulnerable browsers/plugins (or use deceptive prompts) so merely visiting a page triggers code execution and payload download — no obvious user action needed. Patching and browser hardening are the main defences.",
      "vi": "Drive-by download khai thác trình duyệt/plugin lỗ hổng (hoặc dùng lời nhắc lừa đảo) nên chỉ cần truy cập một trang là kích hoạt thực thi mã và tải payload — không cần hành động rõ ràng từ người dùng. Vá lỗi và gia cố trình duyệt là phòng thủ chính."
    }
  },

  {
    "app": "E",
    "sec": "e11",
    "secLabel": {
      "en": "E11 — Malware Behaviours & Anti-Forensics",
      "vi": "E11 — Hành vi mã độc & chống điều tra"
    },
    "q": {
      "en": "An attacker sets a malicious file's timestamps to match a legitimate system file. This anti-forensic technique is:",
      "vi": "Kẻ tấn công đặt mốc thời gian của file độc hại khớp với một file hệ thống hợp lệ. Kỹ thuật chống điều tra này là:"
    },
    "opts": [
      {
        "en": "Timestomping",
        "vi": "Timestomping"
      },
      {
        "en": "Defragmentation",
        "vi": "Chống phân mảnh"
      },
      {
        "en": "Hashing",
        "vi": "Băm (hashing)"
      },
      {
        "en": "Indexing",
        "vi": "Lập chỉ mục"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Timestomping forges file MAC times to blend in and break timelines. It usually only alters $STANDARD_INFORMATION; comparing against the harder-to-change $FILE_NAME attribute in the $MFT often exposes the manipulation.",
      "vi": "Timestomping giả mạo thời gian MAC của file để hòa lẫn và phá timeline. Nó thường chỉ sửa $STANDARD_INFORMATION; so sánh với thuộc tính $FILE_NAME (khó sửa hơn) trong $MFT thường lộ ra sự thao túng."
    },
    "note": {
      "en": "$STANDARD_INFO vs $FILE_NAME time mismatch = likely timestomping.",
      "vi": "Lệch thời gian $STANDARD_INFO vs $FILE_NAME = khả năng timestomping."
    }
  },

  {
    "app": "E",
    "sec": "e9",
    "secLabel": {
      "en": "E9 — Memory Analysis",
      "vi": "E9 — Phân tích bộ nhớ"
    },
    "q": {
      "en": "Which Volatility-style step BEST starts an investigation of a memory image?",
      "vi": "Bước kiểu Volatility nào KHỞI ĐẦU tốt nhất việc điều tra một image bộ nhớ?"
    },
    "opts": [
      {
        "en": "List the process tree, then network connections",
        "vi": "Liệt kê cây tiến trình, rồi kết nối mạng"
      },
      {
        "en": "Immediately format the memory image",
        "vi": "Format ngay image bộ nhớ"
      },
      {
        "en": "Encrypt the captured memory image",
        "vi": "Mã hóa image bộ nhớ đã bắt"
      },
      {
        "en": "Delete any suspicious strings found",
        "vi": "Xóa mọi chuỗi đáng ngờ tìm thấy"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Begin by enumerating processes (pslist/pstree) to spot suspicious parent/child relationships (e.g. winword.exe spawning powershell.exe), then map network sockets (netscan), injected code (malfind) and command history. Establishing the process tree frames everything else.",
      "vi": "Bắt đầu bằng liệt kê tiến trình (pslist/pstree) để phát hiện quan hệ cha/con đáng ngờ (vd winword.exe sinh powershell.exe), rồi ánh xạ socket mạng (netscan), mã được tiêm (malfind) và lịch sử lệnh. Dựng cây tiến trình làm khung cho mọi thứ còn lại."
    }
  },

  {
    "app": "E",
    "sec": "e13",
    "secLabel": {
      "en": "E13 — Live Malware Analysis",
      "vi": "E13 — Phân tích mã độc trực tiếp"
    },
    "q": {
      "en": "During live analysis, which tool shows files, registry keys and network sockets a running process currently has open?",
      "vi": "Khi phân tích trực tiếp, công cụ nào hiển thị file, khóa registry và socket mạng mà một tiến trình đang mở?"
    },
    "opts": [
      {
        "en": "Process Explorer with Handle and TCPView",
        "vi": "Process Explorer kèm Handle và TCPView"
      },
      {
        "en": "Task Manager's Processes tab",
        "vi": "Tab Processes của Task Manager"
      },
      {
        "en": "The Autoruns startup viewer",
        "vi": "Trình xem khởi động Autoruns"
      },
      {
        "en": "The Event Viewer log browser",
        "vi": "Trình duyệt log Event Viewer"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Process Explorer (with the lower pane / handle view) and TCPView reveal a process's open handles, DLLs, registry keys and live sockets in real time — exposing what malware is touching. Run such analysis only in an isolated lab.",
      "vi": "Process Explorer (với khung dưới / chế độ xem handle) và TCPView cho thấy handle đang mở, DLL, khóa registry và socket sống của một tiến trình theo thời gian thực — phơi bày những gì mã độc đang chạm. Chỉ thực hiện phân tích này trong lab cách ly."
    }
  },

  {
    "app": "E",
    "sec": "e4",
    "secLabel": {
      "en": "E4 — Windows File Structures (Event Logs)",
      "vi": "E4 — Cấu trúc tệp Windows (Nhật ký sự kiện)"
    },
    "q": {
      "en": "Windows Security event ID 4624 records:",
      "vi": "Sự kiện bảo mật Windows ID 4624 ghi lại:"
    },
    "opts": [
      {
        "en": "A successful account logon with its logon type",
        "vi": "Một lần đăng nhập thành công kèm logon type"
      },
      {
        "en": "A failed account logon attempt (4625)",
        "vi": "Một lần đăng nhập thất bại (4625)"
      },
      {
        "en": "A new process being created (4688)",
        "vi": "Một tiến trình mới được tạo (4688)"
      },
      {
        "en": "The audit log being cleared (1102)",
        "vi": "Audit log bị xóa (1102)"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "4624 = successful logon; the Logon Type distinguishes interactive (2), network (3), RDP (10), etc. 4625 = failed logon, 4672 = special/admin privileges assigned. These are core to reconstructing access and lateral movement. evtx logs are binary XML.",
      "vi": "4624 = đăng nhập thành công; Logon Type phân biệt interactive (2), network (3), RDP (10), v.v. 4625 = đăng nhập thất bại, 4672 = cấp đặc quyền đặc biệt/admin. Đây là cốt lõi để dựng lại truy cập và lateral movement. Log evtx là binary XML."
    },
    "note": {
      "en": "4624 success / 4625 fail / 4672 admin-rights — learn these IDs.",
      "vi": "4624 thành công / 4625 thất bại / 4672 quyền admin — hãy thuộc các ID này."
    }
  },

  {
    "app": "E",
    "sec": "e4",
    "secLabel": {
      "en": "E4 — Windows File Structures",
      "vi": "E4 — Cấu trúc tệp Windows"
    },
    "q": {
      "en": "Shimcache (AppCompatCache) is valuable evidence because it records:",
      "vi": "Shimcache (AppCompatCache) là bằng chứng giá trị vì nó ghi lại:"
    },
    "opts": [
      {
        "en": "Evidence that executables existed, with path and time",
        "vi": "Bằng chứng executable từng tồn tại, kèm đường dẫn và thời gian"
      },
      {
        "en": "The full command line of each program",
        "vi": "Dòng lệnh đầy đủ của mỗi chương trình"
      },
      {
        "en": "The exact number of times each program ran",
        "vi": "Số lần chính xác mỗi chương trình đã chạy"
      },
      {
        "en": "The user account that launched each program",
        "vi": "Tài khoản đã khởi chạy mỗi chương trình"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Shimcache tracks executables the OS evaluated for compatibility, retaining path and file-modified time — useful proof an attacker tool was present even if deleted. Note: presence in Shimcache does NOT by itself prove execution (unlike Prefetch); corroborate.",
      "vi": "Shimcache theo dõi các file thực thi mà OS đánh giá tương thích, giữ đường dẫn và thời gian sửa file — hữu ích để chứng minh công cụ của kẻ tấn công từng hiện diện dù đã xóa. Lưu ý: có trong Shimcache KHÔNG tự chứng minh đã thực thi (khác Prefetch); cần đối chiếu."
    },
    "note": {
      "en": "Shimcache = \"was present/referenced\", not proof of execution.",
      "vi": "Shimcache = \"từng hiện diện/được tham chiếu\", không phải bằng chứng đã chạy."
    }
  },

  {
    "app": "E",
    "sec": "e3",
    "secLabel": {
      "en": "E3 — Windows File System Essentials",
      "vi": "E3 — Hệ thống tệp Windows cốt lõi"
    },
    "q": {
      "en": "BitLocker full-disk encryption affects acquisition because:",
      "vi": "Mã hóa toàn đĩa BitLocker ảnh hưởng tới việc thu thập vì:"
    },
    "opts": [
      {
        "en": "A dead image needs the key; image it live",
        "vi": "Image dead cần khóa; phải image lúc đang chạy"
      },
      {
        "en": "It makes the disk capacity bigger",
        "vi": "Nó làm dung lượng đĩa lớn hơn"
      },
      {
        "en": "It noticeably speeds up imaging",
        "vi": "Nó tăng tốc tạo image rõ rệt"
      },
      {
        "en": "It has no effect on acquisition",
        "vi": "Nó không ảnh hưởng tới thu thập"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A standard dead-box image of a BitLocker volume yields encrypted, unusable data. You must capture it live while unlocked, obtain the recovery key (often in AD/Azure AD or a printed key), or extract keys from a memory image. Plan for FDE during scoping.",
      "vi": "Image dead-box thường của một volume BitLocker chỉ cho dữ liệu mã hóa, không dùng được. Phải bắt lúc đang mở khóa, lấy recovery key (thường trong AD/Azure AD hoặc khóa in ra), hoặc trích khóa từ image bộ nhớ. Hãy lên kế hoạch cho FDE ngay khi scoping."
    }
  },

  {
    "app": "E",
    "sec": "e8",
    "secLabel": {
      "en": "E8 — Storage Media",
      "vi": "E8 — Phương tiện lưu trữ"
    },
    "q": {
      "en": "A Host Protected Area (HPA) or Device Configuration Overlay (DCO) on a hard disk matters because:",
      "vi": "Một Host Protected Area (HPA) hoặc Device Configuration Overlay (DCO) trên ổ cứng quan trọng vì:"
    },
    "opts": [
      {
        "en": "They hide sectors the imager must be set to capture",
        "vi": "Chúng giấu các sector mà công cụ imaging phải được bật để thu"
      },
      {
        "en": "They fully encrypt the whole disk",
        "vi": "Chúng mã hóa toàn bộ đĩa"
      },
      {
        "en": "They are purely a software-only feature",
        "vi": "Chúng thuần túy là tính năng phần mềm"
      },
      {
        "en": "They store the drive's SMART health data",
        "vi": "Chúng lưu dữ liệu sức khỏe SMART của ổ"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "HPA/DCO are firmware-level areas that reduce the reported disk size, potentially hiding data from a normal acquisition. A thorough forensic process detects and removes/unlocks them so the full physical disk is imaged. Missing them means missing evidence.",
      "vi": "HPA/DCO là vùng cấp firmware làm giảm dung lượng đĩa báo cáo, có thể giấu dữ liệu khỏi acquisition thường. Quy trình forensic kỹ lưỡng phát hiện và gỡ/mở khóa chúng để image toàn bộ đĩa vật lý. Bỏ sót chúng là bỏ sót bằng chứng."
    }
  },

  {
    "app": "E",
    "sec": "e5",
    "secLabel": {
      "en": "E5 — Application File Structures",
      "vi": "E5 — Cấu trúc tệp ứng dụng"
    },
    "q": {
      "en": "A PDF containing \"/OpenAction\" and \"/JavaScript\" objects should be treated as:",
      "vi": "Một PDF chứa đối tượng \"/OpenAction\" và \"/JavaScript\" nên được xem là:"
    },
    "opts": [
      {
        "en": "Potentially malicious, it can auto-run script",
        "vi": "Có thể độc hại, nó có thể tự chạy script"
      },
      {
        "en": "Always completely safe to open",
        "vi": "Luôn hoàn toàn an toàn khi mở"
      },
      {
        "en": "A plain, harmless image file",
        "vi": "Một file ảnh thuần, vô hại"
      },
      {
        "en": "A binary registry hive file",
        "vi": "Một file hive registry nhị phân"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "PDFs support embedded JavaScript and auto-actions (/OpenAction, /AA, /Launch) that can trigger exploits or download payloads on open. Analyse statically with tools like pdfid/pdf-parser before opening; auto-execute objects + obfuscated streams are strong red flags.",
      "vi": "PDF hỗ trợ JavaScript nhúng và hành động tự động (/OpenAction, /AA, /Launch) có thể kích hoạt khai thác hoặc tải payload khi mở. Phân tích tĩnh bằng pdfid/pdf-parser trước khi mở; đối tượng tự chạy + stream làm rối là cờ đỏ mạnh."
    }
  },

  {
    "app": "E",
    "sec": "e14",
    "secLabel": {
      "en": "E14 — Linux OS File Structures",
      "vi": "E14 — Cấu trúc tệp Linux"
    },
    "q": {
      "en": "On Linux, which artefact BEST shows recent interactive login sessions and source IPs?",
      "vi": "Trên Linux, artefact nào hiển thị TỐT NHẤT các phiên đăng nhập tương tác gần đây và IP nguồn?"
    },
    "opts": [
      {
        "en": "wtmp/btmp/lastlog and auth.log",
        "vi": "wtmp/btmp/lastlog và auth.log"
      },
      {
        "en": "The /etc/hostname config file",
        "vi": "File cấu hình /etc/hostname"
      },
      {
        "en": "The /proc/version pseudo-file",
        "vi": "File giả /proc/version"
      },
      {
        "en": "The /dev/null device file",
        "vi": "File thiết bị /dev/null"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "wtmp (logins/logouts), btmp (failed logins), lastlog (last login per user) and auth.log/secure (SSH auth, sudo) reconstruct who logged in, when and from where. Attackers may clear these, so corroborate with bash history, cron and file timestamps.",
      "vi": "wtmp (đăng nhập/đăng xuất), btmp (đăng nhập thất bại), lastlog (lần đăng nhập cuối theo user) và auth.log/secure (xác thực SSH, sudo) dựng lại ai đăng nhập, khi nào và từ đâu. Kẻ tấn công có thể xóa chúng, nên đối chiếu với bash history, cron và mốc thời gian file."
    }
  },

  {
    "app": "E",
    "sec": "e1",
    "secLabel": {
      "en": "E1 — Host-based Data Acquisition",
      "vi": "E1 — Thu thập dữ liệu trên host"
    },
    "q": {
      "en": "How does the E01 (EWF) image format differ from a raw \"dd\" image?",
      "vi": "Định dạng image E01 (EWF) khác image \"dd\" thô như thế nào?"
    },
    "opts": [
      {
        "en": "E01 adds metadata and integrity hashes; dd is raw",
        "vi": "E01 thêm metadata và hash toàn vẹn; dd là bản thô"
      },
      {
        "en": "A dd image cannot be hashed at all",
        "vi": "Image dd hoàn toàn không thể băm"
      },
      {
        "en": "E01 is always smaller and lossy",
        "vi": "E01 luôn nhỏ hơn và mất dữ liệu"
      },
      {
        "en": "They are exactly identical formats",
        "vi": "Chúng là hai định dạng giống hệt nhau"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "EWF/E01 (EnCase) embeds metadata, optional compression and per-segment checksums/hashes for integrity. Raw dd is an exact bit-for-bit image with no container metadata. Both are forensically sound; E01 adds convenience and built-in verification.",
      "vi": "EWF/E01 (EnCase) nhúng metadata, nén tùy chọn và checksum/hash theo từng segment cho toàn vẹn. dd thô là image từng bit chính xác không có metadata container. Cả hai đều hợp lệ forensic; E01 thêm tiện lợi và xác minh tích hợp."
    }
  },

  {
    "app": "E",
    "sec": "e1",
    "secLabel": {
      "en": "E1 — Host-based Data Acquisition",
      "vi": "E1 — Thu thập dữ liệu trên host"
    },
    "q": {
      "en": "A hardware write blocker is preferred over a software one mainly because it:",
      "vi": "Write blocker phần cứng được ưu tiên hơn loại phần mềm chủ yếu vì nó:"
    },
    "opts": [
      {
        "en": "Physically prevents any write to the source",
        "vi": "Ngăn vật lý mọi ghi lên nguồn"
      },
      {
        "en": "It copies the source far faster",
        "vi": "Nó sao chép nguồn nhanh hơn nhiều"
      },
      {
        "en": "It compresses the resulting image",
        "vi": "Nó nén image kết quả"
      },
      {
        "en": "It encrypts the source drive",
        "vi": "Nó mã hóa ổ nguồn"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A hardware write blocker sits inline and blocks write commands at the interface, not relying on the analysis OS behaving correctly. Software blockers depend on OS configuration and can fail. Either way the goal is to preserve the source unchanged (ACPO Principle 1).",
      "vi": "Write blocker phần cứng nằm inline và chặn lệnh ghi ngay tại giao diện, không phụ thuộc OS phân tích hoạt động đúng. Blocker phần mềm phụ thuộc cấu hình OS và có thể lỗi. Dù sao mục tiêu là giữ nguồn không đổi (Nguyên tắc 1 ACPO)."
    }
  },

  {
    "app": "E",
    "sec": "e1",
    "secLabel": {
      "en": "E1 — Host-based Data Acquisition",
      "vi": "E1 — Thu thập dữ liệu trên host"
    },
    "q": {
      "en": "Tools like KAPE and CyLR are typically used to:",
      "vi": "Công cụ như KAPE và CyLR thường được dùng để:"
    },
    "opts": [
      {
        "en": "Rapidly collect targeted forensic artefacts",
        "vi": "Thu thập nhanh các artefact forensic trọng yếu"
      },
      {
        "en": "Decrypt BitLocker-protected volumes",
        "vi": "Giải mã các volume bảo vệ bằng BitLocker"
      },
      {
        "en": "Disassemble malware executables",
        "vi": "Dịch ngược file thực thi mã độc"
      },
      {
        "en": "Route traffic across the network",
        "vi": "Định tuyến lưu lượng qua mạng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "KAPE/CyLR perform triage collection — grabbing high-value artefacts (event logs, registry, prefetch, $MFT, browser data) quickly, especially useful at scale or when full imaging is impractical. They are collectors, not decryptors or disassemblers.",
      "vi": "KAPE/CyLR thực hiện thu thập triage — lấy nhanh các artefact giá trị cao (event log, registry, prefetch, $MFT, dữ liệu trình duyệt), đặc biệt hữu ích ở quy mô lớn hoặc khi image toàn bộ là bất khả thi. Chúng là công cụ thu thập, không phải giải mã hay disassembler."
    }
  },

  {
    "app": "E",
    "sec": "e1",
    "secLabel": {
      "en": "E1 — Host-based Data Acquisition",
      "vi": "E1 — Thu thập dữ liệu trên host"
    },
    "q": {
      "en": "During acquisition of a running host, the correct sequence is:",
      "vi": "Khi thu thập một host đang chạy, trình tự đúng là:"
    },
    "opts": [
      {
        "en": "Capture volatile memory first, then disk artefacts",
        "vi": "Bắt bộ nhớ volatile trước, rồi tới artefact đĩa"
      },
      {
        "en": "Image the disk first and skip memory",
        "vi": "Image đĩa trước và bỏ qua bộ nhớ"
      },
      {
        "en": "Reboot the host, then acquire it",
        "vi": "Reboot host, rồi mới thu thập"
      },
      {
        "en": "Delete the logs, then image it",
        "vi": "Xóa log, rồi mới image"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Order of volatility dictates capturing RAM (and other volatile state) before disk, because memory is lost on power-off and may hold fileless malware, keys and live connections. Rebooting or deleting anything first destroys evidence.",
      "vi": "Thứ tự bay hơi quy định bắt RAM (và trạng thái volatile khác) trước đĩa, vì bộ nhớ mất khi tắt nguồn và có thể chứa mã độc fileless, khóa và kết nối sống. Reboot hay xóa bất cứ gì trước sẽ phá hủy bằng chứng."
    }
  },

  {
    "app": "E",
    "sec": "e3",
    "secLabel": {
      "en": "E3 — Windows File System Essentials",
      "vi": "E3 — Hệ thống tệp Windows cốt lõi"
    },
    "q": {
      "en": "A very small file may be stored \"resident\" in NTFS, meaning:",
      "vi": "Một file rất nhỏ có thể được lưu \"resident\" trong NTFS, nghĩa là:"
    },
    "opts": [
      {
        "en": "Its data sits in the $MFT record, not in clusters",
        "vi": "Dữ liệu nằm trong bản ghi $MFT, không ở cluster"
      },
      {
        "en": "It has been individually encrypted",
        "vi": "Nó đã được mã hóa riêng lẻ"
      },
      {
        "en": "It is stored only in the pagefile",
        "vi": "Nó chỉ được lưu trong pagefile"
      },
      {
        "en": "It can no longer be recovered",
        "vi": "Nó không còn khôi phục được"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "When a file is small enough, NTFS keeps its data resident within the MFT entry itself (no external clusters). Larger files become non-resident, with the MFT holding run lists pointing to clusters. This matters for carving and for understanding where small artefacts live.",
      "vi": "Khi một file đủ nhỏ, NTFS giữ dữ liệu của nó resident ngay trong bản ghi MFT (không cần cluster ngoài). File lớn hơn trở thành non-resident, với MFT giữ run list trỏ tới các cluster. Điều này quan trọng cho carving và để hiểu artefact nhỏ nằm ở đâu."
    }
  },

  {
    "app": "E",
    "sec": "e3",
    "secLabel": {
      "en": "E3 — Windows File System Essentials",
      "vi": "E3 — Hệ thống tệp Windows cốt lõi"
    },
    "q": {
      "en": "\"File slack\" is forensically interesting because it can contain:",
      "vi": "\"File slack\" thú vị về forensic vì nó có thể chứa:"
    },
    "opts": [
      {
        "en": "Remnants of older data in the cluster slack",
        "vi": "Tàn dư dữ liệu cũ trong phần slack của cluster"
      },
      {
        "en": "The volume's encryption recovery key",
        "vi": "Khóa khôi phục mã hóa của volume"
      },
      {
        "en": "The currently running process list",
        "vi": "Danh sách tiến trình đang chạy"
      },
      {
        "en": "The disk's partition table entries",
        "vi": "Các mục trong bảng phân vùng của đĩa"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A file rarely fills its last cluster exactly; the leftover space (slack) may still hold fragments of older deleted data, which can be recovered. Understanding slack and unallocated space is central to disk-level recovery.",
      "vi": "Một file hiếm khi lấp đầy đúng cluster cuối; phần dư (slack) có thể vẫn giữ mảnh dữ liệu cũ đã xóa, có thể khôi phục. Hiểu slack và không gian chưa cấp phát là trọng tâm của khôi phục cấp đĩa."
    }
  },

  {
    "app": "E",
    "sec": "e3",
    "secLabel": {
      "en": "E3 — Windows File System Essentials",
      "vi": "E3 — Hệ thống tệp Windows cốt lõi"
    },
    "q": {
      "en": "When a file is \"deleted\" on NTFS (not wiped), what typically happens?",
      "vi": "Khi một file bị \"xóa\" trên NTFS (không bị wipe), điều gì thường xảy ra?"
    },
    "opts": [
      {
        "en": "The MFT entry and clusters free, but data persists",
        "vi": "Bản ghi MFT và cluster được giải phóng, dữ liệu vẫn còn"
      },
      {
        "en": "The bytes are immediately zeroed out",
        "vi": "Các byte bị zero hóa ngay"
      },
      {
        "en": "The whole disk is reformatted",
        "vi": "Toàn bộ đĩa bị format lại"
      },
      {
        "en": "The file's data is encrypted",
        "vi": "Dữ liệu của file bị mã hóa"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Deletion just flags the MFT record and clusters as available; the content remains recoverable until reused. This is why undeletion and carving work — and why secure wiping (or SSD TRIM) is needed to truly remove data.",
      "vi": "Xóa chỉ đánh dấu bản ghi MFT và cluster là khả dụng; nội dung vẫn khôi phục được tới khi bị tái dùng. Vì vậy undelete và carving hoạt động — và vì sao cần wipe an toàn (hoặc TRIM của SSD) để thực sự loại bỏ dữ liệu."
    }
  },

  {
    "app": "E",
    "sec": "e3",
    "secLabel": {
      "en": "E3 — Windows File System Essentials",
      "vi": "E3 — Hệ thống tệp Windows cốt lõi"
    },
    "q": {
      "en": "EFS (Encrypting File System) differs from BitLocker in that it:",
      "vi": "EFS (Encrypting File System) khác BitLocker ở chỗ nó:"
    },
    "opts": [
      {
        "en": "Encrypts files/folders per user, not the volume",
        "vi": "Mã hóa file/thư mục theo người dùng, không phải volume"
      },
      {
        "en": "Encrypts the entire disk at boot",
        "vi": "Mã hóa toàn đĩa lúc boot"
      },
      {
        "en": "Is actually a network protocol",
        "vi": "Thực ra là một giao thức mạng"
      },
      {
        "en": "Only works on Linux systems",
        "vi": "Chỉ chạy trên hệ thống Linux"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "EFS provides per-file/folder encryption tied to a user's key/certificate, whereas BitLocker is full-volume encryption. EFS-encrypted files need the user's key (or recovery agent) to read; understanding both affects acquisition and recovery planning.",
      "vi": "EFS cung cấp mã hóa theo từng file/thư mục gắn với khóa/chứng chỉ của người dùng, còn BitLocker là mã hóa toàn volume. File mã hóa EFS cần khóa của người dùng (hoặc recovery agent) để đọc; hiểu cả hai ảnh hưởng tới kế hoạch thu thập và khôi phục."
    }
  },

  {
    "app": "E",
    "sec": "e3",
    "secLabel": {
      "en": "E3 — Windows File System Essentials",
      "vi": "E3 — Hệ thống tệp Windows cốt lõi"
    },
    "q": {
      "en": "The NTFS $LogFile is useful in an investigation because it:",
      "vi": "$LogFile của NTFS hữu ích trong điều tra vì nó:"
    },
    "opts": [
      {
        "en": "Journals recent file-system transactions",
        "vi": "Ghi nhật ký giao dịch hệ thống tệp gần đây"
      },
      {
        "en": "It stores user account passwords",
        "vi": "Nó lưu mật khẩu tài khoản người dùng"
      },
      {
        "en": "It holds the system boot loader",
        "vi": "Nó chứa boot loader hệ thống"
      },
      {
        "en": "It encrypts the whole volume",
        "vi": "Nó mã hóa toàn bộ volume"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "$LogFile records metadata transactions for crash recovery, so it captures recent create/rename/delete operations that can corroborate timelines and reveal activity even after files are gone. The $UsnJrnl provides a longer-term change record.",
      "vi": "$LogFile ghi các giao dịch metadata để khôi phục sau sự cố, nên nó bắt được các thao tác tạo/đổi tên/xóa gần đây có thể đối chiếu timeline và lộ hoạt động kể cả sau khi file biến mất. $UsnJrnl cung cấp bản ghi thay đổi dài hạn hơn."
    }
  },

  {
    "app": "E",
    "sec": "e4",
    "secLabel": {
      "en": "E4 — Windows File Structures",
      "vi": "E4 — Cấu trúc tệp Windows"
    },
    "q": {
      "en": "A Windows .lnk (shortcut) file is forensically valuable because it can retain:",
      "vi": "Một file .lnk (shortcut) của Windows có giá trị forensic vì nó có thể giữ lại:"
    },
    "opts": [
      {
        "en": "The target path and times, even after deletion",
        "vi": "Đường dẫn đích và mốc thời gian, kể cả sau khi xóa"
      },
      {
        "en": "The logged-in user's account password",
        "vi": "Mật khẩu tài khoản người dùng đang đăng nhập"
      },
      {
        "en": "Live, currently-open network sockets",
        "vi": "Các socket mạng đang mở trực tiếp"
      },
      {
        "en": "The full contents of the target file",
        "vi": "Toàn bộ nội dung của file đích"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "LNK files embed the target's full path, size, MAC times, volume serial and sometimes the originating machine — evidence a file or removable device existed and was accessed, persisting after the target is gone. Auto-generated LNKs in Recent track user file access.",
      "vi": "File LNK nhúng đường dẫn đầy đủ của đích, kích thước, thời gian MAC, serial volume và đôi khi cả máy gốc — bằng chứng một file hay thiết bị tháo rời từng tồn tại và được truy cập, còn lại sau khi đích biến mất. LNK tự sinh trong Recent theo dõi việc truy cập file của người dùng."
    }
  },

  {
    "app": "E",
    "sec": "e4",
    "secLabel": {
      "en": "E4 — Windows File Structures",
      "vi": "E4 — Cấu trúc tệp Windows"
    },
    "q": {
      "en": "The Amcache.hve and Shimcache primarily help establish:",
      "vi": "Amcache.hve và Shimcache chủ yếu giúp xác lập:"
    },
    "opts": [
      {
        "en": "Program presence and execution",
        "vi": "Sự hiện diện và việc thực thi chương trình"
      },
      {
        "en": "The host's current network connections",
        "vi": "Các kết nối mạng hiện tại của máy"
      },
      {
        "en": "The user's saved email messages",
        "vi": "Các email đã lưu của người dùng"
      },
      {
        "en": "The list of installed Windows hotfixes",
        "vi": "Danh sách hotfix Windows đã cài"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Amcache records executables (with SHA-1 and paths) the system encountered; Shimcache (AppCompatCache) records executables evaluated for compatibility. Both are program-execution/presence artefacts — but execution must be corroborated (Prefetch is stronger evidence of actual run).",
      "vi": "Amcache ghi các file thực thi (kèm SHA-1 và đường dẫn) mà hệ thống gặp; Shimcache (AppCompatCache) ghi các file thực thi được đánh giá tương thích. Cả hai là artefact thực thi/hiện diện chương trình — nhưng việc thực thi cần được đối chiếu (Prefetch là bằng chứng chạy thật mạnh hơn)."
    }
  },

  {
    "app": "E",
    "sec": "e4",
    "secLabel": {
      "en": "E4 — Windows File Structures",
      "vi": "E4 — Cấu trúc tệp Windows"
    },
    "q": {
      "en": "When a file is sent to the Recycle Bin, the $I file stores:",
      "vi": "Khi một file được đưa vào Thùng rác, file $I lưu:"
    },
    "opts": [
      {
        "en": "Metadata: original path, deletion time and size",
        "vi": "Metadata: đường dẫn gốc, thời điểm xóa và kích thước"
      },
      {
        "en": "The actual recovered file content",
        "vi": "Nội dung thật của file được khôi phục"
      },
      {
        "en": "The deleted file's encryption key",
        "vi": "Khóa mã hóa của file đã xóa"
      },
      {
        "en": "A thumbnail preview of the file",
        "vi": "Ảnh thumbnail xem trước của file"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "In $Recycle.Bin, the $I... file holds metadata (original full path, deletion timestamp, size) and the matching $R... file holds the recovered content. Together they reveal what was deleted, from where and when — even if \"emptied\" remnants remain on disk.",
      "vi": "Trong $Recycle.Bin, file $I... giữ metadata (đường dẫn gốc đầy đủ, mốc thời gian xóa, kích thước) và file $R... khớp giữ nội dung khôi phục. Cùng nhau chúng lộ ra cái gì bị xóa, từ đâu và khi nào — kể cả khi đã \"empty\" mà tàn dư còn trên đĩa."
    }
  },

  {
    "app": "E",
    "sec": "e4",
    "secLabel": {
      "en": "E4 — Windows File Structures",
      "vi": "E4 — Cấu trúc tệp Windows"
    },
    "q": {
      "en": "Windows event logs (.evtx) are stored as:",
      "vi": "Nhật ký sự kiện Windows (.evtx) được lưu dưới dạng:"
    },
    "opts": [
      {
        "en": "Binary XML needing a parser",
        "vi": "Binary XML cần trình phân tích"
      },
      {
        "en": "Plain human-readable ASCII text",
        "vi": "Văn bản ASCII đọc được"
      },
      {
        "en": "A standard SQLite database",
        "vi": "Một cơ sở dữ liệu SQLite chuẩn"
      },
      {
        "en": "A Windows PE executable file",
        "vi": "Một file thực thi PE Windows"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Modern Windows logs use the binary XML .evtx format; you parse them with Event Viewer, wevtutil, or tools like EvtxECmd. They record security, system and application events crucial to host timelines. Attackers may clear them (event 1102) — itself an indicator.",
      "vi": "Log Windows hiện đại dùng định dạng binary XML .evtx; bạn phân tích bằng Event Viewer, wevtutil, hoặc công cụ như EvtxECmd. Chúng ghi sự kiện security, system và application thiết yếu cho timeline host. Kẻ tấn công có thể xóa chúng (sự kiện 1102) — bản thân điều đó là một chỉ dấu."
    }
  },

  {
    "app": "E",
    "sec": "e4",
    "secLabel": {
      "en": "E4 — Windows File Structures",
      "vi": "E4 — Cấu trúc tệp Windows"
    },
    "q": {
      "en": "Jump Lists in Windows are useful evidence of:",
      "vi": "Jump List trong Windows là bằng chứng hữu ích về:"
    },
    "opts": [
      {
        "en": "Recently accessed files and items per application",
        "vi": "File/mục được truy cập gần đây theo từng ứng dụng"
      },
      {
        "en": "The host's open network ports",
        "vi": "Các cổng mạng đang mở của máy"
      },
      {
        "en": "The currently installed device drivers",
        "vi": "Các driver thiết bị đang được cài"
      },
      {
        "en": "The applications set to auto-start",
        "vi": "Các ứng dụng được đặt tự khởi động"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Jump Lists (AutomaticDestinations/CustomDestinations) record files and items a user recently opened in each application, including paths and timestamps — valuable for reconstructing user activity and file access, similar in spirit to LNK and RecentDocs artefacts.",
      "vi": "Jump List (AutomaticDestinations/CustomDestinations) ghi các file và mục người dùng mở gần đây trong từng ứng dụng, gồm đường dẫn và mốc thời gian — giá trị để dựng lại hoạt động người dùng và truy cập file, tương tự tinh thần của LNK và RecentDocs."
    }
  },

  {
    "app": "E",
    "sec": "e4",
    "secLabel": {
      "en": "E4 — Windows File Structures",
      "vi": "E4 — Cấu trúc tệp Windows"
    },
    "q": {
      "en": "NTDS.dit on a domain controller is a high-value target because it contains:",
      "vi": "NTDS.dit trên một domain controller là mục tiêu giá trị cao vì nó chứa:"
    },
    "opts": [
      {
        "en": "The AD database of all domain password hashes",
        "vi": "CSDL AD chứa toàn bộ hash mật khẩu của domain"
      },
      {
        "en": "The system pagefile contents",
        "vi": "Nội dung pagefile của hệ thống"
      },
      {
        "en": "Only the current user's local hash",
        "vi": "Chỉ hash cục bộ của người dùng hiện tại"
      },
      {
        "en": "The domain's public DNS zone records",
        "vi": "Các bản ghi DNS công khai của domain"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "NTDS.dit stores all AD objects and the hashes for every domain account. Exfiltrating it (often with the SYSTEM hive) lets attackers extract credentials offline and forge access (e.g. golden tickets). Access to/copying of NTDS.dit is a critical IoC on a DC.",
      "vi": "NTDS.dit lưu mọi đối tượng AD và hash của mọi tài khoản miền. Trích nó (thường cùng hive SYSTEM) cho phép kẻ tấn công lấy credential offline và giả mạo truy cập (vd golden ticket). Việc truy cập/copy NTDS.dit là IoC nghiêm trọng trên một DC."
    }
  },

  {
    "app": "E",
    "sec": "e5",
    "secLabel": {
      "en": "E5 — Application File Structures",
      "vi": "E5 — Cấu trúc tệp ứng dụng"
    },
    "q": {
      "en": "A user mailbox in Outlook is typically stored locally as a:",
      "vi": "Hộp thư của người dùng trong Outlook thường được lưu cục bộ dưới dạng:"
    },
    "opts": [
      {
        "en": "PST or OST file",
        "vi": "File PST hoặc OST"
      },
      {
        "en": "A PE executable",
        "vi": "Một file thực thi PE"
      },
      {
        "en": "A registry hive",
        "vi": "Một hive registry"
      },
      {
        "en": "A prefetch file",
        "vi": "Một file prefetch"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Outlook stores mail in PST (portable/archive) or OST (cached copy of a server mailbox) files. Parsing them recovers emails, attachments, calendar and contacts — key in BEC and phishing investigations. Deleted items may still reside within the file.",
      "vi": "Outlook lưu thư trong file PST (di động/lưu trữ) hoặc OST (bản cache của hộp thư trên server). Phân tích chúng khôi phục email, file đính kèm, lịch và danh bạ — then chốt trong điều tra BEC và phishing. Mục đã xóa có thể vẫn còn trong file."
    }
  },

  {
    "app": "E",
    "sec": "e5",
    "secLabel": {
      "en": "E5 — Application File Structures",
      "vi": "E5 — Cấu trúc tệp ứng dụng"
    },
    "q": {
      "en": "When parsing a SQLite database (e.g. browser history), deleted records can sometimes be recovered from:",
      "vi": "Khi phân tích một cơ sở dữ liệu SQLite (vd lịch sử trình duyệt), các bản ghi đã xóa đôi khi khôi phục được từ:"
    },
    "opts": [
      {
        "en": "Unallocated pages and the WAL/journal",
        "vi": "Các trang chưa cấp phát và WAL/journal"
      },
      {
        "en": "The database's primary index only",
        "vi": "Chỉ chỉ mục chính của CSDL"
      },
      {
        "en": "The processor's L2/L3 cache",
        "vi": "Cache L2/L3 của CPU"
      },
      {
        "en": "The interface's MAC address table",
        "vi": "Bảng địa chỉ MAC của giao diện"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "SQLite marks deleted rows free but their data often lingers in freelist/unallocated pages, and the write-ahead log (WAL) or rollback journal may hold recent changes. Forensic SQLite tools recover this, useful for browser/app history that was \"cleared\".",
      "vi": "SQLite đánh dấu hàng đã xóa là trống nhưng dữ liệu của chúng thường còn trong trang freelist/chưa cấp phát, và write-ahead log (WAL) hoặc rollback journal có thể giữ thay đổi gần đây. Công cụ SQLite forensic khôi phục phần này, hữu ích cho lịch sử trình duyệt/ứng dụng đã \"xóa\"."
    }
  },

  {
    "app": "E",
    "sec": "e5",
    "secLabel": {
      "en": "E5 — Application File Structures",
      "vi": "E5 — Cấu trúc tệp ứng dụng"
    },
    "q": {
      "en": "Office (.docx) and many other formats are internally OLE/compound or ZIP containers. Why does this matter to an analyst?",
      "vi": "Office (.docx) và nhiều định dạng khác về bản chất là container OLE/compound hoặc ZIP. Vì sao điều này quan trọng với analyst?"
    },
    "opts": [
      {
        "en": "Unpack them to inspect macros without opening",
        "vi": "Giải nén để xem macro mà không cần mở"
      },
      {
        "en": "They simply cannot contain malware",
        "vi": "Chúng đơn giản không thể chứa mã độc"
      },
      {
        "en": "They are always fully encrypted",
        "vi": "Chúng luôn được mã hóa hoàn toàn"
      },
      {
        "en": "They run only on Linux systems",
        "vi": "Chúng chỉ chạy trên hệ thống Linux"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Because these are containers, tools (oletools/olevba, unzip) extract macros, embedded OLE objects, DDE fields and external relationships for safe static inspection — avoiding the risk of opening the document in the application and triggering the payload.",
      "vi": "Vì là container, công cụ (oletools/olevba, unzip) trích macro, đối tượng OLE nhúng, trường DDE và quan hệ ngoài để soi tĩnh an toàn — tránh rủi ro mở tài liệu trong ứng dụng và kích hoạt payload."
    }
  },

  {
    "app": "E",
    "sec": "e6",
    "secLabel": {
      "en": "E6 — Windows Registry Essentials",
      "vi": "E6 — Registry Windows cốt lõi"
    },
    "q": {
      "en": "The UserAssist registry key records program-execution evidence, but values are:",
      "vi": "Khóa registry UserAssist ghi bằng chứng thực thi chương trình, nhưng các giá trị bị:"
    },
    "opts": [
      {
        "en": "ROT13-encoded, with run counts and last-run times",
        "vi": "Mã hóa ROT13, kèm số lần chạy và thời gian chạy cuối"
      },
      {
        "en": "Encrypted with a strong AES key",
        "vi": "Mã hóa bằng một khóa AES mạnh"
      },
      {
        "en": "Stored as embedded bitmap images",
        "vi": "Lưu dưới dạng ảnh bitmap nhúng"
      },
      {
        "en": "Compressed inside a ZIP archive",
        "vi": "Nén bên trong một archive ZIP"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "UserAssist (in NTUSER.DAT) tracks GUI program launches with run counts and timestamps, with the program names ROT13-\"obscured\" (trivially decoded). It is strong evidence a user interactively ran a program, complementing Prefetch and Jump Lists.",
      "vi": "UserAssist (trong NTUSER.DAT) theo dõi việc khởi chạy chương trình GUI kèm số lần chạy và mốc thời gian, với tên chương trình bị \"che\" bằng ROT13 (giải mã dễ dàng). Đây là bằng chứng mạnh người dùng đã chạy chương trình một cách tương tác, bổ trợ Prefetch và Jump List."
    }
  },

  {
    "app": "E",
    "sec": "e6",
    "secLabel": {
      "en": "E6 — Windows Registry Essentials",
      "vi": "E6 — Registry Windows cốt lõi"
    },
    "q": {
      "en": "ShellBags are useful because they record:",
      "vi": "ShellBag hữu ích vì chúng ghi lại:"
    },
    "opts": [
      {
        "en": "Folders a user browsed and the view settings",
        "vi": "Các thư mục người dùng đã duyệt và thiết lập hiển thị"
      },
      {
        "en": "The user's account password hash",
        "vi": "Hash mật khẩu tài khoản người dùng"
      },
      {
        "en": "The host's open TCP/UDP ports",
        "vi": "Các cổng TCP/UDP đang mở của máy"
      },
      {
        "en": "The files contained inside each folder",
        "vi": "Các file bên trong mỗi thư mục"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "ShellBags persist evidence of folder access and window/view preferences, proving a user navigated to specific locations — even folders since deleted or on removed external media. They are valuable for showing knowledge of and interaction with data.",
      "vi": "ShellBag lưu bằng chứng truy cập thư mục và tùy chọn cửa sổ/hiển thị, chứng minh người dùng đã điều hướng tới các vị trí cụ thể — kể cả thư mục đã xóa hoặc trên phương tiện ngoài đã tháo. Chúng giá trị để cho thấy sự biết tới và tương tác với dữ liệu."
    }
  },

  {
    "app": "E",
    "sec": "e6",
    "secLabel": {
      "en": "E6 — Windows Registry Essentials",
      "vi": "E6 — Registry Windows cốt lõi"
    },
    "q": {
      "en": "Which hive holds machine-wide service and driver configuration?",
      "vi": "Hive nào giữ cấu hình service và driver cấp toàn máy?"
    },
    "opts": [
      {
        "en": "SYSTEM",
        "vi": "SYSTEM"
      },
      {
        "en": "NTUSER.DAT",
        "vi": "NTUSER.DAT"
      },
      {
        "en": "UsrClass.dat",
        "vi": "UsrClass.dat"
      },
      {
        "en": "DEFAULT only",
        "vi": "Chỉ DEFAULT"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "The SYSTEM hive (HKLM\\SYSTEM) holds CurrentControlSet with Services, drivers, USBSTOR and more. SOFTWARE holds installed-app config; SAM holds local accounts; NTUSER.DAT/UsrClass.dat are per-user. Knowing hive roles guides where to look for persistence and device history.",
      "vi": "Hive SYSTEM (HKLM\\SYSTEM) giữ CurrentControlSet với Services, driver, USBSTOR và hơn nữa. SOFTWARE giữ cấu hình ứng dụng đã cài; SAM giữ tài khoản cục bộ; NTUSER.DAT/UsrClass.dat theo từng người dùng. Biết vai trò hive định hướng nơi tìm persistence và lịch sử thiết bị."
    }
  },

  {
    "app": "E",
    "sec": "e6",
    "secLabel": {
      "en": "E6 — Windows Registry Essentials",
      "vi": "E6 — Registry Windows cốt lõi"
    },
    "q": {
      "en": "The \"LastWrite\" time of a registry key is analogous to:",
      "vi": "Thời gian \"LastWrite\" của một khóa registry tương tự với:"
    },
    "opts": [
      {
        "en": "A key's last-modified time",
        "vi": "Thời gian sửa-cuối của khóa"
      },
      {
        "en": "Only the key's original creation date",
        "vi": "Chỉ ngày tạo gốc của khóa"
      },
      {
        "en": "The user's most recent logon time",
        "vi": "Thời gian đăng nhập gần nhất của người dùng"
      },
      {
        "en": "The processor's clock speed",
        "vi": "Tốc độ xung của bộ xử lý"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Each registry key has a LastWrite timestamp showing when it (or its values) last changed — useful for timelining persistence additions, configuration changes and malware activity. Only keys (not individual values) carry this timestamp.",
      "vi": "Mỗi khóa registry có mốc thời gian LastWrite cho biết khi nó (hoặc các giá trị của nó) thay đổi lần cuối — hữu ích để dựng timeline cho việc thêm persistence, thay đổi cấu hình và hoạt động mã độc. Chỉ khóa (không phải từng giá trị) mang mốc thời gian này."
    }
  },

  {
    "app": "E",
    "sec": "e6",
    "secLabel": {
      "en": "E6 — Windows Registry Essentials",
      "vi": "E6 — Registry Windows cốt lõi"
    },
    "q": {
      "en": "Beyond Run keys, which is ALSO a common registry-based persistence location?",
      "vi": "Ngoài khóa Run, vị trí nào CŨNG là nơi persistence dựa trên registry phổ biến?"
    },
    "opts": [
      {
        "en": "Services, Winlogon and Image File Execution Options",
        "vi": "Services, Winlogon và Image File Execution Options"
      },
      {
        "en": "The TypedURLs and RecentDocs MRU keys",
        "vi": "Các khóa MRU TypedURLs và RecentDocs"
      },
      {
        "en": "The MountedDevices and USBSTOR keys",
        "vi": "Các khóa MountedDevices và USBSTOR"
      },
      {
        "en": "The TimeZoneInformation key",
        "vi": "Khóa TimeZoneInformation"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Persistence hides in many keys: Services, Winlogon Shell/Userinit, Image File Execution Options (debugger hijack), AppInit_DLLs, scheduled tasks and more. Autoruns enumerates them. Checking only Run keys misses these stealthier mechanisms.",
      "vi": "Persistence ẩn ở nhiều khóa: Services, Winlogon Shell/Userinit, Image File Execution Options (chiếm debugger), AppInit_DLLs, scheduled task và hơn nữa. Autoruns liệt kê chúng. Chỉ kiểm tra khóa Run sẽ bỏ sót các cơ chế ẩn hơn này."
    }
  },

  {
    "app": "E",
    "sec": "e7",
    "secLabel": {
      "en": "E7 — Identifying Suspect Files",
      "vi": "E7 — Nhận diện file nghi vấn"
    },
    "q": {
      "en": "A known-good hash set such as the NSRL is used during triage to:",
      "vi": "Một bộ hash known-good như NSRL được dùng khi triage để:"
    },
    "opts": [
      {
        "en": "Filter out known OS/app files to focus on unknowns",
        "vi": "Lọc bỏ file OS/ứng dụng đã biết để tập trung vào file lạ"
      },
      {
        "en": "Detect known-malware samples by their hash",
        "vi": "Phát hiện mẫu malware đã biết qua hash"
      },
      {
        "en": "Verify the disk image's integrity hash",
        "vi": "Xác minh hash toàn vẹn của image đĩa"
      },
      {
        "en": "Recover deleted files from their hashes",
        "vi": "Khôi phục file đã xóa từ hash của chúng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Hash sets of known-good files (NSRL) let tools whitelist standard binaries, drastically reducing the volume to review so analysts concentrate on unrecognised/suspicious files. Known-bad hash sets do the inverse, flagging known malware.",
      "vi": "Bộ hash của file known-good (NSRL) cho phép công cụ whitelist các binary chuẩn, giảm mạnh khối lượng cần xem để analyst tập trung vào file lạ/đáng ngờ. Bộ hash known-bad làm ngược lại, gắn cờ mã độc đã biết."
    }
  },

  {
    "app": "E",
    "sec": "e7",
    "secLabel": {
      "en": "E7 — Identifying Suspect Files",
      "vi": "E7 — Nhận diện file nghi vấn"
    },
    "q": {
      "en": "A file named \"svchost.exe\" found in C:\\Users\\Public is suspicious mainly because:",
      "vi": "Một file tên \"svchost.exe\" tìm thấy trong C:\\Users\\Public đáng ngờ chủ yếu vì:"
    },
    "opts": [
      {
        "en": "The real svchost.exe is in System32, so this path is wrong",
        "vi": "svchost.exe thật nằm ở System32, nên đường dẫn này sai"
      },
      {
        "en": "The name svchost.exe is always malware",
        "vi": "Tên svchost.exe luôn là mã độc"
      },
      {
        "en": "Public folders cannot hold any files",
        "vi": "Thư mục Public không thể chứa file nào"
      },
      {
        "en": "The file name itself is encrypted",
        "vi": "Bản thân tên file đã bị mã hóa"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Malware often masquerades using legitimate system names in wrong locations (svchost.exe outside System32, or misspellings like scvhost.exe). Verify path, digital signature and hash against the genuine binary. Name alone is not enough — context (location, signer) is key.",
      "vi": "Mã độc thường giả dạng bằng tên hệ thống hợp lệ ở vị trí sai (svchost.exe ngoài System32, hoặc viết sai như scvhost.exe). Hãy xác minh đường dẫn, chữ ký số và hash so với binary thật. Chỉ tên là không đủ — bối cảnh (vị trí, người ký) là then chốt."
    },
    "note": {
      "en": "Verify system binaries by path + signature + hash, not name alone.",
      "vi": "Xác minh binary hệ thống bằng đường dẫn + chữ ký + hash, không chỉ tên."
    }
  },

  {
    "app": "E",
    "sec": "e7",
    "secLabel": {
      "en": "E7 — Identifying Suspect Files",
      "vi": "E7 — Nhận diện file nghi vấn"
    },
    "q": {
      "en": "A valid Authenticode digital signature on an executable tells you:",
      "vi": "Một chữ ký số Authenticode hợp lệ trên một file thực thi cho bạn biết:"
    },
    "opts": [
      {
        "en": "Who signed it and that it is unaltered",
        "vi": "Ai ký và rằng nó không bị sửa"
      },
      {
        "en": "That the file is guaranteed safe",
        "vi": "Rằng file chắc chắn an toàn"
      },
      {
        "en": "That the file is definitely malware",
        "vi": "Rằng file chắc chắn là mã độc"
      },
      {
        "en": "The signing user's account password",
        "vi": "Mật khẩu tài khoản của người ký"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A signature provides integrity and publisher identity, but signed malware exists (stolen/abused certs, or signed legitimate-but-abusable tools). Treat signing as one trust signal: check the signer, validity and revocation, and still judge behaviour.",
      "vi": "Chữ ký cung cấp tính toàn vẹn và danh tính nhà phát hành, nhưng mã độc có chữ ký vẫn tồn tại (cert bị trộm/lạm dụng, hoặc công cụ hợp lệ-nhưng-có-thể-lạm-dụng có ký). Hãy xem ký như một tín hiệu tin cậy: kiểm tra người ký, hiệu lực và thu hồi, và vẫn phán đoán theo hành vi."
    }
  },

  {
    "app": "E",
    "sec": "e7",
    "secLabel": {
      "en": "E7 — Identifying Suspect Files",
      "vi": "E7 — Nhận diện file nghi vấn"
    },
    "q": {
      "en": "An \"imphash\" (import hash) helps cluster malware samples by:",
      "vi": "Một \"imphash\" (hash của bảng import) giúp gom nhóm mẫu mã độc bằng cách:"
    },
    "opts": [
      {
        "en": "Hashing the import table to group binaries",
        "vi": "Băm bảng import để gom các binary"
      },
      {
        "en": "Hashing the entire disk image",
        "vi": "Băm toàn bộ image đĩa"
      },
      {
        "en": "Recording all network traffic",
        "vi": "Ghi lại toàn bộ lưu lượng mạng"
      },
      {
        "en": "Measuring the process's CPU usage",
        "vi": "Đo mức dùng CPU của tiến trình"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "imphash fingerprints a PE's import table (functions and order), so samples built from the same code/toolchain often share an imphash even when content differs — useful for clustering related malware where exact hashes differ. Combine with fuzzy hashing and YARA.",
      "vi": "imphash fingerprint bảng import của một PE (hàm và thứ tự), nên các mẫu dựng từ cùng mã/toolchain thường chung imphash dù nội dung khác — hữu ích để gom mã độc liên quan khi hash chính xác khác nhau. Kết hợp với fuzzy hashing và YARA."
    }
  },

  {
    "app": "E",
    "sec": "e8",
    "secLabel": {
      "en": "E8 — Storage Media",
      "vi": "E8 — Phương tiện lưu trữ"
    },
    "q": {
      "en": "In RAID 5, what happens to the data if a single disk fails?",
      "vi": "Trong RAID 5, dữ liệu ra sao nếu một đĩa hỏng?"
    },
    "opts": [
      {
        "en": "It survives via distributed parity rebuild",
        "vi": "Vẫn còn nhờ tái dựng bằng parity phân tán"
      },
      {
        "en": "It is lost immediately and entirely",
        "vi": "Mất ngay lập tức và hoàn toàn"
      },
      {
        "en": "It doubles in total stored size",
        "vi": "Tăng gấp đôi tổng dung lượng lưu"
      },
      {
        "en": "It becomes automatically encrypted",
        "vi": "Trở nên tự động mã hóa"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "RAID 5 stripes data with distributed parity and tolerates one disk failure (rebuild from parity). RAID 0 stripes with no redundancy (any failure = loss); RAID 1 mirrors; RAID 10 mirrors+stripes. For acquisition you often must reconstruct the array to read it.",
      "vi": "RAID 5 chia dữ liệu (stripe) với parity phân tán và chịu được một đĩa hỏng (rebuild từ parity). RAID 0 stripe không dự phòng (hỏng bất kỳ = mất); RAID 1 mirror; RAID 10 mirror+stripe. Khi thu thập, thường phải tái dựng mảng để đọc được."
    }
  },

  {
    "app": "E",
    "sec": "e8",
    "secLabel": {
      "en": "E8 — Storage Media",
      "vi": "E8 — Phương tiện lưu trữ"
    },
    "q": {
      "en": "Why does wear-levelling on SSDs complicate forensics?",
      "vi": "Vì sao wear-levelling trên SSD làm phức tạp forensic?"
    },
    "opts": [
      {
        "en": "The controller remaps blocks, hiding old data",
        "vi": "Controller ánh xạ lại khối, giấu dữ liệu cũ"
      },
      {
        "en": "It encrypts all data by law",
        "vi": "Nó mã hóa mọi dữ liệu theo luật"
      },
      {
        "en": "It makes the disk fully read-only",
        "vi": "Nó làm đĩa hoàn toàn chỉ-đọc"
      },
      {
        "en": "It deletes the partition table",
        "vi": "Nó xóa bảng phân vùng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Wear-levelling spreads writes across physical cells and the controller abstracts this, so old versions of data may sit in cells not reachable via normal logical addressing — and TRIM/garbage collection may erase deleted data. This makes SSD recovery less predictable than HDDs.",
      "vi": "Wear-levelling rải các lần ghi qua các cell vật lý và controller trừu tượng hóa điều này, nên phiên bản cũ của dữ liệu có thể nằm ở các cell không tới được qua địa chỉ logic thường — và TRIM/garbage collection có thể xóa dữ liệu đã xóa. Điều này khiến khôi phục SSD kém dự đoán hơn HDD."
    }
  },

  {
    "app": "E",
    "sec": "e8",
    "secLabel": {
      "en": "E8 — Storage Media",
      "vi": "E8 — Phương tiện lưu trữ"
    },
    "q": {
      "en": "An ATA hard-disk password set in firmware (Security Feature Set) affects acquisition because it:",
      "vi": "Một mật khẩu ổ cứng ATA đặt trong firmware (Security Feature Set) ảnh hưởng tới việc thu thập vì nó:"
    },
    "opts": [
      {
        "en": "It can lock the drive until it is unlocked",
        "vi": "Nó có thể khóa ổ cho đến khi được mở khóa"
      },
      {
        "en": "It silently alters data during imaging",
        "vi": "Nó âm thầm sửa dữ liệu khi imaging"
      },
      {
        "en": "It hides a portion of the sectors",
        "vi": "Nó giấu một phần các sector"
      },
      {
        "en": "It prevents the image from being hashed",
        "vi": "Nó ngăn việc băm image"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "An ATA security password can put the drive in a locked state that blocks reads/writes until the password is supplied. This is distinct from data encryption; you may need the password or vendor tooling to unlock the drive before imaging. Plan for it during scoping.",
      "vi": "Mật khẩu bảo mật ATA có thể đặt ổ vào trạng thái khóa, chặn đọc/ghi cho tới khi nhập mật khẩu. Khác với mã hóa dữ liệu; bạn có thể cần mật khẩu hoặc công cụ của hãng để mở khóa ổ trước khi tạo image. Hãy lên kế hoạch khi scoping."
    }
  },

  {
    "app": "E",
    "sec": "e8",
    "secLabel": {
      "en": "E8 — Storage Media",
      "vi": "E8 — Phương tiện lưu trữ"
    },
    "q": {
      "en": "Acquiring data from a NAS device typically requires consideration of:",
      "vi": "Thu thập dữ liệu từ một thiết bị NAS thường đòi hỏi cân nhắc:"
    },
    "opts": [
      {
        "en": "Its file system/RAID layout and how to acquire it",
        "vi": "Bố cục file system/RAID của nó và cách thu thập"
      },
      {
        "en": "Only the device's firmware version",
        "vi": "Chỉ phiên bản firmware của thiết bị"
      },
      {
        "en": "Just the number of drive bays",
        "vi": "Chỉ số khay ổ đĩa"
      },
      {
        "en": "Only its assigned network IP address",
        "vi": "Chỉ địa chỉ IP mạng được gán"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "NAS units often use Linux-based filesystems and RAID across multiple disks, so you decide between imaging each disk and reconstructing the array, or a live/logical acquisition over the network — each with integrity and completeness trade-offs.",
      "vi": "NAS thường dùng hệ thống tệp nền Linux và RAID trên nhiều đĩa, nên bạn phải chọn giữa image từng đĩa rồi tái dựng mảng, hoặc thu thập live/logic qua mạng — mỗi cách có đánh đổi về toàn vẹn và đầy đủ."
    }
  },

  {
    "app": "E",
    "sec": "e9",
    "secLabel": {
      "en": "E9 — Memory Analysis",
      "vi": "E9 — Phân tích bộ nhớ"
    },
    "q": {
      "en": "In Volatility, why might psscan reveal a process that pslist does not?",
      "vi": "Trong Volatility, vì sao psscan có thể lộ một tiến trình mà pslist không thấy?"
    },
    "opts": [
      {
        "en": "pslist walks the linked list; psscan scans pool",
        "vi": "pslist đi theo danh sách liên kết; psscan quét pool"
      },
      {
        "en": "psscan is just a slower version",
        "vi": "psscan chỉ là phiên bản chậm hơn"
      },
      {
        "en": "pslist only ever shows drivers",
        "vi": "pslist chỉ hiện driver"
      },
      {
        "en": "The two plugins always agree",
        "vi": "Hai plugin luôn khớp nhau"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "pslist follows the linked list of active processes, which a rootkit can unlink (DKOM) to hide a process. psscan carves process objects (EPROCESS) directly from pool memory, exposing hidden or terminated processes. Comparing the two is a classic hidden-process detection.",
      "vi": "pslist đi theo danh sách liên kết của tiến trình đang hoạt động, mà rootkit có thể gỡ liên kết (DKOM) để ẩn một tiến trình. psscan carve các đối tượng tiến trình (EPROCESS) trực tiếp từ pool bộ nhớ, lộ tiến trình ẩn hoặc đã kết thúc. So sánh hai cái là cách phát hiện tiến trình ẩn kinh điển."
    }
  },

  {
    "app": "E",
    "sec": "e9",
    "secLabel": {
      "en": "E9 — Memory Analysis",
      "vi": "E9 — Phân tích bộ nhớ"
    },
    "q": {
      "en": "The Volatility \"malfind\" plugin primarily looks for:",
      "vi": "Plugin \"malfind\" của Volatility chủ yếu tìm:"
    },
    "opts": [
      {
        "en": "Injected code in private RWX memory",
        "vi": "Mã được tiêm trong vùng nhớ RWX riêng"
      },
      {
        "en": "Open network sockets and ports",
        "vi": "Các socket và cổng mạng đang mở"
      },
      {
        "en": "Cached credentials in LSASS memory",
        "vi": "Thông tin đăng nhập cache trong bộ nhớ LSASS"
      },
      {
        "en": "Hidden file entries in the MFT",
        "vi": "Các mục file ẩn trong MFT"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "malfind flags suspicious memory: private regions marked executable+writable with no mapped file and PE-like headers — typical of process injection/shellcode. It is a first stop for finding injected/hollowed code, complemented by ldrmodules and dlllist.",
      "vi": "malfind gắn cờ bộ nhớ đáng ngờ: các vùng riêng được đánh dấu vừa thực thi vừa ghi, không có file ánh xạ và có header giống PE — đặc trưng của process injection/shellcode. Đây là điểm dừng đầu tiên để tìm mã được tiêm/hollow, bổ trợ bởi ldrmodules và dlllist."
    }
  },

  {
    "app": "E",
    "sec": "e9",
    "secLabel": {
      "en": "E9 — Memory Analysis",
      "vi": "E9 — Phân tích bộ nhớ"
    },
    "q": {
      "en": "Which Volatility plugin would you use to list active network connections from a memory image?",
      "vi": "Plugin Volatility nào bạn dùng để liệt kê kết nối mạng đang hoạt động từ một image bộ nhớ?"
    },
    "opts": [
      {
        "en": "netscan",
        "vi": "netscan"
      },
      {
        "en": "hashdump",
        "vi": "hashdump"
      },
      {
        "en": "cmdline",
        "vi": "cmdline"
      },
      {
        "en": "hivelist",
        "vi": "hivelist"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "netscan recovers network artefacts (sockets/connections, owning PIDs) from memory — revealing C2 endpoints even if the live OS hid them. hashdump extracts credential hashes, cmdline shows process command lines, hivelist locates registry hives in memory.",
      "vi": "netscan khôi phục artefact mạng (socket/kết nối, PID sở hữu) từ bộ nhớ — lộ endpoint C2 kể cả khi OS live giấu chúng. hashdump trích hash credential, cmdline hiện dòng lệnh tiến trình, hivelist định vị các hive registry trong bộ nhớ."
    }
  },

  {
    "app": "E",
    "sec": "e9",
    "secLabel": {
      "en": "E9 — Memory Analysis",
      "vi": "E9 — Phân tích bộ nhớ"
    },
    "q": {
      "en": "A parent/child anomaly in memory — e.g. winword.exe spawning cmd.exe then powershell.exe — suggests:",
      "vi": "Một bất thường cha/con trong bộ nhớ — vd winword.exe sinh cmd.exe rồi powershell.exe — gợi ý:"
    },
    "opts": [
      {
        "en": "A malicious document running follow-on commands",
        "vi": "Một tài liệu độc hại chạy các lệnh tiếp theo"
      },
      {
        "en": "Perfectly normal Office behaviour",
        "vi": "Hành vi Office hoàn toàn bình thường"
      },
      {
        "en": "An ordinary DNS name lookup",
        "vi": "Một truy vấn tên DNS bình thường"
      },
      {
        "en": "A standard software-update routine",
        "vi": "Một quy trình cập nhật phần mềm chuẩn"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Office apps spawning command interpreters is a hallmark of malicious macro/exploit execution. The process tree (pstree) revealing such unusual parent/child chains is a high-confidence indicator that warrants pulling command lines and injected code.",
      "vi": "Ứng dụng Office sinh ra trình thông dịch lệnh là dấu hiệu của thực thi macro/exploit độc hại. Cây tiến trình (pstree) lộ ra chuỗi cha/con bất thường đó là chỉ dấu độ tin cậy cao, đáng để trích dòng lệnh và mã được tiêm."
    },
    "note": {
      "en": "office→cmd/powershell is a classic malicious-document tell.",
      "vi": "office→cmd/powershell là dấu hiệu tài liệu độc hại kinh điển."
    }
  },

  {
    "app": "E",
    "sec": "e9",
    "secLabel": {
      "en": "E9 — Memory Analysis",
      "vi": "E9 — Phân tích bộ nhớ"
    },
    "q": {
      "en": "Encryption keys or passphrases that are hard to find on disk may be recoverable:",
      "vi": "Khóa mã hóa hay passphrase khó tìm trên đĩa có thể khôi phục được:"
    },
    "opts": [
      {
        "en": "From a memory image, where keys reside in use",
        "vi": "Từ một image bộ nhớ, nơi khóa nằm khi đang dùng"
      },
      {
        "en": "From the disk's slack space only",
        "vi": "Chỉ từ phần slack space của đĩa"
      },
      {
        "en": "From the network capture alone",
        "vi": "Chỉ từ bản bắt gói mạng"
      },
      {
        "en": "They can never be recovered at all",
        "vi": "Không bao giờ khôi phục được"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "To use a key, software must load it into memory, so RAM captures can yield BitLocker/EFS keys, passwords and decrypted data not accessible from a dead disk. This is a strong reason to capture memory before shutdown, especially with full-disk encryption.",
      "vi": "Để dùng một khóa, phần mềm phải nạp nó vào bộ nhớ, nên ảnh chụp RAM có thể cho khóa BitLocker/EFS, mật khẩu và dữ liệu đã giải mã mà đĩa tắt không truy cập được. Đây là lý do mạnh để bắt bộ nhớ trước khi tắt máy, nhất là với mã hóa toàn đĩa."
    }
  },

  {
    "app": "E",
    "sec": "e10",
    "secLabel": {
      "en": "E10 — Infection Vectors",
      "vi": "E10 — Vector lây nhiễm"
    },
    "q": {
      "en": "Attackers increasingly deliver payloads inside ISO/IMG container files because:",
      "vi": "Kẻ tấn công ngày càng phát tán payload trong file container ISO/IMG vì:"
    },
    "opts": [
      {
        "en": "Mounting the container bypasses Mark-of-the-Web warnings",
        "vi": "Mount container vượt qua cảnh báo Mark-of-the-Web"
      },
      {
        "en": "ISO files cannot contain executables",
        "vi": "File ISO không thể chứa file thực thi"
      },
      {
        "en": "They are always encrypted by default",
        "vi": "Chúng luôn được mã hóa mặc định"
      },
      {
        "en": "They only ever run in the cloud",
        "vi": "Chúng chỉ chạy trên đám mây"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Files extracted from a mounted ISO/IMG historically did not inherit the Mark-of-the-Web (Zone.Identifier), so SmartScreen and Office Protected View did not flag them — a popular delivery trick. Recognising container-based delivery and MOTW handling is key in vector analysis.",
      "vi": "File trích từ một ISO/IMG đã mount trước đây không thừa hưởng Mark-of-the-Web (Zone.Identifier), nên SmartScreen và Office Protected View không gắn cờ chúng — một mẹo phát tán phổ biến. Nhận diện phát tán dựa trên container và cách xử lý MOTW là then chốt trong phân tích vector."
    }
  },

  {
    "app": "E",
    "sec": "e10",
    "secLabel": {
      "en": "E10 — Infection Vectors",
      "vi": "E10 — Vector lây nhiễm"
    },
    "q": {
      "en": "mshta.exe, regsvr32.exe and rundll32.exe are often abused as:",
      "vi": "mshta.exe, regsvr32.exe và rundll32.exe thường bị lạm dụng làm:"
    },
    "opts": [
      {
        "en": "Living-off-the-land binaries that look legit",
        "vi": "LOLBins trông hợp lệ"
      },
      {
        "en": "Built-in antivirus scanning engines",
        "vi": "Engine quét antivirus tích hợp"
      },
      {
        "en": "Forensic disk-imaging utilities",
        "vi": "Tiện ích tạo image đĩa forensic"
      },
      {
        "en": "Recursive DNS resolver servers",
        "vi": "Máy chủ resolver DNS đệ quy"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "LOLBins are signed, built-in Windows tools attackers use to run scripts/remote payloads (e.g. regsvr32 \"Squiblydoo\", mshta executing HTA, rundll32 calling exports) to evade application allowlists and blend in. Spotting unusual LOLBin command lines is high-value detection.",
      "vi": "LOLBins là công cụ Windows tích hợp, đã ký mà kẻ tấn công dùng để chạy script/payload từ xa (vd regsvr32 \"Squiblydoo\", mshta chạy HTA, rundll32 gọi export) để né allowlist ứng dụng và hòa lẫn. Phát hiện dòng lệnh LOLBin bất thường là phát hiện giá trị cao."
    }
  },

  {
    "app": "E",
    "sec": "e10",
    "secLabel": {
      "en": "E10 — Infection Vectors",
      "vi": "E10 — Vector lây nhiễm"
    },
    "q": {
      "en": "A spear-phishing email with a password-protected ZIP containing an .exe is designed to:",
      "vi": "Một email spear-phishing kèm ZIP có mật khẩu chứa một .exe được thiết kế để:"
    },
    "opts": [
      {
        "en": "Evade gateway AV that can't open the encrypted archive",
        "vi": "Né AV gateway vốn không mở được archive mã hóa"
      },
      {
        "en": "Speed up the email's delivery time",
        "vi": "Tăng tốc thời gian gửi email"
      },
      {
        "en": "Compress the whole network link",
        "vi": "Nén toàn bộ liên kết mạng"
      },
      {
        "en": "Encrypt the receiving mail server",
        "vi": "Mã hóa máy chủ mail nhận"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Password-protecting the archive prevents perimeter AV/sandbox from inspecting the contents, while the email body supplies the password to the victim — a common delivery evasion. Detection relies on user reporting, behaviour after extraction, and policies on encrypted attachments.",
      "vi": "Đặt mật khẩu cho archive ngăn AV/sandbox tại biên kiểm tra nội dung, trong khi thân email cung cấp mật khẩu cho nạn nhân — một cách né phát tán phổ biến. Phát hiện dựa vào người dùng báo cáo, hành vi sau khi giải nén, và chính sách về file đính kèm mã hóa."
    }
  },

  {
    "app": "E",
    "sec": "e11",
    "secLabel": {
      "en": "E11 — Malware Behaviours & Anti-Forensics",
      "vi": "E11 — Hành vi mã độc & chống điều tra"
    },
    "q": {
      "en": "A \"wiper\" or secure-deletion tool used by an attacker is intended to:",
      "vi": "Một \"wiper\" hay công cụ xóa an toàn mà kẻ tấn công dùng nhằm:"
    },
    "opts": [
      {
        "en": "Overwrite data so it cannot be recovered",
        "vi": "Ghi đè dữ liệu để không thể khôi phục"
      },
      {
        "en": "Encrypt files and demand a ransom",
        "vi": "Mã hóa file và đòi tiền chuộc"
      },
      {
        "en": "Hide data inside other files",
        "vi": "Giấu dữ liệu bên trong file khác"
      },
      {
        "en": "Compress data before exfiltration",
        "vi": "Nén dữ liệu trước khi đánh cắp"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Unlike normal deletion (which leaves recoverable data), wiping overwrites content (and sometimes metadata) to defeat recovery — anti-forensics, and in destructive attacks, to cause damage. Evidence of wiping tools/patterns is itself an important finding.",
      "vi": "Khác với xóa thường (vẫn còn dữ liệu khôi phục được), wiping ghi đè nội dung (và đôi khi metadata) để vô hiệu khôi phục — chống điều tra, và trong tấn công phá hoại, để gây thiệt hại. Bằng chứng về công cụ/mẫu wiping bản thân là một phát hiện quan trọng."
    }
  },

  {
    "app": "E",
    "sec": "e11",
    "secLabel": {
      "en": "E11 — Malware Behaviours & Anti-Forensics",
      "vi": "E11 — Hành vi mã độc & chống điều tra"
    },
    "q": {
      "en": "Malware disabling Windows Defender, clearing event logs and deleting Prefetch is exhibiting:",
      "vi": "Mã độc tắt Windows Defender, xóa event log và xóa Prefetch đang thể hiện:"
    },
    "opts": [
      {
        "en": "Anti-forensic / defense-evasion behaviour",
        "vi": "Hành vi chống điều tra / né phòng thủ"
      },
      {
        "en": "Routine scheduled maintenance",
        "vi": "Bảo trì theo lịch định kỳ"
      },
      {
        "en": "A simple hardware malfunction",
        "vi": "Một trục trặc phần cứng đơn giản"
      },
      {
        "en": "An ordinary DNS record change",
        "vi": "Một thay đổi bản ghi DNS thông thường"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Tampering with security tooling, clearing logs (event 1102) and removing execution artefacts are deliberate anti-forensic/defense-evasion actions. Their occurrence — and the gaps they create — are themselves indicators; corroborate with surviving centralised logs and memory.",
      "vi": "Can thiệp công cụ bảo mật, xóa log (sự kiện 1102) và loại bỏ artefact thực thi là các hành động chống điều tra/né phòng thủ có chủ đích. Việc chúng xảy ra — và các khoảng trống chúng tạo ra — bản thân là chỉ dấu; đối chiếu với log tập trung còn sống và bộ nhớ."
    }
  },

  {
    "app": "E",
    "sec": "e11",
    "secLabel": {
      "en": "E11 — Malware Behaviours & Anti-Forensics",
      "vi": "E11 — Hành vi mã độc & chống điều tra"
    },
    "q": {
      "en": "Steganography as an anti-forensic / covert technique involves:",
      "vi": "Steganography như một kỹ thuật chống điều tra / che giấu bao gồm:"
    },
    "opts": [
      {
        "en": "Hiding data inside another file to conceal it",
        "vi": "Giấu dữ liệu trong file khác để che nó"
      },
      {
        "en": "Encrypting the whole system disk",
        "vi": "Mã hóa toàn bộ đĩa hệ thống"
      },
      {
        "en": "Deleting the system registry",
        "vi": "Xóa registry hệ thống"
      },
      {
        "en": "Flooding the network with traffic",
        "vi": "Làm ngập mạng bằng lưu lượng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Steganography conceals data within innocuous carriers (images, audio, documents), so unlike encryption it hides the very existence of the hidden content. Malware uses it for covert config/payload storage and exfiltration; detection looks for statistical anomalies and known stego tools.",
      "vi": "Steganography che giấu dữ liệu trong các vật mang vô hại (ảnh, âm thanh, tài liệu), nên khác mã hóa, nó giấu chính sự tồn tại của nội dung ẩn. Mã độc dùng nó để lưu config/payload ngầm và exfil; phát hiện dựa vào bất thường thống kê và công cụ stego đã biết."
    }
  },

  {
    "app": "E",
    "sec": "e12",
    "secLabel": {
      "en": "E12 — Rootkit Identification",
      "vi": "E12 — Nhận diện rootkit"
    },
    "q": {
      "en": "What distinguishes a kernel-mode rootkit from a user-mode one?",
      "vi": "Điều gì phân biệt rootkit kernel-mode với rootkit user-mode?"
    },
    "opts": [
      {
        "en": "Kernel-mode runs at ring 0 via a driver, harder to detect",
        "vi": "Kernel-mode chạy ring 0 qua driver, khó phát hiện hơn"
      },
      {
        "en": "User-mode rootkits cannot hide anything",
        "vi": "Rootkit user-mode không giấu được gì"
      },
      {
        "en": "Kernel-mode rootkits are always visible",
        "vi": "Rootkit kernel-mode luôn nhìn thấy được"
      },
      {
        "en": "They are exactly the same thing",
        "vi": "Chúng giống hệt nhau"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "User-mode rootkits hook APIs within processes; kernel-mode rootkits load a driver at ring 0, manipulating kernel structures (DKOM) or the SSDT to hide system-wide and resist user-space tools. Detection often needs memory forensics and cross-view comparison.",
      "vi": "Rootkit user-mode hook API trong tiến trình; rootkit kernel-mode nạp một driver ở ring 0, thao túng cấu trúc kernel (DKOM) hoặc SSDT để ẩn trên toàn hệ thống và kháng công cụ user-space. Phát hiện thường cần forensic bộ nhớ và so sánh chéo góc nhìn."
    }
  },

  {
    "app": "E",
    "sec": "e12",
    "secLabel": {
      "en": "E12 — Rootkit Identification",
      "vi": "E12 — Nhận diện rootkit"
    },
    "q": {
      "en": "A bootkit is particularly stealthy because it:",
      "vi": "Một bootkit đặc biệt ẩn vì nó:"
    },
    "opts": [
      {
        "en": "Infects the boot process, loading before the OS",
        "vi": "Lây nhiễm quá trình boot, nạp trước OS"
      },
      {
        "en": "It only ever runs inside a browser",
        "vi": "Nó chỉ chạy trong trình duyệt"
      },
      {
        "en": "It cannot survive any reboot",
        "vi": "Nó không sống sót qua bất kỳ reboot nào"
      },
      {
        "en": "It is always completely unsigned",
        "vi": "Nó luôn hoàn toàn không có chữ ký"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Bootkits compromise pre-OS boot code so they execute before the kernel and security tools, enabling deep persistence and concealment. Detecting them may require offline disk analysis of the boot area or firmware/Secure Boot checks rather than trusting the running OS.",
      "vi": "Bootkit xâm nhập mã boot trước-OS nên chúng thực thi trước kernel và công cụ bảo mật, cho phép persistence và che giấu sâu. Phát hiện có thể cần phân tích đĩa offline vùng boot hoặc kiểm tra firmware/Secure Boot thay vì tin OS đang chạy."
    }
  },

  {
    "app": "E",
    "sec": "e13",
    "secLabel": {
      "en": "E13 — Live Malware Analysis",
      "vi": "E13 — Phân tích mã độc trực tiếp"
    },
    "q": {
      "en": "Taking Regshot snapshots before and after running a sample helps you:",
      "vi": "Chụp Regshot trước và sau khi chạy một mẫu giúp bạn:"
    },
    "opts": [
      {
        "en": "Identify the registry keys and files it changed",
        "vi": "Xác định khóa registry và file nó đã thay đổi"
      },
      {
        "en": "Decrypt the malware sample file",
        "vi": "Giải mã file mẫu mã độc"
      },
      {
        "en": "Capture live network packets",
        "vi": "Bắt gói mạng trực tiếp"
      },
      {
        "en": "Image the host's full hard disk",
        "vi": "Tạo image toàn bộ đĩa cứng của host"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Regshot diffs system state (registry and optionally files) before vs after detonation, surfacing persistence keys and dropped files. Combine with Procmon (real-time events), Process Explorer and a network sandbox for a full behavioural picture — all in an isolated lab.",
      "vi": "Regshot so sánh trạng thái hệ thống (registry và tùy chọn cả file) trước và sau khi kích nổ, làm lộ khóa persistence và file được thả. Kết hợp với Procmon (sự kiện real-time), Process Explorer và một sandbox mạng để có bức tranh hành vi đầy đủ — tất cả trong lab cách ly."
    }
  },

  {
    "app": "E",
    "sec": "e14",
    "secLabel": {
      "en": "E14 — Linux OS File Structures",
      "vi": "E14 — Cấu trúc tệp Linux"
    },
    "q": {
      "en": "On Linux, where are user account names and hashed passwords stored, respectively?",
      "vi": "Trên Linux, tên tài khoản người dùng và mật khẩu đã băm được lưu lần lượt ở đâu?"
    },
    "opts": [
      {
        "en": "/etc/passwd and /etc/shadow",
        "vi": "/etc/passwd và /etc/shadow"
      },
      {
        "en": "/etc/hosts and /etc/motd",
        "vi": "/etc/hosts và /etc/motd"
      },
      {
        "en": "/proc and /sys pseudo-dirs",
        "vi": "Thư mục giả /proc và /sys"
      },
      {
        "en": "/dev and /tmp directories",
        "vi": "Thư mục /dev và /tmp"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "/etc/passwd lists accounts (now without password hashes), and /etc/shadow holds the hashed passwords (root-readable only). Unexpected new accounts, UID 0 duplicates or modified shadow entries are key persistence/priv-esc indicators on Linux hosts.",
      "vi": "/etc/passwd liệt kê tài khoản (nay không còn hash mật khẩu), và /etc/shadow giữ mật khẩu đã băm (chỉ root đọc được). Tài khoản mới bất thường, trùng UID 0 hoặc sửa entry shadow là chỉ dấu persistence/leo thang đặc quyền quan trọng trên host Linux."
    }
  },

  {
    "app": "E",
    "sec": "e14",
    "secLabel": {
      "en": "E14 — Linux OS File Structures",
      "vi": "E14 — Cấu trúc tệp Linux"
    },
    "q": {
      "en": "A non-root binary with the SUID bit set is significant because it:",
      "vi": "Một binary không phải root nhưng có bit SUID đáng chú ý vì nó:"
    },
    "opts": [
      {
        "en": "It runs with the owner's privileges, often root",
        "vi": "Nó chạy với đặc quyền của chủ sở hữu, thường là root"
      },
      {
        "en": "It cannot be executed at all",
        "vi": "Nó hoàn toàn không thể thực thi"
      },
      {
        "en": "It is always malware by nature",
        "vi": "Bản chất nó luôn là mã độc"
      },
      {
        "en": "It encrypts the host's disk",
        "vi": "Nó mã hóa đĩa của host"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A SUID-root binary executes with root privileges regardless of the calling user. Attackers plant SUID shells or abuse vulnerable SUID programs to escalate. Enumerating unexpected SUID binaries (find / -perm -4000) is a standard Linux compromise check.",
      "vi": "Một binary SUID-root thực thi với quyền root bất kể người gọi. Kẻ tấn công cài shell SUID hoặc lạm dụng chương trình SUID lỗ hổng để leo thang. Liệt kê các binary SUID bất thường (find / -perm -4000) là một kiểm tra xâm nhập Linux tiêu chuẩn."
    }
  },

  {
    "app": "E",
    "sec": "e14",
    "secLabel": {
      "en": "E14 — Linux OS File Structures",
      "vi": "E14 — Cấu trúc tệp Linux"
    },
    "q": {
      "en": "An attacker adding their key to ~/.ssh/authorized_keys achieves:",
      "vi": "Kẻ tấn công thêm khóa của mình vào ~/.ssh/authorized_keys đạt được:"
    },
    "opts": [
      {
        "en": "Passwordless SSH access as that user",
        "vi": "Truy cập SSH không mật khẩu với tư cách người đó"
      },
      {
        "en": "A noticeably faster host CPU",
        "vi": "Một CPU host nhanh hơn rõ rệt"
      },
      {
        "en": "Full system disk encryption",
        "vi": "Mã hóa toàn bộ đĩa hệ thống"
      },
      {
        "en": "A new DNS resource record",
        "vi": "Một bản ghi tài nguyên DNS mới"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "authorized_keys lets the holder of the matching private key log in via SSH without a password — a stealthy, common Linux persistence mechanism. Reviewing authorized_keys (and ~/.bashrc, cron, systemd units) for unexpected entries is essential.",
      "vi": "authorized_keys cho phép người giữ khóa riêng tương ứng đăng nhập qua SSH không cần mật khẩu — một cơ chế persistence Linux ẩn và phổ biến. Rà soát authorized_keys (cùng ~/.bashrc, cron, unit systemd) tìm entry bất thường là thiết yếu."
    }
  },

  {
    "app": "E",
    "sec": "e14",
    "secLabel": {
      "en": "E14 — Linux OS File Structures",
      "vi": "E14 — Cấu trúc tệp Linux"
    },
    "q": {
      "en": "On most Linux systems, which log records sudo usage and authentication events?",
      "vi": "Trên hầu hết hệ thống Linux, log nào ghi việc dùng sudo và sự kiện xác thực?"
    },
    "opts": [
      {
        "en": "/var/log/auth.log or /var/log/secure",
        "vi": "/var/log/auth.log hoặc /var/log/secure"
      },
      {
        "en": "The /etc/hostname config file",
        "vi": "File cấu hình /etc/hostname"
      },
      {
        "en": "The /proc/cpuinfo pseudo-file",
        "vi": "File giả /proc/cpuinfo"
      },
      {
        "en": "The /dev/null device file",
        "vi": "File thiết bị /dev/null"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "auth.log/secure record authentication, sudo and SSH login events — central to reconstructing access and privilege use. Pair with wtmp/btmp/lastlog and bash history. Attackers may tamper with these, so corroborate across sources.",
      "vi": "auth.log/secure ghi sự kiện xác thực, sudo và đăng nhập SSH — trọng tâm để dựng lại truy cập và việc dùng đặc quyền. Kết hợp với wtmp/btmp/lastlog và bash history. Kẻ tấn công có thể can thiệp chúng nên cần đối chiếu nhiều nguồn."
    }
  }

);
