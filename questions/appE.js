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
        "en": "Decrypted/in-memory-only malware, live network sockets and injected code",
        "vi": "Mã độc đã giải mã/chỉ tồn tại trong bộ nhớ, socket mạng đang sống và mã được tiêm"
      },
      {
        "en": "The NTFS $MFT",
        "vi": "$MFT của NTFS"
      },
      {
        "en": "Installed program files",
        "vi": "Các file chương trình đã cài"
      },
      {
        "en": "The pagefile on disk",
        "vi": "Pagefile trên đĩa"
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
        "en": "Normal patching",
        "vi": "Vá lỗi bình thường"
      },
      {
        "en": "Process injection / process hollowing",
        "vi": "Tiêm tiến trình / process hollowing"
      },
      {
        "en": "A disk error",
        "vi": "Lỗi đĩa"
      },
      {
        "en": "A timezone issue",
        "vi": "Vấn đề múi giờ"
      }
    ],
    "correct": 1,
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
        "en": "Prefetch (.pf) files",
        "vi": "File Prefetch (.pf)"
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
        "en": "Run / RunOnce keys (HKLM and HKCU ...\\CurrentVersion\\Run)",
        "vi": "Khóa Run / RunOnce (HKLM và HKCU ...\\CurrentVersion\\Run)"
      },
      {
        "en": "The Recycle Bin key",
        "vi": "Khóa Recycle Bin"
      },
      {
        "en": "The screensaver timeout",
        "vi": "Thời gian chờ screensaver"
      },
      {
        "en": "The volume label",
        "vi": "Nhãn ổ đĩa"
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
        "en": "USBSTOR keys under SYSTEM\\CurrentControlSet\\Enum",
        "vi": "Khóa USBSTOR trong SYSTEM\\CurrentControlSet\\Enum"
      },
      {
        "en": "The TypedURLs key",
        "vi": "Khóa TypedURLs"
      },
      {
        "en": "The desktop wallpaper key",
        "vi": "Khóa hình nền desktop"
      },
      {
        "en": "The font cache",
        "vi": "Cache phông chữ"
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
        "en": "Alternate Data Streams (ADS)",
        "vi": "Alternate Data Streams (ADS)"
      },
      {
        "en": "Disk defragmentation",
        "vi": "Chống phân mảnh đĩa"
      },
      {
        "en": "File compression",
        "vi": "Nén tệp"
      },
      {
        "en": "Indexing",
        "vi": "Lập chỉ mục"
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
        "en": "A plain text log file",
        "vi": "Một file log văn bản thuần"
      },
      {
        "en": "A packed or encrypted executable",
        "vi": "Một file thực thi đã pack hoặc mã hóa"
      },
      {
        "en": "An empty file",
        "vi": "Một file rỗng"
      },
      {
        "en": "A normal Word document",
        "vi": "Một tài liệu Word bình thường"
      }
    ],
    "correct": 1,
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
        "en": "$MFT (Master File Table)",
        "vi": "$MFT (Master File Table)"
      },
      {
        "en": "FAT table",
        "vi": "Bảng FAT"
      },
      {
        "en": "The pagefile",
        "vi": "Pagefile"
      },
      {
        "en": "The hosts file",
        "vi": "File hosts"
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
        "en": "A normal background service",
        "vi": "Một dịch vụ nền bình thường"
      },
      {
        "en": "A rootkit hiding the process (e.g. DKOM / API hooking)",
        "vi": "Một rootkit đang ẩn tiến trình (vd DKOM / hook API)"
      },
      {
        "en": "A printer driver",
        "vi": "Một driver máy in"
      },
      {
        "en": "A Windows update",
        "vi": "Một bản cập nhật Windows"
      }
    ],
    "correct": 1,
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
        "en": "A corrupted font",
        "vi": "Một phông chữ hỏng"
      },
      {
        "en": "A printer driver",
        "vi": "Một driver máy in"
      },
      {
        "en": "A screensaver",
        "vi": "Một screensaver"
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
        "en": "/etc/hostname",
        "vi": "/etc/hostname"
      },
      {
        "en": "crontab entries (/etc/crontab, /var/spool/cron)",
        "vi": "Các mục crontab (/etc/crontab, /var/spool/cron)"
      },
      {
        "en": "/etc/motd",
        "vi": "/etc/motd"
      },
      {
        "en": "/proc/cpuinfo",
        "vi": "/proc/cpuinfo"
      }
    ],
    "correct": 1,
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
        "en": "Live/triage acquisition (memory + targeted artefacts) with documented tools",
        "vi": "Thu thập live/triage (bộ nhớ + artefact trọng yếu) bằng công cụ có tài liệu"
      },
      {
        "en": "Refuse to collect anything",
        "vi": "Từ chối thu thập bất cứ gì"
      },
      {
        "en": "Yank the power cable immediately",
        "vi": "Rút phích cắm điện ngay lập tức"
      },
      {
        "en": "Format the disk first",
        "vi": "Format đĩa trước"
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
      "vi": "Volume Shadow Copy (VSS) có giá trị trong forensic vì chúng:"
    },
    "opts": [
      {
        "en": "Can contain earlier versions of files/registry deleted or altered by an attacker",
        "vi": "Có thể chứa phiên bản trước của file/registry đã bị kẻ tấn công xóa hoặc sửa"
      },
      {
        "en": "Encrypt the disk",
        "vi": "Mã hóa đĩa"
      },
      {
        "en": "Speed up boot",
        "vi": "Tăng tốc boot"
      },
      {
        "en": "Store passwords in plaintext",
        "vi": "Lưu mật khẩu dạng plaintext"
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
        "en": "A ZIP archive of XML and media parts (Office Open XML)",
        "vi": "Một archive ZIP gồm các phần XML và media (Office Open XML)"
      },
      {
        "en": "A single encrypted blob",
        "vi": "Một khối mã hóa duy nhất"
      },
      {
        "en": "A PE executable",
        "vi": "Một file thực thi PE"
      },
      {
        "en": "A registry hive",
        "vi": "Một hive registry"
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
        "en": "TRIM/garbage collection can wipe deleted blocks automatically",
        "vi": "TRIM/garbage collection có thể tự động xóa các khối đã xóa"
      },
      {
        "en": "They never store data",
        "vi": "Chúng không bao giờ lưu dữ liệu"
      },
      {
        "en": "They are always encrypted by law",
        "vi": "Chúng luôn bị mã hóa theo luật"
      },
      {
        "en": "They cannot be imaged",
        "vi": "Không thể tạo image"
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
        "en": "Find files that are SIMILAR (variants), not just byte-identical",
        "vi": "Tìm file TƯƠNG TỰ (biến thể), không chỉ giống hệt từng byte"
      },
      {
        "en": "Encrypt files",
        "vi": "Mã hóa file"
      },
      {
        "en": "Prove perfect integrity",
        "vi": "Chứng minh toàn vẹn tuyệt đối"
      },
      {
        "en": "Compress files",
        "vi": "Nén file"
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
        "vi": "Tàn dư của file đã xóa, có thể khôi phục bằng carving"
      },
      {
        "en": "Only zeros, always",
        "vi": "Chỉ toàn số 0, luôn luôn"
      },
      {
        "en": "The current OS kernel",
        "vi": "Nhân OS hiện hành"
      },
      {
        "en": "Live processes",
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
        "en": "Exploiting the browser/plugins simply by visiting a malicious or compromised page",
        "vi": "Khai thác trình duyệt/plugin chỉ bằng việc truy cập một trang độc hại hoặc bị xâm nhập"
      },
      {
        "en": "Requiring the user to install a signed driver",
        "vi": "Yêu cầu người dùng cài một driver đã ký"
      },
      {
        "en": "Physically swapping the hard disk",
        "vi": "Tráo ổ cứng vật lý"
      },
      {
        "en": "Sending a fax",
        "vi": "Gửi một bản fax"
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
        "en": "List processes and their parent/child tree, then network connections",
        "vi": "Liệt kê tiến trình và cây cha/con, rồi tới kết nối mạng"
      },
      {
        "en": "Format the image",
        "vi": "Format image"
      },
      {
        "en": "Encrypt the image",
        "vi": "Mã hóa image"
      },
      {
        "en": "Delete suspicious strings",
        "vi": "Xóa các chuỗi đáng ngờ"
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
        "en": "Sysinternals Process Explorer / handle & TCPView",
        "vi": "Sysinternals Process Explorer / handle & TCPView"
      },
      {
        "en": "Calculator",
        "vi": "Máy tính"
      },
      {
        "en": "Paint",
        "vi": "Paint"
      },
      {
        "en": "WordPad",
        "vi": "WordPad"
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
        "en": "A successful account logon (with logon type)",
        "vi": "Một lần đăng nhập tài khoản thành công (kèm loại đăng nhập)"
      },
      {
        "en": "A shutdown",
        "vi": "Một lần tắt máy"
      },
      {
        "en": "A printer error",
        "vi": "Một lỗi máy in"
      },
      {
        "en": "A disk format",
        "vi": "Một lần format đĩa"
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
        "en": "Evidence that executables existed/were referenced, with path and (often) last-modified time",
        "vi": "Bằng chứng file thực thi từng tồn tại/được tham chiếu, kèm đường dẫn và (thường là) thời gian sửa đổi cuối"
      },
      {
        "en": "The user's password",
        "vi": "Mật khẩu người dùng"
      },
      {
        "en": "Network packet payloads",
        "vi": "Payload gói mạng"
      },
      {
        "en": "The BIOS version",
        "vi": "Phiên bản BIOS"
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
        "en": "A dead/offline image is unreadable without the recovery key; live imaging or the key is needed",
        "vi": "Image lúc tắt/offline không đọc được nếu thiếu recovery key; cần image lúc đang chạy hoặc có khóa"
      },
      {
        "en": "It makes the disk bigger",
        "vi": "Nó làm đĩa to hơn"
      },
      {
        "en": "It speeds up imaging",
        "vi": "Nó tăng tốc tạo image"
      },
      {
        "en": "It has no effect",
        "vi": "Nó không ảnh hưởng gì"
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
        "en": "They can hide sectors from the OS that a forensic imager must be configured to capture",
        "vi": "Chúng có thể ẩn các sector khỏi OS mà trình tạo image forensic phải được cấu hình để bắt"
      },
      {
        "en": "They encrypt the disk",
        "vi": "Chúng mã hóa đĩa"
      },
      {
        "en": "They speed up the disk",
        "vi": "Chúng tăng tốc đĩa"
      },
      {
        "en": "They are software only",
        "vi": "Chúng chỉ là phần mềm"
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
        "en": "Potentially malicious — it can auto-run script on open",
        "vi": "Có thể độc hại — nó có thể tự chạy script khi mở"
      },
      {
        "en": "Always safe",
        "vi": "Luôn an toàn"
      },
      {
        "en": "A plain image",
        "vi": "Một ảnh thuần"
      },
      {
        "en": "A registry hive",
        "vi": "Một hive registry"
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
        "en": "wtmp/btmp/lastlog and /var/log/auth.log (or secure)",
        "vi": "wtmp/btmp/lastlog và /var/log/auth.log (hoặc secure)"
      },
      {
        "en": "/etc/hostname",
        "vi": "/etc/hostname"
      },
      {
        "en": "/proc/version",
        "vi": "/proc/version"
      },
      {
        "en": "/dev/null",
        "vi": "/dev/null"
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
        "en": "E01 stores compression, case metadata and built-in integrity hashes; dd is a bare bit-for-bit copy",
        "vi": "E01 lưu nén, metadata vụ việc và hash toàn vẹn tích hợp; dd là bản sao từng bit trần"
      },
      {
        "en": "dd cannot be hashed",
        "vi": "dd không thể băm"
      },
      {
        "en": "E01 is always smaller and lossy",
        "vi": "E01 luôn nhỏ hơn và mất dữ liệu"
      },
      {
        "en": "They are identical formats",
        "vi": "Chúng là cùng một định dạng"
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
        "en": "Physically prevents any write to the source, independent of the host OS",
        "vi": "Ngăn vật lý mọi ghi lên nguồn, độc lập với OS của host"
      },
      {
        "en": "Is faster at copying",
        "vi": "Sao chép nhanh hơn"
      },
      {
        "en": "Compresses the image",
        "vi": "Nén image"
      },
      {
        "en": "Encrypts the source",
        "vi": "Mã hóa nguồn"
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
        "en": "Rapidly collect targeted forensic artefacts (triage) rather than a full disk image",
        "vi": "Thu thập nhanh các artefact forensic trọng yếu (triage) thay vì image toàn đĩa"
      },
      {
        "en": "Decrypt BitLocker",
        "vi": "Giải mã BitLocker"
      },
      {
        "en": "Disassemble malware",
        "vi": "Dịch ngược mã độc"
      },
      {
        "en": "Route network traffic",
        "vi": "Định tuyến lưu lượng mạng"
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
        "en": "Capture volatile memory first, then disk/triage artefacts",
        "vi": "Bắt bộ nhớ volatile trước, rồi tới đĩa/artefact triage"
      },
      {
        "en": "Image the disk first, then forget about memory",
        "vi": "Image đĩa trước, rồi quên bộ nhớ"
      },
      {
        "en": "Reboot, then acquire",
        "vi": "Reboot, rồi thu thập"
      },
      {
        "en": "Delete logs, then image",
        "vi": "Xóa log, rồi image"
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
        "en": "Its data is held inside its $MFT record rather than in separate clusters",
        "vi": "Dữ liệu của nó nằm ngay trong bản ghi $MFT thay vì các cluster riêng"
      },
      {
        "en": "It is encrypted",
        "vi": "Nó được mã hóa"
      },
      {
        "en": "It is stored in the pagefile",
        "vi": "Nó được lưu trong pagefile"
      },
      {
        "en": "It cannot be recovered",
        "vi": "Không thể khôi phục nó"
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
        "en": "Remnants of previously-stored data between the file end and the cluster end",
        "vi": "Tàn dư dữ liệu lưu trước đó, nằm giữa cuối file và cuối cluster"
      },
      {
        "en": "The encryption key",
        "vi": "Khóa mã hóa"
      },
      {
        "en": "The current process list",
        "vi": "Danh sách tiến trình hiện tại"
      },
      {
        "en": "The BIOS version",
        "vi": "Phiên bản BIOS"
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
        "en": "Its MFT entry and clusters are marked free, but the data persists until overwritten",
        "vi": "Bản ghi MFT và cluster của nó bị đánh dấu trống, nhưng dữ liệu còn tới khi bị ghi đè"
      },
      {
        "en": "The bytes are immediately zeroed",
        "vi": "Các byte bị zero hóa ngay"
      },
      {
        "en": "The disk is reformatted",
        "vi": "Đĩa bị format lại"
      },
      {
        "en": "The data is encrypted",
        "vi": "Dữ liệu bị mã hóa"
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
        "en": "Encrypts individual files/folders per user, not the whole volume",
        "vi": "Mã hóa từng file/thư mục theo người dùng, không phải toàn bộ volume"
      },
      {
        "en": "Encrypts the entire disk at boot",
        "vi": "Mã hóa toàn đĩa lúc boot"
      },
      {
        "en": "Is a network protocol",
        "vi": "Là một giao thức mạng"
      },
      {
        "en": "Only works on Linux",
        "vi": "Chỉ chạy trên Linux"
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
        "en": "Journals recent file-system transactions, helping reconstruct recent changes",
        "vi": "Ghi nhật ký các giao dịch hệ thống tệp gần đây, giúp dựng lại thay đổi gần đây"
      },
      {
        "en": "Stores user passwords",
        "vi": "Lưu mật khẩu người dùng"
      },
      {
        "en": "Holds the boot loader",
        "vi": "Chứa boot loader"
      },
      {
        "en": "Encrypts the volume",
        "vi": "Mã hóa volume"
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
        "en": "The target path, timestamps and volume info even after the target is deleted",
        "vi": "Đường dẫn đích, mốc thời gian và thông tin volume kể cả sau khi đích bị xóa"
      },
      {
        "en": "The user's password",
        "vi": "Mật khẩu người dùng"
      },
      {
        "en": "Live network sockets",
        "vi": "Socket mạng sống"
      },
      {
        "en": "The CPU temperature",
        "vi": "Nhiệt độ CPU"
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
        "en": "Evidence of program presence/execution (paths, and for Amcache, SHA-1 hashes)",
        "vi": "Bằng chứng chương trình hiện diện/thực thi (đường dẫn, và với Amcache, hash SHA-1)"
      },
      {
        "en": "The current network connections",
        "vi": "Các kết nối mạng hiện tại"
      },
      {
        "en": "The user's emails",
        "vi": "Email của người dùng"
      },
      {
        "en": "The BIOS settings",
        "vi": "Cài đặt BIOS"
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
        "vi": "Metadata: đường dẫn gốc, thời gian xóa và kích thước"
      },
      {
        "en": "The actual file content",
        "vi": "Nội dung file thực tế"
      },
      {
        "en": "The encryption key",
        "vi": "Khóa mã hóa"
      },
      {
        "en": "The CPU model",
        "vi": "Model CPU"
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
        "en": "Binary XML, requiring a parser (not plain text)",
        "vi": "Binary XML, cần một trình phân tích (không phải văn bản thuần)"
      },
      {
        "en": "Plain ASCII text",
        "vi": "Văn bản ASCII thuần"
      },
      {
        "en": "A SQLite database",
        "vi": "Một cơ sở dữ liệu SQLite"
      },
      {
        "en": "A PE executable",
        "vi": "Một file thực thi PE"
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
        "en": "Recently accessed files/items per application",
        "vi": "Các file/mục được truy cập gần đây theo từng ứng dụng"
      },
      {
        "en": "Open network ports",
        "vi": "Cổng mạng đang mở"
      },
      {
        "en": "Installed drivers",
        "vi": "Driver đã cài"
      },
      {
        "en": "BIOS passwords",
        "vi": "Mật khẩu BIOS"
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
        "en": "The Active Directory database including domain account password hashes",
        "vi": "Cơ sở dữ liệu Active Directory gồm cả hash mật khẩu tài khoản miền"
      },
      {
        "en": "The desktop wallpapers",
        "vi": "Hình nền desktop"
      },
      {
        "en": "The print spool",
        "vi": "Hàng đợi in"
      },
      {
        "en": "The page file",
        "vi": "Pagefile"
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
        "en": "Unallocated pages, freelist and the WAL/journal",
        "vi": "Các trang chưa cấp phát, freelist và WAL/journal"
      },
      {
        "en": "The CPU cache",
        "vi": "Cache CPU"
      },
      {
        "en": "The BIOS",
        "vi": "BIOS"
      },
      {
        "en": "The MAC address",
        "vi": "Địa chỉ MAC"
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
        "en": "You can unpack them to inspect embedded macros, objects and relationships without opening them",
        "vi": "Bạn có thể giải nén để xem macro, đối tượng và quan hệ nhúng mà không cần mở chúng"
      },
      {
        "en": "They cannot contain malware",
        "vi": "Chúng không thể chứa mã độc"
      },
      {
        "en": "They are always encrypted",
        "vi": "Chúng luôn được mã hóa"
      },
      {
        "en": "They run only on Linux",
        "vi": "Chúng chỉ chạy trên Linux"
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
        "en": "ROT13-encoded (and include run counts and last-run times)",
        "vi": "Mã hóa ROT13 (và gồm số lần chạy cùng thời gian chạy cuối)"
      },
      {
        "en": "AES-encrypted",
        "vi": "Mã hóa AES"
      },
      {
        "en": "Stored as images",
        "vi": "Lưu dưới dạng ảnh"
      },
      {
        "en": "Compressed with ZIP",
        "vi": "Nén bằng ZIP"
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
        "en": "Folders a user browsed (including removable/network/now-deleted folders) and view settings",
        "vi": "Các thư mục người dùng đã duyệt (gồm cả thư mục tháo rời/mạng/đã xóa) và cài đặt hiển thị"
      },
      {
        "en": "The user's password hash",
        "vi": "Hash mật khẩu người dùng"
      },
      {
        "en": "Open TCP ports",
        "vi": "Cổng TCP đang mở"
      },
      {
        "en": "The boot order",
        "vi": "Thứ tự boot"
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
        "en": "A file's last-modified timestamp — when the key was last changed",
        "vi": "Mốc thời gian sửa-cuối của một file — khi khóa được thay đổi lần cuối"
      },
      {
        "en": "The key's creation date only",
        "vi": "Chỉ ngày tạo của khóa"
      },
      {
        "en": "The user's logon time",
        "vi": "Thời gian đăng nhập của người dùng"
      },
      {
        "en": "The CPU clock speed",
        "vi": "Tốc độ xung CPU"
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
        "en": "Services, Winlogon (Shell/Userinit) and Image File Execution Options",
        "vi": "Services, Winlogon (Shell/Userinit) và Image File Execution Options"
      },
      {
        "en": "The volume label",
        "vi": "Nhãn ổ đĩa"
      },
      {
        "en": "The screen resolution",
        "vi": "Độ phân giải màn hình"
      },
      {
        "en": "The mouse speed",
        "vi": "Tốc độ chuột"
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
        "en": "Filter out legitimate OS/application files so analysts focus on the unknown",
        "vi": "Lọc bỏ các file OS/ứng dụng hợp lệ để analyst tập trung vào cái chưa biết"
      },
      {
        "en": "Encrypt suspicious files",
        "vi": "Mã hóa file đáng ngờ"
      },
      {
        "en": "Delete all executables",
        "vi": "Xóa mọi file thực thi"
      },
      {
        "en": "Speed up the CPU",
        "vi": "Tăng tốc CPU"
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
        "en": "The legitimate svchost.exe lives in System32 — the location/name combination is wrong",
        "vi": "svchost.exe hợp lệ nằm trong System32 — tổ hợp vị trí/tên này là sai"
      },
      {
        "en": "svchost.exe is always malware",
        "vi": "svchost.exe luôn là mã độc"
      },
      {
        "en": "Public folders cannot hold files",
        "vi": "Thư mục Public không thể chứa file"
      },
      {
        "en": "The name is encrypted",
        "vi": "Tên file bị mã hóa"
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
        "en": "Who signed it and that it has not been modified since — but not that it is benign",
        "vi": "Ai đã ký và rằng nó không bị sửa từ đó — nhưng không có nghĩa nó lành tính"
      },
      {
        "en": "That the file is guaranteed safe",
        "vi": "Rằng file chắc chắn an toàn"
      },
      {
        "en": "That the file is malware",
        "vi": "Rằng file là mã độc"
      },
      {
        "en": "The user's password",
        "vi": "Mật khẩu người dùng"
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
        "en": "Hashing the import table, grouping binaries with the same imported functions/order",
        "vi": "Băm bảng import, gom các binary có cùng hàm/thứ tự import"
      },
      {
        "en": "Hashing the whole disk",
        "vi": "Băm toàn bộ đĩa"
      },
      {
        "en": "Recording network traffic",
        "vi": "Ghi lưu lượng mạng"
      },
      {
        "en": "Measuring CPU usage",
        "vi": "Đo mức dùng CPU"
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
        "en": "It survives — distributed parity allows reconstruction of the missing disk",
        "vi": "Vẫn còn — parity phân tán cho phép tái dựng đĩa bị thiếu"
      },
      {
        "en": "It is lost immediately",
        "vi": "Mất ngay lập tức"
      },
      {
        "en": "It doubles in size",
        "vi": "Nó tăng gấp đôi kích thước"
      },
      {
        "en": "It becomes encrypted",
        "vi": "Nó trở nên mã hóa"
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
        "en": "The controller remaps logical blocks to changing physical cells, hiding old data from normal access",
        "vi": "Controller ánh xạ lại khối logic tới các cell vật lý thay đổi, giấu dữ liệu cũ khỏi truy cập thường"
      },
      {
        "en": "It encrypts everything by law",
        "vi": "Nó mã hóa mọi thứ theo luật"
      },
      {
        "en": "It makes the disk read-only",
        "vi": "Nó làm đĩa chỉ-đọc"
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
        "en": "Can lock the drive so it refuses reads until unlocked",
        "vi": "Có thể khóa ổ khiến nó từ chối đọc cho tới khi mở khóa"
      },
      {
        "en": "Encrypts the network",
        "vi": "Mã hóa mạng"
      },
      {
        "en": "Deletes the firmware",
        "vi": "Xóa firmware"
      },
      {
        "en": "Speeds up imaging",
        "vi": "Tăng tốc tạo image"
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
        "en": "Its underlying file system/RAID layout and whether to image disks or acquire over the network",
        "vi": "Hệ thống tệp/bố cục RAID bên dưới và việc nên image đĩa hay thu thập qua mạng"
      },
      {
        "en": "Only the printer settings",
        "vi": "Chỉ cài đặt máy in"
      },
      {
        "en": "The monitor brightness",
        "vi": "Độ sáng màn hình"
      },
      {
        "en": "The keyboard layout",
        "vi": "Bố cục bàn phím"
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
        "en": "pslist walks the active process linked list (which DKOM can unlink); psscan scans memory pools for process objects",
        "vi": "pslist đi theo danh sách liên kết tiến trình đang hoạt động (mà DKOM có thể gỡ liên kết); psscan quét pool bộ nhớ tìm đối tượng tiến trình"
      },
      {
        "en": "psscan is just slower",
        "vi": "psscan chỉ chậm hơn"
      },
      {
        "en": "pslist only shows drivers",
        "vi": "pslist chỉ hiện driver"
      },
      {
        "en": "They always agree",
        "vi": "Chúng luôn khớp nhau"
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
        "en": "Injected code in private, executable (RWX) memory regions lacking a backing file",
        "vi": "Mã được tiêm trong vùng nhớ riêng, thực thi (RWX) không có file gốc"
      },
      {
        "en": "Open TCP ports only",
        "vi": "Chỉ cổng TCP đang mở"
      },
      {
        "en": "The user's wallpaper",
        "vi": "Hình nền người dùng"
      },
      {
        "en": "BIOS strings",
        "vi": "Chuỗi BIOS"
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
        "en": "A malicious document executing follow-on commands (macro/exploit chain)",
        "vi": "Một tài liệu độc hại thực thi các lệnh tiếp theo (chuỗi macro/exploit)"
      },
      {
        "en": "Normal Office behaviour",
        "vi": "Hành vi Office bình thường"
      },
      {
        "en": "A printer driver",
        "vi": "Một driver máy in"
      },
      {
        "en": "A DNS lookup",
        "vi": "Một tra cứu DNS"
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
        "en": "From a memory image, since they must be in RAM while in use",
        "vi": "Từ một image bộ nhớ, vì chúng phải ở trong RAM khi đang dùng"
      },
      {
        "en": "From the printer spool",
        "vi": "Từ hàng đợi máy in"
      },
      {
        "en": "From the BIOS logo",
        "vi": "Từ logo BIOS"
      },
      {
        "en": "They are never recoverable",
        "vi": "Chúng không bao giờ khôi phục được"
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
        "en": "Mounting the container can bypass Mark-of-the-Web, avoiding SmartScreen/Office warnings",
        "vi": "Mount container có thể vượt qua Mark-of-the-Web, tránh cảnh báo SmartScreen/Office"
      },
      {
        "en": "ISO files cannot contain executables",
        "vi": "File ISO không thể chứa file thực thi"
      },
      {
        "en": "They are encrypted by default",
        "vi": "Chúng mã hóa theo mặc định"
      },
      {
        "en": "They run only in the cloud",
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
        "en": "Living-off-the-land binaries (LOLBins) to execute code while appearing legitimate",
        "vi": "Living-off-the-land binary (LOLBins) để thực thi mã trong khi trông hợp lệ"
      },
      {
        "en": "Antivirus engines",
        "vi": "Engine antivirus"
      },
      {
        "en": "Disk imagers",
        "vi": "Công cụ tạo image đĩa"
      },
      {
        "en": "DNS servers",
        "vi": "Máy chủ DNS"
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
        "en": "Evade gateway scanning (the AV cannot open the encrypted archive) while the user is given the password",
        "vi": "Né quét tại gateway (AV không mở được archive mã hóa) trong khi người dùng được cho mật khẩu"
      },
      {
        "en": "Speed up email delivery",
        "vi": "Tăng tốc gửi email"
      },
      {
        "en": "Compress the network",
        "vi": "Nén mạng"
      },
      {
        "en": "Encrypt the mail server",
        "vi": "Mã hóa máy chủ mail"
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
        "en": "Overwrite data so it cannot be recovered, frustrating forensics",
        "vi": "Ghi đè dữ liệu để không thể khôi phục, cản trở forensic"
      },
      {
        "en": "Encrypt the network",
        "vi": "Mã hóa mạng"
      },
      {
        "en": "Speed up the disk",
        "vi": "Tăng tốc đĩa"
      },
      {
        "en": "Install patches",
        "vi": "Cài bản vá"
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
        "en": "Anti-forensic / defense-evasion behaviour to hinder detection and investigation",
        "vi": "Hành vi chống điều tra / né phòng thủ để cản trở phát hiện và điều tra"
      },
      {
        "en": "Normal maintenance",
        "vi": "Bảo trì bình thường"
      },
      {
        "en": "A hardware fault",
        "vi": "Một lỗi phần cứng"
      },
      {
        "en": "A DNS change",
        "vi": "Một thay đổi DNS"
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
        "en": "Hiding data inside another file (e.g. an image) so its presence is concealed",
        "vi": "Giấu dữ liệu bên trong một file khác (vd một ảnh) để che sự tồn tại của nó"
      },
      {
        "en": "Encrypting the whole disk",
        "vi": "Mã hóa toàn đĩa"
      },
      {
        "en": "Deleting the registry",
        "vi": "Xóa registry"
      },
      {
        "en": "Flooding the network",
        "vi": "Làm ngập mạng"
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
        "en": "Kernel-mode runs at ring 0 (often via a driver), able to subvert the OS itself and is harder to detect",
        "vi": "Kernel-mode chạy ở ring 0 (thường qua một driver), có thể lật đổ chính OS và khó phát hiện hơn"
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
        "en": "They are the same",
        "vi": "Chúng giống nhau"
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
        "en": "Infects the boot process (MBR/VBR/bootloader) to load before the OS and its defences",
        "vi": "Lây nhiễm quá trình boot (MBR/VBR/bootloader) để nạp trước OS và các biện pháp phòng thủ"
      },
      {
        "en": "Only runs in a browser",
        "vi": "Chỉ chạy trong trình duyệt"
      },
      {
        "en": "Cannot survive reboot",
        "vi": "Không sống sót qua reboot"
      },
      {
        "en": "Is always unsigned",
        "vi": "Luôn không có chữ ký"
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
        "en": "Identify exactly which registry keys and files the malware created or modified",
        "vi": "Xác định chính xác khóa registry và file nào mã độc đã tạo hoặc sửa"
      },
      {
        "en": "Decrypt the malware",
        "vi": "Giải mã mã độc"
      },
      {
        "en": "Capture network packets",
        "vi": "Bắt gói mạng"
      },
      {
        "en": "Image the disk",
        "vi": "Tạo image đĩa"
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
        "en": "/etc/passwd (accounts) and /etc/shadow (password hashes)",
        "vi": "/etc/passwd (tài khoản) và /etc/shadow (hash mật khẩu)"
      },
      {
        "en": "/etc/hosts and /etc/motd",
        "vi": "/etc/hosts và /etc/motd"
      },
      {
        "en": "/proc and /sys",
        "vi": "/proc và /sys"
      },
      {
        "en": "/dev and /tmp",
        "vi": "/dev và /tmp"
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
        "en": "Runs with the privileges of its owner (often root), a common privilege-escalation route",
        "vi": "Chạy với đặc quyền của chủ sở hữu (thường là root), một con đường leo thang đặc quyền phổ biến"
      },
      {
        "en": "Cannot be executed",
        "vi": "Không thể thực thi"
      },
      {
        "en": "Is always malware",
        "vi": "Luôn là mã độc"
      },
      {
        "en": "Encrypts the disk",
        "vi": "Mã hóa đĩa"
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
        "en": "Persistent passwordless SSH access as that user",
        "vi": "Truy cập SSH bền bỉ không cần mật khẩu dưới danh nghĩa người dùng đó"
      },
      {
        "en": "A faster CPU",
        "vi": "CPU nhanh hơn"
      },
      {
        "en": "Disk encryption",
        "vi": "Mã hóa đĩa"
      },
      {
        "en": "A DNS record",
        "vi": "Một bản ghi DNS"
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
        "en": "/var/log/auth.log (Debian/Ubuntu) or /var/log/secure (RHEL/CentOS)",
        "vi": "/var/log/auth.log (Debian/Ubuntu) hoặc /var/log/secure (RHEL/CentOS)"
      },
      {
        "en": "/etc/hostname",
        "vi": "/etc/hostname"
      },
      {
        "en": "/proc/cpuinfo",
        "vi": "/proc/cpuinfo"
      },
      {
        "en": "/dev/null",
        "vi": "/dev/null"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "auth.log/secure record authentication, sudo and SSH login events — central to reconstructing access and privilege use. Pair with wtmp/btmp/lastlog and bash history. Attackers may tamper with these, so corroborate across sources.",
      "vi": "auth.log/secure ghi sự kiện xác thực, sudo và đăng nhập SSH — trọng tâm để dựng lại truy cập và việc dùng đặc quyền. Kết hợp với wtmp/btmp/lastlog và bash history. Kẻ tấn công có thể can thiệp chúng nên cần đối chiếu nhiều nguồn."
    }
  }

);
