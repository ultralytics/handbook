---
description: Ultralytics open-source contribution guidelines covering pull requests, code standards, CLA signing, bug reporting, and community engagement.
keywords: Ultralytics, contributing, open source, pull requests, code of conduct, CLA, bug reporting, YOLO development, GitHub
---

# How to Contribute 🚀

Welcome! We're thrilled you're considering contributing to [Ultralytics](https://www.ultralytics.com/) open-source projects. Your involvement helps enhance the quality of our repositories and benefits the entire computer vision community.

> **📚 For comprehensive contribution guidelines, also see the [Official Ultralytics Contributing Guide](https://docs.ultralytics.com/help/contributing/) in our main documentation.**

[![Ultralytics open-source contributors](https://raw.githubusercontent.com/ultralytics/assets/main/im/image-contributors.png)](https://github.com/ultralytics/ultralytics/graphs/contributors)

## Watch: Contributing to Ultralytics

<iframe width="100%" height="469" src="https://www.youtube.com/embed/yMR7BgwHQ3g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Quick Start Guide 🎯

Ready to contribute? Follow these steps:

1. **Read our [Code of Conduct](https://docs.ultralytics.com/help/code-of-conduct/)** - Respect, kindness, and professionalism
2. **Fork the repository** you want to contribute to
3. **Create a feature branch** with descriptive name
4. **Make your changes** following coding standards
5. **Write tests** for new functionality
6. **Submit a pull request** with clear description
7. **Sign the CLA** by commenting in your PR
8. **Respond to feedback** from reviewers

See [Development Workflow](../workflows/development.md) for detailed PR process.

## Contributing Guidelines 📋

### Code of Conduct 🤝

All contributors must adhere to our [Code of Conduct](https://docs.ultralytics.com/help/code-of-conduct/), which is based on the [Contributor Covenant](https://www.contributor-covenant.org/). This ensures a welcoming and inclusive environment for everyone. **Respect**, **kindness**, and **professionalism** are at the heart of our community.

### Contributor License Agreement (CLA) 📝

Before we can merge your PR, you must sign our [CLA](https://docs.ultralytics.com/help/CLA/). This legal agreement ensures contributions are properly licensed under [AGPL-3.0](https://www.ultralytics.com/legal/agpl-3-0-software-license), protecting both you and the project.

After submitting your PR, the CLA bot will guide you. To sign, comment:

```
I have read the CLA Document and I sign the CLA
```

The CLA covers:

- Copyright and patent licenses for your contributions
- Rights for Ultralytics to use and distribute your work
- Representations that you own the rights to your contributions
- Disclaimer of warranties

Review the full [CLA document](https://docs.ultralytics.com/help/CLA/) for complete terms.

### Best Practices ✨

When contributing code:

- **Avoid duplication**: Reuse existing code where possible
- **Make smaller changes**: Focused modifications over large-scale changes
- **Simplify**: Look for simplification opportunities
- **Consider compatibility**: Avoid breaking existing code
- **Use consistent formatting**: Follow [Ruff Formatter](https://github.com/astral-sh/ruff)
- **Add tests**: Include tests for new features
- **Update docs**: Keep [documentation](https://docs.ultralytics.com/) current

### Coding Standards 📐

- **Docstrings**: Use [Google-style docstrings](https://google.github.io/styleguide/pyguide.html) with types in parentheses
- **Line width**: 120 characters maximum
- **Imports**: Use `pathlib` instead of `os`
- **Testing**: All PRs must pass [CI tests](https://docs.ultralytics.com/help/CI/)
- **Type hints**: Use where beneficial

See [Development Workflow](../workflows/development.md) for complete coding standards.

## Ways to Contribute 🌟

### Code Contributions 💻

- New features and enhancements for [YOLO models](https://docs.ultralytics.com/models/)
- Bug fixes and issue resolution
- Performance optimizations for [training](https://docs.ultralytics.com/modes/train/) and [inference](https://docs.ultralytics.com/modes/predict/)
- Export format support for various [deployment options](https://docs.ultralytics.com/guides/model-deployment-options/)
- Platform compatibility improvements

### Documentation 📚

- Improve existing [documentation](https://docs.ultralytics.com/)
- Add [tutorials and guides](https://docs.ultralytics.com/guides/) for specific use cases
- Fix typos and errors
- Translate documentation to other languages

### Testing 🧪

- Write unit tests for new functionality
- Test new features across different [models](https://docs.ultralytics.com/models/) and [tasks](https://docs.ultralytics.com/tasks/)
- Report test coverage gaps
- Performance [benchmarking](https://docs.ultralytics.com/modes/benchmark/) across platforms

### Community Support 💬

- Answer questions in [GitHub Discussions](https://github.com/ultralytics/ultralytics/discussions)
- Help users on [Discord](https://discord.com/invite/ultralytics)
- Review pull requests
- Triage issues

## Reporting Bugs 🐞

Help us improve by reporting bugs via [GitHub Issues](https://github.com/ultralytics/ultralytics/issues):

### Bug Report Requirements

1. **Check existing issues** to avoid duplicates
2. **Create [Minimum Reproducible Example (MRE)](https://docs.ultralytics.com/help/minimum-reproducible-example/)** - Small, self-contained code that reproduces the issue
3. **Describe environment**: OS, Python version, library versions, hardware (CPU/GPU)
4. **Explain expected vs actual behavior** with error messages and tracebacks

### What Makes a Good MRE

A Minimum Reproducible Example should:

- **Isolate the problem**: Remove unnecessary code
- **Use public models and datasets**: e.g., `yolov8n.pt` and `coco8.yaml`
- **Include dependencies**: List with `yolo checks` or `pip list`
- **Provide clear description**: Expected vs actual behavior
- **Format properly**: Use code blocks with triple backticks
- **Be testable**: Others can run it without modifications

See the complete [MRE Guide](https://docs.ultralytics.com/help/minimum-reproducible-example/) for detailed instructions.

## Reviewing Pull Requests 👀

Reviewing PRs is valuable contribution:

- **Check unit tests**: Verify tests for new features
- **Review documentation**: Ensure docs are updated
- **Evaluate performance**: Consider impact on speed/memory
- **Verify CI tests**: Confirm all tests pass
- **Provide constructive feedback**: Be specific and helpful
- **Recognize effort**: Thank contributors

## License Information 📜

### AGPL-3.0 License

Ultralytics uses [AGPL-3.0](https://www.ultralytics.com/legal/agpl-3-0-software-license) for repositories. This promotes openness, transparency, and collaborative improvement.

### Using YOLO in Your Project

If you use [Ultralytics YOLO](https://docs.ultralytics.com/models/yolo11/) models or code in your project, AGPL-3.0 requires your entire derivative work also be open-sourced under AGPL-3.0.

**Why compliance matters:**

- Keeps software open for community benefit
- Legal requirement when using AGPL-3.0 code
- Fosters collaboration and transparency

**Alternative:** If you prefer not to open-source your project, obtain an [Enterprise License](https://www.ultralytics.com/license).

### How to Comply with AGPL-3.0

Make complete source code publicly available under AGPL-3.0:

1. **Choose starting point**:
    - Fork [Ultralytics YOLO repository](https://github.com/ultralytics/ultralytics)
    - Use [Ultralytics template repository](https://github.com/ultralytics/template)

2. **License your project**:
    - Add `LICENSE` file with full [AGPL-3.0 text](https://opensource.org/license/agpl-v3)
    - Add license notice at top of source files

3. **Publish source code** including:
    - Complete application/system
    - Modifications to Ultralytics code
    - [Training](https://docs.ultralytics.com/modes/train/)/[validation](https://docs.ultralytics.com/modes/val/)/[inference](https://docs.ultralytics.com/modes/predict/) scripts
    - Model weights if modified
    - Configuration files and [datasets](https://docs.ultralytics.com/datasets/) used
    - Backend/frontend code
    - Third-party libraries modified
    - Training data if redistributable

4. **Document clearly**:
    - State AGPL-3.0 license in `README.md`
    - Include setup instructions
    - Attribute Ultralytics YOLO appropriately

See [Ultralytics Template Repository](https://github.com/ultralytics/template) for example structure.

## Our Development Team 👥

Feel free to reach out to team members for guidance:

| Name                    | GitHub Profile                                                |
| ----------------------- | ------------------------------------------------------------- |
| Abrish Sabri            | [asabri97](https://github.com/asabri97)                       |
| Abirami Vina            | [abirami-vina](https://github.com/abirami-vina)               |
| Alexis Schutzger        | [picsalex](https://github.com/picsalex)                       |
| Burhan Qaddoumi         | [Burhan-Q](https://github.com/Burhan-Q)                       |
| Fatih Akyon             | [fcakyon](https://github.com/fcakyon)                         |
| Francesco Mattioli      | [ambitious-octopus](https://github.com/ambitious-octopus)     |
| Giovanni Dal Zillio     | [ggg-dz-ultralytics](https://github.com/ggg-dz-ultralytics)   |
| Glenn Jocher            | [glenn-jocher](https://github.com/glenn-jocher)               |
| Hannah Streif           | [HannahStreif](https://github.com/HannahStreif)               |
| Jake Qian               | [fengqianjake](https://github.com/fengqianjake)               |
| Jing Qiu                | [Laughing-q](https://github.com/Laughing-q)                   |
| Joey Tjon               | [NoCodeJoey](https://github.com/NoCodeJoey)                   |
| Jordan Cooper           | [JCoops1](https://github.com/JCoops1)                         |
| Kasim Acikbas           | [kayselmecnun](https://github.com/kayselmecnun)               |
| Kirill Viarbitski       | [Kverbitski](https://github.com/Kverbitski)                   |
| Kiryl Oblikau           | [munknex](https://github.com/munknex)                         |
| Kristian Sommer         | [sokrisba](https://github.com/sokrisba)                       |
| Lakshantha Dissanayake  | [lakshanthad](https://github.com/lakshanthad)                 |
| Marius Keiser           | [Skillnoob](https://github.com/Skillnoob)                     |
| Mohammed Yasin          | [Y-T-G](https://github.com/Y-T-G)                             |
| Muhammad Rizwan Munawar | [RizwanMunawar](https://github.com/RizwanMunawar)             |
| Mykola Boiko            | [mykolaxboiko](https://github.com/mykolaxboiko)               |
| Nicolai Nielsen         | [niconielsen32](https://github.com/niconielsen32)             |
| Nuvola Ladi             | [NLadi](https://github.com/NLadi)                             |
| Onuralp Sezer           | [onuralpszr](https://github.com/onuralpszr)                   |
| Pablo Karnbaum          | [pablokarnbaum](https://github.com/pablokarnbaum)             |
| Paula Derrenger         | [pderrenger](https://github.com/pderrenger)                   |
| Prateek Bhatnagar       | [prateek-ultralytics](https://github.com/prateek-ultralytics) |
| Rick Hou                | [Bovey0809](https://github.com/Bovey0809)                     |
| Ryan Leonel Somali      | [ryanleonels](https://github.com/ryanleonels)                 |
| Sergiu Waxmann          | [sergiuwaxmann](https://github.com/sergiuwaxmann)             |
| Thomas Chuang           | [chuang091](https://github.com/chuang091)                     |
| William Beaven          | [william-beaven](https://github.com/william-beaven)           |
| Yogendra Singh          | [yogendrasinghx](https://github.com/yogendrasinghx)           |
| Tigran Hakobyan         | [tthakz](https://github.com/tthakz)                           |
| Zinnia Pourdad          | [zinnialp](https://github.com/zinnialp)                       |
| Shuai (Louis) LYU       | [ShuaiLYU](https://github.com/ShuaiLYU)                       |
| Abi Anderson            | [UltralyticsAbi](https://github.com/UltralyticsAbi)           |
| Jin Xu                  | [laodouya](https://github.com/laodouya)                       |
| Zuzana Kontrikova       | [zkontri](https://github.com/zkontri)                         |

## Get Support 💬

Questions or need help?

- Open an issue on [GitHub](https://github.com/ultralytics/ultralytics/issues)
- Join [GitHub Discussions](https://github.com/ultralytics/ultralytics/discussions)
- Connect on [Discord](https://discord.com/invite/ultralytics)
- Check [documentation](https://docs.ultralytics.com/)
- Visit [Help Center](https://docs.ultralytics.com/help/)

## Thank You! 🎉

Thank you for your interest in contributing to Ultralytics open-source projects. Your participation is essential in shaping the future of our software and building a vibrant community of innovation and collaboration.

We're excited to see your ideas come to life and appreciate your commitment to advancing object detection technology. Together, let's continue to grow and innovate! 🚀🌟

## Resources 📚

- [Official Contributing Guide](https://docs.ultralytics.com/help/contributing/) - Complete contribution guidelines
- [Development Workflow](../workflows/development.md) - PR process and code standards
- [CI/Testing](../workflows/ci-testing.md) - Testing and quality checks
- [Documentation Workflow](../workflows/documentation.md) - Writing docs
- [Code of Conduct](https://docs.ultralytics.com/help/code-of-conduct/) - Community standards
- [CLA Document](https://docs.ultralytics.com/help/CLA/) - Contributor License Agreement
- [MRE Guide](https://docs.ultralytics.com/help/minimum-reproducible-example/) - Bug reporting best practices
