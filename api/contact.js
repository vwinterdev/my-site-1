export default async function handler(req, res) {
  // Разрешаем только POST запросы
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS заголовки
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Обработка preflight запроса
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { name, email, message } = req.body;

    // Валидация данных
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Все поля обязательны для заполнения' 
      });
    }

    // Проверка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Неверный формат email' 
      });
    }

    // Данные бота
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('Missing environment variables');
      return res.status(500).json({ 
        error: 'Ошибка конфигурации сервера' 
      });
    }

    // Формируем сообщение для Telegram
    const telegramMessage = `🔔 *Новое сообщение с сайта-портфолио*

👤 *Имя:* ${name}
📧 *Email:* ${email}

💬 *Сообщение:*
${message}

⏰ *Время:* ${new Date().toLocaleString('ru-RU', { 
  timeZone: 'Europe/Moscow' 
})}`;

    // Отправляем сообщение в Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: telegramMessage,
          parse_mode: 'Markdown',
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error('Telegram API error:', errorData);
      throw new Error('Failed to send message to Telegram');
    }

    // Успешный ответ
    return res.status(200).json({ 
      success: true, 
      message: 'Сообщение успешно отправлено!' 
    });

  } catch (error) {
    console.error('Error sending message:', error);
    return res.status(500).json({ 
      error: 'Произошла ошибка при отправке сообщения. Попробуйте позже.' 
    });
  }
}
