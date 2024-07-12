import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

import prettierConfig from "eslint-config-prettier";
import importPlugin from 'eslint-plugin-import';

const DEFAULT_LIBRARIES = [
  "react",
  "react-dom",
  "react-dom/client",
  "react-router-dom",
  "react-redux",
  "@reduxjs/toolkit",
  "react-query-devtools"
].join(",");

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
      import: importPlugin,
    },
    rules: {
      "@typescript-eslint/no-invalid-void-type": "off",
      "sort-imports":
      [
          "error",
          {
              ignoreCase: true,
              ignoreDeclarationSort: true
          }
      ],
      "import/order":[
        "error",
        {
          "newlines-between": "always",
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          },
          warnOnUnassignedImports: true,
          groups: [
            'builtin',  // Built-in imports (e.g., Node.js modules)
            'external', // External packages
            'internal', // Internal modules
            ['parent', 'sibling', 'index'], // Parent imports, sibling imports, and index imports
            'object',   // Object imports
            'type',     // Type imports
            'unknown',  // Unknown or ungrouped imports
          ],
          pathGroups: [
            {
              pattern: `{${DEFAULT_LIBRARIES}}`,
              group: 'external',
              position: "before"
            },
            {
              pattern: '**/*.+(svg|png|jpg|jpeg|gif|bmp)',
              group: 'unknown',
              position: 'before',
            },
            {
              pattern: '*.{less,css}',
              group: 'unknown',
              patternOptions: { matchBase: true },
              position: 'after'
            }
          ],
          "pathGroupsExcludedImportTypes": []
        }
      ]
    },
  }
);
