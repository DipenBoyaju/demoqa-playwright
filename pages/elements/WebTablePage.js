export class WebTablePage {
  constructor(page) {
    this.page = page;

    this.addButton = page.getByRole("button", { name: "Add" });
    this.closeButton = page.getByRole("button", { name: "Close" });

    this.searchInput = page.getByRole("textbox", { name: "Type to search" });
    this.searchButton = page.locator("#basic-addon2");

    this.firstNameInput = page.getByRole("textbox", { name: "First Name" });
    this.lastNameInput = page.getByRole("textbox", { name: "Last Name" });
    this.emailInput = page.getByRole("textbox", { name: "name@example.com" });
    this.ageInput = page.getByRole("textbox", { name: "Age" });
    this.salaryInput = page.getByRole("textbox", { name: "Salary" });
    this.departmentInput = page.getByRole("textbox", { name: "Department" });

    this.submitButton = page.getByRole("button", { name: "Submit" });
  
    this.tableData = page.locator('tbody:visible');
  }

  async goto() {
    await this.page.goto("https://demoqa.com/webtables");
  }

  async openAddForm() {
    await this.addButton.click();
  }

  async closeForm() {
    await this.closeButton.click();
  }

  async fillForm(user) {
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.emailInput.fill(user.email);
    await this.ageInput.fill(user.age);
    await this.salaryInput.fill(user.salary);
    await this.departmentInput.fill(user.department);
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async search(text){
    await this.searchInput.fill(text);
  }

  async getAllRows() {
return await this.tableData;
  }

  async deleteUser(recordId) {
    await this.page.locator(`#delete-record-${recordId}`).click();
  }

  async editUser(recordId) {
    await this.page.locator(`#edit-record-${recordId}`).click();
  }

}

