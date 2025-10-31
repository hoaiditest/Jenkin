import { test, expect } from "@playwright/test";
import { sentmail_error } from "./z_function";

test("Jpsic ", async ({ page }) => {
  test.setTimeout(300000);
  console.log(
    `[${new Date().toLocaleString()}] Start Check_Jpsic timeZone VN\n`
  );
  const link = [
    "https://jpsic.g-root.com/",
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
