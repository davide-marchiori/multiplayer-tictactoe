module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    // You can disable the no-undef rule for these specific files
    "no-undef": "off",
  },
  overrides: [
    {
      files: ["tailwind.config.js", "postcss.config.js"],
      env: {
        node: true,
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
