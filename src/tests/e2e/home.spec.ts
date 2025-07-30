import { TAGS } from "@utils/constants";
import { test } from "./fixtures/home-fixture";

test.describe("Home", () => {
	test(
		"Home page has correct title and heading",
		{
			tag: TAGS.SMOKE,
		},
		async ({ homePage }) => {
			await homePage.expectCorrectTitle();
			await homePage.expectSignInHeadingVisible();
		},
	);
});
