import { test } from "./fixtures/configuration-fixture";

test("Navigate Configuration Application and verify details", async ({ productsPage }) => {
	await productsPage.navigateConfiguration();
});
