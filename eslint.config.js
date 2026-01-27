module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:astro/recommended", "prettier"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
    },
  ],
  rules: {
    "no-unused-vars": "warn",
  },
};
