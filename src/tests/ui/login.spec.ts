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
});
