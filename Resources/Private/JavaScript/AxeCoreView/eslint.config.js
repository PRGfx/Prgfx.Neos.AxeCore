/* eslint-env node */
const { defineConfig } = require('eslint/config');

const tsParser = require('@typescript-eslint/parser');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const globals = require('globals');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

module.exports = defineConfig([ {
    languageOptions: {
        parser: tsParser,

        globals: {
            ...globals.browser,
            ...globals.commonjs,
        },

        'sourceType': 'module',

        parserOptions: {
            'ecmaFeatures': {
                'jsx': true,
            },
        },
    },

    plugins: {
        '@typescript-eslint': typescriptEslint,
    },

    extends: compat.extends(
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ),

    'settings': {
        'react': {
            'version': 'detect',
        },
    },

    'rules': {
        'indent': [ 'error', 4, {
            'SwitchCase': 1,
        } ],

        'quotes': [ 'error', 'single' ],
        'semi': [ 'error', 'always' ],

        'comma-dangle': [ 'error', {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'ignore',
        } ],

        'object-curly-spacing': [ 'warn', 'always', {
            'objectsInObjects': true,
            'arraysInObjects': true,
        } ],

        'array-bracket-spacing': [ 'warn', 'always' ],

        'no-console': [ 'warn', {
            'allow': [ 'warn', 'error' ],
        } ],

        'space-infix-ops': [ 2 ],
        'no-trailing-spaces': [ 'error' ],
        'comma-spacing': [ 'error' ],
        'keyword-spacing': [ 'error' ],
        'arrow-spacing': [ 'error' ],
        'key-spacing': [ 'error' ],

        'no-multiple-empty-lines': [ 'warn', {
            'max': 2,
        } ],

        'no-empty': [ 'error', {
            'allowEmptyCatch': true,
        } ],

        'no-empty-function': [ 'error' ],
        'react/jsx-uses-react': [ 1 ],
        'react/prop-types': [ 0 ],
        'react/display-name': [ 0 ],
    },
} ]);
