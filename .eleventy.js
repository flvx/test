module.exports = function(eleventyConfig) {
    // Passthrough file copy (for static assets like images, CSS, etc.)
    eleventyConfig.addPassthroughCopy("src/assets");

    // Configure the template formats
    const templateFormats = ["njk", "md", "html"];

    return {
        dir: {
            input: "src",      // Input directory
            output: "docs",    // Output directory
            includes: "_includes", // Includes directory for Nunjucks partials
            data: "_data",     // Global data directory
            layouts: "_layouts" // Layouts directory
        },
        templateFormats: ["njk", "md", "html"], // Template formats to be supported
    };
}
