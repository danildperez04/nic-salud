import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node },
    rules: {
      'quotes': ['warn', 'single'],
      'semi': ['warn'],
    }
  },
  {
    files: ['**/*.{ts,mts,cts}'],
    plugins: { '@typescript-eslint': tseslint.plugin },
    extends: [tseslint.configs.recommended],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
      globals: globals.node,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', {
        'argsIgnorePattern': '^_'
      }]
    }
  },
]);