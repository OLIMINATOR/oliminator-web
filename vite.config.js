const { defineConfig } = require("vite");

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: "./index.html",
                sitemap: "./sitemap.html",
                minecraft: "./minecraft/index.html",
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
