module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@context': './app/ctx',
            '@assets': './assets',
            '@components': './app/components',
            '@screens': './app/screens',
            '@stores': './app/stores',
          },
        },
      ],
    ],
  };
};
