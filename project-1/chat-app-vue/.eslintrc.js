module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'no-unneeded-ternary': 'off',
    'import/no-cycle': 'off',
    'consistent-return': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
