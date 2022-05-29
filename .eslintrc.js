module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'react/prop-types': 0,
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-unresolved': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
        mjs: 'never',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
