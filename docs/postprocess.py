# Ultralytics 🚀 AGPL-3.0 License - https://ultralytics.com/license
"""Postprocess Handbook site after zensical build."""

import re
from pathlib import Path
from plugin import postprocess_site

def fix_md(site_dir: Path = Path("site")) -> None:
    """Replace .md references with trailing slashes in all HTML files."""
    for html_file in site_dir.rglob("*.html"):
        content = html_file.read_text(encoding="utf-8")
        content = content.replace("index.md", "")
        content = re.sub(r'(["\']?)([^"\'>\s]+?)\.md(["\']?)', r"\1\2/\3", content)
        html_file.write_text(content, encoding="utf-8")
    print(f"Post-processed {sum(1 for _ in site_dir.rglob('*.html'))} HTML files")

if __name__ == "__main__":

    fix_md()
    postprocess_site(
        site_dir="site",
        docs_dir="docs/en",
        site_url="https://handbook.ultralytics.com",
        default_image="https://raw.githubusercontent.com/ultralytics/assets/main/yolov8/banner-yolov8.png",
        default_author="glenn.jocher@ultralytics.com",
        add_desc=False,
        add_image=True,
        add_authors=True,
        add_json_ld=True,
        add_share_buttons=True,
        add_css=False,
        verbose=True,
    )
