const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    ghPages: {
      branch: 'main'
    }
  },

  outputDir: 'docs'
});
