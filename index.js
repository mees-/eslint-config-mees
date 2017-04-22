module.exports = {
  extends: [
    'eslint:all',
    'plugin:react/all',
    'plugin:flowtype/recommended'
  ],
  plugins: [
    'react',
    'flowtype'
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  },
  rules: Object.assign({},
    {
      'array-callback-return': 'off',
      'arrow-parens': ['error', 'as-needed', {
        requireForBlockBody: false
      }],
      'callback-return': 'off',
      'capitalized-comments': 'off',
      'class-methods-use-this': 'off',
      'consistent-return': 'off',
      'dot-location': ['error', 'property'],
      'id-length': 'off',
      indent: ['error', 2, {
        SwitchCase: 1
      }],
      'init-declarations': 'off',
      'jsx-quotes': ['error', 'prefer-single'],
      'line-comment-position': 'off',
      'max-params': 'off',
      'max-statements': 'off',
      'new-cap': 'off',
      'newline-after-var': 'off',
      'no-await-in-loop': 'off',
      'no-console': 'off',
      'no-else-return': 'off',
      'no-extra-parens': 'off',
      'no-inline-comments': 'off',
      'no-invalid-this': 'off',
      'no-magic-numbers': 'off',
      'no-multi-assign': 'off',
      'no-negated-condition': 'off',
      'no-plusplus': 'off',
      'no-process-env': 'off',
      'no-sync': 'off',
      'no-underscore-dangle': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': ['warn', {
        varsIgnorePattern: 'React'
      }],
      'object-curly-newline': 'off',
      'object-curly-spacing': ['error', 'always'],
      'object-property-newline': ['warn', {
        allowMultiplePropertiesPerLine: true
      }],
      'one-var': ['error', 'never'],
      'padded-blocks': ['error', 'never'],
      'quote-props': ['error', 'as-needed'],
      quotes: ['error', 'single', {
        allowTemplateLiterals: true,
        avoidEscape: false
      }],
      radix: ['warn', 'as-needed'],
      'require-await': 'off',
      'require-jsdoc': 'off',
      semi: ['error', 'never'],
      'sort-imports': 'off',
      'sort-keys': 'off',
      'space-before-function-paren': ['error', 'never'],
      strict: 'off',
      'template-curly-spacing': ['error', 'always']
    },
    {
      'react/display-name': 'warn',
      'react/jsx-curly-spacing': ['error', 'always', {
        spacing: {
          objectLiterals: 'never'
        }
      }],
      'react/jsx-filename-extension': ['warn', { extensions: ['js'] }],
      'react/jsx-handler-names': 'off',
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-max-props-per-line': ['warn', { maximum: 3 }],
      'react/jsx-no-bind': ['warn', {
        allowArrowFunctions: true
      }],
      'react/jsx-no-literals': 'off',
      'react/jsx-sort-props': 'off',
      'react/prop-types': 'off',
      'react/require-optimization': 'off'
    }
  )
}
