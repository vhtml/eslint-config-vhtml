module.exports = {
  root: true,
  extends: [require.resolve('./vue.js')],
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true
    }],
    'global-require': 'off'
  }
}
