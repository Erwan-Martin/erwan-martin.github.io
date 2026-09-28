(function () {
  // Dark-mode toggle (remembered per visitor)
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var dark = root.dataset.theme
        ? root.dataset.theme === 'dark'
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.dataset.theme = dark ? 'light' : 'dark';
      try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
    });
  }

  // Research interests: list + detail on wide screens, accordion on narrow ones
  var narrow = window.matchMedia('(max-width: 860px)');
  document.querySelectorAll('[data-ri]').forEach(function (ri) {
    var items = Array.prototype.slice.call(ri.querySelectorAll('.ri-item'));
    function set(item, on) {
      item.classList.toggle('is-active', on);
      item.querySelector('.ri-tab').setAttribute('aria-expanded', on ? 'true' : 'false');
    }
    items.forEach(function (item) {
      item.querySelector('.ri-tab').addEventListener('click', function () {
        var wasOpen = item.classList.contains('is-active');
        items.forEach(function (other) { set(other, false); });
        // On wide screens one theme is always shown; on phones it can be collapsed
        set(item, narrow.matches ? !wasOpen : true);
      });
    });
    // Leaving phone layout with everything closed: reopen the first theme
    narrow.addEventListener('change', function (e) {
      if (!e.matches && !ri.querySelector('.ri-item.is-active')) set(items[0], true);
    });
    if (narrow.matches) set(items[0], false);
  });

  // Simple tabs (thesis abstract / lay summary)
  document.querySelectorAll('[data-tabs]').forEach(function (box) {
    var tabs = box.querySelectorAll('[role="tab"]');
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(i); });
      tab.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          var n = (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
          select(n); tabs[n].focus();
        }
      });
    });
    function select(i) {
      tabs.forEach(function (t, j) {
        var on = i === j;
        t.setAttribute('aria-selected', on);
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
    }
  });
})();
