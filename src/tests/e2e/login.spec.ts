import { TAGS } from "@utils/constants";
import { test } from "./fixtures/login-fixture";
import { getCredentials } from "@utils/helper";

test.describe("Login", () => {
	test(
		"Login user with valid credentials",
		{
			tag: TAGS.SMOKE,
		},
		async ({ loginPage }) => {
			await loginPage.expectSignInHeadingToBeVisible();
			const { username, password } = getCredentials("valid");
			await loginPage.login(username, password);
			await loginPage.expectHomeLogo();
			await loginPage.logout();
		},
	);

	test(
		"Login user with invalid credentials",
		{
			tag: TAGS.SMOKE,
		},
		async ({ loginPage }) => {
			await loginPage.expectSignInHeadingToBeVisible();
			const { username, password } = getCredentials("invalid");
			await loginPage.login(username, password);
			await loginPage.expectInvalidCredentialWarning();
		},
	);

	test(
		"Login user with blank credentials",
		{
			tag: TAGS.SMOKE,
		},
		async ({ loginPage }) => {
			await loginPage.expectSignInHeadingToBeVisible();
			const { username, password } = getCredentials("blank");
			await loginPage.login(username, password);
			await loginPage.expectInvalidCredentialWarning();
		},
	);
});
