import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base-page";

export class LoginPage extends BasePage {
	private readonly signInHeading: Locator;
	private readonly usernameInput: Locator;
	private readonly passwordInput: Locator;
	private readonly signInButton: Locator;
	private readonly HomeLogo: Locator;

	constructor(page: Page) {
		super(page);

		this.signInHeading = page.getByRole("heading", {
			name: "Sign in to your account",
		});

		this.usernameInput = page.getByText("username");
		this.passwordInput = page.getByText("password");
		this.signInButton = page.getByRole("button", { name: "Sign in" });
		this.HomeLogo = page.locator("xpath=//a[normalize-space(text())='IQGeo']");
	}

	async expectSignInHeadingToBeVisible() {
		await this.expectElementVisible(this.signInHeading);
	}

	async login(username: string, password: string) {
		await this.usernameInput.fill(username);
		await this.passwordInput.fill(password);
		await this.signInButton.click();
	}

	async expectHomeLogo() {
		await this.expectElementVisible(this.HomeLogo);
	}
}
