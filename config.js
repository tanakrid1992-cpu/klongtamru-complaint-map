export const firebaseConfig = {
  apiKey: "AIzaSyC06v-C5PpFuMs0Vsw28I1cTlww-Zk58wQ",
  authDomain: "klongtamru-complaint-map.firebaseapp.com",
  projectId: "klongtamru-complaint-map",
  storageBucket: "klongtamru-complaint-map.firebasestorage.app",
  messagingSenderId: "582921230409",
  appId: "1:582921230409:web:18d0474a197ebaff298798",
};

export const FB = "https://www.gstatic.com/firebasejs/10.12.2/";
export const CENTER = [13.447074, 100.993681];
export const ZOOM = 15;
// ใส่ API key ของ Google Maps Platform (Maps JavaScript API) เพื่อเพิ่มชั้น Google Maps และ Google Earth (ดาวเทียม)
// เว้นว่างไว้ = ใช้แผนที่ถนน OpenStreetMap และภาพดาวเทียม Esri ซึ่งฟรี
export const GOOGLE_MAPS_KEY = "";

export const CATS = {
  road: "ถนน/ทางเท้า",
  flood: "น้ำท่วม/ระบายน้ำ",
  light: "ไฟฟ้าส่องสว่าง",
  waste: "ขยะ/ความสะอาด",
  noise: "เสียง/เหตุรำคาญ",
  other: "อื่น ๆ",
};

export const STATUS = {
  pending: { t: "รอดำเนินการ", c: "#B4320F", bg: "#FCEFCF", fg: "#7A4A00" },
  progress: { t: "กำลังดำเนินการ", c: "#1B4FB8", bg: "#E2EAFB", fg: "#1B4FB8" },
  done: { t: "แก้ไขแล้ว", c: "#14613A", bg: "#DBF1E3", fg: "#14613A" },
};

export const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

export const fmtDate = (ts) =>
  ts?.toDate ? ts.toDate().toLocaleDateString("th-TH", { day: "numeric", month: "short", year: "numeric" }) : "เมื่อสักครู่";

export const no = (id) => "KT-" + id.slice(0, 6).toUpperCase();

// แสดงเฉพาะรูปที่อยู่ใน Firebase Storage เท่านั้น
export const safePhotos = (p) =>
  (Array.isArray(p) ? p : []).filter((u) => typeof u === "string" && u.startsWith("https://firebasestorage.googleapis.com/"));

export const badge = (st) => {
  const s = STATUS[st] || STATUS.pending;
  return `<span class="badge" style="background:${s.bg};color:${s.fg}">${s.t}</span>`;
};
