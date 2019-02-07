const withTypescript = require("@zeit/next-typescript");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withPlugins = require("next-compose-plugins");
const withLess = require("@zeit/next-less");
const lessToJS = require("less-vars-to-js");
const fs = require("fs");
const path = require("path");
const cssLoaderConfig = require("@zeit/next-css/css-loader-config");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");

// Where your antd-custom.less file lives
// const themeVariables = lessToJS(
//   fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
// )

if (typeof require !== "undefined") {
  require.extensions[".css"] = file => {};
  require.extensions[".less"] = file => {};
}

const cssConfig = {
  ccsModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
};

const sassConfig = {
  cssModules: true,
};

const lessConfig = {
  cssModules: false,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    // modifyVars: modifyVars,
  },
};

module.exports = withPlugins(
  [
    withTypescript,
    [withSass, sassConfig],
    [withCSS, cssConfig],
    [withLess, lessConfig],
    [
      new ExtractCssChunks({
        filename: "[name.css]",
        chunkFilename: "[id].css",
        hot: true,
        orderWarning: true,
        reloadAll: true,
        cssModules: true,
      }),
    ],
  ],
  {
    webpack: (config, options) => {
      const { dev, isServer } = options;

      config.node = {
        fs: "empty",
      };

      config.module.rules.push({
        test: /`.css$/,
        use: [ExtractCssChunks.loader, "css-loader"],
      });

      // config.module.rules.push({
      //   test: /\.less$/,
      //   exclude: /node_modules/,
      //   use: options.defaultLoaders.less,
      // });

      // 我们禁用了antd的cssModules
      // config.module.rules.push({
      //   test: /\.less$/,
      //   include: /node_modules/,
      //   use: cssLoaderConfig(config, {
      //     extensions: ["less"],
      //     cssModules: false,
      //     cssLoaderOptions: {},
      //     dev,
      //     isServer,
      //     javascriptEnabled: true,
      //     loaders: [
      //       {
      //         // loader: "less-loader",
      //         loader: MiniCssExtractPlugin.loader,
      //         options: lessConfig.lessLoaderOptions,
      //       },
      //     ],
      //   }),
      // });

      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            name: "[name].[ext]",
          },
        },
      });

      return config;
    },
  },
);
