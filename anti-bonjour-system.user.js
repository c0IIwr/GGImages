// ==UserScript==
// @name         anti-bonjour-system
// @version      0.1
// @description  Отображает удаленные сообщения на гг
// @author       c0IIwr
// @match        https://goodgame.ru/*
// ==/UserScript==

(function() {
    'use strict';

    function unhideDeletedMessages() {
        const deletedMessages = document.querySelectorAll('.message-block.deleted');
        deletedMessages.forEach(message => {
            message.classList.remove('deleted');
        });
    }

    const observer = new MutationObserver(unhideDeletedMessages);
    observer.observe(document.body, { childList: true, subtree: true });
})();
