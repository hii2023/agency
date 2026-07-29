/* ===================================================================
   Axiotrix | close the mobile menu after tapping a sub-page link

   Problem: tapping a dropdown item only changes the URL hash, so nothing
   reloads and menuzord leaves the burger menu open, covering the content
   the visitor just asked for.

   Two things this has to handle:

   1. menuzord CLONES the nav, so there are three .menuzord-menu elements
      (#top-primary-nav plus two in #top-primary-nav-clone). Any fix that
      uses querySelector picks a hidden copy and appears to do nothing,
      so every copy is closed here.

   2. Some dropdowns reuse ONE anchor for every item. Financial Services
      points all five links at accounting-finance#services, so when you
      are already on that page the hash never changes and hashchange
      never fires. That is why a hashchange-only fix worked on Healthcare
      and Digital Solutions but not on Financial Services.

   So both signals are used:
     - a click on a submenu item, which covers the repeated-anchor case
     - hashchange, which covers anchors followed any other way

   The click handler is scoped to .dropdown a on purpose. The expand
   arrow (span.indicator) lives INSIDE the parent <a>, so a handler on
   all menu links would also fire when opening a submenu and close the
   menu instead of expanding it. Submenu items never contain an arrow.

   Desktop is untouched: nothing runs above 991px, and if the window is
   widened the inline hiding is removed so menuzord takes over again.

   Paste at the very end of js/custom.js
   =================================================================== */
(function () {
  function closeAllMenus() {
    var menus = document.querySelectorAll('.menuzord-menu');
    for (var i = 0; i < menus.length; i++) {
      menus[i].style.display = 'none';
      var dropdowns = menus[i].querySelectorAll('.dropdown');
      for (var j = 0; j < dropdowns.length; j++) {
        dropdowns[j].style.display = '';
      }
    }
  }

  /* submenu item tapped: always close, even when the hash does not change */
  document.addEventListener('click', function (e) {
    if (window.innerWidth > 991) return;
    var link = e.target.closest ? e.target.closest('.menuzord-menu .dropdown a') : null;
    if (!link) return;
    closeAllMenus();
  }, true);

  /* any other same-page anchor */
  window.addEventListener('hashchange', function () {
    if (window.innerWidth > 991) return;
    closeAllMenus();
  });

  /* hand control back to menuzord if the window grows to desktop */
  window.addEventListener('resize', function () {
    if (window.innerWidth > 991) {
      var menus = document.querySelectorAll('.menuzord-menu');
      for (var i = 0; i < menus.length; i++) {
        if (menus[i].style.display === 'none') menus[i].style.display = '';
      }
    }
  });
})();
