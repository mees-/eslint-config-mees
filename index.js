const eslint = require('./rules/eslint')
const react = require('./rules/react')

module.exports = {
  extends: [
    'eslint:all',
    'plugin:react/all'
  ],
  plugins: [
    'react'
  ],
  rules: Object.assign(Object.create(null),
    eslint,
    react
  )
}
