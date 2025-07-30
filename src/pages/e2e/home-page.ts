import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class HomePage extends BasePage {
	private readonly signInHeading: Locator;

	constructor(page: Page) {
		super(page);
		this.signInHeading = page.getByRole("heading", { name: "Sign in to your account" });
	}

	async expectCorrectTitle() {
		await this.expectToHaveTitle(/Sign in to iqgeo/);
	}

	async expectSignInHeadingVisible() {
		await this.expectElementVisible(this.signInHeading);
	}
}
