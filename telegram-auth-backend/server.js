const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const BOT_TOKEN = 'ВАШ_ТОКЕН_БОТА';
const SECRET_KEY = 'ВАШ_СЕКРЕТНЫЙ_КЛЮЧ'; // Придумайте сложный ключ

// Хранилище данных (в реальном проекте используйте БД)
const userStorage = {};

// Вебхук для Telegram
app.post(`/webhook/${SECRET_KEY}`, async (req, res) => {
  const { message } = req.body;
  
  if (message && message.text === '/start') {
    const chatId = message.chat.id;
    const userId = message.from.id;
    const username = message.from.username || `${message.from.first_name}${message.from.last_name ? ' ' + message.from.last_name : ''}`;
    
    // Генерируем уникальный код для авторизации
    const authCode = Math.random().toString(36).substring(2, 10);
    
    // Сохраняем данные пользователя
    userStorage[authCode] = {
      chatId,
      userId,
      username,
      authorized: false
    };
    
    // Отправляем пользователю ссылку для авторизации
    const authLink = `https://ваш-сайт.com/auth?code=${authCode}`;
    await sendTelegramMessage(chatId, `Для авторизации перейдите по ссылке: ${authLink}`);
  }
  
  res.sendStatus(200);
});

// Проверка статуса авторизации
app.get('/check-auth', (req, res) => {
  const { code } = req.query;
  
  if (userStorage[code] && userStorage[code].authorized) {
    res.json({
      status: 'authorized',
      user: {
        id: userStorage[code].userId,
        username: userStorage[code].username
      }
    });
    delete userStorage[code];
  } else {
    res.json({ status: 'pending' });
  }
});

// Подтверждение авторизации
app.post('/confirm-auth', (req, res) => {
  const { code } = req.body;
  
  if (userStorage[code]) {
    userStorage[code].authorized = true;
    res.json({ status: 'success' });
  } else {
    res.status(404).json({ status: 'error', message: 'Code not found' });
  }
});

// Функция отправки сообщения в Telegram
async function sendTelegramMessage(chatId, text) {
  try {
    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: chatId,
      text: text
    });
  } catch (error) {
    console.error('Error sending Telegram message:', error);
  }
}

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
  // Установка вебхука (выполняется один раз)
  axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/setWebhook`, {
    url: `https://ваш-домен.com/webhook/${SECRET_KEY}`
  }).then(response => {
    console.log('Webhook set successfully');
  }).catch(error => {
    console.error('Error setting webhook:', error);
  });
});