/* Portfolio logic — content lives in data.js */
(function () {
  'use strict';

  var root = document.documentElement;
  var lang = 'en';
  var theme = 'dark';
  var filter = 'all';
  try {
    lang = localStorage.getItem('lang') === 'ar' ? 'ar' : 'en';
    theme = localStorage.getItem('theme') || (window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  } catch (e) {}

  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };
  var tx = function (o) { return (o && typeof o === 'object') ? (o[lang] || o.en || '') : (o || ''); };
  var ui = function (k) { return (I18N[lang] && I18N[lang][k]) || I18N.en[k] || ''; };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]; }); };

  var ICON = {
    sun: '<path d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.66-5.66 1.41-1.41M4.93 19.07l1.41-1.41m0-11.32L4.93 4.93m14.14 14.14-1.41-1.41M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/>',
    moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',
    github: '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.9.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" fill="currentColor" stroke="none"/>',
    link: '<path d="M10 14a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5M14 10a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
    whatsapp: '<path d="M3 21l1.65-4.9A8.5 8.5 0 1 1 8 19.4L3 21Z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a3.5 3.5 0 0 1-1.6-1.6l.8-1-1-2L9 9.5Z"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v6M8 7.5v.01M12 16v-6m0 3a3 3 0 0 1 6 0v3"/>',
    pin: '<path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
    road: '<path d="M7 3 3 21M17 3l4 18M12 4v3m0 4v3m0 4v3"/>',
    gov: '<path d="M3 10 12 4l9 6M5 10v8m4-8v8m6-8v8m4-8v8M3 21h18"/>',
    code: '<path d="m8 8-5 4 5 4m8-8 5 4-5 4m-3-10-2 12"/>',
    people: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 20a6.5 6.5 0 0 0-3-5.5"/>',
    arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
    facebook: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5c0-.3.2-.5.5-.5Z"/>',
    cap: '<path d="M2 9l10-5 10 5-10 5L2 9Z"/><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z"/><path d="m9 12 2 2 4-4"/>',
    download: '<path d="M12 4v11m-4-4 4 4 4-4M5 20h14"/>'
  };
  var svg = function (n) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICON[n] || '') + '</svg>'; };

  /* ---------- helpers ---------- */
  // younes wordmark: "you" (bar under "ou") + coloured tail, e.g. wm(['you','cad'])
  function wm(parts, c) {
    var st = c ? ' style="--pd:' + esc(c.d) + ';--pl:' + esc(c.l) + '"' : '';
    return '<span class="wm' + (c ? ' wm-p' : '') + '"' + st + ' role="img" aria-label="' + esc(parts.join('')) + '"><span class="wm-you" aria-hidden="true">y<span class="wm-ou">ou</span></span><span class="wm-tail" aria-hidden="true">' + esc(parts[1]) + '</span></span>';
  }
  function titleHTML(p) { return p.wm ? wm(p.wm, p.color) : esc(tx(p.title)); }
  function shot(img, label, big, bigHTML) {
    if (img) return '<div class="sw-shot"><img src="' + esc(img) + '" alt="' + esc(label) + '" loading="lazy"></div>';
    return '<div class="sw-shot"><div class="ph"><div>' + (bigHTML || '<b>' + esc(big || label.charAt(0)) + '</b>') + '<div>' + esc(ui('soon')) + '</div></div></div></div>';
  }
  function featuresHTML(p, n) {
    var f = (p.features || []).slice(0, n || 99);
    if (!f.length) return '';
    return '<ul class="feat">' + f.map(function (x) { return '<li>' + esc(tx(x)) + '</li>'; }).join('') + '</ul>';
  }
  function metaHTML(p) {
    if (!p.meta || !p.meta.length) return '';
    return '<dl class="meta">' + p.meta.map(function (m) { return '<dt>' + esc(tx(m.k)) + '</dt><dd>' + esc(tx(m.v)) + '</dd>'; }).join('') + '</dl>';
  }
  function sitesHTML(p) {
    if (!p.sites || !p.sites.length) return '';
    return '<div class="sites">' + p.sites.map(function (s) {
      return '<div><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(tx(s.name)) + ' ↗</a> <span>— ' + esc(tx(s.desc)) + '</span></div>';
    }).join('') + '</div>';
  }
  function chips(arr) {
    return '<div class="chips">' + arr.map(function (c) { return '<span class="chip">' + esc(tx(c)) + '</span>'; }).join('') + '</div>';
  }
  function isPlaceholder(u) { return !u || /your-username|your-profile|example\.com|X{2,}/.test(u); }

  /* ---------- renderers ---------- */
  function renderStatic() {
    root.lang = lang; root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $$('[data-i18n]').forEach(function (el) { var k = el.getAttribute('data-i18n'); var v = ui(k); if (v) el.textContent = v; });
    var P = DATA.person;
    $$('[data-dyn="name"]').forEach(function (e) { e.textContent = tx(P.name); });
    $$('[data-dyn="brand"]').forEach(function (e) { e.textContent = tx(P.name); });
    $$('[data-dyn="title"]').forEach(function (e) { e.textContent = tx(P.title); });
    $('#langLabel').textContent = lang === 'ar' ? 'EN' : 'ع';
    document.title = tx(P.name) + ' | ' + (lang === 'ar' ? 'مهندس مدني ومطوّر برمجيات' : 'Civil Engineer & Software Builder');
    $('#heroCv').setAttribute('href', P.cv[lang] || P.cv.en);
    $('#cvEn').setAttribute('href', P.cv.en);
    $('#cvAr').setAttribute('href', P.cv.ar || '#');
    $('#cvAr').hidden = !P.cv.ar;          // hide the Arabic CV button until an Arabic PDF is set
    $('#year').textContent = new Date().getFullYear();
  }

  function renderStats() {
    $('#stats').innerHTML = DATA.stats.map(function (s) {
      return '<div class="stat"><b>' + esc(s.value) + '</b><span>' + esc(tx(s.label)) + '</span></div>';
    }).join('');
  }

  function renderAbout() {
    $('#aboutText').innerHTML = DATA.about.paragraphs.map(function (p) { return '<p>' + esc(tx(p)) + '</p>'; }).join('');
    $('#aboutCard').innerHTML = '<ul>' + DATA.about.facts.map(function (f) {
      return '<li>' + svg(f.icon) + '<div><small>' + esc(tx(f.k)) + '</small>' + esc(tx(f.v)) + '</div></li>';
    }).join('') + '</ul>';
  }

  function renderExperience() {
    $('#timeline').innerHTML = DATA.experience.map(function (e) {
      return '<article class="t-item reveal"><span class="t-period">' + esc(tx(e.period)) + '</span><h3>' + esc(tx(e.role)) +
        '</h3><p class="t-org">' + esc(tx(e.org)) + '</p><ul>' + e.points.map(function (p) { return '<li>' + esc(tx(p)) + '</li>'; }).join('') + '</ul></article>';
    }).join('');
  }

  function renderSkills() {
    $('#skillsGrid').innerHTML = DATA.skills.map(function (g) {
      return '<div class="skill-card reveal"><h3>' + svg(g.icon) + esc(tx(g.title)) + '</h3>' + chips(g.items) + '</div>';
    }).join('');
  }

  function swLinks(p, i) {
    var live = p.live ? '<a class="btn btn-primary btn-sm" href="' + esc(p.live) + '" target="_blank" rel="noopener">' + svg('link') + esc(ui('live')) + '</a>' : '';
    var gh = p.github ? '<a class="btn btn-ghost btn-sm" href="' + esc(p.github) + '" target="_blank" rel="noopener">' + svg('github') + esc(ui('code')) + '</a>' : '';
    return live + gh + '<button class="btn btn-ghost btn-sm" data-open="' + i + '">' + esc(ui('details')) + '</button>';
  }
  function pLinks(p, i) {
    var live = p.live ? '<a class="btn btn-primary btn-sm" href="' + esc(p.live) + '" target="_blank" rel="noopener">' + svg('link') + esc(ui('live')) + '</a>' : '';
    return live + '<button class="btn btn-ghost btn-sm" data-open="' + i + '">' + esc(ui('details')) + '</button>';
  }
  function colorStyle(p) { return p.color ? ' style="--pd:' + esc(p.color.d) + ';--pl:' + esc(p.color.l) + '"' : ''; }
  function renderSoftware() {
    $('#swGrid').innerHTML = DATA.software.map(function (p, i) {
      return '<article class="pcard reveal"' + colorStyle(p) + '>' +
        '<div class="pc-top">' + wm(p.wm, p.color) + '<span class="badge ' + esc(p.status.key) + '">' + esc(tx(p.status)) + '</span></div>' +
        '<small class="pc-tag">' + esc(tx(p.tag)) + '</small>' +
        '<p class="pc-desc">' + esc(tx(p.short || p.desc)) + '</p>' +
        '<div class="pc-foot">' + chips((p.stack || []).slice(0, 3)) + '<div class="sw-actions">' + pLinks(p, i) + '</div></div></article>';
    }).join('');
    $('#heroLine').innerHTML = '<h2 class="hl-h">' + esc(ui('hl_h')) + '</h2><div class="hl-grid">' + DATA.software.map(function (p) {
      return '<a class="hl-tile" href="#software"' + colorStyle(p) + '>' + wm(p.wm, p.color) + '<small>' + esc(tx(p.tag)) + '</small></a>';
    }).join('') + '</div>';
  }

  function renderFilters() {
    $('#filters').innerHTML = DATA.civilCategories.map(function (c) {
      return '<button class="filter' + (c.key === filter ? ' on' : '') + '" role="tab" aria-selected="' + (c.key === filter) + '" data-filter="' + c.key + '">' + esc(tx(c)) + '</button>';
    }).join('');
  }

  var mapSel = 0, mapType = 'm';
  function mapSrc(p) { var l = p.loc; return 'https://maps.google.com/maps?q=' + l.lat + ',' + l.lng + '&z=' + (l.z || 13) + '&t=' + mapType + '&hl=' + lang + '&output=embed'; }
  function renderMap() {
    var p = DATA.civil[mapSel]; if (!p || !p.loc) return;
    var f = $('#prMapFrame'), src = mapSrc(p);
    if (f.getAttribute('src') !== src) f.setAttribute('src', src);
    $('#prMapPlace').textContent = tx(p.loc.place);
    $('#prMapNote').textContent = p.loc.approx ? ' · ' + ui('approx') : '';
    $('#prMapLink').setAttribute('href', 'https://www.google.com/maps/search/?api=1&query=' + p.loc.lat + ',' + p.loc.lng);
    $$('[data-maptype]').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-maptype') === mapType); });
    $$('.pr-item').forEach(function (el) { el.classList.toggle('on', +el.getAttribute('data-pick') === mapSel); });
  }
  function renderCivil() {
    var list = DATA.civil.map(function (p, i) { return { p: p, i: i }; }).filter(function (x) { return filter === 'all' || x.p.cat === filter; });
    if (!list.some(function (x) { return x.i === mapSel; })) mapSel = list.length ? list[0].i : 0;
    $('#prGrid').innerHTML = list.map(function (x) {
      var p = x.p;
      return '<article class="pr-item reveal in" data-pick="' + x.i + '"><div class="pr-head"><span class="pr-pin">' + svg('pin') + '</span><h3>' + esc(tx(p.name)) + '</h3></div>' +
        '<div class="pr-meta">' +
        '<span><b>' + esc(ui('loc')) + ':</b> ' + esc(tx(p.loc.place)) + '</span>' +
        '<span><b>' + esc(ui('period')) + ':</b> ' + esc(tx(p.period)) + '</span>' +
        '<span><b>' + esc(ui('client')) + ':</b> ' + esc(tx(p.client)) + '</span>' +
        '<span><b>' + esc(ui('scope')) + ':</b> ' + esc(tx(p.scope)) + '</span>' +
        '<span><b>' + esc(ui('role')) + ':</b> ' + esc(tx(p.role)) + '</span></div></article>';
    }).join('');
    renderMap();
  }

  function contactItems() {
    var P = DATA.person, a = [];
    a.push({ i: 'mail', k: 'contact_email', v: P.email, h: 'mailto:' + P.email });
    a.push({ i: 'phone', k: 'contact_phone', v: P.phone, h: 'tel:' + P.phone.replace(/\s/g, '') });
    if (P.phone2) a.push({ i: 'phone', k: 'contact_phone2', v: P.phone2, h: 'tel:' + P.phone2.replace(/\s/g, '') });
    if (P.whatsapp) a.push({ i: 'whatsapp', k: 'contact_wa', v: P.phone, h: 'https://wa.me/' + P.whatsapp });
    if (!isPlaceholder(P.linkedin)) a.push({ i: 'linkedin', k: 'contact_li', v: P.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''), h: P.linkedin });
    if (!isPlaceholder(P.github)) a.push({ i: 'github', k: 'contact_gh', v: P.github.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''), h: P.github });   // hidden until a real link is set
    if (!isPlaceholder(P.facebook)) a.push({ i: 'facebook', k: 'contact_fb', v: P.facebook.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''), h: P.facebook });
    a.push({ i: 'pin', k: 'contact_loc', v: tx(P.location), h: '' });
    return a;
  }
  function renderContact() {
    $('#contactCards').innerHTML = contactItems().map(function (c) {
      var inner = svg(c.i) + '<div><small>' + esc(ui(c.k)) + '</small><span>' + esc(c.v) + '</span></div>';
      return c.h ? '<a class="c-card" href="' + esc(c.h) + '" target="' + (c.h.indexOf('http') === 0 ? '_blank' : '_self') + '" rel="noopener">' + inner + '</a>' : '<div class="c-card">' + inner + '</div>';
    }).join('');
    $('#footSocials').innerHTML = [['github', DATA.person.github], ['facebook', DATA.person.facebook], ['linkedin', DATA.person.linkedin], ['mail', 'mailto:' + DATA.person.email]].filter(function (s) { return !isPlaceholder(s[1]); }).map(function (s) {
      return '<a href="' + esc(s[1]) + '" target="_blank" rel="noopener" aria-label="' + s[0] + '">' + svg(s[0]) + '</a>';
    }).join('');
  }

  function renderTheme() {
    root.setAttribute('data-theme', theme);
    $('#themeIcon').innerHTML = svg(theme === 'dark' ? 'sun' : 'moon');
    var m = document.querySelector('meta[name="theme-color"]'); if (m) m.content = theme === 'dark' ? '#0A0A0A' : '#ffffff';
  }

  function renderAll() {
    renderStatic(); renderStats(); renderAbout(); renderExperience(); renderSkills();
    renderSoftware(); renderFilters(); renderCivil(); renderContact(); renderTheme();
    observe();
  }

  /* ---------- reveal on scroll ---------- */
  var io = null;
  function observe() {
    if (!('IntersectionObserver' in window)) { $$('.reveal').forEach(function (e) { e.classList.add('in'); }); return; }
    if (!io) io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    $$('.reveal:not(.in)').forEach(function (e) { io.observe(e); });
  }

  /* ---------- modal ---------- */
  var lastFocus = null;
  function openModal(i) {
    var p = DATA.software[i]; lastFocus = document.activeElement;
    var live = p.live ? '<a class="btn btn-primary btn-sm" href="' + esc(p.live) + '" target="_blank" rel="noopener">' + svg('link') + esc(ui('live')) + '</a>' : '';
    var gh = p.github ? '<a class="btn btn-ghost btn-sm" href="' + esc(p.github) + '" target="_blank" rel="noopener">' + svg('github') + esc(ui('code')) + '</a>' : '';
    var gal = (p.gallery && p.gallery.length) ? p.gallery : [p.image];
    $('#modalBody').innerHTML = '<span class="badge ' + esc(p.status.key) + '">' + esc(tx(p.status)) + '</span><h3 id="modalTitle">' + titleHTML(p) + '</h3>' +
      '<p>' + esc(tx(p.desc)) + '</p><p>' + esc(tx(p.details)) + '</p>' + metaHTML(p) +
      ((p.features && p.features.length) ? '<h4>' + esc(ui('feat_h')) + '</h4>' + featuresHTML(p) : '') +
      chips(p.stack) + sitesHTML(p) +
      '<div class="gallery">' + gal.map(function (g) { return shot(g, tx(p.title), '', p.wm ? wm(p.wm, p.color) : ''); }).join('') + '</div>' +
      '<div class="sw-actions">' + live + gh + '</div>';
    $('#modal').hidden = false; document.body.style.overflow = 'hidden';
    $('.modal-close').focus();
  }
  function closeModal() { $('#modal').hidden = true; document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); }

  /* ---------- events ---------- */
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-open],[data-filter],[data-close],[data-pick],[data-maptype]');
    if (!t) return;
    if (t.hasAttribute('data-open')) openModal(+t.getAttribute('data-open'));
    else if (t.hasAttribute('data-filter')) { filter = t.getAttribute('data-filter'); renderFilters(); renderCivil(); }
    else if (t.hasAttribute('data-close')) closeModal();
    else if (t.hasAttribute('data-pick')) { mapSel = +t.getAttribute('data-pick'); renderMap(); }
    else if (t.hasAttribute('data-maptype')) { mapType = t.getAttribute('data-maptype'); renderMap(); }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !$('#modal').hidden) closeModal(); });

  $('#langBtn').addEventListener('click', function () {
    lang = lang === 'en' ? 'ar' : 'en';
    try { localStorage.setItem('lang', lang); } catch (e) {}
    renderAll();
  });
  $('#themeBtn').addEventListener('click', function () {
    theme = theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', theme); } catch (e) {}
    renderTheme();
  });
  $('#menuBtn').addEventListener('click', function () {
    var o = $('#navLinks').classList.toggle('open'); this.setAttribute('aria-expanded', o);
  });
  $('#navLinks').addEventListener('click', function (e) { if (e.target.tagName === 'A') { $('#navLinks').classList.remove('open'); $('#menuBtn').setAttribute('aria-expanded', 'false'); } });

  var toTop = $('#toTop');
  toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  var links = $$('#navLinks a');
  window.addEventListener('scroll', function () {
    toTop.classList.toggle('show', window.scrollY > 600);
    var pos = window.scrollY + 120, cur = '';
    $$('main section[id]').forEach(function (s) { if (s.offsetTop <= pos) cur = s.id; });
    links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + cur); });
  }, { passive: true });

  // Contact form -> opens the visitor's email app (no backend needed on GitHub Pages)
  $('#contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target, body = f.message.value + '\n\n— ' + f.name.value + ' (' + f.email.value + ')';
    window.location.href = 'mailto:' + DATA.person.email + '?subject=' + encodeURIComponent(ui('mail_sub')) + '&body=' + encodeURIComponent(body);
  });

  renderAll();
})();
