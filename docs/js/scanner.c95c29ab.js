(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["scanner"],{"0b25":function(t,r,e){var n=e("a691"),o=e("50c4");t.exports=function(t){if(void 0===t)return 0;var r=n(t),e=o(r);if(r!==e)throw RangeError("Wrong length or index");return e}},1448:function(t,r,e){var n=e("ebb5").aTypedArrayConstructor,o=e("4840");t.exports=function(t,r){var e=o(t,t.constructor),i=0,a=r.length,c=new(n(e))(a);while(a>i)c[i]=r[i++];return c}},"145e":function(t,r,e){"use strict";var n=e("7b0b"),o=e("23cb"),i=e("50c4"),a=Math.min;t.exports=[].copyWithin||function(t,r){var e=n(this),c=i(e.length),u=o(t,c),f=o(r,c),s=arguments.length>2?arguments[2]:void 0,h=a((void 0===s?c:o(s,c))-f,c-u),l=1;f<u&&u<f+h&&(l=-1,f+=h-1,u+=h-1);while(h-- >0)f in e?e[u]=e[f]:delete e[u],u+=l,f+=l;return e}},"162b":function(t,r,e){},"170b":function(t,r,e){"use strict";var n=e("ebb5"),o=e("50c4"),i=e("23cb"),a=e("4840"),c=n.aTypedArray,u=n.exportTypedArrayMethod;u("subarray",(function(t,r){var e=c(this),n=e.length,u=i(t,n);return new(a(e,e.constructor))(e.buffer,e.byteOffset+u*e.BYTES_PER_ELEMENT,o((void 0===r?n:i(r,n))-u))}))},"182d":function(t,r,e){var n=e("f8cd");t.exports=function(t,r){var e=n(t);if(e%r)throw RangeError("Wrong offset");return e}},"219c":function(t,r,e){"use strict";var n=e("ebb5"),o=n.aTypedArray,i=n.exportTypedArrayMethod,a=[].sort;i("sort",(function(t){return a.call(o(this),t)}))},"25a1":function(t,r,e){"use strict";var n=e("ebb5"),o=e("d58f").right,i=n.aTypedArray,a=n.exportTypedArrayMethod;a("reduceRight",(function(t){return o(i(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},2954:function(t,r,e){"use strict";var n=e("ebb5"),o=e("4840"),i=e("d039"),a=n.aTypedArray,c=n.aTypedArrayConstructor,u=n.exportTypedArrayMethod,f=[].slice,s=i((function(){new Int8Array(1).slice()}));u("slice",(function(t,r){var e=f.call(a(this),t,r),n=o(this,this.constructor),i=0,u=e.length,s=new(c(n))(u);while(u>i)s[i]=e[i++];return s}),s)},3280:function(t,r,e){"use strict";var n=e("ebb5"),o=e("e58c"),i=n.aTypedArray,a=n.exportTypedArrayMethod;a("lastIndexOf",(function(t){return o.apply(i(this),arguments)}))},"3a7b":function(t,r,e){"use strict";var n=e("ebb5"),o=e("b727").findIndex,i=n.aTypedArray,a=n.exportTypedArrayMethod;a("findIndex",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},"3c5d":function(t,r,e){"use strict";var n=e("ebb5"),o=e("50c4"),i=e("182d"),a=e("7b0b"),c=e("d039"),u=n.aTypedArray,f=n.exportTypedArrayMethod,s=c((function(){new Int8Array(1).set({})}));f("set",(function(t){u(this);var r=i(arguments.length>1?arguments[1]:void 0,1),e=this.length,n=a(t),c=o(n.length),f=0;if(c+r>e)throw RangeError("Wrong length");while(f<c)this[r+f]=n[f++]}),s)},"3fcc":function(t,r,e){"use strict";var n=e("ebb5"),o=e("b727").map,i=e("4840"),a=n.aTypedArray,c=n.aTypedArrayConstructor,u=n.exportTypedArrayMethod;u("map",(function(t){return o(a(this),t,arguments.length>1?arguments[1]:void 0,(function(t,r){return new(c(i(t,t.constructor)))(r)}))}))},"5cc6":function(t,r,e){var n=e("74e8");n("Uint8",(function(t){return function(r,e,n){return t(this,r,e,n)}}))},"5f96":function(t,r,e){"use strict";var n=e("ebb5"),o=n.aTypedArray,i=n.exportTypedArrayMethod,a=[].join;i("join",(function(t){return a.apply(o(this),arguments)}))},"60bd":function(t,r,e){"use strict";var n=e("da84"),o=e("ebb5"),i=e("e260"),a=e("b622"),c=a("iterator"),u=n.Uint8Array,f=i.values,s=i.keys,h=i.entries,l=o.aTypedArray,d=o.exportTypedArrayMethod,y=u&&u.prototype[c],p=!!y&&("values"==y.name||void 0==y.name),v=function(){return f.call(l(this))};d("entries",(function(){return h.call(l(this))})),d("keys",(function(){return s.call(l(this))})),d("values",v,!p),d(c,v,!p)},"621a":function(t,r,e){"use strict";var n=e("da84"),o=e("83ab"),i=e("a981"),a=e("9112"),c=e("e2cc"),u=e("d039"),f=e("19aa"),s=e("a691"),h=e("50c4"),l=e("0b25"),d=e("77a7"),y=e("e163"),p=e("d2bb"),v=e("241c").f,g=e("9bf2").f,b=e("81d5"),w=e("d44e"),A=e("69f3"),m=A.get,T=A.set,x="ArrayBuffer",E="DataView",L="prototype",I="Wrong length",M="Wrong index",_=n[x],O=_,R=n[E],S=R&&R[L],k=Object.prototype,F=n.RangeError,C=d.pack,U=d.unpack,j=function(t){return[255&t]},N=function(t){return[255&t,t>>8&255]},P=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},B=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},W=function(t){return C(t,23,4)},V=function(t){return C(t,52,8)},D=function(t,r){g(t[L],r,{get:function(){return m(this)[r]}})},Y=function(t,r,e,n){var o=l(e),i=m(t);if(o+r>i.byteLength)throw F(M);var a=m(i.buffer).bytes,c=o+i.byteOffset,u=a.slice(c,c+r);return n?u:u.reverse()},G=function(t,r,e,n,o,i){var a=l(e),c=m(t);if(a+r>c.byteLength)throw F(M);for(var u=m(c.buffer).bytes,f=a+c.byteOffset,s=n(+o),h=0;h<r;h++)u[f+h]=s[i?h:r-h-1]};if(i){if(!u((function(){_(1)}))||!u((function(){new _(-1)}))||u((function(){return new _,new _(1.5),new _(NaN),_.name!=x}))){O=function(t){return f(this,O),new _(l(t))};for(var $,H=O[L]=_[L],J=v(_),q=0;J.length>q;)($=J[q++])in O||a(O,$,_[$]);H.constructor=O}p&&y(S)!==k&&p(S,k);var z=new R(new O(2)),K=S.setInt8;z.setInt8(0,2147483648),z.setInt8(1,2147483649),!z.getInt8(0)&&z.getInt8(1)||c(S,{setInt8:function(t,r){K.call(this,t,r<<24>>24)},setUint8:function(t,r){K.call(this,t,r<<24>>24)}},{unsafe:!0})}else O=function(t){f(this,O,x);var r=l(t);T(this,{bytes:b.call(new Array(r),0),byteLength:r}),o||(this.byteLength=r)},R=function(t,r,e){f(this,R,E),f(t,O,E);var n=m(t).byteLength,i=s(r);if(i<0||i>n)throw F("Wrong offset");if(e=void 0===e?n-i:h(e),i+e>n)throw F(I);T(this,{buffer:t,byteLength:e,byteOffset:i}),o||(this.buffer=t,this.byteLength=e,this.byteOffset=i)},o&&(D(O,"byteLength"),D(R,"buffer"),D(R,"byteLength"),D(R,"byteOffset")),c(R[L],{getInt8:function(t){return Y(this,1,t)[0]<<24>>24},getUint8:function(t){return Y(this,1,t)[0]},getInt16:function(t){var r=Y(this,2,t,arguments.length>1?arguments[1]:void 0);return(r[1]<<8|r[0])<<16>>16},getUint16:function(t){var r=Y(this,2,t,arguments.length>1?arguments[1]:void 0);return r[1]<<8|r[0]},getInt32:function(t){return B(Y(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return B(Y(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return U(Y(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return U(Y(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,r){G(this,1,t,j,r)},setUint8:function(t,r){G(this,1,t,j,r)},setInt16:function(t,r){G(this,2,t,N,r,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,r){G(this,2,t,N,r,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,r){G(this,4,t,P,r,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,r){G(this,4,t,P,r,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,r){G(this,4,t,W,r,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,r){G(this,8,t,V,r,arguments.length>2?arguments[2]:void 0)}});w(O,x),w(R,E),t.exports={ArrayBuffer:O,DataView:R}},"649e":function(t,r,e){"use strict";var n=e("ebb5"),o=e("b727").some,i=n.aTypedArray,a=n.exportTypedArrayMethod;a("some",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},"72f7":function(t,r,e){"use strict";var n=e("ebb5").exportTypedArrayMethod,o=e("d039"),i=e("da84"),a=i.Uint8Array,c=a&&a.prototype||{},u=[].toString,f=[].join;o((function(){u.call({})}))&&(u=function(){return f.call(this)});var s=c.toString!=u;n("toString",u,s)},"735e":function(t,r,e){"use strict";var n=e("ebb5"),o=e("81d5"),i=n.aTypedArray,a=n.exportTypedArrayMethod;a("fill",(function(t){return o.apply(i(this),arguments)}))},"74e8":function(t,r,e){"use strict";var n=e("23e7"),o=e("da84"),i=e("83ab"),a=e("8aa7"),c=e("ebb5"),u=e("621a"),f=e("19aa"),s=e("5c6c"),h=e("9112"),l=e("50c4"),d=e("0b25"),y=e("182d"),p=e("c04e"),v=e("5135"),g=e("f5df"),b=e("861d"),w=e("7c73"),A=e("d2bb"),m=e("241c").f,T=e("a078"),x=e("b727").forEach,E=e("2626"),L=e("9bf2"),I=e("06cf"),M=e("69f3"),_=e("7156"),O=M.get,R=M.set,S=L.f,k=I.f,F=Math.round,C=o.RangeError,U=u.ArrayBuffer,j=u.DataView,N=c.NATIVE_ARRAY_BUFFER_VIEWS,P=c.TYPED_ARRAY_TAG,B=c.TypedArray,W=c.TypedArrayPrototype,V=c.aTypedArrayConstructor,D=c.isTypedArray,Y="BYTES_PER_ELEMENT",G="Wrong length",$=function(t,r){var e=0,n=r.length,o=new(V(t))(n);while(n>e)o[e]=r[e++];return o},H=function(t,r){S(t,r,{get:function(){return O(this)[r]}})},J=function(t){var r;return t instanceof U||"ArrayBuffer"==(r=g(t))||"SharedArrayBuffer"==r},q=function(t,r){return D(t)&&"symbol"!=typeof r&&r in t&&String(+r)==String(r)},z=function(t,r){return q(t,r=p(r,!0))?s(2,t[r]):k(t,r)},K=function(t,r,e){return!(q(t,r=p(r,!0))&&b(e)&&v(e,"value"))||v(e,"get")||v(e,"set")||e.configurable||v(e,"writable")&&!e.writable||v(e,"enumerable")&&!e.enumerable?S(t,r,e):(t[r]=e.value,t)};i?(N||(I.f=z,L.f=K,H(W,"buffer"),H(W,"byteOffset"),H(W,"byteLength"),H(W,"length")),n({target:"Object",stat:!0,forced:!N},{getOwnPropertyDescriptor:z,defineProperty:K}),t.exports=function(t,r,e){var i=t.match(/\d+$/)[0]/8,c=t+(e?"Clamped":"")+"Array",u="get"+t,s="set"+t,p=o[c],v=p,g=v&&v.prototype,L={},I=function(t,r){var e=O(t);return e.view[u](r*i+e.byteOffset,!0)},M=function(t,r,n){var o=O(t);e&&(n=(n=F(n))<0?0:n>255?255:255&n),o.view[s](r*i+o.byteOffset,n,!0)},k=function(t,r){S(t,r,{get:function(){return I(this,r)},set:function(t){return M(this,r,t)},enumerable:!0})};N?a&&(v=r((function(t,r,e,n){return f(t,v,c),_(function(){return b(r)?J(r)?void 0!==n?new p(r,y(e,i),n):void 0!==e?new p(r,y(e,i)):new p(r):D(r)?$(v,r):T.call(v,r):new p(d(r))}(),t,v)})),A&&A(v,B),x(m(p),(function(t){t in v||h(v,t,p[t])})),v.prototype=g):(v=r((function(t,r,e,n){f(t,v,c);var o,a,u,s=0,h=0;if(b(r)){if(!J(r))return D(r)?$(v,r):T.call(v,r);o=r,h=y(e,i);var p=r.byteLength;if(void 0===n){if(p%i)throw C(G);if(a=p-h,a<0)throw C(G)}else if(a=l(n)*i,a+h>p)throw C(G);u=a/i}else u=d(r),a=u*i,o=new U(a);R(t,{buffer:o,byteOffset:h,byteLength:a,length:u,view:new j(o)});while(s<u)k(t,s++)})),A&&A(v,B),g=v.prototype=w(W)),g.constructor!==v&&h(g,"constructor",v),P&&h(g,P,c),L[c]=v,n({global:!0,forced:v!=p,sham:!N},L),Y in v||h(v,Y,i),Y in g||h(g,Y,i),E(c)}):t.exports=function(){}},"77a7":function(t,r){var e=Math.abs,n=Math.pow,o=Math.floor,i=Math.log,a=Math.LN2,c=function(t,r,c){var u,f,s,h=new Array(c),l=8*c-r-1,d=(1<<l)-1,y=d>>1,p=23===r?n(2,-24)-n(2,-77):0,v=t<0||0===t&&1/t<0?1:0,g=0;for(t=e(t),t!=t||t===1/0?(f=t!=t?1:0,u=d):(u=o(i(t)/a),t*(s=n(2,-u))<1&&(u--,s*=2),t+=u+y>=1?p/s:p*n(2,1-y),t*s>=2&&(u++,s/=2),u+y>=d?(f=0,u=d):u+y>=1?(f=(t*s-1)*n(2,r),u+=y):(f=t*n(2,y-1)*n(2,r),u=0));r>=8;h[g++]=255&f,f/=256,r-=8);for(u=u<<r|f,l+=r;l>0;h[g++]=255&u,u/=256,l-=8);return h[--g]|=128*v,h},u=function(t,r){var e,o=t.length,i=8*o-r-1,a=(1<<i)-1,c=a>>1,u=i-7,f=o-1,s=t[f--],h=127&s;for(s>>=7;u>0;h=256*h+t[f],f--,u-=8);for(e=h&(1<<-u)-1,h>>=-u,u+=r;u>0;e=256*e+t[f],f--,u-=8);if(0===h)h=1-c;else{if(h===a)return e?NaN:s?-1/0:1/0;e+=n(2,r),h-=c}return(s?-1:1)*e*n(2,h-r)};t.exports={pack:c,unpack:u}},"82f8":function(t,r,e){"use strict";var n=e("ebb5"),o=e("4d64").includes,i=n.aTypedArray,a=n.exportTypedArrayMethod;a("includes",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},"8aa7":function(t,r,e){var n=e("da84"),o=e("d039"),i=e("1c7e"),a=e("ebb5").NATIVE_ARRAY_BUFFER_VIEWS,c=n.ArrayBuffer,u=n.Int8Array;t.exports=!a||!o((function(){u(1)}))||!o((function(){new u(-1)}))||!i((function(t){new u,new u(null),new u(1.5),new u(t)}),!0)||o((function(){return 1!==new u(new c(2),1,void 0).length}))},"96cf":function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(k){u=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=L(t,e,a),i}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(k){return{type:"throw",arg:k}}}t.wrap=f;var h="suspendedStart",l="suspendedYield",d="executing",y="completed",p={};function v(){}function g(){}function b(){}var w={};w[i]=function(){return this};var A=Object.getPrototypeOf,m=A&&A(A(R([])));m&&m!==e&&n.call(m,i)&&(w=m);var T=b.prototype=v.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,h=f.value;return h&&"object"===typeof h&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(h).then((function(t){f.value=t,a(f)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;function i(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function L(t,r,e){var n=h;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return S()}e.method=o,e.arg=i;while(1){var a=e.delegate;if(a){var c=I(a,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===h)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=d;var u=s(t,r,e);if("normal"===u.type){if(n=e.done?y:l,u.arg===p)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}function I(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=r,I(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function M(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function R(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){while(++o<t.length)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:S}}function S(){return{value:r,done:!0}}return g.prototype=T.constructor=b,b.constructor=g,g.displayName=u(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(T),t},t.awrap=function(t){return{__await:t}},x(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new E(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(T),u(T,c,"Generator"),T[i]=function(){return this},T.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){while(r.length){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=R,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:R(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),p}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"9a8c":function(t,r,e){"use strict";var n=e("ebb5"),o=e("145e"),i=n.aTypedArray,a=n.exportTypedArrayMethod;a("copyWithin",(function(t,r){return o.call(i(this),t,r,arguments.length>2?arguments[2]:void 0)}))},a078:function(t,r,e){var n=e("7b0b"),o=e("50c4"),i=e("35a1"),a=e("e95a"),c=e("0366"),u=e("ebb5").aTypedArrayConstructor;t.exports=function(t){var r,e,f,s,h,l,d=n(t),y=arguments.length,p=y>1?arguments[1]:void 0,v=void 0!==p,g=i(d);if(void 0!=g&&!a(g)){h=g.call(d),l=h.next,d=[];while(!(s=l.call(h)).done)d.push(s.value)}for(v&&y>2&&(p=c(p,arguments[2],2)),e=o(d.length),f=new(u(this))(e),r=0;e>r;r++)f[r]=v?p(d[r],r):d[r];return f}},a73f:function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"scanner"},[e("div",{staticClass:"player-container"},[e("video",{ref:"video",attrs:{autoplay:"true",muted:"true",playsinline:"true",width:"1px"},domProps:{muted:!0}})]),e("div",{staticClass:"canvas-container"},[e("canvas",{ref:"canvas",staticClass:"canvas"}),t._m(0)])])},o=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"canvas-overlay"},[e("div",{staticClass:"scanner-line"})])}];e("d3b7");function i(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(f){return void e(f)}c.done?r(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}e("159b"),e("96cf"),e("5cc6"),e("9a8c"),e("a975"),e("735e"),e("c1ac"),e("d139"),e("3a7b"),e("d5d6"),e("82f8"),e("e91f"),e("60bd"),e("5f96"),e("3280"),e("3fcc"),e("ca91"),e("25a1"),e("cd26"),e("3c5d"),e("2954"),e("649e"),e("219c"),e("170b"),e("b39a"),e("72f7");function c(t){return u.apply(this,arguments)}function u(){return u=a(regeneratorRuntime.mark((function t(r){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.arrayBuffer();case 2:return e=t.sent,n=new Uint8Array(e),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}var f={blobToUint8Array:c};function s(){return new Worker(e.p+"js/codereaderWorker.523d92ae.worker.js")}var h=new s,l={name:"Scanner",data:function(){return{decodeHistory:[],stream:null}},mounted:function(){var t=this;console.log(this);var r={video:{facingMode:"environment"}};navigator.mediaDevices.getUserMedia(r).then((function(r){t.stream=r;var e=t.$refs.video;e.srcObject=r,e.onplay=function(){console.debug("play"),t.syncCanvasVideo()};var n=function(){var r=a(regeneratorRuntime.mark((function r(){var e,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.debug("loop"),t.canvasDrawCurrentVideoFrame(),r.prev=2,r.next=5,t.canvasToBlob();case 5:return e=r.sent,r.next=8,f.blobToUint8Array(e);case 8:return o=r.sent,h.postMessage({bytes:o}),r.abrupt("return");case 13:r.prev=13,r.t0=r["catch"](2),"NotFoundException"!==r.t0.message&&console.error(r.t0);case 16:setTimeout((function(){return n()}),2e3);case 17:case"end":return r.stop()}}),r,null,[[2,13]])})));return function(){return r.apply(this,arguments)}}();h.onmessage=function(t){var r=t.data;r.error?"NotFoundException"===r.error.message?console.debug("NotFound"):console.log("unhandled error:",r.error):(console.log(r),console.log("ok!",r.result),alert(r.result.text)),setTimeout((function(){return n()}),50)},n()}))},beforeDestroy:function(){console.log("beforeDestroy",this.stream),this.stream?this.stream.getTracks().forEach((function(t){return t.stop()})):console.debug("No Stream to stop.")},methods:{syncCanvasVideo:function(){var t=this.$refs.video,r=this.$refs.canvas,e=30,n=null,o=function(){var e=t.videoWidth,n=t.videoHeight;r.width=e,r.height=n,r.getContext("2d",{alpha:!1}).drawImage(t,0,0,e,n)};n=window.setInterval((function(){o()}),1e3/e),t.onpause=function(){clearInterval(n)},t.onended=function(){clearInterval(n)},t.onplay=function(){clearInterval(n),n=window.setInterval((function(){o()}),1e3/e)},clearInterval(n),n=window.setInterval((function(){o()}),1e3/e)},canvasDrawCurrentVideoFrame:function(){var t=this.$refs.video,r=this.$refs.canvas,e=t.videoWidth,n=t.videoHeight;r.width=e,r.height=n;var o=r.getContext("2d",{alpha:!1});o.drawImage(t,0,0,e,n)},canvasToBlob:function(){var t=this;return new Promise((function(r){var e=t.$refs.canvas,n="image/jpeg",o=.9;e.toBlob((function(t){return r(t)}),n,o)}))},cloneCanvas:function(){var t=this.$refs.canvas,r=document.createElement("canvas"),e=r.getContext("2d");return r.width=t.width,r.height=t.height,e.drawImage(t,0,0),r},canvasDrawLine:function(t,r,e,n,o){console.debug(r,e,n,o);var i=t.getContext("2d");i.beginPath(),i.strokeStyle="#FF0000",i.lineWidth=5,i.moveTo(r,e),i.lineTo(n,o),i.stroke()}}},d=l,y=(e("c450"),e("2877")),p=Object(y["a"])(d,n,o,!1,null,"fcfdb1a2",null);r["default"]=p.exports},a975:function(t,r,e){"use strict";var n=e("ebb5"),o=e("b727").every,i=n.aTypedArray,a=n.exportTypedArrayMethod;a("every",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},a981:function(t,r){t.exports="undefined"!==typeof ArrayBuffer&&"undefined"!==typeof DataView},b39a:function(t,r,e){"use strict";var n=e("da84"),o=e("ebb5"),i=e("d039"),a=n.Int8Array,c=o.aTypedArray,u=o.exportTypedArrayMethod,f=[].toLocaleString,s=[].slice,h=!!a&&i((function(){f.call(new a(1))})),l=i((function(){return[1,2].toLocaleString()!=new a([1,2]).toLocaleString()}))||!i((function(){a.prototype.toLocaleString.call([1,2])}));u("toLocaleString",(function(){return f.apply(h?s.call(c(this)):c(this),arguments)}),l)},c1ac:function(t,r,e){"use strict";var n=e("ebb5"),o=e("b727").filter,i=e("1448"),a=n.aTypedArray,c=n.exportTypedArrayMethod;c("filter",(function(t){var r=o(a(this),t,arguments.length>1?arguments[1]:void 0);return i(this,r)}))},c450:function(t,r,e){"use strict";e("162b")},ca91:function(t,r,e){"use strict";var n=e("ebb5"),o=e("d58f").left,i=n.aTypedArray,a=n.exportTypedArrayMethod;a("reduce",(function(t){return o(i(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},cd26:function(t,r,e){"use strict";var n=e("ebb5"),o=n.aTypedArray,i=n.exportTypedArrayMethod,a=Math.floor;i("reverse",(function(){var t,r=this,e=o(r).length,n=a(e/2),i=0;while(i<n)t=r[i],r[i++]=r[--e],r[e]=t;return r}))},d139:function(t,r,e){"use strict";var n=e("ebb5"),o=e("b727").find,i=n.aTypedArray,a=n.exportTypedArrayMethod;a("find",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},d58f:function(t,r,e){var n=e("1c0b"),o=e("7b0b"),i=e("44ad"),a=e("50c4"),c=function(t){return function(r,e,c,u){n(e);var f=o(r),s=i(f),h=a(f.length),l=t?h-1:0,d=t?-1:1;if(c<2)while(1){if(l in s){u=s[l],l+=d;break}if(l+=d,t?l<0:h<=l)throw TypeError("Reduce of empty array with no initial value")}for(;t?l>=0:h>l;l+=d)l in s&&(u=e(u,s[l],l,f));return u}};t.exports={left:c(!1),right:c(!0)}},d5d6:function(t,r,e){"use strict";var n=e("ebb5"),o=e("b727").forEach,i=n.aTypedArray,a=n.exportTypedArrayMethod;a("forEach",(function(t){o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},e58c:function(t,r,e){"use strict";var n=e("fc6a"),o=e("a691"),i=e("50c4"),a=e("a640"),c=Math.min,u=[].lastIndexOf,f=!!u&&1/[1].lastIndexOf(1,-0)<0,s=a("lastIndexOf"),h=f||!s;t.exports=h?function(t){if(f)return u.apply(this,arguments)||0;var r=n(this),e=i(r.length),a=e-1;for(arguments.length>1&&(a=c(a,o(arguments[1]))),a<0&&(a=e+a);a>=0;a--)if(a in r&&r[a]===t)return a||0;return-1}:u},e91f:function(t,r,e){"use strict";var n=e("ebb5"),o=e("4d64").indexOf,i=n.aTypedArray,a=n.exportTypedArrayMethod;a("indexOf",(function(t){return o(i(this),t,arguments.length>1?arguments[1]:void 0)}))},ebb5:function(t,r,e){"use strict";var n,o=e("a981"),i=e("83ab"),a=e("da84"),c=e("861d"),u=e("5135"),f=e("f5df"),s=e("9112"),h=e("6eeb"),l=e("9bf2").f,d=e("e163"),y=e("d2bb"),p=e("b622"),v=e("90e3"),g=a.Int8Array,b=g&&g.prototype,w=a.Uint8ClampedArray,A=w&&w.prototype,m=g&&d(g),T=b&&d(b),x=Object.prototype,E=x.isPrototypeOf,L=p("toStringTag"),I=v("TYPED_ARRAY_TAG"),M=o&&!!y&&"Opera"!==f(a.opera),_=!1,O={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},R={BigInt64Array:8,BigUint64Array:8},S=function(t){if(!c(t))return!1;var r=f(t);return"DataView"===r||u(O,r)||u(R,r)},k=function(t){if(!c(t))return!1;var r=f(t);return u(O,r)||u(R,r)},F=function(t){if(k(t))return t;throw TypeError("Target is not a typed array")},C=function(t){if(y){if(E.call(m,t))return t}else for(var r in O)if(u(O,n)){var e=a[r];if(e&&(t===e||E.call(e,t)))return t}throw TypeError("Target is not a typed array constructor")},U=function(t,r,e){if(i){if(e)for(var n in O){var o=a[n];if(o&&u(o.prototype,t))try{delete o.prototype[t]}catch(c){}}T[t]&&!e||h(T,t,e?r:M&&b[t]||r)}},j=function(t,r,e){var n,o;if(i){if(y){if(e)for(n in O)if(o=a[n],o&&u(o,t))try{delete o[t]}catch(c){}if(m[t]&&!e)return;try{return h(m,t,e?r:M&&m[t]||r)}catch(c){}}for(n in O)o=a[n],!o||o[t]&&!e||h(o,t,r)}};for(n in O)a[n]||(M=!1);if((!M||"function"!=typeof m||m===Function.prototype)&&(m=function(){throw TypeError("Incorrect invocation")},M))for(n in O)a[n]&&y(a[n],m);if((!M||!T||T===x)&&(T=m.prototype,M))for(n in O)a[n]&&y(a[n].prototype,T);if(M&&d(A)!==T&&y(A,T),i&&!u(T,L))for(n in _=!0,l(T,L,{get:function(){return c(this)?this[I]:void 0}}),O)a[n]&&s(a[n],I,n);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:_&&I,aTypedArray:F,aTypedArrayConstructor:C,exportTypedArrayMethod:U,exportTypedArrayStaticMethod:j,isView:S,isTypedArray:k,TypedArray:m,TypedArrayPrototype:T}},f8cd:function(t,r,e){var n=e("a691");t.exports=function(t){var r=n(t);if(r<0)throw RangeError("The argument can't be less than 0");return r}}}]);
//# sourceMappingURL=scanner.c95c29ab.js.map