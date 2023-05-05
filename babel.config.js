module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@app': './src',
          '@SharedModule': './src/shared',
          '@SharedImages': './src/shared/assets/images',
          '@SharedHelper': './src/shared/helper',
          '@SharedStyles': './src/shared/styles',
          '@FeatureModule': './src/feature',
          '@Navigation': './src/navigation',
        },
      },
    ],
  ],
};
