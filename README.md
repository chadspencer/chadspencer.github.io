# jekyll-laravel

`jekyll-laravel` is a barebones Jekyll project with some boilerplate code to use NPM as a task runner, and Laravel Mix as a build system. The goal of the boilerplate is to closely resemble Laravel's workflow for creating and compiling assets.

## Features

Here are some of the features provided by Laravel Mix. To learn more, take a look at the [Laravel Documentation](https://laravel.com/docs/5.6/mix).

* Less, Sass, and Stylus
* PostCSS Autoprefixer
* URL Processing
* Source Maps
* ES2015 Syntax
* Modules
* Minification
* Vendor Extraction
* Versioning

## Usage

### Dependencies

* [Ruby](https://www.ruby-lang.org/)
* [Bundler](https://bundler.io/)
* [Node.js](https://nodejs.org/)

### Getting Started

```
git clone https://github.com/mhullah/jekyll-laravel.git jekyll-laravel
cd jekyll-laravel
bundle install
npm install
```

### Using NPM as a Task Runner

* `npm run dev` or `npm run development` 
  * Start a server on `http://localhost:4000/` and watch for any changes. This command is an alias for `npm run webpack:watch & npm run jekyll:serve`.
* `npm run prod` or `npm run production`
  * Build the website for production. This command will **not** start a server, and is an alias for `npm run webpack:build && npm run jekyll:build`.
* `npm run clean`
  * Remove any files generated by Jekyll and Webpack.

## Structure

#### Source Files

This is how the structure of the boilerplate source files will look. By default, Webpack will compile `_resources/js/app.js` into `_site/js/app.js`, and `_resources/sass/app.scss` into `_site/css/app.css`. You can add or remove targets by editing the `webpack.mix.js` file.

```
_resources/
├── js/
│   ├── app.js
│   └── bootstrap.js
└── sass/
    ├── _template.scss
    └── app.scss
```

#### Compiled Files

This is how the structure of the boilerplate compiled files will look. The build system will generate a `mix-manifest.json` file which is placed into the `_data/` directory for Jekyll to read, and into the `_site/` directory for any front-end applications to read. 

```
_data/
└── mix-manifest.json

_site/
├── css/
│   └── app.css
├── js/
│   └── app.js
└── mix-manifest.json
```

## Referencing Files

### Compiled Files

It is important to reference any compiled files by accessing the relevant property of the `mix-manifest.json` file. This way, the versioned filename will always be retrieved. The properties of `mix-manifest.json` can be accessed in the same way as any other Jekyll data file:

```
site.data.mix-manifest['/css/app.css'] }}
```

To better demonstrate this, here's some accompanying HTML:

```html
<!-- Stylesheets -->
<link href="{{ site.data.mix-manifest['/css/app.css'] }}" rel="stylesheet">

<!-- JavaScript -->
<script src="{{ site.data.mix-manifest['/js/app.js'] }}"></script>
```

### Packages

A key benefit of using Webpack is the ability to import resources from dependency NPM packages. You can see examples of how to do this throughout the boilerplate code. Here is a quick example:

```javascript
// Import jQuery from the "jquery" package:
window.$ = window.jQuery = require('jquery');

// You can now use jQuery!:
$(window).on('load', () => console.log("Hello, World!"));
```

```scss
// Import Bootstrap from the "bootstrap" package:
@import '~bootstrap/scss/bootstrap';

// You can now use Bootstrap's utilities!:
@include media-breakpoint-up(md) {
    // Do something awesome!
}
```
