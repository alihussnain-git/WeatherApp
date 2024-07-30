module.exports = {
  root: true,
  extends: ['@react-native', 'eslint:recommended', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',

  plugins: ['react', '@typescript-eslint'],
  env: {
    'react-native/react-native': true,
    node: true,
    browser: true,
  },
  rules: {
    // React-specific rules
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',

    // Code style rules
    semi: ['error', 'always'], // Enforce semicolons
    quotes: ['error', 'single'], // Enforce single quotes
    indent: ['error', 2], // Enforce 2-space indentation
  },
};
