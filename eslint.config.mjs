import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["node_modules", "JSBasics"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...js.configs.recommended,
    languageOptions: {
      globals: globals.node,
    },
  },
];