// ==UserScript==
// @name         AirBot
// @namespace    http://tampermonkey.net/
// @version      0.2.0
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
   mcs("Помощь: !версия, !создатель, !новости, !инфа, !цвет, !имя");
   mcs("ЕСЛИ НАШЛИ ОШИБКУ В КОДЕ ИЛИ КОМАНДА НЕ РАБОТАЕТ СООБЩИТЕ МНЕ ЧЕРЕЗ ТЕЛЕГРАММ (смотреть команду !создатель)")
}

if (cmd == "!версия") {
   mcs("Версия бота 0.2.0");
}
if (cmd == "!создатель") {
   mcs("Создатель бота Airs7770");
   mcs("Telegramm: @Airs7770");
}
if (cmd == "!инфа") {
   mcs("Бот создан как для развлечений, так и для помощи");
}
if (cmd == "!новости") {
   mcs("Теперь можно узнать свою информацию!");
}
if (cmd == "!цвет") {
   mcs("Ваш цвет: " + msg.p.color);
}
if (cmd == "!имя") {
   mcs("Ваше имя: " + msg.p.name);
}
if (cmd == "!айди") {
   mcs("Твой айди: " + msg.p.id)
}
// Конец русских команд

if (cmd == "!help") {
   mcs("Help: !version, !owner, !new, !info, !color, !name");
}
if (cmd == "!version") {
   mcs("Version bot 0.2.0");
}
if (cmd == "!owner") {
   mcs("Bot created Airs7770");
   mcs("Telegramm: @Airs7770");
}
if (cmd == "!new") {
   mcs("Now you can find out your information!");
}
if (cmd == "!info") {
   mcs("The bot is designed for both entertainment and assistance.");
}
if (cmd == "!color") {
   mcs("Your color: " + msg.p.color);
}
if (cmd == "!name") {
   mcs("Your name: " + msg.p.name);
}
    if (cmd == "!цвет") {
   mcs("Ваш цвет: " + msg.p.color);
}
if (cmd == "!id") {
   mcs("Your ID: " + msg.p.id);
}
});