(function initTheme(global) {
  const storageKey = "site-theme";

  function getTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function syncToggle(theme) {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle || !global.SiteI18n) {
      return;
    }
    const lang = document.documentElement.lang === "en" ? "en" : "ru";
    const dict = global.SiteI18n.dictionaries[lang];
    const isDark = theme === "dark";
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? dict.themeToggleLight : dict.themeToggle);
  }

  function setTheme(theme) {
    const nextTheme = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem(storageKey, nextTheme);
    syncToggle(nextTheme);
  }

  function init() {
    const saved = localStorage.getItem(storageKey);
    setTheme(saved === "dark" ? "dark" : "light");
  }

  global.SiteTheme = {
    init,
    setTheme,
    getTheme,
    syncToggle,
  };
})(window);
