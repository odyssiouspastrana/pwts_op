import { TAGS } from "@utils/constants";
import { test } from "../fixtures/login-fixture";
import { getCredentials } from "@utils/helper";

test.describe("Configuration Application", () => {
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
		},
	);
});
