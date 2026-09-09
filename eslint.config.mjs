import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import security from "eslint-plugin-security";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      security,
    },
    rules: {
      ...security.configs.recommended.rules,
      "security/detect-object-injection": "off",
      "security/detect-possible-timing-attacks": "warn",
      "security/detect-non-literal-fs-filename": "off",
    },
  },
  {
    files: ["server.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-var-requires": "off",
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "public/**",
    "node_modules/**",
  ]),
]);

export default eslintConfig;