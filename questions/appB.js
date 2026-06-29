/* ===================================================================
   CPIA Question Bank  —  Appendix B : Core Technical Skills
   74 question(s). To add: append more objects to push().
   Schema: app, sec (index.html anchor), secLabel{en,vi}, q{en,vi},
           opts[4]{en,vi}, correct (0-3), exp{en,vi}, note{en,vi}? (optional)
   =================================================================== */
(window.CPIA_BANK = window.CPIA_BANK || []).push(

  {
    "app": "B",
    "sec": "b1",
    "secLabel": {
      "en": "B1 — IP Protocols",
      "vi": "B1 — Giao thức IP"
    },
    "q": {
      "en": "Which transport protocol is connectionless and provides NO delivery guarantee — often abused for fast DNS-based C2/exfiltration?",
      "vi": "Giao thức tầng vận chuyển nào không kết nối và KHÔNG đảm bảo gửi tới — thường bị lạm dụng cho C2/exfil dựa trên DNS?"
    },
    "opts": [
      {
        "en": "TCP",
        "vi": "TCP"
      },
      {
        "en": "UDP",
        "vi": "UDP"
      },
      {
        "en": "ICMP",
        "vi": "ICMP"
      },
      {
        "en": "ARP",
        "vi": "ARP"
      }
    ],
    "correct": 1,
    "exp": {
      "en": "UDP is connectionless with no handshake, sequencing or retransmission. DNS uses UDP/53, making it a popular covert channel for tunnelling and exfiltration. TCP is connection-oriented; ICMP is a control protocol; ARP is link-layer.",
      "vi": "UDP không kết nối, không bắt tay, không sắp thứ tự hay truyền lại. DNS dùng UDP/53 nên là kênh ngầm phổ biến để tunnel và exfil. TCP hướng kết nối; ICMP là giao thức điều khiển; ARP ở tầng liên kết."
    }
  },

  {
    "app": "B",
    "sec": "b1",
    "secLabel": {
      "en": "B1 — IP Protocols",
      "vi": "B1 — Giao thức IP"
    },
    "q": {
      "en": "A TCP handshake completes with which sequence of flags?",
      "vi": "Bắt tay TCP hoàn tất với chuỗi cờ nào?"
    },
    "opts": [
      {
        "en": "SYN → SYN-ACK → ACK",
        "vi": "SYN → SYN-ACK → ACK"
      },
      {
        "en": "ACK → SYN → FIN",
        "vi": "ACK → SYN → FIN"
      },
      {
        "en": "SYN → RST → ACK",
        "vi": "SYN → RST → ACK"
      },
      {
        "en": "PSH → URG → FIN",
        "vi": "PSH → URG → FIN"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "The three-way handshake is SYN (client) → SYN-ACK (server) → ACK (client). A half-open SYN with no completion is typical of SYN scanning; an RST indicates a closed port or reset connection.",
      "vi": "Bắt tay ba bước là SYN (client) → SYN-ACK (server) → ACK (client). SYN nửa mở không hoàn tất là dấu hiệu quét SYN; RST cho thấy cổng đóng hoặc kết nối bị reset."
    }
  },

  {
    "app": "B",
    "sec": "b1",
    "secLabel": {
      "en": "B1 — IP Protocols",
      "vi": "B1 — Giao thức IP"
    },
    "q": {
      "en": "Which default port pairing is CORRECT?",
      "vi": "Cặp cổng mặc định nào ĐÚNG?"
    },
    "opts": [
      {
        "en": "HTTPS = 80, HTTP = 443",
        "vi": "HTTPS = 80, HTTP = 443"
      },
      {
        "en": "SMTP = 25, DNS = 53",
        "vi": "SMTP = 25, DNS = 53"
      },
      {
        "en": "SSH = 23, Telnet = 22",
        "vi": "SSH = 23, Telnet = 22"
      },
      {
        "en": "SMB = 21, FTP = 445",
        "vi": "SMB = 21, FTP = 445"
      }
    ],
    "correct": 1,
    "exp": {
      "en": "SMTP uses TCP/25 and DNS uses UDP/TCP 53. HTTP=80 / HTTPS=443 (the option swapped them), SSH=22 / Telnet=23 (swapped), FTP=21 / SMB=445 (swapped).",
      "vi": "SMTP dùng TCP/25 và DNS dùng UDP/TCP 53. HTTP=80 / HTTPS=443 (đáp án bị đảo), SSH=22 / Telnet=23 (đảo), FTP=21 / SMB=445 (đảo)."
    },
    "note": {
      "en": "Memorise core ports: 21/22/23/25/53/80/443/445.",
      "vi": "Học thuộc các cổng cốt lõi: 21/22/23/25/53/80/443/445."
    }
  },

  {
    "app": "B",
    "sec": "b2",
    "secLabel": {
      "en": "B2 — Network Architectures",
      "vi": "B2 — Kiến trúc mạng"
    },
    "q": {
      "en": "On a switched LAN, an attacker on one port cannot normally see another host's unicast traffic. Which technique is used to defeat this?",
      "vi": "Trên LAN dùng switch, kẻ tấn công ở một cổng thường không thấy lưu lượng unicast của host khác. Kỹ thuật nào được dùng để vượt qua điều này?"
    },
    "opts": [
      {
        "en": "ARP spoofing / poisoning",
        "vi": "Giả mạo / đầu độc ARP"
      },
      {
        "en": "Static ARP table entries",
        "vi": "Mục ARP tĩnh trong bảng"
      },
      {
        "en": "DHCP lease renewal",
        "vi": "Gia hạn lease DHCP"
      },
      {
        "en": "Spanning Tree reconfiguration",
        "vi": "Cấu hình lại Spanning Tree"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A switch forwards unicast only to the destination port, so sniffing is limited. ARP poisoning tricks hosts into sending traffic via the attacker (MITM). VLANs and switched media improve isolation vs shared media (hubs).",
      "vi": "Switch chỉ chuyển unicast tới cổng đích nên việc sniff bị hạn chế. ARP poisoning lừa các host gửi lưu lượng qua kẻ tấn công (MITM). VLAN và switched media cải thiện cô lập so với shared media (hub)."
    }
  },

  {
    "app": "B",
    "sec": "b2",
    "secLabel": {
      "en": "B2 — Network Architectures",
      "vi": "B2 — Kiến trúc mạng"
    },
    "q": {
      "en": "The host range usable for 192.168.10.0/26 is:",
      "vi": "Dải host dùng được cho 192.168.10.0/26 là:"
    },
    "opts": [
      {
        "en": ".1 – .254",
        "vi": ".1 – .254"
      },
      {
        "en": ".1 – .62",
        "vi": ".1 – .62"
      },
      {
        "en": ".1 – .126",
        "vi": ".1 – .126"
      },
      {
        "en": ".1 – .30",
        "vi": ".1 – .30"
      }
    ],
    "correct": 1,
    "exp": {
      "en": "/26 = 64 addresses (mask 255.255.255.192). Subnet 192.168.10.0, broadcast .63, usable hosts .1–.62 (62 hosts). /25 would give .1–.126, /27 would give .1–.30.",
      "vi": "/26 = 64 địa chỉ (mask 255.255.255.192). Subnet 192.168.10.0, broadcast .63, host dùng được .1–.62 (62 host). /25 cho .1–.126, /27 cho .1–.30."
    }
  },

  {
    "app": "B",
    "sec": "b7",
    "secLabel": {
      "en": "B7 — Cryptography",
      "vi": "B7 — Mật mã học"
    },
    "q": {
      "en": "What is the key difference between encryption and encoding (e.g. Base64)?",
      "vi": "Khác biệt cốt lõi giữa mã hóa (encryption) và biến đổi mã (encoding, ví dụ Base64) là gì?"
    },
    "opts": [
      {
        "en": "Encryption needs a key; encoding is reversible with no secret",
        "vi": "Mã hóa cần khóa; encoding đảo ngược được không cần bí mật"
      },
      {
        "en": "Encoding needs a secret key but encryption does not",
        "vi": "Encoding cần khóa bí mật còn encryption thì không"
      },
      {
        "en": "They are identical operations with different names",
        "vi": "Chúng là cùng một thao tác với tên khác"
      },
      {
        "en": "Encoding is always stronger than encryption",
        "vi": "Encoding luôn mạnh hơn encryption"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Encoding (Base64, hex, URL-encoding) only changes representation for transport and is trivially reversible by anyone — it provides NO confidentiality. Encryption uses a key so only key-holders can recover plaintext. Malware often Base64-encodes payloads to evade simple signatures, not to protect them.",
      "vi": "Encoding (Base64, hex, URL-encoding) chỉ đổi cách biểu diễn để truyền và ai cũng có thể đảo ngược — KHÔNG bảo mật. Encryption dùng khóa nên chỉ người có khóa mới khôi phục được plaintext. Mã độc thường Base64 hóa payload để né signature đơn giản, không phải để bảo vệ."
    },
    "note": {
      "en": "Base64 ≠ encryption. Seeing Base64 means decode it, it is not protected.",
      "vi": "Base64 ≠ encryption. Thấy Base64 là cứ giải mã được, nó không được bảo vệ."
    }
  },

  {
    "app": "B",
    "sec": "b7",
    "secLabel": {
      "en": "B7 — Cryptography",
      "vi": "B7 — Mật mã học"
    },
    "q": {
      "en": "Which algorithm is ASYMMETRIC (public/private key pair)?",
      "vi": "Thuật toán nào là BẤT ĐỐI XỨNG (cặp khóa công khai/riêng tư)?"
    },
    "opts": [
      {
        "en": "AES",
        "vi": "AES"
      },
      {
        "en": "RC4",
        "vi": "RC4"
      },
      {
        "en": "RSA",
        "vi": "RSA"
      },
      {
        "en": "3DES",
        "vi": "3DES"
      }
    ],
    "correct": 2,
    "exp": {
      "en": "RSA is asymmetric — encrypt with one key, decrypt with the paired key, used for key exchange and digital signatures. AES, RC4 and 3DES are symmetric (same key both ways).",
      "vi": "RSA là bất đối xứng — mã hóa bằng một khóa, giải mã bằng khóa còn lại trong cặp, dùng cho trao đổi khóa và chữ ký số. AES, RC4 và 3DES đều đối xứng (cùng một khóa hai chiều)."
    }
  },

  {
    "app": "B",
    "sec": "b7",
    "secLabel": {
      "en": "B7 — Cryptography",
      "vi": "B7 — Mật mã học"
    },
    "q": {
      "en": "A hash value is recorded for a disk image. The PRIMARY purpose of SHA-256 here is:",
      "vi": "Một giá trị hash được ghi lại cho image đĩa. Mục đích CHÍNH của SHA-256 ở đây là:"
    },
    "opts": [
      {
        "en": "Verify integrity by detecting any change",
        "vi": "Xác minh tính toàn vẹn bằng cách phát hiện mọi thay đổi"
      },
      {
        "en": "Encrypt the image for confidentiality",
        "vi": "Mã hóa image để bảo mật"
      },
      {
        "en": "Compress the image to save space",
        "vi": "Nén image để tiết kiệm dung lượng"
      },
      {
        "en": "Conceal the image's contents from view",
        "vi": "Che giấu nội dung image khỏi bị xem"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Hashes provide an integrity fingerprint: any single-bit change produces a completely different hash. They do NOT encrypt or compress. MD5 is still seen but is collision-weak; SHA-256 is preferred for forensic integrity.",
      "vi": "Hash tạo dấu vân tay toàn vẹn: chỉ một bit thay đổi sẽ cho hash hoàn toàn khác. Hash KHÔNG mã hóa hay nén. MD5 vẫn gặp nhưng yếu va chạm; SHA-256 được ưu tiên cho toàn vẹn forensic."
    },
    "note": {
      "en": "Hash = integrity, NOT confidentiality.",
      "vi": "Hash = toàn vẹn, KHÔNG phải bảo mật."
    }
  },

  {
    "app": "B",
    "sec": "b8",
    "secLabel": {
      "en": "B8 — Applications of Cryptography",
      "vi": "B8 — Ứng dụng mật mã"
    },
    "q": {
      "en": "Which wireless encryption protocol is INSECURE and trivially crackable due to a flawed IV/RC4 design?",
      "vi": "Giao thức mã hóa không dây nào KHÔNG an toàn và dễ bị bẻ do thiết kế IV/RC4 lỗi?"
    },
    "opts": [
      {
        "en": "WPA2",
        "vi": "WPA2"
      },
      {
        "en": "WEP",
        "vi": "WEP"
      },
      {
        "en": "WPA3",
        "vi": "WPA3"
      },
      {
        "en": "IPSec",
        "vi": "IPSec"
      }
    ],
    "correct": 1,
    "exp": {
      "en": "WEP uses RC4 with a short, reused 24-bit IV, allowing key recovery within minutes. WPA improved this with TKIP; WPA2 introduced AES-CCMP. Seeing WEP in scope is itself a serious finding.",
      "vi": "WEP dùng RC4 với IV 24-bit ngắn và lặp lại, cho phép khôi phục khóa trong vài phút. WPA cải thiện bằng TKIP; WPA2 dùng AES-CCMP. Thấy WEP trong phạm vi đã là một phát hiện nghiêm trọng."
    }
  },

  {
    "app": "B",
    "sec": "b5",
    "secLabel": {
      "en": "B5 — Application Fingerprinting",
      "vi": "B5 — Nhận dạng ứng dụng"
    },
    "q": {
      "en": "The HTTP header \"Server: Apache/2.4.49 (Unix)\" is an example of:",
      "vi": "Tiêu đề HTTP \"Server: Apache/2.4.49 (Unix)\" là ví dụ của:"
    },
    "opts": [
      {
        "en": "A service banner revealing software and version",
        "vi": "Banner dịch vụ tiết lộ phần mềm và phiên bản"
      },
      {
        "en": "An encrypted application-layer payload",
        "vi": "Một payload tầng ứng dụng đã mã hóa"
      },
      {
        "en": "A digital signature over the response",
        "vi": "Một chữ ký số trên phản hồi"
      },
      {
        "en": "A DNS resource record for the host",
        "vi": "Một bản ghi tài nguyên DNS của host"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Banners and headers (Server, X-Powered-By, User-Agent) reveal product and version, enabling active fingerprinting and CVE mapping (Apache 2.4.49 → path traversal CVE-2021-41773). Banner grabbing is active; passive fingerprinting infers from observed traffic.",
      "vi": "Banner và header (Server, X-Powered-By, User-Agent) tiết lộ sản phẩm và phiên bản, cho phép fingerprint chủ động và ánh xạ CVE (Apache 2.4.49 → path traversal CVE-2021-41773). Banner grabbing là chủ động; passive fingerprinting suy ra từ lưu lượng quan sát."
    }
  },

  {
    "app": "B",
    "sec": "b4",
    "secLabel": {
      "en": "B4 — OS Fingerprinting",
      "vi": "B4 — Nhận dạng hệ điều hành"
    },
    "q": {
      "en": "Passive OS fingerprinting (e.g. p0f) primarily infers the OS from:",
      "vi": "Passive OS fingerprinting (vd p0f) suy ra hệ điều hành chủ yếu từ:"
    },
    "opts": [
      {
        "en": "TCP/IP stack quirks like TTL, window size and option order",
        "vi": "Các đặc điểm stack TCP/IP như TTL, kích thước window và thứ tự option"
      },
      {
        "en": "Actively sending crafted TCP/IP probes",
        "vi": "Chủ động gửi các gói thăm dò TCP/IP"
      },
      {
        "en": "Reading the hostname from a DNS lookup",
        "vi": "Đọc hostname từ một tra cứu DNS"
      },
      {
        "en": "Querying the remote system's registry",
        "vi": "Truy vấn registry của hệ thống từ xa"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Passive fingerprinting only observes existing traffic and infers OS from default TTL (64 Linux, 128 Windows), TCP window size and option ordering — no packets are sent, so it is stealthy. Active fingerprinting (nmap -O) sends probes.",
      "vi": "Passive fingerprinting chỉ quan sát lưu lượng có sẵn và suy ra OS từ TTL mặc định (64 Linux, 128 Windows), TCP window size và thứ tự option — không gửi gói nào nên rất ẩn. Active fingerprinting (nmap -O) gửi gói thăm dò."
    }
  },

  {
    "app": "B",
    "sec": "b6",
    "secLabel": {
      "en": "B6 — Network Access Control Analysis",
      "vi": "B6 — Phân tích kiểm soát truy cập mạng"
    },
    "q": {
      "en": "When reviewing a firewall rule base, which finding is the BIGGEST concern?",
      "vi": "Khi xem xét bộ quy tắc firewall, phát hiện nào ĐÁNG LO NGẠI nhất?"
    },
    "opts": [
      {
        "en": "A specific allow rule for one internal host to one server on TCP/443",
        "vi": "Một rule allow cụ thể cho một host nội bộ tới một server qua TCP/443"
      },
      {
        "en": "An \"any any allow\" rule near the top of the list",
        "vi": "Một rule \"any any allow\" gần đầu danh sách"
      },
      {
        "en": "A deny-all rule at the very bottom",
        "vi": "Một rule deny-all ở cuối cùng"
      },
      {
        "en": "Logging enabled on deny rules",
        "vi": "Bật logging trên các rule deny"
      }
    ],
    "correct": 1,
    "exp": {
      "en": "Firewalls evaluate top-down and stop at the first match, so a broad \"any/any allow\" high in the list silently overrides all the specific rules below it — effectively no filtering. An explicit deny-all at the bottom is good practice.",
      "vi": "Firewall xét từ trên xuống và dừng ở rule khớp đầu tiên, nên rule \"any/any allow\" rộng nằm trên cùng sẽ vô hiệu hóa âm thầm mọi rule cụ thể bên dưới — coi như không lọc. Deny-all ở cuối là thực hành tốt."
    },
    "note": {
      "en": "Rule ORDER matters: first match wins.",
      "vi": "THỨ TỰ rule rất quan trọng: rule khớp đầu tiên thắng."
    }
  },

  {
    "app": "B",
    "sec": "b9",
    "secLabel": {
      "en": "B9 — File System Permissions",
      "vi": "B9 — Quyền hệ thống tệp"
    },
    "q": {
      "en": "On NTFS, which Windows permission would let a low-privileged user replace a service binary and escalate privileges?",
      "vi": "Trên NTFS, quyền Windows nào cho phép người dùng quyền thấp thay thế binary của service và leo thang đặc quyền?"
    },
    "opts": [
      {
        "en": "Write/Modify on the service executable or its folder",
        "vi": "Write/Modify trên file thực thi của service hoặc thư mục"
      },
      {
        "en": "Read & Execute on the service executable",
        "vi": "Read & Execute trên file thực thi của service"
      },
      {
        "en": "List Folder Contents on the directory",
        "vi": "List Folder Contents trên thư mục"
      },
      {
        "en": "Read Attributes on the service file",
        "vi": "Read Attributes trên file của service"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "If a non-admin has Write/Modify on a binary that runs as SYSTEM (or its directory), they can overwrite it and gain SYSTEM execution — a classic weak-permissions privilege escalation. Read/Execute alone cannot replace the file.",
      "vi": "Nếu non-admin có Write/Modify trên binary chạy dưới quyền SYSTEM (hoặc thư mục của nó), họ có thể ghi đè và đạt thực thi SYSTEM — leo thang đặc quyền kinh điển do quyền yếu. Read/Execute thuần túy không thể thay file."
    }
  },

  {
    "app": "B",
    "sec": "b11",
    "secLabel": {
      "en": "B11 — Common Data Formats",
      "vi": "B11 — Định dạng dữ liệu phổ biến"
    },
    "q": {
      "en": "In an email header, which field is MOST reliable for tracing the true originating mail server?",
      "vi": "Trong header email, trường nào ĐÁNG TIN CẬY nhất để truy ngược máy chủ mail gốc thật?"
    },
    "opts": [
      {
        "en": "The bottom-most Received: line, added by your own servers",
        "vi": "Dòng Received: dưới cùng, do server của chính bạn thêm"
      },
      {
        "en": "The From: address shown to the recipient",
        "vi": "Địa chỉ From: hiển thị cho người nhận"
      },
      {
        "en": "The Subject: line set by the sender",
        "vi": "Dòng Subject: do người gửi đặt"
      },
      {
        "en": "The Reply-To: header in the message",
        "vi": "Header Reply-To: trong thông điệp"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "\"From:\" and \"Reply-To:\" are trivially spoofed. Received: lines are stamped by each MTA and read bottom-up (oldest first); the lines added by trusted infrastructure you control are the most reliable. Earlier (top) Received lines from untrusted hops can be forged.",
      "vi": "\"From:\" và \"Reply-To:\" dễ giả mạo. Các dòng Received: do từng MTA đóng dấu, đọc từ dưới lên (cũ nhất trước); những dòng do hạ tầng tin cậy của bạn thêm vào là đáng tin nhất. Các dòng Received phía trên từ hop không tin cậy có thể bị giả."
    },
    "note": {
      "en": "Read Received: headers bottom-up; trust only hops you control.",
      "vi": "Đọc header Received: từ dưới lên; chỉ tin các hop bạn kiểm soát."
    }
  },

  {
    "app": "B",
    "sec": "b10",
    "secLabel": {
      "en": "B10 — Host Analysis Techniques",
      "vi": "B10 — Kỹ thuật phân tích host"
    },
    "q": {
      "en": "Which Windows command maps running processes to their listening network ports with the owning PID?",
      "vi": "Lệnh Windows nào ánh xạ tiến trình đang chạy tới cổng mạng đang lắng nghe kèm PID sở hữu?"
    },
    "opts": [
      {
        "en": "ipconfig /all",
        "vi": "ipconfig /all"
      },
      {
        "en": "netstat -ano",
        "vi": "netstat -ano"
      },
      {
        "en": "tasklist /m",
        "vi": "tasklist /m"
      },
      {
        "en": "systeminfo",
        "vi": "systeminfo"
      }
    ],
    "correct": 1,
    "exp": {
      "en": "netstat -ano lists connections/listening ports with the owning PID, which you then map to a process via tasklist. This exposes suspicious listeners or outbound C2. systeminfo shows patch level; ipconfig shows interfaces.",
      "vi": "netstat -ano liệt kê kết nối/cổng đang nghe kèm PID sở hữu, sau đó ánh xạ sang tiến trình bằng tasklist. Nó lộ các listener đáng ngờ hoặc C2 đi ra. systeminfo cho biết mức vá; ipconfig hiển thị giao diện mạng."
    }
  },

  {
    "app": "B",
    "sec": "b1",
    "secLabel": {
      "en": "B1 — IP Protocols",
      "vi": "B1 — Giao thức IP"
    },
    "q": {
      "en": "A device uses DHCP. Which message sequence assigns it an address?",
      "vi": "Một thiết bị dùng DHCP. Chuỗi thông điệp nào cấp địa chỉ cho nó?"
    },
    "opts": [
      {
        "en": "Discover → Offer → Request → Acknowledge",
        "vi": "Discover → Offer → Request → Acknowledge"
      },
      {
        "en": "Request → Grant → Acknowledge → Renew",
        "vi": "Request → Grant → Acknowledge → Renew"
      },
      {
        "en": "Solicit → Advertise → Bind → Release",
        "vi": "Solicit → Advertise → Bind → Release"
      },
      {
        "en": "Hello → Lease → Confirm → Goodbye",
        "vi": "Hello → Lease → Confirm → Goodbye"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "DHCP follows DORA: Discover (client broadcast) → Offer (server) → Request (client) → Acknowledge (server). DHCP logs are valuable for mapping an IP to a MAC/host at a point in time during an investigation.",
      "vi": "DHCP theo DORA: Discover (client broadcast) → Offer (server) → Request (client) → Acknowledge (server). Log DHCP rất giá trị để ánh xạ một IP tới MAC/host tại một thời điểm trong điều tra."
    }
  },

  {
    "app": "B",
    "sec": "b1",
    "secLabel": {
      "en": "B1 — IP Protocols",
      "vi": "B1 — Giao thức IP"
    },
    "q": {
      "en": "Which statement about ICMP is TRUE?",
      "vi": "Phát biểu nào về ICMP là ĐÚNG?"
    },
    "opts": [
      {
        "en": "It carries control/error messages and can be abused for tunnelling",
        "vi": "Nó mang thông điệp điều khiển/lỗi và có thể bị lạm dụng để tunnel"
      },
      {
        "en": "It is a reliable, connection-oriented transport like TCP",
        "vi": "Nó là vận chuyển tin cậy, hướng kết nối như TCP"
      },
      {
        "en": "It uses source and destination ports like TCP and UDP",
        "vi": "Nó dùng cổng nguồn và đích như TCP và UDP"
      },
      {
        "en": "Its presence on a network always indicates an attack",
        "vi": "Sự hiện diện của nó trên mạng luôn là tấn công"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "ICMP is a control protocol (ping echo/reply, destination unreachable, TTL exceeded) with no ports. It is legitimate but oversized or high-volume echo payloads can hide ICMP tunnelling/exfiltration — inspect payload, not just type.",
      "vi": "ICMP là giao thức điều khiển (ping echo/reply, destination unreachable, TTL exceeded) không có cổng. Nó hợp lệ nhưng payload echo quá lớn hoặc lưu lượng cao có thể giấu ICMP tunnelling/exfil — hãy soi payload, không chỉ loại."
    }
  },

  {
    "app": "B",
    "sec": "b2",
    "secLabel": {
      "en": "B2 — Network Architectures",
      "vi": "B2 — Kiến trúc mạng"
    },
    "q": {
      "en": "NAT (Network Address Translation) complicates intrusion analysis because:",
      "vi": "NAT (Dịch địa chỉ mạng) làm phức tạp phân tích xâm nhập vì:"
    },
    "opts": [
      {
        "en": "Many hosts share one public IP, hiding the true source",
        "vi": "Nhiều host dùng chung một IP công khai, che nguồn thật"
      },
      {
        "en": "It encrypts all traffic passing through the gateway",
        "vi": "Nó mã hóa mọi lưu lượng qua gateway"
      },
      {
        "en": "It blocks the firewall from logging connections",
        "vi": "Nó chặn firewall ghi log kết nối"
      },
      {
        "en": "It accelerates the attacker's outbound transfers",
        "vi": "Nó tăng tốc truyền ra ngoài của kẻ tấn công"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "With NAT/PAT, many internal hosts appear as a single public IP, so external logs alone cannot identify the real internal source. You must correlate with NAT/firewall translation logs and internal DHCP to resolve the true host.",
      "vi": "Với NAT/PAT, nhiều host nội bộ xuất hiện dưới một IP công khai, nên log bên ngoài đơn lẻ không xác định được nguồn nội bộ thật. Phải đối chiếu với log dịch NAT/firewall và DHCP nội bộ để xác định host thật."
    }
  },

  {
    "app": "B",
    "sec": "b2",
    "secLabel": {
      "en": "B2 — Network Architectures",
      "vi": "B2 — Kiến trúc mạng"
    },
    "q": {
      "en": "An Autonomous System Number (ASN) is most useful to:",
      "vi": "Số Hệ thống tự trị (ASN) hữu ích nhất để:"
    },
    "opts": [
      {
        "en": "Identify the network/organisation owning a block of IP space",
        "vi": "Xác định mạng/tổ chức sở hữu một khối không gian IP"
      },
      {
        "en": "Decrypt TLS sessions to that organisation's servers",
        "vi": "Giải mã phiên TLS tới server của tổ chức đó"
      },
      {
        "en": "Recover stored passwords from the target's hosts",
        "vi": "Khôi phục mật khẩu lưu trên host mục tiêu"
      },
      {
        "en": "Assign MAC addresses to devices on the network",
        "vi": "Gán địa chỉ MAC cho thiết bị trên mạng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "An ASN identifies a routing domain under one administrative authority. During investigation, mapping a malicious IP to its ASN reveals the hosting/ISP and can group related infrastructure for attribution and blocking.",
      "vi": "ASN xác định một miền định tuyến dưới một thẩm quyền quản trị. Khi điều tra, ánh xạ một IP độc hại tới ASN của nó lộ ra nhà hosting/ISP và có thể gom nhóm hạ tầng liên quan để attribution và chặn."
    }
  },

  {
    "app": "B",
    "sec": "b3",
    "secLabel": {
      "en": "B3 — Common Classes of Tools",
      "vi": "B3 — Các lớp công cụ phổ biến"
    },
    "q": {
      "en": "Which tool class would you use to inspect packet contents during analysis?",
      "vi": "Lớp công cụ nào dùng để xem nội dung gói tin khi phân tích?"
    },
    "opts": [
      {
        "en": "A protocol analyser / packet-capture tool",
        "vi": "Một công cụ phân tích giao thức / bắt gói"
      },
      {
        "en": "A host-based forensic triage tool",
        "vi": "Một công cụ phân loại pháp y trên host"
      },
      {
        "en": "A log-aggregation / SIEM platform",
        "vi": "Một nền tảng tổng hợp log / SIEM"
      },
      {
        "en": "A memory-analysis framework",
        "vi": "Một framework phân tích bộ nhớ"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Protocol analysers (Wireshark, tcpdump, NetworkMiner) capture and dissect packets to layer 7. Knowing the right class of tool — packet analysers, disk imagers, memory frameworks, disassemblers — for each task is a core CPIA skill.",
      "vi": "Trình phân tích giao thức (Wireshark, tcpdump, NetworkMiner) bắt và bóc tách gói tới tầng 7. Biết chọn đúng lớp công cụ — phân tích gói, tạo image đĩa, framework bộ nhớ, disassembler — cho từng việc là kỹ năng CPIA cốt lõi."
    }
  },

  {
    "app": "B",
    "sec": "b8",
    "secLabel": {
      "en": "B8 — Applications of Cryptography",
      "vi": "B8 — Ứng dụng mật mã"
    },
    "q": {
      "en": "Which protocol provides an encrypted tunnel typically used for secure remote shell access?",
      "vi": "Giao thức nào cung cấp đường hầm mã hóa thường dùng để truy cập shell từ xa an toàn?"
    },
    "opts": [
      {
        "en": "Telnet",
        "vi": "Telnet"
      },
      {
        "en": "SSH",
        "vi": "SSH"
      },
      {
        "en": "FTP",
        "vi": "FTP"
      },
      {
        "en": "HTTP",
        "vi": "HTTP"
      }
    ],
    "correct": 1,
    "exp": {
      "en": "SSH provides an authenticated, encrypted channel for remote shell, file transfer (SCP/SFTP) and port forwarding. Telnet/FTP/HTTP are cleartext. Note SSH port-forwarding/tunnelling can also be abused to exfiltrate or pivot.",
      "vi": "SSH cung cấp kênh đã xác thực, mã hóa cho shell từ xa, truyền file (SCP/SFTP) và chuyển tiếp cổng. Telnet/FTP/HTTP là cleartext. Lưu ý port-forwarding/tunnelling của SSH cũng có thể bị lạm dụng để exfil hay pivot."
    }
  },

  {
    "app": "B",
    "sec": "b11",
    "secLabel": {
      "en": "B11 — Common Data Formats",
      "vi": "B11 — Định dạng dữ liệu phổ biến"
    },
    "q": {
      "en": "A PKI certificate primarily binds:",
      "vi": "Một chứng chỉ PKI chủ yếu ràng buộc:"
    },
    "opts": [
      {
        "en": "A public key to an identity, signed by a CA",
        "vi": "Một khóa công khai với một danh tính, do CA ký"
      },
      {
        "en": "A user password to a username",
        "vi": "Một mật khẩu người dùng với một username"
      },
      {
        "en": "An IP address to a MAC address",
        "vi": "Một địa chỉ IP với một địa chỉ MAC"
      },
      {
        "en": "A file to its containing folder",
        "vi": "Một file với thư mục chứa nó"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "An X.509 certificate binds a public key to a subject identity, signed by a CA. Inspecting issuer, subject, validity dates, SANs and fingerprints helps spot self-signed, expired or spoofed certs used by malware C2 or phishing.",
      "vi": "Chứng chỉ X.509 ràng buộc một khóa công khai với danh tính chủ thể, do CA ký. Xem issuer, subject, ngày hiệu lực, SAN và fingerprint giúp phát hiện cert tự ký, hết hạn hoặc giả dùng cho C2 mã độc hay phishing."
    }
  },

  {
    "app": "B",
    "sec": "b10",
    "secLabel": {
      "en": "B10 — Host Analysis Techniques",
      "vi": "B10 — Kỹ thuật phân tích host"
    },
    "q": {
      "en": "Which command quickly shows installed patches/hotfixes on a Windows host?",
      "vi": "Lệnh nào hiển thị nhanh các bản vá/hotfix đã cài trên host Windows?"
    },
    "opts": [
      {
        "en": "wmic qfe list  /  systeminfo",
        "vi": "wmic qfe list  /  systeminfo"
      },
      {
        "en": "driverquery /v /fo list",
        "vi": "driverquery /v /fo list"
      },
      {
        "en": "net config workstation",
        "vi": "net config workstation"
      },
      {
        "en": "ipconfig /allcompartments",
        "vi": "ipconfig /allcompartments"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "\"wmic qfe list\" and systeminfo enumerate installed hotfixes (KB numbers), letting you assess patch level and exposure to known CVEs. Missing critical patches is often the foothold an intruder used.",
      "vi": "\"wmic qfe list\" và systeminfo liệt kê các hotfix đã cài (số KB), cho phép đánh giá mức vá và mức phơi nhiễm với CVE đã biết. Thiếu bản vá quan trọng thường là điểm xâm nhập kẻ tấn công đã dùng."
    }
  },

  {
    "app": "B",
    "sec": "b7",
    "secLabel": {
      "en": "B7 — Cryptography",
      "vi": "B7 — Mật mã học"
    },
    "q": {
      "en": "HMAC is used to provide:",
      "vi": "HMAC được dùng để cung cấp:"
    },
    "opts": [
      {
        "en": "Message integrity and authenticity via a keyed hash",
        "vi": "Toàn vẹn và xác thực thông điệp qua hash có khóa"
      },
      {
        "en": "Confidentiality of the data being sent",
        "vi": "Bảo mật dữ liệu đang gửi"
      },
      {
        "en": "Lossless compression of the message",
        "vi": "Nén không mất dữ liệu của thông điệp"
      },
      {
        "en": "Faster routing of the traffic",
        "vi": "Định tuyến lưu lượng nhanh hơn"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "HMAC (Hash-based Message Authentication Code) combines a hash (e.g. SHA-256) with a shared secret to prove a message was not altered AND came from someone holding the key. It gives integrity + authenticity, not confidentiality.",
      "vi": "HMAC (Mã xác thực thông điệp dựa trên hàm băm) kết hợp một hàm băm (vd SHA-256) với bí mật chung để chứng minh thông điệp không bị thay đổi VÀ đến từ người giữ khóa. Nó cho toàn vẹn + xác thực, không phải bảo mật."
    }
  },

  {
    "app": "B",
    "sec": "b1",
    "secLabel": {
      "en": "B1 — IP Protocols",
      "vi": "B1 — Giao thức IP"
    },
    "q": {
      "en": "Which is a key difference between IPv6 and IPv4 relevant to analysis?",
      "vi": "Đâu là khác biệt quan trọng giữa IPv6 và IPv4 liên quan tới phân tích?"
    },
    "opts": [
      {
        "en": "128-bit addresses and no broadcast, using NDP instead of ARP",
        "vi": "Địa chỉ 128-bit và không có broadcast, dùng NDP thay cho ARP"
      },
      {
        "en": "IPv6 traffic cannot be encrypted at all",
        "vi": "Lưu lượng IPv6 không thể mã hóa"
      },
      {
        "en": "IPv6 hosts do not use IP addresses",
        "vi": "Host IPv6 không dùng địa chỉ IP"
      },
      {
        "en": "IPv6 packets cannot be routed online",
        "vi": "Gói IPv6 không thể định tuyến"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "IPv6 has 128-bit addresses, dropped broadcast, and replaces ARP with Neighbor Discovery (NDP/ICMPv6). Analysts must watch for IPv6 paths that bypass IPv4-only monitoring and for NDP-based attacks — dual-stack hosts can leak via the unmonitored protocol.",
      "vi": "IPv6 dùng địa chỉ 128-bit, bỏ broadcast và thay ARP bằng Neighbor Discovery (NDP/ICMPv6). Analyst phải để ý các đường IPv6 lách qua giám sát chỉ-IPv4 và các tấn công dựa trên NDP — host dual-stack có thể rò qua giao thức không được giám sát."
    }
  },

  {
    "app": "B",
    "sec": "b2",
    "secLabel": {
      "en": "B2 — Network Architectures",
      "vi": "B2 — Kiến trúc mạng"
    },
    "q": {
      "en": "VLAN hopping is a risk that arises from:",
      "vi": "VLAN hopping là rủi ro phát sinh từ:"
    },
    "opts": [
      {
        "en": "Misconfigured trunk ports or a default native VLAN crossing VLANs",
        "vi": "Cổng trunk cấu hình sai hoặc native VLAN mặc định cho vượt VLAN"
      },
      {
        "en": "Using fibre-optic cabling instead of copper",
        "vi": "Dùng cáp quang thay vì cáp đồng"
      },
      {
        "en": "Encrypting traffic between switches and routers",
        "vi": "Mã hóa lưu lượng giữa switch và router"
      },
      {
        "en": "Having too few hosts assigned to each VLAN",
        "vi": "Gán quá ít host cho mỗi VLAN"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "VLANs only isolate when switch ports are configured correctly. Switch-spoofing (DTP) or double-tagging on a mismatched native VLAN lets an attacker reach other VLANs, defeating the segmentation. This is a key security implication of switched/VLAN media.",
      "vi": "VLAN chỉ cô lập khi cổng switch cấu hình đúng. Switch-spoofing (DTP) hoặc double-tagging trên native VLAN không khớp cho phép kẻ tấn công sang VLAN khác, vô hiệu phân đoạn. Đây là hệ quả bảo mật quan trọng của switched/VLAN media."
    }
  },

  {
    "app": "B",
    "sec": "b7",
    "secLabel": {
      "en": "B7 — Cryptography",
      "vi": "B7 — Mật mã học"
    },
    "q": {
      "en": "Which is the correct order from WEAKEST to STRONGEST?",
      "vi": "Đâu là thứ tự đúng từ YẾU NHẤT đến MẠNH NHẤT?"
    },
    "opts": [
      {
        "en": "DES → 3DES → AES",
        "vi": "DES → 3DES → AES"
      },
      {
        "en": "AES → 3DES → DES",
        "vi": "AES → 3DES → DES"
      },
      {
        "en": "AES → DES → 3DES",
        "vi": "AES → DES → 3DES"
      },
      {
        "en": "3DES → AES → DES",
        "vi": "3DES → AES → DES"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "DES (56-bit) is broken; 3DES applies DES three times (stronger but slow and now deprecated); AES (128/192/256-bit) is the modern standard. Seeing DES/3DES in scope flags legacy crypto worth reporting.",
      "vi": "DES (56-bit) đã bị phá; 3DES áp dụng DES ba lần (mạnh hơn nhưng chậm và nay không khuyến nghị); AES (128/192/256-bit) là chuẩn hiện đại. Thấy DES/3DES trong phạm vi là dấu hiệu crypto cũ đáng báo cáo."
    }
  },

  {
    "app": "B",
    "sec": "b5",
    "secLabel": {
      "en": "B5 — Application Fingerprinting",
      "vi": "B5 — Nhận dạng ứng dụng"
    },
    "q": {
      "en": "A User-Agent string \"Mozilla/5.0 ... MSIE 6.0; Windows NT 5.1\" most usefully tells you:",
      "vi": "Chuỗi User-Agent \"Mozilla/5.0 ... MSIE 6.0; Windows NT 5.1\" cho bạn biết hữu ích nhất:"
    },
    "opts": [
      {
        "en": "The likely client browser and operating system",
        "vi": "Trình duyệt và hệ điều hành khả dĩ của client"
      },
      {
        "en": "The web server's administrator password",
        "vi": "Mật khẩu quản trị của web server"
      },
      {
        "en": "The negotiated TLS session key",
        "vi": "Khóa phiên TLS đã đàm phán"
      },
      {
        "en": "The client's hardware MAC address",
        "vi": "Địa chỉ MAC phần cứng của client"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "User-Agent reveals client software/OS — useful for fingerprinting and spotting anomalies. A wildly outdated or malformed UA (or a scripted tool's default UA like python-requests) can indicate automation or malware rather than a real browser. Note UAs are spoofable.",
      "vi": "User-Agent lộ phần mềm/OS của client — hữu ích để fingerprint và phát hiện bất thường. Một UA quá cũ hoặc sai định dạng (hoặc UA mặc định của công cụ script như python-requests) có thể cho thấy automation/mã độc hơn là trình duyệt thật. Lưu ý UA có thể bị giả."
    }
  },

  {
    "app": "B",
    "sec": "b1",
    "secLabel": {
      "en": "B1 — IP Protocols",
      "vi": "B1 — Giao thức IP"
    },
    "q": {
      "en": "In a packet capture you see a TCP segment with only the RST flag set. This usually means:",
      "vi": "Trong một bản bắt gói bạn thấy một segment TCP chỉ bật cờ RST. Điều này thường nghĩa là:"
    },
    "opts": [
      {
        "en": "The connection was abruptly reset or refused",
        "vi": "Kết nối bị reset hoặc từ chối đột ngột"
      },
      {
        "en": "A normal connection being established successfully",
        "vi": "Một kết nối bình thường đang được thiết lập"
      },
      {
        "en": "A large data transfer completing without error",
        "vi": "Một lần truyền dữ liệu lớn hoàn tất không lỗi"
      },
      {
        "en": "A graceful four-way connection teardown in progress",
        "vi": "Một lần đóng kết nối bốn bước êm đang diễn ra"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "RST tears down a connection immediately. It appears when a SYN hits a closed port (RST/ACK), when a host aborts a session, or in scan responses. A graceful close uses FIN/ACK exchanges, not RST.",
      "vi": "RST chấm dứt kết nối ngay lập tức. Nó xuất hiện khi SYN tới cổng đóng (RST/ACK), khi host hủy phiên, hoặc trong phản hồi quét. Đóng êm dùng trao đổi FIN/ACK, không phải RST."
    }
  },

  {
    "app": "B",
    "sec": "b1",
    "secLabel": {
      "en": "B1 — IP Protocols",
      "vi": "B1 — Giao thức IP"
    },
    "q": {
      "en": "A graceful TCP connection teardown is normally accomplished with:",
      "vi": "Việc đóng kết nối TCP êm thông thường được thực hiện bằng:"
    },
    "opts": [
      {
        "en": "A FIN/ACK exchange in both directions",
        "vi": "Trao đổi FIN/ACK theo cả hai chiều"
      },
      {
        "en": "A single SYN segment sent to the server",
        "vi": "Một segment SYN duy nhất gửi tới server"
      },
      {
        "en": "An ICMP redirect issued by the gateway",
        "vi": "Một ICMP redirect do gateway phát ra"
      },
      {
        "en": "An unsolicited ARP reply on the segment",
        "vi": "Một ARP reply không yêu cầu trên đoạn mạng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Each side sends FIN and receives ACK (FIN, ACK, FIN, ACK) to close cleanly. RST is the abrupt alternative. SYN opens connections; ICMP/ARP operate at different layers entirely.",
      "vi": "Mỗi bên gửi FIN và nhận ACK (FIN, ACK, FIN, ACK) để đóng sạch. RST là cách đột ngột. SYN mở kết nối; ICMP/ARP hoạt động ở tầng hoàn toàn khác."
    }
  },

  {
    "app": "B",
    "sec": "b1",
    "secLabel": {
      "en": "B1 — IP Protocols",
      "vi": "B1 — Giao thức IP"
    },
    "q": {
      "en": "Traceroute relies on which ICMP message coming back from intermediate routers?",
      "vi": "Traceroute dựa vào thông điệp ICMP nào trả về từ các router trung gian?"
    },
    "opts": [
      {
        "en": "Time Exceeded (type 11), triggered by decrementing TTL to zero",
        "vi": "Time Exceeded (type 11), kích hoạt khi TTL giảm về 0"
      },
      {
        "en": "Echo Reply (type 0), as returned by a ping",
        "vi": "Echo Reply (type 0), như ping trả về"
      },
      {
        "en": "Redirect (type 5), suggesting a better route",
        "vi": "Redirect (type 5), gợi ý một tuyến tốt hơn"
      },
      {
        "en": "Source Quench (type 4), signalling congestion",
        "vi": "Source Quench (type 4), báo hiệu tắc nghẽn"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Traceroute sends packets with increasing TTLs; each router that decrements TTL to 0 returns ICMP Time Exceeded (type 11), revealing the hop. Echo Reply (type 0) is for ping; Destination Unreachable is type 3.",
      "vi": "Traceroute gửi gói với TTL tăng dần; mỗi router giảm TTL về 0 sẽ trả về ICMP Time Exceeded (type 11), lộ ra hop đó. Echo Reply (type 0) là cho ping; Destination Unreachable là type 3."
    }
  },

  {
    "app": "B",
    "sec": "b1",
    "secLabel": {
      "en": "B1 — IP Protocols",
      "vi": "B1 — Giao thức IP"
    },
    "q": {
      "en": "When does DNS normally use TCP rather than UDP?",
      "vi": "Khi nào DNS thường dùng TCP thay vì UDP?"
    },
    "opts": [
      {
        "en": "For zone transfers and responses larger than the UDP size limit",
        "vi": "Cho zone transfer và phản hồi lớn hơn giới hạn UDP"
      },
      {
        "en": "Never — DNS resolution always uses UDP only",
        "vi": "Không bao giờ — phân giải DNS luôn chỉ dùng UDP"
      },
      {
        "en": "Only when performing reverse PTR lookups",
        "vi": "Chỉ khi thực hiện tra ngược PTR"
      },
      {
        "en": "Only when the query is sent over IPv6",
        "vi": "Chỉ khi truy vấn được gửi qua IPv6"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "DNS uses UDP/53 for typical queries but switches to TCP/53 for zone transfers (AXFR) and large responses exceeding the UDP payload limit (historically 512 bytes). Unexpected large TCP/53 traffic can also hint at tunnelling.",
      "vi": "DNS dùng UDP/53 cho truy vấn thông thường nhưng chuyển sang TCP/53 cho zone transfer (AXFR) và phản hồi lớn vượt giới hạn payload UDP (xưa là 512 byte). Lưu lượng TCP/53 lớn bất thường cũng có thể gợi ý tunnelling."
    }
  },

  {
    "app": "B",
    "sec": "b1",
    "secLabel": {
      "en": "B1 — IP Protocols",
      "vi": "B1 — Giao thức IP"
    },
    "q": {
      "en": "Repeated outbound connections to TCP/6667 from an internal host most classically suggest:",
      "vi": "Các kết nối ra lặp lại tới TCP/6667 từ một host nội bộ gợi ý kinh điển nhất:"
    },
    "opts": [
      {
        "en": "IRC, historically used for botnet command and control",
        "vi": "IRC, trong lịch sử dùng cho command-and-control của botnet"
      },
      {
        "en": "Normal encrypted HTTPS web browsing traffic",
        "vi": "Lưu lượng duyệt web HTTPS mã hóa bình thường"
      },
      {
        "en": "Routine DNS name-resolution queries",
        "vi": "Truy vấn phân giải tên DNS định kỳ"
      },
      {
        "en": "Scheduled NTP clock-synchronisation traffic",
        "vi": "Lưu lượng đồng bộ đồng hồ NTP theo lịch"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "TCP/6667 is the default IRC port, long abused for botnet C2 (bots join a channel to receive commands). It is unusual in modern corporate traffic, so it is a strong investigative lead. HTTPS is 443, DNS 53, NTP 123.",
      "vi": "TCP/6667 là cổng IRC mặc định, từ lâu bị lạm dụng cho C2 của botnet (bot vào một channel để nhận lệnh). Nó bất thường trong lưu lượng doanh nghiệp hiện đại nên là manh mối điều tra mạnh. HTTPS là 443, DNS 53, NTP 123."
    }
  },

  {
    "app": "B",
    "sec": "b1",
    "secLabel": {
      "en": "B1 — IP Protocols",
      "vi": "B1 — Giao thức IP"
    },
    "q": {
      "en": "Default SNMP community strings such as \"public\"/\"private\" are a concern because they:",
      "vi": "Chuỗi community SNMP mặc định như \"public\"/\"private\" đáng lo vì chúng:"
    },
    "opts": [
      {
        "en": "They act like passwords, allowing disclosure or reconfiguration if unchanged",
        "vi": "Chúng như mật khẩu, cho phép lộ thông tin/cấu hình lại nếu không đổi"
      },
      {
        "en": "They encrypt all SNMP traffic between agents and managers",
        "vi": "Chúng mã hóa mọi lưu lượng SNMP giữa agent và manager"
      },
      {
        "en": "They are required for DNS name resolution to work",
        "vi": "Chúng cần thiết để phân giải tên DNS hoạt động"
      },
      {
        "en": "They disable the device until a manager connects",
        "vi": "Chúng vô hiệu thiết bị tới khi một manager kết nối"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "SNMP v1/v2c community strings are effectively cleartext passwords. Defaults like public (read) and private (read-write) let attackers enumerate or reconfigure devices. SNMP runs on UDP 161/162 and v1/v2c offers no real confidentiality.",
      "vi": "Chuỗi community SNMP v1/v2c thực chất là mật khẩu cleartext. Mặc định như public (đọc) và private (đọc-ghi) cho phép kẻ tấn công liệt kê hoặc cấu hình lại thiết bị. SNMP chạy trên UDP 161/162 và v1/v2c không có bảo mật thực sự."
    }
  },

  {
    "app": "B",
    "sec": "b1",
    "secLabel": {
      "en": "B1 — IP Protocols",
      "vi": "B1 — Giao thức IP"
    },
    "q": {
      "en": "You see an IPv6 source address beginning fe80::. This is a:",
      "vi": "Bạn thấy một địa chỉ nguồn IPv6 bắt đầu bằng fe80::. Đây là:"
    },
    "opts": [
      {
        "en": "Link-local address, valid only on the local segment",
        "vi": "Địa chỉ link-local, chỉ có hiệu lực trên đoạn cục bộ"
      },
      {
        "en": "A globally routable unicast address",
        "vi": "Một địa chỉ unicast định tuyến toàn cầu"
      },
      {
        "en": "A multicast group address (ff00::/8)",
        "vi": "Một địa chỉ nhóm multicast (ff00::/8)"
      },
      {
        "en": "An IPv4-mapped IPv6 address (::ffff:)",
        "vi": "Một địa chỉ IPv6 ánh xạ IPv4 (::ffff:)"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "fe80::/10 is IPv6 link-local — auto-configured, not routable beyond the local link. ff00::/8 is multicast; global unicast typically starts 2000::/3. Link-local traffic helps identify on-segment activity (e.g. NDP).",
      "vi": "fe80::/10 là link-local IPv6 — tự cấu hình, không định tuyến ra ngoài đoạn cục bộ. ff00::/8 là multicast; global unicast thường bắt đầu 2000::/3. Lưu lượng link-local giúp nhận diện hoạt động trong đoạn mạng (vd NDP)."
    }
  },

  {
    "app": "B",
    "sec": "b2",
    "secLabel": {
      "en": "B2 — Network Architectures",
      "vi": "B2 — Kiến trúc mạng"
    },
    "q": {
      "en": "Which address block is reserved for PRIVATE use (RFC 1918)?",
      "vi": "Khối địa chỉ nào được dành cho dùng RIÊNG (RFC 1918)?"
    },
    "opts": [
      {
        "en": "172.16.0.0 – 172.31.255.255",
        "vi": "172.16.0.0 – 172.31.255.255"
      },
      {
        "en": "172.32.0.0 – 172.47.255.255",
        "vi": "172.32.0.0 – 172.47.255.255"
      },
      {
        "en": "11.0.0.0 – 11.255.255.255",
        "vi": "11.0.0.0 – 11.255.255.255"
      },
      {
        "en": "192.169.0.0 – 192.169.255.255",
        "vi": "192.169.0.0 – 192.169.255.255"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "RFC 1918 private ranges are 10.0.0.0/8, 172.16.0.0/12 (172.16–172.31) and 192.168.0.0/16. Note 172.32.x and 192.169.x are PUBLIC — a common trap. Recognising private vs public is key when interpreting NAT and traffic direction.",
      "vi": "Dải riêng RFC 1918 là 10.0.0.0/8, 172.16.0.0/12 (172.16–172.31) và 192.168.0.0/16. Lưu ý 172.32.x và 192.169.x là CÔNG KHAI — một cái bẫy phổ biến. Nhận biết riêng vs công khai là then chốt khi diễn giải NAT và chiều lưu lượng."
    },
    "note": {
      "en": "172.16/12 stops at 172.31 — 172.32+ is public.",
      "vi": "172.16/12 dừng ở 172.31 — 172.32 trở đi là công khai."
    }
  },

  {
    "app": "B",
    "sec": "b2",
    "secLabel": {
      "en": "B2 — Network Architectures",
      "vi": "B2 — Kiến trúc mạng"
    },
    "q": {
      "en": "For the subnet 10.20.30.64/27, the broadcast address is:",
      "vi": "Với subnet 10.20.30.64/27, địa chỉ broadcast là:"
    },
    "opts": [
      {
        "en": "10.20.30.95",
        "vi": "10.20.30.95"
      },
      {
        "en": "10.20.30.96",
        "vi": "10.20.30.96"
      },
      {
        "en": "10.20.30.127",
        "vi": "10.20.30.127"
      },
      {
        "en": "10.20.30.63",
        "vi": "10.20.30.63"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "/27 = 32 addresses (mask 255.255.255.224). Block boundaries are .64–.95: network .64, broadcast .95, usable .65–.94. Subnetting fluency lets you tell whether two hosts share a subnet during analysis.",
      "vi": "/27 = 32 địa chỉ (mask 255.255.255.224). Ranh giới khối là .64–.95: network .64, broadcast .95, host dùng được .65–.94. Thành thạo subnetting giúp xác định hai host có cùng subnet hay không khi phân tích."
    }
  },

  {
    "app": "B",
    "sec": "b2",
    "secLabel": {
      "en": "B2 — Network Architectures",
      "vi": "B2 — Kiến trúc mạng"
    },
    "q": {
      "en": "The first 24 bits (OUI) of a MAC address identify the:",
      "vi": "24 bit đầu (OUI) của một địa chỉ MAC xác định:"
    },
    "opts": [
      {
        "en": "The hardware vendor / manufacturer",
        "vi": "Nhà sản xuất / hãng phần cứng"
      },
      {
        "en": "The host's IP subnet",
        "vi": "Subnet IP của host"
      },
      {
        "en": "The TCP service port",
        "vi": "Cổng dịch vụ TCP"
      },
      {
        "en": "The DNS zone of the host",
        "vi": "Zone DNS của host"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A 48-bit MAC splits into a 24-bit OUI (vendor, assigned by IEEE) and a 24-bit device-specific portion. OUIs help identify device types in captures and can expose virtualisation (e.g. VMware/VirtualBox OUIs) — useful for sandbox/VM detection too.",
      "vi": "MAC 48-bit chia thành OUI 24-bit (hãng, do IEEE cấp) và phần 24-bit riêng thiết bị. OUI giúp nhận diện loại thiết bị trong bản bắt gói và có thể lộ ảo hóa (vd OUI của VMware/VirtualBox) — cũng hữu ích cho phát hiện sandbox/VM."
    }
  },

  {
    "app": "B",
    "sec": "b2",
    "secLabel": {
      "en": "B2 — Network Architectures",
      "vi": "B2 — Kiến trúc mạng"
    },
    "q": {
      "en": "A key security advantage of switched media over a shared hub is that:",
      "vi": "Một ưu thế bảo mật của switched media so với hub dùng chung là:"
    },
    "opts": [
      {
        "en": "Unicast frames go only to the destination port, limiting sniffing",
        "vi": "Frame unicast chỉ tới cổng đích, hạn chế sniff"
      },
      {
        "en": "It encrypts every frame sent across the wire",
        "vi": "Nó mã hóa mọi frame gửi trên đường truyền"
      },
      {
        "en": "It removes the need for VLAN segmentation",
        "vi": "Nó loại bỏ nhu cầu phân đoạn VLAN"
      },
      {
        "en": "It prevents all ARP-poisoning attacks",
        "vi": "Nó ngăn mọi tấn công ARP-poisoning"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A hub repeats every frame to all ports (trivial sniffing); a switch learns MACs and forwards unicast only to the right port. It does not encrypt, nor stop ARP poisoning or MAC flooding, which can still defeat the isolation.",
      "vi": "Hub lặp mọi frame ra tất cả cổng (sniff dễ dàng); switch học MAC và chỉ chuyển unicast tới đúng cổng. Nó không mã hóa, cũng không chặn ARP poisoning hay MAC flooding, vốn vẫn có thể phá vỡ sự cô lập."
    }
  },

  {
    "app": "B",
    "sec": "b2",
    "secLabel": {
      "en": "B2 — Network Architectures",
      "vi": "B2 — Kiến trúc mạng"
    },
    "q": {
      "en": "\"1000BASE-T\" refers to:",
      "vi": "\"1000BASE-T\" nói tới:"
    },
    "opts": [
      {
        "en": "Gigabit Ethernet over twisted-pair copper",
        "vi": "Gigabit Ethernet trên cáp đồng xoắn đôi"
      },
      {
        "en": "A wireless 802.11 networking standard",
        "vi": "Một chuẩn mạng không dây 802.11"
      },
      {
        "en": "A fibre-only 10 Gbps backbone link",
        "vi": "Một liên kết backbone quang 10 Gbps"
      },
      {
        "en": "A serial console management protocol",
        "vi": "Một giao thức console nối tiếp"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "1000BASE-T = 1 Gbps Ethernet over twisted-pair (Cat5e+). The number is speed, BASE = baseband, the suffix indicates medium (T = twisted pair, others denote fibre). Knowing media types helps assess capture feasibility and link speeds.",
      "vi": "1000BASE-T = Ethernet 1 Gbps trên cáp xoắn đôi (Cat5e trở lên). Con số là tốc độ, BASE = baseband, hậu tố chỉ môi trường (T = twisted pair, ký hiệu khác chỉ cáp quang). Biết loại môi trường giúp đánh giá khả năng bắt gói và tốc độ liên kết."
    }
  },

  {
    "app": "B",
    "sec": "b3",
    "secLabel": {
      "en": "B3 — Common Classes of Tools",
      "vi": "B3 — Các lớp công cụ phổ biến"
    },
    "q": {
      "en": "To convert machine code in a binary back into human-readable assembly for static analysis, you would use a:",
      "vi": "Để chuyển mã máy trong một binary trở lại assembly đọc được cho phân tích tĩnh, bạn dùng:"
    },
    "opts": [
      {
        "en": "A disassembler (e.g. IDA Pro, Ghidra)",
        "vi": "Một disassembler (vd IDA Pro, Ghidra)"
      },
      {
        "en": "A packet analyser like Wireshark",
        "vi": "Một trình phân tích gói như Wireshark"
      },
      {
        "en": "A hex-to-decimal conversion tool",
        "vi": "Một công cụ chuyển hex sang decimal"
      },
      {
        "en": "A network port scanner (nmap)",
        "vi": "Một trình quét cổng mạng (nmap)"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A disassembler translates opcodes to assembly (IDA, Ghidra, radare2); a decompiler goes further to pseudo-C. Packet analysers inspect traffic, debuggers run/inspect code dynamically. Matching the right tool class to the task is the core skill tested.",
      "vi": "Disassembler dịch opcode sang assembly (IDA, Ghidra, radare2); decompiler đi xa hơn tới pseudo-C. Trình phân tích gói xem lưu lượng, debugger chạy/soi mã động. Chọn đúng lớp công cụ cho nhiệm vụ là kỹ năng cốt lõi được hỏi."
    }
  },

  {
    "app": "B",
    "sec": "b3",
    "secLabel": {
      "en": "B3 — Common Classes of Tools",
      "vi": "B3 — Các lớp công cụ phổ biến"
    },
    "q": {
      "en": "Which tool class lets you set breakpoints and inspect registers/memory while a program executes?",
      "vi": "Lớp công cụ nào cho phép đặt breakpoint và soi thanh ghi/bộ nhớ khi chương trình đang chạy?"
    },
    "opts": [
      {
        "en": "A run-time debugger",
        "vi": "Một debugger lúc chạy"
      },
      {
        "en": "A static hex / binary editor",
        "vi": "Một trình soạn hex/nhị phân tĩnh"
      },
      {
        "en": "A network protocol analyser",
        "vi": "Một bộ phân tích giao thức mạng"
      },
      {
        "en": "A WHOIS lookup client",
        "vi": "Một client tra cứu WHOIS"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Debuggers enable dynamic analysis: breakpoints, single-stepping, reading/writing registers and memory — essential to unpack malware or extract runtime keys. Hex editors view/edit bytes statically; the others are unrelated.",
      "vi": "Debugger cho phép phân tích động: breakpoint, chạy từng bước, đọc/ghi thanh ghi và bộ nhớ — thiết yếu để giải nén mã độc hoặc trích khóa lúc chạy. Hex editor xem/sửa byte tĩnh; các phương án khác không liên quan."
    }
  },

  {
    "app": "B",
    "sec": "b3",
    "secLabel": {
      "en": "B3 — Common Classes of Tools",
      "vi": "B3 — Các lớp công cụ phổ biến"
    },
    "q": {
      "en": "Which is the MOST appropriate tool to carve deleted files from unallocated disk space?",
      "vi": "Công cụ NÀO phù hợp nhất để carve các file đã xóa từ không gian đĩa chưa cấp phát?"
    },
    "opts": [
      {
        "en": "A file-carving / forensic suite (PhotoRec, foremost)",
        "vi": "Một bộ carving / forensic (PhotoRec, foremost)"
      },
      {
        "en": "A forward web proxy server (Squid)",
        "vi": "Một forward web proxy (Squid)"
      },
      {
        "en": "A network port scanner (nmap)",
        "vi": "Một trình quét cổng mạng (nmap)"
      },
      {
        "en": "A credential / password manager",
        "vi": "Một trình quản lý mật khẩu"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "File carving tools recover files by recognising header/footer signatures in raw data, independent of file-system metadata — ideal for unallocated space. Proxies, scanners and password managers serve unrelated purposes.",
      "vi": "Công cụ carving khôi phục file bằng nhận diện signature header/footer trong dữ liệu thô, độc lập với metadata hệ thống tệp — lý tưởng cho không gian chưa cấp phát. Proxy, scanner và trình quản lý mật khẩu phục vụ mục đích khác."
    }
  },

  {
    "app": "B",
    "sec": "b3",
    "secLabel": {
      "en": "B3 — Common Classes of Tools",
      "vi": "B3 — Các lớp công cụ phổ biến"
    },
    "q": {
      "en": "INetSim and FakeNet belong to which class of tool?",
      "vi": "INetSim và FakeNet thuộc lớp công cụ nào?"
    },
    "opts": [
      {
        "en": "Internet-service emulation tools",
        "vi": "Công cụ giả lập dịch vụ internet"
      },
      {
        "en": "Forensic disk-imaging utilities",
        "vi": "Công cụ tạo image đĩa forensic"
      },
      {
        "en": "Binary disassembler tools",
        "vi": "Công cụ disassembler nhị phân"
      },
      {
        "en": "Network perimeter firewalls",
        "vi": "Tường lửa biên mạng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "They emulate DNS, HTTP(S), SMTP etc. so malware in an isolated lab \"believes\" it reached the internet, revealing C2 and behaviour without real exposure. This is core to safe dynamic analysis.",
      "vi": "Chúng giả lập DNS, HTTP(S), SMTP, v.v. để mã độc trong lab cách ly \"tưởng\" đã ra internet, lộ ra C2 và hành vi mà không phơi nhiễm thật. Đây là cốt lõi của phân tích động an toàn."
    }
  },

  {
    "app": "B",
    "sec": "b4",
    "secLabel": {
      "en": "B4 — OS Fingerprinting",
      "vi": "B4 — Nhận dạng hệ điều hành"
    },
    "q": {
      "en": "A captured packet has an initial TTL near 64. This MOST likely indicates the sender runs:",
      "vi": "Một gói bắt được có TTL ban đầu gần 64. Điều này KHẢ NĂNG cho biết bên gửi chạy:"
    },
    "opts": [
      {
        "en": "A Linux/Unix-like OS",
        "vi": "Một OS kiểu Linux/Unix"
      },
      {
        "en": "Windows",
        "vi": "Windows"
      },
      {
        "en": "A Cisco router (255)",
        "vi": "Một router Cisco (255)"
      },
      {
        "en": "Nothing can be inferred",
        "vi": "Không thể suy ra gì"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Default initial TTLs differ by OS: Linux/Unix ≈ 64, Windows ≈ 128, many network devices ≈ 255. Since TTL decrements per hop, an observed 60 implies ~4 hops from a 64-default host. This passive cue helps fingerprint the source OS.",
      "vi": "TTL ban đầu mặc định khác nhau theo OS: Linux/Unix ≈ 64, Windows ≈ 128, nhiều thiết bị mạng ≈ 255. Vì TTL giảm mỗi hop, quan sát thấy 60 ngụ ý ~4 hop từ một host mặc định 64. Manh mối thụ động này giúp fingerprint OS nguồn."
    },
    "note": {
      "en": "TTL defaults: Linux 64, Windows 128, network gear 255.",
      "vi": "TTL mặc định: Linux 64, Windows 128, thiết bị mạng 255."
    }
  },

  {
    "app": "B",
    "sec": "b4",
    "secLabel": {
      "en": "B4 — OS Fingerprinting",
      "vi": "B4 — Nhận dạng hệ điều hành"
    },
    "q": {
      "en": "The KEY difference between active and passive OS fingerprinting is that active fingerprinting:",
      "vi": "Khác biệt CHÍNH giữa fingerprint OS chủ động và thụ động là fingerprint chủ động:"
    },
    "opts": [
      {
        "en": "Sends crafted probes to the target, so it is detectable",
        "vi": "Gửi gói thăm dò chế tạo riêng tới mục tiêu nên bị phát hiện"
      },
      {
        "en": "Never sends any packets onto the network at all",
        "vi": "Không gửi gói nào lên mạng"
      },
      {
        "en": "Only reads metadata embedded in documents",
        "vi": "Chỉ đọc metadata nhúng trong tài liệu"
      },
      {
        "en": "Cannot determine the operating system",
        "vi": "Không thể xác định hệ điều hành"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Active tools (nmap -O) send probes and analyse responses — accurate but noisy/loggable. Passive tools (p0f) only observe existing traffic — stealthy but dependent on seeing useful packets. Choose by stealth needs and available data.",
      "vi": "Công cụ chủ động (nmap -O) gửi gói thăm dò và phân tích phản hồi — chính xác nhưng ồn/ghi log được. Công cụ thụ động (p0f) chỉ quan sát lưu lượng có sẵn — ẩn nhưng phụ thuộc việc thấy gói hữu ích. Chọn theo nhu cầu ẩn mình và dữ liệu sẵn có."
    }
  },

  {
    "app": "B",
    "sec": "b5",
    "secLabel": {
      "en": "B5 — Application Fingerprinting",
      "vi": "B5 — Nhận dạng ứng dụng"
    },
    "q": {
      "en": "Connecting to TCP/22 and reading \"SSH-2.0-OpenSSH_7.4\" is an example of:",
      "vi": "Kết nối tới TCP/22 và đọc \"SSH-2.0-OpenSSH_7.4\" là ví dụ của:"
    },
    "opts": [
      {
        "en": "Banner grabbing to identify service and version",
        "vi": "Banner grabbing để xác định dịch vụ và phiên bản"
      },
      {
        "en": "Passive OS fingerprinting from stack quirks",
        "vi": "Fingerprint OS thụ động từ đặc thù stack"
      },
      {
        "en": "A DNS zone transfer (AXFR) request",
        "vi": "Một yêu cầu zone transfer DNS (AXFR)"
      },
      {
        "en": "A buffer-overflow exploitation attempt",
        "vi": "Một nỗ lực khai thác buffer-overflow"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Many services announce themselves on connect (SSH, SMTP, FTP, HTTP). Reading that banner is active fingerprinting that maps the exact software/version to known vulnerabilities (e.g. OpenSSH 7.4 CVEs). Banners can be altered to mislead, so corroborate.",
      "vi": "Nhiều dịch vụ tự khai khi kết nối (SSH, SMTP, FTP, HTTP). Đọc banner đó là fingerprint chủ động, ánh xạ phần mềm/phiên bản chính xác tới lỗ hổng đã biết (vd CVE của OpenSSH 7.4). Banner có thể bị sửa để gây nhiễu nên cần đối chiếu."
    }
  },

  {
    "app": "B",
    "sec": "b5",
    "secLabel": {
      "en": "B5 — Application Fingerprinting",
      "vi": "B5 — Nhận dạng ứng dụng"
    },
    "q": {
      "en": "An email header field \"X-Mailer: Outlook 16.0\" most usefully reveals:",
      "vi": "Trường header email \"X-Mailer: Outlook 16.0\" tiết lộ hữu ích nhất:"
    },
    "opts": [
      {
        "en": "The client software and version that composed the message",
        "vi": "Phần mềm client và phiên bản đã soạn thư"
      },
      {
        "en": "The recipient's mailbox account password",
        "vi": "Mật khẩu tài khoản hộp thư người nhận"
      },
      {
        "en": "The SMTP server's available disk space",
        "vi": "Dung lượng đĩa còn trống của máy chủ SMTP"
      },
      {
        "en": "The TLS session key used for delivery",
        "vi": "Khóa phiên TLS dùng để gửi"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "X-Mailer/User-Agent style headers disclose the composing client and version — useful for fingerprinting senders and spotting anomalies (e.g. phishing sent by a scripting library rather than a real mail client). Such headers are spoofable, so weigh accordingly.",
      "vi": "Header kiểu X-Mailer/User-Agent lộ client soạn thư và phiên bản — hữu ích để fingerprint người gửi và phát hiện bất thường (vd phishing gửi bằng thư viện script chứ không phải client mail thật). Header này có thể giả nên cân nhắc khi đánh giá."
    }
  },

  {
    "app": "B",
    "sec": "b6",
    "secLabel": {
      "en": "B6 — Network Access Control Analysis",
      "vi": "B6 — Phân tích kiểm soát truy cập mạng"
    },
    "q": {
      "en": "What is the practical effect of an implicit \"deny all\" at the end of an ACL?",
      "vi": "Một quy tắc \"deny all\" (chặn tất cả) ngầm định ở cuối một ACL có tác dụng thực tế gì?"
    },
    "opts": [
      {
        "en": "Anything not explicitly permitted is blocked",
        "vi": "Mọi traffic đều bị chặn, trừ những gì được cho phép ngoại lệ rõ ràng"
      },
      {
        "en": "Everything is permitted unless explicitly denied",
        "vi": "Mọi traffic đều được phép, trừ những gì bị chặn ngoại lệ rõ ràng"
      },
      {
        "en": "All connection logging is silently disabled",
        "vi": "Toàn bộ việc ghi log kết nối bị tắt âm thầm"
      },
      {
        "en": "Network address translation is bypassed",
        "vi": "Chuyển đổi địa chỉ mạng (NAT) bị bỏ qua"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Most ACLs/firewalls end with an implicit deny: traffic matching no permit rule is dropped (default-deny / whitelist model). This is more secure than default-allow. When reviewing rules, verify the order and that the implicit deny is not overridden by a broad earlier permit.",
      "vi": "Đa số ACL/firewall kết thúc bằng deny ngầm: lưu lượng không khớp rule permit nào sẽ bị bỏ (mô hình default-deny/whitelist). An toàn hơn default-allow. Khi rà rule, kiểm tra thứ tự và rằng deny ngầm không bị một permit rộng phía trước ghi đè."
    }
  },

  {
    "app": "B",
    "sec": "b6",
    "secLabel": {
      "en": "B6 — Network Access Control Analysis",
      "vi": "B6 — Phân tích kiểm soát truy cập mạng"
    },
    "q": {
      "en": "A stateful firewall differs from a stateless packet filter in that it:",
      "vi": "Một firewall stateful khác với bộ lọc gói stateless ở chỗ nó:"
    },
    "opts": [
      {
        "en": "Tracks connection state and auto-allows legitimate replies",
        "vi": "Theo dõi trạng thái kết nối và tự cho phép phản hồi hợp lệ"
      },
      {
        "en": "It inspects only the source MAC address",
        "vi": "Nó chỉ kiểm tra địa chỉ MAC nguồn"
      },
      {
        "en": "It is unable to block any traffic at all",
        "vi": "Nó không thể chặn lưu lượng nào"
      },
      {
        "en": "It encrypts every packet that it forwards",
        "vi": "Nó mã hóa mọi gói mà nó chuyển tiếp"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Stateful firewalls maintain a connection table, so reply packets of an established session are permitted without a separate inbound rule. Stateless filters evaluate each packet in isolation, requiring explicit rules in both directions and being weaker against spoofed flags.",
      "vi": "Firewall stateful duy trì bảng kết nối, nên gói trả lời của một phiên đã thiết lập được phép mà không cần rule vào riêng. Bộ lọc stateless xét từng gói riêng lẻ, cần rule tường minh cả hai chiều và yếu hơn trước cờ giả mạo."
    }
  },

  {
    "app": "B",
    "sec": "b6",
    "secLabel": {
      "en": "B6 — Network Access Control Analysis",
      "vi": "B6 — Phân tích kiểm soát truy cập mạng"
    },
    "q": {
      "en": "\"Rule shadowing\" in a firewall policy means:",
      "vi": "\"Rule shadowing\" trong chính sách firewall nghĩa là:"
    },
    "opts": [
      {
        "en": "An earlier broader rule stops a later rule ever matching",
        "vi": "Một rule rộng ở trước chặn rule sau không bao giờ khớp"
      },
      {
        "en": "A rule's contents are stored encrypted",
        "vi": "Nội dung một rule được lưu mã hóa"
      },
      {
        "en": "Two firewalls are clustered together",
        "vi": "Hai firewall được gom cụm"
      },
      {
        "en": "Connection logging is silently duplicated",
        "vi": "Ghi log kết nối bị nhân đôi âm thầm"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Because firewalls match top-down and stop at the first hit, a broad rule placed above a more specific one shadows it — the specific rule is dead and its intended control never applies. Detecting shadowed/redundant rules is a key part of rule-base review.",
      "vi": "Vì firewall khớp từ trên xuống và dừng ở rule trúng đầu tiên, một rule rộng đặt trên một rule cụ thể hơn sẽ che (shadow) nó — rule cụ thể trở thành \"chết\" và biện pháp kiểm soát dự kiến không bao giờ áp dụng. Phát hiện rule bị che/dư thừa là phần quan trọng khi rà bộ rule."
    }
  },

  {
    "app": "B",
    "sec": "b7",
    "secLabel": {
      "en": "B7 — Cryptography",
      "vi": "B7 — Mật mã học"
    },
    "q": {
      "en": "RC4 is best described as:",
      "vi": "RC4 được mô tả đúng nhất là:"
    },
    "opts": [
      {
        "en": "A stream cipher with known biases, now considered insecure",
        "vi": "Một stream cipher có thiên lệch đã biết, nay không an toàn"
      },
      {
        "en": "An asymmetric public/private-key algorithm",
        "vi": "Một thuật toán bất đối xứng công khai/riêng"
      },
      {
        "en": "A one-way cryptographic hash function",
        "vi": "Một hàm băm mật mã một chiều"
      },
      {
        "en": "A block cipher with 256-bit blocks",
        "vi": "Một block cipher với khối 256-bit"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "RC4 is a symmetric STREAM cipher (encrypts byte-by-byte with a keystream). Keystream biases make it insecure (it broke WEP and weakened early TLS). Contrast block ciphers (AES) that work on fixed-size blocks. RC4 is not asymmetric and not a hash.",
      "vi": "RC4 là stream cipher đối xứng (mã hóa từng byte bằng keystream). Thiên lệch keystream khiến nó không an toàn (nó phá WEP và làm yếu TLS thời đầu). Khác với block cipher (AES) làm việc trên khối kích thước cố định. RC4 không bất đối xứng và không phải hàm băm."
    }
  },

  {
    "app": "B",
    "sec": "b7",
    "secLabel": {
      "en": "B7 — Cryptography",
      "vi": "B7 — Mật mã học"
    },
    "q": {
      "en": "To create a digital signature on a document, the signer encrypts a hash of it with their:",
      "vi": "Để tạo chữ ký số trên một tài liệu, người ký mã hóa một hash của nó bằng:"
    },
    "opts": [
      {
        "en": "Their own private key, verified with their public key",
        "vi": "Khóa riêng của chính họ, xác minh bằng khóa công khai của họ"
      },
      {
        "en": "Their own freely-shared public key",
        "vi": "Khóa công khai chia sẻ tự do của họ"
      },
      {
        "en": "The recipient's secret private key",
        "vi": "Khóa riêng bí mật của người nhận"
      },
      {
        "en": "A shared symmetric session key",
        "vi": "Một khóa phiên đối xứng dùng chung"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Signing uses the signer's PRIVATE key on the message hash; anyone can verify with the signer's PUBLIC key, proving authenticity and integrity. Confidentiality (encrypting FOR someone) instead uses the recipient's public key — a commonly confused pairing.",
      "vi": "Ký dùng khóa RIÊNG của người ký trên hash thông điệp; ai cũng xác minh được bằng khóa CÔNG KHAI của người ký, chứng minh tính xác thực và toàn vẹn. Bảo mật (mã hóa GỬI CHO ai đó) lại dùng khóa công khai của người nhận — một cặp hay bị nhầm."
    },
    "note": {
      "en": "Sign = your private key; encrypt-to = their public key.",
      "vi": "Ký = khóa riêng của bạn; mã hóa-gửi = khóa công khai của họ."
    }
  },

  {
    "app": "B",
    "sec": "b7",
    "secLabel": {
      "en": "B7 — Cryptography",
      "vi": "B7 — Mật mã học"
    },
    "q": {
      "en": "Encrypting a bitmap with AES in ECB mode is weak because:",
      "vi": "Mã hóa một ảnh bitmap bằng AES ở chế độ ECB là yếu vì:"
    },
    "opts": [
      {
        "en": "Equal plaintext blocks give equal ciphertext, leaking patterns",
        "vi": "Khối plaintext bằng nhau cho ciphertext bằng nhau, lộ mẫu"
      },
      {
        "en": "The AES cipher itself has been fully broken",
        "vi": "Bản thân AES đã bị phá hoàn toàn"
      },
      {
        "en": "ECB mode secretly relies on a public key",
        "vi": "ECB ngầm dựa vào một khóa công khai"
      },
      {
        "en": "It silently compresses the image data",
        "vi": "Nó âm thầm nén dữ liệu ảnh"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "ECB encrypts each block independently, so repeating plaintext blocks yield repeating ciphertext — the infamous \"ECB penguin\" still shows the image outline. Modes like CBC/CTR/GCM add chaining/IVs to hide patterns. The cipher (AES) is fine; the MODE is the weakness.",
      "vi": "ECB mã hóa từng khối độc lập, nên các khối plaintext lặp cho ciphertext lặp — \"ECB penguin\" khét tiếng vẫn lộ đường nét ảnh. Các chế độ như CBC/CTR/GCM thêm chaining/IV để giấu mẫu hình. Bản thân thuật toán (AES) ổn; chính CHẾ ĐỘ mới là điểm yếu."
    }
  },

  {
    "app": "B",
    "sec": "b7",
    "secLabel": {
      "en": "B7 — Cryptography",
      "vi": "B7 — Mật mã học"
    },
    "q": {
      "en": "Why is MD5 unsuitable for proving two different files are NOT the same?",
      "vi": "Vì sao MD5 không phù hợp để chứng minh hai file khác nhau KHÔNG giống nhau?"
    },
    "opts": [
      {
        "en": "It is collision-prone, so crafted inputs can share a hash",
        "vi": "Nó dễ trùng (collision), nên đầu vào được tạo khéo có thể chung một hash"
      },
      {
        "en": "It is far too slow to compute in practice",
        "vi": "Nó quá chậm để tính trong thực tế"
      },
      {
        "en": "It encrypts the file rather than hashing it",
        "vi": "Nó mã hóa file thay vì băm"
      },
      {
        "en": "It only works on plain-text input files",
        "vi": "Nó chỉ chạy với file văn bản thuần"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "MD5 has practical collision attacks, so a matching MD5 no longer guarantees identical content, and adversaries can engineer collisions. For integrity assurance use SHA-256+. MD5 is still seen for quick non-adversarial deduplication/lookup.",
      "vi": "MD5 có tấn công va chạm khả thi, nên MD5 trùng nhau không còn đảm bảo nội dung giống hệt, và kẻ tấn công có thể tạo va chạm cố ý. Để đảm bảo toàn vẹn hãy dùng SHA-256 trở lên. MD5 vẫn gặp cho việc dedup/tra cứu nhanh không có đối kháng."
    }
  },

  {
    "app": "B",
    "sec": "b7",
    "secLabel": {
      "en": "B7 — Cryptography",
      "vi": "B7 — Mật mã học"
    },
    "q": {
      "en": "Adding a unique random \"salt\" before hashing stored passwords primarily defeats:",
      "vi": "Thêm một \"salt\" ngẫu nhiên duy nhất trước khi băm mật khẩu lưu trữ chủ yếu vô hiệu hóa:"
    },
    "opts": [
      {
        "en": "Precomputed rainbow-table attacks on stored password hashes",
        "vi": "Tấn công rainbow-table tính trước lên hash mật khẩu lưu"
      },
      {
        "en": "All brute-force guessing attacks, permanently",
        "vi": "Mọi tấn công brute-force, vĩnh viễn"
      },
      {
        "en": "Passive network sniffing of credentials",
        "vi": "Nghe lén thông tin đăng nhập trên mạng"
      },
      {
        "en": "SQL-injection attacks against the database",
        "vi": "Tấn công SQL-injection vào cơ sở dữ liệu"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A per-password salt makes precomputed tables (rainbow tables) useless and ensures two users with the same password get different stored hashes. It does not stop targeted brute force outright (use slow KDFs like bcrypt/Argon2 for that) nor unrelated attacks like sniffing/SQLi.",
      "vi": "Salt theo từng mật khẩu khiến bảng tính trước (rainbow table) vô dụng và đảm bảo hai người cùng mật khẩu có hash lưu khác nhau. Nó không chặn hẳn brute force nhắm mục tiêu (dùng KDF chậm như bcrypt/Argon2 cho việc đó) cũng không chống các tấn công khác như sniffing/SQLi."
    }
  },

  {
    "app": "B",
    "sec": "b8",
    "secLabel": {
      "en": "B8 — Applications of Cryptography",
      "vi": "B8 — Ứng dụng mật mã"
    },
    "q": {
      "en": "In IPSec, which component provides CONFIDENTIALITY (encryption) of the payload?",
      "vi": "Trong IPSec, thành phần nào cung cấp tính BẢO MẬT (mã hóa) cho payload?"
    },
    "opts": [
      {
        "en": "ESP (Encapsulating Security Payload)",
        "vi": "ESP (Encapsulating Security Payload)"
      },
      {
        "en": "AH (Authentication Header) alone",
        "vi": "Chỉ AH (Authentication Header)"
      },
      {
        "en": "IKE (Internet Key Exchange) alone",
        "vi": "Chỉ IKE (Internet Key Exchange)"
      },
      {
        "en": "GRE (Generic Routing Encapsulation)",
        "vi": "GRE (Generic Routing Encapsulation)"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "ESP provides confidentiality (encryption) plus optional integrity/authentication. AH provides integrity and authentication but NO encryption. IKE negotiates keys; GRE is a (non-encrypting) tunnelling protocol. Tunnel mode encrypts the whole inner packet; transport mode only the payload.",
      "vi": "ESP cung cấp bảo mật (mã hóa) cùng toàn vẹn/xác thực tùy chọn. AH cung cấp toàn vẹn và xác thực nhưng KHÔNG mã hóa. IKE đàm phán khóa; GRE là giao thức tunnel (không mã hóa). Tunnel mode mã hóa toàn bộ gói bên trong; transport mode chỉ payload."
    }
  },

  {
    "app": "B",
    "sec": "b8",
    "secLabel": {
      "en": "B8 — Applications of Cryptography",
      "vi": "B8 — Ứng dụng mật mã"
    },
    "q": {
      "en": "WPA2-Personal's strongest standard cipher suite is based on:",
      "vi": "Bộ mã hóa chuẩn mạnh nhất của WPA2-Personal dựa trên:"
    },
    "opts": [
      {
        "en": "AES-CCMP",
        "vi": "AES-CCMP"
      },
      {
        "en": "RC4-TKIP",
        "vi": "RC4-TKIP"
      },
      {
        "en": "WEP",
        "vi": "WEP"
      },
      {
        "en": "DES",
        "vi": "DES"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "WPA2 mandates AES in CCMP mode (robust). WPA originally used TKIP (RC4-based, a stopgap over WEP) which is now deprecated. WEP/DES are obsolete. WPA3 later added SAE to resist offline dictionary attacks on the handshake.",
      "vi": "WPA2 bắt buộc AES ở chế độ CCMP (vững chắc). WPA ban đầu dùng TKIP (dựa trên RC4, giải pháp tạm thay WEP) nay không khuyến nghị. WEP/DES đã lỗi thời. WPA3 sau này thêm SAE để chống tấn công từ điển offline lên handshake."
    }
  },

  {
    "app": "B",
    "sec": "b8",
    "secLabel": {
      "en": "B8 — Applications of Cryptography",
      "vi": "B8 — Ứng dụng mật mã"
    },
    "q": {
      "en": "During a TLS handshake, asymmetric crypto is used mainly to:",
      "vi": "Trong bắt tay TLS, mật mã bất đối xứng chủ yếu được dùng để:"
    },
    "opts": [
      {
        "en": "Authenticate the server and agree a symmetric session key",
        "vi": "Xác thực máy chủ và thống nhất khóa phiên đối xứng"
      },
      {
        "en": "Encrypt the entire session for its full duration",
        "vi": "Mã hóa toàn bộ phiên trong suốt thời gian"
      },
      {
        "en": "Compress the traffic to improve performance",
        "vi": "Nén lưu lượng để cải thiện hiệu năng"
      },
      {
        "en": "Resolve the server's DNS hostname to an IP",
        "vi": "Phân giải hostname DNS của máy chủ sang IP"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "TLS uses asymmetric crypto (certificates, key exchange) to authenticate and agree a shared symmetric key; the bulk data is then encrypted with fast symmetric crypto (AES). This hybrid model balances security and performance. The cert ties the public key to the server identity.",
      "vi": "TLS dùng mật mã bất đối xứng (chứng chỉ, trao đổi khóa) để xác thực và thống nhất một khóa đối xứng chung; dữ liệu lớn sau đó được mã hóa bằng mật mã đối xứng nhanh (AES). Mô hình lai này cân bằng bảo mật và hiệu năng. Chứng chỉ gắn khóa công khai với danh tính máy chủ."
    }
  },

  {
    "app": "B",
    "sec": "b8",
    "secLabel": {
      "en": "B8 — Applications of Cryptography",
      "vi": "B8 — Ứng dụng mật mã"
    },
    "q": {
      "en": "On first SSH connection, the client stores the server's host key. Its purpose is to:",
      "vi": "Khi kết nối SSH lần đầu, client lưu host key của máy chủ. Mục đích của nó là:"
    },
    "opts": [
      {
        "en": "Detect server impersonation / MITM on later connections",
        "vi": "Phát hiện giả mạo máy chủ / MITM ở các lần sau"
      },
      {
        "en": "Encrypt the user's stored password locally",
        "vi": "Mã hóa cục bộ mật khẩu lưu của người dùng"
      },
      {
        "en": "Speed up DNS resolution of the server",
        "vi": "Tăng tốc phân giải DNS của máy chủ"
      },
      {
        "en": "Store the user's files on the remote host",
        "vi": "Lưu file của người dùng trên host từ xa"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "The host key authenticates the server; the client saves it (known_hosts) and warns if it changes, flagging possible MITM. A sudden host-key-changed warning during an investigation can indicate interception. It does not handle the user's password storage.",
      "vi": "Host key xác thực máy chủ; client lưu nó (known_hosts) và cảnh báo nếu thay đổi, báo hiệu khả năng MITM. Một cảnh báo host-key-changed bất ngờ trong điều tra có thể cho thấy bị chặn bắt. Nó không xử lý việc lưu mật khẩu của người dùng."
    }
  },

  {
    "app": "B",
    "sec": "b9",
    "secLabel": {
      "en": "B9 — File System Permissions",
      "vi": "B9 — Quyền hệ thống tệp"
    },
    "q": {
      "en": "In a Windows DACL, what does a SID identify?",
      "vi": "Trong DACL của Windows, một SID xác định gì?"
    },
    "opts": [
      {
        "en": "A security principal (user, group or computer)",
        "vi": "Một chủ thể bảo mật (user, nhóm hoặc máy tính)"
      },
      {
        "en": "A TCP/UDP network service port",
        "vi": "Một cổng dịch vụ mạng TCP/UDP"
      },
      {
        "en": "A file's size in bytes on disk",
        "vi": "Kích thước file tính bằng byte trên đĩa"
      },
      {
        "en": "A registry value's data type (REG_SZ)",
        "vi": "Loại dữ liệu của một giá trị registry (REG_SZ)"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A Security Identifier (SID) uniquely identifies a principal; ACEs in the DACL grant/deny that SID specific rights. Well-known SIDs (e.g. S-1-5-18 = SYSTEM, S-1-5-32-544 = Administrators) recur in analysis. SIDs persist even after a user is renamed.",
      "vi": "Security Identifier (SID) định danh duy nhất một chủ thể; các ACE trong DACL cấp/từ chối quyền cụ thể cho SID đó. Các SID nổi tiếng (vd S-1-5-18 = SYSTEM, S-1-5-32-544 = Administrators) hay gặp khi phân tích. SID tồn tại kể cả sau khi người dùng đổi tên."
    }
  },

  {
    "app": "B",
    "sec": "b9",
    "secLabel": {
      "en": "B9 — File System Permissions",
      "vi": "B9 — Quyền hệ thống tệp"
    },
    "q": {
      "en": "When share permissions and NTFS permissions both apply to a network access, the effective permission is:",
      "vi": "Khi cả quyền share và quyền NTFS cùng áp dụng cho một truy cập mạng, quyền hiệu lực là:"
    },
    "opts": [
      {
        "en": "The MOST restrictive of the two",
        "vi": "Quyền HẠN CHẾ nhất trong hai"
      },
      {
        "en": "The least restrictive of the two",
        "vi": "Quyền ít hạn chế nhất trong hai"
      },
      {
        "en": "Always Full Control",
        "vi": "Luôn là Full Control"
      },
      {
        "en": "Always Read-only",
        "vi": "Luôn là chỉ-đọc"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "For access over the network, Windows applies both share and NTFS permissions and the effective result is the most restrictive combination. Locally (not via the share), only NTFS applies. Misunderstanding this leads to mis-assessing exposure of shared data.",
      "vi": "Với truy cập qua mạng, Windows áp dụng cả quyền share và NTFS, và kết quả hiệu lực là tổ hợp hạn chế nhất. Khi truy cập cục bộ (không qua share), chỉ NTFS áp dụng. Hiểu sai điều này dẫn tới đánh giá sai mức phơi nhiễm của dữ liệu chia sẻ."
    }
  },

  {
    "app": "B",
    "sec": "b9",
    "secLabel": {
      "en": "B9 — File System Permissions",
      "vi": "B9 — Quyền hệ thống tệp"
    },
    "q": {
      "en": "Weak ACLs on the registry key controlling a service's ImagePath are dangerous because an attacker could:",
      "vi": "ACL yếu trên khóa registry điều khiển ImagePath của một service nguy hiểm vì kẻ tấn công có thể:"
    },
    "opts": [
      {
        "en": "Point the service at a malicious binary run at its privilege",
        "vi": "Trỏ service tới một binary độc hại, chạy với đặc quyền của nó"
      },
      {
        "en": "Only read the service's current settings",
        "vi": "Chỉ đọc được thiết lập hiện tại của service"
      },
      {
        "en": "Merely restart the service on demand",
        "vi": "Chỉ khởi động lại service khi cần"
      },
      {
        "en": "Change only the service's display name",
        "vi": "Chỉ đổi tên hiển thị của service"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "If a low-privileged user can modify a service's ImagePath (or the service binary/folder), they can point it at their own executable, which then launches as SYSTEM at service start — a classic privilege-escalation path. Analysing registry ACLs uncovers such weaknesses.",
      "vi": "Nếu người dùng quyền thấp có thể sửa ImagePath của service (hoặc binary/thư mục của service), họ có thể trỏ nó tới file thực thi của mình, file này sẽ chạy dưới quyền SYSTEM khi service khởi động — con đường leo thang đặc quyền kinh điển. Phân tích ACL registry phơi bày các điểm yếu đó."
    }
  },

  {
    "app": "B",
    "sec": "b10",
    "secLabel": {
      "en": "B10 — Host Analysis Techniques",
      "vi": "B10 — Kỹ thuật phân tích host"
    },
    "q": {
      "en": "Which Windows tool enumerates the broadest range of auto-start (persistence) locations in one view?",
      "vi": "Công cụ Windows nào liệt kê dải vị trí tự khởi động (persistence) rộng nhất trong một góc nhìn?"
    },
    "opts": [
      {
        "en": "Sysinternals Autoruns",
        "vi": "Sysinternals Autoruns"
      },
      {
        "en": "Task Manager's Startup tab",
        "vi": "Tab Startup của Task Manager"
      },
      {
        "en": "The Services console (services.msc)",
        "vi": "Console Services (services.msc)"
      },
      {
        "en": "The msconfig startup utility",
        "vi": "Tiện ích startup msconfig"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Autoruns aggregates Run keys, services, scheduled tasks, drivers, Winlogon, browser helper objects and many more autostart entry points in one place, ideal for hunting persistence. netstat/tasklist help with live processes/ports; the others are unrelated.",
      "vi": "Autoruns gom các khóa Run, service, scheduled task, driver, Winlogon, browser helper object và nhiều điểm tự khởi động khác vào một chỗ, lý tưởng để săn persistence. netstat/tasklist hỗ trợ tiến trình/cổng đang chạy; các phương án còn lại không liên quan."
    }
  },

  {
    "app": "B",
    "sec": "b10",
    "secLabel": {
      "en": "B10 — Host Analysis Techniques",
      "vi": "B10 — Kỹ thuật phân tích host"
    },
    "q": {
      "en": "On a suspected-compromised web server, where would you FIRST look for evidence of attacker requests?",
      "vi": "Trên một web server nghi bị xâm nhập, bạn sẽ tìm bằng chứng request của kẻ tấn công ĐẦU TIÊN ở đâu?"
    },
    "opts": [
      {
        "en": "The web server access and error logs",
        "vi": "Log truy cập và log lỗi của web server"
      },
      {
        "en": "The local DNS resolver cache",
        "vi": "Cache resolver DNS cục bộ"
      },
      {
        "en": "The Windows prefetch folder",
        "vi": "Thư mục prefetch của Windows"
      },
      {
        "en": "The DHCP server lease database",
        "vi": "Cơ sở dữ liệu lease của máy chủ DHCP"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Web access/error logs record requested URLs, methods, status codes, user-agents and source IPs — revealing web shells, exploitation attempts and data access. Correlate with file timestamps (e.g. a new .aspx/.php) to find the planted shell.",
      "vi": "Log access/error của web ghi URL được yêu cầu, method, mã trạng thái, user-agent và IP nguồn — lộ web shell, nỗ lực khai thác và truy cập dữ liệu. Đối chiếu với mốc thời gian file (vd một .aspx/.php mới) để tìm web shell đã cài."
    }
  },

  {
    "app": "B",
    "sec": "b10",
    "secLabel": {
      "en": "B10 — Host Analysis Techniques",
      "vi": "B10 — Kỹ thuật phân tích host"
    },
    "q": {
      "en": "You want to list all scheduled tasks on a live Windows host from the command line. You would use:",
      "vi": "Bạn muốn liệt kê mọi scheduled task trên một host Windows live từ dòng lệnh. Bạn dùng:"
    },
    "opts": [
      {
        "en": "schtasks /query to list scheduled tasks",
        "vi": "schtasks /query để liệt kê scheduled task"
      },
      {
        "en": "tasklist /svc to list services",
        "vi": "tasklist /svc để liệt kê service"
      },
      {
        "en": "net start to list running services",
        "vi": "net start để liệt kê service đang chạy"
      },
      {
        "en": "sc query to list service states",
        "vi": "sc query để liệt kê trạng thái service"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "schtasks /query (or PowerShell Get-ScheduledTask) lists scheduled tasks, a common persistence mechanism. Reviewing task actions/triggers reveals attacker jobs. The other commands flush DNS, format a drive or reboot — none enumerate tasks.",
      "vi": "schtasks /query (hoặc PowerShell Get-ScheduledTask) liệt kê scheduled task, một cơ chế persistence phổ biến. Xem hành động/trigger của task lộ ra job của kẻ tấn công. Các lệnh khác xóa cache DNS, format ổ hoặc reboot — không cái nào liệt kê task."
    }
  },

  {
    "app": "B",
    "sec": "b11",
    "secLabel": {
      "en": "B11 — Common Data Formats",
      "vi": "B11 — Định dạng dữ liệu phổ biến"
    },
    "q": {
      "en": "An SPF record published in DNS is used to:",
      "vi": "Một bản ghi SPF công bố trong DNS được dùng để:"
    },
    "opts": [
      {
        "en": "List the mail servers authorised to send for a domain",
        "vi": "Liệt kê máy chủ mail được phép gửi cho một domain"
      },
      {
        "en": "Encrypt the body of outgoing messages",
        "vi": "Mã hóa nội dung thư đi"
      },
      {
        "en": "Store the user's mailbox password",
        "vi": "Lưu mật khẩu hộp thư người dùng"
      },
      {
        "en": "Compress large email attachments",
        "vi": "Nén file đính kèm email lớn"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "SPF (a TXT record) declares the IPs/servers permitted to send mail for the domain, helping receivers detect spoofing. DKIM adds a cryptographic signature; DMARC sets policy and alignment. Together they aid phishing/spoofing analysis — but only if correctly configured.",
      "vi": "SPF (một bản ghi TXT) khai báo các IP/máy chủ được phép gửi thư cho domain, giúp bên nhận phát hiện giả mạo. DKIM thêm chữ ký mật mã; DMARC đặt chính sách và alignment. Cùng nhau chúng hỗ trợ phân tích phishing/giả mạo — nhưng chỉ khi cấu hình đúng."
    }
  },

  {
    "app": "B",
    "sec": "b11",
    "secLabel": {
      "en": "B11 — Common Data Formats",
      "vi": "B11 — Định dạng dữ liệu phổ biến"
    },
    "q": {
      "en": "Email attachments are typically transmitted encoded as:",
      "vi": "File đính kèm email thường được truyền dưới dạng mã hóa:"
    },
    "opts": [
      {
        "en": "Base64 within MIME parts",
        "vi": "Base64 trong các phần MIME"
      },
      {
        "en": "Raw AES-encrypted ciphertext",
        "vi": "Ciphertext AES mã hóa thô"
      },
      {
        "en": "A DNS TXT resource record",
        "vi": "Một bản ghi tài nguyên DNS TXT"
      },
      {
        "en": "A single embedded PNG image",
        "vi": "Một ảnh PNG nhúng duy nhất"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "MIME encodes binary attachments as Base64 (text-safe) so they survive 7-bit mail transport; headers may show quoted-printable for text. Base64 is encoding, not encryption — analysts decode it to recover the original attachment for inspection.",
      "vi": "MIME mã hóa file đính kèm nhị phân thành Base64 (an toàn dạng text) để vượt qua truyền mail 7-bit; header có thể hiện quoted-printable cho văn bản. Base64 là encoding, không phải mã hóa — analyst giải mã để khôi phục file đính kèm gốc nhằm kiểm tra."
    }
  },

  {
    "app": "B",
    "sec": "b11",
    "secLabel": {
      "en": "B11 — Common Data Formats",
      "vi": "B11 — Định dạng dữ liệu phổ biến"
    },
    "q": {
      "en": "When validating a TLS certificate presented by a server, which check is MOST important for spotting an impostor?",
      "vi": "Khi kiểm tra một chứng chỉ TLS mà máy chủ trình ra, kiểm tra nào QUAN TRỌNG nhất để phát hiện kẻ giả mạo?"
    },
    "opts": [
      {
        "en": "It chains to a trusted CA, is in-date, and matches the hostname",
        "vi": "Nó dây chuyền tới CA tin cậy, còn hạn, và khớp hostname"
      },
      {
        "en": "It displays a green padlock in the browser",
        "vi": "Nó hiện ổ khóa xanh trên trình duyệt"
      },
      {
        "en": "It is larger than one kilobyte in size",
        "vi": "Nó lớn hơn một kilobyte"
      },
      {
        "en": "It was issued within the last few days",
        "vi": "Nó vừa được cấp trong vài ngày qua"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Trust requires a valid chain to a trusted root, current validity dates, and a subject/SAN matching the requested host (plus no revocation). Self-signed, expired, mismatched or untrusted-CA certs are red flags often seen with malware C2 and interception.",
      "vi": "Tin cậy đòi hỏi chuỗi hợp lệ tới một root tin cậy, ngày hiệu lực hiện hành, và subject/SAN khớp host được yêu cầu (cùng không bị thu hồi). Cert tự ký, hết hạn, không khớp hoặc từ CA không tin cậy là cờ đỏ thường gặp với C2 mã độc và chặn bắt."
    }
  },

  {
    "app": "B",
    "sec": "b11",
    "secLabel": {
      "en": "B11 — Common Data Formats",
      "vi": "B11 — Định dạng dữ liệu phổ biến"
    },
    "q": {
      "en": "You see \"%3Cscript%3E\" in a web server log. This is:",
      "vi": "Bạn thấy \"%3Cscript%3E\" trong log web server. Đây là:"
    },
    "opts": [
      {
        "en": "URL-encoded \"<script>\", likely an XSS probe",
        "vi": "Chuỗi \"<script>\" mã hóa URL, có thể là một thăm dò XSS"
      },
      {
        "en": "An encrypted application payload",
        "vi": "Một payload ứng dụng đã mã hóa"
      },
      {
        "en": "A valid fully-qualified hostname",
        "vi": "Một hostname đầy đủ hợp lệ"
      },
      {
        "en": "A hardware MAC address in the URL",
        "vi": "Một địa chỉ MAC phần cứng trong URL"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "%3C and %3E are URL-encoded < and >. Decoding reveals \"<script>\", a hallmark of cross-site scripting attempts. Recognising URL/percent-encoding (and Base64, hex, HTML entities) is essential to spot obfuscated attacks in logs.",
      "vi": "%3C và %3E là < và > được mã hóa URL. Giải mã cho ra \"<script>\", dấu hiệu của nỗ lực cross-site scripting. Nhận diện mã hóa URL/percent (cùng Base64, hex, HTML entity) là thiết yếu để phát hiện tấn công bị làm rối trong log."
    }
  },

  {
    "app": "B",
    "sec": "b1",
    "secLabel": {
      "en": "B1 — IP Protocols",
      "vi": "B1 — Giao thức IP"
    },
    "q": {
      "en": "During an SMTP transaction, which command specifies the envelope sender?",
      "vi": "Trong một giao dịch SMTP, lệnh nào chỉ định người gửi ở lớp envelope?"
    },
    "opts": [
      {
        "en": "MAIL FROM",
        "vi": "MAIL FROM"
      },
      {
        "en": "RCPT TO",
        "vi": "RCPT TO"
      },
      {
        "en": "DATA",
        "vi": "DATA"
      },
      {
        "en": "QUIT",
        "vi": "QUIT"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "SMTP uses HELO/EHLO, then MAIL FROM (envelope sender), RCPT TO (recipient), DATA (message including its own From: header), and QUIT. The envelope MAIL FROM can differ from the header From:, a discrepancy useful when investigating spoofed mail.",
      "vi": "SMTP dùng HELO/EHLO, rồi MAIL FROM (người gửi envelope), RCPT TO (người nhận), DATA (thông điệp gồm header From: riêng), và QUIT. MAIL FROM ở envelope có thể khác header From:, sự khác biệt này hữu ích khi điều tra thư giả mạo."
    }
  },

  {
    "app": "B",
    "sec": "b1",
    "secLabel": {
      "en": "B1 — IP Protocols",
      "vi": "B1 — Giao thức IP"
    },
    "q": {
      "en": "FTP in active mode is awkward through firewalls because:",
      "vi": "FTP ở chế độ active gây khó qua firewall vì:"
    },
    "opts": [
      {
        "en": "The server opens an inbound data connection back to the client",
        "vi": "Server mở một kết nối dữ liệu vào quay lại client"
      },
      {
        "en": "It encrypts the control channel with TLS by default",
        "vi": "Nó mã hóa kênh điều khiển bằng TLS theo mặc định"
      },
      {
        "en": "It runs entirely over ICMP rather than TCP",
        "vi": "Nó chạy hoàn toàn trên ICMP thay vì TCP"
      },
      {
        "en": "It needs no open ports on either endpoint",
        "vi": "Nó không cần cổng mở ở cả hai đầu"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Active FTP uses control on TCP/21 but the server initiates the data channel from TCP/20 back to the client — which client firewalls block. Passive mode has the client open both connections, easing NAT/firewall traversal. Understanding this helps interpret FTP traffic.",
      "vi": "FTP active dùng kênh điều khiển trên TCP/21 nhưng máy chủ khởi tạo kênh dữ liệu từ TCP/20 quay về client — điều mà firewall phía client chặn. Chế độ passive để client mở cả hai kết nối, dễ vượt NAT/firewall. Hiểu điều này giúp diễn giải lưu lượng FTP."
    }
  },

  {
    "app": "B",
    "sec": "b2",
    "secLabel": {
      "en": "B2 — Network Architectures",
      "vi": "B2 — Kiến trúc mạng"
    },
    "q": {
      "en": "Which statement about a Windows Active Directory domain is correct?",
      "vi": "Phát biểu nào về một domain Active Directory của Windows là đúng?"
    },
    "opts": [
      {
        "en": "Domain controllers authenticate users and enforce central policy",
        "vi": "Domain controller xác thực người dùng và áp chính sách tập trung"
      },
      {
        "en": "Each workstation acts as its own standalone authority",
        "vi": "Mỗi máy trạm là thẩm quyền riêng độc lập"
      },
      {
        "en": "It removes the need for DNS on the network",
        "vi": "Nó loại bỏ nhu cầu DNS trên mạng"
      },
      {
        "en": "It functions only over the public internet",
        "vi": "Nó chỉ hoạt động qua internet công cộng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "AD centralises identity and policy: domain controllers handle authentication (Kerberos/NTLM) and push Group Policy. AD relies heavily on DNS for service location. Compromising a DC (e.g. dumping NTDS.dit) can yield domain-wide credentials, making it a prime target.",
      "vi": "AD tập trung danh tính và chính sách: domain controller xử lý xác thực (Kerberos/NTLM) và đẩy Group Policy. AD phụ thuộc nhiều vào DNS để định vị dịch vụ. Xâm nhập một DC (vd dump NTDS.dit) có thể lấy credential toàn miền, khiến nó là mục tiêu hàng đầu."
    }
  },

  {
    "app": "B",
    "sec": "b5",
    "secLabel": {
      "en": "B5 — Application Fingerprinting",
      "vi": "B5 — Nhận dạng ứng dụng"
    },
    "q": {
      "en": "Identifying the exact software version of a service is valuable mainly because it:",
      "vi": "Xác định phiên bản phần mềm chính xác của một dịch vụ có giá trị chủ yếu vì nó:"
    },
    "opts": [
      {
        "en": "Lets you map it to known vulnerabilities",
        "vi": "Cho phép ánh xạ nó tới các lỗ hổng đã biết"
      },
      {
        "en": "It reveals the host's public IP address",
        "vi": "Nó tiết lộ IP công khai của host"
      },
      {
        "en": "It encrypts the connection to the service",
        "vi": "Nó mã hóa kết nối tới dịch vụ"
      },
      {
        "en": "It resets the service account password",
        "vi": "Nó đặt lại mật khẩu tài khoản dịch vụ"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Precise versioning enables CVE mapping — knowing a host runs a vulnerable build pinpoints likely exploitation routes (both for attackers and for analysts reconstructing how a breach occurred). Versions come from banners, headers, error pages and document metadata.",
      "vi": "Xác định phiên bản chính xác cho phép ánh xạ CVE — biết một host chạy bản dễ tổn thương giúp khoanh vùng đường khai thác khả dĩ (cho cả kẻ tấn công lẫn analyst dựng lại cách xảy ra xâm nhập). Phiên bản đến từ banner, header, trang lỗi và metadata tài liệu."
    }
  }

);
