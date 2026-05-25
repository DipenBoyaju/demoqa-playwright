export class AlertPages{
    constructor(page){
        this.page = page;

        this.alertButton = page.locator('#alertButton');
        this.delayAlertButton = page.locator('#timerAlertButton');
        this.confirmButton = page.locator('#confirmButton');
        this.promptButton = page.locator('#promtButton');
    }

    async goto(){
        await this.page.goto('https://demoqa.com/alerts');
    }

    async openAlert() {
        page.on('dialog', async (dialog) => {
            await dialog.dismiss();
        })
    }

    async openAlertDelay() {
        await this.delayAlertButton.click();
    }

    async openConfirm() {
        await this.promptButton.click();
    }
}