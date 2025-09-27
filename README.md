# Midnight Documentation

This website is generated with [Docusaurus 2](https://docusaurus.io) and features [Midnight](https://midnight.network/) documentation.

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
7. Headings should be a maximum of three levels deep at maximum — `###`.
8. All ambiguous and not widely-known terms should be described in [Glossary](./docs/learn/04-glossary.mdx) section.
9. API documentation should be automatically updated in [midnight-api](./docs/develop/reference/midnight-api/).

## Details

### Installation

```
$ yarn
```

### Local Development

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

1. Within the component repository you want to create API documentation create `/docs/api` directory.
2. Setup GHA that:
   - updates the API documentation automatically
   - creates PR with API changes
3. Setup [GHA](./.github/workflows/apis.yml) in this repository that:
   - copies the data from source component repository `/docs/api` directory into destination `/docs/midnight-api/component`
   - creates a PR with all API changes
