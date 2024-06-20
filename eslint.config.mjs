import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    languageOptions: {
      globals: {
        ...globals.node,
      }
    }
  },

  // Turns off all rules that are unnecessary or might conflict with Prettier.
  prettierConfig,

  // recommended eslint config
  eslint.configs.recommended,

  // strict: a superset of recommended that includes more opinionated rules which may also catch bugs.
  ...tseslint.configs.strict,

  // stylistic: additional rules that enforce consistent styling without significantly catching bugs or changing logic.
  ...tseslint.configs.stylistic,

  {
    ignores: [
      'node_modules',
      '*.d.ts',
      ".pnp.cjs",
      ".yarn/*",
      ".node_modules",
      "dist/*",
      "coverage",
      "docker",
    ]
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  }
);
