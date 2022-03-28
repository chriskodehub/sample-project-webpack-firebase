module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'standard',
    ],
    plugins: ['import'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        // enable additional rules
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-console': 'off',
        'import/extensions': ['error', 'never'],
        'import/no-unresolved': [2, { ignore: ['\\bhttp.*'] }],
        'require-jsdoc': 'off',
        'comma-dangle': [
            'error', {
                arrays: 'always-multiline',
                objects: 'always-multiline',
            },
        ],

        // override configuration set by extending "eslint:recommended"
        'no-empty': 'warn',
        'no-cond-assign': ['error', 'always'],

        // disable rules from base configurations
        'for-direction': 'off',
    },
};
