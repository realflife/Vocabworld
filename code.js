document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // คำศัพท์ที่ผู้ใช้กรอก
    const searchWord = document.getElementById('searchWord').value.trim().toLowerCase();

    const codingDictionary = {
        "algorithm": "ขั้นตอนวิธีในการแก้ปัญหา",
        "debugging": "กระบวนการตรวจสอบและแก้ไขข้อผิดพลาดในโปรแกรม",
        "syntax": "รูปแบบหรือกฎเกณฑ์การเขียนโค้ด",
        "variable": "ตัวแปรที่ใช้เก็บข้อมูล",
        "function": "กลุ่มของโค้ดที่ทำงานเฉพาะเพื่อทำหน้าที่บางอย่าง",
        "loop": "การทำซ้ำคำสั่งในโปรแกรม",
        "data structure": "วิธีการจัดระเบียบข้อมูลในโปรแกรม",
        "compiler": "โปรแกรมที่แปลงโค้ดจากภาษาระดับสูงไปยังภาษาระดับต่ำ",
        "source code": "โค้ดต้นฉบับที่เขียนโดยโปรแกรมเมอร์",
        "framework": "โครงสร้างที่ช่วยในการพัฒนาแอพพลิเคชัน",
        "library": "ชุดของโค้ดที่สามารถนำมาใช้ซ้ำได้",
        "ide": "สภาพแวดล้อมการพัฒนาที่รวมเครื่องมือสำหรับเขียนโค้ด",
        "script": "โค้ดที่เขียนในรูปแบบของสคริปต์",
        "api": "ชุดของกฎที่ให้โปรแกรมสามารถสื่อสารกันได้",
        "version control": "ระบบที่ช่วยในการติดตามการเปลี่ยนแปลงของโค้ด",
        "repository": "ที่เก็บข้อมูลของโค้ดและเวอร์ชัน",
        "deployment": "การนำโปรแกรมไปใช้งานจริง",
        "comment": "ข้อความที่โปรแกรมเมอร์เขียนในโค้ดเพื่ออธิบาย",
        "object-oriented programming": "การเขียนโปรแกรมที่ใช้แนวคิดของวัตถุ",
        "refactoring": "การปรับปรุงโค้ดโดยไม่เปลี่ยนพฤติกรรมของมัน"
    };

    // คำแปล
    let result = codingDictionary[searchWord];

    if (result) {
        document.getElementById('modalContent').innerText = `${searchWord}: ${result}`;
    } else {
        document.getElementById('modalContent').innerText = 'ไม่พบคำศัพท์ที่คุณค้นหา';
    }

    // แสดงผลลัพธ์ใน pop-up modal
    const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
    resultModal.show();
});
