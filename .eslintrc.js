module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 12
    },
    'rules': {
        'eqeqeq': ['error', 'always'],
        'no-var': 'error',
        'prefer-const': 'error',
        'quotes': [1, 'single'],
        'space-after-keywords': [0, 'always'],
        'semi': ['error', 'never'],
        'spaced-comment': 1
    }
}
