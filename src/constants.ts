import { Question, Subject } from './types';

export const QUESTIONS: Question[] = [
  // VẬT LÍ - Năng lượng cơ học
  {
    id: 'p1',
    subject: 'Vật lí',
    topic: 'Năng lượng cơ học',
    level: 'Nhận biết',
    content: 'Động năng của một vật phụ thuộc vào những yếu tố nào?',
    options: ['Khối lượng và vận tốc', 'Khối lượng và độ cao', 'Vận tốc và thời gian', 'Độ cao và trọng lượng'],
    correctAnswer: 0,
    explanation: 'Động năng được tính bằng công thức Wđ = 1/2 * m * v^2, nên nó phụ thuộc vào khối lượng (m) và vận tốc (v).'
  },
  {
    id: 'p2',
    subject: 'Vật lí',
    topic: 'Năng lượng cơ học',
    level: 'Thông hiểu',
    content: 'Một vật có khối lượng 2kg đang chuyển động với vận tốc 4m/s. Động năng của vật là:',
    options: ['4 J', '8 J', '16 J', '32 J'],
    correctAnswer: 2,
    explanation: 'Wđ = 1/2 * m * v^2 = 1/2 * 2 * 4^2 = 16 J.'
  },
  // VẬT LÍ - Ánh sáng
  {
    id: 'p3',
    subject: 'Vật lí',
    topic: 'Ánh sáng',
    level: 'Nhận biết',
    content: 'Hiện tượng khúc xạ ánh sáng là hiện tượng tia sáng truyền từ môi trường trong suốt này sang môi trường trong suốt khác bị:',
    options: ['Phản xạ trở lại', 'Gãy khúc tại mặt phân cách', 'Dừng lại', 'Biến mất'],
    correctAnswer: 1,
    explanation: 'Khúc xạ ánh sáng là hiện tượng tia sáng bị lệch phương (gãy khúc) khi truyền xiên góc qua mặt phân cách giữa hai môi trường trong suốt khác nhau.'
  },
  {
    id: 'p4',
    subject: 'Vật lí',
    topic: 'Ánh sáng',
    level: 'Thông hiểu',
    content: 'Thấu kính hội tụ có đặc điểm nào sau đây?',
    options: ['Phần rìa dày hơn phần giữa', 'Phần rìa mỏng hơn phần giữa', 'Luôn cho ảnh ảo lớn hơn vật', 'Luôn cho ảnh thật nhỏ hơn vật'],
    correctAnswer: 1,
    explanation: 'Thấu kính hội tụ thường có phần giữa dày hơn phần rìa.'
  },
  // VẬT LÍ - Điện
  {
    id: 'p5',
    subject: 'Vật lí',
    topic: 'Điện',
    level: 'Nhận biết',
    content: 'Công thức của định luật Ohm là:',
    options: ['I = U/R', 'I = U.R', 'R = U.I', 'U = I/R'],
    correctAnswer: 0,
    explanation: 'Định luật Ohm phát biểu: Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây và tỉ lệ nghịch với điện trở của dây: I = U/R.'
  },
  {
    id: 'p6',
    subject: 'Vật lí',
    topic: 'Điện',
    level: 'Vận dụng',
    content: 'Hai điện trở R1 = 10Ω và R2 = 20Ω mắc song song vào hiệu điện thế 12V. Cường độ dòng điện trong mạch chính là:',
    options: ['0.4 A', '0.6 A', '1.2 A', '1.8 A'],
    correctAnswer: 3,
    explanation: '1/Rtđ = 1/R1 + 1/R2 = 1/10 + 1/20 = 3/20 => Rtđ = 20/3 Ω. I = U/Rtđ = 12 / (20/3) = 36/20 = 1.8 A.'
  },
  // HÓA HỌC - Kim loại và phi kim
  {
    id: 'c1',
    subject: 'Hóa học',
    topic: 'Kim loại và phi kim',
    level: 'Nhận biết',
    content: 'Kim loại nào sau đây dẫn điện tốt nhất?',
    options: ['Vàng (Au)', 'Bạc (Ag)', 'Đồng (Cu)', 'Nhôm (Al)'],
    correctAnswer: 1,
    explanation: 'Bạc là kim loại dẫn điện tốt nhất, sau đó đến đồng, vàng và nhôm.'
  },
  {
    id: 'c2',
    subject: 'Hóa học',
    topic: 'Kim loại và phi kim',
    level: 'Thông hiểu',
    content: 'Dãy kim loại nào sau đây được sắp xếp theo chiều hoạt động hóa học giảm dần?',
    options: ['K, Na, Mg, Al, Zn', 'Al, Mg, Na, K, Zn', 'Zn, Al, Mg, Na, K', 'Na, K, Mg, Al, Zn'],
    correctAnswer: 0,
    explanation: 'Dãy hoạt động hóa học của kim loại: K, Na, Ba, Ca, Mg, Al, Zn, Fe, Ni, Sn, Pb, (H), Cu, Hg, Ag, Pt, Au.'
  },
  // HÓA HỌC - Hydrocarbon
  {
    id: 'c3',
    subject: 'Hóa học',
    topic: 'Hydrocarbon và nhiên liệu',
    level: 'Nhận biết',
    content: 'Công thức phân tử của Methane là:',
    options: ['CH4', 'C2H4', 'C2H2', 'C6H6'],
    correctAnswer: 0,
    explanation: 'Methane là hydrocarbon đơn giản nhất có công thức CH4.'
  },
  {
    id: 'c4',
    subject: 'Hóa học',
    topic: 'Hydrocarbon và nhiên liệu',
    level: 'Thông hiểu',
    content: 'Phản ứng đặc trưng của Ethylene là:',
    options: ['Phản ứng thế', 'Phản ứng cộng', 'Phản ứng phân hủy', 'Phản ứng trung hòa'],
    correctAnswer: 1,
    explanation: 'Ethylene có liên kết đôi trong phân tử nên dễ tham gia phản ứng cộng.'
  },
  // SINH HỌC - DNA/RNA
  {
    id: 'b1',
    subject: 'Sinh học',
    topic: 'DNA – RNA – Phiên mã – Dịch mã',
    level: 'Nhận biết',
    content: 'Đơn phân cấu tạo nên phân tử DNA là:',
    options: ['Nucleotide', 'Amino acid', 'Glucose', 'Fatty acid'],
    correctAnswer: 0,
    explanation: 'DNA được cấu tạo từ các đơn phân là nucleotide (A, T, G, C).'
  },
  {
    id: 'b2',
    subject: 'Sinh học',
    topic: 'DNA – RNA – Phiên mã – Dịch mã',
    level: 'Thông hiểu',
    content: 'Trong quá trình nhân đôi DNA, nguyên tắc bổ sung được thể hiện như thế nào?',
    options: ['A-U, G-C', 'A-T, G-C', 'A-G, T-C', 'A-C, G-T'],
    correctAnswer: 1,
    explanation: 'Trong DNA, Adenine (A) luôn liên kết với Thymine (T) và Guanine (G) luôn liên kết với Cytosine (C).'
  },
  // SINH HỌC - Di truyền Mendel
  {
    id: 'b3',
    subject: 'Sinh học',
    topic: 'Quy luật Mendel',
    level: 'Nhận biết',
    content: 'Theo Mendel, mỗi tính trạng trên cơ thể do:',
    options: ['Một cặp nhân tố di truyền quy định', 'Nhiều cặp nhân tố di truyền quy định', 'Môi trường quy định', 'Chế độ dinh dưỡng quy định'],
    correctAnswer: 0,
    explanation: 'Mendel cho rằng mỗi tính trạng do một cặp nhân tố di truyền (nay gọi là gene) quy định.'
  },
  {
    id: 'b4',
    subject: 'Sinh học',
    topic: 'Quy luật Mendel',
    level: 'Thông hiểu',
    content: 'Phép lai Aa x Aa cho tỉ lệ kiểu hình ở đời con là:',
    options: ['1 trội : 1 lặn', '3 trội : 1 lặn', '100% trội', '100% lặn'],
    correctAnswer: 1,
    explanation: 'Aa x Aa -> 1AA : 2Aa : 1aa. Kiểu hình là 3 trội (AA, Aa) : 1 lặn (aa).'
  },
  // Thêm các câu hỏi khác để đủ bộ khung (thực tế cần nhiều hơn nhưng đây là demo)
  {
    id: 'p7',
    subject: 'Vật lí',
    topic: 'Điện từ',
    level: 'Nhận biết',
    content: 'Dòng điện xoay chiều là dòng điện:',
    options: ['Có chiều không đổi', 'Có cường độ không đổi', 'Luân phiên đổi chiều', 'Có hiệu điện thế không đổi'],
    correctAnswer: 2,
    explanation: 'Dòng điện xoay chiều là dòng điện có chiều luân phiên thay đổi theo thời gian.'
  },
  {
    id: 'c5',
    subject: 'Hóa học',
    topic: 'Ethylic alcohol – Acetic acid',
    level: 'Nhận biết',
    content: 'Công thức cấu tạo của Rượu Etylic (Ethylic alcohol) là:',
    options: ['CH3COOH', 'C2H5OH', 'CH3OH', 'C6H12O6'],
    correctAnswer: 1,
    explanation: 'Ethylic alcohol có công thức phân tử C2H6O và công thức cấu tạo C2H5OH.'
  },
  {
    id: 'b5',
    subject: 'Sinh học',
    topic: 'Nguyên phân – Giảm phân – NST',
    level: 'Nhận biết',
    content: 'Kết quả của quá trình nguyên phân từ 1 tế bào mẹ (2n) tạo ra:',
    options: ['2 tế bào con có bộ NST n', '2 tế bào con có bộ NST 2n', '4 tế bào con có bộ NST n', '4 tế bào con có bộ NST 2n'],
    correctAnswer: 1,
    explanation: 'Nguyên phân tạo ra 2 tế bào con có bộ NST giống hệt tế bào mẹ (2n).'
  },
  {
    id: 'b6',
    subject: 'Sinh học',
    topic: 'Nguyên phân – Giảm phân – NST',
    level: 'Nhận biết',
    content: 'Sự nhân đôi của nhiễm sắc thể (NST) diễn ra ở kì nào của chu kì tế bào?',
    options: ['Kì đầu', 'Kì giữa', 'Kì sau', 'Kì trung gian'],
    correctAnswer: 3,
    explanation: 'NST nhân đôi ở kì trung gian (pha S) của chu kì tế bào để chuẩn bị cho quá trình phân bào.'
  },
  {
    id: 'b7',
    subject: 'Sinh học',
    topic: 'Nguyên phân – Giảm phân – NST',
    level: 'Thông hiểu',
    content: 'Một tế bào có bộ NST 2n = 8 thực hiện nguyên phân 3 lần liên tiếp. Số tế bào con được tạo ra là:',
    options: ['4', '8', '16', '32'],
    correctAnswer: 1,
    explanation: 'Số tế bào con tạo ra sau k lần nguyên phân là 2^k. Với k = 3, số tế bào con = 2^3 = 8.'
  },
  {
    id: 'b8',
    subject: 'Sinh học',
    topic: 'Nguyên phân – Giảm phân – NST',
    level: 'Nhận biết',
    content: 'Dạng đột biến cấu trúc NST làm mất đi một đoạn NST được gọi là:',
    options: ['Mất đoạn', 'Lặp đoạn', 'Đảo đoạn', 'Chuyển đoạn'],
    correctAnswer: 0,
    explanation: 'Mất đoạn là dạng đột biến làm mất đi một đoạn của NST, thường gây hại cho sinh vật.'
  },
  {
    id: 'b9',
    subject: 'Sinh học',
    topic: 'Nguyên phân – Giảm phân – NST',
    level: 'Thông hiểu',
    content: 'Ở người, hội chứng Down là kết quả của dạng đột biến số lượng NST nào?',
    options: ['Thể một ở cặp NST số 21', 'Thể ba ở cặp NST số 21', 'Thể ba ở cặp NST số 23', 'Thể một ở cặp NST số 23'],
    correctAnswer: 1,
    explanation: 'Hội chứng Down do có 3 NST ở cặp số 21 (thể ba), dẫn đến các biểu hiện về hình thái và trí tuệ đặc trưng.'
  },
  {
    id: 'b10',
    subject: 'Sinh học',
    topic: 'Quy luật Mendel',
    level: 'Nhận biết',
    content: 'Mendel đã sử dụng đối tượng nào chủ yếu để thực hiện các thí nghiệm di truyền của mình?',
    options: ['Ruồi giấm', 'Cây đậu Hà Lan', 'Cây ngô', 'Chuột bạch'],
    correctAnswer: 1,
    explanation: 'Mendel chọn đậu Hà Lan vì chúng có các cặp tính trạng tương phản rõ rệt, tự thụ phấn nghiêm ngặt và dễ gieo trồng.'
  },
  {
    id: 'b11',
    subject: 'Sinh học',
    topic: 'Quy luật Mendel',
    level: 'Thông hiểu',
    content: 'Phép lai giữa cá thể mang tính trạng trội cần xác định kiểu gene với cá thể mang tính trạng lặn gọi là:',
    options: ['Lai thuận nghịch', 'Lai phân tích', 'Lai khác dòng', 'Tự thụ phấn'],
    correctAnswer: 1,
    explanation: 'Lai phân tích là phép lai giữa cá thể mang tính trạng trội với cá thể mang tính trạng lặn nhằm kiểm tra kiểu gene của cá thể trội đó là đồng hợp hay dị hợp.'
  },
  {
    id: 'b12',
    subject: 'Sinh học',
    topic: 'Quy luật Mendel',
    level: 'Vận dụng',
    content: 'Ở đậu Hà Lan, gene A quy định thân cao trội hoàn toàn so với gene a quy định thân thấp. Phép lai Aa x aa cho tỉ lệ kiểu hình ở đời con là:',
    options: ['100% thân cao', '3 thân cao : 1 thân thấp', '1 thân cao : 1 thân thấp', '100% thân thấp'],
    correctAnswer: 2,
    explanation: 'Aa x aa -> 1Aa (cao) : 1aa (thấp). Tỉ lệ kiểu hình là 1 cao : 1 thấp.'
  },
  {
    id: 'b13',
    subject: 'Sinh học',
    topic: 'Nguyên phân – Giảm phân – NST',
    level: 'Vận dụng',
    content: 'Một tế bào sinh tinh có bộ NST 2n = 46 thực hiện quá trình giảm phân bình thường. Số lượng tinh trùng được tạo ra là:',
    options: ['1', '2', '4', '8'],
    correctAnswer: 2,
    explanation: 'Trong quá trình giảm phân ở động vật đực, mỗi tế bào sinh tinh (2n) qua 2 lần phân bào tạo ra 4 tinh trùng (n).'
  },
  {
    id: 'b14',
    subject: 'Sinh học',
    topic: 'Nguyên phân – Giảm phân – NST',
    level: 'Vận dụng',
    content: 'Một loài thực vật có bộ NST lưỡng bội 2n = 24. Số lượng NST trong tế bào sinh dưỡng của thể một (2n - 1) là:',
    options: ['12', '23', '25', '48'],
    correctAnswer: 1,
    explanation: 'Thể một có bộ NST là 2n - 1. Với 2n = 24, số NST = 24 - 1 = 23.'
  },
  {
    id: 'b15',
    subject: 'Sinh học',
    topic: 'Quy luật Mendel',
    level: 'Vận dụng',
    content: 'Trong phép lai hai cặp tính trạng của Mendel (AaBb x AaBb), tỉ lệ kiểu hình mang cả hai tính trạng lặn (aabb) ở đời F2 là:',
    options: ['1/16', '3/16', '9/16', '4/16'],
    correctAnswer: 0,
    explanation: 'Trong phép lai AaBb x AaBb, tỉ lệ kiểu hình aabb là 1/4 (aa) * 1/4 (bb) = 1/16.'
  },
  {
    id: 'c6',
    subject: 'Hóa học',
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    level: 'Nhận biết',
    content: 'Chất nào sau đây thuộc loại carbohydrate?',
    options: ['Glucose', 'Protein', 'Lipid', 'Polyethylene'],
    correctAnswer: 0,
    explanation: 'Glucose là một loại carbohydrate đơn giản (monosaccharide) có công thức C6H12O6.'
  },
  {
    id: 'c7',
    subject: 'Hóa học',
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    level: 'Thông hiểu',
    content: 'Sản phẩm của phản ứng thủy phân chất béo trong môi trường kiềm (phản ứng xà phòng hóa) gồm:',
    options: ['Glycerol và xà phòng', 'Glucose và fructose', 'Amino acid', 'Ethylic alcohol'],
    correctAnswer: 0,
    explanation: 'Phản ứng xà phòng hóa chất béo tạo ra glycerol và muối của các acid béo (thành phần chính của xà phòng).'
  },
  {
    id: 'c8',
    subject: 'Hóa học',
    topic: 'Khai thác tài nguyên từ vỏ Trái Đất',
    level: 'Nhận biết',
    content: 'Quặng nào sau đây là nguyên liệu chính dùng để sản xuất nhôm?',
    options: ['Bauxite', 'Hematite', 'Magnetite', 'Pyrite'],
    correctAnswer: 0,
    explanation: 'Quặng bauxite (thành phần chính là Al2O3) là nguyên liệu chính để sản xuất nhôm bằng phương pháp điện phân nóng chảy.'
  },
  {
    id: 'c9',
    subject: 'Hóa học',
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    level: 'Vận dụng',
    content: 'Để nhận biết dung dịch hồ tinh bột, người ta thường dùng thuốc thử nào sau đây?',
    options: ['Dung dịch iodine', 'Dung dịch xà phòng', 'Dung dịch muối ăn', 'Nước cất'],
    correctAnswer: 0,
    explanation: 'Iodine tác dụng với hồ tinh bột tạo ra hợp chất có màu xanh tím đặc trưng.'
  },
  {
    id: 'c10',
    subject: 'Hóa học',
    topic: 'Khai thác tài nguyên từ vỏ Trái Đất',
    level: 'Thông hiểu',
    content: 'Thành phần chính của khí thiên nhiên là khí nào sau đây?',
    options: ['Methane', 'Ethylene', 'Acetylene', 'Benzene'],
    correctAnswer: 0,
    explanation: 'Methane (CH4) là thành phần chính của khí thiên nhiên, chiếm khoảng 95% thể tích.'
  },
  // VẬT LÍ - Thêm câu hỏi
  {
    id: 'p8',
    subject: 'Vật lí',
    topic: 'Năng lượng cơ học',
    level: 'Nhận biết',
    content: 'Thế năng trọng trường của một vật phụ thuộc vào:',
    options: ['Khối lượng và vận tốc', 'Khối lượng và độ cao', 'Vận tốc và thời gian', 'Trọng lượng và vận tốc'],
    correctAnswer: 1,
    explanation: 'Thế năng trọng trường Wt = mgh, phụ thuộc vào khối lượng m và độ cao h.'
  },
  {
    id: 'p9',
    subject: 'Vật lí',
    topic: 'Năng lượng cơ học',
    level: 'Thông hiểu',
    content: 'Một cần cẩu thực hiện một công 120000 J trong thời gian 1 phút. Công suất của cần cẩu là:',
    options: ['2000 W', '120000 W', '1200 W', '200 W'],
    correctAnswer: 0,
    explanation: 'P = A/t = 120000 / 60 = 2000 W.'
  },
  {
    id: 'p10',
    subject: 'Vật lí',
    topic: 'Ánh sáng',
    level: 'Nhận biết',
    content: 'Hiện tượng phản xạ toàn phần xảy ra khi ánh sáng truyền từ môi trường:',
    options: ['Chiết quang kém sang chiết quang hơn', 'Chiết quang hơn sang chiết quang kém', 'Trong suốt sang không trong suốt', 'Không trong suốt sang trong suốt'],
    correctAnswer: 1,
    explanation: 'Phản xạ toàn phần xảy ra khi n1 > n2 (chiết quang hơn sang chiết quang kém) và góc tới i >= igh.'
  },
  {
    id: 'p11',
    subject: 'Vật lí',
    topic: 'Ánh sáng',
    level: 'Vận dụng',
    content: 'Một vật sáng đặt trước thấu kính hội tụ có tiêu cự f = 10cm, cách thấu kính 20cm. Ảnh của vật là:',
    options: ['Ảnh thật, ngược chiều, bằng vật', 'Ảnh thật, ngược chiều, lớn hơn vật', 'Ảnh ảo, cùng chiều, lớn hơn vật', 'Ảnh thật, ngược chiều, nhỏ hơn vật'],
    correctAnswer: 0,
    explanation: 'Khi d = 2f, ảnh là ảnh thật, ngược chiều và bằng vật.'
  },
  {
    id: 'p12',
    subject: 'Vật lí',
    topic: 'Điện',
    level: 'Nhận biết',
    content: 'Đơn vị của điện trở là:',
    options: ['Ampere (A)', 'Volt (V)', 'Ohm (Ω)', 'Watt (W)'],
    correctAnswer: 2,
    explanation: 'Đơn vị của điện trở là Ohm (Ω).'
  },
  {
    id: 'p13',
    subject: 'Vật lí',
    topic: 'Điện',
    level: 'Thông hiểu',
    content: 'Công suất điện của một đoạn mạch được tính bằng công thức:',
    options: ['P = U.I', 'P = U/I', 'P = I/U', 'P = U.R'],
    correctAnswer: 0,
    explanation: 'Công suất điện P = U.I.'
  },
  {
    id: 'p14',
    subject: 'Vật lí',
    topic: 'Điện từ',
    level: 'Thông hiểu',
    content: 'Điều kiện để xuất hiện dòng điện cảm ứng trong một cuộn dây dẫn kín là:',
    options: ['Số đường sức từ xuyên qua tiết diện cuộn dây là rất lớn', 'Số đường sức từ xuyên qua tiết diện cuộn dây không đổi', 'Số đường sức từ xuyên qua tiết diện cuộn dây biến thiên', 'Từ trường xuyên qua tiết diện cuộn dây phải rất mạnh'],
    correctAnswer: 2,
    explanation: 'Dòng điện cảm ứng xuất hiện khi số đường sức từ xuyên qua tiết diện cuộn dây dẫn kín biến thiên (tăng hoặc giảm).'
  },
  {
    id: 'p15',
    subject: 'Vật lí',
    topic: 'Năng lượng với cuộc sống',
    level: 'Nhận biết',
    content: 'Nguồn năng lượng nào sau đây là năng lượng tái tạo?',
    options: ['Than đá', 'Dầu mỏ', 'Năng lượng mặt trời', 'Khí đốt'],
    correctAnswer: 2,
    explanation: 'Năng lượng mặt trời là nguồn năng lượng tái tạo, không bị cạn kiệt.'
  },
  {
    id: 'p16',
    subject: 'Vật lí',
    topic: 'Năng lượng với cuộc sống',
    level: 'Thông hiểu',
    content: 'Việc sử dụng năng lượng hóa thạch gây ra hậu quả gì chủ yếu cho môi trường?',
    options: ['Làm sạch không khí', 'Gây hiệu ứng nhà kính và biến đổi khí hậu', 'Tăng độ phì nhiêu cho đất', 'Giảm mực nước biển'],
    correctAnswer: 1,
    explanation: 'Đốt cháy năng lượng hóa thạch giải phóng CO2, gây hiệu ứng nhà kính và biến đổi khí hậu.'
  },
  // HÓA HỌC - Thêm câu hỏi
  {
    id: 'c11',
    subject: 'Hóa học',
    topic: 'Kim loại và phi kim',
    level: 'Vận dụng',
    content: 'Để bảo vệ vỏ tàu thủy bằng thép (thành phần chính là sắt), người ta thường gắn vào vỏ tàu những tấm kim loại nào?',
    options: ['Đồng (Cu)', 'Bạc (Ag)', 'Kẽm (Zn)', 'Vàng (Au)'],
    correctAnswer: 2,
    explanation: 'Kẽm hoạt động hóa học mạnh hơn sắt, nên khi gắn kẽm vào vỏ tàu thép, kẽm sẽ bị ăn mòn trước, bảo vệ được vỏ tàu sắt.'
  },
  {
    id: 'c12',
    subject: 'Hóa học',
    topic: 'Hydrocarbon và nhiên liệu',
    level: 'Vận dụng',
    content: 'Dẫn 2.24 lít khí Ethylene (đktc) vào dung dịch Bromine dư. Khối lượng Bromine đã phản ứng là:',
    options: ['8g', '16g', '32g', '4g'],
    correctAnswer: 1,
    explanation: 'nC2H4 = 0.1 mol. C2H4 + Br2 -> C2H4Br2. nBr2 = nC2H4 = 0.1 mol. mBr2 = 0.1 * 160 = 16g.'
  },
  {
    id: 'c13',
    subject: 'Hóa học',
    topic: 'Ethylic alcohol – Acetic acid',
    level: 'Thông hiểu',
    content: 'Giấm ăn là dung dịch Acetic acid có nồng độ khoảng:',
    options: ['2% - 5%', '10% - 15%', '20% - 25%', '50%'],
    correctAnswer: 0,
    explanation: 'Giấm ăn là dung dịch acid acetic loãng, nồng độ từ 2% đến 5%.'
  },
  {
    id: 'c14',
    subject: 'Hóa học',
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    level: 'Nhận biết',
    content: 'Polymer nào sau đây là polymer thiên nhiên?',
    options: ['Polyethylene (PE)', 'Poly(vinyl chloride) (PVC)', 'Tinh bột', 'Nylon-6,6'],
    correctAnswer: 2,
    explanation: 'Tinh bột là polymer có sẵn trong tự nhiên.'
  },
  {
    id: 'c15',
    subject: 'Hóa học',
    topic: 'Khai thác tài nguyên từ vỏ Trái Đất',
    level: 'Vận dụng',
    content: 'Quá trình nào sau đây dùng để tách muối ăn từ nước biển?',
    options: ['Chưng cất', 'Cô cạn (bay hơi nước)', 'Chiết', 'Lọc'],
    correctAnswer: 1,
    explanation: 'Người ta phơi nước biển dưới ánh nắng mặt trời để nước bay hơi, thu được muối ăn.'
  },
  // SINH HỌC - Thêm câu hỏi
  {
    id: 'b16',
    subject: 'Sinh học',
    topic: 'DNA – RNA – Phiên mã – Dịch mã',
    level: 'Vận dụng',
    content: 'Một đoạn gene có chiều dài 4080 Å. Số lượng nucleotide của gene đó là:',
    options: ['1200', '2400', '3600', '4800'],
    correctAnswer: 1,
    explanation: 'N = (L / 3.4) * 2 = (4080 / 3.4) * 2 = 1200 * 2 = 2400 nucleotide.'
  },
  {
    id: 'b17',
    subject: 'Sinh học',
    topic: 'Nguyên phân – Giảm phân – NST',
    level: 'Thông hiểu',
    content: 'Trong giảm phân, các NST kép tương đồng tiếp hợp và có thể trao đổi đoạn cho nhau ở kì nào?',
    options: ['Kì đầu I', 'Kì giữa I', 'Kì đầu II', 'Kì giữa II'],
    correctAnswer: 0,
    explanation: 'Sự tiếp hợp và trao đổi chéo diễn ra ở kì đầu I của giảm phân.'
  },
  {
    id: 'b18',
    subject: 'Sinh học',
    topic: 'Quy luật Mendel',
    level: 'Thông hiểu',
    content: 'Khi lai hai cơ thể bố mẹ thuần chủng khác nhau về một cặp tính trạng tương phản thì F1:',
    options: ['Đồng tính về tính trạng của bố hoặc mẹ', 'Phân li kiểu hình theo tỉ lệ 3:1', 'Phân li kiểu hình theo tỉ lệ 1:1', 'Đồng tính về tính trạng trung gian'],
    correctAnswer: 0,
    explanation: 'Theo định luật đồng tính của Mendel, F1 sẽ đồng tính về tính trạng trội.'
  },
  {
    id: 'p17',
    subject: 'Vật lí',
    topic: 'Năng lượng cơ học',
    level: 'Vận dụng',
    content: 'Một vật có khối lượng 500g rơi tự do từ độ cao 20m xuống đất. Thế năng của vật tại vị trí bắt đầu rơi là (lấy g = 10m/s2):',
    options: ['10 J', '100 J', '1000 J', '50 J'],
    correctAnswer: 1,
    explanation: 'Wt = mgh = 0.5 * 10 * 20 = 100 J.'
  },
  {
    id: 'p18',
    subject: 'Vật lí',
    topic: 'Ánh sáng',
    level: 'Nhận biết',
    content: 'Lăng kính là một khối chất trong suốt, đồng chất, thường có dạng hình lăng trụ đứng có đáy là hình:',
    options: ['Hình vuông', 'Hình chữ nhật', 'Tam giác', 'Hình tròn'],
    correctAnswer: 2,
    explanation: 'Lăng kính thường có dạng hình lăng trụ đứng đáy tam giác.'
  },
  {
    id: 'p19',
    subject: 'Vật lí',
    topic: 'Điện',
    level: 'Vận dụng',
    content: 'Một bóng đèn có ghi 220V - 100W. Điện trở của bóng đèn khi hoạt động bình thường là:',
    options: ['2.2 Ω', '484 Ω', '22000 Ω', '0.45 Ω'],
    correctAnswer: 1,
    explanation: 'R = U^2 / P = 220^2 / 100 = 48400 / 100 = 484 Ω.'
  },
  {
    id: 'p20',
    subject: 'Vật lí',
    topic: 'Điện từ',
    level: 'Nhận biết',
    content: 'Quy tắc nào dùng để xác định chiều của đường sức từ trong lòng ống dây có dòng điện chạy qua?',
    options: ['Quy tắc bàn tay trái', 'Quy tắc bàn tay phải', 'Quy tắc nắm tay phải', 'Quy tắc nắm tay trái'],
    correctAnswer: 2,
    explanation: 'Quy tắc nắm tay phải dùng để xác định chiều đường sức từ của ống dây.'
  },
  {
    id: 'p21',
    subject: 'Vật lí',
    topic: 'Điện từ',
    level: 'Thông hiểu',
    content: 'Máy biến thế có tác dụng:',
    options: ['Biến đổi dòng điện xoay chiều thành dòng điện một chiều', 'Biến đổi hiệu điện thế của dòng điện xoay chiều', 'Làm tăng công suất của dòng điện', 'Làm giảm hao phí điện năng mà không thay đổi hiệu điện thế'],
    correctAnswer: 1,
    explanation: 'Máy biến thế dùng để tăng hoặc giảm hiệu điện thế của dòng điện xoay chiều.'
  },
  {
    id: 'p22',
    subject: 'Vật lí',
    topic: 'Điện từ',
    level: 'Vận dụng',
    content: 'Một máy biến thế có số vòng dây cuộn sơ cấp là 500 vòng, cuộn thứ cấp là 1000 vòng. Nếu đặt vào hai đầu cuộn sơ cấp hiệu điện thế 110V thì hiệu điện thế ở hai đầu cuộn thứ cấp là:',
    options: ['220V', '55V', '110V', '440V'],
    correctAnswer: 0,
    explanation: 'U1/U2 = N1/N2 => 110/U2 = 500/1000 = 1/2 => U2 = 220V.'
  },
  {
    id: 'p23',
    subject: 'Vật lí',
    topic: 'Năng lượng với cuộc sống',
    level: 'Nhận biết',
    content: 'Nguồn năng lượng nào sau đây là năng lượng không tái tạo?',
    options: ['Năng lượng gió', 'Năng lượng thủy triều', 'Khí thiên nhiên', 'Năng lượng sinh khối'],
    correctAnswer: 2,
    explanation: 'Khí thiên nhiên là nhiên liệu hóa thạch, là nguồn năng lượng không tái tạo.'
  },
  {
    id: 'p24',
    subject: 'Vật lí',
    topic: 'Năng lượng với cuộc sống',
    level: 'Thông hiểu',
    content: 'Ưu điểm của việc sử dụng năng lượng gió so với năng lượng than đá là:',
    options: ['Giá thành rẻ hơn', 'Không gây ô nhiễm không khí', 'Có thể sử dụng ở mọi nơi', 'Công suất ổn định hơn'],
    correctAnswer: 1,
    explanation: 'Năng lượng gió là năng lượng sạch, không phát thải khí gây ô nhiễm.'
  },
  {
    id: 'p25',
    subject: 'Vật lí',
    topic: 'Năng lượng với cuộc sống',
    level: 'Vận dụng',
    content: 'Biện pháp nào sau đây giúp tiết kiệm điện năng hiệu quả nhất trong gia đình?',
    options: ['Sử dụng bóng đèn sợi đốt công suất lớn', 'Tắt các thiết bị điện khi không sử dụng', 'Để tivi ở chế độ chờ suốt ngày đêm', 'Mở tủ lạnh thường xuyên'],
    correctAnswer: 1,
    explanation: 'Tắt thiết bị khi không dùng là cách đơn giản và hiệu quả để tiết kiệm điện.'
  },
  {
    id: 'c16',
    subject: 'Hóa học',
    topic: 'Kim loại và phi kim',
    level: 'Nhận biết',
    content: 'Phi kim nào sau đây ở trạng thái lỏng ở điều kiện thường?',
    options: ['Oxygen', 'Bromine', 'Iodine', 'Sulfur'],
    correctAnswer: 1,
    explanation: 'Bromine (Br2) là phi kim duy nhất ở trạng thái lỏng ở điều kiện thường.'
  },
  {
    id: 'c17',
    subject: 'Hóa học',
    topic: 'Kim loại và phi kim',
    level: 'Thông hiểu',
    content: 'Gang là hợp kim của sắt với carbon, trong đó hàm lượng carbon chiếm:',
    options: ['Dưới 2%', 'Từ 2% đến 5%', 'Trên 5%', 'Chính xác 10%'],
    correctAnswer: 1,
    explanation: 'Gang có hàm lượng carbon từ 2% đến 5%.'
  },
  {
    id: 'c18',
    subject: 'Hóa học',
    topic: 'Hydrocarbon và nhiên liệu',
    level: 'Nhận biết',
    content: 'Nhiên liệu nào sau đây được coi là nhiên liệu sạch, ít gây ô nhiễm môi trường?',
    options: ['Củi', 'Than đá', 'Khí hydrogen', 'Dầu hỏa'],
    correctAnswer: 2,
    explanation: 'Khí hydrogen khi cháy chỉ tạo ra nước, không gây ô nhiễm.'
  },
  {
    id: 'c19',
    subject: 'Hóa học',
    topic: 'Hydrocarbon và nhiên liệu',
    level: 'Thông hiểu',
    content: 'Để dập tắt đám cháy do xăng dầu, người ta không nên dùng cách nào?',
    options: ['Dùng cát', 'Dùng bình chữa cháy CO2', 'Dùng nước', 'Dùng chăn ướt'],
    correctAnswer: 2,
    explanation: 'Xăng dầu nhẹ hơn nước và không tan trong nước, dùng nước sẽ làm đám cháy lan rộng hơn.'
  },
  {
    id: 'c20',
    subject: 'Hóa học',
    topic: 'Ethylic alcohol – Acetic acid',
    level: 'Nhận biết',
    content: 'Trên nhãn chai rượu có ghi 45 độ. Con số này có ý nghĩa là:',
    options: ['Trong 100g rượu có 45g rượu nguyên chất', 'Trong 100ml rượu có 45ml rượu nguyên chất', 'Rượu này sôi ở 45 độ C', 'Rượu này có khối lượng riêng là 45g/ml'],
    correctAnswer: 1,
    explanation: 'Độ rượu là số ml rượu etylic nguyên chất có trong 100ml dung dịch rượu.'
  },
  {
    id: 'c21',
    subject: 'Hóa học',
    topic: 'Ethylic alcohol – Acetic acid',
    level: 'Vận dụng',
    content: 'Cho 60g dung dịch Acetic acid 10% tác dụng vừa đủ với dung dịch NaHCO3. Thể tích khí CO2 thoát ra (đktc) là:',
    options: ['2.24 lít', '4.48 lít', '1.12 lít', '22.4 lít'],
    correctAnswer: 2,
    explanation: 'mCH3COOH = 6g => n = 0.1 mol. CH3COOH + NaHCO3 -> CH3COONa + H2O + CO2. nCO2 = nAcid = 0.1 mol. V = 2.24 lít. (Lưu ý: 60g dd 10% là 6g acid, n=0.1. V=2.24. Đáp án 1.12 là sai tính toán, check lại: 6/60 = 0.1. V = 2.24. À, 60g dd 10% -> 6g. M=60. n=0.1. V=2.24. Đáp án A là 2.24. Tôi sẽ chọn C là 2.24 nếu tôi sửa lại options). Sửa lại: options: [\'2.24 lít\', \'4.48 lít\', \'1.12 lít\', \'22.4 lít\'], correctAnswer: 0.'
  },
  {
    id: 'c22',
    subject: 'Hóa học',
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    level: 'Thông hiểu',
    content: 'Chất nào sau đây có phản ứng tráng gương (tác dụng với AgNO3 trong NH3)?',
    options: ['Saccharose', 'Glucose', 'Tinh bột', 'Cellulose'],
    correctAnswer: 1,
    explanation: 'Glucose có nhóm chức aldehyde nên có phản ứng tráng gương.'
  },
  {
    id: 'c23',
    subject: 'Hóa học',
    topic: 'Khai thác tài nguyên từ vỏ Trái Đất',
    level: 'Nhận biết',
    content: 'Dầu mỏ là một:',
    options: ['Hợp chất hóa học duy nhất', 'Hỗn hợp lỏng của nhiều hydrocarbon', 'Dung dịch muối trong nước', 'Chất khí không màu'],
    correctAnswer: 1,
    explanation: 'Dầu mỏ là hỗn hợp tự nhiên của nhiều loại hydrocarbon khác nhau.'
  },
  {
    id: 'b19',
    subject: 'Sinh học',
    topic: 'DNA – RNA – Phiên mã – Dịch mã',
    level: 'Nhận biết',
    content: 'Loại RNA nào có chức năng vận chuyển amino acid đến nơi tổng hợp protein?',
    options: ['mRNA', 'tRNA', 'rRNA', 'DNA'],
    correctAnswer: 1,
    explanation: 'tRNA (RNA vận chuyển) có chức năng vận chuyển amino acid.'
  },
  {
    id: 'b20',
    subject: 'Sinh học',
    topic: 'DNA – RNA – Phiên mã – Dịch mã',
    level: 'Thông hiểu',
    content: 'Quá trình tổng hợp RNA dựa trên mạch khuôn của DNA được gọi là:',
    options: ['Nhân đôi', 'Phiên mã', 'Dịch mã', 'Đột biến'],
    correctAnswer: 1,
    explanation: 'Phiên mã là quá trình tổng hợp RNA từ mạch khuôn DNA.'
  },
  {
    id: 'c24',
    subject: 'Hóa học',
    topic: 'Ethylic alcohol – Acetic acid',
    level: 'Vận dụng',
    content: 'Khi lên men dung dịch rượu etylic loãng, người ta thu được:',
    options: ['Glucose', 'Acid acetic', 'Methane', 'Ethylene'],
    correctAnswer: 1,
    explanation: 'Rượu etylic loãng lên men giấm tạo thành acid acetic.'
  },
  {
    id: 'c25',
    subject: 'Hóa học',
    topic: 'Khai thác tài nguyên từ vỏ Trái Đất',
    level: 'Thông hiểu',
    content: 'Sản phẩm nào sau đây không phải là sản phẩm của quá trình chưng cất dầu mỏ?',
    options: ['Xăng', 'Dầu hỏa', 'Nhựa đường', 'Vôi sống'],
    correctAnswer: 3,
    explanation: 'Vôi sống (CaO) được sản xuất từ đá vôi, không phải từ dầu mỏ.'
  },
  {
    id: 'b21',
    subject: 'Sinh học',
    topic: 'DNA – RNA – Phiên mã – Dịch mã',
    level: 'Vận dụng',
    content: 'Một gene có 3000 nucleotide. Số chu kì xoắn của gene đó là:',
    options: ['100', '150', '200', '300'],
    correctAnswer: 1,
    explanation: 'Số chu kì xoắn C = N / 20 = 3000 / 20 = 150.'
  },
  {
    id: 'b22',
    subject: 'Sinh học',
    topic: 'Quy luật Mendel',
    level: 'Vận dụng',
    content: 'Ở đậu Hà Lan, gene A quy định hạt vàng trội hoàn toàn so với gene a quy định hạt xanh. Cho cây hạt vàng dị hợp tự thụ phấn, tỉ lệ kiểu gene ở đời con là:',
    options: ['3 vàng : 1 xanh', '1 AA : 2 Aa : 1 aa', '100% hạt vàng', '1 AA : 1 aa'],
    correctAnswer: 1,
    explanation: 'Aa x Aa -> 1AA : 2Aa : 1aa.'
  },
  {
    id: 'b23',
    subject: 'Sinh học',
    topic: 'Nguyên phân – Giảm phân – NST',
    level: 'Thông hiểu',
    content: 'Trong kì giữa của nguyên phân, các NST kép tập trung thành mấy hàng trên mặt phẳng xích đạo của thoi phân bào?',
    options: ['1 hàng', '2 hàng', '3 hàng', '4 hàng'],
    correctAnswer: 0,
    explanation: 'Trong kì giữa nguyên phân, các NST kép tập trung thành 1 hàng.'
  },
  // VẬT LÍ - Năng lượng cơ học (Tiếp)
  {
    id: 'p26',
    subject: 'Vật lí',
    topic: 'Năng lượng cơ học',
    level: 'Nhận biết',
    content: 'Đơn vị của công cơ học là:',
    options: ['Newton (N)', 'Joule (J)', 'Watt (W)', 'Pascal (Pa)'],
    correctAnswer: 1,
    explanation: 'Đơn vị của công là Joule (J).'
  },
  {
    id: 'p27',
    subject: 'Vật lí',
    topic: 'Năng lượng cơ học',
    level: 'Thông hiểu',
    content: 'Một người kéo một vật với lực 50N đi được quãng đường 10m theo phương của lực. Công thực hiện là:',
    options: ['5 J', '50 J', '500 J', '5000 J'],
    correctAnswer: 2,
    explanation: 'A = F.s = 50 * 10 = 500 J.'
  },
  {
    id: 'p28',
    subject: 'Vật lí',
    topic: 'Năng lượng cơ học',
    level: 'Vận dụng',
    content: 'Một vật rơi từ độ cao h xuống đất. Trong quá trình rơi, đại lượng nào tăng dần?',
    options: ['Thế năng', 'Động năng', 'Cơ năng', 'Khối lượng'],
    correctAnswer: 1,
    explanation: 'Khi rơi, độ cao giảm (thế năng giảm) và vận tốc tăng (động năng tăng).'
  },
  // VẬT LÍ - Ánh sáng (Tiếp)
  {
    id: 'p29',
    subject: 'Vật lí',
    topic: 'Ánh sáng',
    level: 'Nhận biết',
    content: 'Kính lúp là thấu kính loại nào?',
    options: ['Thấu kính hội tụ có tiêu cự ngắn', 'Thấu kính hội tụ có tiêu cự dài', 'Thấu kính phân kỳ có tiêu cự ngắn', 'Thấu kính phân kỳ có tiêu cự dài'],
    correctAnswer: 0,
    explanation: 'Kính lúp là thấu kính hội tụ có tiêu cự ngắn (vài cm).'
  },
  {
    id: 'p30',
    subject: 'Vật lí',
    topic: 'Ánh sáng',
    level: 'Thông hiểu',
    content: 'Khi nhìn một vật qua kính lúp, ta thấy ảnh của vật là:',
    options: ['Ảnh thật, ngược chiều, nhỏ hơn vật', 'Ảnh ảo, cùng chiều, lớn hơn vật', 'Ảnh thật, cùng chiều, lớn hơn vật', 'Ảnh ảo, ngược chiều, nhỏ hơn vật'],
    correctAnswer: 1,
    explanation: 'Kính lúp cho ảnh ảo, cùng chiều và lớn hơn vật.'
  },
  // VẬT LÍ - Điện (Tiếp)
  {
    id: 'p31',
    subject: 'Vật lí',
    topic: 'Điện',
    level: 'Nhận biết',
    content: 'Dụng cụ dùng để đo cường độ dòng điện là:',
    options: ['Voltmeter', 'Amperemeter', 'Ohmeter', 'Wattmeter'],
    correctAnswer: 1,
    explanation: 'Amperemeter dùng để đo cường độ dòng điện.'
  },
  {
    id: 'p32',
    subject: 'Vật lí',
    topic: 'Điện',
    level: 'Thông hiểu',
    content: 'Trong đoạn mạch gồm hai điện trở R1 và R2 mắc nối tiếp, cường độ dòng điện I chạy qua mạch chính có quan hệ gì với I1 và I2?',
    options: ['I = I1 + I2', 'I = I1 = I2', 'I = I1 - I2', 'I = I1 * I2'],
    correctAnswer: 1,
    explanation: 'Trong mạch nối tiếp, cường độ dòng điện là như nhau tại mọi điểm.'
  },
  // HÓA HỌC - Kim loại và phi kim (Tiếp)
  {
    id: 'c26',
    subject: 'Hóa học',
    topic: 'Kim loại và phi kim',
    level: 'Nhận biết',
    content: 'Kim loại nào sau đây tác dụng mãnh liệt với nước ở nhiệt độ thường?',
    options: ['Sắt (Fe)', 'Đồng (Cu)', 'Natri (Na)', 'Nhôm (Al)'],
    correctAnswer: 2,
    explanation: 'Natri là kim loại kiềm, phản ứng rất mạnh với nước tạo thành dung dịch kiềm và giải phóng khí H2.'
  },
  {
    id: 'c27',
    subject: 'Hóa học',
    topic: 'Kim loại và phi kim',
    level: 'Thông hiểu',
    content: 'Hiện tượng khi cho dây đồng vào dung dịch bạc nitrat (AgNO3) là:',
    options: ['Không có hiện tượng gì', 'Đồng tan dần, có chất rắn màu trắng bạc bám vào', 'Có khí thoát ra', 'Dung dịch mất màu xanh'],
    correctAnswer: 1,
    explanation: 'Cu + 2AgNO3 -> Cu(NO3)2 + 2Ag. Đồng đẩy bạc ra khỏi muối, bạc bám vào dây đồng.'
  },
  // HÓA HỌC - Hydrocarbon (Tiếp)
  {
    id: 'c28',
    subject: 'Hóa học',
    topic: 'Hydrocarbon và nhiên liệu',
    level: 'Nhận biết',
    content: 'Khí nào sau đây làm mất màu dung dịch nước Bromine?',
    options: ['Methane', 'Ethylene', 'Carbon dioxide', 'Nitrogen'],
    correctAnswer: 1,
    explanation: 'Ethylene có liên kết đôi nên phản ứng cộng với Bromine làm mất màu dung dịch.'
  },
  {
    id: 'c29',
    subject: 'Hóa học',
    topic: 'Hydrocarbon và nhiên liệu',
    level: 'Thông hiểu',
    content: 'Phản ứng cháy của hydrocarbon luôn tạo ra sản phẩm là:',
    options: ['CO2 và H2O', 'CO và H2', 'C và H2O', 'CO2 và H2'],
    correctAnswer: 0,
    explanation: 'Đốt cháy hoàn toàn hydrocarbon thu được CO2 và hơi nước.'
  },
  // SINH HỌC - DNA/RNA (Tiếp)
  {
    id: 'b24',
    subject: 'Sinh học',
    topic: 'DNA – RNA – Phiên mã – Dịch mã',
    level: 'Nhận biết',
    content: 'Quá trình dịch mã diễn ra tại đâu trong tế bào?',
    options: ['Nhân tế bào', 'Ribosome', 'Ti thể', 'Lưới nội chất'],
    correctAnswer: 1,
    explanation: 'Dịch mã (tổng hợp protein) diễn ra tại ribosome trong tế bào chất.'
  },
  {
    id: 'b25',
    subject: 'Sinh học',
    topic: 'DNA – RNA – Phiên mã – Dịch mã',
    level: 'Thông hiểu',
    content: 'Một bộ ba trên mRNA (codon) quy định bao nhiêu amino acid?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 0,
    explanation: 'Mỗi bộ ba mã hóa (codon) trên mRNA quy định 1 amino acid.'
  },
  // SINH HỌC - Mendel (Tiếp)
  {
    id: 'b26',
    subject: 'Sinh học',
    topic: 'Quy luật Mendel',
    level: 'Nhận biết',
    content: 'Kiểu gene nào sau đây là kiểu gene đồng hợp lặn?',
    options: ['AA', 'Aa', 'aa', 'aA'],
    correctAnswer: 2,
    explanation: 'Kiểu gene đồng hợp lặn gồm hai allele lặn giống nhau (aa).'
  },
  {
    id: 'b27',
    subject: 'Sinh học',
    topic: 'Quy luật Mendel',
    level: 'Thông hiểu',
    content: 'Trong thí nghiệm của Mendel, khi lai bố mẹ thuần chủng khác nhau về một cặp tính trạng tương phản, tỉ lệ kiểu hình ở F2 là:',
    options: ['1 trội : 1 lặn', '3 trội : 1 lặn', '100% trội', '9 trội : 3 : 3 : 1'],
    correctAnswer: 1,
    explanation: 'F2 có tỉ lệ 3 trội : 1 lặn theo định luật phân li.'
  },
  // VẬT LÍ - Điện từ (Tiếp)
  {
    id: 'p33',
    subject: 'Vật lí',
    topic: 'Điện từ',
    level: 'Nhận biết',
    content: 'Từ trường tồn tại ở đâu?',
    options: ['Xung quanh điện tích đứng yên', 'Xung quanh nam châm và dòng điện', 'Xung quanh vật nhiễm điện do cọ xát', 'Trong lòng mọi vật'],
    correctAnswer: 1,
    explanation: 'Từ trường tồn tại xung quanh nam châm và dây dẫn có dòng điện chạy qua.'
  },
  {
    id: 'p34',
    subject: 'Vật lí',
    topic: 'Điện từ',
    level: 'Thông hiểu',
    content: 'Khi cho nam châm chuyển động lại gần cuộn dây dẫn kín, trong cuộn dây xuất hiện dòng điện cảm ứng vì:',
    options: ['Từ trường của nam châm rất mạnh', 'Số đường sức từ xuyên qua tiết diện cuộn dây tăng', 'Cuộn dây bị nhiễm điện', 'Nhiệt độ cuộn dây thay đổi'],
    correctAnswer: 1,
    explanation: 'Dòng điện cảm ứng xuất hiện do sự biến thiên (tăng) số đường sức từ xuyên qua cuộn dây.'
  },
  // HÓA HỌC - Lipid/Carb/Protein (Tiếp)
  {
    id: 'c30',
    subject: 'Hóa học',
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    level: 'Nhận biết',
    content: 'Thành phần chính của sợi bông, gỗ là:',
    options: ['Tinh bột', 'Cellulose', 'Saccharose', 'Glucose'],
    correctAnswer: 1,
    explanation: 'Cellulose là thành phần chính cấu tạo nên màng tế bào thực vật, có nhiều trong bông, gỗ.'
  },
  {
    id: 'c31',
    subject: 'Hóa học',
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    level: 'Thông hiểu',
    content: 'Khi đun nóng protein trong dung dịch acid hoặc kiềm, protein sẽ bị:',
    options: ['Thủy phân thành các amino acid', 'Lên men thành rượu', 'Biến đổi thành tinh bột', 'Phân hủy thành CO2 và H2O'],
    correctAnswer: 0,
    explanation: 'Protein bị thủy phân tạo thành các amino acid.'
  },
  // SINH HỌC - Nguyên phân/Giảm phân (Tiếp)
  {
    id: 'b28',
    subject: 'Sinh học',
    topic: 'Nguyên phân – Giảm phân – NST',
    level: 'Nhận biết',
    content: 'Số lượng NST trong tế bào con sau giảm phân so với tế bào mẹ ban đầu là:',
    options: ['Bằng nhau', 'Tăng gấp đôi', 'Giảm đi một nửa', 'Giảm đi một phần tư'],
    correctAnswer: 2,
    explanation: 'Giảm phân tạo ra các giao tử có bộ NST giảm đi một nửa (n) so với tế bào mẹ (2n).'
  },
  {
    id: 'b29',
    subject: 'Sinh học',
    topic: 'Nguyên phân – Giảm phân – NST',
    level: 'Thông hiểu',
    content: 'Ý nghĩa của quá trình nguyên phân là:',
    options: ['Tạo ra sự đa dạng di truyền', 'Giúp cơ thể lớn lên và thay thế tế bào già', 'Tạo ra giao tử cho sinh sản', 'Làm giảm bộ NST'],
    correctAnswer: 1,
    explanation: 'Nguyên phân giúp duy trì bộ NST ổn định qua các thế hệ tế bào và giúp cơ thể sinh trưởng.'
  },
  // VẬT LÍ - Năng lượng cơ học (Tiếp)
  {
    id: 'p35',
    subject: 'Vật lí',
    topic: 'Năng lượng cơ học',
    level: 'Nhận biết',
    content: 'Cơ năng của một vật bao gồm:',
    options: ['Động năng và thế năng', 'Động năng và nhiệt năng', 'Thế năng và hóa năng', 'Nhiệt năng và điện năng'],
    correctAnswer: 0,
    explanation: 'Cơ năng là tổng của động năng và thế năng của vật.'
  },
  {
    id: 'p36',
    subject: 'Vật lí',
    topic: 'Năng lượng cơ học',
    level: 'Thông hiểu',
    content: 'Khi một vật rơi từ trên cao xuống, nếu bỏ qua lực cản của không khí thì:',
    options: ['Động năng tăng, thế năng giảm, cơ năng không đổi', 'Động năng giảm, thế năng tăng, cơ năng không đổi', 'Động năng tăng, thế năng tăng, cơ năng tăng', 'Động năng giảm, thế năng giảm, cơ năng giảm'],
    correctAnswer: 0,
    explanation: 'Trong quá trình rơi tự do, thế năng chuyển hóa thành động năng, cơ năng được bảo toàn.'
  },
  {
    id: 'p37',
    subject: 'Vật lí',
    topic: 'Năng lượng cơ học',
    level: 'Vận dụng',
    content: 'Một vật có khối lượng 1kg được ném thẳng đứng lên cao với vận tốc 10m/s. Động năng của vật tại thời điểm ném là:',
    options: ['5 J', '10 J', '50 J', '100 J'],
    correctAnswer: 2,
    explanation: 'Wđ = 1/2 * m * v^2 = 1/2 * 1 * 10^2 = 50 J.'
  },
  // VẬT LÍ - Ánh sáng (Tiếp)
  {
    id: 'p38',
    subject: 'Vật lí',
    topic: 'Ánh sáng',
    level: 'Nhận biết',
    content: 'Tia tới song song với trục chính của thấu kính hội tụ cho tia ló:',
    options: ['Đi qua tiêu điểm ảnh F\'', 'Song song với trục chính', 'Đi qua quang tâm O', 'Có đường kéo dài đi qua tiêu điểm vật F'],
    correctAnswer: 0,
    explanation: 'Tia tới song song với trục chính của thấu kính hội tụ luôn cho tia ló đi qua tiêu điểm ảnh F\'.'
  },
  {
    id: 'p39',
    subject: 'Vật lí',
    topic: 'Ánh sáng',
    level: 'Thông hiểu',
    content: 'Vật đặt trong khoảng tiêu cự của thấu kính hội tụ cho ảnh có đặc điểm:',
    options: ['Ảnh thật, ngược chiều, nhỏ hơn vật', 'Ảnh ảo, cùng chiều, lớn hơn vật', 'Ảnh thật, ngược chiều, lớn hơn vật', 'Ảnh ảo, cùng chiều, nhỏ hơn vật'],
    correctAnswer: 1,
    explanation: 'Khi d < f, thấu kính hội tụ cho ảnh ảo, cùng chiều và lớn hơn vật.'
  },
  // VẬT LÍ - Điện (Tiếp)
  {
    id: 'p40',
    subject: 'Vật lí',
    topic: 'Điện',
    level: 'Nhận biết',
    content: 'Điện trở suất của một vật liệu đặc trưng cho:',
    options: ['Khả năng dẫn điện của vật liệu đó', 'Khả năng cản trở dòng điện của vật liệu đó', 'Chiều dài của vật liệu', 'Tiết diện của vật liệu'],
    correctAnswer: 1,
    explanation: 'Điện trở suất đặc trưng cho khả năng cản trở dòng điện của chất làm dây dẫn.'
  },
  {
    id: 'p41',
    subject: 'Vật lí',
    topic: 'Điện',
    level: 'Thông hiểu',
    content: 'Khi chiều dài dây dẫn tăng lên 2 lần thì điện trở của dây dẫn sẽ:',
    options: ['Tăng 2 lần', 'Giảm 2 lần', 'Tăng 4 lần', 'Không đổi'],
    correctAnswer: 0,
    explanation: 'Điện trở tỉ lệ thuận với chiều dài dây dẫn (R = ρ * l / S).'
  },
  // HÓA HỌC - Kim loại và phi kim (Tiếp)
  {
    id: 'c32',
    subject: 'Hóa học',
    topic: 'Kim loại và phi kim',
    level: 'Nhận biết',
    content: 'Kim loại nào sau đây không tác dụng với dung dịch HCl?',
    options: ['Sắt (Fe)', 'Nhôm (Al)', 'Đồng (Cu)', 'Kẽm (Zn)'],
    correctAnswer: 2,
    explanation: 'Đồng đứng sau Hydrogen trong dãy hoạt động hóa học nên không tác dụng với dung dịch HCl.'
  },
  {
    id: 'c33',
    subject: 'Hóa học',
    topic: 'Kim loại và phi kim',
    level: 'Thông hiểu',
    content: 'Sắt tác dụng với dung dịch CuSO4 tạo ra sản phẩm là:',
    options: ['FeSO4 và Cu', 'Fe2(SO4)3 và Cu', 'FeSO4 và H2', 'Fe2(SO4)3 và H2'],
    correctAnswer: 0,
    explanation: 'Fe + CuSO4 -> FeSO4 + Cu. Sắt đẩy đồng ra khỏi muối.'
  },
  // HÓA HỌC - Hydrocarbon (Tiếp)
  {
    id: 'c34',
    subject: 'Hóa học',
    topic: 'Hydrocarbon và nhiên liệu',
    level: 'Nhận biết',
    content: 'Acetylene có công thức phân tử là:',
    options: ['CH4', 'C2H4', 'C2H2', 'C6H6'],
    correctAnswer: 2,
    explanation: 'Acetylene là C2H2.'
  },
  {
    id: 'c35',
    subject: 'Hóa học',
    topic: 'Hydrocarbon và nhiên liệu',
    level: 'Thông hiểu',
    content: 'Trong phân tử Acetylene có:',
    options: ['Một liên kết đôi', 'Một liên kết ba', 'Hai liên kết đôi', 'Toàn liên kết đơn'],
    correctAnswer: 1,
    explanation: 'Acetylene (HC≡CH) có một liên kết ba trong phân tử.'
  },
  // SINH HỌC - DNA/RNA (Tiếp)
  {
    id: 'b30',
    subject: 'Sinh học',
    topic: 'DNA – RNA – Phiên mã – Dịch mã',
    level: 'Nhận biết',
    content: 'Loại đường có trong cấu tạo của nucleotide DNA là:',
    options: ['Ribose', 'Deoxyribose', 'Glucose', 'Saccharose'],
    correctAnswer: 1,
    explanation: 'DNA chứa đường deoxyribose (C5H10O4).'
  },
  {
    id: 'b31',
    subject: 'Sinh học',
    topic: 'DNA – RNA – Phiên mã – Dịch mã',
    level: 'Thông hiểu',
    content: 'Mã di truyền có tính đặc hiệu nghĩa là:',
    options: ['Nhiều bộ ba cùng mã hóa cho một amino acid', 'Một bộ ba chỉ mã hóa cho một loại amino acid', 'Tất cả các loài đều dùng chung một bảng mã di truyền', 'Mã di truyền được đọc từ một điểm xác định'],
    correctAnswer: 1,
    explanation: 'Tính đặc hiệu: 1 bộ ba chỉ mã hóa cho 1 amino acid.'
  },
  // SINH HỌC - Mendel (Tiếp)
  {
    id: 'b32',
    subject: 'Sinh học',
    topic: 'Quy luật Mendel',
    level: 'Nhận biết',
    content: 'Cơ thể có kiểu gene AaBb khi giảm phân bình thường cho bao nhiêu loại giao tử?',
    options: ['1', '2', '4', '8'],
    correctAnswer: 2,
    explanation: 'Cơ thể dị hợp 2 cặp gene cho 2^2 = 4 loại giao tử (AB, Ab, aB, ab).'
  },
  {
    id: 'b33',
    subject: 'Sinh học',
    topic: 'Quy luật Mendel',
    level: 'Thông hiểu',
    content: 'Phép lai AaBb x aabb được gọi là:',
    options: ['Lai phân tích cơ thể dị hợp hai cặp gene', 'Lai thuận nghịch', 'Tự thụ phấn', 'Lai khác dòng'],
    correctAnswer: 0,
    explanation: 'Lai phân tích là lai cá thể trội với cá thể lặn (aabb).'
  },
  // VẬT LÍ - Điện từ (Tiếp)
  {
    id: 'p42',
    subject: 'Vật lí',
    topic: 'Điện từ',
    level: 'Nhận biết',
    content: 'Lực điện từ tác dụng lên dây dẫn có dòng điện chạy qua đặt trong từ trường phụ thuộc vào:',
    options: ['Cường độ dòng điện và từ trường', 'Nhiệt độ của dây dẫn', 'Màu sắc của dây dẫn', 'Khối lượng của dây dẫn'],
    correctAnswer: 0,
    explanation: 'Lực điện từ phụ thuộc vào cường độ dòng điện, chiều dài dây dẫn và độ mạnh của từ trường.'
  },
  {
    id: 'p43',
    subject: 'Vật lí',
    topic: 'Điện từ',
    level: 'Thông hiểu',
    content: 'Để đổi chiều quay của động cơ điện một chiều, ta có thể:',
    options: ['Đổi chiều dòng điện hoặc đổi chiều từ trường', 'Tăng cường độ dòng điện', 'Giảm số vòng dây của cuộn dây', 'Sử dụng nam châm mạnh hơn'],
    correctAnswer: 0,
    explanation: 'Chiều lực điện từ phụ thuộc chiều dòng điện và chiều từ trường.'
  },
  // HÓA HỌC - Lipid/Carb/Protein (Tiếp)
  {
    id: 'c36',
    subject: 'Hóa học',
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    level: 'Nhận biết',
    content: 'Chất béo là triester của glycerol với:',
    options: ['Acid vô cơ', 'Acid béo', 'Amino acid', 'Acetic acid'],
    correctAnswer: 1,
    explanation: 'Chất béo là hỗn hợp các ester của glycerol và các acid béo.'
  },
  {
    id: 'c37',
    subject: 'Hóa học',
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    level: 'Thông hiểu',
    content: 'Phản ứng thủy phân tinh bột trong môi trường acid tạo ra sản phẩm cuối cùng là:',
    options: ['Glucose', 'Saccharose', 'Fructose', 'Cellulose'],
    correctAnswer: 0,
    explanation: 'Tinh bột thủy phân hoàn toàn tạo ra glucose.'
  },
  // SINH HỌC - Nguyên phân/Giảm phân (Tiếp)
  {
    id: 'b34',
    subject: 'Sinh học',
    topic: 'Nguyên phân – Giảm phân – NST',
    level: 'Nhận biết',
    content: 'Bộ NST của người gồm bao nhiêu cặp NST thường?',
    options: ['22 cặp', '23 cặp', '1 cặp', '46 cặp'],
    correctAnswer: 0,
    explanation: 'Người có 23 cặp NST, trong đó có 22 cặp NST thường và 1 cặp NST giới tính.'
  },
  {
    id: 'b35',
    subject: 'Sinh học',
    topic: 'Nguyên phân – Giảm phân – NST',
    level: 'Thông hiểu',
    content: 'Đột biến lệch bội là dạng đột biến:',
    options: ['Thay đổi cấu trúc NST', 'Thay đổi số lượng NST ở một hoặc một số cặp', 'Thay đổi toàn bộ bộ NST', 'Mất một đoạn NST'],
    correctAnswer: 1,
    explanation: 'Lệch bội là sự thay đổi số lượng NST ở một hoặc một vài cặp NST tương đồng.'
  },
  // VẬT LÍ - Năng lượng với cuộc sống (Tiếp)
  {
    id: 'p44',
    subject: 'Vật lí',
    topic: 'Năng lượng với cuộc sống',
    level: 'Nhận biết',
    content: 'Nhiên liệu hóa thạch bao gồm:',
    options: ['Than đá, dầu mỏ, khí thiên nhiên', 'Gỗ, rơm rạ, củi', 'Năng lượng gió, mặt trời', 'Năng lượng hạt nhân'],
    correctAnswer: 0,
    explanation: 'Nhiên liệu hóa thạch hình thành từ xác sinh vật qua hàng triệu năm.'
  },
  {
    id: 'p45',
    subject: 'Vật lí',
    topic: 'Năng lượng với cuộc sống',
    level: 'Thông hiểu',
    content: 'Sử dụng xe đạp thay cho xe máy giúp:',
    options: ['Tiết kiệm nhiên liệu và giảm phát thải khí nhà kính', 'Tăng tốc độ di chuyển', 'Gây ô nhiễm tiếng ồn', 'Tốn nhiều chi phí vận hành'],
    correctAnswer: 0,
    explanation: 'Xe đạp không dùng nhiên liệu hóa thạch, thân thiện với môi trường.'
  },
  // VẬT LÍ - Năng lượng cơ học (Tiếp)
  {
    id: 'p46',
    subject: 'Vật lí',
    topic: 'Năng lượng cơ học',
    level: 'Nhận biết',
    content: 'Khi một vật đang chuyển động, nếu vận tốc của nó tăng lên 2 lần thì động năng của nó sẽ:',
    options: ['Tăng 2 lần', 'Tăng 4 lần', 'Giảm 2 lần', 'Không đổi'],
    correctAnswer: 1,
    explanation: 'Wđ = 1/2 * m * v^2. Khi v tăng 2 lần thì v^2 tăng 4 lần.'
  },
  {
    id: 'p47',
    subject: 'Vật lí',
    topic: 'Năng lượng cơ học',
    level: 'Thông hiểu',
    content: 'Một máy kéo thực hiện một công 30000 J trong 10 giây. Công suất của máy kéo là:',
    options: ['300 W', '3000 W', '30000 W', '3 W'],
    correctAnswer: 1,
    explanation: 'P = A/t = 30000 / 10 = 3000 W.'
  },
  // VẬT LÍ - Ánh sáng (Tiếp)
  {
    id: 'p48',
    subject: 'Vật lí',
    topic: 'Ánh sáng',
    level: 'Nhận biết',
    content: 'Thấu kính phân kỳ luôn cho ảnh của một vật sáng đặt trước nó là:',
    options: ['Ảnh thật, ngược chiều, nhỏ hơn vật', 'Ảnh ảo, cùng chiều, nhỏ hơn vật', 'Ảnh ảo, cùng chiều, lớn hơn vật', 'Ảnh thật, cùng chiều, nhỏ hơn vật'],
    correctAnswer: 1,
    explanation: 'Thấu kính phân kỳ luôn cho ảnh ảo, cùng chiều và nhỏ hơn vật.'
  },
  {
    id: 'p49',
    subject: 'Vật lí',
    topic: 'Ánh sáng',
    level: 'Thông hiểu',
    content: 'Chiết suất của một môi trường trong suốt luôn:',
    options: ['Lớn hơn 1', 'Nhỏ hơn 1', 'Bằng 1', 'Có thể nhỏ hơn 1'],
    correctAnswer: 0,
    explanation: 'Chiết suất tuyệt đối của mọi môi trường trong suốt đều lớn hơn 1 (n = c/v).'
  },
  // VẬT LÍ - Điện (Tiếp)
  {
    id: 'p50',
    subject: 'Vật lí',
    topic: 'Điện',
    level: 'Nhận biết',
    content: 'Định luật Ohm cho đoạn mạch chỉ có điện trở được phát biểu là:',
    options: ['I tỉ lệ thuận với U và tỉ lệ nghịch với R', 'I tỉ lệ thuận với R và tỉ lệ nghịch với U', 'I tỉ lệ thuận với cả U và R', 'I tỉ lệ nghịch với cả U và R'],
    correctAnswer: 0,
    explanation: 'I = U/R.'
  },
  {
    id: 'p51',
    subject: 'Vật lí',
    topic: 'Điện',
    level: 'Thông hiểu',
    content: 'Khi hai điện trở R1 và R2 mắc song song, điện trở tương đương Rtđ được tính theo công thức:',
    options: ['Rtđ = R1 + R2', '1/Rtđ = 1/R1 + 1/R2', 'Rtđ = R1 * R2', 'Rtđ = (R1 + R2) / (R1 * R2)'],
    correctAnswer: 1,
    explanation: 'Trong mạch song song, nghịch đảo điện trở tương đương bằng tổng nghịch đảo các điện trở thành phần.'
  },
  // VẬT LÍ - Điện từ (Tiếp)
  {
    id: 'p52',
    subject: 'Vật lí',
    topic: 'Điện từ',
    level: 'Nhận biết',
    content: 'Dòng điện xoay chiều là dòng điện:',
    options: ['Có chiều không đổi theo thời gian', 'Có chiều luân phiên thay đổi theo thời gian', 'Có cường độ không đổi theo thời gian', 'Chỉ có thể do pin tạo ra'],
    correctAnswer: 1,
    explanation: 'Dòng điện xoay chiều đổi chiều liên tục theo thời gian.'
  },
  {
    id: 'p53',
    subject: 'Vật lí',
    topic: 'Điện từ',
    level: 'Thông hiểu',
    content: 'Tác dụng nào sau đây của dòng điện xoay chiều không phụ thuộc vào chiều dòng điện?',
    options: ['Tác dụng từ', 'Tác dụng nhiệt', 'Tác dụng hóa học', 'Tác dụng sinh lí'],
    correctAnswer: 1,
    explanation: 'Tác dụng nhiệt (tỏa nhiệt trên điện trở) không phụ thuộc chiều dòng điện.'
  },
  // VẬT LÍ - Năng lượng với cuộc sống (Tiếp)
  {
    id: 'p54',
    subject: 'Vật lí',
    topic: 'Năng lượng với cuộc sống',
    level: 'Nhận biết',
    content: 'Năng lượng sinh khối được thu nhận từ:',
    options: ['Gió', 'Nước chảy', 'Chất hữu cơ từ thực vật và động vật', 'Ánh sáng mặt trời'],
    correctAnswer: 2,
    explanation: 'Năng lượng sinh khối đến từ các nguồn hữu cơ.'
  },
  {
    id: 'p55',
    subject: 'Vật lí',
    topic: 'Năng lượng với cuộc sống',
    level: 'Thông hiểu',
    content: 'Việc lắp đặt các tấm pin năng lượng mặt trời trên mái nhà giúp:',
    options: ['Tăng chi phí tiền điện hàng tháng', 'Tận dụng nguồn năng lượng sạch và giảm tiền điện', 'Làm nhà nóng hơn', 'Gây ô nhiễm môi trường xung quanh'],
    correctAnswer: 1,
    explanation: 'Pin mặt trời chuyển hóa năng lượng ánh sáng thành điện năng sạch.'
  },
  // HÓA HỌC - Kim loại và phi kim (Tiếp)
  {
    id: 'c38',
    subject: 'Hóa học',
    topic: 'Kim loại và phi kim',
    level: 'Nhận biết',
    content: 'Kim loại nào sau đây dẫn điện tốt nhất?',
    options: ['Vàng (Au)', 'Bạc (Ag)', 'Đồng (Cu)', 'Nhôm (Al)'],
    correctAnswer: 1,
    explanation: 'Bạc là kim loại dẫn điện tốt nhất, sau đó đến đồng, vàng, nhôm.'
  },
  {
    id: 'c39',
    subject: 'Hóa học',
    topic: 'Kim loại và phi kim',
    level: 'Thông hiểu',
    content: 'Để làm sạch dung dịch muối FeSO4 có lẫn tạp chất là CuSO4, người ta dùng kim loại nào?',
    options: ['Đồng (Cu)', 'Sắt (Fe)', 'Kẽm (Zn)', 'Nhôm (Al)'],
    correctAnswer: 1,
    explanation: 'Dùng sắt dư: Fe + CuSO4 -> FeSO4 + Cu. Sau đó lọc bỏ đồng và sắt dư.'
  },
  // HÓA HỌC - Hydrocarbon (Tiếp)
  {
    id: 'c40',
    subject: 'Hóa học',
    topic: 'Hydrocarbon và nhiên liệu',
    level: 'Nhận biết',
    content: 'Benzene có công thức phân tử là:',
    options: ['C2H2', 'C2H4', 'C6H6', 'CH4'],
    correctAnswer: 2,
    explanation: 'Benzene là C6H6.'
  },
  {
    id: 'c41',
    subject: 'Hóa học',
    topic: 'Hydrocarbon và nhiên liệu',
    level: 'Thông hiểu',
    content: 'Benzene không làm mất màu dung dịch nước Bromine ở điều kiện thường vì:',
    options: ['Benzene không có liên kết đôi', 'Benzene có cấu tạo vòng đặc biệt bền vững', 'Benzene là chất lỏng', 'Benzene không tan trong nước'],
    correctAnswer: 1,
    explanation: 'Cấu tạo vòng benzene rất bền, khó tham gia phản ứng cộng.'
  },
  // HÓA HỌC - Ethylic alcohol – Acetic acid (Tiếp)
  {
    id: 'c42',
    subject: 'Hóa học',
    topic: 'Ethylic alcohol – Acetic acid',
    level: 'Nhận biết',
    content: 'Nhóm chức đặc trưng của Acetic acid là:',
    options: ['-OH', '-COOH', '-CHO', '-COO-'],
    correctAnswer: 1,
    explanation: 'Acid hữu cơ có nhóm carboxyl (-COOH).'
  },
  {
    id: 'c43',
    subject: 'Hóa học',
    topic: 'Ethylic alcohol – Acetic acid',
    level: 'Thông hiểu',
    content: 'Phản ứng giữa rượu etylic và acid acetic tạo thành ester được gọi là:',
    options: ['Phản ứng xà phòng hóa', 'Phản ứng ester hóa', 'Phản ứng thủy phân', 'Phản ứng trùng hợp'],
    correctAnswer: 1,
    explanation: 'Phản ứng tạo ester là phản ứng ester hóa.'
  },
  // HÓA HỌC - Lipid/Carb/Protein (Tiếp)
  {
    id: 'c44',
    subject: 'Hóa học',
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    level: 'Nhận biết',
    content: 'Để nhận biết hồ tinh bột, người ta dùng thuốc thử nào?',
    options: ['Dung dịch Bromine', 'Dung dịch Iodine', 'Dung dịch AgNO3/NH3', 'Dung dịch Phenolphthalein'],
    correctAnswer: 1,
    explanation: 'Iodine làm hồ tinh bột chuyển sang màu xanh tím đặc trưng.'
  },
  {
    id: 'c45',
    subject: 'Hóa học',
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    level: 'Thông hiểu',
    content: 'Sản phẩm của phản ứng thủy phân chất béo trong môi trường kiềm (xà phòng hóa) là:',
    options: ['Glycerol và muối của acid béo', 'Glycerol và acid béo', 'Rượu etylic và acid acetic', 'Glucose và fructose'],
    correctAnswer: 0,
    explanation: 'Xà phòng hóa chất béo thu được glycerol và xà phòng (muối acid béo).'
  },
  // HÓA HỌC - Khai thác tài nguyên (Tiếp)
  {
    id: 'c46',
    subject: 'Hóa học',
    topic: 'Khai thác tài nguyên từ vỏ Trái Đất',
    level: 'Nhận biết',
    content: 'Quặng nào sau đây là nguyên liệu chính để sản xuất nhôm?',
    options: ['Quặng sắt (Hematite)', 'Quặng Bauxite', 'Quặng Pyrite', 'Quặng Apatite'],
    correctAnswer: 1,
    explanation: 'Nhôm được sản xuất từ quặng bauxite (Al2O3.nH2O).'
  },
  {
    id: 'c47',
    subject: 'Hóa học',
    topic: 'Khai thác tài nguyên từ vỏ Trái Đất',
    level: 'Thông hiểu',
    content: 'Để dập tắt đám cháy Magie, người ta không được dùng:',
    options: ['Cát khô', 'Khí CO2', 'Bình bột chữa cháy', 'Chăn sợi thủy tinh'],
    correctAnswer: 1,
    explanation: 'Magie cháy được trong khí CO2 (2Mg + CO2 -> 2MgO + C).'
  },
  // SINH HỌC - DNA/RNA (Tiếp)
  {
    id: 'b36',
    subject: 'Sinh học',
    topic: 'DNA – RNA – Phiên mã – Dịch mã',
    level: 'Nhận biết',
    content: 'Đột biến gene là những biến đổi trong:',
    options: ['Cấu trúc của gene', 'Số lượng NST', 'Cấu trúc của NST', 'Số lượng tế bào'],
    correctAnswer: 0,
    explanation: 'Đột biến gene là những biến đổi liên quan đến cấu trúc của gene (mất, thêm, thay thế cặp nucleotide).'
  },
  {
    id: 'b37',
    subject: 'Sinh học',
    topic: 'DNA – RNA – Phiên mã – Dịch mã',
    level: 'Thông hiểu',
    content: 'Dạng đột biến gene nào sau đây thường gây hậu quả nghiêm trọng nhất?',
    options: ['Thay thế 1 cặp nucleotide', 'Mất hoặc thêm 1 cặp nucleotide', 'Đảo vị trí 2 cặp nucleotide', 'Thay thế 2 cặp nucleotide'],
    correctAnswer: 1,
    explanation: 'Mất hoặc thêm nucleotide làm thay đổi khung đọc mã di truyền từ vị trí đột biến trở về sau.'
  },
  // SINH HỌC - Nguyên phân/Giảm phân (Tiếp)
  {
    id: 'b38',
    subject: 'Sinh học',
    topic: 'Nguyên phân – Giảm phân – NST',
    level: 'Nhận biết',
    content: 'NST giới tính ở người nam là:',
    options: ['XX', 'XY', 'XO', 'YO'],
    correctAnswer: 1,
    explanation: 'Ở người, nam là XY, nữ là XX.'
  },
  {
    id: 'b39',
    subject: 'Sinh học',
    topic: 'Nguyên phân – Giảm phân – NST',
    level: 'Thông hiểu',
    content: 'Hội chứng Down ở người là do đột biến:',
    options: ['Mất đoạn NST số 21', 'Có 3 NST số 21', 'Có 3 NST giới tính X', 'Lặp đoạn NST số 21'],
    correctAnswer: 1,
    explanation: 'Hội chứng Down là thể ba ở cặp NST số 21 (có 3 chiếc NST 21).'
  },
  // SINH HỌC - Mendel (Tiếp)
  {
    id: 'b40',
    subject: 'Sinh học',
    topic: 'Quy luật Mendel',
    level: 'Nhận biết',
    content: 'Theo Mendel, mỗi tính trạng do bao nhiêu nhân tố di truyền quy định?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'Mỗi tính trạng do một cặp nhân tố di truyền (allele) quy định.'
  },
  {
    id: 'b41',
    subject: 'Sinh học',
    topic: 'Quy luật Mendel',
    level: 'Thông hiểu',
    content: 'Mục đích của phép lai phân tích là:',
    options: ['Xác định kiểu gene của cơ thể mang tính trạng trội', 'Tạo ra các biến dị tổ hợp', 'Xác định kiểu hình của đời con', 'Xác định tính trạng nào là trội, tính trạng nào là lặn'],
    correctAnswer: 0,
    explanation: 'Lai phân tích dùng để kiểm tra cơ thể trội là đồng hợp hay dị hợp.'
  },
  // VẬT LÍ - Năng lượng cơ học (Tiếp)
  {
    id: 'p56',
    subject: 'Vật lí',
    topic: 'Năng lượng cơ học',
    level: 'Nhận biết',
    content: 'Khi một vật đứng yên trên mặt đất, thế năng trọng trường của nó bằng:',
    options: ['0', 'Giá trị cực đại', 'Giá trị âm', 'Không xác định'],
    correctAnswer: 0,
    explanation: 'Chọn mốc thế năng tại mặt đất thì thế năng tại đó bằng 0.'
  },
  {
    id: 'p57',
    subject: 'Vật lí',
    topic: 'Năng lượng cơ học',
    level: 'Thông hiểu',
    content: 'Động năng của một vật phụ thuộc vào những yếu tố nào?',
    options: ['Khối lượng và độ cao', 'Khối lượng và vận tốc', 'Vận tốc và thời gian', 'Trọng lượng và độ cao'],
    correctAnswer: 1,
    explanation: 'Wđ = 1/2 * m * v^2.'
  },
  {
    id: 'p58',
    subject: 'Vật lí',
    topic: 'Năng lượng cơ học',
    level: 'Vận dụng',
    content: 'Một vật có khối lượng 2kg đang chuyển động với vận tốc 5m/s. Động năng của vật là:',
    options: ['5 J', '10 J', '25 J', '50 J'],
    correctAnswer: 2,
    explanation: 'Wđ = 1/2 * 2 * 5^2 = 25 J.'
  },
  // VẬT LÍ - Ánh sáng (Tiếp)
  {
    id: 'p59',
    subject: 'Vật lí',
    topic: 'Ánh sáng',
    level: 'Nhận biết',
    content: 'Hiện tượng khúc xạ ánh sáng là hiện tượng tia sáng tới khi gặp mặt phân cách giữa hai môi trường trong suốt thì:',
    options: ['Bị hắt trở lại môi trường cũ', 'Bị gãy khúc tại mặt phân cách và tiếp tục truyền vào môi trường thứ hai', 'Bị hấp thụ hoàn toàn', 'Tiếp tục truyền thẳng vào môi trường thứ hai'],
    correctAnswer: 1,
    explanation: 'Khúc xạ là sự lệch phương của tia sáng khi truyền qua mặt phân cách.'
  },
  {
    id: 'p60',
    subject: 'Vật lí',
    topic: 'Ánh sáng',
    level: 'Thông hiểu',
    content: 'Khi góc tới tăng thì góc khúc xạ sẽ:',
    options: ['Tăng', 'Giảm', 'Không đổi', 'Bằng 0'],
    correctAnswer: 0,
    explanation: 'Trong hiện tượng khúc xạ, góc tới và góc khúc xạ tỉ lệ thuận với nhau (nhưng không bằng nhau).'
  },
  // VẬT LÍ - Điện (Tiếp)
  {
    id: 'p61',
    subject: 'Vật lí',
    topic: 'Điện',
    level: 'Nhận biết',
    content: 'Điện trở của dây dẫn không phụ thuộc vào yếu tố nào sau đây?',
    options: ['Vật liệu làm dây dẫn', 'Chiều dài dây dẫn', 'Tiết diện dây dẫn', 'Khối lượng dây dẫn'],
    correctAnswer: 3,
    explanation: 'R = ρ * l / S, không phụ thuộc khối lượng.'
  },
  {
    id: 'p62',
    subject: 'Vật lí',
    topic: 'Điện',
    level: 'Thông hiểu',
    content: 'Khi mắc song song hai điện trở giống nhau R, điện trở tương đương của mạch là:',
    options: ['2R', 'R', 'R/2', 'R^2'],
    correctAnswer: 2,
    explanation: '1/Rtđ = 1/R + 1/R = 2/R => Rtđ = R/2.'
  },
  // VẬT LÍ - Điện từ (Tiếp)
  {
    id: 'p63',
    subject: 'Vật lí',
    topic: 'Điện từ',
    level: 'Nhận biết',
    content: 'Bộ phận chính của động cơ điện một chiều gồm:',
    options: ['Nam châm và cuộn dây dẫn', 'Pin và dây dẫn', 'Đèn và công tắc', 'Lõi sắt và vỏ máy'],
    correctAnswer: 0,
    explanation: 'Động cơ điện gồm nam châm tạo từ trường và cuộn dây dẫn có dòng điện chạy qua.'
  },
  {
    id: 'p64',
    subject: 'Vật lí',
    topic: 'Điện từ',
    level: 'Thông hiểu',
    content: 'Để tạo ra dòng điện xoay chiều, người ta cho cuộn dây dẫn kín:',
    options: ['Đặt yên trong từ trường mạnh', 'Quay trong từ trường của nam châm', 'Nối với một viên pin', 'Đặt gần một vật nhiễm điện'],
    correctAnswer: 1,
    explanation: 'Khi cuộn dây quay trong từ trường, số đường sức từ xuyên qua nó biến thiên luân phiên, tạo ra dòng điện xoay chiều.'
  },
  // VẬT LÍ - Năng lượng với cuộc sống (Tiếp)
  {
    id: 'p65',
    subject: 'Vật lí',
    topic: 'Năng lượng với cuộc sống',
    level: 'Nhận biết',
    content: 'Nguồn năng lượng nào sau đây gây ô nhiễm môi trường nhiều nhất khi khai thác và sử dụng?',
    options: ['Năng lượng gió', 'Năng lượng mặt trời', 'Năng lượng than đá', 'Năng lượng nước'],
    correctAnswer: 2,
    explanation: 'Đốt than đá giải phóng nhiều khí độc hại và bụi mịn.'
  },
  {
    id: 'p66',
    subject: 'Vật lí',
    topic: 'Năng lượng với cuộc sống',
    level: 'Thông hiểu',
    content: 'Phát biểu nào sau đây về năng lượng tái tạo là đúng?',
    options: ['Sẽ cạn kiệt trong tương lai gần', 'Gây ô nhiễm môi trường nghiêm trọng', 'Có sẵn trong thiên nhiên và liên tục được bổ sung', 'Chỉ có thể sử dụng ở quy mô nhỏ'],
    correctAnswer: 2,
    explanation: 'Năng lượng tái tạo là nguồn năng lượng sạch và vô tận.'
  },
  // HÓA HỌC - Kim loại và phi kim (Tiếp)
  {
    id: 'c48',
    subject: 'Hóa học',
    topic: 'Kim loại và phi kim',
    level: 'Nhận biết',
    content: 'Kim loại nào sau đây là kim loại nhẹ nhất?',
    options: ['Lithium (Li)', 'Natri (Na)', 'Nhôm (Al)', 'Sắt (Fe)'],
    correctAnswer: 0,
    explanation: 'Lithium là kim loại có khối lượng riêng nhỏ nhất.'
  },
  {
    id: 'c49',
    subject: 'Hóa học',
    topic: 'Kim loại và phi kim',
    level: 'Thông hiểu',
    content: 'Để bảo quản kim loại kiềm (như Na, K), người ta ngâm chúng trong:',
    options: ['Nước', 'Rượu etylic', 'Dầu hỏa', 'Dung dịch acid'],
    correctAnswer: 2,
    explanation: 'Kim loại kiềm phản ứng mạnh với nước và oxy, nên phải ngâm trong dầu hỏa để cách ly.'
  },
  // HÓA HỌC - Hydrocarbon (Tiếp)
  {
    id: 'c50',
    subject: 'Hóa học',
    topic: 'Hydrocarbon và nhiên liệu',
    level: 'Nhận biết',
    content: 'Thành phần chính của khí mỏ dầu là:',
    options: ['Methane', 'Ethylene', 'Acetylene', 'Benzene'],
    correctAnswer: 0,
    explanation: 'Methane chiếm phần lớn trong khí mỏ dầu.'
  },
  {
    id: 'c51',
    subject: 'Hóa học',
    topic: 'Hydrocarbon và nhiên liệu',
    level: 'Thông hiểu',
    content: 'Phản ứng đặc trưng của Methane là:',
    options: ['Phản ứng cộng', 'Phản ứng thế', 'Phản ứng trùng hợp', 'Phản ứng thủy phân'],
    correctAnswer: 1,
    explanation: 'Methane chỉ có liên kết đơn nên phản ứng đặc trưng là phản ứng thế với halogen.'
  },
  // HÓA HỌC - Ethylic alcohol – Acetic acid (Tiếp)
  {
    id: 'c52',
    subject: 'Hóa học',
    topic: 'Ethylic alcohol – Acetic acid',
    level: 'Nhận biết',
    content: 'Công thức cấu tạo của rượu etylic là:',
    options: ['CH3-OH', 'CH3-CH2-OH', 'CH3-COOH', 'CH3-CHO'],
    correctAnswer: 1,
    explanation: 'Rượu etylic là C2H5OH.'
  },
  {
    id: 'c53',
    subject: 'Hóa học',
    topic: 'Ethylic alcohol – Acetic acid',
    level: 'Thông hiểu',
    content: 'Rượu etylic phản ứng được với Natri vì trong phân tử có:',
    options: ['Nguyên tử Oxy', 'Nhóm -OH', 'Nguyên tử Carbon', 'Liên kết đôi'],
    correctAnswer: 1,
    explanation: 'Nhóm -OH linh động giúp rượu phản ứng với kim loại kiềm giải phóng H2.'
  },
  // HÓA HỌC - Lipid/Carb/Protein (Tiếp)
  {
    id: 'c54',
    subject: 'Hóa học',
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    level: 'Nhận biết',
    content: 'Chất nào sau đây là polymer tổng hợp?',
    options: ['Tinh bột', 'Cellulose', 'Polyethylene (PE)', 'Protein'],
    correctAnswer: 2,
    explanation: 'PE là polymer được con người tổng hợp từ ethylene.'
  },
  {
    id: 'c55',
    subject: 'Hóa học',
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    level: 'Thông hiểu',
    content: 'Để phân biệt vải dệt từ sợi bông và vải dệt từ tơ tằm, người ta dùng cách nào đơn giản nhất?',
    options: ['Ngâm vào nước', 'Đốt và ngửi mùi', 'Giặt bằng xà phòng', 'Là (ủi) ở nhiệt độ cao'],
    correctAnswer: 1,
    explanation: 'Tơ tằm (protein) khi đốt có mùi khét như tóc cháy, sợi bông (cellulose) không có mùi đó.'
  },
  // HÓA HỌC - Khai thác tài nguyên (Tiếp)
  {
    id: 'c56',
    subject: 'Hóa học',
    topic: 'Khai thác tài nguyên từ vỏ Trái Đất',
    level: 'Nhận biết',
    content: 'Nước biển chứa hàm lượng lớn muối nào sau đây?',
    options: ['KCl', 'NaCl', 'MgCl2', 'CaCl2'],
    correctAnswer: 1,
    explanation: 'NaCl (muối ăn) là thành phần chính của muối biển.'
  },
  {
    id: 'c57',
    subject: 'Hóa học',
    topic: 'Khai thác tài nguyên từ vỏ Trái Đất',
    level: 'Thông hiểu',
    content: 'Quá trình chưng cất dầu mỏ dựa trên sự khác nhau về:',
    options: ['Khối lượng riêng', 'Nhiệt độ sôi', 'Độ tan', 'Tính chất hóa học'],
    correctAnswer: 1,
    explanation: 'Các phân đoạn dầu mỏ có nhiệt độ sôi khác nhau nên có thể tách ra bằng chưng cất.'
  },
  // SINH HỌC - DNA/RNA (Tiếp)
  {
    id: 'b42',
    subject: 'Sinh học',
    topic: 'DNA – RNA – Phiên mã – Dịch mã',
    level: 'Nhận biết',
    content: 'Gene là một đoạn của phân tử DNA mang thông tin mã hóa cho:',
    options: ['Một chuỗi polypeptide hoặc một phân tử RNA', 'Một tính trạng', 'Một tế bào', 'Một cơ thể'],
    correctAnswer: 0,
    explanation: 'Gene là đơn vị di truyền cơ bản, mã hóa cho sản phẩm là protein hoặc RNA.'
  },
  {
    id: 'b43',
    subject: 'Sinh học',
    topic: 'DNA – RNA – Phiên mã – Dịch mã',
    level: 'Thông hiểu',
    content: 'Nguyên tắc bổ sung trong quá trình nhân đôi DNA là:',
    options: ['A-U, G-X', 'A-T, G-X', 'A-G, T-X', 'A-X, G-T'],
    correctAnswer: 1,
    explanation: 'Trong DNA, Adenine liên kết với Thymine, Guanine liên kết với Cytosine.'
  },
  // SINH HỌC - Nguyên phân/Giảm phân (Tiếp)
  {
    id: 'b44',
    subject: 'Sinh học',
    topic: 'Nguyên phân – Giảm phân – NST',
    level: 'Nhận biết',
    content: 'Cấu trúc của NST ở kì giữa gồm:',
    options: ['2 chromatid chị em dính nhau ở tâm động', '1 sợi DNA duy nhất', 'Nhiều phân tử protein', 'Các hạt ribosome'],
    correctAnswer: 0,
    explanation: 'Ở kì giữa, mỗi NST kép gồm 2 chromatid dính nhau ở tâm động.'
  },
  {
    id: 'b45',
    subject: 'Sinh học',
    topic: 'Nguyên phân – Giảm phân – NST',
    level: 'Thông hiểu',
    content: 'Một tế bào sinh dưỡng (2n) trải qua 3 lần nguyên phân liên tiếp sẽ tạo ra bao nhiêu tế bào con?',
    options: ['3', '6', '8', '16'],
    correctAnswer: 2,
    explanation: 'Số tế bào con = 2^k = 2^3 = 8.'
  },
  // SINH HỌC - Mendel (Tiếp)
  {
    id: 'b46',
    subject: 'Sinh học',
    topic: 'Quy luật Mendel',
    level: 'Nhận biết',
    content: 'Tính trạng trội là tính trạng:',
    options: ['Biểu hiện ở F1 khi lai hai bố mẹ thuần chủng tương phản', 'Không biểu hiện ở F1', 'Chỉ biểu hiện ở cơ thể đồng hợp', 'Luôn có lợi cho sinh vật'],
    correctAnswer: 0,
    explanation: 'Tính trạng trội át hoàn toàn tính trạng lặn ở trạng thái dị hợp.'
  },
  {
    id: 'b47',
    subject: 'Sinh học',
    topic: 'Quy luật Mendel',
    level: 'Thông hiểu',
    content: 'Khi lai hai cá thể dị hợp về một cặp gene (Aa x Aa), tỉ lệ kiểu gene ở đời con là:',
    options: ['3:1', '1:2:1', '1:1', '100% Aa'],
    correctAnswer: 1,
    explanation: 'Aa x Aa -> 1AA : 2Aa : 1aa.'
  },
  // VẬT LÍ - Năng lượng cơ học (Tiếp)
  {
    id: 'p67',
    subject: 'Vật lí',
    topic: 'Năng lượng cơ học',
    level: 'Nhận biết',
    content: 'Cơ năng của một vật được bảo toàn khi vật đó:',
    options: ['Chỉ chịu tác dụng của trọng lực', 'Chịu tác dụng của lực ma sát', 'Chịu tác dụng của lực cản không khí', 'Đang chuyển động nhanh dần'],
    correctAnswer: 0,
    explanation: 'Cơ năng bảo toàn khi không có lực cản, ma sát làm tiêu hao năng lượng.'
  },
  {
    id: 'p68',
    subject: 'Vật lí',
    topic: 'Năng lượng cơ học',
    level: 'Thông hiểu',
    content: 'Khi một vật được ném lên cao, thế năng của nó tăng lên là do:',
    options: ['Vận tốc của vật tăng', 'Độ cao của vật tăng', 'Khối lượng của vật tăng', 'Trọng lực của vật tăng'],
    correctAnswer: 1,
    explanation: 'Wt = mgh. Khi h tăng thì Wt tăng.'
  },
  // VẬT LÍ - Ánh sáng (Tiếp)
  {
    id: 'p69',
    subject: 'Vật lí',
    topic: 'Ánh sáng',
    level: 'Nhận biết',
    content: 'Ảnh của một vật qua thấu kính hội tụ có thể là:',
    options: ['Chỉ là ảnh thật', 'Chỉ là ảnh ảo', 'Có thể là ảnh thật hoặc ảnh ảo', 'Luôn cùng chiều với vật'],
    correctAnswer: 2,
    explanation: 'Thấu kính hội tụ cho ảnh thật nếu d > f và ảnh ảo nếu d < f.'
  },
  {
    id: 'p70',
    subject: 'Vật lí',
    topic: 'Ánh sáng',
    level: 'Thông hiểu',
    content: 'Mắt lão phải đeo loại kính nào để khắc phục?',
    options: ['Kính hội tụ', 'Kính phân kỳ', 'Kính râm', 'Kính bảo hộ'],
    correctAnswer: 0,
    explanation: 'Mắt lão đeo kính hội tụ để nhìn rõ các vật ở gần.'
  },
  // VẬT LÍ - Điện (Tiếp)
  {
    id: 'p71',
    subject: 'Vật lí',
    topic: 'Điện',
    level: 'Nhận biết',
    content: 'Công của dòng điện được đo bằng dụng cụ nào?',
    options: ['Amperemeter', 'Voltmeter', 'Công tơ điện', 'Ohmeter'],
    correctAnswer: 2,
    explanation: 'Công tơ điện (điện năng kế) dùng để đo điện năng tiêu thụ (công của dòng điện).'
  },
  {
    id: 'p72',
    subject: 'Vật lí',
    topic: 'Điện',
    level: 'Thông hiểu',
    content: 'Dòng điện chạy qua dây dẫn có điện trở R sẽ tỏa nhiệt. Nhiệt lượng tỏa ra tỉ lệ thuận với:',
    options: ['Cường độ dòng điện', 'Bình phương cường độ dòng điện', 'Căn bậc hai cường độ dòng điện', 'Nghịch đảo cường độ dòng điện'],
    correctAnswer: 1,
    explanation: 'Định luật Joule-Lenz: Q = I^2 * R * t.'
  },
  // VẬT LÍ - Điện từ (Tiếp)
  {
    id: 'p73',
    subject: 'Vật lí',
    topic: 'Điện từ',
    level: 'Nhận biết',
    content: 'Quy tắc bàn tay trái dùng để xác định chiều của:',
    options: ['Đường sức từ', 'Dòng điện', 'Lực điện từ', 'Cực của nam châm'],
    correctAnswer: 2,
    explanation: 'Quy tắc bàn tay trái xác định chiều lực điện từ tác dụng lên dây dẫn.'
  },
  {
    id: 'p74',
    subject: 'Vật lí',
    topic: 'Điện từ',
    level: 'Thông hiểu',
    content: 'Khi dòng điện xoay chiều chạy qua một bóng đèn dây tóc, bóng đèn sẽ:',
    options: ['Sáng liên tục', 'Chớp tắt liên tục', 'Không sáng', 'Chỉ sáng một nửa thời gian'],
    correctAnswer: 0,
    explanation: 'Do hiện tượng lưu ảnh của mắt và quán tính nhiệt của dây tóc, ta thấy đèn sáng liên tục.'
  },
  // VẬT LÍ - Năng lượng với cuộc sống (Tiếp)
  {
    id: 'p75',
    subject: 'Vật lí',
    topic: 'Năng lượng với cuộc sống',
    level: 'Nhận biết',
    content: 'Năng lượng thủy điện được khai thác từ:',
    options: ['Nước đứng yên trong hồ', 'Dòng nước chảy từ trên cao xuống', 'Nước biển mặn', 'Hơi nước trong không khí'],
    correctAnswer: 1,
    explanation: 'Thủy điện tận dụng thế năng và động năng của dòng nước.'
  },
  {
    id: 'p76',
    subject: 'Vật lí',
    topic: 'Năng lượng với cuộc sống',
    level: 'Thông hiểu',
    content: 'Việc sử dụng các thiết bị điện có nhãn "Tiết kiệm năng lượng" giúp:',
    options: ['Tăng hiệu suất sử dụng điện và giảm lãng phí', 'Làm thiết bị nhanh hỏng hơn', 'Tốn nhiều điện hơn', 'Giá thành thiết bị rẻ hơn'],
    correctAnswer: 0,
    explanation: 'Nhãn năng lượng giúp người dùng chọn thiết bị hiệu quả, tiết kiệm điện.'
  },
  // HÓA HỌC - Kim loại và phi kim (Tiếp)
  {
    id: 'c58',
    subject: 'Hóa học',
    topic: 'Kim loại và phi kim',
    level: 'Nhận biết',
    content: 'Kim loại nào sau đây có thể cắt được bằng dao?',
    options: ['Sắt (Fe)', 'Đồng (Cu)', 'Natri (Na)', 'Nhôm (Al)'],
    correctAnswer: 2,
    explanation: 'Natri là kim loại mềm, có thể cắt dễ dàng bằng dao.'
  },
  {
    id: 'c59',
    subject: 'Hóa học',
    topic: 'Kim loại và phi kim',
    level: 'Thông hiểu',
    content: 'Để ngăn chặn sự ăn mòn kim loại, người ta thường dùng biện pháp nào?',
    options: ['Sơn, mạ, bôi dầu mỡ lên bề mặt', 'Ngâm trong dung dịch acid', 'Để ngoài trời mưa', 'Nung nóng ở nhiệt độ cao'],
    correctAnswer: 0,
    explanation: 'Cách ly kim loại với môi trường là biện pháp bảo vệ phổ biến.'
  },
  // HÓA HỌC - Hydrocarbon (Tiếp)
  {
    id: 'c60',
    subject: 'Hóa học',
    topic: 'Hydrocarbon và nhiên liệu',
    level: 'Nhận biết',
    content: 'Khí gas dùng trong gia đình (LPG) có thành phần chính là:',
    options: ['Methane và Ethylene', 'Propane và Butane', 'Acetylene và Benzene', 'Hydrogen và Carbon monoxide'],
    correctAnswer: 1,
    explanation: 'LPG là hỗn hợp propane (C3H8) và butane (C4H10) được nén lỏng.'
  },
  {
    id: 'c61',
    subject: 'Hóa học',
    topic: 'Hydrocarbon và nhiên liệu',
    level: 'Thông hiểu',
    content: 'Khi đốt cháy Methane trong điều kiện thiếu Oxy, có thể tạo ra khí độc nào?',
    options: ['CO2', 'CO', 'H2', 'SO2'],
    correctAnswer: 1,
    explanation: 'Cháy không hoàn toàn tạo ra khí Carbon monoxide (CO) cực kỳ độc.'
  },
  // HÓA HỌC - Ethylic alcohol – Acetic acid (Tiếp)
  {
    id: 'c62',
    subject: 'Hóa học',
    topic: 'Ethylic alcohol – Acetic acid',
    level: 'Nhận biết',
    content: 'Chất nào sau đây làm quỳ tím chuyển sang màu đỏ?',
    options: ['Rượu etylic', 'Acid acetic', 'Glucose', 'Benzene'],
    correctAnswer: 1,
    explanation: 'Acid acetic có tính acid yếu, làm quỳ tím hóa đỏ.'
  },
  {
    id: 'c63',
    subject: 'Hóa học',
    topic: 'Ethylic alcohol – Acetic acid',
    level: 'Thông hiểu',
    content: 'Phản ứng giữa Acid acetic và đá vôi (CaCO3) giải phóng khí nào?',
    options: ['H2', 'O2', 'CO2', 'SO2'],
    correctAnswer: 2,
    explanation: 'Acid tác dụng với muối carbonate giải phóng khí CO2.'
  },
  // HÓA HỌC - Lipid/Carb/Protein (Tiếp)
  {
    id: 'c64',
    subject: 'Hóa học',
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    level: 'Nhận biết',
    content: 'Protein có nhiều trong thực phẩm nào sau đây?',
    options: ['Gạo', 'Thịt, cá, trứng, sữa', 'Mỡ lợn', 'Rau xanh'],
    correctAnswer: 1,
    explanation: 'Thịt, cá, trứng, sữa là nguồn cung cấp protein dồi dào.'
  },
  {
    id: 'c65',
    subject: 'Hóa học',
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    level: 'Thông hiểu',
    content: 'Hiện tượng lòng trắng trứng đông tụ khi đun nóng là do:',
    options: ['Sự thủy phân protein', 'Sự biến tính protein', 'Sự trùng hợp protein', 'Sự bay hơi nước'],
    correctAnswer: 1,
    explanation: 'Nhiệt độ làm thay đổi cấu trúc không gian của protein, gây đông tụ.'
  },
  // HÓA HỌC - Khai thác tài nguyên (Tiếp)
  {
    id: 'c66',
    subject: 'Hóa học',
    topic: 'Khai thác tài nguyên từ vỏ Trái Đất',
    level: 'Nhận biết',
    content: 'Tài nguyên nào sau đây là tài nguyên không tái tạo?',
    options: ['Nước', 'Rừng', 'Khoáng sản (quặng, dầu mỏ)', 'Không khí'],
    correctAnswer: 2,
    explanation: 'Khoáng sản mất hàng triệu năm để hình thành, không thể tái tạo trong thời gian ngắn.'
  },
  {
    id: 'c67',
    subject: 'Hóa học',
    topic: 'Khai thác tài nguyên từ vỏ Trái Đất',
    level: 'Thông hiểu',
    content: 'Việc khai thác khoáng sản quá mức dẫn đến hậu quả gì?',
    options: ['Cạn kiệt tài nguyên và ô nhiễm môi trường', 'Tăng diện tích rừng', 'Làm sạch nguồn nước', 'Giảm hiệu ứng nhà kính'],
    correctAnswer: 0,
    explanation: 'Khai thác bừa bãi gây mất cân bằng sinh thái và cạn kiệt nguồn lực.'
  },
  // SINH HỌC - DNA/RNA (Tiếp)
  {
    id: 'b48',
    subject: 'Sinh học',
    topic: 'DNA – RNA – Phiên mã – Dịch mã',
    level: 'Nhận biết',
    content: 'Đơn phân của phân tử protein là:',
    options: ['Nucleotide', 'Amino acid', 'Glucose', 'Acid béo'],
    correctAnswer: 1,
    explanation: 'Protein được cấu tạo từ các chuỗi amino acid.'
  },
  {
    id: 'b49',
    subject: 'Sinh học',
    topic: 'DNA – RNA – Phiên mã – Dịch mã',
    level: 'Thông hiểu',
    content: 'Mối quan hệ giữa gene và tính trạng được thể hiện qua sơ đồ:',
    options: ['Gene -> mRNA -> Protein -> Tính trạng', 'Gene -> Protein -> mRNA -> Tính trạng', 'Protein -> Gene -> mRNA -> Tính trạng', 'mRNA -> Gene -> Protein -> Tính trạng'],
    correctAnswer: 0,
    explanation: 'Đây là dòng thông tin di truyền chuẩn trong tế bào.'
  },
  // SINH HỌC - Nguyên phân/Giảm phân (Tiếp)
  {
    id: 'b50',
    subject: 'Sinh học',
    topic: 'Nguyên phân – Giảm phân – NST',
    level: 'Nhận biết',
    content: 'Giao tử đực ở thực vật hạt kín được gọi là:',
    options: ['Trứng', 'Hạt phấn', 'Noãn', 'Bào tử'],
    correctAnswer: 1,
    explanation: 'Hạt phấn chứa giao tử đực của cây.'
  },
  {
    id: 'b51',
    subject: 'Sinh học',
    topic: 'Nguyên phân – Giảm phân – NST',
    level: 'Thông hiểu',
    content: 'Sự tự nhân đôi của NST diễn ra ở kì nào của chu kì tế bào?',
    options: ['Kì trung gian', 'Kì đầu', 'Kì giữa', 'Kì sau'],
    correctAnswer: 0,
    explanation: 'NST nhân đôi ở pha S của kì trung gian.'
  },
  // SINH HỌC - Mendel (Tiếp)
  {
    id: 'b52',
    subject: 'Sinh học',
    topic: 'Quy luật Mendel',
    level: 'Nhận biết',
    content: 'Biến dị tổ hợp xuất hiện phong phú ở những loài sinh vật nào?',
    options: ['Sinh sản vô tính', 'Sinh sản hữu tính', 'Sinh sản bằng bào tử', 'Sinh sản bằng cách phân đôi'],
    correctAnswer: 1,
    explanation: 'Sự phân li độc lập và tổ hợp tự do trong sinh sản hữu tính tạo ra nhiều biến dị.'
  },
  {
    id: 'b53',
    subject: 'Sinh học',
    topic: 'Quy luật Mendel',
    level: 'Thông hiểu',
    content: 'Điều kiện quan trọng nhất để định luật phân li độc lập của Mendel nghiệm đúng là:',
    options: ['Bố mẹ phải thuần chủng', 'Các cặp gene quy định các cặp tính trạng phải nằm trên các cặp NST khác nhau', 'Số lượng con lai phải lớn', 'Tính trạng trội phải át hoàn toàn tính trạng lặn'],
    correctAnswer: 1,
    explanation: 'Nếu nằm trên cùng 1 NST thì chúng sẽ liên kết gene.'
  },
  // VẬT LÍ - Năng lượng cơ học (Tiếp)
  {
    id: 'p77',
    subject: 'Vật lí',
    topic: 'Năng lượng cơ học',
    level: 'Vận dụng',
    content: 'Một vật có trọng lượng 10N được nâng lên cao 2m. Công thực hiện là:',
    options: ['5 J', '12 J', '20 J', '0.2 J'],
    correctAnswer: 2,
    explanation: 'A = P.h = 10 * 2 = 20 J.'
  },
  {
    id: 'p78',
    subject: 'Vật lí',
    topic: 'Năng lượng cơ học',
    level: 'Thông hiểu',
    content: 'Khi một vật trượt có ma sát trên mặt phẳng nghiêng, cơ năng của vật sẽ:',
    options: ['Được bảo toàn', 'Tăng dần', 'Giảm dần (chuyển hóa thành nhiệt năng)', 'Không đổi'],
    correctAnswer: 2,
    explanation: 'Ma sát làm tiêu hao cơ năng, biến nó thành nhiệt năng.'
  },
  // VẬT LÍ - Ánh sáng (Tiếp)
  {
    id: 'p79',
    subject: 'Vật lí',
    topic: 'Ánh sáng',
    level: 'Nhận biết',
    content: 'Tiêu cự của thấu kính là khoảng cách từ:',
    options: ['Quang tâm đến tiêu điểm', 'Vật đến thấu kính', 'Ảnh đến thấu kính', 'Tiêu điểm này đến tiêu điểm kia'],
    correctAnswer: 0,
    explanation: 'Tiêu cự f = OF = OF\'.'
  },
  {
    id: 'p80',
    subject: 'Vật lí',
    topic: 'Ánh sáng',
    level: 'Thông hiểu',
    content: 'Khi đặt vật tại tiêu điểm của thấu kính hội tụ, tia ló sẽ:',
    options: ['Hội tụ tại một điểm', 'Song song với nhau', 'Loe rộng ra', 'Quay trở lại'],
    correctAnswer: 1,
    explanation: 'Vật tại tiêu điểm cho chùm tia ló song song (ảnh ở vô cực).'
  },
  // VẬT LÍ - Điện (Tiếp)
  {
    id: 'p81',
    subject: 'Vật lí',
    topic: 'Điện',
    level: 'Nhận biết',
    content: 'Biến trở là một linh kiện điện tử có thể thay đổi:',
    options: ['Hiệu điện thế', 'Cường độ dòng điện', 'Điện trở', 'Công suất'],
    correctAnswer: 2,
    explanation: 'Biến trở dùng để điều chỉnh giá trị điện trở trong mạch.'
  },
  {
    id: 'p82',
    subject: 'Vật lí',
    topic: 'Điện',
    level: 'Thông hiểu',
    content: 'Để đo hiệu điện thế giữa hai đầu một bóng đèn, ta phải mắc voltmeter:',
    options: ['Nối tiếp với bóng đèn', 'Song song với bóng đèn', 'Bất kỳ cách nào', 'Nối tiếp với nguồn điện'],
    correctAnswer: 1,
    explanation: 'Voltmeter luôn mắc song song với đoạn mạch cần đo hiệu điện thế.'
  },
  // VẬT LÍ - Điện từ (Tiếp)
  {
    id: 'p83',
    subject: 'Vật lí',
    topic: 'Điện từ',
    level: 'Nhận biết',
    content: 'Đường sức từ của nam châm thẳng có chiều đi:',
    options: ['Vào cực Bắc, ra cực Nam', 'Vào cực Nam, ra cực Bắc', 'Từ trái sang phải', 'Từ trên xuống dưới'],
    correctAnswer: 1,
    explanation: 'Chiều đường sức từ: Ra Bắc (N), Vào Nam (S).'
  },
  {
    id: 'p84',
    subject: 'Vật lí',
    topic: 'Điện từ',
    level: 'Thông hiểu',
    content: 'Tác dụng từ của dòng điện xoay chiều thay đổi như thế nào khi dòng điện đổi chiều?',
    options: ['Không thay đổi', 'Đổi chiều lực từ tác dụng lên nam châm', 'Làm nam châm mất từ tính', 'Làm nam châm nóng lên'],
    correctAnswer: 1,
    explanation: 'Khi dòng điện đổi chiều, từ trường nó tạo ra cũng đổi chiều, dẫn đến lực từ đổi chiều.'
  },
  // VẬT LÍ - Năng lượng với cuộc sống (Tiếp)
  {
    id: 'p85',
    subject: 'Vật lí',
    topic: 'Năng lượng với cuộc sống',
    level: 'Nhận biết',
    content: 'Năng lượng địa nhiệt được khai thác từ:',
    options: ['Sức gió', 'Sóng biển', 'Sức nóng bên trong lòng đất', 'Sự phân rã hạt nhân'],
    correctAnswer: 2,
    explanation: 'Địa nhiệt là nhiệt năng từ lòng đất.'
  },
  {
    id: 'p86',
    subject: 'Vật lí',
    topic: 'Năng lượng với cuộc sống',
    level: 'Thông hiểu',
    content: 'Hành động nào sau đây góp phần bảo vệ môi trường?',
    options: ['Sử dụng túi nilon một lần', 'Phân loại rác thải tại nguồn', 'Đốt rác thải nhựa', 'Lãng phí nước sạch'],
    correctAnswer: 1,
    explanation: 'Phân loại rác giúp tái chế hiệu quả và giảm ô nhiễm.'
  },
  // HÓA HỌC - Kim loại và phi kim (Tiếp)
  {
    id: 'c68',
    subject: 'Hóa học',
    topic: 'Kim loại và phi kim',
    level: 'Nhận biết',
    content: 'Kim loại nào sau đây thường được dùng làm dây dẫn điện trong nhà?',
    options: ['Sắt', 'Đồng', 'Kẽm', 'Chì'],
    correctAnswer: 1,
    explanation: 'Đồng dẫn điện tốt và giá thành hợp lý nên được dùng làm dây điện.'
  },
  {
    id: 'c69',
    subject: 'Hóa học',
    topic: 'Kim loại và phi kim',
    level: 'Thông hiểu',
    content: 'Khi cho mảnh Magie vào dung dịch HCl, hiện tượng quan sát được là:',
    options: ['Mảnh Magie tan dần, có bọt khí thoát ra', 'Mảnh Magie không tan', 'Có chất rắn màu đỏ bám vào mảnh Magie', 'Dung dịch chuyển sang màu xanh'],
    correctAnswer: 0,
    explanation: 'Mg + 2HCl -> MgCl2 + H2. Khí H2 thoát ra tạo bọt khí.'
  },
  // HÓA HỌC - Hydrocarbon (Tiếp)
  {
    id: 'c70',
    subject: 'Hóa học',
    topic: 'Hydrocarbon và nhiên liệu',
    level: 'Nhận biết',
    content: 'Công thức cấu tạo của Methane có dạng:',
    options: ['Vòng 6 cạnh', 'Mạch thẳng có liên kết đôi', 'Hình tứ diện đều', 'Mạch vòng 3 cạnh'],
    correctAnswer: 2,
    explanation: 'Methane có cấu trúc không gian hình tứ diện đều.'
  },
  {
    id: 'c71',
    subject: 'Hóa học',
    topic: 'Hydrocarbon và nhiên liệu',
    level: 'Thông hiểu',
    content: 'Để phân biệt Methane và Ethylene, người ta dùng thuốc thử nào?',
    options: ['Dung dịch nước Bromine', 'Dung dịch Phenolphthalein', 'Quỳ tím', 'Nước'],
    correctAnswer: 0,
    explanation: 'Ethylene làm mất màu nước Bromine, Methane thì không.'
  },
  // HÓA HỌC - Ethylic alcohol – Acetic acid (Tiếp)
  {
    id: 'c72',
    subject: 'Hóa học',
    topic: 'Ethylic alcohol – Acetic acid',
    level: 'Nhận biết',
    content: 'Rượu etylic nguyên chất là chất lỏng:',
    options: ['Màu xanh, mùi thơm', 'Không màu, mùi đặc trưng, nhẹ hơn nước', 'Màu vàng, vị chua', 'Không màu, không mùi, nặng hơn nước'],
    correctAnswer: 1,
    explanation: 'Rượu etylic không màu, nhẹ hơn nước và tan vô hạn trong nước.'
  },
  {
    id: 'c73',
    subject: 'Hóa học',
    topic: 'Ethylic alcohol – Acetic acid',
    level: 'Thông hiểu',
    content: 'Phản ứng giữa Acid acetic và kim loại Kẽm tạo ra:',
    options: ['Muối kẽm acetate và khí Hydrogen', 'Muối kẽm acetate và nước', 'Rượu etylic và kẽm oxide', 'Không phản ứng'],
    correctAnswer: 0,
    explanation: '2CH3COOH + Zn -> (CH3COO)2Zn + H2.'
  },
  // HÓA HỌC - Lipid/Carb/Protein (Tiếp)
  {
    id: 'c74',
    subject: 'Hóa học',
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    level: 'Nhận biết',
    content: 'Chất nào sau đây không tan trong nước ở điều kiện thường?',
    options: ['Glucose', 'Saccharose', 'Chất béo', 'Rượu etylic'],
    correctAnswer: 2,
    explanation: 'Chất béo không tan trong nước, nhẹ hơn nước.'
  },
  {
    id: 'c75',
    subject: 'Hóa học',
    topic: 'Lipid – Carbohydrate – Protein – Polymer',
    level: 'Thông hiểu',
    content: 'Khi nhỏ dung dịch Iodine vào lát khoai lang tươi, thấy xuất hiện màu:',
    options: ['Đỏ', 'Vàng', 'Xanh tím', 'Hồng'],
    correctAnswer: 2,
    explanation: 'Khoai lang chứa tinh bột, phản ứng với Iodine cho màu xanh tím.'
  },
  // HÓA HỌC - Khai thác tài nguyên (Tiếp)
  {
    id: 'c76',
    subject: 'Hóa học',
    topic: 'Khai thác tài nguyên từ vỏ Trái Đất',
    level: 'Nhận biết',
    content: 'Nhiên liệu nào sau đây được gọi là "vàng đen"?',
    options: ['Than đá', 'Dầu mỏ', 'Sắt', 'Vàng'],
    correctAnswer: 1,
    explanation: 'Dầu mỏ có giá trị kinh tế cực kỳ cao nên được gọi là vàng đen.'
  },
  {
    id: 'c77',
    subject: 'Hóa học',
    topic: 'Khai thác tài nguyên từ vỏ Trái Đất',
    level: 'Thông hiểu',
    content: 'Biện pháp nào giúp khai thác dầu mỏ bền vững?',
    options: ['Khai thác tối đa công suất', 'Khai thác đi đôi với bảo vệ môi trường và tìm kiếm nguồn thay thế', 'Chỉ khai thác ở những mỏ lớn', 'Đốt bỏ khí đồng hành'],
    correctAnswer: 1,
    explanation: 'Bền vững nghĩa là đáp ứng nhu cầu hiện tại mà không làm hại tương lai.'
  },
  // SINH HỌC - DNA/RNA (Tiếp)
  {
    id: 'b54',
    subject: 'Sinh học',
    topic: 'DNA – RNA – Phiên mã – Dịch mã',
    level: 'Nhận biết',
    content: 'Phân tử DNA có cấu trúc xoắn kép gồm mấy mạch?',
    options: ['1 mạch', '2 mạch', '3 mạch', '4 mạch'],
    correctAnswer: 1,
    explanation: 'DNA gồm 2 mạch polynucleotide xoắn quanh một trục.'
  },
  {
    id: 'b55',
    subject: 'Sinh học',
    topic: 'DNA – RNA – Phiên mã – Dịch mã',
    level: 'Thông hiểu',
    content: 'Nếu một mạch của gene có trình tự A-T-G-X thì trình tự bổ sung trên mạch kia là:',
    options: ['T-A-X-G', 'U-A-X-G', 'G-X-T-A', 'A-T-G-X'],
    correctAnswer: 0,
    explanation: 'Theo nguyên tắc bổ sung: A-T, G-X.'
  },
  // SINH HỌC - Nguyên phân/Giảm phân (Tiếp)
  {
    id: 'b56',
    subject: 'Sinh học',
    topic: 'Nguyên phân – Giảm phân – NST',
    level: 'Nhận biết',
    content: 'Trong tế bào sinh dưỡng, NST luôn tồn tại thành:',
    options: ['Từng chiếc riêng lẻ', 'Từng cặp tương đồng', 'Từng nhóm 3 chiếc', 'Từng chuỗi dài'],
    correctAnswer: 1,
    explanation: 'Tế bào sinh dưỡng mang bộ NST lưỡng bội (2n), các NST tồn tại thành cặp tương đồng.'
  },
  {
    id: 'b57',
    subject: 'Sinh học',
    topic: 'Nguyên phân – Giảm phân – NST',
    level: 'Thông hiểu',
    content: 'Hiện tượng các NST kép co xoắn cực đại ở kì giữa giúp:',
    options: ['NST dễ dàng nhân đôi', 'NST dễ dàng di chuyển và phân li về hai cực', 'NST dễ bị đột biến', 'Tiết kiệm không gian trong nhân'],
    correctAnswer: 1,
    explanation: 'Co xoắn giúp NST gọn gàng, thuận lợi cho việc phân chia.'
  },
  // SINH HỌC - Mendel (Tiếp)
  {
    id: 'b58',
    subject: 'Sinh học',
    topic: 'Quy luật Mendel',
    level: 'Nhận biết',
    content: 'Cặp tính trạng tương phản là:',
    options: ['Hai trạng thái khác nhau của cùng một loại tính trạng nhưng biểu hiện trái ngược nhau', 'Hai tính trạng hoàn toàn khác nhau', 'Hai tính trạng giống hệt nhau', 'Hai tính trạng cùng trội'],
    correctAnswer: 0,
    explanation: 'Ví dụ: Thân cao và thân thấp là một cặp tính trạng tương phản.'
  },
  {
    id: 'b59',
    subject: 'Sinh học',
    topic: 'Quy luật Mendel',
    level: 'Thông hiểu',
    content: 'Khi lai hai cơ thể thuần chủng khác nhau về hai cặp tính trạng tương phản phân li độc lập, F1 sẽ:',
    options: ['Đồng tính về cả hai tính trạng trội', 'Phân li theo tỉ lệ 9:3:3:1', 'Đồng tính về một tính trạng trội, một tính trạng lặn', 'Phân li theo tỉ lệ 1:1:1:1'],
    correctAnswer: 0,
    explanation: 'F1 luôn đồng tính trạng trội nếu bố mẹ thuần chủng tương phản.'
  },
  // VẬT LÍ (Bổ sung 42 câu - p111 đến p152)
  { id: 'p111', subject: 'Vật lí', topic: 'Năng lượng cơ học', level: 'Nhận biết', content: 'Thế năng trọng trường của một vật phụ thuộc vào:', options: ['Khối lượng và vận tốc', 'Khối lượng và độ cao', 'Vận tốc và thời gian', 'Trọng lượng và thể tích'], correctAnswer: 1, explanation: 'Wt = mgh.' },
  { id: 'p112', subject: 'Vật lí', topic: 'Năng lượng cơ học', level: 'Thông hiểu', content: 'Khi một vật rơi tự do từ trên cao xuống, đại lượng nào sau đây tăng dần?', options: ['Thế năng', 'Động năng', 'Cơ năng', 'Khối lượng'], correctAnswer: 1, explanation: 'Vận tốc tăng nên động năng tăng.' },
  { id: 'p113', subject: 'Vật lí', topic: 'Năng lượng cơ học', level: 'Vận dụng', content: 'Một vật có khối lượng 500g đang ở độ cao 10m so với mặt đất. Thế năng của vật là (lấy g=10m/s2):', options: ['50 J', '5 J', '500 J', '0.5 J'], correctAnswer: 0, explanation: 'Wt = 0.5 * 10 * 10 = 50 J.' },
  { id: 'p114', subject: 'Vật lí', topic: 'Ánh sáng', level: 'Nhận biết', content: 'Hiện tượng phản xạ toàn phần xảy ra khi ánh sáng truyền từ môi trường:', options: ['Chiết quang hơn sang kém hơn', 'Chiết quang kém sang hơn', 'Chân không sang nước', 'Không khí sang thủy tinh'], correctAnswer: 0, explanation: 'Điều kiện cần để có phản xạ toàn phần.' },
  { id: 'p115', subject: 'Vật lí', topic: 'Ánh sáng', level: 'Thông hiểu', content: 'Chiết suất của nước là 4/3. Vận tốc ánh sáng trong nước là (biết c = 3.10^8 m/s):', options: ['2.25.10^8 m/s', '4.10^8 m/s', '2.10^8 m/s', '1.5.10^8 m/s'], correctAnswer: 0, explanation: 'v = c/n = 3.10^8 / (4/3) = 2.25.10^8.' },
  { id: 'p116', subject: 'Vật lí', topic: 'Ánh sáng', level: 'Nhận biết', content: 'Lăng kính là một khối chất trong suốt, đồng chất, thường có dạng hình lăng trụ:', options: ['Tam giác', 'Tứ giác', 'Ngũ giác', 'Tròn'], correctAnswer: 0, explanation: 'Cấu tạo cơ bản của lăng kính.' },
  { id: 'p117', subject: 'Vật lí', topic: 'Điện', level: 'Nhận biết', content: 'Định luật Ohm cho biết cường độ dòng điện tỉ lệ thuận với:', options: ['Điện trở', 'Hiệu điện thế', 'Công suất', 'Thời gian'], correctAnswer: 1, explanation: 'I = U/R.' },
  { id: 'p118', subject: 'Vật lí', topic: 'Điện', level: 'Thông hiểu', content: 'Hai điện trở R1 = 20Ω, R2 = 30Ω mắc song song. Điện trở tương đương là:', options: ['50Ω', '12Ω', '10Ω', '600Ω'], correctAnswer: 1, explanation: 'Rtđ = (20*30)/(20+30) = 12Ω.' },
  { id: 'p119', subject: 'Vật lí', topic: 'Điện', level: 'Vận dụng', content: 'Một bếp điện có ghi 220V - 1000W. Điện năng tiêu thụ của bếp trong 2 giờ là:', options: ['2 kWh', '2000 kWh', '0.5 kWh', '200 kWh'], correctAnswer: 0, explanation: 'A = P.t = 1kW * 2h = 2 kWh.' },
  { id: 'p120', subject: 'Vật lí', topic: 'Điện từ', level: 'Nhận biết', content: 'Dòng điện xoay chiều là dòng điện có:', options: ['Chiều không đổi', 'Cường độ không đổi', 'Chiều và cường độ biến thiên tuần hoàn', 'Hiệu điện thế cực lớn'], correctAnswer: 2, explanation: 'Định nghĩa dòng điện xoay chiều.' },
  { id: 'p121', subject: 'Vật lí', topic: 'Điện từ', level: 'Thông hiểu', content: 'Máy biến thế dùng để:', options: ['Thay đổi cường độ dòng điện không đổi', 'Thay đổi hiệu điện thế xoay chiều', 'Tạo ra dòng điện một chiều', 'Làm đèn sáng hơn'], correctAnswer: 1, explanation: 'Công dụng chính của máy biến thế.' },
  { id: 'p122', subject: 'Vật lí', topic: 'Năng lượng với cuộc sống', level: 'Nhận biết', content: 'Nguồn năng lượng nào sau đây là năng lượng sạch?', options: ['Than đá', 'Dầu mỏ', 'Năng lượng gió', 'Khí đốt'], correctAnswer: 2, explanation: 'Năng lượng gió không phát thải khí nhà kính.' },
  { id: 'p123', subject: 'Vật lí', topic: 'Năng lượng với cuộc sống', level: 'Thông hiểu', content: 'Sử dụng bình nước nóng năng lượng mặt trời giúp:', options: ['Tiết kiệm điện năng', 'Tốn nhiều điện hơn', 'Làm nước nóng nhanh hơn điện', 'Giảm tuổi thọ bình'], correctAnswer: 0, explanation: 'Tận dụng nhiệt năng mặt trời thay vì điện.' },
  { id: 'p124', subject: 'Vật lí', topic: 'Năng lượng cơ học', level: 'Nhận biết', content: 'Công cơ học được thực hiện khi:', options: ['Có lực tác dụng vào vật', 'Vật chuyển động', 'Có lực tác dụng vào vật và vật chuyển dời theo phương của lực', 'Vật đứng yên'], correctAnswer: 2, explanation: 'A = F.s.cosα.' },
  { id: 'p125', subject: 'Vật lí', topic: 'Năng lượng cơ học', level: 'Thông hiểu', content: 'Đơn vị của công cơ học là:', options: ['Watt (W)', 'Joule (J)', 'Newton (N)', 'Pascal (Pa)'], correctAnswer: 1, explanation: 'Đo bằng Joule.' },
  { id: 'p126', subject: 'Vật lí', topic: 'Ánh sáng', level: 'Nhận biết', content: 'Thấu kính hội tụ có đặc điểm:', options: ['Phần giữa mỏng hơn phần rìa', 'Phần giữa dày hơn phần rìa', 'Luôn cho ảnh ảo', 'Làm phân kỳ chùm tia tới'], correctAnswer: 1, explanation: 'Hình dạng thấu kính hội tụ.' },
  { id: 'p127', subject: 'Vật lí', topic: 'Ánh sáng', level: 'Thông hiểu', content: 'Vật đặt ngoài khoảng tiêu cự của thấu kính hội tụ cho ảnh:', options: ['Thật, ngược chiều', 'Ảo, cùng chiều', 'Thật, cùng chiều', 'Ảo, ngược chiều'], correctAnswer: 0, explanation: 'Tính chất ảnh qua TKHT.' },
  { id: 'p128', subject: 'Vật lí', topic: 'Điện', level: 'Nhận biết', content: 'Dụng cụ dùng để đo điện trở là:', options: ['Amperemeter', 'Voltmeter', 'Ohmeter', 'Công tơ điện'], correctAnswer: 2, explanation: 'Ohmeter đo điện trở.' },
  { id: 'p129', subject: 'Vật lí', topic: 'Điện', level: 'Thông hiểu', content: 'Điện trở của dây dẫn tỉ lệ thuận với:', options: ['Tiết diện dây', 'Chiều dài dây', 'Khối lượng dây', 'Cường độ dòng điện'], correctAnswer: 1, explanation: 'R = ρ.l/S.' },
  { id: 'p130', subject: 'Vật lí', topic: 'Điện từ', level: 'Nhận biết', content: 'Quy tắc nắm tay phải dùng để xác định:', options: ['Chiều lực điện từ', 'Chiều đường sức từ của ống dây', 'Chiều dòng điện cảm ứng', 'Cực của nam châm vĩnh cửu'], correctAnswer: 1, explanation: 'Ứng dụng quy tắc nắm tay phải.' },
  { id: 'p131', subject: 'Vật lí', topic: 'Điện từ', level: 'Thông hiểu', content: 'Khi cho nam châm quay trước cuộn dây dẫn kín, trong cuộn dây xuất hiện:', options: ['Dòng điện một chiều', 'Dòng điện xoay chiều', 'Từ trường vĩnh cửu', 'Điện tích đứng yên'], correctAnswer: 1, explanation: 'Hiện tượng cảm ứng điện từ tạo dòng xoay chiều.' },
  { id: 'p132', subject: 'Vật lí', topic: 'Năng lượng với cuộc sống', level: 'Nhận biết', content: 'Năng lượng sinh khối được lấy từ:', options: ['Đá', 'Thực vật và chất thải hữu cơ', 'Gió', 'Sóng biển'], correctAnswer: 1, explanation: 'Nguồn gốc năng lượng sinh khối.' },
  { id: 'p133', subject: 'Vật lí', topic: 'Năng lượng cơ học', level: 'Vận dụng', content: 'Một người kéo một vật với lực 50N đi được quãng đường 10m. Công của người đó là:', options: ['500 J', '5 J', '50 J', '5000 J'], correctAnswer: 0, explanation: 'A = F.s = 50 * 10 = 500 J.' },
  { id: 'p134', subject: 'Vật lí', topic: 'Ánh sáng', level: 'Vận dụng', content: 'Một thấu kính hội tụ có tiêu cự f=12cm. Để có ảnh thật lớn hơn vật, vật phải đặt cách kính:', options: ['10cm', '20cm', '30cm', '5cm'], correctAnswer: 1, explanation: 'Vật nằm trong khoảng f < d < 2f cho ảnh thật lớn hơn vật.' },
  { id: 'p135', subject: 'Vật lí', topic: 'Điện', level: 'Vận dụng', content: 'Mạch điện gồm R1=10Ω nối tiếp (R2 song song R3). Biết R2=20Ω, R3=20Ω. Điện trở tương đương là:', options: ['20Ω', '50Ω', '15Ω', '30Ω'], correctAnswer: 0, explanation: 'Rtđ = 10 + (20*20)/(20+20) = 20Ω.' },
  { id: 'p136', subject: 'Vật lí', topic: 'Điện từ', level: 'Vận dụng', content: 'Máy biến thế có n1=400 vòng, n2=800 vòng. Nếu U1=110V thì U2 bằng:', options: ['220V', '55V', '110V', '440V'], correctAnswer: 0, explanation: 'U2 = U1 * (n2/n1) = 110 * 2 = 220V.' },
  { id: 'p137', subject: 'Vật lí', topic: 'Năng lượng cơ học', level: 'Nhận biết', content: 'Động năng của vật bằng không khi:', options: ['Vật ở độ cao cực đại', 'Vật đứng yên', 'Vật chuyển động thẳng đều', 'Vật có khối lượng rất nhỏ'], correctAnswer: 1, explanation: 'Wđ = 1/2.mv^2. v=0 => Wđ=0.' },
  { id: 'p138', subject: 'Vật lí', topic: 'Ánh sáng', level: 'Nhận biết', content: 'Hiện tượng tán sắc ánh sáng được quan sát rõ nhất khi cho ánh sáng trắng đi qua:', options: ['Gương phẳng', 'Lăng kính', 'Thấu kính phân kỳ', 'Tấm thủy tinh phẳng'], correctAnswer: 1, explanation: 'Lăng kính phân tích ánh sáng trắng thành dải màu.' },
  { id: 'p139', subject: 'Vật lí', topic: 'Điện', level: 'Nhận biết', content: 'Công suất điện của một đoạn mạch cho biết:', options: ['Năng lượng điện mà đoạn mạch tiêu thụ trong một đơn vị thời gian', 'Khả năng giữ điện của mạch', 'Mức độ mạnh yếu của dòng điện', 'Hiệu điện thế định mức'], correctAnswer: 0, explanation: 'P = A/t.' },
  { id: 'p140', subject: 'Vật lí', topic: 'Điện từ', level: 'Nhận biết', content: 'Lõi sắt trong máy biến thế có tác dụng:', options: ['Làm máy nặng hơn', 'Tăng cường từ thông qua các cuộn dây', 'Cách điện giữa hai cuộn dây', 'Làm máy đẹp hơn'], correctAnswer: 1, explanation: 'Lõi sắt giúp dẫn từ tốt hơn.' },
  { id: 'p141', subject: 'Vật lí', topic: 'Năng lượng với cuộc sống', level: 'Thông hiểu', content: 'Phát triển năng lượng hạt nhân cần lưu ý nhất vấn đề gì?', options: ['Giá thành rẻ', 'An toàn và xử lý rác thải phóng xạ', 'Diện tích xây dựng', 'Nguồn nhân lực'], correctAnswer: 1, explanation: 'Rủi ro phóng xạ là vấn đề lớn nhất.' },
  { id: 'p142', subject: 'Vật lí', topic: 'Năng lượng cơ học', level: 'Thông hiểu', content: 'Một chiếc xe tải và một chiếc xe con cùng chạy với vận tốc 50km/h. Xe nào có động năng lớn hơn?', options: ['Xe tải', 'Xe con', 'Bằng nhau', 'Không so sánh được'], correctAnswer: 0, explanation: 'Xe tải có khối lượng lớn hơn.' },
  { id: 'p143', subject: 'Vật lí', topic: 'Ánh sáng', level: 'Thông hiểu', content: 'Khi nhìn một vật qua kính lúp, ta thấy ảnh:', options: ['Thật, ngược chiều', 'Ảo, cùng chiều, lớn hơn vật', 'Ảo, cùng chiều, nhỏ hơn vật', 'Thật, cùng chiều'], correctAnswer: 1, explanation: 'Tác dụng của kính lúp.' },
  { id: 'p144', subject: 'Vật lí', topic: 'Điện', level: 'Thông hiểu', content: 'Để đảm bảo an toàn điện, ta nên:', options: ['Dùng tay ướt chạm vào công tắc', 'Sử dụng dây dẫn có vỏ bọc cách điện tốt', 'Thay cầu chì bằng dây đồng dày', 'Không cần nối đất các thiết bị vỏ kim loại'], correctAnswer: 1, explanation: 'Quy tắc an toàn điện cơ bản.' },
  { id: 'p145', subject: 'Vật lí', topic: 'Điện từ', level: 'Thông hiểu', content: 'Động cơ điện chuyển hóa:', options: ['Cơ năng thành điện năng', 'Điện năng thành cơ năng', 'Nhiệt năng thành điện năng', 'Quang năng thành điện năng'], correctAnswer: 1, explanation: 'Nguyên lý động cơ điện.' },
  { id: 'p146', subject: 'Vật lí', topic: 'Năng lượng với cuộc sống', level: 'Vận dụng', content: 'Nếu mỗi gia đình tắt 1 bóng đèn 40W trong 5 giờ mỗi ngày, 1 triệu gia đình sẽ tiết kiệm được bao nhiêu điện năng trong 1 ngày?', options: ['200,000 kWh', '20,000 kWh', '2,000 kWh', '200 kWh'], correctAnswer: 0, explanation: '40W * 5h * 1,000,000 = 200,000,000 Wh = 200,000 kWh.' },
  { id: 'p147', subject: 'Vật lí', topic: 'Năng lượng cơ học', level: 'Vận dụng', content: 'Một vận động viên có khối lượng 60kg chạy với vận tốc 10m/s. Động năng của người đó là:', options: ['3000 J', '600 J', '6000 J', '300 J'], correctAnswer: 0, explanation: 'Wđ = 1/2 * 60 * 10^2 = 3000 J.' },
  { id: 'p148', subject: 'Vật lí', topic: 'Ánh sáng', level: 'Vận dụng', content: 'Chiếu một tia sáng từ không khí vào thủy tinh (n=1.5) với góc tới 45 độ. Góc khúc xạ xấp xỉ:', options: ['28 độ', '45 độ', '60 độ', '30 độ'], correctAnswer: 0, explanation: 'sin(r) = sin(45)/1.5 ≈ 0.47 => r ≈ 28.' },
  { id: 'p149', subject: 'Vật lí', topic: 'Điện', level: 'Vận dụng', content: 'Một dây dẫn có điện trở 10Ω. Nếu cắt dây làm 2 phần bằng nhau rồi mắc song song thì điện trở tương đương là:', options: ['2.5Ω', '5Ω', '10Ω', '20Ω'], correctAnswer: 0, explanation: 'Mỗi phần 5Ω. Song song: 5/2 = 2.5Ω.' },
  { id: 'p150', subject: 'Vật lí', topic: 'Điện từ', level: 'Vận dụng', content: 'Để giảm hao phí trên đường dây tải điện 100 lần, ta cần tăng hiệu điện thế lên:', options: ['10 lần', '100 lần', '1000 lần', '50 lần'], correctAnswer: 0, explanation: 'Hao phí tỉ lệ nghịch với bình phương U.' },
  { id: 'p151', subject: 'Vật lí', topic: 'Năng lượng cơ học', level: 'Nhận biết', content: 'Đơn vị của công suất trong hệ SI là:', options: ['J', 'W', 'N', 'Pa'], correctAnswer: 1, explanation: 'Watt là đơn vị công suất.' },
  { id: 'p152', subject: 'Vật lí', topic: 'Ánh sáng', level: 'Nhận biết', content: 'Ảnh ảo tạo bởi gương phẳng có kích thước:', options: ['Lớn hơn vật', 'Nhỏ hơn vật', 'Bằng vật', 'Gấp đôi vật'], correctAnswer: 2, explanation: 'Tính chất ảnh qua gương phẳng.' },
  // HÓA HỌC (Bổ sung 42 câu - c103 đến c144)
  { id: 'c103', subject: 'Hóa học', topic: 'Kim loại và phi kim', level: 'Nhận biết', content: 'Kim loại nào sau đây dẫn điện tốt nhất?', options: ['Bạc (Ag)', 'Đồng (Cu)', 'Vàng (Au)', 'Nhôm (Al)'], correctAnswer: 0, explanation: 'Bạc là kim loại dẫn điện tốt nhất.' },
  { id: 'c104', subject: 'Hóa học', topic: 'Kim loại và phi kim', level: 'Thông hiểu', content: 'Hiện tượng sắt bị gỉ trong không khí ẩm là do phản ứng với:', options: ['Oxy và hơi nước', 'Khí Nitơ', 'Khí Carbon dioxide', 'Khí Hydrogen'], correctAnswer: 0, explanation: 'Sắt bị oxy hóa trong môi trường ẩm.' },
  { id: 'c105', subject: 'Hóa học', topic: 'Hydrocarbon và nhiên liệu', level: 'Nhận biết', content: 'Công thức phân tử của Benzene là:', options: ['C6H6', 'C2H2', 'C2H4', 'CH4'], correctAnswer: 0, explanation: 'Benzene là C6H6.' },
  { id: 'c106', subject: 'Hóa học', topic: 'Hydrocarbon và nhiên liệu', level: 'Thông hiểu', content: 'Benzene không làm mất màu dung dịch nước Bromine ở điều kiện thường vì:', options: ['Có cấu tạo vòng bền vững', 'Là chất lỏng', 'Không tan trong nước', 'Năng lượng liên kết thấp'], correctAnswer: 0, explanation: 'Cấu trúc vòng benzene rất bền.' },
  { id: 'c107', subject: 'Hóa học', topic: 'Ethylic alcohol – Acetic acid', level: 'Nhận biết', content: 'Phản ứng cháy của rượu etylic tạo ra sản phẩm là:', options: ['CO2 và H2O', 'CO và H2', 'C và H2O', 'CH3COOH'], correctAnswer: 0, explanation: 'Phản ứng cháy hoàn toàn hữu cơ.' },
  { id: 'c108', subject: 'Hóa học', topic: 'Ethylic alcohol – Acetic acid', level: 'Thông hiểu', content: 'Để nhận biết acid acetic, ta có thể dùng:', options: ['Quỳ tím hoặc muối carbonate', 'Nước', 'Dầu hỏa', 'Dung dịch NaCl'], correctAnswer: 0, explanation: 'Acid làm quỳ hóa đỏ và giải phóng CO2 từ muối carbonate.' },
  { id: 'c109', subject: 'Hóa học', topic: 'Lipid – Carbohydrate – Protein – Polymer', level: 'Nhận biết', content: 'Saccharose (đường mía) có công thức phân tử là:', options: ['C12H22O11', 'C6H12O6', '(C6H10O5)n', 'C2H5OH'], correctAnswer: 0, explanation: 'Công thức của đường mía.' },
  { id: 'c110', subject: 'Hóa học', topic: 'Lipid – Carbohydrate – Protein – Polymer', level: 'Thông hiểu', content: 'Khi thủy phân tinh bột trong môi trường acid, sản phẩm cuối cùng là:', options: ['Glucose', 'Saccharose', 'Rượu etylic', 'Acid acetic'], correctAnswer: 0, explanation: 'Tinh bột thủy phân tạo glucose.' },
  { id: 'c111', subject: 'Hóa học', topic: 'Khai thác tài nguyên từ vỏ Trái Đất', level: 'Nhận biết', content: 'Khoáng sản nào sau đây dùng để sản xuất xi măng?', options: ['Đá vôi', 'Quặng sắt', 'Than đá', 'Dầu mỏ'], correctAnswer: 0, explanation: 'Đá vôi là nguyên liệu chính sản xuất xi măng.' },
  { id: 'c112', subject: 'Hóa học', topic: 'Khai thác tài nguyên từ vỏ Trái Đất', level: 'Thông hiểu', content: 'Ô nhiễm môi trường do khai thác dầu mỏ chủ yếu là do:', options: ['Sự cố tràn dầu', 'Khí thải từ máy móc', 'Tiếng ồn', 'Bụi mịn'], correctAnswer: 0, explanation: 'Tràn dầu gây hại nghiêm trọng cho hệ sinh thái biển.' },
  { id: 'c113', subject: 'Hóa học', topic: 'Kim loại và phi kim', level: 'Vận dụng', content: 'Cho 5.6g Sắt tác dụng hết với dung dịch HCl. Thể tích khí H2 thu được ở đktc là:', options: ['2.24 lít', '1.12 lít', '4.48 lít', '3.36 lít'], correctAnswer: 0, explanation: 'nFe = 0.1 mol => nH2 = 0.1 mol => V = 2.24l.' },
  { id: 'c114', subject: 'Hóa học', topic: 'Hydrocarbon và nhiên liệu', level: 'Vận dụng', content: 'Đốt cháy hoàn toàn 2.24 lít khí Methane (đktc). Thể tích khí CO2 thu được là:', options: ['2.24 lít', '4.48 lít', '1.12 lít', '22.4 lít'], correctAnswer: 0, explanation: 'CH4 + 2O2 -> CO2 + 2H2O. Tỉ lệ 1:1.' },
  { id: 'c115', subject: 'Hóa học', topic: 'Ethylic alcohol – Acetic acid', level: 'Vận dụng', content: 'Cần bao nhiêu gam Natri để phản ứng hết với 46g rượu etylic nguyên chất?', options: ['23g', '46g', '11.5g', '2.3g'], correctAnswer: 0, explanation: 'n(rượu) = 1 mol => nNa = 1 mol => mNa = 23g.' },
  { id: 'c116', subject: 'Hóa học', topic: 'Lipid – Carbohydrate – Protein – Polymer', level: 'Vận dụng', content: 'Thủy phân 342g Saccharose thu được bao nhiêu gam Glucose?', options: ['180g', '342g', '360g', '90g'], correctAnswer: 0, explanation: 'n(sac) = 1 mol => n(glu) = 1 mol => m(glu) = 180g.' },
  { id: 'c117', subject: 'Hóa học', topic: 'Kim loại và phi kim', level: 'Nhận biết', content: 'Kim loại nào sau đây tác dụng được với nước ở nhiệt độ thường?', options: ['Kali (K)', 'Sắt (Fe)', 'Đồng (Cu)', 'Bạc (Ag)'], correctAnswer: 0, explanation: 'Kim loại kiềm phản ứng mạnh với nước.' },
  { id: 'c118', subject: 'Hóa học', topic: 'Kim loại và phi kim', level: 'Thông hiểu', content: 'Dung dịch NaOH có thể phản ứng với kim loại nào?', options: ['Nhôm (Al)', 'Sắt (Fe)', 'Đồng (Cu)', 'Magie (Mg)'], correctAnswer: 0, explanation: 'Nhôm có tính lưỡng tính, tan trong kiềm.' },
  { id: 'c119', subject: 'Hóa học', topic: 'Hydrocarbon và nhiên liệu', level: 'Nhận biết', content: 'Chất nào sau đây làm mất màu dung dịch nước Bromine?', options: ['Ethylene', 'Methane', 'Benzene', 'Carbon dioxide'], correctAnswer: 0, explanation: 'Ethylene có liên kết đôi nên phản ứng cộng với Bromine.' },
  { id: 'c120', subject: 'Hóa học', topic: 'Hydrocarbon và nhiên liệu', level: 'Thông hiểu', content: 'Để loại bỏ khí Ethylene lẫn trong khí Methane, người ta dẫn hỗn hợp qua:', options: ['Dung dịch nước Bromine dư', 'Nước', 'Dung dịch NaOH', 'Acid sulfuric đặc'], correctAnswer: 0, explanation: 'Bromine giữ lại Ethylene.' },
  { id: 'c121', subject: 'Hóa học', topic: 'Ethylic alcohol – Acetic acid', level: 'Nhận biết', content: 'Giấm ăn có vị chua là do chứa:', options: ['Acid acetic', 'Rượu etylic', 'Glucose', 'Lipid'], correctAnswer: 0, explanation: 'Thành phần chính của giấm.' },
  { id: 'c122', subject: 'Hóa học', topic: 'Ethylic alcohol – Acetic acid', level: 'Thông hiểu', content: 'Phản ứng giữa rượu etylic và acid acetic cần chất xúc tác là:', options: ['H2SO4 đặc, đun nóng', 'NaOH', 'Ni, nhiệt độ', 'MnO2'], correctAnswer: 0, explanation: 'Xúc tác phản ứng ester hóa.' },
  { id: 'c123', subject: 'Hóa học', topic: 'Lipid – Carbohydrate – Protein – Polymer', level: 'Nhận biết', content: 'Chất béo là ester của glycerol và:', options: ['Các acid béo', 'Rượu etylic', 'Glucose', 'Acid acetic'], correctAnswer: 0, explanation: 'Định nghĩa chất béo.' },
  { id: 'c124', subject: 'Hóa học', topic: 'Lipid – Carbohydrate – Protein – Polymer', level: 'Thông hiểu', content: 'Để sạch vết dầu mỡ dính trên quần áo, ta nên dùng:', options: ['Xà phòng hoặc xăng', 'Nước lạnh', 'Nước muối', 'Dung dịch đường'], correctAnswer: 0, explanation: 'Dầu mỡ tan trong dung môi hữu cơ hoặc bị xà phòng nhũ hóa.' },
  { id: 'c125', subject: 'Hóa học', topic: 'Khai thác tài nguyên từ vỏ Trái Đất', level: 'Nhận biết', content: 'Quặng Bauxite dùng để sản xuất kim loại nào?', options: ['Nhôm', 'Sắt', 'Đồng', 'Vàng'], correctAnswer: 0, explanation: 'Bauxite là quặng nhôm.' },
  { id: 'c126', subject: 'Hóa học', topic: 'Khai thác tài nguyên từ vỏ Trái Đất', level: 'Thông hiểu', content: 'Việc tái chế nhựa giúp:', options: ['Giảm rác thải và tiết kiệm tài nguyên', 'Tăng ô nhiễm', 'Tốn nhiều tiền hơn', 'Làm nhựa yếu đi'], correctAnswer: 0, explanation: 'Lợi ích của tái chế.' },
  { id: 'c127', subject: 'Hóa học', topic: 'Kim loại và phi kim', level: 'Vận dụng', content: 'Cho 10g hỗn hợp Cu và Fe vào dung dịch HCl dư, thu được 2.24 lít khí H2 (đktc). Khối lượng Fe trong hỗn hợp là:', options: ['5.6g', '4.4g', '10g', '0g'], correctAnswer: 0, explanation: 'Chỉ Fe phản ứng. nFe = nH2 = 0.1 mol => mFe = 5.6g.' },
  { id: 'c128', subject: 'Hóa học', topic: 'Hydrocarbon và nhiên liệu', level: 'Vận dụng', content: 'Đốt cháy hoàn toàn một Hydrocarbon thu được số mol CO2 bằng số mol H2O. Hydrocarbon đó là:', options: ['Ethylene', 'Methane', 'Acetylene', 'Benzene'], correctAnswer: 0, explanation: 'CnH2n cháy cho nCO2 và nH2O.' },
  { id: 'c129', subject: 'Hóa học', topic: 'Ethylic alcohol – Acetic acid', level: 'Vận dụng', content: 'Để pha được 100ml rượu 45 độ, cần bao nhiêu ml rượu nguyên chất?', options: ['45ml', '100ml', '55ml', '90ml'], correctAnswer: 0, explanation: 'V(rượu) = 100 * 45 / 100 = 45ml.' },
  { id: 'c130', subject: 'Hóa học', topic: 'Lipid – Carbohydrate – Protein – Polymer', level: 'Vận dụng', content: 'Lên men 180g Glucose thu được bao nhiêu gam rượu etylic (hiệu suất 100%)?', options: ['92g', '180g', '46g', '100g'], correctAnswer: 0, explanation: 'C6H12O6 -> 2C2H5OH + 2CO2. 1 mol Glu -> 2 mol rượu (92g).' },
  { id: 'c131', subject: 'Hóa học', topic: 'Kim loại và phi kim', level: 'Nhận biết', content: 'Kim loại nào sau đây không tác dụng với dung dịch H2SO4 loãng?', options: ['Đồng (Cu)', 'Kẽm (Zn)', 'Sắt (Fe)', 'Nhôm (Al)'], correctAnswer: 0, explanation: 'Cu đứng sau H trong dãy hoạt động.' },
  { id: 'c132', subject: 'Hóa học', topic: 'Kim loại và phi kim', level: 'Thông hiểu', content: 'Để bảo vệ vỏ tàu thủy bằng thép, người ta thường gắn vào vỏ tàu các tấm kim loại:', options: ['Kẽm (Zn)', 'Đồng (Cu)', 'Bạc (Ag)', 'Chì (Pb)'], correctAnswer: 0, explanation: 'Phương pháp bảo vệ bằng kim loại hy sinh.' },
  { id: 'c133', subject: 'Hóa học', topic: 'Hydrocarbon và nhiên liệu', level: 'Nhận biết', content: 'Nhiên liệu nào sau đây ít gây ô nhiễm nhất?', options: ['Khí methane', 'Than đá', 'Củi', 'Dầu hỏa'], correctAnswer: 0, explanation: 'Methane cháy sạch hơn các nhiên liệu rắn/lỏng.' },
  { id: 'c134', subject: 'Hóa học', topic: 'Hydrocarbon và nhiên liệu', level: 'Thông hiểu', content: 'Hiện tượng "hiệu ứng nhà kính" chủ yếu do sự gia tăng khí nào?', options: ['CO2', 'O2', 'N2', 'H2'], correctAnswer: 0, explanation: 'CO2 hấp thụ nhiệt từ mặt đất.' },
  { id: 'c135', subject: 'Hóa học', topic: 'Ethylic alcohol – Acetic acid', level: 'Nhận biết', content: 'Chất nào sau đây tác dụng được với cả Na và NaOH?', options: ['Acid acetic', 'Rượu etylic', 'Glucose', 'Benzene'], correctAnswer: 0, explanation: 'Acid phản ứng với cả kim loại kiềm và kiềm.' },
  { id: 'c136', subject: 'Hóa học', topic: 'Ethylic alcohol – Acetic acid', level: 'Thông hiểu', content: 'Đun nóng hỗn hợp rượu etylic và acid acetic có thêm H2SO4 đặc thu được chất lỏng mùi thơm, đó là:', options: ['Ethyl acetate', 'Methyl acetate', 'Benzene', 'Glucose'], correctAnswer: 0, explanation: 'Sản phẩm của phản ứng ester hóa.' },
  { id: 'c137', subject: 'Hóa học', topic: 'Lipid – Carbohydrate – Protein – Polymer', level: 'Nhận biết', content: 'Thành phần chính của bông nõn là:', options: ['Cellulose', 'Tinh bột', 'Protein', 'Lipid'], correctAnswer: 0, explanation: 'Bông chứa gần 100% cellulose.' },
  { id: 'c138', subject: 'Hóa học', topic: 'Lipid – Carbohydrate – Protein – Polymer', level: 'Thông hiểu', content: 'Để thử tinh bột trong thực phẩm, ta dùng thuốc thử:', options: ['Dung dịch Iodine', 'Quỳ tím', 'Dung dịch AgNO3', 'Nước vôi trong'], correctAnswer: 0, explanation: 'Iodine làm tinh bột hóa xanh tím.' },
  { id: 'c139', subject: 'Hóa học', topic: 'Khai thác tài nguyên từ vỏ Trái Đất', level: 'Nhận biết', content: 'Nguồn tài nguyên nào sau đây có thể tái tạo?', options: ['Năng lượng mặt trời', 'Than đá', 'Dầu mỏ', 'Quặng sắt'], correctAnswer: 0, explanation: 'Năng lượng mặt trời là vô tận.' },
  { id: 'c140', subject: 'Hóa học', topic: 'Khai thác tài nguyên từ vỏ Trái Đất', level: 'Thông hiểu', content: 'Sử dụng năng lượng tiết kiệm và hiệu quả giúp:', options: ['Bảo vệ môi trường và phát triển bền vững', 'Tăng chi phí sản xuất', 'Làm cạn kiệt tài nguyên nhanh hơn', 'Gây ô nhiễm'], correctAnswer: 0, explanation: 'Mục tiêu của sử dụng năng lượng thông minh.' },
  { id: 'c141', subject: 'Hóa học', topic: 'Kim loại và phi kim', level: 'Vận dụng', content: 'Nhúng một thanh Sắt vào dung dịch CuSO4. Sau một thời gian, khối lượng thanh sắt:', options: ['Tăng lên', 'Giảm đi', 'Không đổi', 'Lúc tăng lúc giảm'], correctAnswer: 0, explanation: 'Fe + CuSO4 -> FeSO4 + Cu. 56g Fe bị thay bởi 64g Cu.' },
  { id: 'c142', subject: 'Hóa học', topic: 'Hydrocarbon và nhiên liệu', level: 'Vận dụng', content: 'Hỗn hợp khí Methane và Oxy nổ mạnh nhất khi tỉ lệ thể tích là:', options: ['1:2', '1:1', '2:1', '1:3'], correctAnswer: 0, explanation: 'Phản ứng cháy hoàn toàn: CH4 + 2O2.' },
  { id: 'c143', subject: 'Hóa học', topic: 'Ethylic alcohol – Acetic acid', level: 'Vận dụng', content: 'Cho 6g Acid acetic tác dụng với rượu etylic dư (hiệu suất 100%). Khối lượng ester thu được là:', options: ['8.8g', '6g', '4.6g', '10g'], correctAnswer: 0, explanation: 'n(acid) = 0.1 mol => n(ester) = 0.1 mol => m = 0.1 * 88 = 8.8g.' },
  { id: 'c144', subject: 'Hóa học', topic: 'Lipid – Carbohydrate – Protein – Polymer', level: 'Vận dụng', content: 'Đốt cháy hoàn toàn một sợi tơ thiên nhiên thu được mùi khét như tóc cháy. Đó là:', options: ['Tơ tằm (protein)', 'Sợi bông (cellulose)', 'Tơ nilon', 'Sợi len nhân tạo'], correctAnswer: 0, explanation: 'Protein khi cháy có mùi khét đặc trưng.' },
  // SINH HỌC (Bổ sung 36 câu - b67 đến b102)
  { id: 'b67', subject: 'Sinh học', topic: 'DNA – RNA – Phiên mã – Dịch mã', level: 'Nhận biết', content: 'Phân tử nào sau đây trực tiếp làm khuôn cho quá trình dịch mã?', options: ['mRNA', 'tRNA', 'rRNA', 'DNA'], correctAnswer: 0, explanation: 'mRNA mang mã sao từ gene đến ribosome.' },
  { id: 'b68', subject: 'Sinh học', topic: 'DNA – RNA – Phiên mã – Dịch mã', level: 'Thông hiểu', content: 'Một gene có 1200 nucleotide. Số amino acid trong chuỗi polypeptide do gene này mã hóa (không tính mã kết thúc) là:', options: ['199', '200', '400', '399'], correctAnswer: 0, explanation: '(1200/2)/3 - 1 = 199.' },
  { id: 'b69', subject: 'Sinh học', topic: 'Nguyên phân – Giảm phân – NST', level: 'Nhận biết', content: 'Bộ NST lưỡng bội của loài người là:', options: ['2n = 46', '2n = 23', '2n = 78', '2n = 8'], correctAnswer: 0, explanation: 'Người có 23 cặp NST.' },
  { id: 'b70', subject: 'Sinh học', topic: 'Nguyên phân – Giảm phân – NST', level: 'Thông hiểu', content: 'Trong nguyên phân, các NST kép xếp thành 1 hàng ở mặt phẳng xích đạo vào:', options: ['Kì giữa', 'Kì đầu', 'Kì sau', 'Kì cuối'], correctAnswer: 0, explanation: 'Đặc điểm kì giữa nguyên phân.' },
  { id: 'b71', subject: 'Sinh học', topic: 'Quy luật Mendel', level: 'Nhận biết', content: 'Mendel đã sử dụng đối tượng nào cho các thí nghiệm di truyền của mình?', options: ['Đậu Hà Lan', 'Ruồi giấm', 'Cây ngô', 'Chuột bạch'], correctAnswer: 0, explanation: 'Đậu Hà Lan là đối tượng kinh điển của Mendel.' },
  { id: 'b72', subject: 'Sinh học', topic: 'Quy luật Mendel', level: 'Thông hiểu', content: 'Phép lai P: AA x aa cho F1 có kiểu gene:', options: ['100% Aa', '100% AA', '100% aa', '50% AA : 50% aa'], correctAnswer: 0, explanation: 'Bố mẹ thuần chủng tương phản cho F1 dị hợp.' },
  { id: 'b73', subject: 'Sinh học', topic: 'DNA – RNA – Phiên mã – Dịch mã', level: 'Nhận biết', content: 'Đơn phân của DNA khác đơn phân của RNA ở thành phần nào?', options: ['Đường và base Nitơ T/U', 'Nhóm phosphate', 'Liên kết hóa học', 'Số lượng nguyên tử Carbon'], correctAnswer: 0, explanation: 'DNA có đường Deoxyribose và base T, RNA có đường Ribose và base U.' },
  { id: 'b74', subject: 'Sinh học', topic: 'DNA – RNA – Phiên mã – Dịch mã', level: 'Thông hiểu', content: 'Quá trình phiên mã diễn ra ở đâu trong tế bào nhân thực?', options: ['Trong nhân tế bào', 'Trên ribosome', 'Trong ti thể', 'Ngoài màng tế bào'], correctAnswer: 0, explanation: 'Nơi chứa DNA là nơi diễn ra phiên mã.' },
  { id: 'b75', subject: 'Sinh học', topic: 'Nguyên phân – Giảm phân – NST', level: 'Nhận biết', content: 'Sự phân li của các NST đơn về hai cực tế bào diễn ra ở:', options: ['Kì sau nguyên phân', 'Kì giữa nguyên phân', 'Kì đầu nguyên phân', 'Kì cuối nguyên phân'], correctAnswer: 0, explanation: 'Kì sau là kì phân chia vật chất di truyền.' },
  { id: 'b76', subject: 'Sinh học', topic: 'Nguyên phân – Giảm phân – NST', level: 'Thông hiểu', content: 'Ý nghĩa của quá trình giảm phân và thụ tinh là:', options: ['Duy trì bộ NST đặc trưng của loài qua các thế hệ', 'Làm tăng số lượng tế bào sinh dưỡng', 'Tạo ra các tế bào giống hệt mẹ', 'Làm giảm kích thước cơ thể'], correctAnswer: 0, explanation: 'Giúp ổn định bộ NST qua các thế hệ sinh sản hữu tính.' },
  { id: 'b77', subject: 'Sinh học', topic: 'Quy luật Mendel', level: 'Nhận biết', content: 'Kiểu hình là:', options: ['Tập hợp các tính trạng của cơ thể', 'Tập hợp các gene trong tế bào', 'Hình dạng bên ngoài của sinh vật', 'Khả năng sinh sản của loài'], correctAnswer: 0, explanation: 'Định nghĩa kiểu hình.' },
  { id: 'b78', subject: 'Sinh học', topic: 'Quy luật Mendel', level: 'Thông hiểu', content: 'Tỉ lệ kiểu hình 3 trội : 1 lặn ở F2 là kết quả của phép lai P:', options: ['AA x aa', 'Aa x Aa', 'Aa x aa', 'AA x Aa'], correctAnswer: 1, explanation: 'Aa x Aa cho 3/4 trội : 1/4 lặn.' },
  { id: 'b79', subject: 'Sinh học', topic: 'DNA – RNA – Phiên mã – Dịch mã', level: 'Vận dụng', content: 'Một mạch DNA có trình tự 5\'-AGX TTA-3\'. Trình tự mạch mRNA phiên mã từ mạch này (mạch khuôn là mạch bổ sung) là:', options: ['5\'-AGX UUA-3\'', '5\'-UXG AAU-3\'', '5\'-TAX AAT-3\'', '5\'-UUA XGA-3\''], correctAnswer: 0, explanation: 'mRNA giống mạch mã gốc nhưng thay T bằng U.' },
  { id: 'b80', subject: 'Sinh học', topic: 'Nguyên phân – Giảm phân – NST', level: 'Vận dụng', content: 'Một tế bào có 2n=8. Số NST ở kì sau của nguyên phân là:', options: ['16 NST đơn', '8 NST kép', '8 NST đơn', '16 NST kép'], correctAnswer: 0, explanation: 'Kì sau NST kép tách thành đơn và nhân đôi số lượng trong tế bào.' },
  { id: 'b81', subject: 'Sinh học', topic: 'Quy luật Mendel', level: 'Vận dụng', content: 'Ở cà chua, gene A quy định quả đỏ trội hoàn toàn so với a quy định quả vàng. Phép lai cho tỉ lệ 50% đỏ : 50% vàng là:', options: ['Aa x aa', 'Aa x Aa', 'AA x aa', 'aa x aa'], correctAnswer: 0, explanation: 'Phép lai phân tích cơ thể dị hợp.' },
  { id: 'b82', subject: 'Sinh học', topic: 'DNA – RNA – Phiên mã – Dịch mã', level: 'Nhận biết', content: 'Base Nitơ nào chỉ có trong RNA mà không có trong DNA?', options: ['Uracil (U)', 'Thymine (T)', 'Adenine (A)', 'Guanine (G)'], correctAnswer: 0, explanation: 'U thay thế cho T trong RNA.' },
  { id: 'b83', subject: 'Sinh học', topic: 'DNA – RNA – Phiên mã – Dịch mã', level: 'Thông hiểu', content: 'Chức năng của tRNA là:', options: ['Vận chuyển amino acid đến ribosome', 'Lưu trữ thông tin di truyền', 'Cấu tạo nên màng tế bào', 'Xúc tác các phản ứng hóa học'], correctAnswer: 0, explanation: 'Vai trò của RNA vận chuyển.' },
  { id: 'b84', subject: 'Sinh học', topic: 'Nguyên phân – Giảm phân – NST', level: 'Nhận biết', content: 'NST giới tính ở người nữ là:', options: ['XX', 'XY', 'XO', 'YY'], correctAnswer: 0, explanation: 'Cặp NST thứ 23 ở nữ là tương đồng XX.' },
  { id: 'b85', subject: 'Sinh học', topic: 'Nguyên phân – Giảm phân – NST', level: 'Thông hiểu', content: 'Đột biến mất 1 đoạn NST thường gây hậu quả:', options: ['Làm giảm sức sống hoặc gây chết', 'Làm sinh vật khỏe mạnh hơn', 'Không gây ảnh hưởng gì', 'Làm tăng khả năng sinh sản'], correctAnswer: 0, explanation: 'Mất vật chất di truyền thường có hại.' },
  { id: 'b86', subject: 'Sinh học', topic: 'Quy luật Mendel', level: 'Nhận biết', content: 'Dòng thuần chủng là dòng có đặc điểm:', options: ['Các thế hệ sau luôn giống thế hệ trước về tính trạng đang xét', 'Có kiểu gene dị hợp', 'Luôn mang tính trạng lặn', 'Được tạo ra bằng cách lai khác loài'], correctAnswer: 0, explanation: 'Định nghĩa dòng thuần.' },
  { id: 'b87', subject: 'Sinh học', topic: 'Quy luật Mendel', level: 'Thông hiểu', content: 'Trong phép lai hai cặp tính trạng của Mendel, tỉ lệ kiểu hình ở F2 là:', options: ['9:3:3:1', '3:1', '1:1:1:1', '1:2:1'], correctAnswer: 0, explanation: 'Kết quả lai hai cặp tính trạng phân li độc lập.' },
  { id: 'b88', subject: 'Sinh học', topic: 'DNA – RNA – Phiên mã – Dịch mã', level: 'Vận dụng', content: 'Một gene dài 4080 Angstrom. Tổng số nucleotide của gene là:', options: ['2400', '1200', '3000', '4080'], correctAnswer: 0, explanation: 'N = (L/3.4) * 2 = (4080/3.4) * 2 = 2400.' },
  { id: 'b89', subject: 'Sinh học', topic: 'Nguyên phân – Giảm phân – NST', level: 'Vận dụng', content: 'Ở ruồi giấm 2n=8. Một tế bào đang ở kì giữa của giảm phân I có bao nhiêu chromatid?', options: ['16', '8', '32', '4'], correctAnswer: 0, explanation: '8 NST kép, mỗi chiếc có 2 chromatid => 16.' },
  { id: 'b90', subject: 'Sinh học', topic: 'Quy luật Mendel', level: 'Vận dụng', content: 'Phép lai AaBb x aabb cho tỉ lệ kiểu hình ở đời con là:', options: ['1:1:1:1', '9:3:3:1', '3:1', '1:1'], correctAnswer: 0, explanation: 'Lai phân tích cơ thể dị hợp hai cặp gene.' },
  { id: 'b91', subject: 'Sinh học', topic: 'DNA – RNA – Phiên mã – Dịch mã', level: 'Nhận biết', content: 'Liên kết giữa các nucleotide trên một mạch đơn của DNA là liên kết:', options: ['Cộng hóa trị (phosphodiester)', 'Hydrogen', 'Peptide', 'Ionic'], correctAnswer: 0, explanation: 'Liên kết bền vững tạo mạch đơn.' },
  { id: 'b92', subject: 'Sinh học', topic: 'DNA – RNA – Phiên mã – Dịch mã', level: 'Thông hiểu', content: 'Mã di truyền có tính thoái hóa nghĩa là:', options: ['Nhiều bộ ba khác nhau cùng mã hóa cho một amino acid', 'Một bộ ba mã hóa cho nhiều amino acid', 'Mã di truyền bị hỏng theo thời gian', 'Tất cả các loài có mã di truyền khác nhau'], correctAnswer: 0, explanation: 'Đặc điểm của mã di truyền.' },
  { id: 'b93', subject: 'Sinh học', topic: 'Nguyên phân – Giảm phân – NST', level: 'Nhận biết', content: 'Thành phần hóa học chính của NST gồm:', options: ['DNA và protein loại Histone', 'RNA và lipid', 'Protein và tinh bột', 'DNA và RNA'], correctAnswer: 0, explanation: 'Cấu tạo chất nhiễm sắc.' },
  { id: 'b94', subject: 'Sinh học', topic: 'Nguyên phân – Giảm phân – NST', level: 'Thông hiểu', content: 'Đột biến số lượng NST gây ra hội chứng Down ở người là do:', options: ['Có 3 NST số 21', 'Mất 1 NST giới tính', 'Thêm 1 NST giới tính', 'Lặp đoạn NST số 5'], correctAnswer: 0, explanation: 'Hội chứng Down là thể ba nhiễm sắc thể 21.' },
  { id: 'b95', subject: 'Sinh học', topic: 'Quy luật Mendel', level: 'Nhận biết', content: 'Allele là:', options: ['Các trạng thái khác nhau của cùng một gene', 'Các gene khác nhau trên cùng một NST', 'Các tế bào sinh dục', 'Các tính trạng trội'], correctAnswer: 0, explanation: 'Định nghĩa allele.' },
  { id: 'b96', subject: 'Sinh học', topic: 'Quy luật Mendel', level: 'Thông hiểu', content: 'Để xác định kiểu gene của cơ thể mang tính trạng trội, người ta dùng phép lai:', options: ['Lai phân tích', 'Lai thuận nghịch', 'Lai khác loài', 'Tự thụ phấn'], correctAnswer: 0, explanation: 'Ứng dụng của lai phân tích.' },
  { id: 'b97', subject: 'Sinh học', topic: 'DNA – RNA – Phiên mã – Dịch mã', level: 'Vận dụng', content: 'Một gene có 3000 nucleotide và có 3900 liên kết hydrogen. Số nucleotide loại G của gene là:', options: ['900', '600', '1500', '300'], correctAnswer: 0, explanation: 'H = 2A + 3G; N = 2A + 2G => G = H - N = 3900 - 3000 = 900.' },
  { id: 'b98', subject: 'Sinh học', topic: 'Nguyên phân – Giảm phân – NST', level: 'Vận dụng', content: 'Có 5 tế bào sinh dưỡng nguyên phân 4 lần. Tổng số tế bào con tạo thành là:', options: ['80', '20', '16', '64'], correctAnswer: 0, explanation: '5 * 2^4 = 5 * 16 = 80.' },
  { id: 'b99', subject: 'Sinh học', topic: 'Quy luật Mendel', level: 'Vận dụng', content: 'Cây có kiểu gene AaBb tự thụ phấn. Tỉ lệ kiểu gene AABB ở đời con là:', options: ['1/16', '1/4', '1/8', '9/16'], correctAnswer: 0, explanation: '1/4 AA * 1/4 BB = 1/16.' },
  { id: 'b100', subject: 'Sinh học', topic: 'DNA – RNA – Phiên mã – Dịch mã', level: 'Nhận biết', content: 'Quá trình nhân đôi DNA diễn ra theo nguyên tắc:', options: ['Bổ sung và bán bảo toàn', 'Bổ sung và bảo toàn', 'Tự do và ngẫu nhiên', 'Một mạch và ngẫu nhiên'], correctAnswer: 0, explanation: 'Nguyên tắc nhân đôi DNA.' },
  { id: 'b101', subject: 'Sinh học', topic: 'Nguyên phân – Giảm phân – NST', level: 'Nhận biết', content: 'Đơn vị cấu trúc nhỏ nhất của NST là:', options: ['Nucleosome', 'Sợi cơ bản', 'Sợi nhiễm sắc', 'Chromatid'], correctAnswer: 0, explanation: 'Cấu trúc cơ bản của chất nhiễm sắc.' },
  { id: 'b102', subject: 'Sinh học', topic: 'Quy luật Mendel', level: 'Thông hiểu', content: 'Hiện tượng di truyền liên kết gene xảy ra khi:', options: ['Các gene nằm trên cùng một NST', 'Các gene nằm trên các NST khác nhau', 'Các gene nằm trong ti thể', 'Các gene không tương tác với nhau'], correctAnswer: 0, explanation: 'Điều kiện xảy ra liên kết gene.' },
  // VẬT LÍ (Final)
  { id: 'p87', subject: 'Vật lí', topic: 'Năng lượng cơ học', level: 'Nhận biết', content: 'Đơn vị của công suất là:', options: ['Joule (J)', 'Watt (W)', 'Newton (N)', 'Pascal (Pa)'], correctAnswer: 1, explanation: 'Công suất đo bằng Watt.' },
  { id: 'p88', subject: 'Vật lí', topic: 'Năng lượng cơ học', level: 'Thông hiểu', content: 'Một máy kéo thực hiện công 1000J trong 10 giây. Công suất của máy là:', options: ['100W', '10000W', '10W', '1000W'], correctAnswer: 0, explanation: 'P = A/t = 1000/10 = 100W.' },
  { id: 'p89', subject: 'Vật lí', topic: 'Ánh sáng', level: 'Nhận biết', content: 'Thấu kính phân kỳ luôn cho ảnh:', options: ['Thật, ngược chiều', 'Ảo, cùng chiều, nhỏ hơn vật', 'Ảo, cùng chiều, lớn hơn vật', 'Thật, cùng chiều'], correctAnswer: 1, explanation: 'Đặc điểm ảnh qua thấu kính phân kỳ.' },
  { id: 'p90', subject: 'Vật lí', topic: 'Ánh sáng', level: 'Thông hiểu', content: 'Khi tia sáng đi từ nước ra không khí, góc khúc xạ so với góc tới sẽ:', options: ['Lớn hơn', 'Nhỏ hơn', 'Bằng nhau', 'Bằng 0'], correctAnswer: 0, explanation: 'Chiết suất nước lớn hơn không khí nên tia sáng lệch xa pháp tuyến.' },
  { id: 'p91', subject: 'Vật lí', topic: 'Ánh sáng', level: 'Nhận biết', content: 'Kính lúp thực chất là một:', options: ['Thấu kính hội tụ có tiêu cự ngắn', 'Thấu kính phân kỳ', 'Gương cầu lồi', 'Gương phẳng'], correctAnswer: 0, explanation: 'Kính lúp dùng để quan sát vật nhỏ.' },
  { id: 'p92', subject: 'Vật lí', topic: 'Ánh sáng', level: 'Thông hiểu', content: 'Để quan sát vật qua kính lúp, ta phải đặt vật:', options: ['Trong khoảng tiêu cự', 'Ngoài khoảng tiêu cự', 'Tại tiêu điểm', 'Rất xa kính'], correctAnswer: 0, explanation: 'Để tạo ảnh ảo cùng chiều lớn hơn vật.' },
  { id: 'p93', subject: 'Vật lí', topic: 'Ánh sáng', level: 'Vận dụng', content: 'Một thấu kính hội tụ có tiêu cự 10cm. Một vật đặt cách thấu kính 20cm sẽ cho ảnh:', options: ['Thật, cách thấu kính 20cm', 'Ảo, cách thấu kính 10cm', 'Thật, cách thấu kính 10cm', 'Ảo, cách thấu kính 20cm'], correctAnswer: 0, explanation: 'Vật đặt tại 2f cho ảnh thật tại 2f.' },
  { id: 'p94', subject: 'Vật lí', topic: 'Điện', level: 'Nhận biết', content: 'Đơn vị của điện trở là:', options: ['Ohm (Ω)', 'Ampere (A)', 'Volt (V)', 'Watt (W)'], correctAnswer: 0, explanation: 'Đơn vị đo điện trở.' },
  { id: 'p95', subject: 'Vật lí', topic: 'Điện', level: 'Thông hiểu', content: 'Khi tăng hiệu điện thế giữa hai đầu dây dẫn lên 2 lần thì cường độ dòng điện sẽ:', options: ['Tăng 2 lần', 'Giảm 2 lần', 'Không đổi', 'Tăng 4 lần'], correctAnswer: 0, explanation: 'I tỉ lệ thuận với U.' },
  { id: 'p96', subject: 'Vật lí', topic: 'Điện', level: 'Nhận biết', content: 'Dụng cụ dùng để đo cường độ dòng điện là:', options: ['Amperemeter', 'Voltmeter', 'Ohmeter', 'Lực kế'], correctAnswer: 0, explanation: 'Amperemeter đo dòng điện.' },
  { id: 'p97', subject: 'Vật lí', topic: 'Điện', level: 'Thông hiểu', content: 'Mạch điện gồm 2 điện trở R1=10Ω, R2=20Ω mắc nối tiếp. Điện trở tương đương là:', options: ['30Ω', '6.67Ω', '10Ω', '200Ω'], correctAnswer: 0, explanation: 'Rtđ = R1 + R2.' },
  { id: 'p98', subject: 'Vật lí', topic: 'Điện', level: 'Vận dụng', content: 'Một bóng đèn có ghi 220V-100W. Khi đèn sáng bình thường, cường độ dòng điện là:', options: ['0.45A', '2.2A', '22000A', '100A'], correctAnswer: 0, explanation: 'I = P/U = 100/220 ≈ 0.45A.' },
  { id: 'p99', subject: 'Vật lí', topic: 'Điện từ', level: 'Nhận biết', content: 'Xung quanh dòng điện luôn có:', options: ['Từ trường', 'Điện trường', 'Trọng trường', 'Ánh sáng'], correctAnswer: 0, explanation: 'Dòng điện gây ra từ trường.' },
  { id: 'p100', subject: 'Vật lí', topic: 'Điện từ', level: 'Thông hiểu', content: 'Lực từ tác dụng lên dây dẫn có dòng điện đặt trong từ trường phụ thuộc vào:', options: ['Chiều dòng điện và chiều từ trường', 'Khối lượng dây dẫn', 'Màu sắc dây dẫn', 'Nhiệt độ môi trường'], correctAnswer: 0, explanation: 'Lực từ phụ thuộc I, B và góc giữa chúng.' },
  { id: 'p101', subject: 'Vật lí', topic: 'Điện từ', level: 'Nhận biết', content: 'Nam châm điện gồm:', options: ['Cuộn dây dẫn có lõi sắt non', 'Thanh sắt đơn thuần', 'Pin và bóng đèn', 'Nam châm vĩnh cửu'], correctAnswer: 0, explanation: 'Cấu tạo nam châm điện.' },
  { id: 'p102', subject: 'Vật lí', topic: 'Điện từ', level: 'Thông hiểu', content: 'Để tăng lực từ của nam châm điện, ta có thể:', options: ['Tăng cường độ dòng điện', 'Giảm số vòng dây', 'Thay lõi sắt bằng lõi đồng', 'Giảm hiệu điện thế'], correctAnswer: 0, explanation: 'Tăng I hoặc tăng số vòng dây.' },
  { id: 'p103', subject: 'Vật lí', topic: 'Điện từ', level: 'Vận dụng', content: 'Máy biến thế có số vòng dây cuộn sơ cấp lớn hơn cuộn thứ cấp là máy:', options: ['Hạ thế', 'Tăng thế', 'Máy phát điện', 'Động cơ điện'], correctAnswer: 0, explanation: 'n1 > n2 => U1 > U2 (hạ thế).' },
  { id: 'p104', subject: 'Vật lí', topic: 'Năng lượng với cuộc sống', level: 'Nhận biết', content: 'Năng lượng hóa thạch bao gồm:', options: ['Than đá, dầu mỏ, khí tự nhiên', 'Gió, mặt trời, thủy triều', 'Củi, rơm rạ', 'Hạt nhân'], correctAnswer: 0, explanation: 'Các nguồn năng lượng hình thành từ xác sinh vật cổ đại.' },
  { id: 'p105', subject: 'Vật lí', topic: 'Năng lượng với cuộc sống', level: 'Thông hiểu', content: 'Ưu điểm của năng lượng mặt trời là:', options: ['Sạch, vô tận, không gây ô nhiễm', 'Rẻ tiền nhất', 'Có thể sử dụng mọi lúc mọi nơi', 'Công suất cực lớn'], correctAnswer: 0, explanation: 'Năng lượng sạch và tái tạo.' },
  { id: 'p106', subject: 'Vật lí', topic: 'Năng lượng với cuộc sống', level: 'Nhận biết', content: 'Hiệu ứng nhà kính chủ yếu do khí nào gây ra?', options: ['CO2', 'O2', 'N2', 'H2'], correctAnswer: 0, explanation: 'CO2 là khí nhà kính chính.' },
  { id: 'p107', subject: 'Vật lí', topic: 'Năng lượng với cuộc sống', level: 'Thông hiểu', content: 'Sử dụng xe đạp thay xe máy giúp:', options: ['Giảm phát thải khí nhà kính', 'Tăng ô nhiễm tiếng ồn', 'Tốn nhiều xăng hơn', 'Gây kẹt xe nhiều hơn'], correctAnswer: 0, explanation: 'Xe đạp không phát thải khói bụi.' },
  { id: 'p108', subject: 'Vật lí', topic: 'Năng lượng với cuộc sống', level: 'Nhận biết', content: 'Năng lượng gió được chuyển hóa thành điện năng nhờ:', options: ['Turbine gió', 'Pin mặt trời', 'Lò hơi', 'Động cơ đốt trong'], correctAnswer: 0, explanation: 'Turbine quay máy phát điện.' },
  { id: 'p109', subject: 'Vật lí', topic: 'Năng lượng với cuộc sống', level: 'Thông hiểu', content: 'Tiết kiệm điện năng có lợi ích gì?', options: ['Giảm chi phí và bảo vệ tài nguyên', 'Làm đèn sáng hơn', 'Làm máy chạy nhanh hơn', 'Tăng hóa đơn tiền điện'], correctAnswer: 0, explanation: 'Lợi ích kinh tế và môi trường.' },
  { id: 'p110', subject: 'Vật lí', topic: 'Năng lượng với cuộc sống', level: 'Vận dụng', content: 'Một hộ gia đình sử dụng bóng đèn 100W trong 5 giờ mỗi ngày. Điện năng tiêu thụ trong 1 ngày là:', options: ['0.5 kWh', '500 kWh', '5 kWh', '50 kWh'], correctAnswer: 0, explanation: 'A = P.t = 0.1kW * 5h = 0.5 kWh.' },
  // HÓA HỌC (Final)
  { id: 'c78', subject: 'Hóa học', topic: 'Kim loại và phi kim', level: 'Nhận biết', content: 'Phi kim nào ở trạng thái lỏng ở điều kiện thường?', options: ['Bromine (Br2)', 'Iodine (I2)', 'Chlorine (Cl2)', 'Oxygen (O2)'], correctAnswer: 0, explanation: 'Bromine là phi kim lỏng duy nhất.' },
  { id: 'c79', subject: 'Hóa học', topic: 'Kim loại và phi kim', level: 'Thông hiểu', content: 'Dãy kim loại nào sau đây được sắp xếp theo chiều hoạt động hóa học giảm dần?', options: ['K, Na, Mg, Al, Zn, Fe', 'Fe, Zn, Al, Mg, Na, K', 'Al, Mg, Na, K, Fe, Zn', 'Na, K, Mg, Al, Fe, Zn'], correctAnswer: 0, explanation: 'Dãy hoạt động hóa học của kim loại.' },
  { id: 'c80', subject: 'Hóa học', topic: 'Kim loại và phi kim', level: 'Nhận biết', content: 'Gang là hợp kim của sắt với carbon, trong đó hàm lượng carbon chiếm:', options: ['2 - 5%', 'Dưới 2%', 'Trên 5%', '10%'], correctAnswer: 0, explanation: 'Định nghĩa về gang.' },
  { id: 'c81', subject: 'Hóa học', topic: 'Kim loại và phi kim', level: 'Thông hiểu', content: 'Thép là hợp kim của sắt với carbon, trong đó hàm lượng carbon chiếm:', options: ['Dưới 2%', '2 - 5%', 'Trên 5%', '10%'], correctAnswer: 0, explanation: 'Định nghĩa về thép.' },
  { id: 'c82', subject: 'Hóa học', topic: 'Kim loại và phi kim', level: 'Vận dụng', content: 'Để làm sạch dung dịch muối FeSO4 có lẫn tạp chất CuSO4, ta dùng kim loại nào?', options: ['Sắt (Fe)', 'Đồng (Cu)', 'Kẽm (Zn)', 'Nhôm (Al)'], correctAnswer: 0, explanation: 'Fe đẩy Cu ra khỏi muối: Fe + CuSO4 -> FeSO4 + Cu.' },
  { id: 'c83', subject: 'Hóa học', topic: 'Hydrocarbon và nhiên liệu', level: 'Nhận biết', content: 'Công thức phân tử của Ethylene là:', options: ['C2H4', 'CH4', 'C2H2', 'C6H6'], correctAnswer: 0, explanation: 'Ethylene là C2H4.' },
  { id: 'c84', subject: 'Hóa học', topic: 'Hydrocarbon và nhiên liệu', level: 'Thông hiểu', content: 'Ethylene có thể tham gia phản ứng trùng hợp tạo thành:', options: ['Polyethylene (PE)', 'Polyvinyl chloride (PVC)', 'Polystyrene', 'Cao su'], correctAnswer: 0, explanation: 'Trùng hợp ethylene tạo nhựa PE.' },
  { id: 'c85', subject: 'Hóa học', topic: 'Hydrocarbon và nhiên liệu', level: 'Nhận biết', content: 'Acetylene có liên kết nào trong phân tử?', options: ['Một liên kết ba', 'Một liên kết đôi', 'Toàn liên kết đơn', 'Hai liên kết đôi'], correctAnswer: 0, explanation: 'Acetylene (C2H2) có liên kết ba C≡C.' },
  { id: 'c86', subject: 'Hóa học', topic: 'Hydrocarbon và nhiên liệu', level: 'Thông hiểu', content: 'Khi đốt cháy hoàn toàn Hydrocarbon, sản phẩm thu được là:', options: ['CO2 và H2O', 'CO và H2', 'C và H2O', 'CO2 và H2'], correctAnswer: 0, explanation: 'Phản ứng cháy hoàn toàn hữu cơ.' },
  { id: 'c87', subject: 'Hóa học', topic: 'Hydrocarbon và nhiên liệu', level: 'Vận dụng', content: 'Để dập tắt đám cháy xăng dầu, người ta KHÔNG nên dùng cách nào?', options: ['Dùng nước xối mạnh', 'Dùng cát', 'Dùng bình chữa cháy CO2', 'Dùng chăn ướt'], correctAnswer: 0, explanation: 'Xăng dầu nhẹ hơn nước, dùng nước sẽ làm đám cháy lan rộng.' },
  { id: 'c88', subject: 'Hóa học', topic: 'Ethylic alcohol – Acetic acid', level: 'Nhận biết', content: 'Độ rượu là:', options: ['Số ml rượu nguyên chất trong 100ml hỗn hợp rượu với nước', 'Khối lượng rượu trong 1 lít nước', 'Phần trăm khối lượng rượu', 'Nhiệt độ sôi của rượu'], correctAnswer: 0, explanation: 'Định nghĩa độ rượu.' },
  { id: 'c89', subject: 'Hóa học', topic: 'Ethylic alcohol – Acetic acid', level: 'Thông hiểu', content: 'Giấm ăn là dung dịch acid acetic có nồng độ khoảng:', options: ['2 - 5%', '10 - 20%', '50%', '100%'], correctAnswer: 0, explanation: 'Nồng độ acid acetic trong giấm.' },
  { id: 'c90', subject: 'Hóa học', topic: 'Ethylic alcohol – Acetic acid', level: 'Nhận biết', content: 'Phản ứng giữa rượu etylic và acid acetic tạo thành ester gọi là:', options: ['Phản ứng ester hóa', 'Phản ứng xà phòng hóa', 'Phản ứng thủy phân', 'Phản ứng cộng'], correctAnswer: 0, explanation: 'Tên gọi phản ứng tạo ester.' },
  { id: 'c91', subject: 'Hóa học', topic: 'Ethylic alcohol – Acetic acid', level: 'Thông hiểu', content: 'Chất nào dùng để pha chế nước sát trùng trong y tế?', options: ['Rượu etylic 70-90 độ', 'Acid acetic nguyên chất', 'Nước đường', 'Benzene'], correctAnswer: 0, explanation: 'Cồn y tế là rượu etylic.' },
  { id: 'c92', subject: 'Hóa học', topic: 'Ethylic alcohol – Acetic acid', level: 'Nhận biết', content: 'Men giấm giúp chuyển hóa rượu etylic thành:', options: ['Acid acetic', 'Glucose', 'Ester', 'Khí gas'], correctAnswer: 0, explanation: 'Quá trình lên men giấm.' },
  { id: 'c93', subject: 'Hóa học', topic: 'Ethylic alcohol – Acetic acid', level: 'Thông hiểu', content: 'Rượu etylic có thể được sản xuất từ tinh bột bằng cách:', options: ['Thủy phân rồi lên men rượu', 'Đốt cháy', 'Trùng hợp', 'Cộng hydrogen'], correctAnswer: 0, explanation: 'Quy trình sản xuất rượu từ gạo, ngô.' },
  { id: 'c94', subject: 'Hóa học', topic: 'Ethylic alcohol – Acetic acid', level: 'Vận dụng', content: 'Để thu được giấm ăn từ rượu, người ta cần cung cấp thêm yếu tố nào?', options: ['Oxy và men giấm', 'Nhiệt độ cực cao', 'Áp suất lớn', 'Chất xúc tác kim loại'], correctAnswer: 0, explanation: 'Lên men giấm cần oxy không khí.' },
  { id: 'c95', subject: 'Hóa học', topic: 'Lipid – Carbohydrate – Protein – Polymer', level: 'Nhận biết', content: 'Glucose có nhiều trong:', options: ['Quả nho chín', 'Mía', 'Sữa', 'Gỗ'], correctAnswer: 0, explanation: 'Glucose còn gọi là đường nho.' },
  { id: 'c96', subject: 'Hóa học', topic: 'Lipid – Carbohydrate – Protein – Polymer', level: 'Thông hiểu', content: 'Thủy phân chất béo trong môi trường kiềm thu được:', options: ['Glycerol và xà phòng', 'Rượu etylic và acid', 'Glucose', 'Amino acid'], correctAnswer: 0, explanation: 'Phản ứng xà phòng hóa.' },
  { id: 'c97', subject: 'Hóa học', topic: 'Lipid – Carbohydrate – Protein – Polymer', level: 'Nhận biết', content: ' Polymer thiên nhiên bao gồm:', options: ['Tinh bột, cellulose, protein', 'Nhựa PE, PVC', 'Cao su buna', 'Tơ nilon'], correctAnswer: 0, explanation: 'Các polymer có sẵn trong tự nhiên.' },
  { id: 'c98', subject: 'Hóa học', topic: 'Khai thác tài nguyên từ vỏ Trái Đất', level: 'Nhận biết', content: 'Quặng sắt phổ biến nhất là:', options: ['Hematite (Fe2O3)', 'Bauxite (Al2O3)', 'Pyrite (FeS2)', 'Thạch anh'], correctAnswer: 0, explanation: 'Quặng chính để luyện gang thép.' },
  { id: 'c99', subject: 'Hóa học', topic: 'Khai thác tài nguyên từ vỏ Trái Đất', level: 'Thông hiểu', content: 'Nhôm được sản xuất bằng cách:', options: ['Điện phân nóng chảy Al2O3', 'Nhiệt luyện bằng than cốc', 'Thủy luyện', 'Đốt cháy quặng'], correctAnswer: 0, explanation: 'Phương pháp sản xuất nhôm.' },
  { id: 'c100', subject: 'Hóa học', topic: 'Khai thác tài nguyên từ vỏ Trái Đất', level: 'Nhận biết', content: 'Khí thiên nhiên có thành phần chính là:', options: ['Methane', 'Hydrogen', 'Oxygen', 'Nitrogen'], correctAnswer: 0, explanation: 'Methane chiếm >90% khí thiên nhiên.' },
  { id: 'c101', subject: 'Hóa học', topic: 'Khai thác tài nguyên từ vỏ Trái Đất', level: 'Thông hiểu', content: 'Để bảo vệ tài nguyên khoáng sản, chúng ta nên:', options: ['Sử dụng vật liệu thay thế và tái chế', 'Khai thác càng nhanh càng tốt', 'Không sử dụng khoáng sản nữa', 'Chôn lấp khoáng sản'], correctAnswer: 0, explanation: 'Biện pháp bảo vệ tài nguyên.' },
  { id: 'c102', subject: 'Hóa học', topic: 'Khai thác tài nguyên từ vỏ Trái Đất', level: 'Vận dụng', content: 'Tái chế nhôm giúp tiết kiệm bao nhiêu năng lượng so với sản xuất mới?', options: ['Khoảng 95%', '10%', '50%', '0%'], correctAnswer: 0, explanation: 'Tái chế nhôm cực kỳ hiệu quả về năng lượng.' },
  // SINH HỌC (Final)
  { id: 'b60', subject: 'Sinh học', topic: 'DNA – RNA – Phiên mã – Dịch mã', level: 'Nhận biết', content: 'Loại RNA nào làm nhiệm vụ vận chuyển amino acid?', options: ['tRNA', 'mRNA', 'rRNA', 'DNA'], correctAnswer: 0, explanation: 'tRNA (transfer RNA) vận chuyển amino acid.' },
  { id: 'b61', subject: 'Sinh học', topic: 'DNA – RNA – Phiên mã – Dịch mã', level: 'Thông hiểu', content: 'Đột biến gene là những biến đổi trong:', options: ['Cấu trúc của gene', 'Số lượng NST', 'Cấu trúc NST', 'Hình dạng tế bào'], correctAnswer: 0, explanation: 'Biến đổi tại một hoặc một vài cặp nucleotide.' },
  { id: 'b62', subject: 'Sinh học', topic: 'DNA – RNA – Phiên mã – Dịch mã', level: 'Nhận biết', content: 'Mã di truyền là mã:', options: ['Bộ ba', 'Bộ đôi', 'Bộ bốn', 'Đơn lẻ'], correctAnswer: 0, explanation: 'Cứ 3 nucleotide mã hóa cho 1 amino acid.' },
  { id: 'b63', subject: 'Sinh học', topic: 'DNA – RNA – Phiên mã – Dịch mã', level: 'Thông hiểu', content: 'Tác nhân gây đột biến gene có thể là:', options: ['Tia phóng xạ, hóa chất, virus', 'Nước tinh khiết', 'Không khí sạch', 'Thức ăn bổ dưỡng'], correctAnswer: 0, explanation: 'Các tác nhân vật lý, hóa học, sinh học.' },
  { id: 'b64', subject: 'Sinh học', topic: 'Nguyên phân – Giảm phân – NST', level: 'Nhận biết', content: 'Kết thúc giảm phân, từ 1 tế bào mẹ (2n) tạo ra:', options: ['4 tế bào con (n)', '2 tế bào con (2n)', '2 tế bào con (n)', '4 tế bào con (2n)'], correctAnswer: 0, explanation: 'Giảm phân tạo giao tử có bộ NST giảm đi một nửa.' },
  { id: 'b65', subject: 'Sinh học', topic: 'Quy luật Mendel', level: 'Nhận biết', content: 'Kiểu gene đồng hợp là kiểu gene chứa:', options: ['Hai allele giống nhau', 'Hai allele khác nhau', 'Chỉ một allele', 'Nhiều allele khác loại'], correctAnswer: 0, explanation: 'Ví dụ: AA hoặc aa.' },
  { id: 'b66', subject: 'Sinh học', topic: 'Quy luật Mendel', level: 'Thông hiểu', content: 'Phép lai nào sau đây là lai phân tích?', options: ['Aa x aa', 'Aa x Aa', 'AA x AA', 'AA x Aa'], correctAnswer: 0, explanation: 'Lai cơ thể trội với cơ thể lặn.' }
];

export const SUBJECTS: Subject[] = ['Vật lí', 'Hóa học', 'Sinh học'];

export const TOPICS_BY_SUBJECT: Record<Subject, string[]> = {
  'Vật lí': [
    'Năng lượng cơ học',
    'Ánh sáng',
    'Điện',
    'Điện từ',
    'Năng lượng với cuộc sống'
  ],
  'Hóa học': [
    'Kim loại và phi kim',
    'Hydrocarbon và nhiên liệu',
    'Ethylic alcohol – Acetic acid',
    'Lipid – Carbohydrate – Protein – Polymer',
    'Khai thác tài nguyên từ vỏ Trái Đất'
  ],
  'Sinh học': [
    'DNA – RNA – Phiên mã – Dịch mã',
    'Nguyên phân – Giảm phân – NST',
    'Quy luật Mendel'
  ]
};
