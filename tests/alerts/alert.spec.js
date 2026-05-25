import { test, expect } from '@playwright/test';


test("handle simple alert", async ({page}) => {
    await page.goto('https://demoqa.com/alerts');
page.on('dialog', async (dialog) => {
    await dialog.accept();
    
});

await page.locator('#alertButton').click();
})

test('handle confirm alert', async ({page}) => {
    await page.goto('https://demoqa.com/alerts');

    page.on('dialog', async (dialog) => {
        await dialog.dismiss();
    })

    await page.locator('#confirmButton').click();

  await expect(page.locator('#confirmResult'))
    .toContainText('Cancel');
})

test("handle prompt alerts", async ({page}) => {
    await page.goto('https://demoqa.com/alerts');

    page.on('dialog', async (dialog) => {
        await dialog.accept('John');
    });

    await page.locator('#promtButton').click();

  await expect(page.locator('#promptResult'))
    .toContainText('John');
})