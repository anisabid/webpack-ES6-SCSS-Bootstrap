# webpack sample project

Sample webpack project with ES6 and Sass. Also includes Sass linting setup with [stylelint](https://github.com/stylelint/stylelint), to enforce BEM patterns for selectors.

This project use [Bootstrap 3.3.7](https://getbootstrap.com/docs/3.3/) version.

This is a basic setup that only includes two main app files for demo purposes: `./src/index.js` and `./assets/stylesheets/styles.scss`. You get the idea.

This project might be useful when quick (local) development setup is needed, to play with new stuff.

## Environment setup

```sh
  $ npm install
```

## Development

Start the Webpack server (includes live reloading when you change files):

```sh
  $ npm start
```

[webpack-dev-server](https://github.com/webpack/webpack-dev-server) open your app  [http://localhost:3033](http://localhost:3033) in a browser with a development server and provides live reloading.

## Bundling

```sh
  $ npm run prod
```

## ToDo

- Deploy all assets (fonts/icons/images)

