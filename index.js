const express = require('express');
const app = express();

// صفحة رئيسية محسّنة
app.get('/', (req, res) => {
  res.send(`
    <html lang="ar">
      <head>
        <meta charset="UTF-8">
        <title>🚀 DarkVideo AI</title>
        <style>
          body { 
            background: #0d0d0d; 
            color: #f5f5f5; 
            font-family: Arial, sans-serif; 
            text-align: center; 
            padding: 50px;
          }
          h1 { color: #00ffcc; }
          p { font-size: 18px; margin: 20px 0; }
          a {
            background: #00ffcc;
            color: #0d0d0d;
            padding: 12px 20px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
          }
          a:hover { background: #00ccaa; }
        </style>
      </head>
      <body>
        <h1>🚀 DarkVideo AI</h1>
        <p>منصتك تعمل الآن على Vercel ✅</p>
        <p>جرّب الـ API الخاص بك من هنا:</p>
        <a href="/api/status">🔗 تحقق من حالة API</a>
      </body>
    </html>
  `);
});

// صفحة API تجريبية
app.get('/api/status', (req, res) => {
  res.json({ status: 'success', message: 'DarkVideo AI API is running 🚀' });
});

module.exports = app;
