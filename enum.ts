enum LoginMode {
	app = "app",
	email = "email",
	social = "social",
}

type LogMode = "app" | "email" | "social";

console.log(LoginMode.email);
console.log(LoginMode.social);

function initiateLogin(mode: LoginMode): number {
	return 0;
}

function initiateLog(mode: LogMode) {}

initiateLogin(LoginMode["app"]);

initiateLog("app");

export const LogiMode = {
	device: "device",
	email: "email",
	social: "social",
} as const;

// export type LogiMode = keyof (keyof LogiMode);
