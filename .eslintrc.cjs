module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'eslint-config-prettier',
  ],
  plugins: ['@typescript-eslint', 'import'],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['ts'],
    },
    'import/resolver': {
      typescript: {
        alywaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    'import/no-unresolved': 'error',
  },
};
