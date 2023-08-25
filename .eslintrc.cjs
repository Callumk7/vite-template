module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	plugins: ["react", "react-hooks", "@typescript-eslint"],
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:@typescript-eslint/stylistic",
		"prettier",
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		"react/react-in-jsx-scope": "off",
		"@typescript-eslint/consistent-type-definitions": "error",
		"@typescript-eslint/consistent-type-exports": "error",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-misused-promises": "off",
		"@typescript-eslint/no-floating-promises": "off",
		"@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/no-unsafe-member-access": "off"
	},
};
