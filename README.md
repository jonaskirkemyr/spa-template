# SPA-template

Single-Page-Application template written in TypeScript. Use this template to quickly create your own spa with minimal effort. Enjoy!

## Dependencies

Project dependencies are defined in both `bower.json`, `package.json`, and `typings.json`. You should have [npm](https://nodejs.org/en/), [bower](http://bower.io/), and [typings](https://github.com/typings/typings) to install them.


```sh
npm install -g bower
npm install typings --global
```

Install dependencies:

```sh
npm install
bower install
typings install
```

Using TypeScript requires typescript to be installed. This come preinstalled with both `Visual Studio 2013` and `Visual Studio 2015`. To install globally with npm:

```sh
npm install -g typescript
```


* [Crossroads.js](https://millermedeiros.github.io/crossroads.js/)
* [handlebars.js](http://handlebarsjs.com/)
* [hasher](https://github.com/millermedeiros/Hasher)


## Building

The build tool used is [grunt](http://gruntjs.com/). A build task is defined, and are invoked by running


```sh
grunt build
```

Alternatively scripts defined in `package.json` can be used:

```sh
npm run republish
npm run build
```


## Development

### Views

Views for the spa-template is developed with the use of [Handlebars](http://handlebarsjs.com/) and [Assemble](http://assemble.io/).

Page layouts are defined and stored in the folder `src/views/assemble/`. The page layout is stored in `layouts/`, which defines the main html layout. `.hbs` files defined in `pages/` is replaced within the `{>body}` tag defined in the `layouts/`. Partials are html-snippets inserted within the layout files, and loaded by using the `{{>name}}`, where `name` is the filename defined in `partials/`.

Files stored under `src/views/templates/` are compiled to a `.js` file, and made accessible to a global object, defined in `config.json` with key `namespace`. Files under `templates/partials/` can be loaded within template pages by using the tag name `{{>name}}`, where `name`is the filename. Files under `templates/pages/` are used for defining page layouts, which are dynamically changed with the use of route renders.


## License

 SPA-template is released under the MIT license.


