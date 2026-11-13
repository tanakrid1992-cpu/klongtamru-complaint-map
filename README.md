# คลองตำหรุ แจ้งเรื่อง

ระบบแจ้งเรื่องร้องเรียนบนแผนที่ เทศบาลตำบลคลองตำหรุ (GitHub Pages + Firebase)

| ไฟล์ | หน้าที่ |
|---|---|
| `index.html` | หน้าประชาชน: แผนที่ รายการ แจ้งปัญหา (ไม่ต้องล็อกอิน) |
| `admin.html` | หลังบ้านเจ้าหน้าที่: เปลี่ยนสถานะ ตอบกลับ ดูผู้แจ้ง ลบ |
| `config.js` | ค่า Firebase จุดกึ่งกลางแผนที่ ประเภท และสถานะ |
| `firestore.rules` | กฎความปลอดภัย |

## ติดตั้ง

1. สร้างโปรเจกต์ที่ console.firebase.google.com แล้วเพิ่ม Web app คัดลอก `firebaseConfig` ไปวางใน `config.js`
2. เปิด **Firestore Database** (โหมด production) แล้ววางเนื้อหา `firestore.rules` ในแท็บ Rules
4. เปิด **Authentication > Sign-in method**: เปิด *Anonymous* และ *Email/Password*
5. เพิ่มเจ้าหน้าที่: Authentication > Users > Add user แล้วคัดลอก UID ไปสร้างเอกสารใน Firestore ที่ `staff/<UID>` (ใส่ฟิลด์อะไรก็ได้ เช่น `name`)
6. อัปโหลดทุกไฟล์ขึ้น GitHub repo แล้วเปิด Settings > Pages (branch `main`, โฟลเดอร์ root)
7. Authentication > Settings > Authorized domains: เพิ่ม `<username>.github.io`

## หมายเหตุ

- ประชาชนถูกล็อกอินแบบ Anonymous อัตโนมัติเมื่อกดส่ง เพื่อให้กฎความปลอดภัยทำงานได้
- ชื่อและเบอร์ผู้แจ้งเก็บแยกที่ `complaints/<id>/private/contact` อ่านได้เฉพาะเจ้าหน้าที่
- รูปถูกย่อเหลือด้านยาว 800px แล้วเก็บใน Firestore ที่ `complaints/<id>/photos` จำกัด 3 รูปต่อเรื่อง ใช้แผนฟรี (Spark) ได้ ไม่ต้องเปิด Storage
- เพราะไม่บังคับล็อกอิน ควรเปิด **App Check (reCAPTCHA)** ก่อนเปิดใช้จริง เพื่อกันการแจ้งเรื่องปลอมจำนวนมาก
