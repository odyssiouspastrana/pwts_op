import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base-page";

export class LoginPage extends BasePage {
	private readonly signInHeading: Locator;
	private readonly usernameInput: Locator;
	private readonly passwordInput: Locator;
	private readonly signInButton: Locator;
	private readonly homeLogo: Locator;
	private readonly invalidCredentialWarningMessage: Locator;
	private readonly logoutLink: Locator;

	constructor(page: Page) {
		super(page);

		this.signInHeading = page.getByRole("heading", { name: "Sign in to your account" });
		this.usernameInput = page.getByText("username");
		this.passwordInput = page.getByText("password");
		this.signInButton = page.getByRole("button", { name: "Sign in" });
		this.homeLogo = page.locator("xpath=//a[normalize-space(text())='IQGeo']");
		this.invalidCredentialWarningMessage = page.locator(
			"xpath=//span[normalize-space(text())='Invalid username or password.']",
		);
		this.logoutLink = page.getByRole("link", { name: "Logout" });
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
		await this.expectElementVisible(this.homeLogo);
	}

	async expectInvalidCredentialWarning() {
		await this.expectElementVisible(this.invalidCredentialWarningMessage);
	}

	async logout() {
		await this.logoutLink.click();
	}
}
