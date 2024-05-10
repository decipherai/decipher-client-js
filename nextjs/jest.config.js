module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['src/'], // This tells Jest to look for tests in the src/ directory
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)'
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};
