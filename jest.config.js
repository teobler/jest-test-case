let config = {
  roots: ["<rootDir>/src"],
  testMatch: ["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}", "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  setupFilesAfterEnv: ["./test/setupTests.ts", "./test/reactRequire.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$", "^.+\\.module\\.(css|sass|scss)$"],
  moduleNameMapper: {
    "^test/(.*)$": "<rootDir>/test/$1",
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

module.exports = config;
