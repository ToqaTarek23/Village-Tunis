document.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll('.gallery-item');
  if (!items.length) return;

  function closeAll() {
    document.body.classList.remove('no-scroll');
    items.forEach(function (it) { it.classList.remove('lightbox'); });
  }

  items.forEach(function (item) {
    item.addEventListener('click', function () {
      var isOpen = item.classList.contains('lightbox');
      if (isOpen) { closeAll(); return; }
      closeAll();
      item.classList.add('lightbox');
      document.body.classList.add('no-scroll');
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeAll(); }
  });

  document.addEventListener('click', function (e) {
    var open = document.querySelector('.gallery-item.lightbox');
    if (!open) return;
    if (!open.contains(e.target)) { closeAll(); }
  });
});


