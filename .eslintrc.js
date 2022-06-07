module.exports = {
  root: true,
  plugins: ['import', 'prettier'],
  extends: ['airbnb-typescript/base', 'prettier'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
