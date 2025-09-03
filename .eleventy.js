module.exports = function(eleventyConfig) { 
  // Copy CSS and images to _site
  eleventyConfig.addPassthroughCopy("src/assets");
  // Copy admin folder to _site
  eleventyConfig.addPassthroughCopy("src/admin");

  // Create products collection
  eleventyConfig.addCollection("products", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/products/*.{md,html}");
  });
  
  // Crear colecciones por categoría
  const categories = [
    "ropa-calzado", "accesorios", "mascotas", "hogar", 
    "electrodomesticos", "juguetes", "deportes", "tecnologia", "temporada"
  ];
  
  categories.forEach(category => {
    eleventyConfig.addCollection(`category-${category}`, function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/products/*.{md,html}").filter(item => {
        return item.data.category === category;
      });
    });
  });
  
  // Añadir filtro para obtener todas las categorías disponibles
  eleventyConfig.addFilter("getCategories", function() {
    return [
      { label: "Ropa & Calzado", value: "ropa-calzado" },
      { label: "Accesorios", value: "accesorios" },
      { label: "Mascotas", value: "mascotas" },
      { label: "Hogar", value: "hogar" },
      { label: "Electrodomésticos", value: "electrodomesticos" },
      { label: "Juguetes", value: "juguetes" },
      { label: "Deportes", value: "deportes" },
      { label: "Tecnología", value: "tecnologia" },
      { label: "Temporada", value: "temporada" }
    ];
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