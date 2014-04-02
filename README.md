# Not maintained. Use [es6ify](https://github.com/thlorenz/es6ify)

es6ify is not using traceur as a foundation, so it supports all
ES6 features supported by traceur.

traceurify
==========

## Information

<table>
<tr> 
<td>Package</td><td>traceurify</td>
</tr>
<tr>
<td>Description</td>
<td>Traceur transform for Browserify</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.10</td>
</tr>
</table>

## Usage

    $ npm install traceurify
    $ browserify main.js -t traceurify > bundle.js

## Usage with `gulp`

    var gulp        = require('gulp');
    var browserify  = require('browserify');
    var traceurify  = require('traceurify');
    var source      = require('vinyl-source-stream');

    gulp.task('default', function () {
      var bundler = browserify('./app/main.js');
      bundler.transform(traceurify({ module: 'commonjs' }));

      return bundler
        .bundle({ debug: true })
        .pipe(source('app.js'))
        .pipe(gulp.dest('.tmp'));
    });

## Options

All options are passed to the `traceur.compile` method, for more information on the options look
at the traceur documentation.

Here is a list of some of the options:

  * annotations
  * arrayComprehension
  * arrowFunctions
  * asyncFunctions
  * blockBinding
  * classes
  * commentCallback
  * computedPropertyNames
  * debug
  * defaultParameters
  * destructuring
  * forOf
  * freeVariableChecker
  * modules
  * numericLiterals
  * restParameters
  * sourceMaps
  * spread
  * symbols
  * templateLiterals
  * typeAssertions
  * types
  * validate
