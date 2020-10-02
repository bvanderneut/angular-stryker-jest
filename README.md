# Angular with Stryker and Jest

Smal app for demonstrating Angular working with Stryker and Jest.

## Introduction

Did the following steps to create this little project

1. I cloned this repro:
   https://github.com/wtho/jest-angular-example
1. Installed Stryker `npm install -g stryker-cli`
1. Initalised Stryker `stryker init`
1. Removed `"@stryker-mutator/karma-runner": "^3.3.1"` from package.json
1. Added the package `"jest-environment-jsdom-sixteen": "^1.0.3"`
1. Added the package `"@nrwl/jest": "8.6.0"`
1. Added the package `"ts-jest": "25.2.1"`
1. Added the package `"@nrwl/jest": "9.0.4"`
1. Added the package `"@offeringsolutions/nx-karma-to-jest": "^0.1.3"`
1. Installed everything `npm stall`
1. Change the path from `src/` to `./` in angular.json line r84

## To install

`npm install`

## To run stryker

`stryker run`
