module.exports = function (config) {
    config.set({
        basePath: '../',
        frameworks: ['mocha', 'chai'],
        files: [
            'min/*.min.js',
            'test/**/*.test.js'
        ],
        exclude: [],
        preprocessors: {
            'min/*.min.js': ['coverage']
        },
        reporters: ['mocha', 'coverage'],
        mochaReporter: {
            colors: {
            success: 'blue',
            info: 'bgGreen',
            warning: 'cyan',
            error: 'bgRed'
            },
            symbols: {
            success: '+',
            info: '#',
            warning: '!',
            error: 'x'
            }
        },
        coverageReporter: {
            type: 'lcov',
            dir: 'coverage/',
            subdir: '.'
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        customLaunchers: {
            Chrome: {
              base: 'ChromeHeadless',
              flags: ['--no-sandbox']
            }
        },
        singleRun: true,
        concurrency: Infinity
    })
}