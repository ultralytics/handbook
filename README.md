<a href="https://www.ultralytics.com/"><img src="https://raw.githubusercontent.com/ultralytics/assets/main/logo/Ultralytics_Logotype_Original.svg" width="320" alt="Ultralytics logo"></a>

# 📚 Ultralytics Handbook

Welcome to the **Ultralytics Handbook repository**! This repository houses the source files for the official [Ultralytics Handbook](https://handbook.ultralytics.com/) - your comprehensive guide to our **mission, vision, values, and operational practices**. Built with [Zensical](https://zensical.org/) (a modern static site generator by the creators of Material for MkDocs), the Handbook is continuously deployed via [Vercel](https://vercel.com/) to [handbook.ultralytics.com](https://handbook.ultralytics.com/).
[![Check Broken links](https://github.com/ultralytics/handbook/actions/workflows/links.yml/badge.svg)](https://github.com/ultralytics/handbook/actions/workflows/links.yml)
[![Ultralytics Actions](https://github.com/ultralytics/handbook/actions/workflows/format.yml/badge.svg)](https://github.com/ultralytics/handbook/actions/workflows/format.yml)

[![Ultralytics Discord](https://img.shields.io/discord/1089800235347353640?logo=discord&logoColor=white&label=Discord&color=blue)](https://discord.com/invite/ultralytics)
[![Ultralytics Forums](https://img.shields.io/discourse/users?server=https%3A%2F%2Fcommunity.ultralytics.com&logo=discourse&label=Forums&color=blue)](https://community.ultralytics.com/)
[![Ultralytics Reddit](https://img.shields.io/reddit/subreddit-subscribers/ultralytics?style=flat&logo=reddit&logoColor=white&label=Reddit&color=blue)](https://reddit.com/r/ultralytics)

This Handbook serves as a **living document**, evolving alongside Ultralytics' growth. It aims to align team members, contributors, and the wider community with the core principles guiding our work in [artificial intelligence (AI)](https://www.ultralytics.com/glossary/artificial-intelligence-ai) and [computer vision](https://www.ultralytics.com/glossary/computer-vision-cv). Whether you're new to Ultralytics or a seasoned team member, this resource provides insights into everything from our company philosophy to detailed workflows and operational processes, including our approach to [machine learning operations (MLOps)](https://www.ultralytics.com/glossary/machine-learning-operations-mlops).

**New team members?** Start with our [Onboarding Guide](https://handbook.ultralytics.com/people/onboarding/) for your first 90 days roadmap.

## 🛠️ Installation

[![PyPI - Version](https://img.shields.io/pypi/v/ultralytics?logo=pypi&logoColor=white)](https://pypi.org/project/ultralytics/)
[![Downloads](https://static.pepy.tech/badge/ultralytics)](https://clickpy.clickhouse.com/dashboard/ultralytics)
[![PyPI - Python Version](https://img.shields.io/pypi/pyversions/ultralytics?logo=python&logoColor=gold)](https://pypi.org/project/ultralytics/)

To build and develop the Handbook locally, install dependencies:

```bash
pip install zensical mkdocs-ultralytics-plugin
```

This installs [Zensical](https://zensical.org/) - a modern static site generator built by the creators of Material for MkDocs - and our custom plugin for enhanced documentation features.

## 🚀 Local Development

Build and serve the Handbook locally with live reload:

```bash
zensical serve
```

The site will be available at `http://127.0.0.1:8000`. Changes to source files trigger automatic rebuilds.

### Development Commands

- **`zensical serve`** - Start development server with live reload
- **`zensical build`** - Build static site to `site/` directory

## 📤 Deployment

The Handbook automatically deploys to [handbook.ultralytics.com](https://handbook.ultralytics.com/) via [Vercel](https://vercel.com/) when changes are pushed to the `main` branch.

## 💡 Contributing

We welcome contributions to the Ultralytics Handbook! Your input helps keep our documentation accurate, comprehensive, and useful.

### How to Contribute

1. **Fork the repository** and create a feature branch
2. **Make your changes** to Markdown files in `docs/en/`
3. **Test locally** with `zensical serve`
4. **Submit a pull request** with clear description of changes
5. **Follow our style guide** (consistent with existing pages)

### Contribution Guidelines

- Use clear, concise language aligned with the handbook's professional tone
- Follow the existing structure and formatting (120-character lines, emoji usage)
- Include proper frontmatter (description and keywords) on all pages
- Test all internal links and ensure proper navigation
- Use tables, admonitions, and formatting consistently with other pages

See our [Contributing Guide](https://docs.ultralytics.com/help/contributing/) for detailed information.

[![Ultralytics open-source contributors](https://raw.githubusercontent.com/ultralytics/assets/main/im/image-contributors.png)](https://github.com/ultralytics/ultralytics/graphs/contributors)

## 📂 Repository Structure

```
handbook/
├── docs/
│   ├── en/                          # English documentation
│   │   ├── index.md                 # Homepage
│   │   ├── introduction.md          # Handbook introduction
│   │   ├── mission-vision-values/   # Company foundation
│   │   ├── finance/                 # Financial policies
│   │   ├── tools/                   # Hardware & software
│   │   ├── people/                  # HR policies
│   │   ├── workflows/               # Development processes
│   │   ├── contributions/           # Community guidelines
│   │   ├── goals/                   # OKRs and company goals
│   │   ├── faq/                     # Common questions
│   │   ├── legal/                   # Legal & compliance
│   │   └── security/                # Security policies
│   └── overrides/                   # Theme customizations
├── .github/
│   └── workflows/                   # CI/CD automation
├── mkdocs.yml                       # MkDocs configuration
├── pyproject.toml                   # Python project config
├── requirements.txt                 # Python dependencies
└── README.md                        # This file
```

## 🧰 Technology Stack

- **[Zensical](https://zensical.org/)** - Modern static site generator (by the creators of Material for MkDocs)
- **[MkDocs Ultralytics Plugin](https://github.com/ultralytics/mkdocs)** - Custom features and integrations
- **[Vercel](https://vercel.com/)** - Hosting and deployment
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD automation

## 📜 License

The Ultralytics Handbook is distributed under two licenses:

- **[AGPL-3.0 License](https://github.com/ultralytics/handbook/blob/main/LICENSE)** - For academic research and open-source projects
- **[Enterprise License](https://www.ultralytics.com/license)** - For commercial applications requiring proprietary integration

## ✉️ Contact

- **Issues & Bugs**: [GitHub Issues](https://github.com/ultralytics/handbook/issues)
- **Discussions**: [GitHub Discussions](https://github.com/ultralytics/handbook/discussions)
- **Discord**: [Join Server](https://discord.com/invite/ultralytics)

## 🔗 Related Resources

- **[Ultralytics Website](https://www.ultralytics.com/)** - Company information
- **[YOLO Documentation](https://docs.ultralytics.com/)** - Technical documentation for YOLO models
- **[GitHub Repository](https://github.com/ultralytics/ultralytics)** - Main codebase
- **[Trust Center](https://trust.ultralytics.com/)** - Security documentation

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
