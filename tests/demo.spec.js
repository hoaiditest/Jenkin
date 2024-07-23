// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("https://customer.engibase.com/");
  await page.locator("#email").fill("nesv025@learningift.com");
  await page.locator("#password").fill("Duywasd123");
  await page.locator("#btn-login").click();
  await page.waitForTimeout(2000);
  //ditest
});
