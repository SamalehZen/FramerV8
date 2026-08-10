import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    ignores: ['dist/**'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      react: reactPlugin,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'react/react-in-jsx-scope': 'off',
      'no-undef': 'off', // TypeScript handles undef checks, and we use globals.browser for anything else
    },
  },
];
