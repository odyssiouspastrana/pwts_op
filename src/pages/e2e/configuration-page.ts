import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base-page";

export class ConfigurationPage extends BasePage {
	private readonly configurationApplication: Locator;
	private readonly applicationLink: Locator;
	private readonly cell: Locator;
	private readonly rolesLink: Locator;
	private readonly usersLink: Locator;
	private readonly featuresLink: Locator;

	constructor(page: Page) {
		super(page);
		this.configurationApplication = page.getByRole("link", { name: "Configuration" });
		this.applicationLink = page.getByRole("link", { name: "Applications" });
		this.cell = page.locator("xpath=//tbody[@class='ant-table-tbody']");
		this.rolesLink = page.getByRole("link", { name: "Roles" });
		this.usersLink = page.getByRole("link", { name: "Users" });
		this.featuresLink = page.getByRole("link", { name: "Features" });
	}

	async navigateConfiguration() {
		await this.configurationApplication.click();
	}

	async navigateApplication() {
		await this.expectToHaveText(this.applicationLink, "Applications");
		await this.applicationLink.click();
	}

	async expectApplicationDetails() {
		await this.expectToContainText(this.cell, "comms_custom");
		await this.expectToContainText(this.cell, "Network Manager");
		await this.expectToContainText(this.cell, "modules/comms_custom_tm/js/main.comms_custom_tm.js");
		await this.expectToContainText(this.cell, "config");
		await this.expectToContainText(this.cell, "Configuration");
		await this.expectToContainText(this.cell, "main.config.js");
		await this.expectToContainText(this.cell, "mywcom");
		await this.expectToContainText(this.cell, "Comms");
		await this.expectToContainText(this.cell, "modules/comms/js/main.mywcom.js");
		await this.expectToContainText(this.cell, "standard");
		await this.expectToContainText(this.cell, "Standard");
		await this.expectToContainText(this.cell, "main.standard.js");
	}

	async navigateRoles() {
		await this.expectToHaveText(this.rolesLink, "Roles");
		await this.rolesLink.click();
	}

	async expectRolesDetails() {
		await this.expectToContainText(this.cell, "Administrator");
		await this.expectToContainText(this.cell, "Data Editor");
		await this.expectToContainText(this.cell, "Data Viewer");
		await this.expectToContainText(this.cell, "NM_Administrator");
		await this.expectToContainText(this.cell, "NM_Betrachter");
		await this.expectToContainText(this.cell, "NM_Betrachter_Markup");
		await this.expectToContainText(this.cell, "NM_Entwerfer");
		await this.expectToContainText(this.cell, "NM_Open_All_Designs");
	}

	async navigateUsers() {
		await this.expectToHaveText(this.usersLink, "Users");
		await this.usersLink.click();
	}

	async expectUsersDetails() {
		await this.expectToContainText(this.cell, "admin");
		await this.expectToContainText(
			this.cell,
			"Administrator,Data Editor,Data Viewer,NM_Administrator,NM_Betrachter,NM_Betrachter_Markup,NM_Entwerfer,NM_Open_All_Designs",
		);
		await this.expectToContainText(this.cell, "default");
		await this.expectToContainText(this.cell, "Administrator,Data Editor,Data Viewer,NM_Betrachter_Markup");
	}

	async navigateFeatures() {
		await this.expectToHaveText(this.featuresLink, "Features");
		await this.featuresLink.click();
	}
}
