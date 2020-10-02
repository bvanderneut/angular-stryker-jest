module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/src/setupJest.ts"],
  modulePathIgnorePatterns: ["<rootDir>/.stryker-tmp/"],
};
