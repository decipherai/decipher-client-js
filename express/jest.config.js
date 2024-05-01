module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'], // Focus Jest on the src directory
    testPathIgnorePatterns: ['/node_modules/', '<rootDir>/dist/'], // Ignore the dist directory
}
