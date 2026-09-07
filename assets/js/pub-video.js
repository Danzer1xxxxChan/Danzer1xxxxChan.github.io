/* Publication card videos: poster first, load + play only when visible,
   tap-to-play fallback where autoplay is blocked (WeChat / X5, iOS low power). */
(function () {
  var list = Array.prototype.slice.call(document.querySelectorAll('video.pub-video'));
  if (!list.length) return;

  function attach(v) {
    if (v.getAttribute('data-loaded')) return;
    var s = document.createElement('source');
    s.src = v.getAttribute('data-src');
    s.type = 'video/mp4';
    v.appendChild(s);
    v.setAttribute('data-loaded', '1');
    v.load();
  }

  function btnOf(v) {
    return v.parentNode ? v.parentNode.querySelector('.pub-video__play') : null;
  }

  function tryPlay(v) {
    attach(v);
    var p = v.play();
    if (p && p.then) {
      p.then(function () {
        var b = btnOf(v);
        if (b) b.hidden = true;
      })['catch'](function () {
        var b = btnOf(v);
        if (b) b.hidden = false;
      });
    }
  }

  document.addEventListener('click', function (e) {
    var t = e.target;
    while (t && t !== document && !(t.className && String(t.className).indexOf('pub-video__play') >= 0)) {
      t = t.parentNode;
    }
    if (!t || t === document) return;
    var v = t.parentNode.querySelector('video.pub-video');
    if (!v) return;
    t.hidden = true;
    attach(v);
    v.play();
  });

  if (typeof IntersectionObserver === 'function') {
    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        var v = entries[i].target;
        if (entries[i].isIntersecting) tryPlay(v);
        else if (!v.paused) v.pause();
      }
    }, { rootMargin: '150px 0px' });
    for (var i = 0; i < list.length; i++) io.observe(list[i]);
  } else {
    for (var j = 0; j < list.length; j++) tryPlay(list[j]);
  }

  /* WeChat blocks playback until its JS bridge is ready. */
  document.addEventListener('WeixinJSBridgeReady', function () {
    for (var k = 0; k < list.length; k++) {
      var r = list[k].getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) tryPlay(list[k]);
    }
  }, false);
})();
