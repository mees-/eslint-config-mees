const eslint = require('./rules/eslint')
const react = require('./rules/react')

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
  rules: Object.assign(Object.create(null),
    eslint,
    react
  )
}
