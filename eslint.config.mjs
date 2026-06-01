import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Scripts utilitarios de Node (no forman parte de la app)
    "export-context.js",
    "add-url.js",
  ]),
  // Componentes/hooks generados por shadcn/ui: código vendido, se relajan
  // reglas estrictas que no aportan valor en boilerplate de terceros.
  {
    files: ["src/components/ui/**", "src/hooks/**"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
]);

export default eslintConfig;
