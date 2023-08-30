import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    return {
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
        define: {
            __APP_NAME__: JSON.stringify(env.VITE_APP_NAME),
            __APP_URL__: JSON.stringify(env.APP_URL),
        }
    }
});
