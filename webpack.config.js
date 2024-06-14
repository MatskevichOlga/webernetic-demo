const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path"); // Импортируем модуль "path" для работы с путями файлов

module.exports = {
  entry: {
    app: "./src/assets/js/index.js", // Точка входа для сборки проекта
  },
  output: {
    clean: true,
    filename: "[name].bundle.js", // Имя выходного файла сборки
    path: path.resolve(__dirname, "dist"),  
  },
  mode: "development",
  devServer: {
    static: "./src", // Каталог для статики
    compress: true,
    port: 9000,
    hot: true,
    open: true, // Автоматически открывать браузер
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i, // Регулярное выражение для обработки файлов с расширением .css .scss
        use: ["style-loader", "css-loader", "sass-loader"], // Загрузчики, используемые для обработки CSS-файлов
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Site Matskevich",
      template: "src/index.html",
    }),
  ],
};