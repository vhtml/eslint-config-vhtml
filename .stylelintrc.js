module.exports = {
  extends: [require.resolve('./scss.js')],
  rules: {
    'unit-no-unknown': [true, {'ignoreUnits': [
      'rpx'
    ]}]
  }
}
