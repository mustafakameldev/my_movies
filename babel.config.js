module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    ['@babel/plugin-transform-private-methods', {loose: true}],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@constants': './src/constants',
          '@redux': './src/redux',
          '@navigation': './src/navigation',
          '@config': './src/config',
          '@providers': './src/providers',
          '@services': './src/services',
          '@assets': './src/assets',
          '@theme': './src/theme',
          '@contexts': './src/contexts',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@routes': './src/routes',
          '@hooks': './src/hooks',
          '@shared': './src/shared',
          '@components': './src/components',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
