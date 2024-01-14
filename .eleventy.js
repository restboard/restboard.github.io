module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/admin/config.yml");
  eleventyConfig.addPassthroughCopy("src/static");

  // Input Directory : src Output directory: _site
  return {
    dir: { input: "src", output: "_site" },
  };
};
