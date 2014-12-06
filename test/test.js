var assert = require("assert");
var w = require('../lib/wordwrap');

var exec = require('child_process').exec;
    
describe('wordwrap', function() {
    it('should', function() {
        w.setDefault(0);
        console.log(txt, w.wordwrap(string, 8, '\n', true));
        assert.equal(txt, w.wordwrap(string, 8, '\n', true));
    });
    exec('php source.php 0 8 \\\\n true', function (error, stdout, stderr) {
        var txt = stdout;
        var string = 'A very long woooooooooooord.';

    });
});


// var string = 'A very long woooooooooooord and some other words.';
// var cut = true;
//
// w.setDefault(0);
// var r = w.wordwrap(string, 8, '\n', cut);
// console.log(r);
//
// w.setDefault(1);
// r = w.wordwrap(string, 8, '\n', cut);
// console.log(r);
//
// w.setDefault(2);
// r = w.wordwrap(string, 8, '\n', cut);
// console.log(r);
//
// w.setDefault(3);
// r = w.wordwrap(string, 8, '\n', cut);
// console.log(r);
//
//
//
// var argv = process.argv;
// var fs = require('fs');
//
// var file = argv[2] || (function () {
//     console.log('Usage: node wordwrap.js file.txt');
//     process.exit(1);
// }());
//
// var contents = fs.readFileSync(file).toString('utf8');
//
//
// var r = w.wordwrap(contents, 120, '\n', cut);
// console.log(r);
//
//
// describe('wordwrap', function() {
//     var string = 'A very long woooooooooooord.';
//
//     it('should', function() {
//         w.setDefault(0);
//         assert.equal('A very\nlong\nwooooooo\nooooord.', w.wordwrap(string, 8, '\n', true));
//         assert.equal('A very\nlong\nwoooooooooooord.', w.wordwrap(string, 8, '\n', false));
//     });
//
//     it('should', function() {
//         w.setDefault(1);
//         assert.equal('A very\nlong\nwooooooo\nooooord.', w.wordwrap(string, 8, '\n', true));
//         assert.equal('A very\nlong\nwoooooooooooord.', w.wordwrap(string, 8, '\n', false));
//     });
//
//     it('should', function() {
//         w.setDefault(2);
//         assert.equal('A very\nlong\nwooooooo\nooooord.', w.wordwrap(string, 8, '\n', true));
//         assert.equal('A very\nlong\nwoooooooooooord.', w.wordwrap(string, 8, '\n', false));
//     });
// });
