// Ultralytics 🚀 AGPL-3.0 License - https://ultralytics.com/license

// Block sitemap.xml fetches triggered by Weglot's hreflang tags detected by MkDocs Material
(() => {
  const EMPTY_SITEMAP = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`;

  const originalFetch = window.fetch;
  window.fetch = function (url, options) {
    if (typeof url === "string" && url.includes("/sitemap.xml")) {
      return Promise.resolve(
        new Response(EMPTY_SITEMAP, { status: 200, headers: { "Content-Type": "application/xml" } }),
      );
    }
    return originalFetch.apply(this, arguments);
  };

  const originalXHROpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url) {
    if (typeof url === "string" && url.includes("/sitemap.xml")) {
      this._blockRequest = true;
    }
    return originalXHROpen.apply(this, arguments);
  };

  const originalXHRSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function () {
    if (this._blockRequest) {
      Object.defineProperty(this, "status", { value: 200 });
      Object.defineProperty(this, "responseText", { value: EMPTY_SITEMAP });
      Object.defineProperty(this, "response", { value: EMPTY_SITEMAP });
      Object.defineProperty(this, "responseXML", {
        value: new DOMParser().parseFromString(EMPTY_SITEMAP, "application/xml"),
      });
      this.dispatchEvent(new Event("load"));
      return;
    }
    return originalXHRSend.apply(this, arguments);
  };
})();

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

// Custom language switcher (no MkDocs alternate config needed)
(() => {
  const LANGS = [
    { name: "🇬🇧 English", code: "en", link: "/" },
    { name: "🇨🇳 简体中文", code: "zh", link: "/zh/" },
    { name: "🇪🇸 Español", code: "es", link: "/es/" },
  ];

  function buildLangSelector() {
    const wrapper = document.createElement("div");
    wrapper.className = "md-header__option";

    const select = document.createElement("div");
    select.className = "md-select";
    select.dataset.ylLangSelector = "true";

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
    LANGS.forEach(({ name, code, link }) => {
      const item = document.createElement("li");
      item.className = "md-select__item";
      const a = document.createElement("a");
      a.className = "md-select__link";
      a.dataset.langCode = code;
      a.dataset.langDefault = link === "/" ? "true" : "false";
      a.href = link;
      a.hreflang = code;
      a.textContent = name;
      item.appendChild(a);
      list.appendChild(item);
    });

    wrapper.appendChild(select);
    return wrapper;
  }

  function injectLangSelector() {
    if (document.querySelector("[data-yl-lang-selector]")) return;
    const selector = buildLangSelector();
    const searchLabel = document.querySelector('label[for="__search"]');
    if (searchLabel?.parentNode) {
      searchLabel.parentNode.insertBefore(selector, searchLabel);
    } else {
      document.querySelector("nav.md-header__inner")?.appendChild(selector);
    }
  }

  function updateLangLinks() {
    const path = location.pathname;

    // Extract base path (without leading slash and language prefix)
    let basePath = path.startsWith("/") ? path.slice(1) : path;
    for (const { code } of LANGS) {
      const prefix = `${code}/`;
      if (basePath === code || basePath === prefix) {
        basePath = "";
        break;
      }
      if (basePath.startsWith(prefix)) {
        basePath = basePath.slice(prefix.length);
        break;
      }
    }

    // Update all language links
    LANGS.forEach(({ code, link }) => {
      const el = document.querySelector(`[data-lang-code="${code}"]`);
      if (el) {
        el.href = link === "/" ? `${location.origin}/${basePath}` : `${location.origin}/${code}/${basePath}`;
      }
    });
  }

  // Run on load and navigation
  injectLangSelector();
  updateLangLinks();

  if (typeof document$ !== "undefined") {
    document$.subscribe(() =>
      setTimeout(() => {
        injectLangSelector();
        updateLangLinks();
      }, 50),
    );
  }
})();
