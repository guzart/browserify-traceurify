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
    var buffer      = require('vinyl-buffer');

    gulp.task('default', function () {
      var bundler = browserify('./app/main.js');
      bundler.transform(traceurify({ module: 'commonjs' }));

      return bundler
        .bundle({ debug: true })
        .pipe(source('app.js'))
        .pipe(buffer('app.js'))
        .pipe(gulp.dest('.tmp'));
    });
