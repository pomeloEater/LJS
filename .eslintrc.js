module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended",
    'plugin:prettier/recommended', (eslint - plugin - prettier)
  ],
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    /* changed comma-dangle default...ironically,
           we can't use a dangling comma here because
           this is a JSON file. */
    "comma-dangle": ["error", "always-multiline"],
    indent: ["error", 2],
    "linebreak-style": ["error", "windows"],
    semi: ["error", "always"],
    "no-console": ["off"],
  },
};