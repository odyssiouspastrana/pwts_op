import { test } from "./fixtures/configuration-fixture";

test("Navigate Configuration Application and verify details", async ({ configurationPage }) => {
	await configurationPage.navigateConfiguration();
	await configurationPage.navigateApplication();
	await configurationPage.verifyApplicationDetails();
});
