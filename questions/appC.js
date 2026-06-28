/* ===================================================================
   CPIA Question Bank  —  Appendix C : Background Info Gathering & OSINT
   70 question(s). To add: append more objects to push().
   Schema: app, sec (index.html anchor), secLabel{en,vi}, q{en,vi},
           opts[4]{en,vi}, correct (0-3), exp{en,vi}, note{en,vi}? (optional)
   =================================================================== */
(window.CPIA_BANK = window.CPIA_BANK || []).push(

  {
    "app": "C",
    "sec": "c1",
    "secLabel": {
      "en": "C1 — Registration Records",
      "vi": "C1 — Bản ghi đăng ký"
    },
    "q": {
      "en": "WHOIS is used during an investigation to find:",
      "vi": "WHOIS được dùng trong điều tra để tìm:"
    },
    "opts": [
      {
        "en": "Domain/IP registration data and abuse contacts",
        "vi": "Dữ liệu đăng ký domain/IP và liên hệ abuse"
      },
      {
        "en": "The decrypted contents of captured traffic",
        "vi": "Nội dung đã giải mã của lưu lượng bắt được"
      },
      {
        "en": "The malware family and variant name",
        "vi": "Họ và tên biến thể của mã độc"
      },
      {
        "en": "The host's operating-system version",
        "vi": "Phiên bản hệ điều hành của host"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "WHOIS returns registration metadata: registrant, registrar, creation/expiry dates, name servers, and abuse contacts — useful for attribution and takedown. Note GDPR/privacy redaction now hides much registrant data.",
      "vi": "WHOIS trả về metadata đăng ký: chủ thể đăng ký, registrar, ngày tạo/hết hạn, name server và liên hệ abuse — hữu ích cho attribution và takedown. Lưu ý GDPR/quyền riêng tư nay che nhiều dữ liệu chủ thể."
    }
  },

  {
    "app": "C",
    "sec": "c2",
    "secLabel": {
      "en": "C2 — Domain Name Server (DNS)",
      "vi": "C2 — Máy chủ tên miền (DNS)"
    },
    "q": {
      "en": "Which DNS record maps a hostname to an IPv6 address?",
      "vi": "Bản ghi DNS nào ánh xạ hostname tới địa chỉ IPv6?"
    },
    "opts": [
      {
        "en": "A",
        "vi": "A"
      },
      {
        "en": "AAAA",
        "vi": "AAAA"
      },
      {
        "en": "MX",
        "vi": "MX"
      },
      {
        "en": "PTR",
        "vi": "PTR"
      }
    ],
    "correct": 1,
    "exp": {
      "en": "A = IPv4 address, AAAA = IPv6 address, MX = mail exchanger, PTR = reverse lookup (IP→name), CNAME = alias, NS = name server, SOA = zone authority, TXT = arbitrary text (SPF/DKIM).",
      "vi": "A = địa chỉ IPv4, AAAA = địa chỉ IPv6, MX = máy chủ mail, PTR = tra ngược (IP→tên), CNAME = bí danh, NS = name server, SOA = thẩm quyền zone, TXT = văn bản tùy ý (SPF/DKIM)."
    }
  },

  {
    "app": "C",
    "sec": "c2",
    "secLabel": {
      "en": "C2 — Domain Name Server (DNS)",
      "vi": "C2 — Máy chủ tên miền (DNS)"
    },
    "q": {
      "en": "\"Fast-flux DNS\" is characterised by:",
      "vi": "\"Fast-flux DNS\" có đặc trưng là:"
    },
    "opts": [
      {
        "en": "Many rapidly-changing A records with very low TTLs",
        "vi": "Nhiều bản ghi A thay đổi nhanh với TTL rất thấp"
      },
      {
        "en": "A single static IP address for years",
        "vi": "Một IP tĩnh duy nhất trong nhiều năm"
      },
      {
        "en": "Disabling the domain's DNS entirely",
        "vi": "Tắt hoàn toàn DNS của domain"
      },
      {
        "en": "Serving the site only over IPv6",
        "vi": "Chỉ phục vụ site qua IPv6"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Fast-flux rotates many IPs (often a botnet of proxies) behind one domain using very low TTLs, making takedown and blocking difficult. Domain-flux/DGA instead rotates the domain names. Both indicate resilient C2 infrastructure.",
      "vi": "Fast-flux xoay vòng nhiều IP (thường là botnet proxy) sau một domain với TTL rất thấp, gây khó cho takedown và chặn. Domain-flux/DGA thì xoay vòng tên miền. Cả hai cho thấy hạ tầng C2 có khả năng kháng cự cao."
    },
    "note": {
      "en": "Very low TTL + many rotating IPs = a fast-flux indicator.",
      "vi": "TTL rất thấp + nhiều IP xoay vòng = dấu hiệu fast-flux."
    }
  },

  {
    "app": "C",
    "sec": "c2",
    "secLabel": {
      "en": "C2 — Domain Name Server (DNS)",
      "vi": "C2 — Máy chủ tên miền (DNS)"
    },
    "q": {
      "en": "A successful DNS zone transfer (AXFR) from an external attacker is a problem because it:",
      "vi": "Một zone transfer DNS (AXFR) thành công từ kẻ tấn công bên ngoài là vấn đề vì nó:"
    },
    "opts": [
      {
        "en": "Discloses the entire internal DNS namespace",
        "vi": "Tiết lộ toàn bộ không gian tên DNS nội bộ"
      },
      {
        "en": "Encrypts all of the zone's records",
        "vi": "Mã hóa tất cả bản ghi của zone"
      },
      {
        "en": "Speeds up name resolution for clients",
        "vi": "Tăng tốc phân giải tên cho client"
      },
      {
        "en": "Is required for normal DNS operation",
        "vi": "Là bắt buộc cho hoạt động DNS bình thường"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "AXFR copies the whole zone. If allowed to arbitrary clients it hands an attacker a full map of hostnames/IPs (reconnaissance gold). Zone transfers should be restricted to authorised secondary name servers only.",
      "vi": "AXFR sao toàn bộ zone. Nếu cho phép client bất kỳ, nó trao cho kẻ tấn công bản đồ đầy đủ hostname/IP (mỏ vàng trinh sát). Zone transfer chỉ nên giới hạn cho các secondary name server được ủy quyền."
    }
  },

  {
    "app": "C",
    "sec": "c4",
    "secLabel": {
      "en": "C4 — Document Meta Data",
      "vi": "C4 — Siêu dữ liệu tài liệu"
    },
    "q": {
      "en": "Extracting metadata from a leaked Office document can MOST usefully reveal:",
      "vi": "Trích metadata từ một tài liệu Office bị rò rỉ có thể tiết lộ hữu ích NHẤT điều gì?"
    },
    "opts": [
      {
        "en": "Author, organisation, software version and internal paths",
        "vi": "Tác giả, tổ chức, phiên bản phần mềm và đường dẫn nội bộ"
      },
      {
        "en": "The password of the document's recipient",
        "vi": "Mật khẩu của người nhận tài liệu"
      },
      {
        "en": "The document's symmetric encryption key",
        "vi": "Khóa mã hóa đối xứng của tài liệu"
      },
      {
        "en": "The host's live network traffic flows",
        "vi": "Các luồng lưu lượng mạng sống của host"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Tools like ExifTool/FOCA pull authors, usernames, software versions, template paths, printer names and internal hostnames from document metadata — valuable for OSINT, attribution and building a target picture.",
      "vi": "Các công cụ như ExifTool/FOCA lấy tác giả, username, phiên bản phần mềm, đường dẫn template, tên máy in và hostname nội bộ từ metadata tài liệu — quý cho OSINT, attribution và dựng bức tranh mục tiêu."
    }
  },

  {
    "app": "C",
    "sec": "c5",
    "secLabel": {
      "en": "C5 — Community Knowledge",
      "vi": "C5 — Tri thức cộng đồng"
    },
    "q": {
      "en": "When an AV report flags a file but deeper analysis shows it is a legitimate admin tool, the correct conclusion is:",
      "vi": "Khi báo cáo AV gắn cờ một file nhưng phân tích sâu cho thấy đó là công cụ quản trị hợp lệ, kết luận đúng là:"
    },
    "opts": [
      {
        "en": "Corroborate; it may be benign or dual-use",
        "vi": "Đối chiếu thêm; có thể lành tính hoặc lưỡng dụng"
      },
      {
        "en": "Always fully trust the AV verdict",
        "vi": "Luôn hoàn toàn tin phán quyết AV"
      },
      {
        "en": "Immediately wipe the affected host",
        "vi": "Xóa sạch ngay host bị ảnh hưởng"
      },
      {
        "en": "Ignore the AV alert entirely",
        "vi": "Bỏ qua hoàn toàn cảnh báo AV"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "AV signatures generate false positives and flag legitimate dual-use tools (PsExec, PowerShell). Analysts must corroborate across sources, eliminate false positives, and judge by context — but not blindly ignore alerts either.",
      "vi": "Signature AV sinh false positive và gắn cờ công cụ lưỡng dụng hợp lệ (PsExec, PowerShell). Analyst phải đối chiếu nhiều nguồn, loại bỏ false positive và phán đoán theo bối cảnh — nhưng cũng không mù quáng bỏ qua cảnh báo."
    }
  },

  {
    "app": "C",
    "sec": "c3",
    "secLabel": {
      "en": "C3 — Open-Source Investigation",
      "vi": "C3 — Điều tra nguồn mở"
    },
    "q": {
      "en": "A Google \"dork\" like site:target.com filetype:pdf is used to:",
      "vi": "Một \"dork\" Google như site:target.com filetype:pdf dùng để:"
    },
    "opts": [
      {
        "en": "Find exposed documents via search indexing",
        "vi": "Tìm tài liệu bị lộ qua chỉ mục tìm kiếm"
      },
      {
        "en": "Crash the target's web server remotely",
        "vi": "Làm sập web server mục tiêu từ xa"
      },
      {
        "en": "Encrypt the target's website",
        "vi": "Mã hóa website của mục tiêu"
      },
      {
        "en": "Reset the target's DNS records",
        "vi": "Đặt lại bản ghi DNS của mục tiêu"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Search operators (dorks) narrow results to specific sites, file types or keywords, surfacing exposed documents, login pages or config files already indexed — passive recon that touches the search engine, not the target directly.",
      "vi": "Toán tử tìm kiếm (dork) thu hẹp kết quả theo site, loại file hay từ khóa cụ thể, làm lộ tài liệu, trang đăng nhập hay file cấu hình đã được lập chỉ mục — trinh sát thụ động chạm vào công cụ tìm kiếm, không trực tiếp vào mục tiêu."
    }
  },

  {
    "app": "C",
    "sec": "c1",
    "secLabel": {
      "en": "C1 — Registration Records",
      "vi": "C1 — Bản ghi đăng ký"
    },
    "q": {
      "en": "To find which organisation an IP range belongs to, you would query:",
      "vi": "Để biết một dải IP thuộc tổ chức nào, bạn sẽ truy vấn:"
    },
    "opts": [
      {
        "en": "A Regional Internet Registry's WHOIS",
        "vi": "WHOIS của một Regional Internet Registry"
      },
      {
        "en": "The domain registrar's WHOIS",
        "vi": "WHOIS của nhà đăng ký tên miền"
      },
      {
        "en": "A forward DNS A-record lookup",
        "vi": "Một tra cứu bản ghi A xuôi"
      },
      {
        "en": "A BGP route-server looking glass",
        "vi": "Một looking glass route-server BGP"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "IP allocations are recorded by RIRs (ARIN, RIPE, APNIC, LACNIC, AFRINIC). Their WHOIS returns the owning organisation, netblock, ASN and abuse contact — used to scope and attribute network indicators.",
      "vi": "Cấp phát IP được ghi bởi các RIR (ARIN, RIPE, APNIC, LACNIC, AFRINIC). WHOIS của họ trả về tổ chức sở hữu, netblock, ASN và liên hệ abuse — dùng để khoanh vùng và quy kết các chỉ dấu mạng."
    }
  },

  {
    "app": "C",
    "sec": "c5",
    "secLabel": {
      "en": "C5 — Community Knowledge",
      "vi": "C5 — Tri thức cộng đồng"
    },
    "q": {
      "en": "You have a suspicious file hash. The fastest community-driven way to check if it is known malware is:",
      "vi": "Bạn có một hash file đáng ngờ. Cách dựa vào cộng đồng nhanh nhất để kiểm tra nó có phải mã độc đã biết là:"
    },
    "opts": [
      {
        "en": "Search the hash on a multi-engine reputation service",
        "vi": "Tra hash trên một dịch vụ uy tín đa engine"
      },
      {
        "en": "Run it directly on a production host",
        "vi": "Chạy trực tiếp trên một host production"
      },
      {
        "en": "Email the sample to all staff",
        "vi": "Gửi mẫu qua email cho toàn nhân viên"
      },
      {
        "en": "Delete it without any checking",
        "vi": "Xóa nó mà không kiểm tra gì"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Searching the hash (not uploading the file, to avoid tipping off the actor or leaking data) on multi-engine services gives quick reputation across many vendors plus prior sandbox reports. Beware: absence of detections does NOT prove a file is clean.",
      "vi": "Tra hash (không upload file, để tránh báo động kẻ tấn công hay rò rỉ dữ liệu) trên dịch vụ đa engine cho danh tiếng nhanh từ nhiều hãng cùng báo cáo sandbox trước đó. Lưu ý: không có phát hiện KHÔNG chứng minh file sạch."
    },
    "note": {
      "en": "Search the hash; uploading a sensitive sample can leak it or alert the attacker.",
      "vi": "Hãy tra hash; upload mẫu nhạy cảm có thể làm rò rỉ hoặc báo động kẻ tấn công."
    }
  },

  {
    "app": "C",
    "sec": "c2",
    "secLabel": {
      "en": "C2 — Domain Name Server (DNS)",
      "vi": "C2 — Máy chủ tên miền (DNS)"
    },
    "q": {
      "en": "Which DNS record type would reveal a domain's mail servers?",
      "vi": "Loại bản ghi DNS nào tiết lộ máy chủ mail của một domain?"
    },
    "opts": [
      {
        "en": "MX",
        "vi": "MX"
      },
      {
        "en": "A",
        "vi": "A"
      },
      {
        "en": "PTR",
        "vi": "PTR"
      },
      {
        "en": "SOA",
        "vi": "SOA"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "MX (Mail eXchanger) records list the mail servers and priorities for a domain — useful for understanding email flow, spoofing potential and routing issues. SOA gives zone authority; A/AAAA give host addresses; PTR is reverse lookup.",
      "vi": "Bản ghi MX (Mail eXchanger) liệt kê máy chủ mail và độ ưu tiên cho một domain — hữu ích để hiểu luồng email, khả năng giả mạo và vấn đề định tuyến. SOA cho thẩm quyền zone; A/AAAA cho địa chỉ host; PTR là tra ngược."
    }
  },

  {
    "app": "C",
    "sec": "c3",
    "secLabel": {
      "en": "C3 — Open-Source Investigation",
      "vi": "C3 — Điều tra nguồn mở"
    },
    "q": {
      "en": "Which best describes PASSIVE OSINT versus ACTIVE enumeration?",
      "vi": "Đâu mô tả đúng nhất OSINT THỤ ĐỘNG so với liệt kê CHỦ ĐỘNG?"
    },
    "opts": [
      {
        "en": "Passive uses public data; active probes the target directly",
        "vi": "Thụ động dùng dữ liệu công khai; chủ động thăm dò trực tiếp"
      },
      {
        "en": "They are two terms for exactly the same thing",
        "vi": "Chúng là hai từ cho cùng một thứ"
      },
      {
        "en": "Passive techniques always contact the target",
        "vi": "Kỹ thuật thụ động luôn chạm mục tiêu"
      },
      {
        "en": "Active techniques never contact the target",
        "vi": "Kỹ thuật chủ động không bao giờ chạm mục tiêu"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Passive OSINT (search engines, WHOIS, certificate transparency, social media) leaves no trace on the target. Active techniques (port scans, banner grabbing, DNS brute force) send packets to the target and may be detected/logged. Choose based on stealth requirements.",
      "vi": "OSINT thụ động (công cụ tìm kiếm, WHOIS, certificate transparency, mạng xã hội) không để lại dấu vết trên mục tiêu. Kỹ thuật chủ động (quét cổng, banner grabbing, brute force DNS) gửi gói tới mục tiêu và có thể bị phát hiện/ghi log. Chọn theo yêu cầu ẩn mình."
    }
  },

  {
    "app": "C",
    "sec": "c4",
    "secLabel": {
      "en": "C4 — Document Meta Data",
      "vi": "C4 — Siêu dữ liệu tài liệu"
    },
    "q": {
      "en": "Which tool is most associated with extracting metadata from many file types during OSINT?",
      "vi": "Công cụ nào gắn liền nhất với việc trích metadata từ nhiều loại file trong OSINT?"
    },
    "opts": [
      {
        "en": "ExifTool",
        "vi": "ExifTool"
      },
      {
        "en": "Wireshark",
        "vi": "Wireshark"
      },
      {
        "en": "Nmap",
        "vi": "Nmap"
      },
      {
        "en": "John the Ripper",
        "vi": "John the Ripper"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "ExifTool reads/writes metadata across images, PDFs and Office files — authors, GPS, software, timestamps, device info. FOCA/metagoofil automate harvesting documents from a target domain and extracting this data to map internal infrastructure.",
      "vi": "ExifTool đọc/ghi metadata trên ảnh, PDF và file Office — tác giả, GPS, phần mềm, mốc thời gian, thông tin thiết bị. FOCA/metagoofil tự động thu thập tài liệu từ domain mục tiêu và trích dữ liệu này để vẽ bản đồ hạ tầng nội bộ."
    }
  },

  {
    "app": "C",
    "sec": "c1",
    "secLabel": {
      "en": "C1 — Registration Records",
      "vi": "C1 — Bản ghi đăng ký"
    },
    "q": {
      "en": "A phishing domain shows a WHOIS creation date of two days ago. This is significant because:",
      "vi": "Một domain phishing có ngày tạo WHOIS cách đây hai ngày. Điều này quan trọng vì:"
    },
    "opts": [
      {
        "en": "A very recent registration is a common malice indicator",
        "vi": "Đăng ký rất gần đây là chỉ dấu độc hại phổ biến"
      },
      {
        "en": "A recent date proves the domain is legitimate",
        "vi": "Ngày gần đây chứng minh domain hợp lệ"
      },
      {
        "en": "Domain creation dates are never recorded",
        "vi": "Ngày tạo domain không bao giờ được ghi"
      },
      {
        "en": "It means the domain's traffic is encrypted",
        "vi": "Nó nghĩa là lưu lượng domain đã mã hóa"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Attackers register domains shortly before a campaign, so a very recent creation date (domain age) is a useful risk signal — many detection systems flag newly-registered domains. It is suggestive, not proof, so corroborate with other indicators.",
      "vi": "Kẻ tấn công đăng ký domain ngay trước chiến dịch, nên ngày tạo rất gần đây (tuổi domain) là tín hiệu rủi ro hữu ích — nhiều hệ thống phát hiện gắn cờ domain mới đăng ký. Nó mang tính gợi ý, không phải bằng chứng, nên cần đối chiếu thêm."
    },
    "note": {
      "en": "Domain age is a strong, but not conclusive, risk indicator.",
      "vi": "Tuổi domain là chỉ dấu rủi ro mạnh nhưng chưa phải kết luận."
    }
  },

  {
    "app": "C",
    "sec": "c1",
    "secLabel": {
      "en": "C1 — Registration Records",
      "vi": "C1 — Bản ghi đăng ký"
    },
    "q": {
      "en": "Modern WHOIS responses often hide registrant name and email because of:",
      "vi": "Phản hồi WHOIS hiện đại thường che tên và email người đăng ký do:"
    },
    "opts": [
      {
        "en": "Privacy law and privacy/proxy registration services",
        "vi": "Luật bảo vệ quyền riêng tư và dịch vụ đăng ký ẩn danh/proxy"
      },
      {
        "en": "A long-standing bug in the DNS protocol",
        "vi": "Một lỗi lâu năm trong giao thức DNS"
      },
      {
        "en": "Mandatory encryption of the whole internet",
        "vi": "Bắt buộc mã hóa toàn bộ internet"
      },
      {
        "en": "A lack of disk space at the registrars",
        "vi": "Registrar thiếu dung lượng đĩa"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Since GDPR, registrars commonly redact personal registrant data, and privacy/proxy services intentionally mask owners. Analysts then pivot to other data (name servers, registrar, historical WHOIS, hosting) for attribution.",
      "vi": "Từ khi có GDPR, các registrar thường che dữ liệu cá nhân của người đăng ký, và dịch vụ ẩn danh/proxy cố ý che chủ sở hữu. Analyst khi đó chuyển sang dữ liệu khác (name server, registrar, WHOIS lịch sử, hosting) để attribution."
    }
  },

  {
    "app": "C",
    "sec": "c1",
    "secLabel": {
      "en": "C1 — Registration Records",
      "vi": "C1 — Bản ghi đăng ký"
    },
    "q": {
      "en": "What is the difference between a domain registrar and a domain registry?",
      "vi": "Khác biệt giữa registrar (nhà đăng ký) và registry (cơ quan đăng ký) tên miền là gì?"
    },
    "opts": [
      {
        "en": "The registry runs the TLD; the registrar resells domains",
        "vi": "Registry vận hành TLD; registrar bán lại tên miền"
      },
      {
        "en": "They are simply two names for the same thing",
        "vi": "Chúng chỉ là hai tên cho cùng một thứ"
      },
      {
        "en": "The registrar owns all of the IP address space",
        "vi": "Registrar sở hữu toàn bộ không gian địa chỉ IP"
      },
      {
        "en": "The registry actively blocks all malware domains",
        "vi": "Registry chủ động chặn mọi domain mã độc"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A registry (e.g. Verisign for .com) maintains the authoritative database for a TLD; a registrar (e.g. GoDaddy) is the customer-facing reseller. Knowing both helps with takedown requests and abuse reporting routed to the right party.",
      "vi": "Registry (vd Verisign cho .com) duy trì cơ sở dữ liệu thẩm quyền cho một TLD; registrar (vd GoDaddy) là bên bán lẻ tiếp xúc khách hàng. Biết cả hai giúp gửi yêu cầu takedown và báo cáo lạm dụng tới đúng nơi."
    }
  },

  {
    "app": "C",
    "sec": "c1",
    "secLabel": {
      "en": "C1 — Registration Records",
      "vi": "C1 — Bản ghi đăng ký"
    },
    "q": {
      "en": "\"Reverse WHOIS\" is most useful for:",
      "vi": "\"Reverse WHOIS\" hữu ích nhất để:"
    },
    "opts": [
      {
        "en": "Finding other domains sharing an email, registrant or NS",
        "vi": "Tìm domain khác dùng chung email, chủ thể hoặc NS"
      },
      {
        "en": "Reversing a password hash back to plaintext",
        "vi": "Đảo một hash mật khẩu về plaintext"
      },
      {
        "en": "Decrypting an organisation's TLS sessions",
        "vi": "Giải mã các phiên TLS của một tổ chức"
      },
      {
        "en": "Resolving an IP address to a MAC address",
        "vi": "Phân giải một địa chỉ IP sang MAC"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Reverse WHOIS pivots from a registrant detail (email, name, org) to all domains sharing it, helping uncover an actor's wider infrastructure. It is a key attribution/pivoting technique, though privacy redaction limits it.",
      "vi": "Reverse WHOIS xoay từ một chi tiết người đăng ký (email, tên, tổ chức) tới mọi domain dùng chung nó, giúp phát hiện hạ tầng rộng hơn của một tác nhân. Đây là kỹ thuật attribution/pivot quan trọng, dù việc che dữ liệu riêng tư làm hạn chế."
    }
  },

  {
    "app": "C",
    "sec": "c1",
    "secLabel": {
      "en": "C1 — Registration Records",
      "vi": "C1 — Bản ghi đăng ký"
    },
    "q": {
      "en": "Which WHOIS field is the BEST starting point for reporting abuse of a domain?",
      "vi": "Trường WHOIS nào là điểm khởi đầu TỐT NHẤT để báo cáo lạm dụng một domain?"
    },
    "opts": [
      {
        "en": "The abuse contact / registrar abuse email",
        "vi": "Liên hệ abuse / email abuse của registrar"
      },
      {
        "en": "The domain's recorded creation date",
        "vi": "Ngày tạo được ghi của domain"
      },
      {
        "en": "The zone's cached TTL value",
        "vi": "Giá trị TTL cache của zone"
      },
      {
        "en": "The SOA record's serial number",
        "vi": "Số serial của bản ghi SOA"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "WHOIS publishes an abuse contact (often the registrar's) for reporting malicious use, which can lead to suspension/takedown. Creation date, TTL and serial are useful context but not the reporting channel.",
      "vi": "WHOIS công bố một liên hệ abuse (thường của registrar) để báo cáo việc sử dụng độc hại, có thể dẫn tới đình chỉ/takedown. Ngày tạo, TTL và serial là bối cảnh hữu ích nhưng không phải kênh báo cáo."
    }
  },

  {
    "app": "C",
    "sec": "c1",
    "secLabel": {
      "en": "C1 — Registration Records",
      "vi": "C1 — Bản ghi đăng ký"
    },
    "q": {
      "en": "To determine which ISP/organisation owns a suspicious public IP address, you query:",
      "vi": "Để xác định ISP/tổ chức nào sở hữu một IP công khai đáng ngờ, bạn truy vấn:"
    },
    "opts": [
      {
        "en": "The relevant RIR's IP WHOIS",
        "vi": "WHOIS IP của RIR liên quan"
      },
      {
        "en": "The domain registrar's WHOIS only",
        "vi": "Chỉ WHOIS của registrar tên miền"
      },
      {
        "en": "The organisation's local DHCP server",
        "vi": "Máy chủ DHCP cục bộ của tổ chức"
      },
      {
        "en": "The analyst's own browser cache",
        "vi": "Cache trình duyệt của chính analyst"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "IP allocations are recorded by Regional Internet Registries; their WHOIS returns the owning org, netblock, ASN and abuse contact. Domain WHOIS covers names, not IP ownership — a common mix-up.",
      "vi": "Cấp phát IP được ghi bởi các Regional Internet Registry; WHOIS của họ trả về tổ chức sở hữu, netblock, ASN và liên hệ abuse. WHOIS tên miền bao phủ tên, không phải quyền sở hữu IP — một nhầm lẫn phổ biến."
    }
  },

  {
    "app": "C",
    "sec": "c1",
    "secLabel": {
      "en": "C1 — Registration Records",
      "vi": "C1 — Bản ghi đăng ký"
    },
    "q": {
      "en": "Historical (passive) WHOIS data is valuable because it can:",
      "vi": "Dữ liệu WHOIS lịch sử (passive) có giá trị vì nó có thể:"
    },
    "opts": [
      {
        "en": "Reveal who registered a domain before redaction or sale",
        "vi": "Lộ ai đăng ký domain trước khi bị che hoặc đổi chủ"
      },
      {
        "en": "Decrypt previously captured network traffic",
        "vi": "Giải mã lưu lượng mạng đã bắt trước đó"
      },
      {
        "en": "Recover files deleted from the target host",
        "vi": "Khôi phục file đã xóa khỏi host mục tiêu"
      },
      {
        "en": "Automatically block all future attacks",
        "vi": "Tự động chặn mọi tấn công tương lai"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Historical WHOIS snapshots may contain pre-redaction registrant details or previous owners/name servers, supporting attribution even when current WHOIS is private. It is a pivot source, not a decryption or recovery tool.",
      "vi": "Ảnh chụp WHOIS lịch sử có thể chứa chi tiết người đăng ký trước khi che hoặc chủ/name server trước đó, hỗ trợ attribution kể cả khi WHOIS hiện tại đã ẩn. Đây là nguồn pivot, không phải công cụ giải mã hay khôi phục."
    }
  },

  {
    "app": "C",
    "sec": "c1",
    "secLabel": {
      "en": "C1 — Registration Records",
      "vi": "C1 — Bản ghi đăng ký"
    },
    "q": {
      "en": "An \"ASN\" obtained from IP WHOIS lets an analyst:",
      "vi": "Một \"ASN\" lấy từ IP WHOIS cho phép analyst:"
    },
    "opts": [
      {
        "en": "Group the routed network blocks under one operator",
        "vi": "Gom các khối mạng định tuyến dưới một nhà vận hành"
      },
      {
        "en": "Read the files stored on the target host",
        "vi": "Đọc các file lưu trên host mục tiêu"
      },
      {
        "en": "Crack the password of a user account",
        "vi": "Bẻ mật khẩu của một tài khoản người dùng"
      },
      {
        "en": "Disable the organisation's firewall",
        "vi": "Vô hiệu hóa firewall của tổ chức"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "An Autonomous System Number identifies a routing domain; mapping a malicious IP to its ASN reveals the hosting provider and lets you cluster related IP ranges for blocking and attribution. It grants no access to the host itself.",
      "vi": "Autonomous System Number xác định một miền định tuyến; ánh xạ một IP độc hại tới ASN của nó lộ nhà cung cấp hosting và cho phép gom các dải IP liên quan để chặn và attribution. Nó không cấp quyền truy cập vào host."
    }
  },

  {
    "app": "C",
    "sec": "c1",
    "secLabel": {
      "en": "C1 — Registration Records",
      "vi": "C1 — Bản ghi đăng ký"
    },
    "q": {
      "en": "Many domains in an attack share the same uncommon name servers. This MOST supports:",
      "vi": "Nhiều domain trong một cuộc tấn công dùng chung các name server hiếm gặp. Điều này HỖ TRỢ nhất việc:"
    },
    "opts": [
      {
        "en": "Clustering them as likely-related infrastructure",
        "vi": "Gom chúng thành hạ tầng nhiều khả năng liên quan"
      },
      {
        "en": "Proving the attacker's real-world name",
        "vi": "Chứng minh tên thật của kẻ tấn công"
      },
      {
        "en": "Decrypting their command-and-control",
        "vi": "Giải mã kênh command-and-control của chúng"
      },
      {
        "en": "Recovering the stolen data directly",
        "vi": "Khôi phục trực tiếp dữ liệu bị trộm"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Shared, unusual name servers are a useful pivot to cluster infrastructure that is probably operated by the same actor — strengthening attribution and expanding indicator lists. It does not, by itself, identify a real-world person.",
      "vi": "Name server hiếm gặp dùng chung là một pivot hữu ích để gom hạ tầng có lẽ do cùng một tác nhân vận hành — củng cố attribution và mở rộng danh sách chỉ dấu. Bản thân nó không xác định một con người thật."
    }
  },

  {
    "app": "C",
    "sec": "c1",
    "secLabel": {
      "en": "C1 — Registration Records",
      "vi": "C1 — Bản ghi đăng ký"
    },
    "q": {
      "en": "Why should an analyst avoid sending probes when doing pure registration-record research?",
      "vi": "Vì sao analyst nên tránh gửi gói thăm dò khi chỉ nghiên cứu bản ghi đăng ký?"
    },
    "opts": [
      {
        "en": "WHOIS is passive; probing the target makes recon detectable",
        "vi": "WHOIS thụ động; thăm dò mục tiêu làm recon bị phát hiện"
      },
      {
        "en": "WHOIS lookups require sending exploits",
        "vi": "Tra WHOIS đòi hỏi gửi exploit"
      },
      {
        "en": "Sending probes to a target is always illegal",
        "vi": "Gửi gói thăm dò tới mục tiêu luôn bất hợp pháp"
      },
      {
        "en": "It noticeably speeds up the local disk",
        "vi": "Nó tăng tốc đáng kể đĩa cục bộ"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Registration research uses third-party databases and never touches the target, keeping it stealthy. Switching to active probing (scans, connections) can alert the target and changes the engagement's footprint and authorisation needs.",
      "vi": "Nghiên cứu đăng ký dùng cơ sở dữ liệu bên thứ ba và không chạm mục tiêu, giữ tính ẩn. Chuyển sang thăm dò chủ động (quét, kết nối) có thể đánh động mục tiêu và thay đổi dấu chân cùng nhu cầu ủy quyền của engagement."
    }
  },

  {
    "app": "C",
    "sec": "c1",
    "secLabel": {
      "en": "C1 — Registration Records",
      "vi": "C1 — Bản ghi đăng ký"
    },
    "q": {
      "en": "A \".co.uk\" domain is an example of:",
      "vi": "Một domain \".co.uk\" là ví dụ của:"
    },
    "opts": [
      {
        "en": "A country-code TLD (ccTLD) hierarchy",
        "vi": "Một hệ phân cấp ccTLD (TLD theo mã quốc gia)"
      },
      {
        "en": "A generic TLD such as .com or .net",
        "vi": "Một gTLD chung như .com hay .net"
      },
      {
        "en": "A raw IPv4 host address",
        "vi": "Một địa chỉ host IPv4 thô"
      },
      {
        "en": "A 48-bit hardware MAC address",
        "vi": "Một địa chỉ MAC phần cứng 48-bit"
      }
    ],
    "correct": 0,
    "exp": {
      "en": ".uk is a ccTLD with second-level structure (.co.uk, .gov.uk). gTLDs (.com, .org, .net) are generic. Different registries/policies apply per TLD, which affects WHOIS availability and takedown processes during investigations.",
      "vi": ".uk là một ccTLD với cấu trúc cấp hai (.co.uk, .gov.uk). gTLD (.com, .org, .net) là loại chung. Mỗi TLD có registry/chính sách khác nhau, ảnh hưởng tới khả năng tra WHOIS và quy trình takedown khi điều tra."
    }
  },

  {
    "app": "C",
    "sec": "c1",
    "secLabel": {
      "en": "C1 — Registration Records",
      "vi": "C1 — Bản ghi đăng ký"
    },
    "q": {
      "en": "A typosquatting domain like \"paypaI.com\" (capital i for l) is best identified by:",
      "vi": "Một domain typosquatting như \"paypaI.com\" (chữ i hoa thay cho l) được nhận diện tốt nhất bằng:"
    },
    "opts": [
      {
        "en": "Compare the string to the brand and check for homoglyphs",
        "vi": "So chuỗi với thương hiệu và kiểm tra homoglyph"
      },
      {
        "en": "Checking the domain's cached TTL value",
        "vi": "Kiểm tra giá trị TTL cache của domain"
      },
      {
        "en": "Measuring the size of its DNS packets",
        "vi": "Đo kích thước các gói DNS của nó"
      },
      {
        "en": "Reading the hosting server's MAC address",
        "vi": "Đọc địa chỉ MAC của server hosting"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Typosquatting/IDN-homograph domains use look-alike characters (capital I, Cyrillic а, punycode xn--) to impersonate brands. Detection means carefully inspecting the actual characters and decoding punycode — a frequent phishing technique.",
      "vi": "Domain typosquatting/IDN-homograph dùng ký tự trông giống (I hoa, а Cyrillic, punycode xn--) để giả mạo thương hiệu. Phát hiện nghĩa là soi kỹ ký tự thực tế và giải mã punycode — một kỹ thuật phishing phổ biến."
    }
  },

  {
    "app": "C",
    "sec": "c2",
    "secLabel": {
      "en": "C2 — Domain Name Server (DNS)",
      "vi": "C2 — Máy chủ tên miền (DNS)"
    },
    "q": {
      "en": "Which field in an SOA record indicates how long secondaries cache a NEGATIVE (NXDOMAIN) answer?",
      "vi": "Trường nào trong bản ghi SOA cho biết secondary cache một phản hồi PHỦ ĐỊNH (NXDOMAIN) trong bao lâu?"
    },
    "opts": [
      {
        "en": "The minimum/negative-caching TTL",
        "vi": "TTL tối thiểu/negative-caching"
      },
      {
        "en": "The zone's serial number field",
        "vi": "Trường số serial của zone"
      },
      {
        "en": "The secondary refresh interval",
        "vi": "Khoảng refresh của secondary"
      },
      {
        "en": "The MX record's priority value",
        "vi": "Giá trị ưu tiên của bản ghi MX"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "The SOA contains primary NS, responsible email, serial, refresh, retry, expire and the minimum TTL — the latter governs negative-response caching. The serial drives zone-transfer updates. SOA analysis helps understand zone behaviour and propagation.",
      "vi": "SOA chứa primary NS, email phụ trách, serial, refresh, retry, expire và TTL tối thiểu — cái cuối điều khiển việc cache phản hồi phủ định. Serial điều khiển cập nhật zone-transfer. Phân tích SOA giúp hiểu hành vi zone và độ lan truyền."
    }
  },

  {
    "app": "C",
    "sec": "c2",
    "secLabel": {
      "en": "C2 — Domain Name Server (DNS)",
      "vi": "C2 — Máy chủ tên miền (DNS)"
    },
    "q": {
      "en": "A reverse DNS lookup (IP → hostname) uses which record type and zone?",
      "vi": "Một tra DNS ngược (IP → hostname) dùng loại bản ghi và zone nào?"
    },
    "opts": [
      {
        "en": "PTR records under in-addr.arpa / ip6.arpa",
        "vi": "Bản ghi PTR trong in-addr.arpa / ip6.arpa"
      },
      {
        "en": "A records within the .com TLD zone",
        "vi": "Bản ghi A trong zone TLD .com"
      },
      {
        "en": "MX records under the .net TLD zone",
        "vi": "Bản ghi MX trong zone TLD .net"
      },
      {
        "en": "TXT records under the .org TLD zone",
        "vi": "Bản ghi TXT trong zone TLD .org"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Reverse lookups resolve PTR records in the special in-addr.arpa / ip6.arpa namespace. Matching forward (A) and reverse (PTR) records (FCrDNS) is a sanity check; mismatches can hint at spoofing or sloppy hosting in mail/server analysis.",
      "vi": "Tra ngược phân giải bản ghi PTR trong không gian tên đặc biệt in-addr.arpa / ip6.arpa. Khớp xuôi (A) và ngược (PTR) (FCrDNS) là một kiểm tra; không khớp có thể gợi ý giả mạo hoặc hosting cẩu thả khi phân tích mail/server."
    }
  },

  {
    "app": "C",
    "sec": "c2",
    "secLabel": {
      "en": "C2 — Domain Name Server (DNS)",
      "vi": "C2 — Máy chủ tên miền (DNS)"
    },
    "q": {
      "en": "A host resolving hundreds of random-looking domains, most returning NXDOMAIN, strongly suggests:",
      "vi": "Một host phân giải hàng trăm domain trông ngẫu nhiên, phần lớn trả về NXDOMAIN, gợi ý mạnh:"
    },
    "opts": [
      {
        "en": "Malware using a Domain Generation Algorithm",
        "vi": "Malware dùng Domain Generation Algorithm (DGA)"
      },
      {
        "en": "A misconfigured host with a stale DNS search suffix",
        "vi": "Một host cấu hình sai với search suffix DNS cũ"
      },
      {
        "en": "Normal browsing with warm DNS caches",
        "vi": "Duyệt web bình thường với cache DNS còn ấm"
      },
      {
        "en": "Reputation lookups from an endpoint agent",
        "vi": "Tra cứu uy tín từ một agent endpoint"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "DGA malware generates many pseudo-random domains and tries each until one (registered by the attacker) resolves — producing a burst of NXDOMAIN responses. This pattern is a powerful detection signal in DNS logs, distinct from human browsing.",
      "vi": "Mã độc DGA sinh nhiều domain giả ngẫu nhiên và thử từng cái cho tới khi một cái (do kẻ tấn công đăng ký) phân giải được — tạo ra một loạt phản hồi NXDOMAIN. Mẫu này là tín hiệu phát hiện mạnh trong log DNS, khác với duyệt web của con người."
    },
    "note": {
      "en": "Many NXDOMAINs to random domains = likely DGA / domain-flux.",
      "vi": "Nhiều NXDOMAIN tới domain ngẫu nhiên = khả năng DGA / domain-flux."
    }
  },

  {
    "app": "C",
    "sec": "c2",
    "secLabel": {
      "en": "C2 — Domain Name Server (DNS)",
      "vi": "C2 — Máy chủ tên miền (DNS)"
    },
    "q": {
      "en": "Why is malware increasingly using DNS over HTTPS (DoH) for resolution?",
      "vi": "Vì sao mã độc ngày càng dùng DNS over HTTPS (DoH) để phân giải?"
    },
    "opts": [
      {
        "en": "It hides DNS inside HTTPS traffic, bypassing DNS monitoring",
        "vi": "Nó giấu DNS trong lưu lượng HTTPS, vượt qua giám sát DNS"
      },
      {
        "en": "It makes DNS resolution noticeably slower",
        "vi": "Nó làm phân giải DNS chậm hơn rõ rệt"
      },
      {
        "en": "It disables encryption on the queries",
        "vi": "Nó tắt mã hóa trên các truy vấn"
      },
      {
        "en": "It is required by RFC for all malware",
        "vi": "RFC bắt buộc mọi mã độc phải dùng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "DoH (and DoT/853) encrypts DNS and, for DoH, blends it with normal HTTPS to a resolver, defeating plaintext DNS logging and sinkholing. Defenders adapt by monitoring known DoH endpoints, TLS metadata and endpoint telemetry.",
      "vi": "DoH (và DoT/853) mã hóa DNS và, với DoH, hòa lẫn với HTTPS bình thường tới một resolver, vô hiệu hóa việc ghi log DNS dạng rõ và sinkhole. Người phòng thủ thích ứng bằng cách giám sát các endpoint DoH đã biết, metadata TLS và telemetry endpoint."
    }
  },

  {
    "app": "C",
    "sec": "c2",
    "secLabel": {
      "en": "C2 — Domain Name Server (DNS)",
      "vi": "C2 — Máy chủ tên miền (DNS)"
    },
    "q": {
      "en": "Attackers favour dynamic DNS providers (e.g. no-ip, duckdns) for C2 because they:",
      "vi": "Kẻ tấn công ưa dùng nhà cung cấp dynamic DNS (vd no-ip, duckdns) cho C2 vì chúng:"
    },
    "opts": [
      {
        "en": "A stable hostname over a freely-changing backing IP",
        "vi": "Hostname ổn định trên IP nền đổi tự do"
      },
      {
        "en": "They encrypt all of the malware's traffic",
        "vi": "Chúng mã hóa toàn bộ lưu lượng mã độc"
      },
      {
        "en": "They are completely impossible to block",
        "vi": "Chúng hoàn toàn không thể chặn"
      },
      {
        "en": "They require no registration of any kind",
        "vi": "Chúng không cần đăng ký gì cả"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Dynamic DNS maps a fixed hostname to an IP the operator can change at will, giving resilient C2 without re-registering domains. The shared parent domains and provider patterns are, however, detectable indicators defenders can monitor or block.",
      "vi": "Dynamic DNS ánh xạ một hostname cố định tới một IP mà người vận hành có thể đổi tùy ý, cho C2 bền bỉ mà không phải đăng ký lại domain. Tuy nhiên, các domain cha dùng chung và mẫu của nhà cung cấp là chỉ dấu phát hiện được mà người phòng thủ có thể giám sát hoặc chặn."
    }
  },

  {
    "app": "C",
    "sec": "c2",
    "secLabel": {
      "en": "C2 — Domain Name Server (DNS)",
      "vi": "C2 — Máy chủ tên miền (DNS)"
    },
    "q": {
      "en": "Which DNS record type maps a service to a target host and port (e.g. _ldap._tcp)?",
      "vi": "Loại bản ghi DNS nào ánh xạ một dịch vụ tới host và cổng đích (vd _ldap._tcp)?"
    },
    "opts": [
      {
        "en": "SRV",
        "vi": "SRV"
      },
      {
        "en": "MX",
        "vi": "MX"
      },
      {
        "en": "PTR",
        "vi": "PTR"
      },
      {
        "en": "CNAME",
        "vi": "CNAME"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "SRV records advertise the host and port for a service (used heavily by Active Directory: _ldap._tcp, _kerberos._tcp). Enumerating SRV records can reveal internal services. MX is for mail, PTR for reverse lookups, CNAME for aliases.",
      "vi": "Bản ghi SRV quảng bá host và cổng cho một dịch vụ (Active Directory dùng nhiều: _ldap._tcp, _kerberos._tcp). Liệt kê bản ghi SRV có thể lộ dịch vụ nội bộ. MX cho mail, PTR cho tra ngược, CNAME cho bí danh."
    }
  },

  {
    "app": "C",
    "sec": "c2",
    "secLabel": {
      "en": "C2 — Domain Name Server (DNS)",
      "vi": "C2 — Máy chủ tên miền (DNS)"
    },
    "q": {
      "en": "A CAA record on a domain is used to:",
      "vi": "Một bản ghi CAA trên một domain được dùng để:"
    },
    "opts": [
      {
        "en": "Restrict which CAs may issue certs for the domain",
        "vi": "Giới hạn CA nào được cấp cert cho domain"
      },
      {
        "en": "Store the domain's list of mail servers",
        "vi": "Lưu danh sách máy chủ mail của domain"
      },
      {
        "en": "Encrypt the website's content in transit",
        "vi": "Mã hóa nội dung website khi truyền"
      },
      {
        "en": "Define the domain's IPv6 address",
        "vi": "Định nghĩa địa chỉ IPv6 của domain"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "CAA records declare which CAs are authorised to issue certs for a domain, reducing mis-issuance risk. MX lists mail servers, AAAA gives IPv6. CAA combined with Certificate Transparency logs helps detect rogue certificates.",
      "vi": "Bản ghi CAA khai báo các CA được ủy quyền cấp chứng chỉ cho domain, giảm rủi ro cấp sai. MX liệt kê máy chủ mail, AAAA cho IPv6. CAA kết hợp với log Certificate Transparency giúp phát hiện chứng chỉ giả mạo."
    }
  },

  {
    "app": "C",
    "sec": "c2",
    "secLabel": {
      "en": "C2 — Domain Name Server (DNS)",
      "vi": "C2 — Máy chủ tên miền (DNS)"
    },
    "q": {
      "en": "DNS cache poisoning aims to:",
      "vi": "DNS cache poisoning nhằm:"
    },
    "opts": [
      {
        "en": "Make victims resolve a name to an attacker-controlled IP",
        "vi": "Khiến nạn nhân phân giải một tên tới IP của kẻ tấn công"
      },
      {
        "en": "Speed up legitimate DNS resolution",
        "vi": "Tăng tốc phân giải DNS hợp lệ"
      },
      {
        "en": "Encrypt the traffic to the resolver",
        "vi": "Mã hóa lưu lượng tới resolver"
      },
      {
        "en": "Delete the authoritative zone file",
        "vi": "Xóa file zone authoritative"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Cache poisoning tricks a resolver into caching a false mapping, redirecting users to malicious hosts. DNSSEC (which cryptographically signs records) is the main defence. Recognising unexpected resolutions is key in network intrusion analysis.",
      "vi": "Cache poisoning lừa một resolver cache một ánh xạ sai, chuyển hướng người dùng tới host độc hại. DNSSEC (ký các bản ghi bằng mật mã) là phòng thủ chính. Nhận diện các phân giải bất thường là then chốt trong phân tích xâm nhập mạng."
    }
  },

  {
    "app": "C",
    "sec": "c2",
    "secLabel": {
      "en": "C2 — Domain Name Server (DNS)",
      "vi": "C2 — Máy chủ tên miền (DNS)"
    },
    "q": {
      "en": "DNSSEC primarily protects against:",
      "vi": "DNSSEC chủ yếu bảo vệ chống lại:"
    },
    "opts": [
      {
        "en": "Forgery of DNS data, including cache poisoning",
        "vi": "Giả mạo dữ liệu DNS, gồm cả cache poisoning"
      },
      {
        "en": "Hardware disk failure on the server",
        "vi": "Hỏng đĩa phần cứng trên server"
      },
      {
        "en": "Inbound spam email to the domain",
        "vi": "Email spam đi vào domain"
      },
      {
        "en": "Overheating of the server's CPU",
        "vi": "Quá nhiệt CPU của server"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "DNSSEC signs records so resolvers can verify authenticity and integrity, defeating spoofing/poisoning. It does NOT provide confidentiality (queries remain visible) — that is what DoT/DoH add. Understanding its scope avoids over-claiming protection.",
      "vi": "DNSSEC ký các bản ghi để resolver xác minh tính xác thực và toàn vẹn, vô hiệu hóa giả mạo/poisoning. Nó KHÔNG cung cấp bảo mật (truy vấn vẫn thấy được) — đó là điều DoT/DoH thêm vào. Hiểu phạm vi của nó tránh phóng đại mức bảo vệ."
    }
  },

  {
    "app": "C",
    "sec": "c2",
    "secLabel": {
      "en": "C2 — Domain Name Server (DNS)",
      "vi": "C2 — Máy chủ tên miền (DNS)"
    },
    "q": {
      "en": "A \"glue record\" exists to:",
      "vi": "Một \"glue record\" tồn tại để:"
    },
    "opts": [
      {
        "en": "Supply the IP of an in-zone name server to avoid a loop",
        "vi": "Cung cấp IP của name server trong zone để tránh vòng lặp"
      },
      {
        "en": "Encrypt the entire contents of the zone",
        "vi": "Mã hóa toàn bộ nội dung của zone"
      },
      {
        "en": "List all of the domain's mail servers",
        "vi": "Liệt kê mọi máy chủ mail của domain"
      },
      {
        "en": "Store the website's HTML content",
        "vi": "Lưu nội dung HTML của website"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "If ns1.example.com is authoritative for example.com, resolving it would require example.com's own NS — a circular dependency. The parent zone supplies a glue (A) record breaking the loop. Useful background when analysing delegation and zone structure.",
      "vi": "Nếu ns1.example.com là authoritative cho example.com, việc phân giải nó sẽ cần chính NS của example.com — một phụ thuộc vòng. Zone cha cung cấp một glue (A) record để phá vòng. Là kiến thức nền hữu ích khi phân tích ủy quyền và cấu trúc zone."
    }
  },

  {
    "app": "C",
    "sec": "c2",
    "secLabel": {
      "en": "C2 — Domain Name Server (DNS)",
      "vi": "C2 — Máy chủ tên miền (DNS)"
    },
    "q": {
      "en": "A TXT record on a domain is COMMONLY used to publish:",
      "vi": "Một bản ghi TXT trên một domain THƯỜNG được dùng để công bố:"
    },
    "opts": [
      {
        "en": "SPF/DKIM/DMARC and domain-verification tokens",
        "vi": "SPF/DKIM/DMARC và token xác minh domain"
      },
      {
        "en": "The domain's primary IPv4 address",
        "vi": "Địa chỉ IPv4 chính của domain"
      },
      {
        "en": "The domain's reverse lookup record",
        "vi": "Bản ghi tra ngược của domain"
      },
      {
        "en": "The server's hardware MAC address",
        "vi": "Địa chỉ MAC phần cứng của server"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "TXT records hold arbitrary text widely used for email authentication (SPF, DKIM keys, DMARC policy) and service verification. They can also be abused for DNS-based data exfiltration, so unusually large/frequent TXT activity warrants scrutiny.",
      "vi": "Bản ghi TXT chứa văn bản tùy ý, dùng rộng rãi cho xác thực email (SPF, khóa DKIM, chính sách DMARC) và xác minh dịch vụ. Chúng cũng có thể bị lạm dụng cho exfil dữ liệu qua DNS, nên hoạt động TXT lớn/thường xuyên bất thường cần xem xét."
    }
  },

  {
    "app": "C",
    "sec": "c2",
    "secLabel": {
      "en": "C2 — Domain Name Server (DNS)",
      "vi": "C2 — Máy chủ tên miền (DNS)"
    },
    "q": {
      "en": "On the command line, which tool/query requests a specific record type, e.g. \"dig example.com MX\"?",
      "vi": "Trên dòng lệnh, công cụ/truy vấn nào yêu cầu một loại bản ghi cụ thể, vd \"dig example.com MX\"?"
    },
    "opts": [
      {
        "en": "dig (or nslookup -type=MX)",
        "vi": "dig (hoặc nslookup -type=MX)"
      },
      {
        "en": "ping (to test reachability)",
        "vi": "ping (kiểm tra khả năng tới)"
      },
      {
        "en": "traceroute (to map hops)",
        "vi": "traceroute (vẽ các hop)"
      },
      {
        "en": "netstat (for local sockets)",
        "vi": "netstat (cho socket cục bộ)"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "dig and nslookup query DNS for specific record types and servers, central to DNS investigation (resolving names, checking MX/NS/TXT, testing a specific resolver). ping/traceroute test reachability; netstat shows local connections.",
      "vi": "dig và nslookup truy vấn DNS theo loại bản ghi và máy chủ cụ thể, trọng tâm khi điều tra DNS (phân giải tên, kiểm tra MX/NS/TXT, thử một resolver cụ thể). ping/traceroute kiểm tra khả năng tới được; netstat hiển thị kết nối cục bộ."
    }
  },

  {
    "app": "C",
    "sec": "c2",
    "secLabel": {
      "en": "C2 — Domain Name Server (DNS)",
      "vi": "C2 — Máy chủ tên miền (DNS)"
    },
    "q": {
      "en": "\"Passive DNS\" data is valuable to an analyst because it:",
      "vi": "Dữ liệu \"passive DNS\" có giá trị với analyst vì nó:"
    },
    "opts": [
      {
        "en": "Records historical domain↔IP resolutions for pivoting",
        "vi": "Ghi lịch sử phân giải domain↔IP để pivot"
      },
      {
        "en": "It blocks all known malware domains",
        "vi": "Nó chặn mọi domain mã độc đã biết"
      },
      {
        "en": "It encrypts the user's DNS queries",
        "vi": "Nó mã hóa các truy vấn DNS của người dùng"
      },
      {
        "en": "It fully replaces all WHOIS lookups",
        "vi": "Nó thay thế hoàn toàn mọi tra WHOIS"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Passive DNS databases store observed resolutions over time, so you can see which IPs a domain used historically (and vice versa) — powerful for clustering infrastructure and tracking fast-flux/DGA without querying the target. It complements, not replaces, WHOIS.",
      "vi": "Cơ sở dữ liệu passive DNS lưu các phân giải quan sát được theo thời gian, nên bạn thấy được một domain đã dùng những IP nào trong lịch sử (và ngược lại) — mạnh để gom hạ tầng và theo dõi fast-flux/DGA mà không truy vấn mục tiêu. Nó bổ trợ chứ không thay thế WHOIS."
    }
  },

  {
    "app": "C",
    "sec": "c2",
    "secLabel": {
      "en": "C2 — Domain Name Server (DNS)",
      "vi": "C2 — Máy chủ tên miền (DNS)"
    },
    "q": {
      "en": "An NS record delegation tells you:",
      "vi": "Một ủy quyền bằng bản ghi NS cho bạn biết:"
    },
    "opts": [
      {
        "en": "Which name servers are authoritative for a zone",
        "vi": "Name server nào là authoritative cho một zone"
      },
      {
        "en": "The website's rendered HTML content",
        "vi": "Nội dung HTML hiển thị của website"
      },
      {
        "en": "The domain's user account passwords",
        "vi": "Mật khẩu tài khoản người dùng của domain"
      },
      {
        "en": "The site's TLS encryption keys",
        "vi": "Khóa mã hóa TLS của site"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "NS records identify the authoritative servers for a domain/zone. Following the delegation chain (root → TLD → zone) is fundamental to DNS analysis and to spotting unusual or attacker-controlled name servers.",
      "vi": "Bản ghi NS xác định các máy chủ authoritative cho một domain/zone. Đi theo chuỗi ủy quyền (root → TLD → zone) là nền tảng của phân tích DNS và để phát hiện name server bất thường hoặc do kẻ tấn công kiểm soát."
    }
  },

  {
    "app": "C",
    "sec": "c2",
    "secLabel": {
      "en": "C2 — Domain Name Server (DNS)",
      "vi": "C2 — Máy chủ tên miền (DNS)"
    },
    "q": {
      "en": "A very low TTL on a domain's A records, combined with rapidly rotating IPs, indicates:",
      "vi": "TTL rất thấp trên bản ghi A của một domain, kết hợp IP xoay vòng nhanh, cho biết:"
    },
    "opts": [
      {
        "en": "Possible fast-flux infrastructure",
        "vi": "Có thể là hạ tầng fast-flux"
      },
      {
        "en": "An ordinary static website",
        "vi": "Một website tĩnh bình thường"
      },
      {
        "en": "A valid DNSSEC signature",
        "vi": "Một chữ ký DNSSEC hợp lệ"
      },
      {
        "en": "A standard DNS glue record",
        "vi": "Một glue record DNS chuẩn"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Fast-flux keeps TTLs very low so clients re-query often and get a constantly changing set of IPs (a proxy botnet), making takedown and blocking hard. Combined indicators (low TTL + many IPs + shared NS) raise confidence.",
      "vi": "Fast-flux giữ TTL rất thấp để client truy vấn lại thường xuyên và nhận một tập IP liên tục đổi (botnet proxy), gây khó cho takedown và chặn. Các chỉ dấu kết hợp (TTL thấp + nhiều IP + NS dùng chung) làm tăng độ tin cậy."
    }
  },

  {
    "app": "C",
    "sec": "c2",
    "secLabel": {
      "en": "C2 — Domain Name Server (DNS)",
      "vi": "C2 — Máy chủ tên miền (DNS)"
    },
    "q": {
      "en": "An HINFO record left enabled on a public DNS server is a concern because it can:",
      "vi": "Một bản ghi HINFO để bật trên một máy chủ DNS công khai đáng lo vì nó có thể:"
    },
    "opts": [
      {
        "en": "Disclose host hardware/OS info useful for recon",
        "vi": "Lộ thông tin phần cứng/OS của host, hữu ích cho recon"
      },
      {
        "en": "Encrypt the whole DNS zone file",
        "vi": "Mã hóa toàn bộ file zone DNS"
      },
      {
        "en": "Speed up the name resolution",
        "vi": "Tăng tốc phân giải tên"
      },
      {
        "en": "Block network scanning attempts",
        "vi": "Chặn các nỗ lực quét mạng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "HINFO records can reveal CPU/OS details, handing attackers reconnaissance about a host. Like verbose banners and zone transfers, such information leakage should be minimised on internet-facing DNS.",
      "vi": "Bản ghi HINFO có thể lộ chi tiết CPU/OS, trao cho kẻ tấn công thông tin trinh sát về một host. Giống banner quá chi tiết và zone transfer, rò rỉ thông tin kiểu này nên được giảm thiểu trên DNS hướng internet."
    }
  },

  {
    "app": "C",
    "sec": "c2",
    "secLabel": {
      "en": "C2 — Domain Name Server (DNS)",
      "vi": "C2 — Máy chủ tên miền (DNS)"
    },
    "q": {
      "en": "When a resolver returns the final answer itself after doing all the work, it performed a:",
      "vi": "Khi một resolver tự trả về câu trả lời cuối sau khi làm toàn bộ công việc, nó đã thực hiện một truy vấn:"
    },
    "opts": [
      {
        "en": "A recursive query done by the resolver",
        "vi": "Một truy vấn đệ quy do resolver thực hiện"
      },
      {
        "en": "An iterative query done by the client",
        "vi": "Một truy vấn lặp do client tự làm"
      },
      {
        "en": "A full zone transfer request",
        "vi": "Một yêu cầu zone transfer đầy đủ"
      },
      {
        "en": "A reverse PTR name lookup",
        "vi": "Một tra ngược tên PTR"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "In recursion the resolver follows referrals (root → TLD → authoritative) and returns the final answer to the client. Iterative resolution has the client follow referrals itself. Open recursive resolvers can be abused for DNS amplification DDoS.",
      "vi": "Trong đệ quy, resolver đi theo các referral (root → TLD → authoritative) và trả câu trả lời cuối cho client. Phân giải lặp để client tự đi theo referral. Resolver đệ quy mở có thể bị lạm dụng cho DDoS khuếch đại DNS."
    }
  },

  {
    "app": "C",
    "sec": "c3",
    "secLabel": {
      "en": "C3 — Open-Source Investigation",
      "vi": "C3 — Điều tra nguồn mở"
    },
    "q": {
      "en": "Shodan and Censys are MOST useful for:",
      "vi": "Shodan và Censys hữu ích NHẤT để:"
    },
    "opts": [
      {
        "en": "Querying pre-collected scan/banner data on exposed services",
        "vi": "Truy vấn dữ liệu quét/banner đã thu sẵn về dịch vụ bị phơi"
      },
      {
        "en": "Editing the files on the target host",
        "vi": "Sửa các file trên host mục tiêu"
      },
      {
        "en": "Decrypting the target's TLS sessions",
        "vi": "Giải mã các phiên TLS của mục tiêu"
      },
      {
        "en": "Sending phishing emails to the staff",
        "vi": "Gửi email phishing cho nhân viên"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Shodan/Censys continuously scan the internet and let you search banners, open ports, certificates and device types — passive recon (you query their data, not the target). Great for finding an org's exposed assets without touching them directly.",
      "vi": "Shodan/Censys liên tục quét internet và cho phép tìm banner, cổng mở, chứng chỉ và loại thiết bị — trinh sát thụ động (bạn truy vấn dữ liệu của họ, không phải mục tiêu). Tuyệt để tìm tài sản bị phơi của một tổ chức mà không chạm trực tiếp."
    }
  },

  {
    "app": "C",
    "sec": "c3",
    "secLabel": {
      "en": "C3 — Open-Source Investigation",
      "vi": "C3 — Điều tra nguồn mở"
    },
    "q": {
      "en": "Certificate Transparency logs (e.g. via crt.sh) are commonly used to:",
      "vi": "Log Certificate Transparency (vd qua crt.sh) thường được dùng để:"
    },
    "opts": [
      {
        "en": "Find subdomains via certificates issued for them",
        "vi": "Tìm subdomain qua các cert đã cấp cho chúng"
      },
      {
        "en": "Crack the server's TLS private keys",
        "vi": "Bẻ khóa riêng TLS của server"
      },
      {
        "en": "Reset the target's DNS records",
        "vi": "Đặt lại bản ghi DNS của mục tiêu"
      },
      {
        "en": "Read the encrypted traffic itself",
        "vi": "Đọc chính lưu lượng đã mã hóa"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Public CT logs record every certificate CAs issue. Searching them reveals (often internal-sounding) subdomains an org has certificates for — a rich, passive subdomain-enumeration source. It cannot crack keys or decrypt traffic.",
      "vi": "Log CT công khai ghi lại mọi chứng chỉ mà CA cấp. Tìm trong đó lộ ra các subdomain (thường nghe có vẻ nội bộ) mà một tổ chức có chứng chỉ — nguồn liệt kê subdomain thụ động phong phú. Nó không bẻ được khóa hay giải mã lưu lượng."
    },
    "note": {
      "en": "CT logs are an excellent passive way to enumerate subdomains.",
      "vi": "Log CT là cách thụ động tuyệt vời để liệt kê subdomain."
    }
  },

  {
    "app": "C",
    "sec": "c3",
    "secLabel": {
      "en": "C3 — Open-Source Investigation",
      "vi": "C3 — Điều tra nguồn mở"
    },
    "q": {
      "en": "theHarvester is typically used to gather:",
      "vi": "theHarvester thường được dùng để thu thập:"
    },
    "opts": [
      {
        "en": "Emails, subdomains and hostnames from public sources",
        "vi": "Email, subdomain và hostname từ nguồn công khai"
      },
      {
        "en": "Kernel memory dumps from the host",
        "vi": "Dump bộ nhớ kernel từ host"
      },
      {
        "en": "Forensic disk images of the servers",
        "vi": "Image đĩa forensic của các server"
      },
      {
        "en": "The firewall's configured rule base",
        "vi": "Bộ rule được cấu hình của firewall"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "theHarvester queries search engines and OSINT sources to enumerate emails, subdomains, hosts and sometimes employee names for a domain — useful for mapping attack surface and likely phishing targets, all passively.",
      "vi": "theHarvester truy vấn công cụ tìm kiếm và nguồn OSINT để liệt kê email, subdomain, host và đôi khi tên nhân viên của một domain — hữu ích để vẽ bề mặt tấn công và mục tiêu phishing khả dĩ, hoàn toàn thụ động."
    }
  },

  {
    "app": "C",
    "sec": "c3",
    "secLabel": {
      "en": "C3 — Open-Source Investigation",
      "vi": "C3 — Điều tra nguồn mở"
    },
    "q": {
      "en": "The search operator that limits results to a single website is:",
      "vi": "Toán tử tìm kiếm giới hạn kết quả về một website duy nhất là:"
    },
    "opts": [
      {
        "en": "site:",
        "vi": "site:"
      },
      {
        "en": "filetype:",
        "vi": "filetype:"
      },
      {
        "en": "intitle:",
        "vi": "intitle:"
      },
      {
        "en": "related:",
        "vi": "related:"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "site:example.com restricts results to that domain; filetype: targets file types, intitle:/inurl: search page titles/URLs, cache: shows the cached copy. Combining operators (dorking) surfaces exposed documents, panels and indexed sensitive content.",
      "vi": "site:example.com giới hạn kết quả về domain đó; filetype: nhắm loại file, intitle:/inurl: tìm tiêu đề/URL trang, cache: hiện bản cache. Kết hợp toán tử (dorking) làm lộ tài liệu, panel và nội dung nhạy cảm đã lập chỉ mục."
    }
  },

  {
    "app": "C",
    "sec": "c3",
    "secLabel": {
      "en": "C3 — Open-Source Investigation",
      "vi": "C3 — Điều tra nguồn mở"
    },
    "q": {
      "en": "The Wayback Machine (web.archive.org) helps an investigation by:",
      "vi": "Wayback Machine (web.archive.org) hỗ trợ điều tra bằng cách:"
    },
    "opts": [
      {
        "en": "Showing past snapshots of a site, including removed content",
        "vi": "Hiển thị ảnh chụp cũ của site, gồm nội dung đã gỡ"
      },
      {
        "en": "Decrypting the site's HTTPS traffic",
        "vi": "Giải mã lưu lượng HTTPS của site"
      },
      {
        "en": "Editing the live production website",
        "vi": "Sửa website production đang chạy"
      },
      {
        "en": "Brute-forcing the site's login page",
        "vi": "Brute-force trang đăng nhập của site"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Archived snapshots can recover removed pages, old contact details, exposed files or earlier site structure — valuable when the current site has been cleaned. It is read-only historical data, not a way to attack the live site.",
      "vi": "Ảnh chụp lưu trữ có thể khôi phục trang đã gỡ, chi tiết liên hệ cũ, file bị phơi hay cấu trúc site trước đây — giá trị khi site hiện tại đã được dọn. Đây là dữ liệu lịch sử chỉ-đọc, không phải cách tấn công site đang chạy."
    }
  },

  {
    "app": "C",
    "sec": "c3",
    "secLabel": {
      "en": "C3 — Open-Source Investigation",
      "vi": "C3 — Điều tra nguồn mở"
    },
    "q": {
      "en": "A site's robots.txt is interesting to an investigator because it may:",
      "vi": "File robots.txt của một site thú vị với điều tra viên vì nó có thể:"
    },
    "opts": [
      {
        "en": "List disallowed paths that point to sensitive areas",
        "vi": "Liệt kê đường dẫn disallow trỏ tới khu vực nhạy cảm"
      },
      {
        "en": "Contain plaintext user passwords",
        "vi": "Chứa mật khẩu người dùng dạng plaintext"
      },
      {
        "en": "Encrypt the whole website's content",
        "vi": "Mã hóa toàn bộ nội dung website"
      },
      {
        "en": "Block all hackers from the site",
        "vi": "Chặn mọi hacker khỏi site"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "robots.txt asks crawlers not to index certain paths — but it is public and often reveals admin panels, backups or staging dirs the owner wanted hidden. It controls crawlers, not access, so listed paths may still be reachable.",
      "vi": "robots.txt yêu cầu trình thu thập không lập chỉ mục một số đường dẫn — nhưng nó công khai và thường lộ ra panel admin, bản sao lưu hay thư mục staging mà chủ muốn giấu. Nó kiểm soát crawler, không phải truy cập, nên các đường dẫn liệt kê vẫn có thể tới được."
    }
  },

  {
    "app": "C",
    "sec": "c3",
    "secLabel": {
      "en": "C3 — Open-Source Investigation",
      "vi": "C3 — Điều tra nguồn mở"
    },
    "q": {
      "en": "Why is LinkedIn/social-media OSINT useful before a targeted attack?",
      "vi": "Vì sao OSINT từ LinkedIn/mạng xã hội hữu ích trước một cuộc tấn công nhắm mục tiêu?"
    },
    "opts": [
      {
        "en": "Reveals org structure, roles and tech for spear-phishing",
        "vi": "Lộ cấu trúc tổ chức, vai trò và công nghệ cho spear-phishing"
      },
      {
        "en": "It decrypts the company's internal email",
        "vi": "Nó giải mã email nội bộ của công ty"
      },
      {
        "en": "It grants direct access to the VPN",
        "vi": "Nó cấp truy cập trực tiếp vào VPN"
      },
      {
        "en": "It disables the organisation's MFA",
        "vi": "Nó vô hiệu hóa MFA của tổ chức"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Public profiles disclose names, job titles, reporting lines, projects and tech stacks. Attackers use this to craft believable spear-phishing and to identify high-value targets — which is exactly why threat assessment considers these exposures.",
      "vi": "Hồ sơ công khai lộ tên, chức danh, tuyến báo cáo, dự án và tech stack. Kẻ tấn công dùng điều này để soạn spear-phishing đáng tin và xác định mục tiêu giá trị cao — đúng lý do đánh giá mối đe dọa xét tới các phơi nhiễm này."
    }
  },

  {
    "app": "C",
    "sec": "c3",
    "secLabel": {
      "en": "C3 — Open-Source Investigation",
      "vi": "C3 — Điều tra nguồn mở"
    },
    "q": {
      "en": "Searching public code repositories (e.g. GitHub) during OSINT can uncover:",
      "vi": "Tìm trong kho mã công khai (vd GitHub) khi OSINT có thể phát hiện:"
    },
    "opts": [
      {
        "en": "Committed API keys, credentials and hostnames",
        "vi": "API key, credential và hostname bị commit"
      },
      {
        "en": "The live contents of the target's RAM",
        "vi": "Nội dung sống của RAM mục tiêu"
      },
      {
        "en": "Live captures of network packets",
        "vi": "Bản bắt gói mạng trực tiếp"
      },
      {
        "en": "The server's CPU temperature",
        "vi": "Nhiệt độ CPU của server"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Developers sometimes push secrets (keys, passwords, configs, internal URLs) to public repos. OSINT review of repos and commit history can expose these — a common real-world initial-access vector. It does not access live host internals.",
      "vi": "Lập trình viên đôi khi đẩy bí mật (khóa, mật khẩu, config, URL nội bộ) lên repo công khai. Rà soát OSINT repo và lịch sử commit có thể phơi bày chúng — một vector truy cập ban đầu phổ biến thực tế. Nó không truy cập nội bộ host đang chạy."
    }
  },

  {
    "app": "C",
    "sec": "c3",
    "secLabel": {
      "en": "C3 — Open-Source Investigation",
      "vi": "C3 — Điều tra nguồn mở"
    },
    "q": {
      "en": "DNS subdomain brute-forcing (e.g. with a wordlist) differs from CT-log enumeration in that it is:",
      "vi": "Brute-force subdomain DNS (vd bằng wordlist) khác với liệt kê qua log CT ở chỗ nó:"
    },
    "opts": [
      {
        "en": "Active, since it sends queries the target may log",
        "vi": "Chủ động, vì nó gửi truy vấn mà mục tiêu có thể ghi log"
      },
      {
        "en": "Always strictly illegal to carry out",
        "vi": "Luôn hoàn toàn bất hợp pháp khi thực hiện"
      },
      {
        "en": "Completely unable to find any subdomains",
        "vi": "Hoàn toàn không thể tìm thấy subdomain nào"
      },
      {
        "en": "Merely a form of traffic encryption",
        "vi": "Chỉ là một dạng mã hóa lưu lượng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Brute-forcing generates DNS queries (active, potentially logged/rate-limited), while CT-log mining is passive (querying public logs). Both find subdomains; the choice depends on stealth requirements and authorisation.",
      "vi": "Brute-force sinh truy vấn DNS (chủ động, có thể bị ghi log/giới hạn tốc độ), còn khai thác log CT là thụ động (truy vấn log công khai). Cả hai đều tìm subdomain; lựa chọn tùy yêu cầu ẩn mình và sự ủy quyền."
    }
  },

  {
    "app": "C",
    "sec": "c3",
    "secLabel": {
      "en": "C3 — Open-Source Investigation",
      "vi": "C3 — Điều tra nguồn mở"
    },
    "q": {
      "en": "Maltego is best categorised as a tool for:",
      "vi": "Maltego được phân loại đúng nhất là công cụ để:"
    },
    "opts": [
      {
        "en": "Visual link analysis between entities",
        "vi": "Phân tích liên kết trực quan giữa các thực thể"
      },
      {
        "en": "Disassembling binary executables",
        "vi": "Dịch ngược file thực thi nhị phân"
      },
      {
        "en": "Forensically imaging hard disks",
        "vi": "Tạo image đĩa cứng forensic"
      },
      {
        "en": "Capturing network packets live",
        "vi": "Bắt gói mạng trực tiếp"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Maltego maps and visualises relationships among entities (domains, IPs, emails, people) via \"transforms\", helping analysts pivot and see infrastructure links. It is an OSINT correlation tool, not a disassembler/imager/sniffer.",
      "vi": "Maltego vẽ và trực quan hóa quan hệ giữa các thực thể (domain, IP, email, người) qua các \"transform\", giúp analyst pivot và thấy liên kết hạ tầng. Đây là công cụ tương quan OSINT, không phải disassembler/imager/sniffer."
    }
  },

  {
    "app": "C",
    "sec": "c3",
    "secLabel": {
      "en": "C3 — Open-Source Investigation",
      "vi": "C3 — Điều tra nguồn mở"
    },
    "q": {
      "en": "Knowing the email address FORMAT of an organisation (e.g. first.last@org.com) helps an attacker because:",
      "vi": "Biết ĐỊNH DẠNG địa chỉ email của một tổ chức (vd first.last@org.com) giúp kẻ tấn công vì:"
    },
    "opts": [
      {
        "en": "With harvested names, valid addresses can be inferred",
        "vi": "Với tên thu thập được, có thể suy ra địa chỉ hợp lệ"
      },
      {
        "en": "It decrypts the target mailbox",
        "vi": "Nó giải mã hộp thư mục tiêu"
      },
      {
        "en": "It grants direct administrator rights",
        "vi": "Nó cấp quyền quản trị trực tiếp"
      },
      {
        "en": "It disables the domain's SPF record",
        "vi": "Nó vô hiệu hóa bản ghi SPF của domain"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "The naming convention plus harvested names lets attackers predict addresses for whole departments to target with phishing/credential attacks. This is why exposed staff lists and predictable formats are part of attack-surface assessment.",
      "vi": "Quy ước đặt tên cộng với tên thu thập được cho phép kẻ tấn công dự đoán địa chỉ của cả phòng ban để nhắm bằng phishing/tấn công thông tin đăng nhập. Vì vậy danh sách nhân viên bị phơi và định dạng dễ đoán là một phần của đánh giá bề mặt tấn công."
    }
  },

  {
    "app": "C",
    "sec": "c3",
    "secLabel": {
      "en": "C3 — Open-Source Investigation",
      "vi": "C3 — Điều tra nguồn mở"
    },
    "q": {
      "en": "Checking breach-data/credential-leak sources for an organisation's emails helps determine:",
      "vi": "Kiểm tra nguồn dữ liệu rò rỉ/credential-leak cho email của một tổ chức giúp xác định:"
    },
    "opts": [
      {
        "en": "Whether staff credentials appear in past breaches",
        "vi": "Liệu credential của nhân viên có trong các vụ rò rỉ trước"
      },
      {
        "en": "The live contents of the target's RAM",
        "vi": "Nội dung sống của RAM mục tiêu"
      },
      {
        "en": "The firewall's configured rule base",
        "vi": "Bộ rule được cấu hình của firewall"
      },
      {
        "en": "The host's hard-disk serial number",
        "vi": "Số serial đĩa cứng của host"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Leaked-credential datasets reveal which corporate accounts were exposed elsewhere; reused passwords then enable account takeover (credential stuffing). This OSINT informs both attacker targeting and defender risk assessment.",
      "vi": "Tập dữ liệu credential bị rò lộ tài khoản doanh nghiệp nào đã bị phơi ở nơi khác; mật khẩu dùng lại khi đó cho phép chiếm tài khoản (credential stuffing). OSINT này phục vụ cả việc nhắm mục tiêu của kẻ tấn công lẫn đánh giá rủi ro của người phòng thủ."
    }
  },

  {
    "app": "C",
    "sec": "c3",
    "secLabel": {
      "en": "C3 — Open-Source Investigation",
      "vi": "C3 — Điều tra nguồn mở"
    },
    "q": {
      "en": "Why must OSINT findings be corroborated rather than trusted at face value?",
      "vi": "Vì sao phát hiện OSINT phải được đối chiếu chứ không tin ngay?"
    },
    "opts": [
      {
        "en": "Public data can be outdated, planted or simply wrong",
        "vi": "Dữ liệu công khai có thể cũ, bị cài hoặc đơn giản là sai"
      },
      {
        "en": "OSINT is always perfectly accurate",
        "vi": "OSINT luôn chính xác tuyệt đối"
      },
      {
        "en": "All OSINT data is encrypted",
        "vi": "Mọi dữ liệu OSINT đều được mã hóa"
      },
      {
        "en": "OSINT cannot be searched at all",
        "vi": "OSINT không thể tìm kiếm được"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Open sources include stale, ambiguous or deliberately misleading data (false flags, decoy profiles). Sound analysis cross-checks multiple independent sources before drawing conclusions, especially for attribution.",
      "vi": "Nguồn mở gồm dữ liệu cũ, mơ hồ hoặc cố ý gây nhiễu (false flag, hồ sơ mồi). Phân tích đúng đắn đối chiếu nhiều nguồn độc lập trước khi kết luận, nhất là cho attribution."
    }
  },

  {
    "app": "C",
    "sec": "c4",
    "secLabel": {
      "en": "C4 — Document Meta Data",
      "vi": "C4 — Siêu dữ liệu tài liệu"
    },
    "q": {
      "en": "A photo published online still contains EXIF GPS tags. This can reveal:",
      "vi": "Một bức ảnh đăng trực tuyến vẫn còn thẻ EXIF GPS. Điều này có thể tiết lộ:"
    },
    "opts": [
      {
        "en": "The latitude/longitude where it was taken",
        "vi": "Vĩ độ/kinh độ nơi chụp ảnh"
      },
      {
        "en": "The photo viewer's account password",
        "vi": "Mật khẩu tài khoản người xem ảnh"
      },
      {
        "en": "The web server's private key",
        "vi": "Khóa riêng của web server"
      },
      {
        "en": "The TLS cipher suite in use",
        "vi": "Bộ mã TLS đang dùng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "EXIF can embed GPS coordinates, device model, timestamps and software. Geotags can deanonymise locations (homes, offices, operations). Many platforms strip EXIF on upload, but original files often retain it — relevant for OSINT and OPSEC.",
      "vi": "EXIF có thể nhúng tọa độ GPS, model thiết bị, mốc thời gian và phần mềm. Geotag có thể làm lộ vị trí (nhà, văn phòng, hoạt động). Nhiều nền tảng xóa EXIF khi upload, nhưng file gốc thường vẫn giữ — liên quan tới OSINT và OPSEC."
    }
  },

  {
    "app": "C",
    "sec": "c4",
    "secLabel": {
      "en": "C4 — Document Meta Data",
      "vi": "C4 — Siêu dữ liệu tài liệu"
    },
    "q": {
      "en": "Which metadata field in an Office document most directly helps map internal infrastructure?",
      "vi": "Trường metadata nào trong tài liệu Office giúp trực tiếp nhất việc vẽ hạ tầng nội bộ?"
    },
    "opts": [
      {
        "en": "Template/network paths and machine/user names",
        "vi": "Đường dẫn template/mạng và tên máy/người dùng"
      },
      {
        "en": "The body text's font colour",
        "vi": "Màu phông của nội dung"
      },
      {
        "en": "The document's total page count",
        "vi": "Tổng số trang của tài liệu"
      },
      {
        "en": "The default view zoom level",
        "vi": "Mức zoom hiển thị mặc định"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Office files can store UNC/template paths, computer names, user accounts and printer names, mapping internal naming and infrastructure. Tools like FOCA/metagoofil harvest documents from a domain and extract this to build a target picture.",
      "vi": "File Office có thể lưu đường dẫn UNC/template, tên máy tính, tài khoản người dùng và tên máy in, vẽ nên cách đặt tên và hạ tầng nội bộ. Công cụ như FOCA/metagoofil thu thập tài liệu từ một domain và trích chúng để dựng bức tranh mục tiêu."
    }
  },

  {
    "app": "C",
    "sec": "c4",
    "secLabel": {
      "en": "C4 — Document Meta Data",
      "vi": "C4 — Siêu dữ liệu tài liệu"
    },
    "q": {
      "en": "A \"redacted\" PDF where the black boxes can be removed or the text copied from underneath indicates:",
      "vi": "Một PDF \"đã che\" mà các ô đen có thể gỡ ra hoặc copy được chữ bên dưới cho thấy:"
    },
    "opts": [
      {
        "en": "A failed redaction where the text was never removed",
        "vi": "Một lần che (redaction) thất bại, văn bản chưa hề bị xóa"
      },
      {
        "en": "Strong, modern document encryption",
        "vi": "Mã hóa tài liệu mạnh, hiện đại"
      },
      {
        "en": "A valid embedded digital signature",
        "vi": "Một chữ ký số nhúng hợp lệ"
      },
      {
        "en": "A heavily-compressed image layer",
        "vi": "Một lớp ảnh nén nặng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Improper redaction overlays a graphic without deleting the text/data beneath, so the sensitive content remains extractable. Proper redaction removes the underlying data entirely. This is a classic information-disclosure finding in documents.",
      "vi": "Che sai cách phủ một đồ họa lên mà không xóa chữ/dữ liệu bên dưới, nên nội dung nhạy cảm vẫn trích được. Che đúng cách xóa hoàn toàn dữ liệu nền. Đây là một phát hiện rò rỉ thông tin kinh điển trong tài liệu."
    },
    "note": {
      "en": "A black box over text is not redaction unless the data beneath is removed.",
      "vi": "Một ô đen che chữ chưa phải là che thật nếu dữ liệu bên dưới chưa bị xóa."
    }
  },

  {
    "app": "C",
    "sec": "c4",
    "secLabel": {
      "en": "C4 — Document Meta Data",
      "vi": "C4 — Siêu dữ liệu tài liệu"
    },
    "q": {
      "en": "\"Track changes\" or hidden revision data left in a shared document can:",
      "vi": "Dữ liệu \"track changes\" hay bản sửa ẩn còn sót trong một tài liệu chia sẻ có thể:"
    },
    "opts": [
      {
        "en": "Expose earlier wording, comments and author identities",
        "vi": "Lộ câu chữ trước, nhận xét và danh tính tác giả"
      },
      {
        "en": "Encrypt the document's contents",
        "vi": "Mã hóa nội dung tài liệu"
      },
      {
        "en": "Increase the document's security",
        "vi": "Tăng bảo mật của tài liệu"
      },
      {
        "en": "Delete the metadata automatically",
        "vi": "Tự động xóa metadata"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Revision history and comments can reveal sensitive edits, internal discussion and contributors that were supposed to be hidden. Reviewing this hidden content is a useful OSINT/forensic step; producers should \"inspect document\" to strip it before sharing.",
      "vi": "Lịch sử sửa và nhận xét có thể lộ các chỉnh sửa nhạy cảm, thảo luận nội bộ và người đóng góp đáng lẽ bị ẩn. Xem nội dung ẩn này là một bước OSINT/forensic hữu ích; người tạo nên \"kiểm tra tài liệu\" để loại bỏ trước khi chia sẻ."
    }
  },

  {
    "app": "C",
    "sec": "c4",
    "secLabel": {
      "en": "C4 — Document Meta Data",
      "vi": "C4 — Siêu dữ liệu tài liệu"
    },
    "q": {
      "en": "ExifTool is BEST described as a tool that:",
      "vi": "ExifTool được mô tả đúng nhất là công cụ:"
    },
    "opts": [
      {
        "en": "Reads and writes metadata across many file formats",
        "vi": "Đọc và ghi metadata trên nhiều định dạng file"
      },
      {
        "en": "Captures packets off the network",
        "vi": "Bắt gói tin từ mạng"
      },
      {
        "en": "Brute-forces account passwords",
        "vi": "Brute-force mật khẩu tài khoản"
      },
      {
        "en": "Forensically images hard disks",
        "vi": "Tạo image đĩa cứng forensic"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "ExifTool extracts (and can modify/strip) metadata from images, PDFs, Office files, audio and more — the go-to for document metadata analysis. It is not a sniffer, cracker or imager.",
      "vi": "ExifTool trích (và có thể sửa/xóa) metadata từ ảnh, PDF, file Office, âm thanh và hơn nữa — công cụ chủ lực cho phân tích metadata tài liệu. Nó không phải sniffer, cracker hay imager."
    }
  },

  {
    "app": "C",
    "sec": "c4",
    "secLabel": {
      "en": "C4 — Document Meta Data",
      "vi": "C4 — Siêu dữ liệu tài liệu"
    },
    "q": {
      "en": "Document metadata showing \"Application: Microsoft Word 2010\" is useful because it:",
      "vi": "Metadata tài liệu hiển thị \"Application: Microsoft Word 2010\" hữu ích vì nó:"
    },
    "opts": [
      {
        "en": "Suggests the software version and likely patch level",
        "vi": "Gợi ý phiên bản phần mềm và mức vá khả dĩ"
      },
      {
        "en": "It decrypts the document's contents",
        "vi": "Nó giải mã nội dung tài liệu"
      },
      {
        "en": "It reveals the author's WiFi password",
        "vi": "Nó lộ mật khẩu WiFi của tác giả"
      },
      {
        "en": "It lists the host's open network ports",
        "vi": "Nó liệt kê cổng mạng mở của host"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Embedded application/version metadata helps fingerprint the author's environment, hinting at outdated, exploitable software. This supports client-software fingerprinting (B5) and target profiling. It is, of course, spoofable.",
      "vi": "Metadata ứng dụng/phiên bản nhúng giúp fingerprint môi trường của tác giả, gợi ý phần mềm cũ, có thể khai thác. Điều này hỗ trợ fingerprint phần mềm client (B5) và lập hồ sơ mục tiêu. Tất nhiên nó có thể bị giả."
    }
  },

  {
    "app": "C",
    "sec": "c4",
    "secLabel": {
      "en": "C4 — Document Meta Data",
      "vi": "C4 — Siêu dữ liệu tài liệu"
    },
    "q": {
      "en": "Before publishing a sensitive PDF, the safest way to remove identifying metadata is to:",
      "vi": "Trước khi công bố một PDF nhạy cảm, cách an toàn nhất để loại bỏ metadata nhận dạng là:"
    },
    "opts": [
      {
        "en": "Use a sanitisation/inspection step to strip it",
        "vi": "Dùng bước làm sạch/kiểm tra để loại bỏ nó"
      },
      {
        "en": "Simply rename the file before sending",
        "vi": "Chỉ đổi tên file trước khi gửi"
      },
      {
        "en": "Change the file's displayed icon",
        "vi": "Đổi icon hiển thị của file"
      },
      {
        "en": "Put the file inside a ZIP archive",
        "vi": "Đặt file vào một archive ZIP"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Renaming, re-iconing or zipping leaves the embedded metadata intact. Only an explicit sanitisation step (document inspector, exiftool -all=, print-to-clean-PDF) reliably removes authors, paths and revision data. This is both an OPSEC measure and a finding when others fail to do it.",
      "vi": "Đổi tên, đổi icon hay nén vẫn giữ nguyên metadata nhúng. Chỉ một bước làm sạch tường minh (document inspector, exiftool -all=, in ra PDF sạch) mới loại bỏ đáng tin tác giả, đường dẫn và dữ liệu sửa. Đây vừa là biện pháp OPSEC vừa là phát hiện khi người khác quên làm."
    }
  },

  {
    "app": "C",
    "sec": "c4",
    "secLabel": {
      "en": "C4 — Document Meta Data",
      "vi": "C4 — Siêu dữ liệu tài liệu"
    },
    "q": {
      "en": "metagoofil/FOCA-style tooling automates which OSINT task?",
      "vi": "Công cụ kiểu metagoofil/FOCA tự động hóa nhiệm vụ OSINT nào?"
    },
    "opts": [
      {
        "en": "Harvest public documents and extract their metadata",
        "vi": "Thu thập tài liệu công khai và trích metadata"
      },
      {
        "en": "Imaging all of the target's disks",
        "vi": "Tạo image mọi đĩa của mục tiêu"
      },
      {
        "en": "Decrypting the target's VPN tunnel",
        "vi": "Giải mã đường hầm VPN của mục tiêu"
      },
      {
        "en": "Sniffing the internal network traffic",
        "vi": "Nghe lén lưu lượng mạng nội bộ"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "These tools find indexed documents (PDF/DOCX/XLSX) for a domain via search engines, download them and parse out authors, software, paths and usernames at scale — turning scattered files into a map of users and internal systems.",
      "vi": "Các công cụ này tìm tài liệu đã lập chỉ mục (PDF/DOCX/XLSX) cho một domain qua công cụ tìm kiếm, tải về và bóc tách tác giả, phần mềm, đường dẫn và username ở quy mô lớn — biến các file rải rác thành bản đồ người dùng và hệ thống nội bộ."
    }
  },

  {
    "app": "C",
    "sec": "c5",
    "secLabel": {
      "en": "C5 — Community Knowledge",
      "vi": "C5 — Tri thức cộng đồng"
    },
    "q": {
      "en": "An AV vendor labels a sample \"Trojan.Generic\". How should you treat this name?",
      "vi": "Một hãng AV gắn nhãn mẫu là \"Trojan.Generic\". Bạn nên xem tên này thế nào?"
    },
    "opts": [
      {
        "en": "A low-confidence heuristic detection needing confirmation",
        "vi": "Phát hiện heuristic độ tin thấp, cần xác nhận thêm"
      },
      {
        "en": "A precise, authoritative family name",
        "vi": "Một định danh họ chính xác, có thẩm quyền"
      },
      {
        "en": "Definitive proof the file is safe",
        "vi": "Bằng chứng dứt khoát rằng file an toàn"
      },
      {
        "en": "The sample's encryption algorithm",
        "vi": "Thuật toán mã hóa của mẫu"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "\"Generic\"/\"Heuristic\" names mean the engine matched broad rules, not a specific known family — useful as a flag but not a definitive identification. Vendor naming is inconsistent, so corroborate with behaviour, hashes and multiple sources.",
      "vi": "Tên \"Generic\"/\"Heuristic\" nghĩa là engine khớp các rule rộng, không phải một họ cụ thể đã biết — hữu ích như một cảnh báo nhưng không phải định danh dứt khoát. Cách đặt tên giữa các hãng không nhất quán, nên đối chiếu hành vi, hash và nhiều nguồn."
    }
  },

  {
    "app": "C",
    "sec": "c5",
    "secLabel": {
      "en": "C5 — Community Knowledge",
      "vi": "C5 — Tri thức cộng đồng"
    },
    "q": {
      "en": "abuse.ch services such as URLhaus, MalwareBazaar and Feodo Tracker provide:",
      "vi": "Các dịch vụ abuse.ch như URLhaus, MalwareBazaar và Feodo Tracker cung cấp:"
    },
    "opts": [
      {
        "en": "Feeds of malicious URLs, samples and C2 indicators",
        "vi": "Nguồn cấp URL độc hại, mẫu và chỉ dấu C2"
      },
      {
        "en": "Free anonymising VPN access for analysts",
        "vi": "Truy cập VPN ẩn danh miễn phí cho analyst"
      },
      {
        "en": "Forensic disk-data recovery utilities",
        "vi": "Tiện ích khôi phục dữ liệu đĩa forensic"
      },
      {
        "en": "Offline password-cracking dictionaries",
        "vi": "Từ điển bẻ mật khẩu offline"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "abuse.ch runs open threat-sharing platforms: URLhaus (malware-distribution URLs), MalwareBazaar (samples), Feodo Tracker (banking-trojan/botnet C2) and SSLBL. These are go-to community sources for IoC enrichment and blocklists.",
      "vi": "abuse.ch vận hành các nền tảng chia sẻ mối đe dọa mở: URLhaus (URL phát tán mã độc), MalwareBazaar (mẫu), Feodo Tracker (C2 botnet/trojan ngân hàng) và SSLBL. Đây là nguồn cộng đồng chủ lực để làm giàu IoC và lập blocklist."
    }
  },

  {
    "app": "C",
    "sec": "c5",
    "secLabel": {
      "en": "C5 — Community Knowledge",
      "vi": "C5 — Tri thức cộng đồng"
    },
    "q": {
      "en": "Under the Traffic Light Protocol (TLP), information marked TLP:RED means:",
      "vi": "Theo Traffic Light Protocol (TLP), thông tin gắn nhãn TLP:RED nghĩa là:"
    },
    "opts": [
      {
        "en": "For named recipients only; do not share further",
        "vi": "Chỉ cho người nhận được nêu tên; không chia sẻ thêm"
      },
      {
        "en": "Share freely with the general public",
        "vi": "Chia sẻ tự do với công chúng"
      },
      {
        "en": "Share within the whole company",
        "vi": "Chia sẻ trong toàn công ty"
      },
      {
        "en": "Share with the entire community",
        "vi": "Chia sẻ với cả cộng đồng"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "TLP governs sharing: RED = specific recipients only; AMBER = limited to the recipient's org/clients (need-to-know); GREEN = community; CLEAR/WHITE = public. Respecting TLP is essential when consuming and redistributing threat intel.",
      "vi": "TLP điều chỉnh việc chia sẻ: RED = chỉ người nhận cụ thể; AMBER = giới hạn trong tổ chức/khách hàng của người nhận (cần-mới-biết); GREEN = cộng đồng; CLEAR/WHITE = công khai. Tôn trọng TLP là thiết yếu khi tiếp nhận và phân phối lại tình báo mối đe dọa."
    },
    "note": {
      "en": "TLP: RED → AMBER → GREEN → CLEAR, from most to least restricted.",
      "vi": "TLP: RED → AMBER → GREEN → CLEAR, từ hạn chế nhất tới ít nhất."
    }
  },

  {
    "app": "C",
    "sec": "c5",
    "secLabel": {
      "en": "C5 — Community Knowledge",
      "vi": "C5 — Tri thức cộng đồng"
    },
    "q": {
      "en": "When using an online sandbox (e.g. Any.Run, Hybrid Analysis) on a sensitive sample, the KEY OPSEC concern is:",
      "vi": "Khi dùng sandbox trực tuyến (vd Any.Run, Hybrid Analysis) với một mẫu nhạy cảm, mối lo OPSEC CHÍNH là:"
    },
    "opts": [
      {
        "en": "It may leak victim data and alert the attacker",
        "vi": "Nó có thể rò dữ liệu nạn nhân và báo động kẻ tấn công"
      },
      {
        "en": "The sandbox runs the sample too fast",
        "vi": "Sandbox chạy mẫu quá nhanh"
      },
      {
        "en": "It encrypts your only sample copy",
        "vi": "Nó mã hóa bản sao mẫu duy nhất của bạn"
      },
      {
        "en": "It wipes your analysis disk",
        "vi": "Nó xóa đĩa phân tích của bạn"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Samples and their embedded data (internal URLs, victim identifiers) may become publicly visible, and adversaries monitor these services for their own malware. For targeted incidents, prefer a private sandbox or search by hash first.",
      "vi": "Mẫu và dữ liệu nhúng (URL nội bộ, định danh nạn nhân) có thể trở nên công khai, và kẻ tấn công theo dõi các dịch vụ này để tìm mã độc của mình. Với sự cố nhắm mục tiêu, hãy ưu tiên sandbox riêng hoặc tra theo hash trước."
    }
  },

  {
    "app": "C",
    "sec": "c5",
    "secLabel": {
      "en": "C5 — Community Knowledge",
      "vi": "C5 — Tri thức cộng đồng"
    },
    "q": {
      "en": "A YARA rule shared by the community is primarily used to:",
      "vi": "Một YARA rule do cộng đồng chia sẻ chủ yếu được dùng để:"
    },
    "opts": [
      {
        "en": "Detect files matching malware-family patterns",
        "vi": "Phát hiện file khớp mẫu của họ malware"
      },
      {
        "en": "Encrypt a malware sample file",
        "vi": "Mã hóa một file mẫu mã độc"
      },
      {
        "en": "Route traffic across a network",
        "vi": "Định tuyến lưu lượng qua mạng"
      },
      {
        "en": "Allocate IP addresses to hosts",
        "vi": "Cấp phát địa chỉ IP cho host"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "YARA rules describe textual/binary patterns (strings, byte sequences, conditions) to classify and hunt malware across files and memory. Sharing rules lets the community detect related samples quickly — a core use of community knowledge.",
      "vi": "YARA rule mô tả các mẫu văn bản/nhị phân (chuỗi, dãy byte, điều kiện) để phân loại và săn mã độc trên file và bộ nhớ. Chia sẻ rule giúp cộng đồng phát hiện nhanh các mẫu liên quan — một ứng dụng cốt lõi của tri thức cộng đồng."
    }
  },

  {
    "app": "C",
    "sec": "c5",
    "secLabel": {
      "en": "C5 — Community Knowledge",
      "vi": "C5 — Tri thức cộng đồng"
    },
    "q": {
      "en": "The MOST reliable way to eliminate a false positive from an AV/IDS alert is to:",
      "vi": "Cách ĐÁNG TIN nhất để loại bỏ một false positive từ cảnh báo AV/IDS là:"
    },
    "opts": [
      {
        "en": "Corroborate across sources and analyse the behaviour",
        "vi": "Đối chiếu nhiều nguồn và phân tích hành vi"
      },
      {
        "en": "Trust one single engine's verdict",
        "vi": "Tin phán quyết của một engine duy nhất"
      },
      {
        "en": "Assume every alert is a real one",
        "vi": "Cho rằng mọi cảnh báo đều thật"
      },
      {
        "en": "Disable the noisy detection sensor",
        "vi": "Tắt cảm biến phát hiện gây nhiễu"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Single-source verdicts are unreliable; confirming with multiple engines, reputation data, sandbox behaviour and the local context (is the file legitimate here?) is how analysts distinguish true from false positives without going blind.",
      "vi": "Phán quyết một nguồn không đáng tin; xác nhận bằng nhiều engine, dữ liệu danh tiếng, hành vi sandbox và bối cảnh cục bộ (file có hợp lệ ở đây không?) là cách analyst phân biệt true với false positive mà không mất tầm nhìn."
    }
  },

  {
    "app": "C",
    "sec": "c5",
    "secLabel": {
      "en": "C5 — Community Knowledge",
      "vi": "C5 — Tri thức cộng đồng"
    },
    "q": {
      "en": "CVE/NVD entries are MOST useful during an investigation to:",
      "vi": "Các mục CVE/NVD hữu ích NHẤT trong điều tra để:"
    },
    "opts": [
      {
        "en": "Map software versions to known vulnerabilities",
        "vi": "Ánh xạ phiên bản phần mềm tới lỗ hổng đã biết"
      },
      {
        "en": "Decrypt captured network traffic",
        "vi": "Giải mã lưu lượng mạng đã bắt"
      },
      {
        "en": "Recover files deleted from disk",
        "vi": "Khôi phục file đã xóa khỏi đĩa"
      },
      {
        "en": "Assign IP addresses to the hosts",
        "vi": "Cấp phát địa chỉ IP cho host"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "Once you fingerprint a service/version, CVE/NVD tell you the known vulnerabilities, severity and exploit availability — helping reconstruct how a breach likely occurred and what to prioritise. They are reference data, not a forensic recovery tool.",
      "vi": "Khi đã fingerprint một dịch vụ/phiên bản, CVE/NVD cho biết các lỗ hổng đã biết, mức nghiêm trọng và khả năng có exploit — giúp dựng lại cách xảy ra xâm nhập khả dĩ và ưu tiên xử lý gì. Đây là dữ liệu tham chiếu, không phải công cụ khôi phục forensic."
    }
  },

  {
    "app": "C",
    "sec": "c5",
    "secLabel": {
      "en": "C5 — Community Knowledge",
      "vi": "C5 — Tri thức cộng đồng"
    },
    "q": {
      "en": "Why is searching a file's hash on a reputation service preferable to uploading the file in a targeted incident?",
      "vi": "Vì sao tra hash của file trên dịch vụ danh tiếng được ưu tiên hơn upload file trong một sự cố nhắm mục tiêu?"
    },
    "opts": [
      {
        "en": "Searching reveals what's known without exposing the sample",
        "vi": "Tra cứu cho biết điều đã biết mà không phơi mẫu"
      },
      {
        "en": "Hashes are encrypted but files are not",
        "vi": "Hash được mã hóa còn file thì không"
      },
      {
        "en": "Uploading a file is technically impossible",
        "vi": "Upload một file là bất khả thi kỹ thuật"
      },
      {
        "en": "Searching modifies the original file",
        "vi": "Tra cứu làm thay đổi file gốc"
      }
    ],
    "correct": 0,
    "exp": {
      "en": "A hash lookup checks if the sample is already known without making your (possibly sensitive, targeted) file public or signalling the adversary that their tooling was caught. Upload only when the OPSEC trade-off is acceptable. Note: no hits ≠ clean.",
      "vi": "Tra hash kiểm tra xem mẫu đã được biết chưa mà không làm file (có thể nhạy cảm, nhắm mục tiêu) của bạn công khai hay báo cho kẻ tấn công rằng công cụ của chúng bị bắt. Chỉ upload khi đánh đổi OPSEC chấp nhận được. Lưu ý: không có kết quả ≠ sạch."
    }
  }

);
