import { test as base } from "@playwright/test";
import { HomePage } from "pages/e2e";

type HomePageFixture = {
	homePage: HomePage;
};

export const test = base.extend<HomePageFixture>({
	homePage: async ({ page }, use) => {
		await page.setViewportSize({ width: 1920, height: 1080 });
		const url = process.env.IQGEO_URL;
		const homePage = new HomePage(page);
		await homePage.navigate(url || "/");
		await use(homePage);
	},
});

export { expect } from "@playwright/test";
