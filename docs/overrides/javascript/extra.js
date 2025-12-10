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

// Ultralytics Chat Widget ---------------------------------------------------------------------------------------------
let _ultralyticsChat = null;

document.addEventListener("DOMContentLoaded", () => {
  _ultralyticsChat = new UltralyticsChat({
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
  const DEFAULT_LANGS = [
    { name: "🇬🇧 English", link: "/", lang: "en" },
    { name: "🇨🇳 简体中文", link: "/zh/", lang: "zh" },
    { name: "🇪🇸 Español", link: "/es/", lang: "es" },
  ];

  function normalizeLangs() {
    const cfg = Array.isArray(window.__YL_LANGS) ? window.__YL_LANGS : [];
    const parsed = cfg
      .map((lang) => {
        if (!lang || typeof lang !== "object") return null;
        const code = (lang.lang || lang.code || "").toLowerCase();
        const name = lang.name || lang.label;
        const link = lang.link || lang.url || "/";
        if (!code || !name) return null;
        return { name, lang: code, link };
      })
      .filter(Boolean);
    return parsed.length ? parsed : DEFAULT_LANGS;
  }

  function buildLangSelector(langs) {
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
    langs.forEach((lang) => {
      const item = document.createElement("li");
      item.className = "md-select__item";

      const a = document.createElement("a");
      a.className = "md-select__link";
      a.setAttribute("data-yl-lang-link", "true");
      a.setAttribute("data-lang", lang.lang);
      if (lang.link === "/" || lang.link === "") a.setAttribute("data-yl-lang-default", "true");
      a.href = lang.link;
      a.hreflang = lang.lang;
      a.textContent = lang.name;

      item.appendChild(a);
      list.appendChild(item);
    });

    wrapper.appendChild(select);
    return wrapper;
  }

  function removeDefaultSelector() {
    // Remove the built-in selector if it exists and isn't our custom one
    const defaultSelect = document.querySelector(".md-header__option .md-select:not([data-yl-lang-selector])");
    if (defaultSelect && defaultSelect.querySelector(".md-select__link[hreflang]")) {
      defaultSelect.closest(".md-header__option")?.remove();
    }
  }

  function injectLangSelector() {
    if (document.querySelector("[data-yl-lang-selector]")) return;
    const langs = normalizeLangs();
    const selectorNode = buildLangSelector(langs);
    const searchLabel = document.querySelector('label[for="__search"]');
    if (searchLabel?.parentNode) {
      searchLabel.parentNode.insertBefore(selectorNode, searchLabel);
    } else {
      document.querySelector('nav[aria-label="Header"]')?.appendChild(selectorNode);
    }
  }

  function fixLanguageLinks() {
    const path = location.pathname || "/";
    const links = Array.from(document.querySelectorAll("[data-yl-lang-link]"));
    if (!links.length) return;

    const langs = links
      .map((link) => {
        const code = (link.dataset.lang || "").toLowerCase();
        return code ? { code, link } : null;
      })
      .filter(Boolean);
    const defaultLink = links.find((link) => link.dataset.ylLangDefault === "true") || null;

    // Find current language and base path
    const basePath = (() => {
      for (const lang of langs) {
        const prefix = `/${lang.code}`;
        if (path === prefix || path === `${prefix}/`) return "/";
        if (path.startsWith(`${prefix}/`)) {
          const remainder = path.slice(prefix.length);
          return remainder.startsWith("/") ? remainder : `/${remainder}`;
        }
      }
      return path;
    })();
    const normalizedBase = basePath.startsWith("/") ? basePath : `/${basePath}`;

    // Update links
    for (const lang of langs) {
      const isDefault = lang.link.dataset.ylLangDefault === "true";
      lang.link.href = isDefault ? `${location.origin}${normalizedBase}` : `${location.origin}/${lang.code}${normalizedBase}`;
    }
    if (defaultLink && !langs.find((lang) => lang.link === defaultLink)) {
      defaultLink.href = `${location.origin}${normalizedBase}`;
    }
  }

  // Run immediately
  removeDefaultSelector();
  injectLangSelector();
  fixLanguageLinks();

  // Handle SPA navigation
  if (typeof document$ !== "undefined") {
    document$.subscribe(() => setTimeout(() => {
      removeDefaultSelector();
      injectLangSelector();
      fixLanguageLinks();
    }, 50));
  } else {
    let lastPath = location.pathname;
    setInterval(() => {
      if (location.pathname !== lastPath) {
        lastPath = location.pathname;
        setTimeout(() => {
          removeDefaultSelector();
          injectLangSelector();
          fixLanguageLinks();
        }, 50);
      }
    }, 200);
  }
})();
