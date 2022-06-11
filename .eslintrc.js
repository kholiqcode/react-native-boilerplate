module.exports = {
  root: true,
  plugins: ['import', 'prettier'],
  extends: ['airbnb-typescript/base', 'prettier', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-console': 2,
    'no-unused-vars': 2,
    'no-param-reassign': 2,
    'no-restricted-imports': 2,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
