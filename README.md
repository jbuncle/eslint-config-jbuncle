# eslint-config-jbuncle

This package provides an ESLint configuration for personal projects by `jbuncle`.

## Installation

To install this package, run the following command:

bashCopy code

`npm install @jbuncle/eslint-config-jbuncle --save-dev`

## Configuration

1. Create an `.eslintrc.json` file at the root of your project if it doesn't exist.

2. In the `.eslintrc.json` file, extend the `@jbuncle/jbuncle` configuration:

jsonCopy code

`{
  "extends": [
    "@jbuncle/jbuncle"
  ]
}`

1. In your `package.json` file, add the following scripts:

jsonCopy code

`{
  "scripts": {
    "lint": "eslint -c .eslintrc.json --ext .ts ./src",
    "lint-fix": "eslint --fix -c .eslintrc.json --ext .ts ./src"
  }
}`

## Usage

To run ESLint, use the `lint` command:

bashCopy code

`npm run lint`

To automatically fix ESLint errors, use the `lint-fix` command:

bashCopy code

`npm run lint-fix`

## Integration with CI/CD

Make sure to include `npm run lint` in your CI/CD build command to ensure your code is properly linted before deployment.

That's it! Now you can ensure your code is consistent and free of errors with every commit.
