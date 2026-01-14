module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "selector-class-pattern": null,
  },
  ignoreFiles: [
    "**/node_modules/**",
    "**/dist/**",
    "assets/**/bootstrap.min.css",
    "assets/**/animate.css",
    "assets/**/socicon/**",
    "assets/**/mobirise/**",
    "assets/**/theme/**",
    "assets/**/dropdown/**",
    "assets/**/*.min.css",
  ],
};
