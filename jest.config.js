module.exports = {
  preset: 'ts-jest',
  testRegex: ".spec.ts$",
  testPathIgnorePatterns: ["/node_modules/", "/.templates/", "/dist/"],
  transform: {
    '^.+\\.spec.tsx?$': 'ts-jest',
  },
  testEnvironment: 'node',
};