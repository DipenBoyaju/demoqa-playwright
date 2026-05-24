export class CheckBoxPage {
  constructor(page) {
    this.page = page;

    this.homeToggle = page.locator(
      "span.rc-tree-switcher.rc-tree-switcher_close",
    );
    this.homeCheckbox = page.getByRole("checkbox", { name: "Select Home" });
    this.desktopToggle = page
      .locator("div.rc-tree-treenode.rc-tree-treenode-switcher-close")
      .locator("span")
      .nth(1);
    this.desktopChekbox = page.getByRole("checkbox", {
      name: "Select Desktop",
    });
    this.documentCheckbox = page.getByRole("checkbox", {
      name: "Select Documents",
    });
    this.downloadCheckbox = page.getByRole("checkbox", {
      name: "Select Downloads",
    });

    this.resultText = page.locator("#result");
  }

  async goto() {
    await this.page.goto("https://demoqa.com/checkbox");
  }

  async expandAllNodes() {
    await this.homeToggle.click();
  }

  async selectHome() {
    await this.homeCheckbox.click();
  }

  async getResultText() {
    return await this.resultText.textContent();
  }
}
