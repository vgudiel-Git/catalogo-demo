module.exports = function(eleventyConfig) { 
  // Copy CSS and images to _site
  eleventyConfig.addPassthroughCopy("src/assets");
  // Copy admin folder to _site
  eleventyConfig.addPassthroughCopy("src/admin");

  // Create products collection
  eleventyConfig.addCollection("products", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/products/*.md");
  });

  // Universal shortcode / filter: enforce permalink pattern
  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: data => {
      if (data.filePathStem && data.filePathStem.startsWith("/products/")) {
        // use fileSlug so nike.md → /products/nike/
        return `/products/${data.page.fileSlug}/index.html`;
      }
      return data.permalink; // fallback to whatever was set
    }
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
