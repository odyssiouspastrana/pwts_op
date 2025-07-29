import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base-page";

export class ConfigurationPage extends BasePage {
	private readonly configurationApplication: Locator;

	constructor(page: Page) {
		super(page);
		this.configurationApplication = page.getByRole("link", { name: "Configuration" });
	}

	async navigateConfiguration() {
		await this.configurationApplication.click();
	}
}
