import $ from 'jquery';
import platform from 'platform';
import svg4everybody from 'svg4everybody';
/* eslint-disable */
import objectFitPolyfill from 'objectFitPolyfill';
import device from 'current-device';
/* eslint-enable */

import { STestsExecuted } from '../components/sections/s-tests-executed/s-tests-executed';
import { BTabs } from '../components/blocks/b-tabs/b-tabs';

(() => {
  'use strict';

  const App = (() => {
    window.$ = $;

    /* eslint-disable */
    const $document = $(document),
      $window = $(window),
      $html = $document.find('html'),
      $body = $html.find('body'),
      $wrapper = $body.find('.wrapper'),
      $sTestsExecuted = $body.find('.s-tests-executed'),
      $bTabs = $body.find('.b-tabs');
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

        $sTestsExecuted.length && STestsExecuted.init($sTestsExecuted);
        $bTabs.length && BTabs.init($document, $bTabs);

        $document.on('click.toggleVacancy', '.js-vacancy', function () {
          const activeClassName = '_active';
          const slideTime = 300;
          let headerHeight = 59;
          let vacanviesOffset = 9;

          $(this).next().slideToggle(slideTime)
            .closest('.l-vacancies__vacancy').toggleClass(activeClassName)
            .siblings().removeClass(activeClassName)
            .find('.l-vacancies__inner').slideUp(slideTime);

          setTimeout(() => {
            let activeVacancy = $('.l-vacancies__vacancy._active');

            if (activeVacancy.length) {
              $('html, body').animate({ scrollTop: activeVacancy.offset().top - (headerHeight + vacanviesOffset) }, slideTime);
            }
          }, slideTime);
        });


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
  })(
    STestsExecuted,
    BTabs
  );

  $(document).ready(function () {
    App.init();
  });
})();
