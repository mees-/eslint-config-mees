module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:all',
    'plugin:react/all',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: [
    'react',
    'import'
  ],
  rules: {
    'dot-location': ['error', 'property'],
    indent: ['error', 2],
    'no-magic-numbers': 'off',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'sort-imports': 'off',
    'sort-keys': 'off',
    strict: 'off'
  }
}
