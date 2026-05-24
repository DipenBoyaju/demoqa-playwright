import { test, expect } from "@playwright/test";
import { TextBoxPage } from "../../pages/elements/TextBoxPage";
import user from "../../test-data/userData.json";
import { users } from "../../test-data/multiUser";

let textboxPage;

// beforeeach hook
test.beforeEach(async ({ page }) => {
  textboxPage = new TextBoxPage(page);

  await textboxPage.goto();
});

//submit textbox form successfully
test("submit textbox form successfully", async ({ page }) => {
  await textboxPage.goto();

  await textboxPage.fillForm(user);

  await textboxPage.submitForm();

  await expect(textboxPage.outputName).toContainText(user.fullName);
  await expect(textboxPage.outputEmail).toContainText(user.email);
});

//invalid email
test.only("should show validation for invalid email", async ({ page }) => {
  await textboxPage.fullNameInput.fill("Tony");

  await textboxPage.emailInput.fill("tony123");

  await textboxPage.submitForm();

  await expect(textboxPage.emailInput).toHaveClass(/field-error/);
});

//submit multiple users
users.forEach((user) => {
  test(`submit form for ${user.fullName}`, async ({ page }) => {
    await textboxPage.fillForm(user);

    await textboxPage.submitForm();

    await expect(textboxPage.outputName).toContainText(user.fullName);
  });
});

//submit empty form
test("should not submit empty form", async ({ page }) => {
  await textboxPage.goto();

  await textboxPage.submitForm();

  await expect(textboxPage.outputName).not.toBeVisible();
});
