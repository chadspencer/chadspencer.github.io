const mix = require('laravel-mix'), fs = require('fs-extra')

mix.version()
    .disableNotifications()
    .setPublicPath('_site')
    .sass('static/scss/main.scss', '_site/static/css').options({
        processCssUrls: false
     })
    .js('static/js/main.js', '_site/static/js')
    .extract([
        'jquery',
    ])
    .autoload({
        jquery: ['$', 'window.jQuery', 'jQuery']
    })
    .copy('static/js/html5shiv.js', '_site/static/js')
    .copyDirectory('static/fonts', '_site/static/fonts')
    .copyDirectory('static/img', '_site/static/img')
    .sourceMaps()
    .version()
      .then(() => fs.copy('_site/mix-manifest.json', '_data/mix-manifest.json'))
    .browserSync({
        proxy: '127.0.0.1:4000',
        files: ['_site/**/*']
    });