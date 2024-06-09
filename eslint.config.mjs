import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

export default tseslint.config(
  {
    // config with just ignores is the replacement for `.eslintignore`
    ignores: [
      ".pnp.cjs",
      ".yarn",
      "**/.yarn/**",
      ".node_modules",
      "dist",
      "**/dist/**",
      "**/build/**",
      "**/dist/**",
      "coverage",
      "docker",
    ]
  },

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
  ...tseslint.configs.stylistic
);
