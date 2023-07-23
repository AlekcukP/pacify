import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/index.css', 'resources/js/index.jsx'],
            refresh: true
        }),
    ],
    resolve: {
        alias: {
            '@': '/resources',
        },
    },
    build: {
        minify: false,
        sourcemap: true
    },
    mode: 'development'
});
