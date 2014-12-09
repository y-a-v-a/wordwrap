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
            },
            versions: function() {
                return implementations.length;
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
                if ((line + word).length > lineWidth) {
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
                sub = string.substring(0, lineWidth + 1);

                lastSpaceIndex = sub.lastIndexOf(' ');
                string = string.substring(lastSpaceIndex + 1 || lineWidth);

                sub = sub.substring(0, lastSpaceIndex) || sub;
                result += sub + ((doCut === false && lastSpaceIndex === -1) ? '' : lBreak);
            }

            return result.replace(/\n$/, '');
        },
        function(string, width, lineBreak, cut) {
            if (!string) {
                return false;
            }
            var doCut = cut || false;
            var lineWidth = width || 75;
            var result = [];
            var regexString = '.{0,' + (lineWidth) + '}$|.{0,' + (lineWidth) + '} |[^\s]{' + lineWidth + '}';
            var regex = new RegExp(regexString,'g');

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
        },
        function(string, width, lineBreak, cut) {
            if (!string) {
                return false;
            }
            var doCut = cut || false;
            var lineWidth = width || 75;
            var regexString = '.{0,' + (lineWidth) + '}$|.{0,' + (lineWidth) + '} |[^\s]{' + lineWidth + '}';
            var regex = new RegExp(regexString, 'g');
            return string.match(regex).map(function(element, index, arr) {
                if (doCut === false && index !== arr.length - 1) {
                    if (/ /.test(element) === false) {
                        arr[index + 1] = element + arr[index + 1];
                        return;
                    }
                }
                return element.trim();
            }).filter(function(element) {
                return element !== undefined && element !== '';
            }).join(lineBreak || '\n');
        }
    ];

    module.exports = wordwrap();
}.call(this));