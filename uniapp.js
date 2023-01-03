module.exports = {
  extends: [require.resolve('./vue.js')],
  globals: {
    App: 'writable',
    Page: 'writable',
    uni: 'readonly',
    getCurrentPages: 'readonly',
    getApp: 'readonly'
  }
}
