module.exports = {
  rules: {
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-for': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'line-break-style': 'off',
    'no-unused-vars': 'error',
    'no-console': 'warn',
    'no-debugger': 'off',
    'no-trailing-spaces': 'error',
    'prefer-promise-reject-errors': 'off',
    'no-plusplus': 'off',
    'max-len': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off'
  },
  extends: [
    'plugin:vue/base',
    '@vue/airbnb',
  ],
  overrides: [
    {
      files: ['./tests/functional/**/*.js',
      ],
      extends: [],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
          },
        ],
      },
    },
    {
      files: [
        './src/**/*.spec.{j,t}s?x',
      ],
      env: {
        jest: true,
      },
    },
  ],
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaVersion: 6,
  },
};
