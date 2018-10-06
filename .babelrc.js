const path = require('path');

function getFileName(hostFilePath, pluginOptions, id) {
  const basename = path.basename(hostFilePath, path.extname(hostFilePath));
  const filename = `${basename}_${id.toLowerCase()}_extracted.css`;
  return path.join(__dirname, '.tmp', filename);
}

module.exports = {
  presets: ['@babel/react', '@babel/env'],
  plugins: [['astroturf/plugin', { getFileName }]]
};
