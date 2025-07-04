const ExcelJS = require("exceljs");
const fs = require("fs");
const path = require("path");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);
const Product_manager = {
  url: "https://manager.engibase.com/",
  email: "nesv025@gmail.com",
  pw: "Duywasd123",
};
const Test_manager = {
  url: "https://manager.test.engibase.com/",
  email: "nesv025@gmail.com",
  pw: "Duywasd123",
};

const company_test_025 = {
  url: "https://company.test.engibase.com/",
  email: "nesv025@gmail.com",
  pw: "Duywasd123",
};
const ver2_company_product_025 = {
  url: "https://company.engibase.com/",
  email: "nesv025@gmail.com",
  pw: "Duywasd123",
};
const ver2_visitor_test_hoaiditest = {
  url: "https://visitor.test.engibase.com/",
  email: "hoaiditest@learningift.com",
  pw: "Duywasd123",
};
const ver2_visitor_test_dimot111111 = {
  url: "https://visitor.test.engibase.com/",
  email: "dimot111111@learningift.com",
  pw: "Duywasd123",
};
const ver2_visitor_test_025 = {
  url: "https://visitor.test.engibase.com/",
  email: "nesv025@learningift.com",
  pw: "Duywasd123",
};
const ver2_visitor_product_hoaiditest = {
  url: "https://visitor.engibase.com/",
  email: "hoaiditest@learningift.com",
  pw: "Duywasd123",
};
const ver2_visitor_product_dimot111111 = {
  url: "https://visitor.engibase.com/",
  email: "dimot111111@learningift.com",
  pw: "Duywasd123",
};
const ver2_visitor_product_025 = {
  url: "https://visitor.engibase.com/",
  email: "nesv025@learningift.com",
  pw: "Duywasd123",
};
const ver2_visitor_check_service = {
  url: "https://visitor.engibase.com/",
  email: "checkservice@gmail.com",
  pw: "Duywasd123",
};
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString();
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
async function login_all(page, url, email, pw) {
  await page.goto(url);
  await page.locator("#email").fill(email);
  await page.locator("#password").fill(pw);
  await page.locator("#btn-login").click();
  await page.waitForTimeout(2000);
}
async function login_eng_dev(page, email) {
  await page.goto("https://customer.eng-dev.g-root.com/login");
  await page.locator("#email").fill(email);
  await page.locator("#password").fill("abc123456");
  await page.locator("#btn-login").click();
  await page.waitForTimeout(2000);
}
const url_ver2_visitor_product = "https://visitor.engibase.com/";
const url_ver2_visitor_test = "https://visitor.test.engibase.com/";
const url_ver2_company_product = "https://company.engibase.com/";
const url_ver2_company_test = "https://company.test.engibase.com/";
const url_test = "https://test.engibase.com/customer/";
const url_product = "https://customer.engibase.com/";
const url_visitor_test = "https://test.engibase.com/visitor/";
const url_staging = "https://staging.engibase.com/customer/";
const url_eng_dev = "https://customer.eng-dev.g-root.com/";

async function goto(page, url) {
  try {
    await page.goto(url_ver2_visitor_product + url);
    await page.locator(".sidebar-section").first().click({ timeout: 3000 });
  } catch (error) {
    try {
      await page.goto(url_ver2_visitor_test + url);
      await page.locator(".sidebar-section").first().click({ timeout: 3000 });
    } catch (error) {
      try {
        await page.goto(url_ver2_company_product + url);
        await page.locator(".sidebar-section").first().click({ timeout: 3000 });
      } catch (error) {
        try {
          await page.goto(url_ver2_company_test + url);
          await page
            .locator(".sidebar-section")
            .first()
            .click({ timeout: 3000 });
        } catch (error) {
          try {
            await page.goto(url_test + url);
            await page
              .locator(".sidebar-section")
              .first()
              .click({ timeout: 3000 });
          } catch (error) {
            try {
              await page.goto(url_product + url);
              await page
                .locator(".sidebar-section")
                .first()
                .click({ timeout: 3000 });
            } catch (error) {
              try {
                await page.goto(url_visitor_test + url);
                await page
                  .locator(".sidebar-section")
                  .first()
                  .click({ timeout: 3000 });
              } catch (error) {
                try {
                  await page.goto(url_staging + url);
                  await page
                    .locator(".sidebar-section")
                    .first()
                    .click({ timeout: 3000 });
                } catch (error) {
                  await page.goto(url_eng_dev + url);
                  await page
                    .locator(".sidebar-section")
                    .first()
                    .click({ timeout: 3000 });
                }
              }
            }
          }
        }
      }
    }
  }
}
async function add_bp(page, expect) {
  const gmailAddresses = [
    RandomName(),
    // "hoangoisan",
    // "hoangoisan2",
    // "hoaiditest",
    // "hoaiditest1",
    // "hoaiditest2",
    // "trungsantrungsan",
    // "di1999test",
    // "dibar333333@gmail.com",
    // "dibon444444@gmail.com",
    // "dinam5555555555@gmail.com",
    // "disau666666@gmail.com",
    // "dibay4536@gmail.com",
    // "tam563581@gmail.com",
    // "wasdhihihaha@gmail.com",
    // "mimot1111111@gmail.com"
  ];
  await page.waitForTimeout(1000);
  for (let i = 0; i < gmailAddresses.length; i++) {
    const address = gmailAddresses[i];
    await goto(page, "bp");
    const a = await get_number(page);
    console.log(`Bp trước ${a.numbers[1]}`);
    try {
      await page.locator(".ph-plus-circle").nth(0).click({ timeout: 5000 });
    } catch (error) {
      await page.locator(".btn-add-bp").nth(0).click();
    }
    await textbox(page);
    await select(page, 2);
    await page.locator("#email").fill(`${address}@gmail.com`);
    await page.locator("#name").fill(`${address}`);
    await page.locator("#sur_name").fill(`${address}`);
    await page.locator("#first_name").fill(`${address}`);
    await page.locator("#first_meet_day").clear();
    await page.locator("#email").click();
    await page.locator("#first_meet_day").click();
    await page.locator(".focused").click();
    await page.waitForTimeout(3000);
    await page.locator("#zipcode").fill("1200000");
    // await page.locator("#zipcode").press("Enter");
    await page.waitForTimeout(1000);
    await page.locator('//button[@type="submit"]').click();
    await page.waitForTimeout(5000);
    await console.log(`đã hoàn thành add_bp`);
    await goto(page, "bp");
    const b = await get_number(page);
    console.log(`Bp sau ${b.numbers[1]}`);
    expect(a.numbers[1] + 1).toBe(b.numbers[1]);
  }
}

async function add_personnel_self(page) {
  await goto(page, "personnel-self/add");
  await page.waitForTimeout(3000);
  const inputElements = await page.$$("#adminForm input,textarea");
  await console.log(inputElements.length);
  for (let i = 0; i < inputElements.length; i++) {
    try {
      await inputElements[i].click({ timeout: 1000 });
      await page.waitForTimeout(1000);
      await inputElements[i].fill(RandomString(10), { timeout: 1000 });
    } catch (error) {}
  }
  await page
    .locator("//input[@name='email']")
    .fill(`${RandomString(10)}@gmail.com`);
  await select(page, 1);
  await page.locator("#age").fill(RandomNumber(2));
  await page.locator("//input[@name='phone']").fill(RandomNumber(10));
  const combobox = await page.locator('//span[@role="combobox"]').all();
  for (let a = 0; a < combobox.length; a++) {
    try {
      await combobox[a].click({ timeout: 3000 });
      await page.waitForTimeout(1000);
      await page.keyboard.press("ArrowDown");
      await page.waitForTimeout(1000);
      await page.keyboard.press("ArrowDown");
      await page.waitForTimeout(1000);
      await page.keyboard.press("Enter");
    } catch (error) {}
  }
  await page.locator('//span[@role="combobox"]').nth(3).click();
  await page.waitForTimeout(1000);
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(1000);
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(1000);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(1000);
  /*const fileChooserPromise = page.waitForEvent("filechooser");
  await page.locator(".btn-file").click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles("file/" + RandomFile());*/
  await page.locator("#zipcode").fill("1200000");
  await page.locator("#zipcode").press("Enter");
  await page.waitForTimeout(1000);
  await page.locator("#min_salary").fill(RandomNumber(2));
  await page.locator("#max_salary").fill(RandomNumber(3));
  await page.locator("#preferred_project").fill(RandomNumber(2));
  try {
    await page.locator("#joint_at").fill(formattedDate, { timeout: 5000 });
  } catch (error) {}
  await page.locator("#skill_point").selectOption({ index: 40 });
  await page.waitForTimeout(1000);
  try {
    await page.locator("#sale_email").fill(RandomNumber(10) + "@gmail.com", {
      timeout: 5000,
    });
  } catch (error) {}
  await page.locator("#btn_update").click();
  await console.log("add_personnel_self thành công và đợi 10 giây ");
  await page.waitForTimeout(10000);
}
async function ver2_add_personnel_self(page) {
  await goto(page, "personnel-self/add");
  await page.locator("#ac_first_name").fill(RandomName());
  await page.locator("#ac_last_name").fill(RandomName());
  await page.locator("#first_name").fill(RandomName());
  await page.locator("#last_name").fill(RandomName());
  await page.locator("#phone").fill(RandomNumber(10));
  await page
    .locator("#email")
    .fill("email" + RandomName() + RandomNumber(10) + "@gmail.com");
  await page
    .locator("#preferred_project")
    .fill("Hope Case " + RandomName() + RandomNumber(3));
  await page.locator("#note").fill("Note " + RandomName() + RandomNumber(3));
  await page
    .locator('input[name="tags"]')
    .first()
    .fill("TagDi " + RandomName() + RandomNumber(3));
  await page.waitForTimeout(1000);
  await page.locator('input[name="tags"]').first().press("Enter");
  await select(page, 2);
  await page
    .locator("#gender")
    .selectOption({ index: Math.floor(Math.random() * 3) + 1 });
  await page
    .locator("#min_salary")
    .fill(`${Math.floor(Math.random() * 4) + 1}0000`);
  await page
    .locator("#max_salary")
    .fill(`${Math.floor(Math.random() * (10 - 5 + 1)) + 5}0000`);
  await page
    .locator("#birth_year")
    .selectOption(`${Math.floor(Math.random() * (2006 - 1984 + 1)) + 1984}`);
  await page
    .locator("#zipcode")
    .fill(`1${Math.floor(Math.random() * 10) + 1}00000`);
  await page.waitForTimeout(1000);
  await page.locator("#zipcode").press("0");
  await page.waitForTimeout(1000);
  const prefecture = await page.locator("#prefecture>option").count();
  await page.locator("#prefecture").selectOption({
    index: Math.floor(Math.random() * (prefecture - 1)) + 1,
  });
  await page.waitForTimeout(1000);
  const route = await page.locator("#route>option").count();
  await page
    .locator("#route")
    .selectOption({ index: Math.floor(Math.random() * (route - 1)) + 1 });
  await page.waitForTimeout(1000);
  const station = await page.locator("#station>option").count();
  await page
    .locator("#station")
    .selectOption({ index: Math.floor(Math.random() * (station - 1)) + 1 });
  await page.waitForTimeout(1000);
  await page.locator(".btn-select-skills").click();
  await page.waitForTimeout(5000);
  for (let i = 0; i < 10; i++) {
    try {
      await page
        .locator("#tab-言語・サービス input")
        .nth(Math.floor(Math.random() * 244))
        .click({ timeout: 5000 });
    } catch (error) {
      console.log(
        "Thay đổi ID từ #tab-言語・サービス input thành #tab-言語 input"
      );
      await page
        .locator("#tab-言語 input")
        .nth(Math.floor(Math.random() * 244))
        .click();
    }
    await page.waitForTimeout(1000);
  }
  await page.locator(".choose-skills").click();
  await page.waitForTimeout(1000);
  const skill_exp = await page.locator(".skill_required").count();
  for (let i = 0; i < skill_exp; i++) {
    await page
      .locator(".skill_required")
      .nth(i)
      .selectOption({ index: Math.floor(Math.random() * 10) + 1 });
  }
  await page
    .locator("#cpt_id")
    .selectOption({ index: Math.floor(Math.random() * 4) });
  const nation = await page.locator("select[name='nation']>option").count();
  await page
    .locator("select[name='nation']")
    .selectOption({ index: Math.floor(Math.random() * nation) });
  await page.waitForTimeout(1000);
  const intv_start = await page.locator("#intv_start>option").count();
  await page
    .locator("#intv_start")
    .selectOption({ index: Math.floor(Math.random() * intv_start) });
  await page.waitForTimeout(1000);
  for (let i = 0; i < 10; i++) {
    await page.locator("#position-phase-search").click();
    await page.waitForTimeout(1000);
    await page
      .locator(".tt-selectable")
      .nth(Math.floor(Math.random() * 50))
      .click();
  }
  await page.waitForTimeout(1000);
  const position = await page.locator(".position_phase_required").count();
  for (let i = 0; i < position; i++) {
    await page
      .locator(".position_phase_required")
      .nth(i)
      .selectOption({ index: Math.floor(Math.random() * 11) + 1 });
  }
  await page.locator("#status_publish").click();
  await page.locator("#btn_update").click();
  await page.waitForTimeout(5000);
}
async function add_skill_sheet(page) {
  /*console.log(Random(array["languages"]));
  console.log(Random(array["tools"]));
  console.log(Random(array["skills"]));
  console.log(Random(array["OS"]));
  console.log(Random(array["DB"]));
  console.log(Random(array["network"]));*/
  await goto(page, "personnel-self");
  await page.locator(".ph-plus-circle").nth(0).click();
  const page1Promise = page.waitForEvent("popup");
  const page1 = await page1Promise;
  for (let i = 0; i < 2; i++) {
    await page1.locator(".ph-arrow-down").nth(0).click();
  }
  await page1.waitForTimeout(3000);
  const inputElements = await page1.$$("input, textarea");
  for (let i = 0; i < inputElements.length; i++) {
    try {
      await inputElements[i].click({ timeout: 1000 });
      await page1.waitForTimeout(2000);
      await inputElements[i].fill(Random(array["skills"]), { timeout: 1000 });
      await page1.keyboard.press("Enter");
    } catch (error) {}
  }
  const select = await page1.$$("select");
  for (let i = 0; i < select.length; i++) {
    try {
      const secondSelectOptions = await page1
        .locator("select")
        .nth(i)
        .locator("option")
        .count();
      await select[i].selectOption(
        { index: Math.floor(Math.random() * (secondSelectOptions - 3)) + 3 },
        { timeout: 1000 }
      );
      await page1.waitForTimeout(500);
    } catch (error) {}
  }
  await page1.locator(".btn_save").click();
  await page1.waitForTimeout(10000);
  await page1.close();
  await console.log("add_skill_sheet thành công và đợi 10 giây ");
}
async function add_group(page, name) {
  await page.locator("#name").fill(name);
  /*await page.locator("#checkall").click();
  await page.locator(".btn-add-all").click();*/
  await page.waitForTimeout(3000);
  const row = await page.$$(".btn-add-row");
  for (let i = 0; i < row.length; i++) {
    await page.waitForTimeout(3000);
    await row[i].click();
  }
  await page.waitForTimeout(3000);
  await page.locator("#btn_save").click();
  await page.waitForTimeout(5000);
}
async function search_bp(page) {
  const bp = [
    "trungsantrungsan",
    "di1999test",
    "hoaiditest",
    "nesv025",
    "hoangoisan@gmail.com",
    "hoangoisan2@gmail.com",
  ];
  for (let i = 0; i < bp.length; i++) {
    try {
      await page.locator(".input-filter").fill(bp[i], { timeout: 5000 });
    } catch (error) {
      await page.locator(".input-filter").nth(1).fill(bp[i], { timeout: 5000 });
    }
    await page.waitForTimeout(3000);
    await page.locator("#btn-filter").click();
    await page.waitForTimeout(1000);
    await page.locator("#btn-filter").click();
    await page.waitForTimeout(3000);
    await page.locator("#btn_search").click();
    await page.waitForTimeout(3000);
    await page.locator("#checkall").click();
    await page.waitForTimeout(3000);
    await page.locator(".btn-add-all").click();
    await page.waitForTimeout(3000);
  }
}
async function direct_mail(page, expect) {
  await goto(page, "direct-mail");
  const a = await get_number(page);
  console.log(`Trước ${a.numbers[0]}`);
  await goto(page, "direct-mail/add");
  await page.locator("#name").fill(formattedDate + " direct_mail_2");
  await search_bp(page);
  await page.locator("#btn_save").click();
  await goto(page, "direct-mail");
  const b = await get_number(page);
  console.log(`Sau ${b.numbers[0]}`);
  expect(a.numbers[0] + 1).toBe(b.numbers[0]);
}
async function direct_personnel(page) {
  await goto(page, "personnel-group/add");
  await page.locator('//label[@for="14_day"]').click();
  await page.locator("#btn_search").click();
  await page.waitForTimeout(5000);
  await add_group(page, `${formattedDate} direct_personnel`);
}

async function direct_personnel_self(page) {
  await goto(page, "personnel-group/add-self");
  await page.locator("#memo").fill("[テスト][Checking service]Japan");
  await add_group(page, `${formattedDate} direct_personnel_self`);
}

async function sent(page, template) {
  await groupPer_Pro(page);
  await page.locator("#select_temp").selectOption(template);
  await template_selectOption(page);
  await page.locator("#subject_content").press(RandomNumber(1));
  await FileUpload(page);
  let web_info_per;
  try {
    web_info_per = await page
      .locator("#personnel_info_1")
      .textContent({ timeout: 5000 });
  } catch (error) {
    web_info_per = await page.locator("#project_info_1").textContent();
  }
  const file = await page.locator("#box-attachment span:nth-child(1)").count();
  try {
    await page.locator(".btn_confirm").nth(0).click({ timeout: 240000 });
  } catch (error) {
    await page.locator(".btn_confirm").nth(0).click();
  }
  await page.waitForTimeout(10000);
  try {
    await page.locator(".btn_confirm").nth(0).click({ timeout: 5000 });
  } catch (error) {}
  let mail_sent = [];
  await page.waitForTimeout(3000);
  const a = page.locator("tr>.company-mail");
  for (let i = 0; i < (await a.count()); i++) {
    const b = await a.nth(i).textContent();
    mail_sent.push(b);
  }
  await page.waitForTimeout(5000);
  await page.locator("#send").click();
  await page.waitForTimeout(5000);
  await page.locator(".swal-button--confirm").click();
  await page.waitForTimeout(5000);
  await page.locator(".swal-button--confirm").click();
  await page.waitForTimeout(10000);
  return { web_info_per, file, mail_sent };
}
async function gr_mail(page) {
  await page.waitForTimeout(3000);
  await fun_click(page, "#btn_choose_direct_mail", 0);
  await page.waitForTimeout(1000);
  await fun_click(page, ".btn-add-row", 0);
  await page.waitForTimeout(1000);
  await fun_click(page, "#btn_save", 0);
  await page.waitForTimeout(3000);
}
async function sent_personnel_individual(page) {
  await goto(page, "sent-mail-individual");
  await page.locator("#mail_to").fill("hoaiditest@gmail.com");
  await page.locator("#content").click();
  const infor = await sent(page, "sent_personnel_individual");
  return { web_info_per: infor.web_info_per, file: infor.file };
}
async function sent_personnel_individual_self(page) {
  await goto(page, "sent-mail-individual/sent-self");
  await page.locator("#mail_to").fill("hoaiditest@gmail.com");
  await page.locator("#content").click();
  const infor = await sent(page, "sent_personnel_individual_self");
  return { web_info_per: infor.web_info_per, file: infor.file };
}
async function sent_project_individual_self(page) {
  await goto(page, "sent-project-individual/sent-self");
  await page.locator("#mail_to").fill("hoaiditest@gmail.com");
  await page.locator("#content").click();
  const infor = await sent(page, "sent_project_individual_self");
  return { web_info_per: infor.web_info_per, file: infor.file };
}
async function sent_project_individual(page) {
  await goto(page, "sent-project-individual");
  await page.locator("#mail_to").fill("hoaiditest@gmail.com");
  await page.locator("#content").click();
  const infor = await sent(page, "sent_project_individual");
  return { web_info_per: infor.web_info_per, file: infor.file };
}
async function sent_mail_self(page) {
  await goto(page, "sent-mail/sent-self");
  await gr_mail(page);
  const infor = await sent(page, "sent_mail_self");
  return {
    web_info_per: infor.web_info_per,
    file: infor.file,
    mail_sent: infor.mail_sent,
  };
}
async function sent_mail(page) {
  await goto(page, "sent-mail/sent");
  await gr_mail(page);
  const infor = await sent(page, "sent_mail");
  return {
    web_info_per: infor.web_info_per,
    file: infor.file,
    mail_sent: infor.mail_sent,
  };
}
async function sent_mail_project_self(page) {
  await goto(page, "sent-mail-project/sent-self");
  await gr_mail(page);
  const infor = await sent(page, "sent_mail_project_self");
  return {
    web_info_per: infor.web_info_per,
    file: infor.file,
    mail_sent: infor.mail_sent,
  };
}
async function sent_mail_project(page) {
  await goto(page, "sent-mail-project/sent");
  await gr_mail(page);
  const infor = await sent(page, "sent_mail_project");
  return {
    web_info_per: infor.web_info_per,
    file: infor.file,
    mail_sent: infor.mail_sent,
  };
}
async function outbox(page, url1, url2, template) {
  await goto(page, url1);
  await gr_mail(page);
  await page.locator("#select2-dp_id-container").click();
  await page.waitForTimeout(2000);
  await page.locator("#select2-dp_id-container").press("Enter");
  await page.locator("#select_temp").selectOption(template);
  await template_selectOption(page);
  await page.locator("#box-attachment").click();
  const fileChooserPromise = page.waitForEvent("filechooser");
  await page.locator("#upload-file").click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles([
    "file/file_new/自社案件情報(1).pdf",
    "file/file_new/自社案件情報(1).xlsx",
    "file/file_new/自社案件情報(2).pdf",
    "file/file_new/自社案件情報(2).xlsx",
    "file/file_new/自社案件情報(3).pdf",
    "file/file_new/自社案件情報(3).xlsx",
    "file/file_new/自社案件情報(4).xlsx",
    "file/file_new/自社要員情報(1).pdf",
    "file/file_new/自社要員情報(1).xlsx",
    "file/file_new/自社要員情報(2).pdf",
    "file/file_new/自社要員情報(2).xlsx",
    "file/file_new/自社要員情報(3).pdf",
    "file/file_new/自社要員情報(3).xlsx",
    "file/file_new/自社要員情報(4).xlsx",
  ]);
  await page.waitForTimeout(10000);
  let web_info_per;
  try {
    web_info_per = await page
      .locator("#personnel_info_1")
      .textContent({ timeout: 5000 });
  } catch (error) {
    web_info_per = await page.locator("#project_info_1").textContent();
  }
  const file = await page.locator("#box-attachment span:nth-child(1)").count();
  await page.locator(".btn_save_outbox").nth(0).click();
  await page.waitForTimeout(3000);
  await goto(page, url2);
  await page.waitForTimeout(3000);
  await page.locator(".ph-pencil-simple-line").first().click();
  await page.waitForTimeout(3000);
  await page.locator(".btn_confirm").first().click();
  await page.waitForTimeout(3000);
  await page.locator("#send").click();
  await page.waitForTimeout(5000);
  await page.locator(".swal-button--confirm").click();
  await page.waitForTimeout(5000);
  await page.locator(".swal-button--confirm").click();
  await page.waitForTimeout(20000);
  return { web_info_per, file };
}
async function sent_mail_interaction(page) {
  await goto(page, "sent-mail-interaction");
  await page
    .locator("#subject_content")
    .fill(`sent_mail_interaction ${new Date().toLocaleString()}`);
  await page.locator("#body_detail_text_content").click();
  await page
    .locator("#body_detail_text_content")
    .fill(`sent_mail_interaction ${new Date().toLocaleString()}`);
  await interaction_fillMail_file(page);
  await interaction_sent(page);
}
async function sent_mail_interaction_template(page) {
  await goto(page, "sent-mail-interaction");
  await page.locator("#type_template").click();
  await page
    .locator("#select_temp")
    .selectOption("sent_mail_interaction_template");
  await template_selectOption(page);
  await interaction_fillMail_file(page);
  await interaction_sent(page);
}
async function outbox_interaction(page) {
  await goto(page, "sent-mail-interaction");
  await page
    .locator("#subject_content")
    .fill(`outbox_interaction ${new Date().toLocaleString()}`);
  await page.locator("#body_detail_text_content").click();
  await page
    .locator("#body_detail_text_content")
    .fill(`outbox_interaction ${new Date().toLocaleString()}`);
  await interaction_fillMail_file(page);
  await page.locator(".btn-save-outbox").nth(0).click();
  await page.locator(".ph-pencil-simple-line").nth(0).click();
  await interaction_sent(page);
  await goto(page, "sent-mail-interaction");
  await page.locator("#type_template").click();
  await page.locator("#select_temp").selectOption("outbox_interaction");
  await template_selectOption(page);
  await interaction_fillMail_file(page);
  await page.locator(".btn-save-outbox").nth(0).click();
  await page.locator(".ph-pencil-simple-line").nth(0).click();
  await interaction_sent(page);
}
async function reply_interaction(page) {
  await goto(page, "mail/inbox/12");
  await page.locator("tbody>tr").first().click();
  await page.locator("#mail-detail a").nth(1).click();
  const page1 = await page.waitForEvent("popup");
  await page1
    .locator("#body_detail_text_content")
    .fill(`reply_interaction ${new Date().toLocaleString()}`);
  await interaction_fillMail_file(page1);
  await interaction_sent(page1);
  await page1.close();
  await page.locator("#mail-detail a").nth(1).click();
  const page2 = await page.waitForEvent("popup");
  await page2.locator("#type_template").click();
  await page2.locator("#select_temp").selectOption("reply_interaction");
  await template_selectOption(page2);
  await interaction_fillMail_file(page2);
  await interaction_sent(page2);
  await page2.close();
  await page.locator("#mail-detail a").nth(1).click();
  const page3 = await page.waitForEvent("popup");
  await page3.locator("#proposal_email").click();
  /*for (let i = 0; i < 5; i++) {
    await add_data(page3, i);
  }*/
  await page3.locator("#self_personal").nth(0).click();
  for (let i = 0; i < 1; i++) {
    await add_data(page3, i);
  }
  await page3
    .locator("#content_proposal_email_select_temp")
    .selectOption("reply_interaction");
  await template_selectOption(page3);
  await interaction_fillMail_file(page3);
  await interaction_sent(page3);
  async function add_data(page, i) {
    await page.locator(".btn-md").nth(0).click();
    await page.waitForTimeout(1000);
    await page.locator("#btn_search").click();
    await page.waitForTimeout(1000);
    await page.locator(".btn-add-row").nth(i).click();
    await page.waitForTimeout(1000);
    await page.locator("#box-result a").nth(0).click();
  }
}
async function delete_all_page(page, url_delete) {
  await page.goto(url_delete);
  await page.waitForTimeout(2000);
  const button_delete = await page.locator('//a[@title="を削除する"]').count();
  console.log(button_delete);
  for (let i = 0; i < button_delete; i++) {
    await deleted_group(page);
  }
}
async function fun_delete(page) {
  try {
    await page.locator(".ph-info").first().click({ timeout: 3000 });
    const page1Promise = page.waitForEvent("popup");
    const page1 = await page1Promise;
    await page1.setViewportSize({ width: 1920, height: 1080 });
    await page1.locator(".toolbar-delete").first().click({ timeout: 3000 });
    await page1.waitForTimeout(3000);
    await page1.locator(".swal-button--confirm").click({ timeout: 3000 });
    await page1.waitForTimeout(5000);
  } catch (error) {}
}
async function delete_bp(page) {
  await goto(page, "bp");
  /*const gmail = [
    "hoaiditest",
    "hoaiditest1",
    "hoaiditest2",
    "hoangoisan",
    "hoangoisan2",
    "dihai222222",
    "dimot111111",
    "wasdhihihaha",
  ];
  for (let i = 0; i < gmail.length; i++) {
    await page.locator("#name").fill(gmail[i]);
  await page.locator(".btn-primary").nth(1).click();*/
  await fun_delete(page);
  await goto(page, "bp/deleted");
  await deleted_bp_bl_sale(page);
  // }
}
async function delete_bp_sale(page) {
  await goto(page, "bp-sale");
  await fun_delete(page);
  await goto(page, "bp-sale/deleted");
  await deleted_bp_bl_sale(page);
}
async function deleted_bp_bl_sale(page) {
  await page.waitForTimeout(2000);
  await page.locator("#checkall").first().click();
  await page.locator(".ph-trash").first().click();
  await page.waitForTimeout(2000);
  await page.locator(".swal-button--confirm").click({ timeout: 10000 });
}
async function deleted_group(page) {
  await page.waitForTimeout(5000);
  await page.locator(".ph-trash").first().click();
  await page.waitForTimeout(2000);
  await page.locator(".swal-button--confirm").click();
  await page.waitForTimeout(2000);
  try {
    await page.locator(".swal-button--confirm").click({ timeout: 3000 });
    await page.waitForTimeout(5000);
  } catch (error) {}
}
async function deleted_direct_mail(page, expect) {
  await goto(page, "direct-mail");
  const a = await get_number(page);
  console.log(`Trước ${a.numbers[0]}`);
  await deleted_group(page);
  const b = await get_number(page);
  console.log(`Sau ${b.numbers[0]}`);
  expect(a.numbers[0] - 1).toBe(b.numbers[0]);
}
async function deleted_direct_personnel(page, expect) {
  await goto(page, "personnel-group");
  const a = await get_number(page);
  console.log(`Trước ${a.numbers[0]}`);
  await deleted_group(page);
  const b = await get_number(page);
  console.log(`Sau ${b.numbers[0]}`);
  expect(a.numbers[0] - 1).toBe(b.numbers[0]);
}

async function add_template(page) {
  let mail = [
    "sent_mail_self",
    "sent_mail",
    "sent_personnel_individual_self",
    "sent_personnel_individual",
    "sent_mail_project_self",
    "sent_mail_project",
    "sent_project_individual_self",
    "sent_project_individual",
    "outbox_sent_mail_self",
    "outbox_sent_mail",
    "sent_mail_interaction_template",
    "outbox_interaction",
    "reply_interaction",
  ];
  for (let y = 0; y < mail.length; y++) {
    await goto(page, "mail-template-group");
    await page.locator("#breadcrumb_elements a").first().click();
    await page.locator("#name").fill(`${mail[y]}`);
    await page.locator("#tmpl_note").fill(RandomString(10));
    await page.locator("#btn_register_template").click();
    await page.waitForTimeout(3000);
    try {
      await page.locator(".fa-list").first().click({ timeout: 3000 });
    } catch (error) {
      await page.locator(".ph-list-bullets").first().click();
    }
    await page.locator("#breadcrumb_elements a").first().click();
    await page.waitForTimeout(3000);
    const select = await page
      .locator('//select[@id="type"]//option')
      .allInnerTexts();
    for (let i = 0; i < select.length - 1; i++) {
      await page.waitForTimeout(2000);
      await page.locator("#type").selectOption({ index: i + 1 });
      await page.locator("#name").fill(`${mail[y]}`);
      // await page.locator('//textarea[@name="content"]').fill(select[i + 1]);
      await page.locator('//textarea[@name="content"]').fill(`${mail[y]}`);
      await page.locator("#btn_register_template").click();
      await page.locator("#breadcrumb_elements a").first().click();
    }
  }
}
const file = [
  "A.O_戸頭.xlsx",
  "Avintonスキルシート_PJ.pdf",
  "K.K_読売ランド前.xlsx",
  "K.S_平塚.xlsx",
  "K.S_平塚.xlsx",
  "K.T_九地 .xls",
  "KY _あざみ野.xlsx",
  "M.M_佐原.pdf",
  "MI_中浦和 (2).xlsx",
  "R.I_新白岡.xlsx",
  "R.T_船橋法典.xlsx",
  "S.O_高島平_11.xlsx",
  "Y.K_西所沢.xlsx",
  "Y.N_金町.xlsx",
  "スキルシート_T.K_20231011.xlsx",
];
function RandomFile() {
  const randomIndex = Math.floor(Math.random() * file.length);
  return file[randomIndex];
}
var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];
function RandomName() {
  var finalName = nameList[Math.floor(Math.random() * nameList.length)];
  return finalName;
}
var array = {
  languages: [
    "HTML5",
    "CSS3",
    "Sass",
    "Less",
    "Stylus",
    "Python",
    "Java",
    "C#",
    "Go",
    "Ruby",
    "PHP",
    "Node.js",
    "Kotlin",
    "Scala",
    "Rust",
    "Perl",
    "Elixir",
    "Clojure",
    "JavaScript (ES6+)",
    "TypeScript",
    "Swift",
    "Objective-C",
    "Dart (Flutter)",
    "SQL (ANSI SQL)",
    "PL/SQL (Oracle)",
    "T-SQL (SQL Server)",
    "NoSQL Query Languages (MongoDB Query Language, Cassandra Query Language)",
    "GraphQL",
    "Bash Scripting",
    "PowerShell",
    "VBA",
    "JSON",
    "XML",
    "YAML",
    "TOML",
    "Amazon Web Services (AWS)",
    "Microsoft Azure",
    "Google Cloud Platform (GCP)",
    "Alibaba Cloud",
    "Oracle Cloud Infrastructure (OCI)",
    "RESTful APIs",
    "SOAP APIs",
    "WebSockets",
    "gRPC",
    "Kafka",
    "RabbitMQ",
    "Redis Pub/Sub",
    "OAuth",
    "SAML",
    "OpenID Connect",
    "GitHub Actions",
    "GitLab CI/CD",
    "Jenkins",
    "Travis CI",
    "CircleCI",
    "Azure DevOps Pipelines",
    "AWS CodePipeline",
    "Prometheus",
    "Grafana",
    "ELK Stack (Elasticsearch, Logstash, Kibana)",
    "Splunk",
    "Datadog",
    "New Relic",
    "Nagios",
    "Zabbix",
    "AWS Lambda",
    "Azure Functions",
    "Google Cloud Functions",
    "Docker",
    "Kubernetes",
    "AWS ECS",
    "AWS EKS",
    "Azure Kubernetes Service (AKS)",
    "Google Kubernetes Engine (GKE)",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Azure Repos",
    "AWS IAM",
    "Azure Active Directory",
    "Google Cloud IAM",
    "Apache Kafka",
    "RabbitMQ",
    "Amazon SQS",
    "Azure Service Bus",
    "Google Cloud Pub/Sub",
  ],
  tools: [
    "VS Code",
    "IntelliJ IDEA",
    "Eclipse",
    "PyCharm",
    "WebStorm",
    "Vim",
    "Emacs",
    "Sublime Text",
    "Android Studio",
    "Xcode",
    "Visual Studio",
    "Git",
    "SVN",
    "Mercurial",
    "Maven",
    "Gradle",
    "NPM",
    "Yarn",
    "Webpack",
    "Rollup",
    "Parcel",
    "Gulp",
    "Grunt",
    "Bazel",
    "Jest",
    "Mocha",
    "Chai",
    "Jasmine",
    "Cypress",
    "Selenium",
    "Playwright",
    "JUnit",
    "NUnit",
    "Pytest",
    "Postman (API Testing)",
    "SoapUI",
    "JMeter",
    "LoadRunner",
    "Docker Desktop",
    "Kubernetes CLI (kubectl)",
    "Minikube",
    "Vagrant",
    "VirtualBox",
    "VMware Workstation/ESXi",
    "Ansible",
    "Terraform",
    "Puppet",
    "Chef",
    "SaltStack",
    "Argo CD",
    "Flux CD",
    "DBeaver",
    "SQL Developer",
    "MySQL Workbench",
    "pgAdmin",
    "MongoDB Compass",
    "Robo 3T",
    "Wireshark",
    "Nmap",
    "Postman (network requests)",
    "cURL",
    "ping",
    "traceroute",
    "iPerf",
    "Jira",
    "Confluence",
    "Trello",
    "Asana",
    "Slack",
    "Microsoft Teams",
    "Zoom",
    "Miro",
    "Figma",
    "Sketch",
    "Adobe XD",
    "OWASP ZAP",
    "Burp Suite",
    "Nessus",
    "Metasploit",
    "Snort",
    "Suricata",
    "Jupyter Notebook",
    "Google Colab",
    "Anaconda",
    "TensorFlow",
    "Keras",
    "PyTorch",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "OpenTelemetry",
    "Zipkin",
    "Jaeger",
    "Loki",
    "Thanos",
    "ESLint",
    "Prettier",
    "SonarQube",
    "Black (Python)",
    "Flake8",
    "iTerm2",
    "Terminator",
    "Windows Terminal",
    "Zsh",
    "Oh My Zsh",
    "Tmux",
  ],
  skills: [
    // Kỹ năng lập trình & Phát triển
    "Object-Oriented Programming (OOP)",
    "Functional Programming (FP)",
    "Data Structures & Algorithms",
    "Design Patterns",
    "Clean Code Principles",
    "Refactoring",
    "Test-Driven Development (TDD)",
    "Behavior-Driven Development (BDD)",
    "Domain-Driven Design (DDD)",
    "Agile Methodologies (Scrum, Kanban)",
    "Debugging",
    "Code Review",
    "Version Control Management",
    // Kỹ năng kiến trúc & Hệ thống
    "System Design",
    "Microservices Architecture",
    "Monolithic Architecture",
    "Serverless Architecture",
    "Event-Driven Architecture",
    "API Design",
    "Scalability",
    "High Availability",
    "Resilience",
    "Security Best Practices",
    "Performance Optimization",
    "Cloud Architecture",
    "Distributed Systems",
    // Kỹ năng DevOps & Operations
    "CI/CD Implementation",
    "Infrastructure as Code (IaC)",
    "Container Orchestration",
    "Monitoring & Alerting",
    "Logging & Tracing",
    "Configuration Management",
    "Site Reliability Engineering (SRE) Principles",
    "Disaster Recovery",
    "Backup Strategies",
    // Kỹ năng cơ sở dữ liệu
    "Database Design",
    "SQL Optimization",
    "Data Modeling",
    "Database Administration (DBA)",
    "NoSQL Database Management",
    // Kỹ năng mạng
    "Networking Fundamentals (TCP/IP, HTTP/S)",
    "DNS",
    "Load Balancing",
    "Firewall Configuration",
    "VPNs",
    "Network Security",
    // Kỹ năng bảo mật
    "Cybersecurity Principles",
    "Vulnerability Assessment",
    "Penetration Testing",
    "Threat Modeling",
    "Incident Response",
    "Cryptography",
    "Identity & Access Management (IAM)",
    // Kỹ năng mềm
    "Problem Solving",
    "Critical Thinking",
    "Communication (Verbal & Written)",
    "Teamwork",
    "Collaboration",
    "Adaptability",
    "Time Management",
    "Project Management",
    "Mentoring",
    "Documentation",
    "Research Skills",
    "Presentation Skills",
    // Kỹ năng khác
    "Data Analysis",
    "Machine Learning Fundamentals",
    "Deep Learning Fundamentals",
    "Statistical Analysis",
    "Cloud Cost Optimization",
    "Virtualization",
    "Operating System Fundamentals",
    "Command Line Interface (CLI) Proficiency",
  ],
  OS: [
    "Linux (Ubuntu, CentOS, Fedora, Debian, Red Hat Enterprise Linux - RHEL, Alpine Linux)",
    "Windows Server",
    "Windows Desktop (Windows 10, Windows 11)",
    "macOS",
    "Unix",
    "iOS",
    "Android",
    "FreeBSD",
    "VxWorks (Embedded OS)",
  ],
  DB: [
    "MySQL",
    "PostgreSQL",
    "Oracle Database",
    "Microsoft SQL Server",
    "SQLite",
    "MariaDB",
    "IBM Db2",
    "MongoDB (Document)",
    "Cassandra (Column-family)",
    "Redis (Key-value)",
    "Elasticsearch (Search engine/Document)",
    "DynamoDB (Key-value/Document)",
    "Couchbase (Document)",
    "Neo4j (Graph)",
    "ArangoDB (Multi-model)",
    "InfluxDB (Time-series)",
    "RavenDB (Document)",
    "Snowflake",
    "Google BigQuery",
    "Amazon Redshift",
    "Teradata",
    "SAP HANA",
    "Redis",
    "Memcached",
    "Amazon RDS",
    "Azure SQL Database",
    "Google Cloud SQL",
    "Cosmos DB",
    "Aurora",
  ],
  network: [
    "Servers (Rack, Blade, Tower)",
    "Storage Area Network (SAN)",
    "Network Attached Storage (NAS)",
    "Direct-Attached Storage (DAS)",
    "RAID configurations",
    "Solid State Drives (SSDs)",
    "Hard Disk Drives (HDDs)",
    "GPUs (for ML/AI)",
    "CPUs (Intel, AMD)",
    "RAM",
    "Motherboards",
    "Power Supply Units (PSUs)",
    "UPS (Uninterruptible Power Supply)",
    "KVM Switches",
    "Routers",
    "Switches (Layer 2, Layer 3)",
    "Firewalls (Hardware/Software)",
    "Load Balancers (Hardware/Software)",
    "Access Points (APs)",
    "Modems",
    "Network Interface Cards (NICs)",
    "Cables (Ethernet, Fiber Optic)",
    "Patch Panels",
    "Rack Units",
    "TCP/IP Suite (IPv4, IPv6)",
    "HTTP/S",
    "DNS",
    "DHCP",
    "FTP/SFTP",
    "SSH",
    "Telnet",
    "SMTP",
    "POP3",
    "IMAP",
    "SNMP",
    "VLANs",
    "VPNs (IPSec, OpenVPN, SSL VPN)",
    "OSI Model",
    "TCP/UDP",
    "Routing Protocols (BGP, OSPF, EIGRP, RIP)",
    "Switching Protocols (STP, VLAN Trunking)",
    "Network Topologies (Star, Mesh, Bus, Ring)",
    "Subnetting",
    "Network Latency",
    "Bandwidth",
    "Virtual Machines (VMs)",
    "Containers",
    "Virtual Private Clouds (VPCs)",
    "Elastic Load Balancers (ELBs)",
    "Content Delivery Networks (CDNs)",
    "Edge Locations",
    "Availability Zones",
    "Regions",
    "Direct Connect/ExpressRoute",
    "Intrusion Detection Systems (IDS)",
    "Intrusion Prevention Systems (IPS)",
    "Unified Threat Management (UTM) devices",
    "Hardware Security Modules (HSMs)",
    "IoT Devices",
    "Embedded Systems",
    "Raspberry Pi",
    "Arduino",
  ],
};
function Random(array) {
  var final = array[Math.floor(Math.random() * array.length)];
  return final;
}
function RandomString(
  len,
  chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
) {
  return [...Array(len)]
    .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
    .join("");
}
function RandomNumber(len, chars = "0123456789") {
  return [...Array(len)]
    .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
    .join("");
}
async function textbox(page) {
  await page.waitForTimeout(3000);
  const inputElements = await page.$$("input, textarea,p");
  await console.log(inputElements.length);
  for (let i = 0; i < inputElements.length; i++) {
    try {
      await inputElements[i].click({ timeout: 1000 });
      await page.waitForTimeout(1000);
      await inputElements[i].fill(RandomString(10), { timeout: 1000 });
    } catch (error) {}
  }
  try {
    await page
      .locator("//input[@name='email']")
      .fill(`${RandomString(10)}@gmail.com`, { timeout: 3000 });
  } catch (error) {}
  try {
    await page
      .locator("//input[@name='phone']")
      .fill(RandomNumber(10), { timeout: 3000 });
  } catch (error) {}
}
async function textbox2(page) {
  await page.waitForTimeout(3000);
  const inputElements = await page.$$("input, textarea");
  for (let i = 0; i < inputElements.length; i++) {
    try {
      await inputElements[i].click({ timeout: 1000 });
      await page.waitForTimeout(2000);
      await inputElements[i].fill(Random(array["skills"]), { timeout: 1000 });
      // await page.keyboard.press("Enter");
    } catch (error) {}
  }
}
async function select(page, index) {
  await page.waitForTimeout(3000);
  const select = await page.$$("select");
  await console.log(select.length);
  for (let i = 0; i < select.length; i++) {
    try {
      await select[i].selectOption({ index: index }, { timeout: 1000 });
    } catch (error) {}
  }
}
async function select2(page) {
  await page.waitForTimeout(3000);
  const select = await page.$$("select");
  for (let i = 0; i < select.length; i++) {
    try {
      const secondSelectOptions = await page
        .locator("select")
        .nth(i)
        .locator("option")
        .count();
      await select[i].selectOption(
        { index: Math.floor(Math.random() * (secondSelectOptions - 1)) + 1 },
        { timeout: 3000 }
      );
      await page.waitForTimeout(1000);
    } catch (error) {}
  }
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
      // console.log(menu[a]);
      await page.waitForTimeout(1000);
      const url2 = await page.url();
      await check_status(page, url2);
      // await check_noty_error(page, url2);
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
    await sentmail_errorJP(page, url, `Status Code: ${response.status()}`, [
      "hoaiditest1@gmail.com",
    ]);
  }
}
async function check_noty_error(page, url) {
  await page.waitForTimeout(1000);
  // Test
  /*await goto(page, "personnel-group");
  await page.locator(".btn-action-breadcrumb").nth(2).click();
  const noty = await page.locator(".noty_body").nth(0);*/
  const check_noty = await noty.isVisible();
  if (check_noty) {
    const text = await noty.textContent();
    console.log("noty_error " + url + "  " + text);
    await sentmail_errorJP(page, url, `Alert Error : ${text} `);
  }
}
async function click_breadcrumb(page) {
  await page.waitForTimeout(500);
  const breadcrumb = await page.locator("#breadcrumb_elements a").all();
  // await console.log(breadcrumb);
  for (let a = 0; a < breadcrumb.length; a++) {
    const url3 = await page.url();
    await page.waitForTimeout(500);
    try {
      await breadcrumb[a].click({ timeout: 1000 });
    } catch (error) {}
    await page.waitForTimeout(500);
    const url4 = await page.url();
    await check_noty_error(page, url4);
    await check_status(page, url4);
    if (url3 != url4) {
      await page.waitForTimeout(500);
      await page.goBack();
    }
    await page.waitForTimeout(500);
  }
}

const nodemailer = require("nodemailer");

async function personnel_envtest_025(per_title, per_content) {
  for (let a = 1; a <= 1; a++) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "dimot111111@gmail.com",
        pass: "drvm wsqm bjgk ispi",
      },
    });
    const info = await transporter.sendMail({
      from: '"From DiTest" <foo@example.com>',
      to: "nesv025@gmail.com",
      subject: "env_test per " + per_title,
      text: per_content,
    });
  }
}
async function project_envtest_025(project_title, project_content) {
  for (let a = 1; a <= 1; a++) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "dimot111111@gmail.com",
        pass: "drvm wsqm bjgk ispi",
      },
    });
    const info = await transporter.sendMail({
      from: '"From DiTest" <foo@example.com>',
      to: "nesv025@gmail.com",
      subject: "env_test project " + project_title,
      text: project_content,
    });
  }
}
async function personnel_product_025(title_per, content_per) {
  for (let a = 1; a <= 1; a++) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "dimot111111@gmail.com",
        pass: "drvm wsqm bjgk ispi",
      },
    });
    const info = await transporter.sendMail({
      from: '"From DiTest" <foo@example.com>',
      to: "nesv025@gmail.com",
      subject: "env_product per " + title_per,
      text: content_per,
    });
  }
}
async function skill_personnel_product_025() {
  for (let a = 1; a <= 1; a++) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "dimot111111@gmail.com",
        pass: "drvm wsqm bjgk ispi",
      },
    });
    const info = await transporter.sendMail({
      to: "nesv025@gmail.com",
      subject: `skill_personnel_product_025 : mail in for ${a} hoaiditest1_engibase ${RandomString(
        5
      )}`,
      text: `
      ご担当者様

弊社が懇意にさせて頂いているBPの要員様のご紹介をさせて頂きます。
見合う案件がございましたらご紹介の程よろしくお願いいたします。


****************************************
        【氏 名】${RandomString(1)} ${RandomString(1)}
        【年 齢】3${RandomNumber(1)}歳
        【性 別】男性
        【単 価】1${RandomNumber(3)}万  
          ■保有スキル：
          ・Sale  経験：2年1ヶ月  
          ・Manager  経験：1年6ヶ月  

--
_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

          ${RandomString(5)}テック株式会社
          営業部：${RandomString(5)}

          個人メール：${RandomString(5)}@${RandomString(5)}.co.jp 

          TEL：080-${RandomNumber(4)}-${RandomNumber(4)} 
        
                `,
    });
  }
}
async function project_product_025(title_project, content_project) {
  for (let a = 1; a <= 1; a++) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "dimot111111@gmail.com",
        pass: "drvm wsqm bjgk ispi",
      },
    });
    const info = await transporter.sendMail({
      from: '"From DiTest" <foo@example.com>',
      to: "nesv025@gmail.com",
      subject: "env_product project " + title_project,
      text: content_project,
    });
  }
}
async function personnel_product_hoangoisan(personnel_content) {
  for (let a = 1; a <= 1; a++) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "nesv025@gmail.com",
        pass: "kjgcuqzqdziibvfx",
      },
    });
    const info = await transporter.sendMail({
      from: '"From DiTest" <foo@example.com>',
      to: "hoangoisan@gmail.com",
      subject: `personnel_product_hoangoisan : mail in for ${a} ${RandomString(
        5
      )}`,
      text: `${personnel_content}`,
    });
  }
}
async function project_product_hoangoisan(project_content) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "nesv025@gmail.com",
      pass: "kjgcuqzqdziibvfx",
    },
  });
  const info = await transporter.sendMail({
    from: '"From DiTest" <foo@example.com>',
    to: "hoangoisan@gmail.com",
    subject: `project_product_hoangoisan : Project ${RandomString(5)}`,
    text: `${project_content}`,
  });
}

async function file_test_per_project(
  title_per,
  content_per,
  title_project,
  content_project
) {
  const page = await open_browser("didimimi1999dimi");
  // await page.waitForTimeout(10000);
  await page.getByText("Soạn thư").click();
  await page
    .locator('//input[@aria-label="Tới người nhận"]')
    .fill("nesv025@gmail.com");
  await page
    .locator('//input[@aria-label="Tiêu đề"]')
    .fill("env_test file_per " + title_per);
  await page.locator('//div[@aria-label="Nội dung thư"]').fill(content_per);
  await page
    .locator("//input[@type='file']")
    .setInputFiles(`file/${[RandomFile()]}`);
  await page.waitForTimeout(5000);
  await page
    .locator('//table[@role="group"]//div[@role="button"]')
    .first()
    .click();
  await page.waitForTimeout(10000);
  await page.getByText("Soạn thư").click();
  await page
    .locator('//input[@aria-label="Tới người nhận"]')
    .fill("nesv025@gmail.com");
  await page
    .locator('//input[@aria-label="Tiêu đề"]')
    .fill("env_test file_project " + title_project);
  await page.locator('//div[@aria-label="Nội dung thư"]').fill(content_project);
  await page
    .locator("//input[@type='file']")
    .setInputFiles(`file/${[RandomFile()]}`);
  await page.waitForTimeout(5000);
  await page
    .locator('//table[@role="group"]//div[@role="button"]')
    .first()
    .click();
  await page.waitForTimeout(10000);
  await page.close();
}
async function file_product_per_project(
  title_per,
  content_per,
  title_project,
  content_project
) {
  const infor_per = await mail_infor(content_per);
  const inforPer = infor_per.name_per + RandomNumber(3);
  await create_fileExcel(inforPer);
  const infor_project = await mail_infor(content_project);
  const inforProject = infor_project.name_project + RandomNumber(3);
  await create_fileExcel(inforProject);
  const page = await open_browser("didimimi1999dimi");
  await page.getByText("Soạn thư").click();
  await page
    .locator('//input[@aria-label="Tới người nhận"]')
    .fill("nesv025@gmail.com");
  await page
    .locator('//input[@aria-label="Tiêu đề"]')
    .fill("env_product file_per " + title_per);
  await page.locator('//div[@aria-label="Nội dung thư"]').fill(content_per);
  await page
    .locator("//input[@type='file']")
    .setInputFiles(`file/auto/${inforPer}.xlsx`);
  await page.waitForTimeout(5000);
  await page
    .locator('//table[@role="group"]//div[@role="button"]')
    .first()
    .click();
  await page.waitForTimeout(10000);
  //sent project : project_file_product_025
  await page.getByText("Soạn thư").click();
  await page
    .locator('//input[@aria-label="Tới người nhận"]')
    .fill("nesv025@gmail.com");
  await page
    .locator('//input[@aria-label="Tiêu đề"]')
    .fill("env_product file_project " + title_project);
  await page.locator('//div[@aria-label="Nội dung thư"]').fill(content_project);
  await page
    .locator("//input[@type='file']")
    .setInputFiles(`file/auto/${inforProject}.xlsx`);
  await page.waitForTimeout(5000);
  await page
    .locator('//table[@role="group"]//div[@role="button"]')
    .first()
    .click();
  await page.waitForTimeout(10000);
  await page.close();
}
async function project_file_product_025(project_content) {
  const page = await open_browser("didimimi1999dimi");
  await page.getByText("Soạn thư").click();
  await page
    .locator('//input[@aria-label="Tới người nhận"]')
    .fill("nesv025@gmail.com");
  await page
    .locator('//input[@aria-label="Tiêu đề"]')
    .fill("env_product project_file_product_025 " + RandomString(5));
  await page.locator('//div[@aria-label="Nội dung thư"]').fill(`
${project_content}
    `);
  await page
    .locator("//input[@type='file']")
    .setInputFiles(`file/${[RandomFile()]}`);
  await page.waitForTimeout(5000);
  await page
    .locator('//table[@role="group"]//div[@role="button"]')
    .first()
    .click();
  await page.waitForTimeout(10000);
}
async function project_file_test_025(project_content) {
  const page = await open_browser("didimimi1999dimi");
  await page.getByText("Soạn thư").click();
  await page
    .locator('//input[@aria-label="Tới người nhận"]')
    .fill("nesv025@gmail.com");
  await page
    .locator('//input[@aria-label="Tiêu đề"]')
    .fill("env_test project_file_test_025 " + RandomString(5));
  await page.locator('//div[@aria-label="Nội dung thư"]').fill(`
${project_content}
    `);
  await page
    .locator("//input[@type='file']")
    .setInputFiles(`file/${[RandomFile()]}`);
  await page.waitForTimeout(5000);
  await page
    .locator('//table[@role="group"]//div[@role="button"]')
    .first()
    .click();
  await page.waitForTimeout(10000);
}
async function add_personnel_self_proposal(page) {
  // for (let di = 0; di < 10; di++) {
  await goto(page, "personnel-self-proposal/add/");
  await proposal(page, 2);
  // await proposal(page, di);
  // }
}
async function add_personnel_proposal(page) {
  await goto(page, "personnel-proposal/add/");
  await proposal(page, 2);
}
async function proposal(page, di) {
  await page.locator(".btn_choose_type").nth(0).click();
  await page.locator(".btn-add-row").nth(2).click();
  await page.waitForTimeout(3000);
  const inputElements = await page
    .locator("//form//input|//form//textarea")
    .elementHandles();
  await console.log(inputElements.length);
  for (let i = 0; i < inputElements.length; i++) {
    try {
      // await inputElements[i].click({ timeout: 1000 });
      // await page.waitForTimeout(1000);
      await inputElements[i].fill(RandomString(10), { timeout: 1000 });
    } catch (error) {}
  }
  await select(page, di);
  try {
    await page.locator("#user_id").selectOption({ index: 6, timeout: 3000 });
  } catch (error) {
    await page.locator("#user_id").selectOption({ index: 1, timeout: 3000 });
  }

  await page.locator("#start_at").fill(formattedDate);
  await page.locator("#start_at").press("Enter");
  await page.locator(".ph-calendar").nth(0).click();
  await page.locator("#join_at").fill(formattedDate);
  await page.locator("#join_at").press("Enter");
  await page.locator(".ph-calendar").nth(1).click();
  await page.locator("#interview_date").fill(formattedDate);
  await page.locator("#interview_date").press("Enter");
  await page.locator(".ph-calendar").nth(2).click();
  try {
    await page.locator("#sb_id").selectOption({ index: 3, timeout: 3000 });
  } catch (error) {}
  await page.locator(".ph-paper-plane-tilt").click();
  await page.waitForTimeout(3000);
}
async function AdminUser_add(page, expect) {
  const gmailAddresses = ["hoangoisan@gmail.com"];
  for (let i = 0; i < gmailAddresses.length; i++) {
    await goto(page, "admin-user");
    const a = await get_number(page);
    console.log(`Trước ${a.numbers[0]}`);
    await goto(page, "admin-user/add");
    await page.locator("#email").fill(gmailAddresses[i]);
    await page.locator("#first_name").fill(RandomName());
    await page.locator("#last_name").fill(RandomName());
    await page.locator("#kata_name").fill("カナ");
    await page.locator("input[name=phone]").fill(RandomNumber(10));
    await page.locator(".btn-warning").click();
    await page.waitForTimeout(1000);
    await page.locator(".swal-button--confirm").click();
    await page.waitForTimeout(3000);
    await page.locator(".swal-button--confirm").click();
    await page.waitForTimeout(3000);
    const b = await get_number(page);
    console.log(`Sau ${b.numbers[0]}`);
    expect(a.numbers[0] + 1).toBe(b.numbers[0]);
  }
}
async function AdminUser_delete(page, expect) {
  await goto(page, "admin-user");
  const a = await get_number(page);
  console.log(`Trước ${a.numbers[0]}`);
  await page.locator(".ph-trash").nth(0).click();
  await page.waitForTimeout(1000);
  await page.locator(".swal-button--confirm").click();
  await page.waitForTimeout(1000);
  const b = await get_number(page);
  console.log(`Sau ${b.numbers[0]}`);
  expect(a.numbers[0] - 1).toBe(b.numbers[0]);
  await goto(page, "admin-user/deleted");
  const c = await get_number(page);
  console.log(`Trước ${c.numbers[0]}`);
  await page.locator(".ph-trash").nth(0).click();
  await page.waitForTimeout(1000);
  await page.locator(".swal-button--confirm").click();
  await page.waitForTimeout(1000);
  const d = await get_number(page);
  console.log(`Sau ${d.numbers[0]}`);
  expect(c.numbers[0] - 1).toBe(d.numbers[0]);
}
async function User_add(page, expect) {
  const gmailAddresses = ["hoangoisan@gmail.com"];
  for (let i = 0; i < gmailAddresses.length; i++) {
    await goto(page, "user");
    const a = await get_number(page);
    console.log(`Trước ${a.numbers[0]}`);
    await goto(page, "user/add");
    await page.locator("#first-name").fill(RandomName());
    await page.locator("#last-name").fill(RandomName());
    await page.locator("#kata_name").fill("カナ");
    await page.locator("#email").fill(gmailAddresses[i]);
    await page.locator("input[name=phone]").fill(RandomNumber(10));
    await page.locator("#tags-tokenfield").fill(RandomName());
    await page.locator("#txt-memo").fill(RandomName());
    await page.locator(".btn-warning").click();
    await page.waitForTimeout(1000);
    await page.locator(".swal-button--confirm").click();
    await page.waitForTimeout(3000);
    await page.locator(".swal-button--confirm").click();
    await page.waitForTimeout(3000);
    const b = await get_number(page);
    console.log(`Sau ${b.numbers[0]}`);
    expect(a.numbers[0] + 1).toBe(b.numbers[0]);
  }
}
async function User_delete(page, expect) {
  await goto(page, "user");
  const a = await get_number(page);
  console.log(`Trước ${a.numbers[0]}`);
  await page.locator(".ph-trash").nth(0).click();
  await page.waitForTimeout(1000);
  await page.locator(".swal-button--confirm").click();
  await page.waitForTimeout(1000);
  const b = await get_number(page);
  console.log(`Sau ${b.numbers[0]}`);
  expect(a.numbers[0] - 1).toBe(b.numbers[0]);
  await goto(page, "user/deleted");
  const c = await get_number(page);
  console.log(`Trước ${c.numbers[0]}`);
  await page.locator(".ph-trash").nth(0).click();
  await page.waitForTimeout(1000);
  await page.locator(".swal-button--confirm").click();
  await page.waitForTimeout(1000);
  const d = await get_number(page);
  console.log(`Sau ${d.numbers[0]}`);
  expect(c.numbers[0] - 1).toBe(d.numbers[0]);
}
async function mail_account(page, mail, pass, folder) {
  await goto(page, "mail-account/add");
  await page.locator('//input[@name="host"]').fill("pop.gmail.com");
  await page.locator('//input[@name="port"]').fill("995");
  await page.locator("#email").fill(mail);
  await page.locator('//input[@name="password"]').fill(pass);
  await page.locator('//select[@name="mode"]').selectOption({ index: 0 });
  await page.locator('//select[@name="ssl"]').selectOption({ index: 1 });
  await page.locator('//input[@name="folder"]').fill(folder);
  await page.waitForTimeout(5000);
  await page.locator("#btn_test_conn").click();
  await page.waitForTimeout(5000);
  await page.locator(".btn-link").nth(2).click();
  await page.locator('//button[@type="submit"]').click();
  await page.waitForTimeout(5000);
}

async function deleted_direct_project(page) {
  await goto(page, "project-group");
  await deleted_group(page);
}
async function bp_sale_add(page) {
  await goto(page, "bp-sale/add");
  await textbox(page);
  await select(page, 1);
  await page.locator('//input[@name="phone_view"]').fill(RandomNumber(10));
  await page.locator("#bp_id").clear();
  await page.locator("#bp_id").click();
  await page.locator("#bp_id").fill("hoaiditest");
  await page.waitForTimeout(1000);
  await page.locator("#bp_id").press("ArrowDown");
  await page.waitForTimeout(1000);
  await page.locator("#bp_id").press("Enter");
  await page.waitForTimeout(1000);
  await page.locator("#is_mail_common").click();
  await page.locator("#status").nth(1).selectOption({ index: 0 });
  await page.locator('//button[@type="submit"]').click();
}
async function staff_call(page) {
  await goto(page, "message-history-group");
  await page.locator(".fa-phone").nth(1).click();

  const page1Promise = page.waitForEvent("popup");
  const page1 = await page1Promise;
  await page1.setViewportSize({ width: 1920, height: 1080 });
  await page.close();
  await page1.waitForTimeout(10000);
  await page1.locator('//*[contains(text(), "hoaiditest")]').click();
  await page1.waitForTimeout(5000);
  await page1.locator(".btn-start-call").click();
}
async function staff_listen(page) {
  await page.reload();
  await page.waitForTimeout(10000);
  await page.locator(".btn-answer-call").click();
  await page.waitForTimeout(6000);
}
async function staff_cancel(page) {
  await page.waitForTimeout(1000);
  await page.locator(".btn-stop-call").nth(1).click();
  await page.waitForTimeout(3000);
  await page.locator(".btn-stop-call").nth(0).click();
}
async function login_2_browser(page) {
  const browser1 = await chromium.launch();
  const context1 = await browser1.newContext();
  const page1 = await context1.newPage();
  await login(page1);
  await page.locator(".logo-light-mode").click();
  await page.waitForTimeout(3000);
  await page.locator("//img").click();
  await page.waitForTimeout(10000);
  await page1.waitForTimeout(10000);
}
async function interaction_fillMail_file(page) {
  const mail_interaction = ["hoaiditest", "hoaiditest1", "hoaiditest2"];
  for (let i = 0; i < mail_interaction.length; i++) {
    await page
      .locator("#email_to-tokenfield")
      .fill(`${mail_interaction[i]}@gmail.com`);
    await page.keyboard.press("Tab");
    /*await page
      .locator("#email_cc-tokenfield")
      .fill(`${mail_interaction[i]}@gmail.com`);
    await page.keyboard.press("Tab");*/
  }
  await page.waitForTimeout(1000);
  const fileChooserPromise = page.waitForEvent("filechooser");
  await page.locator('//label[@for="upload-file"]').click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles([
    "file/file_new/自社案件情報(1).pdf",
    "file/file_new/自社案件情報(1).xlsx",
    "file/file_new/自社案件情報(2).pdf",
    "file/file_new/自社案件情報(2).xlsx",
    "file/file_new/自社案件情報(3).pdf",
    "file/file_new/自社案件情報(3).xlsx",
    "file/file_new/自社案件情報(4).xlsx",
    "file/file_new/自社要員情報(1).pdf",
    "file/file_new/自社要員情報(1).xlsx",
    "file/file_new/自社要員情報(2).pdf",
    "file/file_new/自社要員情報(2).xlsx",
    "file/file_new/自社要員情報(3).pdf",
    "file/file_new/自社要員情報(3).xlsx",
    "file/file_new/自社要員情報(4).xlsx",
  ]);
  await page.waitForTimeout(10000);
}
async function interaction_sent(page) {
  await page.locator(".btn_confirm").click();
  await page.waitForTimeout(5000);
  await page.locator(".btn_send").click();
  await page.waitForTimeout(3000);
  await page.locator(".swal-button--confirm").click();
  await page.waitForTimeout(3000);
  await page.locator(".swal-button--confirm").click();
  await page.waitForTimeout(3000);
}
async function template_selectOption(page) {
  const temp_interaction = [
    "subject",
    "body_self",
    "body_maku",
    "body_details",
    "body_bottom",
    "body_signature",
  ];
  for (let i = 0; i < temp_interaction.length; i++) {
    try {
      await page
        .locator(`#${temp_interaction[i]}`)
        .nth(0)
        .selectOption({ index: 1 }, { timeout: 1000 });
    } catch (error) {
      try {
        await page
          .locator(`#${temp_interaction[i]}`)
          .nth(1)
          .selectOption({ index: 1 }, { timeout: 1000 });
      } catch (error) {}
    }
  }
}
async function add_project_self(page) {
  await goto(page, "project-self/add");
  await page.waitForTimeout(3000);
  const inputElements = await page.$$("#adminForm input,textarea");
  await console.log(inputElements.length);
  for (let i = 0; i < inputElements.length; i++) {
    try {
      await inputElements[i].click({ timeout: 1000 });
      await page.waitForTimeout(1000);
      await inputElements[i].fill(RandomString(10), { timeout: 1000 });
    } catch (error) {}
  }
  await select(page, 2);
  await page.locator("#slot_to").selectOption({ index: 3 });
  await page.locator("#range_upper").selectOption({ index: 5 });
  const combobox = await page.locator('//span[@role="combobox"]').all();
  for (let a = 0; a < combobox.length; a++) {
    await combobox[a].click();
    await page.waitForTimeout(1000);
    // await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(1000);
    // await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(1000);
    await page.keyboard.press("Enter");
  }
  await page.locator('//span[@role="combobox"]').nth(1).click();
  await page.waitForTimeout(1000);
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(1000);
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(1000);
  await page.keyboard.press("Enter");
  await page.locator("#btn_add_pr").click();
  await console.log("add_project_self thành công và đợi 10 giây ");
  await page.waitForTimeout(10000);
}
async function ver2_add_project_self(page) {
  await goto(page, "project-self/add");
  await page
    .locator('input[name="name"]')
    .fill("Project Name " + RandomName() + RandomNumber(3));
  await page
    .locator('textarea[name="content"]')
    .fill("Content " + RandomName() + RandomNumber(3));
  await page.locator(".btn-select-skills").click();
  await page.locator("#skill-83").click();
  await page.locator("#skill-85").click();
  await page.locator("#skill-108").click();
  await page.locator("#skill-16").click();
  await page.locator(".choose-skills").click();
  await page
    .locator("#preferable")
    .fill("Ưu tiên 尚可" + RandomName() + RandomNumber(3));
  await page
    .locator("#supplement_work_style")
    .fill("Work style " + RandomName() + RandomNumber(3));
  await page.locator("#range_of_price").click();
  await page.locator("#settlement_range").click();
  await page
    .locator("#memo_title-1")
    .fill("Memo " + RandomName() + RandomNumber(3));
  await page
    .locator("#memo_content-1")
    .fill("Memo " + RandomName() + RandomNumber(3));
  await page.locator("#public").click();
  // await page.locator("#shared").click();
  await page
    .locator('input[name="tags"]')
    .first()
    .fill("TagDi " + RandomName() + RandomNumber(3));
  await page.waitForTimeout(1000);
  await page.locator('input[name="tags"]').first().press("Enter");
  await select(page, 3);
  await page.locator("#slot_to").selectOption({ index: 10 });
  await page.locator("#range_upper").selectOption({ index: 10 });
  await page.locator("#btn_add_pr").click();
  await page.waitForTimeout(5000);
}

async function direct_project_self(page) {
  await goto(page, "project-group/add-self");
  await add_group(page, `${formattedDate} direct_project_self`);
}
async function direct_project(page) {
  await goto(page, "project-group/add");
  await page.locator('//label[@for="14_day"]').click({ timeout: 3000 });
  await page.locator("#btn_search").click();
  await add_group(page, `${formattedDate} direct_project`);
}
const { chromium, firefox, webkit } = require("playwright");
async function content_mail() {
  const browser = await chromium.launch();
  const context2 = await browser.newContext();
  const page2 = await context2.newPage();
  await login(page2, Product_tung);
  await page2.goto("https://customer.engibase.com/personnel");
  await page2.locator(".ph-info").nth(0).click();
  const pagePersonnel = page2.waitForEvent("popup");
  const pageper = await pagePersonnel;
  await pageper.setViewportSize({ width: 1920, height: 1080 });
  await pageper.waitForTimeout(5000);
  let personnel_contentmail = await pageper
    .frameLocator("#ifrm_e_content")
    .locator(".panel")
    .textContent();
  await pageper.waitForTimeout(5000);
  // console.log(personnel_contentmail);
  //
  await page2.goto("https://customer.engibase.com/project");
  await page2.locator(".fa-info-circle").nth(0).click();
  const pageProject = page2.waitForEvent("popup");
  const pageproject = await pageProject;
  await pageproject.setViewportSize({ width: 1920, height: 1080 });
  await pageproject.waitForTimeout(5000);
  let project_contentmail = await pageproject
    .frameLocator("#ifrm_e_content")
    .locator(".panel")
    .textContent();
  await pageproject.waitForTimeout(5000);
  // console.log(project_contentmail);
  return { personnel_contentmail, project_contentmail };
}
async function material_add(type) {
  const browser = await chromium.launch({
    headless: false,
    executablePath:
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await login_all(
    page,
    "https://teacher.test.engibase.com/materials/add-title",
    "hoaiditest@gmail.com",
    "Duywasd123"
  );
  await page.locator("#m_title").fill(RandomString(10));
  if (type == "youtube") {
    await page.locator("#type").selectOption({ index: 1 });
  }
  await page.locator("#btn_next_page").click();
  await page.locator(".btn-materials").first().click();
  await page.locator("#newCateName").fill(RandomString(10));
  await page.locator("#addCategory h5").click();
  await page.locator("#btn_add_category").click();
  await page.locator(".btn-materials").nth(1).click();
  await page.locator("#page_title").fill(RandomString(10));
  await page.locator("#select2-chapter_id-container").click();
  await page.waitForTimeout(1000);
  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(1000);
  await page.keyboard.press("Enter");
  if (type == "youtube") {
    await page
      .locator("#youtube_html_tag")
      .fill(
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/DOarY7sSum0?si=y2g08PnV4w0AME6b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
      );
    await page.waitForTimeout(2000);
    await page.locator("#btn_add_doc_page").click();
  } else {
    const fileChooserPromise = page.waitForEvent("filechooser");
    await page.locator(".ph-upload-simple").click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles("file/video_7.mp4");
  }
  await page.waitForTimeout(2000);
  await page.locator("#btn_add_doc_page").click();
  await page.waitForTimeout(2000);
  await page.locator("#btn_next_step_1").click();
  await select(page, 1);
  await page
    .locator("#thumb-image")
    .setInputFiles("./tests/DragonTiger/hinh1.jpg");
  await page
    .locator("#bg-image")
    .setInputFiles("./tests/DragonTiger/hinh2.jpg");
  await page.locator("#btn_next_step").click();
  await page.waitForTimeout(2000);
  await page.locator("#mt_details").fill(RandomString(100));
  await page.locator("#btn_next_detail").click();
  await page.waitForTimeout(2000);
  await page.locator(".apply-btn").click();
  await page.waitForTimeout(5000);
}
async function check_test_add(page) {
  await login_all(
    page,
    "https://manager.test.engibase.com/examination/add",
    "nesv025@gmail.com",
    "Duywasd123"
  );
  await page.locator(".form-control").nth(0).selectOption({ index: 1 });
  await page.locator("#title").fill(RandomString(10));
  await page.locator("#btn_next_page").click();
  await page.locator(".review-content-select").selectOption({ index: 1 });
  await page.locator("#content-selection").click();
  for (let i = 0; i < 5; i++) {
    await page.frameLocator("#load_content").locator("td input").nth(i).click();
  }
  await page.frameLocator("#load_content").locator("#btn-select-data").click();
  await textbox(page);
  await page.waitForTimeout(3000);
  await page.locator(".content-inner .bg-success").click();
  await textbox(page);
  await page.locator(".selection>span").nth(0).click();
  await page.waitForTimeout(3000);
  await page.keyboard.press("Enter");
  await page.locator(".selection>span").nth(2).click();
  await page.waitForTimeout(3000);
  await page.keyboard.press("Enter");
  await page.locator(".btn_draft").click();
  await page.locator(".button-release").click();
  for (let i = 0; i < 3; i++) {
    await page.locator(".status-btn").nth(i).click();
    await page.locator(".swal-button--confirm").click();
  }
}
async function chatgpt_create_content() {
  const browser = await chromium.launch({
    headless: false,
    args: ["--disable-blink-features=AutomationControlled"],
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://chatgpt.com/auth/login");
  await page.locator('button[data-testid="login-button"]').click();
  await page.locator("#email-input").fill("hoaiditest1@gmail.com");
  await page.locator(".continue-btn").click();
  await page.locator("#password").fill("Duywasd123");
  await page.locator('button[type="submit"]').nth(0).click();
  await page.waitForTimeout(5000);
  try {
    await page.locator('button[type="submit"]').click({ timeout: 5000 });
    const browser2 = await chromium.launch({
      headless: false,
      args: ["--disable-blink-features=AutomationControlled"],
    });
    const context2 = await browser2.newContext();
    const page2 = await context2.newPage();
    await page2.goto("https://mail.google.com/mail/u/0/#inbox");
    await page2.locator("//input[@type='email']").fill("hoaiditest1@gmail.com");
    await page2.keyboard.press("Enter");
    await page2.locator("//input[@type='password']").fill("Duywasd123");
    await page2.keyboard.press("Enter");
    await page2.locator('span[name="ChatGPT"]').nth(1).click();
    const code = await page2.locator("td>h1").textContent();
    await page2.locator('img[role="menu"]').click();
    await page2.waitForTimeout(3000);
    await page2
      .locator('div[role="main"] div[role="menuitem"]:nth-child(7)')
      .click();
    await page2.waitForTimeout(3000);
    await browser2.close();
    await page.locator("input").fill(code);
    await page.locator('button[type="submit"]').click();
    await page.waitForTimeout(5000);
  } catch (error) {
    console.log("không cần lấy mã xác thực trong gmail");
  }
  await page.waitForTimeout(5000);
  await page.goto(
    "https://chatgpt.com/share/677602ce-3bf0-8002-ae9a-fcbb785f0182"
  );
  await page.waitForTimeout(5000);
  await page
    .locator("#prompt-textarea")
    .fill("Hãy gửi cho tôi email giới thiệu nhân sự");
  await page.locator('//button[@data-testid="send-button"]').click();
  await page.waitForTimeout(30000);
  const article_per = await page.$$("article");
  await console.log(`Số lượng thẻ: ${article_per.length}`);
  const per_text = await page
    .locator("article")
    .nth(article_per.length - 1)
    .innerText();
  const per_titleMatch = per_text.match(/Tiêu đề:\s*(.+)/);
  const per_contentMatch = per_text.match(/Nội dung:\n([\s\S]+)/);
  const per_title = per_titleMatch
    ? per_titleMatch[1].trim()
    : "Không tìm thấy Tiêu đề";
  const per_content = per_contentMatch
    ? per_contentMatch[1].trim()
    : "Không tìm thấy Nội dung";
  //
  await page
    .locator("#prompt-textarea")
    .fill("Hãy gửi cho tôi email giới thiệu dự án");
  await page.locator('//button[@data-testid="send-button"]').click();
  await page.waitForTimeout(60000);
  const article_project = await page.$$("article");
  await console.log(`Số lượng thẻ: ${article_project.length}`);
  const project_text = await page
    .locator("article")
    .nth(article_project.length - 1)
    .innerText();
  const project_titleMatch = project_text.match(/Tiêu đề:\s*(.+)/);
  const project_contentMatch = project_text.match(/Nội dung:\n([\s\S]+)/);
  const project_title = project_titleMatch
    ? project_titleMatch[1].trim()
    : "Không tìm thấy Tiêu đề";
  const project_content = project_contentMatch
    ? project_contentMatch[1].trim()
    : "Không tìm thấy Nội dung";
  await browser.close();
  return {
    per_title,
    per_content,
    project_title,
    project_content,
  };
}
async function chatgpt_create_content2() {
  const browser = await chromium.launch({
    headless: false,
    args: ["--disable-blink-features=AutomationControlled"],
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://chatgpt.com/auth/login");
  await page.locator('button[data-testid="login-button"]').click();
  try {
    await page
      .locator("//input[@type='email']")
      .fill("hoaiditest1@gmail.com", { timeout: 10000 });
  } catch (error) {
    await page
      .locator("#email-input")
      .fill("hoaiditest1@gmail.com", { timeout: 10000 });
  }
  try {
    await page
      .locator('//*[text()="Continue"]')
      .nth(0)
      .click({ timeout: 10000 });
  } catch (error) {
    await page.locator(".continue-btn").click({ timeout: 10000 });
  }
  try {
    await page
      .locator("//input[@type='password']")
      .fill("Duywasd123", { timeout: 90000 });
  } catch (error) {
    await page.locator("#password").fill("Duywasd123", { timeout: 10000 });
  }
  try {
    await page
      .locator('//*[text()="Continue"]')
      .nth(0)
      .click({ timeout: 10000 });
  } catch (error) {
    await page
      .locator('button[type="submit"]')
      .nth(0)
      .click({ timeout: 10000 });
  }
  await page.waitForTimeout(20000);
  await page.goto(
    "https://chatgpt.com/share/677602ce-3bf0-8002-ae9a-fcbb785f0182"
  );
  await page.waitForTimeout(5000);
  async function create_sent(type, i) {
    await page
      .locator("#prompt-textarea")
      .fill("Hãy gửi cho tôi email giới thiệu " + type);
    await page.locator('//button[@data-testid="send-button"]').click();
    await page.waitForTimeout(50000);
    /*if (type == "nhân sự" && i == 0) {
      await page.waitForTimeout(3000);
      await page
        .locator("#prompt-textarea")
        .fill("Hãy gửi cho tôi email giới thiệu " + type);
      await page.locator('//button[@data-testid="send-button"]').click();
    }
    await page.waitForTimeout(50000);*/
    const article = await page.$$("article");
    // await console.log(`Số lượng thẻ: ${article.length}`);
    const text = await page
      .locator("article")
      .nth(article.length - 1)
      .innerText();
    const titleMatch = text.match(/Tiêu đề:\s*(.+)/);
    const contentMatch = text.match(/Nội dung:\n([\s\S]+)/);
    const title = titleMatch ? titleMatch[1].trim() : "Không tìm thấy Tiêu đề";
    const content = contentMatch
      ? contentMatch[1].trim()
      : "Không tìm thấy Nội dung";
    const mail_have = "dimot111111@gmail.com";
    if (type == "nhân sự") {
      const infor_per = await mail_infor(content);
      const infor = infor_per.name_per + RandomNumber(3);
      await create_fileExcel(infor);
      await sentmail_file(`${title}`, `${content}`, `${infor}.xlsx`, mail_have);
    } else {
      const infor_project = await mail_infor(content);
      const infor = infor_project.name_project + RandomNumber(3);
      await create_fileExcel(infor);
      await sentmail_file(`${title}`, `${content}`, `${infor}.xlsx`, mail_have);
    }
  }
  for (let i = 0; i < 2; i++) {
    await create_sent("nhân sự", i);
    await create_sent("dự án", i);
  }
}
async function gemini() {
  /*const browser = await chromium.launch({
    headless: false,
    channel: "chrome",
    slowMo: 100,
  });*/
  const browser = await chromium.launch({
    headless: false,
    args: ["--disable-blink-features=AutomationControlled"],
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://gemini.google.com/app?hl=vi");
  await page.waitForTimeout(5000);
  let personnel = fs.readFileSync("personnel.txt", "utf-8");
  let project = fs.readFileSync("project.txt", "utf-8");
  async function create_sent(type) {
    await page.locator("rich-textarea p").fill(`${type}`);
    await page.locator(".send-button-icon").click();
    await page.waitForTimeout(20000);
    const number = await page.$$("message-content");
    const text = await page
      .locator("message-content")
      .nth(number.length - 1)
      .innerText();
    const titleMatch = text.match(/件名\s*(.+)/);
    const title = titleMatch ? titleMatch[1].trim() : "Không tìm thấy tiêu đề";
    const content =
      text.split(/件名.*\n/)[1]?.trim() || "Không tìm thấy nội dung";
    const mail_have = "dimot111111@gmail.com";
    if (type == `${personnel}`) {
      const infor_per = await mail_infor2(content);
      const infor = infor_per.name_per + RandomNumber(3);
      await create_fileExcel(`${infor}`);
      await sentmail_file(
        `${title + RandomNumber(3)}`,
        `${content}`,
        `${infor}.xlsx`,
        mail_have
      );
    } else {
      const infor_project = await mail_infor2(content);
      const infor = infor_project.name_project + RandomNumber(3);
      await create_fileExcel(`${infor}`);
      await sentmail_file(
        `${title + RandomNumber(3)}`,
        `${content}`,
        `${infor}.xlsx`,
        mail_have
      );
    }
  }
  for (let i = 0; i < 4; i++) {
    await create_sent(`${personnel}`);
    await create_sent(`${project}`);
  }
}
async function fun_sent_data() {
  const chatgpt_contentmail = await chatgpt_create_content();
  //Env : Product
  await file_product_per_project(
    chatgpt_contentmail.per_title,
    chatgpt_contentmail.per_content,
    chatgpt_contentmail.project_title,
    chatgpt_contentmail.project_content
  );
  //
  /*await personnel_product_025(
    chatgpt_contentmail.per_title,
    chatgpt_contentmail.per_content
  );
  await project_product_025(
    chatgpt_contentmail.project_title,
    chatgpt_contentmail.project_content
  );*/
  //Env : Test
  /*const chatgpt_contentmail_test = await chatgpt_create_content();
  await file_test_per_project(
    chatgpt_contentmail_test.per_title,
    chatgpt_contentmail_test.per_content,
    chatgpt_contentmail_test.project_title,
    chatgpt_contentmail_test.project_content
  );*/
  //
  /*await personnel_envtest_025(
    chatgpt_contentmail_test.per_title,
    chatgpt_contentmail_test.per_content
  );
  await project_envtest_025(
    chatgpt_contentmail_test.project_title,
    chatgpt_contentmail_test.project_content
  );*/

  // await personnel_product_hoangoisan(data.personnel_contentmail);
  // await project_product_hoangoisan(data.project_contentmail);
}
async function run_all(page, expect) {
  /*Test Case*/
  {
    await direct_mail_ver2(page, expect);
    for (let i = 0; i < 4; i++) {
      await deleted_direct_mail(page, expect);
    }

    await direct_personnel(page, expect);
    await deleted_direct_personnel(page, expect);

    await direct_personnel_self(page, expect);
    await deleted_direct_personnel(page, expect);

    await direct_project(page);
    await deleted_direct_project(page, expect);

    await direct_project_self(page);
    await deleted_direct_project(page, expect);

    await AdminUser_add(page, expect);
    await AdminUser_delete(page, expect);

    await User_add(page, expect);
    await User_delete(page, expect);

    await add_bp(page, expect);
    await delete_bp_sale(page, expect);
    await delete_bp(page, expect);

    await add_personnel_proposal(page);
    await add_personnel_self_proposal(page);
    /* await mail_account(page); */

    await bp_sale_add(page);
    await click_menu(page);
    await staff_call(page);
    // await login_2_browser(page);
  }
  /*
  visitor
  freelance
  */
}
async function fun_sentMail_daily(page, expect) {
  // await chatgpt_create_content2();
  await gemini();
  await ver2_add_personnel_self(page);
  await add_skill_sheet(page);
  await ver2_add_project_self(page);

  await direct_personnel_self(page);
  await direct_personnel(page);
  await direct_project(page);
  await direct_project_self(page);

  await direct_mail_ver2(page, expect);
  const web = await fun_sent_mail(page);
  await check_file(
    web.sent0,
    web.sent1,
    web.sent2,
    web.sent3,
    web.sent4,
    web.sent5,
    web.sent6,
    web.sent7,
    web.sent8,
    web.sent9
  );
}
async function fun_sent_mail(page, expect) {
  const infor0 = await sent_mail_self(page);
  await check_sent_mail_detail(page, expect, infor0.mail_sent);
  const infor1 = await sent_mail(page);
  await check_sent_mail_detail(page, expect, infor1.mail_sent);
  const infor2 = await sent_mail_project_self(page);
  await check_sent_mail_detail(page, expect, infor2.mail_sent);
  const infor3 = await sent_mail_project(page);
  await check_sent_mail_detail(page, expect, infor3.mail_sent);

  /*outbox*/
  const infor4 = await outbox(
    page,
    "sent-mail/sent",
    "sent-mail/outbox",
    "outbox_sent_mail"
  );
  const infor5 = await outbox(
    page,
    "sent-mail/sent-self",
    "sent-mail/outbox-self",
    "outbox_sent_mail_self"
  );
  /*sent_mail_individual*/
  const infor6 = await sent_personnel_individual_self(page);
  const infor7 = await sent_personnel_individual(page);
  const infor8 = await sent_project_individual_self(page);
  const infor9 = await sent_project_individual(page);
  const sent0 = infor0.file;
  const sent1 = infor1.file;
  const sent2 = infor2.file;
  const sent3 = infor3.file;
  const sent4 = infor4.file;
  const sent5 = infor5.file;
  const sent6 = infor6.file;
  const sent7 = infor7.file;
  const sent8 = infor8.file;
  const sent9 = infor9.file;
  /*interaction*/
  await sent_mail_interaction(page);
  await sent_mail_interaction_template(page);
  await outbox_interaction(page);
  // await reply_interaction(page);
  return {
    sent0,
    sent1,
    sent2,
    sent3,
    sent4,
    sent5,
    sent6,
    sent7,
    sent8,
    sent9,
  };
}
async function check_file(
  web0,
  web1,
  web2,
  web3,
  web4,
  web5,
  web6,
  web7,
  web8,
  web9
) {
  const sent1 = [web0, web1, web2, web3, web4, web5];
  const sent2 = [web6, web7, web8, web9];
  const arrayfile1 = await check_mail_file(mail, type);
  const arrayfile2 = await check_mail_file(mail_individual, type_individual);
  let array1 = arrayfile1.file;
  let array2 = arrayfile2.file;
  /*let array1 = [
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ];
  let array2 = [[1, 1, 1, 1]];*/

  console.log("file web sent: ", sent1);
  console.log("file web sent_individual: ", sent2);
  console.log("file mail have: ", array1);
  console.log("file mail have individual: ", array2);

  const labels = [
    "hoaiditest",
    "hoaiditest1",
    "hoaiditest2",
    "hoangoisan",
    "hoangoisan2",
    "trungsantrungsan",
    "di1999test",
  ];

  const differences1 = [
    "sent_mail_self",
    "sent_mail",
    "sent_mail_project_self",
    "sent_mail_project",
    "outbox_sent_mail",
    "outbox_sent_mail_self",
  ];
  const differences2 = [
    "sent_personnel_individual_self",
    "sent_personnel_individual",
    "sent_project_individual_self",
    "sent_project_individual",
  ];
  let mails = [];
  mails.push(
    "mail2 : " +
      differences2 +
      "\n sent2 : " +
      sent2 +
      "\n have2 :  " +
      array2 +
      "\n \n mail1 : " +
      differences1 +
      "\n sent1 : " +
      sent1 +
      "\n have1 : " +
      array1[0] +
      "\n all_have1 : " +
      array1 +
      "\n \n"
  );
  await file(array1, sent1, differences1);
  await file(array2, sent2, differences2);
  async function file(arrays, sent, differences) {
    arrays.forEach((arr, index) => {
      let isDifferent = false;
      let diffMessages = [];

      arr.forEach((num, i) => {
        if (num !== sent[i]) {
          diffMessages.push(differences[i]);
          isDifferent = true;
        }
      });
      if (isDifferent) {
        let a =
          `${labels[index]} ` + "\n" + `${diffMessages.join(", ")} ` + "\n";
        console.log(a);
        mails.push(a, "\n");
      }
    });
  }
  if (mails.length > 0) {
    await sentmail_error(
      null,
      `Sent Mail : Thiếu hoặc không có file ${RandomNumber(3)}`,
      `${mails}`
    );
  }
}
async function run_fun(page, expect) {
  try {
    // await ver2_add_personnel_self(page, expect);
    // await add_skill_sheet(page, expect);
    // await direct_personnel_self(page, expect);
    // await sent_mail_self(page, expect);
    await click_menu(page, expect);
  } catch (error) {
    console.log(error);
    await sentmail_error(page, `${error}`, `${error}`);
  }
}
async function Check_Warning(page, expect) {
  await page.goto("https://manager.test.engibase.com/mail-account");
  // Kiểm tra xem phần tử với class 'btn-warning' có hiển thị hay không
  const btnWarning = await page.$(".btn-warning");
  if (btnWarning) {
    const isVisible = await btnWarning.isVisible();
    if (isVisible) {
      console.log("Nút cảnh báo đang hiển thị, sẽ nhấn nút Reset.");

      // Nhấn nút reset - giả sử nó có text "Reset" hoặc id/class riêng
      await page.locator("#breadcrumb_elements a").nth(0).click();
    } else {
      console.log("Nút cảnh báo tồn tại nhưng không hiển thị.");
    }
  } else {
    console.log("Không tìm thấy phần tử có class btn-warning.");
  }
}
async function Check_lastFetch(page, expect) {
  await page.goto("https://manager.test.engibase.com/mail-account");
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForTimeout(1000);
  // Tìm dòng chứa cả email và ID chính xác
  const rowLocator = page
    .locator("table tbody tr", {
      has: page.locator("td", { hasText: "request01@learningift.com" }),
    })
    .filter({
      has: page.locator("td", { hasText: "bqHaudvfa9Yk2rNpXd9" }),
    });

  // Tìm cột "Last fetch at" trong hàng đó (cột thứ 4 - đếm từ 1)
  const lastFetchText = await rowLocator.locator("td").nth(3).innerText();

  // Tách dòng chứa "Last fetch:" (nếu cần tách riêng)
  const lastFetchLine = lastFetchText
    .split("\n")
    .find((line) => line.includes("Last fetch:"));
  // Tách thời gian dạng chuỗi
  const lastFetchTimeStr = lastFetchLine.replace("Last fetch: ", "").trim();

  const lastFetchTime = dayjs(lastFetchTimeStr);

  // Lấy thời gian hiện tại theo múi giờ Nhật Bản (Asia/Tokyo)
  const nowJapanStr = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });
  const nowJapan = dayjs(nowJapanStr);

  const diffMinutes = nowJapan.diff(lastFetchTime, "minute");

  if (diffMinutes >= 0 && diffMinutes < 5) {
    // if (diffMinutes < 0) {
    console.log("🟢 Last fetch CÁCH thời gian hiện tại (Nhật Bản) dưới 5 phút");
    console.log("Last fetch: ", lastFetchTime.format("YYYY-MM-DD HH:mm:ss"));
    console.log("Japan now: ", nowJapan.format("YYYY-MM-DD HH:mm:ss"));
    console.log("Chênh lệch: ", diffMinutes, "phút");
  } else {
    console.log("⚠️ Last fetch KHÔNG nằm trong khoảng 5 phút");
    console.log("Last fetch: ", lastFetchTime.format("YYYY-MM-DD HH:mm:ss"));
    console.log("Japan now: ", nowJapan.format("YYYY-MM-DD HH:mm:ss"));
    console.log("Chênh lệch: ", diffMinutes, "phút");
    console.log("Đã nhấn nút キャッシュ削除");
    await page.locator("#breadcrumb_elements a").nth(0).click();
    await page.waitForTimeout(5000);
    await sentmail_error(
      page,
      `⚠️ ${new Date().toLocaleString()} Last fetch Chênh lệch: ${diffMinutes} phút ⚠️`,
      `${new Date().toLocaleString()} Last fetch Chênh lệch: ${diffMinutes} phút
Last fetch: ${lastFetchTime.format("YYYY-MM-DD HH:mm:ss")}
Japan now: ${nowJapan.format("YYYY-MM-DD HH:mm:ss")} 
Đã nhấn nút キャッシュ削除 
https://manager.test.engibase.com/mail-account `
    );
  }
}
async function FileUpload(page) {
  const timeout = 240000;
  const startTime = Date.now();
  while (Date.now() - startTime < timeout) {
    try {
      if (
        (await page.locator("#box-attachment span:nth-child(1)").count()) < 14
      ) {
        // console.log("Chưa thấy File, Upload lại...");
        await page.locator("#box-attachment").click();
        const fileChooserPromise = page.waitForEvent("filechooser");
        await page.locator("#upload-file").click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles([
          "file/file_new/自社案件情報(1).pdf",
          "file/file_new/自社案件情報(1).xlsx",
          "file/file_new/自社案件情報(2).pdf",
          "file/file_new/自社案件情報(2).xlsx",
          "file/file_new/自社案件情報(3).pdf",
          "file/file_new/自社案件情報(3).xlsx",
          "file/file_new/自社案件情報(4).xlsx",
          "file/file_new/自社要員情報(1).pdf",
          "file/file_new/自社要員情報(1).xlsx",
          "file/file_new/自社要員情報(2).pdf",
          "file/file_new/自社要員情報(2).xlsx",
          "file/file_new/自社要員情報(3).pdf",
          "file/file_new/自社要員情報(3).xlsx",
          "file/file_new/自社要員情報(4).xlsx",
        ]);
        await page.waitForTimeout(20000);
      } else {
        break;
      }
    } catch (e) {
      console.log(`${e} Bug and Retry FileUpload...`);
      await page.waitForTimeout(3000);
    }
  }
  if ((await page.locator("#box-attachment span:nth-child(1)").count()) < 14) {
    throw new Error(` BUG FileUpload`);
  }
}
async function groupPer_Pro(page) {
  await page.waitForTimeout(3000);
  const timeout = 120000;
  const startTime = Date.now();
  let isVisible_Per = false;
  let isVisible_Pro = false;
  while (Date.now() - startTime < timeout) {
    try {
      isVisible_Per = await page.isVisible("#personnel_info_2");
      isVisible_Pro = await page.isVisible("#project_info_2");
      if (isVisible_Per || isVisible_Pro) {
        break;
      } else {
        // console.log("Chưa thấy Personnel/Project, nhấn lại nút...");
        await page.waitForTimeout(3000);
        await page.locator("#select2-dp_id-container").click();
        await page.waitForTimeout(3000);
        await page.locator("#select2-dp_id-container").press("Enter");
        await page.waitForTimeout(3000);
      }
    } catch (e) {
      console.log(`${e} Bug and Retry groupPer_Pro...`);
      await page.waitForTimeout(3000);
    }
  }
  if (!isVisible_Per && !isVisible_Pro) {
    throw new Error(` BUG groupPer_Pro`);
  }
}
async function fun_click(page, element, nth) {
  await page.waitForTimeout(3000);
  const timeout = 120000;
  const startTime = Date.now();
  let isVisible = false;
  while (Date.now() - startTime < timeout) {
    try {
      isVisible = await page.locator(`${element}`).nth(nth).isVisible();
      if (isVisible) {
        await page.locator(`${element}`).nth(nth).click();
        // console.log(`Click ${element}`);
        break;
      } else {
        console.log(`${element} Retry Click ...`);
        await page.waitForTimeout(3000);
      }
    } catch (e) {
      console.log(`${element} Bug and Retry Click...`);
      await page.waitForTimeout(3000);
    }
  }
  if (!isVisible) {
    console.log(`${element} BUG Click`);
    throw new Error(`${element} BUG Click`);
  }
}
async function Test_add_personnel_self(page, expect) {
  await goto(page, "personnel-self/add");
  await textbox2(page);
  await page.locator("#phone").fill(RandomNumber(10));
  await page
    .locator("#email")
    .fill("email" + RandomName() + RandomNumber(10) + "@gmail.com");
  await page
    .locator("#preferred_project")
    .fill("Hope Case " + RandomName() + RandomNumber(3));
  await page.locator("#note").fill("Note " + RandomName() + RandomNumber(3));
  await page
    .locator('input[name="tags"]')
    .first()
    .fill("TagDi " + RandomName() + RandomNumber(3));
  await page.waitForTimeout(1000);
  await page.locator('input[name="tags"]').first().press("Enter");
  await page.waitForTimeout(5000);
  await page.locator("#btn_update").click();
  for (let i = 0; i < 10; i++) {
    await page.locator("#position-phase-search").click();
    await page.waitForTimeout(1000);
    await page
      .locator(".tt-selectable")
      .nth(Math.floor(Math.random() * 50))
      .click();
  }
  await page.locator(".btn-select-skills").click();
  for (let i = 0; i < 10; i++) {
    await page
      .locator("#tab-言語・サービス input")
      .nth(Math.floor(Math.random() * 244))
      .click();
    await page.waitForTimeout(1000);
  }
  await page.locator(".choose-skills").click();
  await page.waitForTimeout(1000);
  await select2(page);
  await page
    .locator("#min_salary")
    .fill(`${Math.floor(Math.random() * 4) + 1}0000`);
  await page
    .locator("#max_salary")
    .fill(`${Math.floor(Math.random() * (10 - 5 + 1)) + 5}0000`);
  await page
    .locator("#zipcode")
    .fill(`1${Math.floor(Math.random() * 10) + 1}00000`);
  await page.waitForTimeout(1000);
  await page.locator("#zipcode").press("0");
  await page.waitForTimeout(1000);

  await page.waitForTimeout(5000);
}
async function tooltip(page, expect) {
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
      const b = await page.locator(".ph-question").count();
      for (let i = 0; i < b; i++) {
        try {
          await page.locator(".ph-question").nth(i).click({ timeout: 3000 });
          await page.waitForTimeout(3000);
          await page.reload();
          await page.waitForTimeout(3000);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
}
async function check_mail(page, expect) {
  await goto(page, "mail/inbox/12");
  await page.waitForTimeout(1000);
  const time = await page
    .locator("tr:nth-child(1)>td:nth-child(3)")
    .textContent();
  console.log(time);
}
async function sent_mail_introduce(page, number_mail) {
  for (let i = 0; i < number_mail; i++) {
    await goto(page, "proposal-history");
    await page.locator("tr .btn-info").nth(i).click();
    const page1Promise = page.waitForEvent("popup");
    const page1 = await page1Promise;
    await page1.locator(".btn-warning").nth(0).click();
    const page2Promise = page1.waitForEvent("popup");
    const page2 = await page2Promise;
    await page1.close();
    await page2.locator(".waves-effect").nth(0).click();
    await page2.waitForTimeout(3000);
    await page2.locator("#btn_search").click();
    await page2.waitForTimeout(3000);
    await page2.locator(".btn-add-row").nth(0).click();
    await page2.waitForTimeout(3000);
    await page2.locator("#box-result .btn").nth(0).click();
    await page2.waitForTimeout(3000);
    await page2.locator(".token-input").nth(0).fill("nesv025@gmail.com");
    await page2.waitForTimeout(3000);
    await page2.locator(".token-input").nth(0).press("Enter");
    await page2.waitForTimeout(3000);
    await page2.locator(".btn_confirm").click();
    await page2.waitForTimeout(3000);
    await page2.locator(".btn_send").click();
    await page2.waitForTimeout(3000);
    await page2.locator(".swal-button--confirm").click();
    await page2.waitForTimeout(3000);
    await page2.locator(".swal-button--confirm").click();
    await page2.waitForTimeout(5000);
    await page2.close();
  }
}
async function CheckTimeLoadPage(page, url) {
  await page.goto(url);

  const loadTime = await page.evaluate(() => {
    const [entry] = performance.getEntriesByType("navigation");
    return entry ? entry.loadEventEnd - entry.startTime : null;
  });
  if (loadTime > 10000) {
    console.log(
      `Thời gian tải trang: ${loadTime} ms  
URL : ${url}  
Thời gian : ${new Date().toLocaleString()}`
    );
  }
}
async function check_sent_mail_detail(page, expect, mail_sent) {
  let mail_web = [];
  await goto(page, "sent-mail");
  await page.locator(".btn-success>i").nth(0).click();
  const page1Promise = page.waitForEvent("popup");
  const page1 = await page1Promise;
  /*await page1.locator(".dropdown-toggle").first().click();
    await page1.locator("(//a[text()='300'])[1]").click();*/
  const url1 = await page1.url();
  await page1.goto(url1 + "?limit=300");
  await page1.waitForTimeout(3000);
  const number = await page1.$$(".des-email>a");
  for (let y = 0; y < number.length; y++) {
    let mail = await page1.locator(".des-email>a").nth(y).textContent();
    await mail_web.push(mail);
  }
  const url2 = await page1.url();
  // Hàm so sánh hai mảng không quan tâm thứ tự
  function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false; // Kiểm tra số lượng phần tử

    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    // Kiểm tra xem cả hai tập hợp có giống nhau không
    return arr1.every((item) => set2.has(item));
  }

  console.log(areArraysEqual(mail_sent, mail_web), url2);
  await page1.waitForTimeout(3000);
  await page1.close();
}
async function check_sent_mail_detail_2(params) {
  const infor0 = await sent_mail_self(page);
  // console.log(infor0.mail_sent);
  await goto(page, "sent-mail?limit=300");
  for (let i = 0; i < 147; i++) {
    let mail_web = [];
    await page.locator(".btn-success>i").nth(i).click();
    const page1Promise = page.waitForEvent("popup");
    const page1 = await page1Promise;
    const url1 = await page1.url();
    await page1.goto(url1 + "?limit=300");
    await page1.waitForTimeout(1000);
    const number = await page1.$$(".des-email>a");
    for (let y = 0; y < number.length; y++) {
      let mail = await page1.locator(".des-email>a").nth(y).textContent();
      await mail_web.push(mail);
    }
    // console.log(mail_web);
    function difference(arr1, arr2) {
      return arr1.filter((item) => !arr2.includes(item));
    }

    const diff1 = difference(infor0.mail_sent, mail_web);
    const diff2 = difference(mail_web, infor0.mail_sent);
    const url2 = await page1.url();
    console.log("Phần tử khác nhau:", [...diff1, ...diff2], i, url2);
    await page1.close();
  }
}
async function sentmail_errorJP(page, url, content, mail_error) {
  await sentmail_error(
    page,
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
`,
    mail_error
  );
}
async function sentmail_error(page = null, title, content, mail_error) {
  try {
    await page.waitForTimeout(3000);
    await page.screenshot({ path: "screenshot.png" }, { timeout: 10000 });
  } catch (error) {}

  const attachments = [
    {
      filename: "screenshot.png",
      path: "screenshot.png",
    },
  ];

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
    to: ["hoaiditest@gmail.com", `${mail_error}`],
    subject: title,
    text: content,
    attachments,
  });
  console.log("sentmail_error : Done");
}
async function sentmail_file(title, content, file, email) {
  const attachments = [
    {
      filename: file,
      path: `file/auto/${file}`,
      contentType: "text/csv",
    },
  ];
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "didimimi1999dimi@gmail.com",
      pass: "ocgj ibma nphi ivxa",
    },
  });
  await transporter.sendMail({
    to: email,
    subject: title,
    text: content,
    attachments,
  });
}
async function direct_mail_ver2(page, expect) {
  for (let i = 1; i < 5; i++) {
    await goto(page, "direct-mail");
    const a = await get_number(page);
    console.log(`Trước ${a.numbers[0]}`);
    await goto(page, "direct-mail/add");
    await page.locator("#name").fill(formattedDate + " direct_mail" + i);
    await search_bp(page);
    /*for (let i = 0; i < 10; i++) {
      await page.waitForTimeout(1000);
      await page.locator("#checkall").click();
      await page.waitForTimeout(1000);
      await page.locator(".btn-add-all").click();
      await page.waitForTimeout(1000);
      await page.locator("#paginator_next").nth(0).click();
    }*/
    await page.locator("#proposal_type").selectOption({ index: i });
    await page.waitForTimeout(3000);
    await page.locator("#btn_save").click();
    await page.waitForTimeout(3000);
    await goto(page, "direct-mail");
    const b = await get_number(page);
    console.log(`Sau ${b.numbers[0]}`);
    expect(a.numbers[0] + 1).toBe(b.numbers[0]);
  }
}
async function addBp_API() {
  const response = await page.evaluate(async () => {
    const url = "https://company.test.engibase.com/bp/add";
    const headers = {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "en-US",
      "cache-control": "max-age=0",
      "content-type": "application/x-www-form-urlencoded",
      priority: "u=0, i",
      "sec-ch-ua": '"Chromium";v="125", "Not.A/Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
    };

    const options = {
      headers: headers,
      referrer: "https://company.test.engibase.com/bp/add",
      referrerPolicy: "strict-origin-when-cross-origin",
      body:
        "adminAction=&name=hoangoisan2&email=hoangoisan" +
        Math.floor(Math.random() * 10) +
        "" +
        Math.floor(Math.random() * 10) +
        "%40gmail.com&phone=6856376078&contact_name%5Bsur_name%5D=WTB2WdkFHo&contact_name%5Bname%5D=PnxEqsR7GV&zipcode=120-0000&province_name=KrsW20pnCl&address=m8WwXJypep&url=LuX1h5VQRe&first_meet_day=2025%2F01%2F24&first_sale_id=&fixed_sale_id=&responder_id=&ses_business_ratio=20&business_overview%5B%5D=10&business_overview%5B%5D=13&technical_overview%5B%5D=3&technical_overview%5B%5D=4&technical_overview%5B%5D=5&technical_overview%5B%5D=12&skills%5B%5D=nNUmTx5DjC&total_sale=1&total_staff=1&proper_number=0&foundered_year=1704034800&total_business_partner=1&sales_force=17.1&charter_capital=&proper_operation_number=0&proper_ratio=20&freelancer_ratio=20&flow_level=1&project_df_ratio=1_DAY&personnel_df_ratio=HALF_DAY&foreign_nationality=NO&participate_foreign_project=NO&license=NO&dispatch_license=NO&low_skill_ratio=5&project_fn_ratio=5&tags=&tags=xwBeMYZxTx&memo=5b5oa7ErjH&status=1",
      method: "POST",
      mode: "cors",
      credentials: "include",
    };

    const response = await fetch(url, options);
  });

  await response;
}
async function add_adminUser_or_User(page, expect, url) {
  await goto(page, url);
  const a = await get_number(page);
  console.log(`Trước ${a.numbers[0]}`);
  await page.locator(".ph-plus-circle").nth(0).click();
  await textbox(page);
  await page.locator("#kata_name").fill("カナ");
  await page.locator('//*[contains(text(),"保存")]').click();
  await page.waitForTimeout(1000);
  await page.locator(".swal-button--confirm").click();
  await page.waitForTimeout(1000);
  await goto(page, url);
  const b = await get_number(page);
  console.log(`Sau ${b.numbers[0]}`);
  expect(a.numbers[0] + 1).toBe(b.numbers[0]);
  await page.waitForTimeout(1000);
}
async function create_fileExcel(name) {
  const skillSheetData = {
    header: {
      title: "スキルシート",
    },
    personalInfo: {
      name: `${name}`, // Blank
      gender: "", // Blank
      birthdate: "", // Blank
      age: "", // Blank
      experienceYears: "", // Blank
      experienceMonths: "", // Blank
      station: "", // Blank
    },
    skillSummary: {
      skill_overview: "", // Blank
      development_lang: ["", "", ""], // Blank
      year_lang: ["", "", ""], // Blank
      qualification: "", // Blank
      note: "", // Blank
    },
    experienceTable: [
      {
        no: 1,
        period: "年 月\n~\n年 月\n(ヶ月)",
        role: "【チーム】 名\n【全体】 名",
        project: "",
        os: "",
        db: "",
        language: "",
        middleware: "",
        analysis: "",
        requirements: "",
        design_out: "",
        design_in: "",
        dev: "",
        test_unit: "",
        test_connect: "",
        test_sum: "",
        env_build: "",
        operation: "",
        maintainance: "",
        others: "",
        note: "",
      },
      {
        no: 2,
        period: "年 月\n~\n年 月\n(ヶ月)",
        role: "【チーム】 名\n【全体】 名",
        project: "",
        os: "",
        db: "",
        language: "",
        middleware: "",
        analysis: "",
        requirements: "",
        design_out: "",
        design_in: "",
        dev: "",
        test_unit: "",
        test_connect: "",
        test_sum: "",
        env_build: "",
        operation: "",
        maintainance: "",
        others: "",
        note: "",
      },
      {
        no: 3,
        period: "年 月\n~\n年 月\n(ヶ月)",
        role: "【チーム】 名\n【全体】 名",
        project: "",
        os: "",
        db: "",
        language: "",
        middleware: "",
        analysis: "",
        requirements: "",
        design_out: "",
        design_in: "",
        dev: "",
        test_unit: "",
        test_connect: "",
        test_sum: "",
        env_build: "",
        operation: "",
        maintainance: "",
        others: "",
        note: "",
      },
    ],
  };

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Skill Sheet");

  worksheet.getCell("A1").value = skillSheetData.header.title;
  worksheet.getCell("A1").font = { bold: true, size: 16, name: "Arial" };
  worksheet.mergeCells("A1:B1");

  worksheet.getCell("A2").value = "氏名";
  worksheet.getCell("B2").value = skillSheetData.personalInfo.name;

  worksheet.getCell("C2").value = "性別";
  worksheet.getCell("D2").value = skillSheetData.personalInfo.gender;

  worksheet.getCell("E2").value = "生年月日";
  worksheet.getCell("F2").value = skillSheetData.personalInfo.birthdate;

  worksheet.getCell("G2").value = "年齢";
  worksheet.getCell("H2").value = skillSheetData.personalInfo.age + "才";

  worksheet.getCell("I2").value = "経験年数";
  worksheet.getCell("J2").value =
    skillSheetData.personalInfo.experienceYears + "年";
  worksheet.getCell("K2").value =
    skillSheetData.personalInfo.experienceMonths + "ヶ月";

  worksheet.getCell("L2").value = "最寄り駅";
  worksheet.getCell("M2").value = skillSheetData.personalInfo.station;
  worksheet.mergeCells("M2:O2");

  worksheet.getCell("A3").value = "スキル概要:";
  worksheet.getCell("B3").value = skillSheetData.skillSummary.skill_overview;
  worksheet.mergeCells("B3:O3");

  worksheet.getCell("A4").value = "概要";
  worksheet.getCell("B4").value =
    skillSheetData.skillSummary.development_lang[0];
  worksheet.getCell("C4").value = skillSheetData.skillSummary.year_lang[0];

  worksheet.getCell("B5").value =
    skillSheetData.skillSummary.development_lang[1];
  worksheet.getCell("C5").value = skillSheetData.skillSummary.year_lang[1];

  worksheet.getCell("B6").value =
    skillSheetData.skillSummary.development_lang[2];
  worksheet.getCell("C6").value = skillSheetData.skillSummary.year_lang[2];

  worksheet.getCell("A7").value = "資格";
  worksheet.getCell("B7").value = skillSheetData.skillSummary.qualification;
  worksheet.mergeCells("B7:C7");

  worksheet.getCell("F4").value = "開発言語、DB、環境";
  worksheet.mergeCells("F4:I4");
  worksheet.getCell("F4").alignment = { horizontal: "center" };
  worksheet.getCell("J4").value = "備考";
  worksheet.mergeCells("J4:O6");
  worksheet.getCell("J4").alignment = {
    horizontal: "center",
    vertical: "middle",
  };
  worksheet.getCell("J4").value = skillSheetData.skillSummary.note;

  // Add table headers
  const tableHeaders = [
    "No.",
    "期間(月数)",
    "役割\n規模",
    "プロジェクト\n作業概要",
    "OS",
    "DB",
    "言語",
    "ミドルツール\nIDE\nバージョン管理",
    "調査\n分析",
    "要件\n定義",
    "外部\n設計",
    "内部\n設計",
    "開発",
    "単体\nテスト",
    "結合\nテスト",
    "総合\nテスト",
    "環境\n構築",
    "運用\n設計",
    "運用\n保守",
    "その他",
    "備考",
  ];

  tableHeaders.forEach((header, index) => {
    worksheet.getCell(9, index + 1).value = header;
    worksheet.getCell(9, index + 1).alignment = {
      horizontal: "center",
      vertical: "middle",
      wrapText: true,
    };
    worksheet.getCell(9, index + 1).font = {
      bold: true,
      size: 10,
      name: "Arial",
    };
  });

  // Add data rows
  skillSheetData.experienceTable.forEach((row, rowIndex) => {
    const startRow = rowIndex + 10;
    worksheet.getCell(startRow, 1).value = row.no;
    worksheet.getCell(startRow, 2).value = row.period;
    worksheet.getCell(startRow, 3).value = row.role;
    worksheet.getCell(startRow, 4).value = row.project;
    worksheet.getCell(startRow, 5).value = row.os;
    worksheet.getCell(startRow, 6).value = row.db;
    worksheet.getCell(startRow, 7).value = row.language;
    worksheet.getCell(startRow, 8).value = row.middleware;
    worksheet.getCell(startRow, 9).value = row.analysis;
    worksheet.getCell(startRow, 10).value = row.requirements;
    worksheet.getCell(startRow, 11).value = row.design_out;
    worksheet.getCell(startRow, 12).value = row.design_in;
    worksheet.getCell(startRow, 13).value = row.dev;
    worksheet.getCell(startRow, 14).value = row.test_unit;
    worksheet.getCell(startRow, 15).value = row.test_connect;
    worksheet.getCell(startRow, 16).value = row.test_sum;
    worksheet.getCell(startRow, 17).value = row.env_build;
    worksheet.getCell(startRow, 18).value = row.operation;
    worksheet.getCell(startRow, 19).value = row.maintainance;
    worksheet.getCell(startRow, 20).value = row.others;
    worksheet.getCell(startRow, 21).value = row.note;

    worksheet.getRow(startRow).eachCell((cell) => {
      cell.alignment = {
        horizontal: "center",
        vertical: "middle",
        wrapText: true,
      };
    });
  });

  worksheet.getColumn("A").width = 4;
  worksheet.getColumn("B").width = 13;
  worksheet.getColumn("C").width = 10;
  worksheet.getColumn("D").width = 20;
  worksheet.getColumn("E").width = 8;
  worksheet.getColumn("F").width = 8;
  worksheet.getColumn("G").width = 8;
  worksheet.getColumn("H").width = 15;
  worksheet.getColumn("I").width = 6;
  worksheet.getColumn("J").width = 6;
  worksheet.getColumn("K").width = 6;
  worksheet.getColumn("L").width = 6;
  worksheet.getColumn("M").width = 6;
  worksheet.getColumn("N").width = 6;
  worksheet.getColumn("O").width = 6;
  worksheet.getColumn("P").width = 6;
  worksheet.getColumn("Q").width = 6;
  worksheet.getColumn("R").width = 6;
  worksheet.getColumn("S").width = 6;
  worksheet.getColumn("T").width = 6;
  worksheet.getColumn("U").width = 20;

  async function saveExcel() {
    await workbook.xlsx.writeFile(`file/auto/${name}.xlsx`);
    console.log(`Excel file created: ${name}.xlsx`);
  }

  await saveExcel();
}
async function mail_infor(text) {
  const patterns = {
    name_per: /氏名[:：\s]+([^\n]+)/,
    name_project: /【プロジェクト名】\s*(.+)/,
    age: /年齢[:：\s]+(\d+)歳/,
    gender: /性別[:：\s]+([^\n]+)/,
    salary: /希望単金[:：\s]+月額(\d+)万円〜/,
    mail: /MAIL[:：\s]+([^\n]+)/,
  };
  const name_per = text.match(patterns.name_per)?.[1]?.trim() || "N/A";
  const name_project = text.match(patterns.name_project)?.[1]?.trim() || "N/A";
  const age = text.match(patterns.age)?.[1] || "N/A";
  const mail = text.match(patterns.mail)?.[1]?.trim() || "N/A";
  const salary = text.match(patterns.salary)?.[1]
    ? `${text.match(patterns.salary)[1]}万円`
    : "N/A";
  return { name_per, name_project, age, salary, mail };
}
async function mail_infor2(text) {
  const patterns = {
    name_per: /氏名[:：\s]+([^\n]+)/,
    name_project: /プロジェクト名:\s*(.+)/,
    age: /年齢[:：\s]+(\d+)歳/,
    gender: /性別[:：\s]+([^\n]+)/,
    salary: /希望単金[:：\s]+月額(\d+)万円〜/,
    mail: /MAIL[:：\s]+([^\n]+)/,
  };
  const name_per = text.match(patterns.name_per)?.[1]?.trim() || "N/A";
  const name_project = text.match(patterns.name_project)?.[1]?.trim() || "N/A";
  const age = text.match(patterns.age)?.[1] || "N/A";
  const mail = text.match(patterns.mail)?.[1]?.trim() || "N/A";
  const salary = text.match(patterns.salary)?.[1]
    ? `${text.match(patterns.salary)[1]}万円`
    : "N/A";
  return { name_per, name_project, age, salary, mail };
}
async function perList_getInfor(page) {
  await page.goto("https://www.customer.engibase.com/personnel");
  const web_name = await page.locator("td:nth-child(7)").textContent();
  const web_age = await page.locator("td:nth-child(8)").textContent();
  const web_salary = await page.locator("td:nth-child(9)").textContent();
  console.log(web_name, web_age, web_salary);
  if (infor.name == web_name && infor.age == web_age) {
    console.log("true");
  } else {
    console.log("fail");
  }
}
async function sent_getInfor(page) {
  await page.goto("https://www.customer.engibase.com/sent-mail/sent");
  await page.locator("#select2-dp_id-container").click();
  await page.waitForTimeout(2000);
  await page.locator("#select2-dp_id-container").press("Enter");
  await page.waitForTimeout(3000);
  const web_info_per = await page.locator("#personnel_info_1").textContent();
  console.log(web_info_per);
  const file = await page.locator("#box-attachment span:nth-child(1)").count();
  console.log(file);
}
async function sentDone_getInfor(page) {
  await page.goto("https://www.customer.engibase.com/sent-mail/detail/5528");
  await page.locator(".btn-detail-mail").nth(0).click();
  await page.waitForTimeout(3000);
  const mail_sent = await page.locator(".body-content").innerText();
  console.log(mail_sent);
}
async function open_browser(mail) {
  const browser = await chromium.launch({
    headless: false,
    args: ["--disable-blink-features=AutomationControlled"],
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://mail.google.com/mail/u/0/#inbox");
  await page.locator("//input[@type='email']").fill(`${mail}@gmail.com`);
  await page.keyboard.press("Enter");
  await page.locator("//input[@type='password']").fill("Duywasd123");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(10000);
  await page.goto("https://mail.google.com/mail/u/0/#inbox");
  await page.waitForTimeout(3000);
  return page;
}
async function delete_all_mail() {
  for (let a = 0; a < mail.length; a++) {
    const page = await open_browser(`${mail[a]}`);
    await page.locator('span[role="checkbox"]').click();
    await page.waitForTimeout(1000);
    await page.locator('div[aria-label="Delete"]').click();
    await page.waitForTimeout(3000);
    await page.close();
  }
}
async function delete_mail() {
  for (let a = 0; a < mail.length; a++) {
    const page = await open_browser(`${mail[a]}`);
    const type = [
      "sent_mail_self",
      "sent_mail",
      "sent_mail_project_self",
      "sent_mail_project",
      "outbox_sent_mail",
      "outbox_sent_mail_self",
      // "sent_personnel_individual_self",
      // "sent_personnel_individual",
      // "sent_project_individual_self",
      // "sent_project_individual",
      // "sent_mail_interaction",
      // "sent_mail_interaction_template",
    ];
    for (let i = 0; i < type.length; i++) {
      try {
        await page
          .locator(`//span/span[text()='${type[i]}']`)
          .nth(0)
          .click({ timeout: 1000 });
        await page.locator('div[data-tooltip="More"]').nth(1).click();
        await page.waitForTimeout(1000);
        await page.locator('//*[text()="Delete this message"]').click();
        await page.goto("https://mail.google.com/mail/u/0/#inbox");
      } catch (error) {
        console.log("Không nhận được mail : ", type[i]);
      }
      await page.waitForTimeout(1000);
    }
    await page.close();
  }
}
const mail = [
  "hoaiditest",
  "hoaiditest1",
  "hoaiditest2",
  "hoangoisan",
  "hoangoisan2",
  "trungsantrungsan",
  "di1999test",
];
const type = [
  "sent_mail_self",
  "sent_mail",
  "sent_mail_project_self",
  "sent_mail_project",
  "outbox_sent_mail",
  "outbox_sent_mail_self",
];
const mail_individual = ["hoaiditest"];

const type_individual = [
  "sent_personnel_individual_self",
  "sent_personnel_individual",
  "sent_project_individual_self",
  "sent_project_individual",
];
async function check_mail_file(add_mail, add_type) {
  const file = [];
  for (let a = 0; a < add_mail.length; a++) {
    let number_file,
      array = [];
    const page = await open_browser(`${add_mail[a]}`);

    for (let i = 0; i < add_type.length; i++) {
      try {
        await page
          .locator(`//span/span[text()='${add_type[i]}']`)
          .nth(0)
          .click({ timeout: 10000 });
        number_file = await page
          .locator('//*[contains(text(), "Attachments")]')
          .first()
          .textContent({ timeout: 1000 });
        array.push(number_file);
        await page.goBack();
      } catch (error) {
        console.log("Không nhận được mail : ", add_type[i]);
        array.push("0 Attachments");
        await page.goto("https://mail.google.com/");
      }
    }
    const files = array
      .filter((item) => item.includes("Attachments"))
      .map((item) => parseInt(item.trim().split(" ")[0]));
    file.push(files);
  }
  return { file };
}
async function fix_102(page) {
  await goto(page, "personnel-self");
  // await page.locator("li>input").nth(0).click();
  await page.locator("li>input").nth(0).fill(RandomString(10));
  await page.waitForTimeout(2000);
  await page.locator("li>input").nth(0).press("Enter");
  // continue
}
async function get_number(page) {
  try {
    const total = await page
      .locator("#total-item")
      .first()
      .innerText({ timeout: 1000 });
    const numbers = total.match(/\d+/g).map(Number);
    return { numbers };
  } catch (error) {
    try {
      const total = await page
        .locator("td.border-right-solid")
        .nth(3)
        .innerText({ timeout: 1000 });
      const numbers = total.match(/\d+/g).map(Number);
      const total2 = await page
        .locator("td.border-right-solid")
        .nth(4)
        .innerText({ timeout: 1000 });
      const numbers2 = total2.match(/\d+/g).map(Number);
      return { numbers, numbers2 };
    } catch (error) {
      try {
        const total = await page
          .locator(".search")
          .first()
          .innerText({ timeout: 3000 });
        const numbers = total.match(/\d+/g).map(Number);
        return { numbers };
      } catch (error) {
        try {
          const total = await page
            .locator("//*[contains(text(),'件を表示')]")
            .first()
            .innerText({ timeout: 3000 });
          const numbers = total.match(/\d+/g).map(Number);
          return { numbers };
        } catch (error) {
          const total = "0件中0件を表示";
          const numbers = total.match(/\d+/g).map(Number);
          return { numbers };
        }
      }
    }
  }
}
async function fix_482(page) {
  await goto(page, "call");
  const call1 = await get_number(page);
  await goto(
    page,
    "sale/report-proper?sales_ids%5B%5D=220&methods%5B%5D=ALL&skill_points%5B%5D=ALL&routes%5B%5D=DIRECTLY&types%5B%5D=SENT&types%5B%5D=CALL&types%5B%5D=CALLED&types%5B%5D=PROJECT&types%5B%5D=PROJECT_AVG&types%5B%5D=PROJECT_RATE&types%5B%5D=INTERVIEW&types%5B%5D=INTERVIEW_RATE&types%5B%5D=INTERVIEW_AVG&types%5B%5D=OFFER&types%5B%5D=OFFER_RATE&types%5B%5D=OFFER_AVG&types%5B%5D=DECISION&types%5B%5D=DECISION_RATE&types%5B%5D=DECISION_AVG&types%5B%5D=EJECTION"
  );
  const report_proper1 = await get_number(page);
  await goto(page, "call/add-self/5212");
  await page.locator("td").first().click();
  for (let i = 0; i < 3; i++) {
    for (let y = 0; y < 2; y++) {
      await page.locator('//a[@id="add-history"]').click();
      await page.locator("#states").selectOption({ index: i });
      await page.locator("#state_call").selectOption({ index: y });
      if (y == 1) {
        await page.locator(".btn-up").nth(0).click();
        await page.locator(".btn-up").nth(1).click();
        await page.locator("#reason").fill("ditest");
      }
      await page.locator("#save-call-history").click();
    }
  }
  await goto(page, "call");
  await page.reload();
  const call2 = await get_number(page);
  await goto(
    page,
    "sale/report-proper?sales_ids%5B%5D=220&methods%5B%5D=ALL&skill_points%5B%5D=ALL&routes%5B%5D=DIRECTLY&types%5B%5D=SENT&types%5B%5D=CALL&types%5B%5D=CALLED&types%5B%5D=PROJECT&types%5B%5D=PROJECT_AVG&types%5B%5D=PROJECT_RATE&types%5B%5D=INTERVIEW&types%5B%5D=INTERVIEW_RATE&types%5B%5D=INTERVIEW_AVG&types%5B%5D=OFFER&types%5B%5D=OFFER_RATE&types%5B%5D=OFFER_AVG&types%5B%5D=DECISION&types%5B%5D=DECISION_RATE&types%5B%5D=DECISION_AVG&types%5B%5D=EJECTION"
  );
  const report_proper2 = await get_number(page);
  if (
    call1[0] + 6 == call2[0] &&
    report_proper1.numbers[0] + 20 == report_proper2.numbers[0] &&
    report_proper1.numbers2[0] + 10 == report_proper2.numbers2[0]
  ) {
    console.log("done");
  } else {
    console.log("not done");
  }
  //qua trang report-proper kiểm tra sau khi add call history
}
async function report_proper(page) {
  await goto(
    page,
    "sale/report-proper?sales_ids%5B%5D=220&methods%5B%5D=ENGINEER&skill_points%5B%5D=40_&types%5B%5D=SENT"
  );
  await item();
  await goto(
    page,
    "sale/report-proper?sales_ids%5B%5D=220&methods%5B%5D=ENGINEER&skill_points%5B%5D=40_&types%5B%5D=CALL"
  );
  await item();
  await goto(
    page,
    "sale/report-proper?sales_ids%5B%5D=220&methods%5B%5D=ENGINEER&skill_points%5B%5D=40_&types%5B%5D=CALLED"
  );
  await item();
  async function item() {
    const item = await page
      .locator(".border-right-solid span")
      .first()
      .innerText();
    if (item === "0") {
      throw new Error("Không sau khi gửi mail hoặc call ");
    } else {
      await console.log("done");
    }
  }
}
async function bp_edit(page) {
  await goto(page, "bp");
  await page.waitForTimeout(2000);
  const search = await page.locator(".search").innerText();
  // await console.log(search);
  const name = await page
    .locator("tbody>tr>td:nth-child(3)")
    .nth(0)
    .textContent();
  // await console.log("name: " + name);
  const email = await page
    .locator("tbody>tr>td:nth-child(7)")
    .nth(0)
    .textContent();
  // await console.log(email);
  const sdt = await page
    .locator("tbody>tr>td:nth-child(8)")
    .nth(0)
    .textContent();
  // await console.log(sdt);
  await page.locator(".ph-pencil-simple-line").nth(0).click();
  const page1Promise = page.waitForEvent("popup");
  const page1 = await page1Promise;
  const name_edit = RandomString(10);
  // await console.log("name_edit: " + name_edit);
  await page1.locator("#name").fill(name_edit);
  const email_edit = `${name_edit}@gmail.com`;
  // await console.log(email_edit);
  await page1.locator("#email").fill(email_edit);
  const sdt_edit = RandomNumber(10);
  await page1.locator("#phone").fill(sdt_edit);
  await page1.locator(".ph-x-square").nth(0).click();
  await page1.locator("#breadcrumb_elements .ph-x").nth(0).click();
  await page1.reload();
  await page1.waitForTimeout(3000);
  const search1 = await page.locator(".search").innerText();
  // await console.log(search1);
  const name1 = await page1
    .locator("tbody>tr>td:nth-child(3)")
    .nth(0)
    .textContent();
  // await console.log("name1: " + name1);
  const email1 = await page1
    .locator("tbody>tr>td:nth-child(7)")
    .nth(0)
    .textContent();
  // await console.log(email1);
  const sdt1 = await page1
    .locator("tbody>tr>td:nth-child(8)")
    .nth(0)
    .textContent();
  // await console.log(sdt1);
  if (
    email1 === email_edit &&
    email1 !== email &&
    sdt1 === sdt_edit &&
    sdt1 !== sdt &&
    search === search1
  ) {
    await console.log("pass");
  } else {
    throw new Error("Không thay đổi sau khi edit ");
  }
}
async function bp_sale_edit(page) {
  await goto(page, "bp-sale");
  await page.waitForTimeout(2000);
  const search = await page.locator(".search").innerText();
  // await console.log(search);
  const name = await page
    .locator("tbody>tr>td:nth-child(3)")
    .nth(0)
    .textContent();
  // await console.log("name: " + name);
  const email = await page
    .locator("tbody>tr>td:nth-child(5)")
    .nth(0)
    .textContent();
  // await console.log(email);
  const sdt = await page
    .locator("tbody>tr>td:nth-child(6)")
    .nth(0)
    .textContent();
  // await console.log(sdt);
  await page.locator(".ph-pencil-simple-line").nth(0).click();
  const page1Promise = page.waitForEvent("popup");
  const page1 = await page1Promise;
  const name_edit = RandomString(10);
  // await console.log("name_edit: " + name_edit);
  await page1.locator("#bp_id").fill(name_edit);
  const email_edit = `${name_edit}@gmail.com`;
  // await console.log(email_edit);
  await page1.locator('input[name="email"]').fill(email_edit);
  const sdt_edit = RandomNumber(10);
  await page1.locator("#phone_number").fill(sdt_edit);
  await page1.locator(".ph-x-square").nth(0).click();
  await page1.locator("#breadcrumb_elements .ph-x").nth(0).click();
  await page1.reload();
  await page1.waitForTimeout(3000);
  const search1 = await page.locator(".search").innerText();
  // await console.log(search1);
  const name1 = await page1
    .locator("tbody>tr>td:nth-child(3)")
    .nth(0)
    .textContent();
  // await console.log("name1: " + name1);
  const email1 = await page1
    .locator("tbody>tr>td:nth-child(5)")
    .nth(0)
    .textContent();
  // await console.log(email1);
  const sdt1 = await page1
    .locator("tbody>tr>td:nth-child(6)")
    .nth(0)
    .textContent();
  // await console.log(sdt1);
  if (
    email1 === email_edit &&
    email1 !== email &&
    sdt1 === sdt_edit &&
    sdt1 !== sdt &&
    search === search1
  ) {
    await console.log("pass");
  } else {
    throw new Error("Không thay đổi sau khi edit ");
  }
}
async function check_list(page) {
  await page.goto("https://www.customer.engibase.com/bp");
  const search = await page.locator(".search").innerText();
  await add_bp(page);
  const search2 = await page.locator(".search").innerText();
  if (search === search2) {
    throw new Error("Danh sách không tăng sau khi tạo");
  }
}
async function rec(page) {
  await page.goto("https://www.test.rectelework.com/02bc3vrepud3");
  await page.locator("#email").fill("nesv025@gmail.com");
  await page.locator("#password").fill("Duywasd123");
  await page.locator(".btn-teal").click();
  await page.waitForTimeout(3000);
  // await payment_edit(page);
  // await purchase_plan(page);
  const a = await payment_history(page);
  await console.log(a.list);
}
async function payment_edit(page) {
  const credit_card = [
    4242424242424242, 4012888888881881, 5555555555554444, 5105105105105100,
    3530111333300000, 3566002020360505, 378282246310005, 371449635398431,
    38520000023237, 30569309025904, 6011111111111117, 6011000990139424,
  ];
  await page.goto("https://www.test.rectelework.com/02bc3vrepud3/payment/edit");
  await page
    .frameLocator('//iframe[@name="_payjpElements1_cardNumber"]')
    .locator("#cardNumber")
    .fill(`${credit_card[Math.floor(Math.random() * 12) + 1]}`);
  await page
    .frameLocator('//iframe[@name="_payjpElements1_cardExpiry"]')
    .locator("#cardExpiry")
    .fill(`0${Math.floor(Math.random() * 9)}25`);
  await page
    .frameLocator('//iframe[@name="_payjpElements1_cardCvc"]')
    .locator("#cardCvc")
    .fill(RandomNumber(4));
  const name = RandomString(1);
  await console.log(name + " " + name);
  await page.locator("#c_name").fill(name + " " + name);
  await page.locator("#linkButton").click();
  await page.waitForTimeout(3000);
  await page.locator(".confirm").click();
  await page.locator(".btn-custom2").click();
  await page.waitForTimeout(3000);
  const form_card = await page.locator("div>b").nth(1).textContent();
  await console.log(form_card);
}
async function purchase_plan(page) {
  await page.goto("https://www.test.rectelework.com/02bc3vrepud3/plan");
  await page.locator(".btn-dark").nth(2).click();
  await page.waitForTimeout(3000);
  await page.locator("#pay_method_credit_card").click();
  await page.locator("#btn_submit").click();
  await page.waitForTimeout(3000);
  // await page.locator("#error").click();
  await page.locator(".button").click();
  await page.locator(".btn-primary").click();
}
async function payment_history(page) {
  await page.goto("https://www.test.rectelework.com/02bc3vrepud3/payment");
  await page.waitForTimeout(3000);
  const item = await page.locator("tr").count();
  await console.log(item);
  const tr = await page
    .locator("tr")
    .nth(item - 1)
    .innerText();
  await console.log(tr);
  const tr2 = await page.locator(`tr:nth-child(${item - 1})`).innerText();
  // await console.log(tr2);
  // await console.log(tr !== tr2);
  const list = await page.locator(".text-nowrap").nth(1).innerText();
  return { list };
}
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
async function recordVideo() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordVideo: {
      dir: "file/",
      size: { width: 1280, height: 720 },
    },
  });

  const page = await context.newPage();
  await page.goto("https://www.google.com/");
  await page.waitForTimeout(3000);
  const videoPath = await page.video().path();

  await context.close();
  await browser.close();

  const newVideoName = "video.webm";
  const newPath = path.join("file/", newVideoName);

  fs.renameSync(videoPath, newPath); // Đổi tên file
  console.log(`Video đã được lưu thành: ${newPath}`);
}
module.exports = {
  Test_manager,
  Product_manager,
  company_test_025,
  ver2_company_product_025,
  ver2_visitor_test_hoaiditest,
  ver2_visitor_test_dimot111111,
  ver2_visitor_test_025,
  ver2_visitor_product_hoaiditest,
  ver2_visitor_product_025,
  ver2_visitor_product_dimot111111,
  ver2_visitor_check_service,
  login,
  login_all,
  login_eng_dev,
  goto,
  direct_mail,
  add_personnel_self,
  direct_personnel_self,
  add_skill_sheet,
  direct_personnel,
  direct_project,
  sent_mail,
  sent_mail_self,
  sent_personnel_individual,
  sent_personnel_individual_self,
  sent_project_individual,
  delete_all_page,
  delete_bp,
  delete_bp_sale,
  deleted_direct_mail,
  deleted_direct_personnel,
  add_bp,
  add_template,
  RandomFile,
  RandomString,
  RandomNumber,
  RandomName,
  textbox,
  textbox2,
  select,
  click_menu,
  personnel_envtest_025,
  project_envtest_025,
  personnel_product_025,
  skill_personnel_product_025,
  project_product_025,
  personnel_product_hoangoisan,
  project_product_hoangoisan,
  file_test_per_project,
  file_product_per_project,
  project_file_product_025,
  project_file_test_025,
  add_personnel_proposal,
  add_personnel_self_proposal,
  mail_account,
  run_all,
  run_fun,
  deleted_direct_project,
  staff_call,
  login_2_browser,
  bp_sale_add,
  sent_mail_interaction,
  sent_mail_interaction_template,
  direct_project_self,
  sent_project_individual_self,
  add_project_self,
  sent_mail_project_self,
  sent_mail_project,
  fun_sentMail_daily,
  fun_sent_mail,
  material_add,
  check_class,
  sentmail_error,
  sentmail_errorJP,
  ver2_add_personnel_self,
  Check_lastFetch,
};
