(function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="/",e(e.s="9cb3")})({"00ee":function(t,r,e){var n=e("b622"),o=n("toStringTag"),i={};i[o]="z",t.exports="[object z]"===String(i)},"0cfb":function(t,r,e){var n=e("83ab"),o=e("d039"),i=e("cc12");t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"1d80":function(t,r){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"2d00":function(t,r,e){var n,o,i=e("da84"),c=e("342f"),a=i.process,u=a&&a.versions,f=u&&u.v8;f?(n=f.split("."),o=n[0]+n[1]):c&&(n=c.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=c.match(/Chrome\/(\d+)/),n&&(o=n[1]))),t.exports=o&&+o},"342f":function(t,r,e){var n=e("d066");t.exports=n("navigator","userAgent")||""},"428f":function(t,r,e){var n=e("da84");t.exports=n},4930:function(t,r,e){var n=e("605d"),o=e("2d00"),i=e("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(n?38===o:o>37&&o<41)}))},5135:function(t,r,e){var n=e("7b0b"),o={}.hasOwnProperty;t.exports=function(t,r){return o.call(n(t),r)}},5692:function(t,r,e){var n=e("c430"),o=e("c6cd");(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.11.2",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"5c6c":function(t,r){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},"605d":function(t,r,e){var n=e("c6b6"),o=e("da84");t.exports="process"==n(o.process)},"69f3":function(t,r,e){var n,o,i,c=e("7f9a"),a=e("da84"),u=e("861d"),f=e("9112"),s=e("5135"),l=e("c6cd"),p=e("f772"),h=e("d012"),d="Object already initialized",y=a.WeakMap,v=function(t){return i(t)?o(t):n(t,{})},g=function(t){return function(r){var e;if(!u(r)||(e=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}};if(c){var b=l.state||(l.state=new y),m=b.get,w=b.has,x=b.set;n=function(t,r){if(w.call(b,t))throw new TypeError(d);return r.facade=t,x.call(b,t,r),r},o=function(t){return m.call(b,t)||{}},i=function(t){return w.call(b,t)}}else{var j=p("state");h[j]=!0,n=function(t,r){if(s(t,j))throw new TypeError(d);return r.facade=t,f(t,j,r),r},o=function(t){return s(t,j)?t[j]:{}},i=function(t){return s(t,j)}}t.exports={set:n,get:o,has:i,enforce:v,getterFor:g}},"6eeb":function(t,r,e){var n=e("da84"),o=e("9112"),i=e("5135"),c=e("ce4e"),a=e("8925"),u=e("69f3"),f=u.get,s=u.enforce,l=String(String).split("String");(t.exports=function(t,r,e,a){var u,f=!!a&&!!a.unsafe,p=!!a&&!!a.enumerable,h=!!a&&!!a.noTargetGet;"function"==typeof e&&("string"!=typeof r||i(e,"name")||o(e,"name",r),u=s(e),u.source||(u.source=l.join("string"==typeof r?r:""))),t!==n?(f?!h&&t[r]&&(p=!0):delete t[r],p?t[r]=e:o(t,r,e)):p?t[r]=e:c(r,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||a(this)}))},"7b0b":function(t,r,e){var n=e("1d80");t.exports=function(t){return Object(n(t))}},"7f9a":function(t,r,e){var n=e("da84"),o=e("8925"),i=n.WeakMap;t.exports="function"===typeof i&&/native code/.test(o(i))},"825a":function(t,r,e){var n=e("861d");t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,r,e){var n=e("d039");t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,r){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8925:function(t,r,e){var n=e("c6cd"),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},"90e3":function(t,r){var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},9112:function(t,r,e){var n=e("83ab"),o=e("9bf2"),i=e("5c6c");t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},"96cf":function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(M){u=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),c=new P(n||[]);return i._invoke=O(t,e,c),i}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(M){return{type:"throw",arg:M}}}t.wrap=f;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",y={};function v(){}function g(){}function b(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(T([])));x&&x!==e&&n.call(x,i)&&(m=x);var j=b.prototype=v.prototype=Object.create(m);function S(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(o,i,c,a){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"===typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,c,a)}),(function(t){e("throw",t,c,a)})):r.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return e("throw",t,c,a)}))}a(u.arg)}var o;function i(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function O(t,r,e){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return F()}e.method=o,e.arg=i;while(1){var c=e.delegate;if(c){var a=L(c,e);if(a){if(a===y)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=h;var u=s(t,r,e);if("normal"===u.type){if(n=e.done?d:p,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=d,e.method="throw",e.arg=u.arg)}}}function L(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=r,L(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function T(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function e(){while(++o<t.length)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return c.next=c}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=j.constructor=b,b.constructor=g,g.displayName=u(b,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,a,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},S(E.prototype),E.prototype[c]=function(){return this},t.AsyncIterator=E,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var c=new E(f(r,e,n,o),i);return t.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},S(j),u(j,a,"Generator"),j[i]=function(){return this},j.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){while(r.length){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),f=n.call(c,"finallyLoc");if(u&&f){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(c)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"9bf2":function(t,r,e){var n=e("83ab"),o=e("0cfb"),i=e("825a"),c=e("c04e"),a=Object.defineProperty;r.f=n?a:function(t,r,e){if(i(t),r=c(r,!0),i(e),o)try{return a(t,r,e)}catch(n){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},"9cb3":function(t,r,e){"use strict";e.r(r);e("d3b7");function n(t,r,e,n,o,i,c){try{var a=t[i](c),u=a.value}catch(f){return void e(f)}a.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var c=t.apply(r,e);function a(t){n(c,o,i,a,u,"next",t)}function u(t){n(c,o,i,a,u,"throw",t)}a(void 0)}))}}e("96cf"),e("b0c0");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"./";console.info("codereaderWasm","init");var r=new Go,e=!1,n={myFunc:function(){},myFuncErr:function(){},readByteArr:function(t){}};function i(){return c.apply(this,arguments)}function c(){return c=o(regeneratorRuntime.mark((function o(){var i,c,a;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(!e){o.next=2;break}return o.abrupt("return",n);case 2:return o.next=4,fetch(t+"codereader.wasm");case 4:return i=o.sent,o.next=7,i.arrayBuffer();case 7:return c=o.sent,o.next=10,WebAssembly.instantiate(c,r.importObject);case 10:return a=o.sent,r.run(a.instance),n=self.mygoapp,e=!0,console.info("codereaderWasm","loaded"),o.abrupt("return",n);case 16:case"end":return o.stop()}}),o)}))),c.apply(this,arguments)}return{getMyGoApp:i}}var c={init:i};importScripts("../wasm_exec.js");var a=c.init("../");onmessage=function(){var t=o(regeneratorRuntime.mark((function t(r){var e,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.getMyGoApp();case 2:return e=t.sent,t.prev=3,t.next=6,e.readByteArr(r.data.bytes);case 6:n=t.sent,postMessage({result:n,error:null}),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](3),o={message:t.t0.message||null,name:t.t0.name||null,stack:t.t0.stack||null},postMessage({result:null,error:o});case 14:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(r){return t.apply(this,arguments)}}()},b041:function(t,r,e){"use strict";var n=e("00ee"),o=e("f5df");t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},b0c0:function(t,r,e){var n=e("83ab"),o=e("9bf2").f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/,u="name";n&&!(u in i)&&o(i,u,{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},b622:function(t,r,e){var n=e("da84"),o=e("5692"),i=e("5135"),c=e("90e3"),a=e("4930"),u=e("fdbf"),f=o("wks"),s=n.Symbol,l=u?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)&&(a||"string"==typeof f[t])||(a&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},c04e:function(t,r,e){var n=e("861d");t.exports=function(t,r){if(!n(t))return t;var e,o;if(r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!n(o=e.call(t)))return o;if(!r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},c430:function(t,r){t.exports=!1},c6b6:function(t,r){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},c6cd:function(t,r,e){var n=e("da84"),o=e("ce4e"),i="__core-js_shared__",c=n[i]||o(i,{});t.exports=c},c8ba:function(t,r){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(n){"object"===typeof window&&(e=window)}t.exports=e},cc12:function(t,r,e){var n=e("da84"),o=e("861d"),i=n.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},ce4e:function(t,r,e){var n=e("da84"),o=e("9112");t.exports=function(t,r){try{o(n,t,r)}catch(e){n[t]=r}return r}},d012:function(t,r){t.exports={}},d039:function(t,r){t.exports=function(t){try{return!!t()}catch(r){return!0}}},d066:function(t,r,e){var n=e("428f"),o=e("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][r]||o[t]&&o[t][r]}},d3b7:function(t,r,e){var n=e("00ee"),o=e("6eeb"),i=e("b041");n||o(Object.prototype,"toString",i,{unsafe:!0})},da84:function(t,r,e){(function(r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r&&r)||function(){return this}()||Function("return this")()}).call(this,e("c8ba"))},f5df:function(t,r,e){var n=e("00ee"),o=e("c6b6"),i=e("b622"),c=i("toStringTag"),a="Arguments"==o(function(){return arguments}()),u=function(t,r){try{return t[r]}catch(e){}};t.exports=n?o:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=u(r=Object(t),c))?e:a?o(r):"Object"==(n=o(r))&&"function"==typeof r.callee?"Arguments":n}},f772:function(t,r,e){var n=e("5692"),o=e("90e3"),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},fdbf:function(t,r,e){var n=e("4930");t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}});
//# sourceMappingURL=codereaderWorker.523d92ae.worker.js.map