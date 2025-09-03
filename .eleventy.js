module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("slugify", (text) => {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w-]+/g, '')       // Remove all non-word chars
      .replace(/--+/g, '-')          // Replace multiple - with single -
      .replace(/^-+/, '')            // Trim - from start of text
      .replace(/-+$/, '');           // Trim - from end of text
  });
  // Copy CSS and images to _site
  eleventyConfig.addPassthroughCopy("src/assets");
  // Copy admin folder to _site
  eleventyConfig.addPassthroughCopy("src/admin");

  // Create products collection
  eleventyConfig.addCollection("products", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/products/*.{md,html}");
  });

  eleventyConfig.addCollection("categories", function(collectionApi) {
    const allCategories = collectionApi.getFilteredByGlob("src/products/*.{md,html}")
      .map(item => item.data.category)
      .filter(category => category !== undefined);

    // Return unique categories
    return [...new Set(allCategories)].map(category => ({
      title: category,
      slug: eleventyConfig.getFilter("slugify")(category)
    }));
  });





  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
