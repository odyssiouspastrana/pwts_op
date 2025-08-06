import { TAGS } from "@utils/constants";
import { test } from "./fixtures/configuration-fixture";

test(
	"Navigate Configuration and verify details",
	{
		tag: TAGS.SMOKE,
	},
	async ({ configurationPage }) => {
		//Application
		await configurationPage.navigateConfiguration();
		await configurationPage.navigateApplication();
		await configurationPage.expectApplicationDetails();
		//Roles
		await configurationPage.navigateConfiguration();
		await configurationPage.navigateRoles();
		await configurationPage.expectRolesDetails();
		//Users
		await configurationPage.navigateConfiguration();
		await configurationPage.navigateUsers();
		await configurationPage.expectUsersDetails();
		//Features
		await configurationPage.navigateConfiguration();
		await configurationPage.navigateFeatures();
		await configurationPage.expectFeatureDetails();
		await configurationPage.verifyFeatureTypeBuilding();
		//Pick Lists
		await configurationPage.navigateConfiguration();
		await configurationPage.navigatePickLists();
		await configurationPage.expectPickListsDetails();
		await configurationPage.navigatePickListsAsbuild();
		//Layers
		await configurationPage.navigateConfiguration();
		await configurationPage.navigateLayers();
		await configurationPage.expectLayersDetails();
		await configurationPage.navigateLayersGroupsTab();
		await configurationPage.expectLayersGroupDetails();
		//Networks
		await configurationPage.navigateConfiguration();
		await configurationPage.navigateNetworks();
		await configurationPage.expectNetworksDetails();
		//Datasources
		await configurationPage.navigateConfiguration();
		await configurationPage.navigateDatasources();
		await configurationPage.expectDatasourcesDetails();
		//Settings
		await configurationPage.navigateConfiguration();
		await configurationPage.navigateSettings();
		await configurationPage.expectSettingsCommsStructuresDetails();
		await configurationPage.navigateSettingsCommsRoutesTab();
		await configurationPage.expectSettingsCommsRoutesDetails();
		await configurationPage.navigateSettingsCommsEquipmentTab();
		await configurationPage.expectSettingsCommsEquipmentDetails();
		await configurationPage.navigateSettingsCommsConduitsTab();
		await configurationPage.navigateSettingsCommsCablesTab();
		await configurationPage.expectSettingsCommsCablesDetails();
		await configurationPage.navigateSettingsCommsCircuitsTab();
		await configurationPage.expectSettingsCommsCircuitsDetails();
		await configurationPage.navigateSettingsCommsDesignsTab();
		await configurationPage.navigateSettingsCommsSpecsTab();
		await configurationPage.navigateSettingsCommsLaborCostsTab();
		await configurationPage.navigateSettingsCommsFiberColorSchemesTab();
		await configurationPage.navigateSettingsCommsFiberColorsTab();
		await configurationPage.navigateSettingsCommsStylesTab();
		await configurationPage.navigateSettingsCommsImportFormatsTab();
		await configurationPage.navigateSettingsStreetviewTab();
		await configurationPage.navigateSettingsSystemTab();
		await configurationPage.navigateSettingsAdvancedTab();
	},
);
