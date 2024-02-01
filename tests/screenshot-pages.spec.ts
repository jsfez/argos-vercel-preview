import { test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

const baseUrl = "http://localhost:3000";
const pages = [{ name: "homepage", path: "/" }];

test("screenshot pages", async ({ page }, workerInfo) => {
  for (const { name, path } of pages) {
    const browserName = workerInfo.project.name;
    await page.goto(`${baseUrl}${path}`);
    await argosScreenshot(page, `${name}-${browserName}`);
  }
});
