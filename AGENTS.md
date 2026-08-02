# AGENTS.md

This file provides guidance to AI coding agents (Claude Code, etc.) when working with code in this repository. CLAUDE.md is a symlink to this file.

This repository (AGPL-3.0) is the Markdown source for the Ultralytics company handbook published at https://handbook.ultralytics.com/, covering our mission, values, onboarding, people, policies, security, and operations. It is documentation only — there is no application code.

## Core Principles (CRITICAL)

**Less is more. The simplest solution is the best solution.** The action hierarchy for every change: **Delete > Replace > Add**.

1. **Solve at the owner**: Put behavior in the code path that owns or observes it. For fixes, never guard a symptom with a staleness check, initialization flag, skip-first-call branch, or `try/except` around broken logic; relocate the trigger and delete the wrong path. For features, extend the existing owner rather than creating a parallel abstraction.
2. **Search and reuse first**: Search the whole repository before creating a feature, component, helper, workflow, or utility. Reuse or adapt what exists, consolidate in-scope duplication in the shared owner, and delete duplicate paths. Three similar lines beat a helper nobody else calls.
3. **Delete and modify existing code before creating new code**: Bugfixes are net-negative by default unless deletion and relocation are demonstrably impossible. A new file must first prove it cannot fit cleanly in an existing owner.
4. **Keep scope minimal**: Implement only the simplest complete solution. Avoid impossible-state handling, speculative flags, compatibility shims, policy scaffolding, and unrelated cleanup. Tests are out of scope by default — rely on existing coverage and focused validation; only an uncovered, high-risk regression path justifies minimal new test code.
5. **Ship zero-regression, production-ready changes**: Understand what you remove instead of retaining broken code as insurance. Remove unused imports, functions, types, files, and comments; run relevant cleanup checks; and thoroughly debug and validate the changed owner. Do not break existing features or workflows unless the PR intentionally removes them with evidence.

**Review gate:** for every addition, the reviewer decides whether deleting or changing existing code would have fixed the problem instead — if it would, that is a blocking finding. A missing or thin PR description is never itself a finding.

NEVER push to `main`. NEVER force push. Always start work in a new git worktree (`git worktree add`) on a feature branch and open a PR — never edit the primary checkout directly, it may hold in-flight work.

## PR Workflow

After opening a PR:

1. Wait for the automated PR review and auto-format commit from Ultralytics Actions (`format.yml`), then pull and address every finding.
2. Review the full diff in-session against the Core Principles, performance, and the review gate above, then batch the fixes into one commit and push. After each round of bot or human commits, pull and resume the same reviewer on `<last-reviewed-sha>..HEAD` plus anything that delta could have invalidated. Repeat until the local head matches the live head.
3. Hand off or merge only on a clean final pass: one cold full-diff review returning LGTM with no findings, on a head that is still live at merge time.
4. Never fight other commits: Ultralytics Actions pushes auto-format and header commits, and multiple users may work on the same PR. `git pull --rebase` before pushing; never reset or revert commits you did not author.
5. After the PR merges, clean up: remove local worktrees and branches for it, then `git checkout main && git pull`.

## Commands

```bash
uv pip install -r requirements.txt mkdocs mkdocs-material # install deps as CI does (never bare pip install)
zensical serve                                            # local dev server with live reload at http://127.0.0.1:8000
zensical build                                            # build static site into site/ (git-ignored)
mkdocs build --strict                                     # the CI check (ci.yml): warnings are errors
npm run build                                             # Vercel production build: docs/build_docs.js -> docs/build_docs.py
ruff format . && ruff check --fix .                       # Python format/lint (line-length 120 from pyproject.toml)
codespell                                                 # spelling (ignore-list in pyproject.toml [tool.codespell])
```

- CI (`ci.yml`) runs a single `build-docs` job on ubuntu-latest with Python 3.13 — no matrix; `pyproject.toml` declares `requires-python = ">=3.8"`.
- There is no test suite and no coverage run in CI — `mkdocs build --strict` is the only build gate (the pytest/coverage dependencies in `pyproject.toml` are unused).

## Architecture

This is a docs-only repository: the source for [handbook.ultralytics.com](https://handbook.ultralytics.com/), with all content as Markdown under `docs/en/` and no application code. The root `mkdocs.yml` is the single config (Zensical-compatible with MkDocs Material): `docs_dir: docs/en/`, `site_dir: site/`, plus nav, theme, and analytics.

The production build path differs from local dev: Vercel runs `npm run build` (`vercel.json`), which runs `docs/build_docs.js` to locate a Python interpreter that can `import zensical, plugin`, then executes `docs/build_docs.py` — `zensical build` followed by HTML post-processing (`fix_md` rewrites `.md` links to slashes; `postprocess_site` from mkdocs-ultralytics-plugin adds images, authors, JSON-LD, and share buttons). CI instead validates with plain `mkdocs build --strict`.

Deploys: Vercel deploys on push to `main`. Additionally, `ci.yml` POSTs the `VERCEL_HANDBOOK_DEPLOY_HOOK` secret to redeploy the Portal handbook, but only on pushes that changed `docs/` or `mkdocs.yml`. Releases: `tag.yml` is manual `workflow_dispatch` only, gated to the `ultralytics/handbook` repo and actor `glenn-jocher`; it publishes a git tag plus an AI-summarized GitHub release — nothing is published to a package registry.

Note: `mkdocs.yml` lists `zh`/`es` language alternates and `vercel.json` redirects 12 language roots (`/zh`, `/ko`, ...), but only English content (`docs/en/`) exists in this repo.

## Conventions

- Ultralytics Actions (`format.yml`) auto-pushes commits to PRs: Ruff for Python, Prettier for YAML/JSON/Markdown/CSS, codespell for spelling, and the `# Ultralytics 🚀 AGPL-3.0 License` header — don't add or revert these manually.
- Every docs page starts with YAML frontmatter containing `description:` and `keywords:`.
- 120-character line length (`[tool.ruff]` in `pyproject.toml`); match existing pages' tone, emoji usage, admonitions, and tables.
- `links.yml` runs the lychee broken-link checker on push, PR, and a daily cron — it hits the live network, so external-site outages can fail it spuriously.
- No version-bump automation: `version` in `pyproject.toml` is static; releases happen only via the manual `tag.yml` workflow.
