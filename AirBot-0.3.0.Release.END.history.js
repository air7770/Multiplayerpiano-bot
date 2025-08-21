// ==UserScript==
// @name         AirBot
// @namespace    https://github.com/air7770/Multiplayerpiano-bot
// @version      0.3.0-alpha
// @description  Bot for MPP
// @author       Airs7770
// @include      *https://multiplayerpiano.net*
// @match        *https://multiplayerpiano.net*
// @include      *https://multiplayerpiano.org*
// @include      *https://multiplayerpiano.com*
// @include      *https://multiplayerpiano.dev*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


MPP.client.on("a", function(msg) {
   let cmd = msg.a;
     let mcs = MPP.chat.send;

if (cmd == "!помощь" || cmd == "!п") {
   mcs("Помощь: !версия-[!вер], !создатель-[!соз], !новости-[!нов], !инфо, !цвет-[!ц], !имя, !айди");
   mcs("Развлечение: нам нужен герой-[!герой, !г], !бокс-[!кейс]");
   mcs("------------------------------------------------------------------");
   mcs("ЕСЛИ НАШЛИ ОШИБКУ В КОДЕ ИЛИ КОМАНДА НЕ РАБОТАЕТ СООБЩИТЕ МНЕ ЧЕРЕЗ ТЕЛЕГРАММ (смотреть команду !создатель)");
   mcs("Тест команды: !test - !t");
}

if (cmd == "!версия" || cmd == "!вер") {
   mcs("Версия бота 0.3.0 ALPHA. Не релиз");
}
if (cmd == "!создатель" || cmd == "!соз") {
   mcs("Создатель бота Airs7770");
   mcs("Telegramm: @Airs7770");
   mcs("Discord: @xz6318");
   mcs("Youtube: @Airs7770");
}
if (cmd == "!инфо") {
   mcs("Бот создан для развлечений и помощи, по типу узнать айди, и тд");
}
if (cmd == "!новости" || cmd == "!нов") {
   mcs("Полное переделывание бота, и новые команды");
}
if (cmd == "!цвет" || cmd == "!ц") {
   mcs("Ваш цвет: " + msg.p.color);
}
if (cmd == "!имя") {
   mcs("Ваше имя: " + msg.p.name);
}
if (cmd == "!айди" || cmd == "!ид") {
   mcs("Твой айди: " + msg.p.id);
}
if (cmd == "!t" || cmd == "!test") {
   mcs("тест");
}
if (cmd == "нам нужен герой" || cmd == "!герой" || cmd == "!г") {
   mcs("I need a hero");
   mcs("I'm holding out for a hero 'til the end of the night");
   mcs("He's gotta be strong")
   setTimeout(() => {
   mcs("And he's gotta be fast");
   }, 1500)
   mcs("And he's gotta be fresh from the fight");
}
const boxRus = ["Обычный", "Редкий!", "Эпический!!", "НЕВОЗМОЖНЫЙ!!!!", "ЛЕГЕНДАРНЫЙ!!!"];

function BoxOpenRus() {
    const indexRus = Math.floor(Math.random() * boxRus.length);
    return boxRus[indexRus];
}

if (cmd == "!бокс" || cmd == "!кейс") {
   mcs(BoxOpenRus());
}

// ------------------------------------------------------------------------

if (cmd == "!help" || cmd == "!h") {
   mcs("Cmd: !version-[!ver], !creator-[!cr], !new, !info, !color-[!c], !name, !id");
   mcs("Fun: we need a hero-[!hero], !box-[!case]");
   mcs("------------------------------------------------------------------");
   mcs("IF YOU FIND A ERROR IN THE CODE OR THE COMMAND DOES NOT WORK, PLEASE TELL ME THROUGH TELEGRAM (see the command !creator-[!cr])");
   mcs("Test cmd: !test - !t");
}
if (cmd == "!version" || cmd == "!ver") {
   mcs("Version bot 0.3.0 ALPHA. No release");
}
if (cmd == "!creator" || cmd == "!cr") {
   mcs("Bot created Airs7770");
   mcs("Telegramm: @Airs7770");
   mcs("Discord: @xz6318");
   mcs("Youtube: @Airs7770");
}
if (cmd == "we need a hero" || cmd == "!hero") {
   mcs("I need a hero");
   mcs("I'm holding out for a hero 'til the end of the night");
   mcs("He's gotta be strong");
    setTimeout(() => {
   mcs("And he's gotta be fast");
    }, 3000)
   mcs("And he's gotta be fresh from the fight");
}
if (cmd == "!new") {
   mcs("Complete redesign of the bot, and new commands");
}
if (cmd == "!info") {
   mcs("The bot is designed for entertainment and assistance, such as finding an ID, etc.");
}
if (cmd == "!color" || cmd == "!c") {
   mcs("Your color: " + msg.p.color);
}
if (cmd == "!name" || cmd == "!n") {
   mcs("Your name: " + msg.p.name);
}
if (cmd == "!id") {
   mcs("Your ID: " + msg.p.id);
}

const boxEn = ["Common", "Rare!", "Epic!!", "ARCANE!!!!", "LEGENDARY!!!"];

function BoxOpenEn() {
    const indexEn = Math.floor(Math.random() * boxEn.length);
    return boxEn[indexEn];
}

if (cmd == "!box" || cmd == "!case") {
   mcs(BoxOpenEn());
}

});
