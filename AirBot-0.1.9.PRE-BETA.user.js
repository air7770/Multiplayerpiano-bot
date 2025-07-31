// ==UserScript==
// @name         AirBot
// @namespace    http://tampermonkey.net/
// @version      0.1.9
// @description  Bot for MPP
// @author       Airs7770
// @match        https://*multiplayerpiano.net*
// @include      *https://multiplayerpiano.net*
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

if (cmd == "!помощь") {
   mcs("Помощь: !версия, !создатель, !новости, !инфа");
   mcs("ЕСЛИ НАШЛИ ОШИБКУ В КОДЕ ИЛИ КОМАНДА НЕ РАБОТАЕТ СООБЩИТЕ МНЕ ЧЕРЕЗ ТЕЛЕГРАММ (смотреть команду !создатель)")
}

if (cmd == "!версия") {
   mcs("Версия бота 0.1.0 BETA");
}
if (cmd == "!создатель") {
   mcs("Создатель бота Airs7770");
   mcs("Telegramm: @Airs7770");
}
if (cmd == "!инфа") {
   mcs("Бот создан как для развлечений, так и для помощи");
}
if (cmd == "!новости") {
   mcs("Добавлены английские команды, также теперь на GitHub можно скачать этот бот");
}

// Конец русских команд

if (cmd == "!help") {
   mcs("Help: !version, !owner, !new, !info");
}
if (cmd == "!version") {
   mcs("Version bot 0.1.9 PRE-BETA FOR 0.2.0");
}
if (cmd == "!owner") {
   mcs("Bot created Airs7770");
   mcs("Telegramm: @Airs7770");
}
if (cmd == "!new") {
   mcs("English commands have been added, and you can now download this bot from GitHub");
}
if (cmd == "!info") {
   mcs("The bot is designed for both entertainment and assistance.");
}

});