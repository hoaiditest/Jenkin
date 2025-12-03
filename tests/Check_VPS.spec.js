import { test, expect, chromium } from "@playwright/test";
import { check_class, sentmail_error } from "./z_function";

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
    await sentmail_error(
      null,
      `Check_VPS Daily: ${error} ${new Date().toLocaleString()}`,
      `Check_VPS Daily: ${error}`
    );
  }
  console.log(`[${new Date().toLocaleString()}] End Check_VPS timeZone VN\n`);
});
