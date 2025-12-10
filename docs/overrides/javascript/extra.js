// Ultralytics 🚀 AGPL-3.0 License - https://ultralytics.com/license

// Apply theme colors based on dark/light mode
const applyTheme = (isDark) => {
  document.body.setAttribute("data-md-color-scheme", isDark ? "slate" : "default");
  document.body.setAttribute("data-md-color-primary", isDark ? "black" : "indigo");
};

// Sync widget theme with Material theme
const syncWidgetTheme = () => {
  const isDark = document.body.getAttribute("data-md-color-scheme") === "slate";
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
};

// Check and apply appropriate theme based on system/user preference
const checkTheme = () => {
  const palette = JSON.parse(localStorage.getItem(".__palette") || "{}");
  if (palette.index === 0) {
    applyTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
    syncWidgetTheme();
  }
};

// Initialize theme handling on page load
document.addEventListener("DOMContentLoaded", () => {
  checkTheme();
  syncWidgetTheme();

  // Watch for system theme changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", checkTheme);

  // Watch for theme toggle changes
  document.getElementById("__palette_1")?.addEventListener("change", (e) => {
    if (e.target.checked) setTimeout(checkTheme);
  });

  // Watch for Material theme changes and sync to widget
  new MutationObserver(syncWidgetTheme).observe(document.body, {
    attributes: true,
    attributeFilter: ["data-md-color-scheme"],
  });
});

// Ultralytics Chat Widget
document.addEventListener("DOMContentLoaded", () => {
  new UltralyticsChat({
    welcome: {
      title: "Hello 👋",
      message:
        "I'm your Ultralytics Handbook assistant—ask me anything about mission & values, policies, onboarding, workflows, finance, and security.",
      chatExamples: [
        "What's the 90-day onboarding plan?",
        "What are our Mission, Vision, and Values?",
        "How do expenses and reimbursements work?",
      ],
      searchExamples: [
        "onboarding checklist",
        "expense reimbursement policy",
        "security best practices",
        "vacation and time off",
        "code review workflow",
      ],
    },
  });
});

// Fix language switcher links
(() => {
  const LANGS = [
    { name: "🇬🇧 English", link: "/", lang: "en" },
    { name: "🇨🇳 简体中文", link: "/zh/", lang: "zh" },
    { name: "🇪🇸 Español", link: "/es/", lang: "es" },
  ];

  function buildLangSelector() {
    const wrapper = document.createElement("div");
    wrapper.className = "md-header__option";

    const select = document.createElement("div");
    select.className = "md-select";
    select.setAttribute("data-yl-lang-selector", "true");

    select.innerHTML = `
      <button aria-label="Select language" class="md-header__button md-icon" type="button">
        <svg class="lucide lucide-languages" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="m5 8 6 6"></path>
          <path d="m4 14 6-6 2-3"></path>
          <path d="M2 5h12"></path>
          <path d="M7 2h1"></path>
          <path d="m22 22-5-10-5 10"></path>
          <path d="M14 18h6"></path>
        </svg>
      </button>
      <div class="md-select__inner">
        <ul class="md-select__list"></ul>
      </div>
    `;

    const list = select.querySelector(".md-select__list");
    LANGS.forEach((lang) => {
      const item = document.createElement("li");
      item.className = "md-select__item";

      const a = document.createElement("a");
      a.className = "md-select__link";
      a.setAttribute("data-yl-lang-link", "true");
      a.setAttribute("data-lang", lang.lang);
      if (lang.link === "/") a.setAttribute("data-yl-lang-default", "true");
      a.href = lang.link;
      a.hreflang = lang.lang;
      a.textContent = lang.name;

      item.appendChild(a);
      list.appendChild(item);
    });

    wrapper.appendChild(select);
    return wrapper;
  }

  function injectLangSelector() {
    if (document.querySelector("[data-yl-lang-selector]")) return;
    const selectorNode = buildLangSelector();
    const searchLabel = document.querySelector('label[for="__search"]');
    if (searchLabel?.parentNode) {
      searchLabel.parentNode.insertBefore(selectorNode, searchLabel);
    } else {
      document.querySelector('nav[aria-label="Header"]')?.appendChild(selectorNode);
    }
  }

  function fixLanguageLinks() {
    const path = location.pathname || "/";

    // Find current language and extract base path
    let basePath = path;
    for (const { lang } of LANGS) {
      const prefix = `/${lang}`;
      if (path === prefix || path === `${prefix}/`) {
        basePath = "/";
        break;
      }
      if (path.startsWith(`${prefix}/`)) {
        basePath = path.slice(prefix.length);
        break;
      }
    }

    // Update links
    for (const { lang, link } of LANGS) {
      const el = document.querySelector(`[data-yl-lang-link][data-lang="${lang}"]`);
      if (el) el.href = link === "/" ? `${location.origin}${basePath}` : `${location.origin}/${lang}${basePath}`;
    }
  }

  // Run immediately
  injectLangSelector();
  fixLanguageLinks();

  // Handle SPA navigation (MkDocs Material)
  if (typeof document$ !== "undefined") {
    document$.subscribe(() =>
      setTimeout(() => {
        injectLangSelector();
        fixLanguageLinks();
      }, 50),
    );
  }
})();
