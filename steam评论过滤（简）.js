// ==UserScript==
// @name         steam过滤无意义评论（简版）
// @namespace    妖伊社
// @version      0.1
// @description  筛选和过滤“我是傻逼”“牛子精灵”“帮X朋友口X天”等无意义评论
// @author       妖伊社
// @match        https://store.steampowered.com/app/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        unsafeWindow
// @license      MIT
// ==/UserScript==
 
(function() {
    'use strict';
    var fw = ["我是傻", "口了","奖励这","心中有党","这里养了","牛子精灵","牛子增加","牛子加","牛子变","牛子缩","牛子短","给我点赞","点数","免费摸","赞="];
 
    function steam_filterComments(){
        var rv = document.getElementsByClassName("content");
        for (var i=0; i < rv.length; i++)
        {
            try {
                var t0 = rv[i].innerHTML;
                var t1 = t0;
                for(var j=0; j<fw.length; j++){ t1 = t1.replace(fw[j], "")}
                if (t1!=t0){rv[i].innerHTML = "";}
            }
            catch (e) {
                continue;
            }
        }
        setTimeout(function() { steam_filterComments(); }, 1000);
    }
 
    steam_filterComments();
})();