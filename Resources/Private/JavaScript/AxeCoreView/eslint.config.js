/* eslint-env node */
const globals = require('globals');
const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const eslintReact = require('eslint-plugin-react');


module.exports = tseslint.config([
    {
        files: [ '*.js' ],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
        },
    },
    {
        files: [ '**/*.{ts,tsx}', '**/*.{js,jsx}' ],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.commonjs,
            },

            parserOptions: {
                'ecmaFeatures': {
                    'jsx': true,
                },
            },
        },

        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
        ],

        plugins: {
            react: eslintReact,
        },

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
    },
]);
