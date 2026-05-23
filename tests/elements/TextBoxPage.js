class TextBoxPage{
    constructor(page){
        this.page= page;

        this.fullNameInput  = page.getByRole('textbox', { name: 'Full Name' });
        this.emailInput = page.getByRole('textbox', { name: 'name@example.com' });
        this.currentAddressInput = page.getByRole('textbox', { name: 'Current Address' });
        this.permanentAddressInput = page.locator('#permanentAddress');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

    async goto() {
        await this.page.goto('https://demoqa.com/text-box');
    }
}