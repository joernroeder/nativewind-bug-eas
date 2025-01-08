// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

/** @type {import('expo/metro-config').MetroConfig} */
// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

/**
 * Enable experimental treeshaking
 * @see https://docs.expo.dev/guides/tree-shaking/
 */
process.env.EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH = 1; // <-- Turning this on breaks the styles.
process.env.EXPO_UNSTABLE_TREE_SHAKING = 0; // <-- haven't tried to turn this on too.

config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: true,
  },
});

module.exports = withNativeWind(config, { input: './global.css' });
