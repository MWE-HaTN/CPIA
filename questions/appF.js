/* ===================================================================
   CPIA Question Bank  —  Appendix F : Malware Analysis / Reverse Engineering
   72 question(s). To add: append more objects to push().
   Schema: app, sec (index.html anchor), secLabel{en,vi}, q{en,vi},
           opts[4]{en,vi}, correct (0-3), exp{en,vi}, note{en,vi}? (optional)
   =================================================================== */
(window.CPIA_BANK = window.CPIA_BANK || []).push(

  {
    "app": "F",
    "sec": "f8",
    "secLabel": {
      "en": "F8 — Windows Executable File Formats",
      "vi": "F8 — Định dạng file thực thi Windows"
    },
    "q": {
      "en": "The two bytes \"MZ\" at offset 0 of a file indicate:",
      "vi": "Hai byte \"MZ\" ở offset 0 của một file cho biết:"
    },
    "opts": [
      {
        "en": "A DOS/Windows executable (PE) header",
        "vi": "Một header file thực thi DOS/Windows (PE)"
      },
      {
        "en": "A JPEG image file (FF D8 header)",
        "vi": "Một file ảnh JPEG (header FF D8)"
      },
      {
        "en": "A ZIP archive file (PK header)",
        "vi": "Một file archive ZIP (header PK)"
      },
      {
        "en": "A PDF document (%PDF header)",
        "vi": "Một tài liệu PDF (header %PDF)"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "\"MZ\" (0x4D5A) is the DOS header magic that begins every Windows PE file; the PE signature \"PE\\0\\0\" follows at the offset given by e_lfanew. ZIP starts with \"PK\", PDF with \"%PDF\", JPEG with FF D8. Magic bytes enable signature analysis regardless of extension.",
      "vi": "\"MZ\" (0x4D5A) là magic của DOS header mở đầu mọi file PE Windows; chữ ký \"PE\\0\\0\" theo sau tại offset do e_lfanew chỉ. ZIP bắt đầu bằng \"PK\", PDF bằng \"%PDF\", JPEG bằng FF D8. Magic byte cho phép phân tích signature bất kể phần mở rộng."
    },
    "note": {
      "en": "Identify file type by magic bytes, not the extension.",
      "vi": "Nhận diện loại file bằng magic byte, không bằng phần mở rộng."
    }
  },

  {
    "app": "F",
    "sec": "f2",
    "secLabel": {
      "en": "F2 — Functionality Identification",
      "vi": "F2 — Nhận diện chức năng"
    },
    "q": {
      "en": "Seeing constants like 0x67452301 / 0xEFCDAB89 in a binary suggests it implements:",
      "vi": "Thấy các hằng số như 0x67452301 / 0xEFCDAB89 trong binary gợi ý nó hiện thực:"
    },
    "opts": [
      {
        "en": "An MD5/SHA-1 hash routine",
        "vi": "Một thủ tục băm MD5/SHA-1"
      },
      {
        "en": "An RC4 stream-cipher setup",
        "vi": "Thiết lập mã dòng RC4"
      },
      {
        "en": "A CRC32 checksum table",
        "vi": "Một bảng checksum CRC32"
      },
      {
        "en": "A Base64 encoding table",
        "vi": "Một bảng mã hóa Base64"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Those are the MD5/SHA-1 initialisation constants. Recognising standard crypto constants (and S-box tables for AES, the 0x9E3779B9 TEA delta, etc.) lets you identify cryptographic functionality at the CPIA level without fully reversing the math.",
      "vi": "Đó là các hằng số khởi tạo MD5/SHA-1. Nhận diện hằng số crypto chuẩn (và bảng S-box của AES, delta TEA 0x9E3779B9, v.v.) cho phép xác định chức năng mật mã ở cấp CPIA mà không cần dịch ngược toàn bộ phép toán."
    },
    "note": {
      "en": "CPIA expects recognition of crypto constants/patterns, not full math reversing.",
      "vi": "CPIA yêu cầu nhận diện hằng số/mẫu crypto, không phải dịch ngược toàn bộ phép toán."
    }
  },

  {
    "app": "F",
    "sec": "f9",
    "secLabel": {
      "en": "F9 — Hiding Techniques",
      "vi": "F9 — Kỹ thuật ẩn giấu"
    },
    "q": {
      "en": "A malware sample starts a legitimate process suspended, unmaps its memory and writes its own code before resuming. This technique is:",
      "vi": "Một mẫu mã độc khởi chạy một tiến trình hợp lệ ở trạng thái suspended, gỡ ánh xạ bộ nhớ và ghi mã của chính nó vào trước khi resume. Kỹ thuật này là:"
    },
    "opts": [
      {
        "en": "Process hollowing",
        "vi": "Process hollowing"
      },
      {
        "en": "Reflective DLL injection",
        "vi": "Reflective DLL injection"
      },
      {
        "en": "DLL search-order hijacking",
        "vi": "Chiếm quyền thứ tự tìm DLL"
      },
      {
        "en": "Thread execution hijacking",
        "vi": "Chiếm quyền thực thi luồng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Process hollowing (RunPE) creates a suspended legitimate process, replaces its image with malicious code, then resumes it — so the malware runs under a trusted process name. Related injection methods include CreateRemoteThread, APC injection and reflective DLL loading. Memory analysis reveals the image/disk mismatch.",
      "vi": "Process hollowing (RunPE) tạo một tiến trình hợp lệ ở trạng thái suspended, thay image của nó bằng mã độc, rồi resume — nên mã độc chạy dưới tên tiến trình tin cậy. Các phương pháp tiêm liên quan: CreateRemoteThread, APC injection, reflective DLL loading. Phân tích bộ nhớ lộ ra sự không khớp image/đĩa."
    }
  },

  {
    "app": "F",
    "sec": "f12",
    "secLabel": {
      "en": "F12 — Behavioural Analysis",
      "vi": "F12 — Phân tích hành vi"
    },
    "q": {
      "en": "During dynamic analysis in a sandbox, the BEST single source to capture a sample's file, registry and process activity is:",
      "vi": "Trong phân tích động ở sandbox, nguồn đơn lẻ TỐT NHẤT để ghi lại hoạt động file, registry và tiến trình của mẫu là:"
    },
    "opts": [
      {
        "en": "Procmon capturing file, registry and process events",
        "vi": "Procmon ghi sự kiện file, registry và tiến trình"
      },
      {
        "en": "Wireshark capturing network packets",
        "vi": "Wireshark bắt gói mạng"
      },
      {
        "en": "Process Explorer listing live processes",
        "vi": "Process Explorer liệt kê tiến trình đang chạy"
      },
      {
        "en": "Autoruns enumerating autostart entries",
        "vi": "Autoruns liệt kê mục tự khởi động"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Process Monitor records real-time file system, registry and process/thread events, revealing persistence, dropped files and config touches. Combine with Wireshark/INetSim for network behaviour and Regshot for before/after diffs. Behavioural (dynamic) analysis complements static reversing.",
      "vi": "Process Monitor ghi real-time sự kiện hệ thống tệp, registry và tiến trình/luồng, lộ ra persistence, file được thả và việc chạm config. Kết hợp Wireshark/INetSim cho hành vi mạng và Regshot để so sánh trước/sau. Phân tích hành vi (động) bổ trợ cho dịch ngược tĩnh."
    }
  },

  {
    "app": "F",
    "sec": "f6",
    "secLabel": {
      "en": "F6 — Cryptographic Techniques",
      "vi": "F6 — Kỹ thuật mật mã"
    },
    "q": {
      "en": "While reversing, the most reliable way to recover a hard-coded C2 decryption key is often to:",
      "vi": "Khi dịch ngược, cách đáng tin nhất để khôi phục khóa giải mã C2 được hard-code thường là:"
    },
    "opts": [
      {
        "en": "Set a breakpoint on the crypto routine and read the key from memory",
        "vi": "Đặt breakpoint tại thủ tục mã hóa và đọc khóa từ bộ nhớ"
      },
      {
        "en": "Brute-force the whole key space offline",
        "vi": "Brute-force toàn bộ không gian khóa offline"
      },
      {
        "en": "Read the strings from the still-packed binary",
        "vi": "Đọc chuỗi từ binary còn đang bị pack"
      },
      {
        "en": "Trust an online sandbox's auto-generated report",
        "vi": "Tin vào báo cáo tự sinh của sandbox trực tuyến"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Even when a key is obfuscated at rest, it must be in cleartext in memory when the crypto routine runs. Breakpointing the decrypt call in a debugger and reading the key buffer/registers reliably extracts it — defeating static obfuscation. This identifies implementation weaknesses and key material.",
      "vi": "Dù khóa bị làm rối khi nằm yên, nó phải ở dạng rõ trong bộ nhớ khi thủ tục crypto chạy. Đặt breakpoint tại lệnh giải mã trong debugger rồi đọc buffer/thanh ghi chứa khóa sẽ trích xuất đáng tin — vượt qua obfuscation tĩnh. Cách này xác định điểm yếu hiện thực và key material."
    }
  },

  {
    "app": "F",
    "sec": "f8",
    "secLabel": {
      "en": "F8 — Windows Executable File Formats",
      "vi": "F8 — Định dạng file thực thi Windows"
    },
    "q": {
      "en": "In a PE file, the Import Address Table (IAT) tells an analyst:",
      "vi": "Trong file PE, Bảng địa chỉ nhập (IAT) cho analyst biết:"
    },
    "opts": [
      {
        "en": "Which external API functions and DLLs the binary uses",
        "vi": "Những hàm API/DLL ngoài mà binary sử dụng"
      },
      {
        "en": "Which functions the binary exports to others",
        "vi": "Những hàm mà binary xuất ra cho module khác"
      },
      {
        "en": "The order in which sections map into memory",
        "vi": "Thứ tự các section được map vào bộ nhớ"
      },
      {
        "en": "The relocation fixups applied at load time",
        "vi": "Các fixup relocation áp dụng lúc nạp"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "The imports reveal capability: e.g. WININET/WS2_32 (network), CryptEncrypt (crypto), VirtualAllocEx + WriteProcessMemory + CreateRemoteThread (injection). A suspiciously tiny import table often means the malware resolves APIs dynamically (LoadLibrary/GetProcAddress) to hide intent.",
      "vi": "Phần import lộ năng lực: vd WININET/WS2_32 (mạng), CryptEncrypt (crypto), VirtualAllocEx + WriteProcessMemory + CreateRemoteThread (tiêm tiến trình). Bảng import nhỏ đáng ngờ thường nghĩa là mã độc phân giải API động (LoadLibrary/GetProcAddress) để giấu ý đồ."
    }
  },

  {
    "app": "F",
    "sec": "f2",
    "secLabel": {
      "en": "F2 — Functionality Identification",
      "vi": "F2 — Nhận diện chức năng"
    },
    "q": {
      "en": "A loop calling recv() then writing to a buffer and calling a decode routine most likely implements:",
      "vi": "Một vòng lặp gọi recv() rồi ghi vào buffer và gọi thủ tục giải mã khả năng cao hiện thực:"
    },
    "opts": [
      {
        "en": "A network receive loop reading C2 commands",
        "vi": "Vòng lặp nhận dữ liệu mạng đọc lệnh C2"
      },
      {
        "en": "A file-read loop parsing a config file",
        "vi": "Vòng lặp đọc file phân tích cấu hình"
      },
      {
        "en": "A decompression routine inflating a resource",
        "vi": "Thủ tục giải nén bung một resource"
      },
      {
        "en": "A logging routine flushing buffers to disk",
        "vi": "Thủ tục ghi log đẩy buffer ra đĩa"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "recv()/WSARecv in a loop feeding a decode/dispatch routine is the classic shape of a C2 receive loop reading and decrypting commands. Identifying send/receive loops and persistence calls lets you summarise malware capability without full line-by-line reversing.",
      "vi": "recv()/WSARecv trong vòng lặp đưa vào thủ tục giải mã/điều phối là hình hài kinh điển của vòng nhận C2 đọc và giải mã lệnh. Nhận diện vòng gửi/nhận và lời gọi persistence cho phép tóm tắt năng lực mã độc mà không cần dịch ngược từng dòng."
    }
  },

  {
    "app": "F",
    "sec": "f9",
    "secLabel": {
      "en": "F9 — Hiding Techniques",
      "vi": "F9 — Kỹ thuật ẩn giấu"
    },
    "q": {
      "en": "SSDT hooking is a rootkit technique that works by:",
      "vi": "Hook SSDT là kỹ thuật rootkit hoạt động bằng cách:"
    },
    "opts": [
      {
        "en": "Redirecting SSDT entries to attacker code",
        "vi": "Chuyển hướng các mục SSDT sang mã của kẻ tấn công"
      },
      {
        "en": "Patching the IAT of a user-mode process",
        "vi": "Vá IAT của một tiến trình user-mode"
      },
      {
        "en": "Installing an inline detour inside ntdll",
        "vi": "Cài đặt inline detour bên trong ntdll"
      },
      {
        "en": "Registering a file-system minifilter driver",
        "vi": "Đăng ký driver minifilter cho hệ thống file"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "The SSDT maps system-call numbers to kernel function addresses. A kernel rootkit overwrites SSDT entries so calls (e.g. enumerate processes/files) route through attacker code that hides artefacts. Other hiding methods include filter drivers and process-list (DKOM) manipulation.",
      "vi": "SSDT ánh xạ số system-call tới địa chỉ hàm kernel. Rootkit kernel ghi đè các mục SSDT để lời gọi (vd liệt kê tiến trình/file) đi qua mã của kẻ tấn công nhằm ẩn artefact. Các cách ẩn khác gồm filter driver và thao túng danh sách tiến trình (DKOM)."
    }
  },

  {
    "app": "F",
    "sec": "f12",
    "secLabel": {
      "en": "F12 — Behavioural Analysis",
      "vi": "F12 — Phân tích hành vi"
    },
    "q": {
      "en": "Malware that checks for VM artefacts (MAC OUIs, registry keys, low core count) and exits is using:",
      "vi": "Mã độc kiểm tra dấu hiệu máy ảo (OUI của MAC, khóa registry, ít nhân CPU) rồi thoát là đang dùng:"
    },
    "opts": [
      {
        "en": "Sandbox/VM evasion",
        "vi": "Né tránh sandbox/VM"
      },
      {
        "en": "Environment keying to one target host",
        "vi": "Khóa môi trường theo một máy mục tiêu"
      },
      {
        "en": "License/anti-piracy enforcement",
        "vi": "Thực thi chống vi phạm bản quyền"
      },
      {
        "en": "Hardware capability detection",
        "vi": "Phát hiện năng lực phần cứng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Many samples detect analysis environments (VMware/VirtualBox artefacts, debugger presence, sleep-skipping, user-interaction checks) and stay dormant to defeat automated sandboxes. Counter with hardened/disguised VMs, longer run times and bare-metal detonation.",
      "vi": "Nhiều mẫu phát hiện môi trường phân tích (dấu vết VMware/VirtualBox, sự hiện diện debugger, bỏ qua sleep, kiểm tra tương tác người dùng) và nằm im để vô hiệu sandbox tự động. Đối phó bằng VM được gia cố/ngụy trang, thời gian chạy lâu hơn và kích nổ trên máy thật (bare-metal)."
    }
  },

  {
    "app": "F",
    "sec": "f8",
    "secLabel": {
      "en": "F8 — Windows Executable File Formats",
      "vi": "F8 — Định dạng file thực thi Windows"
    },
    "q": {
      "en": "A PE section named \".UPX0\" / \".UPX1\" with high entropy usually means:",
      "vi": "Một section PE tên \".UPX0\" / \".UPX1\" với entropy cao thường nghĩa là:"
    },
    "opts": [
      {
        "en": "It is packed with UPX and should be unpacked first",
        "vi": "Đã được pack bằng UPX, cần giải nén trước khi phân tích"
      },
      {
        "en": "It is a clean Microsoft-signed binary",
        "vi": "Là một binary sạch do Microsoft ký"
      },
      {
        "en": "It contains only debugging symbols",
        "vi": "Chỉ chứa các ký hiệu debug"
      },
      {
        "en": "It is a managed .NET assembly",
        "vi": "Là một assembly .NET managed"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "UPX-named sections and high entropy indicate runtime-unpacking. Static analysis sees only the stub until unpacked (often \"upx -d\", or dump from memory after it self-unpacks). Unusual/renamed packed sections are themselves a suspicion indicator.",
      "vi": "Section tên UPX và entropy cao cho thấy giải nén lúc chạy. Phân tích tĩnh chỉ thấy phần stub cho tới khi giải nén (thường \"upx -d\", hoặc dump từ bộ nhớ sau khi nó tự giải nén). Section đã pack tên lạ/đổi tên bản thân là một chỉ dấu nghi ngờ."
    },
    "note": {
      "en": "Packed code defeats static analysis — unpack (or dump from memory) first.",
      "vi": "Mã đã pack vô hiệu phân tích tĩnh — hãy giải nén (hoặc dump từ bộ nhớ) trước."
    }
  },

  {
    "app": "F",
    "sec": "f2",
    "secLabel": {
      "en": "F2 — Functionality Identification",
      "vi": "F2 — Nhận diện chức năng"
    },
    "q": {
      "en": "Strings in a binary like \"HKCU\\...\\Run\", \"schtasks\", or a service name most likely indicate:",
      "vi": "Các chuỗi trong binary như \"HKCU\\...\\Run\", \"schtasks\", hay một tên service khả năng cao cho biết:"
    },
    "opts": [
      {
        "en": "A persistence mechanism",
        "vi": "Một cơ chế duy trì (persistence)"
      },
      {
        "en": "A privilege-escalation exploit",
        "vi": "Một khai thác leo thang đặc quyền"
      },
      {
        "en": "A credential-dumping routine",
        "vi": "Một thủ tục dump thông tin đăng nhập"
      },
      {
        "en": "A lateral-movement module",
        "vi": "Một module di chuyển ngang"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Run keys, scheduled tasks and service installation are classic persistence techniques. Spotting these strings/APIs (RegSetValue on Run, CreateService, schtasks) quickly identifies how malware survives reboot — a key behaviour to report.",
      "vi": "Khóa Run, scheduled task và cài service là kỹ thuật persistence kinh điển. Phát hiện các chuỗi/API này (RegSetValue vào Run, CreateService, schtasks) nhanh chóng xác định cách mã độc sống sót qua reboot — một hành vi quan trọng cần báo cáo."
    }
  },

  {
    "app": "F",
    "sec": "f12",
    "secLabel": {
      "en": "F12 — Behavioural Analysis",
      "vi": "F12 — Phân tích hành vi"
    },
    "q": {
      "en": "To safely observe a sample's real network callbacks without giving it internet access, you would use:",
      "vi": "Để quan sát an toàn các callback mạng thật của mẫu mà không cho nó truy cập internet, bạn sẽ dùng:"
    },
    "opts": [
      {
        "en": "A simulated internet service running in the lab",
        "vi": "Một dịch vụ internet giả lập chạy trong phòng lab"
      },
      {
        "en": "A transparent proxy to the real internet",
        "vi": "Một proxy trong suốt ra internet thật"
      },
      {
        "en": "A packet sniffer on the host NIC alone",
        "vi": "Chỉ một bộ bắt gói trên NIC máy chủ"
      },
      {
        "en": "A host firewall blocking all egress",
        "vi": "Một tường lửa host chặn toàn bộ egress"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "INetSim/FakeNet emulate DNS, HTTP(S), SMTP etc., so the malware \"thinks\" it reached the internet and reveals its C2 domains, URLs and beacon patterns — while the lab stays isolated. Never let live malware touch real/production networks.",
      "vi": "INetSim/FakeNet giả lập DNS, HTTP(S), SMTP, v.v., nên mã độc \"tưởng\" đã ra internet và lộ ra domain C2, URL và mẫu beacon — trong khi lab vẫn cách ly. Tuyệt đối không để mã độc sống chạm mạng thật/production."
    },
    "note": {
      "en": "Isolate the lab; simulate the internet to capture C2 without real exposure.",
      "vi": "Cách ly lab; mô phỏng internet để bắt C2 mà không phơi nhiễm thật."
    }
  },

  {
    "app": "F",
    "sec": "f2",
    "secLabel": {
      "en": "F2 — Functionality Identification",
      "vi": "F2 — Nhận diện chức năng"
    },
    "q": {
      "en": "Imports of WSAStartup, socket, connect and send in a binary indicate:",
      "vi": "Việc import WSAStartup, socket, connect và send trong một binary cho biết:"
    },
    "opts": [
      {
        "en": "Network communication capability",
        "vi": "Khả năng giao tiếp mạng"
      },
      {
        "en": "File-encryption capability",
        "vi": "Khả năng mã hóa file"
      },
      {
        "en": "Keystroke-logging capability",
        "vi": "Khả năng ghi phím"
      },
      {
        "en": "Screen-capture capability",
        "vi": "Khả năng chụp màn hình"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Winsock APIs (WSAStartup/socket/connect/send/recv) reveal network functionality — a strong hint of C2, downloading or exfiltration. Reading the import table to infer capability is a fast, CPIA-level way to triage a sample without full reversing.",
      "vi": "Các API Winsock (WSAStartup/socket/connect/send/recv) lộ chức năng mạng — gợi ý mạnh về C2, tải về hay exfil. Đọc bảng import để suy ra năng lực là cách triage nhanh, đúng cấp CPIA, không cần dịch ngược toàn bộ."
    }
  },

  {
    "app": "F",
    "sec": "f2",
    "secLabel": {
      "en": "F2 — Functionality Identification",
      "vi": "F2 — Nhận diện chức năng"
    },
    "q": {
      "en": "Calls to SetWindowsHookEx(WH_KEYBOARD_LL) or GetAsyncKeyState most likely implement:",
      "vi": "Các lời gọi SetWindowsHookEx(WH_KEYBOARD_LL) hoặc GetAsyncKeyState khả năng cao hiện thực:"
    },
    "opts": [
      {
        "en": "A keylogger",
        "vi": "Một keylogger"
      },
      {
        "en": "A clipboard stealer",
        "vi": "Một bộ đánh cắp clipboard"
      },
      {
        "en": "A browser form-grabber",
        "vi": "Một form-grabber cho trình duyệt"
      },
      {
        "en": "A screenshot grabber",
        "vi": "Một bộ chụp màn hình"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Low-level keyboard hooks and polling key state are classic keylogging techniques. Recognising the API pattern identifies the capability quickly. Related spyware APIs include clipboard access and screen capture (BitBlt) — all worth flagging.",
      "vi": "Hook bàn phím cấp thấp và polling trạng thái phím là kỹ thuật keylogging kinh điển. Nhận ra mẫu API xác định nhanh năng lực. Các API spyware liên quan gồm truy cập clipboard và chụp màn hình (BitBlt) — đều đáng gắn cờ."
    }
  },

  {
    "app": "F",
    "sec": "f2",
    "secLabel": {
      "en": "F2 — Functionality Identification",
      "vi": "F2 — Nhận diện chức năng"
    },
    "q": {
      "en": "A constant table starting 0x63,0x7C,0x77,0x7B,0xF2,0x6B,0x6F,0xC5... most likely indicates:",
      "vi": "Một bảng hằng bắt đầu 0x63,0x7C,0x77,0x7B,0xF2,0x6B,0x6F,0xC5... khả năng cao cho biết:"
    },
    "opts": [
      {
        "en": "The AES / Rijndael S-box",
        "vi": "S-box của AES / Rijndael"
      },
      {
        "en": "The SHA-256 round constants",
        "vi": "Các hằng vòng của SHA-256"
      },
      {
        "en": "The DES permutation tables",
        "vi": "Các bảng hoán vị của DES"
      },
      {
        "en": "A CRC32 lookup table",
        "vi": "Một bảng tra CRC32"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "That byte sequence is the AES S-box, a recognisable constant that betrays AES use even without analysing the maths. Identifying standard crypto constants/tables (AES S-box, MD5/SHA init values, TEA delta 0x9E3779B9) is core to functionality identification.",
      "vi": "Dãy byte đó là S-box của AES, một hằng số nhận ra được, để lộ việc dùng AES kể cả khi không phân tích phép toán. Nhận diện hằng/bảng crypto chuẩn (S-box AES, giá trị khởi tạo MD5/SHA, delta TEA 0x9E3779B9) là cốt lõi của nhận diện chức năng."
    },
    "note": {
      "en": "Recognise crypto constants to identify algorithms without full math analysis.",
      "vi": "Nhận diện hằng crypto để xác định thuật toán mà không cần phân tích toán đầy đủ."
    }
  },

  {
    "app": "F",
    "sec": "f2",
    "secLabel": {
      "en": "F2 — Functionality Identification",
      "vi": "F2 — Nhận diện chức năng"
    },
    "q": {
      "en": "Malware calling CreateMutex with a fixed name at startup is usually:",
      "vi": "Mã độc gọi CreateMutex với một tên cố định lúc khởi động thường là:"
    },
    "opts": [
      {
        "en": "An infection marker to avoid running twice on one host",
        "vi": "Dấu hiệu lây nhiễm để tránh chạy hai lần trên cùng một máy"
      },
      {
        "en": "A synchronisation lock for its worker threads",
        "vi": "Một khóa đồng bộ cho các luồng worker của nó"
      },
      {
        "en": "A named pipe opened for C2 communication",
        "vi": "Một named pipe mở để liên lạc C2"
      },
      {
        "en": "A registry key written for persistence",
        "vi": "Một khóa registry ghi để duy trì"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Many families create a unique named mutex so a second copy detects it and exits, preventing double infection. The fixed mutex name is also a handy IoC/host-based signature and can be used for vaccination. Recognising this pattern speeds identification.",
      "vi": "Nhiều họ tạo một mutex tên duy nhất để bản thứ hai phát hiện và thoát, tránh lây nhiễm kép. Tên mutex cố định cũng là một IoC/signature phía host tiện lợi và có thể dùng để \"tiêm vaccine\". Nhận ra mẫu này giúp định danh nhanh."
    }
  },

  {
    "app": "F",
    "sec": "f2",
    "secLabel": {
      "en": "F2 — Functionality Identification",
      "vi": "F2 — Nhận diện chức năng"
    },
    "q": {
      "en": "A loop reading bytes from a socket then calling a decode routine and a dispatch/switch is characteristic of:",
      "vi": "Một vòng lặp đọc byte từ socket rồi gọi thủ tục giải mã và một dispatch/switch là đặc trưng của:"
    },
    "opts": [
      {
        "en": "A C2 command-handling loop",
        "vi": "Một vòng lặp xử lý lệnh C2"
      },
      {
        "en": "A network protocol parser on a server",
        "vi": "Một bộ phân tích giao thức mạng trên server"
      },
      {
        "en": "An RPC marshalling routine",
        "vi": "Một thủ tục marshalling RPC"
      },
      {
        "en": "A message-queue consumer",
        "vi": "Một bộ tiêu thụ hàng đợi tin nhắn"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Receive → decrypt/decode → dispatch on a command code is the canonical shape of a C2 agent's command loop. Identifying send/receive loops and the command handler lets you summarise capability and often enumerate supported commands.",
      "vi": "Nhận → giải mã → điều phối theo mã lệnh là hình hài kinh điển của vòng xử lý lệnh của một agent C2. Nhận diện vòng gửi/nhận và bộ xử lý lệnh cho phép tóm tắt năng lực và thường liệt kê được các lệnh hỗ trợ."
    }
  },

  {
    "app": "F",
    "sec": "f2",
    "secLabel": {
      "en": "F2 — Functionality Identification",
      "vi": "F2 — Nhận diện chức năng"
    },
    "q": {
      "en": "Imports of RegSetValueEx targeting ...\\CurrentVersion\\Run indicate:",
      "vi": "Việc import RegSetValueEx nhắm tới ...\\CurrentVersion\\Run cho biết:"
    },
    "opts": [
      {
        "en": "Persistence via a registry autostart entry",
        "vi": "Duy trì qua một mục tự khởi động trong registry"
      },
      {
        "en": "Storing decrypted configuration data",
        "vi": "Lưu dữ liệu cấu hình đã giải mã"
      },
      {
        "en": "Disabling an installed security product",
        "vi": "Vô hiệu hóa một sản phẩm bảo mật đã cài"
      },
      {
        "en": "Reading the system proxy settings",
        "vi": "Đọc thiết lập proxy của hệ thống"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Writing to a Run key establishes autostart persistence. Spotting the API plus the targeted key reveals how the sample survives reboot. Other persistence APIs include CreateService and task-scheduler COM interfaces.",
      "vi": "Ghi vào khóa Run thiết lập persistence tự khởi động. Phát hiện API cùng khóa được nhắm tới lộ ra cách mẫu sống sót qua reboot. Các API persistence khác gồm CreateService và giao diện COM của task-scheduler."
    }
  },

  {
    "app": "F",
    "sec": "f2",
    "secLabel": {
      "en": "F2 — Functionality Identification",
      "vi": "F2 — Nhận diện chức năng"
    },
    "q": {
      "en": "A binary with almost no meaningful strings and a tiny import table most likely:",
      "vi": "Một binary gần như không có chuỗi có nghĩa và bảng import rất nhỏ khả năng cao:"
    },
    "opts": [
      {
        "en": "Is packed/obfuscated, resolving APIs at runtime",
        "vi": "Bị pack/obfuscate, phân giải API lúc chạy"
      },
      {
        "en": "Is a statically-linked release build",
        "vi": "Là một bản build liên kết tĩnh"
      },
      {
        "en": "Is a small command-line utility",
        "vi": "Là một tiện ích dòng lệnh nhỏ"
      },
      {
        "en": "Was compiled without optimisation",
        "vi": "Được biên dịch mà không tối ưu"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Few strings + a minimal import table (often just LoadLibrary/GetProcAddress) signals packing/obfuscation with dynamic API resolution to hide intent from static analysis. The next step is unpacking (dynamically) and re-examining the unpacked imports/strings.",
      "vi": "Ít chuỗi + bảng import tối thiểu (thường chỉ LoadLibrary/GetProcAddress) báo hiệu pack/làm rối với phân giải API động để giấu ý đồ khỏi phân tích tĩnh. Bước tiếp theo là giải nén (động) và xem lại import/chuỗi đã giải nén."
    }
  },

  {
    "app": "F",
    "sec": "f2",
    "secLabel": {
      "en": "F2 — Functionality Identification",
      "vi": "F2 — Nhận diện chức năng"
    },
    "q": {
      "en": "Imports of InternetOpenUrl / URLDownloadToFile most directly indicate:",
      "vi": "Việc import InternetOpenUrl / URLDownloadToFile cho biết trực tiếp nhất:"
    },
    "opts": [
      {
        "en": "Downloader capability fetching a second stage",
        "vi": "Khả năng tải về, lấy payload giai đoạn hai"
      },
      {
        "en": "Keystroke-logging capability",
        "vi": "Khả năng ghi phím"
      },
      {
        "en": "Full disk-encryption capability",
        "vi": "Khả năng mã hóa toàn bộ đĩa"
      },
      {
        "en": "Process-memory scanning capability",
        "vi": "Khả năng quét bộ nhớ tiến trình"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "WinINet/URLMon download APIs reveal a downloader/dropper that retrieves additional payloads from a URL. Combined with execution APIs (CreateProcess/ShellExecute), it confirms a download-and-run chain — a very common first-stage behaviour.",
      "vi": "Các API tải về WinINet/URLMon lộ một downloader/dropper lấy payload bổ sung từ một URL. Kết hợp với API thực thi (CreateProcess/ShellExecute), nó xác nhận chuỗi tải-và-chạy — một hành vi giai đoạn đầu rất phổ biến."
    }
  },

  {
    "app": "F",
    "sec": "f2",
    "secLabel": {
      "en": "F2 — Functionality Identification",
      "vi": "F2 — Nhận diện chức năng"
    },
    "q": {
      "en": "A custom Base64 routine using the alphabet \"...XYZabc...+/\" but in a non-standard order suggests:",
      "vi": "Một thủ tục Base64 tùy biến dùng bảng chữ \"...XYZabc...+/\" nhưng theo thứ tự không chuẩn gợi ý:"
    },
    "opts": [
      {
        "en": "A modified/keyed Base64 to obfuscate data",
        "vi": "Một Base64 sửa đổi/có khóa để che dữ liệu"
      },
      {
        "en": "A standards-compliant MIME encoder",
        "vi": "Một bộ mã hóa MIME đúng chuẩn"
      },
      {
        "en": "A strong symmetric cipher",
        "vi": "Một mã đối xứng mạnh"
      },
      {
        "en": "A lossless compression scheme",
        "vi": "Một sơ đồ nén không mất dữ liệu"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Malware often uses Base64 with a shuffled/custom alphabet so standard decoders produce garbage, lightly obfuscating config/C2 data. It is still trivially reversible once you recover the alphabet — encoding, not encryption.",
      "vi": "Mã độc thường dùng Base64 với bảng chữ bị xáo trộn/tùy biến để bộ giải mã chuẩn cho ra rác, làm rối nhẹ dữ liệu config/C2. Vẫn đảo ngược dễ dàng khi khôi phục được bảng chữ — encoding, không phải mã hóa."
    }
  },

  {
    "app": "F",
    "sec": "f2",
    "secLabel": {
      "en": "F2 — Functionality Identification",
      "vi": "F2 — Nhận diện chức năng"
    },
    "q": {
      "en": "Imports of EnumProcesses, OpenProcess and ReadProcessMemory together suggest the sample:",
      "vi": "Việc import EnumProcesses, OpenProcess và ReadProcessMemory cùng nhau gợi ý mẫu:"
    },
    "opts": [
      {
        "en": "It inspects or injects into other processes",
        "vi": "Nó kiểm tra hoặc tiêm vào các tiến trình khác"
      },
      {
        "en": "It enumerates active network connections",
        "vi": "Nó liệt kê các kết nối mạng đang hoạt động"
      },
      {
        "en": "It scans the filesystem for documents",
        "vi": "Nó quét hệ thống file để tìm tài liệu"
      },
      {
        "en": "It monitors registry key changes",
        "vi": "Nó theo dõi thay đổi các khóa registry"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Enumerating and reading other processes' memory is typical of credential dumpers (e.g. scraping LSASS) or injectors selecting a target. Combined with WriteProcessMemory/CreateRemoteThread it points to process injection. These API clusters quickly reveal intent.",
      "vi": "Liệt kê và đọc bộ nhớ tiến trình khác là điển hình của trình dump credential (vd cào LSASS) hoặc injector chọn mục tiêu. Kết hợp với WriteProcessMemory/CreateRemoteThread thì chỉ tới process injection. Các cụm API này lộ nhanh ý đồ."
    }
  },

  {
    "app": "F",
    "sec": "f2",
    "secLabel": {
      "en": "F2 — Functionality Identification",
      "vi": "F2 — Nhận diện chức năng"
    },
    "q": {
      "en": "BitBlt and GetDC calls in a sample most likely provide:",
      "vi": "Các lời gọi BitBlt và GetDC trong một mẫu khả năng cao cung cấp:"
    },
    "opts": [
      {
        "en": "Screen-capture / screenshots",
        "vi": "Chụp màn hình / screenshot"
      },
      {
        "en": "Microphone audio recording",
        "vi": "Ghi âm từ micro"
      },
      {
        "en": "Webcam image capture",
        "vi": "Chụp ảnh từ webcam"
      },
      {
        "en": "Clipboard monitoring",
        "vi": "Theo dõi clipboard"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "GDI calls like GetDC + BitBlt copy screen contents, implementing screenshots — common in spyware/RATs. Recognising graphics-capture APIs identifies surveillance capability alongside keylogging and clipboard theft.",
      "vi": "Các lời gọi GDI như GetDC + BitBlt sao chép nội dung màn hình, hiện thực chụp màn hình — phổ biến trong spyware/RAT. Nhận diện API chụp đồ họa xác định năng lực giám sát bên cạnh keylogging và trộm clipboard."
    }
  },

  {
    "app": "F",
    "sec": "f2",
    "secLabel": {
      "en": "F2 — Functionality Identification",
      "vi": "F2 — Nhận diện chức năng"
    },
    "q": {
      "en": "A value 0x9E3779B9 used in a tight rounds loop strongly suggests:",
      "vi": "Một giá trị 0x9E3779B9 dùng trong một vòng lặp nhiều round gợi ý mạnh:"
    },
    "opts": [
      {
        "en": "A TEA/XTEA cipher",
        "vi": "Một mã TEA/XTEA"
      },
      {
        "en": "An MD5 hashing routine",
        "vi": "Một thủ tục băm MD5"
      },
      {
        "en": "An RC4 key schedule",
        "vi": "Một lịch khóa RC4"
      },
      {
        "en": "A CRC32 checksum",
        "vi": "Một checksum CRC32"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "0x9E3779B9 (derived from the golden ratio) is the TEA/XTEA delta added each round — a giveaway constant for that lightweight cipher family, which malware favours for small footprint. Constant recognition again identifies crypto fast.",
      "vi": "0x9E3779B9 (suy từ tỉ lệ vàng) là delta của TEA/XTEA cộng mỗi round — hằng số đặc trưng của họ mã nhẹ này, mà mã độc ưa dùng vì kích thước nhỏ. Nhận diện hằng lại giúp xác định crypto nhanh."
    }
  },

  {
    "app": "F",
    "sec": "f2",
    "secLabel": {
      "en": "F2 — Functionality Identification",
      "vi": "F2 — Nhận diện chức năng"
    },
    "q": {
      "en": "An initialisation loop filling a 256-byte array with 0..255 then permuting it by a key is characteristic of:",
      "vi": "Một vòng khởi tạo điền mảng 256 byte bằng 0..255 rồi hoán vị theo một khóa là đặc trưng của:"
    },
    "opts": [
      {
        "en": "RC4 key scheduling",
        "vi": "Lập lịch khóa RC4 (KSA)"
      },
      {
        "en": "AES key expansion",
        "vi": "Mở rộng khóa AES"
      },
      {
        "en": "A ChaCha20 state setup",
        "vi": "Thiết lập trạng thái ChaCha20"
      },
      {
        "en": "A SHA-1 message schedule",
        "vi": "Lịch thông điệp SHA-1"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Initialising S[0..255]=0..255 then permuting with the key is RC4's KSA, followed by the PRGA keystream loop. This recognisable structure identifies RC4 — common in malware for cheap stream encryption — without analysing the maths.",
      "vi": "Khởi tạo S[0..255]=0..255 rồi hoán vị theo khóa là KSA của RC4, theo sau bởi vòng keystream PRGA. Cấu trúc nhận ra được này xác định RC4 — phổ biến trong mã độc để mã hóa luồng rẻ — mà không cần phân tích phép toán."
    }
  },

  {
    "app": "F",
    "sec": "f2",
    "secLabel": {
      "en": "F2 — Functionality Identification",
      "vi": "F2 — Nhận diện chức năng"
    },
    "q": {
      "en": "A sample querying the registry/MAC/CPUID for VM artefacts and exiting if found is performing:",
      "vi": "Một mẫu truy vấn registry/MAC/CPUID tìm dấu hiệu VM rồi thoát nếu thấy đang thực hiện:"
    },
    "opts": [
      {
        "en": "Anti-analysis / sandbox evasion",
        "vi": "Chống phân tích / né sandbox"
      },
      {
        "en": "Environment keying to a victim",
        "vi": "Khóa môi trường theo nạn nhân"
      },
      {
        "en": "Outbound C2 beaconing",
        "vi": "Beaconing C2 ra ngoài"
      },
      {
        "en": "Hardware feature detection",
        "vi": "Phát hiện tính năng phần cứng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Checking for hypervisor signs (VM registry keys, known MAC OUIs, CPUID hypervisor bit, few cores) to bail out is sandbox/VM evasion. Documenting these checks is part of functionality identification and informs how to analyse the sample (hardened VM/bare metal).",
      "vi": "Kiểm tra dấu hiệu hypervisor (khóa registry VM, OUI MAC đã biết, bit hypervisor CPUID, ít nhân) để thoát là né sandbox/VM. Ghi nhận các kiểm tra này là một phần của nhận diện chức năng và định hướng cách phân tích mẫu (VM gia cố/máy thật)."
    }
  },

  {
    "app": "F",
    "sec": "f6",
    "secLabel": {
      "en": "F6 — Cryptographic Techniques",
      "vi": "F6 — Kỹ thuật mật mã"
    },
    "q": {
      "en": "The most reliable runtime way to recover a derived/decrypted key during reversing is to:",
      "vi": "Cách đáng tin nhất lúc chạy để khôi phục một khóa được dẫn xuất/giải mã khi dịch ngược là:"
    },
    "opts": [
      {
        "en": "Set a breakpoint after key setup and read the buffer",
        "vi": "Đặt breakpoint sau khi thiết lập khóa và đọc buffer"
      },
      {
        "en": "Statically guess the key from constants",
        "vi": "Đoán tĩnh khóa từ các hằng số"
      },
      {
        "en": "Brute-force every possible key",
        "vi": "Brute-force mọi khóa có thể"
      },
      {
        "en": "Disassemble the entire binary first",
        "vi": "Dịch ngược toàn bộ binary trước đã"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Even obfuscated keys are plaintext in memory at the moment of use. Setting a breakpoint after key expansion/derivation and dumping the buffer (or registers) reliably extracts the live key, defeating static obfuscation and key-derivation schemes.",
      "vi": "Khóa dù bị làm rối vẫn ở dạng rõ trong bộ nhớ tại thời điểm dùng. Đặt breakpoint sau khi mở rộng/dẫn xuất khóa và dump buffer (hoặc thanh ghi) trích đáng tin khóa sống, vô hiệu hóa obfuscation tĩnh và sơ đồ dẫn xuất khóa."
    }
  },

  {
    "app": "F",
    "sec": "f6",
    "secLabel": {
      "en": "F6 — Cryptographic Techniques",
      "vi": "F6 — Kỹ thuật mật mã"
    },
    "q": {
      "en": "A hard-coded XOR key found in a binary lets you decrypt strings if you also:",
      "vi": "Một khóa XOR hard-code tìm thấy trong binary cho phép giải mã chuỗi nếu bạn còn:"
    },
    "opts": [
      {
        "en": "Know the algorithm and XOR the ciphertext with it",
        "vi": "Biết thuật toán và XOR ciphertext với khóa đó"
      },
      {
        "en": "Obtain the malware's private RSA key",
        "vi": "Lấy được khóa RSA riêng của malware"
      },
      {
        "en": "Recover the AES initialisation vector",
        "vi": "Khôi phục IV của AES"
      },
      {
        "en": "Find the C2 server's password",
        "vi": "Tìm mật khẩu của máy chủ C2"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Once the key and the encrypted data location are known, XOR is symmetric and trivially reversible (ciphertext ⊕ key = plaintext). Static extraction of hard-coded keys plus the encrypted blob recovers config, C2 and strings without running the sample.",
      "vi": "Khi đã biết khóa và vị trí dữ liệu mã hóa, XOR đối xứng và đảo ngược dễ dàng (ciphertext ⊕ key = plaintext). Trích tĩnh khóa hard-code cùng khối mã hóa khôi phục config, C2 và chuỗi mà không cần chạy mẫu."
    }
  },

  {
    "app": "F",
    "sec": "f6",
    "secLabel": {
      "en": "F6 — Cryptographic Techniques",
      "vi": "F6 — Kỹ thuật mật mã"
    },
    "q": {
      "en": "You suspect a payload is single-byte XOR encrypted. A good way to recover the key is:",
      "vi": "Bạn nghi một payload bị XOR một byte. Cách tốt để khôi phục khóa là:"
    },
    "opts": [
      {
        "en": "Use known-plaintext or brute-force all 256 keys",
        "vi": "Dùng known-plaintext hoặc brute-force cả 256 khóa"
      },
      {
        "en": "Factor the modulus as you would for RSA",
        "vi": "Phân tích modulus như với RSA"
      },
      {
        "en": "Recover the AES round keys",
        "vi": "Khôi phục các khóa vòng của AES"
      },
      {
        "en": "Perform a meet-in-the-middle attack",
        "vi": "Thực hiện tấn công meet-in-the-middle"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Single-byte XOR has only 256 possible keys, so brute force is instant; or XOR a known plaintext (like an embedded PE's \"MZ\"/\"This program cannot be run\") against the blob to derive the key directly. This is why XOR is obfuscation, not real crypto.",
      "vi": "XOR một byte chỉ có 256 khóa khả dĩ nên brute force tức thì; hoặc XOR một plaintext đã biết (như \"MZ\"/\"This program cannot be run\" của một PE nhúng) với khối để suy trực tiếp khóa. Vì vậy XOR là làm rối, không phải mật mã thật."
    },
    "note": {
      "en": "Single-byte XOR: 256 keys — brute force or known-plaintext recovers it instantly.",
      "vi": "XOR một byte: 256 khóa — brute force hoặc known-plaintext khôi phục tức thì."
    }
  },

  {
    "app": "F",
    "sec": "f6",
    "secLabel": {
      "en": "F6 — Cryptographic Techniques",
      "vi": "F6 — Kỹ thuật mật mã"
    },
    "q": {
      "en": "An implementation weakness where the SAME IV/nonce is reused across messages can:",
      "vi": "Một điểm yếu hiện thực khi CÙNG một IV/nonce được tái dùng qua nhiều thông điệp có thể:"
    },
    "opts": [
      {
        "en": "Leak relationships between plaintexts",
        "vi": "Làm lộ quan hệ giữa các bản rõ"
      },
      {
        "en": "Strengthen message authentication",
        "vi": "Tăng cường xác thực thông điệp"
      },
      {
        "en": "Prevent replay attacks",
        "vi": "Ngăn các tấn công phát lại"
      },
      {
        "en": "Provide forward secrecy",
        "vi": "Cung cấp forward secrecy"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "IV/nonce reuse (e.g. in stream ciphers or CTR/GCM) is a classic implementation flaw: reusing a keystream lets an attacker XOR ciphertexts to cancel the keystream and recover plaintext relationships (or forge in GCM). Spotting such misuse is part of F6.",
      "vi": "Tái dùng IV/nonce (vd trong stream cipher hoặc CTR/GCM) là lỗi hiện thực kinh điển: dùng lại keystream cho phép kẻ tấn công XOR các ciphertext để triệt tiêu keystream và khôi phục quan hệ plaintext (hoặc giả mạo trong GCM). Phát hiện lạm dụng này là một phần của F6."
    }
  },

  {
    "app": "F",
    "sec": "f6",
    "secLabel": {
      "en": "F6 — Cryptographic Techniques",
      "vi": "F6 — Kỹ thuật mật mã"
    },
    "q": {
      "en": "Why might a malware author embed their own buggy crypto instead of a vetted library?",
      "vi": "Vì sao tác giả mã độc có thể nhúng crypto tự viết đầy lỗi thay vì một thư viện đã kiểm chứng?"
    },
    "opts": [
      {
        "en": "To stay small and evade signature detection",
        "vi": "Để gọn nhẹ và né phát hiện theo chữ ký"
      },
      {
        "en": "Because custom crypto is provably stronger",
        "vi": "Vì mã tự viết chắc chắn mạnh hơn"
      },
      {
        "en": "To meet a compliance requirement",
        "vi": "Để đáp ứng một yêu cầu tuân thủ"
      },
      {
        "en": "To enable hardware acceleration",
        "vi": "Để bật tăng tốc phần cứng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Custom/\"home-rolled\" crypto avoids large library imports and signature hits but frequently has flaws (weak keys, reused keystreams, predictable IVs) that let analysts decrypt config/C2 traffic. Identifying implementation weaknesses is a core F6 skill.",
      "vi": "Crypto tự viết tránh import thư viện lớn và trúng signature nhưng thường có lỗ hổng (khóa yếu, keystream tái dùng, IV dễ đoán) cho phép analyst giải mã traffic config/C2. Xác định điểm yếu hiện thực là kỹ năng F6 cốt lõi."
    }
  },

  {
    "app": "F",
    "sec": "f6",
    "secLabel": {
      "en": "F6 — Cryptographic Techniques",
      "vi": "F6 — Kỹ thuật mật mã"
    },
    "q": {
      "en": "After locating a decryption routine, the FASTEST way to read all decrypted strings is often to:",
      "vi": "Sau khi tìm thấy thủ tục giải mã, cách NHANH nhất để đọc mọi chuỗi đã giải mã thường là:"
    },
    "opts": [
      {
        "en": "Run it in a debugger and dump strings after decryption",
        "vi": "Chạy trong debugger và dump chuỗi sau khi giải mã"
      },
      {
        "en": "Statically XOR the .data section by hand",
        "vi": "XOR thủ công section .data"
      },
      {
        "en": "Carve strings from the on-disk binary",
        "vi": "Carve chuỗi từ binary trên đĩa"
      },
      {
        "en": "Submit the file to an AV scanner",
        "vi": "Nộp file cho một trình quét AV"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Strings encrypted at rest only appear in cleartext in memory after the routine runs. Dynamically running to a point past decryption and dumping process memory (or scripting the decryptor) recovers them en masse — faster than reversing each call by hand.",
      "vi": "Chuỗi mã hóa khi nằm yên chỉ hiện dạng rõ trong bộ nhớ sau khi thủ tục chạy. Chạy động tới một điểm sau giải mã rồi dump bộ nhớ tiến trình (hoặc viết script bộ giải mã) khôi phục chúng hàng loạt — nhanh hơn dịch ngược từng lời gọi thủ công."
    }
  },

  {
    "app": "F",
    "sec": "f6",
    "secLabel": {
      "en": "F6 — Cryptographic Techniques",
      "vi": "F6 — Kỹ thuật mật mã"
    },
    "q": {
      "en": "Spotting the constant 0x67452301 (and friends) being loaded into state variables indicates:",
      "vi": "Phát hiện hằng 0x67452301 (cùng nhóm) được nạp vào các biến trạng thái cho biết:"
    },
    "opts": [
      {
        "en": "An MD5/SHA-1-style hash initialisation",
        "vi": "Khởi tạo băm kiểu MD5/SHA-1"
      },
      {
        "en": "An AES S-box initialisation",
        "vi": "Khởi tạo S-box của AES"
      },
      {
        "en": "An RC4 state permutation",
        "vi": "Hoán vị trạng thái RC4"
      },
      {
        "en": "A CRC32 table being built",
        "vi": "Dựng một bảng CRC32"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "0x67452301/0xEFCDAB89/0x98BADCFE/0x10325476 are the MD5/SHA-1 initialisation constants. Loading them into state betrays a hashing routine. Identifying which crypto primitive is used guides what the malware does (integrity checks, key derivation, etc.).",
      "vi": "0x67452301/0xEFCDAB89/0x98BADCFE/0x10325476 là hằng khởi tạo MD5/SHA-1. Nạp chúng vào trạng thái để lộ một thủ tục băm. Xác định nguyên thủy crypto nào được dùng định hướng việc mã độc làm gì (kiểm tra toàn vẹn, dẫn xuất khóa, v.v.)."
    }
  },

  {
    "app": "F",
    "sec": "f6",
    "secLabel": {
      "en": "F6 — Cryptographic Techniques",
      "vi": "F6 — Kỹ thuật mật mã"
    },
    "q": {
      "en": "If malware encrypts C2 with AES but ships the key inside the binary, the practical impact is:",
      "vi": "Nếu mã độc mã hóa C2 bằng AES nhưng nhúng khóa ngay trong binary, tác động thực tế là:"
    },
    "opts": [
      {
        "en": "Analysts can extract the key and decrypt captured C2",
        "vi": "Analyst trích được khóa và giải mã C2 đã bắt"
      },
      {
        "en": "The captured traffic stays unbreakable",
        "vi": "Lưu lượng đã bắt vẫn không thể phá"
      },
      {
        "en": "Each session uses a fresh ephemeral key",
        "vi": "Mỗi phiên dùng một khóa tạm mới"
      },
      {
        "en": "AES becomes mathematically broken",
        "vi": "AES bị phá vỡ về mặt toán học"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Strong algorithms don't help if the key is embedded/recoverable. Extracting the hard-coded AES key (statically or from memory) lets you decrypt recorded C2/exfil traffic — a frequent win. Key material identification and extraction is the heart of F6.",
      "vi": "Thuật toán mạnh không giúp gì nếu khóa được nhúng/khôi phục được. Trích khóa AES hard-code (tĩnh hoặc từ bộ nhớ) cho phép giải mã traffic C2/exfil đã ghi — một thắng lợi thường gặp. Xác định và trích key material là trọng tâm của F6."
    }
  },

  {
    "app": "F",
    "sec": "f6",
    "secLabel": {
      "en": "F6 — Cryptographic Techniques",
      "vi": "F6 — Kỹ thuật mật mã"
    },
    "q": {
      "en": "Repeating 16-byte blocks visible in \"encrypted\" C2 output most likely reveal:",
      "vi": "Các khối 16 byte lặp lại thấy trong output C2 \"đã mã hóa\" khả năng cao tiết lộ:"
    },
    "opts": [
      {
        "en": "Use of ECB mode",
        "vi": "Việc dùng chế độ ECB"
      },
      {
        "en": "A secure CBC-mode stream",
        "vi": "Một luồng CBC an toàn"
      },
      {
        "en": "Authenticated GCM encryption",
        "vi": "Mã hóa GCM có xác thực"
      },
      {
        "en": "A one-time-pad scheme",
        "vi": "Một sơ đồ one-time-pad"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A block cipher in ECB mode encrypts equal plaintext blocks to equal ciphertext, so repeating 16-byte ciphertext patterns betray ECB and structured plaintext. This implementation weakness can leak data structure and aid decryption/analysis.",
      "vi": "Một block cipher ở chế độ ECB mã hóa các khối plaintext bằng nhau thành ciphertext bằng nhau, nên mẫu ciphertext 16 byte lặp lại để lộ ECB và plaintext có cấu trúc. Điểm yếu hiện thực này có thể làm lộ cấu trúc dữ liệu và hỗ trợ giải mã/phân tích."
    }
  },

  {
    "app": "F",
    "sec": "f6",
    "secLabel": {
      "en": "F6 — Cryptographic Techniques",
      "vi": "F6 — Kỹ thuật mật mã"
    },
    "q": {
      "en": "Why is a \"key\" that is just a fixed string hashed once cryptographically weak?",
      "vi": "Vì sao một \"khóa\" chỉ là một chuỗi cố định băm một lần lại yếu về mặt mật mã?"
    },
    "opts": [
      {
        "en": "It is static and identical on every infection, so analysts can reproduce it",
        "vi": "Nó cố định và giống nhau ở mọi lần lây nhiễm, nên analyst tái tạo được"
      },
      {
        "en": "The hash output is too short to use as a key",
        "vi": "Đầu ra băm quá ngắn để dùng làm khóa"
      },
      {
        "en": "Hashing is reversible, exposing the original input",
        "vi": "Băm có thể đảo ngược, làm lộ đầu vào gốc"
      },
      {
        "en": "It must be transmitted to the C2 in clear text",
        "vi": "Phải gửi tới C2 dưới dạng văn bản rõ"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A key derived from an embedded constant is identical on every infection and recoverable by analysts, so there is no real secrecy. Proper schemes use random salts/per-victim keys. Spotting trivial key derivation is part of finding implementation weaknesses.",
      "vi": "Một khóa dẫn xuất từ hằng nhúng là giống hệt ở mọi lần lây nhiễm và analyst khôi phục được, nên không có bí mật thật. Sơ đồ đúng dùng salt ngẫu nhiên/khóa theo từng nạn nhân. Phát hiện dẫn xuất khóa tầm thường là một phần của việc tìm điểm yếu hiện thực."
    }
  },

  {
    "app": "F",
    "sec": "f8",
    "secLabel": {
      "en": "F8 — Windows Executable File Formats",
      "vi": "F8 — Định dạng file thực thi Windows"
    },
    "q": {
      "en": "In a PE file, executable code conventionally resides in which section?",
      "vi": "Trong file PE, mã thực thi theo quy ước nằm ở section nào?"
    },
    "opts": [
      {
        "en": ".text",
        "vi": ".text"
      },
      {
        "en": ".rsrc",
        "vi": ".rsrc"
      },
      {
        "en": ".reloc",
        "vi": ".reloc"
      },
      {
        "en": ".data",
        "vi": ".data"
      }
    ],
    "correct": 0,
    "exp": {
      "en": ".text holds executable code; .data/.rdata hold initialised/read-only data (and imports), .rsrc holds resources (icons, dialogs, embedded files), .reloc holds relocations. Unusual section names, sizes or an executable .data/.rsrc can indicate packing or injection.",
      "vi": ".text giữ mã thực thi; .data/.rdata giữ dữ liệu khởi tạo/chỉ-đọc (và import), .rsrc giữ tài nguyên (icon, dialog, file nhúng), .reloc giữ relocation. Tên section bất thường, kích thước lạ hoặc .data/.rsrc có quyền thực thi có thể cho thấy pack hoặc tiêm."
    }
  },

  {
    "app": "F",
    "sec": "f8",
    "secLabel": {
      "en": "F8 — Windows Executable File Formats",
      "vi": "F8 — Định dạng file thực thi Windows"
    },
    "q": {
      "en": "The PE \"AddressOfEntryPoint\" specifies:",
      "vi": "\"AddressOfEntryPoint\" của PE chỉ định:"
    },
    "opts": [
      {
        "en": "Where execution begins when the image is loaded",
        "vi": "Nơi bắt đầu thực thi khi image được nạp"
      },
      {
        "en": "The base address the image prefers to load at",
        "vi": "Địa chỉ nền mà image muốn được nạp vào"
      },
      {
        "en": "The file offset of the import table",
        "vi": "Offset của bảng import trong file"
      },
      {
        "en": "The address of the export directory",
        "vi": "Địa chỉ của thư mục export"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "AddressOfEntryPoint (an RVA in the optional header) is where the loader transfers control. In packed samples it points into the unpacking stub; finding the Original Entry Point (OEP) after unpacking is a key reversing milestone. TLS callbacks can run even before it.",
      "vi": "AddressOfEntryPoint (một RVA trong optional header) là nơi loader chuyển quyền điều khiển. Ở mẫu đã pack nó trỏ vào stub giải nén; tìm Original Entry Point (OEP) sau khi giải nén là một mốc dịch ngược quan trọng. TLS callback có thể chạy cả trước nó."
    }
  },

  {
    "app": "F",
    "sec": "f8",
    "secLabel": {
      "en": "F8 — Windows Executable File Formats",
      "vi": "F8 — Định dạng file thực thi Windows"
    },
    "q": {
      "en": "A PE section marked both writable and executable (W+X) with very high entropy suggests:",
      "vi": "Một section PE được đánh dấu vừa ghi vừa thực thi (W+X) với entropy rất cao gợi ý:"
    },
    "opts": [
      {
        "en": "A packed/self-modifying section unpacked at runtime",
        "vi": "Một section bị pack/tự sửa, được giải nén lúc chạy"
      },
      {
        "en": "Normal optimised compiler output",
        "vi": "Đầu ra trình biên dịch tối ưu bình thường"
      },
      {
        "en": "A read-only resource section (.rsrc)",
        "vi": "Một section tài nguyên chỉ đọc (.rsrc)"
      },
      {
        "en": "A constant data section (.rdata)",
        "vi": "Một section dữ liệu hằng (.rdata)"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Clean compilers separate writable data from executable code. A W+X, high-entropy section is typical of packers that decompress/decrypt code into it and then run it — a strong packing indicator. Dump after unpacking to analyse the real code.",
      "vi": "Trình biên dịch sạch tách dữ liệu ghi khỏi mã thực thi. Một section W+X, entropy cao là điển hình của packer giải nén/giải mã code vào đó rồi chạy — một dấu hiệu pack mạnh. Dump sau khi giải nén để phân tích mã thật."
    }
  },

  {
    "app": "F",
    "sec": "f8",
    "secLabel": {
      "en": "F8 — Windows Executable File Formats",
      "vi": "F8 — Định dạng file thực thi Windows"
    },
    "q": {
      "en": "Data appended AFTER the last PE section (an \"overlay\") is often used by malware to store:",
      "vi": "Dữ liệu nối SAU section PE cuối (\"overlay\") thường được mã độc dùng để lưu:"
    },
    "opts": [
      {
        "en": "Encrypted config or a second-stage payload",
        "vi": "Cấu hình mã hóa hoặc payload giai đoạn hai"
      },
      {
        "en": "The PE import address table",
        "vi": "Bảng địa chỉ nhập (IAT) của PE"
      },
      {
        "en": "Debugging symbols for the binary",
        "vi": "Các ký hiệu debug của binary"
      },
      {
        "en": "The base relocation table",
        "vi": "Bảng relocation cơ sở"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "An overlay is extra data beyond the headers-described sections; installers use it legitimately, but malware hides encrypted config, embedded payloads or droppable files there. Checking for and carving overlays is a standard PE analysis step.",
      "vi": "Overlay là dữ liệu thừa nằm ngoài các section mà header mô tả; trình cài dùng nó hợp lệ, nhưng mã độc giấu config mã hóa, payload nhúng hoặc file để thả ở đó. Kiểm tra và carve overlay là một bước phân tích PE tiêu chuẩn."
    }
  },

  {
    "app": "F",
    "sec": "f8",
    "secLabel": {
      "en": "F8 — Windows Executable File Formats",
      "vi": "F8 — Định dạng file thực thi Windows"
    },
    "q": {
      "en": "A PE \"TLS callback\" is notable to a reverse engineer because it:",
      "vi": "Một \"TLS callback\" của PE đáng chú ý với người dịch ngược vì nó:"
    },
    "opts": [
      {
        "en": "It runs before the main entry point",
        "vi": "Nó chạy trước entry point chính"
      },
      {
        "en": "It runs only when the process exits",
        "vi": "Nó chỉ chạy khi tiến trình thoát"
      },
      {
        "en": "It stores thread-local storage data",
        "vi": "Nó lưu dữ liệu thread-local storage"
      },
      {
        "en": "It is the program's exception handler",
        "vi": "Nó là trình xử lý ngoại lệ của chương trình"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Thread Local Storage callbacks run before AddressOfEntryPoint, so malware uses them to perform anti-debugging checks or unpacking before an analyst's breakpoint at the entry point fires. Always check the TLS directory when reversing.",
      "vi": "TLS callback chạy trước AddressOfEntryPoint, nên mã độc dùng chúng để thực hiện kiểm tra anti-debug hoặc giải nén trước khi breakpoint của analyst tại entry point kích hoạt. Luôn kiểm tra TLS directory khi dịch ngược."
    }
  },

  {
    "app": "F",
    "sec": "f8",
    "secLabel": {
      "en": "F8 — Windows Executable File Formats",
      "vi": "F8 — Định dạng file thực thi Windows"
    },
    "q": {
      "en": "The PE optional header's \"TimeDateStamp\" (compile timestamp) should be treated as:",
      "vi": "\"TimeDateStamp\" (mốc thời gian biên dịch) trong optional header của PE nên được xem là:"
    },
    "opts": [
      {
        "en": "A useful but forgeable clue to corroborate",
        "vi": "Một manh mối hữu ích nhưng giả mạo được, cần đối chiếu"
      },
      {
        "en": "An infallible record of the true build time",
        "vi": "Bản ghi không thể sai về thời điểm build thật"
      },
      {
        "en": "The exact time the file was last run",
        "vi": "Thời điểm chính xác file được chạy lần cuối"
      },
      {
        "en": "The name of the build machine",
        "vi": "Tên của máy đã build"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "The compile timestamp can hint at build date and cluster samples, but it is trivially altered or zeroed and some toolchains randomise it. Use it as a soft indicator alongside the Rich header, PDB paths and other artefacts — never as ground truth.",
      "vi": "Mốc thời gian biên dịch có thể gợi ý ngày dựng và gom mẫu, nhưng dễ bị sửa hoặc zero hóa và một số toolchain ngẫu nhiên hóa nó. Dùng nó như một chỉ dấu mềm cùng Rich header, đường dẫn PDB và artefact khác — không bao giờ coi là sự thật tuyệt đối."
    }
  },

  {
    "app": "F",
    "sec": "f8",
    "secLabel": {
      "en": "F8 — Windows Executable File Formats",
      "vi": "F8 — Định dạng file thực thi Windows"
    },
    "q": {
      "en": "How can you tell a PE is a DLL rather than an EXE?",
      "vi": "Làm sao biết một PE là DLL chứ không phải EXE?"
    },
    "opts": [
      {
        "en": "The IMAGE_FILE_DLL characteristic flag is set",
        "vi": "Cờ đặc trưng IMAGE_FILE_DLL được bật"
      },
      {
        "en": "It has no entry point at all",
        "vi": "Nó hoàn toàn không có entry point"
      },
      {
        "en": "Its subsystem is set to \"native\"",
        "vi": "Subsystem của nó được đặt là \"native\""
      },
      {
        "en": "It lacks any import table",
        "vi": "Nó thiếu bảng import"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "The Characteristics field sets IMAGE_FILE_DLL for DLLs, which typically expose an export table and DllMain. Malicious DLLs are loaded via rundll32, regsvr32, service hosts or side-loading. Knowing the type guides how it is meant to be executed.",
      "vi": "Trường Characteristics đặt IMAGE_FILE_DLL cho DLL, vốn thường có export table và DllMain. DLL độc hại được nạp qua rundll32, regsvr32, service host hoặc side-loading. Biết loại định hướng cách nó được dự kiến thực thi."
    }
  },

  {
    "app": "F",
    "sec": "f8",
    "secLabel": {
      "en": "F8 — Windows Executable File Formats",
      "vi": "F8 — Định dạng file thực thi Windows"
    },
    "q": {
      "en": "The PE \"Rich header\" can help an analyst by:",
      "vi": "\"Rich header\" của PE có thể giúp analyst bằng cách:"
    },
    "opts": [
      {
        "en": "By fingerprinting the build toolchain to cluster samples",
        "vi": "Bằng cách lấy dấu chuỗi công cụ build để gom nhóm mẫu"
      },
      {
        "en": "By revealing the embedded C2 domain",
        "vi": "Bằng cách lộ domain C2 nhúng"
      },
      {
        "en": "By listing the imported API functions",
        "vi": "Bằng cách liệt kê các hàm API được nhập"
      },
      {
        "en": "By storing the file's digital signature",
        "vi": "Bằng cách lưu chữ ký số của file"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "The undocumented Rich header (added by the MS linker) records compiler/linker product IDs and counts, giving a toolchain fingerprint that can link samples to the same build environment — an attribution/clustering aid. It can be stripped/forged, so corroborate.",
      "vi": "Rich header (do MS linker thêm, không có tài liệu chính thức) ghi product ID và số đếm của compiler/linker, cho một fingerprint toolchain có thể liên kết các mẫu với cùng môi trường dựng — hỗ trợ attribution/gom nhóm. Nó có thể bị xóa/giả nên cần đối chiếu."
    }
  },

  {
    "app": "F",
    "sec": "f8",
    "secLabel": {
      "en": "F8 — Windows Executable File Formats",
      "vi": "F8 — Định dạng file thực thi Windows"
    },
    "q": {
      "en": "The PE Import Address Table (IAT) is populated by the loader with:",
      "vi": "Bảng địa chỉ nhập (IAT) của PE được loader điền bằng:"
    },
    "opts": [
      {
        "en": "Resolved addresses of imported functions",
        "vi": "Các địa chỉ đã phân giải của hàm được nhập"
      },
      {
        "en": "The names of exported functions",
        "vi": "Tên của các hàm được xuất"
      },
      {
        "en": "Relocation fixup offsets",
        "vi": "Các offset fixup relocation"
      },
      {
        "en": "The virtual addresses of sections",
        "vi": "Các địa chỉ ảo của section"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "At load time the Windows loader resolves each imported symbol and writes its address into the IAT, which the code calls indirectly. IAT hooking (overwriting these pointers) is a common interception technique; an empty/odd IAT suggests dynamic resolution or packing.",
      "vi": "Lúc nạp, loader Windows phân giải từng symbol import và ghi địa chỉ của nó vào IAT, mà code gọi gián tiếp. IAT hooking (ghi đè các con trỏ này) là kỹ thuật chặn phổ biến; một IAT trống/lạ gợi ý phân giải động hoặc pack."
    }
  },

  {
    "app": "F",
    "sec": "f8",
    "secLabel": {
      "en": "F8 — Windows Executable File Formats",
      "vi": "F8 — Định dạng file thực thi Windows"
    },
    "q": {
      "en": "Which file signature corresponds to a Windows PE, regardless of the .exe/.scr/.dll extension?",
      "vi": "Chữ ký file nào ứng với một Windows PE, bất kể đuôi .exe/.scr/.dll?"
    },
    "opts": [
      {
        "en": "'MZ' at offset 0 and 'PE\\0\\0' at e_lfanew",
        "vi": "'MZ' ở offset 0 và 'PE\\0\\0' tại e_lfanew"
      },
      {
        "en": "'PK' at offset 0 (a ZIP file)",
        "vi": "'PK' ở offset 0 (một file ZIP)"
      },
      {
        "en": "'%PDF' at offset 0 (a PDF file)",
        "vi": "'%PDF' ở offset 0 (một file PDF)"
      },
      {
        "en": "'\\x7FELF' at offset 0 (an ELF file)",
        "vi": "'\\x7FELF' ở offset 0 (một file ELF)"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Every PE begins with the DOS \"MZ\" header; e_lfanew points to the \"PE\\0\\0\" signature. \"PK\"=ZIP, \"%PDF\"=PDF, \"\\x7FELF\"=Linux ELF. Identifying by magic bytes (not extension) is essential because malware renames files freely.",
      "vi": "Mọi PE bắt đầu bằng header DOS \"MZ\"; e_lfanew trỏ tới chữ ký \"PE\\0\\0\". \"PK\"=ZIP, \"%PDF\"=PDF, \"\\x7FELF\"=ELF Linux. Nhận diện bằng magic byte (không theo đuôi) là thiết yếu vì mã độc đổi tên file tùy ý."
    }
  },

  {
    "app": "F",
    "sec": "f8",
    "secLabel": {
      "en": "F8 — Windows Executable File Formats",
      "vi": "F8 — Định dạng file thực thi Windows"
    },
    "q": {
      "en": "A PE that imports mscoree.dll and has a .NET metadata directory is:",
      "vi": "Một PE import mscoree.dll và có directory metadata .NET là:"
    },
    "opts": [
      {
        "en": "A .NET / managed assembly",
        "vi": "Một assembly .NET / managed"
      },
      {
        "en": "A native C/C++ executable",
        "vi": "Một file thực thi C/C++ native"
      },
      {
        "en": "A UPX-packed binary",
        "vi": "Một binary pack bằng UPX"
      },
      {
        "en": "A kernel driver (.sys) module",
        "vi": "Một module driver nhân (.sys)"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "mscoree.dll plus a COM descriptor/.NET metadata directory marks a managed (.NET) assembly. These decompile cleanly to near-original C#/IL with dnSpy/ILSpy/de4dot, so the approach differs from native PE reversing — recognise the type first.",
      "vi": "mscoree.dll cùng directory mô tả COM/metadata .NET đánh dấu một assembly managed (.NET). Chúng decompile sạch về gần C#/IL gốc bằng dnSpy/ILSpy/de4dot, nên cách tiếp cận khác với dịch ngược PE native — hãy nhận diện loại trước."
    }
  },

  {
    "app": "F",
    "sec": "f8",
    "secLabel": {
      "en": "F8 — Windows Executable File Formats",
      "vi": "F8 — Định dạng file thực thi Windows"
    },
    "q": {
      "en": "The PE export table (EAT) is primarily relevant for:",
      "vi": "Bảng export (EAT) của PE chủ yếu liên quan tới:"
    },
    "opts": [
      {
        "en": "For DLLs, naming the functions they expose to others",
        "vi": "Với DLL, cho biết các hàm nó phơi ra cho module khác"
      },
      {
        "en": "For listing the functions a binary imports",
        "vi": "Để liệt kê các hàm mà binary nhập vào"
      },
      {
        "en": "For locating the program's entry point",
        "vi": "Để xác định entry point của chương trình"
      },
      {
        "en": "For mapping the relocation fixups",
        "vi": "Để ánh xạ các fixup relocation"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "The Export Address Table lists functions a DLL exposes (by name or ordinal). For malicious DLLs, the exports reveal entry points an attacker invokes (e.g. via rundll32 dll,Export). EXEs rarely export. The IAT, by contrast, lists what a module imports.",
      "vi": "Export Address Table liệt kê các hàm một DLL cung cấp (theo tên hoặc ordinal). Với DLL độc hại, phần export lộ các entry point kẻ tấn công gọi (vd qua rundll32 dll,Export). EXE hiếm khi export. Ngược lại, IAT liệt kê thứ một module import."
    }
  },

  {
    "app": "F",
    "sec": "f8",
    "secLabel": {
      "en": "F8 — Windows Executable File Formats",
      "vi": "F8 — Định dạng file thực thi Windows"
    },
    "q": {
      "en": "A useful first-pass triage of a PE is to run \"strings\" because it can reveal:",
      "vi": "Một bước triage đầu tiên hữu ích với PE là chạy \"strings\" vì nó có thể lộ:"
    },
    "opts": [
      {
        "en": "URLs, IPs, paths, registry keys and API names",
        "vi": "URL, IP, đường dẫn, khóa registry và tên API"
      },
      {
        "en": "The decryption key, in every case",
        "vi": "Khóa giải mã, trong mọi trường hợp"
      },
      {
        "en": "The full runtime behaviour of the sample",
        "vi": "Toàn bộ hành vi lúc chạy của mẫu"
      },
      {
        "en": "The contents of packed/encrypted sections",
        "vi": "Nội dung của các section bị pack/mã hóa"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Extracting ASCII/Unicode strings quickly surfaces indicators (C2 URLs/IPs, mutexes, registry paths, suspicious API names, error messages). Packed samples yield few useful strings (a tell), so combine static strings with unpacking and dynamic analysis.",
      "vi": "Trích chuỗi ASCII/Unicode nhanh chóng làm lộ chỉ dấu (URL/IP C2, mutex, đường dẫn registry, tên API đáng ngờ, thông báo lỗi). Mẫu đã pack cho ít chuỗi hữu ích (một dấu hiệu), nên kết hợp strings tĩnh với giải nén và phân tích động."
    }
  },

  {
    "app": "F",
    "sec": "f8",
    "secLabel": {
      "en": "F8 — Windows Executable File Formats",
      "vi": "F8 — Định dạng file thực thi Windows"
    },
    "q": {
      "en": "\"COM\" and \"EXE\" both being mentioned as Windows executable formats reflects that:",
      "vi": "Việc \"COM\" và \"EXE\" đều được nêu là định dạng thực thi Windows phản ánh rằng:"
    },
    "opts": [
      {
        "en": "Windows supports flat .COM and PE-based .EXE files",
        "vi": "Windows hỗ trợ cả .COM phẳng và .EXE dựa trên PE"
      },
      {
        "en": "Both are interpreted script formats",
        "vi": "Cả hai đều là định dạng script thông dịch"
      },
      {
        "en": "Both require the .NET runtime to execute",
        "vi": "Cả hai đều cần .NET runtime để chạy"
      },
      {
        "en": "Both are archive formats containing code",
        "vi": "Cả hai đều là định dạng nén chứa mã"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Legacy .COM files are tiny flat binaries (no PE header) from DOS days; modern .EXE/.DLL use the PE format. The syllabus expects awareness of standard Windows executable formats and the ability to extract valuable information from them.",
      "vi": "File .COM cũ là binary phẳng nhỏ (không có header PE) từ thời DOS; .EXE/.DLL hiện đại dùng định dạng PE. Syllabus yêu cầu nắm các định dạng thực thi Windows tiêu chuẩn và khả năng trích thông tin giá trị từ chúng."
    }
  },

  {
    "app": "F",
    "sec": "f8",
    "secLabel": {
      "en": "F8 — Windows Executable File Formats",
      "vi": "F8 — Định dạng file thực thi Windows"
    },
    "q": {
      "en": "Section virtual size much larger than raw size, with low raw entropy, often hints at:",
      "vi": "Virtual size của section lớn hơn nhiều raw size, với entropy raw thấp, thường gợi ý:"
    },
    "opts": [
      {
        "en": "Space for code/data unpacked into memory at runtime",
        "vi": "Khoảng trống cho mã/dữ liệu được giải nén vào bộ nhớ lúc chạy"
      },
      {
        "en": "A normal large uninitialised data (.bss) section",
        "vi": "Một section dữ liệu chưa khởi tạo (.bss) lớn bình thường"
      },
      {
        "en": "A corrupted, unrunnable section table",
        "vi": "Một bảng section bị hỏng, không chạy được"
      },
      {
        "en": "An embedded image thumbnail cache",
        "vi": "Một cache ảnh thumbnail nhúng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "When a section's virtual size greatly exceeds its on-disk raw size, the loader allocates extra memory the packer fills with unpacked code at runtime. This size discrepancy is a classic static indicator of packing, alongside high-entropy sections and odd names.",
      "vi": "Khi virtual size của một section vượt xa raw size trên đĩa, loader cấp thêm bộ nhớ mà packer lấp bằng code đã giải nén lúc chạy. Sự chênh lệch kích thước này là dấu hiệu pack tĩnh kinh điển, bên cạnh section entropy cao và tên lạ."
    }
  },

  {
    "app": "F",
    "sec": "f9",
    "secLabel": {
      "en": "F9 — Hiding Techniques",
      "vi": "F9 — Kỹ thuật ẩn giấu"
    },
    "q": {
      "en": "The classic CreateRemoteThread injection technique uses which API sequence?",
      "vi": "Kỹ thuật tiêm CreateRemoteThread kinh điển dùng chuỗi API nào?"
    },
    "opts": [
      {
        "en": "OpenProcess → VirtualAllocEx → WriteProcessMemory → CreateRemoteThread",
        "vi": "OpenProcess → VirtualAllocEx → WriteProcessMemory → CreateRemoteThread"
      },
      {
        "en": "socket → connect → send → recv (networking)",
        "vi": "socket → connect → send → recv (mạng)"
      },
      {
        "en": "CreateFile → ReadFile → CloseHandle (file I/O)",
        "vi": "CreateFile → ReadFile → CloseHandle (file I/O)"
      },
      {
        "en": "RegOpenKey → RegSetValue → RegCloseKey (registry)",
        "vi": "RegOpenKey → RegSetValue → RegCloseKey (registry)"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Remote-thread injection opens a target process, allocates memory in it (VirtualAllocEx), writes the payload (WriteProcessMemory), then runs it (CreateRemoteThread). Spotting this API cluster in imports/behaviour identifies injection — a core hiding/defense-evasion technique.",
      "vi": "Tiêm remote-thread mở một tiến trình mục tiêu, cấp bộ nhớ trong nó (VirtualAllocEx), ghi payload (WriteProcessMemory), rồi chạy (CreateRemoteThread). Phát hiện cụm API này trong import/hành vi xác định việc tiêm — một kỹ thuật ẩn/né phòng thủ cốt lõi."
    }
  },

  {
    "app": "F",
    "sec": "f9",
    "secLabel": {
      "en": "F9 — Hiding Techniques",
      "vi": "F9 — Kỹ thuật ẩn giấu"
    },
    "q": {
      "en": "\"Process hollowing\" specifically involves:",
      "vi": "\"Process hollowing\" cụ thể bao gồm:"
    },
    "opts": [
      {
        "en": "Starting a process suspended, unmapping it, writing code, then resuming",
        "vi": "Khởi chạy tiến trình ở trạng thái suspended, gỡ ánh xạ, ghi mã rồi resume"
      },
      {
        "en": "Mapping and executing a DLL entirely from memory",
        "vi": "Ánh xạ và thực thi một DLL hoàn toàn từ bộ nhớ"
      },
      {
        "en": "Overwriting a function's prologue with a jump",
        "vi": "Ghi đè prologue của hàm bằng một lệnh jump"
      },
      {
        "en": "Queuing an APC to an alertable thread",
        "vi": "Xếp một APC vào một luồng alertable"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Hollowing (RunPE) creates a suspended legitimate process, replaces (NtUnmapViewOfSection) its image with malicious code, fixes the context (SetThreadContext) and resumes it — so malware runs under a trusted name/path. Memory analysis sees the image/disk mismatch.",
      "vi": "Hollowing (RunPE) tạo một tiến trình hợp lệ suspended, thay (NtUnmapViewOfSection) image của nó bằng mã độc, sửa context (SetThreadContext) và resume — nên mã độc chạy dưới tên/đường dẫn tin cậy. Phân tích bộ nhớ thấy sự không khớp image/đĩa."
    }
  },

  {
    "app": "F",
    "sec": "f9",
    "secLabel": {
      "en": "F9 — Hiding Techniques",
      "vi": "F9 — Kỹ thuật ẩn giấu"
    },
    "q": {
      "en": "Reflective DLL injection is stealthier than LoadLibrary because it:",
      "vi": "Reflective DLL injection ẩn hơn LoadLibrary vì nó:"
    },
    "opts": [
      {
        "en": "It maps and runs a DLL from memory, never touching disk",
        "vi": "Nó ánh xạ và chạy DLL từ bộ nhớ, không chạm đĩa"
      },
      {
        "en": "It loads the DLL via the normal LoadLibrary call",
        "vi": "Nó nạp DLL qua lời gọi LoadLibrary thông thường"
      },
      {
        "en": "It requires the DLL to be registered first",
        "vi": "Nó yêu cầu DLL phải được đăng ký trước"
      },
      {
        "en": "It relies on DLL search-order to find a file on disk",
        "vi": "Nó dựa vào thứ tự tìm DLL để tìm file trên đĩa"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Reflective loading implements its own PE loader to map a DLL straight from memory, so there is no on-disk file and no entry in the module list — evading disk AV and tools that enumerate loaded modules. Memory forensics (unbacked executable regions) still detects it.",
      "vi": "Reflective loading tự hiện thực một PE loader để ánh xạ một DLL thẳng từ bộ nhớ, nên không có file trên đĩa và không có mục trong danh sách module — né AV đĩa và công cụ liệt kê module đã nạp. Forensic bộ nhớ (vùng thực thi không có file gốc) vẫn phát hiện được."
    }
  },

  {
    "app": "F",
    "sec": "f9",
    "secLabel": {
      "en": "F9 — Hiding Techniques",
      "vi": "F9 — Kỹ thuật ẩn giấu"
    },
    "q": {
      "en": "SSDT patching (System Service Descriptor Table hooking) is a:",
      "vi": "SSDT patching (hook System Service Descriptor Table) là một:"
    },
    "opts": [
      {
        "en": "A kernel rootkit hooking system calls",
        "vi": "Một rootkit nhân hook các system call"
      },
      {
        "en": "A user-mode IAT hook",
        "vi": "Một IAT hook ở user-mode"
      },
      {
        "en": "An inline detour inside a user DLL",
        "vi": "Một inline detour bên trong một DLL user"
      },
      {
        "en": "A hardware CPU debug feature",
        "vi": "Một tính năng debug phần cứng của CPU"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Overwriting SSDT entries reroutes system calls (e.g. process/file enumeration) through attacker code that filters results, hiding files, processes or registry keys system-wide. It requires ring-0/driver access. Modern x64 PatchGuard resists it, pushing attackers to other methods.",
      "vi": "Ghi đè các mục SSDT chuyển hướng system call (vd liệt kê tiến trình/file) qua mã của kẻ tấn công để lọc kết quả, ẩn file, tiến trình hay khóa registry trên toàn hệ thống. Cần quyền ring-0/driver. PatchGuard trên x64 hiện đại kháng nó, đẩy kẻ tấn công sang phương pháp khác."
    }
  },

  {
    "app": "F",
    "sec": "f9",
    "secLabel": {
      "en": "F9 — Hiding Techniques",
      "vi": "F9 — Kỹ thuật ẩn giấu"
    },
    "q": {
      "en": "Inline (detour) API hooking works by:",
      "vi": "Hook API kiểu inline (detour) hoạt động bằng cách:"
    },
    "opts": [
      {
        "en": "Overwriting a function's first bytes with a jump",
        "vi": "Ghi đè các byte đầu của hàm bằng một lệnh jump"
      },
      {
        "en": "Replacing entries in the import address table",
        "vi": "Thay các mục trong bảng địa chỉ nhập (IAT)"
      },
      {
        "en": "Patching the kernel's system-call table",
        "vi": "Vá bảng system-call của nhân"
      },
      {
        "en": "Redirecting the DLL search order",
        "vi": "Chuyển hướng thứ tự tìm DLL"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Inline hooking patches the target function's prologue with a JMP to the hook, which can inspect/alter arguments and results before/after calling the original. Unlike IAT hooking (which swaps import pointers), it works even for dynamically resolved calls. Both are used to hide or intercept behaviour.",
      "vi": "Hook inline vá phần mở đầu (prologue) của hàm mục tiêu bằng một JMP tới hook, hook này có thể soi/sửa tham số và kết quả trước/sau khi gọi bản gốc. Khác hook IAT (đổi con trỏ import), nó hoạt động kể cả với lời gọi phân giải động. Cả hai dùng để ẩn hoặc chặn hành vi."
    }
  },

  {
    "app": "F",
    "sec": "f9",
    "secLabel": {
      "en": "F9 — Hiding Techniques",
      "vi": "F9 — Kỹ thuật ẩn giấu"
    },
    "q": {
      "en": "DLL search-order hijacking / side-loading abuses the fact that:",
      "vi": "DLL search-order hijacking / side-loading lạm dụng việc:"
    },
    "opts": [
      {
        "en": "A program may load a malicious DLL that is found first",
        "vi": "Một chương trình có thể nạp một DLL độc hại được tìm thấy trước"
      },
      {
        "en": "Windows loads DLLs only from System32",
        "vi": "Windows chỉ nạp DLL từ System32"
      },
      {
        "en": "Every DLL must be digitally signed to load",
        "vi": "Mọi DLL phải được ký số mới nạp được"
      },
      {
        "en": "Applications always hard-code absolute DLL paths",
        "vi": "Ứng dụng luôn ghi cứng đường dẫn tuyệt đối của DLL"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "If an application loads a DLL by name without a full path, Windows' search order may find an attacker-planted DLL first (hijacking), or a legitimate signed EXE may load a malicious DLL from its own folder (side-loading) — running attacker code under a trusted process. A very common persistence/evasion technique.",
      "vi": "Nếu một ứng dụng nạp DLL theo tên mà không có đường dẫn đầy đủ, thứ tự tìm của Windows có thể thấy DLL do kẻ tấn công cài trước (hijacking), hoặc một EXE đã ký hợp lệ nạp một DLL độc hại từ thư mục của nó (side-loading) — chạy mã của kẻ tấn công dưới một tiến trình tin cậy. Một kỹ thuật persistence/né phổ biến."
    }
  },

  {
    "app": "F",
    "sec": "f9",
    "secLabel": {
      "en": "F9 — Hiding Techniques",
      "vi": "F9 — Kỹ thuật ẩn giấu"
    },
    "q": {
      "en": "A driver acting as a \"filter driver\" can hide files by:",
      "vi": "Một driver đóng vai \"filter driver\" có thể ẩn file bằng cách:"
    },
    "opts": [
      {
        "en": "By intercepting file-system I/O and hiding its own files",
        "vi": "Bằng cách chặn I/O hệ thống file và giấu các file của nó"
      },
      {
        "en": "By unlinking the files' MFT records from the index",
        "vi": "Bằng cách gỡ bản ghi MFT của file khỏi chỉ mục"
      },
      {
        "en": "By encrypting the files so they cannot be read",
        "vi": "Bằng cách mã hóa file để không đọc được"
      },
      {
        "en": "By setting the hidden and system attributes",
        "vi": "Bằng cách đặt thuộc tính hidden và system"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A malicious file-system filter driver sits in the I/O stack and can alter directory enumeration responses to omit attacker files — a kernel hiding technique. Detection may require offline disk analysis or cross-view comparison rather than trusting the live OS view.",
      "vi": "Một filter driver hệ thống tệp độc hại nằm trong I/O stack và có thể sửa phản hồi liệt kê thư mục để bỏ qua file của kẻ tấn công — một kỹ thuật ẩn cấp kernel. Phát hiện có thể cần phân tích đĩa offline hoặc so sánh chéo góc nhìn thay vì tin góc nhìn của OS live."
    }
  },

  {
    "app": "F",
    "sec": "f9",
    "secLabel": {
      "en": "F9 — Hiding Techniques",
      "vi": "F9 — Kỹ thuật ẩn giấu"
    },
    "q": {
      "en": "DKOM (Direct Kernel Object Manipulation) hides a process by:",
      "vi": "DKOM (Direct Kernel Object Manipulation) ẩn một tiến trình bằng cách:"
    },
    "opts": [
      {
        "en": "By unlinking its EPROCESS from the active-process list",
        "vi": "Bằng cách gỡ EPROCESS của nó khỏi danh sách tiến trình đang hoạt động"
      },
      {
        "en": "By hooking the SSDT to filter process queries",
        "vi": "Bằng cách hook SSDT để lọc truy vấn tiến trình"
      },
      {
        "en": "By injecting a DLL into Task Manager",
        "vi": "Bằng cách tiêm một DLL vào Task Manager"
      },
      {
        "en": "By patching NtQuerySystemInformation in user mode",
        "vi": "Bằng cách vá NtQuerySystemInformation ở user mode"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "DKOM directly edits kernel structures, e.g. removing a process's EPROCESS from the doubly-linked active list so tools walking that list (Task Manager, pslist) don't see it — while it still runs/scheduled. psscan (pool scanning) and cross-view analysis defeat it.",
      "vi": "DKOM sửa trực tiếp cấu trúc kernel, vd gỡ EPROCESS của một tiến trình khỏi danh sách liên kết đôi của tiến trình hoạt động để các công cụ đi theo danh sách đó (Task Manager, pslist) không thấy — trong khi nó vẫn chạy/được lập lịch. psscan (quét pool) và phân tích chéo góc nhìn vô hiệu hóa nó."
    }
  },

  {
    "app": "F",
    "sec": "f9",
    "secLabel": {
      "en": "F9 — Hiding Techniques",
      "vi": "F9 — Kỹ thuật ẩn giấu"
    },
    "q": {
      "en": "APC injection (QueueUserAPC) executes payload code by:",
      "vi": "APC injection (QueueUserAPC) thực thi mã payload bằng cách:"
    },
    "opts": [
      {
        "en": "By queuing an APC to a thread to run shellcode",
        "vi": "Bằng cách xếp một APC vào một luồng để chạy shellcode"
      },
      {
        "en": "By creating a remote thread with CreateRemoteThread",
        "vi": "Bằng cách tạo luồng từ xa với CreateRemoteThread"
      },
      {
        "en": "By suspending a thread and rewriting its instruction pointer",
        "vi": "Bằng cách suspend một luồng và viết lại con trỏ lệnh của nó"
      },
      {
        "en": "By mapping a section with NtMapViewOfSection",
        "vi": "Bằng cách ánh xạ một section với NtMapViewOfSection"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "APC injection writes code into a target process then queues a user-mode APC to one of its (often alertable) threads, which executes the payload — an alternative to CreateRemoteThread. Recognising the API pattern (QueueUserAPC after WriteProcessMemory) identifies the technique.",
      "vi": "APC injection ghi code vào một tiến trình mục tiêu rồi xếp một APC user-mode vào một thread (thường ở trạng thái alertable) của nó để thực thi payload — một thay thế cho CreateRemoteThread. Nhận ra mẫu API (QueueUserAPC sau WriteProcessMemory) xác định kỹ thuật."
    }
  },

  {
    "app": "F",
    "sec": "f9",
    "secLabel": {
      "en": "F9 — Hiding Techniques",
      "vi": "F9 — Kỹ thuật ẩn giấu"
    },
    "q": {
      "en": "Thread execution hijacking injects code by:",
      "vi": "Thread execution hijacking tiêm code bằng cách:"
    },
    "opts": [
      {
        "en": "By suspending a thread and setting its EIP to the payload",
        "vi": "Bằng cách suspend một luồng và đặt EIP của nó tới payload"
      },
      {
        "en": "By queuing a user-mode APC to the thread",
        "vi": "Bằng cách xếp một APC user-mode vào luồng"
      },
      {
        "en": "By creating a new remote thread at the payload",
        "vi": "Bằng cách tạo một luồng từ xa mới tại payload"
      },
      {
        "en": "By overwriting only the thread's stack return address",
        "vi": "Bằng cách chỉ ghi đè địa chỉ trả về trên stack của luồng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "The attacker suspends an existing thread, uses SetThreadContext to set EIP/RIP to the injected code, and resumes it, so the payload runs in the target without a new thread (stealthier than CreateRemoteThread). The Get/SetThreadContext + SuspendThread pattern is the tell.",
      "vi": "Kẻ tấn công suspend một thread sẵn có, dùng SetThreadContext đặt EIP/RIP tới mã đã tiêm, rồi resume, nên payload chạy trong mục tiêu mà không cần thread mới (ẩn hơn CreateRemoteThread). Mẫu Get/SetThreadContext + SuspendThread là dấu hiệu."
    }
  },

  {
    "app": "F",
    "sec": "f9",
    "secLabel": {
      "en": "F9 — Hiding Techniques",
      "vi": "F9 — Kỹ thuật ẩn giấu"
    },
    "q": {
      "en": "The shared goal of process injection techniques is to:",
      "vi": "Mục tiêu chung của các kỹ thuật process injection là:"
    },
    "opts": [
      {
        "en": "To run code inside a trusted process and evade detection",
        "vi": "Để chạy mã bên trong một tiến trình tin cậy và né phát hiện"
      },
      {
        "en": "To gain kernel-mode execution privileges",
        "vi": "Để giành quyền thực thi ở kernel-mode"
      },
      {
        "en": "To bypass network firewall rules",
        "vi": "Để vượt qua luật tường lửa mạng"
      },
      {
        "en": "To persist across system reboots",
        "vi": "Để duy trì qua các lần khởi động lại"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "All injection variants (remote thread, APC, hollowing, reflective, hijacking) aim to execute under a trusted process so the code blends in, bypasses some allowlisting, and inherits the host process's privileges/network trust. Memory analysis is the reliable detection.",
      "vi": "Mọi biến thể tiêm (remote thread, APC, hollowing, reflective, hijacking) đều nhằm thực thi dưới một tiến trình tin cậy để mã hòa lẫn, vượt một số allowlist, và thừa hưởng quyền/độ tin cậy mạng của tiến trình chủ. Phân tích bộ nhớ là cách phát hiện đáng tin."
    }
  },

  {
    "app": "F",
    "sec": "f12",
    "secLabel": {
      "en": "F12 — Behavioural Analysis",
      "vi": "F12 — Phân tích hành vi"
    },
    "q": {
      "en": "The FUNDAMENTAL precondition before detonating malware for behavioural analysis is:",
      "vi": "Điều kiện CƠ BẢN trước khi kích nổ mã độc để phân tích hành vi là:"
    },
    "opts": [
      {
        "en": "An isolated lab with no route to production or the internet",
        "vi": "Một phòng lab cô lập, không có đường ra production hay internet"
      },
      {
        "en": "A spare workstation on the office LAN",
        "vi": "Một máy trạm dự phòng trên LAN văn phòng"
      },
      {
        "en": "A cloud VM with default internet access",
        "vi": "Một VM đám mây có truy cập internet mặc định"
      },
      {
        "en": "The analyst's own daily-driver laptop",
        "vi": "Chính chiếc laptop dùng hằng ngày của analyst"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Dynamic analysis must occur in containment — an isolated VM/network (with simulated services) so the sample cannot spread, exfiltrate or alert its operator. Everything else (tools, snapshots) builds on this safety baseline.",
      "vi": "Phân tích động phải diễn ra trong môi trường được kiểm soát — một VM/mạng cách ly (với dịch vụ giả lập) để mẫu không thể lây lan, exfil hay báo động người vận hành. Mọi thứ khác (công cụ, snapshot) đều dựng trên nền an toàn này."
    }
  },

  {
    "app": "F",
    "sec": "f12",
    "secLabel": {
      "en": "F12 — Behavioural Analysis",
      "vi": "F12 — Phân tích hành vi"
    },
    "q": {
      "en": "Which combination gives the most complete behavioural picture during detonation?",
      "vi": "Tổ hợp nào cho bức tranh hành vi đầy đủ nhất khi kích nổ?"
    },
    "opts": [
      {
        "en": "Procmon, Wireshark/INetSim and Regshot together",
        "vi": "Procmon, Wireshark/INetSim và Regshot dùng cùng nhau"
      },
      {
        "en": "A disassembler and decompiler only",
        "vi": "Chỉ một disassembler và decompiler"
      },
      {
        "en": "Strings and a hex editor only",
        "vi": "Chỉ strings và một hex editor"
      },
      {
        "en": "An antivirus scan and a hash lookup",
        "vi": "Một lần quét antivirus và tra hash"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Combining real-time host monitoring (Procmon), network capture/simulation (Wireshark + INetSim/FakeNet) and state diffing (Regshot) captures file/registry/process activity, C2 behaviour and persistence at once — the standard behavioural-analysis toolkit.",
      "vi": "Kết hợp giám sát host real-time (Procmon), bắt/giả lập mạng (Wireshark + INetSim/FakeNet) và so sánh trạng thái (Regshot) bắt được hoạt động file/registry/tiến trình, hành vi C2 và persistence cùng lúc — bộ công cụ phân tích hành vi tiêu chuẩn."
    }
  },

  {
    "app": "F",
    "sec": "f12",
    "secLabel": {
      "en": "F12 — Behavioural Analysis",
      "vi": "F12 — Phân tích hành vi"
    },
    "q": {
      "en": "A sample that sleeps for 10 minutes, checks for mouse movement, then runs is exhibiting:",
      "vi": "Một mẫu ngủ 10 phút, kiểm tra chuyển động chuột, rồi mới chạy đang thể hiện:"
    },
    "opts": [
      {
        "en": "Sandbox evasion via delays and interaction checks",
        "vi": "Né sandbox qua trì hoãn và kiểm tra tương tác"
      },
      {
        "en": "A logic bomb waiting for a specific date",
        "vi": "Một logic bomb chờ một ngày cụ thể"
      },
      {
        "en": "Polling a C2 server for a command first",
        "vi": "Hỏi vòng máy chủ C2 để lấy lệnh trước"
      },
      {
        "en": "Throttling itself to reduce CPU usage",
        "vi": "Tự điều tiết để giảm dùng CPU"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Automated sandboxes run samples briefly and lack real user activity, so malware stalls (long sleeps, API-hammering) and checks for human interaction (mouse/keyboard) to avoid detonating under analysis. Counter with longer runtimes, sleep-patching and simulated user input.",
      "vi": "Sandbox tự động chạy mẫu trong thời gian ngắn và thiếu hoạt động người dùng thật, nên mã độc câu giờ (ngủ lâu, gọi API liên tục) và kiểm tra tương tác người (chuột/bàn phím) để tránh kích nổ khi bị phân tích. Đối phó bằng thời gian chạy lâu hơn, vá sleep và giả lập input người dùng."
    }
  },

  {
    "app": "F",
    "sec": "f12",
    "secLabel": {
      "en": "F12 — Behavioural Analysis",
      "vi": "F12 — Phân tích hành vi"
    },
    "q": {
      "en": "Anti-debugging checks like IsDebuggerPresent or examining the PEB BeingDebugged flag are designed to:",
      "vi": "Các kiểm tra anti-debug như IsDebuggerPresent hoặc xét cờ BeingDebugged trong PEB nhằm:"
    },
    "opts": [
      {
        "en": "Detect a debugger and bail out to thwart analysis",
        "vi": "Phát hiện debugger và thoát để cản trở phân tích"
      },
      {
        "en": "Improve performance when no debugger is attached",
        "vi": "Cải thiện hiệu năng khi không có debugger gắn vào"
      },
      {
        "en": "Enable verbose logging for developers",
        "vi": "Bật log chi tiết cho lập trình viên"
      },
      {
        "en": "Verify the binary's digital signature",
        "vi": "Xác minh chữ ký số của binary"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Anti-debug techniques (IsDebuggerPresent, PEB flag, CheckRemoteDebuggerPresent, timing via rdtsc, INT 3 scanning) detect analysis and make malware bail or misbehave. Analysts bypass them with plugins (ScyllaHide), patching the checks, or stealth debuggers.",
      "vi": "Kỹ thuật anti-debug (IsDebuggerPresent, cờ PEB, CheckRemoteDebuggerPresent, đo thời gian bằng rdtsc, quét INT 3) phát hiện việc phân tích và khiến mã độc thoát hoặc hành xử sai. Analyst vượt qua bằng plugin (ScyllaHide), vá các kiểm tra, hoặc debugger ẩn."
    }
  },

  {
    "app": "F",
    "sec": "f12",
    "secLabel": {
      "en": "F12 — Behavioural Analysis",
      "vi": "F12 — Phân tích hành vi"
    },
    "q": {
      "en": "During detonation you observe a connection attempt to a hard-coded domain. With INetSim you can:",
      "vi": "Khi kích nổ bạn quan sát một nỗ lực kết nối tới một domain hard-code. Với INetSim bạn có thể:"
    },
    "opts": [
      {
        "en": "Fake the service reply to coax out further behaviour",
        "vi": "Giả mạo phản hồi dịch vụ để dụ ra thêm hành vi"
      },
      {
        "en": "Capture the traffic but block any reply",
        "vi": "Bắt lưu lượng nhưng chặn mọi phản hồi"
      },
      {
        "en": "Redirect the sample to the real C2 safely",
        "vi": "Chuyển hướng mẫu tới C2 thật một cách an toàn"
      },
      {
        "en": "Decrypt the sample's TLS session instantly",
        "vi": "Giải mã ngay phiên TLS của mẫu"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "INetSim/FakeNet emulate the expected internet services, so the malware \"talks\" to a simulated C2 and exposes further commands, downloads and protocols — all without touching the real internet. This draws out behaviour that would otherwise stall when C2 is unreachable.",
      "vi": "INetSim/FakeNet giả lập các dịch vụ internet kỳ vọng, nên mã độc \"nói chuyện\" với một C2 mô phỏng và lộ thêm lệnh, tải về và giao thức — tất cả mà không chạm internet thật. Điều này khơi ra hành vi vốn sẽ đình lại khi C2 không tới được."
    }
  },

  {
    "app": "F",
    "sec": "f12",
    "secLabel": {
      "en": "F12 — Behavioural Analysis",
      "vi": "F12 — Phân tích hành vi"
    },
    "q": {
      "en": "Behavioural (dynamic) analysis is especially useful against packed malware because:",
      "vi": "Phân tích hành vi (động) đặc biệt hữu ích với mã độc đã pack vì:"
    },
    "opts": [
      {
        "en": "Running it forces it to unpack, exposing real behaviour",
        "vi": "Chạy nó buộc nó phải giải nén, để lộ hành vi thật"
      },
      {
        "en": "It reveals the packer's compression ratio",
        "vi": "Nó cho biết tỉ lệ nén của packer"
      },
      {
        "en": "It removes the packer from the file on disk",
        "vi": "Nó gỡ packer khỏi file trên đĩa"
      },
      {
        "en": "It recovers the original source code",
        "vi": "Nó khôi phục mã nguồn gốc"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Packers defeat static analysis, but at runtime the sample must unpack and execute its real code, which dynamic monitoring (and memory dumping at the OEP) captures. Dynamic and static analysis are complementary — and dynamic still demands strict isolation.",
      "vi": "Packer vô hiệu phân tích tĩnh, nhưng lúc chạy mẫu phải giải nén và thực thi mã thật, mà giám sát động (và dump bộ nhớ tại OEP) bắt được. Phân tích động và tĩnh bổ trợ nhau — và động vẫn đòi hỏi cách ly nghiêm ngặt."
    }
  },

  {
    "app": "F",
    "sec": "f12",
    "secLabel": {
      "en": "F12 — Behavioural Analysis",
      "vi": "F12 — Phân tích hành vi"
    },
    "q": {
      "en": "Observing the malware create a service and a Run key during detonation identifies its:",
      "vi": "Quan sát mã độc tạo một service và một khóa Run khi kích nổ xác định:"
    },
    "opts": [
      {
        "en": "Persistence mechanisms",
        "vi": "Các cơ chế duy trì (persistence)"
      },
      {
        "en": "Privilege-escalation method",
        "vi": "Phương pháp leo thang đặc quyền"
      },
      {
        "en": "Lateral-movement technique",
        "vi": "Kỹ thuật di chuyển ngang"
      },
      {
        "en": "Defence-evasion trick",
        "vi": "Mẹo né phòng thủ"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Behavioural analysis reveals how malware survives reboot — services, Run keys, scheduled tasks — by watching the system changes it makes (e.g. via Procmon/Regshot). Documenting persistence is essential for eradication and for building host-based IoCs.",
      "vi": "Phân tích hành vi lộ cách mã độc sống sót qua reboot — service, khóa Run, scheduled task — bằng cách theo dõi các thay đổi hệ thống nó tạo (vd qua Procmon/Regshot). Ghi nhận persistence là thiết yếu cho eradication và để dựng IoC phía host."
    }
  },

  {
    "app": "F",
    "sec": "f12",
    "secLabel": {
      "en": "F12 — Behavioural Analysis",
      "vi": "F12 — Phân tích hành vi"
    },
    "q": {
      "en": "A named pipe like \\\\.\\pipe\\msagent_xx created by a sample can be:",
      "vi": "Một named pipe như \\\\.\\pipe\\msagent_xx do một mẫu tạo có thể là:"
    },
    "opts": [
      {
        "en": "A host-based IoC for C2 inter-process comms",
        "vi": "Một IoC trên host cho liên lạc liên tiến trình của C2"
      },
      {
        "en": "A network-based IoC such as a C2 domain",
        "vi": "Một IoC mạng như một domain C2"
      },
      {
        "en": "A file-system artefact such as a dropped binary",
        "vi": "Một artefact hệ thống file như một binary bị thả"
      },
      {
        "en": "A registry persistence key",
        "vi": "Một khóa registry để duy trì"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Some C2 frameworks (e.g. Cobalt Strike SMB beacons) use named pipes for inter-process/peer communication, often with default names that become detectable host IoCs. Observing pipe creation during behavioural analysis yields signatures for hunting.",
      "vi": "Một số framework C2 (vd SMB beacon của Cobalt Strike) dùng named pipe để giao tiếp liên-tiến-trình/ngang hàng, thường với tên mặc định trở thành IoC host phát hiện được. Quan sát việc tạo pipe khi phân tích hành vi cho ra signature để săn lùng."
    }
  },

  {
    "app": "F",
    "sec": "f12",
    "secLabel": {
      "en": "F12 — Behavioural Analysis",
      "vi": "F12 — Phân tích hành vi"
    },
    "q": {
      "en": "Why take a VM snapshot before each detonation?",
      "vi": "Vì sao chụp snapshot VM trước mỗi lần kích nổ?"
    },
    "opts": [
      {
        "en": "To revert to a clean baseline, reproducibly",
        "vi": "Để quay về một baseline sạch, có thể lặp lại"
      },
      {
        "en": "To capture a memory dump of the sample",
        "vi": "Để chụp một bản dump bộ nhớ của mẫu"
      },
      {
        "en": "To compress the disk image and save space",
        "vi": "Để nén image đĩa và tiết kiệm dung lượng"
      },
      {
        "en": "To apply the latest OS security patches",
        "vi": "Để áp các bản vá bảo mật OS mới nhất"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Snapshots let you roll the lab back to a known-clean state after each run, so successive analyses start identically and are reproducible — and any infection is discarded. This underpins safe, repeatable dynamic analysis.",
      "vi": "Snapshot cho phép đưa lab về một trạng thái sạch đã biết sau mỗi lần chạy, nên các lần phân tích kế tiếp bắt đầu giống hệt và tái lập được — và mọi lây nhiễm bị loại bỏ. Đây là nền cho phân tích động an toàn, lặp lại được."
    }
  },

  {
    "app": "F",
    "sec": "f12",
    "secLabel": {
      "en": "F12 — Behavioural Analysis",
      "vi": "F12 — Phân tích hành vi"
    },
    "q": {
      "en": "The MAIN limitation of behavioural analysis alone is that:",
      "vi": "Hạn chế CHÍNH của riêng phân tích hành vi là:"
    },
    "opts": [
      {
        "en": "Code paths that are never triggered stay unseen",
        "vi": "Các nhánh mã không bao giờ được kích hoạt sẽ không lộ ra"
      },
      {
        "en": "It cannot observe any network traffic",
        "vi": "Nó không thể quan sát bất kỳ lưu lượng mạng nào"
      },
      {
        "en": "It always destroys the only copy of the sample",
        "vi": "Nó luôn phá hủy bản sao duy nhất của mẫu"
      },
      {
        "en": "It requires the malware's source code",
        "vi": "Nó yêu cầu mã nguồn của malware"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Dynamic analysis only shows what executes in that session; logic gated behind specific dates, commands, target checks or unmet conditions stays dormant. Combining behavioural analysis with static reversing (to find hidden branches) gives full coverage.",
      "vi": "Phân tích động chỉ cho thấy thứ thực thi trong phiên đó; logic phụ thuộc ngày cụ thể, lệnh, kiểm tra mục tiêu hay điều kiện chưa thỏa sẽ nằm im. Kết hợp phân tích hành vi với dịch ngược tĩnh (để tìm nhánh ẩn) cho độ phủ đầy đủ."
    },
    "note": {
      "en": "Dynamic analysis misses untriggered branches — pair it with static reversing.",
      "vi": "Phân tích động bỏ sót nhánh chưa kích hoạt — hãy kết hợp với dịch ngược tĩnh."
    }
  }

);
