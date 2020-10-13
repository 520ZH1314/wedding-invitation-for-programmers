const webpack = require('webpack')
const path = require('path')
module.exports={
    publicPath: "./",
    devServer: {
        port: 3333,
            open: true
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",

                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    },
    lintOnSave: false, //是否开启eslint
    // pluginOptions: {
    //   'style-resources-loader': {
    //     preProcessor: 'less',
    //     patterns: [path.resolve(__dirname, './src/assets/less/common.less')]
    //   }
    // }

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, './src/assets/less/common.less')]
        }
    },

}
