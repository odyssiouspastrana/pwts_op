import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base-page";

export class ConfigurationPage extends BasePage {
	private readonly configurationApplication: Locator;
	private readonly applicationLink: Locator;
	private readonly applicationText: Locator;

	constructor(page: Page) {
		super(page);
		this.configurationApplication = page.getByRole("link", { name: "Configuration" });
		this.applicationLink = page.locator("xpath=//span[normalize-space(text())='Applications']");
		this.applicationText = page.locator("xpath=//tbody[@class='ant-table-tbody']");
	}

	async navigateConfiguration() {
		await this.configurationApplication.click();
	}

	async navigateApplication() {
		await this.expectToHaveText(this.applicationLink, "Applications");
		await this.applicationLink.click();
	}

	async verifyApplicationDetails() {
		await this.expectToContainText(this.applicationText, "comms_custom");
		await this.expectToContainText(this.applicationText, "Network Manager");
		await this.expectToContainText(this.applicationText, "modules/comms_custom_tm/js/main.comms_custom_tm.js");
		await this.expectToContainText(this.applicationText, "config");
		await this.expectToContainText(this.applicationText, "Configuration");
		await this.expectToContainText(this.applicationText, "main.config.js");
		await this.expectToContainText(this.applicationText, "mywcom");
		await this.expectToContainText(this.applicationText, "Comms");
		await this.expectToContainText(this.applicationText, "modules/comms/js/main.mywcom.js");
		await this.expectToContainText(this.applicationText, "standard");
		await this.expectToContainText(this.applicationText, "Standard");
		await this.expectToContainText(this.applicationText, "main.standard.js");
	}
}
