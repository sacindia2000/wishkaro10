(function(a,b){'object'===typeof exports&&'undefined'!==typeof module?module.exports=b():'function'===typeof define&&define.amd?define(b):a.page=b()})(this,function(){'use strict';function a(a){for(var b,c=[],e=0,f=0,g='';null!=(b=y.exec(a));){var h=b[0],i=b[1],j=b.index;if(g+=a.slice(f,j),f=j+h.length,i){g+=i[1];continue}g&&(c.push(g),g='');var k=b[2],l=b[3],m=b[4],n=b[5],o=b[6],p=b[7],q=k||'/',r=m||n||(p?'.*':'[^'+q+']+?');c.push({name:l||e++,prefix:k||'',delimiter:q,optional:'?'===o||'*'===o,repeat:'+'===o||'*'===o,pattern:d(r)})}return f<a.length&&(g+=a.substr(f)),g&&c.push(g),c}function b(a){for(var b=Array(a.length),c=0;c<a.length;c++)'object'===typeof a[c]&&(b[c]=new RegExp('^'+a[c].pattern+'$'));return function(c){for(var d,e='',f=c||{},g=0;g<a.length;g++){if(d=a[g],'string'===typeof d){e+=d;continue}var h,i=f[d.name];if(null==i)if(d.optional)continue;else throw new TypeError('Expected "'+d.name+'" to be defined');if(w(i)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but received "'+i+'"');if(0===i.length)if(d.optional)continue;else throw new TypeError('Expected "'+d.name+'" to not be empty');for(var k=0;k<i.length;k++){if(h=encodeURIComponent(i[k]),!b[g].test(h))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'", but received "'+h+'"');e+=(0===k?d.prefix:d.delimiter)+h}continue}if(h=encodeURIComponent(i),!b[g].test(h))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but received "'+h+'"');e+=d.prefix+h}return e}}function c(a){return a.replace(/([.+*?=^!:${}()[\]|\/])/g,'\\$1')}function d(a){return a.replace(/([=!:$\/()])/g,'\\$1')}function e(a,b){return a.keys=b,a}function f(a){return a.sensitive?'':'i'}function g(a,b){var c=a.source.match(/\((?!\?)/g);if(c)for(var d=0;d<c.length;d++)b.push({name:d,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return e(a,b)}function h(a,b,c){for(var d=[],g=0;g<a.length;g++)d.push(k(a[g],b,c).source);var h=new RegExp('(?:'+d.join('|')+')',f(c));return e(h,b)}function i(b,c,d){for(var f=a(b),g=j(f,d),h=0;h<f.length;h++)'string'!==typeof f[h]&&c.push(f[h]);return e(g,c)}function j(a,b){b=b||{};for(var d,e=b.strict,g=!1!==b.end,h='',j=a[a.length-1],k='string'===typeof j&&/\/$/.test(j),l=0;l<a.length;l++)if(d=a[l],'string'===typeof d)h+=c(d);else{var i=c(d.prefix),m=d.pattern;d.repeat&&(m+='(?:'+i+m+')*'),m=d.optional?i?'(?:'+i+'('+m+'))?':'('+m+')?':i+'('+m+')',h+=m}return e||(h=(k?h.slice(0,-2):h)+'(?:\\/(?=$))?'),h+=g?'$':e&&k?'':'(?=\\/|$)',new RegExp('^'+h,f(b))}function k(a,b,c){return b=b||[],w(b)?!c&&(c={}):(c=b,b=[]),a instanceof RegExp?g(a,b,c):w(a)?h(a,b,c):i(a,b,c)}function l(a,b){if('function'===typeof a)return l('*',a);if('function'===typeof b)for(var c=new p(a),d=1;d<arguments.length;++d)l.callbacks.push(c.middleware(arguments[d]));else'string'===typeof a?l['string'===typeof b?'redirect':'show'](a,b):l.start(a)}function m(a){if(!a.handled){var b;b=M?H&&v()+B.location.hash.replace('#!',''):H&&B.location.pathname+B.location.search,b===a.canonicalPath||(l.stop(),a.handled=!1,H&&(B.location.href=a.canonicalPath))}}function n(a){return'string'===typeof a?J?decodeURIComponent(a.replace(/\+/g,' ')):a:a}function o(a,b){var c=v();'/'===a[0]&&0!==a.indexOf(c)&&(a=c+(M?'#!':'')+a);var d=a.indexOf('?');if(this.canonicalPath=a,this.path=a.replace(c,'')||'/',M&&(this.path=this.path.replace('#!','')||'/'),this.title=C&&B.document.title,this.state=b||{},this.state.path=a,this.querystring=~d?n(a.slice(d+1)):'',this.pathname=n(~d?a.slice(0,d):a),this.params={},this.hash='',!M){if(!~this.path.indexOf('#'))return;var e=this.path.split('#');this.path=this.pathname=e[0],this.hash=n(e[1])||'',this.querystring=this.querystring.split('#')[0]}}function p(a,b){b=b||{},b.strict=b.strict||L,this.path='*'===a?'(.*)':a,this.method='GET',this.regexp=x(this.path,this.keys=[],b)}function q(a){if(1===r(a)&&!(a.metaKey||a.ctrlKey||a.shiftKey)&&!a.defaultPrevented){for(var b=a.path?a.path[0]:a.target;b&&'A'!==b.nodeName.toUpperCase();)b=b.parentNode;if(b&&'A'===b.nodeName.toUpperCase()){var c='object'===typeof b.href&&'SVGAnimatedString'===b.href.constructor.name;if(!(b.hasAttribute('download')||'external'===b.getAttribute('rel'))){var d=b.getAttribute('href');if(!(!M&&u(b)&&(b.hash||'#'===d))&&!(d&&-1<d.indexOf('mailto:'))&&(c?!b.target.baseVal:!b.target)&&(c||t(b.href))){var e=c?b.href.baseVal:b.pathname+b.search+(b.hash||'');e='/'===e[0]?e:'/'+e,F&&e.match(/^\/[a-zA-Z]:\//)&&(e=e.replace(/^\/[a-zA-Z]:\//,'/'));var f=e,g=v();0===e.indexOf(g)&&(e=e.substr(K.length)),M&&(e=e.replace('#!','')),g&&f===e||(a.preventDefault(),l.show(f))}}}}}function r(a){return a=a||D&&window.event,null==a.which?a.button:a.which}function s(a){if('function'===typeof URL&&H)return new URL(a,location.toString());if(C){var b=document.createElement('a');return b.href=a,b}}function t(a){if(!a||!H)return!1;var b=s(a),c=B.location;return c.protocol===b.protocol&&c.hostname===b.hostname&&c.port===b.port}function u(a){if(!H)return!1;var b=B.location;return a.pathname===b.pathname&&a.search===b.search}function v(){if(!!K)return K;var a=D&&B.location;return D&&M&&'file:'===a.protocol?a.pathname:K}var w=Array.isArray||function(a){return'[object Array]'==Object.prototype.toString.call(a)},x=k,y=/(\\.)|([\/.])?(?:(?:\:(\w+)(?:\(((?:\\.|[^()])+)\))?|\(((?:\\.|[^()])+)\))([+*?])?|(\*))/g;x.parse=a,x.compile=function(c){return b(a(c))},x.tokensToFunction=b,x.tokensToRegExp=j;l.default=l,l.Context=o,l.Route=p,l.sameOrigin=t;var z,A,B,C='undefined'!==typeof document,D='undefined'!==typeof window,E='undefined'!==typeof history,F='undefined'!==typeof process,G=C&&document.ontouchstart?'touchstart':'click',H=D&&!!(window.history.location||window.location),I=!0,J=!0,K='',L=!1,M=!1;l.callbacks=[],l.exits=[],l.current='',l.len=0,l.base=function(a){return 0===arguments.length?K:void(K=a)},l.strict=function(a){return 0===arguments.length?L:void(L=a)},l.start=function(a){if((a=a||{},!z)&&(z=!0,B=a.window||D&&window,!1===a.dispatch&&(I=!1),!1===a.decodeURLComponents&&(J=!1),!1!==a.popstate&&D&&B.addEventListener('popstate',N,!1),!1!==a.click&&C&&B.document.addEventListener(G,q,!1),M=!!a.hashbang,M&&D&&!E&&B.addEventListener('hashchange',N,!1),!!I)){var b;if(H){var c=B.location;b=M&&~c.hash.indexOf('#!')?c.hash.substr(2)+c.search:M?c.search+c.hash:c.pathname+c.search+c.hash}l.replace(b,null,!0,I)}},l.stop=function(){z&&(l.current='',l.len=0,z=!1,C&&B.document.removeEventListener(G,q,!1),D&&B.removeEventListener('popstate',N,!1),D&&B.removeEventListener('hashchange',N,!1))},l.show=function(a,b,c,d){var e=new o(a,b),f=A;return A=e,l.current=e.path,!1!==c&&l.dispatch(e,f),!1!==e.handled&&!1!==d&&e.pushState(),e},l.back=function(a,b){0<l.len?(E&&B.history.back(),l.len--):a?setTimeout(function(){l.show(a,b)}):setTimeout(function(){l.show(v(),b)})},l.redirect=function(a,b){'string'===typeof a&&'string'===typeof b&&l(a,function(){setTimeout(function(){l.replace(b)},0)}),'string'===typeof a&&'undefined'===typeof b&&setTimeout(function(){l.replace(a)},0)},l.replace=function(a,b,c,d){var e=new o(a,b),f=A;return A=e,l.current=e.path,e.init=c,e.save(),!1!==d&&l.dispatch(e,f),e},l.dispatch=function(a,b){function c(){var a=l.exits[f++];return a?void a(b,c):d()}function d(){var b=l.callbacks[e++];return a.path===l.current?b?void b(a,d):m(a):void(a.handled=!1)}var e=0,f=0;b?c():d()},l.exit=function(a){if('function'===typeof a)return l.exit('*',a);for(var b=new p(a),c=1;c<arguments.length;++c)l.exits.push(b.middleware(arguments[c]))},l.Context=o,o.prototype.pushState=function(){l.len++,E&&B.history.pushState(this.state,this.title,M&&'/'!==this.path?'#!'+this.path:this.canonicalPath)},o.prototype.save=function(){E&&'file:'!==B.location.protocol&&B.history.replaceState(this.state,this.title,M&&'/'!==this.path?'#!'+this.path:this.canonicalPath)},l.Route=p,p.prototype.middleware=function(a){var b=this;return function(c,d){return b.match(c.path,c.params)?a(c,d):void d()}},p.prototype.match=function(a,b){var c=this.keys,d=a.indexOf('?'),e=~d?a.slice(0,d):a,f=this.regexp.exec(decodeURIComponent(e));if(!f)return!1;for(var g=1,h=f.length;g<h;++g){var i=c[g-1],j=n(f[g]);void 0===j&&hasOwnProperty.call(b,i.name)||(b[i.name]=j)}return!0};var N=function(){var a=!1;if(D)return C&&'complete'===document.readyState?a=!0:window.addEventListener('load',function(){setTimeout(function(){a=!0},0)}),function(b){if(a)if(b.state){var c=b.state.path;l.replace(c,b.state)}else if(H){var d=B.location;l.show(d.pathname+d.hash,void 0,void 0,!1)}}}();return l.sameOrigin=t,l});