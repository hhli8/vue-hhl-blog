/**
 * 引入组件
 */

import Pull from './pull';
import Lazyload from './lazyload';
import Header from './header';
import Footer from './footer';

const hview = {
	hPull: Pull,
	hLazyload: Lazyload,
	hHeader: Header,
	hFooter: Footer
};

const install = Vue => {
	Object.keys(hview).forEach(key => Vue.component(key, hview[key]));

	//Vue.prototype.$Dialog = Dialog;
	//Vue.prototype.$Message = Message;
};

if(typeof window !== 'undefined' && window.Vue) install(window.Vue);

export default Object.assign(hview, {
	install
});