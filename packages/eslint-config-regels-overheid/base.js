module.exports = {
  ignorePatterns: ['dist', 'build', 'node_modules', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['prettier', 'simple-import-sort'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // External packages.
          ['^@nest', '^@?\\w'],
          // Internal packages.
          ['^@regels-overheid'],
          // Internal folders.
          ['^src/'],
          // Parent imports.
          ['^\\.\\.'],
          // Other relative imports. Put same-folder imports last.
          ['^\\./(?=[^/]*?/)', '^\\.'],
          // Style and types imports.
          ['\\.types'],
        ],
      },
    ],
  },
};
