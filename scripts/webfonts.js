'use strict';

(function () {

    'use strict';

    var fontPath = 'fonts/woff-01.css';

    function addStyle() {
        var style = document.createElement('style');
        style.rel = 'stylesheet';
        document.head.appendChild(style);
        style.textContent = localStorage.rcFonts;
    }

    try {

        if (localStorage.rcFonts) {
            addStyle();

            // nothing is local storage
        } else {

            var request = new XMLHttpRequest();
            request.open('GET', fontPath, true);

            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {

                    // 1st add to localStorage, then load it
                    localStorage.rcFonts = request.responseText;
                    addStyle();
                }
            };

            request.send();
        }
    } catch (ex) {
        // TODO: Handle FOUC when WOFF files are not supported.
    }
})();
//# sourceMappingURL=webfonts.js.map
