import { TAGS } from "@utils/constants";
import { test } from "./fixtures/home-fixture";

test.describe("Home", () => {
	test(
		"Home page has correct title",
		{
			tag: TAGS.SMOKE,
		},
		async ({ homePage }) => {
			await homePage.expectToHaveTitle(/Sign in to iqgeo/);
		},
	);

	test(
		"Verify correct heading",
		{
			tag: TAGS.SMOKE,
		},
		async ({ homePage }) => {
			await homePage.expectSignInHeadingVisible();
		},
	);
});
