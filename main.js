// ==UserScript==
// @name         popcat2starburst
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  KO NO KIRITO DA!
// @author       JCxYIS
// @match        https://popcat.click/
// @icon         https://www.google.com/s2/favicons?domain=popcat.click
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    GM_addStyle ( `
        @font-face { 
            font-family: 'sao'; 
            src:  
                url('fonts/sao-latin.otf'); 
        }

        body {
            font-family: 'sao';
        }
    ` );
})();