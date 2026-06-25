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
        "en": "Large, random bursts of traffic to many sites",
        "vi": "Các đợt lưu lượng lớn, ngẫu nhiên tới nhiều site"
      },
      {
        "en": "Small, regular, periodic connections to the same host at near-fixed intervals",
        "vi": "Kết nối nhỏ, đều đặn, định kỳ tới cùng một host ở khoảng gần cố định"
      },
      {
        "en": "A single large file download",
        "vi": "Một lần tải file lớn duy nhất"
      },
      {
        "en": "High volume of normal web browsing",
        "vi": "Lưu lượng duyệt web bình thường cao"
      }
    ],
    "correct": 1,
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
        "en": "Strong cryptography, unbreakable",
        "vi": "Mật mã mạnh, không thể bẻ"
      },
      {
        "en": "Weak obfuscation, easily reversed (e.g. via known plaintext / frequency analysis)",
        "vi": "Làm rối yếu, dễ đảo ngược (vd dùng known-plaintext / phân tích tần suất)"
      },
      {
        "en": "A digital signature",
        "vi": "Một chữ ký số"
      },
      {
        "en": "Lossless compression",
        "vi": "Nén không mất dữ liệu"
      }
    ],
    "correct": 1,
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
        "en": "Plain HTTP to a known web server",
        "vi": "HTTP thường tới một web server đã biết"
      },
      {
        "en": "Commands tunnelled inside DNS TXT queries / ICMP payloads",
        "vi": "Lệnh được tunnel trong truy vấn DNS TXT / payload ICMP"
      },
      {
        "en": "A scheduled Windows update",
        "vi": "Một bản cập nhật Windows theo lịch"
      },
      {
        "en": "NTP time sync",
        "vi": "Đồng bộ thời gian NTP"
      }
    ],
    "correct": 1,
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
        "en": "Large, sustained OUTBOUND transfer to an unfamiliar host, inverting the normal download/upload ratio",
        "vi": "Truyền RA NGOÀI lớn, kéo dài tới host lạ, đảo ngược tỉ lệ tải xuống/tải lên bình thường"
      },
      {
        "en": "Many small inbound DNS responses",
        "vi": "Nhiều phản hồi DNS nhỏ đi vào"
      },
      {
        "en": "A short TLS handshake",
        "vi": "Một bắt tay TLS ngắn"
      },
      {
        "en": "An ARP broadcast",
        "vi": "Một ARP broadcast"
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
        "en": "Normal web browsing",
        "vi": "Duyệt web bình thường"
      },
      {
        "en": "A non-standard protocol abusing port 80 to bypass egress filtering",
        "vi": "Một giao thức không chuẩn lạm dụng cổng 80 để né lọc đầu ra"
      },
      {
        "en": "A DNS query",
        "vi": "Một truy vấn DNS"
      },
      {
        "en": "An NTP sync",
        "vi": "Một đồng bộ NTP"
      }
    ],
    "correct": 1,
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
        "en": "A backup job",
        "vi": "Một tác vụ sao lưu"
      },
      {
        "en": "A port/network scan (reconnaissance)",
        "vi": "Một lần quét cổng/mạng (trinh sát)"
      },
      {
        "en": "Normal DNS",
        "vi": "DNS bình thường"
      },
      {
        "en": "A software update",
        "vi": "Một bản cập nhật phần mềm"
      }
    ],
    "correct": 1,
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
        "en": "Delete all IDS rules",
        "vi": "Xóa toàn bộ rule IDS"
      },
      {
        "en": "Tune the signature to be more specific (tighter pattern, exclude known-good)",
        "vi": "Tinh chỉnh signature cho cụ thể hơn (pattern chặt hơn, loại trừ known-good)"
      },
      {
        "en": "Ignore the IDS permanently",
        "vi": "Bỏ qua IDS vĩnh viễn"
      },
      {
        "en": "Block all traffic",
        "vi": "Chặn toàn bộ lưu lượng"
      }
    ],
    "correct": 1,
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
        "en": "Run it in your browser to see the result",
        "vi": "Chạy nó trong trình duyệt để xem kết quả"
      },
      {
        "en": "De-obfuscate safely (replace eval with print/console.log in a sandbox) to reveal the payload",
        "vi": "Giải rối an toàn (thay eval bằng print/console.log trong sandbox) để lộ payload"
      },
      {
        "en": "Delete the page and move on",
        "vi": "Xóa trang và bỏ qua"
      },
      {
        "en": "Assume it is harmless minification",
        "vi": "Cho rằng đó chỉ là minify vô hại"
      }
    ],
    "correct": 1,
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
        "en": "Reading one log in isolation",
        "vi": "Đọc một log riêng lẻ"
      },
      {
        "en": "Correlating multiple log sources on a common timeline/identifier",
        "vi": "Đối chiếu nhiều nguồn log theo cùng timeline/định danh chung"
      },
      {
        "en": "Deleting old logs",
        "vi": "Xóa log cũ"
      },
      {
        "en": "Trusting only the firewall",
        "vi": "Chỉ tin firewall"
      }
    ],
    "correct": 1,
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
        "en": "Normal browsing",
        "vi": "Duyệt web bình thường"
      },
      {
        "en": "A DNS query",
        "vi": "Một truy vấn DNS"
      },
      {
        "en": "A backup",
        "vi": "Một bản sao lưu"
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
        "vi": "Di chuyển ngang (lateral movement) trong mạng"
      },
      {
        "en": "A printer test",
        "vi": "Một lần thử máy in"
      },
      {
        "en": "Normal email",
        "vi": "Email bình thường"
      },
      {
        "en": "A screensaver change",
        "vi": "Thay đổi screensaver"
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
        "en": "To make traffic faster",
        "vi": "Để lưu lượng nhanh hơn"
      },
      {
        "en": "To randomise timing and evade simple fixed-interval detection",
        "vi": "Để ngẫu nhiên hóa thời điểm và né phát hiện theo khoảng cố định đơn giản"
      },
      {
        "en": "To encrypt the payload",
        "vi": "Để mã hóa payload"
      },
      {
        "en": "To increase bandwidth",
        "vi": "Để tăng băng thông"
      }
    ],
    "correct": 1,
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
        "en": "Normal caching",
        "vi": "Cache bình thường"
      },
      {
        "en": "A zone transfer",
        "vi": "Một zone transfer"
      },
      {
        "en": "Load balancing",
        "vi": "Cân bằng tải"
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
        "en": "Decode the Base64 command and check context (admin task vs malicious)",
        "vi": "Giải mã lệnh Base64 và xét bối cảnh (tác vụ admin vs độc hại)"
      },
      {
        "en": "Immediately wipe the host",
        "vi": "Xóa sạch host ngay"
      },
      {
        "en": "Disable the rule",
        "vi": "Tắt rule"
      },
      {
        "en": "Ignore it",
        "vi": "Bỏ qua"
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
        "en": "A WHOIS lookup from the internet",
        "vi": "Một tra WHOIS từ internet"
      },
      {
        "en": "Reading public job postings",
        "vi": "Đọc tin tuyển dụng công khai"
      },
      {
        "en": "Browsing the company website",
        "vi": "Duyệt website công ty"
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
        "en": "Link throughput × capture duration (× a retention factor)",
        "vi": "Thông lượng liên kết × thời gian bắt (× hệ số lưu trữ)"
      },
      {
        "en": "The number of analysts",
        "vi": "Số lượng analyst"
      },
      {
        "en": "The colour of the cables",
        "vi": "Màu của dây cáp"
      },
      {
        "en": "The office size",
        "vi": "Diện tích văn phòng"
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
        "en": "Windows Update",
        "vi": "Windows Update"
      },
      {
        "en": "A CDN",
        "vi": "Một CDN"
      },
      {
        "en": "An NTP server",
        "vi": "Một server NTP"
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
        "en": "Normal web browsing",
        "vi": "Duyệt web bình thường"
      },
      {
        "en": "A successful patch",
        "vi": "Một bản vá thành công"
      },
      {
        "en": "Faster DNS",
        "vi": "DNS nhanh hơn"
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
        "en": "Channel fingerprinting + flow analysis (volume, direction, timing, JA3, SNI/cert)",
        "vi": "Fingerprint kênh + phân tích flow (lưu lượng, chiều, thời điểm, JA3, SNI/cert)"
      },
      {
        "en": "Reading the plaintext payload",
        "vi": "Đọc payload dạng plaintext"
      },
      {
        "en": "Guessing the AES key",
        "vi": "Đoán khóa AES"
      },
      {
        "en": "Nothing can be done",
        "vi": "Không thể làm gì"
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
        "en": "Cloud mailbox access, sign-ins, sharing and admin actions (BEC/account compromise)",
        "vi": "Truy cập hộp thư đám mây, đăng nhập, chia sẻ và thao tác admin (BEC/chiếm tài khoản)"
      },
      {
        "en": "BIOS firmware",
        "vi": "Firmware BIOS"
      },
      {
        "en": "Cable wiring",
        "vi": "Đi dây cáp"
      },
      {
        "en": "GPU temperature",
        "vi": "Nhiệt độ GPU"
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
        "en": "Normal CSS styling",
        "vi": "Định kiểu CSS bình thường"
      },
      {
        "en": "A search engine result",
        "vi": "Một kết quả công cụ tìm kiếm"
      },
      {
        "en": "A DNS record",
        "vi": "Một bản ghi DNS"
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
        "en": "Perfect security",
        "vi": "Bảo mật hoàn hảo"
      },
      {
        "en": "A DNS cache hit",
        "vi": "Một lần trúng cache DNS"
      },
      {
        "en": "Normal NTP",
        "vi": "NTP bình thường"
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
        "vi": "Promiscuous (hoặc monitor)"
      },
      {
        "en": "Half-duplex mode",
        "vi": "Half-duplex"
      },
      {
        "en": "Recovery mode",
        "vi": "Recovery"
      },
      {
        "en": "Safe mode",
        "vi": "Safe mode"
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
        "en": "At capture time, discarding non-matching packets before they are saved",
        "vi": "Lúc bắt gói, loại bỏ gói không khớp trước khi lưu"
      },
      {
        "en": "Only after the capture is finished",
        "vi": "Chỉ sau khi bắt gói xong"
      },
      {
        "en": "By the destination server",
        "vi": "Bởi máy chủ đích"
      },
      {
        "en": "By the DNS resolver",
        "vi": "Bởi resolver DNS"
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
        "vi": "Tại biên mạng / điểm thắt cổ chai egress ra internet"
      },
      {
        "en": "On a random user's laptop",
        "vi": "Trên laptop của một người dùng bất kỳ"
      },
      {
        "en": "On the printer",
        "vi": "Trên máy in"
      },
      {
        "en": "On an isolated test VLAN",
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
        "vi": "Băm (hash) file lúc thu thập và lưu hash an toàn"
      },
      {
        "en": "Compress the file",
        "vi": "Nén file"
      },
      {
        "en": "Rename the file with the date",
        "vi": "Đổi tên file kèm ngày"
      },
      {
        "en": "Open it many times in Wireshark",
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
        "en": "A new process being created (with command line if auditing is enabled)",
        "vi": "Một tiến trình mới được tạo (kèm dòng lệnh nếu bật audit)"
      },
      {
        "en": "A user logon",
        "vi": "Một lần đăng nhập của người dùng"
      },
      {
        "en": "A cleared audit log",
        "vi": "Một lần xóa nhật ký audit"
      },
      {
        "en": "A new service install",
        "vi": "Một lần cài service mới"
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
        "en": "Rich process, network-connection, file and DNS-query telemetry with hashes",
        "vi": "Telemetry phong phú về tiến trình, kết nối mạng, file và truy vấn DNS kèm hash"
      },
      {
        "en": "The desktop wallpaper",
        "vi": "Hình nền desktop"
      },
      {
        "en": "BIOS settings",
        "vi": "Cài đặt BIOS"
      },
      {
        "en": "Monitor brightness",
        "vi": "Độ sáng màn hình"
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
        "en": "NAT/translation logs and DHCP lease logs for the time window",
        "vi": "Log NAT/translation và log lease DHCP trong khung thời gian đó"
      },
      {
        "en": "The printer queue",
        "vi": "Hàng đợi máy in"
      },
      {
        "en": "The screensaver log",
        "vi": "Log screensaver"
      },
      {
        "en": "The BIOS log",
        "vi": "Log BIOS"
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
        "en": "Proxy logs (if the proxy terminates/inspects TLS or logs the CONNECT/host)",
        "vi": "Log proxy (nếu proxy kết thúc/kiểm tra TLS hoặc ghi CONNECT/host)"
      },
      {
        "en": "DHCP logs",
        "vi": "Log DHCP"
      },
      {
        "en": "BIOS logs",
        "vi": "Log BIOS"
      },
      {
        "en": "Printer logs",
        "vi": "Log máy in"
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
        "en": "Enables cross-source correlation and protects logs from local tampering",
        "vi": "Cho phép đối chiếu chéo nhiều nguồn và bảo vệ log khỏi can thiệp cục bộ"
      },
      {
        "en": "Makes logs unreadable",
        "vi": "Làm log không đọc được"
      },
      {
        "en": "Deletes old evidence faster",
        "vi": "Xóa bằng chứng cũ nhanh hơn"
      },
      {
        "en": "Encrypts the network",
        "vi": "Mã hóa mạng"
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
        "en": "Which user/account connected remotely, from which source IP, and when",
        "vi": "Tài khoản/người dùng nào kết nối từ xa, từ IP nguồn nào, khi nào"
      },
      {
        "en": "The CPU temperature of the server",
        "vi": "Nhiệt độ CPU của server"
      },
      {
        "en": "The colour of the dashboard",
        "vi": "Màu của dashboard"
      },
      {
        "en": "The printer toner level",
        "vi": "Mức mực máy in"
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
        "en": "Open relay — abusable for spam and spoofing",
        "vi": "Open relay — có thể bị lạm dụng để spam và giả mạo"
      },
      {
        "en": "Properly secured server",
        "vi": "Máy chủ được bảo mật đúng"
      },
      {
        "en": "DNS resolver",
        "vi": "Một resolver DNS"
      },
      {
        "en": "Web proxy",
        "vi": "Một web proxy"
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
        "en": "Some endpoint traffic bypasses the corporate gateway/inspection",
        "vi": "Một phần lưu lượng endpoint lách qua gateway/kiểm tra của doanh nghiệp"
      },
      {
        "en": "It encrypts nothing",
        "vi": "Nó không mã hóa gì"
      },
      {
        "en": "It blocks all internet",
        "vi": "Nó chặn toàn bộ internet"
      },
      {
        "en": "It disables the NIC",
        "vi": "Nó vô hiệu hóa NIC"
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
        "en": "These services are prime targets for brute force and exploits and should not be internet-exposed",
        "vi": "Các dịch vụ này là mục tiêu hàng đầu cho brute force và khai thác, không nên phơi ra internet"
      },
      {
        "en": "They make the network faster",
        "vi": "Chúng làm mạng nhanh hơn"
      },
      {
        "en": "They are encrypted by default and safe",
        "vi": "Chúng mã hóa mặc định và an toàn"
      },
      {
        "en": "They are required for DNS",
        "vi": "Chúng cần cho DNS"
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
        "en": "A possible pivot/bridge set up by an attacker or a routing misconfiguration",
        "vi": "Một pivot/cầu nối có thể do kẻ tấn công dựng, hoặc cấu hình định tuyến sai"
      },
      {
        "en": "Normal DNS caching",
        "vi": "Cache DNS bình thường"
      },
      {
        "en": "A successful backup",
        "vi": "Một bản sao lưu thành công"
      },
      {
        "en": "A screensaver timeout",
        "vi": "Hết giờ screensaver"
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
        "en": "Normal certificate renewal",
        "vi": "Gia hạn chứng chỉ bình thường"
      },
      {
        "en": "A DNS lookup",
        "vi": "Một tra cứu DNS"
      },
      {
        "en": "An ARP request",
        "vi": "Một yêu cầu ARP"
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
        "en": "Inspecting the actual payload/protocol structure rather than trusting the port",
        "vi": "Kiểm tra payload/cấu trúc giao thức thực tế thay vì tin vào cổng"
      },
      {
        "en": "Checking only the destination port number",
        "vi": "Chỉ kiểm tra số cổng đích"
      },
      {
        "en": "Reading the file name",
        "vi": "Đọc tên file"
      },
      {
        "en": "Counting the packets",
        "vi": "Đếm số gói"
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
        "en": "Exploitation such as cache poisoning or triggering a resolver vulnerability",
        "vi": "Khai thác như cache poisoning hoặc kích hoạt một lỗ hổng của resolver"
      },
      {
        "en": "Normal browsing",
        "vi": "Duyệt web bình thường"
      },
      {
        "en": "A printer job",
        "vi": "Một tác vụ in"
      },
      {
        "en": "Routine NTP",
        "vi": "NTP định kỳ"
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
        "en": "Normal ping diagnostics",
        "vi": "Ping chẩn đoán bình thường"
      },
      {
        "en": "A DNS zone transfer",
        "vi": "Một zone transfer DNS"
      },
      {
        "en": "A TCP handshake",
        "vi": "Một bắt tay TCP"
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
        "en": "Clustering of inter-arrival times around a central interval despite randomisation",
        "vi": "Sự phân cụm thời gian giữa các gói quanh một khoảng trung tâm dù đã ngẫu nhiên hóa"
      },
      {
        "en": "The exact same byte count every packet",
        "vi": "Số byte giống hệt nhau mỗi gói"
      },
      {
        "en": "The destination always being a CDN",
        "vi": "Đích luôn là một CDN"
      },
      {
        "en": "The source port being 80",
        "vi": "Cổng nguồn là 80"
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
        "en": "A potential persistent C2 / beaconing channel worth investigating",
        "vi": "Một kênh C2/beaconing bền bỉ tiềm năng đáng điều tra"
      },
      {
        "en": "Definitely benign",
        "vi": "Chắc chắn lành tính"
      },
      {
        "en": "A DNS root query",
        "vi": "Một truy vấn DNS root"
      },
      {
        "en": "A broadcast storm",
        "vi": "Một bão broadcast"
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
        "en": "Such machine-like regularity is uncharacteristic of human activity",
        "vi": "Sự đều đặn như máy móc đó không giống hoạt động của con người"
      },
      {
        "en": "60 seconds is a reserved C2 interval",
        "vi": "60 giây là khoảng C2 dành riêng"
      },
      {
        "en": "It uses too much bandwidth",
        "vi": "Nó dùng quá nhiều băng thông"
      },
      {
        "en": "It always means ransomware",
        "vi": "Nó luôn nghĩa là ransomware"
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
        "en": "Compression always has low entropy",
        "vi": "Nén luôn có entropy thấp"
      },
      {
        "en": "Encryption always has low entropy",
        "vi": "Mã hóa luôn có entropy thấp"
      },
      {
        "en": "Entropy cannot be measured",
        "vi": "Không thể đo entropy"
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
        "en": "Weak obfuscation that is trivially reversible (ROR 3)",
        "vi": "Làm rối yếu, đảo ngược dễ dàng (ROR 3)"
      },
      {
        "en": "Strong AES encryption",
        "vi": "Mã hóa AES mạnh"
      },
      {
        "en": "A secure hash",
        "vi": "Một hàm băm an toàn"
      },
      {
        "en": "Lossless compression",
        "vi": "Nén không mất dữ liệu"
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
        "en": "How it negotiates TLS (cipher list, extensions, order) — a hash of the ClientHello",
        "vi": "Cách nó đàm phán TLS (danh sách cipher, extension, thứ tự) — một hash của ClientHello"
      },
      {
        "en": "The plaintext password it sends",
        "vi": "Mật khẩu plaintext nó gửi"
      },
      {
        "en": "Its MAC address",
        "vi": "Địa chỉ MAC của nó"
      },
      {
        "en": "The file it downloads",
        "vi": "File nó tải về"
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
        "en": "Using a permitted domain in the TLS SNI while the real host header points to the C2 behind the same CDN",
        "vi": "Dùng một domain được phép trong SNI của TLS trong khi host header thực trỏ tới C2 sau cùng CDN"
      },
      {
        "en": "Encrypting the disk",
        "vi": "Mã hóa đĩa"
      },
      {
        "en": "Disabling DNS",
        "vi": "Tắt DNS"
      },
      {
        "en": "Sending data over ICMP",
        "vi": "Gửi dữ liệu qua ICMP"
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
        "en": "The traffic blends with normally-allowed, reputable destinations",
        "vi": "Lưu lượng hòa lẫn với các đích uy tín thường được cho phép"
      },
      {
        "en": "It cannot be encrypted",
        "vi": "Nó không thể mã hóa"
      },
      {
        "en": "It always uses port 6667",
        "vi": "Nó luôn dùng cổng 6667"
      },
      {
        "en": "It disables logging",
        "vi": "Nó tắt logging"
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
        "en": "HTTP-based C2 (agent checking in and returning task output)",
        "vi": "C2 dựa trên HTTP (agent điểm danh và trả về kết quả tác vụ)"
      },
      {
        "en": "A streaming video",
        "vi": "Một luồng video"
      },
      {
        "en": "A DNS query",
        "vi": "Một truy vấn DNS"
      },
      {
        "en": "An ARP announcement",
        "vi": "Một thông báo ARP"
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
        "en": "Known default malleable-C2 profile artefacts (URIs, headers, JA3, named pipes)",
        "vi": "Các artefact của profile malleable-C2 mặc định đã biết (URI, header, JA3, named pipe)"
      },
      {
        "en": "Its inability to use TLS",
        "vi": "Việc nó không thể dùng TLS"
      },
      {
        "en": "Always using port 23",
        "vi": "Luôn dùng cổng 23"
      },
      {
        "en": "Sending traffic only over ICMP",
        "vi": "Chỉ gửi lưu lượng qua ICMP"
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
        "en": "Subdomain labels and resource records (e.g. TXT) of attacker-controlled domains",
        "vi": "Nhãn subdomain và bản ghi tài nguyên (vd TXT) của domain do kẻ tấn công kiểm soát"
      },
      {
        "en": "The Ethernet preamble",
        "vi": "Phần preamble Ethernet"
      },
      {
        "en": "The TCP checksum",
        "vi": "Checksum TCP"
      },
      {
        "en": "The MAC OUI",
        "vi": "OUI của MAC"
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
        "en": "Collecting and compressing/encrypting data into an archive on an internal host first",
        "vi": "Thu thập rồi nén/mã hóa dữ liệu thành một archive trên một host nội bộ trước"
      },
      {
        "en": "Rebooting all servers",
        "vi": "Khởi động lại mọi server"
      },
      {
        "en": "Disabling DNS",
        "vi": "Tắt DNS"
      },
      {
        "en": "Printing the data",
        "vi": "In dữ liệu ra"
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
        "en": "A normal software update",
        "vi": "Một bản cập nhật phần mềm bình thường"
      },
      {
        "en": "Routine DNS traffic",
        "vi": "Lưu lượng DNS định kỳ"
      },
      {
        "en": "An ARP scan",
        "vi": "Một lần quét ARP"
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
        "en": "Stay under volume/rate thresholds and blend with normal traffic over time",
        "vi": "Nằm dưới ngưỡng lưu lượng/tốc độ và hòa lẫn với lưu lượng bình thường theo thời gian"
      },
      {
        "en": "Transfer everything in one huge burst",
        "vi": "Truyền mọi thứ trong một đợt khổng lồ"
      },
      {
        "en": "Use only broadcast packets",
        "vi": "Chỉ dùng gói broadcast"
      },
      {
        "en": "Disable encryption",
        "vi": "Tắt mã hóa"
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
        "en": "A high volume of queries with long, random-looking subdomain labels to one domain",
        "vi": "Lượng lớn truy vấn với nhãn subdomain dài, trông ngẫu nhiên, tới một domain"
      },
      {
        "en": "A single A-record lookup for a known site",
        "vi": "Một lần tra A-record cho một site đã biết"
      },
      {
        "en": "A normal MX lookup",
        "vi": "Một tra MX bình thường"
      },
      {
        "en": "An NTP sync",
        "vi": "Một đồng bộ NTP"
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
        "en": "Normal clients download more than they upload; a reversed ratio is anomalous",
        "vi": "Client bình thường tải xuống nhiều hơn tải lên; tỉ lệ đảo ngược là bất thường"
      },
      {
        "en": "Ratios are random and meaningless",
        "vi": "Tỉ lệ là ngẫu nhiên và vô nghĩa"
      },
      {
        "en": "Upload bytes are never logged",
        "vi": "Byte tải lên không bao giờ được ghi log"
      },
      {
        "en": "Download always equals upload",
        "vi": "Tải xuống luôn bằng tải lên"
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
        "en": "A successful login",
        "vi": "Một lần đăng nhập thành công"
      },
      {
        "en": "Normal browsing",
        "vi": "Duyệt web bình thường"
      },
      {
        "en": "A DNS zone transfer",
        "vi": "Một zone transfer DNS"
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
        "en": "A likely web shell upload (post-exploitation foothold)",
        "vi": "Khả năng upload web shell (chỗ đứng sau khai thác)"
      },
      {
        "en": "A routine cache flush",
        "vi": "Một lần xóa cache định kỳ"
      },
      {
        "en": "A normal image upload",
        "vi": "Một lần upload ảnh bình thường"
      },
      {
        "en": "A DNS update",
        "vi": "Một cập nhật DNS"
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
        "en": "Automated vulnerability scanning/attack tooling (often pre-attack reconnaissance)",
        "vi": "Công cụ quét/tấn công lỗ hổng tự động (thường là trinh sát tiền tấn công)"
      },
      {
        "en": "A legitimate browser",
        "vi": "Một trình duyệt hợp lệ"
      },
      {
        "en": "A search-engine crawler",
        "vi": "Một crawler công cụ tìm kiếm"
      },
      {
        "en": "A DNS server",
        "vi": "Một máy chủ DNS"
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
        "en": "FIN, PSH, URG set; closed ports reply RST, open ports stay silent",
        "vi": "Bật FIN, PSH, URG; cổng đóng trả RST, cổng mở im lặng"
      },
      {
        "en": "Only SYN; closed ports reply SYN-ACK",
        "vi": "Chỉ SYN; cổng đóng trả SYN-ACK"
      },
      {
        "en": "Only ACK; open ports reply FIN",
        "vi": "Chỉ ACK; cổng mở trả FIN"
      },
      {
        "en": "No flags; all ports reply ICMP",
        "vi": "Không cờ nào; mọi cổng trả ICMP"
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
        "en": "Connect scans complete the handshake and are more likely to be logged by applications",
        "vi": "Quét connect hoàn tất bắt tay nên dễ bị ứng dụng ghi log hơn"
      },
      {
        "en": "SYN scans always complete the handshake",
        "vi": "Quét SYN luôn hoàn tất bắt tay"
      },
      {
        "en": "Connect scans never touch the target",
        "vi": "Quét connect không bao giờ chạm mục tiêu"
      },
      {
        "en": "They are identical",
        "vi": "Chúng giống hệt nhau"
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
        "en": "Normal email",
        "vi": "Email bình thường"
      },
      {
        "en": "A TLS handshake",
        "vi": "Một bắt tay TLS"
      },
      {
        "en": "A DNS zone transfer",
        "vi": "Một zone transfer DNS"
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
        "en": "Internal Active Directory reconnaissance (e.g. enumerating users/groups/computers)",
        "vi": "Trinh sát Active Directory nội bộ (vd liệt kê user/nhóm/máy tính)"
      },
      {
        "en": "A printer test",
        "vi": "Một lần thử máy in"
      },
      {
        "en": "Normal DNS resolution",
        "vi": "Phân giải DNS bình thường"
      },
      {
        "en": "NTP synchronisation",
        "vi": "Đồng bộ NTP"
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
        "en": "Authenticating with a stolen NTLM hash without ever knowing the plaintext password",
        "vi": "Xác thực bằng một NTLM hash bị trộm mà không cần biết mật khẩu dạng rõ"
      },
      {
        "en": "Cracking every password first",
        "vi": "Bẻ mọi mật khẩu trước"
      },
      {
        "en": "Disabling the firewall",
        "vi": "Vô hiệu hóa firewall"
      },
      {
        "en": "Flooding the network with ARP",
        "vi": "Làm ngập mạng bằng ARP"
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
        "en": "Kerberoasting (harvesting tickets to crack service-account passwords offline)",
        "vi": "Kerberoasting (thu thập ticket để bẻ mật khẩu tài khoản dịch vụ offline)"
      },
      {
        "en": "Normal user logon",
        "vi": "Đăng nhập người dùng bình thường"
      },
      {
        "en": "A DNS lookup",
        "vi": "Một tra cứu DNS"
      },
      {
        "en": "A backup job",
        "vi": "Một tác vụ sao lưu"
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
        "en": "A DNS resolver",
        "vi": "Một resolver DNS"
      },
      {
        "en": "A web browser",
        "vi": "Một trình duyệt web"
      },
      {
        "en": "A screensaver",
        "vi": "Một screensaver"
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
        "vi": "Đánh dấu các lần đăng nhập đạt được đặc quyền quản trị/nhạy cảm"
      },
      {
        "en": "Means the disk is full",
        "vi": "Nghĩa là đĩa đầy"
      },
      {
        "en": "Indicates a printer error",
        "vi": "Cho biết lỗi máy in"
      },
      {
        "en": "Shows a DNS query",
        "vi": "Hiển thị một truy vấn DNS"
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
        "en": "Obfuscation to hide strings/URLs from signatures and casual review",
        "vi": "Làm rối để giấu chuỗi/URL khỏi signature và soi sơ sài"
      },
      {
        "en": "Strong encryption",
        "vi": "Mã hóa mạnh"
      },
      {
        "en": "Compression",
        "vi": "Nén"
      },
      {
        "en": "A digital signature",
        "vi": "Một chữ ký số"
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
        "en": "Make the signature more specific (context, length, destination) and whitelist known-good",
        "vi": "Làm signature cụ thể hơn (bối cảnh, độ dài, đích) và whitelist known-good"
      },
      {
        "en": "Delete the IDS",
        "vi": "Xóa IDS"
      },
      {
        "en": "Alert on everything instead",
        "vi": "Cảnh báo mọi thứ thay vào đó"
      },
      {
        "en": "Ignore HTTP entirely",
        "vi": "Bỏ qua hoàn toàn HTTP"
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
        "en": "Knowing what is normal lets you distinguish genuine anomalies from routine behaviour",
        "vi": "Biết cái gì là bình thường giúp phân biệt bất thường thật với hành vi định kỳ"
      },
      {
        "en": "Baselines encrypt the traffic",
        "vi": "Baseline mã hóa lưu lượng"
      },
      {
        "en": "They delete false positives automatically",
        "vi": "Chúng tự xóa false positive"
      },
      {
        "en": "They replace the IDS",
        "vi": "Chúng thay thế IDS"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Without a baseline of normal hosts, ports, volumes and destinations, you cannot reliably tell anomalous from benign, so alerts are hard to triage. Baselining underpins anomaly detection and effective false-positive reduction. It does not encrypt or replace detection tooling.",
      "vi": "Không có đường nền về host, cổng, lưu lượng và đích bình thường, bạn khó phân biệt bất thường với lành tính, nên khó triage cảnh báo. Baseline làm nền cho phát hiện bất thường và giảm false positive hiệu quả. Nó không mã hóa hay thay thế công cụ phát hiện."
    }
  }

);
