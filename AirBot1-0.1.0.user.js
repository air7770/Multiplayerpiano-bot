// ==UserScript==
// @name         AirBot
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Bot for MPP
// @author       Airs7770
// @match        https://*multiplayerpiano.net*
// @include      *https://multiplayerpiano.net*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

MPP.client.on("a", function(msg) {
     let cmd = msg.a;
     let mcs = MPP.chat.send;
var a;
 var b;
    var input;

if (cmd == "!помощь") {
   mcs("Помощь: !версия, !создатель, !новости, !инфа");
}

if (cmd == "!версия") {
   mcs("Версия бота 0.1.0 BETA");
}
if (cmd == "!создатель") {
   mcs("Создатель Airs7770 (СаНиЧкА СнИмАеШь?)");
   mcs("Telegramm: @Airs7770");
}
if (cmd == "!инфа") {
   mcs("Бот создан как для развлечений, так и для помощи")
}
if (cmd == "!новости") {
   mcs("Открыт бета-тест");
}
if (cmd == "!test") {
   mcs("Test command")
}
});