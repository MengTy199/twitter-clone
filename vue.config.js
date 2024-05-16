const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: process.env.VUE_APP_ENV_SERVER,
                // target: process.env.VUE_APP_SERVER,
                // target: 'http://localhost:3000',
                changeOrigin: true
            }
        }
    }
})
