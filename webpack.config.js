const path = require("path");

module.exports = {
  devServer: {
    static: "./dist",
  },
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
