// ==UserScript==
// @name         AirBot
// @namespace    https://github.com/air7770/Multiplayerpiano-bot
// @version      0.2.9
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

/*
  ПРОШУ, НЕ БЕЙТЕ ЗА ЛОМАНЫЙ АНГЛИЙСКИЙ =(
*/

MPP.client.on("a", function(msg) {
     let cmd = msg.a;
     let mcs = MPP.chat.send;
var a;
 var b;
    var input;

if (cmd == "!помощь" || cmd == "!п") {
   mcs("Помощь: !версия, !создатель, !новости, !инфо, !цвет, !имя, !айди, !бсКейс");
   mcs("ЕСЛИ НАШЛИ ОШИБКУ В КОДЕ ИЛИ КОМАНДА НЕ РАБОТАЕТ СООБЩИТЕ МНЕ ЧЕРЕЗ ТЕЛЕГРАММ (смотреть команду !создатель)");
   mcs("Тест команды: !Тест - !т, !тест");
}

if (cmd == "!версия" || cmd == "!вер") {
   mcs("Версия бота 0.2.9 Бета тест перед 0.3.0");
}
if (cmd == "!создатель" || cmd == "!соз") {
   mcs("Создатель бота Airs7770");
   mcs("Telegramm: @Airs7770");
   mcs("Discord: @xz6318");
   mcs("Youtube: @Airs7770");
}
if (cmd == "!инфо") {
   mcs("Бот создан как для развлечений, так и для помощи");
}
if (cmd == "!новости" || cmd == "!нов") {
   mcs("Теперь можно узнать свою информацию!");
}
if (cmd == "!цвет" || cmd == "!ц") {
   mcs("Ваш цвет: " + msg.p.color);
}
if (cmd == "!имя") {
   mcs("Ваше имя: " + msg.p.name);
}
if (cmd == "!айди" ) {
   mcs("Твой айди: " + msg.p.id);
}
if (cmd == "!t" || cmd == "!test") {
   mcs("тест");
}
if (cmd == "нам нужен герой" || cmd == "!герой" || cmd == "!г") {
   mcs("I need a hero");
   mcs("I'm holding out for a hero 'til the end of the night");
   mcs("He's gotta be strong");
   mcs("And he's gotta be fast");
   mcs("And he's gotta be fresh from the fight");
}
// Конец русских команд

if (cmd == "!help" || cmd == "!h") {
   mcs("Help: !version, !owner, !new, !info, !color, !name, !id");
}
if (cmd == "!version" || cmd == "!ver") {
   mcs("Version bot 0.2.9 Beta-test for 0.3.0");
}
if (cmd == "!owner" || cmd == "!ow") {
   mcs("Bot created Airs7770");
   mcs("Telegramm: @Airs7770");
}
if (cmd == "!new") {
   mcs("Now you can find out your information!");
}
if (cmd == "!info") {
   mcs("The bot is designed for both entertainment and assistance.");
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

// mini game

const bsc = ["Обычный", "Редкий", "Эпик!", "МИФИК!!", "ЛЕГЕНДАРНЫЙ!!!"];

function bsCase() {
    const index1 = Math.floor(Math.random() * bsc.length);
    return bsc[index1];
}

if (cmd == "!бсКейс" || cmd == "!бск") {
   mcs(bsCase());
}

// end

});