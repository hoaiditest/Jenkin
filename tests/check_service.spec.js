import { test, expect } from "@playwright/test";
import { check_class, sentmail } from "./z_function";
const { chromium } = require("playwright");

test("Check vps", async ({}) => {
  test.setTimeout(240000);
  const browser = await chromium.launch();
  const context = await browser.newContext({
    httpCredentials: {
      username: "nesv006",
      password: "Jilv120312",
    },
  });
  const page = await context.newPage();
  await page.goto("https://mta.engibase.com/haproxy?stats");
  const url = await page.url();
  const di = await check_class(page);
  if (di.length > 0) {
    await sentmail(
      "active_down",
      `active_down : \n
      ${di} \n
      url : ${url}\n
      ID: nesv006 \n
      PW: Jilv120312 \n`
    );
  }
});
test("Jpsic ", async ({ page }) => {
  await page.goto("https://test.jpsic.co.jp/");
  await page.waitForTimeout(5000);
  const response = await page.request.get(page.url());
  if (response.status() == 200) {
    await sentmail(
      "Jpsic Env : Test Status khác 200",
      "https://test.jpsic.co.jp/ Status khác 200"
    );
  }
});
