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

test("Engibase_DaiLyLogin ", async ({ page }) => {
  test.setTimeout(300000);
  console.log(
    `[${new Date().toLocaleString()}] Start Engibase_DaiLyLogin timeZone VN\n`
  );
  async function mail(page, url, response) {
    await sentmail_error(
      page,
      `${url} に問題が発生しています ${new Date().toLocaleString("ja-JP", {
        timeZone: "Asia/Tokyo",
      })}`,
      ` 
      ${url} で問題が発生しています。
      サポートをお願い致します。 
      お客様のテスト環境はシャットダウンされています。
      Status Code: ${response}
      発生日時： ${new Date().toLocaleString("ja-JP", {
        timeZone: "Asia/Tokyo",
      })}(Asia/Tokyo)
      発生日時：${new Date().toLocaleString()} (VN)
      `,
      [
        "h-inui@learningift.com",
        "nesv006@gmail.com",
        "hayashi-y@learningift.com",
      ]
    );
  }
  async function Engibase_DaiLyLogin(page) {
    await page.goto("https://visitor.engibase.com/");
    await page.waitForTimeout(3000);
    const response1 = await page.request.get(page.url());
    const url1 = await page.url();
    if (response1.status() != 200) {
      await mail(page, url1, response1.status());
    }
    await login_all(
      page,
      "https://visitor.engibase.com/",
      "duy@g-root.com",
      "Duywasd123"
    );
    await page.waitForTimeout(3000);
    const response = await page.request.get(page.url());
    const url = await page.url();
    if (response.status() != 200) {
      await mail(page, url, response.status());
    }
  }
  try {
    await Engibase_DaiLyLogin(page);
  } catch (error) {
    await sentmail_error(page, `Engibase_DaiLyLogin ${error}`, `${error}`);
  }
  console.log(
    `[${new Date().toLocaleString()}] End Engibase_DaiLyLogin timeZone VN\n`
  );
});
test("Reset_mail_error", async ({ page }) => {
  console.log(
    `[${new Date().toLocaleString()}] Start Reset_mail_error timeZone VN\n`
  );
  test.setTimeout(3600000);
  try {
    /*login*/
    await login_all(
      page,
      "https://manager.engibase.com/mail-account",
      "hoangoisan@gmail.com",
      "Duywasd123"
    );
    await page.locator("#breadcrumb_elements a").nth(0).click();
    await page.waitForTimeout(5000);
  } catch (error) {
    await sentmail_error(page, `Reset_mail_error Daily : ${error}`, `${error}`);
  }
  console.log(
    `[${new Date().toLocaleString()}] End Reset_mail_error timeZone VN\n`
  );
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
    await sentmail_error(page, `Check_lastFetch Daily${error}`, `${error}`);
  }
  console.log(
    `[${new Date().toLocaleString()}] End Check_lastFetch timeZone VN\n`
  );
});
