// ==UserScript==
// @name         破解超星作业编辑器粘贴限制
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       Zeng Xiangfei
// @homepage     https://github.com/zxf1023818103/enable-chaoxing-editor-paste
// @supportURL   https://github.com/zxf1023818103/enable-chaoxing-editor-paste/issues
// @compatible   chrome
// @compatible   firefox
// @compatible   edge
// @compatible   safari
// @description  破解超星作业编辑器粘贴限制。
// @license      MIT
// @match        https://mooc1-2.chaoxing.com/work/doHomeWorkNew?*
// @grant        none
// ==/UserScript==

(function() {
    for (var editorName in UE.instants) { UE.instants[editorName].__allListeners.beforepaste = null }
})();
