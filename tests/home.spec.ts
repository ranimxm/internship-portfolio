import { test, expect } from "@playwright/test";

test("home: go-top-down", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("text=Hi, I'm Ranim,")).toBeVisible();

  await page.click(".go-down-top-container");
  await expect(page.locator("text=Ranim Mohammad")).toBeVisible();
});

test("home: click on project-item", async ({ page }) => {
  const projectItems = page.locator(".project-item");
  const projectItemCount = await projectItems.count();
  await page.goto("/");

  for (let i = 0; i < projectItemCount; i++) {
    await projectItems.nth(i).click();
    await expect(page.locator(".work-container")).toBeVisible();
    await page.goBack();
  }
});
