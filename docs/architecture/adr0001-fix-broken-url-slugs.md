# 1. Fix Broken URL Slugs

**Date:** 2025-12-05  
**Status:** Accepted  

**Sources:**
- Related PRs: #440

## Context and Problem Statement

Visual regression tests were capturing "Page Not Found" errors for 4 documentation URLs. The root cause was a mismatch between the URLs defined in `pipelines-urls.json` (used by tests) and the actual slugs defined in MDX frontmatter.

**Decision Drivers:**
* Tests failing due to 404 errors on expected URLs
* User navigation expectations based on sidebar structure
* Maintainability: URLs should match file locations
* Consistency across the documentation site

## Alternative Options

* **Option 1: Update content slugs** - Modify MDX frontmatter to use intuitive URL paths
* **Option 2: Update test URLs** - Change `pipelines-urls.json` to match current slugs

## Decision Outcome

**Chosen option:** "Option 1: Update content slugs", because:
- URLs should be intuitive and match the file structure
- Sidebar configuration already expects these URL patterns
- Better long-term maintainability
- Reduces confusion between URL and file location

### Consequences

**Positive:**
* All 4 affected pages now resolve correctly
* URLs are intuitive and match file structure
* Visual regression tests pass
* Consistent navigation experience for users

**Negative:**
* Any external links to the old slugs will break (minimal impact - these are test/dev URLs)

### Confirmation

- ✅ **Build:** Zero errors
- ✅ **Tests:** Visual regression tests should pass

**Files Changed:**

| File | Old Slug | New Slug |
|------|----------|----------|
| `docs/learn/what-is-midnight/index.mdx` | `/learn/what-is-midnight/index` | `/learn/what-is-midnight` |
| `docs/learn/what-is-midnight/why-midnight.mdx` | `/learn/introduction/what-is-midnight/` | `/learn/what-is-midnight/why-midnight` |
| `docs/develop/how-midnight-works/index.mdx` | `concepts/index` | `/develop/how-midnight-works` |
| `docs/getting-started/deploy-mn-app.mdx` | `/getting-started/deploy-hello-world` | `/getting-started/deploy-mn-app` |

## Pros and Cons of the Options

### Option 1: Update content slugs - Chosen

**Pros:**
- URLs match file structure for maintainability
- Intuitive navigation paths for users
- Aligns with sidebar configuration
- Single source of truth for URL structure

**Cons:**
- Requires content file changes
- External links to old slugs break

### Option 2: Update test URLs

**Pros:**
- No content changes required
- Quick fix

**Cons:**
- URLs remain unintuitive
- Ongoing maintenance burden
- Divergence between file structure and URLs

