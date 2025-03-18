const nodemailer = require("nodemailer");
async function check_class(page) {
  await page.waitForTimeout(3000);
  const element = await page.$$(".active_down .lfsb");
  const vps = [];
  for (const d of element) {
    const text = await d.textContent();
    vps.push(text + "\n");
  }
  return vps;
}
async function login(page, config) {
  const url = config.url;
  const email = config.email;
  const pw = config.pw;

  await page.goto(url);
  await page.locator("#email").fill(email);
  await page.locator("#password").fill(pw);
  await page.locator("#btn-login").click();
  await page.waitForTimeout(2000);
}
const ver2_visitor_product_checkService = {
  url: "https://visitor.engibase.com/",
  email: "checkservice@gmail.com",
  pw: "Duywasd123",
};
async function run_fun(page, expect) {
  try {
    await open_browser("didimimi1999dimi");
  } catch (error) {
    console.log(error);
    await sentmail_error(error, error);
  }
}
const { chromium, firefox, webkit } = require("playwright");
async function open_browser(mail) {
  const browser = await chromium.launch({
    headless: false,
    args: ["--disable-blink-features=AutomationControlled"],
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://mail.google.com/mail/u/0/#inbox");
  await page
    .locator("//input[@type='email']")
    .fill(`${mail}@gmail.com`, { timeout: 15000 });
  await page.keyboard.press("Enter");
  await page
    .locator("//input[@type='password']")
    .fill("Duywasd123", { timeout: 30000 });
  await page.keyboard.press("Enter");
  await page.waitForTimeout(10000);
  await page.goto("https://mail.google.com/mail/u/0/#inbox");
  await page.waitForTimeout(3000);
  console.log("done");
  return page;
}
async function click_menu(page) {
  // await login_all(
  //   page,
  //   "https://visitor.test.engibase.com/",
  //   "hoaiditest@gmail.com",
  //   "Duywasd123"
  // );
  await page.waitForTimeout(3000);
  const menu = await page.locator(".sidebar-content a").all();
  const menu_customer_InnerTexts = await page
    .locator(".sidebar-content a")
    .allInnerTexts();
  await console.log(menu.length);
  for (let a = 0; a < menu.length; a++) {
    // await console.log(menu[a]);
    if (menu_customer_InnerTexts[a] != "ログアウト") {
      const url1 = await page.url();
      await page.waitForTimeout(1000);
      await menu[a].click({ timeout: 240000 });
      console.log(menu[a]);
      await page.waitForTimeout(1000);
      const url2 = await page.url();
      await check_status(page, url2);
      await check_noty_error(page, url2);
      /*if (url1 != url2) {
        await click_breadcrumb(page);
      }*/
    }
  }
}
async function check_status(page, url) {
  await page.waitForTimeout(1000);
  const response = await page.request.get(page.url({ timeout: 210000 }));
  if (response.status() != 200) {
    console.log(response.status() + url);
    await sentmail_errorJP(url, `Status Code: ${response.status()}`);
    for (;;) {
      await page.reload();
      await page.waitForTimeout(10000);
      const response2 = await page.request.get(page.url());
      if (response2.status() != 200) {
        console.log(response2.status() + url);
        await sentmail_errorJP(url, `Status Code: ${response2.status()}`);
        // await page.goBack();
        console.log("Check status again");
        await page.waitForTimeout(600000);
      } else {
        break;
      }
    }
  }
}
async function check_noty_error(page, url) {
  await page.waitForTimeout(1000);
  /*Test
  await page.goto("https://visitor.engibase.com/personnel-group");
  await page.locator(".btn-action-breadcrumb").nth(2).click();*/
  const noty = await page.locator(".noty_body").nth(0);
  const check_noty = await noty.isVisible();
  if (check_noty) {
    const text = await noty.textContent();
    console.log("noty_error " + url + "  " + text);
    await sentmail_errorJP(url, `Alert Error : ${text} `);
    for (;;) {
      await page.reload();
      await page.waitForTimeout(10000);
      const check_noty2 = await noty.isVisible();
      if (check_noty2) {
        await console.log("noty_error " + url + "  " + text);
        await sentmail_errorJP(url, `Alert Error : ${text} `);
        console.log("Check Notification again");
        await page.waitForTimeout(600000);
      } else {
        break;
      }
    }
  }
}
async function sentmail_errorJP(url, content) {
  await sentmail_error(
    `【緊急】${url} に問題が発生しています ${new Date().toLocaleString(
      "ja-JP",
      { timeZone: "Asia/Tokyo" }
    )}`,
    ` 
${url} で問題が発生しています。
${content}
担当者は早急に対応してください。
発生日時： ${new Date().toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
    })}(Asia/Tokyo)
発生日時：${new Date().toLocaleString()} (VN)
`
  );
}
async function sentmail_error(title, content) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "dimot111111@gmail.com",
      pass: "drvm wsqm bjgk ispi ",
    },
  });
  await transporter.sendMail({
    to: "hoaiditest@gmail.com",
    subject: `${title}`,
    text: `${content}`,
  });
  console.log("sentmail_error : Done");
}
module.exports = {
  sentmail_error,
  check_class,
  login,
  ver2_visitor_product_checkService,
  run_fun,
};
