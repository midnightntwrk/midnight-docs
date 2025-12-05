# 1. Vulnerability Audit and Documentation Quality Improvements

**Date:** 2025-12-05  
**Status:** Accepted  

**Sources:**
- Branch: `vuln_audit`
- Related PRs: #431, #433, #439, #440

## Context and Problem Statement

The midnight-docs repository required multiple improvements across security, build quality, testing coverage, and documentation accuracy. This ADR documents the key decisions made to address these issues comprehensively.

**Decision Drivers:**
* Security vulnerabilities identified by npm audit and Checkmarx scanning
* Build warnings affecting CI/CD pipelines
* Limited visual regression test coverage (only 6 pages)
* Broken markdown links causing documentation navigation issues
* Outdated Docusaurus version (3.1.1) limiting access to new features and security patches
* Dependency version conflicts causing installation warnings

## Decisions Made

### Decision 1: Security Vulnerability Remediation

**Context:** npm audit and Checkmarx identified vulnerabilities in dependencies and workflow configurations.

**Changes:**
- Applied `npm audit fix` to resolve dependency vulnerabilities (`412f7cf`)
- Added `permissions` blocks to GitHub workflows to follow principle of least privilege (`3a4cf35`)
- Enhanced input sanitization in TypesenseSearch component (`3a4cf35`)

**Rationale:** Security vulnerabilities must be addressed promptly to protect users and maintain trust.

---

### Decision 2: Docusaurus Major Version Upgrade (3.1.1 → 3.8.1)

**Context:** The site was running an outdated Docusaurus version, missing security patches and new features.

**Changes (`42af22d`):**
- Upgraded all @docusaurus/* packages from 3.1.1 to 3.8.1
- Updated theme components to match new API requirements
- Regenerated yarn.lock with updated dependency tree

**Trade-offs:**
- *Pro:* Access to latest security patches, performance improvements, and features
- *Con:* Required updates to 13 theme component files

**Rationale:** Staying current with framework versions is essential for security and maintainability.

---

### Decision 3: Dependency Version Conflict Resolution

**Context:** Yarn install produced warnings about `three` version incompatibility with `postprocessing`, and missing `@docusaurus/plugin-content-docs` peer dependency.

**Changes (`b7f9133`):**
- Downgraded `three` from `^0.181.2` to `^0.180.0` to satisfy `postprocessing` requirement (`>=0.157.0 <0.181.0`)
- Added explicit `@docusaurus/plugin-content-docs@3.8.1` dependency

**Rationale:** Clean installations without warnings improve developer experience and CI reliability.

---

### Decision 4: Build Warning Elimination

**Context:** Multiple build warnings were affecting CI output and could mask genuine issues.

**Changes (`00a5fd3`):**

| Warning | Fix |
|---------|-----|
| Blog authors not in authors.yml | Added `kaleab` and `compactTeam` to `blog/authors.yml` |
| Duplicate routes at /blog | Moved `src/pages/blog/index.js` → `src/components/BlogIndex/index.js` |
| Blog posts without truncation markers | Added `onUntruncatedBlogPosts: 'ignore'` to blog plugin config |
| Inline authors warning | Added `onInlineAuthors: 'ignore'` to blog plugin config |
| CSS @import order | Moved `@import url()` before `@tailwind` directives |

**Rationale:** Clean builds make it easier to identify genuine issues.

---

### Decision 5: Broken Markdown Link Resolution

**Context:** Multiple documentation files contained broken links using outdated path patterns.

**Changes (`ac55da1`, `5abbdf9`):**

| Pattern | Fix |
|---------|-----|
| `/docs/develop/reference/compact/*` | Changed to `/compact/*` |
| `/docs/develop/tutorial/*` | Changed to `/develop/tutorial` |
| `/docs/learn/04-glossary.mdx` | Changed to `/learn/glossary` |
| `::note` admonition syntax | Changed to `:::note` with closing `:::` |
| `*/README` or `*/README.md` absolute links | Changed to directory path (README.md becomes index page) |

**Files affected:** 13 files across `compact/` and `docs/` directories

**Rationale:** Broken links degrade documentation usability and user experience.

---

### Decision 6: Visual Regression Test Coverage Expansion

**Context:** Only 6 pages had visual regression coverage, leaving most of the site untested.

**Changes (`d58a1b3`):**
- Expanded test URLs from 6 to 34 pages in `pipelines-urls.json`
- Added baseline screenshots for all new pages
- Coverage now includes: Getting Started, Learn, Develop, Compact, Academy, Blog, Validate, Operate, and Release Notes sections

**Rationale:** Comprehensive visual regression testing catches unintended UI changes before deployment.

---

### Decision 7: Sidebar Improvements

**Context:** User experience issues with sidebar navigation.

**Changes:**
- Added scroll bar to sidebar for better navigation of long menus (`840adc0`)
- Fixed sidebar rendering issues (`248ac91`)
- Removed unnecessary collapser component (`3089c5a`)

**Rationale:** Improved navigation enhances documentation usability.

---

### Decision 8: CI/CD Pipeline Improvements

**Context:** Vercel deployments were hitting rate limits.

**Changes (`3ff5ce3`):**
- Added `--archive=tgz` flag to Vercel deploy command

**Rationale:** Ensures reliable deployments without rate limiting issues.

## Consequences

### Positive

* Zero security vulnerabilities from npm audit
* Zero build warnings
* Visual regression coverage increased from 6 to 34 pages (467% increase)
* All markdown links resolve correctly
* Clean dependency installation without warnings
* Improved sidebar navigation experience
* Up-to-date Docusaurus framework

### Negative

* Increased baseline screenshot storage (~5MB of PNG files)
* Theme components require ongoing maintenance with Docusaurus upgrades

## Confirmation

- ✅ **Security:** npm audit clean, Checkmarx findings addressed
- ✅ **Build:** Zero warnings
- ✅ **Tests:** Visual regression baseline established for 34 pages
- ✅ **Links:** All markdown links resolve

## Summary of Commits

| Commit | Description |
|--------|-------------|
| `412f7cf` | Security vulnerabilities via npm audit fix |
| `42af22d` | Docusaurus upgrade 3.1.1 → 3.8.1 |
| `d58a1b3` | Visual regression coverage 6 → 34 pages |
| `3ff5ce3` | CI: Vercel deploy rate limit fix |
| `3a4cf35` | Security: Checkmarx findings |
| `b7f9133` | Dependency version conflicts |
| `00a5fd3` | Build warnings |
| `ac55da1`, `5abbdf9` | Broken markdown links |
| `840adc0`, `248ac91`, `3089c5a` | Sidebar improvements |

