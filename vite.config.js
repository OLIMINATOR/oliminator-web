const { defineConfig } = require("vite");

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: "./index.html",
                sitemap: "./sitemap.html",
                // ...
                // List all files you want in your build
            },
        },
    },
    publicDir: "assets",
    server: {
        fs: {
            allow: [".."],
        },
    },
});
