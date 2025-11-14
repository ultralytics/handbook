# Ultralytics 🚀 AGPL-3.0 License - https://ultralytics.com/license
"""Build and preview Handbook documentation."""

import os
import re
import subprocess
import webbrowser
from pathlib import Path

from plugin import postprocess_site

DOCS = Path(__file__).parent.resolve()
SITE = DOCS.parent / "site"


def fix_md(site_dir: Path = SITE) -> None:
    """Replace .md references with trailing slashes, skipping GitHub links."""
    files = list(site_dir.rglob("*.html"))
    for html_file in files:
        content = html_file.read_text(encoding="utf-8")
        lines = []
        for line in content.split("\n"):
            if "github.com" not in line:
                line = line.replace("index.md", "")
                line = re.sub(r'(["\']?)([^"\'>\s]+?)\.md(["\']?)', r"\1\2/\3", line)
            lines.append(line)
        html_file.write_text("\n".join(lines), encoding="utf-8")
    print(f"Post-processed {len(files)} HTML files")


def main():
    """Build docs, postprocess, and serve with browser preview."""
    # Build with Zensical
    print(f"Building docs from {DOCS}")
    subprocess.run(["zensical", "build"], cwd=DOCS.parent, check=True)
    print(f"Site built at {SITE}")

    # Postprocess
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

    # Calculate size
    size = sum(f.stat().st_size for f in SITE.rglob("*") if f.is_file()) >> 20
    print(f"Docs built correctly ✅ ({size:.1f} MB)")

    # Open browser and serve
    if not os.getenv("CI") and not os.getenv("VERCEL") and not os.getenv("GITHUB_ACTIONS"):
        url = "http://localhost:8000"
        print(f"Opening browser at {url}")
        webbrowser.open(url)
        try:
            subprocess.run(["python", "-m", "http.server", "--directory", str(SITE), "8000"], check=True)
        except KeyboardInterrupt:
            print(f"\n✅ Server stopped. Restart at {url}")
        except Exception as e:
            print(f"\n❌ Server failed: {e}")
    else:
        print('Serve site at http://localhost:8000 with "python -m http.server --directory site"')


if __name__ == "__main__":
    main()
