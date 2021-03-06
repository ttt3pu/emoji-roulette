module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    extraFileExtensions: [".svelte"],
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  settings: {
    "svelte3/typescript": require("typescript"),
  },
  plugins: ["svelte3", "@typescript-eslint"],
  overrides: [
    {
      files: ["**/*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  ignorePatterns: ["dist"],
  rules: {
    indent: ["error", 2],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
  },
};
