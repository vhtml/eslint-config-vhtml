module.exports = {
  root: true,
  extends: [require.resolve('./index.js')],
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true
    }],
    'global-require': 'off'
  }
}
