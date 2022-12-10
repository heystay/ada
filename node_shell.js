const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'e8e86b7b-7813-4628-b426-f190177c4733'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
