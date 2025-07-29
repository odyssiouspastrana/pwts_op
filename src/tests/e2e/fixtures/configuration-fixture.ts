import { test as base } from "@playwright/test";
import { LoginPage, ConfigurationPage } from "pages/e2e";
import { getCredentials } from "@utils/helper";

type AppFixtures = {
	loginPage: LoginPage;
	productsPage: ConfigurationPage;
};

export const test = base.extend<AppFixtures>({
	loginPage: async ({ page }, use) => {
		await page.setViewportSize({ width: 1920, height: 1080 });
		const loginPage = new LoginPage(page);
		const url = process.env.IQGEO_URL || "/";
		await loginPage.navigate(url);
		await use(loginPage);
	},

	productsPage: async ({ page, loginPage }, use) => {
		const { username, password } = getCredentials("valid");
		await loginPage.login(username, password);
		await loginPage.expectHomeLogo();
		const configurationPage = new ConfigurationPage(page);
		await configurationPage.navigateConfiguration();
		await use(configurationPage);
	},
});

export { expect } from "@playwright/test";
