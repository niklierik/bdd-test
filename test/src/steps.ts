import { expect } from "@playwright/test";
import { join } from "node:path";
import { cwd } from "node:process";
import { createBdd } from "playwright-bdd";

const { Given, Then, When } = createBdd();

Given("I have opened the calculator", async ({ page }) => {
  const calculatorPage = join(cwd(), "calculator", "index.html");
  await page.goto(`file://${calculatorPage}`);

  // await page.goto(`http://localhost:8080`);
});

When("I press 2", async ({ page }) => {
  await page.getByText("2").click();
});

When("I press 3", async ({ page }) => {
  await page.getByText("3").click();
});

When("I press 7", async ({ page }) => {
  await page.getByText("7").click();
});

When("I press +", async ({ page }) => {
  await page.getByText("+").click();
});

When("I press =", async ({ page }) => {
  await page.getByText("=").click();
});

Then("I should see 5", async ({ page }) => {
  const screen = await page.locator("#screen");
  await expect(screen).toHaveValue("5");
});

Then("I should see 12", async ({ page }) => {
  const screen = await page.locator("#screen");
  await expect(screen).toHaveValue("12");
});
