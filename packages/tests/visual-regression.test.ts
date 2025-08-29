import { test, expect } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

const urls = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "./pipelines-urls.json"), "utf-8")
).paths;

urls.forEach((urlPath: string) => {
  test(`Visual regression test for ${urlPath}`, async ({ page }) => {
    const baseUrl = process.env.BASE_URL;
    const vercelBypassToken = process.env.VERCEL_BYPASS_TOKEN;

    if (!baseUrl) {
      throw new Error("BASE_URL is not defined");
    }

    const fullUrl = new URL(urlPath, baseUrl).toString();
    console.log("Navigating to:", fullUrl);

    await page.setViewportSize({ width: 1920, height: 1080 });

    // Apply the Vercel Bypass Token if it exists
    if (vercelBypassToken) {
      await page.route("**/*", (route) => {
        const headers = {
          ...route.request().headers(),
          "x-vercel-protection-bypass": `${vercelBypassToken}`
        };
        route.continue({ headers });
      });
    }

    await page.goto(fullUrl, { waitUntil: "networkidle" });

    await page.addStyleTag({
      content: `.osano-cm-dialog { display: none !important; }
                .osano-cm-widget { display: none !important; }`
    });

    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    await page.waitForTimeout(1000);

    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });

    const screenshotFileName = `screenshot${urlPath.replace(/\//g, "-")}.png`;

    console.log("filename is " + screenshotFileName);

    await expect(page).toHaveScreenshot(screenshotFileName, {
      timeout: 60000,
      maxDiffPixelRatio: 0.1
    });
  });
});
