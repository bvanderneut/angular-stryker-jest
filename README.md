# Angular with Stryker and Jest

Smal app for demonstrating Angular working with Stryker and Jest.

## Introduction

Did the following steps to create this little project

1. I cloned this repro:
   https://github.com/wtho/jest-angular-example
1. Installed Stryker `npm install -g stryker-cli`
1. Initalised Stryker `stryker init`
1. Removed `"@stryker-mutator/karma-runner": "^3.3.1"` from package.json
1. installed this package `npm install --save-dev jest-environment-jsdom-sixteen`
1. Added this to the package.json `"@nrwl/jest": "8.6.0"`
1. Installed everything `npm stall`

## To install

`npm install`

## To run stryker

`stryker run`
