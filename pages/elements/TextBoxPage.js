export class TextBoxPage {
  constructor(page) {
    this.page = page;

    this.fullNameInput = page.getByRole("textbox", { name: "Full Name" });
    this.emailInput = page.getByRole("textbox", { name: "name@example.com" });
    this.currentAddressInput = page.getByRole("textbox", {
      name: "Current Address",
    });
    this.permanentAddressInput = page.locator("#permanentAddress");
    this.submitButton = page.getByRole("button", { name: "Submit" });

    this.outputName = page.locator("//p[@id='name']");
    this.outputEmail = page.locator("//p[@id='email']");
  }

  async goto() {
    await this.page.goto("https://demoqa.com/text-box");
  }

  async fillForm(user) {
    await this.fullNameInput.fill(user.fullName);
    await this.emailInput.fill(user.email);
    await this.currentAddressInput.fill(user.currentAddress);
    await this.permanentAddressInput.fill(user.permanentAddress);
  }

  async submitForm() {
    await this.submitButton.click();
  }
}
