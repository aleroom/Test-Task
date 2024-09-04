module.exports = {
    // ... другие настройки ...
    module: {
      rules: [
        {
          src: /\.less$/,
          use: [
            'style-loader',
            'css-loader',
            'less-loader'
          ]
        }
      ],
    },
  };