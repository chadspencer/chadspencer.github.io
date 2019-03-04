const mix = require('laravel-mix'), fs = require('fs-extra')

mix.version()
    .disableNotifications()
    .setPublicPath('static')
    .sass('_assets/scss/main.scss', 'css').options({
        processCssUrls: false
     })
    .js('_assets/js/main.js', 'js')
    .extract([
        'jquery',
    ])
    .autoload({
        jquery: ['$', 'window.jQuery', 'jQuery']
    })
    .copy('_assets/js/html5shiv.js', 'static/js')
    .copyDirectory('_assets/fonts', 'static/fonts')
    .copyDirectory('_assets/img', 'static/img')
    .sourceMaps()
    .version()
    .then(() => fs.copy('_site/mix-manifest.json', '_data/mix-manifest.json'))
    .browserSync({
        proxy: '127.0.0.1:4000',
        files: ['_site/**/*']
    });