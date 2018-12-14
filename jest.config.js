module.exports = {
    verbose: true,
    roots: [
        '<rootDir>/src'
    ],
    setupTestFrameworkScriptFile: '<rootDir>/jest-setup.js',
    snapshotSerializers: [
        'enzyme-to-json/serializer'
    ]
};
