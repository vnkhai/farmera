// products.js — central product dataset
const products = [
  {
    id: 14,
    name: "Hệ thống thủy canh",
    category: "thiet-bi",
    type: "Sản phẩm",
    price: "5.500.000đ",
    img: "assets/img/san-pham/sp-1-1.png",
    images: [
      "assets/img/san-pham/sp-1-1.png",
      "assets/img/san-pham/sp-1-2.png",
      "assets/img/san-pham/sp-1-3.png",
    ],
  },
  {
    id: 15,
    name: "Indoor Smart Farm Mini",
    category: "thiet-bi",
    type: "Sản phẩm",
    price: "2.800.000đ",
    img: "assets/img/san-pham/sp-2-1.png",
    images: [
      "assets/img/san-pham/sp-2-1.png",
      "assets/img/san-pham/sp-2-2.png",
      "assets/img/san-pham/sp-2-3.png",
    ],
  },
  {
    id: 16,
    name: "Hệ thống Farm Auto",
    category: "thiet-bi",
    type: "Sản phẩm",
    price: "Liên hệ",
    img: "assets/img/san-pham/sp-3-1.png",
    images: [
      "assets/img/san-pham/sp-3-1.png",
      "assets/img/san-pham/sp-3-2.png",
      "assets/img/san-pham/sp-3-3.png",
    ],
  },
  {
    id: 17,
    name: "Kit tưới nhỏ giọt (Cơ bản)",
    category: "thiet-bi",
    type: "Sản phẩm",
    price: "450.000đ",
    img: "assets/img/san-pham/sp-4-1.png",
    images: [
      "assets/img/san-pham/sp-4-1.png",
      "assets/img/san-pham/sp-4-2.png",
      "assets/img/san-pham/sp-4-3.png",
    ],
  },
  {
    id: 18,
    name: "Kit tưới nhỏ giọt (Pro)",
    category: "thiet-bi",
    type: "Sản phẩm",
    price: "1.250.000đ",
    img: "assets/img/san-pham/sp-5-1.png",
    images: [
      "assets/img/san-pham/sp-5-1.png",
      "assets/img/san-pham/sp-5-2.png",
      "assets/img/san-pham/sp-5-3.png",
    ],
  },
  {
    id: 19,
    name: "Máy phun thông minh",
    category: "thiet-bi",
    type: "Sản phẩm",
    price: "3.200.000đ",
    img: "assets/img/san-pham/sp-6-1.png",
    images: [
      "assets/img/san-pham/sp-6-1.png",
      "assets/img/san-pham/sp-6-2.png",
      "assets/img/san-pham/sp-6-3.png",
    ],
  },
  {
    id: 20,
    name: "Bộ điều khiển trung tâm",
    category: "thiet-bi",
    type: "Sản phẩm",
    price: "4.500.000đ",
    img: "assets/img/san-pham/sp-7-1.png",
    images: [
      "assets/img/san-pham/sp-7-1.png",
      "assets/img/san-pham/sp-7-2.png",
      "assets/img/san-pham/sp-7-3.png",
    ],
  },
  {
    id: 21,
    name: "Cảm biến nhiệt/ẩm đất",
    category: "iot",
    type: "IoT",
    price: "850.000đ",
    img: "assets/img/san-pham/sp-8-1.png",
    images: [
      "assets/img/san-pham/sp-8-1.png",
      "assets/img/san-pham/sp-8-2.png",
      "assets/img/san-pham/sp-8-3.png",
    ],
  },
  {
    id: 22,
    name: "Cảm biến dinh dưỡng EC/pH",
    category: "iot",
    type: "IoT",
    price: "1.500.000đ",
    img: "assets/img/san-pham/sp-9-1.png",
    images: [
      "assets/img/san-pham/sp-9-1.png",
      "assets/img/san-pham/sp-9-2.png",
      "assets/img/san-pham/sp-9-3.png",
    ],
  },
  {
    id: 23,
    name: "IoT Gateway quản lý",
    category: "iot",
    type: "IoT",
    price: "2.500.000đ",
    img: "assets/img/san-pham/sp-10-1.png",
    images: [
      "assets/img/san-pham/sp-10-1.png",
      "assets/img/san-pham/sp-10-2.png",
      "assets/img/san-pham/sp-10-3.png",
    ],
  },
  {
    id: 24,
    name: "Camera AI sâu bệnh",
    category: "iot",
    type: "IoT",
    price: "3.800.000đ",
    img: "assets/img/san-pham/sp-11-1.png",
    images: [
      "assets/img/san-pham/sp-11-1.png",
      "assets/img/san-pham/sp-11-2.png",
      "assets/img/san-pham/sp-11-3.png",
    ],
  },
  {
    id: 25,
    name: "Nhà màng tiêu chuẩn",
    category: "nha-mang",
    type: "Công trình",
    price: "Liên hệ",
    img: "assets/img/san-pham/sp-12-1.png",
    images: [
      "assets/img/san-pham/sp-12-1.png",
      "assets/img/san-pham/sp-12-2.png",
      "assets/img/san-pham/sp-12-3.png",
    ],
  },
  {
    id: 26,
    name: "Nhà kính công nghệ Israel",
    category: "nha-mang",
    type: "Công trình",
    price: "Liên hệ",
    img: "assets/img/san-pham/sp-13-1.png",
    images: [
      "assets/img/san-pham/sp-13-1.png",
      "assets/img/san-pham/sp-13-2.png",
      "assets/img/san-pham/sp-13-3.png",
    ],
  },
  {
    id: 27,
    name: "Nhà lưới chống côn trùng",
    category: "nha-mang",
    type: "Công trình",
    price: "Liên hệ",
    img: "assets/img/san-pham/sp-14-1.png",
    images: [
      "assets/img/san-pham/sp-14-1.png",
      "assets/img/san-pham/sp-14-2.png",
      "assets/img/san-pham/sp-14-3.png",
    ],
  },
  {
    id: 28,
    name: "Giống lúa ST25",
    category: "vat-tu",
    type: "Vật tư",
    price: "25.000đ/kg",
    img: "assets/img/san-pham/sp-15-1.png",
    images: [
      "assets/img/san-pham/sp-15-1.png",
      "assets/img/san-pham/sp-15-2.png",
      "assets/img/san-pham/sp-15-3.png",
    ],
  },
  {
    id: 29,
    name: "Phân bón hữu cơ",
    category: "vat-tu",
    type: "Vật tư",
    price: "150.000đ/bao",
    img: "assets/img/san-pham/sp-16-1.png",
    images: [
      "assets/img/san-pham/sp-16-1.png",
      "assets/img/san-pham/sp-16-2.png",
      "assets/img/san-pham/sp-16-3.png",
    ],
  },
  {
    id: 30,
    name: "Đèn LED quang hợp",
    category: "vat-tu",
    type: "Vật tư",
    price: "450.000đ",
    img: "assets/img/san-pham/sp-17-1.png",
    images: [
      "assets/img/san-pham/sp-17-1.png",
      "assets/img/san-pham/sp-17-2.png",
      "assets/img/san-pham/sp-17-3.png",
    ],
  },
];

// Expose products for legacy inline scripts
window.products = products;

// Rich product details mapped by product name
window.productDetails = {
  "Hệ thống thủy canh": {
    price: "5.500.000đ",
    summary: "Hệ thống thủy canh gia đình - Giá: 5.500.000đ",
    specs: [
      "Kích thước: 1.5m x 0.6m x 1.6m (Dài x Rộng x Cao)",
      "Công suất: 72 - 100 rọ trồng/lần thu hoạch",
      "Kết nối: Bơm tuần hoàn tự động (Timer cơ/điện tử)",
      "Vòng đời: 30 - 45 ngày/lứa rau",
    ],
    extra: "*Giá đã bao gồm trọn bộ khung, ống, bơm và dinh dưỡng ban đầu.",
    description:
      "Hệ thống thủy canh hồi lưu được thiết kế tối ưu cho ban công, sân thượng nhà phố. Sử dụng ống uPVC chuyên dụng chịu nhiệt, an toàn cho sức khỏe. Thiết kế giàn tầng giúp tối đa hóa sản lượng rau trên một diện tích nhỏ hẹp.",
    highlights: [
      "Hệ thống hồi lưu tự động giúp tiết kiệm 90% nước so với trồng đất.",
      "Rau phát triển nhanh, không cần làm đất, không cỏ dại.",
      "Khung sắt mạ kẽm sơn tĩnh điện chống rỉ sét, độ bền trên 10 năm.",
      "Dễ dàng tháo lắp và di chuyển khi cần thiết.",
    ],
    support: [
      "Bảo hành: 12 tháng cho máy bơm và timer, 5 năm cho ống nhựa.",
      "Hỗ trợ: Hướng dẫn lắp đặt video call + Tặng kèm tài liệu canh tác chuẩn.",
    ],
  },
  "Indoor Smart Farm Mini": {
    price: "2.800.000đ",
    summary: "Tủ trồng rau thông minh trong nhà - Giá: 2.800.000đ",
    specs: [
      "Kích thước: 60cm x 30cm x 40cm (Nhỏ gọn để bàn)",
      "Công suất: 12 - 15 hốc trồng (Phù hợp rau gia vị/Salad)",
      "Kết nối: Tự động hóa ánh sáng & bơm (Plug & Play)",
      "Vòng đời: 20 - 30 ngày (Tùy loại cây)",
    ],
    extra: "*Sản phẩm bao gồm đèn LED quang hợp chuyên dụng.",
    description:
      "Thiết bị trồng cây trong nhà tích hợp đèn LED quang hợp giả lập ánh sáng mặt trời, giúp cây phát triển xanh tốt ngay cả trong phòng kín, thiếu sáng. Thiết kế hiện đại, sang trọng như một món đồ nội thất trang trí.",
    highlights: [
      "Đèn LED quang hợp Full-spectrum giúp cây quang hợp tối ưu.",
      "Chế độ Smart Mode: Tự động bật/tắt đèn và bơm nước theo chu trình sinh học.",
      "Bình chứa nước khép kín, sạch sẽ, không vương vãi đất cát.",
      "Cảnh báo mực nước thấp thông minh.",
    ],
    support: [
      "Bảo hành: 12 tháng đổi mới linh kiện điện tử.",
      "Hỗ trợ: Tặng kèm hạt giống & dung dịch thủy canh đợt đầu.",
    ],
  },
  "Hệ thống Farm Auto": {
    price: "Liên hệ",
    summary: "Giải pháp nông nghiệp thông minh 4.0 - Giá: Liên hệ",
    specs: [
      "Kích thước: Tùy chỉnh theo quy mô trang trại (Custom)",
      "Công suất: Không giới hạn (Quy mô công nghiệp)",
      "Kết nối: IoT 4G/WiFi/LoRaWAN",
      "Vòng đời: Vận hành liên tục 24/7",
    ],
    extra: "*Giải pháp được thiết kế riêng theo nhu cầu thực tế.",
    description:
      "Hệ thống quản lý và vận hành nông trại tự động hóa hoàn toàn. Tích hợp cảm biến môi trường và bộ điều khiển trung tâm để tự động điều chỉnh tưới tiêu, châm phân, quạt gió, cắt nắng... giúp tối ưu chi phí nhân công và vật tư.",
    highlights: [
      "Giám sát và điều khiển mọi lúc mọi nơi qua Smartphone/Web App.",
      "Tự động châm phân (Fertigation) dựa trên chỉ số EC/pH thời gian thực.",
      "Lưu trữ dữ liệu lịch sử canh tác phục vụ truy xuất nguồn gốc.",
      "Khả năng mở rộng không giới hạn thiết bị ngoại vi.",
    ],
    support: [
      "Bảo hành: 2 năm cho hệ thống điều khiển trung tâm.",
      "Hỗ trợ: Khảo sát tận nơi + Đào tạo chuyển giao công nghệ + Bảo trì định kỳ.",
    ],
  },
  "Kit tưới nhỏ giọt (Cơ bản)": {
    price: "450.000đ",
    summary: "Bộ kit tưới ban công tự lắp ráp - Giá: 450.000đ",
    specs: [
      "Kích thước: Dây dẫn dài 15m (Phi 6mm)",
      "Công suất: 20 đầu tưới nhỏ giọt bù áp",
      "Kết nối: Timer chạy Pin (Không cần nguồn điện)",
      "Vòng đời: Pin sử dụng 3-6 tháng",
    ],
    extra: "*Dễ dàng lắp đặt chỉ trong 15 phút.",
    description:
      "Giải pháp tưới cây tự động đơn giản, tiết kiệm chi phí cho ban công nhỏ. Sử dụng van hẹn giờ chạy pin an toàn tuyệt đối, không cần đấu nối dây điện phức tạp. Phù hợp cho người bận rộn thường xuyên vắng nhà.",
    highlights: [
      "Đầu tưới nhỏ giọt có thể điều chỉnh lưu lượng nước từng chậu.",
      "Tiết kiệm 70% nước so với tưới tay, nước thấm trực tiếp vào gốc.",
      "Hoạt động độc lập bằng Pin, không lo mất điện hay chập cháy.",
      "Khớp nối nhanh Quick-Connect không rò rỉ.",
    ],
    support: [
      "Bảo hành: 6 tháng cho bộ hẹn giờ (Timer).",
      "Hỗ trợ: Video hướng dẫn lắp đặt chi tiết.",
    ],
  },
  "Kit tưới nhỏ giọt (Pro)": {
    price: "1.250.000đ",
    summary: "Hệ thống tưới sân vườn cao cấp - Giá: 1.250.000đ",
    specs: [
      "Kích thước: Dây chính 20m (16mm) + Dây nhánh 30m (6mm)",
      "Công suất: 40 - 50 đầu tưới đa năng",
      "Kết nối: Timer điện tử LCD / Có cổng chờ cảm biến mưa",
      "Vòng đời: Độ bền ống dẫn > 5 năm ngoài trời",
    ],
    extra: "*Phù hợp cho sân vườn biệt thự, vườn sân thượng lớn.",
    description:
      "Phiên bản Pro với khả năng chịu áp lực nước cao và lưu lượng lớn hơn. Hệ thống sử dụng ống dẫn chính lớn (16mm) đảm bảo nước chảy đều đến các chậu cây ở xa nhất. Bộ điều khiển cho phép cài đặt nhiều chương trình tưới phức tạp trong ngày.",
    highlights: [
      "Hỗ trợ đa dạng đầu tưới: Nhỏ giọt, phun sương, phun mưa.",
      "Màn hình LCD trực quan, cài đặt chính xác từng phút.",
      "Vật liệu nhựa nguyên sinh chống tia UV, chịu được nắng mưa khắc nghiệt.",
      "Có tích hợp lọc đĩa chống tắc nghẽn béc tưới.",
    ],
    support: [
      "Bảo hành: 12 tháng đổi mới bộ điều khiển.",
      "Hỗ trợ: Tư vấn sơ đồ đi đường nước tối ưu.",
    ],
  },
  "Máy phun thông minh": {
    price: "3.200.000đ",
    summary: "Máy phun sương/tưới lan tự động - Giá: 3.200.000đ",
    specs: [
      "Kích thước: 30cm x 20cm x 25cm (Cụm máy bơm)",
      "Công suất: 1.5 - 2.0 Lít/phút (Phun 20-30 béc đồng thời)",
      "Kết nối: WiFi Smart Control (Tuya/SmartLife)",
      "Vòng đời: Động cơ hoạt động 10.000 giờ",
    ],
    extra: "*Chuyên dụng cho vườn Lan và làm mát không gian.",
    description:
      "Hệ thống máy phun sương cao cấp tích hợp điều khiển thông minh qua điện thoại. Tạo ra hạt sương siêu mịn giúp giảm nhiệt độ môi trường nhanh chóng và cung cấp độ ẩm lý tưởng cho hoa lan, cây cảnh mà không gây úng nước.",
    highlights: [
      "Điều khiển bật/tắt, hẹn giờ từ xa qua App điện thoại.",
      "Máy bơm áp lực cao, vận hành êm ái, không gây tiếng ồn.",
      "Đầu phun sương bằng đồng hoặc inox chống ăn mòn, hạt sương mịn như khói.",
      "Có thể kết hợp với cảm biến nhiệt độ/độ ẩm để tự động vận hành.",
    ],
    support: [
      "Bảo hành: 12 tháng chính hãng.",
      "Hỗ trợ: 1 đổi 1 trong 30 ngày nếu lỗi động cơ.",
    ],
  },
  "Bộ điều khiển trung tâm": {
    price: "4.500.000đ",
    summary: "Hub điều khiển nhà vườn thông minh - Giá: 4.500.000đ",
    specs: [
      "Kích thước: 150mm x 150mm x 40mm",
      "Công suất: Điều khiển 4-8 kênh thiết bị độc lập",
      "Kết nối: Zigbee / WiFi / 4G LTE Backup",
      "Vòng đời: Chipset công nghiệp bền bỉ",
    ],
    extra: "*Bộ não của hệ thống nông nghiệp công nghệ cao.",
    description:
      "Thiết bị trung tâm thu thập dữ liệu từ các cảm biến và điều khiển toàn bộ các thiết bị điện trong khu vườn. Được trang bị thuật toán AI giúp học hỏi thói quen chăm sóc và tối ưu hóa môi trường sống cho cây trồng một cách tự động.",
    highlights: [
      "Giao diện tiếng Việt trực quan, dễ sử dụng cho mọi lứa tuổi.",
      "Thiết lập kịch bản ngữ cảnh thông minh (If-Then-Else).",
      "Server đặt tại Việt Nam cho tốc độ phản hồi tức thì, ổn định.",
      "Tương thích với Google Assistant/Alexa điều khiển bằng giọng nói.",
    ],
    support: [
      "Bảo hành: 2 năm (1 đổi 1 trong năm đầu tiên).",
      "Hỗ trợ: Update phần mềm trọn đời + Hỗ trợ kỹ thuật online 24/7.",
    ],
  },
  "Cảm biến nhiệt/ẩm đất": {
    price: "850.000đ",
    summary: "Cảm biến độ ẩm & nhiệt độ đất (Soil Sensor) - Giá: 850.000đ",
    specs: [
      "Kích thước: Đầu dò dài 70mm, cáp dẫn dài 2m",
      "Công suất: Phạm vi đo 0-100% (Độ ẩm), -40~80℃ (Nhiệt độ)",
      "Kết nối: RS485 Modbus / Analog 4-20mA",
      "Vòng đời: Đầu dò Inox 316L bền bỉ > 3 năm",
    ],
    extra: "*Tương thích với hầu hết các bộ điều khiển trung tâm hiện nay.",
    description:
      "Thiết bị giám sát sức khỏe môi trường đất chuyên dụng. Cảm biến giúp đo lường chính xác độ ẩm trong đất để điều tiết lượng nước tưới phù hợp, tránh tình trạng cây bị úng nước hoặc khô hạn. Đồng thời giám sát nhiệt độ vùng rễ để có biện pháp che phủ kịp thời.",
    highlights: [
      "Đầu dò làm bằng thép không gỉ (Inox 316L) chống ăn mòn, chịu được axit/kiềm trong đất.",
      "Độ chính xác cao (sai số < 2%), phản hồi dữ liệu tức thì.",
      "Đổ keo Epoxy chống nước hoàn toàn chuẩn IP68, chôn trực tiếp dưới đất.",
      "Giúp tiết kiệm nước tưới và nâng cao năng suất cây trồng.",
    ],
    support: [
      "Bảo hành: 12 tháng lỗi 1 đổi 1.",
      "Hỗ trợ: Hướng dẫn hiệu chuẩn (Calibration) định kỳ.",
    ],
  },
  "Cảm biến dinh dưỡng EC/pH": {
    price: "1.500.000đ",
    summary: "Cảm biến đo nồng độ dinh dưỡng thủy canh - Giá: 1.500.000đ",
    specs: [
      "Kích thước: Phi 12mm x 160mm (Chuẩn công nghiệp)",
      "Công suất: Dải đo pH: 0-14 / EC: 0-20mS/cm",
      "Kết nối: Jack BNC / RS485 (Tùy chọn)",
      "Vòng đời: Điện cực hoạt động tốt 12 - 18 tháng",
    ],
    extra:
      "*Giải pháp không thể thiếu cho hệ thống thủy canh/châm phân tự động.",
    description:
      '"Bác sĩ dinh dưỡng" cho cây trồng. Cảm biến tích hợp 2 trong 1 (hoặc bộ đôi cảm biến rời) giúp đo lường liên tục nồng độ dinh dưỡng (EC) và độ chua/kiềm (pH) của dung dịch tưới. Đây là yếu tố then chốt quyết định sự phát triển của cây trong mô hình thủy canh hoặc tưới nhỏ giọt.',
    highlights: [
      "Giám sát thời gian thực, gửi dữ liệu về bộ trung tâm để tự động châm phân/axit.",
      "Điện cực thủy tinh công nghiệp độ nhạy cao, giảm thiểu độ trễ.",
      "Tự động bù nhiệt (ATC) để đảm bảo kết quả chính xác trong môi trường nước nóng/lạnh.",
      "Thiết kế chống nhiễu tín hiệu.",
    ],
    support: [
      "Bảo hành: 6 tháng cho đầu dò (Do đặc thù hao mòn hóa học).",
      "Hỗ trợ: Tặng kèm bột pha dung dịch đệm để hiệu chuẩn máy.",
    ],
  },
  "IoT Gateway quản lý": {
    price: "2.500.000đ",
    summary: "Bộ thu thập dữ liệu & Điều khiển biên - Giá: 2.500.000đ",
    specs: [
      "Kích thước: 120mm x 120mm x 30mm (Nhỏ gọn, treo tường)",
      "Công suất: Kết nối tối đa 128 thiết bị con (Cảm biến/Công tắc)",
      "Kết nối: Zigbee 3.0 / WiFi 2.4G / LAN RJ45",
      "Vòng đời: Hoạt động bền bỉ 24/7 > 5 năm",
    ],
    extra: "*Đóng vai trò cầu nối giữa vườn và điện thoại của bạn.",
    description:
      "IoT Gateway là trạm trung chuyển dữ liệu thông minh. Nó thu thập tín hiệu từ tất cả các cảm biến rải rác trong vườn, xử lý và gửi lên Cloud Server. Thiết bị có khả năng xử lý cục bộ (Edge Computing), đảm bảo hệ thống tưới vẫn chạy đúng lịch ngay cả khi mất mạng Internet.",
    highlights: [
      "Kết nối sóng Zigbee xa và ổn định, ít tiêu thụ năng lượng.",
      "Bảo mật dữ liệu chuẩn AES-128, chống xâm nhập.",
      "Tích hợp pin dự phòng (Option) giúp gửi cảnh báo khi mất điện lưới.",
      "Khả năng tương thích rộng với nhiều hãng thiết bị Smart Home/Smart Farm.",
    ],
    support: [
      "Bảo hành: 24 tháng chính hãng.",
      "Hỗ trợ: Update Firmware từ xa (OTA) miễn phí trọn đời.",
    ],
  },
  "Camera AI sâu bệnh": {
    price: "3.800.000đ",
    summary: "Camera giám sát nông nghiệp thông minh - Giá: 3.800.000đ",
    specs: [
      "Kích thước: 180mm x 90mm x 80mm (Chuẩn Outdoor)",
      "Công suất: Độ phân giải 4MP (2K) - Tầm nhìn hồng ngoại 30m",
      "Kết nối: WiFi / 4G Sim (Tùy chọn) / PoE",
      "Vòng đời: Cảm biến hình ảnh Sony Starvis > 5 năm",
    ],
    extra: "*Ứng dụng trí tuệ nhân tạo để phát hiện sớm dịch hại.",
    description:
      "Không chỉ là camera quan sát thông thường, Camera AI được trang bị thuật toán nhận diện hình ảnh chuyên sâu cho nông nghiệp. Thiết bị tự động chụp ảnh định kỳ, phân tích màu sắc lá cây để phát hiện dấu hiệu úa vàng, đốm lá hoặc sự xâm nhập của côn trùng lạ.",
    highlights: [
      "Cảnh báo sớm: Phát hiện bất thường và gửi thông báo kèm hình ảnh về điện thoại.",
      "Timelapse: Tự động tạo video tua nhanh quá trình sinh trưởng của cây (làm tư liệu marketing).",
      "Chống chịu thời tiết: Chuẩn IP67 chống nước, bụi và chịu nhiệt độ cao ngoài trời.",
      "Hình ảnh sắc nét: Công nghệ chống ngược sáng WDR, nhìn rõ chi tiết lá cây.",
    ],
    support: [
      "Bảo hành: 24 tháng (Bao gồm cả thẻ nhớ chuyên dụng).",
      "Hỗ trợ: Cài đặt vùng nhận diện AI theo yêu cầu cụ thể của vườn.",
    ],
  },
  "Nhà màng tiêu chuẩn": {
    price: "Liên hệ",
    summary: "Nhà màng nông nghiệp đa năng - Giá: Liên hệ báo giá",
    specs: [
      "Kích thước: Khẩu độ: 6m - 9.6m | Bước cột: 3m - 4m",
      "Kết cấu: Thép mạ kẽm hòa phát (Dày 1.4mm - 1.8mm)",
      "Vật liệu: Màng PE 150 micron (Bảo hành 3-5 năm)",
      "Vòng đời: Khung thép > 15 năm | Màng phủ 5-7 năm",
    ],
    extra:
      "*Giải pháp phổ biến nhất cho trồng dưa lưới, cà chua, rau thủy canh.",
    description:
      "Mô hình nhà màng tiêu chuẩn (dạng mái vòm hở hoặc kín) giúp bảo vệ cây trồng khỏi tác động tiêu cực của thời tiết như mưa lớn, sương muối và côn trùng gây hại. Thiết kế tối ưu hóa sự đối lưu không khí, giảm nhiệt độ bên trong và tạo môi trường ổn định cho cây phát triển.",
    highlights: [
      "Chống mưa & Côn trùng: Ngăn ngừa mưa axit làm hỏng lá và chặn 90% côn trùng xâm nhập.",
      "Kiểm soát khí hậu: Thiết kế cửa thông gió đỉnh mái và xung quanh giúp không khí lưu thông tốt.",
      "Chi phí hợp lý: Tối ưu hóa giữa chi phí đầu tư và hiệu quả kinh tế, thu hồi vốn nhanh.",
      "Hệ thống treo: Khung giàn chịu lực tốt, sẵn sàng cho việc treo cáp trồng dưa/cà chua.",
    ],
    support: [
      "Bảo hành: 2 năm cho kết cấu khung, theo chính sách hãng cho màng phủ.",
      "Hỗ trợ: Miễn phí thiết kế bản vẽ thi công 2D/3D.",
    ],
  },
  "Nhà kính công nghệ Israel": {
    price: "Liên hệ",
    summary: "Nhà kính thông minh (Smart Greenhouse) - Giá: Liên hệ báo giá",
    specs: [
      "Kích thước: Khẩu độ lớn: 9.6m - 12.8m | Chiều cao máng xối: 4m - 5m",
      "Kết cấu: Hệ thống lắp ghép bằng bát liên kết, không mối hàn (Chịu bão cấp 11-12)",
      "Vật liệu: Màng Israel 5 lớp (Khuếch tán ánh sáng, chống UV, chống bụi)",
      "Vòng đời: Khung thép > 20 năm | Màng phủ cao cấp",
    ],
    extra: "*Đỉnh cao công nghệ cho nông nghiệp quy mô công nghiệp/xuất khẩu.",
    description:
      "Được chuyển giao công nghệ trực tiếp từ Israel, mẫu nhà kính này có khả năng chịu đựng điều kiện thời tiết khắc nghiệt (gió bão). Thiết kế ưu việt với khẩu độ rộng giúp tối đa hóa diện tích canh tác và thuận tiện cho việc cơ giới hóa, đưa máy móc vào sản xuất.",
    highlights: [
      "Ánh sáng khuếch tán: Màng phim công nghệ cao giúp ánh sáng phân bổ đều mọi ngóc ngách, cây không bị cháy nắng.",
      "Cửa mái cánh bướm (Butterfly): Thông gió vượt trội, giảm nhiệt độ nhanh chóng.",
      "Kết cấu vững chãi: Sử dụng thép cường độ cao, lắp ráp 100% bằng bulong/ốc vít, chống rỉ sét tuyệt đối.",
      "Sẵn sàng cho IoT: Thiết kế tương thích hoàn hảo với hệ thống cắt nắng, phun sương, quạt đối lưu tự động.",
    ],
    support: [
      "Bảo hành: 5 năm cho kết cấu, 3 năm cho màng phủ (theo tiêu chuẩn NSX).",
      "Hỗ trợ: Chuyên gia tư vấn quy trình canh tác công nghệ cao.",
    ],
  },
  "Giống lúa ST25": {
    price: "25.000đ/kg",
    summary: "Hạt giống lúa ST25 (Gạo ngon nhất thế giới) - Giá: 25.000đ/kg",
    specs: [
      "Quy cách: Bao 1kg / Bao 10kg",
      "Tỷ lệ nảy mầm: > 85%",
      "Thời gian sinh trưởng: 95 - 105 ngày",
      "Năng suất: 6.5 - 7.0 tấn/ha (Thâm canh tốt đạt 8 tấn)",
    ],
    extra: "*Giống xác nhận cấp 1, bao bì có tem chống hàng giả.",
    description:
      "Giống lúa ST25 được mệnh danh là 'Gạo ngon nhất thế giới', cho hạt gạo thon dài, trắng trong, không bạc bụng. Khi nấu cơm dẻo, thơm mùi lá dứa và cốm non đặc trưng, cơm vẫn giữ được độ mềm ngon ngay cả khi để nguội. Đây là giống lúa có khả năng thích nghi rộng, đặc biệt là vùng lúa - tôm nhờ khả năng chịu mặn tốt.",
    highlights: [
      "Chất lượng thượng hạng: Cơm mềm, dẻo, vị ngọt đậm đà, hương thơm tự nhiên.",
      "Kháng bệnh tốt: Cứng cây, chống đổ ngã, kháng bệnh đạo ôn và rầy nâu ở mức khá.",
      "Thích ứng rộng: Trồng được quanh năm, chịu phèn mặn tốt.",
      "Hiệu quả kinh tế cao: Giá bán lúa thương phẩm luôn cao hơn các giống thường.",
    ],
    support: [
      "Cam kết: Đúng giống, độ sạch > 99%.",
      "Hỗ trợ: Tư vấn kỹ thuật ngâm ủ và quy trình bón phân theo từng giai đoạn lúa.",
    ],
  },
  "Phân bón hữu cơ": {
    price: "150.000đ/bao",
    summary: "Phân bón hữu cơ vi sinh cao cấp - Giá: 150.000đ/bao",
    specs: [
      "Trọng lượng: 25kg/bao",
      "Dạng: Viên nén đậm đặc (Pellets) tan chậm",
      "Thành phần: Hữu cơ (OM) > 65%, Axit Humic + Fulvic, NPK hữu hiệu",
      "Xuất xứ: Nhập khẩu (Bỉ/Hà Lan) hoặc Hàng VN chất lượng cao",
    ],
    extra: "*Phù hợp cho rau sạch, hoa hồng, cây ăn trái và cây cảnh.",
    description:
      "Sản phẩm được sản xuất từ nguyên liệu hữu cơ tự nhiên (phân gà, bã thực vật) qua quá trình ủ men vi sinh công nghệ cao giúp tiêu diệt hoàn toàn mầm bệnh và hạt cỏ dại. Dạng viên nén tiện lợi, không mùi hôi, giúp cải tạo đất bạc màu trở nên tơi xốp và phì nhiêu.",
    highlights: [
      "Dinh dưỡng cân đối: Cung cấp đầy đủ đa, trung, vi lượng cho cây phát triển bền vững.",
      "Cải tạo đất: Tăng độ mùn, cân bằng độ pH đất, tạo môi trường cho vi sinh vật có lợi phát triển.",
      "An toàn tuyệt đối: Không chứa kim loại nặng, không gây nóng chết rễ.",
      "Kích rễ mạnh: Bổ sung Humic giúp bộ rễ phát triển mạnh.",
    ],
    support: [
      "Bảo hành: Đổi trả nếu phân bị ẩm mốc, vỡ nát quá 10%.",
      "Hỗ trợ: Hướng dẫn liều lượng bón cho từng loại cây trồng.",
    ],
  },
  "Đèn LED quang hợp": {
    price: "450.000đ",
    summary: "Đèn LED chuyên dụng trồng cây trong nhà - Giá: 450.000đ",
    specs: [
      "Kích thước: Dài 1.2m (Dạng tuýp T8 hoặc Thanh nhôm)",
      "Công suất: 18W - 20W",
      "Quang phổ: Full Spectrum hoặc WR (Tím hồng)",
      "Tuổi thọ: > 30.000 giờ chiếu sáng",
    ],
    extra: "*Giải pháp trồng cây thiếu sáng, trồng rau trong nhà, nuôi cấy mô.",
    description:
      "Khác với đèn chiếu sáng thông thường, Đèn LED quang hợp phát ra các bước sóng ánh sáng chuyên biệt mà cây trồng hấp thụ mạnh nhất để quang hợp. Giúp cây sinh trưởng mạnh, thân mập, lá xanh dày và lên màu đẹp ngay cả khi trồng trong phòng kín.",
    highlights: [
      "Hiệu suất cao: Tối ưu hóa quá trình quang hợp, giúp cây không bị vống.",
      "Tiết kiệm điện: Công nghệ LED tiêu thụ ít điện năng, tỏa nhiệt thấp.",
      "Chống nước: Thiết kế kín (chuẩn IP54 hoặc IP65) chịu được độ ẩm cao.",
      "Đa năng: Phù hợp cho trồng rau thủy canh, sen đá, kiểng lá.",
    ],
    support: [
      "Bảo hành: 12 tháng (1 đổi 1 lỗi nhà sản xuất).",
      "Hỗ trợ: Tư vấn tính toán số lượng đèn cần thiết cho diện tích vườn.",
    ],
  },
  "Nhà lưới chống côn trùng": {
    price: "Liên hệ",
    summary: "Nhà lưới hở/kín trồng rau sạch - Giá: Liên hệ báo giá",
    specs: [
      "Kích thước: Thiết kế linh hoạt theo diện tích đất thực tế",
      "Kết cấu: Cột bê tông hoặc cột thép ống mạ kẽm",
      "Vật liệu: Lưới chắn côn trùng (32 mesh - 64 mesh) nhập khẩu/Việt Nam",
      "Vòng đời: Lưới 3 - 5 năm | Khung > 10 năm",
    ],
    extra: "*Giải pháp tiết kiệm cho rau ăn lá, vườn ươm, cây ăn trái.",
    description:
      "Nhà lưới là giải pháp kinh tế nhất để sản xuất rau an toàn theo hướng hữu cơ/VietGAP. Lớp lưới bao phủ giúp ngăn chặn các loại bướm, bọ trĩ, rầy rệp tấn công, từ đó giảm thiểu hoặc loại bỏ hoàn toàn việc sử dụng thuốc bảo vệ thực vật hóa học.",
    highlights: [
      "Thông thoáng tối đa: Không gây hiệu ứng nhà kính, nhiệt độ bên trong gần như bên ngoài.",
      "Phân tán hạt mưa: Lưới giúp xé nhỏ hạt mưa, tránh làm dập nát rau non khi mưa lớn.",
      "Chi phí thấp: Suất đầu tư thấp, dễ dàng thi công và sửa chữa.",
      "Đa dạng mắt lưới: Tùy chọn mật độ lưới (mesh) phù hợp với từng loại đối tượng sâu bệnh tại địa phương.",
    ],
    support: [
      "Bảo hành: 12 tháng cho hệ thống khung và lưới.",
      "Hỗ trợ: Tư vấn chọn loại lưới phù hợp với từng loại cây trồng.",
    ],
    cta: "Đăng ký tư vấn",
  },
};
