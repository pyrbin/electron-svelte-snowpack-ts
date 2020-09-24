module.exports = {
  purge: ["./src/renderer/**/*.svelte", "./src/renderer/**/*.ts"],
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
