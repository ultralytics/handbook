<a href="https://www.ultralytics.com/"><img src="https://raw.githubusercontent.com/ultralytics/assets/main/logo/Ultralytics_Logotype_Original.svg" width="320" alt="Ultralytics logo"></a>

# 📚 Ultralytics Handbook

Welcome to the **Ultralytics Handbook repository**! This repository houses the source files for the official [Ultralytics Handbook](https://handbook.ultralytics.com/) - your comprehensive guide to our **mission, vision, values, and operational practices**. Built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/), the Handbook is continuously deployed via [GitHub Pages](https://pages.github.com/) to [handbook.ultralytics.com](https://handbook.ultralytics.com/).

[![pages-build-deployment](https://github.com/ultralytics/handbook/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/ultralytics/handbook/actions/workflows/pages/pages-build-deployment)
[![Check Broken links](https://github.com/ultralytics/handbook/actions/workflows/links.yml/badge.svg)](https://github.com/ultralytics/handbook/actions/workflows/links.yml)
[![Ultralytics Actions](https://github.com/ultralytics/handbook/actions/workflows/format.yml/badge.svg)](https://github.com/ultralytics/handbook/actions/workflows/format.yml)

[![Ultralytics Discord](https://img.shields.io/discord/1089800235347353640?logo=discord&logoColor=white&label=Discord&color=blue)](https://discord.com/invite/ultralytics)
[![Ultralytics Forums](https://img.shields.io/discourse/users?server=https%3A%2F%2Fcommunity.ultralytics.com&logo=discourse&label=Forums&color=blue)](https://community.ultralytics.com/)
[![Ultralytics Reddit](https://img.shields.io/reddit/subreddit-subscribers/ultralytics?style=flat&logo=reddit&logoColor=white&label=Reddit&color=blue)](https://reddit.com/r/ultralytics)

This Handbook serves as a **living document**, evolving alongside Ultralytics' growth. It aims to align team members, contributors, and the wider community with the core principles guiding our work in [artificial intelligence (AI)](https://www.ultralytics.com/glossary/artificial-intelligence-ai) and [computer vision](https://www.ultralytics.com/glossary/computer-vision-cv). Whether you're new to Ultralytics or a seasoned team member, this resource provides insights into everything from our company philosophy to detailed workflows and operational processes, including our approach to [machine learning operations (MLOps)](https://www.ultralytics.com/glossary/machine-learning-operations-mlops).

## 🛠️ Installation

[![PyPI - Version](https://img.shields.io/pypi/v/ultralytics?logo=pypi&logoColor=white)](https://pypi.org/project/ultralytics/)
[![Downloads](https://static.pepy.tech/badge/ultralytics)](https://clickpy.clickhouse.com/dashboard/ultralytics)
[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/ultralytics?logo=python&logoColor=gold)](https://pypi.org/project/ultralytics/)

To install [MkDocs](https://www.mkdocs.org/) and the necessary dependencies for building and developing the Handbook site locally, use the [pip package manager](https://pip.pypa.io/en/stable/):

```bash
pip install black mkdocs-material mkdocs-ultralytics-plugin
```

This command installs MkDocs, the [MkDocs Material theme](https://squidfunk.github.io/mkdocs-material/), our custom plugin, and the `black` code formatter, enabling local development and testing of the Handbook documentation.

## 🚀 Building and Serving Locally

Use the following command to build the Handbook site and serve it using a local development server:

```bash
mkdocs serve
```

This starts a local web server with live reloading enabled. Any changes you make to the Markdown source files will automatically trigger a rebuild, and your browser will refresh to show the updates.

### Key Details:

- **`mkdocs`**: The primary command-line tool for interacting with MkDocs.
- **`serve`**: Builds the site and runs a local server, watching for file changes.

To stop the server, press `CTRL+C` in your terminal.

## 📤 Deploying Your Documentation Site

To deploy the Handbook to GitHub Pages or another hosting platform:

1.  Ensure your `mkdocs.yml` file is configured correctly for deployment, including the `site_url`.
2.  Run the deployment command:

```bash
mkdocs gh-deploy
```

This command builds the static site files and pushes them to the `gh-pages` branch of your repository, making them live on GitHub Pages. For a custom domain like `handbook.ultralytics.com`, configure the "Custom domain" settings in your GitHub repository's Pages section.

![GitHub Pages Deployment Example](https://user-images.githubusercontent.com/26833433/210150206-9e86dcd7-10af-43e4-9eb2-9518b3799eac.png)

For more detailed instructions, consult the official [MkDocs guide on deploying documentation](https://www.mkdocs.org/user-guide/deploying-your-docs/).

## 💡 Contributing

We warmly welcome contributions to the Ultralytics Handbook! Your input, whether it's improving existing documentation, fixing typos, or suggesting new sections, is highly valuable to our [open-source](https://github.com/ultralytics) efforts. Please review our [Contributing Guide](https://docs.ultralytics.com/help/contributing/) for detailed information on how to get started. We appreciate the support from our community!

[![Ultralytics open-source contributors](https://raw.githubusercontent.com/ultralytics/assets/main/im/image-contributors.png)](https://github.com/ultralytics/ultralytics/graphs/contributors)

## 📜 License

The Ultralytics Handbook is distributed under two licenses to accommodate different use cases:

- **AGPL-3.0 License**: Ideal for academic research and open-source projects. See the [LICENSE](https://github.com/ultralytics/handbook/blob/main/LICENSE) file for full details.
- **Enterprise License**: Designed for commercial applications requiring integration of Ultralytics software and AI models. Visit [Ultralytics Licensing](https://www.ultralytics.com/license) to learn more.

## ✉️ Contact

For reporting issues, bugs, or suggesting features related to the Handbook, please use the [GitHub Issues](https://github.com/ultralytics/handbook/issues) tracker. For broader discussions, questions about Ultralytics projects like [Ultralytics YOLO](https://docs.ultralytics.com/models/yolov8/), or to connect with the team and community, join our [Discord server](https://discord.com/invite/ultralytics).

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
  <a href="https://discord.com/invite/ultralytics"><img src="https://github.com/ultralytics/assets/raw/main/social/logo-social-discord.png" width="3%" alt="Ultralytics Discord"></a>
</div>
