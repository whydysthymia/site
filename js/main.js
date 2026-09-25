(function initSite() {
  const nav = document.getElementById("site-nav");
  const menuToggle = document.getElementById("menu-toggle");
  const modal = document.getElementById("success-modal");
  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  const languageKey = "site-lang";

  function currentDict() {
    const lang = document.documentElement.lang === "en" ? "en" : "ru";
    return window.SiteI18n.dictionaries[lang];
  }

  function closeMenu() {
    document.body.classList.remove("nav-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", currentDict().menuToggle);
  }

  function openMenu() {
    document.body.classList.add("nav-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", currentDict().menuClose);
  }

  function setLanguage(lang) {
    const nextLang = lang === "en" ? "en" : "ru";
    localStorage.setItem(languageKey, nextLang);
    window.SiteI18n.applyLanguage(nextLang);
    window.SiteTheme.syncToggle(window.SiteTheme.getTheme());
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-label", expanded ? currentDict().menuClose : currentDict().menuToggle);
  }

  menuToggle.addEventListener("click", () => {
    if (document.body.classList.contains("nav-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      closeModal();
    }
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  document.getElementById("theme-toggle").addEventListener("click", () => {
    const next = window.SiteTheme.getTheme() === "dark" ? "light" : "dark";
    window.SiteTheme.setTheme(next);
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      const target = id ? document.querySelector(id) : null;
      if (!target) {
        return;
      }
      event.preventDefault();
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    });
  });

  const revealNodes = document.querySelectorAll(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
  } else if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );
    revealNodes.forEach((node) => observer.observe(node));
  } else {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
  }

  function openModal() {
    modal.hidden = false;
    const panel = modal.querySelector(".modal-panel");
    panel.focus();
  }

  function closeModal() {
    if (modal.hidden) {
      return;
    }
    modal.hidden = true;
    form.querySelector("button[type='submit']").focus();
  }

  modal.querySelectorAll("[data-close-modal]").forEach((node) => {
    node.addEventListener("click", closeModal);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !emailPattern.test(email) || !message) {
      formStatus.hidden = false;
      formStatus.textContent = currentDict().formError;
      return;
    }
    formStatus.hidden = true;
    formStatus.textContent = "";
    form.reset();
    openModal();
  });

  const savedLang = localStorage.getItem(languageKey);
  window.SiteTheme.init();
  setLanguage(savedLang === "en" ? "en" : "ru");
})();
