module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '!**/__tests__/coverage/**',
    '!**/__tests__/utils/**',
    '!**/__tests__/images/**',
  ],
};