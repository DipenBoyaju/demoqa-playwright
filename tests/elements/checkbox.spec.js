import test, { expect } from "@playwright/test";
import { CheckBoxPage } from "../../pages/elements/CheckBoxPage";

let checkBoxPage;

test.beforeEach(async ({ page }) => {
  checkBoxPage = new CheckBoxPage(page);
  await checkBoxPage.goto();
});

test("select home checkbox and verify result", async ({ page }) => {
  await checkBoxPage.selectHome();

  const result = await checkBoxPage.getResultText();

  await expect(result).toContain("home");
});

test("'no checkbox selected should show empty result", async () => {
  await expect(checkBoxPage.resultText).toHaveCount(0);
});

test.only("select desktop and documents and check uncheck download", async ({
  page,
}) => {
  await checkBoxPage.expandAllNodes();

  await checkBoxPage.downloadCheckbox.click();

  await checkBoxPage.desktopChekbox.click();

  await checkBoxPage.documentCheckbox.click();

  await checkBoxPage.downloadCheckbox.click();

  const result = await checkBoxPage.getResultText();

  expect(result).toContain("desktop");
  expect(result).toContain("documents");
});
