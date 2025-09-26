import { test, expect } from "@playwright/test";
import {
  check_class,
  Check_lastFetch,
  click_menu,
  login,
  login_all,
  run_fun,
  sentmail_error,
  ver2_visitor_product_025,
} from "./z_function";
const { chromium } = require("playwright");

test("Check_VPS", async ({}) => {
  test.setTimeout(240000);
  console.log(`[${new Date().toLocaleString()}] Start Check_VPS timeZone VN\n`);
  try {
    let link = [
      "https://mta.engibase.com/haproxy?stats",
      "https://pcw.v1.engibase.com/haproxy?stats",
    ];
    for (let i = 0; i < link.length; i++) {
      const browser = await chromium.launch();
      const context = await browser.newContext({
        httpCredentials: {
          username: "nesv006",
          password: "Jilv120312",
        },
      });
      const page = await context.newPage();
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto(link[i]);
      const url = await page.url();
      const di = await check_class(page);
      if (di.length > 0) {
        await sentmail_error(
          page,
          `active_down  : ${new Date().toLocaleString()}`,
          `active_down  : ${new Date().toLocaleString()} : \n
      ${di} \n
      url : ${url}\n
      ID: nesv006 \n
      PW: Jilv120312 \n`,
          ["nesv006@gmail.com"]
        );
      }
      await browser.close();
    }
  } catch (error) {
    await sentmail_error(page, `${error}`, `${error}`);
  }
  console.log(`[${new Date().toLocaleString()}] End Check_VPS timeZone VN\n`);
});
test("Jpsic ", async ({ page }) => {
  test.setTimeout(300000);
  console.log(
    `[${new Date().toLocaleString()}] Start Check_Jpsic timeZone VN\n`
  );
  const link = [
    "https://test.jpsic.co.jp/",
    // "https://test.jsic-userpage.jpsic.co.jp/",
    // "https://test.jsic-master2page.jpsic.co.jp/",
    // "https://jpsic.co.jp/",
    // "https://jsic-master2page.jpsic.co.jp/",
    // "https://jsic-userpage.jpsic.co.jp/",
    // "https://master2page.jpsic.g-root.com/",
    // "https://userpage.jpsic.g-root.com/",
    // "https://jpsic.g-root.com/register-real-store",
    // "https://jpsic.g-root.com/register-online-store",
  ];
  for (let i = 0; i < link.length; i++) {
    await page.goto(link[i]);
    await page.waitForTimeout(5000);
    const response = await page.request.get(page.url());
    if (response.status() != 200) {
      await sentmail_error(
        page,
        `${link[i]} に問題が発生しています ${new Date().toLocaleString(
          "ja-JP",
          { timeZone: "Asia/Tokyo" }
        )}`,
        ` 
${link[i]} で問題が発生しています。
サポートをお願い致します。 
お客様のテスト環境はシャットダウンされています。
Status Code: ${response.status()}
発生日時： ${new Date().toLocaleString("ja-JP", {
          timeZone: "Asia/Tokyo",
        })}(Asia/Tokyo)
発生日時：${new Date().toLocaleString()} (VN)
`,
        ["h-inui@learningift.com", "nesv006@gmail.com"]
      );
    }
  }
  console.log(`[${new Date().toLocaleString()}] End Check_Jpsic timeZone VN\n`);
});

test("Engibase ", async ({ page }) => {
  test.setTimeout(3600000);
  async function Check_Engibase(page) {
    await login_all(
      page,
      "https://visitor.engibase.com/",
      "checkservice2@gmail.com",
      "Duywasd123"
    );
    await click_menu(page, expect);
  }
  console.log(
    `[${new Date().toLocaleString()}] Start Check_Engibase timeZone VN\n`
  );
  try {
    await Check_Engibase(page);
  } catch (error) {
    await sentmail_error(page, `Daily Click Menu Jenkin ${error}`, `${error}`);
  }
  console.log(
    `[${new Date().toLocaleString()}] End Check_Engibase timeZone VN\n`
  );
});

test("Check_lastFetch ", async ({ page }) => {
  console.log(
    `[${new Date().toLocaleString()}] Start Check_lastFetch timeZone VN\n`
  );
  test.setTimeout(3600000);
  try {
    /*login*/
    await login_all(
      page,
      "https://manager.test.engibase.com/mail-account",
      "checklastfetch@gmail.com",
      "Duywasd123"
    );
    await Check_lastFetch(page, expect);
  } catch (error) {
    await sentmail_error(page, `${error}`, `${error}`);
  }
  console.log(
    `[${new Date().toLocaleString()}] End Check_lastFetch timeZone VN\n`
  );
});
