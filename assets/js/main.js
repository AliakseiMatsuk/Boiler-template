import $ from './vendor/jquery-3.3.1.min'

(() => {
    'use strict';

    const App = (() => {

        const $document = $(document),
          $window = $(window),
          $html = $document.find('html'),
          $body = $html.find('body'),
          $wrapper = $body.find('.wrapper');
        return {
            init() {

                var style = 'padding: 5px 10px; background: linear-gradient(gold, orangered); font: 1.3rem Arial, sans-serif; color: white;';
                console.group('%c%s', style, 'App Initialization');
                console.log('App.init');
                console.groupEnd();

                $.get('images/sprite-svg.svg', function (data) {
                    let svgWrap = document.createElement('noindex');
                    svgWrap.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
                    document.body.insertBefore(svgWrap, document.body.childNodes[0]);
                });
                svg4everybody();
            }

        };
    })();

    $(document).ready(function () {
        App.init();
    });
})();
