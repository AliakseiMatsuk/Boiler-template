const BTabs = (() => {

  function init($document, $bTabs) {

    const $tabsItem = $bTabs.find('.js-toggleTabContent');
    const activeClassName = '_active';

    $document.on('click.openTabItem', '.js-toggleTabBtn', function () {
      let $this = $(this);
      let index = $this.parent().index();

      $bTabs.find('.' + activeClassName).removeClass(activeClassName);
      $tabsItem.eq(index).addClass(activeClassName);
      $this.addClass(activeClassName);
    });
  }

  return {
    init($document, $bTabs) {
      console.log('Tabs init');

      init($document, $bTabs);
    }
  };
})();

export { BTabs };
