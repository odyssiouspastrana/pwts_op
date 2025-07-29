export function getCredentials(type = "valid") {
	switch (type) {
		case "valid":
			return { username: "admin", password: "_mywWorld_" };
		case "invalid":
			return { username: "unknown_user", password: "wrong_password" };
		case "blank":
			return { username: "", password: "" };
		default:
			throw new Error(`Unknown credential type: ${type}`);
	}
}
