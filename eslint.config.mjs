import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import jestPlugin from 'eslint-plugin-jest';
import jestDom from 'eslint-plugin-jest-dom';
import testingLibrary from 'eslint-plugin-testing-library';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';

export default [
  {
    ignores: ['.next/', 'node_modules/', 'out/', 'coverage/', '.sanity/'],
  },

  js.configs.recommended,

  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],

  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  jsxA11y.flatConfigs.recommended,

  nextPlugin.configs.recommended,

  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'react/prop-types': 'off',
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          shorthandFirst: true,
          shorthandLast: false,
          multiline: 'last',
          ignoreCase: true,
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],
      'no-underscore-dangle': 'off',
    },
  },

  {
    files: ['**/*.test.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
  {
    files: ['**/*.test.{js,jsx}'],
    ...jestPlugin.configs['flat/recommended'],
  },
  {
    files: ['**/*.test.{js,jsx}'],
    ...jestPlugin.configs['flat/style'],
  },
  {
    files: ['**/*.test.{js,jsx}'],
    ...jestDom.configs['flat/recommended'],
  },
  {
    files: ['**/*.test.{js,jsx}'],
    ...testingLibrary.configs['flat/react'],
  },

  prettierRecommended,
];
