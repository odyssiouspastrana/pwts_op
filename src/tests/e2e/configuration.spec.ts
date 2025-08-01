import { test } from "./fixtures/configuration-fixture";

test("Navigate Configuration and verify details", async ({ configurationPage }) => {
	await configurationPage.navigateConfiguration();
	await configurationPage.navigateApplication();
	await configurationPage.expectApplicationDetails();
	await configurationPage.navigateConfiguration();
	await configurationPage.navigateRoles();
	await configurationPage.expectRolesDetails();
	await configurationPage.navigateConfiguration();
	await configurationPage.navigateUsers();
	await configurationPage.expectUsersDetails();
	await configurationPage.navigateConfiguration();
	await configurationPage.navigateFeatures();
	await configurationPage.expectFeatureDetails();
	await configurationPage.verifyFeatureTypeBuilding();
	await configurationPage.navigateConfiguration();
	await configurationPage.navigatePickLists();
	await configurationPage.expectPickListsDetails();
	await configurationPage.navigatePickListsAsbuild();
	await configurationPage.navigateConfiguration();
	await configurationPage.navigateLayers();
	await configurationPage.expectLayersDetails();
	await configurationPage.navigateLayersGroupsTab();
	await configurationPage.expectLayersGroupDetails();
	await configurationPage.navigateConfiguration();
});
