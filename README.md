# Midnight Documentation

Welcome to the Midnight documentation repository. [Midnight](https://midnight.network/) is a data protection blockchain that empowers developers to build decentralized applications with privacy-preserving smart contracts using zero-knowledge proofs.

This repository contains comprehensive developer documentation including:
- **Getting started guides** for building your first DApp
- **Compact language reference** for writing smart contracts
- **SDK documentation** for wallet and contract interactions
- **API references** for Midnight.js and related libraries
- **Tutorials** with step-by-step implementation examples
- **Guides** covering network setup, deployment, and best practices

The documentation website is built with [Docusaurus 3](https://docusaurus.io) and is publicly accessible at [docs.midnight.network](https://docs.midnight.network).

## Quick start

To get started, ensure you have [Node](https://github.com/nvm-sh/nvm) version v22.17.1 or higher installed:

```shell
node -v
```

Next, globally install [Yarn](https://yarnpkg.com/) using NPM:

```shell
npm install -g yarn
```

Install packages:

```shell
yarn
```

Run a local instance of the documentation:

```shell
yarn start
```

A browser window should open automatically; if not, visit [localhost:3000](http://localhost:3000/).

If you see an error message like 'algolia.appId is required', verify your `.env` file for accuracy.

## Contribution rules

1. Every change in the repository should follow the review process.
2. At least one reviewer is needed to approve changes.
3. Documentation should be strict, concise, and focused on providing details on the architecture and processes.
4. Use precise language.
5. Don't put links or references to other private repositories in documentation.
6. Directory structure should be at a maximum of two levels deep.
7. Headings should be a maximum of three levels deep — `###`.
8. All ambiguous and not widely-known terms should be described in the [Glossary](./docs/glossary.mdx) section.
9. API documentation should be automatically updated.
10. **Lint your changes** before opening a PR (see [Vale Linting](#vale-linting) below).

## Vale linting

This repository uses [Vale](https://vale.sh/) to enforce consistent writing style and technical accuracy. Before submitting changes, lint your modified files locally to catch issues early.

### Install Vale

**macOS**:
```shell
brew install vale
```

**Linux**:
```shell
snap install vale
```

**Windows**:
```shell
choco install vale
```

### Lint your changes

Lint a specific file:
```shell
vale docs/guides/your-file.mdx
```

Lint a directory:
```shell
vale docs/guides/
```

Lint all documentation:
```shell
vale docs/
```

Lint blog posts:
```shell
vale blog/
```

### Vale configuration

Vale rules are defined in:
- **`.vale.ini`** - Main configuration file
- **`.github/styles/Midnight/`** - Custom Midnight-specific style rules
- **`.github/styles/config/vocabularies/Midnight/accept.txt`** - Accepted technical terms

### Common Vale warnings

- **Passive voice**: Use active voice where possible
- **Readability**: Break long sentences into shorter ones
- **First person**: Avoid "we" and "our" in technical documentation
- **Brand terms**: Ensure correct capitalization of product names

## Details

### Installation

```
$ yarn
```

### Local development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### API documentation update process

1. Within the component repository you want to create API documentation, create a `/docs/api` directory.
2. Set up a GitHub Actions workflow that:
   - Updates the API documentation automatically
   - Creates a PR with API changes
3. Set up the [GitHub Actions workflow](./.github/workflows/apis.yml) in this repository that:
   - Copies the data from the source component repository `/docs/api` directory into the destination `api-reference/` directory
   - Creates a PR with all API changes
