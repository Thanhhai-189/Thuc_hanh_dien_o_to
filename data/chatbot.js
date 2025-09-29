// =================================================================
// DỮ LIỆU CHATBOT - CHỦ ĐỀ: HỆ THỐNG ĐIỆN & ĐIỆN TỬ Ô TÔ
// =================================================================
const chatData = {
  "knowledgeBase": [
    // --- HỆ THỐNG CƠ BẢN ---
        { "prompts": ["mach dien o to bao gom nhung thanh phan co ban nao", "thanh phan mach dien o to"], "replies": ["Nguồn điện, Thiết bị bảo vệ, Thiết bị điều khiển, và Tải tiêu thụ."] },

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
    { "prompts": ["mach dien o to bao gom nhung thanh phan co ban nao", "thanh phan mach dien o to"], "replies": ["Nguồn điện, Thiết bị bảo vệ, Thiết bị điều khiển, và Tải tiêu thụ."] },
    { "prompts": ["nguon dien tren o to bao gom nhung gi", "cac nguon dien"], "replies": ["Máy phát và Ắc quy."] },
    { "prompts": ["nguon dien cung cap chinh khi dong co hoat dong la gi", "nguon dien chinh khi dong co hoat dong"], "replies": ["Máy phát."] },
    { "prompts": ["muc dich cua thiet bi bao ve mach dien la gi", "muc dich thiet bi bao ve"], "replies": ["Bảo vệ dây, giắc nối, thiết bị khỏi hư hỏng do dòng điện vượt quá mức."] },
    { "prompts": ["thiet bi bao ve thong dung nhat tren o to la gi", "thiet bi bao ve thong dung"], "replies": ["Cầu chì."] },
    { "prompts": ["cau chi dep mau do co he so dong la bao nhieu", "cau chi do", "he so dong cau chi do"], "replies": ["10 A."] },
    { "prompts": ["thiet bi bao ve nao thuong dung cho mach co dong cao", "bao ve mach dong cao"], "replies": ["Dây nóng chảy hoặc Phần tử nóng chảy."] },
    { "prompts": ["phan tu nong chay mau do ung voi he so dong dien la bao nhieu a", "phan tu nong chay do"], "replies": ["50 A."] },
    { "prompts": ["bo ngat mach dieu chinh tu dong dung ban dan ptc duoc ung dung trong mach nao", "ung dung bo ngat mach ptc"], "replies": ["Bảo vệ nâng hạ cửa kính, khóa cửa."] },
    { "prompts": ["bo ngat mach thuong duoc dung de bao ve cac mach cong suat phuc tap nao", "ung dung bo ngat mach"], "replies": ["Cửa kính, cửa sổ trời, mạch sưởi."] },
    { "prompts": ["nguyen tac an toan khi thao cap acquy la gi", "thao cap acquy"], "replies": ["Luôn luôn tháo cáp âm trước."] },
    { "prompts": ["nguyen tac an toan khi lap cap acquy la gi", "lap cap acquy"], "replies": ["Luôn luôn gắn cáp dương trước."] },
    { "prompts": ["khi lam viec voi acquy can tranh lam gi khi may sac dang bat", "an toan khi sac acquy"], "replies": ["Không được nối đầu sạc hay gỡ ra."] },
    { "prompts": ["khi lam viec trong xuong cam dung lua o khu vuc nao", "khu vuc cam lua"], "replies": ["Xung quanh khu vực chứa dầu hay dung dịch rửa chi tiết dễ cháy."] },
    { "prompts": ["trang phuc can luu y gi khi lam viec trong xuong", "trang phuc an toan"], "replies": ["Trang phục đầy đủ bảo hộ lao động, không được đeo đồng hồ hoặc đồ trang sức."] },
    // -- NGUON---
    { "prompts": ["dien ap ho mach cua binh acquy day dien 100% la bao nhieu", "dien ap acquy day", "dien ap ac quy day"], "replies": ["12,66V."] },
    { "prompts": ["neu dien ap ho mach cua binh acquy la 119v tinh trang la gi", "dien ap acquy 11.9v"], "replies": ["Bình hư hỏng (0% điện)."] },
    { "prompts": ["ty trong dung dich dien phan cua binh acquy day dien 100% la bao nhieu", "ty trong acquy day", "ty trong ac quy day"], "replies": ["1,27."] },
    { "prompts": ["khi kiem tra kha nang chiu tai nang dien ap toi thieu de danh gia acquy con tot la bao nhieu", "kiem tra tai acquy"], "replies": ["9.6V hay cao hơn."] },
    { "prompts": ["dong ky sinh dong ro tren xe khong duoc vuot qua gia tri nao", "dong ro cho phep"], "replies": ["Nhỏ hơn 35mA."] },
    { "prompts": ["neu dien ap ro tren nap binh acquy lon hon 05v can lam gi", "xu ly ro dien nap binh"], "replies": ["Rửa nắp bình bằng dung dịch soda và nước."] },
    { "prompts": ["khi do do sut ap o kep cuc acquy luc khoi dong gia tri ly tuong la bao nhieu", "sut ap kep cuc acquy"], "replies": ["0V."] },
    { "prompts": ["khi lap acquy len xe day nao duoc lap sau cung", "thu tu lap acquy"], "replies": ["Lắp cáp âm."] },
    { "prompts": ["khi thao acquy tren xe can thao day nao truoc", "thu tu thao acquy"], "replies": ["Dây nối mass."] },
    { "prompts": ["nguyen nhan acquy tu phong dien co the do dau", "acquy tu phong dien"], "replies": ["Dòng điện cục bộ, dùng nước không phải nước cất, rò rỉ điện theo khung vỏ."] },
    { "prompts": ["khi kiem tra cuon day roto may phat dien tro thong mach tieu chuan la bao nhieu", "dien tro cuon day roto may phat"], "replies": ["2.8 - 3.0 Ω."] },
    { "prompts": ["duong kinh toi thieu cho phep cua vanh tiep dien roto may phat la bao nhieu", "duong kinh vanh tiep dien"], "replies": ["14,0 mm."] },
    { "prompts": ["lam the nao de kiem tra su cham chap ro dien giua cuon day va truc roto", "kiem tra cham chap roto"], "replies": ["Kiểm tra cách điện giữa vành tiếp điện và trục roto."] },
    { "prompts": ["khi kiem tra diot bo chinh luu ket qua do tot phai la gi", "kiem tra diot"], "replies": ["Chỉ có một chiều thông mạch."] },
    { "prompts": ["neu dien tro cuon day stator may phat bi cham chap luon thong mach voi vo can lam gi", "stator cham chap"], "replies": ["Thay thế hoặc sửa chữa."] },
    { "prompts": ["dien ap dieu chinh tieu chuan cua may phat nam trong khoang nao", "dien ap dieu chinh may phat"], "replies": ["13,5V - 15.1V."] },
    { "prompts": ["neu dien ap dieu chinh cao hon 151v kha nang hu hong nam o dau", "dien ap dieu chinh cao"], "replies": ["Bộ điều chỉnh điện áp hư hỏng."] },
    { "prompts": ["neu dien ap dieu chinh thap hon 135v kha nang hu hong nam o dau", "dien ap dieu chinh thap"], "replies": ["Một cụm nào đó của máy phát trừ bộ điều chỉnh điện áp hư hỏng."] },
    { "prompts": ["khi kiem tra bo dieu chinh dien loai rung neu dien ap thap hon 135v thi phai lam gi", "bo dieu chinh dien loai rung"], "replies": ["Tăng lực lò xo của RLĐA."] },
    { "prompts": ["neu may phat lam viec on nguyen nhan co the do dau", "may phat keu on"], "replies": ["Dây đai mòn/trùng, puly vênh, máy phát gá không chặt."] },
    { "prompts": ["neu den bao khong nap nhap nhay khi xe chay nguyen nhan co the do dau", "den bao nap nhap nhay"], "replies": ["Dây đai chùng, đầu dây nối hỏng, máy phát hoặc bộ điều chỉnh điện áp hỏng."] },
    { "prompts": ["may phat dien mot chieu can chu y den che do lam viec nao", "che do may phat mot chieu"], "replies": ["Lượng điện năng phát ra, hiện tượng bên ngoài, chế độ làm việc."] },
    { "prompts": ["do dao theo huong kinh cho phep lon nhat cua truc roto may phat dien mot chieu la bao nhieu", "do dao truc roto may phat mot chieu"], "replies": ["0,1mm."] },
    { "prompts": ["khi co gop may phat dien mot chieu bi chay hoac loi lom can lam gi", "xu ly co gop may phat"], "replies": ["Dùng giấy ráp mịn để đánh bóng lại."] },
    { "prompts": ["dau hieu nhan biet boi day kich tu may phat dien mot chieu bi ngan mach", "boi day kich tu ngan mach"], "replies": ["Bối dây đó không nóng hoặc độ nóng kém."] },
    // PHẦN III: HỆ THỐNG KHỞI ĐỘNG (Q41 - Q60)
    { "prompts": ["toc do khoi dong binh thuong cua dong co la bao nhieu vong/phut", "toc do khoi dong"], "replies": ["200 - 250 vòng/phút."] },
    { "prompts": ["cuong do dong dien khoi dong tieu chuan cho dong co 4 xilanh la bao nhieu", "dong khoi dong 4 xilanh"], "replies": ["130 - 150 A."] },
    { "prompts": ["cuong do dong dien khoi dong tieu chuan cho dong co 6 xilanh la bao nhieu", "dong khoi dong 6 xilanh"], "replies": ["175A."] },
    { "prompts": ["khi kiem tra roto may khoi dong neu do giua thanh dong co gop va loi sat ma thong mach hu hong la gi", "roto may khoi dong cham mat"], "replies": ["Roto bị chạm mát."] },
    { "prompts": ["do dao huong kinh tieu chuan cho phep cua co gop roto may khoi dong la bao nhieu", "do dao co gop may khoi dong"], "replies": ["Tiêu chuẩn 0,2."] },
    { "prompts": ["chieu dai toi thieu cua choi than may khoi dong gioi han la bao nhieu mm", "chieu dai choi than may khoi dong"], "replies": ["11mm."] },
    { "prompts": ["chieu sau ranh co gop roto may khoi dong tieu chuan la bao nhieu mm", "chieu sau ranh co gop"], "replies": ["0,5 - 0,8 mm."] },
    { "prompts": ["khi kiem tra khop mot chieu bang tay khop hoat dong tot phai nhu the nao", "kiem tra khop mot chieu"], "replies": ["Chuyển động nhẹ theo một chiều, bị hãm ở chiều ngược lại."] },
    { "prompts": ["khi kiem tra cuon hut cua ro le gai khop neu khong co su thong mach giua cuc 50 va c dieu gi xay ra", "kiem tra cuon hut ro le"], "replies": ["Cuộn dây bị đứt."] },
    { "prompts": ["khi kiem tra cuon giu cua ro le gai khop neu khong co su thong mach giua cuc 50 va vo dieu gi xay ra", "kiem tra cuon giu ro le"], "replies": ["Cuộn dây bị hỏng."] },
    { "prompts": ["khi kiem tra cuon hut test 1 khop banh rang chu dong phai dich chuyen ra ngoai hay vao trong", "kiem tra cuon hut test 1"], "replies": ["Dịch chuyển ra ngoài."] },
    { "prompts": ["do sut ap chap nhan duoc o mach cap nguon acquy toi may khoi dong la bao nhieu v", "sut ap mach khoi dong"], "replies": ["Nhỏ hơn 0,5V."] },
    { "prompts": ["neu dong dien khoi dong cao nhung toc do khoi dong cham hu hong nam o dau", "dong khoi dong cao toc do cham"], "replies": ["Máy khởi động bị hỏng."] },
    { "prompts": ["neu may khoi dong quay nhung dong co khong quay nguyen nhan co the la gi", "may khoi dong quay dong co khong quay"], "replies": ["Khớp ly hợp bị hỏng hoặc mòn/hỏng bánh răng gài."] },
    { "prompts": ["neu may khoi dong khong gai khop hu hong nam o dau", "may khoi dong khong gai khop"], "replies": ["Hỏng càng gài hay công tắc từ."] },
    { "prompts": ["khi may khoi dong quay khong tai dien tro cuon hut cua may khoi dong giam toc hanh tinh tieu chuan la bao nhieu", "dien tro cuon hut may khoi dong giam toc"], "replies": ["Dưới 1 ôm."] },
    { "prompts": ["khi kiem tra rotor may khoi dong ps dien tro tro khang giua cac thanh dan tieu chuan la bao nhieu", "dien tro rotor may khoi dong ps"], "replies": ["Dưới 1 Ω."] },
    { "prompts": ["khi kiem tra rotor may khoi dong ps do sau toi da cua mat thanh dan la bao nhieu", "do sau mat thanh dan rotor ps"], "replies": ["3,8 mm."] },
    { "prompts": ["de tranh nham lan khi thao may khoi dong ps can danh dau chi tiet nao", "danh dau khi thao may khoi dong ps"], "replies": ["Giữa Stato và vỏ máy."] },
    { "prompts": ["muc dich cua cong tac an toan trong mach khoi dong la gi", "cong tac an toan khoi dong"], "replies": ["Đảm bảo chỉ khởi động được khi tay số ở N hoặc P (hộp số tự động)."] },
   // PHẦN IV: HỆ THỐNG ĐÁNH LỬA (Q61 - Q80)
    { "prompts": ["de dam bao hieu qua danh lua bugi phai duoc lam gi dinh ky", "bao duong bugi"], "replies": ["Làm sạch và thay thế định kỳ."] },
    { "prompts": ["khe ho ma vit tieu chuan cho dong co 4 xi lanh la bao nhieu mm", "khe ho ma vit 4 xi lanh"], "replies": ["0,45 mm."] },
    { "prompts": ["neu be mat tiep diem ma vit bi chay ro can lam gi", "xu ly ma vit chay ro"], "replies": ["Rà lại hay thay mới."] },
    { "prompts": ["dien tro tieu chuan cua cuon so cap bobin danh lua thuong la bao nhieu", "dien tro so cap bobin"], "replies": ["Khoảng 1,3 Ω - 1,6 Ω."] },
    { "prompts": ["dien tro tieu chuan cua cuon thu cap bobin danh lua thuong la bao nhieu", "dien tro thu cap bobin"], "replies": ["Khoảng 10,7 kΩ - 14,5 kΩ."] }, // Chú ý đơn vị kΩ
    { "prompts": ["khi kiem tra chan doan neu khong co tia lua cao ap can kiem tra buoc nao dau tien", "khong co tia lua cao ap"], "replies": ["Kiểm tra điện nguồn cung cấp cho bobin."] },
    { "prompts": ["khi kiem tra vit lua neu vit bua ngam dien tro giua vit bua voi mat la bao nhieu", "do dien tro vit bua ngam"], "replies": ["0Ω."] },
    { "prompts": ["he thong danh lua ban dan su dung transistor da so hien nay su dung cam bien nao", "cam bien danh lua ban dan"], "replies": ["Cảm biến điện từ."] },
    { "prompts": ["trong he thong danh lua ban dan dien tro cuon day cam bien dien tu khoang bao nhieu", "dien tro cam bien dien tu"], "replies": ["1,2 - 1,6 kΩ."] }, // Chú ý đơn vị kΩ
    { "prompts": ["chuc nang chinh cua igniter trong he thong danh lua ban dan la gi", "chuc nang igniter"], "replies": ["Đóng ngắt mạch sơ cấp nhờ các tín hiệu."] },
    { "prompts": ["he thong danh lua khong bo chia dien dis co uu diem gi", "uu diem dis"], "replies": ["Không còn mỏ quẹt, loại bỏ chi tiết cơ dễ hỏng."] },
    { "prompts": ["neu may khoi dong keo binh thuong nhung khong no nguyen nhan co the la gi", "khoi dong duoc nhung khong no"], "replies": ["Mất điện trên mạch sơ cấp, dây nối bobin bị lỏng."] },
    { "prompts": ["neu dong co co hien tuong no o ong xa nhung khong no duoc nguyen nhan co the la gi", "no o ong xa khong no may"], "replies": ["Góc đánh lửa sai nhiều, cắm sai thứ tự dây cao áp."] },
    { "prompts": ["neu dong co qua nong hu hong thuong lien quan den goc danh lua nhu the nao", "dong co qua nong va goc danh lua"], "replies": ["Góc đánh lửa sớm nhỏ."] },
  // PHẦN V: HỆ THỐNG PHUN XĂNG VÀ ECU (Q75 - Q105)
    { "prompts": ["dien ap cung cap den moi cuc cua kim phun khi bat khoa dien on la bao nhieu", "dien ap kim phun"], "replies": ["Điện áp ắc quy."] },
    { "prompts": ["dien tro tieu chuan cua kim phun dien tro cao la bao nhieu", "dien tro kim phun cao"], "replies": ["13 - 14 Ω."] },
    { "prompts": ["dien tro tieu chuan cua kim phun dien tro thap la bao nhieu", "dien tro kim phun thap"], "replies": ["2 - 3 Ω."] },
    { "prompts": ["chuc nang chinh cua dieu khien phun xang la gi", "dieu khien phun xang"], "replies": ["Kiểm soát lượng xăng phun, làm giàu khi lạnh, cắt nhiên liệu khi giảm tốc."] },
    { "prompts": ["chuc nang cat nhien lieu khi giam toc hoat dong dua tren dieu kien nao", "cat nhien lieu khi giam toc"], "replies": ["Bướm ga đóng hoàn toàn hoặc tốc độ quá cao."] },
    { "prompts": ["khi he thong danh lua hoat dong nhung khong co tin hieu igf toyota can lam gi", "mat tin hieu igf"], "replies": ["Thay mới Igniter."] },
    { "prompts": ["cam bien nhiet do nuoc lam mat thw su dung loai nhiet dien tro nao", "loai cam bien thw"], "replies": ["Hệ số nhiệt điện trở âm (NTC)."] },
    { "prompts": ["khi dong co nguoi dien tro cua cam bien nhiet do nuoc lam mat thay doi nhu the nao", "dien tro cam bien thw khi nguoi"], "replies": ["Điện trở cao."] },
    { "prompts": ["ecu xac dinh hien tuong kich no dua tren tin hieu tu cam bien nao", "cam bien kich no"], "replies": ["Cảm biến kích nổ."] },
    { "prompts": ["khi xay ra kich no ecu dieu khien goc danh lua som nhu the nao", "xu ly kich no"], "replies": ["Giảm góc đánh lửa sớm (làm muộn)."] },
    { "prompts": ["van dien tu no1 va no2 trong ect co chuc nang chinh la gi", "chuc nang van dien tu so 1 2"], "replies": ["Điều khiển thời điểm chuyển số."] },
    { "prompts": ["van dien tu no3 trong ect co chuc nang chinh la gi", "chuc nang van dien tu so 3"], "replies": ["Điều khiển ly hợp khóa biến mô."] },
    { "prompts": ["neu ca hai van dien tu no1 va no2 trong ect bi hong lai xe co the lam gi de xe chay an toan", "hong van dien tu 1 2"], "replies": ["Bằng cách gạt cần số."] },
    { "prompts": ["khi nhiet do nuoc lam mat ect duoi 60oc ecu ect se lam gi", "nhiet do ect duoi 60"], "replies": ["Ngăn không cho hộp số chuyển lên O/D và ly hợp khóa biến mô hoạt động."] },
    { "prompts": ["cam bien vi tri buom ga tps gui tin hieu dien ap ve ect ecu ty le thuan voi yeu to nao", "tin hieu tps den ect"], "replies": ["Góc mở của bướm ga."] },
    { "prompts": ["nhiem vu cua he thong chan doan diagnostic system tren ecu dong co la gi", "nhiem vu he thong chan doan"], "replies": ["Ghi lại hư hỏng, bật đèn MIL/Check Engine."] },
    { "prompts": ["giac chan doan obd-ii co dang chuan bao nhieu chan", "chan giac obd2"], "replies": ["16 chân."] },
    { "prompts": ["phuong phap thu cong de xoa ma loi ecu toyota la gi", "xoa loi thu cong toyota"], "replies": ["Tháo cầu chì EFI hoặc cầu chì STOP tối thiểu 15 giây."] },
    { "prompts": ["khi chan doan bang tay noi tat e1 va te1 neu he thong binh thuong den check engine chop nhu the nao", "den check khi he thong binh thuong"], "replies": ["Chớp đều đặn 2 lần/giây."] },
    { "prompts": ["ma loi chan doan thuong duoc hien thi bang cach nao tren cac xe doi cu", "hien thi ma loi xe doi cu"], "replies": ["Đèn báo chớp theo những chuỗi khác nhau."] },
    { "prompts": ["khi kiem tra mach noi mat ecu thuong kiem tra bang cach nao", "kiem tra mat ecu"], "replies": ["Đo điện trở và kiểm tra dây dẫn xem có đứt không."] },
    { "prompts": ["neu trong he thong phun hang loat do dien tro giua cuc #10 va #20 cua ecu ma khong thong mach kha nang loi la gi", "khong thong mach cuc phun xang"], "replies": ["Hư hỏng ECU hoặc là phun theo nhóm."] },
    { "prompts": ["hu hong mach ho duoc xac dinh bang cach do gi tai cac giac noi", "xac dinh mach ho"], "replies": ["Đo điện áp, phát hiện không có điện áp ở vị trí sau đầu nối."] },
    { "prompts": ["nguyen nhan pho bien nhat gay ra hien tuong cau chi bi chay la gi", "nguyen nhan chay cau chi"], "replies": ["Đoản mạch/ngắn mạch giữa dây dẫn và dây mát."] },
    { "prompts": ["gia su giac noi b co dien tro 0 ω khi do voi diem noi mat dieu nay cho thay hu hong gi", "dien tro giac noi b la 0"], "replies": ["Giắc nối B đã nối tắt với phần tiếp đất/đoản mạch."] },
    { "prompts": ["neu bong den sang mo do la dau hieu cua loai hu hong nao", "bong den sang mo"], "replies": ["Mạch tiếp xúc kém (gây sụt áp)."] },
    { "prompts": ["ro le thuong duoc the hien o vi tri nao tren so do mach dien", "ro le tren so do"], "replies": ["Vị trí chưa được điều khiển/không làm việc."] },
    { "prompts": ["solenoid kieu hut-day thuong duoc ung dung trong he thong nao", "ung dung solenoid hut day"], "replies": ["Hệ thống khóa cửa."] },
    { "prompts": ["trong mach mac noi tiep neu mach bi dut dieu gi xay ra", "dut mach noi tiep"], "replies": ["Không có dòng điện chạy qua và không có bộ phận nào hoạt động."] },
    { "prompts": ["chu cai l-y tren so do mach dien the hien mau day dan co y nghia gi", "ky hieu mau day l-y"], "replies": ["L là màu nền của dây, Y là màu sọc."] },
    { "prompts": ["dong ho van nang vom co bao nhieu chuc nang chinh", "chuc nang vom"], "replies": ["4 chức năng: Đo điện trở, điện áp DC, điện áp AC và đo dòng điện."] },
    // PHẦN VII: HỆ THỐNG ĐIỀU KHIỂN NÂNG CAO VÀ AN TOÀN (Q133 - Q160)
    { "prompts": ["muc tieu cua he thong abs la duy tri do truot cua banh xe trong gioi han toi uu la bao nhieu", "do truot toi uu abs"], "replies": ["10% đến 30%."] },
    { "prompts": ["trong che do phanh binh thuong abs khong hoat dong van dien 3 vi tri nam o trang thai nao", "trang thai van dien abs khi phanh thuong"], "replies": ["Không kích hoạt."] },
    { "prompts": ["khi abs hoat dong de giam ap suat phanh van dien trong bo chap hanh chuyen sang che do nao", "giam ap suat phanh abs"], "replies": ["Chế độ giảm áp."] },
    { "prompts": ["ebd phan phoi luc phanh dien tu co uu diem gi so voi van co khi", "uu diem ebd"], "replies": ["Cho độ chính xác và hiệu quả cao hơn."] },
    { "prompts": ["bas he thong tro luc phanh khan cap giup nguoi lai khac phuc van de gi", "chuc nang bas"], "replies": ["Người lái không đạp phanh đủ mạnh."] },
    { "prompts": ["muc dich cua he thong trc la gi", "muc dich trc"], "replies": ["Kiểm soát lực kéo, tránh bánh xe chủ động bị trượt quay."] },
    { "prompts": ["trong che do tang ap cua trc van dien cat xi lanh phanh chinh o trang thai nao", "trang thai van dien trc khi tang ap"], "replies": ["Bật/Đóng."] },
    { "prompts": ["bo chap hanh trc bao gom nhung chi tiet chinh nao", "cau tao bo chap hanh trc"], "replies": ["Bơm, Bình tích năng, Van điện cắt bình tích năng, Van điện cắt xi lanh phanh chính, Van điện cắt bình dầu."] },
    { "prompts": ["muc dich chinh cua tui khi srs la gi", "muc dich tui khi"], "replies": ["Bảo vệ lái xe và hành khách ngồi phía trước tốt hơn ngoài biện pháp bảo vệ chính bằng dây an toàn."] },
    { "prompts": ["qua trinh cang phong bao ve xep xuong cua tui khi dien ra trong khoang thoi gian bao lau", "thoi gian no tui khi"], "replies": ["Trong vòng một giây."] },
    { "prompts": ["tui khi se kich hoat khi va cham nhu the nao", "dieu kien no tui khi"], "replies": ["Va chạm mạnh từ phía trước, mức độ nghiêm trọng lớn hơn mức xác định."] },
    { "prompts": ["tui khi co kich hoat khi xe bi dam tu phia sau hoac lat khong", "tui khi co no khi dam sau"], "replies": ["Không."] },
    { "prompts": ["bo phan nao truyen dong kich no tu bo cam bien tui khi trung tam den bo thoi khi", "truyen dong kich no tui khi"], "replies": ["Cáp xoắn."] },
    { "prompts": ["khi duoc tao ra de thoi cang tui khi la khi gi", "khi trong tui khi"], "replies": ["Khí Nitơ."] },
    { "prompts": ["nguon du phong trong bo cam bien tui khi trung tam bao gom nhung thanh phan nao", "nguon du phong tui khi"], "replies": ["Tụ điện dự phòng và bộ chuyển đổi DC – DC."] },
    { "prompts": ["sau khi tui khi no cam bien tui khi truoc co the dung lai duoc khong", "su dung lai cam bien tui khi"], "replies": ["Không thể dùng lại được."] },
    { "prompts": ["he thong kiem soat hanh trinh ccs co chuc nang chinh la gi", "chuc nang ccs"], "replies": ["Duy trì một tốc độ ô tô không đổi."] },
    { "prompts": ["ccs se huy chuc nang dieu khien tu dong khi nao", "huy chuc nang ccs"], "replies": ["Kéo cần điều khiển về CANCEL, đạp chân phanh, tắt khóa điện."] },
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
    { "prompts": ["a/c", "air conditioning"], "replies": ["A/C (Air Conditioning): Hệ thống điều hòa không khí."] },
    // PHẦN VIII: CÂU HỎI MỞ RỘNG VÀ CHI TIẾT KỸ THUẬT (Q151 - Q200)
    { "prompts": ["cau chi dep tieu chuan mau tim ung voi he so dong dien la bao nhieu a", "cau chi tim"], "replies": ["3 A."] },
    { "prompts": ["cau chi dep tieu chuan mau vang ung voi he so dong dien la bao nhieu a", "cau chi vang"], "replies": ["20 A."] },
    { "prompts": ["phan tu nong chay mau hong ung voi he so dong dien la bao nhieu a", "phan tu nong chay hong"], "replies": ["30 A."] },
    { "prompts": ["phan tu nong chay mau xanh la ung voi he so dong dien la bao nhieu a", "phan tu nong chay xanh la"], "replies": ["40 A."] },
    { "prompts": ["thiet bi kiem tra den chieu sang phia truoc dung de kiem tra nhung noi dung nao", "kiem tra den chieu sang"], "replies": ["Cường độ chiếu sáng, tọa độ và các thông số hình học của chùm sáng."] },
    { "prompts": ["dien ap may phat dien mot chieu che do khong tai phai dat tren bao nhieu v", "dien ap may phat mot chieu"], "replies": ["Trên 12,5V."] },
    { "prompts": ["dong dien nap tieu chuan cua may phat dien mot chieu che do dong co la bao nhieu ampe", "dong nap may phat mot chieu"], "replies": ["3,5 ÷ 5A."] },
    { "prompts": ["do long theo chieu doc cua bi may phat dien mot chieu chi duoc phep nam trong pham vi bao nhieu mm", "do long bi may phat mot chieu"], "replies": ["0,1-0,3 mm."] },
    { "prompts": ["chieu sau ranh co gop tieu chuan la bao nhieu", "chieu sau ranh co gop tieu chuan"], "replies": ["0,6 ÷ 0,8mm."] },
    { "prompts": ["khi kiem tra cuon day phan ung may phat dien mot chieu bi dut loi thuong xay ra o dau", "loi dut cuon day phan ung"], "replies": ["Tại đầu dây hàn vào phiến góp."] },
    { "prompts": ["khi roto may phat dien bi cham chap can kiem tra gi", "roto may phat cham chap"], "replies": ["Kiểm tra cách điện giữa vành tiếp điện và trục roto."] },
    { "prompts": ["neu cuon day kich tu bi ngan mach khi noi voi nguon mot chieu dau hieu nhan biet la gi", "dau hieu cuon kich tu ngan mach"], "replies": ["Bối dây đó không nóng hoặc độ nóng kém."] },
    { "prompts": ["do dao theo huong kinh cho phep lon nhat cua truc roto may phat dien mot chieu la bao nhieu", "do dao truc roto may phat"], "replies": ["0,1mm."] },
    { "prompts": ["tai nhiet do 80oc tri so dien tro cua hop dien tro kiem tra dong ho nhiet do tieu chuan la bao nhieu ω", "dien tro hop dien tro 80 do"], "replies": ["82 - 91 Ω."] },
    { "prompts": ["khi thung nhien lieu rong vi tri e dien tro do duoc cua bo cam bien la bao nhieu ω", "dien tro cam bien xang khi het"], "replies": ["110 Ω."] },
    { "prompts": ["khi thung nhien lieu day vi tri f dien tro do duoc cua bo cam bien la bao nhieu ω", "dien tro cam bien xang khi day"], "replies": ["3,0 Ω."] },
    { "prompts": ["dong ho bao ap suat nhot kieu nhiet dien hoat dong dua tren nguyen ly gi", "nguyen ly dong ho ap suat nhot nhiet dien"], "replies": ["Phần tử lưỡng kim."] },
    { "prompts": ["trong dong ho do ap suat nhot kieu nhiet dien khi ap suat nhot cao dieu gi xay ra voi tiep diem", "tiep diem dong ho ap suat nhot"], "replies": ["Tiếp điểm đóng lâu hơn."] },
    { "prompts": ["cam bien nhiet do nuoc lam mat hoat dong theo nguyen ly gi", "nguyen ly cam bien nhiet do nuoc"], "replies": ["Biến đổi nhiệt độ thành tín hiệu điện nhờ nhiệt điện trở."] },
    { "prompts": ["khi nhung cong tac den canh bao nhien lieu vao xang bong den phai the nao", "kiem tra cong tac canh bao nhien lieu"], "replies": ["Bóng phải tắt."] },
    { "prompts": ["cam bien vi tri buom ga tps co chuc nang gi trong ect", "chuc nang tps trong ect"], "replies": ["Phát hiện góc mở của bướm ga."] },
    { "prompts": ["ecu ect duoc lap trinh de lua chon so do chuyen so dua tren nhung yeu to nao", "lua chon so do chuyen so"], "replies": ["Chế độ lái xe (Bình thường/Tăng tốc) và vị trí cần số."] },
    { "prompts": ["neu mach van dien so 1 va so 2 ect bi ho hay chap ecu se phan ung nhu the nao", "loi mach van dien so 1 2"], "replies": ["Ngay lập tức ngắt dòng điện cấp cho các van và kích hoạt hệ thống dự phòng."] },
    { "prompts": ["khi ect ecu nhan tin hieu l bat thuong ho mach hop so se duoc gai len so nao", "tin hieu l bat thuong"], "replies": ["Chỉ được gài lên số 2."] },
    { "prompts": ["trong qua trinh phanh binh thuong abs khong hoat dong van dien giu ap cua a trong van dien 3 vi tri o trang thai nao", "trang thai van giu ap abs"], "replies": ["Mở (Cho dầu phanh vào xy lanh bánh xe)."] },
    { "prompts": ["van giu ap trong abs o trang thai on dong khi he thong chuyen sang che do nao", "van giu ap on"], "replies": ["Chế độ giảm áp."] },
    { "prompts": ["trong he thong abs tin hieu chinh nao dong vai tro quan trong nhat trong qua trinh dieu khien", "tin hieu quan trong nhat abs"], "replies": ["Sự thay đổi gia tốc của bánh xe."] },
    { "prompts": ["bo chap hanh trc tao ra ap suat dau bang cach nao", "cach tao ap suat dau trc"], "replies": ["Bơm hút dầu phanh từ xi lanh phanh chính và đưa đến bình tích năng."] },
    { "prompts": ["bo ngat mach dieu chinh tu dong co khi goi la loai gi", "bo ngat mach tu dong co khi"], "replies": ["Bộ ngắt mạch 'kín'."] },
    { "prompts": ["hu hong mach tiep xuc kem gay ra hien tuong gi", "hien tuong mach tiep xuc kem"], "replies": ["Gây sụt áp, làm bóng đèn sáng mờ."] },
    { "prompts": ["trong mach mac noi tiep gia tri dong tong i qua tung dien tro thay doi hay khong", "dong dien mach noi tiep"], "replies": ["Không đổi."] },
    { "prompts": ["dac diem cua dien ap trong mach mac song song la gi", "dien ap mach song song"], "replies": ["Điện áp giống nhau được cấp cho từng nhánh."] },
    { "prompts": ["cong tac ngam tam thoi la loai cong tac duoc giu o trang thai ho mach nho bo phan nao khi khong co luc an", "cong tac ngam tam thoi"], "replies": ["Lò xo."] },
    { "prompts": ["cong tac thuy ngan duoc su dung trong ung dung nao", "ung dung cong tac thuy ngan"], "replies": ["Ngắt bơm nhiên liệu, và một số ứng dụng cho cảm biến túi khí."] },
    { "prompts": ["ro le dung dong dien nho de dieu khien dong dien nhu the nao", "ro le dieu khien dong dien"], "replies": ["Dùng dòng nhỏ để điều khiển dòng lớn."] },
    { "prompts": ["vi tri lap dat pho bien cua hop ro le va cau chi la o dau", "vi tri hop ro le cau chi"], "replies": ["Trong ca bin, phía dưới bảng táp lô, hoặc trong khoang động cơ."] },
    { "prompts": ["khi do dien ap hay dong dien bang vom cac ban nen bat dau tu pham vi do nao", "cach dung vom"], "replies": ["Bắt đầu từ phạm vi đo lớn nhất."] },
    { "prompts": ["chu r trong ma hieu bugi co y nghia gi", "y nghia chu r bugi"], "replies": ["Bên trong bugi có đặt điện trở chống nhiễu."] },
    { "prompts": ["cam bien toc do xe dung trong ccs loai cong tac luoi ga hoat dong dua tren nguyen ly gi", "nguyen ly cam bien toc do xe"], "replies": ["Nam châm quay bật và tắt công tắc lưỡi gà."] },
    { "prompts": ["khoang dieu chinh toc do cua ccs chenh lech so voi toc do thiet dat la bao nhieu", "dieu chinh toc do ccs"], "replies": ["Khoảng ± 0.5 ÷ 1m/h."] },
    { "prompts": ["van xa trong ccs dan ap suat khi quyen vao bo chap hanh de lam gi khi he thong bi huy", "chuc nang van xa ccs"], "replies": ["Đóng bướm ga, giảm tốc độ xe."] },
    { "prompts": ["khi dong co nguoi ecu dong co co the lam gi de tang hon hop khi nap va nhien lieu", "tang hon hop khi dong co nguoi"], "replies": ["Tăng hỗn hợp cho động cơ nguội vì ma sát lớn."] },
    { "prompts": ["chuc nang lam giau hon hop sau khoi dong hoat dong trong thoi gian khoang bao lau", "thoi gian lam giau hon hop"], "replies": ["Khoảng 15 giây (sau khởi động lạnh)."] },
    { "prompts": ["trong he thong phun xang khi dong co qua nong ecu hieu chinh goc danh lua nhu the nao", "hieu chinh goc danh lua khi qua nong"], "replies": ["Điều chỉnh trễ lại."] },
    { "prompts": ["van xoay cam chung isc loai motor buoc hoat dong dua tren nguyen ly gi", "nguyen ly van isc motor buoc"], "replies": ["Điều khiển lượng khí đi qua mạch rẽ."] },
    { "prompts": ["neu kim phun dien tro cao dong dien qua cuon day nhu the nao", "dong dien kim phun dien tro cao"], "replies": ["Dòng điện nhỏ."] },
    { "prompts": ["dong dien mot chieu trong mach ro le nhay co - dien duoc chuyen thanh dong dien gian doan nho bo phan nao", "chuyen doi dong dien ro le nhay"], "replies": ["Bộ nháy (Flasher)."] },
    { "prompts": ["khi kiem tra bong den pha bang dong ho do dien tro trang thai tot duoc xac dinh nhu the nao", "kiem tra bong den pha"], "replies": ["Bóng đèn phải thông mạch."] },
    { "prompts": ["de kiem tra thong mach giua cac thanh co gop roto may khoi dong can lam gi neu khong co su thong mach", "kiem tra thong mach co gop roto"], "replies": ["Thay roto."] },
    { "prompts": ["khi can thao cap acquy phai tuan thu nguyen tac an toan nao", "nguyen tac an toan thao acquy"], "replies": ["Tháo cáp âm trước."] },
        // --- MỚI: PHẦN II: HỆ THỐNG CUNG CẤP ĐIỆN ---
    { "prompts": ["acquy co chuc nang gi", "accu", "acquy", "ac quy"], "replies": ["Ắc quy là nguồn điện một chiều, được sử dụng để cung cấp điện cho ô tô khi động cơ chưa hoạt động, hoặc khi khởi động. Nó dự trữ điện năng được tạo ra từ máy phát."] },
    { "prompts": ["may phat dien co chuc nang gi khi dong co hoat dong", "may phat dien", "chuc nang may phat"], "replies": ["Máy phát điện là nguồn cung cấp điện chính cho tất cả các tải điện trên ô tô khi động cơ hoạt động, đồng thời nó cũng thực hiện nhiệm vụ nạp điện lại cho Ắc quy."] },
    { "prompts": ["bo dieu chinh dien ap co vai tro gi", "tiet che", "bo dieu chinh dien"], "replies": ["Bộ điều chỉnh điện áp (tiết chế) có nhiệm vụ điều chỉnh điện áp máy phát điện để đảm bảo máy phát luôn tạo ra một hiệu điện thế ổn định (ví dụ: 13,8V – 14,2V) ở mọi chế độ phụ tải và điều kiện làm việc."] },
    { "prompts": ["den bao nap co chuc nang gi"], "replies": ["Đèn báo nạp có chức năng cảnh báo cho người lái khi hệ thống cung cấp điện gặp sự cố hoặc hoạt động không bình thường (ví dụ: máy phát hỏng)."] },
    { "prompts": ["co gop trong may phat dien mot chieu co vai tro gi", "vai tro co gop"], "replies": ["Cổ góp là nơi tiếp xúc với chổi than trong máy phát điện một chiều. Bề mặt làm việc của cổ góp phải luôn sạch bóng, đều đặn để tránh tia lửa điện và đảm bảo truyền dẫn điện tốt. Nếu bị cháy mòn, nó cần được đánh bóng lại."] },
    { "prompts": ["vanh tiep dien trong may phat xoay chieu co nhiem vu gi", "nhiem vu vanh tiep dien", "slip ring"], "replies": ["Vành tiếp điện tiếp xúc với chổi than, tạo ra dòng điện kích thích cho roto. Nếu vành tiếp điện bị bẩn hay cháy, tiếp xúc với chổi than sẽ kém, làm giảm khả năng phát điện của máy phát."] },

    // --- MỚI: PHẦN III: HỆ THỐNG KHỞI ĐỘNG ---
    { "prompts": ["may khoi dong co chuc nang gi", "may khoi dong"], "replies": ["Máy khởi động có chức năng cung cấp moment quay cho trục khuỷu động cơ, giúp động cơ đạt tốc độ khởi động thấp nhất để có thể nổ được."] },
    { "prompts": ["ro le gai khop trong may khoi dong lam gi", "cong tac tu"], "replies": ["Rơ le gài khớp (công tắc từ) có hai chức năng chính: thứ nhất là đóng mạch dòng điện lớn cho động cơ điện một chiều của máy khởi động (từ cực B đến cực C), và thứ hai là đẩy khớp bánh răng chủ động dịch chuyển ra ngoài để gài khớp với vành răng bánh đà."] },
    { "prompts": ["cong tac an toan khoi dong duoc su dung de lam gi", "khoa an toan"], "replies": ["Công tắc an toàn khởi động (khóa an toàn) được thiết kế để ngăn động cơ khởi động nếu cần gạt số không ở vị trí đỗ (P) hoặc trung gian (N) đối với hộp số tự động, hoặc nếu ly hợp chưa được đạp đối với hộp số tay."] },
    { "prompts": ["khop mot chieu cua may khoi dong co chuc nang gi", "overrunning clutch"], "replies": ["Khớp một chiều (Overrunning Clutch) cho phép bánh răng chủ động quay đồng bộ để khởi động động cơ theo một chiều. Nó đảm bảo khớp bánh răng chủ động bị hãm ở chiều ngược lại, ngăn không cho động cơ (sau khi đã nổ) kéo máy khởi động quay quá tốc độ, gây hư hỏng."] },

    // --- MỚI: PHẦN IV: HỆ THỐNG ĐÁNH LỬA ---
    { "prompts": ["bobine danh lua co chuc nang gi", "cuon day danh lua"], "replies": ["Bobine đánh lửa có chức năng biến áp thấp (từ ắc quy) thành xung điện cao thế (tối đa khoảng 40,000V) để phóng tia lửa điện giữa hai điện cực của bugi, đốt cháy hỗn hợp khí-nhiên liệu trong xi lanh."] },
    { "prompts": ["bugi co vai tro gi trong dong co", "spark plug", "bugi"], "replies": ["Bugi tạo ra tia lửa điện cao thế tại đúng thời điểm, đốt cháy hỗn hợp nổ trong xi lanh. Khe hở và chủng loại bugi (nóng/lạnh) cần được chọn phù hợp với điều kiện làm việc của động cơ để tối ưu hóa công suất và hiệu suất."] },
    { "prompts": ["vit lua trong he thong danh lua thuong co chuc nang gi", "ma vit"], "replies": ["Vít lửa (tiếp điểm) là bộ phận tạo xung điện kiểu cơ khí, có nhiệm vụ đóng và ngắt mạch sơ cấp của bobine. Khi cam ngắt điện qua vấu cam, tiếp điểm mở ra, tạo ra xung cao thế để đánh lửa."] },
    { "prompts": ["tu dien c1 trong he thong danh lua thuong co vai tro gi", "condenser"], "replies": ["Tụ điện C1 được mắc song song với vít lửa, có hai chức năng chính: Dập tắt tia lửa trên tiếp điểm để bảo vệ má vít khỏi bị cháy rỗ, và gia tăng tốc độ biến thiên của từ thông, giúp nâng cao hiệu điện thế trên cuộn thứ cấp."] },
    { "prompts": ["bo dieu chinh goc danh lua ly tam dung de lam gi"], "replies": ["Bộ điều chỉnh góc đánh lửa ly tâm điều chỉnh góc đánh lửa sớm theo tốc độ quay của trục động cơ (ly tâm). Khi tốc độ tăng, quả văng ly tâm văng ra, xoay cam ngắt điện làm tăng góc đánh lửa sớm."] },
    { "prompts": ["igniter trong he thong danh lua ban dan co nhiem vu gi"], "replies": ["Igniter là một mạch điện tử tích hợp, có nhiệm vụ nhận tín hiệu từ các cảm biến và sử dụng Transistor để đóng ngắt mạch sơ cấp (thay thế cho vít lửa). Việc này giúp tạo ra tia lửa mạnh hơn và bền bỉ hơn."] },

    // --- MỚI: PHẦN V: HỆ THỐNG PHUN XĂNG VÀ HỘP SỐ ĐIỆN TỬ ---
    { "prompts": ["ecu co chuc nang gi trong he thong efi"], "replies": ["ECU nhận tín hiệu từ các cảm biến, xử lý dữ liệu và so sánh với dữ liệu cài đặt để xác định trạng thái làm việc bất thường của động cơ. Chức năng chính là điều khiển góc đánh lửa tối ưu và xác định lượng nhiên liệu phun tối ưu cho từng xi lanh. ECU cũng ghi lại hư hỏng dưới dạng Mã chẩn đoán (DTC) và bật đèn MIL."] },
    { "prompts": ["van dien tu no1 va no2 trong ect co nhiem vu gi", "vdt so 1 2"], "replies": ["Van điện từ No.1 và No.2 (VÑT No.1 & VÑT No.2) được ECU ECT điều khiển để điều chỉnh thời điểm chuyển số giữa các cấp số."] },
    { "prompts": ["van dien tu no3 trong ect co chuc nang gi", "vdt so 3"], "replies": ["Van điện từ No.3 (VÑT No.3) được ECU ECT điều khiển để điều khiển ly hợp khóa biến mô (Torque Converter Lock-up Clutch)."] },
    { "prompts": ["cong tac chon che do hoat dong trong ect dung de lam gi"], "replies": ["Công tắc này cho phép người lái chọn chế độ lái xe (Bình thường hay Tăng tốc/Tải nặng). Dựa vào chế độ này, ECU sẽ lựa chọn sơ đồ chuyển số thích hợp."] },
    { "prompts": ["chuc nang an toan trong ect la gi", "safety function"], "replies": ["Chức năng an toàn (Safety Function) đảm bảo rằng ngay cả khi một hoặc cả hai van điện từ No.1/No.2 bị hỏng, lái xe vẫn có thể cho xe chạy an toàn bằng cách gạt cần số, mặc dù số truyền bị giới hạn."] },

    // --- MỚI: PHẦN VI: HỆ THỐNG THÂN XE, ĐỒNG HỒ ĐO VÀ TÍN HIỆU ---
    { "prompts": ["bo on ap luong kim trong dong ho do kieu nhiet dien co chuc nang gi"], "replies": ["Bộ ổn áp lưỡng kim (thường giữ điện áp khoảng 7V) được gắn trong đồng hồ đo kiểu điện trở lưỡng kim để giữ điện áp cung cấp ổn định, tránh sai số chỉ thị do sự thay đổi điện áp nguồn (từ ắc quy)."] },
    { "prompts": ["dong ho do ap suat nhot co nhiem vu gi"], "replies": ["Đồng hồ đo áp suất nhớt theo dõi và chỉ thị áp suất dầu bôi trơn động cơ. Nếu áp suất dầu quá thấp (áp suất dầu không có), công tắc cảnh báo áp suất dầu sẽ đóng tiếp điểm, làm đèn báo sáng trên bảng táp lô."] },
    { "prompts": ["bo nhay co chuc nang gi", "flasher"], "replies": ["Bộ nháy (thường là rơ le nháy cơ - điện) chuyển đổi dòng điện một chiều từ ắc quy thành dòng điện gián đoạn để làm cho đèn báo rẽ (xi nhan) hoặc đèn báo nguy chớp tắt theo chu kỳ."] },
    { "prompts": ["den kich thuoc co chuc nang gi", "clearance lamp", "den do mi"], "replies": ["Đèn kích thước (Đèn đờ mi) là một loại đèn tín hiệu, có nhiệm vụ chỉ báo chiều rộng, chiều dài và chiều cao của xe, giúp người đi đường dễ nhận biết sự có mặt của xe."] },
    { "prompts": ["he thong den bao nguy hoat dong nhu the nao", "hazard light"], "replies": ["Hệ thống đèn báo nguy (Hazard Light) hoạt động bằng cách làm cho tất cả các đèn báo rẽ (xi nhan) đều nháy cùng một lúc, thường được kích hoạt khi muốn báo nguy hiểm hoặc xin ưu tiên."] },
    { "prompts": ["coi dien loai mang rung hoat dong dua tren nguyen ly nao"], "replies": ["Còi điện loại màng rung hoạt động dựa trên nguyên lý từ hóa lõi thép bởi cuộn dây. Sự đóng mở của tiếp điểm liên tục làm thay đổi tần số và biên độ dao động của màng còi, tạo ra âm thanh."] },
    { "prompts": ["mo to gat nuoc co cac che do hoat dong nao"], "replies": ["Mô tơ gạt nước có thể hoạt động ở chế độ tốc độ thấp (LOW), tốc độ cao (HIGH), và chế độ gián đoạn (INT), được điều khiển bằng công tắc gạt nước."] },
    { "prompts": ["bo chap hanh thuy luc abs co chuc nang gi", "hydraulic actuator"], "replies": ["Bộ chấp hành thủy lực ABS (Hydraulic Actuator) có chức năng cung cấp áp suất dầu phanh đến xi lanh bánh xe theo sự điều khiển của ECU ABS. Nó bao gồm các van điện từ để thực hiện ba chế độ: Tăng áp, Giữ áp và Giảm áp."] },
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
      return "Chào bạn! Mình là chatbot tra cứu nhanh về Điện - Điện tử ô tô. Bạn cần hỏi gì nào?";
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
  botDiv.innerHTML = `<img src="chatbot_new.png" class="avatar">&#160;<span class="bot1">Thinking...</span>`;
  messagesContainer.appendChild(botDiv);

  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  setTimeout(() => {
    botDiv.querySelector('.bot1').innerHTML = product;
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 800);
}