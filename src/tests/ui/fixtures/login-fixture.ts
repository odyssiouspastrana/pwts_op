import { test as base } from "@playwright/test";
import { LoginPage } from "pages/ui";

type HomePageFixture = {
	loginPage: LoginPage;
};

export const test = base.extend<HomePageFixture>({
	loginPage: async ({ page }, use) => {
		const url = process.env.IQGEO_URL;
		const homePage = new LoginPage(page);
		await homePage.navigate(url || "/");
		await use(homePage);
	},
});

export { expect } from "@playwright/test";
