var assert = require("assert");
var w = require('../lib/wordwrap');

var exec = require('child_process').exec;

describe('wordwrap', function() {
    var referenceText;
    var string = 'A very long woooooooooooord.';

    before(function(done) {
        exec('php '+__dirname +'/source.php 0 8 \\\\n true', function (error, stdout, stderr) {
            referenceText = stdout;
            done();
        });        
    });

    describe('wordwrap0', function() {
        it('should be equal to PHPs output of: ' + string, function() {
            w.setDefault(0);
            assert.equal(referenceText, w.wordwrap(string, 8, '\n', true));
        });
    });
    describe('wordwrap1', function() {
        it('should be equal to PHPs output of: ' + string, function() {
            w.setDefault(1);
            assert.equal(referenceText, w.wordwrap(string, 8, '\n', true));
        });
    });
    describe('wordwrap2', function() {
        it('should be equal to PHPs output of: ' + string, function() {
            w.setDefault(2);
            assert.equal(referenceText, w.wordwrap(string, 8, '\n', true));
        });
    });
    describe('wordwrap3', function() {
        it('should be equal to PHPs output of: ' + string, function() {
            w.setDefault(3);
            assert.equal(referenceText, w.wordwrap(string, 8, '\n', true));
        });
    });
});
