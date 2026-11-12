/* Shared behaviour: theme toggle (auto, light, dark), profile name in the header. */
(function () {
  var $ = function (s) { return document.querySelector(s); };
  var P = window.PROFILE || {};
  var brand = $("#brandName");
  if (brand && P.name) brand.textContent = P.name;

  var btn = $("#themeBtn");
  if (!btn) return;
  var modes = ["auto", "light", "dark"], mi = 0;
  try { var saved = localStorage.getItem("pf-theme"); if (saved && modes.indexOf(saved) > -1) mi = modes.indexOf(saved); } catch (e) {}
  function apply() {
    var m = modes[mi], r = document.documentElement;
    if (m === "auto") r.removeAttribute("data-theme"); else r.setAttribute("data-theme", m);
    btn.textContent = "Theme: " + m;
    try { localStorage.setItem("pf-theme", m); } catch (e) {}
  }
  btn.addEventListener("click", function () { mi = (mi + 1) % 3; apply(); });
  apply();
})();
