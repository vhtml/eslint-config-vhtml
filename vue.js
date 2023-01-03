module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js', '.jsx', '.tsx'] // 可忽略的后缀名
      }
    }
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'max-len': 'off',
    radix: 'off',
    semi: ['error', 'never'],
    'no-irregular-whitespace': 'off',
    'no-param-reassign': 'off',
    'no-alert': 'error',
    'no-debugger': 'error',
    'no-console': 'off',
    'no-unused-vars': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],
    'no-multi-assign': 'off',
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],
    'no-use-before-define': ['error', 'nofunc'],
    'comma-dangle': ['error', 'never'],
    'no-useless-constructor': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    camelcase: 'off',
    // https://github.com/babel/babel-eslint/issues/681
    'template-curly-spacing': 'off',
    indent: [
      'error',
      2,
      {
        ignoredNodes: ['TemplateLiteral']
      }
    ],
    // import
    'import/no-cycle': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        // js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['./*.{js,ts}', 'scripts/*.{js,ts}', 'bin/*.{js,ts}']
      }
    ],
    'no-shadow': 'off',
    // ts
    '@typescript-eslint/no-shadow': ['error'],
    // vue
    'vue/multi-word-component-names': 'off'
  }
}
