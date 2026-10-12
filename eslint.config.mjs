import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import reactHooks from "eslint-plugin-react-hooks";
import { reactRefresh } from "eslint-plugin-react-refresh";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import tseslint from "typescript-eslint";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

const eslintConfig = defineConfig([
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  ...nextVitals,
  ...nextTs,
  reactRefresh.configs.next(),
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    extends: [
      eslintPluginUnicorn.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      pluginReact.configs.flat.recommended,
    ],
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      globals: globals.builtin,
    },
    plugins: {},
    rules: {
      "unicorn/prefer-module": "error",

      "unicorn/empty-brace-spaces": "warn",
      "unicorn/error-message": "error",
      "unicorn/no-console-spaces": "warn",
      "unicorn/no-anonymous-default-export": "error",
      "unicorn/no-leading-empty-lines": "error",
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
        },
      ],
      "unicorn/logical-assignment-operators": "off",
      "unicorn/default-export-style": [
        "error",
        {
          functions: "inline",
          classes: "separate",
        },
      ],
      "unicorn/consistent-function-scoping": [
        "error",
        {
          checkArrowFunctions: false,
        },
      ],
      "unicorn/switch-case-braces": ["error", "always"],
      "unicorn/relative-url-style": ["error", "always"],
      "unicorn/import-style": [
        "error",
        {
          styles: {
            util: false,
            path: {
              named: true,
            },
          },
        },
      ],
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "none",
          argsIgnorePattern: "^_",
        },
      ],
      semi: "error",
      "no-console": "error",
      "no-debugger": "error",
      quotes: ["error", "double"],
      "comma-dangle": ["error", "always-multiline"],
      "max-lines": ["warn", 250],
      "max-len": [
        "error",
        {
          code: 120,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreComments: true,
        },
      ],
      "react/display-name": "off",
    },
  },
]);

export default eslintConfig;
