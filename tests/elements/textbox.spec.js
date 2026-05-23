import { test, expect } from "@playwright/test";
import { TextBoxPage } from "../../pages/elements/TextBoxPage";
import user from "../../test-data/userData.json";

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

//submit empty form
test("should not submit empty form", async ({ page }) => {
  await textboxPage.goto();

  await textboxPage.submitForm();

  await expect(textboxPage.outputName).not.toBeVisible();
});
