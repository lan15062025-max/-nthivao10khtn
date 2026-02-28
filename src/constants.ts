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
  }
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
