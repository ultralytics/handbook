# Ultralytics 🚀 AGPL-3.0 License - https://ultralytics.com/license
"""Post-process built site to clean .md references from URLs."""

from pathlib import Path


def postprocess_site(site_dir: Path = Path("../site")) -> None:
    """Replace index.md with index.html, then abc.md with abc/index.html in all HTML files."""
    for html_file in site_dir.rglob("*.html"):
        content = html_file.read_text(encoding="utf-8")
        content = content.replace("index.md", "index.html")
        # content = re.sub(r'(["\']?)([^"\'>\s]+?)\.md(["\']?)', r"\1\2/index.html\3", content)
        html_file.write_text(content, encoding="utf-8")
    print(f"Post-processed {sum(1 for _ in site_dir.rglob('*.html'))} HTML files")


if __name__ == "__main__":
    postprocess_site()
