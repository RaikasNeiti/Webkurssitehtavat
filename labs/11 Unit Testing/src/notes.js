var notes = (function() {
    var list = [];

    return {
        add: function(note) {
            if (note && typeof String && hasWhiteSpaces(note)) {
                var item = {timestamp: Date.now(), text: note};
                list.push(item);
                return true;
            }
            return false;
        },
        remove: function(index) {
            if (index <= list.length){
                list.shift();
                return true;
            }
            return false;

        },
        count: function() {
            return list.length;
        },
        list: function() {},
        find: function(str) {},
        clear: function() {
            list.splice(0, list.length);
        }
    }
}());

function hasWhiteSpaces(s){
    if (s.indexOf(' ') > 0){
        return true
    }
    return false

}