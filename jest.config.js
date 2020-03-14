module.exports = {
  preset: 'ts-jest',
  testRegex: ".spec.ts$",
  transform: {
    '^.+\\.spec.tsx?$': 'ts-jest',
  },
  testEnvironment: 'node',
  rootDir: 'src'
};