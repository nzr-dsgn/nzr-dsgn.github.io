/* Icon sprite (24px grid, 1.75 stroke). Usage: <svg class="ic"><use href="#i-home"/></svg>  or  ic("home") in templates. */
(function () {
  var P = {
    home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    car: '<path d="M5 16l1.5-5.5A2 2 0 0 1 8.4 9h7.2a2 2 0 0 1 1.9 1.5L19 16"/><rect x="3" y="16" width="18" height="4" rx="1.5"/><path d="M7.5 18h.01M16.5 18h.01"/>',
    userplus: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.4 3.4-5.5 6.5-5.5s5.9 2.1 6.5 5.5"/><path d="M19 8v6M16 11h6"/>',
    wrench: '<path d="M14.5 6.5a4 4 0 0 0 4.8 4.8l-9 9a2.1 2.1 0 0 1-3-3l9-9a4 4 0 0 1-1.8-1.8z"/>',
    receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6"/>',
    spark: '<path d="M11 3l1.9 5.6L18.5 10.5 12.9 12.4 11 18l-1.9-5.6L3.5 10.5l5.6-1.9z"/><path d="M19 16v4M17 18h4"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>',
    bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 21h4"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    chevr: '<path d="M9 6l6 6-6 6"/>',
    chevd: '<path d="M6 9l6 6 6-6"/>',
    chevl: '<path d="M15 6l-6 6 6 6"/>',
    unlock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 7.5-2"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v3M14 20h3M20 20h1"/>',
    send: '<path d="M4 12l16-8-6 16-3-7z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    pin: '<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 19c.5-3 3-5 6-5s5.5 2 6 5"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14c2.3 0 3.8 1.5 4.2 4"/>',
    undo: '<path d="M9 8H5V4"/><path d="M5 8a8 8 0 1 1-1 5"/>',
    alert: '<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17.5v.01"/>',
    refresh: '<path d="M20 12a8 8 0 1 1-2.5-5.8"/><path d="M20 4v4h-4"/>',
    building: '<rect x="5" y="3" width="10" height="18" rx="1"/><path d="M15 9h4v12h-4M8.5 7h3M8.5 11h3M8.5 15h3"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    sliders: '<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
    moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6L19 19M5 19l1.4-1.4M17.6 6.4L19 5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    arrowleft: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    arrowup: '<path d="M7 17L17 7M8 7h9v9"/>',
    dots: '<path d="M5 12h.01M12 12h.01M19 12h.01"/>',
    door: '<path d="M6 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17M4 21h16"/><path d="M14 12h.01"/>',
    thermo: '<path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
    wifi: '<path d="M2 9a15 15 0 0 1 20 0M5.5 12.5a10 10 0 0 1 13 0M9 16a5 5 0 0 1 6 0"/><path d="M12 19.5h.01"/>',
    play: '<path d="M7 4l13 8-13 8z"/>'
  };
  var s = '<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">';
  Object.keys(P).forEach(function (k) {
    s += '<symbol id="i-' + k + '" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">' + P[k] + '</g></symbol>';
  });
  s += '</svg>';
  window.ic = function (n, cls) { return '<svg class="ic ' + (cls || '') + '" aria-hidden="true" focusable="false"><use href="#i-' + n + '"/></svg>'; };
  function mount() { if (!document.getElementById("i-home")) document.body.insertAdjacentHTML("afterbegin", s); }
  if (document.body) mount(); else document.addEventListener("DOMContentLoaded", mount);
})();
