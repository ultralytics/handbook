// Ultralytics 🚀 AGPL-3.0 License - https://ultralytics.com/license

// Apply theme colors based on dark/light mode
const applyTheme = (isDark) => {
  document.body.setAttribute(
    "data-md-color-scheme",
    isDark ? "slate" : "default",
  );
  document.body.setAttribute(
    "data-md-color-primary",
    isDark ? "black" : "indigo",
  );
};

// Check and apply appropriate theme based on system/user preference
const checkTheme = () => {
  const palette = JSON.parse(localStorage.getItem(".__palette") || "{}");
  if (palette.index === 0) {
    // Auto mode is selected
    applyTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }
};

// Watch for system theme changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", checkTheme);

// Initialize theme handling on page load
document.addEventListener("DOMContentLoaded", () => {
  // Watch for theme toggle changes
  document
    .getElementById("__palette_1")
    ?.addEventListener(
      "change",
      (e) => e.target.checked && setTimeout(checkTheme),
    );
  // Initial theme check
  checkTheme();
});

// Ultralytics Chat Widget ---------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  new UltralyticsChat({
    apiUrl: "https://chat-885297101091.europe-west1.run.app/api/chat",
    branding: {
      name: "Ultralytics AI",
      tagline: "Ask anything about Ultralytics, YOLO, and more",
      logo: "https://cdn.prod.website-files.com/680a070c3b99253410dd3dcf/680a070c3b99253410dd3e13_logo.svg",
      logomark:
        "https://cdn.prod.website-files.com/646dd1f1a3703e451ba81ecc/64f727ed3fd1e5e074574368_ultralytics-favicon.png",
      pillText: "Ask AI",
    },
    theme: {
      primary: "#042AFF",
      dark: "#111F68",
      yellow: "#E1FF25",
      text: "#0b0b0f",
    },
    welcome: {
      title: "Hi!",
      message:
        "I'm an AI assistant trained on documentation, help articles, and other content.<br>Ask me anything about Ultralytics.",
      examples: [
        "What's new in YOLO11?",
        "How can I get started with Ultralytics HUB?",
        "How does Enterprise Licensing work?",
      ],
    },
    ui: {
      placeholder: "Ask anything…",
      copyText: "Copy thread",
      downloadText: "Download thread",
      clearText: "New chat",
    },
  });
});

// Fix language switcher links
(function () {
  function fixLanguageLinks() {
    const path = location.pathname;
    const links = document.querySelectorAll(".md-select__link");
    if (!links.length) return;

    const langs = [];
    let defaultLink = null;

    // Extract language codes
    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) return;

      const url = new URL(href, location.origin);
      const match = url.pathname.match(/^\/([a-z]{2})\/?$/);

      if (match) langs.push({ code: match[1], link });
      else if (url.pathname === "/" || url.pathname === "") defaultLink = link;
    });

    // Find current language and base path
    let basePath = path;
    for (const lang of langs) {
      if (path.startsWith("/" + lang.code + "/")) {
        basePath = path.substring(lang.code.length + 1);
        break;
      }
    }

    // Update links
    langs.forEach(
      (lang) => (lang.link.href = location.origin + "/" + lang.code + basePath),
    );
    if (defaultLink) defaultLink.href = location.origin + basePath;
  }

  // Run immediately
  fixLanguageLinks();

  // Handle SPA navigation
  if (typeof document$ !== "undefined") {
    document$.subscribe(() => setTimeout(fixLanguageLinks, 50));
  } else {
    let lastPath = location.pathname;
    setInterval(() => {
      if (location.pathname !== lastPath) {
        lastPath = location.pathname;
        setTimeout(fixLanguageLinks, 50);
      }
    }, 200);
  }
})();
