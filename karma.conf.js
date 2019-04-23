module.exports = function karmaConfig(config) {
  config.set({
    frameworks: ['jasmine'],
    reporters: ['mocha', 'coverage', 'istanbul', 'coveralls'],
    mochaReporter: {
      colors: {
        success: 'green',
        info: 'bgGreen',
        warning: 'cyan',
        error: 'bgRed'
      }
    },

    files: [
      'webpack.karma.context.js'
    ],

    preprocessors: {
      'webpack.karma.context.js': ['webpack', 'sourcemap']
    },

    browsers: [
      'Chrome'
    ],

    singleRun: true,

    coverageReporter: {
      dir: 'coverage/',
      reporters: [{
          type: 'text-summary'
        },
        {
          type: 'html'
        },
        {
          type: 'lcov'
        }
      ]
    },

    webpack: {
      devtool: 'inline-source-map',
      mode: "development",
      module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
          },
          {
            test: /\.html$/,
            use: 'raw-loader'
          },
          {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            use: 'file-loader'
          },
          {
            test: /\.(css|sass|scss)$/,
            use: 'null-loader'
          }
        ]
      }
    },

    webpackMiddleware: {
      noInfo: 'errors-only'
    },
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-istanbul',
      'karma-phantomjs-launcher',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-coveralls',
      "karma-mocha-reporter"
    ],
  });
};