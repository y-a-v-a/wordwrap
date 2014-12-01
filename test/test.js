var assert = require("assert");
var w = require('../lib/wordwrap');

describe('wordwrap', function() {
    var string = 'A very long woooooooooooord.';
    
    it('should', function() {
        w.setDefault(0);
        assert.equal('A very\nlong\nwooooooo\nooooord.', w.wordwrap(string, 8, '\n', true));
        assert.equal('A very\nlong\nwoooooooooooord.', w.wordwrap(string, 8, '\n', false));
    });
    
    it('should', function() {
        w.setDefault(1);
        assert.equal('A very\nlong\nwooooooo\nooooord.', w.wordwrap(string, 8, '\n', true));
        assert.equal('A very\nlong\nwoooooooooooord.', w.wordwrap(string, 8, '\n', false));
    });
});

