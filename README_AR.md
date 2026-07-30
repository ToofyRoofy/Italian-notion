# Parla Italiano — النسخة المجمعة المصححة

## التشغيل
شغّل المجلد من خادم محلي، وليس بفتح `index.html` مباشرة، لأن Service Worker والميكروفون يحتاجان HTTP/HTTPS.

مثال:
```bash
python3 -m http.server 8080
```
ثم افتح `http://localhost:8080`.

## ترتيب الملفات
يحمل `index.html` البيانات بهذا الترتيب: `sentences.js` ثم `verbs.js` ثم `grammar.js` ثم ملفات الدروس السبعة ثم `lesson_manifest.js` وأخيرًا `app.js`.

## محتويات النسخة
- واجهة مفصولة: `index.html` + `styles.css` + `app.js`
- مكتبة كلمات وجمل ترتيب
- مكتبة أفعال
- مكتبة قواعد
- 7 مجموعات دروس للضمائر
- Service Worker للعمل دون إنترنت بعد أول تحميل ناجح

## ملاحظة الصوت
Whisper والخطوط الخارجية يحتاجان اتصالًا في أول استخدام حتى يدخلا الكاش. Web Speech API يعتمد على دعم المتصفح.
