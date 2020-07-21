module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console':'off',
    'no-unused-vars':'off',
    'handle-callback-err':'off',
    'no-undef':'off',
    'vue/no-parsing-error':'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
