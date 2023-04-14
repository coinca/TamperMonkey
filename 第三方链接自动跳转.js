// ==UserScript==
// @name         知乎、CSDN自动跳转
// @namespace    妖伊社
// @version      0.1
// @description  遇到跳转提示时自动打开对应网页，减少点击步骤。
// @author       妖伊社
// @match        http://link.zhihu.com/*
// @match        https://link.zhihu.com/*
// @match        https://link.csdn.net/*
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        unsafeWindow
// @license      MIT
// ==/UserScript==
 
(function() {
    'use strict';
    const url = window.location.href;
    var urlGoto = "";
 
    function TranslateUrl(urlOrigin){
        var s = urlOrigin.replace("%3A", ":");
        while(s.includes("%2F")){
            s = s.replace("%2F", "/");
        }
        return s;
    }
    function ZhiHu(){
        if(!url.includes("link.zhihu.com")){ return; }
        urlGoto = TranslateUrl(url.substring(url.indexOf("target=")+7, url.length));
        window.location.href = urlGoto;
    }
   function CSDN(){
        if(!url.includes("link.csdn.net")){ return; }
        urlGoto = TranslateUrl(url.substring(url.indexOf("target=")+7, url.length));
        window.location.href = urlGoto;
    }
 
    ZhiHu();
    CSDN();
})();