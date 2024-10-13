<br>
<a href="https://ultralytics.com" target="_blank"><img src="https://raw.githubusercontent.com/ultralytics/assets/main/logo/Ultralytics_Logotype_Original.svg" width="320" alt="Ultralytics logo"></a>

# 📚 Ultralytics Handbook

The Ultralytics Handbook is your guide to our mission, vision, values, and practices, providing key insights and resources to align with Ultralytics' core principles. This repository is built and maintained directly from the **Handbook repo**, reflecting the latest updates.

[![pages-build-deployment](https://github.com/ultralytics/handbook/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/ultralytics/handbook/actions/workflows/pages/pages-build-deployment)
[![Check Broken links](https://github.com/ultralytics/handbook/actions/workflows/links.yml/badge.svg)](https://github.com/ultralytics/handbook/actions/workflows/links.yml)
[![Ultralytics Actions](https://github.com/ultralytics/handbook/actions/workflows/format.yml/badge.svg)](https://github.com/ultralytics/handbook/actions/workflows/format.yml)

<a href="https://ultralytics.com/discord"><img alt="Discord" src="https://img.shields.io/discord/1089800235347353640?logo=discord&logoColor=white&label=Discord&color=blue"></a> <a href="https://community.ultralytics.com"><img alt="Ultralytics Forums" src="https://img.shields.io/discourse/users?server=https%3A%2F%2Fcommunity.ultralytics.com&logo=discourse&label=Forums&color=blue"></a> <a href="https://reddit.com/r/ultralytics"><img alt="Ultralytics Reddit" src="https://img.shields.io/reddit/subreddit-subscribers/ultralytics?style=flat&logo=reddit&logoColor=white&label=Reddit&color=blue"></a>

## 🛠️ Installation

[![PyPI - Version](https://img.shields.io/pypi/v/ultralytics?logo=pypi&logoColor=white)](https://pypi.org/project/ultralytics/)
[![Downloads](https://static.pepy.tech/badge/ultralytics)](https://pepy.tech/project/ultralytics)
[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/ultralytics?logo=python&logoColor=gold)](https://pypi.org/project/ultralytics/)

To install the ultralytics package in developer mode, ensure you have Git and Python 3 installed on your system. Then, follow these steps:

1. Clone the ultralytics repository to your local machine using Git:

   ```bash
   git clone https://github.com/ultralytics/ultralytics.git
   ```

2. Navigate to the cloned repository's root directory:

   ```bash
   cd ultralytics
   ```

3. Install the package in developer mode using pip (or pip3 for Python 3):

   ```bash
   pip install -e '.[dev]'
   ```

- This command installs the ultralytics package along with all development dependencies, allowing you to modify the package code and have the changes immediately reflected in your Python environment.

## 🚀 Building and Serving Locally

The `mkdocs serve` command builds and serves a local version of your MkDocs documentation, ideal for development and testing:

```bash
mkdocs serve
```

- #### Command Breakdown:

    - `mkdocs` is the main MkDocs command-line interface.
    - `serve` is the subcommand to build and locally serve your documentation.

- 🧐 Note:

    - Grasp changes to the docs in real-time as `mkdocs serve` supports live reloading.
    - To stop the local server, press `CTRL+C`.

## 🌍 Building and Serving Multi-Language

Supporting multi-language documentation? Follow these steps:

1. Stage all new language \*.md files with Git:

   ```bash
   git add docs/**/*.md -f
   ```

2. Build all languages to the `/site` folder, ensuring relevant root-level files are present:

   ```bash
   # Clear existing /site directory
   rm -rf site

   # Loop through each language config file and build
   mkdocs build -f docs/mkdocs.yml
   for file in docs/mkdocs_*.yml; do
     echo "Building MkDocs site with $file"
     mkdocs build -f "$file"
   done
   ```

3. To preview your site, initiate a simple HTTP server:

   ```bash
   cd site
   python -m http.server
   # Open in your preferred browser
   ```

- 🖥️ Access the live site at `http://localhost:8000`.

## 📤 Deploying Your Documentation Site

Choose a hosting provider and deployment method for your MkDocs documentation:

- Configure `mkdocs.yml` with deployment settings.
- Use `mkdocs deploy` to build and deploy your site.

* ### GitHub Pages Deployment Example:
  ```bash
  mkdocs gh-deploy
  ```

- Update the "Custom domain" in your repository's settings for a personalized URL.

![196814117-fc16e711-d2be-4722-9536-b7c6d78fd167](https://user-images.githubusercontent.com/26833433/210150206-9e86dcd7-10af-43e4-9eb2-9518b3799eac.png)

- For detailed deployment guidance, consult the [MkDocs documentation](https://www.mkdocs.org/user-guide/deploying-your-docs/).

## 💡 Contribute

We value community contributions and feedback to continuously improve the Ultralytics Handbook. For guidelines on contributing, please refer to the [Contributing Guide](https://docs.ultralytics.com/help/contributing).

<!-- Pictorial representation of our dedicated contributor community -->

![Ultralytics open-source contributors](https://raw.githubusercontent.com/ultralytics/assets/main/im/image-contributors.png)

## 📜 License

The Ultralytics Handbook is licensed under the following options:

- **AGPL-3.0 License**: Suitable for academic and collaborative work. See the [LICENSE](https://github.com/ultralytics/handbook/blob/main/LICENSE) file for details.
- **Enterprise License**: Ideal for commercial use, integrating Ultralytics' solutions into proprietary products. Visit [Ultralytics Licensing](https://www.ultralytics.com/license) for more details.

## ✉️ Contact

For bug reports or feature requests, please use [GitHub Issues](https://github.com/ultralytics/handbook/issues). You can also engage with the Ultralytics team and community on [Discord](https://discord.com/invite/ultralytics).

<br>
<div align="center">
  <a href="https://github.com/ultralytics"><img src="https://github.com/ultralytics/assets/raw/main/social/logo-social-github.png" width="3%" alt="Ultralytics GitHub"></a>
  <img src="https://github.com/ultralytics/assets/raw/main/social/logo-transparent.png" width="3%" alt="space">
  <a href="https://www.linkedin.com/company/ultralytics/"><img src="https://github.com/ultralytics/assets/raw/main/social/logo-social-linkedin.png" width="3%" alt="Ultralytics LinkedIn"></a>
  <img src="https://github.com/ultralytics/assets/raw/main/social/logo-transparent.png" width="3%" alt="space">
  <a href="https://twitter.com/ultralytics"><img src="https://github.com/ultralytics/assets/raw/main/social/logo-social-twitter.png" width="3%" alt="Ultralytics Twitter"></a>
  <img src="https://github.com/ultralytics/assets/raw/main/social/logo-transparent.png" width="3%" alt="space">
  <a href="https://youtube.com/ultralytics?sub_confirmation=1"><img src="https://github.com/ultralytics/assets/raw/main/social/logo-social-youtube.png" width="3%" alt="Ultralytics YouTube"></a>
  <img src="https://github.com/ultralytics/assets/raw/main/social/logo-transparent.png" width="3%" alt="space">
  <a href="https://www.tiktok.com/@ultralytics"><img src="https://github.com/ultralytics/assets/raw/main/social/logo-social-tiktok.png" width="3%" alt="Ultralytics TikTok"></a>
  <img src="https://github.com/ultralytics/assets/raw/main/social/logo-transparent.png" width="3%" alt="space">
  <a href="https://ultralytics.com/bilibili"><img src="https://github.com/ultralytics/assets/raw/main/social/logo-social-bilibili.png" width="3%" alt="Ultralytics BiliBili"></a>
  <img src="https://github.com/ultralytics/assets/raw/main/social/logo-transparent.png" width="3%" alt="space">
  <a href="https://ultralytics.com/discord"><img src="https://github.com/ultralytics/assets/raw/main/social/logo-social-discord.png" width="3%" alt="Ultralytics Discord"></a>
</div>
