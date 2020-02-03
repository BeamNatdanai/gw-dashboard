const withCSS = require('@zeit/next-css')
const webpack = require('webpack')

module.exports = withCSS({
    webpack: (config, { dev }) => {

        config.node = {
            fs:'empty'
        }
        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
            })
        )
    
        return config
    },
    devIndicators: {
        autoPrerender: false,
    }
})