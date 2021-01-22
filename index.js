module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended", 
        "plugin:@typescript-eslint/all",
        "prettier",
        "prettier/@typescript-eslint",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "eslint-plugin-unicorn",
        "eslint-plugin-prefer-arrow",
        "eslint-plugin-import",
        "eslint-plugin-no-null",
        "eslint-plugin-jsdoc",
        "@typescript-eslint/eslint-plugin"
    ],
    "rules": {
        "no-console": 1,
        "require-jsdoc": ["error", {
            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": false,
                "ClassDeclaration": true,
                "ArrowFunctionExpression": false,
                "FunctionExpression": false
            }
        }],
        "@typescript-eslint/quotes": ["error", "backtick"],
        "@typescript-eslint/space-before-function-paren": ["error", "never"],
        "@typescript-eslint/indent": 1,
        "@typescript-eslint/prefer-readonly": 1,
        "@typescript-eslint/promise-function-async": 1,
        "@typescript-eslint/brace-style": 1,
        "@typescript-eslint/comma-spacing": 1,
        "@typescript-eslint/no-unnecessary-condition": 1,
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": 1,
        "@typescript-eslint/method-signature-style": 1,
        "@typescript-eslint/member-delimiter-style": 1,
        "@typescript-eslint/explicit-member-accessibility": 1,
        "@typescript-eslint/array-type": 1,
        "@typescript-eslint/no-type-alias": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-magic-numbers": "off",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/no-inferrable-types": "off"
    }
}
