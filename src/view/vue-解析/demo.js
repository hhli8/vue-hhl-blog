function Vue (options) { 
  console.log(this instanceof Vue);
//if (process.env.NODE_ENV !== 'production' &&
//  !(this instanceof Vue)) {
//  warn('Vue is a constructor and should be called with the `new` keyword')
//}
  //this._init(options)
}
var test=new Vue();

