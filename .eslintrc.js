module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'no-console': (process.env.NODE_ENV === 'production') ? 'error' : 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-multiple-empty-lines': ["error", { "max": 1}],
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'import/prefer-default-export': 'off'
  },
};
