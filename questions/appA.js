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
        "en": "Store and transfer it password-protected/zipped, analyse only in an isolated sandbox",
        "vi": "Lưu và truyền dưới dạng nén có mật khẩu, chỉ phân tích trong sandbox cách ly"
      },
      {
        "en": "Rename its extension to .txt so it cannot execute, then open it normally",
        "vi": "Đổi đuôi thành .txt để nó không chạy được, rồi mở bình thường"
      },
      {
        "en": "Submit it to a public sandbox so the whole team can watch it run",
        "vi": "Gửi lên sandbox công khai để cả nhóm cùng xem nó chạy"
      },
      {
        "en": "Run it once on a networked VM to capture its live network behaviour",
        "vi": "Chạy một lần trên VM có mạng để bắt hành vi mạng trực tiếp"
      }
    ],
    "correct": 0,
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
        "en": "One source logs in UTC and the other in local time",
        "vi": "Một nguồn ghi theo UTC, nguồn kia theo giờ địa phương"
      },
      {
        "en": "One of the two log files has become silently corrupted",
        "vi": "Một trong hai file log đã hỏng một cách âm thầm"
      },
      {
        "en": "The attacker forged the timestamp on one of the sources",
        "vi": "Kẻ tấn công đã giả mạo mốc thời gian trên một nguồn"
      },
      {
        "en": "The two events are unrelated and only coincidentally similar",
        "vi": "Hai sự kiện không liên quan, chỉ trùng hợp giống nhau"
      }
    ],
    "correct": 0,
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
        "en": "Prove evidence was not altered and track who handled it, when",
        "vi": "Chứng minh bằng chứng không bị thay đổi và ghi lại ai xử lý, khi nào"
      },
      {
        "en": "Speed up the analysis by indexing exhibits for searching",
        "vi": "Tăng tốc phân tích bằng cách lập chỉ mục tang vật để tìm kiếm"
      },
      {
        "en": "Reduce the cost of the engagement by reusing prior exhibits",
        "vi": "Giảm chi phí engagement bằng cách tái dùng tang vật trước"
      },
      {
        "en": "Satisfy the antivirus vendor's sample-submission requirements",
        "vi": "Đáp ứng yêu cầu nộp mẫu của nhà cung cấp antivirus"
      }
    ],
    "correct": 0,
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
        "en": "Tactics — the adversary's goal — and the Techniques used",
        "vi": "Tactics — mục tiêu của kẻ tấn công — và các Techniques dùng"
      },
      {
        "en": "The vendor product names and their version numbers",
        "vi": "Tên sản phẩm của nhà cung cấp và số phiên bản"
      },
      {
        "en": "The seven numbered layers of the OSI network model",
        "vi": "Bảy tầng được đánh số của mô hình mạng OSI"
      },
      {
        "en": "CVE identifiers ordered by their severity score",
        "vi": "Các mã CVE sắp theo điểm nghiêm trọng"
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
        "en": "Maintaining asset inventories, baselines and an IR plan in advance",
        "vi": "Duy trì sẵn danh mục tài sản, baseline và kế hoạch IR"
      },
      {
        "en": "Disabling verbose logging so the SIEM is not overwhelmed in an incident",
        "vi": "Tắt logging chi tiết để SIEM không quá tải khi có sự cố"
      },
      {
        "en": "Granting all responders standing domain-admin to speed up response",
        "vi": "Cấp sẵn quyền domain-admin cho mọi người xử lý để ứng phó nhanh"
      },
      {
        "en": "Waiting until an incident occurs to define team roles and escalation",
        "vi": "Đợi tới khi sự cố xảy ra mới phân vai và lập quy trình leo thang"
      }
    ],
    "correct": 0,
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
        "en": "They support reproducibility, accuracy and stand up to legal scrutiny",
        "vi": "Hỗ trợ tái lập, độ chính xác và chịu được soi xét pháp lý"
      },
      {
        "en": "They are required only for billing and time-tracking purposes",
        "vi": "Chúng chỉ cần cho mục đích tính tiền và theo dõi thời gian"
      },
      {
        "en": "They remove the need to preserve the underlying evidence",
        "vi": "Chúng loại bỏ nhu cầu bảo toàn bằng chứng gốc"
      },
      {
        "en": "They speed up how quickly malware can be detonated safely",
        "vi": "Chúng tăng tốc việc kích nổ mã độc một cách an toàn"
      }
    ],
    "correct": 0,
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
        "en": "Coordination, advisories and incident-handling support",
        "vi": "Điều phối, khuyến cáo và hỗ trợ xử lý sự cố"
      },
      {
        "en": "Legal authority to prosecute attackers and seize assets",
        "vi": "Thẩm quyền pháp lý truy tố kẻ tấn công và tịch thu tài sản"
      },
      {
        "en": "Discounted antivirus and endpoint-protection licences",
        "vi": "Giấy phép antivirus và bảo vệ endpoint giá ưu đãi"
      },
      {
        "en": "Dedicated internet bandwidth for members in an incident",
        "vi": "Băng thông internet riêng cho thành viên khi có sự cố"
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
        "en": "A probabilistic judgement from many corroborating indicators",
        "vi": "Một phán đoán xác suất từ nhiều chỉ dấu củng cố"
      },
      {
        "en": "A certainty as soon as one indicator of compromise matches",
        "vi": "Một sự chắc chắn ngay khi một IoC trùng khớp"
      },
      {
        "en": "An irrelevant detail that does not affect the response",
        "vi": "Một chi tiết không liên quan, không ảnh hưởng việc xử lý"
      },
      {
        "en": "A conclusion resting solely on the observed source IP",
        "vi": "Một kết luận chỉ dựa vào IP nguồn quan sát được"
      }
    ],
    "correct": 0,
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
        "en": "Convert everything to the analyst's own local time zone",
        "vi": "Quy mọi thứ về múi giờ địa phương của chính analyst"
      },
      {
        "en": "Keep only the events that look immediately relevant",
        "vi": "Chỉ giữ những sự kiện trông có vẻ liên quan ngay"
      },
      {
        "en": "Trust each system's local clock without any adjustment",
        "vi": "Tin đồng hồ cục bộ của mỗi hệ thống mà không hiệu chỉnh"
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
        "en": "Logs are stored only in binary formats that humans cannot interpret",
        "vi": "Log chỉ lưu ở định dạng nhị phân mà con người không đọc được"
      },
      {
        "en": "Logs always use the analyst's local time zone and never UTC",
        "vi": "Log luôn dùng múi giờ địa phương của analyst, không bao giờ UTC"
      },
      {
        "en": "Logs are encrypted at rest and unreadable without the SIEM",
        "vi": "Log được mã hóa khi lưu và không đọc được nếu thiếu SIEM"
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
        "en": "The pagefile and hibernation file on the system disk",
        "vi": "Pagefile và file ngủ đông trên đĩa hệ thống"
      },
      {
        "en": "Archived backup tapes held off-site for retention",
        "vi": "Băng sao lưu lưu trữ ngoài cơ sở để giữ dài hạn"
      },
      {
        "en": "Router and switch configuration files on the network",
        "vi": "File cấu hình router và switch trên mạng"
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
        "en": "It forces the malware to delete itself, cleaning the host automatically",
        "vi": "Nó buộc mã độc tự xóa, làm sạch host tự động"
      },
      {
        "en": "It immediately patches the vulnerability the attacker exploited",
        "vi": "Nó vá ngay lỗ hổng mà kẻ tấn công đã khai thác"
      },
      {
        "en": "It guarantees the disk image will hash identically afterwards",
        "vi": "Nó đảm bảo image đĩa sẽ có hash giống hệt sau đó"
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
        "en": "Remove the malware, rogue accounts, persistence and root cause",
        "vi": "Loại bỏ mã độc, tài khoản giả, persistence và nguyên nhân gốc"
      },
      {
        "en": "Restore the affected systems and resume normal monitoring",
        "vi": "Khôi phục các hệ thống bị ảnh hưởng và giám sát bình thường"
      },
      {
        "en": "Capture volatile memory before any evidence can be lost",
        "vi": "Bắt bộ nhớ volatile trước khi mất bất kỳ bằng chứng nào"
      },
      {
        "en": "Produce the final report and brief senior management",
        "vi": "Lập báo cáo cuối và báo cáo cho lãnh đạo cấp cao"
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
        "en": "It is the phase where volatile evidence is finally acquired",
        "vi": "Đó là giai đoạn cuối cùng thu thập bằng chứng volatile"
      },
      {
        "en": "It legally clears the organisation of any breach liability",
        "vi": "Nó miễn trừ pháp lý cho tổ chức khỏi mọi trách nhiệm vi phạm"
      },
      {
        "en": "It restores the last clean backup and reconnects the systems",
        "vi": "Nó khôi phục bản sao lưu sạch cuối và kết nối lại hệ thống"
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
        "en": "Seconds elapsed since 1 January 1970 (the Unix epoch)",
        "vi": "Số giây kể từ 1 tháng 1 năm 1970 (Unix epoch)"
      },
      {
        "en": "Milliseconds elapsed since the system was last powered on",
        "vi": "Số mili-giây kể từ lần bật máy gần nhất"
      },
      {
        "en": "Days elapsed since 1 January 1900 (the OLE epoch)",
        "vi": "Số ngày kể từ 1 tháng 1 năm 1900 (OLE epoch)"
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
        "en": "Modified, Accessed, metadata-Changed and Born/created",
        "vi": "Modified, Accessed, Changed (metadata) và Born/created"
      },
      {
        "en": "Made, Archived, Copied and Backed-up by the OS",
        "vi": "Made, Archived, Copied và Backed-up bởi OS"
      },
      {
        "en": "Memory, Acquisition, Cache and Buffer offsets",
        "vi": "Memory, Acquisition, Cache và Buffer offset"
      },
      {
        "en": "Master, Allocation, Cluster and Block tables",
        "vi": "Master, Allocation, Cluster và Block table"
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
        "en": "The original media must always be edited to speed up analysis",
        "vi": "Phải luôn sửa phương tiện gốc để tăng tốc phân tích"
      },
      {
        "en": "Evidence integrity is optional if the analyst is experienced",
        "vi": "Toàn vẹn bằng chứng là tùy chọn nếu analyst có kinh nghiệm"
      },
      {
        "en": "No audit trail is needed as long as hashes are recorded",
        "vi": "Không cần audit trail miễn là đã ghi lại hash"
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
        "en": "Mandatory breach-notification timelines for personal data",
        "vi": "Thời hạn bắt buộc thông báo vi phạm cho dữ liệu cá nhân"
      },
      {
        "en": "Security requirements for storing and processing card data",
        "vi": "Yêu cầu bảo mật khi lưu và xử lý dữ liệu thẻ"
      },
      {
        "en": "Encryption standards for wireless (802.11) networks",
        "vi": "Tiêu chuẩn mã hóa cho mạng không dây (802.11)"
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
        "en": "Preserve evidence and advise the client on involving law enforcement",
        "vi": "Bảo toàn bằng chứng và tư vấn khách hàng về việc liên hệ hành pháp"
      },
      {
        "en": "Publish the findings so the community can respond quickly",
        "vi": "Công bố phát hiện để cộng đồng ứng phó nhanh"
      },
      {
        "en": "Confront the suspected individual to obtain a confession",
        "vi": "Đối chất người bị nghi để lấy lời thú nhận"
      },
      {
        "en": "Delete the illegal material to limit the client's liability",
        "vi": "Xóa tài liệu bất hợp pháp để giảm trách nhiệm cho khách"
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
        "en": "An executive summary plus detailed technical evidence",
        "vi": "Một executive summary cùng bằng chứng kỹ thuật chi tiết"
      },
      {
        "en": "Raw tool output so readers can interpret it themselves",
        "vi": "Output thô của công cụ để người đọc tự diễn giải"
      },
      {
        "en": "A single unlabelled block of text, to save on space",
        "vi": "Một khối văn bản không nhãn duy nhất, để tiết kiệm chỗ"
      },
      {
        "en": "The findings without conclusions, for the reader to decide",
        "vi": "Các phát hiện không kết luận, để người đọc tự quyết"
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
        "en": "TTPs — tools, tactics, techniques and procedures",
        "vi": "TTP — công cụ, chiến thuật, kỹ thuật và quy trình"
      },
      {
        "en": "The file hash values of the malware samples",
        "vi": "Giá trị hash file của các mẫu mã độc"
      },
      {
        "en": "The IP addresses used by the command server",
        "vi": "Các địa chỉ IP mà máy chủ điều khiển dùng"
      },
      {
        "en": "The domain names registered for the campaign",
        "vi": "Các tên miền đăng ký cho chiến dịch"
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
        "vi": "Adversary, Capability, Infrastructure, Victim"
      },
      {
        "en": "People, Process, Technology, Cost",
        "vi": "People, Process, Technology, Cost"
      },
      {
        "en": "Strategic, Operational, Tactical, Technical",
        "vi": "Strategic, Operational, Tactical, Technical"
      },
      {
        "en": "Confidentiality, Integrity, Availability, Accountability",
        "vi": "Confidentiality, Integrity, Availability, Accountability"
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
        "en": "Whaling — a form of spear-phishing aimed at executives",
        "vi": "Whaling — một dạng spear-phishing nhắm lãnh đạo"
      },
      {
        "en": "Smishing — phishing delivered over SMS messages",
        "vi": "Smishing — phishing gửi qua tin nhắn SMS"
      },
      {
        "en": "A drive-by download from a compromised website",
        "vi": "Một drive-by download từ trang web bị xâm nhập"
      },
      {
        "en": "A watering-hole attack on a frequently-visited site",
        "vi": "Một watering-hole vào trang hay được truy cập"
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
        "en": "An IoC evidences a past breach; an IoA, behaviour in progress",
        "vi": "IoC chứng tỏ vi phạm đã xảy ra; IoA, hành vi đang diễn ra"
      },
      {
        "en": "An IoC is always a file hash; an IoA, always an IP address",
        "vi": "IoC luôn là hash file; IoA, luôn là một địa chỉ IP"
      },
      {
        "en": "They are two names for exactly the same forensic artefact",
        "vi": "Chúng là hai tên cho cùng một artefact forensic"
      },
      {
        "en": "An IoA is only used once recovery is fully complete",
        "vi": "IoA chỉ dùng khi recovery đã hoàn tất hoàn toàn"
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
        "en": "They alter system state and may overwrite vital evidence",
        "vi": "Chúng làm thay đổi trạng thái và có thể ghi đè bằng chứng quan trọng"
      },
      {
        "en": "They run too slowly to be useful in a time-critical response",
        "vi": "Chúng chạy quá chậm để hữu ích trong tình huống gấp"
      },
      {
        "en": "They require local admin rights responders rarely have",
        "vi": "Chúng cần quyền admin cục bộ mà người xử lý hiếm khi có"
      },
      {
        "en": "They cannot read files locked by running processes",
        "vi": "Chúng không đọc được file đang bị tiến trình khóa"
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
        "en": "Assume the two clocks are already aligned and compare directly",
        "vi": "Giả định hai đồng hồ đã khớp và so sánh trực tiếp"
      },
      {
        "en": "Discard the workstation log because it uses local time",
        "vi": "Loại bỏ log máy trạm vì nó dùng giờ địa phương"
      },
      {
        "en": "Add seven hours to the firewall log to match the workstation",
        "vi": "Cộng bảy giờ vào log firewall để khớp với máy trạm"
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
        "en": "It lets the client make timely containment decisions early",
        "vi": "Nó cho khách hàng ra quyết định cô lập kịp thời, sớm"
      },
      {
        "en": "It removes the need to preserve evidence for the report",
        "vi": "Nó loại bỏ nhu cầu bảo toàn bằng chứng cho báo cáo"
      },
      {
        "en": "It replaces the detailed technical findings entirely",
        "vi": "Nó thay thế hoàn toàn các phát hiện kỹ thuật chi tiết"
      },
      {
        "en": "It lets the engagement end early once an update is sent",
        "vi": "Nó cho phép kết thúc engagement sớm khi đã gửi cập nhật"
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
        "en": "Four phases; containment, eradication and recovery combine",
        "vi": "Bốn giai đoạn; containment, eradication và recovery gộp lại"
      },
      {
        "en": "Six phases, with each activity kept fully separate",
        "vi": "Sáu giai đoạn, mỗi hoạt động được tách rời hoàn toàn"
      },
      {
        "en": "Three phases, ending once the threat is eradicated",
        "vi": "Ba giai đoạn, kết thúc khi mối đe dọa bị loại bỏ"
      },
      {
        "en": "Five phases, beginning with Detection not Preparation",
        "vi": "Năm giai đoạn, bắt đầu bằng Detection không phải Preparation"
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
        "en": "To scope all footholds first; acting early tips off the attacker",
        "vi": "Để khoanh vùng hết chỗ đứng trước; hành động sớm đánh động kẻ tấn công"
      },
      {
        "en": "Because eradication may only be done by law enforcement",
        "vi": "Vì eradication chỉ được làm bởi cơ quan hành pháp"
      },
      {
        "en": "To let the malware finish so its full payload is recovered",
        "vi": "Để mã độc chạy xong nhằm khôi phục toàn bộ payload"
      },
      {
        "en": "Because volatile memory must be wiped before cleanup",
        "vi": "Vì phải xóa bộ nhớ volatile trước khi dọn dẹp"
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
        "en": "The attacker may read internal email/chat and learn the plan",
        "vi": "Kẻ tấn công có thể đọc email/chat nội bộ và biết kế hoạch"
      },
      {
        "en": "Out-of-band channels deliver messages faster than email",
        "vi": "Kênh ngoài luồng gửi tin nhanh hơn email"
      },
      {
        "en": "Regulators require breach communications to avoid email",
        "vi": "Cơ quan quản lý yêu cầu liên lạc vi phạm tránh email"
      },
      {
        "en": "It reduces load on the mail servers during the incident",
        "vi": "Nó giảm tải cho máy chủ mail trong lúc sự cố"
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
        "en": "That the backup is the most recent one available before recovery",
        "vi": "Bản sao lưu là bản mới nhất hiện có trước khi khôi phục"
      },
      {
        "en": "That the backup is compressed so it restores as quickly as possible",
        "vi": "Bản sao lưu được nén để khôi phục nhanh nhất có thể"
      },
      {
        "en": "That the backup is stored on tape rather than on disk",
        "vi": "Bản sao lưu được giữ trên băng từ thay vì trên đĩa"
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
        "en": "A dead-box full-disk image taken immediately after shutdown",
        "vi": "Một image full-disk dead-box ngay sau khi tắt máy"
      },
      {
        "en": "Only the Windows event logs, exported and emailed to the team",
        "vi": "Chỉ log sự kiện Windows, xuất ra và gửi email cho nhóm"
      },
      {
        "en": "Nothing at all until a scheduled maintenance window opens",
        "vi": "Không gì cả cho tới khi có cửa sổ bảo trì theo lịch"
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
        "en": "The chronological order in which the alerts were first raised",
        "vi": "Thứ tự thời gian các cảnh báo được nêu ra đầu tiên"
      },
      {
        "en": "The number of separate alerts generated on each host",
        "vi": "Số lượng cảnh báo riêng lẻ sinh ra trên mỗi host"
      },
      {
        "en": "Which systems are physically closest to the response team",
        "vi": "Hệ thống nào gần đội xử lý nhất về mặt vật lý"
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
        "en": "The most senior employee affected by the incident",
        "vi": "Nhân viên cấp cao nhất bị ảnh hưởng bởi sự cố"
      },
      {
        "en": "The last host confirmed clean during the recovery phase",
        "vi": "Host cuối cùng được xác nhận sạch trong giai đoạn recovery"
      },
      {
        "en": "The server that holds the organisation's primary backups",
        "vi": "Máy chủ giữ bản sao lưu chính của tổ chức"
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
        "en": "It leaves a small, documented footprint by loading into RAM",
        "vi": "Nó để lại dấu chân nhỏ, có ghi chép, do nạp vào RAM"
      },
      {
        "en": "It has no measurable effect on the system being acquired",
        "vi": "Nó không có tác động đo được lên hệ thống đang thu thập"
      },
      {
        "en": "It permanently encrypts the contents of captured memory",
        "vi": "Nó mã hóa vĩnh viễn nội dung bộ nhớ đã bắt"
      },
      {
        "en": "It removes any malware that is resident only in memory",
        "vi": "Nó loại bỏ mọi mã độc chỉ tồn tại trong bộ nhớ"
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
        "en": "You cannot be certain every persistence mechanism was removed",
        "vi": "Không thể chắc mọi cơ chế persistence đã được loại bỏ"
      },
      {
        "en": "Reimaging is always faster than scanning and cleaning",
        "vi": "Cài lại luôn nhanh hơn quét và làm sạch"
      },
      {
        "en": "Antivirus cannot scan a mounted forensic disk image",
        "vi": "Antivirus không quét được image đĩa forensic đã mount"
      },
      {
        "en": "Cleaning a compromised host is prohibited by regulation",
        "vi": "Làm sạch host bị xâm nhập bị quy định cấm"
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
        "en": "Run a full antivirus scan and quarantine whatever it detects",
        "vi": "Chạy quét antivirus toàn bộ và cách ly những gì nó phát hiện"
      },
      {
        "en": "Reboot the machine to clear the infection from memory",
        "vi": "Khởi động lại máy để xóa lây nhiễm khỏi bộ nhớ"
      },
      {
        "en": "Delete the attachment and ask the user to change their password",
        "vi": "Xóa file đính kèm và yêu cầu người dùng đổi mật khẩu"
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
        "en": "The file's size in the MFT against its actual size on disk",
        "vi": "Kích thước file trong MFT với kích thước thực trên đĩa"
      },
      {
        "en": "The Recycle Bin $I record against its matching $R record",
        "vi": "Bản ghi $I của Thùng rác với bản ghi $R tương ứng"
      },
      {
        "en": "The Prefetch last-run time against the registry LastWrite time",
        "vi": "Thời gian chạy cuối của Prefetch với LastWrite của registry"
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
        "en": "A few seconds early, well within normal clock drift",
        "vi": "Sớm vài giây, vẫn trong giới hạn lệch đồng hồ bình thường"
      },
      {
        "en": "Exactly one hour off, as if a time zone were ignored",
        "vi": "Lệch đúng một giờ, như thể bỏ qua một múi giờ"
      },
      {
        "en": "Correct, since both formats share the same 1970 epoch",
        "vi": "Chính xác, vì cả hai định dạng dùng chung epoch 1970"
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
        "en": "Discard the host's logs entirely as unreliable evidence",
        "vi": "Loại bỏ hoàn toàn log của host vì là bằng chứng không tin cậy"
      },
      {
        "en": "Treat the network devices as the ones that are wrong",
        "vi": "Coi các thiết bị mạng mới là bên bị sai"
      },
      {
        "en": "Ignore the three-minute drift as within acceptable tolerance",
        "vi": "Bỏ qua độ lệch ba phút vì nằm trong dung sai chấp nhận được"
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
        "en": "Corroborate with external sources outside the attacker's control",
        "vi": "Đối chiếu nguồn ngoài, ngoài tầm kiểm soát của kẻ tấn công"
      },
      {
        "en": "Trust the local system clock as the primary time source",
        "vi": "Tin đồng hồ hệ thống cục bộ làm nguồn thời gian chính"
      },
      {
        "en": "Reset the clock to the correct time and re-run events",
        "vi": "Đặt lại đồng hồ về đúng giờ rồi chạy lại sự kiện"
      },
      {
        "en": "Abandon the timeline since the order cannot be set",
        "vi": "Bỏ timeline vì không thể xác lập thứ tự"
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
        "en": "Assume the EXIF time is already recorded in UTC",
        "vi": "Giả định thời gian EXIF đã được ghi theo UTC"
      },
      {
        "en": "Treat the camera's offset as zero for the comparison",
        "vi": "Coi độ lệch của máy ảnh bằng 0 khi so sánh"
      },
      {
        "en": "Exclude the photo, since image times are never reliable",
        "vi": "Loại bỏ ảnh, vì thời gian ảnh không bao giờ tin cậy"
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
        "en": "The pagefile, which records writes in chronological order",
        "vi": "Pagefile, vốn ghi các lần ghi theo thứ tự thời gian"
      },
      {
        "en": "The Prefetch folder, ordered by program execution",
        "vi": "Thư mục Prefetch, sắp theo việc chạy chương trình"
      },
      {
        "en": "The Recycle Bin, ordered by file deletion timestamp",
        "vi": "Thùng rác, sắp theo mốc thời gian xóa file"
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
        "en": "24 hours of the breach first occurring",
        "vi": "24 giờ kể từ khi vi phạm bắt đầu xảy ra"
      },
      {
        "en": "30 days of completing the investigation",
        "vi": "30 ngày kể từ khi hoàn tất điều tra"
      },
      {
        "en": "One calendar year of the financial year-end",
        "vi": "Một năm dương lịch kể từ cuối năm tài chính"
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
        "en": "Be competent and able to justify the relevance of their actions",
        "vi": "Đủ năng lực và biện giải được mức độ liên quan của hành động"
      },
      {
        "en": "Avoid documenting the access to keep the report concise",
        "vi": "Tránh ghi chép việc truy cập để báo cáo ngắn gọn"
      },
      {
        "en": "Securely delete the original data once it is copied",
        "vi": "Xóa an toàn dữ liệu gốc ngay khi đã sao chép"
      },
      {
        "en": "Obtain written sign-off from the antivirus vendor first",
        "vi": "Lấy phê duyệt văn bản từ nhà cung cấp antivirus trước"
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
        "en": "Who handled it, what, when and where, with integrity hashes",
        "vi": "Ai xử lý, làm gì, khi nào, ở đâu, kèm hash toàn vẹn"
      },
      {
        "en": "Only the lead analyst's name and professional certification",
        "vi": "Chỉ tên và chứng chỉ chuyên môn của analyst chính"
      },
      {
        "en": "Just the file size and format of each acquired exhibit",
        "vi": "Chỉ kích thước và định dạng của mỗi tang vật"
      },
      {
        "en": "The purchase price and warranty status of the hardware",
        "vi": "Giá mua và tình trạng bảo hành của phần cứng"
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
        "en": "That the image has been securely encrypted while at rest",
        "vi": "Rằng image đã được mã hóa an toàn khi lưu trữ"
      },
      {
        "en": "That the analyst holds a recognised forensic certification",
        "vi": "Rằng analyst có một chứng chỉ forensic được công nhận"
      },
      {
        "en": "That the disk was read at its maximum supported speed",
        "vi": "Rằng đĩa được đọc ở tốc độ tối đa hỗ trợ"
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
        "en": "Immediately delete all logs once the case has been reported",
        "vi": "Xóa ngay toàn bộ log khi vụ việc đã được báo cáo"
      },
      {
        "en": "Encrypt every backup before handing it to investigators",
        "vi": "Mã hóa mọi bản sao lưu trước khi giao cho điều tra viên"
      },
      {
        "en": "Publicly disclose the incident within the statutory deadline",
        "vi": "Công bố sự cố ra công chúng trong thời hạn luật định"
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
        "en": "Which incidents they coordinate and when to hand off",
        "vi": "Sự cố nào họ điều phối và khi nào chuyển giao"
      },
      {
        "en": "Which encryption algorithms their analysts may use",
        "vi": "Các thuật toán mã hóa mà analyst của họ được dùng"
      },
      {
        "en": "The physical location of their main operations centre",
        "vi": "Vị trí vật lý của trung tâm vận hành chính"
      },
      {
        "en": "The brand of forensic hardware they are funded to buy",
        "vi": "Hãng phần cứng forensic mà họ được cấp tiền mua"
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
        "en": "Access only what is relevant and follow data-protection duties",
        "vi": "Chỉ truy cập phần liên quan và tuân nghĩa vụ bảo vệ dữ liệu"
      },
      {
        "en": "Copy all of it in case it is useful later in the case",
        "vi": "Sao toàn bộ phòng khi hữu ích về sau trong vụ việc"
      },
      {
        "en": "Share it with colleagues who might find it interesting",
        "vi": "Chia sẻ cho đồng nghiệp có thể thấy thú vị"
      },
      {
        "en": "Publish it to demonstrate the extent of the exposure",
        "vi": "Công bố để chứng minh mức độ phơi nhiễm"
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
        "en": "The ACPO Good Practice Guide for digital evidence",
        "vi": "ACPO Good Practice Guide cho bằng chứng số"
      },
      {
        "en": "The PCI DSS payment-card data security standard",
        "vi": "Tiêu chuẩn bảo mật dữ liệu thẻ PCI DSS"
      },
      {
        "en": "RFC 1918 on private IPv4 network addressing",
        "vi": "RFC 1918 về cấp địa chỉ mạng IPv4 riêng"
      },
      {
        "en": "The OWASP Top 10 web-application risk list",
        "vi": "Danh sách rủi ro ứng dụng web OWASP Top 10"
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
        "en": "The report's font and colour from its heading styles",
        "vi": "Phông và màu của báo cáo với kiểu tiêu đề"
      },
      {
        "en": "The header section from the footer section",
        "vi": "Phần đầu trang với phần chân trang"
      },
      {
        "en": "English-language text from numerical data",
        "vi": "Văn bản tiếng Anh với dữ liệu dạng số"
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
        "en": "It increases the page count to meet the contract length",
        "vi": "Nó tăng số trang để đạt độ dài hợp đồng"
      },
      {
        "en": "It conceals which tools were used from the client",
        "vi": "Nó che giấu công cụ đã dùng với khách hàng"
      },
      {
        "en": "It removes the need to include the underlying evidence",
        "vi": "Nó loại bỏ nhu cầu đưa bằng chứng gốc vào"
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
        "en": "\"The attacker definitely began their activity exactly on <date>.\"",
        "vi": "\"Kẻ tấn công chắc chắn bắt đầu hoạt động đúng vào <ngày>.\""
      },
      {
        "en": "\"Nothing of any kind happened before <date> on this host.\"",
        "vi": "\"Không có gì xảy ra trước <ngày> trên host này.\""
      },
      {
        "en": "\"The limitation is minor and need not appear in the report.\"",
        "vi": "\"Giới hạn này nhỏ và không cần xuất hiện trong báo cáo.\""
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
        "vi": "Credential Access"
      },
      {
        "en": "Data Exfiltration",
        "vi": "Data Exfiltration"
      },
      {
        "en": "Reconnaissance",
        "vi": "Reconnaissance"
      },
      {
        "en": "Defence Evasion",
        "vi": "Defence Evasion"
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
        "en": "APTs are well-resourced, targeted and persistent over time",
        "vi": "APT có nguồn lực dồi dào, nhắm mục tiêu và bền bỉ lâu dài"
      },
      {
        "en": "APTs rely only on widely-available off-the-shelf malware",
        "vi": "APT chỉ dùng mã độc bán sẵn phổ biến rộng rãi"
      },
      {
        "en": "APTs avoid phishing and use only network-based exploits",
        "vi": "APT tránh phishing và chỉ dùng khai thác qua mạng"
      },
      {
        "en": "APTs are fully automated and never select specific targets",
        "vi": "APT hoàn toàn tự động và không chọn mục tiêu cụ thể"
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
        "en": "Board-level geopolitical and industry-trend briefings",
        "vi": "Bản tóm tắt địa chính trị và xu hướng ngành cấp hội đồng"
      },
      {
        "en": "Long-term strategic forecasts for executive planning",
        "vi": "Dự báo chiến lược dài hạn cho việc hoạch định của lãnh đạo"
      },
      {
        "en": "Vendor marketing material about emerging threats",
        "vi": "Tài liệu tiếp thị của nhà cung cấp về mối đe dọa mới nổi"
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
        "en": "A possible false-flag; tools and strings can be planted",
        "vi": "Có thể là false-flag; công cụ và chuỗi có thể bị cài"
      },
      {
        "en": "That attribution to Group X is now conclusively proven",
        "vi": "Rằng việc quy cho Nhóm X đã được chứng minh dứt khoát"
      },
      {
        "en": "That language strings reliably prove the actor's nationality",
        "vi": "Rằng chuỗi ngôn ngữ chứng minh đáng tin quốc tịch tác nhân"
      },
      {
        "en": "That the targeting data should be disregarded entirely",
        "vi": "Rằng dữ liệu mục tiêu nên bị bỏ qua hoàn toàn"
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
        "en": "A watering-hole attack on a trusted site",
        "vi": "Một watering-hole vào một trang tin cậy"
      },
      {
        "en": "A whaling attack on a senior executive",
        "vi": "Một whaling nhắm một lãnh đạo cấp cao"
      },
      {
        "en": "A brute-force attack on the login page",
        "vi": "Một brute-force vào trang đăng nhập"
      },
      {
        "en": "A SYN-flood denial-of-service attack",
        "vi": "Một SYN-flood gây từ chối dịch vụ"
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
        "en": "Legitimate credentials accessing unusual data in normal hours",
        "vi": "Thông tin đăng nhập hợp lệ truy cập dữ liệu bất thường trong giờ làm"
      },
      {
        "en": "External brute-force attempts against the VPN gateway",
        "vi": "Các nỗ lực brute-force từ ngoài vào cổng VPN"
      },
      {
        "en": "Exploitation of an unpatched internet-facing web server",
        "vi": "Khai thác một web server hướng internet chưa vá"
      },
      {
        "en": "A phishing email from an unfamiliar external domain",
        "vi": "Một email phishing từ domain ngoài xa lạ"
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
        "en": "Which critical assets and data the threat endangers, and the impact",
        "vi": "Mối đe dọa gây nguy cho tài sản/dữ liệu trọng yếu nào, và tác động"
      },
      {
        "en": "Which antivirus vendor offers the best detection rate",
        "vi": "Nhà cung cấp antivirus nào có tỉ lệ phát hiện tốt nhất"
      },
      {
        "en": "How the security dashboard should be colour-coded",
        "vi": "Dashboard bảo mật nên được tô màu thế nào"
      },
      {
        "en": "How fast the affected servers' processors run",
        "vi": "Bộ xử lý của các server bị ảnh hưởng chạy nhanh ra sao"
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
        "en": "Higher-resolution times or monotonic sequence numbers",
        "vi": "Thời gian độ phân giải cao hơn hoặc số trình tự tăng đơn điệu"
      },
      {
        "en": "The order the two files appear in the directory listing",
        "vi": "Thứ tự hai file xuất hiện khi liệt kê thư mục"
      },
      {
        "en": "The larger event payload, assumed to be written second",
        "vi": "Payload sự kiện lớn hơn, giả định được ghi sau"
      },
      {
        "en": "The default order shown by the log-viewer application",
        "vi": "Thứ tự mặc định mà trình xem log hiển thị"
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
        "en": "Recorded at the time of the action, making them accurate and credible",
        "vi": "Được ghi ngay tại thời điểm hành động, nên chính xác và đáng tin"
      },
      {
        "en": "Written up months afterwards, once the full picture has become clear",
        "vi": "Viết lại sau đó nhiều tháng, khi đã rõ toàn bộ bức tranh"
      },
      {
        "en": "Kept only in the analyst's memory until the final report is written",
        "vi": "Chỉ lưu trong trí nhớ analyst tới khi viết báo cáo cuối"
      },
      {
        "en": "Left deliberately anonymous and undated to protect the analyst",
        "vi": "Cố ý để ẩn danh và không ghi ngày để bảo vệ analyst"
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
        "en": "A single host rarely tells the full story — check for lateral movement",
        "vi": "Một host hiếm khi kể trọn câu chuyện — phải xét lateral movement"
      },
      {
        "en": "One host is sufficient to investigate provided it is fully imaged",
        "vi": "Một host là đủ để điều tra miễn là được tạo image đầy đủ"
      },
      {
        "en": "Network logs add little value once the infected host is found",
        "vi": "Log mạng ít giá trị khi đã tìm ra host nhiễm"
      },
      {
        "en": "No other host can be affected if antivirus is fully up to date",
        "vi": "Không host nào khác bị ảnh hưởng nếu antivirus được cập nhật đầy đủ"
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
        "en": "Acquiring bank/card schemes (PCI), regulators and individuals",
        "vi": "Ngân hàng/tổ chức thẻ (PCI), cơ quan quản lý và cá nhân"
      },
      {
        "en": "No one at all, because cardholder data is exempt from notification",
        "vi": "Không ai cả, vì dữ liệu chủ thẻ được miễn thông báo"
      },
      {
        "en": "Only the software vendor whose exploited product was at fault",
        "vi": "Chỉ nhà cung cấp phần mềm có sản phẩm bị khai thác"
      },
      {
        "en": "Only the internal IT department that owns the affected system",
        "vi": "Chỉ bộ phận IT nội bộ sở hữu hệ thống bị ảnh hưởng"
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
