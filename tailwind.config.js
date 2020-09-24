module.exports = {
  purge: ["./src/renderer/**/*.svelte", "./src/renderer/**/*.tsx"],
  experimental: {
    applyComplexClasses: true,
    uniformColorPalette: true,
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
