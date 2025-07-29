import { test as base } from "@playwright/test";
import { LoginPage } from "pages/e2e";

type HomePageFixture = {
	loginPage: LoginPage;
};

export const test = base.extend<HomePageFixture>({
	loginPage: async ({ page }, use) => {
		await page.setViewportSize({ width: 1920, height: 1080 });
		const url = process.env.IQGEO_URL;
		const loginPage = new LoginPage(page);
		await loginPage.navigate(url || "/");
		await use(loginPage);
	},
});

export { expect } from "@playwright/test";
