require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');

const BOT_KEY = process.env.BOT_KEY;
const CHAT_ID = process.env.CHAT_ID;

const bot = new TelegramBot(token, { polling: true });

const welcomeMsg = `
Welcome to BankDefi telegram group!
The offical DApp site is: https://bankdefi.finance/
Please raise security awareness and guard against online fraud.
Admins will never first DM with you!
------------
欢迎来到BankDefi官方telegram群！
官方DApp应用网址是：https://bankdefi.finance/
请提高安全意识，警惕网络诈骗！
请注意，管理员不会主动与任何人发起私聊！
`

bot.on('new_chat_members', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, welcomeMsg);
});
