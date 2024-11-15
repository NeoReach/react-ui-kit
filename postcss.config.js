const pkg = require('./package.json');

module.exports = {
  plugins: [
    require('postcss-prefix-selector')({
      prefix: `${pkg?.name || 'qb-react-ui-kit'}`, // Uses package name as prefix
      exclude: [/^html$/, /^body$/], // Exclude html and body from being prefixed
    }),
    require('autoprefixer')({}),
  ],
};
