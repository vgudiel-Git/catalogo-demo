module.exports = function(eleventyConfig) { 
  // Copy CSS and images to _site
  eleventyConfig.addPassthroughCopy("src/assets");
  // Copy admin folder to _site
  eleventyConfig.addPassthroughCopy("src/admin");

  // Create products collection
  eleventyConfig.addCollection("products", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/products/*.{md,html}");
  });

  eleventyConfig.addCollection("productsWithCategory", function(collectionApi) {
    return collectionApi.getFilteredByCollection("products")
      .filter(item => item.data.category);
  });

  eleventyConfig.addCollection("categories", function(collectionApi) {
    let categories = new Set();
    collectionApi.getFilteredByCollection("productsWithCategory").forEach(item => {
      categories.add(item.data.category);
    });
    return [...categories];
  });

  // Enforce unique permalink for all product files
  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: data => {
      // Only apply to markdown files in the products folder
      if (data.page && data.page.inputPath && data.page.inputPath.includes("/products/")) {
        return `/products/${data.page.fileSlug}/index.html`;
      }
      return data.permalink; // fallback to front matter or default
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
