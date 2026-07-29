/* ===================================================================
   Axiotrix | close the mobile menu after tapping a sub-page link

   Problem: tapping a dropdown item such as "Know your numbers" only
   changes the URL hash, so nothing reloads and menuzord leaves the
   burger menu open, covering the content the visitor just asked for.

   Why the earlier click-based version did nothing:
   1. menuzord CLONES the nav, so there are three .menuzord-menu
      elements on the page (#top-primary-nav plus two in
      #top-primary-nav-clone). document.querySelector returned a hidden
      copy, whose computed display is "none", so the guard exited every
      single time.
   2. The expand arrow (span.indicator) sits INSIDE the parent <a>, so a
      click-based handler also fired when opening a submenu, closing the
      whole menu instead of expanding it.

   This version listens for hashchange instead, which fires only in the
   broken case: a same-page anchor link. It never fires when the arrow is
   tapped, and full page links reload anyway. All menu copies are closed,
   so it does not matter which one is on screen.

   Desktop is untouched: nothing happens above 991px, and if the window
   is widened the inline hiding is removed so menuzord takes over again.

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
