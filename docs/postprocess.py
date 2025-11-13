# Ultralytics 🚀 AGPL-3.0 License - https://ultralytics.com/license

"""Postprocess Handbook site after zensical build."""

from plugin import postprocess_site  # noqa "uv pip install mkdocs-ultralytics-plugin"

if __name__ == "__main__":
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
