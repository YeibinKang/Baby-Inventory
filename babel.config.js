module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
            '@context':'./app/ctx',
            '@components': './app/components',
            '@screens': './app/screens',
            '@stores': './app/stores',
          },
        },
      ],
    ],
  };
};
