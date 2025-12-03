import { test, expect } from "@playwright/test";
import { EngiConnect, sentmail_error } from "./z_function";

test("EngiConnect ", async ({ page }) => {
  console.log(
    `[${new Date().toLocaleString()}] Start EngiConnect timeZone VN\n`
  );
  test.setTimeout(0);
  try {
    await EngiConnect(page, expect);
  } catch (error) {
    await sentmail_error(page, `EngiConnect Daily : ${error}`, `${error}`);
  }
  console.log(`[${new Date().toLocaleString()}] End EngiConnect timeZone VN\n`);
});
