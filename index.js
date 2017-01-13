module.exports = {
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
    'capitalized-comments': 'off',
    'dot-location': ['error', 'property'],
    indent: ['error', 2],
    'newline-after-var': 'off',
    'no-magic-numbers': 'off',
    'no-unused-vars': 'warn',
    'one-var': ['error', 'never'],
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'sort-imports': 'off',
    'sort-keys': 'off',
    strict: 'off',
    'template-curly-spacing': ['error', 'always']
  }
}
