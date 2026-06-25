/* ===================================================================
   CPIA Question Bank  —  Appendix A : Soft Skills & Incident Handling
   76 question(s). To add: append more objects to push().
   Schema: app, sec (index.html anchor), secLabel{en,vi}, q{en,vi},
           opts[4]{en,vi}, correct (0-3), exp{en,vi}, note{en,vi}? (optional)
   =================================================================== */
(window.CPIA_BANK = window.CPIA_BANK || []).push(

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "During live incident response on a compromised Windows host, which action carries the HIGHEST risk of corrupting evidence?",
      "vi": "Khi đang xử lý sự cố trực tiếp trên một máy Windows bị xâm nhập, hành động nào có RỦI RO CAO NHẤT làm hỏng bằng chứng?"
    },
    "opts": [
      {
        "en": "Photographing the screen before touching the keyboard",
        "vi": "Chụp ảnh màn hình trước khi chạm bàn phím"
      },
      {
        "en": "Rebooting the machine to \"clean\" it before imaging",
        "vi": "Khởi động lại máy để \"làm sạch\" trước khi tạo image"
      },
      {
        "en": "Documenting running processes via a trusted tool",
        "vi": "Ghi lại tiến trình đang chạy bằng công cụ tin cậy"
      },
      {
        "en": "Recording the system time and timezone",
        "vi": "Ghi lại thời gian và múi giờ hệ thống"
      }
    ],
    "correct": 1,
    "exp": {
      "en": "Rebooting destroys volatile data (RAM, running processes, network sockets, ARP cache) and may trigger anti-forensic or wiper logic. Order of volatility says collect the most volatile evidence first; never reboot before acquisition.",
      "vi": "Khởi động lại sẽ xóa dữ liệu volatile (RAM, tiến trình, socket mạng, ARP cache) và có thể kích hoạt logic anti-forensic/wiper. Theo \"thứ tự bay hơi\" (order of volatility), phải thu thập bằng chứng dễ mất nhất trước; tuyệt đối không reboot trước khi acquisition."
    },
    "note": {
      "en": "Pull RAM and volatile data BEFORE shutting down or imaging disk.",
      "vi": "Luôn lấy RAM và dữ liệu volatile TRƯỚC khi tắt máy hay tạo image đĩa."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "You receive a suspicious executable sample from a client. The safest way to handle it during the engagement is to:",
      "vi": "Bạn nhận một file thực thi đáng ngờ từ khách hàng. Cách xử lý an toàn nhất trong quá trình thực hiện là:"
    },
    "opts": [
      {
        "en": "Double-click it on your analysis laptop to see what happens",
        "vi": "Nhấp đúp trên laptop phân tích để xem điều gì xảy ra"
      },
      {
        "en": "Store and transfer it password-protected/zipped, analyse only in an isolated sandbox",
        "vi": "Lưu và truyền dưới dạng nén có mật khẩu, chỉ phân tích trong sandbox cách ly"
      },
      {
        "en": "Email it to a colleague for a second opinion",
        "vi": "Gửi email cho đồng nghiệp để xin ý kiến"
      },
      {
        "en": "Rename the extension to .txt so it cannot run",
        "vi": "Đổi đuôi file thành .txt để nó không chạy được"
      }
    ],
    "correct": 1,
    "exp": {
      "en": "Malware must be contained: store/transfer it inside a password-protected archive (commonly password \"infected\") to avoid accidental execution and AV deletion, and detonate only in an isolated VM/sandbox with no production access.",
      "vi": "Mã độc phải được cô lập: lưu/truyền trong archive có mật khẩu (thường dùng mật khẩu \"infected\") để tránh chạy nhầm và bị AV xóa, và chỉ kích nổ trong VM/sandbox cách ly không kết nối môi trường production."
    },
    "note": {
      "en": "Renaming the extension does NOT make a file safe — it can still be executed.",
      "vi": "Đổi đuôi KHÔNG làm file an toàn — nó vẫn có thể bị thực thi."
    }
  },

  {
    "app": "A",
    "sec": "a2",
    "secLabel": {
      "en": "A2 — Incident Chronology",
      "vi": "A2 — Dòng thời gian sự cố"
    },
    "q": {
      "en": "Two log sources show the same event 5 hours apart. The MOST likely benign explanation is:",
      "vi": "Hai nguồn log ghi cùng một sự kiện lệch nhau 5 giờ. Lý do lành tính khả dĩ NHẤT là:"
    },
    "opts": [
      {
        "en": "The attacker forged one of the timestamps",
        "vi": "Kẻ tấn công đã giả mạo một trong các mốc thời gian"
      },
      {
        "en": "One source logs in UTC and the other in local time",
        "vi": "Một nguồn ghi theo UTC, nguồn kia theo giờ địa phương"
      },
      {
        "en": "One log file is corrupted",
        "vi": "Một file log bị hỏng"
      },
      {
        "en": "The events are unrelated",
        "vi": "Hai sự kiện không liên quan"
      }
    ],
    "correct": 1,
    "exp": {
      "en": "Time-zone differences (UTC vs local) are the most common cause of timeline skew. Before alleging tampering, normalise every source to a single timezone (usually UTC) and account for DST.",
      "vi": "Chênh lệch múi giờ (UTC vs giờ địa phương) là nguyên nhân lệch timeline phổ biến nhất. Trước khi kết luận bị giả mạo, hãy chuẩn hóa mọi nguồn về một múi giờ chung (thường là UTC) và tính cả giờ tiết kiệm ánh sáng (DST)."
    },
    "note": {
      "en": "Always normalise timestamps to one timezone before correlating logs.",
      "vi": "Luôn quy mọi mốc thời gian về một múi giờ trước khi đối chiếu log."
    }
  },

  {
    "app": "A",
    "sec": "a3",
    "secLabel": {
      "en": "A3 — Law & Compliance",
      "vi": "A3 — Pháp lý & Tuân thủ"
    },
    "q": {
      "en": "\"Chain of custody\" documentation primarily exists to:",
      "vi": "Tài liệu \"chuỗi hành trình bằng chứng\" (chain of custody) tồn tại chủ yếu để:"
    },
    "opts": [
      {
        "en": "Speed up the analysis",
        "vi": "Tăng tốc quá trình phân tích"
      },
      {
        "en": "Prove evidence was not altered and track who handled it, when",
        "vi": "Chứng minh bằng chứng không bị thay đổi và ghi lại ai xử lý, khi nào"
      },
      {
        "en": "Reduce the cost of the engagement",
        "vi": "Giảm chi phí thực hiện"
      },
      {
        "en": "Satisfy the antivirus vendor",
        "vi": "Thỏa mãn yêu cầu của nhà cung cấp antivirus"
      }
    ],
    "correct": 1,
    "exp": {
      "en": "Chain of custody records every person who handled an exhibit, with times and integrity hashes, so evidence is admissible and demonstrably unaltered in court. Breaks in the chain can render evidence inadmissible.",
      "vi": "Chain of custody ghi lại mọi người đã tiếp xúc tang vật, kèm thời gian và hash toàn vẹn, để bằng chứng được chấp nhận và chứng minh không bị thay đổi tại tòa. Đứt gãy chuỗi có thể khiến bằng chứng bị loại."
    },
    "note": {
      "en": "Hash the image at acquisition and re-verify to prove integrity.",
      "vi": "Băm (hash) image lúc thu thập và kiểm tra lại để chứng minh tính toàn vẹn."
    }
  },

  {
    "app": "A",
    "sec": "a3",
    "secLabel": {
      "en": "A3 — Law & Compliance",
      "vi": "A3 — Pháp lý & Tuân thủ"
    },
    "q": {
      "en": "A breach exposes cardholder data. Which regulatory regime is MOST directly relevant?",
      "vi": "Một vụ rò rỉ làm lộ dữ liệu thẻ thanh toán. Khung quy định nào liên quan TRỰC TIẾP nhất?"
    },
    "opts": [
      {
        "en": "DMCA",
        "vi": "DMCA"
      },
      {
        "en": "PCI DSS",
        "vi": "PCI DSS"
      },
      {
        "en": "802.11i",
        "vi": "802.11i"
      },
      {
        "en": "GPG-13 only",
        "vi": "Chỉ GPG-13"
      }
    ],
    "correct": 1,
    "exp": {
      "en": "PCI DSS governs the handling of payment card data and mandates breach notification/forensic obligations. DMCA concerns copyright/reverse engineering; 802.11i is Wi-Fi security.",
      "vi": "PCI DSS điều chỉnh việc xử lý dữ liệu thẻ thanh toán và bắt buộc nghĩa vụ thông báo/điều tra khi vi phạm. DMCA liên quan bản quyền/dịch ngược; 802.11i là bảo mật Wi-Fi."
    }
  },

  {
    "app": "A",
    "sec": "a5",
    "secLabel": {
      "en": "A5 — Threat Assessment",
      "vi": "A5 — Đánh giá mối đe dọa"
    },
    "q": {
      "en": "In the Cyber Kill Chain, installing a backdoor for persistent access occurs at which stage?",
      "vi": "Trong Cyber Kill Chain, việc cài backdoor để duy trì truy cập lâu dài xảy ra ở giai đoạn nào?"
    },
    "opts": [
      {
        "en": "Reconnaissance",
        "vi": "Trinh sát (Reconnaissance)"
      },
      {
        "en": "Weaponization",
        "vi": "Vũ khí hóa (Weaponization)"
      },
      {
        "en": "Installation",
        "vi": "Cài đặt (Installation)"
      },
      {
        "en": "Actions on Objectives",
        "vi": "Hành động theo mục tiêu (Actions on Objectives)"
      }
    ],
    "correct": 2,
    "exp": {
      "en": "The Lockheed Martin Kill Chain order is Recon → Weaponization → Delivery → Exploitation → Installation → C2 → Actions on Objectives. Installing the backdoor/implant for persistence is the Installation stage.",
      "vi": "Thứ tự Kill Chain của Lockheed Martin: Recon → Weaponization → Delivery → Exploitation → Installation → C2 → Actions on Objectives. Cài backdoor/implant để duy trì là giai đoạn Installation."
    },
    "note": {
      "en": "Don't confuse Installation (persistence) with C2 (remote control channel).",
      "vi": "Đừng nhầm Installation (duy trì) với C2 (kênh điều khiển từ xa)."
    }
  },

  {
    "app": "A",
    "sec": "a5",
    "secLabel": {
      "en": "A5 — Threat Assessment",
      "vi": "A5 — Đánh giá mối đe dọa"
    },
    "q": {
      "en": "MITRE ATT&CK organises adversary behaviour primarily by:",
      "vi": "MITRE ATT&CK tổ chức hành vi kẻ tấn công chủ yếu theo:"
    },
    "opts": [
      {
        "en": "Tactics (the why) and Techniques (the how)",
        "vi": "Tactics (tại sao) và Techniques (cách thức)"
      },
      {
        "en": "Vendor product names",
        "vi": "Tên sản phẩm của nhà cung cấp"
      },
      {
        "en": "OSI layers",
        "vi": "Các tầng OSI"
      },
      {
        "en": "CVE severity scores",
        "vi": "Điểm nghiêm trọng CVE"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "ATT&CK is a matrix of Tactics (adversary goals such as Persistence, Lateral Movement) and the Techniques/sub-techniques used to achieve them — a behaviour-based taxonomy, unlike the linear Kill Chain.",
      "vi": "ATT&CK là ma trận gồm Tactics (mục tiêu của kẻ tấn công như Persistence, Lateral Movement) và các Techniques/sub-techniques để đạt mục tiêu đó — phân loại dựa trên hành vi, khác với Kill Chain tuyến tính."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "Which is a recognised PREPARATION activity that improves later incident response?",
      "vi": "Đâu là hoạt động CHUẨN BỊ giúp cải thiện việc xử lý sự cố về sau?"
    },
    "opts": [
      {
        "en": "Disabling all logging to save space",
        "vi": "Tắt mọi logging để tiết kiệm dung lượng"
      },
      {
        "en": "Maintaining asset inventories, baselines and an IR plan in advance",
        "vi": "Duy trì sẵn danh mục tài sản, baseline và kế hoạch IR"
      },
      {
        "en": "Waiting until a breach to define roles",
        "vi": "Đợi đến khi bị xâm nhập mới phân vai"
      },
      {
        "en": "Sharing admin passwords widely",
        "vi": "Chia sẻ rộng rãi mật khẩu admin"
      }
    ],
    "correct": 1,
    "exp": {
      "en": "Preparation — inventories, known-good baselines, log retention, defined roles and a tested IR plan — is what makes detection and analysis fast and defensible. Defining roles only after a breach wastes critical early time.",
      "vi": "Chuẩn bị — danh mục tài sản, baseline known-good, lưu trữ log, phân vai rõ ràng và kế hoạch IR đã kiểm thử — là thứ giúp phát hiện và phân tích nhanh, có thể bảo vệ. Đợi xảy ra sự cố mới phân vai sẽ lãng phí thời gian sớm quý giá."
    }
  },

  {
    "app": "A",
    "sec": "a4",
    "secLabel": {
      "en": "A4 — Record Keeping & Interim Reporting",
      "vi": "A4 — Ghi chép & Báo cáo tạm"
    },
    "q": {
      "en": "Why are contemporaneous, structured notes important during an engagement?",
      "vi": "Tại sao việc ghi chép đồng thời, có cấu trúc lại quan trọng trong quá trình thực hiện?"
    },
    "opts": [
      {
        "en": "They are only for billing",
        "vi": "Chỉ để tính tiền"
      },
      {
        "en": "They support reproducibility, accuracy and stand up to legal scrutiny",
        "vi": "Hỗ trợ tái lập, độ chính xác và chịu được soi xét pháp lý"
      },
      {
        "en": "They replace the need for evidence",
        "vi": "Thay thế nhu cầu bằng chứng"
      },
      {
        "en": "They speed up malware execution",
        "vi": "Tăng tốc thực thi mã độc"
      }
    ],
    "correct": 1,
    "exp": {
      "en": "Accurate, timestamped records of every action taken let another analyst reproduce findings and let the work withstand legal challenge. Notes complement — never replace — the underlying evidence and chain of custody.",
      "vi": "Bản ghi chính xác, có dấu thời gian cho từng hành động giúp analyst khác tái lập kết quả và giúp công việc chịu được thách thức pháp lý. Ghi chép bổ trợ — không bao giờ thay thế — bằng chứng gốc và chain of custody."
    }
  },

  {
    "app": "A",
    "sec": "a3",
    "secLabel": {
      "en": "A3 — Law & Compliance",
      "vi": "A3 — Pháp lý & Tuân thủ"
    },
    "q": {
      "en": "A CERT (Computer Emergency Response Team) primarily provides:",
      "vi": "Một CERT (Đội ứng cứu khẩn cấp máy tính) chủ yếu cung cấp:"
    },
    "opts": [
      {
        "en": "Coordination, advisories and incident handling support within its constituency",
        "vi": "Điều phối, khuyến cáo và hỗ trợ xử lý sự cố trong phạm vi của mình"
      },
      {
        "en": "Legal prosecution powers",
        "vi": "Quyền truy tố pháp lý"
      },
      {
        "en": "Antivirus licences",
        "vi": "Giấy phép antivirus"
      },
      {
        "en": "Internet bandwidth",
        "vi": "Băng thông internet"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "CERTs/CSIRTs coordinate incident response, publish advisories and support their constituency (national, sector or org). They do not have prosecution powers — that is law enforcement, which you engage separately when criminal activity is in scope.",
      "vi": "CERT/CSIRT điều phối ứng cứu sự cố, phát hành khuyến cáo và hỗ trợ phạm vi của mình (quốc gia, ngành hoặc tổ chức). Họ không có quyền truy tố — đó là cơ quan hành pháp, mà bạn liên hệ riêng khi có hành vi phạm tội."
    }
  },

  {
    "app": "A",
    "sec": "a5",
    "secLabel": {
      "en": "A5 — Threat Assessment",
      "vi": "A5 — Đánh giá mối đe dọa"
    },
    "q": {
      "en": "Attribution of an attack to a specific actor should be treated as:",
      "vi": "Việc quy kết một cuộc tấn công cho một tác nhân cụ thể nên được xem là:"
    },
    "opts": [
      {
        "en": "Certain once one IoC matches",
        "vi": "Chắc chắn ngay khi một IoC trùng khớp"
      },
      {
        "en": "A probabilistic judgement built from multiple corroborating indicators (TTPs, infrastructure)",
        "vi": "Một phán đoán xác suất dựng từ nhiều chỉ dấu củng cố lẫn nhau (TTP, hạ tầng)"
      },
      {
        "en": "Irrelevant to response",
        "vi": "Không liên quan đến xử lý"
      },
      {
        "en": "Based solely on source IP",
        "vi": "Chỉ dựa trên IP nguồn"
      }
    ],
    "correct": 1,
    "exp": {
      "en": "Attribution is rarely certain — source IPs are spoofable/proxied and tools are shared. Confidence is built from converging TTPs, infrastructure overlaps and targeting, weighed against false-flag possibilities. A single matching IoC is weak evidence.",
      "vi": "Attribution hiếm khi chắc chắn — IP nguồn có thể giả/đi qua proxy và công cụ thường dùng chung. Độ tin cậy được dựng từ TTP hội tụ, hạ tầng trùng lặp và mục tiêu, cân nhắc khả năng false-flag. Một IoC trùng đơn lẻ là bằng chứng yếu."
    }
  },

  {
    "app": "A",
    "sec": "a2",
    "secLabel": {
      "en": "A2 — Incident Chronology",
      "vi": "A2 — Dòng thời gian sự cố"
    },
    "q": {
      "en": "When building a master timeline (\"super timeline\"), the BEST practice is to:",
      "vi": "Khi dựng timeline tổng hợp (\"super timeline\"), thực hành TỐT NHẤT là:"
    },
    "opts": [
      {
        "en": "Normalise all sources to UTC and record the source of each event",
        "vi": "Chuẩn hóa mọi nguồn về UTC và ghi rõ nguồn của từng sự kiện"
      },
      {
        "en": "Use whatever local time each log shows",
        "vi": "Dùng giờ địa phương mà mỗi log hiển thị"
      },
      {
        "en": "Only keep events you find interesting",
        "vi": "Chỉ giữ những sự kiện bạn thấy thú vị"
      },
      {
        "en": "Ignore timestamps entirely",
        "vi": "Bỏ qua hoàn toàn mốc thời gian"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A defensible timeline normalises every artefact to one reference (UTC), preserves the originating source per event, and keeps all data so conclusions are reproducible. Mixing local times or cherry-picking events introduces error and bias.",
      "vi": "Một timeline có thể bảo vệ phải chuẩn hóa mọi artefact về một mốc tham chiếu (UTC), giữ nguồn gốc cho từng sự kiện và lưu toàn bộ dữ liệu để kết luận tái lập được. Trộn giờ địa phương hay chọn lọc sự kiện gây sai số và thiên lệch."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "A key LIMITATION of relying solely on system logs during analysis is:",
      "vi": "Một GIỚI HẠN quan trọng khi chỉ dựa vào log hệ thống khi phân tích là:"
    },
    "opts": [
      {
        "en": "Logs may be incomplete, rotated, disabled or tampered with by the attacker",
        "vi": "Log có thể không đầy đủ, bị xoay vòng, bị tắt hoặc bị kẻ tấn công can thiệp"
      },
      {
        "en": "Logs are always perfectly reliable",
        "vi": "Log luôn hoàn toàn đáng tin"
      },
      {
        "en": "Logs cannot be read by humans",
        "vi": "Con người không đọc được log"
      },
      {
        "en": "Logs replace all other evidence",
        "vi": "Log thay thế mọi bằng chứng khác"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Logs can be missing (short retention), not enabled, overwritten, or deliberately cleared/edited by an intruder (e.g. clearing Security event log = event 1102). Corroborate with other artefacts (memory, disk, network) rather than trusting logs alone.",
      "vi": "Log có thể thiếu (lưu giữ ngắn), không bật, bị ghi đè, hoặc bị kẻ xâm nhập cố tình xóa/sửa (vd xóa Security log = sự kiện 1102). Hãy đối chiếu với artefact khác (bộ nhớ, đĩa, mạng) thay vì chỉ tin log."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "In the SANS PICERL model, which phase immediately FOLLOWS Identification?",
      "vi": "Trong mô hình PICERL của SANS, giai đoạn nào NGAY SAU Identification (Nhận diện)?"
    },
    "opts": [
      {
        "en": "Containment",
        "vi": "Containment (Cô lập/Ngăn chặn)"
      },
      {
        "en": "Recovery",
        "vi": "Recovery (Khôi phục)"
      },
      {
        "en": "Preparation",
        "vi": "Preparation (Chuẩn bị)"
      },
      {
        "en": "Lessons Learned",
        "vi": "Lessons Learned (Rút kinh nghiệm)"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "PICERL order is Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned. Containing the incident (isolating affected systems) comes straight after identifying it, before eradication and recovery.",
      "vi": "Thứ tự PICERL là Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned. Cô lập sự cố (cách ly hệ thống bị ảnh hưởng) đến ngay sau khi nhận diện, trước eradication và recovery."
    },
    "note": {
      "en": "Memorise the PICERL order — questions often test the sequence.",
      "vi": "Học thuộc thứ tự PICERL — câu hỏi hay kiểm tra trình tự."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "Following the order of volatility, which evidence should be collected FIRST?",
      "vi": "Theo thứ tự bay hơi (order of volatility), bằng chứng nào nên được thu thập ĐẦU TIÊN?"
    },
    "opts": [
      {
        "en": "CPU registers, cache and RAM contents",
        "vi": "Thanh ghi CPU, cache và nội dung RAM"
      },
      {
        "en": "Archived backup tapes",
        "vi": "Băng sao lưu lưu trữ"
      },
      {
        "en": "Data on the hard disk",
        "vi": "Dữ liệu trên ổ cứng"
      },
      {
        "en": "Printed documents",
        "vi": "Tài liệu in ra"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Order of volatility: registers/cache → RAM and routing/ARP/process tables → temporary files → disk → remote logs → physical/archival media. The most ephemeral data (lost on power-off) is captured first.",
      "vi": "Thứ tự bay hơi: thanh ghi/cache → RAM và bảng định tuyến/ARP/tiến trình → file tạm → đĩa → log từ xa → phương tiện vật lý/lưu trữ. Dữ liệu dễ mất nhất (mất khi tắt nguồn) được lấy trước."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "During Containment, isolating a host by pulling its network cable rather than powering it off is preferred because it:",
      "vi": "Khi Containment, cô lập một host bằng cách rút cáp mạng thay vì tắt nguồn được ưu tiên vì nó:"
    },
    "opts": [
      {
        "en": "Stops attacker access while preserving volatile memory evidence",
        "vi": "Chặn truy cập của kẻ tấn công mà vẫn bảo toàn bằng chứng bộ nhớ volatile"
      },
      {
        "en": "Deletes the malware",
        "vi": "Xóa mã độc"
      },
      {
        "en": "Patches the vulnerability",
        "vi": "Vá lỗ hổng"
      },
      {
        "en": "Encrypts the disk",
        "vi": "Mã hóa đĩa"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Network isolation cuts C2/lateral movement but keeps the system running, so RAM, processes and sockets remain available for live acquisition. Powering off destroys volatile evidence and may trigger wiper logic.",
      "vi": "Cô lập mạng cắt C2/lateral movement nhưng giữ hệ thống chạy, nên RAM, tiến trình và socket vẫn còn để thu thập live. Tắt nguồn phá hủy bằng chứng volatile và có thể kích hoạt logic wiper."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "The PRIMARY goal of the Eradication phase is to:",
      "vi": "Mục tiêu CHÍNH của giai đoạn Eradication là:"
    },
    "opts": [
      {
        "en": "Remove the attacker's artefacts and root cause (malware, accounts, persistence) from the environment",
        "vi": "Loại bỏ artefact và nguyên nhân gốc của kẻ tấn công (mã độc, tài khoản, persistence) khỏi môi trường"
      },
      {
        "en": "Write the final report",
        "vi": "Viết báo cáo cuối"
      },
      {
        "en": "Collect RAM",
        "vi": "Thu thập RAM"
      },
      {
        "en": "Notify the press",
        "vi": "Thông báo cho báo chí"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Eradication removes the threat and its footholds — malware, web shells, rogue accounts, scheduled tasks and other persistence — and addresses the root cause so recovery does not simply re-introduce the compromise.",
      "vi": "Eradication loại bỏ mối đe dọa và các chỗ đứng của nó — mã độc, web shell, tài khoản giả, scheduled task và persistence khác — và xử lý nguyên nhân gốc để recovery không vô tình đưa lại sự xâm nhập."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "Why is the Lessons Learned phase important even after a successful recovery?",
      "vi": "Vì sao giai đoạn Lessons Learned quan trọng kể cả sau khi đã khôi phục thành công?"
    },
    "opts": [
      {
        "en": "It feeds improvements back into Preparation, closing gaps for next time",
        "vi": "Nó đưa các cải tiến trở lại Preparation, vá các lỗ hổng cho lần sau"
      },
      {
        "en": "It deletes the evidence",
        "vi": "Nó xóa bằng chứng"
      },
      {
        "en": "It is only for billing",
        "vi": "Chỉ để tính tiền"
      },
      {
        "en": "It restarts the attack",
        "vi": "Nó khởi động lại cuộc tấn công"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "IR is a cycle: a post-incident review identifies detection/response gaps, updates playbooks, controls and training, and improves Preparation — making the organisation more resilient to the next incident.",
      "vi": "IR là một vòng tuần hoàn: rà soát sau sự cố xác định lỗ hổng phát hiện/xử lý, cập nhật playbook, biện pháp kiểm soát và đào tạo, cải thiện Preparation — giúp tổ chức kiên cường hơn trước sự cố tiếp theo."
    }
  },

  {
    "app": "A",
    "sec": "a2",
    "secLabel": {
      "en": "A2 — Incident Chronology",
      "vi": "A2 — Dòng thời gian sự cố"
    },
    "q": {
      "en": "A Windows NTFS timestamp stored as a 64-bit FILETIME represents:",
      "vi": "Một mốc thời gian NTFS của Windows lưu dưới dạng FILETIME 64-bit biểu diễn:"
    },
    "opts": [
      {
        "en": "100-nanosecond intervals since 1 Jan 1601 (UTC)",
        "vi": "Các khoảng 100-nano-giây kể từ 1/1/1601 (UTC)"
      },
      {
        "en": "Seconds since 1 Jan 1970",
        "vi": "Số giây kể từ 1/1/1970"
      },
      {
        "en": "Days since 1 Jan 1900",
        "vi": "Số ngày kể từ 1/1/1900"
      },
      {
        "en": "Milliseconds since boot",
        "vi": "Mili-giây kể từ khi khởi động"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Windows FILETIME counts 100-ns intervals from 1601-01-01 UTC. Unix epoch (seconds since 1970) is different — mixing the two when interpreting artefacts is a common timeline error. Tools must use the correct epoch per artefact.",
      "vi": "FILETIME của Windows đếm các khoảng 100-ns từ 1601-01-01 UTC. Unix epoch (giây kể từ 1970) thì khác — lẫn lộn hai loại khi diễn giải artefact là lỗi timeline phổ biến. Công cụ phải dùng đúng epoch cho từng artefact."
    }
  },

  {
    "app": "A",
    "sec": "a2",
    "secLabel": {
      "en": "A2 — Incident Chronology",
      "vi": "A2 — Dòng thời gian sự cố"
    },
    "q": {
      "en": "On NTFS, the four MACB timestamps stand for:",
      "vi": "Trên NTFS, bốn mốc thời gian MACB là viết tắt của:"
    },
    "opts": [
      {
        "en": "Modified, Accessed, Changed (MFT), Born (created)",
        "vi": "Modified, Accessed, Changed (MFT), Born (created)"
      },
      {
        "en": "Made, Archived, Copied, Backed-up",
        "vi": "Made, Archived, Copied, Backed-up"
      },
      {
        "en": "Memory, Acquisition, Cache, Buffer",
        "vi": "Memory, Acquisition, Cache, Buffer"
      },
      {
        "en": "Master, Allocation, Cluster, Block",
        "vi": "Master, Allocation, Cluster, Block"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "MACB = Modified, Accessed, metadata-Changed (MFT entry change), Born/created. Each is held in both $STANDARD_INFORMATION and $FILE_NAME; comparing the two sets helps detect timestomping.",
      "vi": "MACB = Modified (sửa nội dung), Accessed (truy cập), Changed (thay đổi metadata bản ghi MFT), Born/created (tạo). Mỗi mốc có ở cả $STANDARD_INFORMATION và $FILE_NAME; so sánh hai bộ giúp phát hiện timestomping."
    },
    "note": {
      "en": "$FILE_NAME times are harder for malware to alter than $STANDARD_INFORMATION.",
      "vi": "Thời gian $FILE_NAME khó bị mã độc sửa hơn $STANDARD_INFORMATION."
    }
  },

  {
    "app": "A",
    "sec": "a3",
    "secLabel": {
      "en": "A3 — Law & Compliance",
      "vi": "A3 — Pháp lý & Tuân thủ"
    },
    "q": {
      "en": "Which is a core principle of the ACPO Good Practice Guide for digital evidence?",
      "vi": "Đâu là một nguyên tắc cốt lõi của ACPO Good Practice Guide cho bằng chứng số?"
    },
    "opts": [
      {
        "en": "No action taken should change data that may later be relied upon in court",
        "vi": "Không hành động nào được làm thay đổi dữ liệu có thể được dùng làm bằng chứng tại tòa"
      },
      {
        "en": "Always edit the original to speed analysis",
        "vi": "Luôn sửa bản gốc để phân tích nhanh hơn"
      },
      {
        "en": "Evidence integrity is optional",
        "vi": "Tính toàn vẹn bằng chứng là tùy chọn"
      },
      {
        "en": "No audit trail is needed",
        "vi": "Không cần audit trail"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "ACPO Principle 1: no action should alter original evidence. The other principles require competence when access is unavoidable, a full audit trail of processes, and overall responsibility resting with the lead investigator.",
      "vi": "Nguyên tắc 1 của ACPO: không hành động nào được làm thay đổi bằng chứng gốc. Các nguyên tắc khác yêu cầu người truy cập phải đủ năng lực khi bắt buộc phải truy cập, có audit trail đầy đủ cho mọi quy trình, và trách nhiệm tổng thể thuộc về điều tra viên chính."
    }
  },

  {
    "app": "A",
    "sec": "a3",
    "secLabel": {
      "en": "A3 — Law & Compliance",
      "vi": "A3 — Pháp lý & Tuân thủ"
    },
    "q": {
      "en": "The DMCA is most relevant to intrusion analysts in the context of:",
      "vi": "DMCA liên quan nhất tới analyst phân tích xâm nhập trong bối cảnh:"
    },
    "opts": [
      {
        "en": "Legal constraints around reverse engineering / circumventing protection",
        "vi": "Ràng buộc pháp lý quanh việc dịch ngược / vượt qua cơ chế bảo vệ"
      },
      {
        "en": "Wireless encryption",
        "vi": "Mã hóa không dây"
      },
      {
        "en": "Email routing",
        "vi": "Định tuyến email"
      },
      {
        "en": "Disk partitioning",
        "vi": "Phân vùng đĩa"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "The Digital Millennium Copyright Act restricts circumventing copyright-protection mechanisms, which can affect malware reverse engineering. Analysts must be aware of legal exemptions/authorisation before reversing protected code.",
      "vi": "Đạo luật DMCA hạn chế việc vượt qua cơ chế bảo vệ bản quyền, điều này có thể ảnh hưởng tới việc dịch ngược mã độc. Analyst phải nắm các miễn trừ pháp lý/ủy quyền trước khi dịch ngược mã được bảo vệ."
    }
  },

  {
    "app": "A",
    "sec": "a3",
    "secLabel": {
      "en": "A3 — Law & Compliance",
      "vi": "A3 — Pháp lý & Tuân thủ"
    },
    "q": {
      "en": "When an investigation uncovers evidence of serious criminal activity, the analyst should generally:",
      "vi": "Khi điều tra phát hiện bằng chứng hoạt động phạm tội nghiêm trọng, analyst nói chung nên:"
    },
    "opts": [
      {
        "en": "Follow the agreed escalation path and advise the client on engaging law enforcement, preserving evidence",
        "vi": "Theo quy trình leo thang đã thống nhất và tư vấn khách hàng về việc liên hệ cơ quan hành pháp, bảo toàn bằng chứng"
      },
      {
        "en": "Publicly post the findings",
        "vi": "Đăng công khai phát hiện"
      },
      {
        "en": "Delete the evidence",
        "vi": "Xóa bằng chứng"
      },
      {
        "en": "Confront the suspect directly",
        "vi": "Đối chất trực tiếp với nghi phạm"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Analysts preserve evidence and follow the engagement's agreed escalation/notification procedures, advising the client on law-enforcement involvement. Acting unilaterally (disclosure, confrontation, deletion) can breach contracts, tip off suspects and destroy admissibility.",
      "vi": "Analyst bảo toàn bằng chứng và tuân theo quy trình leo thang/thông báo đã thống nhất, tư vấn khách hàng về việc liên hệ cơ quan hành pháp. Hành động đơn phương (công bố, đối chất, xóa) có thể vi phạm hợp đồng, đánh động nghi phạm và hủy tính chấp nhận được của bằng chứng."
    }
  },

  {
    "app": "A",
    "sec": "a4",
    "secLabel": {
      "en": "A4 — Record Keeping & Interim Reporting",
      "vi": "A4 — Ghi chép & Báo cáo tạm"
    },
    "q": {
      "en": "An effective incident report should present findings:",
      "vi": "Một báo cáo sự cố hiệu quả nên trình bày phát hiện:"
    },
    "opts": [
      {
        "en": "With an executive summary for management plus detailed technical evidence for responders",
        "vi": "Có executive summary cho lãnh đạo cùng bằng chứng kỹ thuật chi tiết cho đội xử lý"
      },
      {
        "en": "Only as raw tool output",
        "vi": "Chỉ là output thô của công cụ"
      },
      {
        "en": "Without any conclusions",
        "vi": "Không có kết luận nào"
      },
      {
        "en": "As a single unlabelled wall of text",
        "vi": "Là một khối chữ không nhãn"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Reports serve mixed audiences: a concise executive summary (impact, risk, recommendations) for decision-makers, and a detailed technical section (timeline, IoCs, evidence) others can verify and reproduce. Structure and clarity make findings actionable and defensible.",
      "vi": "Báo cáo phục vụ nhiều đối tượng: executive summary ngắn gọn (tác động, rủi ro, khuyến nghị) cho người ra quyết định, và phần kỹ thuật chi tiết (timeline, IoC, bằng chứng) để người khác kiểm chứng và tái lập. Cấu trúc và sự rõ ràng làm phát hiện khả thi và có thể bảo vệ."
    }
  },

  {
    "app": "A",
    "sec": "a5",
    "secLabel": {
      "en": "A5 — Threat Assessment",
      "vi": "A5 — Đánh giá mối đe dọa"
    },
    "q": {
      "en": "In the Cyber Kill Chain, crafting a malicious document that pairs an exploit with a payload is which stage?",
      "vi": "Trong Cyber Kill Chain, việc chế tạo tài liệu độc hại ghép một exploit với payload là giai đoạn nào?"
    },
    "opts": [
      {
        "en": "Weaponization",
        "vi": "Weaponization (Vũ khí hóa)"
      },
      {
        "en": "Delivery",
        "vi": "Delivery (Phân phối)"
      },
      {
        "en": "Exploitation",
        "vi": "Exploitation (Khai thác)"
      },
      {
        "en": "Reconnaissance",
        "vi": "Reconnaissance (Trinh sát)"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Weaponization is building the deliverable — e.g. coupling an exploit with a backdoor inside a document. Delivery transmits it (email/web), Exploitation triggers the vulnerability on the target, and Installation establishes persistence.",
      "vi": "Weaponization là dựng \"vật phẩm\" để phân phối — vd ghép exploit với backdoor trong một tài liệu. Delivery truyền nó (email/web), Exploitation kích hoạt lỗ hổng trên mục tiêu, và Installation thiết lập persistence."
    }
  },

  {
    "app": "A",
    "sec": "a5",
    "secLabel": {
      "en": "A5 — Threat Assessment",
      "vi": "A5 — Đánh giá mối đe dọa"
    },
    "q": {
      "en": "On the Pyramid of Pain, changing which indicator causes the attacker the MOST difficulty?",
      "vi": "Trên Pyramid of Pain, thay đổi chỉ dấu nào gây KHÓ KHĂN nhất cho kẻ tấn công?"
    },
    "opts": [
      {
        "en": "TTPs (tools, tactics, techniques and procedures)",
        "vi": "TTP (công cụ, chiến thuật, kỹ thuật và quy trình)"
      },
      {
        "en": "Hash values",
        "vi": "Giá trị hash"
      },
      {
        "en": "IP addresses",
        "vi": "Địa chỉ IP"
      },
      {
        "en": "Domain names",
        "vi": "Tên miền"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "The Pyramid of Pain ranks indicators by how much it hurts the adversary to change them: hashes (trivial) < IPs < domains < host/network artefacts < tools < TTPs (hardest). Detecting on behaviour/TTPs forces costly retooling, unlike blocking an easily-swapped hash or IP.",
      "vi": "Pyramid of Pain xếp hạng chỉ dấu theo mức \"đau\" khi kẻ tấn công phải thay: hash (dễ) < IP < domain < artefact host/mạng < công cụ < TTP (khó nhất). Phát hiện theo hành vi/TTP buộc kẻ tấn công phải đổi công cụ tốn kém, khác với chặn một hash hay IP dễ thay."
    },
    "note": {
      "en": "Detecting on TTPs is far more durable than blocking hashes/IPs.",
      "vi": "Phát hiện theo TTP bền hơn nhiều so với chặn hash/IP."
    }
  },

  {
    "app": "A",
    "sec": "a5",
    "secLabel": {
      "en": "A5 — Threat Assessment",
      "vi": "A5 — Đánh giá mối đe dọa"
    },
    "q": {
      "en": "The Diamond Model of Intrusion Analysis links which four core features?",
      "vi": "Mô hình Kim cương (Diamond Model) trong phân tích xâm nhập liên kết bốn yếu tố cốt lõi nào?"
    },
    "opts": [
      {
        "en": "Adversary, Capability, Infrastructure, Victim",
        "vi": "Adversary (kẻ tấn công), Capability (năng lực), Infrastructure (hạ tầng), Victim (nạn nhân)"
      },
      {
        "en": "People, Process, Technology, Cost",
        "vi": "Con người, Quy trình, Công nghệ, Chi phí"
      },
      {
        "en": "Confidentiality, Integrity, Availability, Safety",
        "vi": "Bảo mật, Toàn vẹn, Sẵn sàng, An toàn"
      },
      {
        "en": "Detect, Respond, Recover, Report",
        "vi": "Phát hiện, Phản ứng, Khôi phục, Báo cáo"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "The Diamond Model connects Adversary, Capability (malware/tools), Infrastructure (C2/domains) and Victim. Pivoting between vertices (e.g. from infrastructure to other victims) is a powerful analytic technique that complements the Kill Chain and ATT&CK.",
      "vi": "Diamond Model kết nối Adversary, Capability (mã độc/công cụ), Infrastructure (C2/domain) và Victim. Xoay chuyển giữa các đỉnh (vd từ hạ tầng sang các nạn nhân khác) là kỹ thuật phân tích mạnh, bổ trợ cho Kill Chain và ATT&CK."
    }
  },

  {
    "app": "A",
    "sec": "a5",
    "secLabel": {
      "en": "A5 — Threat Assessment",
      "vi": "A5 — Đánh giá mối đe dọa"
    },
    "q": {
      "en": "A targeted phishing email crafted for a specific senior executive is known as:",
      "vi": "Một email phishing nhắm riêng vào một lãnh đạo cấp cao cụ thể được gọi là:"
    },
    "opts": [
      {
        "en": "Whaling (a form of spear-phishing)",
        "vi": "Whaling (một dạng spear-phishing)"
      },
      {
        "en": "Smishing",
        "vi": "Smishing"
      },
      {
        "en": "A drive-by download",
        "vi": "Drive-by download"
      },
      {
        "en": "A watering hole",
        "vi": "Watering hole"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Whaling targets \"big fish\" (executives) with highly tailored lures. Spear-phishing targets specific individuals/groups generally; watering-hole attacks compromise sites the targets visit. Identifying likely high-value targets is part of threat assessment.",
      "vi": "Whaling nhắm \"cá lớn\" (lãnh đạo) bằng mồi nhử được thiết kế riêng. Spear-phishing nhắm cá nhân/nhóm cụ thể nói chung; watering-hole xâm nhập các site mà mục tiêu hay truy cập. Xác định mục tiêu giá trị cao khả dĩ là một phần của đánh giá mối đe dọa."
    }
  },

  {
    "app": "A",
    "sec": "a5",
    "secLabel": {
      "en": "A5 — Threat Assessment",
      "vi": "A5 — Đánh giá mối đe dọa"
    },
    "q": {
      "en": "Which motivation best characterises a financially-driven cybercrime group deploying ransomware?",
      "vi": "Động cơ nào mô tả đúng nhất một nhóm tội phạm mạng vì tiền triển khai ransomware?"
    },
    "opts": [
      {
        "en": "Financial gain",
        "vi": "Lợi ích tài chính"
      },
      {
        "en": "Hacktivism",
        "vi": "Hacktivism (động cơ chính trị/xã hội)"
      },
      {
        "en": "Nation-state espionage",
        "vi": "Gián điệp cấp quốc gia"
      },
      {
        "en": "Accidental misconfiguration",
        "vi": "Cấu hình sai do vô tình"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Ransomware crews are primarily profit-motivated (extortion). Understanding motivation — financial, espionage/IP theft, hacktivism, sabotage, notoriety — helps predict targets, TTPs and likely next actions, informing both response and attribution.",
      "vi": "Các nhóm ransomware chủ yếu vì lợi nhuận (tống tiền). Hiểu động cơ — tài chính, gián điệp/đánh cắp IP, hacktivism, phá hoại, nổi tiếng — giúp dự đoán mục tiêu, TTP và hành động tiếp theo, hỗ trợ cả việc xử lý lẫn attribution."
    }
  },

  {
    "app": "A",
    "sec": "a5",
    "secLabel": {
      "en": "A5 — Threat Assessment",
      "vi": "A5 — Đánh giá mối đe dọa"
    },
    "q": {
      "en": "What distinguishes an Indicator of Compromise (IoC) from an Indicator of Attack (IoA)?",
      "vi": "Điều gì phân biệt Indicator of Compromise (IoC) với Indicator of Attack (IoA)?"
    },
    "opts": [
      {
        "en": "An IoC is evidence a breach already happened; an IoA reflects attacker behaviour/intent in progress",
        "vi": "IoC là bằng chứng vi phạm đã xảy ra; IoA phản ánh hành vi/ý đồ của kẻ tấn công đang diễn ra"
      },
      {
        "en": "They are identical",
        "vi": "Chúng giống hệt nhau"
      },
      {
        "en": "An IoC is always a hash and an IoA is always an IP",
        "vi": "IoC luôn là hash còn IoA luôn là IP"
      },
      {
        "en": "IoAs are only used after recovery",
        "vi": "IoA chỉ dùng sau khi khôi phục"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "IoCs are forensic artefacts of a past/ongoing compromise (hashes, malicious IPs, registry keys). IoAs focus on behaviour and intent (e.g. credential dumping then lateral movement), enabling earlier, behaviour-based detection regardless of specific tools.",
      "vi": "IoC là artefact forensic của một vụ xâm nhập đã/đang diễn ra (hash, IP độc hại, khóa registry). IoA tập trung vào hành vi và ý đồ (vd dump credential rồi lateral movement), cho phép phát hiện sớm theo hành vi bất kể công cụ cụ thể."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "Why should an analyst avoid running unknown tools directly on a victim system during a live response?",
      "vi": "Vì sao analyst nên tránh chạy các công cụ lạ trực tiếp trên hệ thống nạn nhân khi xử lý live?"
    },
    "opts": [
      {
        "en": "They alter system state and may overwrite evidence; use trusted, statically-linked tools from known media",
        "vi": "Chúng làm thay đổi trạng thái hệ thống và có thể ghi đè bằng chứng; hãy dùng công cụ tin cậy, liên kết tĩnh từ phương tiện đã biết"
      },
      {
        "en": "They run too slowly",
        "vi": "Chúng chạy quá chậm"
      },
      {
        "en": "They cost money",
        "vi": "Chúng tốn tiền"
      },
      {
        "en": "They require a GUI",
        "vi": "Chúng yêu cầu giao diện đồ họa"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Any tool run on the live host changes memory, timestamps and possibly disk, and a compromised OS may have trojaned binaries/DLLs. Responders use a vetted, trusted toolkit (ideally statically linked, from read-only media) and document every command to minimise and explain footprint.",
      "vi": "Bất kỳ công cụ nào chạy trên host live đều thay đổi bộ nhớ, mốc thời gian và có thể cả đĩa, và một OS bị xâm nhập có thể có binary/DLL bị trojan hóa. Người xử lý dùng bộ công cụ đã kiểm định, tin cậy (lý tưởng là liên kết tĩnh, từ phương tiện chỉ-đọc) và ghi lại mọi lệnh để giảm thiểu và giải trình dấu chân."
    }
  },

  {
    "app": "A",
    "sec": "a2",
    "secLabel": {
      "en": "A2 — Incident Chronology",
      "vi": "A2 — Dòng thời gian sự cố"
    },
    "q": {
      "en": "Correlating an attacker action across a firewall log (UTC) and a workstation event log (local time +7) requires you to:",
      "vi": "Đối chiếu một hành động của kẻ tấn công giữa log firewall (UTC) và log sự kiện máy trạm (giờ địa phương +7) đòi hỏi bạn phải:"
    },
    "opts": [
      {
        "en": "Convert both to a common reference (e.g. UTC) before comparing",
        "vi": "Quy cả hai về một mốc tham chiếu chung (vd UTC) trước khi so sánh"
      },
      {
        "en": "Assume they are already aligned",
        "vi": "Cho rằng chúng đã khớp sẵn"
      },
      {
        "en": "Ignore the firewall log",
        "vi": "Bỏ qua log firewall"
      },
      {
        "en": "Delete the workstation log",
        "vi": "Xóa log máy trạm"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Without normalising to one timezone, a +7 offset makes the same event look 7 hours apart, breaking causality. Always convert all sources to a single reference (commonly UTC), accounting for DST, before correlating.",
      "vi": "Nếu không chuẩn hóa về một múi giờ, độ lệch +7 khiến cùng một sự kiện trông cách nhau 7 giờ, phá vỡ quan hệ nhân quả. Luôn quy mọi nguồn về một mốc tham chiếu (thường UTC), tính cả DST, trước khi đối chiếu."
    }
  },

  {
    "app": "A",
    "sec": "a4",
    "secLabel": {
      "en": "A4 — Record Keeping & Interim Reporting",
      "vi": "A4 — Ghi chép & Báo cáo tạm"
    },
    "q": {
      "en": "During a long engagement, interim reporting to the client is valuable because it:",
      "vi": "Trong một engagement dài, báo cáo tạm cho khách hàng có giá trị vì nó:"
    },
    "opts": [
      {
        "en": "Lets the client make timely containment/business decisions before the final report",
        "vi": "Cho phép khách hàng ra quyết định cô lập/kinh doanh kịp thời trước báo cáo cuối"
      },
      {
        "en": "Replaces the need for evidence",
        "vi": "Thay thế nhu cầu bằng chứng"
      },
      {
        "en": "Is purely decorative",
        "vi": "Chỉ mang tính trang trí"
      },
      {
        "en": "Ends the engagement early",
        "vi": "Kết thúc engagement sớm"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Incidents evolve; timely interim updates communicate emerging impact and critical findings so the client can act (isolate, notify, invoke continuity plans) without waiting for the final report. Records must remain accurate and structured throughout.",
      "vi": "Sự cố diễn biến liên tục; cập nhật tạm kịp thời truyền đạt tác động đang xuất hiện và phát hiện quan trọng để khách hàng hành động (cô lập, thông báo, kích hoạt kế hoạch liên tục) mà không phải đợi báo cáo cuối. Hồ sơ phải luôn chính xác và có cấu trúc."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "NIST SP 800-61 groups the incident response lifecycle into how many phases, and which combines three activities into one phase?",
      "vi": "NIST SP 800-61 chia vòng đời ứng cứu sự cố thành mấy giai đoạn, và giai đoạn nào gộp ba hoạt động vào một?"
    },
    "opts": [
      {
        "en": "Four phases; \"Containment, Eradication & Recovery\" is one combined phase",
        "vi": "Bốn giai đoạn; \"Containment, Eradication & Recovery\" là một giai đoạn gộp"
      },
      {
        "en": "Six phases, each fully separate",
        "vi": "Sáu giai đoạn, mỗi cái tách rời"
      },
      {
        "en": "Three phases, ending at Eradication",
        "vi": "Ba giai đoạn, kết thúc ở Eradication"
      },
      {
        "en": "Five phases, starting at Detection",
        "vi": "Năm giai đoạn, bắt đầu từ Detection"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "NIST 800-61 uses four phases: Preparation; Detection & Analysis; Containment, Eradication & Recovery; and Post-Incident Activity. SANS PICERL breaks the same work into six steps. Knowing both models and how they map is commonly tested.",
      "vi": "NIST 800-61 dùng bốn giai đoạn: Preparation; Detection & Analysis; Containment, Eradication & Recovery; và Post-Incident Activity. PICERL của SANS chia cùng công việc thành sáu bước. Nắm cả hai mô hình và cách ánh xạ thường được hỏi."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "An organisation isolates infected hosts onto a quarantine VLAN to keep them running for analysis while blocking C2. This is BEST described as:",
      "vi": "Một tổ chức chuyển các host nhiễm sang VLAN cách ly để vẫn chạy phục vụ phân tích nhưng chặn C2. Mô tả ĐÚNG nhất là:"
    },
    "opts": [
      {
        "en": "Short-term containment",
        "vi": "Cô lập ngắn hạn (short-term containment)"
      },
      {
        "en": "Eradication",
        "vi": "Eradication"
      },
      {
        "en": "Long-term recovery",
        "vi": "Khôi phục dài hạn"
      },
      {
        "en": "Post-incident review",
        "vi": "Rà soát sau sự cố"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Quarantining to limit damage while preserving the system for investigation is short-term containment. Long-term containment applies temporary fixes so production can continue safely; eradication removes the threat; recovery restores normal operations. Distinguishing these is a frequent exam point.",
      "vi": "Cách ly để hạn chế thiệt hại trong khi vẫn giữ hệ thống để điều tra là cô lập ngắn hạn. Cô lập dài hạn áp dụng biện pháp tạm để production tiếp tục an toàn; eradication loại bỏ mối đe dọa; recovery khôi phục hoạt động bình thường. Phân biệt các bước này hay được hỏi."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "Why might responders deliberately DELAY full eradication of an active intrusion?",
      "vi": "Vì sao đội xử lý có thể cố ý TRÌ HOÃN việc loại bỏ hoàn toàn một cuộc xâm nhập đang diễn ra?"
    },
    "opts": [
      {
        "en": "To first scope all footholds; premature eradication tips off the attacker and may miss persistence",
        "vi": "Để khoanh vùng hết các chỗ đứng trước; eradication vội đánh động kẻ tấn công và có thể bỏ sót persistence"
      },
      {
        "en": "Because eradication is illegal",
        "vi": "Vì eradication là bất hợp pháp"
      },
      {
        "en": "To increase the bill",
        "vi": "Để tăng hóa đơn"
      },
      {
        "en": "Because RAM must be wiped first",
        "vi": "Vì phải xóa RAM trước"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Acting too early can alert the adversary, who then burns remaining accesses, deploys wipers or goes quieter. Responders typically scope the full extent (all hosts, accounts, persistence) and plan a coordinated eradication so the attacker is removed everywhere at once.",
      "vi": "Hành động quá sớm có thể cảnh báo kẻ tấn công, khiến chúng đốt các truy cập còn lại, triển khai wiper hoặc ẩn kỹ hơn. Đội xử lý thường khoanh vùng toàn bộ phạm vi (mọi host, tài khoản, persistence) và lập kế hoạch eradication phối hợp để loại kẻ tấn công ở mọi nơi cùng lúc."
    },
    "note": {
      "en": "Scope fully before eradicating — coordinated removal prevents the attacker re-entering.",
      "vi": "Khoanh vùng đầy đủ trước khi eradicate — loại bỏ phối hợp ngăn kẻ tấn công quay lại."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "During a suspected email-monitoring compromise, why should the IR team use out-of-band communications?",
      "vi": "Trong nghi vấn email bị giám sát, vì sao đội IR nên dùng kênh liên lạc ngoài luồng (out-of-band)?"
    },
    "opts": [
      {
        "en": "The attacker may be reading internal email/chat and could learn the response plan",
        "vi": "Kẻ tấn công có thể đang đọc email/chat nội bộ và biết được kế hoạch ứng phó"
      },
      {
        "en": "It is faster than email",
        "vi": "Nó nhanh hơn email"
      },
      {
        "en": "It is required by GDPR",
        "vi": "Vì GDPR bắt buộc"
      },
      {
        "en": "To reduce mailbox storage",
        "vi": "Để giảm dung lượng hộp thư"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "If the intruder has mailbox or messaging access, discussing containment over those channels lets them counter it. IR teams switch to out-of-band methods (phone, separate secure platform) to keep response plans confidential.",
      "vi": "Nếu kẻ xâm nhập có quyền vào hộp thư hoặc nền tảng nhắn tin, bàn về cô lập qua các kênh đó để chúng phản ứng lại. Đội IR chuyển sang phương thức ngoài luồng (điện thoại, nền tảng bảo mật riêng) để giữ bí mật kế hoạch ứng phó."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "Before restoring systems from backup during recovery, the MOST important check is:",
      "vi": "Trước khi khôi phục hệ thống từ bản sao lưu khi recovery, kiểm tra QUAN TRỌNG nhất là:"
    },
    "opts": [
      {
        "en": "That the backup pre-dates the compromise and is itself clean",
        "vi": "Bản sao lưu có trước thời điểm xâm nhập và bản thân nó sạch"
      },
      {
        "en": "That the backup is the newest available",
        "vi": "Bản sao lưu là mới nhất hiện có"
      },
      {
        "en": "That the backup is compressed",
        "vi": "Bản sao lưu được nén"
      },
      {
        "en": "That the backup is on tape",
        "vi": "Bản sao lưu nằm trên băng từ"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Restoring from a backup taken after the initial compromise simply re-introduces the attacker's implants. You must establish the intrusion timeline, then recover from a known-clean point pre-dating it — newest is not safest.",
      "vi": "Khôi phục từ bản sao lưu tạo sau thời điểm xâm nhập ban đầu sẽ đưa lại implant của kẻ tấn công. Phải xác định timeline xâm nhập rồi khôi phục từ điểm sạch đã biết có trước nó — mới nhất chưa chắc an toàn nhất."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "A 4 TB encrypted server is live and cannot be taken down. Acquisition should prioritise:",
      "vi": "Một server 4 TB đã mã hóa đang chạy và không thể tắt. Việc thu thập nên ưu tiên:"
    },
    "opts": [
      {
        "en": "Memory and targeted triage artefacts while the volume is unlocked",
        "vi": "Bộ nhớ và các artefact triage trọng yếu khi volume còn mở khóa"
      },
      {
        "en": "A dead-box full disk image after shutdown",
        "vi": "Một image full disk dead-box sau khi tắt máy"
      },
      {
        "en": "Only the event logs by email",
        "vi": "Chỉ log sự kiện gửi qua email"
      },
      {
        "en": "Nothing until a maintenance window",
        "vi": "Không gì cả cho tới cửa sổ bảo trì"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Once powered off, a full-disk-encrypted volume becomes unreadable without the key, and RAM is lost. While it is live and unlocked, capture memory (which may hold keys) and triage key artefacts. A dead image here would just yield ciphertext.",
      "vi": "Khi đã tắt, một volume mã hóa toàn đĩa trở nên không đọc được nếu thiếu khóa, và RAM mất. Khi máy còn chạy và đã mở khóa, hãy bắt bộ nhớ (có thể chứa khóa) và triage các artefact quan trọng. Image dead ở đây chỉ cho ra ciphertext."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "Which pair is correctly ordered from MORE volatile to LESS volatile (RFC 3227)?",
      "vi": "Cặp nào được sắp đúng từ DỄ bay hơi hơn đến ÍT bay hơi hơn (RFC 3227)?"
    },
    "opts": [
      {
        "en": "ARP cache → data on disk",
        "vi": "ARP cache → dữ liệu trên đĩa"
      },
      {
        "en": "Archival media → routing table",
        "vi": "Phương tiện lưu trữ → bảng định tuyến"
      },
      {
        "en": "Disk → CPU registers",
        "vi": "Đĩa → thanh ghi CPU"
      },
      {
        "en": "Backup tapes → process table",
        "vi": "Băng sao lưu → bảng tiến trình"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "RFC 3227 volatility ordering: registers/cache → routing/ARP/process tables and memory → temp files → disk → remote logs → physical config → archival media. The ARP cache (memory) is far more volatile than on-disk data, so it is collected earlier.",
      "vi": "Thứ tự bay hơi theo RFC 3227: thanh ghi/cache → bảng định tuyến/ARP/tiến trình và bộ nhớ → file tạm → đĩa → log từ xa → cấu hình vật lý → phương tiện lưu trữ. ARP cache (bộ nhớ) bay hơi hơn nhiều so với dữ liệu trên đĩa nên được thu trước."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "When triaging multiple simultaneous alerts, the responder should prioritise based primarily on:",
      "vi": "Khi triage nhiều cảnh báo cùng lúc, người xử lý nên ưu tiên chủ yếu dựa vào:"
    },
    "opts": [
      {
        "en": "Business impact and criticality of affected assets/data",
        "vi": "Tác động kinh doanh và mức độ trọng yếu của tài sản/dữ liệu bị ảnh hưởng"
      },
      {
        "en": "Alphabetical order of hostnames",
        "vi": "Thứ tự chữ cái của hostname"
      },
      {
        "en": "Which alert fired first by milliseconds",
        "vi": "Cảnh báo nào kêu trước theo mili-giây"
      },
      {
        "en": "The colour of the alert in the console",
        "vi": "Màu của cảnh báo trên console"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Triage ranks incidents by potential business impact — criticality of the system, sensitivity of data, blast radius and recoverability — not arbitrary factors. This ensures finite resources address the highest-risk events first.",
      "vi": "Triage xếp hạng sự cố theo tác động kinh doanh tiềm tàng — mức trọng yếu của hệ thống, độ nhạy của dữ liệu, phạm vi lan và khả năng khôi phục — không theo yếu tố tùy tiện. Nhờ đó nguồn lực hữu hạn xử lý các sự kiện rủi ro cao nhất trước."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "\"Patient zero\" in an incident refers to:",
      "vi": "\"Patient zero\" trong một sự cố nói tới:"
    },
    "opts": [
      {
        "en": "The first system/user compromised — the entry point of the intrusion",
        "vi": "Hệ thống/người dùng bị xâm nhập đầu tiên — điểm xâm nhập của cuộc tấn công"
      },
      {
        "en": "The most senior victim",
        "vi": "Nạn nhân cấp cao nhất"
      },
      {
        "en": "The last host cleaned",
        "vi": "Host được làm sạch cuối cùng"
      },
      {
        "en": "The backup server",
        "vi": "Máy chủ sao lưu"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Identifying patient zero (initial access vector and first victim) is essential to understand how the attacker got in, close that vector and scope the full spread. Without it, eradication may leave the original hole open.",
      "vi": "Xác định patient zero (vector truy cập ban đầu và nạn nhân đầu tiên) là thiết yếu để hiểu kẻ tấn công vào bằng cách nào, đóng vector đó và khoanh vùng toàn bộ lan truyền. Thiếu nó, eradication có thể để hở lỗ ban đầu."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "Running a memory acquisition tool on a live host inevitably:",
      "vi": "Chạy công cụ thu thập bộ nhớ trên host live chắc chắn sẽ:"
    },
    "opts": [
      {
        "en": "Leaves a small footprint (loads the tool into RAM) — which must be documented",
        "vi": "Để lại dấu chân nhỏ (nạp công cụ vào RAM) — cần được ghi nhận lại"
      },
      {
        "en": "Has zero effect on the system",
        "vi": "Không ảnh hưởng gì đến hệ thống"
      },
      {
        "en": "Encrypts the disk",
        "vi": "Mã hóa đĩa"
      },
      {
        "en": "Removes all malware",
        "vi": "Loại bỏ toàn bộ mã độc"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Locard's principle applies: any live acquisition perturbs the system (the tool occupies memory, may touch the pagefile). This is accepted as necessary, but the analyst documents the tool, version and actions so the impact is known and defensible.",
      "vi": "Nguyên lý Locard áp dụng: mọi thu thập live đều làm xáo trộn hệ thống (công cụ chiếm bộ nhớ, có thể chạm pagefile). Điều này được chấp nhận là cần thiết, nhưng analyst ghi lại công cụ, phiên bản và hành động để biết và giải trình được tác động."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "Wiping and reimaging a compromised host is generally preferred over \"cleaning\" it because:",
      "vi": "Xóa sạch và cài lại (reimage) một host bị xâm nhập thường được ưu tiên hơn \"làm sạch\" vì:"
    },
    "opts": [
      {
        "en": "You cannot be fully certain every implant/persistence mechanism was found and removed",
        "vi": "Không thể chắc chắn hoàn toàn đã tìm và loại bỏ mọi implant/cơ chế persistence"
      },
      {
        "en": "Cleaning is illegal",
        "vi": "Làm sạch là bất hợp pháp"
      },
      {
        "en": "Reimaging is always faster",
        "vi": "Reimage luôn nhanh hơn"
      },
      {
        "en": "Antivirus cannot scan disks",
        "vi": "Antivirus không quét được đĩa"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Sophisticated malware hides additional backdoors, rootkits and persistence. Selective cleaning risks leaving one behind, so rebuilding from a trusted golden image (then patching and restoring clean data) gives higher assurance the host is truly clean.",
      "vi": "Mã độc tinh vi giấu thêm backdoor, rootkit và persistence. Làm sạch chọn lọc có nguy cơ sót lại một cái, nên dựng lại từ golden image tin cậy (rồi vá và khôi phục dữ liệu sạch) cho độ đảm bảo cao hơn rằng host thực sự sạch."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "A user double-clicked a suspicious attachment minutes ago and the machine is still on. The FIRST responder action should be to:",
      "vi": "Một người dùng vừa nhấp đúp file đính kèm đáng ngờ vài phút trước và máy vẫn đang bật. Hành động ĐẦU TIÊN của người xử lý nên là:"
    },
    "opts": [
      {
        "en": "Isolate from the network and capture volatile memory before anything is lost",
        "vi": "Cô lập khỏi mạng và bắt bộ nhớ volatile trước khi mất dữ liệu"
      },
      {
        "en": "Run a full antivirus scan that deletes detections",
        "vi": "Chạy quét antivirus toàn bộ và xóa các phát hiện"
      },
      {
        "en": "Reboot to clear the infection",
        "vi": "Khởi động lại để xóa lây nhiễm"
      },
      {
        "en": "Delete the attachment and move on",
        "vi": "Xóa file đính kèm và bỏ qua"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "The freshest, most valuable evidence (injected code, network sockets, decrypted payloads) is in RAM right now and is lost on reboot. AV remediation, deletion and reboot all destroy evidence. Isolate to stop spread, then acquire memory.",
      "vi": "Bằng chứng tươi mới và giá trị nhất (mã được tiêm, socket mạng, payload đã giải mã) đang ở trong RAM ngay lúc này và sẽ mất khi reboot. Diệt bằng AV, xóa file và reboot đều phá hủy bằng chứng. Hãy cô lập để chặn lây lan, rồi thu thập bộ nhớ."
    }
  },

  {
    "app": "A",
    "sec": "a2",
    "secLabel": {
      "en": "A2 — Incident Chronology",
      "vi": "A2 — Dòng thời gian sự cố"
    },
    "q": {
      "en": "You suspect timestomping. The MOST reliable cross-check on NTFS is to compare:",
      "vi": "Bạn nghi có timestomping. Cách đối chiếu ĐÁNG TIN nhất trên NTFS là so sánh:"
    },
    "opts": [
      {
        "en": "$STANDARD_INFORMATION times against $FILE_NAME times in the MFT",
        "vi": "Thời gian $STANDARD_INFORMATION với thời gian $FILE_NAME trong MFT"
      },
      {
        "en": "The file size against the disk label",
        "vi": "Kích thước file với nhãn đĩa"
      },
      {
        "en": "The Recycle Bin against the pagefile",
        "vi": "Thùng rác với pagefile"
      },
      {
        "en": "The hostname against the IP",
        "vi": "Hostname với IP"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Most timestomping tools alter the easily-writable $STANDARD_INFORMATION timestamps but not the $FILE_NAME attribute, which the OS updates and is harder to forge. A mismatch (e.g. $SI older than $FN) strongly indicates manipulation.",
      "vi": "Đa số công cụ timestomping sửa thời gian $STANDARD_INFORMATION (dễ ghi) nhưng không sửa thuộc tính $FILE_NAME, vốn do OS cập nhật và khó giả hơn. Sự không khớp (vd $SI cũ hơn $FN) là dấu hiệu mạnh của thao túng."
    },
    "note": {
      "en": "$SI is easily stomped; $FN is much harder — compare them.",
      "vi": "$SI dễ bị stomp; $FN khó hơn nhiều — hãy so sánh chúng."
    }
  },

  {
    "app": "A",
    "sec": "a2",
    "secLabel": {
      "en": "A2 — Incident Chronology",
      "vi": "A2 — Dòng thời gian sự cố"
    },
    "q": {
      "en": "Google Chrome stores history timestamps as microseconds since 1601-01-01. Misreading them as Unix epoch would make events appear:",
      "vi": "Google Chrome lưu mốc thời gian lịch sử dưới dạng micro-giây kể từ 1601-01-01. Hiểu nhầm là Unix epoch sẽ khiến sự kiện trông:"
    },
    "opts": [
      {
        "en": "Centuries off — a clear sign the wrong epoch/units were applied",
        "vi": "Lệch hàng thế kỷ — dấu hiệu rõ ràng đã dùng sai epoch/đơn vị"
      },
      {
        "en": "A few seconds off only",
        "vi": "Chỉ lệch vài giây"
      },
      {
        "en": "Perfectly correct",
        "vi": "Hoàn toàn chính xác"
      },
      {
        "en": "In the future by one hour",
        "vi": "Lệch về tương lai đúng một giờ"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Different applications use different epochs/units: Unix = seconds since 1970, Windows FILETIME = 100 ns since 1601, Chrome/WebKit = microseconds since 1601, Firefox = microseconds since 1970. Applying the wrong one yields nonsensical dates — always use a parser that knows the artefact's format.",
      "vi": "Mỗi ứng dụng dùng epoch/đơn vị khác nhau: Unix = giây từ 1970, Windows FILETIME = 100 ns từ 1601, Chrome/WebKit = micro-giây từ 1601, Firefox = micro-giây từ 1970. Dùng sai sẽ cho ngày vô nghĩa — luôn dùng trình phân tích biết đúng định dạng của artefact."
    }
  },

  {
    "app": "A",
    "sec": "a2",
    "secLabel": {
      "en": "A2 — Incident Chronology",
      "vi": "A2 — Dòng thời gian sự cố"
    },
    "q": {
      "en": "A host with no NTP synchronisation shows logs drifting 3 minutes from network devices. When building the timeline you should:",
      "vi": "Một host không đồng bộ NTP có log lệch 3 phút so với thiết bị mạng. Khi dựng timeline bạn nên:"
    },
    "opts": [
      {
        "en": "Measure the clock offset and apply it as a correction to that host's events",
        "vi": "Đo độ lệch đồng hồ và áp dụng như một hiệu chỉnh cho các sự kiện của host đó"
      },
      {
        "en": "Discard the host's logs entirely",
        "vi": "Loại bỏ hoàn toàn log của host đó"
      },
      {
        "en": "Assume the network devices are wrong",
        "vi": "Giả định thiết bị mạng sai"
      },
      {
        "en": "Ignore the drift",
        "vi": "Bỏ qua độ lệch"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Clock drift is common without NTP. Rather than discard valuable data, determine the offset (e.g. by comparing a known shared event) and normalise that host's timestamps. Document the correction so the timeline remains accurate and defensible.",
      "vi": "Lệch đồng hồ là phổ biến khi không có NTP. Thay vì loại bỏ dữ liệu giá trị, hãy xác định độ lệch (vd so một sự kiện chung đã biết) và chuẩn hóa mốc thời gian của host đó. Ghi lại hiệu chỉnh để timeline vẫn chính xác và có thể bảo vệ."
    }
  },

  {
    "app": "A",
    "sec": "a2",
    "secLabel": {
      "en": "A2 — Incident Chronology",
      "vi": "A2 — Dòng thời gian sự cố"
    },
    "q": {
      "en": "An attacker set the system clock back during their activity. The BEST way to still order events correctly is to:",
      "vi": "Kẻ tấn công đã chỉnh đồng hồ hệ thống lùi lại trong lúc hoạt động. Cách TỐT NHẤT để vẫn sắp đúng thứ tự sự kiện là:"
    },
    "opts": [
      {
        "en": "Corroborate with external sources (network logs, $LogFile/USN journal, MFT sequence) not under attacker control",
        "vi": "Đối chiếu với nguồn ngoài (log mạng, $LogFile/USN journal, trình tự MFT) không nằm trong tầm kiểm soát của kẻ tấn công"
      },
      {
        "en": "Trust only the local system clock",
        "vi": "Chỉ tin đồng hồ hệ thống cục bộ"
      },
      {
        "en": "Re-set the clock and re-run events",
        "vi": "Đặt lại đồng hồ và chạy lại sự kiện"
      },
      {
        "en": "Give up on the timeline",
        "vi": "Bỏ luôn việc dựng timeline"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Local timestamps become unreliable once the clock is tampered with. Sequence and external sources help: the NTFS $LogFile/USN journal and MFT record numbers reflect true order, and network/centralised logs use their own clocks the attacker did not control.",
      "vi": "Mốc thời gian cục bộ trở nên không đáng tin khi đồng hồ bị can thiệp. Trình tự và nguồn ngoài giúp ích: $LogFile/USN journal của NTFS và số bản ghi MFT phản ánh thứ tự thật, còn log mạng/tập trung dùng đồng hồ riêng mà kẻ tấn công không kiểm soát."
    }
  },

  {
    "app": "A",
    "sec": "a2",
    "secLabel": {
      "en": "A2 — Incident Chronology",
      "vi": "A2 — Dòng thời gian sự cố"
    },
    "q": {
      "en": "A JPEG's EXIF \"DateTimeOriginal\" is in local camera time with no zone. When correlating it with UTC server logs you must:",
      "vi": "Trường EXIF \"DateTimeOriginal\" của một ảnh JPEG ở giờ máy ảnh, không có múi giờ. Khi đối chiếu với log server UTC bạn phải:"
    },
    "opts": [
      {
        "en": "Establish the camera's timezone/offset before comparing",
        "vi": "Xác định múi giờ/độ lệch của máy ảnh trước khi so sánh"
      },
      {
        "en": "Assume EXIF is always UTC",
        "vi": "Giả định EXIF luôn là UTC"
      },
      {
        "en": "Treat the offset as zero",
        "vi": "Coi độ lệch bằng 0"
      },
      {
        "en": "Ignore the photo",
        "vi": "Bỏ qua bức ảnh"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "EXIF DateTimeOriginal is typically local time without an explicit offset, so comparing it to UTC logs without knowing the device's timezone introduces error. Determine the camera/device timezone (and DST) first, then normalise.",
      "vi": "EXIF DateTimeOriginal thường là giờ địa phương không có độ lệch tường minh, nên so với log UTC mà không biết múi giờ thiết bị sẽ gây sai số. Xác định múi giờ máy ảnh/thiết bị (và DST) trước, rồi chuẩn hóa."
    }
  },

  {
    "app": "A",
    "sec": "a2",
    "secLabel": {
      "en": "A2 — Incident Chronology",
      "vi": "A2 — Dòng thời gian sự cố"
    },
    "q": {
      "en": "Which artefact most directly records the ORDER of file-system operations independent of file timestamps?",
      "vi": "Artefact nào ghi TRỰC TIẾP nhất thứ tự các thao tác hệ thống tệp, độc lập với mốc thời gian file?"
    },
    "opts": [
      {
        "en": "The NTFS USN change journal ($UsnJrnl)",
        "vi": "NTFS USN change journal ($UsnJrnl)"
      },
      {
        "en": "The desktop wallpaper",
        "vi": "Hình nền desktop"
      },
      {
        "en": "The page file",
        "vi": "Pagefile"
      },
      {
        "en": "The BIOS clock",
        "vi": "Đồng hồ BIOS"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "The USN journal logs sequential change records (create, modify, delete, rename) with monotonically increasing USNs, giving a reliable order of operations even if file MAC times were stomped. It is a key timeline-corroboration source.",
      "vi": "USN journal ghi các bản ghi thay đổi tuần tự (tạo, sửa, xóa, đổi tên) với số USN tăng đơn điệu, cho thứ tự thao tác đáng tin kể cả khi thời gian MAC của file bị stomp. Đây là nguồn đối chiếu timeline quan trọng."
    }
  },

  {
    "app": "A",
    "sec": "a3",
    "secLabel": {
      "en": "A3 — Law & Compliance",
      "vi": "A3 — Pháp lý & Tuân thủ"
    },
    "q": {
      "en": "Under GDPR, a notifiable personal-data breach must generally be reported to the supervisory authority within:",
      "vi": "Theo GDPR, một vi phạm dữ liệu cá nhân phải thông báo nói chung cần báo cho cơ quan giám sát trong vòng:"
    },
    "opts": [
      {
        "en": "72 hours of becoming aware",
        "vi": "72 giờ kể từ khi biết"
      },
      {
        "en": "24 hours of the breach occurring",
        "vi": "24 giờ kể từ khi vi phạm xảy ra"
      },
      {
        "en": "30 days",
        "vi": "30 ngày"
      },
      {
        "en": "One year",
        "vi": "Một năm"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "GDPR Article 33 requires notifying the supervisory authority within 72 hours of becoming aware of a personal-data breach (where it poses a risk to individuals). This drives the urgency of accurate scoping and record-keeping during the engagement.",
      "vi": "Điều 33 GDPR yêu cầu thông báo cho cơ quan giám sát trong vòng 72 giờ kể từ khi biết về vi phạm dữ liệu cá nhân (khi có rủi ro cho cá nhân). Điều này tạo áp lực phải khoanh vùng chính xác và ghi chép kỹ trong quá trình thực hiện."
    }
  },

  {
    "app": "A",
    "sec": "a3",
    "secLabel": {
      "en": "A3 — Law & Compliance",
      "vi": "A3 — Pháp lý & Tuân thủ"
    },
    "q": {
      "en": "ACPO Principle 2 states that where a person finds it NECESSARY to access original data, they must:",
      "vi": "Nguyên tắc 2 của ACPO nêu rằng khi một người thấy CẦN THIẾT phải truy cập dữ liệu gốc, họ phải:"
    },
    "opts": [
      {
        "en": "Be competent to do so and able to explain the relevance and implications of their actions",
        "vi": "Đủ năng lực và có thể giải trình mức độ liên quan và hệ quả của hành động"
      },
      {
        "en": "Avoid documenting anything",
        "vi": "Tránh ghi chép bất cứ gì"
      },
      {
        "en": "Delete the data afterwards",
        "vi": "Xóa dữ liệu sau đó"
      },
      {
        "en": "Get a refund",
        "vi": "Xin hoàn tiền"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Principle 1 says don't change original evidence; Principle 2 accepts that sometimes access is unavoidable but requires the person to be competent and able to justify it; Principle 3 requires an audit trail; Principle 4 places overall responsibility on the case lead.",
      "vi": "Nguyên tắc 1 nói không thay đổi bằng chứng gốc; Nguyên tắc 2 chấp nhận đôi khi buộc phải truy cập nhưng yêu cầu người đó đủ năng lực và biện giải được; Nguyên tắc 3 yêu cầu audit trail; Nguyên tắc 4 đặt trách nhiệm tổng thể lên người phụ trách vụ việc."
    }
  },

  {
    "app": "A",
    "sec": "a3",
    "secLabel": {
      "en": "A3 — Law & Compliance",
      "vi": "A3 — Pháp lý & Tuân thủ"
    },
    "q": {
      "en": "A chain-of-custody record should capture, at minimum:",
      "vi": "Một bản ghi chain-of-custody tối thiểu phải ghi:"
    },
    "opts": [
      {
        "en": "Who handled the exhibit, what they did, when, and where — with integrity hashes",
        "vi": "Ai xử lý tang vật, làm gì, khi nào và ở đâu — kèm hash toàn vẹn"
      },
      {
        "en": "Only the analyst's name",
        "vi": "Chỉ tên của analyst"
      },
      {
        "en": "Just the file size",
        "vi": "Chỉ kích thước file"
      },
      {
        "en": "The price of the hardware",
        "vi": "Giá của phần cứng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Custody records document every transfer and action — handler identity, date/time, location, purpose and verification hashes — producing an unbroken, auditable trail that proves the exhibit was not altered. Gaps undermine admissibility.",
      "vi": "Bản ghi custody tài liệu hóa mọi lần chuyển giao và hành động — danh tính người xử lý, ngày/giờ, địa điểm, mục đích và hash xác minh — tạo một chuỗi liên tục, kiểm toán được, chứng minh tang vật không bị thay đổi. Lỗ hổng làm suy yếu tính chấp nhận được."
    }
  },

  {
    "app": "A",
    "sec": "a3",
    "secLabel": {
      "en": "A3 — Law & Compliance",
      "vi": "A3 — Pháp lý & Tuân thủ"
    },
    "q": {
      "en": "Hashing a forensic image at acquisition AND again later primarily demonstrates:",
      "vi": "Băm (hash) một image forensic lúc thu thập VÀ băm lại sau đó chủ yếu chứng minh:"
    },
    "opts": [
      {
        "en": "The image has not changed since acquisition (integrity)",
        "vi": "Image không thay đổi kể từ lúc thu thập (toàn vẹn)"
      },
      {
        "en": "The data is encrypted",
        "vi": "Dữ liệu đã được mã hóa"
      },
      {
        "en": "The analyst is certified",
        "vi": "Analyst đã được chứng nhận"
      },
      {
        "en": "The disk is faster",
        "vi": "Đĩa nhanh hơn"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Matching acquisition-time and later hashes proves the evidence is bit-for-bit unchanged, satisfying integrity requirements (ACPO Principle 1). It is verification, not encryption. A mismatch signals corruption or tampering and must be investigated.",
      "vi": "Hash lúc thu thập trùng với hash sau này chứng minh bằng chứng nguyên vẹn từng bit, đáp ứng yêu cầu toàn vẹn (Nguyên tắc 1 ACPO). Đây là xác minh, không phải mã hóa. Lệch hash báo hiệu hỏng dữ liệu hoặc bị can thiệp và phải điều tra."
    }
  },

  {
    "app": "A",
    "sec": "a3",
    "secLabel": {
      "en": "A3 — Law & Compliance",
      "vi": "A3 — Pháp lý & Tuân thủ"
    },
    "q": {
      "en": "A \"legal hold\" obliges an organisation to:",
      "vi": "Một \"legal hold\" (lệnh giữ bằng chứng) buộc tổ chức phải:"
    },
    "opts": [
      {
        "en": "Preserve potentially relevant data and suspend routine deletion/rotation",
        "vi": "Bảo toàn dữ liệu có thể liên quan và tạm dừng việc xóa/xoay vòng định kỳ"
      },
      {
        "en": "Immediately delete all logs",
        "vi": "Xóa ngay toàn bộ log"
      },
      {
        "en": "Encrypt all backups",
        "vi": "Mã hóa mọi bản sao lưu"
      },
      {
        "en": "Publish the incident publicly",
        "vi": "Công bố sự cố ra công chúng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "When litigation/investigation is anticipated, a legal hold suspends normal data-retention/deletion so relevant evidence is preserved. Destroying data under hold (even via routine log rotation) can constitute spoliation with serious legal consequences.",
      "vi": "Khi dự liệu sẽ có kiện tụng/điều tra, legal hold tạm dừng việc lưu giữ/xóa dữ liệu thông thường để bảo toàn bằng chứng liên quan. Hủy dữ liệu đang bị giữ (kể cả qua xoay vòng log định kỳ) có thể cấu thành tiêu hủy bằng chứng (spoliation) với hậu quả pháp lý nghiêm trọng."
    }
  },

  {
    "app": "A",
    "sec": "a3",
    "secLabel": {
      "en": "A3 — Law & Compliance",
      "vi": "A3 — Pháp lý & Tuân thủ"
    },
    "q": {
      "en": "CERTs/CSIRTs operate within a defined jurisdiction or \"constituency\". This MOST affects:",
      "vi": "CERT/CSIRT hoạt động trong một phạm vi quyền hạn hay \"constituency\" xác định. Điều này ẢNH HƯỞNG nhất tới:"
    },
    "opts": [
      {
        "en": "Which incidents they can coordinate on and which other teams to hand off to",
        "vi": "Sự cố nào họ có thể điều phối và đội nào khác cần chuyển giao"
      },
      {
        "en": "The encryption they must use",
        "vi": "Loại mã hóa họ phải dùng"
      },
      {
        "en": "Their office location only",
        "vi": "Chỉ vị trí văn phòng của họ"
      },
      {
        "en": "The brand of their laptops",
        "vi": "Hãng laptop của họ"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A CERT serves a specific constituency (a nation, sector or organisation). Knowing the relevant team's remit tells you who to engage and when to hand off cross-border or cross-sector incidents to another CERT/law enforcement with proper authority.",
      "vi": "Một CERT phục vụ một constituency cụ thể (quốc gia, ngành hoặc tổ chức). Biết phạm vi của đội liên quan cho biết nên liên hệ ai và khi nào chuyển giao sự cố xuyên biên giới/xuyên ngành cho CERT khác hoặc cơ quan hành pháp có thẩm quyền."
    }
  },

  {
    "app": "A",
    "sec": "a3",
    "secLabel": {
      "en": "A3 — Law & Compliance",
      "vi": "A3 — Pháp lý & Tuân thủ"
    },
    "q": {
      "en": "While investigating, an analyst encounters employees' personal data unrelated to the incident. They should:",
      "vi": "Khi điều tra, analyst gặp dữ liệu cá nhân của nhân viên không liên quan tới sự cố. Họ nên:"
    },
    "opts": [
      {
        "en": "Minimise access, handle only what is relevant, and follow data-protection obligations",
        "vi": "Hạn chế truy cập, chỉ xử lý phần liên quan, và tuân thủ nghĩa vụ bảo vệ dữ liệu"
      },
      {
        "en": "Copy it all for later use",
        "vi": "Sao chép toàn bộ để dùng sau"
      },
      {
        "en": "Share it with colleagues for interest",
        "vi": "Chia sẻ cho đồng nghiệp vì tò mò"
      },
      {
        "en": "Post it online",
        "vi": "Đăng lên mạng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Data-minimisation and proportionality apply even during investigations: access only what is necessary and relevant, protect personal data, and respect privacy/regulatory duties. Over-collection or misuse of unrelated PII creates legal and ethical liability.",
      "vi": "Nguyên tắc tối thiểu hóa dữ liệu và tương xứng áp dụng cả khi điều tra: chỉ truy cập phần cần thiết và liên quan, bảo vệ dữ liệu cá nhân, tôn trọng nghĩa vụ quyền riêng tư/quy định. Thu thập quá mức hoặc lạm dụng PII không liên quan tạo ra trách nhiệm pháp lý và đạo đức."
    }
  },

  {
    "app": "A",
    "sec": "a3",
    "secLabel": {
      "en": "A3 — Law & Compliance",
      "vi": "A3 — Pháp lý & Tuân thủ"
    },
    "q": {
      "en": "The UK guidance specifically referenced for handling digital evidence is the:",
      "vi": "Tài liệu hướng dẫn của Anh được dẫn chiếu cụ thể cho việc xử lý bằng chứng số là:"
    },
    "opts": [
      {
        "en": "ACPO Good Practice Guide for Computer-Based Electronic Evidence",
        "vi": "ACPO Good Practice Guide for Computer-Based Electronic Evidence"
      },
      {
        "en": "The PCI DSS standard",
        "vi": "Tiêu chuẩn PCI DSS"
      },
      {
        "en": "RFC 1918",
        "vi": "RFC 1918"
      },
      {
        "en": "The OWASP Top 10",
        "vi": "OWASP Top 10"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "The ACPO Good Practice Guide sets out the core principles for seizing, handling and preserving digital evidence so it remains admissible. PCI DSS is payment-card security, RFC 1918 is private addressing, and OWASP Top 10 is web app risks.",
      "vi": "ACPO Good Practice Guide đặt ra các nguyên tắc cốt lõi để thu giữ, xử lý và bảo toàn bằng chứng số sao cho vẫn được chấp nhận. PCI DSS là bảo mật thẻ thanh toán, RFC 1918 là địa chỉ riêng, OWASP Top 10 là rủi ro ứng dụng web."
    }
  },

  {
    "app": "A",
    "sec": "a4",
    "secLabel": {
      "en": "A4 — Record Keeping & Interim Reporting",
      "vi": "A4 — Ghi chép & Báo cáo tạm"
    },
    "q": {
      "en": "A well-written technical finding should clearly separate:",
      "vi": "Một phát hiện kỹ thuật viết tốt phải phân tách rõ ràng:"
    },
    "opts": [
      {
        "en": "Observed fact/evidence from the analyst's inference/assessment",
        "vi": "Sự kiện/bằng chứng quan sát được với suy luận/đánh giá của analyst"
      },
      {
        "en": "The font from the colour",
        "vi": "Phông chữ với màu sắc"
      },
      {
        "en": "The header from the footer",
        "vi": "Phần đầu trang với chân trang"
      },
      {
        "en": "English from numbers",
        "vi": "Tiếng Anh với số"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Reports must distinguish what was directly observed (evidence) from interpretation (inference), and state confidence levels. Blurring the two leads to overstated conclusions that can collapse under scrutiny and mislead decision-makers.",
      "vi": "Báo cáo phải phân biệt cái quan sát trực tiếp (bằng chứng) với diễn giải (suy luận), và nêu mức độ tin cậy. Lẫn lộn hai thứ dẫn tới kết luận phóng đại, dễ sụp đổ khi bị soi và gây hiểu sai cho người ra quyết định."
    },
    "note": {
      "en": "State facts and inferences separately, with confidence levels.",
      "vi": "Nêu riêng sự kiện và suy luận, kèm mức độ tin cậy."
    }
  },

  {
    "app": "A",
    "sec": "a4",
    "secLabel": {
      "en": "A4 — Record Keeping & Interim Reporting",
      "vi": "A4 — Ghi chép & Báo cáo tạm"
    },
    "q": {
      "en": "The MAIN reason a report's methodology section matters is that it:",
      "vi": "Lý do CHÍNH khiến phần phương pháp luận của báo cáo quan trọng là vì nó:"
    },
    "opts": [
      {
        "en": "Lets another competent analyst reproduce and verify the findings",
        "vi": "Cho phép một analyst đủ năng lực khác tái lập và kiểm chứng phát hiện"
      },
      {
        "en": "Fills page count",
        "vi": "Lấp đầy số trang"
      },
      {
        "en": "Hides the tools used",
        "vi": "Che giấu công cụ đã dùng"
      },
      {
        "en": "Replaces the evidence",
        "vi": "Thay thế bằng chứng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Documenting tools, versions, steps and decisions makes the work reproducible and defensible — a peer or court-appointed expert can follow the same process and reach the same result, which is central to evidential credibility.",
      "vi": "Ghi lại công cụ, phiên bản, các bước và quyết định giúp công việc tái lập và bảo vệ được — một đồng nghiệp hoặc chuyên gia do tòa chỉ định có thể theo cùng quy trình và đạt cùng kết quả, điều cốt lõi cho độ tin cậy của bằng chứng."
    }
  },

  {
    "app": "A",
    "sec": "a4",
    "secLabel": {
      "en": "A4 — Record Keeping & Interim Reporting",
      "vi": "A4 — Ghi chép & Báo cáo tạm"
    },
    "q": {
      "en": "Which statement in a report is MOST appropriate when evidence is incomplete?",
      "vi": "Phát biểu nào trong báo cáo PHÙ HỢP nhất khi bằng chứng chưa đầy đủ?"
    },
    "opts": [
      {
        "en": "\"Logs were rotated, so activity before <date> could not be confirmed.\"",
        "vi": "\"Log đã bị xoay vòng nên không thể xác nhận hoạt động trước <ngày>.\""
      },
      {
        "en": "\"The attacker definitely started exactly on <date>.\"",
        "vi": "\"Kẻ tấn công chắc chắn bắt đầu đúng vào <ngày>.\""
      },
      {
        "en": "\"Nothing happened before <date>.\"",
        "vi": "\"Không có gì xảy ra trước <ngày>.\""
      },
      {
        "en": "Omit the limitation entirely",
        "vi": "Bỏ qua hoàn toàn giới hạn đó"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Honest reporting states limitations and avoids overreach. Acknowledging that rotated logs prevent confirmation (rather than claiming certainty or that nothing happened) accurately represents the evidence and preserves credibility.",
      "vi": "Báo cáo trung thực nêu rõ giới hạn và tránh phóng đại. Thừa nhận log đã xoay vòng khiến không thể xác nhận (thay vì khẳng định chắc chắn hoặc nói không có gì xảy ra) phản ánh đúng bằng chứng và giữ độ tin cậy."
    }
  },

  {
    "app": "A",
    "sec": "a5",
    "secLabel": {
      "en": "A5 — Threat Assessment",
      "vi": "A5 — Đánh giá mối đe dọa"
    },
    "q": {
      "en": "A phishing email with a link to a credential-harvesting page maps to which Cyber Kill Chain stage?",
      "vi": "Một email phishing có liên kết tới trang thu thập thông tin đăng nhập ứng với giai đoạn nào của Cyber Kill Chain?"
    },
    "opts": [
      {
        "en": "Delivery",
        "vi": "Delivery (Phân phối)"
      },
      {
        "en": "Weaponization",
        "vi": "Weaponization (Vũ khí hóa)"
      },
      {
        "en": "Installation",
        "vi": "Installation (Cài đặt)"
      },
      {
        "en": "Actions on Objectives",
        "vi": "Actions on Objectives"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Transmitting the lure to the victim (email/link) is Delivery. Weaponization was building it; Exploitation would be the victim triggering a vulnerability; Installation is establishing persistence. Credential harvesting itself sits later, around Actions on Objectives.",
      "vi": "Truyền mồi nhử tới nạn nhân (email/liên kết) là Delivery. Weaponization là dựng nó; Exploitation là nạn nhân kích hoạt lỗ hổng; Installation là thiết lập persistence. Việc thu thập credential nằm muộn hơn, quanh Actions on Objectives."
    }
  },

  {
    "app": "A",
    "sec": "a5",
    "secLabel": {
      "en": "A5 — Threat Assessment",
      "vi": "A5 — Đánh giá mối đe dọa"
    },
    "q": {
      "en": "Dumping LSASS to steal hashes maps to which MITRE ATT&CK tactic?",
      "vi": "Dump LSASS để trộm hash ứng với tactic nào của MITRE ATT&CK?"
    },
    "opts": [
      {
        "en": "Credential Access",
        "vi": "Credential Access (Truy cập thông tin xác thực)"
      },
      {
        "en": "Exfiltration",
        "vi": "Exfiltration (Trích xuất)"
      },
      {
        "en": "Reconnaissance",
        "vi": "Reconnaissance (Trinh sát)"
      },
      {
        "en": "Impact",
        "vi": "Impact (Tác động)"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Harvesting credentials (LSASS dumping, T1003) is the Credential Access tactic. Exfiltration is moving data out; Discovery/Recon is enumeration; Impact covers destruction/ransomware. Mapping observed behaviour to the right tactic guides detection and next-step prediction.",
      "vi": "Thu thập credential (dump LSASS, T1003) là tactic Credential Access. Exfiltration là đưa dữ liệu ra; Discovery/Recon là liệt kê; Impact là phá hủy/ransomware. Ánh xạ hành vi quan sát được tới đúng tactic giúp phát hiện và dự đoán bước tiếp theo."
    }
  },

  {
    "app": "A",
    "sec": "a5",
    "secLabel": {
      "en": "A5 — Threat Assessment",
      "vi": "A5 — Đánh giá mối đe dọa"
    },
    "q": {
      "en": "Clearing the Windows Security event log maps to which ATT&CK tactic?",
      "vi": "Xóa nhật ký sự kiện bảo mật của Windows ứng với tactic ATT&CK nào?"
    },
    "opts": [
      {
        "en": "Defense Evasion",
        "vi": "Defense Evasion (Né tránh phòng thủ)"
      },
      {
        "en": "Persistence",
        "vi": "Persistence (Duy trì)"
      },
      {
        "en": "Collection",
        "vi": "Collection (Thu thập)"
      },
      {
        "en": "Initial Access",
        "vi": "Initial Access (Truy cập ban đầu)"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Indicator removal such as clearing event logs (T1070) is Defense Evasion — hiding activity from defenders. Persistence keeps access, Collection gathers target data, Initial Access is the first foothold. (Clearing the Security log also generates event 1102.)",
      "vi": "Xóa chỉ dấu như xóa nhật ký sự kiện (T1070) là Defense Evasion — che giấu hoạt động khỏi người phòng thủ. Persistence giữ truy cập, Collection gom dữ liệu mục tiêu, Initial Access là chỗ đứng đầu tiên. (Xóa Security log cũng sinh sự kiện 1102.)"
    }
  },

  {
    "app": "A",
    "sec": "a5",
    "secLabel": {
      "en": "A5 — Threat Assessment",
      "vi": "A5 — Đánh giá mối đe dọa"
    },
    "q": {
      "en": "What BEST distinguishes an APT from commodity cybercrime?",
      "vi": "Điều gì PHÂN BIỆT tốt nhất một APT với tội phạm mạng đại trà (commodity)?"
    },
    "opts": [
      {
        "en": "APTs are well-resourced, targeted and persistent, often pursuing long-term strategic objectives",
        "vi": "APT có nguồn lực dồi dào, nhắm mục tiêu và bền bỉ, thường theo đuổi mục tiêu chiến lược dài hạn"
      },
      {
        "en": "APTs only use known viruses",
        "vi": "APT chỉ dùng virus đã biết"
      },
      {
        "en": "APTs never use phishing",
        "vi": "APT không bao giờ dùng phishing"
      },
      {
        "en": "APTs are always automated and untargeted",
        "vi": "APT luôn tự động và không nhắm mục tiêu"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Advanced Persistent Threats are typically state-aligned or well-funded, select specific targets, and maintain long-term covert access for espionage/strategic goals. Commodity crime is usually opportunistic, automated and financially motivated. This shapes expected TTPs and response.",
      "vi": "Advanced Persistent Threat thường gắn với nhà nước hoặc được tài trợ tốt, chọn mục tiêu cụ thể và duy trì truy cập ngầm dài hạn cho mục tiêu gián điệp/chiến lược. Tội phạm đại trà thường cơ hội, tự động và vì tiền. Điều này định hình TTP dự kiến và cách ứng phó."
    }
  },

  {
    "app": "A",
    "sec": "a5",
    "secLabel": {
      "en": "A5 — Threat Assessment",
      "vi": "A5 — Đánh giá mối đe dọa"
    },
    "q": {
      "en": "\"Tactical\" threat intelligence is MOST useful to defenders because it provides:",
      "vi": "Tình báo mối đe dọa cấp \"tactical\" hữu ích nhất cho người phòng thủ vì nó cung cấp:"
    },
    "opts": [
      {
        "en": "TTPs and IoCs that can be operationalised into detections",
        "vi": "TTP và IoC có thể đưa vào vận hành thành các quy tắc phát hiện"
      },
      {
        "en": "Board-level geopolitical trends",
        "vi": "Xu hướng địa chính trị cấp hội đồng quản trị"
      },
      {
        "en": "Marketing material",
        "vi": "Tài liệu tiếp thị"
      },
      {
        "en": "Stock prices",
        "vi": "Giá cổ phiếu"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Threat intel has levels: strategic (high-level, for leadership), operational (campaigns/actor intent) and tactical (concrete TTPs, IoCs, signatures defenders deploy now). Tactical intel directly feeds detection rules and hunts.",
      "vi": "Tình báo mối đe dọa có các cấp: strategic (cấp cao, cho lãnh đạo), operational (chiến dịch/ý đồ tác nhân) và tactical (TTP, IoC, signature cụ thể để triển khai ngay). Tình báo tactical trực tiếp nuôi các quy tắc phát hiện và hoạt động săn lùng."
    }
  },

  {
    "app": "A",
    "sec": "a5",
    "secLabel": {
      "en": "A5 — Threat Assessment",
      "vi": "A5 — Đánh giá mối đe dọa"
    },
    "q": {
      "en": "An intrusion uses tools and language strings associated with Group X, but targeting and timing fit Group Y. The analyst should consider:",
      "vi": "Một cuộc xâm nhập dùng công cụ và chuỗi ngôn ngữ gắn với Nhóm X, nhưng mục tiêu và thời điểm khớp Nhóm Y. Analyst nên cân nhắc:"
    },
    "opts": [
      {
        "en": "A possible false-flag; tools/strings are shared and can be planted to mislead attribution",
        "vi": "Khả năng false-flag; công cụ/chuỗi thường dùng chung và có thể bị cài để đánh lạc hướng attribution"
      },
      {
        "en": "That attribution is now certain",
        "vi": "Rằng attribution giờ đã chắc chắn"
      },
      {
        "en": "That language strings prove nationality",
        "vi": "Rằng chuỗi ngôn ngữ chứng minh quốc tịch"
      },
      {
        "en": "Ignoring the targeting data",
        "vi": "Bỏ qua dữ liệu mục tiêu"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Attackers reuse leaked tools and deliberately plant misleading artefacts (foreign-language strings, others' malware) as false flags. Attribution must weigh many corroborating indicators and remain probabilistic — single artefacts are easily faked.",
      "vi": "Kẻ tấn công tái dùng công cụ bị rò và cố ý cài artefact gây nhiễu (chuỗi ngôn ngữ nước ngoài, mã độc của nhóm khác) làm false flag. Attribution phải cân nhắc nhiều chỉ dấu củng cố và vẫn mang tính xác suất — artefact đơn lẻ rất dễ giả."
    },
    "note": {
      "en": "Single tools/language artefacts are weak, fakeable attribution evidence.",
      "vi": "Công cụ/chuỗi ngôn ngữ đơn lẻ là bằng chứng attribution yếu, dễ giả."
    }
  },

  {
    "app": "A",
    "sec": "a5",
    "secLabel": {
      "en": "A5 — Threat Assessment",
      "vi": "A5 — Đánh giá mối đe dọa"
    },
    "q": {
      "en": "Attackers compromise a niche industry news site frequently visited by the real target's staff. This technique is:",
      "vi": "Kẻ tấn công xâm nhập một trang tin chuyên ngành mà nhân viên của mục tiêu thật hay truy cập. Kỹ thuật này là:"
    },
    "opts": [
      {
        "en": "A watering-hole attack",
        "vi": "Tấn công watering-hole"
      },
      {
        "en": "Whaling",
        "vi": "Whaling"
      },
      {
        "en": "A brute-force attack",
        "vi": "Tấn công brute-force"
      },
      {
        "en": "A SYN flood",
        "vi": "SYN flood"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A watering-hole attack compromises a third-party site the intended victims trust and visit, infecting them indirectly — useful against hard targets. Whaling is executive-focused phishing; the others are unrelated direct attacks.",
      "vi": "Tấn công watering-hole xâm nhập một site bên thứ ba mà nạn nhân tin tưởng và hay truy cập, lây nhiễm họ gián tiếp — hữu ích với mục tiêu khó. Whaling là phishing nhắm lãnh đạo; các phương án còn lại là tấn công trực tiếp không liên quan."
    }
  },

  {
    "app": "A",
    "sec": "a5",
    "secLabel": {
      "en": "A5 — Threat Assessment",
      "vi": "A5 — Đánh giá mối đe dọa"
    },
    "q": {
      "en": "Which set of behaviours is the STRONGEST indicator of a malicious insider rather than an external intruder?",
      "vi": "Tập hành vi nào là dấu hiệu MẠNH NHẤT của nội gián ác ý hơn là kẻ xâm nhập bên ngoài?"
    },
    "opts": [
      {
        "en": "Legitimate credentials accessing unusual data volumes during normal hours from a normal workstation",
        "vi": "Thông tin đăng nhập hợp lệ truy cập lượng dữ liệu bất thường trong giờ làm việc từ một máy trạm bình thường"
      },
      {
        "en": "External brute-force against the VPN",
        "vi": "Brute-force từ bên ngoài vào VPN"
      },
      {
        "en": "Exploitation of an internet-facing web server",
        "vi": "Khai thác một web server hướng internet"
      },
      {
        "en": "A phishing email from an external domain",
        "vi": "Một email phishing từ domain bên ngoài"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Insiders already have valid access, so the signal is anomalous use of legitimate credentials — bulk access to data outside their role, often during normal hours from their own device — rather than the external exploitation/brute-force seen with outside attackers. Threat assessment tailors detection accordingly.",
      "vi": "Nội gián đã có quyền hợp lệ, nên dấu hiệu là việc dùng bất thường thông tin đăng nhập hợp lệ — truy cập hàng loạt dữ liệu ngoài phạm vi vai trò, thường trong giờ làm việc từ chính thiết bị của họ — chứ không phải khai thác/brute-force từ ngoài như kẻ tấn công bên ngoài. Đánh giá mối đe dọa điều chỉnh phát hiện cho phù hợp."
    }
  },

  {
    "app": "A",
    "sec": "a5",
    "secLabel": {
      "en": "A5 — Threat Assessment",
      "vi": "A5 — Đánh giá mối đe dọa"
    },
    "q": {
      "en": "Translating a threat into business context means primarily asking:",
      "vi": "Chuyển một mối đe dọa thành bối cảnh kinh doanh chủ yếu nghĩa là đặt câu hỏi:"
    },
    "opts": [
      {
        "en": "Which critical assets, data and processes this threat actually endangers, and the impact if realised",
        "vi": "Mối đe dọa này thực sự gây nguy cho tài sản, dữ liệu và quy trình trọng yếu nào, và tác động nếu xảy ra"
      },
      {
        "en": "Which antivirus brand to buy",
        "vi": "Nên mua hãng antivirus nào"
      },
      {
        "en": "What colour to make the dashboard",
        "vi": "Nên tô dashboard màu gì"
      },
      {
        "en": "How fast the CPU is",
        "vi": "CPU nhanh đến đâu"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A threat only matters in relation to the organisation's crown jewels. Contextualising means linking attacker capability/intent to the specific assets, data and processes at risk and the potential business impact — driving proportionate prioritisation and response.",
      "vi": "Một mối đe dọa chỉ có ý nghĩa khi gắn với \"viên ngọc quý\" của tổ chức. Đặt vào bối cảnh nghĩa là liên kết năng lực/ý đồ của kẻ tấn công với các tài sản, dữ liệu và quy trình cụ thể đang gặp rủi ro và tác động kinh doanh tiềm tàng — từ đó ưu tiên và ứng phó tương xứng."
    }
  },

  {
    "app": "A",
    "sec": "a2",
    "secLabel": {
      "en": "A2 — Incident Chronology",
      "vi": "A2 — Dòng thời gian sự cố"
    },
    "q": {
      "en": "Two events on the same host share an identical second-precision timestamp. To order them you would BEST use:",
      "vi": "Hai sự kiện trên cùng host có mốc thời gian trùng nhau ở độ chính xác giây. Để sắp thứ tự, bạn nên dùng:"
    },
    "opts": [
      {
        "en": "Higher-resolution sources or sequence identifiers (sub-second times, record/event numbers, USN)",
        "vi": "Nguồn độ phân giải cao hơn hoặc định danh trình tự (thời gian dưới giây, số bản ghi/sự kiện, USN)"
      },
      {
        "en": "A coin flip",
        "vi": "Tung đồng xu"
      },
      {
        "en": "Alphabetical event names",
        "vi": "Tên sự kiện theo bảng chữ cái"
      },
      {
        "en": "The largest file first",
        "vi": "File lớn nhất trước"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Second-granularity ties are common. Resolve them with finer-resolution timestamps where available, or monotonic sequence numbers (event record IDs, USN journal entries) that preserve true ordering regardless of timestamp precision.",
      "vi": "Trùng ở mức giây là phổ biến. Giải quyết bằng mốc thời gian độ phân giải mịn hơn nếu có, hoặc số trình tự tăng đơn điệu (event record ID, mục USN journal) vốn giữ đúng thứ tự bất kể độ chính xác của mốc thời gian."
    }
  },

  {
    "app": "A",
    "sec": "a4",
    "secLabel": {
      "en": "A4 — Record Keeping & Interim Reporting",
      "vi": "A4 — Ghi chép & Báo cáo tạm"
    },
    "q": {
      "en": "The single most valuable property of contemporaneous notes is that they are:",
      "vi": "Đặc tính giá trị nhất của ghi chép đồng thời (contemporaneous) là chúng:"
    },
    "opts": [
      {
        "en": "Recorded at the time of the action, making them accurate and credible later",
        "vi": "Được ghi ngay tại thời điểm hành động, nên chính xác và đáng tin về sau"
      },
      {
        "en": "Written months afterwards",
        "vi": "Viết sau đó nhiều tháng"
      },
      {
        "en": "Kept only in memory",
        "vi": "Chỉ lưu trong trí nhớ"
      },
      {
        "en": "Anonymous and undated",
        "vi": "Ẩn danh và không ghi ngày"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "\"Contemporaneous\" means made at or near the time of the events they describe. Such notes are far more reliable and persuasive than later reconstruction from memory, supporting both reproducibility and legal credibility.",
      "vi": "\"Contemporaneous\" nghĩa là được ghi tại hoặc gần thời điểm sự kiện mà chúng mô tả. Ghi chép như vậy đáng tin và thuyết phục hơn nhiều so với dựng lại từ trí nhớ về sau, hỗ trợ cả tính tái lập lẫn độ tin cậy pháp lý."
    }
  },

  {
    "app": "A",
    "sec": "a1",
    "secLabel": {
      "en": "A1 — Engagement Lifecycle Management",
      "vi": "A1 — Quản lý vòng đời incident"
    },
    "q": {
      "en": "During scoping a client says \"just look at the one infected laptop\". The analyst should advise that:",
      "vi": "Khi xác định phạm vi, khách hàng nói \"chỉ xem mỗi cái laptop nhiễm thôi\". Analyst nên tư vấn rằng:"
    },
    "opts": [
      {
        "en": "A single host rarely tells the full story; scoping should consider lateral movement and shared accounts",
        "vi": "Một host đơn lẻ hiếm khi kể trọn câu chuyện; phạm vi nên xét lateral movement và tài khoản dùng chung"
      },
      {
        "en": "One laptop is always sufficient",
        "vi": "Một laptop luôn là đủ"
      },
      {
        "en": "Network logs are irrelevant",
        "vi": "Log mạng không liên quan"
      },
      {
        "en": "No other host could be affected",
        "vi": "Không host nào khác có thể bị ảnh hưởng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Modern intrusions spread via stolen credentials and shared resources. Limiting analysis to one host risks missing the true scope and leaving the attacker active elsewhere. Good scoping balances client constraints with the need to follow the evidence (network logs, AD, other hosts).",
      "vi": "Xâm nhập hiện đại lan qua thông tin đăng nhập bị trộm và tài nguyên dùng chung. Giới hạn phân tích vào một host có nguy cơ bỏ lỡ phạm vi thật và để kẻ tấn công còn hoạt động ở nơi khác. Xác định phạm vi tốt cân bằng giữa ràng buộc của khách hàng và nhu cầu đi theo bằng chứng (log mạng, AD, các host khác)."
    }
  },

  {
    "app": "A",
    "sec": "a3",
    "secLabel": {
      "en": "A3 — Law & Compliance",
      "vi": "A3 — Pháp lý & Tuân thủ"
    },
    "q": {
      "en": "A breach affecting payment cards may trigger obligations to notify:",
      "vi": "Một vi phạm ảnh hưởng thẻ thanh toán có thể làm phát sinh nghĩa vụ thông báo cho:"
    },
    "opts": [
      {
        "en": "Acquiring bank/card schemes (PCI), and possibly regulators and affected individuals",
        "vi": "Ngân hàng thanh toán/tổ chức thẻ (PCI), và có thể cả cơ quan quản lý lẫn cá nhân bị ảnh hưởng"
      },
      {
        "en": "No one — card data is exempt",
        "vi": "Không ai — dữ liệu thẻ được miễn"
      },
      {
        "en": "Only the software vendor",
        "vi": "Chỉ nhà cung cấp phần mềm"
      },
      {
        "en": "Only internal IT",
        "vi": "Chỉ bộ phận IT nội bộ"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Cardholder-data breaches engage PCI DSS notification duties to acquirers/card brands, and depending on jurisdiction and personal data involved, data-protection regulators and affected individuals too. Knowing who must be told, and when, is part of A3.",
      "vi": "Vi phạm dữ liệu chủ thẻ làm phát sinh nghĩa vụ thông báo theo PCI DSS cho ngân hàng thanh toán/tổ chức thẻ, và tùy khu vực pháp lý cùng dữ liệu cá nhân liên quan, cả cơ quan quản lý bảo vệ dữ liệu và cá nhân bị ảnh hưởng. Biết phải báo cho ai, khi nào là một phần của A3."
    }
  },

  {
    "app": "A",
    "sec": "a5",
    "secLabel": {
      "en": "A5 — Threat Assessment",
      "vi": "A5 — Đánh giá mối đe dọa"
    },
    "q": {
      "en": "Lateral movement using stolen domain credentials to reach a file server maps to which ATT&CK tactic?",
      "vi": "Lateral movement dùng thông tin đăng nhập miền bị trộm để tới một file server ứng với tactic ATT&CK nào?"
    },
    "opts": [
      {
        "en": "Lateral Movement",
        "vi": "Lateral Movement (Di chuyển ngang)"
      },
      {
        "en": "Initial Access",
        "vi": "Initial Access (Truy cập ban đầu)"
      },
      {
        "en": "Impact",
        "vi": "Impact (Tác động)"
      },
      {
        "en": "Resource Development",
        "vi": "Resource Development (Phát triển tài nguyên)"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Moving between systems inside the network (e.g. pass-the-hash, RDP, SMB with stolen creds) is the Lateral Movement tactic. Initial Access is the first entry from outside; Impact is destructive end-goals; Resource Development is pre-attack infrastructure setup.",
      "vi": "Di chuyển giữa các hệ thống bên trong mạng (vd pass-the-hash, RDP, SMB với credential trộm) là tactic Lateral Movement. Initial Access là lần vào đầu tiên từ bên ngoài; Impact là mục tiêu phá hủy cuối; Resource Development là dựng hạ tầng trước tấn công."
    }
  }

);
