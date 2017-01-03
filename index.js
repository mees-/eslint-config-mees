/* global module */
module.exports = {
  plugins: ['react'],
  rules: {
    'accessor-pairs': 'error',
    'array-bracket-spacing': 'error',
    'array-callback-return': 'error',
    'arrow-body-style': 'error',
    'arrow-parens': [
      'error',
      'as-needed',
      { requireForBlockBody: true }
    ],
    'arrow-spacing': [
      'error',
      {
        after: true,
        before: true
      }
    ],
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    'callback-return': [
      'error',
      [
        'callback',
        'cb'
      ]
    ],
    'camelcase': 'error',
    'comma-dangle': 'error',
    'comma-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    'comma-style': 'error',
    'complexity': 'error',
    'computed-property-spacing': [
      'error',
      'never'
    ],
    'consistent-return': 'off',
    'consistent-this': 'error',
    'curly': ['error', 'multi-line'],
    'default-case': 'off',
    'dot-location': [
      'error',
      'property'
    ],
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': 'error',
    'func-names': [
      'error',
      'always'
    ],
    'func-style': [
      'off',
      'expression',
      { allowArrowFunctions: true }
    ],
    'generator-star-spacing': 'error',
    'global-require': 'error',
    'guard-for-in': 'error',
    'handle-callback-err': 'error',
    'id-blacklist': 'error',
    'id-length': 'off',
    'id-match': 'error',
    'indent': [
      'error',
      2,
      { SwitchCase: 1 }
    ],
    'init-declarations': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'linebreak-style': [
      'error',
      'unix'
    ],
    'lines-around-comment': 'error',
    'max-depth': 'error',
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        tabWidth: 2
      }
    ],
    'max-lines': 'off',
    'max-nested-callbacks': 'error',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'error',
    'new-cap': [
      'error',
      {
        'newIsCap': true,
        'capIsNew': false
      }
    ],
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    'no-confusing-arrow': 'error',
    'no-console': 'off',
    'no-continue': 'off',
    'no-div-regex': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'off',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': 'off',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'off',
    'no-mixed-operators': 'error',
    'no-mixed-requires': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-path-concat': 'error',
    'no-plusplus': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'off',
    'no-restricted-globals': 'error',
    'no-restricted-imports': 'error',
    'no-restricted-modules': 'error',
    'no-restricted-syntax': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'error',
    'no-sync': 'off',
    'no-ternary': 'off',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'warn',
    'no-unused-vars': 'warn',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false
      }
    ],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-curly-newline': 'off',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': [
      'error',
      { allowMultiplePropertiesPerLine: true }
    ],
    'object-shorthand': 'error',
    'one-var': 'off',
    'one-var-declaration-per-line': 'error',
    'operator-assignment': 'error',
    'operator-linebreak': 'error',
    'padded-blocks': 'off',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'warn',
    'prefer-rest-params': 'off',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['warn', 'consistent'],
    'quotes': [
      'error',
      'single'
    ],
    'radix': 'off',
    'require-jsdoc': [
      'off',
      {
        require: {
          FunctionDeclaration: true,
          ClassDeclaration: true,
          MethodDefinition: true
        }
      }
    ],
    'rest-spread-spacing': [
      'error',
      'never'
    ],
    'semi': ['error', 'never'],
    'semi-spacing': 'error',
    'sort-imports': 'off',
    'sort-vars': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        named: 'never',
        anonymous: 'always'
      }
    ],
    'space-in-parens': [
      'error',
      'never'
    ],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'template-curly-spacing': ['error', 'always'],
    'unicode-bom': [
      'error',
      'never'
    ],
    'valid-jsdoc': 'error',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside'],
    'wrap-regex': 'error',
    'yield-star-spacing': 'error',
    'yoda': 'error',
    // rules from the react plugin
    'react/jsx-uses-react': 2,
    'react/no-multi-comp': 2,
    'react/prop-types': 2,
    'react/require-default-props': 2,
    'react/display-name': 2,
    'react/jsx-wrap-multilines': 2,
    'react/self-closing-comp': 2,
    'react/jsx-no-comment-textnodes': 2,
    'react/no-array-index-key': 2,
    'react/no-danger': 2,
    'react/no-set-state': 2,
    'react/no-is-mounted': 2,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-render-return-value': 2,
    'react/no-unescaped-entities': 2,
    'react/react-in-jsx-scope': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-handler-names': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-no-bind': 2,
    'react/jsx-no-undef': 2,
    'react/no-unknown-property': 2,
    'react/jsx-curly-spacing': 2,
    'react/jsx-equals-spacing': 2,
    'react/jsx-sort-props': 2,
    'react/sort-prop-types': 2,
    'react/jsx-boolean-value': 2,
    'react/sort-comp': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-max-props-per-line': 2,
    'react/jsx-no-literals': 2,
    'react/jsx-indent-props': 2,
    'react/jsx-indent': 2,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-space-before-closing': 2,
    'react/no-direct-mutation-state': 2,
    'react/forbid-component-props': 2,
    'react/forbid-prop-types': 2,
    'react/prefer-es6-class': 2,
    'react/jsx-key': 2,
    'react/no-string-refs': 2,
    'react/prefer-stateless-function': 2,
    'react/require-render-return': 2,
    'react/jsx-first-prop-new-line': 2,
    'react/jsx-no-target-blank': 2,
    'react/jsx-filename-extension': 2,
    'react/require-optimization': 2,
    'react/no-find-dom-node': 2,
    'react/no-danger-with-children': 2,
    'react/style-prop-object': 2,
    'react/no-unused-prop-types': 2,
    'react/no-children-prop': 2,
    'react/jsx-tag-spacing': 2

  }
}
