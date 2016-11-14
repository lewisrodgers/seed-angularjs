## Quick start

### yarn

- `yarn`
- `npm start` - Start the test runner and dev server and build the `bundle.js` file.
- Open browser to `http://localhost:8080`

### npm

- `npm install`
- `npm start` - Start the test runner and dev server and build the `bundle.js` file.
- Open browser to `http://localhost:8080`

---

## General
Keep application and unit testing files in `app/src`. All of the build and unit testing processes are configured to reference this folder.

---

## Minification
The following packages assist in resolving Angularjs minification issues.

- ng-annotate: https://github.com/olov/ng-annotate
- ng-annotate-loader: https://www.npmjs.com/package/ng-annotate-loader

---

## eslint
Linting only occurs in `app/src` and adheres to Google's configuration settings: https://github.com/google/eslint-config-google/blob/master/index.js

---

## Unit testing
Karma is configured to match only files that live in `app/src` ending in `.spec.js`.

---

## Maintain code quality
To keep the repo code in good condition, git commits will run through pre-commit linting and unit testing. If either of these fail, the commit will be rejected.
