/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', path.resolve(process.cwd(), 'src')]
        ],
        extensions: ['.ts', '.js', '.jsx', '.tsx'] // 可忽略的后缀名
      }
    }
  },
  rules: {
    'max-len': 'off',
    radix: 'off',
    semi: ['error', 'never'],
    'no-irregular-whitespace': 'off',
    'no-param-reassign': 'off',
    'no-alert': 'error',
    'no-debugger': 'error',
    'no-console': 'warn',
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true
    }],
    'no-multi-assign': 'off',
    'no-empty': ['error', {
      allowEmptyCatch: true
    }],
    'no-use-before-define': ['error', 'nofunc'],
    'comma-dangle': ['error', 'never'],
    'no-useless-constructor': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': ['error', {
      allowAfterThis: true,
      allowAfterSuper: true,
      enforceInMethodNames: false
    }],
    'consistent-return': 'off',
    'func-names': 'off',
    camelcase: 'off',
    // https://github.com/babel/babel-eslint/issues/681
    'template-curly-spacing': 'off',
    indent: ['error', 2, {
      SwitchCase: 1,
      ignoredNodes: [
        'TemplateLiteral'
      ]
    }],
    // import
    'import/no-cycle': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never'
    }],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['./*.{js,ts}']
    }],
    // react
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', 'tsx'] }],
    'react/react-in-jsx-scope': 'off',
    // jsx-a11y
    'jsx-a11y/anchor-is-valid': 'off'
  }
}
