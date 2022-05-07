# Eslint 规范

## usage

1. yarn add eslint@^7.5.0 eslint-config-vhtml -D
2. config

```js
  module.exports = {
    root: true,
    extends: [
      'vhtml'
    ]
  }
```

## includes

- configs: eslint-config-airbnb-base eslint-config-react-app @typescript-eslint/eslint-plugin
- parser: babel-eslint @typescript-eslint/parser
