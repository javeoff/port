module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  rules: {
    ['arrow-body-style']: ['error', 'as-needed'],
    ['prettier/prettier']: 'error',
    ['import/no-extraneous-dependencies']: 'error',
    ['import/no-unresolved']: 'off',
    ['import/no-useless-path-segments']: 'error',
    ['import/order']: [
      'error',
      {
        ['alphabetize']: {
          caseInsensitive: true,
          order: 'asc',
        },
        ['groups']: [
          ['builtin', 'external', 'object', 'type'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
        ['newlines-between']: 'always',
      },
    ],
    ['react/require-default-props']: 'off',
    ['react/jsx-props-no-spreading']: 'off',
    ['react/no-array-index-key']: 'off',
    ['react/prop-types']: 'off',
    ['react/react-in-jsx-scope']: 'off',
  },
  overrides: [
    {
      files: ['*.js', '*.mjs', '*.cjs'],
      rules: {
        'unicorn/prefer-module': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'no-undef': 'off'
      },
    },
  ],
  ignorePatterns: ['src/**/*.test.ts'],
};
