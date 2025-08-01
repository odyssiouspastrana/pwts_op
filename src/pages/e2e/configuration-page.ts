import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base-page";

export class ConfigurationPage extends BasePage {
	private readonly configurationApplication: Locator;
	private readonly applicationLink: Locator;
	private readonly cell: Locator;
	private readonly cellTwo: Locator;
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
	private readonly featurePickLists: Locator;
	private readonly featurePickListsAsbuild: Locator;
	private readonly featurePickListsAsbuildName: Locator;
	private readonly featurePickListsAsbuildValueFirst: Locator;
	private readonly featurePickListsAsbuildValueSecond: Locator;
	private readonly featurePickListsAsbuildValueThird: Locator;
	private readonly featurePickListsAsbuildValueFourth: Locator;
	private readonly featurePickListsAsbuildValueFifth: Locator;
	private readonly featureLayers: Locator;
	private readonly featureLayersGroupsTab: Locator;

	constructor(page: Page) {
		super(page);
		this.configurationApplication = page.getByRole("link", { name: "Configuration" });
		this.applicationLink = page.getByRole("link", { name: "Applications" });
		this.cell = page.locator("xpath=//tbody[@class='ant-table-tbody']");
		this.cellTwo = page.locator("xpath=(//tbody[@class='ant-table-tbody'])[2]");
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
		this.featurePickLists = page.getByRole("link", { name: "Pick Lists" });
		this.featurePickListsAsbuild = page.locator("xpath=//b[normalize-space(text())='asbuilt_status']");
		this.featurePickListsAsbuildName = page.locator("xpath=//input[@value='asbuilt_status']");
		this.featurePickListsAsbuildValueFirst = page.locator("xpath=//input[@value='planned']");
		this.featurePickListsAsbuildValueSecond = page.locator("xpath=//input[@value='built']");
		this.featurePickListsAsbuildValueThird = page.locator("xpath=//input[@value='to_be_removed']");
		this.featurePickListsAsbuildValueFourth = page.locator("xpath=//input[@value='not_contracted']");
		this.featurePickListsAsbuildValueFifth = page.locator("xpath=//input[@value='documented']");
		this.featureLayers = page.getByRole("link", { name: "Layers" });
		this.featureLayersGroupsTab = page.locator("xpath=//div[normalize-space(text())='Groups']");
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

	async navigatePickLists() {
		await this.expectToHaveText(this.featurePickLists, "Pick Lists");
		await this.featurePickLists.click();
	}

	async expectPickListsDetails() {
		await this.expectToContainText(this.cell, "asbuilt_status");
		await this.expectToContainText(this.cell, "blown_fiber_bundle_built_type");
		await this.expectToContainText(this.cell, "blown_fiber_bundle_color_code");
		await this.expectToContainText(this.cell, "blown_fiber_bundle_tube_cross_section");
		await this.expectToContainText(this.cell, "blown_fiber_tube_cross_section");
		await this.expectToContainText(this.cell, "blown_fiber_tube_endpoint_network_function");
		await this.expectToContainText(this.cell, "blown_fiber_tube_junction_in_out_tube_dia");
		await this.expectToContainText(this.cell, "blown_fiber_tube_junction_network_function");
		await this.expectToContainText(this.cell, "building_network_function");
		await this.expectToContainText(this.cell, "cabinet_network_function");
		await this.expectToContainText(this.cell, "design_network_concept");
		await this.expectToContainText(this.cell, "design_state");
		await this.expectToContainText(this.cell, "fiber_cable_straintypes");
		await this.expectToContainText(this.cell, "fiber_splice_tray_side");
		await this.expectToContainText(this.cell, "install_company");
		await this.expectToContainText(this.cell, "junction_box_network_function");
		await this.expectToContainText(this.cell, "lease_status");
		await this.expectToContainText(this.cell, "loc_status");
		await this.expectToContainText(this.cell, "manhole_network_function");
		await this.expectToContainText(this.cell, "manhole_size");
		await this.expectToContainText(this.cell, "mantle_colors");
		await this.expectToContainText(this.cell, "manufacturer");
		await this.expectToContainText(this.cell, "mdu_network_function");
		await this.expectToContainText(this.cell, "network_area_colors");
		await this.expectToContainText(this.cell, "network_topology");
		await this.expectToContainText(this.cell, "odf_cassette_connector_type");
		await this.expectToContainText(this.cell, "oh_route_label_size");
		await this.expectToContainText(this.cell, "oh_route_type");
		await this.expectToContainText(this.cell, "radio_antenna_network_function");
		await this.expectToContainText(this.cell, "rifu_cassette_connector_type");
		await this.expectToContainText(this.cell, "surface");
		await this.expectToContainText(this.cell, "survey_evaluation");
		await this.expectToContainText(this.cell, "tube_colors");
		await this.expectToContainText(this.cell, "ug_route_classification");
		await this.expectToContainText(this.cell, "ug_route_crossing_type");
		await this.expectToContainText(this.cell, "ug_route_label_size");
		await this.expectToContainText(this.cell, "ug_route_location");
		await this.expectToContainText(this.cell, "ug_route_surface");
		await this.expectToContainText(this.cell, "ug_route_type");
		await this.expectToContainText(this.cell, "wall_box_spec_hup_type");
	}

	async navigatePickListsAsbuild() {
		await this.expectToContainText(this.featurePickListsAsbuild, "asbuilt_status");
		await this.featurePickListsAsbuild.click();
		await this.expectElementVisible(this.featurePickListsAsbuildName);
		await this.expectElementVisible(this.featurePickListsAsbuildValueFirst);
		await this.expectElementVisible(this.featurePickListsAsbuildValueSecond);
		await this.expectElementVisible(this.featurePickListsAsbuildValueThird);
		await this.expectElementVisible(this.featurePickListsAsbuildValueFourth);
		await this.expectElementVisible(this.featurePickListsAsbuildValueFifth);
	}

	async navigateLayers() {
		await this.expectToContainText(this.featureLayers, "Layers");
		await this.featureLayers.click();
	}

	async expectLayersDetails() {
		await this.expectToContainText(this.cell, "Bing");
		await this.expectToContainText(this.cell, "Bing");
		await this.expectToContainText(this.cell, "Bing Aerial");
		await this.expectToContainText(this.cell, "blown_fiber_bundles");
		await this.expectToContainText(this.cell, "blown_fiber_bundle_labels");
		await this.expectToContainText(this.cell, "blown_fiber_tubes");
		await this.expectToContainText(this.cell, "blown_fiber_tube_labels");
		await this.expectToContainText(this.cell, "cables_access");
		await this.expectToContainText(this.cell, "cables_backbone");
		await this.expectToContainText(this.cell, "cables_drop");
		await this.expectToContainText(this.cell, "cables_no_topology");
		await this.expectToContainText(this.cell, "cables_transport");
		await this.expectToContainText(this.cell, "conduits");
		await this.expectToContainText(this.cell, "conduit_labels");
		await this.expectToContainText(this.cell, "delta_structures");
		await this.expectToContainText(this.cell, "designs");
		await this.expectToContainText(this.cell, "dp_areas");
		await this.expectToContainText(this.cell, "esri_backbone_carrier_fremdnetz");
		await this.expectToContainText(this.cell, "esri_bodenklassen_bodenklassen");
		await this.expectToContainText(this.cell, "esri_gebauede_gebaude");
		await this.expectToContainText(this.cell, "esri_hosted_addresspoint_new");
		await this.expectToContainText(this.cell, "esri_hosted_moma_surface_layer");
		await this.expectToContainText(this.cell, "esri_katasterdaten_bedauungsplan_nbg_flurstuecke");
		await this.expectToContainText(this.cell, "esri_katasterdaten_kataster");
		await this.expectToContainText(this.cell, "esri_project_polygon_latest");
		await this.expectToContainText(this.cell, "Extract Regions");
		await this.expectToContainText(this.cell, "Extracts");
		await this.expectToContainText(this.cell, "fcp_areas");
		await this.expectToContainText(this.cell, "fttx_areas");
		await this.expectToContainText(this.cell, "Google");
		await this.expectToContainText(this.cell, "Google Hybrid");
		await this.expectToContainText(this.cell, "Google Sat");
		await this.expectToContainText(this.cell, "Google Traffic");
		await this.expectToContainText(this.cell, "iqgapp_markup_layer");
		await this.expectToContainText(this.cell, "mywcom_cables");
		await this.expectToContainText(this.cell, "mywcom_cable_labels");
		await this.expectToContainText(this.cell, "mywcom_cable_segments");
		await this.expectToContainText(this.cell, "mywcom_circuits");
		await this.expectToContainText(this.cell, "mywcom_coax_cables");
		await this.expectToContainText(this.cell, "mywcom_coax_cables_offset");
		await this.expectToContainText(this.cell, "mywcom_coax_equipment");
		await this.expectToContainText(this.cell, "mywcom_coax_equipment_offset");
		await this.expectToContainText(this.cell, "mywcom_conduits");
		await this.expectToContainText(this.cell, "mywcom_conduit_runs");
		await this.expectToContainText(this.cell, "mywcom_copper_cables");
		await this.expectToContainText(this.cell, "mywcom_copper_cables_offset");
		await this.expectToContainText(this.cell, "mywcom_copper_equipment");
		await this.expectToContainText(this.cell, "mywcom_copper_equipment_offset");
		await this.expectToContainText(this.cell, "mywcom_data_block");
		await this.expectToContainText(this.cell, "mywcom_equipment");
		await this.expectToContainText(this.cell, "mywcom_fiber_cables_offset");
		await this.expectToContainText(this.cell, "mywcom_fiber_equipment_offset");
		await this.expectToContainText(this.cell, "mywcom_line_of_count");
		await this.expectToContainText(this.cell, "mywcom_mixed_equipment");
		await this.expectToContainText(this.cell, "mywcom_structures");
		await this.expectToContainText(this.cell, "None");
		await this.expectToContainText(this.cell, "Notes");
		await this.expectToContainText(this.cell, "OSM");
		await this.expectToContainText(this.cell, "structures_buildings");
		await this.expectToContainText(this.cell, "structures_cabinets");
		await this.expectToContainText(this.cell, "structures_junction_boxes");
		await this.expectToContainText(this.cell, "structures_manholes");
		await this.expectToContainText(this.cell, "structures_mdus");
		await this.expectToContainText(this.cell, "structures_oh_routes");
		await this.expectToContainText(this.cell, "structures_oh_route_labels");
		await this.expectToContainText(this.cell, "structures_radio_antennas");
		await this.expectToContainText(this.cell, "structures_route_junctions");
		await this.expectToContainText(this.cell, "structures_ug_routes");
		await this.expectToContainText(this.cell, "structures_ug_route_endpoints");
		await this.expectToContainText(this.cell, "structures_ug_route_labels");
		await this.expectToContainText(this.cell, "ug_route_protocols");
		await this.expectToContainText(this.cell, "versioned_designs");
	}

	async navigateLayersGroupsTab() {
		await this.expectToContainText(this.featureLayersGroupsTab, "Groups");
		await this.featureLayersGroupsTab.click();
	}

	async expectLayersGroupDetails() {
		await this.expectToContainText(this.cellTwo, "conduits");
		await this.expectToContainText(this.cellTwo, "deltas");
		await this.expectToContainText(this.cellTwo, "esri");
		await this.expectToContainText(this.cellTwo, "labels");
		await this.expectToContainText(this.cellTwo, "mywcom_coax_group");
		await this.expectToContainText(this.cellTwo, "mywcom_coax_offset_group");
		await this.expectToContainText(this.cellTwo, "mywcom_copper_group");
		await this.expectToContainText(this.cellTwo, "mywcom_copper_offset_group");
		await this.expectToContainText(this.cellTwo, "mywcom_fiber_group");
		await this.expectToContainText(this.cellTwo, "mywcom_fiber_offset_group");
		await this.expectToContainText(this.cellTwo, "network_areas");
		await this.expectToContainText(this.cellTwo, "structures");
	}
}
