require("dotenv").config({ path: ".env" });
const TelegramBot = require("node-telegram-bot-api");
const TOKEN = process.env.BOT_TOKEN?.trim();
const bot = new TelegramBot(TOKEN, { polling: true });


console.log("Bot is running...");

/* ===============================
   1️⃣ WELCOME MESSAGE ON JOIN
   =============================== */

bot.on("new_chat_members", (msg) => {
  const chatId = msg.chat.id;

  msg.new_chat_members.forEach((user) => {
    // Use username if available, otherwise fallback to first name
    const name = user.username
      ? `@${user.username}`
      : user.first_name || "there";

    const welcomeMessage = `👋 Welcome ${name} to ${msg.chat.title}! 🎉`;

    bot.sendMessage(chatId, welcomeMessage);
  });
});

/* ===============================
   2️⃣ SPACE FOR YOUR FUTURE LOGIC
   =============================== */

bot.on("message", (msg) => {
  // 👇 YOU can write anything here later
  const chatId = msg.chat.id;
  const text = msg.text;
  bot.sendMessage(chatId, `Hello 😘 call me on this ${7976617672} for fun`);
});
