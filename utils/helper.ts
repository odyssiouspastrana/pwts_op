export function getCredentials(type = "valid") {
	switch (type) {
		case "valid":
			return { username: process.env.IQGEO_USER || "", password: process.env.IQGEO_PASS || "" };
		case "invalid":
			return { username: "unknown_user", password: "wrong_password" };
		case "blank":
			return { username: "", password: "" };
		default:
			throw new Error(`Unknown credential type: ${type}`);
	}
}
