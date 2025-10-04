---
description: Ultralytics documentation workflow covering writing, building, and maintaining docs for YOLO11 and Ultralytics projects.
keywords: Ultralytics, documentation, MkDocs, writing guides, YOLO11 docs, API documentation, tutorials
---

# Documentation Workflow 📚

This guide covers writing, building, and maintaining documentation for [Ultralytics](https://www.ultralytics.com/) projects.

## Documentation Structure 🗂️

### Main Documentation Sites

- **[docs.ultralytics.com](https://docs.ultralytics.com)** - YOLO11 technical documentation
- **[handbook.ultralytics.com](https://handbook.ultralytics.com)** - Company handbook (this site)

### Repository Structure

```
docs/
├── en/              # English docs
│   ├── index.md     # Homepage
│   ├── guides/      # User guides
│   ├── tasks/       # Task-specific docs
│   ├── models/      # Model documentation
│   └── reference/   # API reference
├── zh/              # Chinese translations
└── overrides/       # Theme customizations
```

## Writing Documentation ✍️

### Style Guide

- **Clear and concise**: Get to the point quickly
- **Active voice**: "Train the model" not "The model is trained"
- **Code examples**: Show working code for every concept
- **Visual aids**: Use images/diagrams where helpful
- **Consistent formatting**: Follow existing page structures

### Markdown Format

````markdown
---
description: Brief page description for SEO
keywords: relevant, keywords, for, search
---

# Page Title

Brief introduction explaining what this page covers.

## Section Heading

Content with examples:

```python
from ultralytics import YOLO

# Load pretrained model
model = YOLO("yolo11n.pt")
results = model("image.jpg")
```

### Key points:

- Use bullet points for lists
- Keep paragraphs short
- Include links to related pages


### Code Examples

- **Minimal**: Show only relevant code
- **Runnable**: Examples should work copy-paste (test with actual [models](https://docs.ultralytics.com/models/))
- **Commented**: Explain non-obvious parts
- **Tested**: Verify examples work with current version

```python
from ultralytics import YOLO

# Load pretrained model
model = YOLO("yolo11n.pt")

# Train on custom data
results = model.train(data="coco8.yaml", epochs=3)
````

### Images and Media

Store in repository or use CDN:

```markdown
![Alt text](https://path/to/image.png)
```

Keep image sizes reasonable (<500KB when possible).

## Building Documentation 🔨

### Local Development

Install dependencies:

```bash
pip install -e ".[docs]"
```

Build and serve locally:

```bash
mkdocs serve
```

Visit `http://127.0.0.1:8000` to preview.

### MkDocs Configuration

Main config in `mkdocs.yml`:

```yaml
site_name: Ultralytics Docs
theme:
    name: material
    palette:
        - scheme: slate
plugins:
    - search
    - ultralytics
```

## API Documentation 📖

API reference is auto-generated from docstrings. See the [complete API reference](https://docs.ultralytics.com/reference/) for all modules:

```python
def train(self, data, epochs=100, batch=16):
    """
    Train the model on a dataset.

    Args:
        data (str): Path to data YAML file
        epochs (int): Number of training epochs
        batch (int): Batch size

    Returns:
        (Results): Training results

    Examples:
        ```python
        model = YOLO("yolo11n.pt")
        results = model.train(data="coco8.yaml", epochs=100)
        ```
    """
```

Key elements:

- **Brief description**: One-line summary
- **Args**: Parameter descriptions with types
- **Returns**: Return value description
- **Examples**: Working code example

## Adding New Pages 📄

### 1. Create Markdown File

```bash
# Create new guide
touch docs/en/guides/new-guide.md
```

### 2. Update Navigation

Edit `mkdocs.yml`:

```yaml
nav:
    - Home: index.md
    - Guides:
          - New Guide: guides/new-guide.md
```

### 3. Write Content

Follow style guide and include examples.

### 4. Test Build

```bash
mkdocs serve
```

### 5. Submit PR

Follow [development workflow](development.md) for PR process.

## Translations 🌐

### Adding Translations

1. Copy English version to language directory:

```bash
cp docs/en/page.md docs/zh/page.md
```

2. Translate content, keep code examples in English

3. Update `mkdocs.yml` alternate links

### Translation Guidelines

- Keep technical terms in English (YOLO, mAP, FPS)
- Translate descriptions and explanations
- Maintain same structure as English version
- Update translations when English version changes

## Documentation CI 🤖

CI automatically:

- Builds documentation on every PR
- Checks for broken links
- Validates markdown formatting
- Deploys to production on merge to main

### Fixing Build Errors

Common issues:

- **Broken links**: Fix or remove invalid links
- **Missing images**: Add images or update paths
- **Invalid YAML**: Fix frontmatter syntax
- **Plugin errors**: Check plugin configuration

## Best Practices ✅

### Content Organization

- **Logical structure**: Group related content
- **Progressive disclosure**: Simple → advanced
- **Cross-linking**: Link to related pages
- **Search optimization**: Use clear titles and descriptions

### Maintenance

- **Keep current**: Update for new features
- **Remove outdated**: Delete deprecated content
- **Check links**: Fix broken links regularly
- **User feedback**: Address common questions

### Accessibility

- **Alt text**: Describe images for screen readers
- **Clear headings**: Use proper heading hierarchy
- **Plain language**: Avoid jargon when possible
- **Code contrast**: Ensure code blocks are readable

## Resources 📚

- [MkDocs Documentation](https://www.mkdocs.org/) - Static site generator
- [Material Theme](https://squidfunk.github.io/mkdocs-material/) - Theme documentation
- [Markdown Guide](https://www.markdownguide.org/) - Markdown syntax reference
