import * as puppeteer from "puppeteer";

test("should register", async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();

  await page.goto("http://localhost:5173/auth/register");
  await page.type('input[name="name"]', "Luis");
  await page.type('input[name="lastname"]', "Zapata");
  await page.type('input[name="password"]', "Testing123!");
  await page.type('input[name="password2"]', "Testing123!");

  await page.click("button");

  const text = await page.$eval(".home-title", (el) => el.innerHTML);

  expect(text).toBe("Autenticado");
  page.close();
});
