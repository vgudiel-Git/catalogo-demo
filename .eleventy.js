module.exports = function(eleventyConfig) { 
  // Copy CSS and images to _site
  eleventyConfig.addPassthroughCopy("src/assets");
  // Copy admin folder to _site
  eleventyConfig.addPassthroughCopy("src/admin");

  // Create products collection
  eleventyConfig.addCollection("products", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/products/*.{md,html}");
  });
  
  // Definir categorías como datos globales
  const categoriesData = [
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
  
  // Añadir datos globales para categorías
  eleventyConfig.addGlobalData("categories", categoriesData);
  
  // Crear colecciones por categoría
  categoriesData.forEach(category => {
    eleventyConfig.addCollection(`category-${category.value}`, function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/products/*.{md,html}").filter(item => {
        return item.data.category === category.value;
      });
    });
  });
  
  // Añadir filtro para obtener la etiqueta de una categoría por su valor
  eleventyConfig.addNunjucksFilter("getCategoryLabel", function(categoryValue) {
    const category = categoriesData.find(cat => cat.value === categoryValue);
    return category ? category.label : categoryValue;
  });
  
  // Añadir filtro para obtener la etiqueta de una categoría por su valor
  eleventyConfig.addNunjucksFilter("getCategoryLabel", function(categoryValue) {
    const categories = [
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
    const category = categories.find(cat => cat.value === categoryValue);
    return category ? category.label : categoryValue;
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