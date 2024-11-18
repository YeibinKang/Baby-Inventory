module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          safe: false,
          allowUndefined: false,
        },
      ],
      [
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
            '@context': './app/ctx',
            '@components': './app/components',
            '@screens': './app/screens',
            '@stores': './app/stores',
          },
        },
      ],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-transform-private-methods', { loose: true }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      '@babel/plugin-transform-runtime',
    ],
  };
};
