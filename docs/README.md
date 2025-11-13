<a href="https://www.ultralytics.com/"><img src="https://raw.githubusercontent.com/ultralytics/assets/main/logo/Ultralytics_Logotype_Original.svg" width="320" alt="Ultralytics logo"></a>

# Documentation Directory (`docs/`)

Welcome to the `docs/` directory! This folder houses the source files for the Ultralytics Handbook, built with [Zensical](https://zensical.org/) - a modern static site generator by the creators of Material for MkDocs.

## 📝 Overview

- **Zensical Configuration:** The primary configuration file is `mkdocs.yml`, located in the repository root. This file defines the handbook's structure, navigation, theme, and build settings.
- **Documentation Files:** All handbook content is written in [Markdown](https://www.markdownguide.org/basic-syntax/) format (`.md` files). These files are organized within this `docs/` directory, mirroring the structure defined in `mkdocs.yml`. The live Handbook is available at [https://handbook.ultralytics.com/](https://handbook.ultralytics.com/).

## 🚀 Getting Started

To contribute to or preview the Handbook locally:

1.  **Install Dependencies:** Install Zensical and required plugins with `pip install zensical mkdocs-ultralytics-plugin`.
2.  **Preview Handbook:** Navigate to the repository's root directory and run `zensical serve`. This starts a local development server at `http://127.0.0.1:8000/` with live reload for changes.
3.  **Build Handbook:** To generate the static site, run `zensical build`. This creates a `site/` directory containing the complete handbook.

Keeping the Handbook synchronized with Ultralytics' ongoing development is crucial. Clear, accurate, and up-to-date documentation benefits both team members and the wider community. For contribution details, see our [Contributing Guide](https://docs.ultralytics.com/help/contributing/).

The Handbook is automatically deployed to [handbook.ultralytics.com](https://handbook.ultralytics.com/) via [Vercel](https://vercel.com/) when changes are pushed to the `main` branch.

We appreciate your contributions to keeping the Handbook excellent!
