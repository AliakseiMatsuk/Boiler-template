const STestsExecuted = (() => {

  function initCounter($sTestsExecuted) {
    const INITIAL_TESTS_EXECUTED = 2496815393;
    const DATE_SITE_DEMO = 1512069138100;
    let $testsCounter = $sTestsExecuted.find('.js-tests-counter'),
      prevValue = 0;

    function getCurrentTestsCount() {
      return INITIAL_TESTS_EXECUTED + Math.round((Date.now() - DATE_SITE_DEMO) / 1000);
    }

    function getCurrentTestsValue() {
      return Math.max(getCurrentTestsCount() - Math.round(Math.random() * 4), prevValue);
    }

    function formattedValue(val) {
      return val.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').replace('.0', '');
    }

    function updateCounter() {
      let currentValue = getCurrentTestsValue();
      if (prevValue !== currentValue) {
        $testsCounter
          .text(formattedValue(currentValue))
          .addClass('_blink');
        setTimeout(() => $testsCounter.removeClass('_blink'), 500);
        prevValue = currentValue;
      }
    }

    updateCounter();
    $testsCounter.removeClass('_hide');
    setInterval(updateCounter, 1000);
  }

  return {
    init($sTestsExecuted) {
      console.log('STestsExecuted init');

      initCounter($sTestsExecuted);
    }
  };
})();

export { STestsExecuted };
