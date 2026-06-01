// data.jsx — sample content for the wireframe (overseas trade CRM)

const CLIENTS = [
  { id: "C-1042", name: "Meridian Foods Ltd.",   cc: "GB", city: "London",     owner: "J. Park", status: "active",   ar: 18450, cur: "USD", since: "2021", tags: ["Distributor"] },
  { id: "C-1039", name: "Sakura Trading K.K.",    cc: "JP", city: "Osaka",      owner: "S. Kim",  status: "active",   ar: 2380000, cur: "JPY", since: "2020", tags: ["Retailer","Key"] },
  { id: "C-1036", name: "Nordwind Import GmbH",   cc: "DE", city: "Hamburg",    owner: "J. Park", status: "active",   ar: 12200, cur: "EUR", since: "2022", tags: ["Distributor"] },
  { id: "C-1031", name: "Pacific Rim Co.",        cc: "US", city: "Los Angeles",owner: "H. Lee",  status: "lead",     ar: 0,     cur: "USD", since: "—",    tags: ["Prospect"] },
  { id: "C-1028", name: "Lotus Wholesale",        cc: "VN", city: "Hanoi",      owner: "S. Kim",  status: "active",   ar: 9600,  cur: "USD", since: "2023", tags: ["Wholesaler"] },
  { id: "C-1025", name: "Andes Gourmet S.A.",     cc: "CL", city: "Santiago",   owner: "H. Lee",  status: "on-hold",  ar: 4100,  cur: "USD", since: "2022", tags: ["Retailer"] },
  { id: "C-1019", name: "Maple & Co.",            cc: "CA", city: "Toronto",    owner: "J. Park", status: "active",   ar: 7320,  cur: "USD", since: "2021", tags: ["Distributor"] },
  { id: "C-1014", name: "Dubai Fine Imports",     cc: "AE", city: "Dubai",      owner: "S. Kim",  status: "active",   ar: 15800, cur: "USD", since: "2020", tags: ["Distributor","Key"] },
];

const INVOICES = [
  { id: "INV-2026-0148", client: "Sakura Trading K.K.", cc:"JP", cur:"JPY", total: 1840000, status:"overdue", issued:"2026-04-22", due:"2026-05-22", items: 6 },
  { id: "INV-2026-0147", client: "Meridian Foods Ltd.", cc:"GB", cur:"USD", total: 9240,    status:"sent",    issued:"2026-05-12", due:"2026-06-11", items: 4 },
  { id: "INV-2026-0146", client: "Nordwind Import GmbH",cc:"DE", cur:"EUR", total: 6120,    status:"paid",    issued:"2026-05-08", due:"2026-06-07", items: 3 },
  { id: "INV-2026-0145", client: "Dubai Fine Imports",  cc:"AE", cur:"USD", total: 12400,   status:"sent",    issued:"2026-05-19", due:"2026-06-18", items: 8 },
  { id: "INV-2026-0144", client: "Maple & Co.",         cc:"CA", cur:"USD", total: 3380,    status:"draft",   issued:"—",         due:"—",          items: 2 },
  { id: "INV-2026-0143", client: "Lotus Wholesale",     cc:"VN", cur:"USD", total: 5600,    status:"paid",    issued:"2026-04-30",due:"2026-05-30", items: 5 },
  { id: "INV-2026-0142", client: "Andes Gourmet S.A.",  cc:"CL", cur:"USD", total: 2100,    status:"overdue", issued:"2026-04-02",due:"2026-05-02", items: 3 },
];

const PRODUCTS = [
  { sku:"PRD-GS-200", name:"Gochujang Paste 200g",   cat:"Sauce",   weight:"0.24 kg", stock: 1820, price: 3.20, cur:"USD", status:"in" },
  { sku:"PRD-SS-500", name:"Sesame Oil 500ml",       cat:"Oil",     weight:"0.62 kg", stock: 640,  price: 7.90, cur:"USD", status:"in" },
  { sku:"PRD-KM-1K",  name:"Kimchi (vac) 1kg",       cat:"Fresh",   weight:"1.05 kg", stock: 88,   price: 9.40, cur:"USD", status:"low" },
  { sku:"PRD-RC-5K",  name:"Premium Rice 5kg",       cat:"Grain",   weight:"5.10 kg", stock: 410,  price: 18.50,cur:"USD", status:"in" },
  { sku:"PRD-SD-NORI",name:"Roasted Seaweed 50pk",   cat:"Snack",   weight:"0.18 kg", stock: 0,    price: 6.10, cur:"USD", status:"out" },
  { sku:"PRD-TB-360", name:"Soybean Paste 360g",     cat:"Sauce",   weight:"0.40 kg", stock: 1240, price: 4.50, cur:"USD", status:"in" },
  { sku:"PRD-RM-300", name:"Ramen Variety 300g",     cat:"Noodle",  weight:"0.34 kg", stock: 2200, price: 2.10, cur:"USD", status:"in" },
];

const RATES = [
  { region:"동아시아 (JP/CN/TW)", w0:14, w1:22, w2:38, w5:72,  lead:"3–5일" },
  { region:"동남아 (VN/TH/ID)",   w0:16, w1:26, w2:44, w5:84,  lead:"4–7일" },
  { region:"북미",                 w0:28, w1:46, w2:78, w5:150, lead:"6–9일" },
  { region:"EU (DE/FR/NL)",        w0:30, w1:50, w2:86, w5:164, lead:"7–10일" },
  { region:"영국 & 아일랜드",      w0:32, w1:54, w2:90, w5:172, lead:"7–10일" },
  { region:"중동 (AE/SA)",        w0:34, w1:58, w2:96, w5:182, lead:"8–12일" },
];

const TODOS = [
  { t:"수정 견적 발송 — Pacific Rim", due:"오늘",   cli:"Pacific Rim Co.",     pr:"high", done:false },
  { t:"연체 INV-2026-0148 확인",     due:"오늘",   cli:"Sakura Trading K.K.", pr:"high", done:false },
  { t:"Q3 물량 확정 — Meridian",      due:"내일", cli:"Meridian Foods Ltd.", pr:"med",  done:false },
  { t:"신규 카탈로그 PDF 공유",        due:"6/3",    cli:"Nordwind Import GmbH",pr:"low",  done:false },
  { t:"통관 서류 수집",              due:"6/4",    cli:"Dubai Fine Imports",  pr:"med",  done:false },
  { t:"유통 계약 갱신",              due:"6/6",    cli:"Maple & Co.",         pr:"low",  done:true  },
];

const PROJECTS = [
  { name:"Sakura — Q3 리테일 런칭", owner:"S. Kim", start: 2, span: 7, phase:"생산", pct: 60 },
  { name:"Meridian — PB 상품",   owner:"J. Park",start: 0, span: 5, phase:"샘플링",   pct: 35 },
  { name:"Dubai — 신규 SKU 등록",  owner:"S. Kim", start: 4, span: 6, phase:"배송",   pct: 80 },
  { name:"Nordwind — EU 인증",  owner:"J. Park",start: 1, span: 9, phase:"서류",       pct: 25 },
  { name:"Pacific Rim — 파일럿 주문", owner:"H. Lee", start: 6, span: 4, phase:"협상",pct: 10 },
];

const WIKI = [
  { title:"수출 컴플라이언스 — EU/영국", kind:"Folder", src:"Drive", items:"12개 파일", upd:"2일 전" },
  { title:"제품 스펙 시트 2026",  kind:"Folder", src:"Drive", items:"38개 파일", upd:"5일 전" },
  { title:"인코텅즈 치트시트",     kind:"Doc",    src:"Drive", items:"Google Doc", upd:"1주 전" },
  { title:"통관 HS코드 매핑",   kind:"Sheet",  src:"Drive", items:"Google Sheet", upd:"3일 전" },
  { title:"Sakura — 계약 & NDA",   kind:"Folder", src:"Drive", items:"6개 파일",  upd:"1일 전" },
  { title:"운송 파트너 연락처", kind:"Sheet",  src:"Drive", items:"Google Sheet", upd:"2주 전" },
];

const curFmt = (n, cur) => {
  const sym = { USD:"$", EUR:"€", JPY:"¥", KRW:"₩" }[cur] || "";
  const dec = (cur === "JPY" || cur === "KRW") ? 0 : 2;
  return sym + n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec });
};

Object.assign(window, { CLIENTS, INVOICES, PRODUCTS, RATES, TODOS, PROJECTS, WIKI, curFmt });
