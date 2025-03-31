import { test, expect } from "@playwright/test";
import {
  check_class,
  login,
  login_all,
  run_fun,
  sentmail_error,
  ver2_visitor_product_025,
} from "./z_function";
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
    await sentmail_error(
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
  test.setTimeout(300000);
  const link = [
    "https://test.jpsic.co.jp/",
    "https://jpsic.co.jp/",
    "https://test.jsic-userpage.jpsic.co.jp/",
    "https://test.jsic-master2page.jpsic.co.jp/",
    "https://jsic-master2page.jpsic.co.jp/",
    "https://jsic-userpage.jpsic.co.jp/",
    "https://master2page.jpsic.g-root.com/",
    "https://userpage.jpsic.g-root.com/",
    "https://jpsic.g-root.com/register-real-store",
    "https://jpsic.g-root.com/register-online-store",
  ];
  for (let i = 0; i < link.length; i++) {
    await page.goto(link[i]);
    await page.waitForTimeout(5000);
    const response = await page.request.get(page.url());
    if (response.status() != 200) {
      await sentmail_error(
        "Jpsic Env_Test Status khác 200",
        `${link[i]} \n Jpsic Env_Test Status khác 200`
      );
    }
  }
});

test("Engibase ", async ({ page }) => {
  test.setTimeout(3600000);
  /*login*/
  await login_all(
    page,
    "https://visitor.engibase.com/",
    "checkservice2@gmail.com",
    "Duywasd123"
  );
  await run_fun(page, expect);
});
