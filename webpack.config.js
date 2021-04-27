const path = require('path');
const base = require('./webpack.config.base.js')

module.exports = {
  mode: "development",
  ...base,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}