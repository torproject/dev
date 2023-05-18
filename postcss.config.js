module.exports = {
  plugins: {
    "@fullhuman/postcss-purgecss": {
      content: [
        "./assets/js/*.js",
        "./content/*.md",
        "./layouts/**/*.html",
        "./layouts/*.html",
      ],
      safelist: [""],
      blocklist: [""],
    },
  },
};
