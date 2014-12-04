;(function() {
    
    var implementations = [];

    function wordwrap() {
        var defaultImpl = 0;
        
        return {
            wordwrap: function() {
                var args = Array.prototype.slice.call(arguments, 0);
                return implementations[defaultImpl].apply(null, args);
            },
            setDefault: function(def) {
                defaultImpl = def;
            }
        };
    }
    
    implementations = [
        function(string, width, lineBreak, cut) {
            if (!string) {
                return false;
            }
            var words = string.split(' ').reverse();

            var lineWidth = width || 75;
            var lBreak = lineBreak || '\n';
            var doCut = cut || false;

            var word;
            var result = '';
            var line = '';

            while (words.length) {
                word = words.pop();
                if ((line + word).length >= lineWidth) {
                    if (word.length > lineWidth && doCut === true) {
                        words.push(word.substring(lineWidth));
                        word = word.substring(0, lineWidth);
                    }
                    result += line.trim() + lBreak;
                    line = '';
                }
                line += word + ' ';
                if (!words.length) {
                    result += line.trim();
                }
            }
            return result;
        },

        function(string, width, lineBreak, cut) {
            if (!string) {
                return false;
            }
            var lineWidth = width || 75;
            var lBreak = lineBreak || '\n';
            var doCut = cut || false;

            var result = '';
            var sub;
            var lastSpaceIndex;

            while (string.length) {
                if (string.length < lineWidth) {
                    result += string;
                    break;
                }
                sub = string.substring(0, lineWidth);

                lastSpaceIndex = sub.lastIndexOf(' ');
                string = string.substring(lastSpaceIndex + 1 || lineWidth);

                sub = sub.substring(0, lastSpaceIndex) || sub;
                result += sub + ((doCut === false && lastSpaceIndex === -1) ? '' : lBreak);
            }

            return result;
        },
        function(string, width, lineBreak, cut) {
            if (!string) {
                return false;
            }
            var doCut = cut || false;
            var lineWidth = width || 75;
            var result = [];
            var regex = new RegExp('.{0,' + (lineWidth - 1) + '} |[^\s]{' + lineWidth + '}|.*$','g');

            var res;
            var cutCache = '';
            for (;regex.lastIndex < string.length;) {
                res = regex.exec(string);

                if (res !== null) {
                    if (doCut === false && / /.test(res[0]) === false && regex.lastIndex !== string.length) {
                        cutCache = res[0];
                    } else {
                        if (cutCache.length > 0) {
                            res[0] = cutCache + res[0];
                            cutCache = '';
                        }
                        result.push(res[0].trim());
                    }
                }
            }
            result = result.join(lineBreak || '\n');

            return result;
        }
    ];

    module.exports = wordwrap();
}.call(this));