const abbreviationsKnowledgeBase = [
    // --- Hệ thống điều khiển ---
    { "prompts": ["ecu", "electronic control unit"], "replies": ["ECU (Electronic Control Unit): Bộ điều khiển điện tử, được xem là 'bộ não' của động cơ."] },
    { "prompts": ["ecm", "engine control module"], "replies": ["ECM (Engine Control Module): Module điều khiển động cơ, một tên gọi khác của ECU."] },
    { "prompts": ["tcm", "transmission control module"], "replies": ["TCM (Transmission Control Module): Module điều khiển hộp số, quản lý việc chuyển số tự động."] },
    
    // --- Hệ thống an toàn ---
    { "prompts": ["abs", "anti-lock braking system"], "replies": ["ABS (Anti-lock Braking System): Hệ thống chống bó cứng phanh, giúp bánh xe không bị khóa khi phanh gấp."] },
    { "prompts": ["srs", "supplemental restraint system"], "replies": ["SRS (Supplemental Restraint System): Hệ thống túi khí phụ, bảo vệ hành khách khi có va chạm."] },
    { "prompts": ["ebd", "electronic brakeforce distribution"], "replies": ["EBD (Electronic Brakeforce Distribution): Hệ thống phân phối lực phanh điện tử, giúp cân bằng lực phanh giữa các bánh xe."] },
    { "prompts": ["bas", "brake assist system"], "replies": ["BAS (Brake Assist System): Hệ thống hỗ trợ lực phanh khẩn cấp, tự động tăng lực phanh khi người lái đạp phanh gấp."] },
    { "prompts": ["trc", "tcs", "traction control system"], "replies": ["TRC/TCS (Traction Control System): Hệ thống kiểm soát lực kéo, chống trượt bánh xe khi tăng tốc."] },
    { "prompts": ["tpms", "tire pressure monitoring system"], "replies": ["TPMS (Tire Pressure Monitoring System): Hệ thống giám sát áp suất lốp."] },

    // --- Cảm biến ---
    { "prompts": ["maf", "mass air flow"], "replies": ["MAF (Mass Air Flow): Cảm biến đo lưu lượng khí nạp."] },
    { "prompts": ["map", "manifold absolute pressure"], "replies": ["MAP (Manifold Absolute Pressure): Cảm biến đo áp suất tuyệt đối trên đường ống nạp."] },
    { "prompts": ["tps", "throttle position sensor"], "replies": ["TPS (Throttle Position Sensor): Cảm biến vị trí bướm ga."] },
    { "prompts": ["ckp", "ckps", "crankshaft position sensor"], "replies": ["CKP/CKPS (Crankshaft Position Sensor): Cảm biến vị trí trục khuỷu."] },
    { "prompts": ["cmp", "cmps", "camshaft position sensor"], "replies": ["CMP/CMPS (Camshaft Position Sensor): Cảm biến vị trí trục cam."] },
    { "prompts": ["ect", "engine coolant temperature"], "replies": ["ECT (Engine Coolant Temperature): Cảm biến nhiệt độ nước làm mát động cơ."] },
    { "prompts": ["o2s", "oxygen sensor"], "replies": ["O2S (Oxygen Sensor): Cảm biến Oxy, đo lượng oxy trong khí thải."] },

    // --- Hệ thống nhiên liệu và động cơ ---
    { "prompts": ["gdi", "gasoline direct injection"], "replies": ["GDI (Gasoline Direct Injection): Hệ thống phun xăng trực tiếp vào buồng đốt."] },
    { "prompts": ["mpi", "multi-point injection"], "replies": ["MPI (Multi-Point Injection): Hệ thống phun xăng đa điểm (mỗi xi lanh một kim phun)."] },
    { "prompts": ["vvt", "variable valve timing"], "replies": ["VVT (Variable Valve Timing): Hệ thống điều khiển thời điểm phối khí biến thiên."] },
    { "prompts": ["evap", "evaporative emission control system"], "replies": ["EVAP (Evaporative Emission Control System): Hệ thống kiểm soát sự bay hơi của nhiên liệu."] },

    // --- Mạng giao tiếp và Chẩn đoán ---
    { "prompts": ["can", "controller area network"], "replies": ["CAN (Controller Area Network): Mạng giao tiếp điều khiển trên xe."] },
    { "prompts": ["lin", "local interconnect network"], "replies": ["LIN (Local Interconnect Network): Mạng giao tiếp cục bộ cho các thiết bị tốc độ thấp."] },
    { "prompts": ["obd", "on-board diagnostics"], "replies": ["OBD (On-Board Diagnostics): Hệ thống tự chẩn đoán lỗi trên xe."] },
    { "prompts": ["mil", "malfunction indicator lamp"], "replies": ["MIL (Malfunction Indicator Lamp): Đèn báo lỗi động cơ (đèn 'Check Engine')."] },

    // --- Khác ---
    { "prompts": ["eps", "electronic power steering"], "replies": ["EPS (Electronic Power Steering): Hệ thống lái trợ lực điện."] },
    { "prompts": ["a/c", "air conditioning"], "replies": ["A/C (Air Conditioning): Hệ thống điều hòa không khí."] }
];
```

### 2. Hướng dẫn tích hợp vào Chatbot của bạn

Sau khi đã tạo file `abbreviations_data.js`, bạn cần làm 2 bước nhỏ sau để chatbot có thể sử dụng được dữ liệu mới này.

**Bước 1: Nhúng file dữ liệu mới vào HTML**

Mở file `index.html` (hoặc các file HTML khác của bạn), tìm đến cuối trang và thêm thẻ `<script>` để gọi file `abbreviations_data.js`. **Quan trọng:** Dòng này phải được đặt **TRƯỚC** dòng gọi `chatbot.js`.

```html
<!-- ... (Các thẻ script cũ) ... -->
<script type="text/javascript" src="abbreviations_data.js"></script> <!-- MỚI: Thêm dòng này -->
<script type="text/javascript" src="chatbot.js"></script>
<!-- ... -->
```

**Bước 2: Gộp dữ liệu trong `chatbot.js`**

Mở file `chatbot.js`, tìm đến nơi bạn khai báo `const chatData` và sửa lại phần `knowledgeBase` để nó gộp cả dữ liệu cũ và dữ liệu mới từ file `abbreviations_data.js`.

```javascript
// Tìm đến đoạn mã này trong chatbot.js
const chatData = {
  "knowledgeBase": [
    // ... (toàn bộ 200 câu hỏi cũ của bạn) ...
  ],
  // ...
};

// Sửa lại thành như sau:
const chatData = {
  "knowledgeBase": [
    ...knowledgeBaseData, // <-- MỚI: Dùng toán tử "spread" để gộp dữ liệu cũ
    ...abbreviationsKnowledgeBase // <-- MỚI: Gộp thêm dữ liệu chữ viết tắt
  ],
  "specialCases": [ /* ... */ ],
  "fallback": [ /* ... */ ]
};

// Lưu ý: Bạn cần đảm bảo mảng dữ liệu cũ của bạn cũng được đặt trong một biến,
// ví dụ: const knowledgeBaseData = [ ... ];
