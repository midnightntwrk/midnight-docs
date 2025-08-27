
# Automated Testing

## ![lighthouse](https://github.com/user-attachments/assets/1539ed67-4c0b-4292-b198-c263cf22cd24) Lighthouse Audit

The pipeline for Lighthouse report generation is automatically generated via the [lighthouse pipeline](../../.github/workflows/light-house-ci.yml).

To configure the URLs on which it runs (on this branch) please update the [pipelines-urls.json file](pipelines-urls.json). Results and reports will be displayed in an automated comment, attached to the PR. The will also be available for download as an artifact in the Actions section.

For repos with a password protection on preview deployments - a bypass token has been added via the `lighthouserc.js` config file - it needs to be generated via vercel and added as a secret to the repo for the tests to run successfully

All files associated with this workflow can be found and should reside under `packages/tests` in your project

## ![playwright](https://github.com/user-attachments/assets/26a8c7e3-4b28-4c2e-9438-ead22c8c1f31) Playwright Snaphots

### Docker

To set up the initial batch of Playwright Snapshots you will need to implement several files. To ensure consistency between different environments the snaphot generation script runs through docker. Thus a dockerfile will be necessary.

Before running the initial docker build, ensure docker is running - either via the desktop app or via the terminal (Colima/manually etc.)

If the versioning of the playwright instance needs updating, please update it via the `dockerfile` first line
```FROM mcr.microsoft.com/playwright:v{version-number}-focal```
You will get a prompt to do this when you try and run the playwright scripts - simply update the version manually and rebuild the docker instance - then you can re-run the scripts

Additionally, ensure that line 7 of the `dockerfile` i.e `RUN {yarn/npm/pnpm} install` contains the correct package manager used in the project to avoid any issues further down the line.

The `dockerfile`, `.dockerignore` and `playwright-screenshot-mode.sh` file (which contains command configuration for local runs of the script) can be found and should reside at the root of the project

### Playwright script

Before running the script - ensure that you have the necessary dev dependency - i.e `@playwright/test"` listed in package.json and installed

Next you will need to create a test directory, ideally located at `.../packages/tests`. In this directory you should create a file, named `visual-regression.test.ts` (the name should be specifically this for the other steps to run properly).

This script will go over the endpoints in [pipelines-urls.json file](pipelines-urls.json) and generate/compare snapshots for each URL

On initial local run, this script will create a directory `packages/tests/visual-regression.test.ts-snapshots` which will contain all of the new snapshots which will the need to be committed to the repo for future reference/comparison testing.

### Generating initial snapshots

With all of the above in place, you can now generate the first batch of snapshots - first you will have to run the `playwright:build` command (or `docker build -t playwright-tests .` if you do not have the script in your package.json) - This will build your docker instance and set up the appropriate environment.

Next you should run `BASE_URL=={preview-deploy-url OR site-url} yarn playwright-snapshots` or `BASE_URL={preview-deploy-url OR site-url} pnpm run playwright-snapshots` depending on package manager (or `docker run -e BASE_URL=${preview-deploy-url OR site-url} -v $(pwd):/app playwright-tests` if you do not have the script in your package.json). This will generate the initial batch of snapshots which can then be committed to the repository.

### Comparing snapshots

#### Locally

To compare snapshots locally simply run `BASE_URL={preview-deploy-url OR site-url} yarn playwright-snapshots` or `BASE_URL={preview-deploy-url OR site-url} pnpm run playwright-snapshots` depending on package manager (or `docker run -e BASE_URL=${preview-deploy-url OR site-url} -v $(pwd):/app playwright-tests` if you do not have the script in your package.json) - With snapshots present - this will generate snapshots for the given preview deploy url compare them to the existing ones in the repo - results and reports will then be stored locally in `test-results` directory.

When running locally - ensure you have updated your `.env` file with the appropriate `VERCEL_BYPASS_TOKEN` if preview deploy protection is enabled on the project's vercel deployment

#### Pipeline

Once you have made the appropriate changes to the code - simply commit your code and make a PR - the [Playwright pipeline](../../.github/workflows/playwright-visual-regression.yml) will automatically generate screenshots for the latest preview deploy and compare them to the ones in the repo. Results will be attached to the PR as a comment - reports will be available for download from there (if any differences are detected).

For repos with a password protection on preview deployments - a bypass token has been added to the workflow - it needs to be generated via vercel and added as a secret to the repo for the tests to run successfully

### Updating snapshots

If you wish to update the batch of snapshots to keep them up to date with the latest changes - you should run `BASE_URL={preview-deploy-url OR site-url} yarn playwright-snapshots:update` or `BASE_URL={preview-deploy-url OR site-url} pnpm run playwright-snapshots:update` depending on package manager (or `docker run -e BASE_URL=${preview-deploy-url OR site-url} -v $(pwd):/app playwright-tests --update` if you do not have the script in your package.json). This will generate a new batch of snapshots which will then be committed to the repo along with your PR changes.

When running locally - ensure you have updated your `.env` file with the appropriate `VERCEL_BYPASS_TOKEN` if preview deploy protection is enabled on the project's vercel deployment

***Please ensure you update snapshots regularly before merging to the main/master production branch to ensure all snapshots are up to date***

## ![slack](https://github.com/user-attachments/assets/d7ecec42-d7de-4597-8be1-378a18f740e8) Slack notifications

As part of this automated regression testing - both pipelines have been configured to send automated messages to a private slack channel for better visibility to the webdev team. In order for this to work a webhook has been added - linking both of the workflows to the correct channel - this is a secret variable specified as - `SLACK_WEBHOOK_URL` in both workflows - if not already present, you'll need to manually add a secret variable of the same name to your github repo - for its exact value or its addition please contact a member of the webdev team
