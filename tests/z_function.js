const nodemailer = require("nodemailer");
async function sentmail(title, content) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "dimot111111@gmail.com",
      pass: "drvm wsqm bjgk ispi ",
    },
  });
  const info = await transporter.sendMail({
    to: "hoaiditest@gmail.com",
    subject: `${title}`,
    text: `${content}`,
  });
}
async function check_class(page) {
  await page.waitForTimeout(3000);
  const element = await page.$$(".active_up .lfsb");
  const vps = [];
  for (const d of element) {
    const text = await d.textContent();
    vps.push(text + "\n");
  }
  return vps;
}
module.exports = {
  sentmail,
  check_class,
};
