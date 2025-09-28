// =================================================================
// DỮ LIỆU CHATBOT - CHỦ ĐỀ: HỆ THỐNG ĐIỆN & ĐIỆN TỬ Ô TÔ
// =================================================================
const chatData = {
  "knowledgeBase": [
    // --- HỆ THỐNG CƠ BẢN ---
    {
      "prompts": ["ecu la gi", "ecm la gi", "bo dieu khien trung tam"],
      "replies": ["ECU (Electronic Control Unit) hay ECM (Engine Control Module) là bộ não điện tử của ô tô, nhận tín hiệu từ các cảm biến để điều khiển các cơ cấu chấp hành như kim phun, bugi, quạt làm mát..."]
    },
    {
      "prompts": ["acquy co nhiem vu gi", "binh acquy de lam gi"],
      "replies": ["Ắc quy có nhiệm vụ chính là lưu trữ năng lượng điện, cung cấp điện cho hệ thống khởi động để nổ máy và cung cấp điện cho các thiết bị phụ tải khi động cơ chưa hoạt động."]
    },
    {
      "prompts": ["may phat dien lam gi", "chuc nang may phat"],
      "replies": ["Máy phát điện có nhiệm vụ cung cấp điện cho toàn bộ hệ thống trên xe khi động cơ đang hoạt động, đồng thời nạp lại điện cho ắc quy."]
    },
    {
      "prompts": ["may khoi dong la gi", "chuc nang de"],
      "replies": ["Máy khởi động (còn gọi là củ đề) là một động cơ điện nhỏ nhưng rất mạnh, có nhiệm vụ biến điện năng từ ắc quy thành cơ năng để làm quay trục khuỷu động cơ, giúp xe nổ máy."]
    },
    {
      "prompts": ["cau chi dung de lam gi", "fuse la gi"],
      "replies": ["Cầu chì (Fuse) là một thiết bị an toàn. Nó sẽ tự ngắt mạch điện khi có dòng điện quá lớn chạy qua (quá tải hoặc chập mạch) để bảo vệ các thiết bị điện khác khỏi hư hỏng."]
    },
    {
      "prompts": ["role la gi", "relay la gi", "chuc nang role"],
      "replies": ["Rơ-le (Relay) là một công tắc điện tử, dùng một dòng điện nhỏ để điều khiển đóng/ngắt một dòng điện lớn hơn. Nó thường được dùng để điều khiển các thiết bị công suất cao như đèn pha, còi, quạt."]
    },
    // --- CẢM BIẾN ---
    {
      "prompts": ["cam bien oxy la gi", "cam bien o2"],
      "replies": ["Cảm biến Oxy (O2 Sensor) đo lượng oxy còn lại trong khí thải và gửi tín hiệu về ECU để điều chỉnh tỷ lệ hòa khí (xăng/gió) sao cho tối ưu nhất."]
    },
    {
      "prompts": ["cam bien luu luong khong khi nap la gi", "cam bien maf"],
      "replies": ["Cảm biến lưu lượng không khí nạp (MAF Sensor) đo khối lượng không khí đi vào động cơ và báo về ECU để tính toán lượng nhiên liệu cần phun."]
    },
    {
      "prompts": ["cam bien vi tri buom ga la gi", "cam bien tps"],
      "replies": ["Cảm biến vị trí bướm ga (TPS) theo dõi độ mở của bướm ga (do người lái đạp chân ga) và gửi thông tin về ECU để điều chỉnh phun xăng và thời điểm đánh lửa."]
    },
    {
      "prompts": ["cam bien nhiet do nuoc lam mat la gi", "cam bien ect"],
      "replies": ["Cảm biến nhiệt độ nước làm mát (ECT Sensor) đo nhiệt độ của động cơ và báo về ECU để điều chỉnh chế độ phun xăng, điều khiển quạt làm mát và hiển thị thông tin trên đồng hồ táp-lô."]
    },
    {
      "prompts": ["cam bien vi tri truc khuyu la gi", "cam bien ckps"],
      "replies": ["Cảm biến vị trí trục khuỷu (CKPS) xác định vị trí và tốc độ quay của trục khuỷu. Đây là cảm biến quan trọng nhất, ECU dựa vào nó để xác định thời điểm đánh lửa và phun xăng."]
    },
    {
      "prompts": ["cam bien vi tri truc cam la gi", "cam bien cmps"],
      "replies": ["Cảm biến vị trí trục cam (CMPS) xác định vị trí của trục cam, giúp ECU nhận biết kỳ nào của xi-lanh (Nạp, Nén, Nổ, Xả) để thực hiện phun xăng và đánh lửa tuần tự chính xác."]
    },
    {
      "prompts": ["cam bien tieng go la gi", "knock sensor"],
      "replies": ["Cảm biến tiếng gõ (Knock Sensor) lắng nghe các rung động bất thường (tiếng gõ) của động cơ và báo về ECU để điều chỉnh lùi thời điểm đánh lửa, bảo vệ động cơ khỏi hư hỏng."]
    },
    // --- HỆ THỐNG AN TOÀN VÀ TIỆN NGHI ---
    {
      "prompts": ["he thong abs la gi", "chong bo cung phanh"],
      "replies": ["ABS (Anti-lock Braking System) là hệ thống chống bó cứng phanh. Nó giúp bánh xe không bị khóa cứng khi phanh gấp, cho phép người lái vẫn có thể điều khiển được tay lái để tránh chướng ngại vật."]
    },
    {
      "prompts": ["he thong tui khi la gi", "srs la gi"],
      "replies": ["Hệ thống túi khí (SRS - Supplemental Restraint System) có nhiệm vụ bung túi khí để bảo vệ người ngồi trên xe khỏi va đập vào các bộ phận cứng như vô lăng, táp-lô khi xảy ra va chạm mạnh."]
    },
    {
      "prompts": ["he thong can bus la gi", "mang can"],
      "replies": ["CAN bus (Controller Area Network) là một mạng giao tiếp nối tiếp cho phép các ECU và cảm biến trên xe 'nói chuyện' với nhau chỉ qua hai dây dẫn, giúp giảm số lượng dây điện và tăng độ tin cậy."]
    },
    {
      "prompts": ["cong obd2 de lam gi", "obd ii"],
      "replies": ["Cổng OBD-II (On-Board Diagnostics II) là cổng chẩn đoán tiêu chuẩn trên hầu hết các xe ô tô. Thợ sửa chữa sẽ cắm máy chẩn đoán vào cổng này để đọc mã lỗi và xem dữ liệu hoạt động của xe."]
    },
    {
      "prompts": ["he thong tpms la gi", "cam bien ap suat lop"],
      "replies": ["TPMS (Tire Pressure Monitoring System) là hệ thống giám sát áp suất lốp. Nó cảnh báo cho người lái khi áp suất của một hoặc nhiều lốp xe quá thấp hoặc quá cao."]
    },
    {
      "prompts": ["he thong lai tro luc dien la gi", "eps la gi"],
      "replies": ["Hệ thống lái trợ lực điện (EPS - Electronic Power Steering) sử dụng một mô-tơ điện để hỗ trợ người lái xoay vô lăng, giúp việc đánh lái trở nên nhẹ nhàng hơn, đặc biệt là ở tốc độ thấp."]
    },
    {
      "prompts": ["immobilizer la gi", "he thong chong trom"],
      "replies": ["Immobilizer là hệ thống chống trộm điện tử. Nó ngăn động cơ khởi động nếu không có chìa khóa chính xác (có chứa chip điện tử đã được mã hóa) được sử dụng."]
    },
    // --- HỆ THỐNG PHUN XĂNG & ĐÁNH LỬA ---
    {
      "prompts": ["kim phun nhien lieu la gi", "chuc nang kim phun"],
      "replies": ["Kim phun nhiên liệu là một van phun điện tử. Nó nhận lệnh từ ECU để phun một lượng nhiên liệu đã được tính toán chính xác vào buồng đốt dưới dạng sương mù."]
    },
    {
      "prompts": ["bobin danh lua la gi", "mobin la gi"],
      "replies": ["Bô-bin đánh lửa (Ignition Coil) là một biến áp cao thế. Nó biến điện áp thấp từ ắc quy (12V) thành điện áp rất cao (hàng chục nghìn Vôn) để tạo ra tia lửa điện ở bugi."]
    },
    {
      "prompts": ["bugi de lam gi", "chuc nang bugi"],
      "replies": ["Bugi (Spark Plug) có nhiệm vụ tạo ra tia lửa điện để đốt cháy hỗn hợp không khí-nhiên liệu trong xi-lanh, tạo ra công suất cho động cơ."]
    },
    {
      "prompts": ["he thong phun xang da diem la gi", "mpi la gi"],
      "replies": ["Hệ thống phun xăng đa điểm (MPI - Multi-Point Injection) sử dụng một kim phun riêng cho mỗi xi-lanh, được đặt ngay trước van nạp. Điều này giúp tối ưu hóa việc phun nhiên liệu cho từng xi-lanh."]
    },
    {
      "prompts": ["he thong phun xang truc tiep la gi", "gdi la gi"],
      "replies": ["Hệ thống phun xăng trực tiếp (GDI - Gasoline Direct Injection) phun nhiên liệu thẳng vào bên trong buồng đốt dưới áp suất rất cao. Công nghệ này giúp tăng công suất, tiết kiệm nhiên liệu và giảm khí thải."]
    },
    // --- HỆ THỐNG KHÁC ---
    {
      "prompts": ["he thong chieu sang tren o to", "den pha cos"],
      "replies": ["Hệ thống chiếu sáng bao gồm đèn pha (chiếu xa), đèn cos (chiếu gần), đèn sương mù, đèn tín hiệu (xi-nhan), đèn hậu, đèn phanh... để đảm bảo tầm nhìn và báo hiệu cho các phương tiện khác."]
    },
    {
      "prompts": ["mo to quat lam mat hoat dong khi nao"],
      "replies": ["Mô-tơ quạt làm mát động cơ sẽ được ECU kích hoạt khi nhiệt độ nước làm mát tăng đến một ngưỡng nhất định, hoặc khi bật điều hòa không khí (A/C)."]
    },
    {
      "prompts": ["den check engine bao loi gi", "y nghia den ca vang"],
      "replies": ["Đèn 'Check Engine' (còn gọi là đèn cá vàng) bật sáng khi ECU phát hiện một lỗi trong các hệ thống liên quan đến động cơ hoặc kiểm soát khí thải. Cần dùng máy chẩn đoán để đọc mã lỗi cụ thể."]
    },
    {
      "prompts": ["he thong dieu hoa khong khi hoat dong the nao", "a c o to"],
      "replies": ["Hệ thống điều hòa (A/C) hoạt động bằng cách nén một chất làm lạnh (gas lạnh) để hấp thụ nhiệt từ bên trong cabin và thải ra ngoài môi trường, giúp làm mát không khí."]
    },
    {
      "prompts": ["cac loai mang giao tiep tren o to", "lin bus la gi"],
      "replies": ["Ngoài CAN bus là mạng chính, ô tô còn có các mạng khác như LIN bus cho các thiết bị tốc độ thấp (gương, ghế), và MOST hoặc FlexRay cho các hệ thống giải trí đa phương tiện và an toàn tốc độ cao."]
    }
  ],
  "specialCases": [
    {
      "keywords": ["thank", "cam on"],
      "reply": "Không có gì! Rất vui vì đã giúp được bạn!"
    },
    {
      "keywords": ["corona", "covid", "virus"],
      "reply": "Thông điệp 5K và Vaccine: Khẩu trang - Khử khuẩn - Khoảng cách - Không tập trung - Khai báo y tế VÀ Vaccine."
    }
  ],
  "fallback": [
    "Xin lỗi bạn, mình chưa có thông tin về nội dung này. Bạn vui lòng thử một từ khóa khác nhé.",
    "Rất tiếc, nội dung này mình chưa có dữ liệu. Bạn có thể hỏi mình về một chủ đề khác không?",
    "Mình chưa hiểu ý của bạn. Bạn có thể diễn đạt lại bằng một từ khóa trong giáo trình được không?"
  ]
};

// =================================================================
// KHỞI TẠO CHATBOT
// =================================================================
document.addEventListener("DOMContentLoaded", () => {
    initializeChat();
});

/**
 * Gắn sự kiện lắng nghe cho ô nhập liệu và nút send.
 */
function initializeChat() {
    const inputField = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn"); // Lấy nút send

    // ---- LOGIC MỚI ----

    // 1. Tạo một hàm chung để gửi tin nhắn
    function sendMessage() {
        const input = inputField.value.trim(); // Lấy và xóa khoảng trắng thừa
        if (input !== "") {
            output(input);
            inputField.value = ""; // Xóa nội dung trong ô input
            sendBtn.disabled = true; // Vô hiệu hóa lại nút sau khi gửi
        }
    }

    // 2. Gán sự kiện cho phím Enter
    inputField.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Ngăn hành vi mặc định của Enter (nếu có)
            sendMessage();
        }
    });

    // 3. Gán sự kiện cho nút Send
    sendBtn.addEventListener("click", sendMessage);

    // 4. Bật/tắt nút Send dựa trên nội dung ô input
    inputField.addEventListener("input", () => {
        if (inputField.value.trim() !== "") {
            sendBtn.disabled = false; // Bật nút nếu có chữ
        } else {
            sendBtn.disabled = true; // Tắt nút nếu trống
        }
    });

    // Đặt trạng thái ban đầu cho nút là bị vô hiệu hóa
    sendBtn.disabled = true;
}

/**
 * Chuẩn hóa chuỗi: bỏ dấu, chuyển thành chữ thường, xóa khoảng trắng thừa.
 */
function strnormalize(str) {
  let AccentsMap = [
    "aàảãáạăằẳẵắặâầẩẫấậ", "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ", "dđ", "DĐ",
    "eèẻẽéẹêềểễếệ", "EÈẺẼÉẸÊỀỂỄẾỆ", "iìỉĩíị", "IÌỈĨÍỊ",
    "oòỏõóọôồổỗốộơờởỡớợ", "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ", "uùủũúụưừửữứự", "UÙỦŨÚỤƯỪỬỮỨỰ",
    "yỳỷỹýỵ", "YỲỶỸÝỴ"
  ];
  for (let i = 0; i < AccentsMap.length; i++) {
    let re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
    let char = AccentsMap[i][0];
    str = str.replace(re, char);
  }
  return str.replace(/\s+/g, ' ').trim().toLowerCase();
}

/**
 * "Bộ não" của chatbot, quyết định câu trả lời.
 */
function output(input) {
  let product;
  const text = strnormalize(input);

  for (const special of chatData.specialCases) {
    if (special.keywords.some(keyword => text.includes(keyword))) {
      product = special.reply;
      break;
    }
  }

  if (!product) {
    product = findReply(text);
  }

  if (!product) {
    product = chatData.fallback[Math.floor(Math.random() * chatData.fallback.length)];
  }

  addChat(input, product);
}

/**
 * Hàm so khớp linh hoạt, tìm kiếm từ khóa trong câu người dùng nhập.
 */
function findReply(normalizedInput) {
  // Thêm câu chào hỏi vào đây để nó không bị tìm kiếm trong knowledgeBase
  if (["chao", "xin chao", "hi", "hello"].some(greeting => normalizedInput.includes(greeting))) {
      return "Chào bạn! Mình là chatbot hỗ trợ tra cứu kiến thức về Điện - Điện tử ô tô. Bạn cần hỏi gì nào?";
  }
    
  for (const rule of chatData.knowledgeBase) {
    if (rule.prompts.some(prompt => normalizedInput.includes(prompt))) {
      return rule.replies[Math.floor(Math.random() * rule.replies.length)];
    }
  }
  return null;
}

/**
 * Thêm tin nhắn vào giao diện chat.
 */
function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.className = "user response";
  userDiv.innerHTML = `<span class="userText">${input}</span>&#160;<img src="user.png" class="avatar">`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.className = "bot response";
  botDiv.innerHTML = `<img src="chatbot_new.png" class="avatar">&#160;<span class="bot1">Typing...</span>`;
  messagesContainer.appendChild(botDiv);

  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  setTimeout(() => {
    botDiv.querySelector('.bot1').innerHTML = product;
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 800);
}