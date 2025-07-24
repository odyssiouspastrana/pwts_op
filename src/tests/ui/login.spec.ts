import { TAGS } from "@utils/constants";
import { test } from "./fixtures/login-fixture";

test.describe("Login", () => {
	test(
		"Login user with valid credentials",
		{
			tag: TAGS.SMOKE,
		},
		async ({ loginPage }) => {
			await loginPage.expectSignInHeadingToBeVisible();

			const username = "admin";
			const password = "_mywWorld_";
			await loginPage.login(username, password);

			await loginPage.expectHomeLogo();
		},
	);

	test(
		"Login user with invalid credentials",
		{
			tag: TAGS.SMOKE,
		},
		async ({ loginPage }) => {
			await loginPage.expectSignInHeadingToBeVisible();

			const username = "uknown_user";
			const password = "wrong_password";
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

			const username = "";
			const password = "";
			await loginPage.login(username, password);

			await loginPage.expectInvalidCredentialWarning();
		},
	);
});
