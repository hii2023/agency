/* ===================================================================
   Axiotrix | close the mobile menu when a menu link is clicked

   Problem: menuzord keeps the burger menu and its open submenu on screen
   after a link is tapped. When the link is an anchor on the page you are
   already on (for example digital-solutions#reports), nothing reloads, so
   the menu stays open covering the content and the visitor has to close
   it by hand.

   Fix: close the menu and any open submenu as soon as a menu link is
   clicked. This runs in the capture phase, before the browser follows the
   link, so by the time the browser jumps to the anchor the menu is
   already closed and the layout is final. The browser's own anchor
   handling does the scrolling.

   Desktop is untouched: the handler exits when the menu is not in its
   mobile (displayed) state.

   Add before </body> in template.php.
   =================================================================== */
(function () {
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('.menuzord-menu a[href]') : null;
    if (!a) return;

    var href = a.getAttribute('href') || '';
    if (!href || href === '#' || href.indexOf('javascript:') === 0) return;

    var menu = document.querySelector('.menuzord-menu');
    if (!menu) return;

    /* On desktop the menu is laid out horizontally and always visible,
       so there is nothing to close. Only act when the burger menu is
       showing. */
    if (window.getComputedStyle(menu).display === 'none') return;
    if (window.innerWidth > 991) return;

    menu.style.display = 'none';

    var dropdowns = document.querySelectorAll('.menuzord-menu .dropdown');
    for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].style.display = '';
    }
  }, true);
})();
