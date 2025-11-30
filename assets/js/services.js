// services.js — central services dataset
const services = [
  {
    id: 1,
    name: "Dịch vụ phun thuốc Drone",
    category: "dich-vu-cnc",
    type: "Dịch vụ",
    price: "350.000đ/ha",
    img: "assets/img/dich-vu/dv-1-1.png",
    images: [
      "assets/img/dich-vu/dv-1-1.png",
      "assets/img/dich-vu/dv-1-2.png",
      "assets/img/dich-vu/dv-1-3.png",
    ],
  },
  {
    id: 2,
    name: "Dịch vụ rải phân Drone",
    category: "dich-vu-cnc",
    type: "Dịch vụ",
    price: "300.000đ/ha",
    img: "assets/img/dich-vu/dv-2-1.png",
    images: [
      "assets/img/dich-vu/dv-2-1.png",
      "assets/img/dich-vu/dv-2-2.png",
      "assets/img/dich-vu/dv-2-3.png",
    ],
  },
  {
    id: 3,
    name: "Phun chế phẩm sinh học",
    category: "dich-vu-cnc",
    type: "Dịch vụ",
    price: "Liên hệ",
    img: "assets/img/dich-vu/dv-3-1.png",
    images: [
      "assets/img/dich-vu/dv-3-1.png",
      "assets/img/dich-vu/dv-3-2.png",
      "assets/img/dich-vu/dv-3-3.png",
    ],
  },
  {
    id: 4,
    name: "Lắp đặt tưới tự động",
    category: "dich-vu-cnc",
    type: "Dịch vụ",
    price: "Theo dự án",
    img: "assets/img/dich-vu/dv-4-1.png",
    images: [
      "assets/img/dich-vu/dv-4-1.png",
      "assets/img/dich-vu/dv-4-2.png",
      "assets/img/dich-vu/dv-4-3.png",
    ],
  },
  {
    id: 5,
    name: "Thiết kế nhà màng",
    category: "dich-vu-cnc",
    type: "Dịch vụ",
    price: "Theo m2",
    img: "assets/img/dich-vu/dv-5-1.png",
    images: [
      "assets/img/dich-vu/dv-5-1.png",
      "assets/img/dich-vu/dv-5-2.png",
      "assets/img/dich-vu/dv-5-3.png",
    ],
  },
  {
    id: 6,
    name: "Thi công nhà kính CNC",
    category: "dich-vu-cnc",
    type: "Dịch vụ",
    price: "Theo m2",
    img: "assets/img/dich-vu/dv-6-1.png",
    images: [
      "assets/img/dich-vu/dv-6-1.png",
      "assets/img/dich-vu/dv-6-2.png",
      "assets/img/dich-vu/dv-6-3.png",
    ],
  },
  {
    id: 7,
    name: "Khảo sát đồng ruộng AI",
    category: "dich-vu-cnc",
    type: "Dịch vụ",
    price: "500.000đ/ha",
    img: "assets/img/dich-vu/dv-7-1.png",
    images: [
      "assets/img/dich-vu/dv-7-1.png",
      "assets/img/dich-vu/dv-7-2.png",
      "assets/img/dich-vu/dv-7-3.png",
    ],
  },
  {
    id: 8,
    name: "Tư vấn BVTV Online",
    category: "dich-vu-cnc",
    type: "Dịch vụ",
    price: "Miễn phí",
    img: "assets/img/dich-vu/dv-8-1.png",
    images: [
      "assets/img/dich-vu/dv-8-1.png",
      "assets/img/dich-vu/dv-8-2.png",
      "assets/img/dich-vu/dv-8-3.png",
    ],
  },
  {
    id: 9,
    name: "Thuê máy cày làm đất",
    category: "thue-ngoai",
    type: "Thuê ngoài",
    price: "1.200.000đ/ha",
    img: "assets/img/dich-vu/dv-9-1.png",
    images: [
      "assets/img/dich-vu/dv-9-1.png",
      "assets/img/dich-vu/dv-9-2.png",
      "assets/img/dich-vu/dv-9-3.png",
    ],
  },
  {
    id: 10,
    name: "Dịch vụ cấy máy",
    category: "thue-ngoai",
    type: "Thuê ngoài",
    price: "3.500.000đ/ha",
    img: "assets/img/dich-vu/dv-10-1.png",
    images: [
      "assets/img/dich-vu/dv-10-1.png",
      "assets/img/dich-vu/dv-10-2.png",
      "assets/img/dich-vu/dv-10-3.png",
    ],
  },
  {
    id: 11,
    name: "Thu hoạch lúa liên hợp",
    category: "thue-ngoai",
    type: "Thuê ngoài",
    price: "Theo thị trường",
    img: "assets/img/dich-vu/dv-11-1.png",
    images: [
      "assets/img/dich-vu/dv-11-1.png",
      "assets/img/dich-vu/dv-11-2.png",
      "assets/img/dich-vu/dv-11-3.png",
    ],
  },
  {
    id: 12,
    name: "Thu hoạch cây ăn trái",
    category: "thue-ngoai",
    type: "Thuê ngoài",
    price: "Theo tấn",
    img: "assets/img/dich-vu/dv-12-1.png",
    images: [
      "assets/img/dich-vu/dv-12-1.png",
      "assets/img/dich-vu/dv-12-2.png",
      "assets/img/dich-vu/dv-12-3.png",
    ],
  },
  {
    id: 13,
    name: "Vận chuyển nông sản",
    category: "thue-ngoai",
    type: "Thuê ngoài",
    price: "Theo km",
    img: "assets/img/dich-vu/dv-13-1.png",
    images: [
      "assets/img/dich-vu/dv-13-1.png",
      "assets/img/dich-vu/dv-13-2.png",
      "assets/img/dich-vu/dv-13-3.png",
    ],
  },
];

// Expose services on window
window.services = services;

// Rich service details mapped by service name
window.serviceDetails = {
  "Dịch vụ phun thuốc Drone": {
    price: "350.000đ/ha",
    summary:
      "Phun thuốc bảo vệ thực vật bằng máy bay không người lái - Giá: 350.000đ/ha",
    specs: [
      "Thiết bị: Drone nông nghiệp thế hệ mới (T30/T40/G300...)",
      "Công suất: 10 - 15 phút/hecta",
      "Công nghệ: Phun ly tâm hạt siêu mịn (Atomization)",
      "Hiệu quả: Tiết kiệm 30% thuốc, 90% nước",
    ],
    extra: "*Giá có thể giảm theo diện tích lớn hoặc hợp đồng trọn vụ.",
    description:
      "Giải pháp bảo vệ thực vật tiên tiến thay thế sức người. Sử dụng máy bay không người lái với công nghệ phun sương cắt nhỏ hạt thuốc thành kích thước micromet, giúp thuốc bám đều vào cả mặt trên và mặt dưới lá, tăng hiệu quả diệt trừ sâu bệnh và không gây tồn dư thuốc xuống đất.",
    highlights: [
      "Bảo vệ sức khỏe: Nông dân không phải tiếp xúc trực tiếp với hóa chất độc hại.",
      "Không dẫm đạp lúa: Bay trên không giúp giảm thất thoát lúa do lội ruộng (giảm 150-200kg lúa/ha).",
      "Đồng đều & Chính xác: Hệ thống radar và định vị RTK giúp bay đúng làn, không bỏ sót, không phun chồng lối.",
      "Chủ động thời gian: Phun được cả vào ban đêm (thời điểm sâu rầy hoạt động mạnh nhất).",
    ],
    support: [
      "Cam kết: Phun lại miễn phí nếu phát hiện lỗi kỹ thuật bay gây sót diện tích.",
      "Hỗ trợ: Tư vấn loại thuốc pha phù hợp cho máy bay.",
    ],
    cta: "Đặt lịch ngay",
  },
  "Dịch vụ rải phân Drone": {
    price: "300.000đ/ha",
    summary: "Rải phân bón, gieo sạ bằng Drone - Giá: 300.000đ/ha",
    specs: [
      "Tải trọng: 40kg - 50kg/lần cất cánh",
      "Tốc độ rải: 1 - 1.5 tấn phân/giờ",
      "Phạm vi rải: Chiều rộng vệt rải 5m - 7m",
      "Ứng dụng: Gieo sạ lúa, rải phân hạt, rải thức ăn thủy sản",
    ],
    extra: "*Nhanh hơn gấp 50 lần so với rải thủ công.",
    description:
      "Dịch vụ sử dụng hệ thống rải lan tỏa thông minh, giúp hạt giống hoặc phân bón được rải đều tăm tắp trên mặt ruộng. Giải quyết bài toán thiếu hụt nhân công mùa vụ và tình trạng gieo sạ không đều tay dẫn đến lúa mọc dày/thưa.",
    highlights: [
      "Độ phủ đều: Hạt phân không bị vón cục, rải đều giúp cây trồng hấp thụ dinh dưỡng đồng nhất.",
      "Vận hành mọi địa hình: Hoạt động tốt trên đất lầy thụt, đồi dốc mà con người khó di chuyển.",
      "Tiết kiệm chi phí: Giảm lượng giống và phân bón thất thoát do rải thừa/thiếu.",
    ],
    support: [
      "Cam kết: Đảm bảo mật độ gieo sạ/rải phân theo đúng yêu cầu của chủ ruộng.",
    ],
    cta: "Đặt lịch ngay",
  },
  "Phun chế phẩm sinh học": {
    price: "Liên hệ",
    summary: "Phun chế phẩm vi sinh/hữu cơ an toàn - Giá: Liên hệ",
    specs: [
      "Đối tượng: Rau sạch, Cây ăn trái xuất khẩu, Farm hữu cơ",
      "Phương pháp: Phun sương mù lạnh hoặc tưới gốc",
      "Vật tư: Chế phẩm sinh học đạt chuẩn (IMO, Trichoderma, EM...)",
      "Tiêu chuẩn: VietGAP / GlobalGAP / Organic",
    ],
    extra: "*Giải pháp canh tác bền vững, bảo vệ môi trường.",
    description:
      "Dịch vụ chuyên biệt dành cho các nông trại canh tác theo hướng hữu cơ an toàn. Chúng tôi cung cấp giải pháp phun phòng trừ sâu bệnh bằng các chế phẩm sinh học, nấm đối kháng, không sử dụng thuốc trừ sâu hóa học, đảm bảo thời gian cách ly ngắn và nông sản sạch tuyệt đối.",
    highlights: [
      "An toàn tuyệt đối: Không độc hại cho người phun, người tiêu dùng và hệ sinh thái.",
      "Cải tạo đất: Kết hợp phun các dòng vi sinh giúp đất tơi xốp, giàu dinh dưỡng.",
      "Không kháng thuốc: Sâu bệnh không bị nhờn thuốc như khi dùng hóa chất.",
    ],
    support: [
      "Hỗ trợ: Chuyên gia nông học trực tiếp thăm khám và lên phác đồ xử lý.",
    ],
    cta: "Đăng ký tư vấn",
  },
  "Lắp đặt tưới tự động": {
    price: "Theo dự án",
    summary: "Thi công hệ thống tưới thông minh - Giá: Theo thiết kế thực tế",
    specs: [
      "Công nghệ: Israel (Netafim), Mỹ (Rainbird), hoặc Đài Loan",
      "Loại hình: Tưới nhỏ giọt, phun mưa, phun sương",
      "Quy mô: Từ ban công nhỏ đến trang trại hàng chục hecta",
      "Điều khiển: Tự động qua Smartphone/Timer",
    ],
    extra: "*Báo giá chi tiết sau khi khảo sát thực địa.",
    description:
      "Dịch vụ trọn gói từ khâu khảo sát, thiết kế bản vẽ thủy lực, tính toán công suất bơm đến thi công lắp đặt và bàn giao. Hệ thống giúp tự động hóa việc tưới tiêu, đảm bảo cung cấp đúng và đủ lượng nước cho cây trồng tại mọi thời điểm.",
    highlights: [
      "Tính toán thủy lực chuẩn: Đảm bảo áp lực nước đồng đều tại mọi vị trí đầu tưới.",
      "Tiết kiệm nhân công: Giảm 90% công sức tưới tắm hàng ngày.",
      "Thẩm mỹ & Bền bỉ: Đường ống gọn gàng, sử dụng phụ kiện chính hãng.",
    ],
    support: [
      "Bảo hành: 12 - 24 tháng cho toàn bộ hệ thống.",
      "Hỗ trợ: Bảo trì định kỳ, khắc phục sự cố rò rỉ trong 24h.",
    ],
    cta: "Khảo sát miễn phí",
  },
  "Thiết kế nhà màng": {
    price: "Theo m2",
    summary: "Thiết kế kiến trúc nông nghiệp - Giá: Theo m2 sàn",
    specs: [
      "Đầu ra: Bản vẽ 2D, Phối cảnh 3D, Bảng dự toán vật tư (BOQ)",
      "Phần mềm: AutoCAD, SketchUp, Revit",
      "Thời gian: 3 - 7 ngày làm việc",
      "Loại hình: Nhà màng, Nhà lưới, Nhà kho nông nghiệp",
    ],
    extra: "*Tối ưu hóa chi phí đầu tư ngay từ trên giấy.",
    description:
      "Trước khi xây dựng, bạn cần một bản thiết kế chuẩn để tránh lãng phí vật tư và đảm bảo an toàn kết cấu. Đội ngũ kỹ sư của chúng tôi sẽ tính toán tải trọng gió, hướng nắng và bố trí không gian sản xuất tối ưu nhất cho khu đất của bạn.",
    highlights: [
      "May đo theo nhu cầu: Thiết kế dựa trên khí hậu vùng miền và loại cây trồng cụ thể.",
      "Dự toán chính xác: Giúp chủ đầu tư chuẩn bị tài chính, tránh phát sinh chi phí không đáng có.",
      "Tối ưu công năng: Bố trí hợp lý hệ thống đường đi, khu xử lý nước, khu đóng gói.",
    ],
    support: [
      "Cam kết: Bản vẽ đạt tiêu chuẩn kỹ thuật xây dựng, hỗ trợ chỉnh sửa 3 lần miễn phí.",
    ],
    cta: "Đăng ký tư vấn",
  },
  "Thi công nhà kính CNC": {
    price: "Theo m2",
    summary: "Chế tạo & Lắp dựng nhà kính công nghệ cao - Giá: Theo m2",
    specs: [
      "Công nghệ: Gia công khung thép bằng máy CNC độ chính xác cao",
      "Vật liệu: Thép mạ kẽm cường độ cao, không rỉ sét",
      "Kết cấu: Lắp ghép 100% (Module hóa), không hàn xì tại công trình",
      "Tiến độ: Thi công nhanh gấp 2 lần phương pháp truyền thống",
    ],
    extra: "*Giải pháp nhà kính bền vững, chịu bão tốt.",
    description:
      "Dịch vụ thi công nhà kính chuyên nghiệp. Toàn bộ khung kèo được gia công sẵn tại nhà máy bằng dây chuyền CNC tự động, sau đó vận chuyển đến công trình để lắp ráp. Phương pháp này đảm bảo độ chính xác tuyệt đối, kết cấu vững chắc và độ bền vượt trội.",
    highlights: [
      "Độ bền vĩnh cửu: Không có mối hàn, toàn bộ liên kết bằng bát và bulong.",
      "Di dời dễ dàng: Có thể tháo dỡ và lắp đặt lại ở vị trí khác khi cần thiết.",
      "Chịu tải tốt: Thiết kế treo được hệ thống tưới, quạt, đèn và treo trái mật độ cao.",
    ],
    support: [
      "Bảo hành: 5 năm cho kết cấu khung thép.",
      "Hỗ trợ: Thay màng/lưới định kỳ với giá ưu đãi.",
    ],
    cta: "Nhận báo giá",
  },
  "Khảo sát đồng ruộng AI": {
    price: "500.000đ/ha",
    summary: "Bay quét bản đồ sức khỏe cây trồng - Giá: 500.000đ/ha",
    specs: [
      "Thiết bị: Drone đa phổ (Multispectral) - Mavic 3M / Phantom 4 RTK",
      "Đầu ra: Bản đồ NDVI, Bản đồ mật độ, Bản đồ địa hình 3D",
      "Độ phân giải: Chính xác đến từng centimet (cm)",
      "Thời gian trả kết quả: Trong vòng 24h",
    ],
    extra: "*Nhìn thấy những gì mắt thường không thấy.",
    description:
      "Sử dụng Drone trang bị Camera đa phổ để quét toàn bộ cánh đồng. Dữ liệu thu được sẽ được AI phân tích để tạo ra bản đồ chỉ số thực vật (NDVI), giúp phát hiện sớm các vùng cây bị stress, sâu bệnh hoặc thiếu dinh dưỡng trước khi biểu hiện ra bên ngoài.",
    highlights: [
      "Phát hiện sớm bệnh hại: Khoanh vùng chính xác khu vực bị bệnh để phun thuốc cục bộ (Spot Spraying).",
      "Tối ưu phân bón: Tạo bản đồ biến thiên để bón phân đúng nhu cầu của từng khu vực đất.",
      "Đếm số lượng cây: Kiểm kê tài sản cây trồng chính xác 99%.",
    ],
    support: ["Cam kết: Dữ liệu bảo mật, báo cáo trực quan dễ hiểu."],
    cta: "Đặt lịch bay",
  },
  "Tư vấn BVTV Online": {
    price: "Miễn phí",
    summary: "Bác sĩ cây trồng trực tuyến - Giá: 0đ (Miễn phí)",
    specs: [
      "Kênh hỗ trợ: Zalo / App Mobile / Video Call",
      "Thời gian phản hồi: < 30 phút (Trong giờ hành chính)",
      "Đội ngũ: Kỹ sư nông nghiệp & Chuyên gia đầu ngành",
      "Phạm vi: Toàn quốc",
    ],
    extra: "*Người bạn đồng hành tin cậy của nhà nông.",
    description:
      "Dịch vụ hỗ trợ cộng đồng hoàn toàn miễn phí. Khi cây trồng gặp vấn đề lạ, bà con chỉ cần chụp ảnh/quay phim và gửi qua ứng dụng. Đội ngũ kỹ sư của chúng tôi sẽ chẩn đoán bệnh và đưa ra phác đồ điều trị (tên hoạt chất, liều lượng, cách phun) chính xác nhất.",
    highlights: [
      "Tiện lợi: Không cần chờ đợi chuyên gia xuống tận nơi.",
      "Chính xác: Chẩn đoán dựa trên hình ảnh và triệu chứng lâm sàng kết hợp dữ liệu lớn (Big Data).",
      "Khách quan: Tư vấn hoạt chất thuốc, không ép mua sản phẩm chỉ định.",
    ],
    support: ["Hỗ trợ: Theo dõi quá trình hồi phục của cây sau khi xử lý."],
    cta: "Gửi câu hỏi ngay",
  },
  "Thuê máy cày làm đất": {
    price: "1.200.000đ/ha",
    summary: "Cày xới, trục trạc, san phẳng mặt ruộng - Giá: 1.200.000đ/ha",
    specs: [
      "Thiết bị: Máy kéo công suất lớn (Kubota/Yanmar 40HP - 60HP)",
      "Độ sâu cày: 15cm - 25cm (Phá vỡ tầng đế cày)",
      "Năng suất: 3 - 4 ha/ngày/máy",
      "Loại đất: Đất lúa, đất màu, đất trồng cây ăn trái",
    ],
    extra: "*Đảm bảo đất tơi xốp, bằng phẳng, vùi lấp rơm rạ/cỏ dại sạch sẽ.",
    description:
      "Khâu làm đất là khởi đầu quan trọng nhất của mùa vụ. Dịch vụ của chúng tôi sử dụng dàn máy cày hiện đại, kết hợp phay xới giúp đất tơi mịn và san phẳng mặt ruộng bằng tia laser (nếu yêu cầu). Việc làm đất kỹ giúp rễ cây phát triển mạnh, hạn chế ngộ độc hữu cơ và cỏ dại về sau.",
    highlights: [
      "Cày sâu: Giúp đưa dinh dưỡng ở tầng dưới lên và chôn lấp mầm bệnh/cỏ dại xuống sâu.",
      "San phẳng: Giúp quản lý nước đồng đều, tiết kiệm nước tưới và dễ dàng bón phân.",
      "Đội ngũ lành nghề: Tài xế kinh nghiệm, đường cày thẳng tắp, bo góc ruộng sạch sẽ.",
      "Linh hoạt: Có máy bánh xích cao su cho vùng đất lầy thụt.",
    ],
    support: [
      "Cam kết: Trục lại miễn phí nếu mặt ruộng chưa phẳng hoặc còn sót cỏ.",
    ],
    cta: "Đặt lịch cày",
  },
  "Dịch vụ cấy máy": {
    price: "3.500.000đ/ha",
    summary: "Cấy lúa bằng máy chuyên dụng - Giá: 3.500.000đ/ha",
    specs: [
      "Thiết bị: Máy cấy ngồi lái (6 hàng - 8 hàng)",
      "Mật độ: 25 - 30 khóm/m2 (Điều chỉnh được)",
      "Khoảng cách: Hàng cách hàng 30cm",
      "Loại mạ: Mạ khay tiêu chuẩn (Tuổi mạ 12-15 ngày)",
    ],
    extra: "*Giải pháp giúp lúa cứng cây, ít sâu bệnh, năng suất cao.",
    description:
      "Thay thế phương pháp sạ lan truyền thống bằng công nghệ cấy máy tiên tiến. Cấy máy giúp ruộng lúa thông thoáng, cây lúa nhận đủ ánh sáng nên đẻ nhánh khỏe, thân to, hạn chế tối đa tình trạng đổ ngã khi gặp mưa bão và giảm áp lực sâu bệnh.",
    highlights: [
      "Tiết kiệm giống: Chỉ tốn 50-60kg lúa giống/ha (so với 120-150kg sạ lan).",
      "Không lo lúa cỏ: Do cấy theo hàng lối nên dễ dàng xử lý lúa cỏ/cỏ dại mọc xen kẽ.",
      "Dễ chăm sóc: Khoảng cách đều giúp việc phun thuốc, bón phân bằng Drone đạt hiệu quả cao.",
      "Rễ ăn sâu: Mạ cấy không bị tổn thương rễ, phục hồi xanh nhanh sau 3 ngày.",
    ],
    support: [
      "Hỗ trợ: Bao gồm khâu gieo mạ khay và vận chuyển mạ ra đồng.",
      "Cam kết: Dặm lại những chỗ máy cấy bị sót (nếu có).",
    ],
    cta: "Đặt lịch cấy",
  },
  "Thu hoạch lúa liên hợp": {
    price: "Theo thị trường",
    summary: "Gặt đập liên hợp (Cắt + Tuốt + Đóng bao) - Giá: Theo thời giá",
    specs: [
      "Thiết bị: Kubota DC70 Plus / DC93 / Yanmar AW82",
      "Năng suất: 0.5 - 0.8 ha/giờ",
      "Tỷ lệ hao hụt: < 2%",
      "Đóng bao: Tự động hoặc xả vòi (tùy chọn)",
    ],
    extra: "*Thu hoạch siêu tốc chạy đua với mưa bão.",
    description:
      "Dịch vụ thu hoạch lúa trọn gói. Chúng tôi sở hữu đội máy gặt hiện đại có khả năng vận hành tốt trên cả những chân ruộng trũng, lúa đổ ngã. Hệ thống sàng lọc kép giúp hạt lúa sạch, ít tạp chất, rơm rạ được băm nhỏ trả lại ruộng hoặc thu gom theo yêu cầu.",
    highlights: [
      "Cắt sát gốc: Giúp vệ sinh đồng ruộng tốt hơn cho vụ sau.",
      "Giảm thất thoát: Công nghệ guồng gặt thông minh giảm rơi vãi hạt lúa xuống mức thấp nhất.",
      "Vận hành liên tục: Đội ngũ thợ máy đi kèm xử lý sự cố ngay tại ruộng.",
      "Gặt lúa đổ: Chuyên trị các ruộng lúa bị ngã rạp do mưa gió.",
    ],
    support: ["Cam kết: Cân lúa minh bạch ngay tại đầu bờ."],
    cta: "Nhận báo giá ngay",
  },
  "Thu hoạch cây ăn trái": {
    price: "Theo tấn",
    summary: "Hái trái, phân loại & đóng sọt - Giá: Tính theo tấn sản phẩm",
    specs: [
      "Đối tượng: Sầu riêng, Xoài, Cam, Bưởi, Thanh long...",
      "Nhân lực: Đội thợ hái chuyên nghiệp + Thợ lựa hàng (Vựa)",
      "Dụng cụ: Thang, kéo cắt cành chuyên dụng, giỏ đệm chống sốc",
      "Quy trình: Hái -> Hạ thổ nhẹ nhàng -> Phân loại -> Đóng gói",
    ],
    extra: "*Giữ gìn mẫu mã trái đẹp, bán được giá cao nhất.",
    description:
      "Thu hoạch trái cây đòi hỏi kỹ thuật cao để không làm gãy cành, xước trái hay dập nát. Đội ngũ của chúng tôi được đào tạo bài bản, biết cách nhận biết độ chín phù hợp cho xuất khẩu hoặc tiêu thụ nội địa, đảm bảo chất lượng nông sản tốt nhất khi đến tay thương lái.",
    highlights: [
      "Kỹ thuật 'Hạ thổ': Sử dụng dây dù/ròng rọc hoặc chuyền tay để đưa trái xuống đất an toàn.",
      "Cắt tỉa cành: Kết hợp tỉa cành sau khi thu hoạch (Option).",
      "Phân loại tại chỗ: Phân loại size (Loại 1, Loại 2) ngay tại vườn.",
    ],
    support: [
      "Cam kết: Bồi thường nếu làm dập nát hoặc hư hỏng cây trồng quá mức cho phép.",
    ],
    cta: "Liên hệ khảo sát",
  },
  "Vận chuyển nông sản": {
    price: "Theo km",
    summary: "Logistics nông nghiệp (Farm to Table) - Giá: Theo km & loại xe",
    specs: [
      "Phương tiện: Xe tải thùng kín / Xe lạnh / Xe container",
      "Tải trọng: Đa dạng từ 1.5 tấn - 15 tấn",
      "Bảo quản: Nhiệt độ mát (Cooling) cho rau quả / Thông gió tự nhiên",
      "Giám sát: Định vị GPS 24/7",
    ],
    extra: "*Vận chuyển hỏa tốc, giữ trọn độ tươi ngon.",
    description:
      "Giải pháp vận chuyển chuyên biệt cho hàng nông sản vốn dễ hư hỏng. Dịch vụ đảm bảo xe có mặt đúng giờ, bốc xếp cẩn thận và di chuyển êm ái để giảm thiểu tỷ lệ dập nát dọc đường.",
    highlights: [
      "Xe chuyên dụng: Sàn xe sạch sẽ, không mùi lạ, trang bị các lớp xốp giảm chấn.",
      "Chuỗi cung ứng lạnh: Có xe đông lạnh duy trì nhiệt độ chuẩn cho trái cây xuất khẩu hoặc rau thủy canh.",
      "Linh hoạt tuyến đường: Thông thạo các tuyến đường liên tỉnh và đường vào tận vườn.",
    ],
    support: [
      "Hỗ trợ: Có đội ngũ bốc xếp đi kèm (tính phí riêng nếu cần).",
      "Cam kết: Đúng hẹn - Đúng tải - Đúng giá.",
    ],
    cta: "Tra cước phí",
  },
};
