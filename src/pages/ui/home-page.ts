import { Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class HomePage extends BasePage {
	private readonly signinHeading;

	constructor(page: Page) {
		super(page);

		this.signinHeading = this.page.getByRole("heading", { name: "Sign in to your account" });
	}

	async expectSigninHeadingVisible() {
		await this.expectElementVisible(this.signinHeading);
	}
}
