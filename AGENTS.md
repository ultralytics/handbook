# AGENTS.md

This file provides guidance to AI coding agents (Claude Code, etc.) when working with code in this repository. CLAUDE.md is a symlink to this file.

## Core Principles (CRITICAL)

Respecting these principles is critical for every PR.

**Less is more. The simplest solution is the best solution.**

The action hierarchy for every change: **Delete > Replace > Add**. The best code change is a deletion. The second best is modifying what exists. Adding new code is the last resort.

1. **Minimal**: The simplest solution that works. Do not over-engineer, over-abstract, or add code just in case. Three similar lines beat a premature abstraction. Avoid error handling for impossible states, feature flags, compatibility shims, or policy scaffolding unless they are truly required.
2. **Solve at the source**: Do not hack fixes. Solve problems at their root. If something is broken, fix or remove the broken thing. Never patch over a broken abstraction, add workarounds, or add synchronization code for state that should not be duplicated.
3. **Delete ruthlessly**: When replacing code, delete what it replaced. Remove unused imports, functions, types, files, and commented-out code. Git preserves history. Run the repo's relevant dead-code or cleanup check when available.
4. **Replace > Add**: Modify existing code over adding new code. Edit existing files, extend existing components or functions with minimal parameters, and reuse existing utilities. If creating a new file, first prove it cannot fit cleanly in an existing file.
5. **Check existing**: Search the entire repo before creating anything new. If a feature, component, helper, responder, workflow, or utility already solves a similar problem, reuse or adapt it and delete the duplicate path.
6. **Deduplicate**: Do not duplicate existing code when updating the repo. Consolidate or refactor duplicates you find when it is in scope and low risk.
7. **Zero Regression**: Do not break existing features or workflows unless the PR intentionally removes them with evidence.
8. **Production ready**: All changes must be thoroughly debugged, validated, and production ready.

**When fixing bugs, ask: "What can I delete?" before "What can I replace?" before "What should I add?"**

## PR Workflow

After opening a PR:

1. Wait for the automated PR review and auto-format commit from Ultralytics Actions (`format.yml`), then pull and address every finding.
2. Launch an independent adversarial review agent with cold context (just the PR diff and this file) to hunt for bugs, regressions, and Core Principles violations — use the Codex CLI, one fresh `codex exec` run per round. Fix, push, and repeat until a fresh run reports LGTM.
3. Never fight other commits: Ultralytics Actions pushes auto-format and header commits, and multiple users may work on the same PR. `git pull --rebase` before pushing; never force-push, reset, or revert commits you did not author.
4. After the PR merges, clean up: remove local worktrees and branches for it, then `git checkout main && git pull`.

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
