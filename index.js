import "dotenv/config";
import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

// === إعدادات البيئة ===
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "ضع_التوكن_هنا";
const CHAT_ID = process.env.TELEGRAM_CHAT_ID || "ضع_معرف_الشات_هنا";

app.get("/", (req, res) => {
  res.send("🚀 DarkVideo AI Bot is running...");
});

// === مثال إرسال رسالة لتليجرام ===
async function sendMessage(text) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text })
    });
    console.log("✅ تم إرسال الرسالة:", text);
  } catch (err) {
    console.error("❌ خطأ في إرسال الرسالة:", err);
  }
}

// === تشغيل السيرفر ===
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 DarkVideo AI يعمل الآن على المنفذ ${PORT}`);
  // أرسل رسالة تجريبية عند التشغيل
  sendMessage("✅ DarkVideo AI Bot تم تشغيله بنجاح!");
});
