'use strict';

var path    = require('path');
var traceur = require('traceur');
var through = require('through');
var lodash  = require('lodash');

var jsRegex = new RegExp('\\.js$', 'i');

function traceurify(options) {
    return function (file) {
        if (!isJavascript(file)) { return through(); }

        var data = '';
        var stream = through(write, end);

        return stream;

        function write(buf) {
            data += buf;
        }

        function end() {
            compile(file, data, options, function (error, result) {
                if (error) {
                    stream.emit('error', error);
                }

                stream.queue(result);
                stream.queue(null);
            });
        }
    };
}

function isJavascript(file) {
    return jsRegex.test(file);
}

function compile(file, data, options, callback) {
    var output;

    try {
        var opts = lodash.merge({ filename: path.basename(file) }, options);
        var compiled = traceur.compile(data.toString(), opts);
        output = compiled.js;
        if (compiled.sourceMap) { output += '\n' + compiled.sourceMap + '\n'; }
    } catch (e) {
        return callback(e);
    }

    callback(null, output);
}

traceurify.isJavascript  = isJavascript;
traceurify.compile       = compile;

module.exports = traceurify;
