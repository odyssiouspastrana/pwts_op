import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base-page";

export class ConfigurationPage extends BasePage {
	private readonly configurationApplication: Locator;
	private readonly applicationLink: Locator;
	private readonly cell: Locator;
	private readonly rolesLink: Locator;
	private readonly usersLink: Locator;
	private readonly featuresLink: Locator;
	private readonly featureTypeBuilding: Locator;
	private readonly featureTypeBuildingBasicDatasource: Locator;
	private readonly featureTypeBuildingBasicName: Locator;
	private readonly featureTypeBuildingBasicDisplayName: Locator;
	private readonly featureTypeBuildingBasicTitle: Locator;
	private readonly featureTypeBuildingBasicTrackChanges: Locator;
	private readonly featureTypeBuildingBasicVersioned: Locator;
	private readonly featureTypeBuildingBasicEditable: Locator;
	private readonly featureTypeBuildingBasicInsertGUI: Locator;
	private readonly featureTypeBuildingBasicUpdateGUI: Locator;
	private readonly featureTypeBuildingBasicDeleteGUI: Locator;
	private readonly featureTypeBuildingBasicGeometryIndexed: Locator;
	private readonly featureTypeBuildingGeometryFieldsTab: Locator;
	private readonly featureTypeBuildingStoredFieldsTab: Locator;
	private readonly featureTypeBuildingStoredFieldsIdField: Locator;
	private readonly featureTypeBuildingStoredFieldsNameField: Locator;
	private readonly featureTypeBuildingStoredFieldsSpecificationField: Locator;
	private readonly featureTypeBuildingCalculatedFieldsTab: Locator;
	private readonly featureTypeBuildingCalculatedFieldsEquipmentField: Locator;
	private readonly featureTypeBuildingLayoutTab: Locator;
	private readonly featureTypeBuildingLayoutIdField: Locator;
	private readonly featureTypeBuildingSearchesTab: Locator;
	private readonly featureTypeBuildingSearchesDisplayNameField: Locator;
	private readonly featureTypeBuildingQueriesTab: Locator;
	private readonly featureTypeBuildingQueriesDisplayValueField: Locator;

	constructor(page: Page) {
		super(page);
		this.configurationApplication = page.getByRole("link", { name: "Configuration" });
		this.applicationLink = page.getByRole("link", { name: "Applications" });
		this.cell = page.locator("xpath=//tbody[@class='ant-table-tbody']");
		this.rolesLink = page.getByRole("link", { name: "Roles" });
		this.usersLink = page.getByRole("link", { name: "Users" });
		this.featuresLink = page.getByRole("link", { name: "Features" });
		this.featureTypeBuilding = page.locator("xpath=//b[normalize-space(text())='building']");
		this.featureTypeBuildingBasicDatasource = page.locator("xpath=//input[@value='myworld']");
		this.featureTypeBuildingBasicName = page.locator("xpath=//input[@value='building']");
		this.featureTypeBuildingBasicDisplayName = page.locator("xpath=//input[@value='PoP']");
		this.featureTypeBuildingBasicTitle = page.locator("xpath=//input[@value='{display_name}: [name]']");
		this.featureTypeBuildingBasicTrackChanges = page.locator(
			"xpath=//span[normalize-space(text())='Track Changes']/following::input[1]",
		);
		this.featureTypeBuildingBasicVersioned = page.locator(
			"xpath=//span[normalize-space(text())='Versioned']/following::input[1]",
		);
		this.featureTypeBuildingBasicEditable = page.locator(
			"xpath=//span[normalize-space(text())='Editable']/following::input[1]",
		);
		this.featureTypeBuildingBasicInsertGUI = page.locator(
			"xpath=//span[normalize-space(text())='Insert from GUI']/following::input[1]",
		);
		this.featureTypeBuildingBasicUpdateGUI = page.locator(
			"xpath=//span[normalize-space(text())='Update from GUI']/following::input[1]",
		);
		this.featureTypeBuildingBasicDeleteGUI = page.locator(
			"xpath=//span[normalize-space(text())='Delete from GUI']/following::input[1]",
		);
		this.featureTypeBuildingBasicGeometryIndexed = page.locator(
			"xpath=//span[normalize-space(text())='Geometry Indexed']/following::input[1]",
		);
		this.featureTypeBuildingGeometryFieldsTab = page.locator("xpath=//div[normalize-space(text())='Geometry Fields']");
		this.featureTypeBuildingStoredFieldsTab = page.locator("xpath=//div[normalize-space(text())='Stored Fields']");
		this.featureTypeBuildingStoredFieldsIdField = page.locator("xpath=//span[@value='id']");
		this.featureTypeBuildingStoredFieldsNameField = page.locator("xpath=//td[normalize-space(text())='name']");
		this.featureTypeBuildingStoredFieldsSpecificationField = page.locator(
			"xpath=//td[normalize-space(text())='specification']",
		);
		this.featureTypeBuildingCalculatedFieldsTab = page.locator(
			"xpath=//div[normalize-space(text())='Calculated Fields']",
		);
		this.featureTypeBuildingCalculatedFieldsEquipmentField = page.locator(
			"xpath=//td[normalize-space(text())='equipment']",
		);
		this.featureTypeBuildingLayoutTab = page.locator("xpath=//div[normalize-space(text())='Layout']");
		this.featureTypeBuildingLayoutIdField = page.locator("xpath=//td[normalize-space(text())='id']");
		this.featureTypeBuildingSearchesTab = page.locator("xpath=//div[normalize-space(text())='Searches']");
		this.featureTypeBuildingSearchesDisplayNameField = page.locator("xpath=//input[@value='pop']");
		this.featureTypeBuildingQueriesTab = page.locator("xpath=//div[normalize-space(text())='Queries']");
		this.featureTypeBuildingQueriesDisplayValueField = page.locator("xpath=(//input[@value='pop'])[2]");
	}

	async navigateConfiguration() {
		await this.configurationApplication.click();
	}

	async navigateApplication() {
		await this.expectToHaveText(this.applicationLink, "Applications");
		await this.applicationLink.click();
	}

	async expectApplicationDetails() {
		await this.expectToContainText(this.cell, "comms_custom");
		await this.expectToContainText(this.cell, "Network Manager");
		await this.expectToContainText(this.cell, "modules/comms_custom_tm/js/main.comms_custom_tm.js");
		await this.expectToContainText(this.cell, "config");
		await this.expectToContainText(this.cell, "Configuration");
		await this.expectToContainText(this.cell, "main.config.js");
		await this.expectToContainText(this.cell, "mywcom");
		await this.expectToContainText(this.cell, "Comms");
		await this.expectToContainText(this.cell, "modules/comms/js/main.mywcom.js");
		await this.expectToContainText(this.cell, "standard");
		await this.expectToContainText(this.cell, "Standard");
		await this.expectToContainText(this.cell, "main.standard.js");
	}

	async navigateRoles() {
		await this.expectToHaveText(this.rolesLink, "Roles");
		await this.rolesLink.click();
	}

	async expectRolesDetails() {
		await this.expectToContainText(this.cell, "Administrator");
		await this.expectToContainText(this.cell, "Data Editor");
		await this.expectToContainText(this.cell, "Data Viewer");
		await this.expectToContainText(this.cell, "NM_Administrator");
		await this.expectToContainText(this.cell, "NM_Betrachter");
		await this.expectToContainText(this.cell, "NM_Betrachter_Markup");
		await this.expectToContainText(this.cell, "NM_Entwerfer");
		await this.expectToContainText(this.cell, "NM_Open_All_Designs");
	}

	async navigateUsers() {
		await this.expectToHaveText(this.usersLink, "Users");
		await this.usersLink.click();
	}

	async expectUsersDetails() {
		await this.expectToContainText(this.cell, "admin");
		await this.expectToContainText(
			this.cell,
			"Administrator,Data Editor,Data Viewer,NM_Administrator,NM_Betrachter,NM_Betrachter_Markup,NM_Entwerfer,NM_Open_All_Designs",
		);
		await this.expectToContainText(this.cell, "default");
		await this.expectToContainText(this.cell, "Administrator,Data Editor,Data Viewer,NM_Betrachter_Markup");
	}

	async navigateFeatures() {
		await this.expectToHaveText(this.featuresLink, "Features");
		await this.featuresLink.click();
	}

	async expectFeatureDetails() {
		await this.expectToContainText(this.cell, "attachment_file");
		await this.expectToContainText(this.cell, "attachment_photo");
		await this.expectToContainText(this.cell, "blown_fiber_bundle");
		await this.expectToContainText(this.cell, "blown_fiber_bundle_spec");
		await this.expectToContainText(this.cell, "blown_fiber_tube");
		await this.expectToContainText(this.cell, "blown_fiber_tube_endpoint");
		await this.expectToContainText(this.cell, "blown_fiber_tube_endpoint_spec");
		await this.expectToContainText(this.cell, "blown_fiber_tube_junction");
		await this.expectToContainText(this.cell, "blown_fiber_tube_junction_spec");
		await this.expectToContainText(this.cell, "blown_fiber_tube_spec");
		await this.expectToContainText(this.cell, "building");
		await this.expectToContainText(this.cell, "building_spec");
		await this.expectToContainText(this.cell, "cabinet");
		await this.expectToContainText(this.cell, "cabinet_spec");
		await this.expectToContainText(this.cell, "conduit");
		await this.expectToContainText(this.cell, "conduit_spec");
		await this.expectToContainText(this.cell, "design");
		await this.expectToContainText(this.cell, "dp_area");
		await this.expectToContainText(this.cell, "fcp_area");
		await this.expectToContainText(this.cell, "fiber_cable");
		await this.expectToContainText(this.cell, "fiber_cable_spec");
		await this.expectToContainText(this.cell, "fiber_splice_tray");
		await this.expectToContainText(this.cell, "fiber_splice_tray_spec");
		await this.expectToContainText(this.cell, "fiber_splitter");
		await this.expectToContainText(this.cell, "fiber_splitter_spec");
		await this.expectToContainText(this.cell, "flat");
		await this.expectToContainText(this.cell, "ftth_circuit");
		await this.expectToContainText(this.cell, "fttx_area");
		await this.expectToContainText(this.cell, "fwdm");
		await this.expectToContainText(this.cell, "fwdm_card");
		await this.expectToContainText(this.cell, "fwdm_card_spec");
		await this.expectToContainText(this.cell, "gf_ta");
		await this.expectToContainText(this.cell, "gf_ta_spec");
		await this.expectToContainText(this.cell, "iqgapp_markup_line");
		await this.expectToContainText(this.cell, "iqgapp_markup_photo");
		await this.expectToContainText(this.cell, "iqgapp_markup_photo_item");
		await this.expectToContainText(this.cell, "iqgapp_markup_point");
		await this.expectToContainText(this.cell, "iqgapp_markup_polygon");
		await this.expectToContainText(this.cell, "iqgapp_markup_text");
		await this.expectToContainText(this.cell, "iqgapp_task_queue");
		await this.expectToContainText(this.cell, "junction_box");
		await this.expectToContainText(this.cell, "junction_box_spec");
		await this.expectToContainText(this.cell, "manhole");
		await this.expectToContainText(this.cell, "manhole_spec");
		await this.expectToContainText(this.cell, "mdu");
		await this.expectToContainText(this.cell, "mywcom_change_detail");
		await this.expectToContainText(this.cell, "mywcom_coax_connection");
		await this.expectToContainText(this.cell, "mywcom_coax_segment");
		await this.expectToContainText(this.cell, "mywcom_coax_slack");
		await this.expectToContainText(this.cell, "mywcom_conduit_run");
		await this.expectToContainText(this.cell, "mywcom_copper_connection");
		await this.expectToContainText(this.cell, "mywcom_copper_segment");
		await this.expectToContainText(this.cell, "mywcom_copper_slack");
		await this.expectToContainText(this.cell, "mywcom_data_block");
		await this.expectToContainText(this.cell, "mywcom_fiber_connection");
		await this.expectToContainText(this.cell, "mywcom_fiber_segment");
		await this.expectToContainText(this.cell, "mywcom_fiber_slack");
		await this.expectToContainText(this.cell, "mywcom_labor_cost");
		await this.expectToContainText(this.cell, "mywcom_line_of_count");
		await this.expectToContainText(this.cell, "mywcom_line_of_count_section");
		await this.expectToContainText(this.cell, "mywcom_route_junction");
		await this.expectToContainText(this.cell, "myw_extract_region");
		await this.expectToContainText(this.cell, "myw_on_demand_extract");
		await this.expectToContainText(this.cell, "note");
		await this.expectToContainText(this.cell, "odf_cassette");
		await this.expectToContainText(this.cell, "odf_cassette_spec");
		await this.expectToContainText(this.cell, "odf_frame");
		await this.expectToContainText(this.cell, "odf_frame_spec");
		await this.expectToContainText(this.cell, "oh_route");
		await this.expectToContainText(this.cell, "private_layer");
		await this.expectToContainText(this.cell, "rack");
		await this.expectToContainText(this.cell, "rack_building");
		await this.expectToContainText(this.cell, "rack_building_spec");
		await this.expectToContainText(this.cell, "rack_spec");
		await this.expectToContainText(this.cell, "radio_antenna");
		await this.expectToContainText(this.cell, "radio_antenna_spec");
		await this.expectToContainText(this.cell, "rifu_cassette");
		await this.expectToContainText(this.cell, "rifu_cassette_spec");
		await this.expectToContainText(this.cell, "rifu_frame");
		await this.expectToContainText(this.cell, "rifu_frame_spec");
		await this.expectToContainText(this.cell, "room");
		await this.expectToContainText(this.cell, "splice_closure");
		await this.expectToContainText(this.cell, "splice_closure_spec");
		await this.expectToContainText(this.cell, "subframe");
		await this.expectToContainText(this.cell, "subframe_spec");
		await this.expectToContainText(this.cell, "ug_route");
		await this.expectToContainText(this.cell, "ug_route_endpoint");
		await this.expectToContainText(this.cell, "ug_route_protocol");
		await this.expectToContainText(this.cell, "wall_box");
		await this.expectToContainText(this.cell, "wall_box_spec");
	}

	async verifyFeatureTypeBuilding() {
		await this.expectToContainText(this.featureTypeBuilding, "building");
		await this.featureTypeBuilding.click();
		await this.expectElementVisible(this.featureTypeBuildingBasicDatasource);
		await this.expectElementVisible(this.featureTypeBuildingBasicName);
		await this.expectElementVisible(this.featureTypeBuildingBasicDisplayName);
		await this.expectElementVisible(this.featureTypeBuildingBasicTitle);
		await this.expectElementVisible(this.featureTypeBuildingBasicTrackChanges);
		await this.expectElementVisible(this.featureTypeBuildingBasicVersioned);
		await this.expectElementVisible(this.featureTypeBuildingBasicEditable);
		await this.expectElementVisible(this.featureTypeBuildingBasicInsertGUI);
		await this.expectElementVisible(this.featureTypeBuildingBasicUpdateGUI);
		await this.expectElementVisible(this.featureTypeBuildingBasicDeleteGUI);
		await this.expectElementVisible(this.featureTypeBuildingBasicGeometryIndexed);
		await this.expectToContainText(this.featureTypeBuildingGeometryFieldsTab, "Geometry Fields");
		await this.featureTypeBuildingGeometryFieldsTab.click();
		await this.expectToContainText(this.cell, "location");
		await this.expectToContainText(this.featureTypeBuildingStoredFieldsTab, "Stored Fields");
		await this.featureTypeBuildingStoredFieldsTab.click();
		await this.expectElementVisible(this.featureTypeBuildingStoredFieldsIdField);
		await this.expectElementVisible(this.featureTypeBuildingStoredFieldsNameField);
		await this.expectElementVisible(this.featureTypeBuildingStoredFieldsSpecificationField);
		await this.expectToContainText(this.featureTypeBuildingCalculatedFieldsTab, "Calculated Fields");
		await this.featureTypeBuildingCalculatedFieldsTab.click();
		await this.expectElementVisible(this.featureTypeBuildingCalculatedFieldsEquipmentField);
		await this.expectToContainText(this.featureTypeBuildingLayoutTab, "Layout");
		await this.featureTypeBuildingLayoutTab.click();
		await this.expectElementVisible(this.featureTypeBuildingLayoutIdField);
		await this.expectToContainText(this.featureTypeBuildingSearchesTab, "Searches");
		await this.featureTypeBuildingSearchesTab.click();
		await this.expectElementVisible(this.featureTypeBuildingSearchesDisplayNameField);
		await this.expectToContainText(this.featureTypeBuildingQueriesTab, "Queries");
		await this.featureTypeBuildingQueriesTab.click();
		await this.expectElementVisible(this.featureTypeBuildingQueriesDisplayValueField);
	}
}
