import { Calculator } from "./calculator";
import { test as base, createBdd } from "playwright-bdd";

type Fixture = {
  calculator: Calculator;
};

export const test = base.extend<Fixture>({
  calculator: async ({ page }, use) => {
    const calculator = new Calculator(page);
    await use(calculator);
  },
});

const { Given, Then, When } = createBdd(test);

Given("I have opened the calculator", async ({ calculator }) => {
  await calculator.open();
});

Given("I have typed {string}", async ({ calculator }, text: string) => {
  await calculator.type(text);
});

When("I press {string}", async ({ calculator }, button: string) => {
  await calculator.type(button);
});

When("I type {string}", async ({ calculator }, text: string) => {
  await calculator.type(text);
});

Then("I should see {string}", async ({ calculator }, expected: string) => {
  await calculator.testScreenValue(expected);
});
