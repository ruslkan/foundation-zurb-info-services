### Introduction

This is the layout of a landing page for an electrician. With adaptation to mobile screens.
Demo: https://ruslkan.github.io/foundation-zurb-info-services/

Based on ZURB Foundation for use with [Foundation for Sites](http://foundation.zurb.com/sites). It has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript module bundling with webpack
  - Image compression

### Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (Version 12 or greater recommended, tested with 14.15.0)
- [Git](https://git-scm.com/)

### Manual Setup

To manually set up the template, first download it with Git:

```bash
git clone https://github.com/ruslkan/foundation-zurb-info-services projectname
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd projectname
yarn
```

Finally, run `yarn start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `yarn run build`.


### License

Is an open source project that is licensed under MIT.
