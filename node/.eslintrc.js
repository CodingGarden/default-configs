module.exports = {
  root: true,
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  ignorePatterns: ['node_modules/**/*.js'],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
