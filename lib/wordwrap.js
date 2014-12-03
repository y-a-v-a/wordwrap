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
            var result = [];
            var regex = new RegExp('.{0,' + (width - 1) + '} ','g');

            var res;
            var li;
            do {
                li = regex.lastIndex;
                res = regex.exec(string);

                if (res !== null) {
                    result.push(res[0].trim());
                }
            } while (regex.lastIndex !== 0);
            result = result.join(lineBreak) + ' ' + string.substring(li);

            return result;
        }
    ];

    module.exports = wordwrap();
}.call(this));