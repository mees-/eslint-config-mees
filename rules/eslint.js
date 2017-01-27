module.exports = {
  'arrow-parens': ['error', 'as-needed', {
    requireForBlockBody: true
  }],
  'capitalized-comments': 'off',
  'class-methods-use-this': 'off',
  'dot-location': ['error', 'property'],
  indent: ['error', 2, {
    SwitchCase: 1
  }],
  'init-declarations': 'off',
  'jsx-quotes': ['error', 'prefer-single'],
  'line-comment-position': 'off',
  'newline-after-var': 'off',
  'new-cap': 'off',
  'no-console': 'off',
  'no-extra-parens': 'off',
  'no-inline-comments': 'off',
  'no-invalid-this': 'off',
  'no-magic-numbers': 'off',
  'no-multi-assign': 'off',
  'no-negated-condition': 'off',
  'no-process-env': 'off',
  'no-sync': 'off',
  'no-unused-vars': ['warn', {
    varsIgnorePattern: 'React'
  }],
  'object-curly-newline': 'off',
  'object-curly-spacing': ['error', 'always'],
  'one-var': ['error', 'never'],
  'padded-blocks': ['error', 'never'],
  'quote-props': ['error', 'as-needed'],
  quotes: ['error', 'single'],
  radix: ['warn', 'as-needed'],
  'require-jsdoc': 'off',
  semi: ['error', 'never'],
  'sort-imports': 'off',
  'sort-keys': 'off',
  'space-before-function-paren': ['error', 'never'],
  strict: 'off',
  'template-curly-spacing': ['error', 'always']
}
