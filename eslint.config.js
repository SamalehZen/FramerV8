import typescriptEslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactPlugin from 'eslint-plugin-react'

export default typescriptEslint.config(
  {
    ignores: ['dist', 'node_modules'],
  },
  ...typescriptEslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react': reactPlugin,
    },
    rules: {
      'react-hooks/refs': 'off',
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  }
)
