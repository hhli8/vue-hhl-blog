let text=function(value) {
    return value+'12';
}

let init = function (_vue) {
    _vue.filter('dateToString', text);
    _vue.filter('capitalize', function(value){
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
    });
};


export default {
    init
}
