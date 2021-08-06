module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
};
