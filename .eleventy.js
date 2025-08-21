module.exports = function(eleventyConfig) {
  // Copy CSS and images to _site
  eleventyConfig.addPassthroughCopy("src/assets");
  // Copy admin folder to _site
  eleventyConfig.addPassthroughCopy("src/admin");

  // Create products collection
  eleventyConfig.addCollection("products", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/products/*.md");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
