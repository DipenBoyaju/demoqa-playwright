import { test, expect } from "@playwright/test";
import { TextBoxPage } from "../../pages/elements/TextBoxPage";
import user from "../../test-data/userData.json";

test("submit textbox form successfully", async ({ page }) => {
  const textboxPage = new TextBoxPage(page);

  await textboxPage.goto();

  await textboxPage.fillForm(user);

  await textboxPage.submitForm();

  await expect(textboxPage.outputName).toContainText(user.fullName);
  await expect(textboxPage.outputEmail).toContainText(user.email);
});
