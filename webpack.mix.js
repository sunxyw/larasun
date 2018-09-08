const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js') // Build Js
    .sass('resources/sass/app.scss', 'public/css') // Build Scss
    .sourceMaps(); // Create Map Files (For Dev Only)

// For Production only
if (mix.config.inProduction) {
    mix.version(); // Add Unique Hash To Disable Cache
}
