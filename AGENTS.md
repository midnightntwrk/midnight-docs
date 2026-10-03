# Contributor guide for the Midnight docs

This repository is the source of docs.midnight.network, a Docusaurus 3 site written in MDX. This file covers what you need to know before you change anything here. [CONTRIBUTING.md](CONTRIBUTING.md) and the [style guide](docs/_contribute/style-guide.mdx) have the full rules.

## Build and preview

Use Node 24, the version in `.nvmrc` (`nvm use` picks it up). Node 22 also works. Get Yarn 4 through Corepack, not a global Yarn 1 install:

```bash
corepack enable
yarn install --immutable
yarn start    # dev server on http://localhost:3000
```

Node 25 and later don't include Corepack. On those, run `npm install -g corepack` first.

Before you open a PR, run the production build, which is what CI checks:

```bash
yarn build    # clears the cache, then builds into build/
yarn serve    # serves build/ on http://localhost:3000
```

- You don't need a `.env` file to run or build the site. Without the real Algolia keys, search returns no results locally.
- The build only warns about broken links and anchors, so a passing build can still have them. Read the warnings for the pages you changed.
- If the build stops with `EMFILE: too many open files`, run `ulimit -n 65536` in the same shell and build again.
- Every PR opened from a branch in this repository gets a preview at `https://pr-<number>-midnight-docs.vercel.app`.

## Where things live

- The site serves `docs/` at `/`, `sdks/` at `/sdks`, `api-reference/` at `/api-reference`, and `blog/` at `/blog`.
- The site skips files and folders whose names start with `_`.
- `main_versioned_docs/` is an archived copy of the old v0 docs. Fix content in `docs/`.
- When you move or rename a page, add a redirect to `vercel.json`. Vercel uses the first rule that matches, so put a specific path above any `:path*` rule that would catch it.

## Don't edit these here

These come from other repositories, and the next sync overwrites any local edit. Fix them at the source.

| Path | Source |
| --- | --- |
| `docs/compact/` | The Compact team owns this folder (see `CODEOWNERS`), and most of it comes from `doc/` in [LFDT-Minokawa/compact](https://github.com/LFDT-Minokawa/compact). Don't change anything in it. If a link on one of its pages breaks, add a redirect for the old path instead. |
| `docs/tutorials/zk-loan/`, except `_category_.yaml` | `tutorials/` in [midnightntwrk/example-zkloan](https://github.com/midnightntwrk/example-zkloan) |
| `docs/tutorials/leaderboard/`, except `index.mdx` and `_category_.yaml` | `tutorials/` in [midnightntwrk/midnight-leaderboard](https://github.com/midnightntwrk/midnight-leaderboard) |
| `api-reference/`, except `overview/`, `error-reference/`, and `wallet-sdk/` | The component repositories, through the Copy API docs workflow (`.github/workflows/apis.yml`) and the Compact sync. The indexer pages under `midnight-indexer/operations/` and `types/` come from `static/midnight-indexer/schema-v4.graphql` through `yarn docusaurus graphql-to-doc`. |
| The `COMPACT_SYNC` blocks in `src/css/custom.css` | LFDT-Minokawa/compact |

Don't run `.license_headers.sh`. It rewrites every file that has no license header.

## Release notes

- Pages in `docs/relnotes/<component>/` come from each product's GitHub release. A maintainer runs the Sync release notes workflow (`.github/workflows/sync-release-notes.yml`), which copies the release, adds an entry to `src/components/DynamicList<Component>.js`, and opens a PR. That PR still needs its summary, details, and artifacts filled in.
- Compact toolchain notes arrive in a PR from LFDT-Minokawa/compact. For components the workflow doesn't cover, such as the Compact developer tools and the proof server, add the page and the DynamicList entry by hand.
- The Release notes watch workflow opens an issue for each stable release that has no page yet.
- The compatibility matrix is `docs/relnotes/support-matrix.json`, the source of truth, plus the tables in `docs/relnotes/support-matrix.mdx`. Change both together.

Write release notes from the release itself, never from memory.

## Check Midnight facts before you write them

Compact, the SDKs, and the networks change often. Check every version, API, command, and output against the real thing, and say in the PR what you checked.

- Versions: use the compatibility matrix. The `latest` tag on npm can be ahead of what the networks run.
- Compact: compile every snippet with the toolchain version in the matrix. These commands leave your default compiler alone:

  ```bash
  compact update <version> --no-set-default
  compact compile +<version> --skip-zk snippet.compact out/
  ```

- SDK APIs: check the package at the matrix version (`npm view <package>@<version>`), and read the source at that release tag, not on `main`.
- Commands, endpoints, and error messages: run them and copy what you get.

The [Midnight Expert](docs/ai-integration/midnight-expert.mdx) plugins can run these checks for you.

## Style rules Vale doesn't catch

Lint the files you change. Install Vale (the README has the commands). To read MDX, Vale also needs `mdx2vast` on your `PATH`:

```bash
npm install -g mdx2vast
vale docs/path/to/page.mdx
```

The Vale check on PRs is advisory and only reports lines you added in `docs/` and `sdks/`. Vale misses these, so check them yourself:

- Frontmatter on every page: a sentence-case `title`, a `description` of 120 to 160 characters, and the `SPDX-License-Identifier` and `copyright` lines from an existing page. Put the description in quotes if it contains a colon, or the build fails. The copyright reads `Copyright (C) Midnight Foundation`, with no year.
- One `#` heading per page, and no skipped heading levels.
- Alt text on every image, and link text that says where the link goes (never "here").
- A language on every code fence.
- No em-dashes. Use a comma, a colon, parentheses, or two sentences. To find them: `grep -n "$(printf '\342\200\224')" docs/path/to/page.mdx`
- Name casing: NIGHT, DUST, tNIGHT, tDUST, and Midnight Network with a capital N. Write proof server and smart contract in lowercase mid-sentence, and capitalize Preview, Preprod, and Mainnet.
- No links to private repositories.

## Pull requests and commits

- If you have write access, push your branch to `midnightntwrk/midnight-docs` and open the PR from there. PRs from forks get no preview deploy and no Vale or link-check comment, and their checks can wait for a maintainer to approve them.
- Sign every commit. `.envrc` turns signing on if you use direnv. Otherwise run `git config commit.gpgSign true` once in your clone.
- Commit with an email that's on your GitHub account so the `license/cla` check can match you. First-time contributors sign the CLA from the link that check posts.
- Fill in the PR template, link the issue the PR closes, and don't force-push once a review has started.
