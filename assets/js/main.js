import $ from 'jquery';
import platform from 'platform';
import svg4everybody from 'svg4everybody';
/* eslint-disable */
import objectFitPolyfill from 'objectFitPolyfill';
import device from 'current-device';
/* eslint-enable */
(() => {
  'use strict';

  const App = (() => {
    /* eslint-disable */
    const $document = $(document),
      $window = $(window),
      $html = $document.find('html'),
      $body = $html.find('body'),
      $wrapper = $body.find('.wrapper');
    /* eslint-enable */
    return {
      init() {

        /* eslint-disable no-alert, no-console */
        var style = 'padding: 5px 10px; background: linear-gradient(gold, orangered); font: 1.3rem Arial, sans-serif; color: white;';
        console.group('%c%s', style, 'App Initialization');
        console.log('App.init');
        console.groupEnd();
        /* eslint-enable no-alert, no-console */
        $html.addClass(`_${platform.name.toLowerCase()}`);


        $.get('images/sprite-svg.svg', function (data) {
          let svgWrap = document.createElement('noindex');
          svgWrap.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
          document.body.insertBefore(svgWrap, document.body.childNodes[0]);
        });

        /* eslint-disable */
        svg4everybody();
        /* eslint-enable */
      }

    };
  })();

  $(document).ready(function () {
    App.init();
  });
})();
