// ==UserScript==
// @name        paster
// @namespace   https://github.com/tokune/paster
// @version     0.1
// @description enable paste password on alipay
// @match       https://auth.alipay.com/*
// @copyright   tokune
// ==/UserScript==

window.onload=function(){ 
    input=document.getElementsByTagName('input');
    for(i=0;i<input.length;i++){console.log(input[i].setAttribute('onpaste',''))};
}
