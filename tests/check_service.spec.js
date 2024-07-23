import { test, expect } from "@playwright/test";
const { chromium } = require("playwright");
const nodemailer = require("nodemailer");

test("test", async ({}) => {
  test.setTimeout(240000);
  const browser = await chromium.launch();
  const context = await browser.newContext({
    httpCredentials: {
      username: "nesv006",
      password: "Jilv120312",
    },
  });
  const page = await context.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("https://mta.engibase.com/haproxy?stats");
  await page.waitForTimeout(3000);
  await sendmail();
  await page.waitForTimeout(3000);
  /*await page.goto('https://ha.v2.engibase.com/haproxy?stats');
  await page.waitForTimeout(3000);
  await sendmail();
  await page.waitForTimeout(3000);*/

  async function sendmail() {
    const url = await page.url();
    console.log("url:", url);
    const element = await page.$$(
      '//tr[@class="active_up"]//a[@class="lfsb"]'
    );
    const active = element.length;
    console.log("Số lượng có trên trang web:", active);
    for (const d of element) {
      const text = await d.textContent();
      console.log("Văn bản của phần tử:", text);
      //send mail
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "dimot111111@gmail.com",
          pass: "usahmoepwxiaysop",
        },
      });
      const info = await transporter.sendMail({
        from: '"From DiTest" <foo@example.com>', // sender address
        to: "hoaiditest@gmail.com", // list of receivers
        subject: `Title : ${text} active_down`, // Subject line
        text: `Content : \n
          ${text} active_down \n
          url : ${url} \n 
          ID: nesv006 \n  
          PW: Jilv120312  `,
      });
    }
  }
});
