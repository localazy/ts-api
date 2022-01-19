module.exports = {
  root: true,
  env: {
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: [
    // 'airbnb-base',
    // 'airbnb-typescript/base',
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn',
    'max-len': ["error", { "code": 120 }]
  },
};
