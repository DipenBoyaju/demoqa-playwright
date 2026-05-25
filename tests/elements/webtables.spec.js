import { test, expect } from '@playwright/test';
import {userData} from '../../test-data/webtableData';
import {userDataInvalid} from '../../test-data/webtableData';
import {userDataEmpty} from '../../test-data/webtableData';
import {WebTablePage} from '../../pages/elements/WebTablePage'
import {multiUser} from '../../test-data/webtableData';
let webTable;

test.beforeEach(async ({page}) => {
    webTable = new WebTablePage(page);
    await webTable.goto();
})

test('add new user in table', async ({page}) => {
    await webTable.openAddForm();

    await webTable.fillForm(userData);

    await webTable.submitForm();

    await expect(webTable.tableData).toContainText(userData.email);
})

test('search user in table', async ({page}) => {
    await webTable.search('Cierra');

    const rows = await webTable.getAllRows();

    await expect(rows.first()).toContainText('Cierra');
})

test("search and delete user from table", async ({page}) => {
    
    await webTable.search('Alden');

    await webTable.deleteUser(2);

    await expect(webTable.page.locator('text=Alden')).toHaveCount(0);
})

test("Edit user salary", async ({page}) => {
    await webTable.editUser(1);

    await webTable.salaryInput.fill("25000");

    await webTable.submitForm();

    const rows = await webTable.getAllRows();

    await expect(rows.first()).toContainText('25000');
})

test("validate empty search", async ({page}) => {
    await webTable.search('typoo');

    const result = await webTable.getAllRows();

    await expect(result).toHaveCount(0);
})

multiUser.forEach((user) => {
    test(`add multiple user ${user.firstName}`, async ({page}) => {
        await webTable.openAddForm();

        await webTable.fillForm(user);

    await webTable.submitForm();

    await expect(webTable.tableData).toContainText(user.email);
    })
})

test("test invalid email", async ({page}) => {
    await webTable.openAddForm();

    await webTable.fillForm(userDataInvalid);

    await webTable.submitForm();

    await expect(webTable.submitButton).toBeVisible();
})

test("test empty fields", async ({page}) => {
    await webTable.openAddForm();

    await webTable.fillForm(userDataEmpty);

    await webTable.submitForm();

    await expect(webTable.submitButton).toBeVisible();

})

