// ============================
// Student Data (from CSV)
// ============================
const ALL_STUDENTS = [
    { order: 1, id: "690710015", name: "นายกฤษกร วงศ์ที", nickname: "เปรม", dept: "คณิตศาสตร์" },
    { order: 2, id: "690710459", name: "นายกวินพรรธน์ รุ่งเรืองยรรยง", nickname: "ปิง", dept: "คณิตศาสตร์" },
    { order: 3, id: "690710485", name: "นางสาวฟาฮาน่า มรรคาเขต", nickname: "ฟาน่า", dept: "คณิตศาสตร์" },
    { order: 4, id: "690710497", name: "นางสาวสิรินยา วิเชียร", nickname: "น้ำผึ้ง", dept: "คณิตศาสตร์" },
    { order: 5, id: "690710001", name: "นางสาวกุลธิดา จันทร์บุรี", nickname: "โฟกัส", dept: "คณิตศาสตร์" },
    { order: 6, id: "690710003", name: "นางสาวณภัทร จินดารัตน์", nickname: "จ๊ะจ๋า", dept: "คณิตศาสตร์" },
    { order: 7, id: "690710008", name: "นางสาวปภาวรินท์ แสงทอง", nickname: "หนูดี", dept: "คณิตศาสตร์" },
    { order: 8, id: "690710009", name: "นางสาวปาณิสรา ศรีอ้น", nickname: "ใบเฟิร์น", dept: "คณิตศาสตร์" },
    { order: 9, id: "690710010", name: "นางสาวปิ่นมนัส แซ่ล้อ", nickname: "น้ำตาล", dept: "คณิตศาสตร์" },
    { order: 10, id: "690710012", name: "นางสาวภูริชญา นุ่นบุญคง", nickname: "แบม", dept: "คณิตศาสตร์" },
    { order: 11, id: "690710013", name: "นางสาวภูษณิศา สุวรรณ", nickname: "แพรว", dept: "คณิตศาสตร์" },
    { order: 12, id: "690710014", name: "นางสาวศศิกานต์ สมัยนิยม", nickname: "เอ๊ะ", dept: "คณิตศาสตร์" },
    { order: 13, id: "690710017", name: "นายกิตติภูมิ อยู่ญาติมาก", nickname: "อาร์ม", dept: "คณิตศาสตร์" },
    { order: 14, id: "690710019", name: "นายจารุเดช พร้อมใจ", nickname: "คิว", dept: "คณิตศาสตร์" },
    { order: 15, id: "690710021", name: "นายเทิดพงศ์ เมฆจินดา", nickname: "เทิด", dept: "คณิตศาสตร์" },
    { order: 16, id: "690710023", name: "นางสาวประภาพรรณ์ ศิริพันธุ์สิน", nickname: "แพนเค้ก", dept: "คณิตศาสตร์" },
    { order: 17, id: "690710028", name: "นางสาวชนิกานต์ นนธิ", nickname: "ฟาง", dept: "คณิตศาสตร์" },
    { order: 18, id: "690710029", name: "นายภูเมศ ทรัพย์บุญ", nickname: "แมน", dept: "คณิตศาสตร์" },
    { order: 19, id: "690710030", name: "นางสาวอารียา กัณหา", nickname: "ดีน่า", dept: "คณิตศาสตร์" },
    { order: 20, id: "690710306", name: "นายจักรกฤษ ดุมอุดม", nickname: "จักร", dept: "คณิตศาสตร์" },
    { order: 21, id: "690710308", name: "นายนัทธภัทร ครุฑธรรมรพ", nickname: "กาย", dept: "คณิตศาสตร์" },
    { order: 22, id: "690710310", name: "นายผดุงศักดิ์ คำบาง", nickname: "นน", dept: "คณิตศาสตร์" },
    { order: 23, id: "690710462", name: "นายจิรวศิน จันทวงษ์วาณิชย์", nickname: "มิวสิค", dept: "คณิตศาสตร์" },
    { order: 24, id: "690710463", name: "นายจิรายุ สิงห์กระโทก", nickname: "เอิร์ธ", dept: "คณิตศาสตร์" },
    { order: 25, id: "690710466", name: "นางสาวชนัญชิดา อยู่เอี่ยม", nickname: "กาฟิว", dept: "คณิตศาสตร์" },
    { order: 26, id: "690710472", name: "นายณัฐกฤต ทองดอนน้อย", nickname: "เจมส์", dept: "คณิตศาสตร์" },
    { order: 27, id: "690710473", name: "นางสาวณัฐธิดา ทุเครือ", nickname: "พรีม", dept: "คณิตศาสตร์" },
    { order: 28, id: "690710474", name: "นางสาวดุษฎี นิลประดิษฐ", nickname: "คัพเค้ก", dept: "คณิตศาสตร์" },
    { order: 29, id: "690710476", name: "นายธีรภัทร", nickname: "โอ๊ค", dept: "คณิตศาสตร์" },
    { order: 30, id: "690710479", name: "นายนันทวัฒน์ หิรัญเวช", nickname: "ต้นข้าว", dept: "คณิตศาสตร์" },
    { order: 31, id: "690710487", name: "นางสาวมาริสา จางวาง", nickname: "โอปอ", dept: "คณิตศาสตร์" },
    { order: 32, id: "690710493", name: "นางสาวศรัญภร คลื่นแก้ว", nickname: "ข้าวฟ่าง", dept: "คณิตศาสตร์" },
    { order: 33, id: "690710496", name: "นางสาวศุภาภรณ์ ขำเจริญ", nickname: "บิว", dept: "คณิตศาสตร์" },
    { order: 34, id: "690710502", name: "นางสาวศรัณยพัชร ไหวประเสริฐ", nickname: "ปรู๋", dept: "คณิตศาสตร์" },
    { order: 35, id: "690710504", name: "นางสาวฮัชมาอ์ สาและ", nickname: "ฮัช", dept: "คณิตศาสตร์" },
    { order: 36, id: "690711123", name: "นางสาวกานต์ยุพิน ไชยพรม", nickname: "นิว", dept: "คณิตศาสตร์" },
    { order: 37, id: "690711127", name: "นางสาวพัชริดา มิตรเจริญ", nickname: "ดาด้า", dept: "คณิตศาสตร์" },
    { order: 38, id: "690711028", name: "นางสาวไอรินทร์ พันธ์ทุมสาร", nickname: "แอลม่อน", dept: "คณิตศาสตร์ประยุกต์" },
    { order: 39, id: "690711037", name: "นางสาวสุขเจริญรักษ์ สุขเจริญ", nickname: "วาเลนไทน์", dept: "คณิตศาสตร์ประยุกต์" },
    { order: 40, id: "690711178", name: "นายพงศิริภัค ศิริพงศ์คุณารัช", nickname: "ไลท์", dept: "คณิตศาสตร์ประยุกต์" },
    { order: 41, id: "690711184", name: "นายศุภวิชญ์ เกษงาม", nickname: "แพท", dept: "คณิตศาสตร์ประยุกต์" },
    { order: 42, id: "69071104", name: "นางสาวเบญญาดา สินปาน", nickname: "เขียว", dept: "คณิตศาสตร์ประยุกต์" },
    { order: 43, id: "690710230", name: "นางสาวณัฐธิดา ทรัพย์ย้อย", nickname: "เนม", dept: "คณิตศาสตร์ประยุกต์" },
    { order: 44, id: "690710232", name: "นางสาวศศิธร ไชยเลิศ", nickname: "ผักบุ้ง", dept: "คณิตศาสตร์ประยุกต์" },
    { order: 45, id: "690710234", name: "นายสุคภกร บุญประสาท", nickname: "ไอซ์", dept: "คณิตศาสตร์ประยุกต์" },
    { order: 46, id: "690711007", name: "นางสาวกฤติยา มงศิริ", nickname: "เนย", dept: "คณิตศาสตร์ประยุกต์" },
    { order: 47, id: "690711013", name: "นางสาวนิรามัย หระไชย", nickname: "กุ๊ก", dept: "คณิตศาสตร์ประยุกต์" },
    { order: 48, id: "690711016", name: "นายพิษณุวัชร์ รักษาวงศ์", nickname: "บูม", dept: "คณิตศาสตร์ประยุกต์" },
    { order: 49, id: "690711019", name: "นายวิภาวัส พูลเพิ่ม", nickname: "อันเด", dept: "คณิตศาสตร์ประยุกต์" },
    { order: 50, id: "690711020", name: "นางสาวศศิวิมล ศรีคำ", nickname: "แก้ม", dept: "คณิตศาสตร์ประยุกต์" },
    { order: 51, id: "690711024", name: "นางสาวสุกัญญา สอนสิงห์", nickname: "แสนสวย", dept: "คณิตศาสตร์ประยุกต์" },
    { order: 52, id: "690711031", name: "นางสาวณภัทร ชุมเกษียร", nickname: "แซนดี้", dept: "คณิตศาสตร์ประยุกต์" },
    { order: 53, id: "690711032", name: "นายธีรภัทร ธรณี", nickname: "อาร์ม", dept: "คณิตศาสตร์ประยุกต์" },
    { order: 54, id: "690711176", name: "นางสาวบุศราคัม หนูบ้านเกาะ", nickname: "ตันหยง", dept: "คณิตศาสตร์ประยุกต์" },
    { order: 55, id: "690711177", name: "นายปิยพัชร์ คำบุญมาเดชา", nickname: "เติ้ล", dept: "คณิตศาสตร์ประยุกต์" },
    { order: 56, id: "690711182", name: "นางสาววรรณรัตน์ ฉิมอ่วม", nickname: "เฟรช", dept: "คณิตศาสตร์ประยุกต์" },
    { order: 57, id: "690711051", name: "นางสาวปภิณทิพย์ ศรีลาศักดิ์", nickname: "ปาท", dept: "วิทยาการข้อมูล" },
    { order: 58, id: "690711057", name: "นางสาวมนัสวี ภูแสงสั้น", nickname: "ข้าวกล้อง", dept: "วิทยาการข้อมูล" },
    { order: 59, id: "690711064", name: "นางสาวอภิกขณา บุญลือด้วง", nickname: "กีวี่", dept: "วิทยาการข้อมูล" },
    { order: 60, id: "690711187", name: "นางสาววรัทยา พิมพ์สุวรรณ์", nickname: "แอม", dept: "วิทยาการข้อมูล" },
    { order: 61, id: "690711189", name: "นางสาวสุณิสา รักษ์สมบูรณ์", nickname: "พลอย", dept: "วิทยาการข้อมูล" },
    { order: 62, id: "690710238", name: "นายพิสิษฐ์ แสงเพลิง", nickname: "ติวเตอร์", dept: "วิทยาการข้อมูล" },
    { order: 63, id: "690710239", name: "นางสาววรัชยา วงศ์กิระปราชญ์", nickname: "เป้ย", dept: "วิทยาการข้อมูล" },
    { order: 64, id: "690711038", name: "นางสาวกนกวรรณ พรหมพันธ์ใจ", nickname: "จูน", dept: "วิทยาการข้อมูล" },
    { order: 65, id: "690711040", name: "นายชนกานต์ แสงเทศ", nickname: "ภูมิ", dept: "วิทยาการข้อมูล" },
    { order: 66, id: "690711042", name: "นางสาวชาลิสา สมิตินันทน์", nickname: "อิง", dept: "วิทยาการข้อมูล" },
    { order: 67, id: "690711043", name: "นางสาวฐิตาภา ทะนันชัย", nickname: "น้ำฝน", dept: "วิทยาการข้อมูล" },
    { order: 68, id: "690711044", name: "นายณัฐกฤต อามาตย์", nickname: "นัท", dept: "วิทยาการข้อมูล" },
    { order: 69, id: "690711045", name: "นางสาวณัฐกฤตา", nickname: "พัด", dept: "วิทยาการข้อมูล" },
    { order: 70, id: "690711065", name: "นายอัครวิญญ์ เขาแก้ว", nickname: "เหนือ", dept: "วิทยาการข้อมูล" },
    { order: 71, id: "690711067", name: "นางสาวกัลยรัตน์ กองรอด", nickname: "เชียร์", dept: "วิทยาการข้อมูล" },
    { order: 72, id: "690710364", name: "นางสาวพิชญาภา วงษ์บา", nickname: "อก", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 73, id: "690710690", name: "นางสาวเกษมศรี ดีสุด", nickname: "ชมพู่", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 74, id: "690710695", name: "นางสาวฐิติพร รัตนพันธุ์", nickname: "เพลง", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 75, id: "690710701", name: "นางสาวธนพร ไทรหอมหวล", nickname: "น้ำน่าน", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 76, id: "690710703", name: "นางสาวธัญกร บุตรทอง", nickname: "ธัญ", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 77, id: "690710731", name: "นางสาวอรปรียา แก้วไสว", nickname: "ขวัญ", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 78, id: "690710737", name: "นางสาวธวัลรัตน์ สุคงเจริญ", nickname: "จิมมี่", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 79, id: "690710738", name: "นางสาวธัญญารัตน์ หนูทอง", nickname: "โอกิ", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 80, id: "690710739", name: "นางสาวบุษบารัช ฉายแม้น", nickname: "เนย", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 81, id: "690710123", name: "นางสาวกัลยกร เกตสาลี", nickname: "เฟิร์น", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 82, id: "690710125", name: "นายธณกฤต เกิดสุข", nickname: "ตาต้าร์", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 83, id: "690710126", name: "นายธนภัทร ประภานาวิน", nickname: "ทู", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 84, id: "690710127", name: "นายณัฐวัชต์ ปิ่นกระจัน", nickname: "มาวิน", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 85, id: "690710129", name: "นางสาวพิชชาอร คุณฮวย", nickname: "ปอย", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 86, id: "690710132", name: "นางสาววรกานต์ ดีท้วม", nickname: "ใบเตย", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 87, id: "690710133", name: "นายอิทธิพัทธ์ จินดาวัฒนภูมิ", nickname: "กิมตี้", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 88, id: "690710357", name: "นายคุณานนต์ พลสายบัว", nickname: "มอส", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 89, id: "690710358", name: "นางสาวจิดาภา แย้มสมุทร", nickname: "โฟกัส", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 90, id: "690710359", name: "นายเจตนิพัทธ์ เอื้อจิระพงษ์พันธ์", nickname: "เฟรม", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 91, id: "690710360", name: "นางสาวญาณิศา ช่องสาร", nickname: "หนอนไหม", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 92, id: "690710362", name: "นางสาวทรรศวรรณ มีสมบูรณ์", nickname: "แบม", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 93, id: "690710363", name: "นางสาวนางสาวนวพร มงคลคำ", nickname: "ปีใหม่", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 94, id: "690710365", name: "นางสาวพิมพ์ชนน์ วงศ์วิเศษ", nickname: "พิมพ์", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 95, id: "690710686", name: "นางสาวกนกวรรณ รัตนาธรรม", nickname: "พู่กัน", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 96, id: "690710687", name: "นางสาวกวินธิตา แสงนาโก", nickname: "กวิน", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 97, id: "690710689", name: "นางสาวกุลวนิดา สังข์ทอง", nickname: "จูน", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 98, id: "690710691", name: "นางสาวฉัตรชนก ลิ่มเชย", nickname: "มิ้นท์", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 99, id: "690710693", name: "นางสาวชมภูพรรณ มณีอ่อน", nickname: "พรีม", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 100, id: "690710696", name: "นางสาวฐิติรัตน์ โสมาศรี", nickname: "ปลาย", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 101, id: "690710700", name: "นางสาวดวงหทัย เพาะผล", nickname: "ไอซ์", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 102, id: "690710702", name: "นางสาวธนัชชา ผลกลาง", nickname: "ปีใหม่", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 103, id: "690710707", name: "นางสาวปวีณ์ธิดา เลิศไชยประดิษฐ์", nickname: "หลิว", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 104, id: "690710712", name: "นางสาวพัชรินทร์ บุเงิน", nickname: "เจนนี่", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 105, id: "690710717", name: "นางสาวรชฏา มากะนิตย์", nickname: "ปราย", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 106, id: "690710719", name: "นางสาวรินรดา สุขสาคร", nickname: "ข้าวฟ่าง", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 107, id: "690710721", name: "นางสาววรกานต์ แก้วลอดหล้า", nickname: "มิ้ว", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 108, id: "690710724", name: "นางสาววัลวลี ขวัญคุ้ม", nickname: "น้ำ", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 109, id: "690710728", name: "นางสาวสุชาวดี ทองดี", nickname: "ออย", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 110, id: "690710729", name: "นางสาวสุวิภาดา สิงห์สีทา", nickname: "อ๋อมแอ๋ม", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 111, id: "690710730", name: "นางสาวอชิรญา บุนนาค", nickname: "อชิ", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
    { order: 112, id: "690710734", name: "นายคีตณภัทธ์ พุดทรง", nickname: "คิว", dept: "สถิติและวิทยาการวิเคราะห์ข้อมูล" },
];

// ============================
// State
// ============================
let currentMode = 'all';
let removedStudents = []; // Array of student objects that have been removed
let currentWinner = null;
let isSpinning = false;

// ============================
// DOM Elements
// ============================
const slotDisplay = document.getElementById('slotDisplay');
const winnerSection = document.getElementById('winnerSection');
const spinBtn = document.getElementById('spinBtn');
const removedList = document.getElementById('removedList');

// ============================
// Mode Selection
// ============================
function setMode(mode) {
    if (isSpinning) return;
    currentMode = mode;

    // Update button states
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));

    const modeMap = {
        'all': 'btnAll',
        'คณิตศาสตร์': 'btnMath',
        'คณิตศาสตร์ประยุกต์': 'btnAppMath',
        'วิทยาการข้อมูล': 'btnDS',
        'สถิติและวิทยาการวิเคราะห์ข้อมูล': 'btnStat',
    };

    document.getElementById(modeMap[mode]).classList.add('active');

    // Hide winner section when changing mode
    winnerSection.classList.add('hidden');
    currentWinner = null;

    // Reset slot display
    resetSlotDisplay();
}

// ============================
// Get Available Students
// ============================
function getAvailableStudents(mode) {
    const removedIds = new Set(removedStudents.map(s => s.id));
    let pool = ALL_STUDENTS.filter(s => !removedIds.has(s.id));

    if (mode !== 'all') {
        pool = pool.filter(s => s.dept === mode);
    }

    return pool;
}

// ============================
// Update Counts
// ============================
function updateCounts() {
    const countAll = getAvailableStudents('all').length;
    const countMath = getAvailableStudents('คณิตศาสตร์').length;
    const countAppMath = getAvailableStudents('คณิตศาสตร์ประยุกต์').length;
    const countDS = getAvailableStudents('วิทยาการข้อมูล').length;
    const countStat = getAvailableStudents('สถิติและวิทยาการวิเคราะห์ข้อมูล').length;

    document.getElementById('countAll').textContent = `${countAll} คน`;
    document.getElementById('countMath').textContent = `${countMath} คน`;
    document.getElementById('countAppMath').textContent = `${countAppMath} คน`;
    document.getElementById('countDS').textContent = `${countDS} คน`;
    document.getElementById('countStat').textContent = `${countStat} คน`;

    // Disable buttons with 0 students
    const btnMap = {
        'btnAll': countAll,
        'btnMath': countMath,
        'btnAppMath': countAppMath,
        'btnDS': countDS,
        'btnStat': countStat,
    };

    for (const [btnId, count] of Object.entries(btnMap)) {
        const btn = document.getElementById(btnId);
        if (count === 0) {
            btn.classList.add('disabled');
        } else {
            btn.classList.remove('disabled');
        }
    }

    // Disable spin button if no available students
    const available = getAvailableStudents(currentMode);
    spinBtn.disabled = available.length === 0;
}

// ============================
// Audio Engine (Web Audio API)
// ============================
let audioCtx = null;

function getAudioCtx() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

function playTick(pitch = 880, duration = 0.04, vol = 0.12, type = 'square') {
    try {
        const ctx = getAudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.type = type;
        osc.frequency.setValueAtTime(pitch, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(pitch * 0.7, ctx.currentTime + duration);

        gain.gain.setValueAtTime(vol, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + duration);
    } catch (e) {}
}

function playWinFanfare() {
    try {
        const ctx = getAudioCtx();
        const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6
        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.12);

            gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.12);
            gain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + i * 0.12 + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.35);

            osc.start(ctx.currentTime + i * 0.12);
            osc.stop(ctx.currentTime + i * 0.12 + 0.4);
        });
    } catch (e) {}
}

// ============================
// Slot Machine Spin
// ============================
function resetSlotDisplay() {
    slotDisplay.classList.remove('state-decoy', 'state-plottwist');
    slotDisplay.innerHTML = `
        <div class="slot-placeholder">
            <span class="placeholder-icon">🎲</span>
            <span class="placeholder-text">กดปุ่มเพื่อสุ่ม</span>
        </div>
    `;
}

function startSpin() {
    const available = getAvailableStudents(currentMode);
    if (available.length === 0 || isSpinning) return;

    isSpinning = true;
    winnerSection.classList.add('hidden');
    currentWinner = null;
    spinBtn.classList.add('spinning');

    // Scroll to slot display area smoothly
    document.getElementById('slotSection').scrollIntoView({ behavior: 'smooth', block: 'center' });

    // 1. Determine the actual winner upfront
    const winner = available[Math.floor(Math.random() * available.length)];

    // 2. Determine number of fakeouts (N)
    // 80% chance for first fakeout, then decreases by 20% each time (80%, 60%, 40%, 20%, 0%)
    let N = 0;
    let prob = 0.8;
    while (Math.random() < prob && prob > 0.01) {
        N++;
        prob -= 0.2;
    }

    // 3. Build the sequence of targets (stops)
    const sequence = [];
    for (let j = 0; j < N; j++) {
        sequence.push(available[Math.floor(Math.random() * available.length)]);
    }
    sequence.push(winner); // The final stop is always the real winner

    // 4. "การหลอกครั้งที่ 2 เป็นต้นไป มีโอกาส 50% ที่จะกลับไปชื่อก่อนหน้า"
    // By passing backwards, for each stop (from end to 2nd stop), 
    // there's a 50% chance the previous stop is changed to be identical to this one.
    // This perfectly implements: Stop A -> Fakeout -> Stop A.
    for (let j = N; j >= 1; j--) {
        if (Math.random() < 0.5) {
            sequence[j - 1] = sequence[j];
        }
    }

    let currentStopIndex = 0;
    let i_tick = 0;
    let interval = 55;

    // ── Phase 1: Fast spin (Only at the very beginning) ────────────────
    function phase1() {
        const s = available[Math.floor(Math.random() * available.length)];
        slotDisplay.innerHTML = `
            <div class="slot-spinning">
                <div class="spinning-nickname">${s.nickname}</div>
                <div class="spinning-name">${s.name}</div>
            </div>`;
        playTick(600 + Math.random() * 250, 0.025);
        interval += 2;
        if (++i_tick < 22) setTimeout(phase1, interval);
        else { i_tick = 0; interval = 150; setTimeout(phase2, 80); }
    }

    // ── Phase 2: Slow toward the current target ──────────────────────────
    function phase2() {
        const s = available[Math.floor(Math.random() * available.length)];
        slotDisplay.innerHTML = `
            <div class="slot-spinning">
                <div class="spinning-nickname">${s.nickname}</div>
                <div class="spinning-name">${s.name}</div>
            </div>`;
        playTick(350 + (8 - i_tick) * 20, 0.06);
        interval += 50;
        if (++i_tick < 6) setTimeout(phase2, interval);
        else {
            // "Stop" at the current target in sequence
            const target = sequence[currentStopIndex];
            slotDisplay.classList.add('state-decoy');
            slotDisplay.innerHTML = `
                <div class="slot-spinning slot-decoy">
                    <div class="spinning-nickname decoy-glow">${target.nickname}</div>
                    <div class="spinning-name">${target.name}</div>
                </div>`;
            playTick(700, 0.15);
            setTimeout(phase3_decide, 1800);
        }
    }

    // ── Phase 3: Decide if this is the final winner or a fakeout ────────
    function phase3_decide() {
        if (currentStopIndex >= sequence.length - 1) {
            // This is the real final winner!
            slotDisplay.classList.remove('state-decoy', 'state-plottwist');
            const finalTarget = sequence[currentStopIndex];
            slotDisplay.innerHTML = `
                <div class="slot-spinning">
                    <div class="spinning-nickname">${finalTarget.nickname}</div>
                    <div class="spinning-name">${finalTarget.name}</div>
                </div>`;
            setTimeout(() => revealWinner(finalTarget), 200);
        } else {
            // PLOT TWIST! Proceed to fakeout animation
            phase4_plottwist();
        }
    }

    // ── Phase 4: PLOT TWIST 😱 ───────────────────────────────────────────
    function phase4_plottwist() {
        slotDisplay.classList.remove('state-decoy');
        slotDisplay.classList.add('state-plottwist');
        
        const twistPhrases = ['ยังไม่ใช่', 'อาจจะยัง', 'โดนหลอก', 'ไปต่ออีกสักหน่อย'];
        const phrase = twistPhrases[Math.floor(Math.random() * twistPhrases.length)];
        
        slotDisplay.innerHTML = `
            <div class="slot-spinning slot-plottwist">
                <div class="plottwist-text">😱 ${phrase}</div>
            </div>`;
        // Scary sound
        playTick(160, 0.25, 0.2, 'sawtooth');
        setTimeout(() => playTick(130, 0.2, 0.15, 'sawtooth'), 120);

        i_tick = 0;
        setTimeout(phase5_jolt, 1000);
    }

    // ── Phase 5: Quick jolt then continue to next target ─────────────────
    function phase5_jolt() {
        const s = available[Math.floor(Math.random() * available.length)];
        const flash = i_tick % 2 === 0;
        // Alternate red/purple glow on the container
        slotDisplay.classList.toggle('state-plottwist', flash);
        slotDisplay.innerHTML = `
            <div class="slot-spinning">
                <div class="spinning-nickname" style="color:${flash ? '#ef4444' : '#f1f5f9'}">${s.nickname}</div>
                <div class="spinning-name">${s.name}</div>
            </div>`;
        playTick(300 + Math.random() * 300, 0.03, 0.1);
        if (++i_tick < 9) {
            setTimeout(phase5_jolt, 75);
        } else {
            // Begin slowing down for the NEXT target
            slotDisplay.classList.remove('state-plottwist');
            currentStopIndex++;
            i_tick = 0;
            interval = 80; // slightly faster initial interval for the subsequent slow-downs
            phase2();
        }
    }

    phase1();
}

function revealWinner(winner) {
    isSpinning = false;
    spinBtn.classList.remove('spinning');
    currentWinner = winner;

    // Populate winner section
    document.getElementById('winnerNickname').textContent = winner.nickname;
    document.getElementById('winnerName').textContent = winner.name;
    document.getElementById('winnerId').textContent = `รหัส: ${winner.id}`;
    document.getElementById('winnerDept').textContent = winner.dept;

    // Show winner section
    winnerSection.classList.remove('hidden');

    // Play win fanfare
    playWinFanfare();

    // Scroll to winner card
    setTimeout(() => {
        winnerSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);

    // Create confetti
    createConfetti();
}

// ============================
// Confetti
// ============================
function createConfetti() {
    const container = document.getElementById('winnerConfetti');
    container.innerHTML = '';

    const colors = ['#fbbf24', '#ec4899', '#7c3aed', '#06b6d4', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6'];

    for (let i = 0; i < 50; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.top = '-10px';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = Math.random() * 0.5 + 's';
        piece.style.animationDuration = (2 + Math.random() * 2) + 's';
        piece.style.width = (6 + Math.random() * 8) + 'px';
        piece.style.height = (6 + Math.random() * 8) + 'px';

        if (Math.random() > 0.5) {
            piece.style.borderRadius = '50%';
        }

        container.appendChild(piece);
    }
}

// ============================
// Winner Actions
// ============================
function removeWinner() {
    if (!currentWinner) return;

    removedStudents.push(currentWinner);
    currentWinner = null;
    winnerSection.classList.add('hidden');
    resetSlotDisplay();
    updateCounts();
    renderRemovedList();

    // If current mode has no students left, switch to 'all' if possible
    const available = getAvailableStudents(currentMode);
    if (available.length === 0) {
        const allAvailable = getAvailableStudents('all');
        if (allAvailable.length > 0) {
            setMode('all');
        }
    }
}

function keepWinner() {
    if (!currentWinner) return;
    currentWinner = null;
    winnerSection.classList.add('hidden');
    resetSlotDisplay();
}

// ============================
// Removed List Management
// ============================
function renderRemovedList() {
    if (removedStudents.length === 0) {
        removedList.innerHTML = '<div class="empty-removed">ยังไม่มีผู้ได้รับรางวัล</div>';
        return;
    }

    removedList.innerHTML = removedStudents.map((student, index) => `
        <div class="removed-chip" id="chip-${student.id}">
            <span class="chip-order">${index + 1}</span>
            <span>${student.nickname} (${student.name})</span>
            <button class="chip-undo" onclick="undoRemove('${student.id}')" title="คืนกลับรายชื่อ">✕</button>
        </div>
    `).join('');
}

function undoRemove(studentId) {
    removedStudents = removedStudents.filter(s => s.id !== studentId);
    updateCounts();
    renderRemovedList();
}

function resetAll() {
    if (removedStudents.length === 0) return;

    if (confirm('ต้องการคืนค่าทั้งหมดหรือไม่?\nผู้ได้รับรางวัลทั้งหมดจะกลับเข้าสู่รายชื่อ')) {
        removedStudents = [];
        currentWinner = null;
        winnerSection.classList.add('hidden');
        resetSlotDisplay();
        updateCounts();
        renderRemovedList();
    }
}

// ============================
// Particle Background
// ============================
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const particles = [];
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.5 + 0.1,
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(124, 58, 237, ${p.opacity})`;
            ctx.fill();
        });

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(124, 58, 237, ${0.05 * (1 - dist / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}

// ============================
// Initialize
// ============================
function init() {
    updateCounts();
    renderRemovedList();
    initParticles();
}

init();
