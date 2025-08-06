const express = require("express");
const app = express();

app.use(express.json());

// الصفحة الرئيسية
app.get("/", (req, res) => {
  res.send("<h1>🚀 DarkVideo AI is live!</h1><p>منصتك تعمل الآن على Vercel ✅</p>");
});

// صفحة API للتأكد أن السيرفر يعمل
app.get("/api/status", (req, res) => {
  res.json({ status: "success", message: "DarkVideo AI API is running 🚀" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
