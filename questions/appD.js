/* ===================================================================
   CPIA Question Bank  —  Appendix D : Network Intrusion Analysis
   77 question(s). To add: append more objects to push().
   Schema: app, sec (index.html anchor), secLabel{en,vi}, q{en,vi},
           opts[4]{en,vi}, correct (0-3), exp{en,vi}, note{en,vi}? (optional)
   =================================================================== */
(window.CPIA_BANK = window.CPIA_BANK || []).push(

  {
    "app": "D",
    "sec": "d1",
    "secLabel": {
      "en": "D1 — Network Traffic Capture",
      "vi": "D1 — Bắt lưu lượng mạng"
    },
    "q": {
      "en": "You need guaranteed, tamper-evident capture of all traffic on a critical link without dropping frames. The BEST option is:",
      "vi": "Bạn cần bắt toàn bộ lưu lượng trên một liên kết quan trọng, đảm bảo không mất frame và chống can thiệp. Lựa chọn TỐT NHẤT là:"
    },
    "opts": [
      {
        "en": "A SPAN/mirror port on the switch",
        "vi": "Cổng SPAN/mirror trên switch"
      },
      {
        "en": "A network TAP",
        "vi": "Một network TAP"
      },
      {
        "en": "Polling NetFlow every 5 minutes",
        "vi": "Polling NetFlow mỗi 5 phút"
      },
      {
        "en": "Running Wireshark on a random user PC",
        "vi": "Chạy Wireshark trên một PC người dùng bất kỳ"
      }
    ],
    "correct": 1,
    "exp": {
      "en": "A physical TAP copies traffic passively and does not drop frames under load, unlike SPAN ports which can oversubscribe and silently drop packets during congestion. NetFlow is summarised metadata, not full packets. TAPs are preferred where capture integrity must be assured.",
      "vi": "TAP vật lý sao chép lưu lượng thụ động và không mất frame khi tải cao, khác SPAN port có thể quá tải và âm thầm rớt gói khi nghẽn. NetFlow chỉ là metadata tóm tắt, không phải full packet. TAP được ưu tiên khi cần đảm bảo toàn vẹn bắt gói."
    },
    "note": {
      "en": "SPAN ports can silently drop packets under heavy load; TAPs do not.",
      "vi": "SPAN port có thể âm thầm rớt gói khi tải nặng; TAP thì không."
    }
  },

  {
    "app": "D",
    "sec": "d1",
    "secLabel": {
      "en": "D1 — Network Traffic Capture",
      "vi": "D1 — Bắt lưu lượng mạng"
    },
    "q": {
      "en": "When full packet capture storage is impractical for long-term monitoring, the BEST lightweight alternative for spotting beaconing/exfil patterns is:",
      "vi": "Khi lưu full packet capture là bất khả thi cho giám sát dài hạn, giải pháp nhẹ TỐT NHẤT để phát hiện beaconing/exfil là:"
    },
    "opts": [
      {
        "en": "NetFlow / flow records",
        "vi": "NetFlow / bản ghi flow"
      },
      {
        "en": "Storing every packet payload forever",
        "vi": "Lưu mọi payload gói mãi mãi"
      },
      {
        "en": "Disabling logging",
        "vi": "Tắt logging"
      },
      {
        "en": "Screenshotting dashboards",
        "vi": "Chụp màn hình dashboard"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "NetFlow records connection metadata (src/dst, ports, bytes, timing) cheaply, ideal for long-term statistical detection of beaconing and large outbound transfers, without the storage cost of full PCAP. You lose payload, but gain coverage.",
      "vi": "NetFlow ghi metadata kết nối (nguồn/đích, cổng, byte, thời điểm) chi phí thấp, lý tưởng để phát hiện thống kê dài hạn beaconing và truyền ra lớn, mà không tốn lưu trữ như full PCAP. Mất payload nhưng được độ phủ."
    }
  },

  {
    "app": "D",
    "sec": "d2",
    "secLabel": {
      "en": "D2 — Data Sources & Log Sources",
      "vi": "D2 — Nguồn dữ liệu & log"
    },
    "q": {
      "en": "A user reports a phishing click. Which log BEST confirms whether the resolved C2 domain was contacted, even if traffic was encrypted?",
      "vi": "Một người dùng báo đã click phishing. Log nào XÁC NHẬN tốt nhất việc domain C2 đã được liên hệ, kể cả khi lưu lượng đã mã hóa?"
    },
    "opts": [
      {
        "en": "Proxy/DNS logs",
        "vi": "Log proxy/DNS"
      },
      {
        "en": "Printer logs",
        "vi": "Log máy in"
      },
      {
        "en": "BIOS logs",
        "vi": "Log BIOS"
      },
      {
        "en": "Screensaver logs",
        "vi": "Log trình bảo vệ màn hình"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "DNS logs record the domain resolution and proxy logs record the HTTP(S) request metadata (host, URL, bytes) even when payload is TLS-encrypted. Correlating DNS + proxy + firewall logs is the standard way to confirm C2 contact.",
      "vi": "Log DNS ghi việc phân giải domain và log proxy ghi metadata yêu cầu HTTP(S) (host, URL, byte) kể cả khi payload mã hóa TLS. Đối chiếu DNS + proxy + firewall là cách chuẩn để xác nhận liên hệ C2."
    }
  },

  {
    "app": "D",
    "sec": "d5",
    "secLabel": {
      "en": "D5 — Beaconing",
      "vi": "D5 — Beaconing"
    },
    "q": {
      "en": "Which traffic pattern is the STRONGEST indicator of malware beaconing?",
      "vi": "Mẫu lưu lượng nào là dấu hiệu MẠNH NHẤT của beaconing mã độc?"
    },
    "opts": [
      {
        "en": "Small, regular, periodic connections to the same host",
        "vi": "Kết nối nhỏ, đều, định kỳ tới cùng một host"
      },
      {
        "en": "Large random bursts of traffic to many sites",
        "vi": "Các đợt lưu lượng lớn ngẫu nhiên tới nhiều site"
      },
      {
        "en": "A single one-off large file download",
        "vi": "Một lần tải file lớn duy nhất"
      },
      {
        "en": "A high volume of ordinary web browsing",
        "vi": "Lưu lượng duyệt web bình thường cao"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Beaconing is the regular check-in: small, periodic callbacks at consistent intervals (allowing for jitter) to the same C2 endpoint. Statistical analysis of inter-arrival times exposes it even over HTTPS. Human browsing is irregular and varied.",
      "vi": "Beaconing là việc \"điểm danh\" đều đặn: callback nhỏ, định kỳ ở khoảng cách nhất quán (có thể có jitter) tới cùng endpoint C2. Phân tích thống kê khoảng thời gian giữa các gói lộ ra nó kể cả qua HTTPS. Duyệt web của con người thì không đều và đa dạng."
    },
    "note": {
      "en": "Regularity + small payloads + same destination = beacon. Watch for jitter.",
      "vi": "Đều đặn + payload nhỏ + cùng đích = beacon. Chú ý jitter."
    }
  },

  {
    "app": "D",
    "sec": "d6",
    "secLabel": {
      "en": "D6 — Encryption (traffic)",
      "vi": "D6 — Mã hóa (lưu lượng)"
    },
    "q": {
      "en": "You find data XOR-encoded with a single repeating byte key. The correct characterisation is:",
      "vi": "Bạn thấy dữ liệu bị XOR với một khóa byte lặp đơn. Đặc điểm đúng là:"
    },
    "opts": [
      {
        "en": "Weak obfuscation, easily reversed (e.g. known-plaintext)",
        "vi": "Làm rối yếu, dễ đảo ngược (vd known-plaintext)"
      },
      {
        "en": "Strong, effectively unbreakable cryptography",
        "vi": "Mật mã mạnh, gần như không thể phá"
      },
      {
        "en": "A valid embedded digital signature",
        "vi": "Một chữ ký số nhúng hợp lệ"
      },
      {
        "en": "A form of lossless data compression",
        "vi": "Một dạng nén dữ liệu không mất mát"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Single-byte (or short repeating) XOR is obfuscation, not encryption. It is trivially recovered via brute force (256 keys), known-plaintext (e.g. MZ/PE headers), or frequency analysis. Malware uses XOR/ROL/codebooks to hide strings and payloads cheaply.",
      "vi": "XOR một byte (hoặc khóa lặp ngắn) là làm rối, không phải mã hóa. Dễ khôi phục bằng brute force (256 khóa), known-plaintext (vd header MZ/PE) hay phân tích tần suất. Mã độc dùng XOR/ROL/codebook để giấu chuỗi và payload với chi phí thấp."
    },
    "note": {
      "en": "XOR with a repeating key ≠ encryption. Try known-plaintext on PE headers.",
      "vi": "XOR với khóa lặp ≠ mã hóa. Thử known-plaintext trên header PE."
    }
  },

  {
    "app": "D",
    "sec": "d7",
    "secLabel": {
      "en": "D7 — Command and Control",
      "vi": "D7 — Điều khiển từ xa (C2)"
    },
    "q": {
      "en": "Which is a classic example of a COVERT C2 channel?",
      "vi": "Đâu là ví dụ kinh điển của kênh C2 NGẦM (covert)?"
    },
    "opts": [
      {
        "en": "Commands tunnelled inside DNS TXT queries / ICMP payloads",
        "vi": "Lệnh tunnel trong truy vấn DNS TXT / payload ICMP"
      },
      {
        "en": "Plain HTTP to a well-known web server",
        "vi": "HTTP thường tới một web server nổi tiếng"
      },
      {
        "en": "A scheduled Windows Update download",
        "vi": "Một bản tải Windows Update theo lịch"
      },
      {
        "en": "Routine NTP clock synchronisation",
        "vi": "Đồng bộ đồng hồ NTP định kỳ"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Covert channels hide C2 inside protocols normally allowed out, e.g. DNS tunnelling (TXT/NULL records) or ICMP echo payloads, blending with legitimate traffic. Detection relies on anomaly/statistical analysis (oversized DNS, abnormal ICMP) rather than port blocking.",
      "vi": "Kênh ngầm giấu C2 bên trong các giao thức thường được cho ra ngoài, vd DNS tunnelling (bản ghi TXT/NULL) hay payload ICMP echo, hòa lẫn với lưu lượng hợp lệ. Phát hiện dựa vào phân tích bất thường/thống kê (DNS quá lớn, ICMP bất thường) chứ không phải chặn cổng."
    }
  },

  {
    "app": "D",
    "sec": "d8",
    "secLabel": {
      "en": "D8 — Exfiltration of Data",
      "vi": "D8 — Trích xuất dữ liệu"
    },
    "q": {
      "en": "Which observation MOST strongly suggests data exfiltration rather than normal browsing?",
      "vi": "Quan sát nào gợi ý MẠNH NHẤT việc exfil dữ liệu hơn là duyệt web bình thường?"
    },
    "opts": [
      {
        "en": "A large sustained outbound transfer to an unfamiliar host",
        "vi": "Một truyền ra ngoài lớn, kéo dài tới host lạ"
      },
      {
        "en": "Many small inbound DNS query responses",
        "vi": "Nhiều phản hồi truy vấn DNS nhỏ đi vào"
      },
      {
        "en": "A single short TLS handshake exchange",
        "vi": "Một bắt tay TLS ngắn duy nhất"
      },
      {
        "en": "A routine ARP broadcast on the LAN",
        "vi": "Một ARP broadcast định kỳ trên LAN"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Normal clients download more than they upload. A large sustained outbound flow to an unusual destination (especially off-hours, to cloud storage or raw IPs) inverts that ratio and is a strong exfil indicator. Confirm with proxy/flow logs and DLP.",
      "vi": "Client bình thường tải xuống nhiều hơn tải lên. Một luồng đi ra lớn kéo dài tới đích bất thường (nhất là ngoài giờ, tới cloud storage hay IP thô) đảo ngược tỉ lệ đó và là dấu hiệu exfil mạnh. Xác nhận bằng log proxy/flow và DLP."
    },
    "note": {
      "en": "Watch the upload/download ratio and timing (off-hours bulk uploads).",
      "vi": "Theo dõi tỉ lệ tải lên/xuống và thời điểm (tải lên hàng loạt ngoài giờ)."
    }
  },

  {
    "app": "D",
    "sec": "d4",
    "secLabel": {
      "en": "D4 — Unusual Protocol Behaviour",
      "vi": "D4 — Hành vi giao thức bất thường"
    },
    "q": {
      "en": "You see binary, non-HTTP data flowing over TCP/80. This MOST likely indicates:",
      "vi": "Bạn thấy dữ liệu nhị phân, không phải HTTP, chạy trên TCP/80. Điều này KHẢ NĂNG cho thấy:"
    },
    "opts": [
      {
        "en": "A non-standard protocol abusing port 80 to bypass egress",
        "vi": "Giao thức không chuẩn lạm dụng cổng 80 để né egress"
      },
      {
        "en": "Perfectly normal web browsing traffic",
        "vi": "Lưu lượng duyệt web hoàn toàn bình thường"
      },
      {
        "en": "A routine DNS resolution query",
        "vi": "Một truy vấn phân giải DNS định kỳ"
      },
      {
        "en": "An ordinary NTP time synchronisation",
        "vi": "Một đồng bộ thời gian NTP thông thường"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Verify protocols by their actual behaviour, not the port number. Binary/non-HTTP data on 80/443 is a common evasion: malware uses allowed ports while running a custom or tunnelled protocol. Deep packet inspection / protocol analysis reveals the mismatch.",
      "vi": "Hãy xác minh giao thức theo hành vi thực, không theo số cổng. Dữ liệu nhị phân/không HTTP trên 80/443 là kiểu né phổ biến: mã độc dùng cổng được cho phép nhưng chạy giao thức tùy biến hoặc tunnel. DPI/phân tích giao thức lộ ra sự không khớp này."
    },
    "note": {
      "en": "Identify protocols by behaviour, not the port number.",
      "vi": "Nhận diện giao thức theo hành vi, không theo số cổng."
    }
  },

  {
    "app": "D",
    "sec": "d10",
    "secLabel": {
      "en": "D10 — Reconnaissance",
      "vi": "D10 — Trinh sát"
    },
    "q": {
      "en": "A single source IP sends SYNs to ports 1–1024 across many hosts in seconds. This is:",
      "vi": "Một IP nguồn gửi SYN tới cổng 1–1024 trên nhiều host trong vài giây. Đây là:"
    },
    "opts": [
      {
        "en": "A port/network scan (reconnaissance)",
        "vi": "Một lần quét cổng/mạng (trinh sát)"
      },
      {
        "en": "A routine overnight backup job",
        "vi": "Một tác vụ sao lưu ban đêm định kỳ"
      },
      {
        "en": "Ordinary DNS resolution traffic",
        "vi": "Lưu lượng phân giải DNS thông thường"
      },
      {
        "en": "A scheduled software update check",
        "vi": "Một lần kiểm tra cập nhật phần mềm theo lịch"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Many SYNs to sequential ports/hosts with few completed handshakes is classic horizontal/vertical port scanning. SYN (half-open) scans avoid completing the handshake to stay stealthy. This is early-stage reconnaissance.",
      "vi": "Nhiều SYN tới các cổng/host tuần tự với ít bắt tay hoàn tất là quét cổng ngang/dọc kinh điển. Quét SYN (nửa mở) tránh hoàn tất bắt tay để ẩn mình. Đây là trinh sát giai đoạn đầu."
    }
  },

  {
    "app": "D",
    "sec": "d13",
    "secLabel": {
      "en": "D13 — False Positive Acknowledgement",
      "vi": "D13 — Xác nhận false positive"
    },
    "q": {
      "en": "An IDS rule fires thousands of times a day, almost all benign. The BEST remediation is to:",
      "vi": "Một rule IDS kích hoạt hàng nghìn lần mỗi ngày, hầu hết lành tính. Cách khắc phục TỐT NHẤT là:"
    },
    "opts": [
      {
        "en": "Tune the signature to be more specific",
        "vi": "Tinh chỉnh signature cho cụ thể hơn"
      },
      {
        "en": "Delete all of the IDS rules at once",
        "vi": "Xóa hết rule IDS cùng lúc"
      },
      {
        "en": "Permanently ignore the IDS output",
        "vi": "Bỏ qua vĩnh viễn output của IDS"
      },
      {
        "en": "Block all traffic on the network",
        "vi": "Chặn toàn bộ lưu lượng trên mạng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "High false-positive rates come from over-broad signatures. The fix is tuning: tighten the pattern, add context (direction, ports), and whitelist known-good sources — reducing noise without going blind. Deleting or ignoring the IDS removes detection capability.",
      "vi": "Tỉ lệ false positive cao đến từ signature quá rộng. Cách sửa là tuning: siết chặt pattern, thêm bối cảnh (chiều, cổng) và whitelist nguồn known-good — giảm nhiễu mà không mất tầm nhìn. Xóa hay bỏ qua IDS sẽ mất khả năng phát hiện."
    },
    "note": {
      "en": "A true positive really happened; a false positive is benign misflagged. Tune, don't disable.",
      "vi": "True positive là đã thực sự xảy ra; false positive là lành tính bị gắn cờ nhầm. Hãy tinh chỉnh, đừng tắt."
    }
  },

  {
    "app": "D",
    "sec": "d12",
    "secLabel": {
      "en": "D12 — Web Based Attacks",
      "vi": "D12 — Tấn công qua web"
    },
    "q": {
      "en": "You find heavily obfuscated JavaScript using eval(unescape(...)) and long hex strings on a compromised page. The correct first step is to:",
      "vi": "Bạn thấy JavaScript bị làm rối nặng dùng eval(unescape(...)) và chuỗi hex dài trên một trang bị xâm nhập. Bước đầu đúng là:"
    },
    "opts": [
      {
        "en": "De-obfuscate safely in a sandbox to reveal the payload",
        "vi": "Giải rối an toàn trong sandbox để lộ payload"
      },
      {
        "en": "Run it in your own browser to see the result",
        "vi": "Chạy trong trình duyệt của bạn để xem kết quả"
      },
      {
        "en": "Delete the page and simply move on",
        "vi": "Xóa trang và bỏ qua"
      },
      {
        "en": "Assume it is harmless code minification",
        "vi": "Cho rằng đó chỉ là minify vô hại"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Never execute attacker JS live. Replace the final eval with a logging/print call (or use a JS sandbox/beautifier) so the decoded payload is revealed without running it — exposing redirects, exploit kit URLs, or drive-by download logic.",
      "vi": "Tuyệt đối không chạy JS của kẻ tấn công trực tiếp. Thay eval cuối bằng lệnh log/print (hoặc dùng sandbox/beautifier JS) để lộ payload đã giải mã mà không thực thi — phơi bày redirect, URL bộ khai thác hay logic drive-by download."
    }
  },

  {
    "app": "D",
    "sec": "d2",
    "secLabel": {
      "en": "D2 — Data Sources & Log Sources",
      "vi": "D2 — Nguồn dữ liệu & log"
    },
    "q": {
      "en": "The single most powerful technique when an incident spans many systems is:",
      "vi": "Kỹ thuật mạnh nhất khi một sự cố trải rộng nhiều hệ thống là:"
    },
    "opts": [
      {
        "en": "Correlating multiple log sources on a common timeline",
        "vi": "Đối chiếu nhiều nguồn log trên một timeline chung"
      },
      {
        "en": "Reading a single log source in isolation",
        "vi": "Đọc một nguồn log riêng lẻ"
      },
      {
        "en": "Deleting the older, bulky log files",
        "vi": "Xóa các file log cũ, cồng kềnh"
      },
      {
        "en": "Trusting only the firewall's logs",
        "vi": "Chỉ tin log của firewall"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Correlation across proxy, DNS, firewall, AV, Windows event and VPN logs — pivoting on shared timestamps, IPs, users or hostnames — reconstructs the full activity chain. No single source tells the whole story.",
      "vi": "Đối chiếu giữa log proxy, DNS, firewall, AV, Windows event và VPN — xoay quanh dấu thời gian, IP, user hay hostname chung — dựng lại toàn bộ chuỗi hoạt động. Không nguồn nào kể trọn câu chuyện."
    }
  },

  {
    "app": "D",
    "sec": "d3",
    "secLabel": {
      "en": "D3 — Network Configuration Security Issues",
      "vi": "D3 — Vấn đề bảo mật cấu hình mạng"
    },
    "q": {
      "en": "Internal hostnames and IPs leaking to the internet via DNS responses is an example of:",
      "vi": "Hostname và IP nội bộ rò ra internet qua phản hồi DNS là ví dụ của:"
    },
    "opts": [
      {
        "en": "DNS information leakage",
        "vi": "Rò rỉ thông tin DNS"
      },
      {
        "en": "Strong segmentation",
        "vi": "Phân đoạn mạng tốt"
      },
      {
        "en": "Proper hardening",
        "vi": "Gia cố đúng cách"
      },
      {
        "en": "Encryption",
        "vi": "Mã hóa"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Exposing internal naming/addressing (split-horizon misconfig, verbose responses, zone transfers) hands attackers reconnaissance. Internal DNS views should not be reachable or resolvable externally.",
      "vi": "Lộ tên/địa chỉ nội bộ (cấu hình split-horizon sai, phản hồi quá chi tiết, zone transfer) trao cho kẻ tấn công thông tin trinh sát. View DNS nội bộ không nên truy cập hay phân giải được từ bên ngoài."
    }
  },

  {
    "app": "D",
    "sec": "d9",
    "secLabel": {
      "en": "D9 — Incoming Attacks",
      "vi": "D9 — Tấn công đến"
    },
    "q": {
      "en": "In web server logs, repeated requests like /index.php?id=1' OR '1'='1 indicate:",
      "vi": "Trong log web server, các request lặp như /index.php?id=1' OR '1'='1 cho biết:"
    },
    "opts": [
      {
        "en": "An SQL injection attempt",
        "vi": "Một nỗ lực SQL injection"
      },
      {
        "en": "Perfectly normal web browsing",
        "vi": "Duyệt web hoàn toàn bình thường"
      },
      {
        "en": "An ordinary DNS lookup query",
        "vi": "Một truy vấn DNS thông thường"
      },
      {
        "en": "A routine database backup",
        "vi": "Một bản sao lưu cơ sở dữ liệu định kỳ"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "SQL meta-characters and tautologies (' OR 1=1, UNION SELECT, --) in parameters are classic SQL injection probes. Look for follow-up success (different response sizes/status, data returned) to judge whether the attack landed.",
      "vi": "Các ký tự đặc biệt SQL và mệnh đề luôn đúng (' OR 1=1, UNION SELECT, --) trong tham số là dấu hiệu thăm dò SQL injection kinh điển. Tìm dấu hiệu thành công tiếp theo (kích thước/mã trạng thái phản hồi khác, dữ liệu trả về) để đánh giá tấn công có thành công không."
    }
  },

  {
    "app": "D",
    "sec": "d11",
    "secLabel": {
      "en": "D11 — Internal Spread & Privilege Escalation",
      "vi": "D11 — Lan truyền nội bộ & leo thang đặc quyền"
    },
    "q": {
      "en": "A burst of SMB (445) connections from one workstation to many others, with admin logons, suggests:",
      "vi": "Một loạt kết nối SMB (445) từ một máy trạm tới nhiều máy khác, kèm đăng nhập admin, gợi ý:"
    },
    "opts": [
      {
        "en": "Lateral movement across the network",
        "vi": "Di chuyển ngang trong mạng"
      },
      {
        "en": "A routine network printer test",
        "vi": "Một lần thử máy in mạng định kỳ"
      },
      {
        "en": "Ordinary internal email traffic",
        "vi": "Lưu lượng email nội bộ thông thường"
      },
      {
        "en": "A scheduled antivirus scan",
        "vi": "Một lần quét antivirus theo lịch"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "One host suddenly authenticating to many peers over SMB/admin shares (often with tools like PsExec/WMI) is a hallmark of lateral movement after credential theft. Correlate with Windows logon events (type 3, 4624/4672) to confirm.",
      "vi": "Một host bỗng xác thực tới nhiều máy khác qua SMB/admin share (thường bằng PsExec/WMI) là dấu hiệu lateral movement sau khi trộm thông tin đăng nhập. Đối chiếu với sự kiện đăng nhập Windows (loại 3, 4624/4672) để xác nhận."
    },
    "note": {
      "en": "Map SMB spread to logon events 4624/4672 to confirm credential abuse.",
      "vi": "Ánh xạ lan truyền SMB với sự kiện đăng nhập 4624/4672 để xác nhận lạm dụng credential."
    }
  },

  {
    "app": "D",
    "sec": "d5",
    "secLabel": {
      "en": "D5 — Beaconing",
      "vi": "D5 — Beaconing"
    },
    "q": {
      "en": "Why do attackers add \"jitter\" to beacon intervals?",
      "vi": "Tại sao kẻ tấn công thêm \"jitter\" vào khoảng beacon?"
    },
    "opts": [
      {
        "en": "To randomise timing and evade fixed-interval detection",
        "vi": "Để ngẫu nhiên hóa thời điểm và né phát hiện khoảng cố định"
      },
      {
        "en": "To make the callback traffic faster",
        "vi": "Để lưu lượng callback nhanh hơn"
      },
      {
        "en": "To encrypt the beacon's payload",
        "vi": "Để mã hóa payload của beacon"
      },
      {
        "en": "To increase the available bandwidth",
        "vi": "Để tăng băng thông sẵn có"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Jitter randomises the callback interval (e.g. ±30%) so it no longer looks like a clockwork heartbeat, defeating naive periodicity detection. Robust detection accounts for jitter using statistical clustering of inter-arrival times.",
      "vi": "Jitter ngẫu nhiên hóa khoảng callback (vd ±30%) để không còn giống nhịp đều như đồng hồ, né phát hiện chu kỳ ngây thơ. Phát hiện tốt phải tính đến jitter bằng phân cụm thống kê khoảng thời gian giữa các gói."
    }
  },

  {
    "app": "D",
    "sec": "d8",
    "secLabel": {
      "en": "D8 — Exfiltration of Data",
      "vi": "D8 — Trích xuất dữ liệu"
    },
    "q": {
      "en": "Slowly leaking data hidden inside many DNS queries (e.g. base32-encoded subdomains) is called:",
      "vi": "Rò rỉ dữ liệu chậm rãi giấu trong nhiều truy vấn DNS (vd subdomain mã hóa base32) được gọi là:"
    },
    "opts": [
      {
        "en": "DNS tunnelling / exfiltration",
        "vi": "DNS tunnelling / exfil"
      },
      {
        "en": "Ordinary DNS response caching",
        "vi": "Cache phản hồi DNS thông thường"
      },
      {
        "en": "A standard DNS zone transfer",
        "vi": "Một zone transfer DNS chuẩn"
      },
      {
        "en": "DNS-based load balancing",
        "vi": "Cân bằng tải dựa trên DNS"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "DNS exfiltration encodes stolen data into query labels sent to an attacker-controlled authoritative server. Indicators: abnormally long/random subdomains, high query volume to one domain, and TXT/NULL responses. It abuses DNS being almost always allowed outbound.",
      "vi": "DNS exfil mã hóa dữ liệu trộm vào nhãn truy vấn gửi tới server authoritative do kẻ tấn công kiểm soát. Dấu hiệu: subdomain dài/ngẫu nhiên bất thường, lượng truy vấn cao tới một domain, và phản hồi TXT/NULL. Nó lạm dụng việc DNS gần như luôn được cho ra ngoài."
    }
  },

  {
    "app": "D",
    "sec": "d13",
    "secLabel": {
      "en": "D13 — False Positive Acknowledgement",
      "vi": "D13 — Xác nhận false positive"
    },
    "q": {
      "en": "An IDS alerts on the string \"powershell -enc\". Before escalating, you should FIRST:",
      "vi": "Một IDS cảnh báo chuỗi \"powershell -enc\". Trước khi báo động, đầu tiên bạn nên:"
    },
    "opts": [
      {
        "en": "Decode the Base64 command and judge it by context",
        "vi": "Giải mã lệnh Base64 và xét theo bối cảnh"
      },
      {
        "en": "Immediately wipe the affected host",
        "vi": "Xóa sạch ngay host bị ảnh hưởng"
      },
      {
        "en": "Disable the noisy detection rule",
        "vi": "Tắt rule phát hiện gây nhiễu"
      },
      {
        "en": "Ignore the alert and move on",
        "vi": "Bỏ qua cảnh báo và làm tiếp"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "-enc means a Base64-encoded PowerShell command. Encoded PowerShell is common in both legitimate automation and attacks, so decode it and judge by context before deciding true vs false positive. Acting before triage causes either misses or needless disruption.",
      "vi": "-enc nghĩa là lệnh PowerShell mã hóa Base64. PowerShell mã hóa phổ biến cả trong tự động hóa hợp lệ lẫn tấn công, nên hãy giải mã và xét bối cảnh trước khi quyết định true hay false positive. Hành động trước khi phân loại sẽ gây bỏ sót hoặc gián đoạn vô ích."
    }
  },

  {
    "app": "D",
    "sec": "d10",
    "secLabel": {
      "en": "D10 — Reconnaissance",
      "vi": "D10 — Trinh sát"
    },
    "q": {
      "en": "Which is an example of INTERNAL reconnaissance after a foothold is gained?",
      "vi": "Đâu là ví dụ của trinh sát NỘI BỘ sau khi đã có chỗ đứng?"
    },
    "opts": [
      {
        "en": "Enumerating AD users/shares and pinging internal subnets",
        "vi": "Liệt kê user/share AD và ping các subnet nội bộ"
      },
      {
        "en": "A WHOIS lookup from the public internet",
        "vi": "Một tra WHOIS từ internet công cộng"
      },
      {
        "en": "Reading the company's public job postings",
        "vi": "Đọc tin tuyển dụng công khai của công ty"
      },
      {
        "en": "Browsing the company's public website",
        "vi": "Duyệt website công khai của công ty"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Internal recon happens post-compromise: enumerating Active Directory (BloodHound, net commands), scanning internal ranges and finding shares to plan lateral movement. WHOIS and public sites are external (pre-compromise) recon.",
      "vi": "Trinh sát nội bộ xảy ra sau khi xâm nhập: liệt kê Active Directory (BloodHound, lệnh net), quét dải nội bộ và tìm share để lập kế hoạch lateral movement. WHOIS và site công khai là trinh sát bên ngoài (trước xâm nhập)."
    }
  },

  {
    "app": "D",
    "sec": "d1",
    "secLabel": {
      "en": "D1 — Network Traffic Capture",
      "vi": "D1 — Bắt lưu lượng mạng"
    },
    "q": {
      "en": "When estimating capture storage for full PCAP during scoping, the key driver is:",
      "vi": "Khi ước tính dung lượng lưu full PCAP lúc scoping, yếu tố chính là:"
    },
    "opts": [
      {
        "en": "Link throughput × capture duration × a retention factor",
        "vi": "Thông lượng × thời gian bắt × hệ số lưu giữ"
      },
      {
        "en": "The number of analysts on the team",
        "vi": "Số lượng analyst trong đội"
      },
      {
        "en": "The colour of the network cables",
        "vi": "Màu của dây cáp mạng"
      },
      {
        "en": "The physical size of the office",
        "vi": "Diện tích vật lý của văn phòng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Storage ≈ average bits/sec × seconds of retention. A busy 1 Gbps link can generate terabytes per day, so you must right-size capture (full vs filtered vs NetFlow) and storage to avoid overwhelming the capture device and disks.",
      "vi": "Dung lượng ≈ bit/giây trung bình × số giây lưu giữ. Một liên kết 1 Gbps bận có thể sinh hàng terabyte mỗi ngày, nên phải định cỡ đúng (full vs lọc vs NetFlow) và lưu trữ để tránh quá tải thiết bị bắt và đĩa."
    }
  },

  {
    "app": "D",
    "sec": "d7",
    "secLabel": {
      "en": "D7 — Command and Control",
      "vi": "D7 — Điều khiển từ xa (C2)"
    },
    "q": {
      "en": "A host makes regular HTTPS POSTs to a newly-registered domain with a self-signed cert and a rare JA3 hash. This is MOST consistent with:",
      "vi": "Một host POST HTTPS đều đặn tới một domain mới đăng ký, cert tự ký và JA3 hash hiếm. Điều này khớp NHẤT với:"
    },
    "opts": [
      {
        "en": "A C2 channel (e.g. a malware framework beacon)",
        "vi": "Một kênh C2 (vd beacon của framework mã độc)"
      },
      {
        "en": "A routine Windows Update check-in",
        "vi": "Một lần điểm danh Windows Update định kỳ"
      },
      {
        "en": "Traffic to a content delivery network",
        "vi": "Lưu lượng tới một content delivery network"
      },
      {
        "en": "An ordinary NTP time server",
        "vi": "Một máy chủ thời gian NTP thông thường"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Newly-registered domain + self-signed cert + anomalous TLS fingerprint (JA3) + regular POSTs strongly fits framework C2 (Cobalt Strike-style). Channel/TLS fingerprinting and domain age are powerful detection signals even without decrypting traffic.",
      "vi": "Domain mới đăng ký + cert tự ký + dấu vân tay TLS bất thường (JA3) + POST đều đặn rất khớp với C2 của framework (kiểu Cobalt Strike). Fingerprint kênh/TLS và tuổi domain là tín hiệu phát hiện mạnh kể cả khi không giải mã lưu lượng."
    }
  },

  {
    "app": "D",
    "sec": "d4",
    "secLabel": {
      "en": "D4 — Unusual Protocol Behaviour",
      "vi": "D4 — Hành vi giao thức bất thường"
    },
    "q": {
      "en": "DNS responses that are abnormally large or use TXT records to carry binary data suggest:",
      "vi": "Phản hồi DNS lớn bất thường hoặc dùng bản ghi TXT để mang dữ liệu nhị phân gợi ý:"
    },
    "opts": [
      {
        "en": "Possible DNS tunnelling / covert channel",
        "vi": "Có thể là DNS tunnelling / kênh ngầm"
      },
      {
        "en": "Perfectly normal web browsing",
        "vi": "Duyệt web hoàn toàn bình thường"
      },
      {
        "en": "A successful security patch",
        "vi": "Một bản vá bảo mật thành công"
      },
      {
        "en": "Faster-than-usual DNS resolution",
        "vi": "Phân giải DNS nhanh hơn thường lệ"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Legitimate DNS is small and uses standard record types. Oversized responses, heavy TXT/NULL usage, long encoded labels and high query volume to one zone are hallmarks of tunnelling/exfiltration over DNS. Detection relies on statistical/volume anomalies, not the port.",
      "vi": "DNS hợp lệ nhỏ và dùng loại bản ghi chuẩn. Phản hồi quá lớn, dùng nhiều TXT/NULL, nhãn mã hóa dài và lượng truy vấn cao tới một zone là dấu hiệu tunnelling/exfil qua DNS. Phát hiện dựa vào bất thường thống kê/lưu lượng, không phải cổng."
    }
  },

  {
    "app": "D",
    "sec": "d6",
    "secLabel": {
      "en": "D6 — Encryption (traffic)",
      "vi": "D6 — Mã hóa (lưu lượng)"
    },
    "q": {
      "en": "Without decrypting TLS, which analysis can still help characterise a suspicious encrypted flow?",
      "vi": "Không cần giải mã TLS, phân tích nào vẫn giúp đặc trưng hóa một luồng mã hóa đáng ngờ?"
    },
    "opts": [
      {
        "en": "Channel fingerprinting and flow analysis",
        "vi": "Fingerprint kênh và phân tích flow"
      },
      {
        "en": "Reading the plaintext of the payload",
        "vi": "Đọc plaintext của payload"
      },
      {
        "en": "Guessing the AES encryption key",
        "vi": "Đoán khóa mã hóa AES"
      },
      {
        "en": "Nothing useful can be done at all",
        "vi": "Không thể làm gì hữu ích"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Even encrypted, metadata is revealing: packet sizes/timing, upload/download ratio, TLS handshake fingerprints (JA3/JA3S), SNI, certificate details and destination reputation. These distinguish beacons/C2/exfil from normal traffic without breaking the crypto.",
      "vi": "Dù đã mã hóa, metadata vẫn nói nhiều: kích thước/thời điểm gói, tỉ lệ tải lên/xuống, dấu vân tay bắt tay TLS (JA3/JA3S), SNI, chi tiết chứng chỉ và danh tiếng đích. Những thứ này phân biệt beacon/C2/exfil với lưu lượng bình thường mà không cần phá mã hóa."
    }
  },

  {
    "app": "D",
    "sec": "d2",
    "secLabel": {
      "en": "D2 — Data Sources & Log Sources",
      "vi": "D2 — Nguồn dữ liệu & log"
    },
    "q": {
      "en": "O365 Unified Audit Logs are MOST useful for investigating:",
      "vi": "O365 Unified Audit Log hữu ích NHẤT khi điều tra:"
    },
    "opts": [
      {
        "en": "Cloud mailbox access, sign-ins, sharing and admin actions",
        "vi": "Truy cập hộp thư đám mây, đăng nhập, chia sẻ, thao tác admin"
      },
      {
        "en": "The server's BIOS firmware version",
        "vi": "Phiên bản firmware BIOS của server"
      },
      {
        "en": "The building's network cable wiring",
        "vi": "Đi dây cáp mạng của tòa nhà"
      },
      {
        "en": "The server's GPU temperature",
        "vi": "Nhiệt độ GPU của server"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "The Unified Audit Log captures sign-ins, mailbox operations, file sharing, rule creation and admin changes across M365 — central to investigating business email compromise, suspicious OAuth grants and data access in cloud environments.",
      "vi": "Unified Audit Log ghi đăng nhập, thao tác hộp thư, chia sẻ file, tạo rule và thay đổi admin trên M365 — trọng tâm khi điều tra business email compromise, cấp quyền OAuth đáng ngờ và truy cập dữ liệu trong môi trường đám mây."
    }
  },

  {
    "app": "D",
    "sec": "d12",
    "secLabel": {
      "en": "D12 — Web Based Attacks",
      "vi": "D12 — Tấn công qua web"
    },
    "q": {
      "en": "An iframe injected into many pages pointing to an external exploit kit is an example of:",
      "vi": "Một iframe được chèn vào nhiều trang trỏ tới một bộ khai thác bên ngoài là ví dụ của:"
    },
    "opts": [
      {
        "en": "A malicious redirect serving a drive-by exploit",
        "vi": "Một redirect độc hại phục vụ khai thác drive-by"
      },
      {
        "en": "Perfectly normal CSS page styling",
        "vi": "Định kiểu CSS hoàn toàn bình thường"
      },
      {
        "en": "An ordinary search-engine result",
        "vi": "Một kết quả công cụ tìm kiếm thông thường"
      },
      {
        "en": "A standard DNS resource record",
        "vi": "Một bản ghi tài nguyên DNS chuẩn"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Hidden/0-size iframes silently load attacker content (exploit kit landing pages) to launch drive-by downloads against visitors of a compromised site. Spotting injected iframes, obfuscated script tags and unexpected external references is core web-attack analysis.",
      "vi": "iframe ẩn/kích thước 0 âm thầm nạp nội dung của kẻ tấn công (trang đích bộ khai thác) để khởi động drive-by download nhắm vào người truy cập một site bị xâm nhập. Phát hiện iframe chèn, thẻ script làm rối và tham chiếu ngoài bất ngờ là cốt lõi phân tích tấn công web."
    }
  },

  {
    "app": "D",
    "sec": "d3",
    "secLabel": {
      "en": "D3 — Network Configuration Security Issues",
      "vi": "D3 — Vấn đề bảo mật cấu hình mạng"
    },
    "q": {
      "en": "Outbound traffic on a non-standard high port that successfully leaves the network despite a \"default deny\" egress policy indicates:",
      "vi": "Lưu lượng đi ra trên một cổng cao không chuẩn mà vẫn thoát ra mạng dù chính sách egress \"default deny\" cho thấy:"
    },
    "opts": [
      {
        "en": "A firewall/egress rule gap or deliberate rule bypass",
        "vi": "Một lỗ hổng rule firewall/egress hoặc cố ý lách rule"
      },
      {
        "en": "A sign of perfect network security",
        "vi": "Một dấu hiệu bảo mật mạng hoàn hảo"
      },
      {
        "en": "An ordinary DNS cache hit",
        "vi": "Một lần trúng cache DNS thông thường"
      },
      {
        "en": "Normal NTP synchronisation traffic",
        "vi": "Lưu lượng đồng bộ NTP bình thường"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Under default-deny egress, anything leaving on an unexpected port means a misconfigured/overly broad rule or an intentional bypass (e.g. tunnelling through an allowed proxy/port). Detecting traffic that should have been blocked is a key network-config finding.",
      "vi": "Với egress default-deny, bất cứ thứ gì thoát ra trên cổng bất ngờ nghĩa là rule cấu hình sai/quá rộng hoặc cố ý lách (vd tunnel qua proxy/cổng được phép). Phát hiện lưu lượng đáng lẽ bị chặn là một phát hiện cấu hình mạng quan trọng."
    }
  },

  {
    "app": "D",
    "sec": "d1",
    "secLabel": {
      "en": "D1 — Network Traffic Capture",
      "vi": "D1 — Bắt lưu lượng mạng"
    },
    "q": {
      "en": "To capture all frames on a segment (not just those addressed to your NIC), the interface must be in:",
      "vi": "Để bắt mọi frame trên một đoạn mạng (không chỉ frame gửi tới NIC của bạn), giao diện phải ở chế độ:"
    },
    "opts": [
      {
        "en": "Promiscuous (or monitor) mode",
        "vi": "Chế độ promiscuous (hoặc monitor)"
      },
      {
        "en": "Half-duplex link negotiation mode",
        "vi": "Chế độ đàm phán liên kết half-duplex"
      },
      {
        "en": "Windows recovery boot mode",
        "vi": "Chế độ boot recovery của Windows"
      },
      {
        "en": "Windows safe-boot mode",
        "vi": "Chế độ safe-boot của Windows"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Promiscuous mode makes the NIC pass all observed frames to the OS, not just unicast to its own MAC — essential for sniffing. On Wi-Fi the equivalent is monitor mode. Without it, a capture on a switch only sees broadcast/own traffic.",
      "vi": "Promiscuous mode khiến NIC chuyển mọi frame quan sát được lên OS, không chỉ unicast tới MAC của nó — thiết yếu để sniff. Trên Wi-Fi tương đương là monitor mode. Không có nó, bắt gói trên switch chỉ thấy broadcast/lưu lượng của chính mình."
    }
  },

  {
    "app": "D",
    "sec": "d1",
    "secLabel": {
      "en": "D1 — Network Traffic Capture",
      "vi": "D1 — Bắt lưu lượng mạng"
    },
    "q": {
      "en": "A BPF capture filter like \"tcp port 443\" is applied:",
      "vi": "Một bộ lọc bắt gói BPF như \"tcp port 443\" được áp dụng:"
    },
    "opts": [
      {
        "en": "At capture time, before packets are saved",
        "vi": "Lúc bắt gói, trước khi gói được lưu"
      },
      {
        "en": "Only after the capture has finished",
        "vi": "Chỉ sau khi bắt gói xong"
      },
      {
        "en": "By the destination server itself",
        "vi": "Bởi chính máy chủ đích"
      },
      {
        "en": "By the upstream DNS resolver",
        "vi": "Bởi resolver DNS thượng nguồn"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "BPF/capture filters drop unwanted packets before storage, reducing volume and loss on busy links — but you permanently lose what you filter out. Display filters (in Wireshark) instead hide packets after capture without deleting them.",
      "vi": "Bộ lọc BPF/capture loại gói không cần trước khi lưu, giảm dung lượng và mất gói trên liên kết bận — nhưng bạn mất vĩnh viễn phần đã lọc. Bộ lọc hiển thị (trong Wireshark) chỉ ẩn gói sau khi bắt mà không xóa."
    },
    "note": {
      "en": "Capture filter = discards before save; display filter = hides after.",
      "vi": "Capture filter = loại trước khi lưu; display filter = ẩn sau khi bắt."
    }
  },

  {
    "app": "D",
    "sec": "d1",
    "secLabel": {
      "en": "D1 — Network Traffic Capture",
      "vi": "D1 — Bắt lưu lượng mạng"
    },
    "q": {
      "en": "Where is the BEST place to deploy a capture device to see all traffic entering and leaving an organisation?",
      "vi": "Đâu là nơi TỐT NHẤT để đặt thiết bị bắt gói nhằm thấy toàn bộ lưu lượng vào/ra một tổ chức?"
    },
    "opts": [
      {
        "en": "At the network perimeter/internet egress choke point",
        "vi": "Tại điểm thắt cổ chai biên/egress ra internet"
      },
      {
        "en": "On a random user's personal laptop",
        "vi": "Trên laptop cá nhân của một người dùng bất kỳ"
      },
      {
        "en": "On the office network printer",
        "vi": "Trên máy in mạng văn phòng"
      },
      {
        "en": "On an isolated test-lab VLAN",
        "vi": "Trên một VLAN thử nghiệm cách ly"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A choke point (perimeter/egress) sees north-south traffic in and out, ideal for spotting C2 and exfiltration. Internal sensors add east-west visibility. Placement should match the questions you need to answer and the link capacity.",
      "vi": "Điểm thắt cổ chai (biên/egress) thấy lưu lượng bắc-nam vào/ra, lý tưởng để phát hiện C2 và exfil. Cảm biến nội bộ bổ sung tầm nhìn đông-tây. Vị trí đặt phải khớp với câu hỏi cần trả lời và dung lượng liên kết."
    }
  },

  {
    "app": "D",
    "sec": "d1",
    "secLabel": {
      "en": "D1 — Network Traffic Capture",
      "vi": "D1 — Bắt lưu lượng mạng"
    },
    "q": {
      "en": "To later prove a captured PCAP has not been altered, you should:",
      "vi": "Để sau này chứng minh một PCAP đã bắt không bị thay đổi, bạn nên:"
    },
    "opts": [
      {
        "en": "Hash the file at acquisition and store the hash securely",
        "vi": "Băm file lúc thu thập và lưu hash an toàn"
      },
      {
        "en": "Compress the file to save space",
        "vi": "Nén file để tiết kiệm dung lượng"
      },
      {
        "en": "Rename the file with today's date",
        "vi": "Đổi tên file kèm ngày hôm nay"
      },
      {
        "en": "Open it repeatedly in Wireshark",
        "vi": "Mở nó nhiều lần trong Wireshark"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A cryptographic hash recorded at capture lets you later verify integrity (re-hash and compare). This supports evidential weight for network data, mirroring disk-image integrity practice. Renaming/compressing does not prove integrity.",
      "vi": "Một hash mật mã ghi lúc bắt cho phép xác minh toàn vẹn sau này (băm lại và so sánh). Điều này hỗ trợ giá trị bằng chứng cho dữ liệu mạng, tương tự thực hành toàn vẹn image đĩa. Đổi tên/nén không chứng minh toàn vẹn."
    }
  },

  {
    "app": "D",
    "sec": "d2",
    "secLabel": {
      "en": "D2 — Data Sources & Log Sources",
      "vi": "D2 — Nguồn dữ liệu & log"
    },
    "q": {
      "en": "Windows Security event ID 4688 records:",
      "vi": "Sự kiện bảo mật Windows ID 4688 ghi lại:"
    },
    "opts": [
      {
        "en": "A new process being created (with command line if audited)",
        "vi": "Một tiến trình mới được tạo (kèm dòng lệnh nếu audit)"
      },
      {
        "en": "An interactive user logon to the host",
        "vi": "Một đăng nhập tương tác vào host"
      },
      {
        "en": "A security audit log being cleared",
        "vi": "Một lần xóa nhật ký audit bảo mật"
      },
      {
        "en": "A new Windows service install",
        "vi": "Một lần cài service Windows mới"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "4688 logs process creation; with command-line auditing on, it captures the full command line — invaluable for spotting malicious LOLBins/scripts. 4624 is logon, 1102 is log cleared, 7045 is service install. Knowing key IDs speeds host-side correlation.",
      "vi": "4688 ghi việc tạo tiến trình; khi bật audit dòng lệnh, nó bắt cả dòng lệnh đầy đủ — vô giá để phát hiện LOLBins/script độc hại. 4624 là đăng nhập, 1102 là xóa log, 7045 là cài service. Biết các ID quan trọng giúp đối chiếu phía host nhanh hơn."
    },
    "note": {
      "en": "4688=process, 4624=logon, 4672=admin rights, 1102=log cleared, 7045=service.",
      "vi": "4688=tiến trình, 4624=đăng nhập, 4672=quyền admin, 1102=xóa log, 7045=service."
    }
  },

  {
    "app": "D",
    "sec": "d2",
    "secLabel": {
      "en": "D2 — Data Sources & Log Sources",
      "vi": "D2 — Nguồn dữ liệu & log"
    },
    "q": {
      "en": "Sysmon adds value over default Windows logging mainly by recording:",
      "vi": "Sysmon bổ sung giá trị so với logging Windows mặc định chủ yếu nhờ ghi lại:"
    },
    "opts": [
      {
        "en": "Rich process, network and file telemetry",
        "vi": "Telemetry phong phú về tiến trình, mạng, file"
      },
      {
        "en": "The desktop wallpaper image",
        "vi": "Ảnh hình nền desktop"
      },
      {
        "en": "The system's BIOS settings",
        "vi": "Cài đặt BIOS của hệ thống"
      },
      {
        "en": "The monitor's brightness level",
        "vi": "Mức độ sáng của màn hình"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Sysmon (event IDs 1 process, 3 network, 11 file create, 22 DNS, etc.) provides detailed, hash-tagged endpoint telemetry far beyond defaults, greatly aiding detection and correlation. It must be deployed beforehand — a Preparation activity.",
      "vi": "Sysmon (event ID 1 tiến trình, 3 mạng, 11 tạo file, 22 DNS, v.v.) cung cấp telemetry endpoint chi tiết, gắn hash, vượt xa mặc định, hỗ trợ rất lớn cho phát hiện và đối chiếu. Phải triển khai trước — một hoạt động Preparation."
    }
  },

  {
    "app": "D",
    "sec": "d2",
    "secLabel": {
      "en": "D2 — Data Sources & Log Sources",
      "vi": "D2 — Nguồn dữ liệu & log"
    },
    "q": {
      "en": "To resolve a public IP in firewall logs back to the specific internal workstation behind NAT, you correlate with:",
      "vi": "Để truy một IP công khai trong log firewall về đúng máy trạm nội bộ sau NAT, bạn đối chiếu với:"
    },
    "opts": [
      {
        "en": "NAT/translation logs plus DHCP lease logs",
        "vi": "Log NAT/translation cùng log lease DHCP"
      },
      {
        "en": "The network printer's job queue",
        "vi": "Hàng đợi tác vụ của máy in mạng"
      },
      {
        "en": "The screensaver activity log",
        "vi": "Log hoạt động screensaver"
      },
      {
        "en": "The machine's BIOS event log",
        "vi": "Log sự kiện BIOS của máy"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "NAT hides many hosts behind one public IP, so you need the firewall's translation table/logs to map the public IP:port back to an internal IP at that time, then DHCP logs to tie that internal IP to a MAC/host. Time alignment is critical.",
      "vi": "NAT giấu nhiều host sau một IP công khai, nên bạn cần bảng/translation log của firewall để ánh xạ IP:port công khai về một IP nội bộ tại thời điểm đó, rồi log DHCP để gắn IP nội bộ với MAC/host. Khớp thời gian là then chốt."
    }
  },

  {
    "app": "D",
    "sec": "d2",
    "secLabel": {
      "en": "D2 — Data Sources & Log Sources",
      "vi": "D2 — Nguồn dữ liệu & log"
    },
    "q": {
      "en": "Which log is BEST for confirming exactly which URLs (paths) a user visited over HTTPS?",
      "vi": "Log nào TỐT NHẤT để xác nhận chính xác những URL (đường dẫn) một người dùng đã truy cập qua HTTPS?"
    },
    "opts": [
      {
        "en": "Proxy logs (they can log the full URL)",
        "vi": "Log proxy (có thể ghi cả URL đầy đủ)"
      },
      {
        "en": "DHCP address-lease logs",
        "vi": "Log cấp địa chỉ DHCP"
      },
      {
        "en": "BIOS firmware event logs",
        "vi": "Log sự kiện firmware BIOS"
      },
      {
        "en": "Network printer spool logs",
        "vi": "Log spool của máy in mạng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A forward proxy logs requested hosts and, if it intercepts TLS, full URLs and bytes — the richest source for browsing detail. Without interception you still get the CONNECT host/SNI. DNS shows domains but not paths; firewall shows IPs/ports only.",
      "vi": "Một forward proxy ghi host được yêu cầu và, nếu nó chặn TLS, cả URL đầy đủ và byte — nguồn chi tiết duyệt web phong phú nhất. Không chặn thì vẫn có host/SNI của CONNECT. DNS cho thấy domain nhưng không có đường dẫn; firewall chỉ cho IP/cổng."
    }
  },

  {
    "app": "D",
    "sec": "d2",
    "secLabel": {
      "en": "D2 — Data Sources & Log Sources",
      "vi": "D2 — Nguồn dữ liệu & log"
    },
    "q": {
      "en": "The single biggest advantage of centralising logs in a SIEM is that it:",
      "vi": "Lợi thế lớn nhất của việc tập trung log vào một SIEM là nó:"
    },
    "opts": [
      {
        "en": "Enables cross-source correlation of logs",
        "vi": "Cho phép đối chiếu chéo nhiều nguồn log"
      },
      {
        "en": "Makes the raw logs unreadable",
        "vi": "Làm log thô không đọc được"
      },
      {
        "en": "Deletes old evidence much faster",
        "vi": "Xóa bằng chứng cũ nhanh hơn nhiều"
      },
      {
        "en": "Encrypts the whole network",
        "vi": "Mã hóa toàn bộ mạng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Centralised logging lets you correlate events across hosts/devices on one timeline and preserves copies off the endpoint, so an attacker who clears local logs may not erase the forwarded copies. Coverage and time-sync remain prerequisites.",
      "vi": "Logging tập trung cho phép đối chiếu sự kiện giữa nhiều host/thiết bị trên một timeline và giữ bản sao ngoài endpoint, nên kẻ tấn công xóa log cục bộ có thể không xóa được bản đã chuyển. Độ phủ và đồng bộ thời gian vẫn là điều kiện tiên quyết."
    }
  },

  {
    "app": "D",
    "sec": "d2",
    "secLabel": {
      "en": "D2 — Data Sources & Log Sources",
      "vi": "D2 — Nguồn dữ liệu & log"
    },
    "q": {
      "en": "A VPN concentrator log is MOST useful for establishing:",
      "vi": "Log của VPN concentrator hữu ích NHẤT để xác lập:"
    },
    "opts": [
      {
        "en": "Which account connected remotely, from which IP, and when",
        "vi": "Tài khoản nào kết nối từ xa, từ IP nào, khi nào"
      },
      {
        "en": "The CPU temperature of the server",
        "vi": "Nhiệt độ CPU của server"
      },
      {
        "en": "The colour scheme of the dashboard",
        "vi": "Bảng phối màu của dashboard"
      },
      {
        "en": "The network printer's toner level",
        "vi": "Mức mực của máy in mạng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "VPN logs tie a remote session to an account, source IP, assigned internal IP and timestamps — central to investigating remote-access abuse (e.g. stolen credentials or impossible-travel logins). Correlate with subsequent internal activity.",
      "vi": "Log VPN gắn một phiên từ xa với tài khoản, IP nguồn, IP nội bộ được cấp và mốc thời gian — trọng tâm khi điều tra lạm dụng truy cập từ xa (vd credential bị trộm hay đăng nhập \"di chuyển bất khả thi\"). Đối chiếu với hoạt động nội bộ tiếp theo."
    }
  },

  {
    "app": "D",
    "sec": "d3",
    "secLabel": {
      "en": "D3 — Network Configuration Security Issues",
      "vi": "D3 — Vấn đề bảo mật cấu hình mạng"
    },
    "q": {
      "en": "A mail server that relays messages from any sender to any recipient is an:",
      "vi": "Một máy chủ mail chuyển tiếp thư từ bất kỳ người gửi tới bất kỳ người nhận là một:"
    },
    "opts": [
      {
        "en": "An open relay — abusable for spam and spoofing",
        "vi": "Một open relay — có thể lạm dụng để spam và giả mạo"
      },
      {
        "en": "A properly secured mail server",
        "vi": "Một máy chủ mail được bảo mật đúng"
      },
      {
        "en": "A standard recursive DNS resolver",
        "vi": "Một resolver DNS đệ quy chuẩn"
      },
      {
        "en": "A forward web proxy server",
        "vi": "Một forward web proxy"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "An open relay accepts and forwards mail for unauthorised third parties, letting attackers send spam/phishing that appears to come from the organisation. It is a classic misconfiguration finding; servers should relay only for authenticated/authorised users.",
      "vi": "Open relay nhận và chuyển tiếp thư cho bên thứ ba không được phép, để kẻ tấn công gửi spam/phishing trông như đến từ tổ chức. Đây là một phát hiện cấu hình sai kinh điển; máy chủ chỉ nên relay cho người dùng đã xác thực/được phép."
    }
  },

  {
    "app": "D",
    "sec": "d3",
    "secLabel": {
      "en": "D3 — Network Configuration Security Issues",
      "vi": "D3 — Vấn đề bảo mật cấu hình mạng"
    },
    "q": {
      "en": "A split-tunnel VPN can weaken monitoring because:",
      "vi": "Một VPN split-tunnel có thể làm yếu giám sát vì:"
    },
    "opts": [
      {
        "en": "Some traffic bypasses corporate inspection",
        "vi": "Một phần lưu lượng lách kiểm tra doanh nghiệp"
      },
      {
        "en": "It encrypts nothing at all",
        "vi": "Nó không mã hóa gì cả"
      },
      {
        "en": "It blocks all internet access",
        "vi": "Nó chặn mọi truy cập internet"
      },
      {
        "en": "It disables the network adapter",
        "vi": "Nó vô hiệu hóa card mạng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "With split tunnelling, only corporate-bound traffic goes through the VPN; direct internet traffic (potentially including C2) skips central inspection and logging. Full-tunnel forces all traffic through the monitored path. This is a key config consideration.",
      "vi": "Với split tunnel, chỉ lưu lượng tới mạng doanh nghiệp đi qua VPN; lưu lượng internet trực tiếp (có thể gồm cả C2) bỏ qua kiểm tra và ghi log tập trung. Full-tunnel buộc mọi lưu lượng qua đường được giám sát. Đây là một cân nhắc cấu hình quan trọng."
    }
  },

  {
    "app": "D",
    "sec": "d3",
    "secLabel": {
      "en": "D3 — Network Configuration Security Issues",
      "vi": "D3 — Vấn đề bảo mật cấu hình mạng"
    },
    "q": {
      "en": "Discovering RDP (3389) or SMB (445) directly reachable from the internet is concerning because:",
      "vi": "Phát hiện RDP (3389) hoặc SMB (445) truy cập được trực tiếp từ internet đáng lo vì:"
    },
    "opts": [
      {
        "en": "They are prime brute-force/exploit targets",
        "vi": "Chúng là mục tiêu brute-force/khai thác hàng đầu"
      },
      {
        "en": "They noticeably speed up the network",
        "vi": "Chúng làm mạng nhanh hơn rõ rệt"
      },
      {
        "en": "They are encrypted by default and safe",
        "vi": "Chúng mã hóa mặc định và an toàn"
      },
      {
        "en": "They are required for DNS to function",
        "vi": "Chúng cần thiết để DNS hoạt động"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Internet-facing RDP/SMB are repeatedly exploited (e.g. credential brute force, EternalBlue/SMB and RDP CVEs) and are common initial-access vectors. They should sit behind VPN/MFA. Spotting such exposure is a high-value config finding.",
      "vi": "RDP/SMB hướng internet liên tục bị khai thác (vd brute force credential, EternalBlue/SMB và các CVE RDP) và là vector truy cập ban đầu phổ biến. Chúng nên nằm sau VPN/MFA. Phát hiện phơi nhiễm kiểu này là một phát hiện cấu hình giá trị cao."
    }
  },

  {
    "app": "D",
    "sec": "d3",
    "secLabel": {
      "en": "D3 — Network Configuration Security Issues",
      "vi": "D3 — Vấn đề bảo mật cấu hình mạng"
    },
    "q": {
      "en": "Traffic taking an unexpected route out of the network (e.g. via a workstation acting as a router) MOST likely indicates:",
      "vi": "Lưu lượng đi ra mạng theo một đường bất ngờ (vd qua một máy trạm đóng vai router) KHẢ NĂNG cho biết:"
    },
    "opts": [
      {
        "en": "A possible attacker pivot or routing error",
        "vi": "Một pivot của kẻ tấn công hoặc lỗi định tuyến"
      },
      {
        "en": "Perfectly normal DNS caching",
        "vi": "Cache DNS hoàn toàn bình thường"
      },
      {
        "en": "A successfully completed backup",
        "vi": "Một bản sao lưu hoàn tất thành công"
      },
      {
        "en": "An ordinary screensaver timeout",
        "vi": "Một lần hết giờ screensaver thông thường"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Hosts forwarding traffic they shouldn't can be attacker pivots (using a compromised host to bridge segments) or simple misconfiguration. Either way, unexpected routes/IP-forwarding on endpoints warrant investigation as they can bypass controls.",
      "vi": "Các host chuyển tiếp lưu lượng không đáng có thể là pivot của kẻ tấn công (dùng một host bị xâm nhập để bắc cầu các đoạn mạng) hoặc chỉ là cấu hình sai. Dù sao, đường đi bất ngờ/IP-forwarding trên endpoint cần được điều tra vì có thể lách kiểm soát."
    }
  },

  {
    "app": "D",
    "sec": "d4",
    "secLabel": {
      "en": "D4 — Unusual Protocol Behaviour",
      "vi": "D4 — Hành vi giao thức bất thường"
    },
    "q": {
      "en": "A TLS-looking session on TCP/8443 that never completes a proper handshake but carries steady encrypted data suggests:",
      "vi": "Một phiên trông giống TLS trên TCP/8443 không hề hoàn tất bắt tay đúng cách nhưng vẫn mang dữ liệu mã hóa đều đặn gợi ý:"
    },
    "opts": [
      {
        "en": "A custom/tunnelled protocol masquerading as TLS",
        "vi": "Một giao thức tùy biến/tunnel giả dạng TLS"
      },
      {
        "en": "A routine certificate renewal",
        "vi": "Một lần gia hạn chứng chỉ định kỳ"
      },
      {
        "en": "An ordinary DNS lookup query",
        "vi": "Một truy vấn DNS thông thường"
      },
      {
        "en": "A standard ARP request packet",
        "vi": "Một gói ARP request chuẩn"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Verifying protocols by behaviour, not port, exposes impostors: traffic that lacks a valid TLS handshake (ClientHello/ServerHello/cert) but mimics it is often a custom or tunnelled C2 protocol abusing an allowed port. Deep inspection reveals the deviation.",
      "vi": "Xác minh giao thức theo hành vi, không theo cổng, phơi bày kẻ giả mạo: lưu lượng thiếu bắt tay TLS hợp lệ (ClientHello/ServerHello/cert) nhưng bắt chước nó thường là giao thức C2 tùy biến hoặc tunnel lạm dụng một cổng được phép. Kiểm tra sâu lộ ra sự sai lệch."
    }
  },

  {
    "app": "D",
    "sec": "d4",
    "secLabel": {
      "en": "D4 — Unusual Protocol Behaviour",
      "vi": "D4 — Hành vi giao thức bất thường"
    },
    "q": {
      "en": "Identifying that \"HTTP\" traffic is really a tunnelled protocol is BEST done by:",
      "vi": "Để xác định rằng lưu lượng \"HTTP\" thực ra là một giao thức tunnel, cách TỐT NHẤT là:"
    },
    "opts": [
      {
        "en": "Inspecting the actual payload/protocol, not trusting the port",
        "vi": "Kiểm tra payload/giao thức thực, không tin cổng"
      },
      {
        "en": "Checking only the destination port number",
        "vi": "Chỉ kiểm tra số cổng đích"
      },
      {
        "en": "Reading the transferred file name",
        "vi": "Đọc tên file được truyền"
      },
      {
        "en": "Simply counting the packets sent",
        "vi": "Chỉ đếm số gói đã gửi"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Port numbers are conventions, not guarantees. Protocol analysers can detect when bytes on port 80 do not follow HTTP grammar (no valid request line/headers), unmasking tunnelling. This \"verify regardless of port\" principle is central to D4.",
      "vi": "Số cổng là quy ước, không phải đảm bảo. Trình phân tích giao thức có thể phát hiện khi byte trên cổng 80 không tuân theo cú pháp HTTP (không có request line/header hợp lệ), vạch trần tunnelling. Nguyên tắc \"xác minh bất kể cổng\" này là cốt lõi của D4."
    }
  },

  {
    "app": "D",
    "sec": "d4",
    "secLabel": {
      "en": "D4 — Unusual Protocol Behaviour",
      "vi": "D4 — Hành vi giao thức bất thường"
    },
    "q": {
      "en": "Repeated, malformed/illegal DNS packets crafted to a resolver may be an attempt at:",
      "vi": "Các gói DNS dị dạng/bất hợp lệ lặp lại chế tạo gửi tới một resolver có thể là nỗ lực:"
    },
    "opts": [
      {
        "en": "Exploitation such as cache poisoning",
        "vi": "Khai thác như cache poisoning"
      },
      {
        "en": "Perfectly normal web browsing",
        "vi": "Duyệt web hoàn toàn bình thường"
      },
      {
        "en": "A routine network printer job",
        "vi": "Một tác vụ in mạng định kỳ"
      },
      {
        "en": "Routine NTP synchronisation",
        "vi": "Đồng bộ NTP định kỳ"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Illegal protocol usage — malformed fields, unexpected flags, oversized records — can target parser bugs (DoS/RCE) or attempt cache poisoning. Detecting protocol abuse independent of port and flagging malformed structures is part of unusual-behaviour analysis.",
      "vi": "Sử dụng giao thức bất hợp lệ — trường dị dạng, cờ bất thường, bản ghi quá lớn — có thể nhắm lỗi parser (DoS/RCE) hoặc thử cache poisoning. Phát hiện lạm dụng giao thức bất kể cổng và gắn cờ cấu trúc dị dạng là một phần của phân tích hành vi bất thường."
    }
  },

  {
    "app": "D",
    "sec": "d4",
    "secLabel": {
      "en": "D4 — Unusual Protocol Behaviour",
      "vi": "D4 — Hành vi giao thức bất thường"
    },
    "q": {
      "en": "ICMP echo requests carrying large, high-entropy payloads at a steady rate suggest:",
      "vi": "Các ICMP echo request mang payload lớn, entropy cao ở tốc độ đều gợi ý:"
    },
    "opts": [
      {
        "en": "ICMP tunnelling (covert channel / exfiltration)",
        "vi": "ICMP tunnelling (kênh ngầm / exfil)"
      },
      {
        "en": "Normal ping connectivity diagnostics",
        "vi": "Chẩn đoán kết nối bằng ping bình thường"
      },
      {
        "en": "A standard DNS zone transfer",
        "vi": "Một zone transfer DNS chuẩn"
      },
      {
        "en": "An ordinary TCP handshake",
        "vi": "Một bắt tay TCP thông thường"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Standard ping payloads are small and predictable. Large, random ICMP payloads sent regularly indicate data smuggled inside ICMP (a covert channel), since ICMP is often allowed out. Inspect payload size/entropy, not just the ICMP type.",
      "vi": "Payload ping chuẩn nhỏ và dễ đoán. Payload ICMP lớn, ngẫu nhiên gửi đều cho thấy dữ liệu được tuồn trong ICMP (kênh ngầm), vì ICMP thường được cho ra ngoài. Hãy soi kích thước/entropy payload, không chỉ loại ICMP."
    }
  },

  {
    "app": "D",
    "sec": "d5",
    "secLabel": {
      "en": "D5 — Beaconing",
      "vi": "D5 — Beaconing"
    },
    "q": {
      "en": "Which statistical feature is MOST useful for detecting jittered beacons?",
      "vi": "Đặc trưng thống kê nào hữu ích NHẤT để phát hiện beacon có jitter?"
    },
    "opts": [
      {
        "en": "Clustering of inter-arrival times despite the randomisation",
        "vi": "Phân cụm thời gian giữa các gói dù đã ngẫu nhiên hóa"
      },
      {
        "en": "The exact same byte count in every packet",
        "vi": "Số byte giống hệt nhau ở mỗi gói"
      },
      {
        "en": "The destination always being a CDN",
        "vi": "Đích luôn là một CDN"
      },
      {
        "en": "The source port always being 80",
        "vi": "Cổng nguồn luôn là 80"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Even with jitter, callbacks cluster around a mean interval, so analysing the distribution of inter-arrival times (and connection regularity to one destination) reveals beaconing that simple fixed-interval rules miss. Payload size alone is weaker.",
      "vi": "Dù có jitter, các callback vẫn phân cụm quanh một khoảng trung bình, nên phân tích phân bố thời gian giữa các gói (và độ đều của kết nối tới một đích) lộ ra beaconing mà rule khoảng cố định đơn giản bỏ sót. Chỉ kích thước payload thì yếu hơn."
    }
  },

  {
    "app": "D",
    "sec": "d5",
    "secLabel": {
      "en": "D5 — Beaconing",
      "vi": "D5 — Beaconing"
    },
    "q": {
      "en": "A long-lived, low-volume connection to a single rare external IP, persisting for days, is BEST characterised as:",
      "vi": "Một kết nối tồn tại lâu, lưu lượng thấp tới một IP ngoài hiếm gặp, kéo dài nhiều ngày, được đặc trưng đúng nhất là:"
    },
    "opts": [
      {
        "en": "A potential persistent C2 / beaconing channel",
        "vi": "Một kênh C2/beaconing bền bỉ tiềm năng"
      },
      {
        "en": "Almost certainly benign traffic",
        "vi": "Gần như chắc chắn là lưu lượng lành tính"
      },
      {
        "en": "A routine DNS root-server query",
        "vi": "Một truy vấn DNS root-server định kỳ"
      },
      {
        "en": "A network broadcast storm",
        "vi": "Một bão broadcast trên mạng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Persistent low-and-slow traffic to an uncommon destination is a classic C2 signature (keeping a foothold alive while staying under volume thresholds). It is a lead to investigate (reputation, JA3, timing), not a verdict by itself.",
      "vi": "Lưu lượng \"low-and-slow\" bền bỉ tới một đích hiếm gặp là dấu hiệu C2 kinh điển (giữ chỗ đứng còn sống trong khi nằm dưới ngưỡng lưu lượng). Đây là manh mối để điều tra (danh tiếng, JA3, thời điểm), chưa phải kết luận."
    }
  },

  {
    "app": "D",
    "sec": "d5",
    "secLabel": {
      "en": "D5 — Beaconing",
      "vi": "D5 — Beaconing"
    },
    "q": {
      "en": "A workstation contacting an external host exactly every 60 seconds with tiny requests is MOST suspicious because:",
      "vi": "Một máy trạm liên hệ một host ngoài đúng mỗi 60 giây với request rất nhỏ ĐÁNG NGỜ nhất vì:"
    },
    "opts": [
      {
        "en": "Such machine-like regularity is unlike human activity",
        "vi": "Sự đều đặn như máy móc đó không giống hoạt động người"
      },
      {
        "en": "60 seconds is a reserved C2 interval",
        "vi": "60 giây là một khoảng C2 dành riêng"
      },
      {
        "en": "It consumes far too much bandwidth",
        "vi": "Nó tiêu thụ quá nhiều băng thông"
      },
      {
        "en": "It always indicates ransomware",
        "vi": "Nó luôn cho thấy ransomware"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Precise periodicity is the hallmark of automated check-ins; humans browse irregularly. Note legitimate software (updaters, telemetry) also beacons, so confirm the destination's reputation and the process responsible before concluding it is malicious.",
      "vi": "Tính chu kỳ chính xác là dấu hiệu của \"điểm danh\" tự động; con người duyệt web không đều. Lưu ý phần mềm hợp lệ (updater, telemetry) cũng beacon, nên xác nhận danh tiếng đích và tiến trình chịu trách nhiệm trước khi kết luận là độc hại."
    }
  },

  {
    "app": "D",
    "sec": "d6",
    "secLabel": {
      "en": "D6 — Encryption (traffic)",
      "vi": "D6 — Mã hóa (lưu lượng)"
    },
    "q": {
      "en": "Why can high entropy alone NOT distinguish encryption from compression in a traffic flow?",
      "vi": "Vì sao chỉ entropy cao KHÔNG thể phân biệt mã hóa với nén trong một luồng lưu lượng?"
    },
    "opts": [
      {
        "en": "Both compressed and encrypted data have near-maximal entropy",
        "vi": "Cả dữ liệu nén lẫn mã hóa đều có entropy gần cực đại"
      },
      {
        "en": "Compression always produces low entropy",
        "vi": "Nén luôn tạo entropy thấp"
      },
      {
        "en": "Encryption always produces low entropy",
        "vi": "Mã hóa luôn tạo entropy thấp"
      },
      {
        "en": "Entropy simply cannot be measured",
        "vi": "Entropy đơn giản là không thể đo"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Good compression and good encryption both produce high-entropy, random-looking bytes, so entropy cannot separate them. Use structural cues instead: file/format magic, headers, handshake presence, and statistical/timing patterns of the flow.",
      "vi": "Nén tốt và mã hóa tốt đều tạo byte entropy cao, trông ngẫu nhiên, nên entropy không tách được chúng. Hãy dùng manh mối cấu trúc: magic của file/định dạng, header, sự hiện diện của handshake, và mẫu thống kê/thời điểm của luồng."
    }
  },

  {
    "app": "D",
    "sec": "d6",
    "secLabel": {
      "en": "D6 — Encryption (traffic)",
      "vi": "D6 — Mã hóa (lưu lượng)"
    },
    "q": {
      "en": "Malware \"encrypts\" strings by rotating each byte left by 3 bits (ROL 3). This is BEST described as:",
      "vi": "Mã độc \"mã hóa\" chuỗi bằng cách xoay trái mỗi byte 3 bit (ROL 3). Mô tả ĐÚNG nhất là:"
    },
    "opts": [
      {
        "en": "Weak obfuscation, trivially reversible (ROR 3)",
        "vi": "Làm rối yếu, đảo ngược dễ dàng (ROR 3)"
      },
      {
        "en": "Strong, modern AES encryption",
        "vi": "Mã hóa AES mạnh, hiện đại"
      },
      {
        "en": "A secure cryptographic hash",
        "vi": "Một hàm băm mật mã an toàn"
      },
      {
        "en": "A form of lossless compression",
        "vi": "Một dạng nén không mất mát"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Bit-rotation (ROL/ROR), XOR and codebooks are reversible obfuscation, not cryptography — you simply apply the inverse (here ROR 3). Malware uses these cheap tricks to hide strings/config from casual analysis and naive signatures.",
      "vi": "Xoay bit (ROL/ROR), XOR và codebook là làm rối có thể đảo ngược, không phải mật mã — chỉ cần áp phép nghịch (ở đây là ROR 3). Mã độc dùng các mẹo rẻ này để giấu chuỗi/cấu hình khỏi phân tích sơ sài và signature ngây thơ."
    }
  },

  {
    "app": "D",
    "sec": "d6",
    "secLabel": {
      "en": "D6 — Encryption (traffic)",
      "vi": "D6 — Mã hóa (lưu lượng)"
    },
    "q": {
      "en": "Channel/TLS fingerprinting (e.g. JA3) identifies a client by:",
      "vi": "Fingerprint kênh/TLS (vd JA3) nhận diện một client bằng:"
    },
    "opts": [
      {
        "en": "How it negotiates TLS (the ClientHello)",
        "vi": "Cách nó đàm phán TLS (ClientHello)"
      },
      {
        "en": "The plaintext password it transmits",
        "vi": "Mật khẩu plaintext nó truyền"
      },
      {
        "en": "Its hardware MAC address",
        "vi": "Địa chỉ MAC phần cứng của nó"
      },
      {
        "en": "The file it downloads next",
        "vi": "File nó tải về tiếp theo"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "JA3 hashes the ClientHello's negotiated parameters, producing a fingerprint of the TLS client implementation. Malware using a non-browser TLS stack often yields a rare JA3, flagging it even though the payload is encrypted. JA3S fingerprints the server side.",
      "vi": "JA3 băm các tham số đàm phán trong ClientHello, tạo dấu vân tay của triển khai client TLS. Mã độc dùng stack TLS không phải trình duyệt thường cho JA3 hiếm, gắn cờ nó dù payload đã mã hóa. JA3S fingerprint phía máy chủ."
    }
  },

  {
    "app": "D",
    "sec": "d7",
    "secLabel": {
      "en": "D7 — Command and Control",
      "vi": "D7 — Điều khiển từ xa (C2)"
    },
    "q": {
      "en": "\"Domain fronting\" hides C2 by:",
      "vi": "\"Domain fronting\" giấu C2 bằng cách:"
    },
    "opts": [
      {
        "en": "A trusted domain in the SNI; Host header to C2",
        "vi": "Một domain tin cậy trong SNI; host header trỏ C2"
      },
      {
        "en": "Encrypting the host's local disk",
        "vi": "Mã hóa đĩa cục bộ của host"
      },
      {
        "en": "Disabling DNS resolution entirely",
        "vi": "Tắt hoàn toàn phân giải DNS"
      },
      {
        "en": "Sending all data over ICMP echo",
        "vi": "Gửi mọi dữ liệu qua ICMP echo"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Domain fronting abuses shared CDN infrastructure: the visible SNI/cert is a trusted domain, but the encrypted HTTP Host header routes to the attacker's backend on the same CDN — making C2 look like traffic to a reputable site. Many CDNs have since restricted it.",
      "vi": "Domain fronting lạm dụng hạ tầng CDN dùng chung: SNI/cert nhìn thấy là một domain tin cậy, nhưng host header HTTP đã mã hóa định tuyến tới backend của kẻ tấn công trên cùng CDN — khiến C2 trông như lưu lượng tới một site uy tín. Nhiều CDN nay đã hạn chế nó."
    }
  },

  {
    "app": "D",
    "sec": "d7",
    "secLabel": {
      "en": "D7 — Command and Control",
      "vi": "D7 — Điều khiển từ xa (C2)"
    },
    "q": {
      "en": "Malware using a legitimate service (e.g. a paste site, Telegram, or cloud API) for C2 is challenging because:",
      "vi": "Mã độc dùng một dịch vụ hợp lệ (vd trang paste, Telegram, hay API đám mây) cho C2 gây khó vì:"
    },
    "opts": [
      {
        "en": "It blends with normally-allowed sites",
        "vi": "Nó hòa lẫn với các site thường được phép"
      },
      {
        "en": "It cannot be encrypted at all",
        "vi": "Nó không thể mã hóa"
      },
      {
        "en": "It always uses TCP port 6667",
        "vi": "Nó luôn dùng cổng TCP 6667"
      },
      {
        "en": "It silently disables all logging",
        "vi": "Nó âm thầm tắt mọi logging"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Using trusted third-party services (living off trusted sites) means destination-reputation and domain blocklists fail, since the endpoint is genuinely reputable. Detection shifts to behavioural anomalies, API usage patterns and endpoint telemetry rather than simple IP/domain blocking.",
      "vi": "Dùng dịch vụ bên thứ ba tin cậy (living off trusted sites) khiến danh tiếng đích và blocklist domain thất bại, vì endpoint thực sự uy tín. Phát hiện chuyển sang bất thường hành vi, mẫu dùng API và telemetry endpoint thay vì chặn IP/domain đơn giản."
    }
  },

  {
    "app": "D",
    "sec": "d7",
    "secLabel": {
      "en": "D7 — Command and Control",
      "vi": "D7 — Điều khiển từ xa (C2)"
    },
    "q": {
      "en": "A series of HTTP POSTs with Base64 bodies to a fixed URI path, at regular intervals, fits the pattern of:",
      "vi": "Một loạt HTTP POST với thân Base64 tới một đường dẫn URI cố định, ở khoảng đều, khớp mẫu của:"
    },
    "opts": [
      {
        "en": "HTTP-based C2 (agent check-in and output)",
        "vi": "C2 dựa trên HTTP (agent điểm danh và trả kết quả)"
      },
      {
        "en": "A routine streaming-video session",
        "vi": "Một phiên xem video stream định kỳ"
      },
      {
        "en": "An ordinary DNS lookup query",
        "vi": "Một truy vấn DNS thông thường"
      },
      {
        "en": "A standard ARP announcement",
        "vi": "Một thông báo ARP chuẩn"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Many C2 frameworks beacon via HTTP(S): GET to fetch tasks, POST to return Base64/encrypted results, to a consistent URI. Regular timing + encoded bodies + fixed path are strong indicators. Confirm with JA3, user-agent and destination reputation.",
      "vi": "Nhiều framework C2 beacon qua HTTP(S): GET để lấy tác vụ, POST để trả kết quả Base64/đã mã hóa, tới một URI nhất quán. Thời điểm đều + thân đã mã hóa + đường dẫn cố định là dấu hiệu mạnh. Xác nhận bằng JA3, user-agent và danh tiếng đích."
    }
  },

  {
    "app": "D",
    "sec": "d7",
    "secLabel": {
      "en": "D7 — Command and Control",
      "vi": "D7 — Điều khiển từ xa (C2)"
    },
    "q": {
      "en": "A default Cobalt Strike beacon may be detectable by:",
      "vi": "Một beacon Cobalt Strike mặc định có thể bị phát hiện qua:"
    },
    "opts": [
      {
        "en": "Known default malleable-C2 artefacts (URIs, JA3, named pipes)",
        "vi": "Các artefact malleable-C2 mặc định đã biết (URI, JA3, named pipe)"
      },
      {
        "en": "Its complete inability to use TLS",
        "vi": "Việc nó hoàn toàn không dùng được TLS"
      },
      {
        "en": "It always communicating over port 23",
        "vi": "Việc nó luôn giao tiếp qua cổng 23"
      },
      {
        "en": "It sending traffic only over ICMP",
        "vi": "Việc nó chỉ gửi lưu lượng qua ICMP"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Out-of-the-box C2 frameworks have recognisable default signatures (URIs, response headers, certificate/JA3, host-side named pipes). Operators customise profiles to evade these, so defenders combine network and host indicators rather than relying on one default signature.",
      "vi": "Các framework C2 dùng ngay có signature mặc định nhận ra được (URI, header phản hồi, chứng chỉ/JA3, named pipe phía host). Người vận hành tùy biến profile để né, nên người phòng thủ kết hợp chỉ dấu mạng và host thay vì dựa vào một signature mặc định."
    }
  },

  {
    "app": "D",
    "sec": "d7",
    "secLabel": {
      "en": "D7 — Command and Control",
      "vi": "D7 — Điều khiển từ xa (C2)"
    },
    "q": {
      "en": "DNS-based C2 typically encodes commands/responses in:",
      "vi": "C2 dựa trên DNS thường mã hóa lệnh/phản hồi trong:"
    },
    "opts": [
      {
        "en": "Subdomain labels and TXT records",
        "vi": "Nhãn subdomain và bản ghi TXT"
      },
      {
        "en": "The Ethernet frame's preamble",
        "vi": "Phần preamble của frame Ethernet"
      },
      {
        "en": "The TCP segment checksum field",
        "vi": "Trường checksum của segment TCP"
      },
      {
        "en": "The MAC address vendor OUI",
        "vi": "OUI hãng của địa chỉ MAC"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "DNS C2 sends data out in query labels (often Base32/hex subdomains) and receives instructions in record data such as TXT. Indicators include high query volume to one zone, long random labels and unusual record types — detectable even without decoding the content.",
      "vi": "C2 qua DNS gửi dữ liệu ra trong nhãn truy vấn (thường là subdomain Base32/hex) và nhận chỉ thị trong dữ liệu bản ghi như TXT. Dấu hiệu gồm lượng truy vấn cao tới một zone, nhãn dài ngẫu nhiên và loại bản ghi bất thường — phát hiện được kể cả khi không giải mã nội dung."
    }
  },

  {
    "app": "D",
    "sec": "d8",
    "secLabel": {
      "en": "D8 — Exfiltration of Data",
      "vi": "D8 — Trích xuất dữ liệu"
    },
    "q": {
      "en": "\"Staging\" before exfiltration typically involves:",
      "vi": "\"Staging\" trước khi exfil thường bao gồm:"
    },
    "opts": [
      {
        "en": "Compressing data into an archive on one host",
        "vi": "Nén dữ liệu thành archive trên một host"
      },
      {
        "en": "Rebooting all of the servers",
        "vi": "Khởi động lại mọi server"
      },
      {
        "en": "Disabling the domain's DNS",
        "vi": "Tắt DNS của domain"
      },
      {
        "en": "Printing the data to paper",
        "vi": "In dữ liệu ra giấy"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Attackers often stage stolen data — copy it to one host and compress/encrypt it (e.g. a large RAR/ZIP, sometimes split) before sending. Spotting unexpected large archives (especially password-protected) on a host is a strong pre-exfil indicator.",
      "vi": "Kẻ tấn công thường staging dữ liệu trộm — copy về một host rồi nén/mã hóa (vd một RAR/ZIP lớn, đôi khi chia nhỏ) trước khi gửi. Phát hiện archive lớn bất thường (nhất là có mật khẩu) trên một host là dấu hiệu tiền-exfil mạnh."
    },
    "note": {
      "en": "A sudden large password-protected archive can signal exfil staging.",
      "vi": "Một archive lớn có mật khẩu xuất hiện đột ngột có thể báo hiệu staging để exfil."
    }
  },

  {
    "app": "D",
    "sec": "d8",
    "secLabel": {
      "en": "D8 — Exfiltration of Data",
      "vi": "D8 — Trích xuất dữ liệu"
    },
    "q": {
      "en": "A finance workstation uploading 20 GB to a personal cloud-storage domain at 3 a.m. is MOST consistent with:",
      "vi": "Một máy trạm tài chính tải 20 GB lên một domain lưu trữ đám mây cá nhân lúc 3 giờ sáng KHỚP nhất với:"
    },
    "opts": [
      {
        "en": "Data exfiltration to a cloud service",
        "vi": "Exfil dữ liệu tới một dịch vụ đám mây"
      },
      {
        "en": "A routine software-update download",
        "vi": "Một bản tải cập nhật phần mềm định kỳ"
      },
      {
        "en": "Ordinary recursive DNS traffic",
        "vi": "Lưu lượng DNS đệ quy thông thường"
      },
      {
        "en": "A normal internal ARP scan",
        "vi": "Một lần quét ARP nội bộ bình thường"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Large off-hours uploads to consumer cloud storage, inverting the normal download-heavy ratio and unusual for that role, strongly indicate exfiltration. Cloud services are common exfil channels because they are widely allowed. Confirm with proxy/DLP and the responsible process.",
      "vi": "Tải lên lớn ngoài giờ tới lưu trữ đám mây tiêu dùng, đảo ngược tỉ lệ vốn nặng tải-xuống và bất thường với vai trò đó, cho thấy mạnh việc exfil. Dịch vụ đám mây là kênh exfil phổ biến vì được cho phép rộng rãi. Xác nhận bằng proxy/DLP và tiến trình chịu trách nhiệm."
    }
  },

  {
    "app": "D",
    "sec": "d8",
    "secLabel": {
      "en": "D8 — Exfiltration of Data",
      "vi": "D8 — Trích xuất dữ liệu"
    },
    "q": {
      "en": "\"Low and slow\" exfiltration is designed to:",
      "vi": "Exfil \"low and slow\" được thiết kế để:"
    },
    "opts": [
      {
        "en": "Stay under volume thresholds and blend in over time",
        "vi": "Nằm dưới ngưỡng lưu lượng và hòa lẫn theo thời gian"
      },
      {
        "en": "Transfer everything in one huge burst",
        "vi": "Truyền mọi thứ trong một đợt khổng lồ"
      },
      {
        "en": "Use only broadcast packets to send",
        "vi": "Chỉ dùng gói broadcast để gửi"
      },
      {
        "en": "Disable all of its own encryption",
        "vi": "Tắt toàn bộ mã hóa của chính nó"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "By trickling small amounts over long periods, attackers avoid triggering volume-based DLP/alerts. Detecting it needs long-baseline statistical analysis (cumulative bytes to a destination, subtle periodicity) rather than single-event thresholds.",
      "vi": "Bằng cách rỉ ra lượng nhỏ trong thời gian dài, kẻ tấn công tránh kích hoạt DLP/cảnh báo dựa trên lưu lượng. Phát hiện nó cần phân tích thống kê đường nền dài (tổng byte tích lũy tới một đích, chu kỳ tinh vi) thay vì ngưỡng theo từng sự kiện."
    }
  },

  {
    "app": "D",
    "sec": "d8",
    "secLabel": {
      "en": "D8 — Exfiltration of Data",
      "vi": "D8 — Trích xuất dữ liệu"
    },
    "q": {
      "en": "Which is the strongest single artefact suggesting exfiltration over DNS specifically?",
      "vi": "Đâu là artefact đơn lẻ mạnh nhất gợi ý exfil riêng qua DNS?"
    },
    "opts": [
      {
        "en": "High volume of long, random subdomain labels to one domain",
        "vi": "Lượng lớn nhãn subdomain dài, ngẫu nhiên tới một domain"
      },
      {
        "en": "A single A-record lookup for a known site",
        "vi": "Một lần tra A-record cho một site đã biết"
      },
      {
        "en": "A routine MX-record mail lookup",
        "vi": "Một tra MX-record mail định kỳ"
      },
      {
        "en": "An ordinary NTP synchronisation",
        "vi": "Một đồng bộ NTP thông thường"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "DNS exfil encodes data in subdomain labels, producing many queries with long, high-entropy labels to a single attacker zone — distinct from normal lookups. Volume + label length/entropy + single-zone concentration together make a strong case.",
      "vi": "Exfil qua DNS mã hóa dữ liệu trong nhãn subdomain, tạo nhiều truy vấn với nhãn dài, entropy cao tới một zone của kẻ tấn công — khác truy vấn bình thường. Lưu lượng + độ dài/entropy nhãn + tập trung vào một zone cùng nhau tạo bằng chứng mạnh."
    }
  },

  {
    "app": "D",
    "sec": "d8",
    "secLabel": {
      "en": "D8 — Exfiltration of Data",
      "vi": "D8 — Trích xuất dữ liệu"
    },
    "q": {
      "en": "When investigating suspected exfiltration, the upload/download (egress/ingress) BYTE RATIO matters because:",
      "vi": "Khi điều tra nghi vấn exfil, TỈ LỆ BYTE tải lên/tải xuống (egress/ingress) quan trọng vì:"
    },
    "opts": [
      {
        "en": "Clients normally download more than upload; a reversal is odd",
        "vi": "Client thường tải xuống nhiều hơn tải lên; đảo ngược là bất thường"
      },
      {
        "en": "Byte ratios are random and meaningless",
        "vi": "Tỉ lệ byte là ngẫu nhiên và vô nghĩa"
      },
      {
        "en": "Upload byte counts are never logged",
        "vi": "Số byte tải lên không bao giờ được ghi log"
      },
      {
        "en": "Downloads always equal uploads exactly",
        "vi": "Tải xuống luôn bằng đúng tải lên"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Typical user/browser traffic is download-dominant. A host sending far more than it receives (especially to an unusual destination) inverts the expected ratio and is a practical exfil indicator visible even in NetFlow without payloads.",
      "vi": "Lưu lượng người dùng/trình duyệt điển hình nặng về tải xuống. Một host gửi đi nhiều hơn nhận về nhiều (nhất là tới một đích bất thường) đảo ngược tỉ lệ kỳ vọng và là dấu hiệu exfil thực tế, thấy được cả trong NetFlow mà không cần payload."
    }
  },

  {
    "app": "D",
    "sec": "d9",
    "secLabel": {
      "en": "D9 — Incoming Attacks",
      "vi": "D9 — Tấn công đến"
    },
    "q": {
      "en": "Log entries containing \"../../../../etc/passwd\" or \"..%2f..%2f\" indicate an attempt at:",
      "vi": "Các bản ghi log chứa \"../../../../etc/passwd\" hoặc \"..%2f..%2f\" cho biết nỗ lực:"
    },
    "opts": [
      {
        "en": "Directory/path traversal",
        "vi": "Directory/path traversal (vượt thư mục)"
      },
      {
        "en": "A normal file download",
        "vi": "Một lần tải file bình thường"
      },
      {
        "en": "DNS resolution",
        "vi": "Phân giải DNS"
      },
      {
        "en": "A TLS handshake",
        "vi": "Một bắt tay TLS"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "\"../\" sequences (and encoded forms like %2e%2e%2f) try to escape the web root to read arbitrary files. A request for /etc/passwd or Windows config files is a classic traversal probe. Check the response code/size to see if it succeeded.",
      "vi": "Chuỗi \"../\" (và dạng mã hóa như %2e%2e%2f) cố thoát khỏi web root để đọc file tùy ý. Một request tới /etc/passwd hay file cấu hình Windows là dấu hiệu traversal kinh điển. Kiểm tra mã/kích thước phản hồi để biết có thành công không."
    }
  },

  {
    "app": "D",
    "sec": "d9",
    "secLabel": {
      "en": "D9 — Incoming Attacks",
      "vi": "D9 — Tấn công đến"
    },
    "q": {
      "en": "Hundreds of HTTP 401/403 responses for one account from one IP in a minute most likely indicate:",
      "vi": "Hàng trăm phản hồi HTTP 401/403 cho một tài khoản từ một IP trong một phút khả năng cho biết:"
    },
    "opts": [
      {
        "en": "A brute-force / password-guessing attack",
        "vi": "Một tấn công brute-force / đoán mật khẩu"
      },
      {
        "en": "A single successful user login",
        "vi": "Một lần đăng nhập thành công duy nhất"
      },
      {
        "en": "Perfectly normal web browsing",
        "vi": "Duyệt web hoàn toàn bình thường"
      },
      {
        "en": "A standard DNS zone transfer",
        "vi": "Một zone transfer DNS chuẩn"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A burst of authentication failures (401/403) against an account is classic brute forcing/credential stuffing. Watch for a subsequent 200/302 (success) indicating compromise, and correlate with lockout events. Distribution across many IPs suggests password spraying.",
      "vi": "Một loạt thất bại xác thực (401/403) nhằm một tài khoản là brute force/credential stuffing kinh điển. Để ý một 200/302 (thành công) sau đó cho thấy bị chiếm, và đối chiếu với sự kiện khóa tài khoản. Phân tán qua nhiều IP gợi ý password spraying."
    }
  },

  {
    "app": "D",
    "sec": "d9",
    "secLabel": {
      "en": "D9 — Incoming Attacks",
      "vi": "D9 — Tấn công đến"
    },
    "q": {
      "en": "After a long scan, you see a single successful POST that creates \"shell.aspx\" in a web directory. This indicates:",
      "vi": "Sau một lần quét dài, bạn thấy một POST thành công duy nhất tạo \"shell.aspx\" trong một thư mục web. Điều này cho biết:"
    },
    "opts": [
      {
        "en": "A likely web shell upload",
        "vi": "Khả năng upload web shell"
      },
      {
        "en": "A routine server cache flush",
        "vi": "Một lần xóa cache server định kỳ"
      },
      {
        "en": "A normal user image upload",
        "vi": "Một lần upload ảnh bình thường của người dùng"
      },
      {
        "en": "An ordinary DNS record update",
        "vi": "Một cập nhật bản ghi DNS thông thường"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A new server-executable file (.aspx/.php/.jsp) appearing after exploitation attempts is a hallmark web shell. Subsequent requests to that file (often with command parameters) confirm interactive control. Correlate file creation time with the access logs.",
      "vi": "Một file thực thi phía server mới (.aspx/.php/.jsp) xuất hiện sau các nỗ lực khai thác là dấu hiệu web shell. Các request tiếp theo tới file đó (thường kèm tham số lệnh) xác nhận điều khiển tương tác. Đối chiếu thời gian tạo file với log truy cập."
    }
  },

  {
    "app": "D",
    "sec": "d9",
    "secLabel": {
      "en": "D9 — Incoming Attacks",
      "vi": "D9 — Tấn công đến"
    },
    "q": {
      "en": "In web logs, a request like \"/cgi-bin/test.sh;cat /etc/passwd\" is attempting:",
      "vi": "Trong log web, một request như \"/cgi-bin/test.sh;cat /etc/passwd\" đang thử:"
    },
    "opts": [
      {
        "en": "OS command injection",
        "vi": "Tiêm lệnh hệ điều hành (command injection)"
      },
      {
        "en": "A normal page load",
        "vi": "Một lần tải trang bình thường"
      },
      {
        "en": "A CSS request",
        "vi": "Một request CSS"
      },
      {
        "en": "An NTP query",
        "vi": "Một truy vấn NTP"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Shell metacharacters (; | && `) followed by commands in a parameter/URL try to make the server execute attacker commands (command injection). Look for evidence of execution (unexpected child processes, output sizes) to gauge success.",
      "vi": "Ký tự đặc biệt của shell (; | && `) theo sau bởi lệnh trong tham số/URL cố khiến server thực thi lệnh của kẻ tấn công (command injection). Tìm bằng chứng thực thi (tiến trình con bất thường, kích thước output) để đánh giá thành công."
    }
  },

  {
    "app": "D",
    "sec": "d9",
    "secLabel": {
      "en": "D9 — Incoming Attacks",
      "vi": "D9 — Tấn công đến"
    },
    "q": {
      "en": "A scanner using a user-agent like \"Nikto\" or \"sqlmap\" against your web server indicates:",
      "vi": "Một scanner dùng user-agent như \"Nikto\" hay \"sqlmap\" nhằm vào web server của bạn cho biết:"
    },
    "opts": [
      {
        "en": "Automated vulnerability-scanning / attack tooling (recon)",
        "vi": "Công cụ quét lỗ hổng / tấn công tự động (trinh sát)"
      },
      {
        "en": "A legitimate human-driven browser",
        "vi": "Một trình duyệt do người thật điều khiển"
      },
      {
        "en": "A search-engine indexing crawler",
        "vi": "Một crawler lập chỉ mục công cụ tìm kiếm"
      },
      {
        "en": "A recursive DNS resolver server",
        "vi": "Một máy chủ resolver DNS đệ quy"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Default tool user-agents (Nikto, sqlmap, nmap NSE, wpscan) reveal automated scanning. Attackers may change the UA, so also look at request patterns (rapid enumeration of paths/params). Such activity is reconnaissance/probing of incoming attacks.",
      "vi": "User-agent mặc định của công cụ (Nikto, sqlmap, nmap NSE, wpscan) lộ việc quét tự động. Kẻ tấn công có thể đổi UA, nên cũng xem mẫu request (liệt kê nhanh đường dẫn/tham số). Hoạt động kiểu này là trinh sát/thăm dò của tấn công đến."
    }
  },

  {
    "app": "D",
    "sec": "d10",
    "secLabel": {
      "en": "D10 — Reconnaissance",
      "vi": "D10 — Trinh sát"
    },
    "q": {
      "en": "An nmap XMAS scan sets which TCP flags, and how do closed ports respond on a compliant stack?",
      "vi": "Một lần quét XMAS của nmap bật cờ TCP nào, và cổng đóng phản hồi thế nào trên stack tuân thủ chuẩn?"
    },
    "opts": [
      {
        "en": "FIN, PSH, URG set; closed ports reply RST, open stay silent",
        "vi": "Bật FIN, PSH, URG; cổng đóng trả RST, cổng mở im lặng"
      },
      {
        "en": "Only SYN set; closed ports reply SYN-ACK",
        "vi": "Chỉ SYN; cổng đóng trả SYN-ACK"
      },
      {
        "en": "Only ACK set; open ports reply FIN",
        "vi": "Chỉ ACK; cổng mở trả FIN"
      },
      {
        "en": "No flags set; all ports reply with ICMP",
        "vi": "Không cờ; mọi cổng trả ICMP"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "XMAS (FIN+PSH+URG), FIN and NULL scans exploit RFC 793: closed ports send RST, open|filtered ports send nothing — letting attackers infer state stealthily (no full handshake). Windows often deviates, replying RST regardless, which itself fingerprints the OS.",
      "vi": "Quét XMAS (FIN+PSH+URG), FIN và NULL khai thác RFC 793: cổng đóng gửi RST, cổng mở|filtered không gửi gì — cho phép kẻ tấn công suy ra trạng thái một cách ẩn (không bắt tay đầy đủ). Windows thường lệch chuẩn, trả RST bất kể, điều này lại fingerprint chính OS."
    }
  },

  {
    "app": "D",
    "sec": "d10",
    "secLabel": {
      "en": "D10 — Reconnaissance",
      "vi": "D10 — Trinh sát"
    },
    "q": {
      "en": "How does a TCP connect scan (-sT) differ from a SYN/half-open scan (-sS) from a detection standpoint?",
      "vi": "Quét TCP connect (-sT) khác quét SYN/half-open (-sS) thế nào về mặt phát hiện?"
    },
    "opts": [
      {
        "en": "Connect scans complete the handshake, so apps often log them",
        "vi": "Quét connect hoàn tất bắt tay nên ứng dụng thường ghi log"
      },
      {
        "en": "SYN scans always complete the full handshake",
        "vi": "Quét SYN luôn hoàn tất bắt tay đầy đủ"
      },
      {
        "en": "Connect scans never touch the target at all",
        "vi": "Quét connect không bao giờ chạm mục tiêu"
      },
      {
        "en": "They are functionally identical scans",
        "vi": "Chúng là các kiểu quét giống hệt nhau"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A connect scan establishes a full TCP session (SYN, SYN-ACK, ACK) so the app/service often logs the connection. A SYN scan sends RST after the SYN-ACK, never completing it — stealthier and less likely to be logged by the application layer.",
      "vi": "Quét connect thiết lập một phiên TCP đầy đủ (SYN, SYN-ACK, ACK) nên ứng dụng/dịch vụ thường ghi log kết nối. Quét SYN gửi RST sau SYN-ACK, không hề hoàn tất — ẩn hơn và ít bị tầng ứng dụng ghi log hơn."
    }
  },

  {
    "app": "D",
    "sec": "d10",
    "secLabel": {
      "en": "D10 — Reconnaissance",
      "vi": "D10 — Trinh sát"
    },
    "q": {
      "en": "Bursts of ICMP echo requests to every host in a /24 are characteristic of:",
      "vi": "Các đợt ICMP echo request tới mọi host trong một /24 là đặc trưng của:"
    },
    "opts": [
      {
        "en": "A ping sweep (host discovery) during reconnaissance",
        "vi": "Một ping sweep (phát hiện host) khi trinh sát"
      },
      {
        "en": "Ordinary internal email traffic",
        "vi": "Lưu lượng email nội bộ thông thường"
      },
      {
        "en": "A routine TLS handshake exchange",
        "vi": "Một trao đổi bắt tay TLS định kỳ"
      },
      {
        "en": "A standard DNS zone transfer",
        "vi": "Một zone transfer DNS chuẩn"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Sweeping ICMP echoes across a subnet maps which hosts are alive — early reconnaissance. Attackers may use TCP/UDP probes instead where ICMP is blocked. Many sequential targets in a short window is the giveaway, distinct from sporadic legitimate pings.",
      "vi": "Quét ICMP echo khắp một subnet để vẽ bản đồ host nào còn sống — trinh sát giai đoạn đầu. Kẻ tấn công có thể dùng thăm dò TCP/UDP khi ICMP bị chặn. Nhiều đích tuần tự trong thời gian ngắn là dấu hiệu, khác với ping hợp lệ rải rác."
    }
  },

  {
    "app": "D",
    "sec": "d10",
    "secLabel": {
      "en": "D10 — Reconnaissance",
      "vi": "D10 — Trinh sát"
    },
    "q": {
      "en": "A compromised host issuing large numbers of LDAP queries to a domain controller is MOST likely performing:",
      "vi": "Một host bị xâm nhập phát ra số lượng lớn truy vấn LDAP tới một domain controller KHẢ NĂNG đang thực hiện:"
    },
    "opts": [
      {
        "en": "Internal Active Directory reconnaissance",
        "vi": "Trinh sát Active Directory nội bộ"
      },
      {
        "en": "A routine network printer test",
        "vi": "Một lần thử máy in mạng định kỳ"
      },
      {
        "en": "Ordinary DNS name resolution",
        "vi": "Phân giải tên DNS thông thường"
      },
      {
        "en": "Routine NTP synchronisation",
        "vi": "Đồng bộ NTP định kỳ"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Tools like BloodHound/SharpHound and built-in commands enumerate AD via LDAP to map users, groups, ACLs and attack paths. A spike of LDAP queries from a workstation is a strong internal-recon signal preceding lateral movement and privilege escalation.",
      "vi": "Công cụ như BloodHound/SharpHound và lệnh tích hợp liệt kê AD qua LDAP để vẽ user, nhóm, ACL và đường tấn công. Một đợt tăng đột biến truy vấn LDAP từ máy trạm là tín hiệu trinh sát nội bộ mạnh, đi trước lateral movement và leo thang đặc quyền."
    }
  },

  {
    "app": "D",
    "sec": "d11",
    "secLabel": {
      "en": "D11 — Internal Spread & Privilege Escalation",
      "vi": "D11 — Lan truyền nội bộ & leo thang đặc quyền"
    },
    "q": {
      "en": "\"Pass-the-Hash\" enables lateral movement by:",
      "vi": "\"Pass-the-Hash\" cho phép lateral movement bằng cách:"
    },
    "opts": [
      {
        "en": "Authenticating with a stolen NTLM hash, no plaintext needed",
        "vi": "Xác thực bằng NTLM hash bị trộm, không cần plaintext"
      },
      {
        "en": "Cracking every account password first",
        "vi": "Bẻ mọi mật khẩu tài khoản trước"
      },
      {
        "en": "Disabling the host's local firewall",
        "vi": "Vô hiệu hóa firewall cục bộ của host"
      },
      {
        "en": "Flooding the LAN with ARP packets",
        "vi": "Làm ngập LAN bằng gói ARP"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "NTLM authentication can accept the hash directly, so an attacker who dumps a hash (e.g. via Mimikatz) can authenticate to other systems as that user without cracking it. Detect via abnormal logon patterns (type 3), reuse of privileged accounts and tooling artefacts.",
      "vi": "Xác thực NTLM có thể chấp nhận hash trực tiếp, nên kẻ tấn công dump được hash (vd qua Mimikatz) có thể xác thực tới hệ thống khác dưới danh nghĩa người dùng đó mà không cần bẻ. Phát hiện qua mẫu đăng nhập bất thường (type 3), tái dùng tài khoản đặc quyền và artefact công cụ."
    }
  },

  {
    "app": "D",
    "sec": "d11",
    "secLabel": {
      "en": "D11 — Internal Spread & Privilege Escalation",
      "vi": "D11 — Lan truyền nội bộ & leo thang đặc quyền"
    },
    "q": {
      "en": "A spike of Kerberos service-ticket (TGS) requests for many SPNs from one account suggests:",
      "vi": "Một đợt tăng yêu cầu service-ticket (TGS) Kerberos cho nhiều SPN từ một tài khoản gợi ý:"
    },
    "opts": [
      {
        "en": "Kerberoasting to crack service passwords",
        "vi": "Kerberoasting để bẻ mật khẩu tài khoản dịch vụ"
      },
      {
        "en": "An ordinary interactive user logon",
        "vi": "Một đăng nhập tương tác thông thường"
      },
      {
        "en": "A routine DNS name lookup",
        "vi": "Một tra cứu tên DNS định kỳ"
      },
      {
        "en": "A scheduled overnight backup job",
        "vi": "Một tác vụ sao lưu ban đêm theo lịch"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Kerberoasting requests TGS tickets for service accounts (SPNs); the tickets are encrypted with the service account's key, so the attacker cracks them offline to recover passwords. Many TGS requests (event 4769) for varied SPNs from one principal is the indicator.",
      "vi": "Kerberoasting yêu cầu ticket TGS cho các tài khoản dịch vụ (SPN); ticket được mã hóa bằng khóa của tài khoản dịch vụ, nên kẻ tấn công bẻ offline để khôi phục mật khẩu. Nhiều yêu cầu TGS (sự kiện 4769) cho các SPN đa dạng từ một chủ thể là dấu hiệu."
    }
  },

  {
    "app": "D",
    "sec": "d11",
    "secLabel": {
      "en": "D11 — Internal Spread & Privilege Escalation",
      "vi": "D11 — Lan truyền nội bộ & leo thang đặc quyền"
    },
    "q": {
      "en": "Remote execution via the ADMIN$ share and a newly-created service is the classic behaviour of:",
      "vi": "Thực thi từ xa qua share ADMIN$ và một service vừa được tạo là hành vi kinh điển của:"
    },
    "opts": [
      {
        "en": "PsExec-style lateral movement tools",
        "vi": "Các công cụ lateral movement kiểu PsExec"
      },
      {
        "en": "A recursive DNS resolver service",
        "vi": "Một dịch vụ resolver DNS đệ quy"
      },
      {
        "en": "An ordinary web browser process",
        "vi": "Một tiến trình trình duyệt web thông thường"
      },
      {
        "en": "A screensaver display process",
        "vi": "Một tiến trình hiển thị screensaver"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "PsExec (and Impacket's psexec.py) copy a binary to ADMIN$ and create/start a service to run it remotely as SYSTEM — leaving traces like 7045 (service installed) and 5145 (share access). WMI and WinRM are alternative lateral-movement channels to watch.",
      "vi": "PsExec (và psexec.py của Impacket) copy một binary tới ADMIN$ và tạo/khởi động một service để chạy từ xa dưới quyền SYSTEM — để lại dấu như 7045 (cài service) và 5145 (truy cập share). WMI và WinRM là các kênh lateral movement thay thế cần theo dõi."
    }
  },

  {
    "app": "D",
    "sec": "d11",
    "secLabel": {
      "en": "D11 — Internal Spread & Privilege Escalation",
      "vi": "D11 — Lan truyền nội bộ & leo thang đặc quyền"
    },
    "q": {
      "en": "Event ID 4672 (\"Special privileges assigned to new logon\") is significant during analysis because it:",
      "vi": "Sự kiện ID 4672 (\"Special privileges assigned to new logon\") quan trọng khi phân tích vì nó:"
    },
    "opts": [
      {
        "en": "Flags logons that gained administrative/sensitive privileges",
        "vi": "Đánh dấu đăng nhập đạt được đặc quyền quản trị/nhạy cảm"
      },
      {
        "en": "It means the system disk is full",
        "vi": "Nó nghĩa là đĩa hệ thống đầy"
      },
      {
        "en": "It indicates a network printer error",
        "vi": "Nó cho thấy lỗi máy in mạng"
      },
      {
        "en": "It simply shows a DNS query was made",
        "vi": "Nó chỉ cho thấy một truy vấn DNS đã được thực hiện"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "4672 accompanies logons holding admin-equivalent privileges (e.g. SeDebugPrivilege). Unexpected 4672 events — especially for service or normally-low-privilege accounts on odd hosts — can indicate privilege escalation or misuse of admin credentials during spread.",
      "vi": "4672 đi kèm các lần đăng nhập có đặc quyền tương đương admin (vd SeDebugPrivilege). Sự kiện 4672 bất thường — nhất là cho tài khoản dịch vụ hoặc tài khoản vốn quyền thấp trên host lạ — có thể cho thấy leo thang đặc quyền hoặc lạm dụng credential admin khi lan truyền."
    }
  },

  {
    "app": "D",
    "sec": "d12",
    "secLabel": {
      "en": "D12 — Web Based Attacks",
      "vi": "D12 — Tấn công qua web"
    },
    "q": {
      "en": "JavaScript built from String.fromCharCode(104,116,116,112,...) is using which technique?",
      "vi": "JavaScript dựng từ String.fromCharCode(104,116,116,112,...) đang dùng kỹ thuật nào?"
    },
    "opts": [
      {
        "en": "Obfuscation to hide strings/URLs from signatures",
        "vi": "Làm rối để giấu chuỗi/URL khỏi signature"
      },
      {
        "en": "Strong, modern payload encryption",
        "vi": "Mã hóa payload mạnh, hiện đại"
      },
      {
        "en": "A form of lossless compression",
        "vi": "Một dạng nén không mất mát"
      },
      {
        "en": "A valid embedded digital signature",
        "vi": "Một chữ ký số nhúng hợp lệ"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "fromCharCode/hex/escape/eval constructs are obfuscation, building strings (often URLs/payloads) at runtime to evade detection. De-obfuscate by replacing the final eval/write with logging in a sandbox to reveal the decoded intent — never by running it live in a browser.",
      "vi": "Các cấu trúc fromCharCode/hex/escape/eval là làm rối, dựng chuỗi (thường là URL/payload) lúc chạy để né phát hiện. Giải rối bằng cách thay eval/write cuối bằng lệnh log trong sandbox để lộ ý đồ đã giải mã — tuyệt đối không chạy trực tiếp trong trình duyệt."
    }
  },

  {
    "app": "D",
    "sec": "d13",
    "secLabel": {
      "en": "D13 — False Positive Acknowledgement",
      "vi": "D13 — Xác nhận false positive"
    },
    "q": {
      "en": "In detection terms, a \"false negative\" is:",
      "vi": "Theo thuật ngữ phát hiện, một \"false negative\" là:"
    },
    "opts": [
      {
        "en": "A real attack that the system FAILED to alert on",
        "vi": "Một cuộc tấn công thật mà hệ thống KHÔNG cảnh báo"
      },
      {
        "en": "A benign event wrongly alerted as malicious",
        "vi": "Một sự kiện lành tính bị cảnh báo nhầm là độc hại"
      },
      {
        "en": "A correctly ignored benign event",
        "vi": "Một sự kiện lành tính được bỏ qua đúng"
      },
      {
        "en": "A correctly raised true alert",
        "vi": "Một cảnh báo thật được nêu đúng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "False negative = missed real threat (most dangerous); false positive = benign flagged as bad (noise); true positive = real threat correctly alerted; true negative = benign correctly ignored. Tuning trades these off — over-tightening to cut false positives can raise false negatives.",
      "vi": "False negative = bỏ sót mối đe dọa thật (nguy hiểm nhất); false positive = lành tính bị gắn cờ xấu (nhiễu); true positive = mối đe dọa thật được cảnh báo đúng; true negative = lành tính được bỏ qua đúng. Tuning đánh đổi các yếu tố này — siết quá để giảm false positive có thể làm tăng false negative."
    },
    "note": {
      "en": "False negative (missed attack) is usually the costliest error.",
      "vi": "False negative (bỏ sót tấn công) thường là lỗi tốn kém nhất."
    }
  },

  {
    "app": "D",
    "sec": "d13",
    "secLabel": {
      "en": "D13 — False Positive Acknowledgement",
      "vi": "D13 — Xác nhận false positive"
    },
    "q": {
      "en": "An IDS rule alerts on any base64 string in HTTP, firing constantly. The BEST improvement is to:",
      "vi": "Một rule IDS cảnh báo mọi chuỗi base64 trong HTTP, kêu liên tục. Cải thiện TỐT NHẤT là:"
    },
    "opts": [
      {
        "en": "Make the signature more specific and whitelist known-good",
        "vi": "Làm signature cụ thể hơn và whitelist known-good"
      },
      {
        "en": "Delete the IDS sensor entirely",
        "vi": "Xóa hẳn cảm biến IDS"
      },
      {
        "en": "Alert on absolutely everything instead",
        "vi": "Cảnh báo mọi thứ thay vào đó"
      },
      {
        "en": "Ignore all HTTP traffic completely",
        "vi": "Bỏ qua hoàn toàn mọi lưu lượng HTTP"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Base64 is ubiquitous in legitimate HTTP, so a broad rule is pure noise. Tighten it with contextual conditions (specific URIs, abnormal length/entropy, suspicious destinations) and exclude known-good sources — reducing false positives without losing the real detections.",
      "vi": "Base64 phổ biến trong HTTP hợp lệ, nên một rule rộng chỉ tạo nhiễu. Siết chặt bằng điều kiện theo bối cảnh (URI cụ thể, độ dài/entropy bất thường, đích đáng ngờ) và loại trừ nguồn known-good — giảm false positive mà không mất phát hiện thật."
    }
  },

  {
    "app": "D",
    "sec": "d13",
    "secLabel": {
      "en": "D13 — False Positive Acknowledgement",
      "vi": "D13 — Xác nhận false positive"
    },
    "q": {
      "en": "Why is establishing a network BASELINE important before judging alerts?",
      "vi": "Vì sao việc xây dựng đường nền (BASELINE) mạng quan trọng trước khi đánh giá cảnh báo?"
    },
    "opts": [
      {
        "en": "Knowing normal lets you tell real anomalies from routine",
        "vi": "Biết cái bình thường giúp phân biệt bất thường thật với định kỳ"
      },
      {
        "en": "Baselines encrypt the network traffic",
        "vi": "Baseline mã hóa lưu lượng mạng"
      },
      {
        "en": "They delete false positives automatically",
        "vi": "Chúng tự xóa false positive"
      },
      {
        "en": "They fully replace the need for an IDS",
        "vi": "Chúng thay thế hoàn toàn nhu cầu IDS"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Without a baseline of normal hosts, ports, volumes and destinations, you cannot reliably tell anomalous from benign, so alerts are hard to triage. Baselining underpins anomaly detection and effective false-positive reduction. It does not encrypt or replace detection tooling.",
      "vi": "Không có đường nền về host, cổng, lưu lượng và đích bình thường, bạn khó phân biệt bất thường với lành tính, nên khó triage cảnh báo. Baseline làm nền cho phát hiện bất thường và giảm false positive hiệu quả. Nó không mã hóa hay thay thế công cụ phát hiện."
    }
  }

);
