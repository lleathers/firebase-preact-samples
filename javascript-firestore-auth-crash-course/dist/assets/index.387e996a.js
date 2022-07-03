var Cp=Object.defineProperty,kp=Object.defineProperties;var Ap=Object.getOwnPropertyDescriptors;var rc=Object.getOwnPropertySymbols;var Dp=Object.prototype.hasOwnProperty,Np=Object.prototype.propertyIsEnumerable;var sc=(n,e,t)=>e in n?Cp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ve=(n,e)=>{for(var t in e||(e={}))Dp.call(e,t)&&sc(n,t,e[t]);if(rc)for(var t of rc(e))Np.call(e,t)&&sc(n,t,e[t]);return n},Be=(n,e)=>kp(n,Ap(e));const xp=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}};xp();var wr,x,ul,ll,Gn,hl,ic,dl,_s={},fl=[],Rp=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function qe(n,e){for(var t in e)n[t]=e[t];return n}function pl(n){var e=n.parentNode;e&&e.removeChild(n)}function ws(n,e,t){var r,s,i,o={};for(i in e)i=="key"?r=e[i]:i=="ref"?s=e[i]:o[i]=e[i];if(arguments.length>2&&(o.children=arguments.length>3?wr.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(i in n.defaultProps)o[i]===void 0&&(o[i]=n.defaultProps[i]);return Kn(n,o,r,s,null)}function Kn(n,e,t,r,s){var i={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:s==null?++ul:s};return s==null&&x.vnode!=null&&x.vnode(i),i}function Op(){return{current:null}}function Ir(n){return n.children}function Oe(n,e){this.props=n,this.context=e}function cn(n,e){if(e==null)return n.__?cn(n.__,n.__.__k.indexOf(n)+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?cn(n):null}function gl(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return gl(n)}}function Wi(n){(!n.__d&&(n.__d=!0)&&Gn.push(n)&&!Is.__r++||ic!==x.debounceRendering)&&((ic=x.debounceRendering)||hl)(Is)}function Is(){for(var n;Is.__r=Gn.length;)n=Gn.sort(function(e,t){return e.__v.__b-t.__v.__b}),Gn=[],n.some(function(e){var t,r,s,i,o,a;e.__d&&(o=(i=(t=e).__v).__e,(a=t.__P)&&(r=[],(s=qe({},i)).__v=i.__v+1,xo(a,i,s,t.__n,a.ownerSVGElement!==void 0,i.__h!=null?[o]:null,r,o==null?cn(i):o,i.__h),_l(r,i),i.__e!=o&&gl(i)))})}function ml(n,e,t,r,s,i,o,a,c,u){var l,h,d,f,m,S,T,R=r&&r.__k||fl,k=R.length;for(t.__k=[],l=0;l<e.length;l++)if((f=t.__k[l]=(f=e[l])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?Kn(null,f,null,null,f):Array.isArray(f)?Kn(Ir,{children:f},null,null,null):f.__b>0?Kn(f.type,f.props,f.key,null,f.__v):f)!=null){if(f.__=t,f.__b=t.__b+1,(d=R[l])===null||d&&f.key==d.key&&f.type===d.type)R[l]=void 0;else for(h=0;h<k;h++){if((d=R[h])&&f.key==d.key&&f.type===d.type){R[h]=void 0;break}d=null}xo(n,f,d=d||_s,s,i,o,a,c,u),m=f.__e,(h=f.ref)&&d.ref!=h&&(T||(T=[]),d.ref&&T.push(d.ref,null,f),T.push(h,f.__c||m,f)),m!=null?(S==null&&(S=m),typeof f.type=="function"&&f.__k===d.__k?f.__d=c=yl(f,c,n):c=vl(n,f,d,R,m,c),typeof t.type=="function"&&(t.__d=c)):c&&d.__e==c&&c.parentNode!=n&&(c=cn(d))}for(t.__e=S,l=k;l--;)R[l]!=null&&(typeof t.type=="function"&&R[l].__e!=null&&R[l].__e==t.__d&&(t.__d=cn(r,l+1)),Il(R[l],R[l]));if(T)for(l=0;l<T.length;l++)wl(T[l],T[++l],T[++l])}function yl(n,e,t){for(var r,s=n.__k,i=0;s&&i<s.length;i++)(r=s[i])&&(r.__=n,e=typeof r.type=="function"?yl(r,e,t):vl(t,r,r,s,r.__e,e));return e}function Es(n,e){return e=e||[],n==null||typeof n=="boolean"||(Array.isArray(n)?n.some(function(t){Es(t,e)}):e.push(n)),e}function vl(n,e,t,r,s,i){var o,a,c;if(e.__d!==void 0)o=e.__d,e.__d=void 0;else if(t==null||s!=i||s.parentNode==null)e:if(i==null||i.parentNode!==n)n.appendChild(s),o=null;else{for(a=i,c=0;(a=a.nextSibling)&&c<r.length;c+=2)if(a==s)break e;n.insertBefore(s,i),o=i}return o!==void 0?o:s.nextSibling}function Pp(n,e,t,r,s){var i;for(i in t)i==="children"||i==="key"||i in e||bs(n,i,null,t[i],r);for(i in e)s&&typeof e[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||t[i]===e[i]||bs(n,i,e[i],t[i],r)}function oc(n,e,t){e[0]==="-"?n.setProperty(e,t):n[e]=t==null?"":typeof t!="number"||Rp.test(e)?t:t+"px"}function bs(n,e,t,r,s){var i;e:if(e==="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||oc(n.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||oc(n.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in n?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+i]=t,t?r||n.addEventListener(e,i?cc:ac,i):n.removeEventListener(e,i?cc:ac,i);else if(e!=="dangerouslySetInnerHTML"){if(s)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in n)try{n[e]=t==null?"":t;break e}catch{}typeof t=="function"||(t!=null&&(t!==!1||e[0]==="a"&&e[1]==="r")?n.setAttribute(e,t):n.removeAttribute(e))}}function ac(n){this.l[n.type+!1](x.event?x.event(n):n)}function cc(n){this.l[n.type+!0](x.event?x.event(n):n)}function xo(n,e,t,r,s,i,o,a,c){var u,l,h,d,f,m,S,T,R,k,j,P=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(c=t.__h,a=e.__e=t.__e,e.__h=null,i=[a]),(u=x.__b)&&u(e);try{e:if(typeof P=="function"){if(T=e.props,R=(u=P.contextType)&&r[u.__c],k=u?R?R.props.value:u.__:r,t.__c?S=(l=e.__c=t.__c).__=l.__E:("prototype"in P&&P.prototype.render?e.__c=l=new P(T,k):(e.__c=l=new Oe(T,k),l.constructor=P,l.render=Lp),R&&R.sub(l),l.props=T,l.state||(l.state={}),l.context=k,l.__n=r,h=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),P.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=qe({},l.__s)),qe(l.__s,P.getDerivedStateFromProps(T,l.__s))),d=l.props,f=l.state,h)P.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(P.getDerivedStateFromProps==null&&T!==d&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(T,k),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(T,l.__s,k)===!1||e.__v===t.__v){l.props=T,l.state=l.__s,e.__v!==t.__v&&(l.__d=!1),l.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(B){B&&(B.__=e)}),l.__h.length&&o.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(T,l.__s,k),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(d,f,m)})}l.context=k,l.props=T,l.state=l.__s,(u=x.__r)&&u(e),l.__d=!1,l.__v=e,l.__P=n,u=l.render(l.props,l.state,l.context),l.state=l.__s,l.getChildContext!=null&&(r=qe(qe({},r),l.getChildContext())),h||l.getSnapshotBeforeUpdate==null||(m=l.getSnapshotBeforeUpdate(d,f)),j=u!=null&&u.type===Ir&&u.key==null?u.props.children:u,ml(n,Array.isArray(j)?j:[j],e,t,r,s,i,o,a,c),l.base=e.__e,e.__h=null,l.__h.length&&o.push(l),S&&(l.__E=l.__=null),l.__e=!1}else i==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Mp(t.__e,e,t,r,s,i,o,c);(u=x.diffed)&&u(e)}catch(B){e.__v=null,(c||i!=null)&&(e.__e=a,e.__h=!!c,i[i.indexOf(a)]=null),x.__e(B,e,t)}}function _l(n,e){x.__c&&x.__c(e,n),n.some(function(t){try{n=t.__h,t.__h=[],n.some(function(r){r.call(t)})}catch(r){x.__e(r,t.__v)}})}function Mp(n,e,t,r,s,i,o,a){var c,u,l,h=t.props,d=e.props,f=e.type,m=0;if(f==="svg"&&(s=!0),i!=null){for(;m<i.length;m++)if((c=i[m])&&"setAttribute"in c==!!f&&(f?c.localName===f:c.nodeType===3)){n=c,i[m]=null;break}}if(n==null){if(f===null)return document.createTextNode(d);n=s?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,d.is&&d),i=null,a=!1}if(f===null)h===d||a&&n.data===d||(n.data=d);else{if(i=i&&wr.call(n.childNodes),u=(h=t.props||_s).dangerouslySetInnerHTML,l=d.dangerouslySetInnerHTML,!a){if(i!=null)for(h={},m=0;m<n.attributes.length;m++)h[n.attributes[m].name]=n.attributes[m].value;(l||u)&&(l&&(u&&l.__html==u.__html||l.__html===n.innerHTML)||(n.innerHTML=l&&l.__html||""))}if(Pp(n,d,h,s,a),l)e.__k=[];else if(m=e.props.children,ml(n,Array.isArray(m)?m:[m],e,t,r,s&&f!=="foreignObject",i,o,i?i[0]:t.__k&&cn(t,0),a),i!=null)for(m=i.length;m--;)i[m]!=null&&pl(i[m]);a||("value"in d&&(m=d.value)!==void 0&&(m!==n.value||f==="progress"&&!m||f==="option"&&m!==h.value)&&bs(n,"value",m,h.value,!1),"checked"in d&&(m=d.checked)!==void 0&&m!==n.checked&&bs(n,"checked",m,h.checked,!1))}return n}function wl(n,e,t){try{typeof n=="function"?n(e):n.current=e}catch(r){x.__e(r,t)}}function Il(n,e,t){var r,s;if(x.unmount&&x.unmount(n),(r=n.ref)&&(r.current&&r.current!==n.__e||wl(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){x.__e(i,e)}r.base=r.__P=null}if(r=n.__k)for(s=0;s<r.length;s++)r[s]&&Il(r[s],e,typeof n.type!="function");t||n.__e==null||pl(n.__e),n.__e=n.__d=void 0}function Lp(n,e,t){return this.constructor(n,t)}function Ro(n,e,t){var r,s,i;x.__&&x.__(n,e),s=(r=typeof t=="function")?null:t&&t.__k||e.__k,i=[],xo(e,n=(!r&&t||e).__k=ws(Ir,null,[n]),s||_s,_s,e.ownerSVGElement!==void 0,!r&&t?[t]:s?null:e.firstChild?wr.call(e.childNodes):null,i,!r&&t?t:s?s.__e:e.firstChild,r),_l(i,n)}function El(n,e){Ro(n,e,El)}function bl(n,e,t){var r,s,i,o=qe({},n.props);for(i in e)i=="key"?r=e[i]:i=="ref"?s=e[i]:o[i]=e[i];return arguments.length>2&&(o.children=arguments.length>3?wr.call(arguments,2):t),Kn(n.type,o,r||n.key,s||n.ref,null)}function Tl(n,e){var t={__c:e="__cC"+dl++,__:n,Consumer:function(r,s){return r.children(s)},Provider:function(r){var s,i;return this.getChildContext||(s=[],(i={})[e]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&s.some(Wi)},this.sub=function(o){s.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){s.splice(s.indexOf(o),1),a&&a.call(o)}}),r.children}};return t.Provider.__=t.Consumer.contextType=t}wr=fl.slice,x={__e:function(n,e,t,r){for(var s,i,o;e=e.__;)if((s=e.__c)&&!s.__)try{if((i=s.constructor)&&i.getDerivedStateFromError!=null&&(s.setState(i.getDerivedStateFromError(n)),o=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(n,r||{}),o=s.__d),o)return s.__E=s}catch(a){n=a}throw n}},ul=0,ll=function(n){return n!=null&&n.constructor===void 0},Oe.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=qe({},this.state),typeof n=="function"&&(n=n(qe({},t),this.props)),n&&qe(t,n),n!=null&&this.__v&&(e&&this.__h.push(e),Wi(this))},Oe.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Wi(this))},Oe.prototype.render=Ir,Gn=[],hl=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Is.__r=0,dl=0;var Up=Object.freeze(Object.defineProperty({__proto__:null,render:Ro,hydrate:El,createElement:ws,h:ws,Fragment:Ir,createRef:Op,get isValidElement(){return ll},Component:Oe,cloneElement:bl,createContext:Tl,toChildArray:Es,get options(){return x}},Symbol.toStringTag,{value:"Module"})),ti,Ce,uc,Ts=0,Sl=[],lc=x.__b,hc=x.__r,dc=x.diffed,fc=x.__c,pc=x.unmount;function Oo(n,e){x.__h&&x.__h(Ce,n,Ts||e),Ts=0;var t=Ce.__H||(Ce.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function Cl(n){return Ts=1,Vp(Al,n)}function Vp(n,e,t){var r=Oo(ti++,2);return r.t=n,r.__c||(r.__=[t?t(e):Al(void 0,e),function(s){var i=r.t(r.__[0],s);r.__[0]!==i&&(r.__=[i,r.__[1]],r.__c.setState({}))}],r.__c=Ce),r.__}function Fp(n,e){var t=Oo(ti++,3);!x.__s&&kl(t.__H,e)&&(t.__=n,t.__H=e,Ce.__H.__h.push(t))}function Po(n){return Ts=5,$p(function(){return{current:n}},[])}function $p(n,e){var t=Oo(ti++,7);return kl(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function Bp(){for(var n;n=Sl.shift();)if(n.__P)try{n.__H.__h.forEach(cs),n.__H.__h.forEach(Ji),n.__H.__h=[]}catch(e){n.__H.__h=[],x.__e(e,n.__v)}}x.__b=function(n){Ce=null,lc&&lc(n)},x.__r=function(n){hc&&hc(n),ti=0;var e=(Ce=n.__c).__H;e&&(e.__h.forEach(cs),e.__h.forEach(Ji),e.__h=[])},x.diffed=function(n){dc&&dc(n);var e=n.__c;e&&e.__H&&e.__H.__h.length&&(Sl.push(e)!==1&&uc===x.requestAnimationFrame||((uc=x.requestAnimationFrame)||function(t){var r,s=function(){clearTimeout(i),gc&&cancelAnimationFrame(r),setTimeout(t)},i=setTimeout(s,100);gc&&(r=requestAnimationFrame(s))})(Bp)),Ce=null},x.__c=function(n,e){e.some(function(t){try{t.__h.forEach(cs),t.__h=t.__h.filter(function(r){return!r.__||Ji(r)})}catch(r){e.some(function(s){s.__h&&(s.__h=[])}),e=[],x.__e(r,t.__v)}}),fc&&fc(n,e)},x.unmount=function(n){pc&&pc(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{cs(r)}catch(s){e=s}}),e&&x.__e(e,t.__v))};var gc=typeof requestAnimationFrame=="function";function cs(n){var e=Ce,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),Ce=e}function Ji(n){var e=Ce;n.__c=n.__(),Ce=e}function kl(n,e){return!n||n.length!==e.length||e.some(function(t,r){return t!==n[r]})}function Al(n,e){return typeof e=="function"?e(n):e}var qp={};function Wr(n,e){for(var t in e)n[t]=e[t];return n}function jp(n,e,t){var r,s=/(?:\?([^#]*))?(#.*)?$/,i=n.match(s),o={};if(i&&i[1])for(var a=i[1].split("&"),c=0;c<a.length;c++){var u=a[c].split("=");o[decodeURIComponent(u[0])]=decodeURIComponent(u.slice(1).join("="))}n=Yi(n.replace(s,"")),e=Yi(e||"");for(var l=Math.max(n.length,e.length),h=0;h<l;h++)if(e[h]&&e[h].charAt(0)===":"){var d=e[h].replace(/(^:|[+*?]+$)/g,""),f=(e[h].match(/[+*?]+$/)||qp)[0]||"",m=~f.indexOf("+"),S=~f.indexOf("*"),T=n[h]||"";if(!T&&!S&&(f.indexOf("?")<0||m)){r=!1;break}if(o[d]=decodeURIComponent(T),m||S){o[d]=n.slice(h).map(decodeURIComponent).join("/");break}}else if(e[h]!==n[h]){r=!1;break}return(t.default===!0||r!==!1)&&o}function Gp(n,e){return n.rank<e.rank?1:n.rank>e.rank?-1:n.index-e.index}function Kp(n,e){return n.index=e,n.rank=function(t){return t.props.default?0:Yi(t.props.path).map(Hp).join("")}(n),n.props}function Yi(n){return n.replace(/(^\/+|\/+$)/g,"").split("/")}function Hp(n){return n.charAt(0)==":"?1+"*+?".indexOf(n.charAt(n.length-1))||4:5}var zp={},Et=[],mc=[],we=null,Dl={url:Mo()},Wp=Tl(Dl);function Mo(){var n;return""+((n=we&&we.location?we.location:we&&we.getCurrentLocation?we.getCurrentLocation():typeof location!="undefined"?location:zp).pathname||"")+(n.search||"")}function Un(n,e){return e===void 0&&(e=!1),typeof n!="string"&&n.url&&(e=n.replace,n=n.url),function(t){for(var r=Et.length;r--;)if(Et[r].canRoute(t))return!0;return!1}(n)&&function(t,r){r===void 0&&(r="push"),we&&we[r]?we[r](t):typeof history!="undefined"&&history[r+"State"]&&history[r+"State"](null,null,t)}(n,e?"replace":"push"),Nl(n)}function Nl(n){for(var e=!1,t=0;t<Et.length;t++)Et[t].routeTo(n)&&(e=!0);return e}function Jp(n){if(n&&n.getAttribute){var e=n.getAttribute("href"),t=n.getAttribute("target");if(e&&e.match(/^\//g)&&(!t||t.match(/^_?self$/i)))return Un(e)}}function Yp(n){return n.stopImmediatePropagation&&n.stopImmediatePropagation(),n.stopPropagation&&n.stopPropagation(),n.preventDefault(),!1}function Qp(n){if(!(n.ctrlKey||n.metaKey||n.altKey||n.shiftKey||n.button)){var e=n.target;do if(e.localName==="a"&&e.getAttribute("href")){if(e.hasAttribute("data-native")||e.hasAttribute("native"))return;if(Jp(e))return Yp(n)}while(e=e.parentNode)}}var yc=!1;function xl(n){n.history&&(we=n.history),this.state={url:n.url||Mo()}}Wr(xl.prototype=new Oe,{shouldComponentUpdate:function(n){return n.static!==!0||n.url!==this.props.url||n.onChange!==this.props.onChange},canRoute:function(n){var e=Es(this.props.children);return this.g(e,n)!==void 0},routeTo:function(n){this.setState({url:n});var e=this.canRoute(n);return this.p||this.forceUpdate(),e},componentWillMount:function(){this.p=!0},componentDidMount:function(){var n=this;yc||(yc=!0,we||addEventListener("popstate",function(){Nl(Mo())}),addEventListener("click",Qp)),Et.push(this),we&&(this.u=we.listen(function(e){var t=e.location||e;n.routeTo(""+(t.pathname||"")+(t.search||""))})),this.p=!1},componentWillUnmount:function(){typeof this.u=="function"&&this.u(),Et.splice(Et.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(n,e){n=n.filter(Kp).sort(Gp);for(var t=0;t<n.length;t++){var r=n[t],s=jp(e,r.props.path,r.props);if(s)return[r,s]}},render:function(n,e){var t,r,s=n.onChange,i=e.url,o=this.c,a=this.g(Es(n.children),i);if(a&&(r=bl(a[0],Wr(Wr({url:i,matches:t=a[1]},t),{key:void 0,ref:void 0}))),i!==(o&&o.url)){Wr(Dl,o=this.c={url:i,previous:o&&o.url,current:r,path:r?r.props.path:null,matches:t}),o.router=this,o.active=r?[r]:[];for(var c=mc.length;c--;)mc[c]({});typeof s=="function"&&s(o)}return ws(Wp.Provider,{value:o},r)}});const Xp="_container_al10m_17",Zp="_layoutContainer_al10m_23";var vc={container:Xp,layoutContainer:Zp};const eg="_mainGrid_1sgvk_17",tg="_mainGridCenter_1sgvk_24 _mainGrid_1sgvk_17",ng="_halfColumn_1sgvk_30",rg="_firstHalfColumn_1sgvk_35 _halfColumn_1sgvk_30",sg="_secondHalfColumn_1sgvk_40 _halfColumn_1sgvk_30",ig="_fullRow_1sgvk_45 _mainGrid_1sgvk_17",og="_splitGrid_1sgvk_52";var ni={mainGrid:eg,mainGridCenter:tg,halfColumn:ng,firstHalfColumn:rg,secondHalfColumn:sg,fullRow:ig,splitGrid:og};function ag(n){if(n.__esModule)return n;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(n).forEach(function(t){var r=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:function(){return n[t]}})}),e}var cg=ag(Up),Rl,Ol,_c=cg,ug=0;function wc(n,e,t,r,s){var i,o,a={};for(o in e)o=="ref"?i=e[o]:a[o]=e[o];var c={type:n,props:a,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--ug,__source:s,__self:r};if(typeof n=="function"&&(i=n.defaultProps))for(o in i)a[o]===void 0&&(a[o]=i[o]);return _c.options.vnode&&_c.options.vnode(c),c}Ol=wc,Rl=wc;const g=Ol,V=Rl;/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=(n="",e="")=>`${n} ${e}`;function lg(n){const{children:e,center:t,appendClass:r}=n,i=ni[`mainGrid${t?"Center":""}`];return g("div",{class:Er(i,r),children:e})}function Pl(n){return g("div",{class:Er(ni.splitGrid,n.appendClass),children:n.children})}function Ml(n){return g("div",{className:Er(ni.firstHalfColumn,n.appendClass),children:n.children})}function hg(n){return V("div",{className:Er(ni.secondHalfColumn,n.appendClass),children:[" ",n.children," "]})}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(n){const{children:e,appendClass:t}=n;return g("div",{class:vc.container,children:g("div",{class:Er(vc.layoutContainer,t),children:e})})}const fg="_signInContainer_2kdrt_18";var pg={signInContainer:fg};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(n){const{children:e,center:t}=n;return g(dg,{appendClass:pg.signInContainer,children:g(lg,{center:t,children:e})})}const gg="_container_1k63n_17",mg="_scrollContainer_1k63n_26",yg="_chatList_1k63n_34",vg="_messageContainerOther_1k63n_43",_g="_messageContainerSelf_1k63n_47",wg="_identity_1k63n_52",Ig="_message_1k63n_43",Eg="_messageOther_1k63n_70 _message_1k63n_43",bg="_messageSelf_1k63n_74 _message_1k63n_43",Tg="_messageOtherPending_1k63n_80 _messageOther_1k63n_70 _message_1k63n_43",Sg="_messageSelfPending_1k63n_85 _messageSelf_1k63n_74 _message_1k63n_43",Cg="_delivered_1k63n_90",kg="_deliveredSelf_1k63n_95 _delivered_1k63n_90",Ag="_deliveredOther_1k63n_101 _delivered_1k63n_90",Dg="_inputContainer_1k63n_107";var rt={container:gg,scrollContainer:mg,chatList:yg,messageContainerOther:vg,messageContainerSelf:_g,identity:wg,message:Ig,messageOther:Eg,messageSelf:bg,messageOtherPending:Tg,messageSelfPending:Sg,delivered:Cg,deliveredSelf:kg,deliveredOther:Ag,inputContainer:Dg};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ng=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Vl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(t[l],t[h],t[d],t[f])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ul(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ng(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const m=u<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},xg=function(n){const e=Ul(n);return Vl.encodeByteArray(e,!0)},Ss=function(n){return xg(n).replace(/\./g,"")},Rg=function(n){try{return Vl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Ss(JSON.stringify(t)),Ss(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fl(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(J())}function Mg(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $l(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Bl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lg(){return J().indexOf("Electron/")>=0}function ql(){const n=J();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ug(){return J().indexOf("MSAppHost/")>=0}function Vg(){return!Mg()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jl(){return typeof indexedDB=="object"}function Fg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="FirebaseError";class Vt extends Error{constructor(e,t,r){super(t);this.code=e,this.customData=r,this.name=$g,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,br.prototype.create)}}class br{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Bg(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Vt(s,a,r)}}function Bg(n,e){return n.replace(qg,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qg=/\{\$([^}]+)}/g;function jg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Cs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Ic(i)&&Ic(o)){if(!Cs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ic(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Fn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Gg(n,e){const t=new Kg(n,e);return t.subscribe.bind(t)}class Kg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Hg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Di),s.error===void 0&&(s.error=Di),s.complete===void 0&&(s.complete=Di);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Di(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(n,e){return new Promise((t,r)=>{n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;r(`${e}: ${(i=s.target.error)===null||i===void 0?void 0:i.message}`)}})}class Ec{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t){return new Gl(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new Kl(this._db.createObjectStore(e,t))}close(){this._db.close()}}class Gl{constructor(e){this._transaction=e,this.complete=new Promise((t,r)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new Kl(this._transaction.objectStore(e))}}class Kl{constructor(e){this._store=e}index(e){return new bc(this._store.index(e))}createIndex(e,t,r){return new bc(this._store.createIndex(e,t,r))}get(e){const t=this._store.get(e);return $n(t,"Error reading from IndexedDB")}put(e,t){const r=this._store.put(e,t);return $n(r,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return $n(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return $n(e,"Error clearing IndexedDB object store")}}class bc{constructor(e){this._index=e}get(e){const t=this._index.get(e);return $n(t,"Error reading from IndexedDB")}}function zg(n,e,t){return new Promise((r,s)=>{try{const i=indexedDB.open(n,e);i.onsuccess=o=>{r(new Ec(o.target.result))},i.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{t(new Ec(i.result),o.oldVersion,o.newVersion,new Gl(i.transaction))}}catch(i){s(`Error opening indexedDB: ${i.message}`)}})}class St{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Og;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yg(e))try{this.getOrInitializeService({instanceIdentifier:yt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yt){return this.instances.has(e)}getOptions(e=yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yt){return this.component?this.component.multipleInstances?e:yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jg(n){return n===yt?void 0:n}function Yg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Wg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const Xg={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Zg=U.INFO,em={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},tm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=em[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lo{constructor(e){this.name=e,this._logLevel=Zg,this._logHandler=tm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(rm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function rm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qi="@firebase/app",Tc="0.7.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=new Lo("@firebase/app"),sm="@firebase/app-compat",im="@firebase/analytics-compat",om="@firebase/analytics",am="@firebase/app-check-compat",cm="@firebase/app-check",um="@firebase/auth",lm="@firebase/auth-compat",hm="@firebase/database",dm="@firebase/database-compat",fm="@firebase/functions",pm="@firebase/functions-compat",gm="@firebase/installations",mm="@firebase/installations-compat",ym="@firebase/messaging",vm="@firebase/messaging-compat",_m="@firebase/performance",wm="@firebase/performance-compat",Im="@firebase/remote-config",Em="@firebase/remote-config-compat",bm="@firebase/storage",Tm="@firebase/storage-compat",Sm="@firebase/firestore",Cm="@firebase/firestore-compat",km="firebase",Am="9.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="[DEFAULT]",Dm={[Qi]:"fire-core",[sm]:"fire-core-compat",[om]:"fire-analytics",[im]:"fire-analytics-compat",[cm]:"fire-app-check",[am]:"fire-app-check-compat",[um]:"fire-auth",[lm]:"fire-auth-compat",[hm]:"fire-rtdb",[dm]:"fire-rtdb-compat",[fm]:"fire-fn",[pm]:"fire-fn-compat",[gm]:"fire-iid",[mm]:"fire-iid-compat",[ym]:"fire-fcm",[vm]:"fire-fcm-compat",[_m]:"fire-perf",[wm]:"fire-perf-compat",[Im]:"fire-rc",[Em]:"fire-rc-compat",[bm]:"fire-gcs",[Tm]:"fire-gcs-compat",[Sm]:"fire-fst",[Cm]:"fire-fst-compat","fire-js":"fire-js",[km]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Map,Xi=new Map;function Nm(n,e){try{n.container.addComponent(e)}catch(t){Uo.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function un(n){const e=n.name;if(Xi.has(e))return Uo.debug(`There were multiple attempts to register component ${e}.`),!1;Xi.set(e,n);for(const t of Zn.values())Nm(t,n);return!0}function Vo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Ct=new br("app","Firebase",xm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new St("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=Am;function zl(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:Hl,automaticDataCollectionEnabled:!1},e),r=t.name;if(typeof r!="string"||!r)throw Ct.create("bad-app-name",{appName:String(r)});const s=Zn.get(r);if(s){if(Cs(n,s.options)&&Cs(t,s.config))return s;throw Ct.create("duplicate-app",{appName:r})}const i=new Qg(r);for(const a of Xi.values())i.addComponent(a);const o=new Rm(n,t,i);return Zn.set(r,o),o}function Fo(n=Hl){const e=Zn.get(n);if(!e)throw Ct.create("no-app",{appName:n});return e}function Wl(){return Array.from(Zn.values())}function st(n,e,t){var r;let s=(r=Dm[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Uo.warn(a.join(" "));return}un(new St(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="firebase-heartbeat-database",Pm=1,er="firebase-heartbeat-store";let Ni=null;function Jl(){return Ni||(Ni=zg(Om,Pm,(n,e)=>{switch(e){case 0:n.createObjectStore(er)}}).catch(n=>{throw Ct.create("storage-open",{originalErrorMessage:n.message})})),Ni}async function Mm(n){try{return(await Jl()).transaction(er).objectStore(er).get(Yl(n))}catch(e){throw Ct.create("storage-get",{originalErrorMessage:e.message})}}async function Sc(n,e){try{const r=(await Jl()).transaction(er,"readwrite");return await r.objectStore(er).put(e,Yl(n)),r.complete}catch(t){throw Ct.create("storage-set",{originalErrorMessage:t.message})}}function Yl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=1024,Um=30*24*60*60*1e3;class Vm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $m(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Cc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Um}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Cc(),{heartbeatsToSend:t,unsentEntries:r}=Fm(this._heartbeatsCache.heartbeats),s=Ss(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Cc(){return new Date().toISOString().substring(0,10)}function Fm(n,e=Lm){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),kc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),kc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class $m{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jl()?Fg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Mm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function kc(n){return Ss(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(n){un(new St("platform-logger",e=>new nm(e),"PRIVATE")),un(new St("heartbeat",e=>new Vm(e),"PRIVATE")),st(Qi,Tc,n),st(Qi,Tc,"esm2017"),st("fire-js","")}Bm("");var qm="firebase",jm="9.6.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */st(qm,jm,"app");var Gm=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},w,$o=$o||{},D=Gm||self;function ks(){}function Zi(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Cr(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Km(n){return Object.prototype.hasOwnProperty.call(n,xi)&&n[xi]||(n[xi]=++Hm)}var xi="closure_uid_"+(1e9*Math.random()>>>0),Hm=0;function zm(n,e,t){return n.call.apply(n.bind,arguments)}function Wm(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function ue(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ue=zm:ue=Wm,ue.apply(null,arguments)}function Jr(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function he(n,e){function t(){}t.prototype=e.prototype,n.Z=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function ht(){this.s=this.s,this.o=this.o}var Jm=0,Ym={};ht.prototype.s=!1;ht.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Jm!=0)){var n=Km(this);delete Ym[n]}};ht.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ql=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1},Xl=Array.prototype.forEach?function(n,e,t){Array.prototype.forEach.call(n,e,t)}:function(n,e,t){const r=n.length,s=typeof n=="string"?n.split(""):n;for(let i=0;i<r;i++)i in s&&e.call(t,s[i],i,n)};function Qm(n){e:{var e=qy;const t=n.length,r=typeof n=="string"?n.split(""):n;for(let s=0;s<t;s++)if(s in r&&e.call(void 0,r[s],s,n)){e=s;break e}e=-1}return 0>e?null:typeof n=="string"?n.charAt(e):n[e]}function Ac(n){return Array.prototype.concat.apply([],arguments)}function Bo(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function As(n){return/^[\s\xa0]*$/.test(n)}var Dc=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function ge(n,e){return n.indexOf(e)!=-1}function Ri(n,e){return n<e?-1:n>e?1:0}var me;e:{var Nc=D.navigator;if(Nc){var xc=Nc.userAgent;if(xc){me=xc;break e}}me=""}function qo(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function Zl(n){const e={};for(const t in n)e[t]=n[t];return e}var Rc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eh(n,e){let t,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(t in r)n[t]=r[t];for(let i=0;i<Rc.length;i++)t=Rc[i],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function jo(n){return jo[" "](n),n}jo[" "]=ks;function Xm(n){var e=ty;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var Zm=ge(me,"Opera"),ln=ge(me,"Trident")||ge(me,"MSIE"),th=ge(me,"Edge"),eo=th||ln,nh=ge(me,"Gecko")&&!(ge(me.toLowerCase(),"webkit")&&!ge(me,"Edge"))&&!(ge(me,"Trident")||ge(me,"MSIE"))&&!ge(me,"Edge"),ey=ge(me.toLowerCase(),"webkit")&&!ge(me,"Edge");function rh(){var n=D.document;return n?n.documentMode:void 0}var Ds;e:{var Oi="",Pi=function(){var n=me;if(nh)return/rv:([^\);]+)(\)|;)/.exec(n);if(th)return/Edge\/([\d\.]+)/.exec(n);if(ln)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(ey)return/WebKit\/(\S+)/.exec(n);if(Zm)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Pi&&(Oi=Pi?Pi[1]:""),ln){var Mi=rh();if(Mi!=null&&Mi>parseFloat(Oi)){Ds=String(Mi);break e}}Ds=Oi}var ty={};function ny(){return Xm(function(){let n=0;const e=Dc(String(Ds)).split("."),t=Dc("9").split("."),r=Math.max(e.length,t.length);for(let o=0;n==0&&o<r;o++){var s=e[o]||"",i=t[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;n=Ri(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Ri(s[2].length==0,i[2].length==0)||Ri(s[2],i[2]),s=s[3],i=i[3]}while(n==0)}return 0<=n})}var to;if(D.document&&ln){var Oc=rh();to=Oc||parseInt(Ds,10)||void 0}else to=void 0;var ry=to,sy=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{D.addEventListener("test",ks,e),D.removeEventListener("test",ks,e)}catch{}return n}();function fe(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};function tr(n,e){if(fe.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(nh){e:{try{jo(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:iy[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&tr.Z.h.call(this)}}he(tr,fe);var iy={2:"touch",3:"pen",4:"mouse"};tr.prototype.h=function(){tr.Z.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var kr="closure_listenable_"+(1e6*Math.random()|0),oy=0;function ay(n,e,t,r,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.ia=s,this.key=++oy,this.ca=this.fa=!1}function ri(n){n.ca=!0,n.listener=null,n.proxy=null,n.src=null,n.ia=null}function si(n){this.src=n,this.g={},this.h=0}si.prototype.add=function(n,e,t,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=ro(n,e,r,s);return-1<o?(e=n[o],t||(e.fa=!1)):(e=new ay(e,this.src,i,!!r,s),e.fa=t,n.push(e)),e};function no(n,e){var t=e.type;if(t in n.g){var r=n.g[t],s=Ql(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ri(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ro(n,e,t,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.ca&&i.listener==e&&i.capture==!!t&&i.ia==r)return s}return-1}var Go="closure_lm_"+(1e6*Math.random()|0),Li={};function sh(n,e,t,r,s){if(r&&r.once)return oh(n,e,t,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)sh(n,e[i],t,r,s);return null}return t=zo(t),n&&n[kr]?n.N(e,t,Cr(r)?!!r.capture:!!r,s):ih(n,e,t,!1,r,s)}function ih(n,e,t,r,s,i){if(!e)throw Error("Invalid event type");var o=Cr(s)?!!s.capture:!!s,a=Ho(n);if(a||(n[Go]=a=new si(n)),t=a.add(e,t,r,o,i),t.proxy)return t;if(r=cy(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)sy||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),r,s);else if(n.attachEvent)n.attachEvent(ch(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function cy(){function n(t){return e.call(n.src,n.listener,t)}var e=uy;return n}function oh(n,e,t,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)oh(n,e[i],t,r,s);return null}return t=zo(t),n&&n[kr]?n.O(e,t,Cr(r)?!!r.capture:!!r,s):ih(n,e,t,!0,r,s)}function ah(n,e,t,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)ah(n,e[i],t,r,s);else r=Cr(r)?!!r.capture:!!r,t=zo(t),n&&n[kr]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=ro(i,t,r,s),-1<t&&(ri(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=Ho(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ro(e,t,r,s)),(t=-1<n?e[n]:null)&&Ko(t))}function Ko(n){if(typeof n!="number"&&n&&!n.ca){var e=n.src;if(e&&e[kr])no(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(ch(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=Ho(e))?(no(t,n),t.h==0&&(t.src=null,e[Go]=null)):ri(n)}}}function ch(n){return n in Li?Li[n]:Li[n]="on"+n}function uy(n,e){if(n.ca)n=!0;else{e=new tr(e,this);var t=n.listener,r=n.ia||n.src;n.fa&&Ko(n),n=t.call(r,e)}return n}function Ho(n){return n=n[Go],n instanceof si?n:null}var Ui="__closure_events_fn_"+(1e9*Math.random()>>>0);function zo(n){return typeof n=="function"?n:(n[Ui]||(n[Ui]=function(e){return n.handleEvent(e)}),n[Ui])}function re(){ht.call(this),this.i=new si(this),this.P=this,this.I=null}he(re,ht);re.prototype[kr]=!0;re.prototype.removeEventListener=function(n,e,t,r){ah(this,n,e,t,r)};function le(n,e){var t,r=n.I;if(r)for(t=[];r;r=r.I)t.push(r);if(n=n.P,r=e.type||e,typeof e=="string")e=new fe(e,n);else if(e instanceof fe)e.target=e.target||n;else{var s=e;e=new fe(r,n),eh(e,s)}if(s=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];s=Yr(o,r,!0,e)&&s}if(o=e.g=n,s=Yr(o,r,!0,e)&&s,s=Yr(o,r,!1,e)&&s,t)for(i=0;i<t.length;i++)o=e.g=t[i],s=Yr(o,r,!1,e)&&s}re.prototype.M=function(){if(re.Z.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)ri(t[r]);delete n.g[e],n.h--}}this.I=null};re.prototype.N=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};re.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function Yr(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==t){var a=o.listener,c=o.ia||o.src;o.fa&&no(n.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Wo=D.JSON.stringify;function ly(){var n=lh;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class hy{constructor(){this.h=this.g=null}add(e,t){const r=uh.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var uh=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new dy,n=>n.reset());class dy{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function fy(n){D.setTimeout(()=>{throw n},0)}function Jo(n,e){so||py(),io||(so(),io=!0),lh.add(n,e)}var so;function py(){var n=D.Promise.resolve(void 0);so=function(){n.then(gy)}}var io=!1,lh=new hy;function gy(){for(var n;n=ly();){try{n.h.call(n.g)}catch(t){fy(t)}var e=uh;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}io=!1}function ii(n,e){re.call(this),this.h=n||1,this.g=e||D,this.j=ue(this.kb,this),this.l=Date.now()}he(ii,re);w=ii.prototype;w.da=!1;w.S=null;w.kb=function(){if(this.da){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-n):(this.S&&(this.g.clearTimeout(this.S),this.S=null),le(this,"tick"),this.da&&(Yo(this),this.start()))}};w.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Yo(n){n.da=!1,n.S&&(n.g.clearTimeout(n.S),n.S=null)}w.M=function(){ii.Z.M.call(this),Yo(this),delete this.g};function Qo(n,e,t){if(typeof n=="function")t&&(n=ue(n,t));else if(n&&typeof n.handleEvent=="function")n=ue(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:D.setTimeout(n,e||0)}function hh(n){n.g=Qo(()=>{n.g=null,n.i&&(n.i=!1,hh(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class my extends ht{constructor(e,t){super();this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:hh(this)}M(){super.M(),this.g&&(D.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nr(n){ht.call(this),this.h=n,this.g={}}he(nr,ht);var Pc=[];function dh(n,e,t,r){Array.isArray(t)||(t&&(Pc[0]=t.toString()),t=Pc);for(var s=0;s<t.length;s++){var i=sh(e,t[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function fh(n){qo(n.g,function(e,t){this.g.hasOwnProperty(t)&&Ko(e)},n),n.g={}}nr.prototype.M=function(){nr.Z.M.call(this),fh(this)};nr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function oi(){this.g=!0}oi.prototype.Aa=function(){this.g=!1};function yy(n,e,t,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function vy(n,e,t,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+t+`
`+i+" "+o})}function Yt(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+wy(n,t)+(r?" "+r:"")})}function _y(n,e){n.info(function(){return"TIMEOUT: "+e})}oi.prototype.info=function(){};function wy(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Wo(t)}catch{return e}}var Ft={},Mc=null;function ai(){return Mc=Mc||new re}Ft.Ma="serverreachability";function ph(n){fe.call(this,Ft.Ma,n)}he(ph,fe);function rr(n){const e=ai();le(e,new ph(e,n))}Ft.STAT_EVENT="statevent";function gh(n,e){fe.call(this,Ft.STAT_EVENT,n),this.stat=e}he(gh,fe);function ye(n){const e=ai();le(e,new gh(e,n))}Ft.Na="timingevent";function mh(n,e){fe.call(this,Ft.Na,n),this.size=e}he(mh,fe);function Ar(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return D.setTimeout(function(){n()},e)}var ci={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},yh={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Xo(){}Xo.prototype.h=null;function Lc(n){return n.h||(n.h=n.i())}function vh(){}var Dr={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Zo(){fe.call(this,"d")}he(Zo,fe);function ea(){fe.call(this,"c")}he(ea,fe);var oo;function ui(){}he(ui,Xo);ui.prototype.g=function(){return new XMLHttpRequest};ui.prototype.i=function(){return{}};oo=new ui;function Nr(n,e,t,r){this.l=n,this.j=e,this.m=t,this.X=r||1,this.V=new nr(this),this.P=Iy,n=eo?125:void 0,this.W=new ii(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new _h}function _h(){this.i=null,this.g="",this.h=!1}var Iy=45e3,ao={},Ns={};w=Nr.prototype;w.setTimeout=function(n){this.P=n};function co(n,e,t){n.K=1,n.v=hi(We(e)),n.s=t,n.U=!0,wh(n,null)}function wh(n,e){n.F=Date.now(),xr(n),n.A=We(n.v);var t=n.A,r=n.X;Array.isArray(r)||(r=[String(r)]),kh(t.h,"t",r),n.C=0,t=n.l.H,n.h=new _h,n.g=zh(n.l,t?e:null,!n.s),0<n.O&&(n.L=new my(ue(n.Ia,n,n.g),n.O)),dh(n.V,n.g,"readystatechange",n.gb),e=n.H?Zl(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.s,e)):(n.u="GET",n.g.ea(n.A,n.u,null,e)),rr(1),yy(n.j,n.u,n.A,n.m,n.X,n.s)}w.gb=function(n){n=n.target;const e=this.L;e&&je(n)==3?e.l():this.Ia(n)};w.Ia=function(n){try{if(n==this.g)e:{const l=je(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||eo||this.g&&(this.h.h||this.g.ga()||$c(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?rr(3):rr(2)),li(this);var t=this.g.ba();this.N=t;t:if(Ih(this)){var r=$c(this.g);n="";var s=r.length,i=je(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){_t(this),Hn(this);var o="";break t}this.h.i=new D.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=t==200,vy(this.j,this.u,this.A,this.m,this.X,l,t),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!As(a)){var u=a;break t}}u=null}if(t=u)Yt(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,uo(this,t);else{this.i=!1,this.o=3,ye(12),_t(this),Hn(this);break e}}this.U?(Eh(this,l,o),eo&&this.i&&l==3&&(dh(this.V,this.W,"tick",this.fb),this.W.start())):(Yt(this.j,this.m,o,null),uo(this,o)),l==4&&_t(this),this.i&&!this.I&&(l==4?jh(this.l,this):(this.i=!1,xr(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,ye(12)):(this.o=0,ye(13)),_t(this),Hn(this)}}}catch{}finally{}};function Ih(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Ba:!1}function Eh(n,e,t){let r=!0,s;for(;!n.I&&n.C<t.length;)if(s=Ey(n,t),s==Ns){e==4&&(n.o=4,ye(14),r=!1),Yt(n.j,n.m,null,"[Incomplete Response]");break}else if(s==ao){n.o=4,ye(15),Yt(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Yt(n.j,n.m,s,null),uo(n,s);Ih(n)&&s!=Ns&&s!=ao&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,ye(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.aa&&(n.aa=!0,e=n.l,e.g==n&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+t.length),ua(e),e.L=!0,ye(11))):(Yt(n.j,n.m,t,"[Invalid Chunked Response]"),_t(n),Hn(n))}w.fb=function(){if(this.g){var n=je(this.g),e=this.g.ga();this.C<e.length&&(li(this),Eh(this,n,e),this.i&&n!=4&&xr(this))}};function Ey(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Ns:(t=Number(e.substring(t,r)),isNaN(t)?ao:(r+=1,r+t>e.length?Ns:(e=e.substr(r,t),n.C=r+t,e)))}w.cancel=function(){this.I=!0,_t(this)};function xr(n){n.Y=Date.now()+n.P,bh(n,n.P)}function bh(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Ar(ue(n.eb,n),e)}function li(n){n.B&&(D.clearTimeout(n.B),n.B=null)}w.eb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(_y(this.j,this.A),this.K!=2&&(rr(3),ye(17)),_t(this),this.o=2,Hn(this)):bh(this,this.Y-n)};function Hn(n){n.l.G==0||n.I||jh(n.l,n)}function _t(n){li(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,Yo(n.W),fh(n.V),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function uo(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||lo(t.i,n))){if(t.I=n.N,!n.J&&lo(t.i,n)&&t.G==3){try{var r=t.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Ps(t),pi(t);else break e;ca(t),ye(18)}}else t.ta=s[1],0<t.ta-t.U&&37500>s[2]&&t.N&&t.A==0&&!t.v&&(t.v=Ar(ue(t.ab,t),6e3));if(1>=Nh(t.i)&&t.ka){try{t.ka()}catch{}t.ka=void 0}}else wt(t,11)}else if((n.J||t.g==n)&&Ps(t),!As(e))for(s=t.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(t.U=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.J=u[1],t.la=u[2];const l=u[3];l!=null&&(t.ma=l,t.h.info("VER="+t.ma));const h=u[4];h!=null&&(t.za=h,t.h.info("SVER="+t.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.K=r,t.h.info("backChannelRequestTimeoutMs_="+r)),r=t;const f=n.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;!i.g&&(ge(m,"spdy")||ge(m,"quic")||ge(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(ra(i,i.h),i.h=null))}if(r.D){const S=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.sa=S,G(r.F,r.D,S))}}t.G=3,t.j&&t.j.xa(),t.$&&(t.O=Date.now()-n.F,t.h.info("Handshake RTT: "+t.O+"ms")),r=t;var o=n;if(r.oa=Hh(r,r.H?r.la:null,r.W),o.J){xh(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(li(a),xr(a)),r.g=o}else Bh(r);0<t.l.length&&gi(t)}else u[0]!="stop"&&u[0]!="close"||wt(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?wt(t,7):aa(t):u[0]!="noop"&&t.j&&t.j.wa(u),t.A=0)}}rr(4)}catch{}}function by(n){if(n.R&&typeof n.R=="function")return n.R();if(typeof n=="string")return n.split("");if(Zi(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function ta(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Zi(n)||typeof n=="string")Xl(n,e,void 0);else{if(n.T&&typeof n.T=="function")var t=n.T();else if(n.R&&typeof n.R=="function")t=void 0;else if(Zi(n)||typeof n=="string"){t=[];for(var r=n.length,s=0;s<r;s++)t.push(s)}else for(s in t=[],r=0,n)t[r++]=s;r=by(n),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],t&&t[i],n)}}function In(n,e){this.h={},this.g=[],this.i=0;var t=arguments.length;if(1<t){if(t%2)throw Error("Uneven number of arguments");for(var r=0;r<t;r+=2)this.set(arguments[r],arguments[r+1])}else if(n)if(n instanceof In)for(t=n.T(),r=0;r<t.length;r++)this.set(t[r],n.get(t[r]));else for(r in n)this.set(r,n[r])}w=In.prototype;w.R=function(){na(this);for(var n=[],e=0;e<this.g.length;e++)n.push(this.h[this.g[e]]);return n};w.T=function(){return na(this),this.g.concat()};function na(n){if(n.i!=n.g.length){for(var e=0,t=0;e<n.g.length;){var r=n.g[e];kt(n.h,r)&&(n.g[t++]=r),e++}n.g.length=t}if(n.i!=n.g.length){var s={};for(t=e=0;e<n.g.length;)r=n.g[e],kt(s,r)||(n.g[t++]=r,s[r]=1),e++;n.g.length=t}}w.get=function(n,e){return kt(this.h,n)?this.h[n]:e};w.set=function(n,e){kt(this.h,n)||(this.i++,this.g.push(n)),this.h[n]=e};w.forEach=function(n,e){for(var t=this.T(),r=0;r<t.length;r++){var s=t[r],i=this.get(s);n.call(e,i,s,this)}};function kt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}var Th=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ty(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),s=null;if(0<=r){var i=n[t].substring(0,r);s=n[t].substring(r+1)}else i=n[t];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function At(n,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,n instanceof At){this.g=e!==void 0?e:n.g,xs(this,n.j),this.s=n.s,Rs(this,n.i),Os(this,n.m),this.l=n.l,e=n.h;var t=new sr;t.i=e.i,e.g&&(t.g=new In(e.g),t.h=e.h),Uc(this,t),this.o=n.o}else n&&(t=String(n).match(Th))?(this.g=!!e,xs(this,t[1]||"",!0),this.s=zn(t[2]||""),Rs(this,t[3]||"",!0),Os(this,t[4]),this.l=zn(t[5]||"",!0),Uc(this,t[6]||"",!0),this.o=zn(t[7]||"")):(this.g=!!e,this.h=new sr(null,this.g))}At.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Bn(e,Vc,!0),":");var t=this.i;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Bn(e,Vc,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.i&&t.charAt(0)!="/"&&n.push("/"),n.push(Bn(t,t.charAt(0)=="/"?Dy:Ay,!0))),(t=this.h.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Bn(t,xy)),n.join("")};function We(n){return new At(n)}function xs(n,e,t){n.j=t?zn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Rs(n,e,t){n.i=t?zn(e,!0):e}function Os(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Uc(n,e,t){e instanceof sr?(n.h=e,Ry(n.h,n.g)):(t||(e=Bn(e,Ny)),n.h=new sr(e,n.g))}function G(n,e,t){n.h.set(e,t)}function hi(n){return G(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Sy(n){return n instanceof At?We(n):new At(n,void 0)}function Cy(n,e,t,r){var s=new At(null,void 0);return n&&xs(s,n),e&&Rs(s,e),t&&Os(s,t),r&&(s.l=r),s}function zn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Bn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,ky),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function ky(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Vc=/[#\/\?@]/g,Ay=/[#\?:]/g,Dy=/[#\?]/g,Ny=/[#\?@]/g,xy=/#/g;function sr(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function dt(n){n.g||(n.g=new In,n.h=0,n.i&&Ty(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}w=sr.prototype;w.add=function(n,e){dt(this),this.i=null,n=En(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Sh(n,e){dt(n),e=En(n,e),kt(n.g.h,e)&&(n.i=null,n.h-=n.g.get(e).length,n=n.g,kt(n.h,e)&&(delete n.h[e],n.i--,n.g.length>2*n.i&&na(n)))}function Ch(n,e){return dt(n),e=En(n,e),kt(n.g.h,e)}w.forEach=function(n,e){dt(this),this.g.forEach(function(t,r){Xl(t,function(s){n.call(e,s,r,this)},this)},this)};w.T=function(){dt(this);for(var n=this.g.R(),e=this.g.T(),t=[],r=0;r<e.length;r++)for(var s=n[r],i=0;i<s.length;i++)t.push(e[r]);return t};w.R=function(n){dt(this);var e=[];if(typeof n=="string")Ch(this,n)&&(e=Ac(e,this.g.get(En(this,n))));else{n=this.g.R();for(var t=0;t<n.length;t++)e=Ac(e,n[t])}return e};w.set=function(n,e){return dt(this),this.i=null,n=En(this,n),Ch(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};w.get=function(n,e){return n?(n=this.R(n),0<n.length?String(n[0]):e):e};function kh(n,e,t){Sh(n,e),0<t.length&&(n.i=null,n.g.set(En(n,e),Bo(t)),n.h+=t.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var n=[],e=this.g.T(),t=0;t<e.length;t++){var r=e[t],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),n.push(o)}}return this.i=n.join("&")};function En(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function Ry(n,e){e&&!n.j&&(dt(n),n.i=null,n.g.forEach(function(t,r){var s=r.toLowerCase();r!=s&&(Sh(this,r),kh(this,s,t))},n)),n.j=e}var Oy=class{constructor(n,e){this.h=n,this.g=e}};function Ah(n){this.l=n||Py,D.PerformanceNavigationTiming?(n=D.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(D.g&&D.g.Ea&&D.g.Ea()&&D.g.Ea().Zb),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Py=10;function Dh(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Nh(n){return n.h?1:n.g?n.g.size:0}function lo(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function ra(n,e){n.g?n.g.add(e):n.h=e}function xh(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Ah.prototype.cancel=function(){if(this.i=Rh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Rh(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return Bo(n.i)}function sa(){}sa.prototype.stringify=function(n){return D.JSON.stringify(n,void 0)};sa.prototype.parse=function(n){return D.JSON.parse(n,void 0)};function My(){this.g=new sa}function Ly(n,e,t){const r=t||"";try{ta(n,function(s,i){let o=s;Cr(s)&&(o=Wo(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Uy(n,e){const t=new oi;if(D.Image){const r=new Image;r.onload=Jr(Qr,t,r,"TestLoadImage: loaded",!0,e),r.onerror=Jr(Qr,t,r,"TestLoadImage: error",!1,e),r.onabort=Jr(Qr,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=Jr(Qr,t,r,"TestLoadImage: timeout",!1,e),D.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Qr(n,e,t,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Rr(n){this.l=n.$b||null,this.j=n.ib||!1}he(Rr,Xo);Rr.prototype.g=function(){return new di(this.l,this.j)};Rr.prototype.i=function(n){return function(){return n}}({});function di(n,e){re.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=ia,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}he(di,re);var ia=0;w=di.prototype;w.open=function(n,e){if(this.readyState!=ia)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,ir(this)};w.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||D).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Or(this)),this.readyState=ia};w.Va=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,ir(this)),this.g&&(this.readyState=3,ir(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof D.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Oh(this)}else n.text().then(this.Ua.bind(this),this.ha.bind(this))};function Oh(n){n.j.read().then(n.Sa.bind(n)).catch(n.ha.bind(n))}w.Sa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Or(this):ir(this),this.readyState==3&&Oh(this)}};w.Ua=function(n){this.g&&(this.response=this.responseText=n,Or(this))};w.Ta=function(n){this.g&&(this.response=n,Or(this))};w.ha=function(){this.g&&Or(this)};function Or(n){n.readyState=4,n.l=null,n.j=null,n.A=null,ir(n)}w.setRequestHeader=function(n,e){this.v.append(n,e)};w.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function ir(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Vy=D.JSON.parse;function ee(n){re.call(this),this.headers=new In,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ph,this.K=this.L=!1}he(ee,re);var Ph="",Fy=/^https?$/i,$y=["POST","PUT"];w=ee.prototype;w.ea=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():oo.g(),this.C=this.u?Lc(this.u):Lc(oo),this.g.onreadystatechange=ue(this.Fa,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(i){Fc(this,i);return}n=t||"";const s=new In(this.headers);r&&ta(r,function(i,o){s.set(o,i)}),r=Qm(s.T()),t=D.FormData&&n instanceof D.FormData,!(0<=Ql($y,e))||r||t||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Uh(this),0<this.B&&((this.K=By(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ue(this.pa,this)):this.A=Qo(this.pa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){Fc(this,i)}};function By(n){return ln&&ny()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}function qy(n){return n.toLowerCase()=="content-type"}w.pa=function(){typeof $o!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,le(this,"timeout"),this.abort(8))};function Fc(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Mh(n),fi(n)}function Mh(n){n.D||(n.D=!0,le(n,"complete"),le(n,"error"))}w.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,le(this,"complete"),le(this,"abort"),fi(this))};w.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fi(this,!0)),ee.Z.M.call(this)};w.Fa=function(){this.s||(this.F||this.v||this.l?Lh(this):this.cb())};w.cb=function(){Lh(this)};function Lh(n){if(n.h&&typeof $o!="undefined"&&(!n.C[1]||je(n)!=4||n.ba()!=2)){if(n.v&&je(n)==4)Qo(n.Fa,0,n);else if(le(n,"readystatechange"),je(n)==4){n.h=!1;try{const a=n.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var s=String(n.H).match(Th)[1]||null;if(!s&&D.self&&D.self.location){var i=D.self.location.protocol;s=i.substr(0,i.length-1)}r=!Fy.test(s?s.toLowerCase():"")}t=r}if(t)le(n,"complete"),le(n,"success");else{n.m=6;try{var o=2<je(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.ba()+"]",Mh(n)}}finally{fi(n)}}}}function fi(n,e){if(n.g){Uh(n);const t=n.g,r=n.C[0]?ks:null;n.g=null,n.C=null,e||le(n,"ready");try{t.onreadystatechange=r}catch{}}}function Uh(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(D.clearTimeout(n.A),n.A=null)}function je(n){return n.g?n.g.readyState:0}w.ba=function(){try{return 2<je(this)?this.g.status:-1}catch{return-1}};w.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Qa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Vy(e)}};function $c(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case Ph:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}w.Da=function(){return this.m};w.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function jy(n){let e="";return qo(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function oa(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=jy(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):G(n,e,t))}function Rn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Vh(n){this.za=0,this.l=[],this.h=new oi,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Rn("failFast",!1,n),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Rn("baseRetryDelayMs",5e3,n),this.$a=Rn("retryDelaySeedMs",1e4,n),this.Ya=Rn("forwardChannelMaxRetries",2,n),this.ra=Rn("forwardChannelRequestTimeoutMs",2e4,n),this.qa=n&&n.xmlHttpFactory||void 0,this.Ba=n&&n.Yb||!1,this.K=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.J="",this.i=new Ah(n&&n.concurrentRequestLimit),this.Ca=new My,this.ja=n&&n.fastHandshake||!1,this.Ra=n&&n.Wb||!1,n&&n.Aa&&this.h.Aa(),n&&n.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&n&&n.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!n||n.Xb!==!1}w=Vh.prototype;w.ma=8;w.G=1;function aa(n){if(Fh(n),n.G==3){var e=n.V++,t=We(n.F);G(t,"SID",n.J),G(t,"RID",e),G(t,"TYPE","terminate"),Pr(n,t),e=new Nr(n,n.h,e,void 0),e.K=2,e.v=hi(We(t)),t=!1,D.navigator&&D.navigator.sendBeacon&&(t=D.navigator.sendBeacon(e.v.toString(),"")),!t&&D.Image&&(new Image().src=e.v,t=!0),t||(e.g=zh(e.l,null),e.g.ea(e.v)),e.F=Date.now(),xr(e)}Kh(n)}w.hb=function(n){try{this.h.info("Origin Trials invoked: "+n)}catch{}};function pi(n){n.g&&(ua(n),n.g.cancel(),n.g=null)}function Fh(n){pi(n),n.u&&(D.clearTimeout(n.u),n.u=null),Ps(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&D.clearTimeout(n.m),n.m=null)}function Vi(n,e){n.l.push(new Oy(n.Za++,e)),n.G==3&&gi(n)}function gi(n){Dh(n.i)||n.m||(n.m=!0,Jo(n.Ha,n),n.C=0)}function Gy(n,e){return Nh(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.l=e.D.concat(n.l),!0):n.G==1||n.G==2||n.C>=(n.Xa?0:n.Ya)?!1:(n.m=Ar(ue(n.Ha,n,e),Gh(n,n.C)),n.C++,!0)}w.Ha=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.V=Math.floor(1e5*Math.random()),n=this.V++;const s=new Nr(this,this.h,n,void 0);let i=this.s;if(this.P&&(i?(i=Zl(i),eh(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,t=0;t<this.l.length;t++){t:{var r=this.l[t];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.l.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=$h(this,s,e),t=We(this.F),G(t,"RID",n),G(t,"CVER",22),this.D&&G(t,"X-HTTP-Session-Id",this.D),Pr(this,t),this.o&&i&&oa(t,this.o,i),ra(this.i,s),this.Ra&&G(t,"TYPE","init"),this.ja?(G(t,"$req",e),G(t,"SID","null"),s.$=!0,co(s,t,null)):co(s,t,e),this.G=2}}else this.G==3&&(n?Bc(this,n):this.l.length==0||Dh(this.i)||Bc(this))};function Bc(n,e){var t;e?t=e.m:t=n.V++;const r=We(n.F);G(r,"SID",n.J),G(r,"RID",t),G(r,"AID",n.U),Pr(n,r),n.o&&n.s&&oa(r,n.o,n.s),t=new Nr(n,n.h,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.l=e.D.concat(n.l)),e=$h(n,t,1e3),t.setTimeout(Math.round(.5*n.ra)+Math.round(.5*n.ra*Math.random())),ra(n.i,t),co(t,r,e)}function Pr(n,e){n.j&&ta({},function(t,r){G(e,r,t)})}function $h(n,e,t){t=Math.min(n.l.length,t);var r=n.j?ue(n.j.Oa,n.j,n):null;e:{var s=n.l;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{Ly(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.l.splice(0,t),e.D=n,r}function Bh(n){n.g||n.u||(n.Y=1,Jo(n.Ga,n),n.A=0)}function ca(n){return n.g||n.u||3<=n.A?!1:(n.Y++,n.u=Ar(ue(n.Ga,n),Gh(n,n.A)),n.A++,!0)}w.Ga=function(){if(this.u=null,qh(this),this.$&&!(this.L||this.g==null||0>=this.O)){var n=2*this.O;this.h.info("BP detection timer enabled: "+n),this.B=Ar(ue(this.bb,this),n)}};w.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ye(10),pi(this),qh(this))};function ua(n){n.B!=null&&(D.clearTimeout(n.B),n.B=null)}function qh(n){n.g=new Nr(n,n.h,"rpc",n.Y),n.o===null&&(n.g.H=n.s),n.g.O=0;var e=We(n.oa);G(e,"RID","rpc"),G(e,"SID",n.J),G(e,"CI",n.N?"0":"1"),G(e,"AID",n.U),Pr(n,e),G(e,"TYPE","xmlhttp"),n.o&&n.s&&oa(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var t=n.g;n=n.la,t.K=1,t.v=hi(We(e)),t.s=null,t.U=!0,wh(t,n)}w.ab=function(){this.v!=null&&(this.v=null,pi(this),ca(this),ye(19))};function Ps(n){n.v!=null&&(D.clearTimeout(n.v),n.v=null)}function jh(n,e){var t=null;if(n.g==e){Ps(n),ua(n),n.g=null;var r=2}else if(lo(n.i,e))t=e.D,xh(n.i,e),r=1;else return;if(n.I=e.N,n.G!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var s=n.C;r=ai(),le(r,new mh(r,t,e,s)),gi(n)}else Bh(n);else if(s=e.o,s==3||s==0&&0<n.I||!(r==1&&Gy(n,e)||r==2&&ca(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:wt(n,5);break;case 4:wt(n,10);break;case 3:wt(n,6);break;default:wt(n,2)}}}function Gh(n,e){let t=n.Pa+Math.floor(Math.random()*n.$a);return n.j||(t*=2),t*e}function wt(n,e){if(n.h.info("Error code "+e),e==2){var t=null;n.j&&(t=null);var r=ue(n.jb,n);t||(t=new At("//www.google.com/images/cleardot.gif"),D.location&&D.location.protocol=="http"||xs(t,"https"),hi(t)),Uy(t.toString(),r)}else ye(2);n.G=0,n.j&&n.j.va(e),Kh(n),Fh(n)}w.jb=function(n){n?(this.h.info("Successfully pinged google.com"),ye(2)):(this.h.info("Failed to ping google.com"),ye(1))};function Kh(n){n.G=0,n.I=-1,n.j&&((Rh(n.i).length!=0||n.l.length!=0)&&(n.i.i.length=0,Bo(n.l),n.l.length=0),n.j.ua())}function Hh(n,e,t){let r=Sy(t);if(r.i!="")e&&Rs(r,e+"."+r.i),Os(r,r.m);else{const s=D.location;r=Cy(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,t)}return n.aa&&qo(n.aa,function(s,i){G(r,i,s)}),e=n.D,t=n.sa,e&&t&&G(r,e,t),G(r,"VER",n.ma),Pr(n,r),r}function zh(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ba&&!n.qa?new ee(new Rr({ib:!0})):new ee(n.qa),e.L=n.H,e}function Wh(){}w=Wh.prototype;w.xa=function(){};w.wa=function(){};w.va=function(){};w.ua=function(){};w.Oa=function(){};function Ms(){if(ln&&!(10<=Number(ry)))throw Error("Environmental error: no available transport.")}Ms.prototype.g=function(n,e){return new Se(n,e)};function Se(n,e){re.call(this),this.g=new Vh(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.P=n,(n=e&&e.httpHeadersOverwriteParam)&&!As(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!As(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new bn(this)}he(Se,re);Se.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;n.Wa&&(n.h.info("Origin Trials enabled."),Jo(ue(n.hb,n,e))),ye(0),n.W=e,n.aa=t||{},n.N=n.X,n.F=Hh(n,null,n.W),gi(n)};Se.prototype.close=function(){aa(this.g)};Se.prototype.u=function(n){if(typeof n=="string"){var e={};e.__data__=n,Vi(this.g,e)}else this.v?(e={},e.__data__=Wo(n),Vi(this.g,e)):Vi(this.g,n)};Se.prototype.M=function(){this.g.j=null,delete this.j,aa(this.g),delete this.g,Se.Z.M.call(this)};function Jh(n){Zo.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}he(Jh,Zo);function Yh(){ea.call(this),this.status=1}he(Yh,ea);function bn(n){this.g=n}he(bn,Wh);bn.prototype.xa=function(){le(this.g,"a")};bn.prototype.wa=function(n){le(this.g,new Jh(n))};bn.prototype.va=function(n){le(this.g,new Yh(n))};bn.prototype.ua=function(){le(this.g,"b")};Ms.prototype.createWebChannel=Ms.prototype.g;Se.prototype.send=Se.prototype.u;Se.prototype.open=Se.prototype.m;Se.prototype.close=Se.prototype.close;ci.NO_ERROR=0;ci.TIMEOUT=8;ci.HTTP_ERROR=6;yh.COMPLETE="complete";vh.EventType=Dr;Dr.OPEN="a";Dr.CLOSE="b";Dr.ERROR="c";Dr.MESSAGE="d";re.prototype.listen=re.prototype.N;ee.prototype.listenOnce=ee.prototype.O;ee.prototype.getLastError=ee.prototype.La;ee.prototype.getLastErrorCode=ee.prototype.Da;ee.prototype.getStatus=ee.prototype.ba;ee.prototype.getResponseJson=ee.prototype.Qa;ee.prototype.getResponseText=ee.prototype.ga;ee.prototype.send=ee.prototype.ea;var Ky=function(){return new Ms},Hy=function(){return ai()},Fi=ci,zy=yh,Wy=Ft,qc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Jy=Rr,Xr=vh,Yy=ee;const jc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}oe.UNAUTHENTICATED=new oe(null),oe.GOOGLE_CREDENTIALS=new oe("google-credentials-uid"),oe.FIRST_PARTY=new oe("first-party-uid"),oe.MOCK_USER=new oe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn="9.6.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new Lo("@firebase/firestore");function ho(){return Dt.logLevel}function v(n,...e){if(Dt.logLevel<=U.DEBUG){const t=e.map(la);Dt.debug(`Firestore (${Tn}): ${n}`,...t)}}function X(n,...e){if(Dt.logLevel<=U.ERROR){const t=e.map(la);Dt.error(`Firestore (${Tn}): ${n}`,...t)}}function fo(n,...e){if(Dt.logLevel<=U.WARN){const t=e.map(la);Dt.warn(`Firestore (${Tn}): ${n}`,...t)}}function la(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(n="Unexpected state"){const e=`FIRESTORE (${Tn}) INTERNAL ASSERTION FAILED: `+n;throw X(e),new Error(e)}function N(n,e){n||b()}function E(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends Vt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Qy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(oe.UNAUTHENTICATED))}shutdown(){}}class Xy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Zy{constructor(e){this.t=e,this.currentUser=oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new ze;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ze,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ze)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(N(typeof r.accessToken=="string"),new Qh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return N(e===null||typeof e=="string"),new oe(e)}}class ev{constructor(e,t,r){this.type="FirstParty",this.user=oe.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class tv{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new ev(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rv{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const r=i=>{i.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(N(typeof t.token=="string"),this.p=t.token,new nv(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.I(r),this.T=r=>t.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee.A=-1;class Xh{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=sv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function O(n,e){return n<e?-1:n>e?1:0}function hn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function Zh(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new I(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new I(y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new I(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new I(y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Z.fromMillis(Date.now())}static fromDate(e){return Z.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Z(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?O(this.nanoseconds,e.nanoseconds):O(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.timestamp=e}static fromTimestamp(e){return new C(e)}static min(){return new C(new Z(0,0))}static max(){return new C(new Z(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Sn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ed(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t,r){t===void 0?t=0:t>e.length&&b(),r===void 0?r=e.length-t:r>e.length-t&&b(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return or.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class F extends or{construct(e,t,r){return new F(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new I(y.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new F(t)}static emptyPath(){return new F([])}}const iv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ce extends or{construct(e,t,r){return new ce(e,t,r)}static isValidIdentifier(e){return iv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ce(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new I(y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new I(y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new I(y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new I(y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ce(t)}static emptyPath(){return new ce([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.fields=e,e.sort(ce.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return hn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new se(t)}static fromUint8Array(e){const t=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new se(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return O(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}se.EMPTY_BYTE_STRING=new se("");const ov=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function at(n){if(N(!!n),typeof n=="string"){let e=0;const t=ov.exec(n);if(N(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:H(n.seconds),nanos:H(n.nanos)}}function H(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Nt(n){return typeof n=="string"?se.fromBase64String(n):se.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function nd(n){const e=n.mapValue.fields.__previous_value__;return td(e)?nd(e):e}function ar(n){const e=at(n.mapValue.fields.__local_write_time__.timestampValue);return new Z(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,t,r,s,i,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ct{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ct("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ct&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(n){return n==null}function cr(n){return n===0&&1/n==-1/0}function rd(n){return typeof n=="number"&&Number.isInteger(n)&&!cr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(e){this.path=e}static fromPath(e){return new _(F.fromString(e))}static fromName(e){return new _(F.fromString(e).popFirst(5))}static empty(){return new _(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&F.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return F.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _(new F(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Hc={nullValue:"NULL_VALUE"};function xt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?td(n)?4:sd(n)?9:10:b()}function Fe(n,e){if(n===e)return!0;const t=xt(n);if(t!==xt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ar(n).isEqual(ar(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=at(r.timestampValue),o=at(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return Nt(r.bytesValue).isEqual(Nt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return H(r.geoPointValue.latitude)===H(s.geoPointValue.latitude)&&H(r.geoPointValue.longitude)===H(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return H(r.integerValue)===H(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=H(r.doubleValue),o=H(s.doubleValue);return i===o?cr(i)===cr(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return hn(n.arrayValue.values||[],e.arrayValue.values||[],Fe);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Gc(i)!==Gc(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Fe(i[a],o[a])))return!1;return!0}(n,e);default:return b()}}function ur(n,e){return(n.values||[]).find(t=>Fe(t,e))!==void 0}function ut(n,e){if(n===e)return 0;const t=xt(n),r=xt(e);if(t!==r)return O(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return O(n.booleanValue,e.booleanValue);case 2:return function(s,i){const o=H(s.integerValue||s.doubleValue),a=H(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return zc(n.timestampValue,e.timestampValue);case 4:return zc(ar(n),ar(e));case 5:return O(n.stringValue,e.stringValue);case 6:return function(s,i){const o=Nt(s),a=Nt(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=O(o[c],a[c]);if(u!==0)return u}return O(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,i){const o=O(H(s.latitude),H(i.latitude));return o!==0?o:O(H(s.longitude),H(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=ut(o[c],a[c]);if(u)return u}return O(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=O(a[l],u[l]);if(h!==0)return h;const d=ut(o[a[l]],c[u[l]]);if(d!==0)return d}return O(a.length,u.length)}(n.mapValue,e.mapValue);default:throw b()}}function zc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return O(n,e);const t=at(n),r=at(e),s=O(t.seconds,r.seconds);return s!==0?s:O(t.nanos,r.nanos)}function tn(n){return po(n)}function po(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const s=at(r);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Nt(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,_.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=po(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${po(r.fields[a])}`;return i+"}"}(n.mapValue):b();var e,t}function Wc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function go(n){return!!n&&"integerValue"in n}function lr(n){return!!n&&"arrayValue"in n}function Jc(n){return!!n&&"nullValue"in n}function Yc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function us(n){return!!n&&"mapValue"in n}function Wn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Sn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Wn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function sd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function Qc(n,e){return n===void 0?e:e===void 0||ut(n,e)>0?n:e}function Xc(n,e){return n===void 0?e:e===void 0||ut(n,e)<0?n:e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.value=e}static empty(){return new Ie({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!us(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wn(t)}setAll(e){let t=ce.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=Wn(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());us(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Fe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];us(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Sn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ie(Wn(this.value))}}function id(n){const e=[];return Sn(n.fields,(t,r)=>{const s=new ce([t]);if(us(r)){const i=id(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ls(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,t,r,s,i,o){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new z(e,0,C.min(),C.min(),Ie.empty(),0)}static newFoundDocument(e,t,r){return new z(e,1,t,C.min(),r,0)}static newNoDocument(e,t){return new z(e,2,t,C.min(),Ie.empty(),0)}static newUnknownDocument(e,t){return new z(e,3,t,C.min(),Ie.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ie.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ie.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof z&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new z(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class od{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function mo(n){return n.fields.find(e=>e.kind===2)}function zt(n){return n.fields.filter(e=>e.kind!==2)}od.UNKNOWN_ID=-1;class cv{constructor(e,t){this.fieldPath=e,this.kind=t}}class Us{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Us(0,Je.min())}}function ad(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=C.fromTimestamp(r===1e9?new Z(t+1,0):new Z(t,r));return new Je(s,_.empty(),e)}function uv(n){return new Je(n.readTime,n.key,-1)}class Je{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Je(C.min(),_.empty(),-1)}static max(){return new Je(C.max(),_.empty(),-1)}}function lv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=_.comparator(n.documentKey,e.documentKey),t!==0?t:O(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function Zc(n,e=null,t=[],r=[],s=null,i=null,o=null){return new hv(n,e,t,r,s,i,o)}function Rt(n){const e=E(n);if(e.P===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+tn(s.value);var s}).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Cn(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>tn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>tn(r)).join(",")),e.P=t}return e.P}function dv(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(t=>{return`${(r=t).field.canonicalString()} ${r.op} ${tn(r.value)}`;var r}).join(", ")}]`),Cn(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(t=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(t)).join(", ")}]`),n.startAt&&(e+=", startAt: ",e+=n.startAt.inclusive?"b:":"a:",e+=n.startAt.position.map(t=>tn(t)).join(",")),n.endAt&&(e+=", endAt: ",e+=n.endAt.inclusive?"a:":"b:",e+=n.endAt.position.map(t=>tn(t)).join(",")),`Target(${e})`}function Mr(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<n.orderBy.length;s++)if(!wv(n.orderBy[s],e.orderBy[s]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let s=0;s<n.filters.length;s++)if(t=n.filters[s],r=e.filters[s],t.op!==r.op||!t.field.isEqual(r.field)||!Fe(t.value,r.value))return!1;var t,r;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!tu(n.startAt,e.startAt)&&tu(n.endAt,e.endAt)}function Vs(n){return _.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Zr(n,e){return n.filters.filter(t=>t instanceof de&&t.field.isEqual(e))}class de extends class{}{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.V(e,t,r):new fv(e,t,r):t==="array-contains"?new mv(e,r):t==="in"?new yv(e,r):t==="not-in"?new vv(e,r):t==="array-contains-any"?new _v(e,r):new de(e,t,r)}static V(e,t,r){return t==="in"?new pv(e,r):new gv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.v(ut(t,this.value)):t!==null&&xt(this.value)===xt(t)&&this.v(ut(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class fv extends de{constructor(e,t,r){super(e,t,r),this.key=_.fromName(r.referenceValue)}matches(e){const t=_.comparator(e.key,this.key);return this.v(t)}}class pv extends de{constructor(e,t){super(e,"in",t),this.keys=cd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class gv extends de{constructor(e,t){super(e,"not-in",t),this.keys=cd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function cd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>_.fromName(r.referenceValue))}class mv extends de{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return lr(t)&&ur(t.arrayValue,this.value)}}class yv extends de{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ur(this.value.arrayValue,t)}}class vv extends de{constructor(e,t){super(e,"not-in",t)}matches(e){if(ur(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ur(this.value.arrayValue,t)}}class _v extends de{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!lr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ur(this.value.arrayValue,r))}}class dn{constructor(e,t){this.position=e,this.inclusive=t}}class nn{constructor(e,t="asc"){this.field=e,this.dir=t}}function wv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function eu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=_.comparator(_.fromName(o.referenceValue),t.key):r=ut(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function tu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Fe(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function ud(n,e,t,r,s,i,o,a){return new Lr(n,e,t,r,s,i,o,a)}function mi(n){return new Lr(n)}function ls(n){return!Cn(n.limit)&&n.limitType==="F"}function Fs(n){return!Cn(n.limit)&&n.limitType==="L"}function ld(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function hd(n){for(const e of n.filters)if(e.S())return e.field;return null}function Iv(n){return n.collectionGroup!==null}function hr(n){const e=E(n);if(e.D===null){e.D=[];const t=hd(e),r=ld(e);if(t!==null&&r===null)t.isKeyField()||e.D.push(new nn(t)),e.D.push(new nn(ce.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new nn(ce.keyField(),i))}}}return e.D}function $e(n){const e=E(n);if(!e.C)if(e.limitType==="F")e.C=Zc(e.path,e.collectionGroup,hr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of hr(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new nn(i.field,o))}const r=e.endAt?new dn(e.endAt.position,!e.endAt.inclusive):null,s=e.startAt?new dn(e.startAt.position,!e.startAt.inclusive):null;e.C=Zc(e.path,e.collectionGroup,t,e.filters,e.limit,r,s)}return e.C}function Ev(n,e,t){return new Lr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function yi(n,e){return Mr($e(n),$e(e))&&n.limitType===e.limitType}function dd(n){return`${Rt($e(n))}|lt:${n.limitType}`}function yo(n){return`Query(target=${dv($e(n))}; limitType=${n.limitType})`}function ha(n,e){return e.isFoundDocument()&&function(t,r){const s=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):_.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(n,e)&&function(t,r){for(const s of t.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const s of t.filters)if(!s.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(s,i,o){const a=eu(s,i,o);return s.inclusive?a<=0:a<0}(t.startAt,hr(t),r)||t.endAt&&!function(s,i,o){const a=eu(s,i,o);return s.inclusive?a>=0:a>0}(t.endAt,hr(t),r))}(n,e)}function fd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function pd(n){return(e,t)=>{let r=!1;for(const s of hr(n)){const i=bv(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function bv(n,e,t){const r=n.field.isKeyField()?_.comparator(e.key,t.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?ut(a,c):b()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(n,e){if(n.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cr(e)?"-0":e}}function md(n){return{integerValue:""+n}}function Tv(n,e){return rd(e)?md(e):gd(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this._=void 0}}function Sv(n,e,t){return n instanceof fn?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(t,e):n instanceof pn?vd(n,e):n instanceof gn?_d(n,e):function(r,s){const i=yd(r,s),o=nu(i)+nu(r.k);return go(i)&&go(r.k)?md(o):gd(r.M,o)}(n,e)}function Cv(n,e,t){return n instanceof pn?vd(n,e):n instanceof gn?_d(n,e):t}function yd(n,e){return n instanceof dr?go(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class fn extends vi{}class pn extends vi{constructor(e){super(),this.elements=e}}function vd(n,e){const t=wd(e);for(const r of n.elements)t.some(s=>Fe(s,r))||t.push(r);return{arrayValue:{values:t}}}class gn extends vi{constructor(e){super(),this.elements=e}}function _d(n,e){let t=wd(e);for(const r of n.elements)t=t.filter(s=>!Fe(s,r));return{arrayValue:{values:t}}}class dr extends vi{constructor(e,t){super(),this.M=e,this.k=t}}function nu(n){return H(n.integerValue||n.doubleValue)}function wd(n){return lr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,t){this.field=e,this.transform=t}}function kv(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof pn&&r instanceof pn||t instanceof gn&&r instanceof gn?hn(t.elements,r.elements,Fe):t instanceof dr&&r instanceof dr?Fe(t.k,r.k):t instanceof fn&&r instanceof fn}(n.transform,e.transform)}class Av{constructor(e,t){this.version=e,this.transformResults=t}}class Le{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Le}static exists(e){return new Le(void 0,e)}static updateTime(e){return new Le(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class _i{}function Dv(n,e,t){n instanceof Ur?function(r,s,i){const o=r.value.clone(),a=iu(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof kn?function(r,s,i){if(!hs(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=iu(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Ed(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function vo(n,e,t){n instanceof Ur?function(r,s,i){if(!hs(r.precondition,s))return;const o=r.value.clone(),a=ou(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(su(s),o).setHasLocalMutations()}(n,e,t):n instanceof kn?function(r,s,i){if(!hs(r.precondition,s))return;const o=ou(r.fieldTransforms,i,s),a=s.data;a.setAll(Ed(r)),a.setAll(o),s.convertToFoundDocument(su(s),a).setHasLocalMutations()}(n,e,t):function(r,s){hs(r.precondition,s)&&s.convertToNoDocument(C.min())}(n,e)}function Nv(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=yd(r.transform,s||null);i!=null&&(t==null&&(t=Ie.empty()),t.set(r.field,i))}return t||null}function ru(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&hn(t,r,(s,i)=>kv(s,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}function su(n){return n.isFoundDocument()?n.version:C.min()}class Ur extends _i{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}}class kn extends _i{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function Ed(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function iu(n,e,t){const r=new Map;N(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Cv(o,a,t[s]))}return r}function ou(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,Sv(i,o,e))}return r}class bd extends _i{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Td extends _i{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q,M;function Rv(n){switch(n){default:return b();case y.CANCELLED:case y.UNKNOWN:case y.DEADLINE_EXCEEDED:case y.RESOURCE_EXHAUSTED:case y.INTERNAL:case y.UNAVAILABLE:case y.UNAUTHENTICATED:return!1;case y.INVALID_ARGUMENT:case y.NOT_FOUND:case y.ALREADY_EXISTS:case y.PERMISSION_DENIED:case y.FAILED_PRECONDITION:case y.ABORTED:case y.OUT_OF_RANGE:case y.UNIMPLEMENTED:case y.DATA_LOSS:return!0}}function Sd(n){if(n===void 0)return X("GRPC error has no .code"),y.UNKNOWN;switch(n){case Q.OK:return y.OK;case Q.CANCELLED:return y.CANCELLED;case Q.UNKNOWN:return y.UNKNOWN;case Q.DEADLINE_EXCEEDED:return y.DEADLINE_EXCEEDED;case Q.RESOURCE_EXHAUSTED:return y.RESOURCE_EXHAUSTED;case Q.INTERNAL:return y.INTERNAL;case Q.UNAVAILABLE:return y.UNAVAILABLE;case Q.UNAUTHENTICATED:return y.UNAUTHENTICATED;case Q.INVALID_ARGUMENT:return y.INVALID_ARGUMENT;case Q.NOT_FOUND:return y.NOT_FOUND;case Q.ALREADY_EXISTS:return y.ALREADY_EXISTS;case Q.PERMISSION_DENIED:return y.PERMISSION_DENIED;case Q.FAILED_PRECONDITION:return y.FAILED_PRECONDITION;case Q.ABORTED:return y.ABORTED;case Q.OUT_OF_RANGE:return y.OUT_OF_RANGE;case Q.UNIMPLEMENTED:return y.UNIMPLEMENTED;case Q.DATA_LOSS:return y.DATA_LOSS;default:return b()}}(M=Q||(Q={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Sn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ed(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){this.comparator=e,this.root=t||ae.EMPTY}insert(e,t){return new Y(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ae.BLACK,null,null))}remove(e){return new Y(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ae.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new es(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new es(this.root,e,this.comparator,!1)}getReverseIterator(){return new es(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new es(this.root,e,this.comparator,!0)}}class es{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ae{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r!=null?r:ae.RED,this.left=s!=null?s:ae.EMPTY,this.right=i!=null?i:ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ae(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ae.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}ae.EMPTY=null,ae.RED=!0,ae.BLACK=!1;ae.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(n,e,t,r,s){return this}insert(n,e,t){return new ae(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.comparator=e,this.data=new Y(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new au(this.data.getIterator())}getIteratorFrom(e){return new au(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof q)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new q(this.comparator);return t.data=e,t}}class au{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Gt(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=new Y(_.comparator);function xe(){return Ov}const Pv=new Y(_.comparator);function _o(){return Pv}function Jn(){return new ft(n=>n.toString(),(n,e)=>n.isEqual(e))}const Mv=new Y(_.comparator),Lv=new q(_.comparator);function $(...n){let e=Lv;for(const t of n)e=e.add(t);return e}const Uv=new q(O);function wi(){return Uv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const r=new Map;return r.set(e,Fr.createSynthesizedTargetChangeForCurrentChange(e,t)),new Vr(C.min(),r,wi(),xe(),$())}}class Fr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Fr(se.EMPTY_BYTE_STRING,t,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t,r,s){this.O=e,this.removedTargetIds=t,this.key=r,this.F=s}}class Cd{constructor(e,t){this.targetId=e,this.$=t}}class kd{constructor(e,t,r=se.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class cu{constructor(){this.B=0,this.L=lu(),this.U=se.EMPTY_BYTE_STRING,this.q=!1,this.G=!0}get current(){return this.q}get resumeToken(){return this.U}get K(){return this.B!==0}get j(){return this.G}W(e){e.approximateByteSize()>0&&(this.G=!0,this.U=e)}H(){let e=$(),t=$(),r=$();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:b()}}),new Fr(this.U,this.q,e,t,r)}J(){this.G=!1,this.L=lu()}Y(e,t){this.G=!0,this.L=this.L.insert(e,t)}X(e){this.G=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.G=!0,this.q=!0}}class Vv{constructor(e){this.nt=e,this.st=new Map,this.it=xe(),this.rt=uu(),this.ot=new q(O)}ut(e){for(const t of e.O)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ht(e){this.forEachTarget(e,t=>{const r=this.lt(t);switch(e.state){case 0:this.ft(t)&&r.W(e.resumeToken);break;case 1:r.tt(),r.K||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.K||this.removeTarget(t);break;case 3:this.ft(t)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),r.W(e.resumeToken));break;default:b()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach((r,s)=>{this.ft(s)&&t(s)})}_t(e){const t=e.targetId,r=e.$.count,s=this.wt(t);if(s){const i=s.target;if(Vs(i))if(r===0){const o=new _(i.path);this.ct(t,o,z.newNoDocument(o,C.min()))}else N(r===1);else this.gt(t)!==r&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Vs(a.target)){const c=new _(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,z.newNoDocument(c,e))}i.j&&(t.set(o,i.H()),i.J())}});let r=$();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const s=new Vr(e,t,this.ot,this.it,r);return this.it=xe(),this.rt=uu(),this.ot=new q(O),s}at(e,t){if(!this.ft(e))return;const r=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,r),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,r){if(!this.ft(e))return;const s=this.lt(e);this.It(e,t)?s.Y(t,1):s.X(t),this.rt=this.rt.insert(t,this.Tt(t).delete(e)),r&&(this.it=this.it.insert(t,r))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new cu,this.st.set(e,t)),t}Tt(e){let t=this.rt.get(e);return t||(t=new q(O),this.rt=this.rt.insert(e,t)),t}ft(e){const t=this.wt(e)!==null;return t||v("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.K?null:this.nt.Et(e)}dt(e){this.st.set(e,new cu),this.nt.getRemoteKeysForTarget(e).forEach(t=>{this.ct(e,t,null)})}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function uu(){return new Y(_.comparator)}function lu(){return new Y(_.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$v=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Bv{constructor(e,t){this.databaseId=e,this.N=t}}function fr(n,e){return n.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ad(n,e){return n.N?e.toBase64():e.toUint8Array()}function qv(n,e){return fr(n,e.toTimestamp())}function be(n){return N(!!n),C.fromTimestamp(function(e){const t=at(e);return new Z(t.seconds,t.nanos)}(n))}function da(n,e){return function(t){return new F(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Dd(n){const e=F.fromString(n);return N(Ld(e)),e}function $s(n,e){return da(n.databaseId,e.path)}function bt(n,e){const t=Dd(e);if(t.get(1)!==n.databaseId.projectId)throw new I(y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new I(y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new _(xd(t))}function wo(n,e){return da(n.databaseId,e)}function Nd(n){const e=Dd(n);return e.length===4?F.emptyPath():xd(e)}function Io(n){return new F(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function xd(n){return N(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function hu(n,e,t){return{name:$s(n,e),fields:t.value.mapValue.fields}}function jv(n,e,t){const r=bt(n,e.name),s=be(e.updateTime),i=new Ie({mapValue:{fields:e.fields}}),o=z.newFoundDocument(r,s,i);return t&&o.setHasCommittedMutations(),t?o.setHasCommittedMutations():o}function Gv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.N?(N(u===void 0||typeof u=="string"),se.fromBase64String(u||"")):(N(u===void 0||u instanceof Uint8Array),se.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?y.UNKNOWN:Sd(c.code);return new I(u,c.message||"")}(o);t=new kd(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=bt(n,r.document.name),i=be(r.document.updateTime),o=new Ie({mapValue:{fields:r.document.fields}}),a=z.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];t=new ds(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=bt(n,r.document),i=r.readTime?be(r.readTime):C.min(),o=z.newNoDocument(s,i),a=r.removedTargetIds||[];t=new ds([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=bt(n,r.document),i=r.removedTargetIds||[];t=new ds([],i,s,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new xv(s),o=r.targetId;t=new Cd(o,i)}}return t}function Bs(n,e){let t;if(e instanceof Ur)t={update:hu(n,e.key,e.value)};else if(e instanceof bd)t={delete:$s(n,e.key)};else if(e instanceof kn)t={update:hu(n,e.key,e.data),updateMask:Qv(e.fieldMask)};else{if(!(e instanceof Td))return b();t={verify:$s(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof fn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof pn)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof gn)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof dr)return{fieldPath:i.field.canonicalString(),increment:o.k};throw b()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:qv(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:b()}(n,e.precondition)),t}function Eo(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Le.updateTime(be(s.updateTime)):s.exists!==void 0?Le.exists(s.exists):Le.none()}(e.currentDocument):Le.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(i,o){let a=null;if("setToServerValue"in o)N(o.setToServerValue==="REQUEST_TIME"),a=new fn;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new pn(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new gn(u)}else"increment"in o?a=new dr(i,o.increment):b();const c=ce.fromServerFormat(o.fieldPath);return new Id(c,a)}(n,s)):[];if(e.update){e.update.name;const s=bt(n,e.update.name),i=new Ie({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Ls(c.map(u=>ce.fromServerFormat(u)))}(e.updateMask);return new kn(s,i,o,t,r)}return new Ur(s,i,t,r)}if(e.delete){const s=bt(n,e.delete);return new bd(s,t)}if(e.verify){const s=bt(n,e.verify);return new Td(s,t)}return b()}function Kv(n,e){return n&&n.length>0?(N(e!==void 0),n.map(t=>function(r,s){let i=r.updateTime?be(r.updateTime):be(s);return i.isEqual(C.min())&&(i=be(s)),new Av(i,r.transformResults||[])}(t,e))):[]}function Rd(n,e){return{documents:[wo(n,e.path)]}}function Od(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=wo(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=wo(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(Yc(h.value))return{unaryFilter:{field:Kt(h.field),op:"IS_NAN"}};if(Jc(h.value))return{unaryFilter:{field:Kt(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Yc(h.value))return{unaryFilter:{field:Kt(h.field),op:"IS_NOT_NAN"}};if(Jc(h.value))return{unaryFilter:{field:Kt(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kt(h.field),op:Wv(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);s&&(t.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Kt(l.field),direction:zv(l.dir)}}(u))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(c,u){return c.N||Cn(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Pd(n){let e=Nd(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){N(r===1);const l=t.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=Md(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new nn(Qt(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Cn(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new dn(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new dn(d,h)}(t.endAt)),ud(e,s,o,i,a,"F",c,u)}function Hv(n,e){const t=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function Md(n){return n?n.unaryFilter!==void 0?[Yv(n)]:n.fieldFilter!==void 0?[Jv(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>Md(e)).reduce((e,t)=>e.concat(t)):b():[]}function zv(n){return Fv[n]}function Wv(n){return $v[n]}function Kt(n){return{fieldPath:n.canonicalString()}}function Qt(n){return ce.fromServerFormat(n.fieldPath)}function Jv(n){return de.create(Qt(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(n.fieldFilter.op),n.fieldFilter.value)}function Yv(n){switch(n.unaryFilter.op){case"IS_NAN":const e=Qt(n.unaryFilter.field);return de.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=Qt(n.unaryFilter.field);return de.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Qt(n.unaryFilter.field);return de.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Qt(n.unaryFilter.field);return de.create(s,"!=",{nullValue:"NULL_VALUE"});default:return b()}}function Qv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ld(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=du(e)),e=Xv(n.get(t),e);return du(e)}function Xv(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function du(n){return n+""}function Re(n){const e=n.length;if(N(e>=2),e===2)return N(n.charAt(0)===""&&n.charAt(1)===""),F.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&b(),n.charAt(o+1)){case"":const a=n.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:b()}i=o+2}return new F(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(n,e){return[n,ne(e)]}function Ud(n,e,t){return[n,ne(e),t]}const Zv={},e_=["prefixPath","collectionGroup","readTime","documentId"],t_=["prefixPath","collectionGroup","documentId"],n_=["collectionGroup","readTime","prefixPath","documentId"],r_=["canonicalId","targetId"],s_=["targetId","path"],i_=["path","targetId"],o_=["collectionId","parent"],a_=["indexId","uid"],c_=["uid","sequenceNumber"],u_=["indexId","uid","arrayValue","directionalValue","documentKey"],l_=["indexId","uid","documentKey"],h_=["userId","collectionPath","documentId"],d_=["userId","collectionPath","largestBatchId"],f_=["userId","collectionGroup","largestBatchId"],Vd=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],p_=[...Vd,"documentOverlays"],Fd=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],g_=[...Fd,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new p((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof p?t:p.resolve(t)}catch(t){return p.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):p.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):p.reject(t)}static resolve(e){return new p((t,r)=>{t(e)})}static reject(e){return new p((t,r)=>{r(e)})}static waitFor(e){return new p((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=p.resolve(!1);for(const r of e)t=t.next(s=>s?p.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.At=new ze,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{t.error?this.At.reject(new Yn(e,t.error)):this.At.resolve()},this.transaction.onerror=r=>{const s=fa(r.target.error);this.At.reject(new Yn(e,s))}}static open(e,t,r,s){try{return new Ii(t,e.transaction(s,r))}catch(i){throw new Yn(t,i)}}get Rt(){return this.At.promise}abort(e){e&&this.At.reject(e),this.aborted||(v("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}bt(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new y_(t)}}class Ge{constructor(e,t,r){this.name=e,this.version=t,this.Pt=r,Ge.Vt(J())===12.2&&X("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return v("SimpleDb","Removing database:",e),vt(window.indexedDB.deleteDatabase(e)).toPromise()}static vt(){if(!jl())return!1;if(Ge.St())return!0;const e=J(),t=Ge.Vt(e),r=0<t&&t<10,s=Ge.Dt(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static St(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.Ct)==="YES"}static xt(e,t){return e.store(t)}static Vt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static Dt(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async Nt(e){return this.db||(v("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new Yn(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new I(y.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new I(y.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Yn(e,o))},s.onupgradeneeded=i=>{v("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.Pt.kt(o,s.transaction,i.oldVersion,this.version).next(()=>{v("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Mt&&(this.db.onversionchange=t=>this.Mt(t)),this.db}Ot(e){this.Mt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.Nt(e);const a=Ii.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.bt(),u)).catch(u=>(a.abort(u),p.reject(u))).toPromise();return c.catch(()=>{}),await a.Rt,c}catch(a){const c=a.name!=="FirebaseError"&&o<3;if(v("SimpleDb","Transaction failed with error:",a.message,"Retrying:",c),this.close(),!c)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class m_{constructor(e){this.Ft=e,this.$t=!1,this.Bt=null}get isDone(){return this.$t}get Lt(){return this.Bt}set cursor(e){this.Ft=e}done(){this.$t=!0}Ut(e){this.Bt=e}delete(){return vt(this.Ft.delete())}}class Yn extends I{constructor(e,t){super(y.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function $t(n){return n.name==="IndexedDbTransactionError"}class y_{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(v("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(v("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),vt(r)}add(e){return v("SimpleDb","ADD",this.store.name,e,e),vt(this.store.add(e))}get(e){return vt(this.store.get(e)).next(t=>(t===void 0&&(t=null),v("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return v("SimpleDb","DELETE",this.store.name,e),vt(this.store.delete(e))}count(){return v("SimpleDb","COUNT",this.store.name),vt(this.store.count())}qt(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const s=this.cursor(r),i=[];return this.Gt(s,(o,a)=>{i.push(a)}).next(()=>i)}{const s=this.store.getAll(r.range);return new p((i,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{i(a.target.result)}})}}Kt(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new p((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}Qt(e,t){v("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.jt=!1;const s=this.cursor(r);return this.Gt(s,(i,o,a)=>a.delete())}Wt(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.Gt(s,t)}zt(e){const t=this.cursor({});return new p((r,s)=>{t.onerror=i=>{const o=fa(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}Gt(e,t){const r=[];return new p((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new m_(a),u=t(a.primaryKey,a.value,c);if(u instanceof p){const l=u.catch(h=>(c.done(),p.reject(h)));r.push(l)}c.isDone?s():c.Lt===null?a.continue():a.continue(c.Lt)}}).next(()=>p.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.jt?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function vt(n){return new p((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=fa(r.target.error);t(s)}})}let pu=!1;function fa(n){const e=Ge.Vt(J());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new I("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return pu||(pu=!0,setTimeout(()=>{throw r},0)),r}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu extends Bd{constructor(e,t){super(),this.Ht=e,this.currentSequenceNumber=t}}function ie(n,e){const t=E(n);return Ge.xt(t.Ht,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Dv(i,e,r[s])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&vo(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&vo(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const r=e.get(t.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(C.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),$())}isEqual(e){return this.batchId===e.batchId&&hn(this.mutations,e.mutations,(t,r)=>ru(t,r))&&hn(this.baseMutations,e.baseMutations,(t,r)=>ru(t,r))}}class ga{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){N(e.mutations.length===r.length);let s=Mv;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ga(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t,r,s,i=C.min(),o=C.min(),a=se.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new it(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new it(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new it(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){this.Jt=e}}function v_(n,e){let t;if(e.document)t=jv(n.Jt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=_.fromSegments(e.noDocument.path),s=Pt(e.noDocument.readTime);t=z.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return b();{const r=_.fromSegments(e.unknownDocument.path),s=Pt(e.unknownDocument.version);t=z.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(r){const s=new Z(r[0],r[1]);return C.fromTimestamp(s)}(e.readTime)),t}function mu(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:qs(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,i){return{name:$s(s,i.key),fields:i.data.value.mapValue.fields,updateTime:fr(s,i.version.toTimestamp())}}(n.Jt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Ot(e.version)};else{if(!e.isUnknownDocument())return b();r.unknownDocument={path:t.path.toArray(),version:Ot(e.version)}}return r}function qs(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Ot(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Pt(n){const e=new Z(n.seconds,n.nanoseconds);return C.fromTimestamp(e)}function Wt(n,e){const t=(e.baseMutations||[]).map(i=>Eo(n.Jt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Eo(n.Jt,i)),s=Z.fromMillis(e.localWriteTimeMs);return new pa(e.batchId,s,t,r)}function qn(n){const e=Pt(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Pt(n.lastLimboFreeSnapshotVersion):C.min();let r;var s;return n.query.documents!==void 0?(N((s=n.query).documents.length===1),r=$e(mi(Nd(s.documents[0])))):r=function(i){return $e(Pd(i))}(n.query),new it(r,n.targetId,0,n.lastListenSequenceNumber,e,t,se.fromBase64String(n.resumeToken))}function jd(n,e){const t=Ot(e.snapshotVersion),r=Ot(e.lastLimboFreeSnapshotVersion);let s;s=Vs(e.target)?Rd(n.Jt,e.target):Od(n.Jt,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Rt(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Gd(n){const e=Pd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ev(e,e.limit,"L"):e}function $i(n,e){return new ma(e.largestBatchId,Eo(n.Jt,e.overlayMutation))}function yu(n,e){const t=e.path.lastSegment();return[n,ne(e.path.popLast()),t]}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{getBundleMetadata(e,t){return vu(e).get(t).next(r=>{if(r)return{id:(s=r).bundleId,createTime:Pt(s.createTime),version:s.version};var s})}saveBundleMetadata(e,t){return vu(e).put({bundleId:(r=t).id,createTime:Ot(be(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return _u(e).get(t).next(r=>{if(r)return{name:(s=r).name,query:Gd(s.bundledQuery),readTime:Pt(s.readTime)};var s})}saveNamedQuery(e,t){return _u(e).put(function(r){return{name:r.name,readTime:Ot(be(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function vu(n){return ie(n,"bundles")}function _u(n){return ie(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,t){this.M=e,this.userId=t}static Yt(e,t){const r=t.uid||"";return new ya(e,r)}getOverlay(e,t){return On(e).get(yu(this.userId,t)).next(r=>r?$i(this.M,r):null)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const a=new ma(t,o);s.push(this.Xt(e,a))}),p.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(ne(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(On(e).Qt("collectionPathOverlayIndex",a))}),p.waitFor(i)}getOverlaysForCollection(e,t,r){const s=Jn(),i=ne(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return On(e).qt("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=$i(this.M,c);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=Jn();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return On(e).Wt({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=$i(this.M,u);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>i)}Xt(e,t){return On(e).put(function(r,s,i){const[o,a,c]=yu(s,i.mutation.key);return{userId:s,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:Bs(r.Jt,i.mutation)}}(this.M,this.userId,t))}}function On(n){return ie(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(){}Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(H(e.integerValue));else if("doubleValue"in e){const r=H(e.doubleValue);isNaN(r)?this.ne(t,13):(this.ne(t,15),cr(r)?t.se(0):t.se(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ne(t,20),typeof r=="string"?t.ie(r):(t.ie(`${r.seconds||""}`),t.se(r.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ue(Nt(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ae(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ne(t,45),t.se(r.latitude||0),t.se(r.longitude||0)}else"mapValue"in e?sd(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):b()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){const r=e.fields||{};this.ne(t,55);for(const s of Object.keys(r))this.re(s,t),this.te(r[s],t)}he(e,t){const r=e.values||[];this.ne(t,50);for(const s of r)this.te(s,t)}ae(e,t){this.ne(t,37),_.fromName(e).path.forEach(r=>{this.ne(t,60),this.le(r,t)})}ne(e,t){e.se(t)}oe(e){e.se(2)}}Xt.fe=new Xt;function w_(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function wu(n){const e=64-function(t){let r=0;for(let s=0;s<8;++s){const i=w_(255&t[s]);if(r+=i,i!==8)break}return r}(n);return Math.ceil(e/8)}class I_{constructor(){this.buffer=new Uint8Array(1024),this.position=0}de(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this._e(r.value),r=t.next();this.we()}me(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.ge(r.value),r=t.next();this.ye()}pe(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this._e(r);else if(r<2048)this._e(960|r>>>6),this._e(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this._e(480|r>>>12),this._e(128|63&r>>>6),this._e(128|63&r);else{const s=t.codePointAt(0);this._e(240|s>>>18),this._e(128|63&s>>>12),this._e(128|63&s>>>6),this._e(128|63&s)}}this.we()}Ie(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.ge(r);else if(r<2048)this.ge(960|r>>>6),this.ge(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.ge(480|r>>>12),this.ge(128|63&r>>>6),this.ge(128|63&r);else{const s=t.codePointAt(0);this.ge(240|s>>>18),this.ge(128|63&s>>>12),this.ge(128|63&s>>>6),this.ge(128|63&s)}}this.ye()}Te(e){const t=this.Ee(e),r=wu(t);this.Ae(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Re(e){const t=this.Ee(e),r=wu(t);this.Ae(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}be(){this.Pe(255),this.Pe(255)}Ve(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(e){this.Ae(e.length),this.buffer.set(e,this.position),this.position+=e.length}Se(){return this.buffer.slice(0,this.position)}Ee(e){const t=function(s){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,s,!1),new Uint8Array(i.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}_e(e){const t=255&e;t===0?(this.Pe(0),this.Pe(255)):t===255?(this.Pe(255),this.Pe(0)):this.Pe(t)}ge(e){const t=255&e;t===0?(this.ve(0),this.ve(255)):t===255?(this.ve(255),this.ve(0)):this.ve(e)}we(){this.Pe(0),this.Pe(1)}ye(){this.ve(0),this.ve(1)}Pe(e){this.Ae(1),this.buffer[this.position++]=e}ve(e){this.Ae(1),this.buffer[this.position++]=~e}Ae(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class E_{constructor(e){this.De=e}ue(e){this.De.de(e)}ie(e){this.De.pe(e)}se(e){this.De.Te(e)}ee(){this.De.be()}}class b_{constructor(e){this.De=e}ue(e){this.De.me(e)}ie(e){this.De.Ie(e)}se(e){this.De.Re(e)}ee(){this.De.Ve()}}class ts{constructor(){this.De=new I_,this.Ce=new E_(this.De),this.xe=new b_(this.De)}seed(e){this.De.seed(e)}Ne(e){return e===0?this.Ce:this.xe}Se(){return this.De.Se()}reset(){this.De.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}ke(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ze(this.indexId,this.documentKey,this.arrayValue,r)}}function gt(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=Iu(n.arrayValue,e.arrayValue),t!==0?t:(t=Iu(n.directionalValue,e.directionalValue),t!==0?t:_.comparator(n.documentKey,e.documentKey)))}function Iu(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Me=e.orderBy,this.Oe=[];for(const t of e.filters){const r=t;r.S()?this.Fe=r:this.Oe.push(r)}}$e(e){const t=mo(e);if(t!==void 0&&!this.Be(t))return!1;const r=zt(e);let s=0,i=0;for(;s<r.length&&this.Be(r[s]);++s);if(s===r.length)return!0;if(this.Fe!==void 0){const o=r[s];if(!this.Le(this.Fe,o)||!this.Ue(this.Me[i++],o))return!1;++s}for(;s<r.length;++s){const o=r[s];if(i>=this.Me.length||!this.Ue(this.Me[i++],o))return!1}return!0}Be(e){for(const t of this.Oe)if(this.Le(t,e))return!0;return!1}Le(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}Ue(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(){this.qe=new va}addToCollectionParentIndex(e,t){return this.qe.add(t),p.resolve()}getCollectionParents(e,t){return p.resolve(this.qe.getEntries(t))}addFieldIndex(e,t){return p.resolve()}deleteFieldIndex(e,t){return p.resolve()}getDocumentsMatchingTarget(e,t){return p.resolve(null)}getFieldIndex(e,t){return p.resolve(null)}getFieldIndexes(e,t){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}updateCollectionGroup(e,t,r){return p.resolve()}updateIndexEntries(e,t){return p.resolve()}}class va{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new q(F.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new q(F.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new Uint8Array(0);class C_{constructor(e){this.user=e,this.Ge=new va,this.Ke=new ft(t=>Rt(t),(t,r)=>Mr(t,r)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ge.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.Ge.add(t)});const i={collectionId:r,parent:ne(s)};return Eu(e).put(i)}return p.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[Zh(t),""],!1,!0);return Eu(e).qt(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(Re(o.parent))}return r})}addFieldIndex(e,t){const r=rs(e),s=function(i){return{indexId:i.indexId,collectionGroup:i.collectionGroup,fields:i.fields.map(o=>[o.fieldPath.canonicalString(),o.kind])}}(t);return delete s.indexId,r.add(s).next()}deleteFieldIndex(e,t){const r=rs(e),s=ss(e),i=Pn(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=Pn(e);let s=!0;const i=new Map;return p.forEach(this.Qe(t),o=>this.getFieldIndex(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=$();return p.forEach(i,(a,c)=>{var u;v("IndexedDbIndexManager",`Using index ${u=a,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(k=>`${k.fieldPath}:${k.kind}`).join(",")}`} to execute ${Rt(t)}`);const l=function(k,j){const P=mo(j);if(P===void 0)return null;for(const B of Zr(k,P.fieldPath))switch(B.op){case"array-contains-any":return B.value.arrayValue.values||[];case"array-contains":return[B.value]}return null}(c,a),h=function(k,j){const P=new Map;for(const B of zt(j))for(const L of Zr(k,B.fieldPath))switch(L.op){case"==":case"in":P.set(B.fieldPath.canonicalString(),L.value);break;case"not-in":case"!=":return P.set(B.fieldPath.canonicalString(),L.value),Array.from(P.values())}return null}(c,a),d=function(k,j){const P=[];let B=!0;for(const De of zt(j)){let pe,Ne=!0;for(const W of Zr(k,De.fieldPath)){let K,jt=!0;switch(W.op){case"<":case"<=":K="nullValue"in(L=W.value)?Hc:"booleanValue"in L?{booleanValue:!1}:"integerValue"in L||"doubleValue"in L?{doubleValue:NaN}:"timestampValue"in L?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in L?{stringValue:""}:"bytesValue"in L?{bytesValue:""}:"referenceValue"in L?Wc(ct.empty(),_.empty()):"geoPointValue"in L?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in L?{arrayValue:{}}:"mapValue"in L?{mapValue:{}}:b();break;case"==":case"in":case">=":K=W.value;break;case">":K=W.value,jt=!1;break;case"!=":case"not-in":K=Hc}Qc(pe,K)===K&&(pe=K,Ne=jt)}if(k.startAt!==null){for(let W=0;W<k.orderBy.length;++W)if(k.orderBy[W].field.isEqual(De.fieldPath)){const K=k.startAt.position[W];Qc(pe,K)===K&&(pe=K,Ne=k.startAt.inclusive);break}}if(pe===void 0)return null;P.push(pe),B&&(B=Ne)}var L;return new dn(P,B)}(c,a),f=function(k,j){const P=[];let B=!0;for(const De of zt(j)){let pe,Ne=!0;for(const W of Zr(k,De.fieldPath)){let K,jt=!0;switch(W.op){case">=":case">":K="nullValue"in(L=W.value)?{booleanValue:!1}:"booleanValue"in L?{doubleValue:NaN}:"integerValue"in L||"doubleValue"in L?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in L?{stringValue:""}:"stringValue"in L?{bytesValue:""}:"bytesValue"in L?Wc(ct.empty(),_.empty()):"referenceValue"in L?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in L?{arrayValue:{}}:"arrayValue"in L?{mapValue:{}}:"mapValue"in L?Kc:b(),jt=!1;break;case"==":case"in":case"<=":K=W.value;break;case"<":K=W.value,jt=!1;break;case"!=":case"not-in":K=Kc}Xc(pe,K)===K&&(pe=K,Ne=jt)}if(k.endAt!==null){for(let W=0;W<k.orderBy.length;++W)if(k.orderBy[W].field.isEqual(De.fieldPath)){const K=k.endAt.position[W];Xc(pe,K)===K&&(pe=K,Ne=k.endAt.inclusive);break}}if(pe===void 0)return null;P.push(pe),B&&(B=Ne)}var L;return new dn(P,B)}(c,a),m=this.je(a,c,d),S=this.je(a,c,f),T=this.We(a,c,h),R=this.ze(a.indexId,l,m,!!d&&d.inclusive,S,!!f&&f.inclusive,T);return p.forEach(R,k=>r.Kt(k,t.limit).next(j=>{j.forEach(P=>{o=o.add(new _(Re(P.documentKey)))})}))}).next(()=>o)}return p.resolve(null)})}Qe(e){let t=this.Ke.get(e);return t||(t=[e],this.Ke.set(e,t),t)}ze(e,t,r,s,i,o,a){const c=(t!=null?t.length:1)*Math.max(r!=null?r.length:1,i!=null?i.length:1),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.He(t[h/u]):ns,f=r?this.Je(e,d,r[h%u],s):this.Ye(e),m=i?this.Xe(e,d,i[h%u],o):this.Ye(e+1);l.push(...this.createRange(f,m,a.map(S=>this.Je(e,d,S,!0))))}return l}Je(e,t,r,s){const i=new Ze(e,_.empty(),t,r);return s?i:i.ke()}Xe(e,t,r,s){const i=new Ze(e,_.empty(),t,r);return s?i.ke():i}Ye(e){return new Ze(e,_.empty(),ns,ns)}getFieldIndex(e,t){const r=new T_(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{const o=i.filter(a=>r.$e(a));return o.sort((a,c)=>c.fields.length-a.fields.length),o.length>0?o[0]:null})}Ze(e,t){const r=new ts;for(const s of zt(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Ne(s.kind);Xt.fe.Zt(i,o)}return r.Se()}He(e){const t=new ts;return Xt.fe.Zt(e,t.Ne(0)),t.Se()}We(e,t,r){if(r===null)return[];let s=[];s.push(new ts);let i=0;for(const o of zt(e)){const a=r[i++];for(const c of s)if(this.tn(t,o.fieldPath)&&lr(a))s=this.en(s,o,a);else{const u=c.Ne(o.kind);Xt.fe.Zt(a,u)}}return this.nn(s)}je(e,t,r){return r==null?null:this.We(e,t,r.position)}nn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Se();return t}en(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const c=new ts;c.seed(a.Se()),Xt.fe.Zt(o,c.Ne(t.kind)),i.push(c)}return i}tn(e,t){return!!e.filters.find(r=>r instanceof de&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=rs(e),s=ss(e);return(t?r.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.qt()).next(i=>{const o=[];return p.forEach(i,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new Us(l.sequenceNumber,new Je(Pt(l.readTime),new _(Re(l.documentKey)),l.largestBatchId)):Us.empty(),d=u.fields.map(([f,m])=>new cv(ce.fromServerFormat(f),m));return new od(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:O(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=rs(e),i=ss(e);return this.sn(e).next(o=>s.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>p.forEach(a,c=>i.put(function(u,l,h,d){return{indexId:u,uid:l.uid||"",sequenceNumber:h,readTime:Ot(d.readTime),documentKey:ne(d.documentKey.path),largestBatchId:d.largestBatchId}}(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return p.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?p.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),p.forEach(a,c=>this.rn(e,s,c).next(u=>{const l=this.on(i,c);return u.isEqual(l)?p.resolve():this.un(e,i,u,l)}))))})}an(e,t,r){return Pn(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,documentKey:ne(t.key.path)})}cn(e,t,r){return Pn(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,ne(t.key.path)])}rn(e,t,r){const s=Pn(e);let i=new q(gt);return s.Wt({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,ne(t.path)])},(o,a)=>{i=i.add(new Ze(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}on(e,t){let r=new q(gt);const s=this.Ze(t,e);if(s==null)return r;const i=mo(t);if(i!=null){const o=e.data.field(i.fieldPath);if(lr(o))for(const a of o.arrayValue.values||[])r=r.add(new Ze(t.indexId,e.key,this.He(a),s))}else r=r.add(new Ze(t.indexId,e.key,ns,s));return r}un(e,t,r,s){v("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const i=[];return function(o,a,c,u,l){const h=o.getIterator(),d=a.getIterator();let f=Gt(h),m=Gt(d);for(;f||m;){let S=!1,T=!1;if(f&&m){const R=c(f,m);R<0?T=!0:R>0&&(S=!0)}else f!=null?T=!0:S=!0;S?(u(m),m=Gt(d)):T?(l(f),f=Gt(h)):(f=Gt(h),m=Gt(d))}}(r,s,gt,o=>{i.push(this.an(e,t,o))},o=>{i.push(this.cn(e,t,o))}),p.waitFor(i)}sn(e){let t=1;return ss(e).Wt({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>gt(o,a)).filter((o,a,c)=>!a||gt(o,c[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=gt(o,e),c=gt(o,t);if(a===0)s[0]=e.ke();else if(a>0&&c<0)s.push(o),s.push(o.ke());else if(c>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2)i.push(IDBKeyRange.bound([s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,""],[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,""]));return i}}function Eu(n){return ie(n,"collectionParents")}function Pn(n){return ie(n,"indexEntries")}function rs(n){return ie(n,"indexConfiguration")}function ss(n){return ie(n,"indexState")}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class _e{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new _e(e,_e.DEFAULT_COLLECTION_PERCENTILE,_e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Wt({range:o},(l,h,d)=>(a++,d.delete()));i.push(c.next(()=>{N(a===1)}));const u=[];for(const l of t.mutations){const h=Ud(e,l.key.path,t.batchId);i.push(s.delete(h)),u.push(l.key)}return p.waitFor(i).next(()=>u)}function js(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw b();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_e.DEFAULT_COLLECTION_PERCENTILE=10,_e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_e.DEFAULT=new _e(41943040,_e.DEFAULT_COLLECTION_PERCENTILE,_e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_e.DISABLED=new _e(-1,0,0);class _a{constructor(e,t,r,s){this.userId=e,this.M=t,this.indexManager=r,this.referenceDelegate=s,this.hn={}}static Yt(e,t,r,s){N(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new _a(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Qe(e).Wt({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=Jt(e),o=Qe(e);return o.add({}).next(a=>{N(typeof a=="number");const c=new pa(a,t,r,s),u=function(d,f,m){const S=m.baseMutations.map(R=>Bs(d.Jt,R)),T=m.mutations.map(R=>Bs(d.Jt,R));return{userId:f,batchId:m.batchId,localWriteTimeMs:m.localWriteTime.toMillis(),baseMutations:S,mutations:T}}(this.M,this.userId,c),l=[];let h=new q((d,f)=>O(d.canonicalString(),f.canonicalString()));for(const d of s){const f=Ud(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(i.put(f,Zv))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.hn[a]=c.keys()}),p.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return Qe(e).get(t).next(r=>r?(N(r.userId===this.userId),Wt(this.M,r)):null)}ln(e,t){return this.hn[t]?p.resolve(this.hn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.hn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Qe(e).Wt({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&(N(a.batchId>=r),i=Wt(this.M,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Qe(e).Wt({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Qe(e).qt("userMutationsIndex",t).next(r=>r.map(s=>Wt(this.M,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=fs(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return Jt(e).Wt({range:s},(o,a,c)=>{const[u,l,h]=o,d=Re(l);if(u===this.userId&&t.path.isEqual(d))return Qe(e).get(h).next(f=>{if(!f)throw b();N(f.userId===this.userId),i.push(Wt(this.M,f))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new q(O);const s=[];return t.forEach(i=>{const o=fs(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=Jt(e).Wt({range:a},(u,l,h)=>{const[d,f,m]=u,S=Re(f);d===this.userId&&i.path.isEqual(S)?r=r.add(m):h.done()});s.push(c)}),p.waitFor(s).next(()=>this.fn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=fs(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new q(O);return Jt(e).Wt({range:o},(c,u,l)=>{const[h,d,f]=c,m=Re(d);h===this.userId&&r.isPrefixOf(m)?m.length===s&&(a=a.add(f)):l.done()}).next(()=>this.fn(e,a))}fn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(Qe(e).get(i).next(o=>{if(o===null)throw b();N(o.userId===this.userId),r.push(Wt(this.M,o))}))}),p.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return Kd(e.Ht,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.dn(t.batchId)}),p.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}dn(e){delete this.hn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return p.resolve();const r=IDBKeyRange.lowerBound([this.userId]),s=[];return Jt(e).Wt({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=Re(i[1]);s.push(c)}else a.done()}).next(()=>{N(s.length===0)})})}containsKey(e,t){return Hd(e,this.userId,t)}_n(e){return zd(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Hd(n,e,t){const r=fs(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Jt(n).Wt({range:i,jt:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===s&&(o=!0),u.done()}).next(()=>o)}function Qe(n){return ie(n,"mutations")}function Jt(n){return ie(n,"documentMutations")}function zd(n){return ie(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.wn=e}next(){return this.wn+=2,this.wn}static mn(){return new Mt(0)}static gn(){return new Mt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,t){this.referenceDelegate=e,this.M=t}allocateTargetId(e){return this.yn(e).next(t=>{const r=new Mt(t.highestTargetId);return t.highestTargetId=r.next(),this.pn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.yn(e).next(t=>C.fromTimestamp(new Z(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.yn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.yn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.pn(e,s)))}addTargetData(e,t){return this.In(e,t).next(()=>this.yn(e).next(r=>(r.targetCount+=1,this.Tn(t,r),this.pn(e,r))))}updateTargetData(e,t){return this.In(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ht(e).delete(t.targetId)).next(()=>this.yn(e)).next(r=>(N(r.targetCount>0),r.targetCount-=1,this.pn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return Ht(e).Wt((o,a)=>{const c=qn(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>p.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Ht(e).Wt((r,s)=>{const i=qn(s);t(i)})}yn(e){return Tu(e).get("targetGlobalKey").next(t=>(N(t!==null),t))}pn(e,t){return Tu(e).put("targetGlobalKey",t)}In(e,t){return Ht(e).put(jd(this.M,t))}Tn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.yn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Rt(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Ht(e).Wt({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const u=qn(a);Mr(t,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=et(e);return t.forEach(o=>{const a=ne(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),p.waitFor(s)}removeMatchingKeys(e,t,r){const s=et(e);return p.forEach(t,i=>{const o=ne(i.path);return p.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=et(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=et(e);let i=$();return s.Wt({range:r,jt:!0},(o,a,c)=>{const u=Re(o[1]),l=new _(u);i=i.add(l)}).next(()=>i)}containsKey(e,t){const r=ne(t.path),s=IDBKeyRange.bound([r],[Zh(r)],!1,!0);let i=0;return et(e).Wt({index:"documentTargetsIndex",jt:!0,range:s},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}Et(e,t){return Ht(e).get(t).next(r=>r?qn(r):null)}}function Ht(n){return ie(n,"targets")}function Tu(n){return ie(n,"targetGlobal")}function et(n){return ie(n,"targetDocuments")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(n){if(n.code!==y.FAILED_PRECONDITION||n.message!==$d)throw n;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su([n,e],[t,r]){const s=O(n,t);return s===0?O(e,r):s}class A_{constructor(e){this.En=e,this.buffer=new q(Su),this.An=0}Rn(){return++this.An}bn(e){const t=[e,this.Rn()];if(this.buffer.size<this.En)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Su(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class D_{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.Pn=!1,this.Vn=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.vn(e)}stop(){this.Vn&&(this.Vn.cancel(),this.Vn=null)}get started(){return this.Vn!==null}vn(e){const t=this.Pn?3e5:6e4;v("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Vn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vn=null,this.Pn=!0;try{await e.collectGarbage(this.garbageCollector)}catch(r){$t(r)?v("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",r):await Bt(r)}await this.vn(e)})}}class N_{constructor(e,t){this.Sn=e,this.params=t}calculateTargetCount(e,t){return this.Sn.Dn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return p.resolve(Ee.A);const r=new A_(t);return this.Sn.forEachTarget(e,s=>r.bn(s.sequenceNumber)).next(()=>this.Sn.Cn(e,s=>r.bn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Sn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Sn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(v("LruGarbageCollector","Garbage collection skipped; disabled"),p.resolve(bu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(v("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bu):this.xn(e,t))}getCacheSize(e){return this.Sn.getCacheSize(e)}xn(e,t){let r,s,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(v("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),ho()<=U.DEBUG&&v("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),p.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,t){this.db=e,this.garbageCollector=function(r,s){return new N_(r,s)}(this,t)}Dn(e){const t=this.Nn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Nn(e){let t=0;return this.Cn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Cn(e,t){return this.kn(e,(r,s)=>t(s))}addReference(e,t,r){return is(e,r)}removeReference(e,t,r){return is(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return is(e,t)}Mn(e,t){return function(r,s){let i=!1;return zd(r).zt(o=>Hd(r,o,s).next(a=>(a&&(i=!0),p.resolve(!a)))).next(()=>i)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.kn(e,(o,a)=>{if(a<=t){const c=this.Mn(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,C.min()),et(e).delete([0,ne(o.path)])))});s.push(c)}}).next(()=>p.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return is(e,t)}kn(e,t){const r=et(e);let s,i=Ee.A;return r.Wt({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==Ee.A&&t(new _(Re(s)),i),i=u,s=c):i=Ee.A}).next(()=>{i!==Ee.A&&t(new _(Re(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function is(n,e){return et(n).put(function(t,r){return{targetId:0,path:ne(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(){this.changes=new ft(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,z.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?p.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this.M=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return mt(e).put(r)}removeEntry(e,t,r){return mt(e).delete(function(s,i){const o=s.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],qs(i),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.On(e,r)))}getEntry(e,t){let r=z.newInvalidDocument(t);return mt(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Mn(t))},(s,i)=>{r=this.Fn(t,i)}).next(()=>r)}$n(e,t){let r={size:0,document:z.newInvalidDocument(t)};return mt(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Mn(t))},(s,i)=>{r={document:this.Fn(t,i),size:js(i)}}).next(()=>r)}getEntries(e,t){let r=xe();return this.Bn(e,t,(s,i)=>{const o=this.Fn(s,i);r=r.insert(s,o)}).next(()=>r)}Ln(e,t){let r=xe(),s=new Y(_.comparator);return this.Bn(e,t,(i,o)=>{const a=this.Fn(i,o);r=r.insert(i,a),s=s.insert(i,js(o))}).next(()=>({documents:r,Un:s}))}Bn(e,t,r){if(t.isEmpty())return p.resolve();let s=new q(Au);t.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(Mn(s.first()),Mn(s.last())),o=s.getIterator();let a=o.getNext();return mt(e).Wt({index:"documentKeyIndex",range:i},(c,u,l)=>{const h=_.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Au(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.Ut(Mn(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,t,r){const s=[t.popLast().toArray(),t.lastSegment(),qs(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return mt(e).qt(IDBKeyRange.bound(s,i,!0)).next(o=>{let a=xe();for(const c of o){const u=this.Fn(_.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(u.key,u)}return a})}getAllFromCollectionGroup(e,t,r,s){let i=xe();const o=ku(t,r),a=ku(t,Je.max());return mt(e).Wt({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.Fn(_.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(h.key,h),i.size===s&&l.done()}).next(()=>i)}newChangeBuffer(e){return new O_(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Cu(e).get("remoteDocumentGlobalKey").next(t=>(N(!!t),t))}On(e,t){return Cu(e).put("remoteDocumentGlobalKey",t)}Fn(e,t){if(t){const r=v_(this.M,t);if(!(r.isNoDocument()&&r.version.isEqual(C.min())))return r}return z.newInvalidDocument(e)}}class O_ extends Wd{constructor(e,t){super(),this.qn=e,this.trackRemovals=t,this.Gn=new ft(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new q((i,o)=>O(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Gn.get(i);if(t.push(this.qn.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=mu(this.qn.M,o);s=s.add(i.path.popLast()),r+=js(c)-a.size,t.push(this.qn.addEntry(e,i,c))}else if(r-=a.size,this.trackRemovals){const c=mu(this.qn.M,o.convertToNoDocument(C.min()));t.push(this.qn.addEntry(e,i,c))}}),s.forEach(i=>{t.push(this.qn.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.qn.updateMetadata(e,r)),p.waitFor(t)}getFromCache(e,t){return this.qn.$n(e,t).next(r=>(this.Gn.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.qn.Ln(e,t).next(({documents:r,Un:s})=>(s.forEach((i,o)=>{this.Gn.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function Cu(n){return ie(n,"remoteDocumentGlobal")}function mt(n){return ie(n,"remoteDocumentsV14")}function Mn(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function ku(n,e){const t=e.documentKey.path.toArray();return[n,qs(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Au(n,e){const t=n.path.length-e.path.length;return t!==0?t:_.comparator(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){this.M=e}kt(e,t,r,s){const i=new Ii("createOrUpgrade",t);r<1&&s>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",fu,{unique:!0}),a.createObjectStore("documentMutations")}(e),Du(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=p.resolve();return r<3&&s>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Du(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:C.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").qt().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",fu,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return p.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.Kn(i))),r<6&&s>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Qn(i)))),r<7&&s>=7&&(o=o.next(()=>this.jn(i))),r<8&&s>=8&&(o=o.next(()=>this.Wn(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.zn(i))),r<11&&s>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:h_});c.createIndex("collectionPathOverlayIndex",d_,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",f_,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:e_});c.createIndex("documentKeyIndex",t_),c.createIndex("collectionGroupIndex",n_)}(e)).next(()=>this.Hn(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>{(function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:a_}).createIndex("sequenceNumberIndex",c_,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:u_}).createIndex("documentKeyIndex",l_,{unique:!1})})(e)})),o}Qn(e){let t=0;return e.store("remoteDocuments").Wt((r,s)=>{t+=js(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Kn(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.qt().next(s=>p.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.qt("userMutationsIndex",o).next(a=>p.forEach(a,c=>{N(c.userId===i.userId);const u=Wt(this.M,c);return Kd(e,i.userId,u).next(()=>{})}))}))}jn(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.Wt((o,a)=>{const c=new F(o),u=function(l){return[0,ne(l)]}(c);i.push(t.get(u).next(l=>l?p.resolve():(h=>t.put({targetId:0,path:ne(h),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>p.waitFor(i))})}Wn(e,t){e.createObjectStore("collectionParents",{keyPath:o_});const r=t.store("collectionParents"),s=new va,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:ne(c)})}};return t.store("remoteDocuments").Wt({jt:!0},(o,a)=>{const c=new F(o);return i(c.popLast())}).next(()=>t.store("documentMutations").Wt({jt:!0},([o,a,c],u)=>{const l=Re(a);return i(l.popLast())}))}zn(e){const t=e.store("targets");return t.Wt((r,s)=>{const i=qn(s),o=jd(this.M,i);return t.put(o)})}Hn(e,t){const r=t.store("remoteDocuments"),s=[];return r.Wt((i,o)=>{const a=t.store("remoteDocumentsV14"),c=(u=o,u.document?new _(F.fromString(u.document.name).popFirst(5)):u.noDocument?_.fromSegments(u.noDocument.path):u.unknownDocument?_.fromSegments(u.unknownDocument.path):b()).path.toArray();var u;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(l))}).next(()=>p.waitFor(s))}}function Du(n){n.createObjectStore("targetDocuments",{keyPath:s_}).createIndex("documentTargetsIndex",i_,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",r_,{unique:!0}),n.createObjectStore("targetGlobal")}const Bi="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class wa{constructor(e,t,r,s,i,o,a,c,u,l,h=13){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Jn=i,this.window=o,this.document=a,this.Yn=u,this.Xn=l,this.Zn=h,this.ts=null,this.es=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ns=null,this.inForeground=!1,this.ss=null,this.rs=null,this.os=Number.NEGATIVE_INFINITY,this.us=d=>Promise.resolve(),!wa.vt())throw new I(y.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new x_(this,s),this.cs=t+"main",this.M=new qd(c),this.hs=new Ge(this.cs,this.Zn,new P_(this.M)),this.ls=new k_(this.referenceDelegate,this.M),this.fs=function(d){return new R_(d)}(this.M),this.ds=new __,this.window&&this.window.localStorage?this._s=this.window.localStorage:(this._s=null,l===!1&&X("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ws().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new I(y.FAILED_PRECONDITION,Bi);return this.gs(),this.ys(),this.ps(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ls.getHighestSequenceNumber(e))}).then(e=>{this.ts=new Ee(e,this.Yn)}).then(()=>{this.es=!0}).catch(e=>(this.hs&&this.hs.close(),Promise.reject(e)))}Is(e){return this.us=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.hs.Ot(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Jn.enqueueAndForget(async()=>{this.started&&await this.ws()}))}ws(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>os(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ts(e).next(t=>{t||(this.isPrimary=!1,this.Jn.enqueueRetryable(()=>this.us(!1)))})}).next(()=>this.Es(e)).next(t=>this.isPrimary&&!t?this.As(e).next(()=>!1):!!t&&this.Rs(e).next(()=>!0))).catch(e=>{if($t(e))return v("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return v("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Jn.enqueueRetryable(()=>this.us(e)),this.isPrimary=e})}Ts(e){return Ln(e).get("owner").next(t=>p.resolve(this.bs(t)))}Ps(e){return os(e).delete(this.clientId)}async Vs(){if(this.isPrimary&&!this.vs(this.os,18e5)){this.os=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=ie(t,"clientMetadata");return r.qt().next(s=>{const i=this.Ss(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return p.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._s)for(const t of e)this._s.removeItem(this.Ds(t.clientId))}}ps(){this.rs=this.Jn.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ws().then(()=>this.Vs()).then(()=>this.ps()))}bs(e){return!!e&&e.ownerId===this.clientId}Es(e){return this.Xn?p.resolve(!0):Ln(e).get("owner").next(t=>{if(t!==null&&this.vs(t.leaseTimestampMs,5e3)&&!this.Cs(t.ownerId)){if(this.bs(t)&&this.networkEnabled)return!0;if(!this.bs(t)){if(!t.allowTabSynchronization)throw new I(y.FAILED_PRECONDITION,Bi);return!1}}return!(!this.networkEnabled||!this.inForeground)||os(e).qt().next(r=>this.Ss(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&v("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.es=!1,this.xs(),this.rs&&(this.rs.cancel(),this.rs=null),this.Ns(),this.ks(),await this.hs.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new gu(e,Ee.A);return this.As(t).next(()=>this.Ps(t))}),this.hs.close(),this.Ms()}Ss(e,t){return e.filter(r=>this.vs(r.updateTimeMs,t)&&!this.Cs(r.clientId))}Os(){return this.runTransaction("getActiveClients","readonly",e=>os(e).qt().next(t=>this.Ss(t,18e5).map(r=>r.clientId)))}get started(){return this.es}getMutationQueue(e,t){return _a.Yt(e,this.M,t,this.referenceDelegate)}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getIndexManager(e){return new C_(e)}getDocumentOverlayCache(e){return ya.Yt(this.M,e)}getBundleCache(){return this.ds}runTransaction(e,t,r){v("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(o=this.Zn)===14?g_:o===13?Fd:o===12?p_:o===11?Vd:void b();var o;let a;return this.hs.runTransaction(e,s,i,c=>(a=new gu(c,this.ts?this.ts.next():Ee.A),t==="readwrite-primary"?this.Ts(a).next(u=>!!u||this.Es(a)).next(u=>{if(!u)throw X(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Jn.enqueueRetryable(()=>this.us(!1)),new I(y.FAILED_PRECONDITION,$d);return r(a)}).next(u=>this.Rs(a).next(()=>u)):this.Fs(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Fs(e){return Ln(e).get("owner").next(t=>{if(t!==null&&this.vs(t.leaseTimestampMs,5e3)&&!this.Cs(t.ownerId)&&!this.bs(t)&&!(this.Xn||this.allowTabSynchronization&&t.allowTabSynchronization))throw new I(y.FAILED_PRECONDITION,Bi)})}Rs(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ln(e).put("owner",t)}static vt(){return Ge.vt()}As(e){const t=Ln(e);return t.get("owner").next(r=>this.bs(r)?(v("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):p.resolve())}vs(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(X(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gs(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ss=()=>{this.Jn.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ws()))},this.document.addEventListener("visibilitychange",this.ss),this.inForeground=this.document.visibilityState==="visible")}Ns(){this.ss&&(this.document.removeEventListener("visibilitychange",this.ss),this.ss=null)}ys(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ns=()=>{this.xs(),Vg()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Jn.enterRestrictedMode(!0),this.Jn.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ns))}ks(){this.ns&&(this.window.removeEventListener("pagehide",this.ns),this.ns=null)}Cs(e){var t;try{const r=((t=this._s)===null||t===void 0?void 0:t.getItem(this.Ds(e)))!==null;return v("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return X("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xs(){if(this._s)try{this._s.setItem(this.Ds(this.clientId),String(Date.now()))}catch(e){X("Failed to set zombie client id.",e)}}Ms(){if(this._s)try{this._s.removeItem(this.Ds(this.clientId))}catch{}}Ds(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ln(n){return ie(n,"owner")}function os(n){return ie(n,"clientMetadata")}function Jd(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,t,r){this.fs=e,this.$s=t,this.indexManager=r}Bs(e,t){return this.$s.getAllMutationBatchesAffectingDocumentKey(e,t).next(r=>this.Ls(e,t,r))}Ls(e,t,r){return this.fs.getEntry(e,t).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}Us(e,t){e.forEach((r,s)=>{for(const i of t)i.applyToLocalView(s)})}qs(e,t){return this.fs.getEntries(e,t).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,t){return this.$s.getAllMutationBatchesAffectingDocumentKeys(e,t).next(r=>this.Us(t,r))}Ks(e,t,r){return function(s){return _.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.Qs(e,t.path):Iv(t)?this.js(e,t,r):this.Ws(e,t,r)}Qs(e,t){return this.Bs(e,new _(t)).next(r=>{let s=_o();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}js(e,t,r){const s=t.collectionGroup;let i=_o();return this.indexManager.getCollectionParents(e,s).next(o=>p.forEach(o,a=>{const c=function(u,l){return new Lr(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(s));return this.Ws(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}Ws(e,t,r){let s;return this.fs.getAllFromCollection(e,t.path,r).next(i=>(s=i,this.$s.getAllMutationBatchesAffectingQuery(e,t))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let u=s.get(c);u==null&&(u=z.newInvalidDocument(c),s=s.insert(c,u)),vo(a,u,o.localWriteTime),u.isFoundDocument()||(s=s.remove(c))}}).next(()=>(s.forEach((i,o)=>{ha(t,o)||(s=s.remove(i))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.zs=r,this.Hs=s}static Js(e,t){let r=$(),s=$();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ia(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{Ys(e){this.Xs=e}Ks(e,t,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(t)||r.isEqual(C.min())?this.Zs(e,t):this.Xs.qs(e,s).next(i=>{const o=this.ti(t,i);return(ls(t)||Fs(t))&&this.ei(t.limitType,o,s,r)?this.Zs(e,t):(ho()<=U.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),yo(t)),this.Xs.Ks(e,t,ad(r,-1)).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}ti(e,t){let r=new q(pd(e));return t.forEach((s,i)=>{ha(e,i)&&(r=r.add(i))}),r}ei(e,t,r,s){if(r.size!==t.size)return!0;const i=e==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Zs(e,t){return ho()<=U.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",yo(t)),this.Xs.Ks(e,t,Je.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,t,r,s){this.persistence=e,this.ni=t,this.M=s,this.si=new Y(O),this.ii=new ft(i=>Rt(i),Mr),this.ri=new Map,this.oi=e.getRemoteDocumentCache(),this.ls=e.getTargetCache(),this.ds=e.getBundleCache(),this.ui(r)}ui(e){this.indexManager=this.persistence.getIndexManager(e),this.$s=this.persistence.getMutationQueue(e,this.indexManager),this.ai=new M_(this.oi,this.$s,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ai)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.si))}}function Qd(n,e,t,r){return new L_(n,e,t,r)}async function Xd(n,e){const t=E(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.$s.getAllMutationBatches(r).next(i=>(s=i,t.ui(e),t.$s.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=$();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.ai.qs(r,c).next(u=>({ci:u,removedBatchIds:o,addedBatchIds:a}))})})}function U_(n,e){const t=E(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.oi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=p.resolve();return h.forEach(f=>{d=d.next(()=>u.getEntry(a,f)).next(m=>{const S=c.docVersions.get(f);N(S!==null),m.version.compareTo(S)<0&&(l.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),d.next(()=>o.$s.removeMutationBatch(a,l))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.$s.performConsistencyCheck(r)).next(()=>t.ai.qs(r,s))})}function Zd(n){const e=E(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ls.getLastRemoteSnapshotVersion(t))}function V_(n,e){const t=E(n),r=e.snapshotVersion;let s=t.si;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.oi.newChangeBuffer({trackRemovals:!0});s=t.si;const a=[];e.targetChanges.forEach((u,l)=>{const h=s.get(l);if(!h)return;a.push(t.ls.removeMatchingKeys(i,u.removedDocuments,l).next(()=>t.ls.addMatchingKeys(i,u.addedDocuments,l)));let d=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(l)?d=d.withResumeToken(se.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(l,d),function(f,m,S){return f.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-f.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(h,d,u)&&a.push(t.ls.updateTargetData(i,d))});let c=xe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(F_(i,o,e.documentUpdates).next(u=>{c=u})),!r.isEqual(C.min())){const u=t.ls.getLastRemoteSnapshotVersion(i).next(l=>t.ls.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return p.waitFor(a).next(()=>o.apply(i)).next(()=>t.ai.Gs(i,c)).next(()=>c)}).then(i=>(t.si=s,i))}function F_(n,e,t){let r=$();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let i=xe();return t.forEach((o,a)=>{const c=s.get(o);a.isNoDocument()&&a.version.isEqual(C.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):v("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function $_(n,e){const t=E(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.$s.getNextMutationBatchAfterBatchId(r,e)))}function Gs(n,e){const t=E(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.ls.getTargetData(r,e).next(i=>i?(s=i,p.resolve(s)):t.ls.allocateTargetId(r).next(o=>(s=new it(e,o,0,r.currentSequenceNumber),t.ls.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.si.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.si=t.si.insert(r.targetId,r),t.ii.set(e,r.targetId)),r})}async function mn(n,e,t){const r=E(n),s=r.si.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!$t(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.si=r.si.remove(e),r.ii.delete(s.target)}function bo(n,e,t){const r=E(n);let s=C.min(),i=$();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=E(a),h=l.ii.get(u);return h!==void 0?p.resolve(l.si.get(h)):l.ls.getTargetData(c,u)}(r,o,$e(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.ls.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ni.Ks(o,e,t?s:C.min(),t?i:$())).next(a=>(nf(r,fd(e),a),{documents:a,hi:i})))}function ef(n,e){const t=E(n),r=E(t.ls),s=t.si.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.Et(i,e).next(o=>o?o.target:null))}function tf(n,e){const t=E(n),r=t.ri.get(e)||C.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.oi.getAllFromCollectionGroup(s,e,ad(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(nf(t,e,s),s))}function nf(n,e,t){let r=C.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ri.set(e,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){this.M=e,this._i=new Map,this.wi=new Map}getBundleMetadata(e,t){return p.resolve(this._i.get(t))}saveBundleMetadata(e,t){var r;return this._i.set(t.id,{id:(r=t).id,version:r.version,createTime:be(r.createTime)}),p.resolve()}getNamedQuery(e,t){return p.resolve(this.wi.get(t))}saveNamedQuery(e,t){return this.wi.set(t.name,function(r){return{name:r.name,query:Gd(r.bundledQuery),readTime:be(r.readTime)}}(t)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(){this.overlays=new Y(_.comparator),this.mi=new Map}getOverlay(e,t){return p.resolve(this.overlays.get(t))}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Xt(e,t,i)}),p.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.mi.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.mi.delete(r)),p.resolve()}getOverlaysForCollection(e,t,r){const s=Jn(),i=t.length+1,o=new _(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return p.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Y((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=Jn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Jn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return p.resolve(a)}Xt(e,t,r){if(r===null)return;const s=this.overlays.get(r.key);if(s!==null){const o=this.mi.get(s.largestBatchId).delete(r.key);this.mi.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ma(t,r));let i=this.mi.get(t);i===void 0&&(i=$(),this.mi.set(t,i)),this.mi.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this.gi=new q(te.yi),this.pi=new q(te.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(e,t){const r=new te(e,t);this.gi=this.gi.add(r),this.pi=this.pi.add(r)}Ti(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ei(new te(e,t))}Ai(e,t){e.forEach(r=>this.removeReference(r,t))}Ri(e){const t=new _(new F([])),r=new te(t,e),s=new te(t,e+1),i=[];return this.pi.forEachInRange([r,s],o=>{this.Ei(o),i.push(o.key)}),i}bi(){this.gi.forEach(e=>this.Ei(e))}Ei(e){this.gi=this.gi.delete(e),this.pi=this.pi.delete(e)}Pi(e){const t=new _(new F([])),r=new te(t,e),s=new te(t,e+1);let i=$();return this.pi.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new te(e,0),r=this.gi.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class te{constructor(e,t){this.key=e,this.Vi=t}static yi(e,t){return _.comparator(e.key,t.key)||O(e.Vi,t.Vi)}static Ii(e,t){return O(e.Vi,t.Vi)||_.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.$s=[],this.vi=1,this.Si=new q(te.yi)}checkEmpty(e){return p.resolve(this.$s.length===0)}addMutationBatch(e,t,r,s){const i=this.vi;this.vi++,this.$s.length>0&&this.$s[this.$s.length-1];const o=new pa(i,t,r,s);this.$s.push(o);for(const a of s)this.Si=this.Si.add(new te(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,t){return p.resolve(this.Di(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Ci(r),i=s<0?0:s;return p.resolve(this.$s.length>i?this.$s[i]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.$s.length===0?-1:this.vi-1)}getAllMutationBatches(e){return p.resolve(this.$s.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new te(t,0),s=new te(t,Number.POSITIVE_INFINITY),i=[];return this.Si.forEachInRange([r,s],o=>{const a=this.Di(o.Vi);i.push(a)}),p.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new q(O);return t.forEach(s=>{const i=new te(s,0),o=new te(s,Number.POSITIVE_INFINITY);this.Si.forEachInRange([i,o],a=>{r=r.add(a.Vi)})}),p.resolve(this.xi(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;_.isDocumentKey(i)||(i=i.child(""));const o=new te(new _(i),0);let a=new q(O);return this.Si.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.Vi)),!0)},o),p.resolve(this.xi(a))}xi(e){const t=[];return e.forEach(r=>{const s=this.Di(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){N(this.Ni(t.batchId,"removed")===0),this.$s.shift();let r=this.Si;return p.forEach(t.mutations,s=>{const i=new te(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Si=r})}dn(e){}containsKey(e,t){const r=new te(t,0),s=this.Si.firstAfterOrEqual(r);return p.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.$s.length,p.resolve()}Ni(e,t){return this.Ci(e)}Ci(e){return this.$s.length===0?0:e-this.$s[0].batchId}Di(e){const t=this.Ci(e);return t<0||t>=this.$s.length?null:this.$s[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.ki=e,this.docs=new Y(_.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ki(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return p.resolve(r?r.document.mutableCopy():z.newInvalidDocument(t))}getEntries(e,t){let r=xe();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():z.newInvalidDocument(s))}),p.resolve(r)}getAllFromCollection(e,t,r){let s=xe();const i=new _(t.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||lv(uv(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return p.resolve(s)}getAllFromCollectionGroup(e,t,r,s){b()}Mi(e,t){return p.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new K_(this)}getSize(e){return p.resolve(this.size)}}class K_ extends Wd{constructor(e){super(),this.qn=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.qn.addEntry(e,s)):this.qn.removeEntry(r)}),p.waitFor(t)}getFromCache(e,t){return this.qn.getEntry(e,t)}getAllFromCache(e,t){return this.qn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this.persistence=e,this.Oi=new ft(t=>Rt(t),Mr),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.Fi=0,this.$i=new Ea,this.targetCount=0,this.Bi=Mt.mn()}forEachTarget(e,t){return this.Oi.forEach((r,s)=>t(s)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.Fi)}allocateTargetId(e){return this.highestTargetId=this.Bi.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Fi&&(this.Fi=t),p.resolve()}In(e){this.Oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Bi=new Mt(t),this.highestTargetId=t),e.sequenceNumber>this.Fi&&(this.Fi=e.sequenceNumber)}addTargetData(e,t){return this.In(t),this.targetCount+=1,p.resolve()}updateTargetData(e,t){return this.In(t),p.resolve()}removeTargetData(e,t){return this.Oi.delete(t.target),this.$i.Ri(t.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Oi.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),p.waitFor(i).next(()=>s)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,t){const r=this.Oi.get(t)||null;return p.resolve(r)}addMatchingKeys(e,t,r){return this.$i.Ti(t,r),p.resolve()}removeMatchingKeys(e,t,r){this.$i.Ai(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),p.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.$i.Ri(t),p.resolve()}getMatchingKeysForTargetId(e,t){const r=this.$i.Pi(t);return p.resolve(r)}containsKey(e,t){return p.resolve(this.$i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,t){this.Li={},this.overlays={},this.ts=new Ee(0),this.es=!1,this.es=!0,this.referenceDelegate=e(this),this.ls=new H_(this),this.indexManager=new S_,this.fs=function(r){return new G_(r)}(r=>this.referenceDelegate.Ui(r)),this.M=new qd(t),this.ds=new B_(this.M)}start(){return Promise.resolve()}shutdown(){return this.es=!1,Promise.resolve()}get started(){return this.es}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new q_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Li[e.toKey()];return r||(r=new j_(t,this.referenceDelegate),this.Li[e.toKey()]=r),r}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getBundleCache(){return this.ds}runTransaction(e,t,r){v("MemoryPersistence","Starting transaction:",e);const s=new W_(this.ts.next());return this.referenceDelegate.qi(),r(s).next(i=>this.referenceDelegate.Gi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ki(e,t){return p.or(Object.values(this.Li).map(r=>()=>r.containsKey(e,t)))}}class W_ extends Bd{constructor(e){super(),this.currentSequenceNumber=e}}class ba{constructor(e){this.persistence=e,this.Qi=new Ea,this.ji=null}static Wi(e){return new ba(e)}get zi(){if(this.ji)return this.ji;throw b()}addReference(e,t,r){return this.Qi.addReference(r,t),this.zi.delete(r.toString()),p.resolve()}removeReference(e,t,r){return this.Qi.removeReference(r,t),this.zi.add(r.toString()),p.resolve()}markPotentiallyOrphaned(e,t){return this.zi.add(t.toString()),p.resolve()}removeTarget(e,t){this.Qi.Ri(t.targetId).forEach(s=>this.zi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.zi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}qi(){this.ji=new Set}Gi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.zi,r=>{const s=_.fromPath(r);return this.Hi(e,s).next(i=>{i||t.removeEntry(s,C.min())})}).next(()=>(this.ji=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hi(e,t).next(r=>{r?this.zi.delete(t.toString()):this.zi.add(t.toString())})}Ui(e){return 0}Hi(e,t){return p.or([()=>p.resolve(this.Qi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ki(e,t)])}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(n,e){return`firestore_clients_${n}_${e}`}function xu(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function qi(n,e){return`firestore_targets_${n}_${e}`}class Ks{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Ji(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new I(s.error.code,s.error.message))),o?new Ks(e,t,s.state,i):(X("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Qn{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ji(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new I(r.error.code,r.error.message))),i?new Qn(e,r.state,s):(X("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Hs{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ji(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=wi();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=rd(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new Hs(e,i):(X("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Ta{constructor(e,t){this.clientId=e,this.onlineState=t}static Ji(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Ta(t.clientId,t.onlineState):(X("SharedClientState",`Failed to parse online state: ${e}`),null)}}class To{constructor(){this.activeTargetIds=wi()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ji{constructor(e,t,r,s,i){this.window=e,this.Jn=t,this.persistenceKey=r,this.tr=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new Y(O),this.started=!1,this.ir=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.rr=Nu(this.persistenceKey,this.tr),this.ur=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.sr=this.sr.insert(this.tr,new To),this.ar=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.cr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.hr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.lr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.dr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.er)}static vt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Os();for(const r of e){if(r===this.tr)continue;const s=this.getItem(Nu(this.persistenceKey,r));if(s){const i=Hs.Ji(r,s);i&&(this.sr=this.sr.insert(i.clientId,i))}}this._r();const t=this.storage.getItem(this.lr);if(t){const r=this.wr(t);r&&this.mr(r)}for(const r of this.ir)this.nr(r);this.ir=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ur,JSON.stringify(e))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(e){let t=!1;return this.sr.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.yr(e,"pending")}updateMutationState(e,t,r){this.yr(e,t,r),this.pr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(qi(this.persistenceKey,e));if(r){const s=Qn.Ji(e,r);s&&(t=s.state)}}return this.Ir.Xi(e),this._r(),t}removeLocalQueryTarget(e){this.Ir.Zi(e),this._r()}isLocalQueryTarget(e){return this.Ir.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(qi(this.persistenceKey,e))}updateQueryState(e,t,r){this.Tr(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.pr(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Er(e)}notifyBundleLoaded(e){this.Ar(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return v("SharedClientState","READ",e,t),t}setItem(e,t){v("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){v("SharedClientState","REMOVE",e),this.storage.removeItem(e)}nr(e){const t=e;if(t.storageArea===this.storage){if(v("SharedClientState","EVENT",t.key,t.newValue),t.key===this.rr)return void X("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Jn.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.ar.test(t.key)){if(t.newValue==null){const r=this.Rr(t.key);return this.br(r,null)}{const r=this.Pr(t.key,t.newValue);if(r)return this.br(r.clientId,r)}}else if(this.cr.test(t.key)){if(t.newValue!==null){const r=this.Vr(t.key,t.newValue);if(r)return this.vr(r)}}else if(this.hr.test(t.key)){if(t.newValue!==null){const r=this.Sr(t.key,t.newValue);if(r)return this.Dr(r)}}else if(t.key===this.lr){if(t.newValue!==null){const r=this.wr(t.newValue);if(r)return this.mr(r)}}else if(t.key===this.ur){const r=function(s){let i=Ee.A;if(s!=null)try{const o=JSON.parse(s);N(typeof o=="number"),i=o}catch(o){X("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(t.newValue);r!==Ee.A&&this.sequenceNumberHandler(r)}else if(t.key===this.dr){const r=this.Cr(t.newValue);await Promise.all(r.map(s=>this.syncEngine.Nr(s)))}}}else this.ir.push(t)})}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(e,t,r){const s=new Ks(this.currentUser,e,t,r),i=xu(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Yi())}pr(e){const t=xu(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Er(e){const t={clientId:this.tr,onlineState:e};this.storage.setItem(this.lr,JSON.stringify(t))}Tr(e,t,r){const s=qi(this.persistenceKey,e),i=new Qn(e,t,r);this.setItem(s,i.Yi())}Ar(e){const t=JSON.stringify(Array.from(e));this.setItem(this.dr,t)}Rr(e){const t=this.ar.exec(e);return t?t[1]:null}Pr(e,t){const r=this.Rr(e);return Hs.Ji(r,t)}Vr(e,t){const r=this.cr.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return Ks.Ji(new oe(i),s,t)}Sr(e,t){const r=this.hr.exec(e),s=Number(r[1]);return Qn.Ji(s,t)}wr(e){return Ta.Ji(e)}Cr(e){return JSON.parse(e)}async vr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.kr(e.batchId,e.state,e.error);v("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Dr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}br(e,t){const r=t?this.sr.insert(e,t):this.sr.remove(e),s=this.gr(this.sr),i=this.gr(r),o=[],a=[];return i.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.Or(o,a).then(()=>{this.sr=r})}mr(e){this.sr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}gr(e){let t=wi();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class rf{constructor(){this.Fr=new To,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,t,r){this.$r[e]=t}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new To,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Gr(),this.Kr=[],this.Qr()}Br(e){this.Kr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Kr)e(0)}Gr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Kr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.so=t+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,t,r,s,i){const o=this.oo(e,t);v("RestConnection","Sending: ",o,r);const a={};return this.uo(a,s,i),this.ao(e,o,a,r).then(c=>(v("RestConnection","Received: ",c),c),c=>{throw fo("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}co(e,t,r,s,i){return this.ro(e,t,r,s,i)}uo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Tn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}oo(e,t){const r=Y_[e];return`${this.so}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}ao(e,t,r,s){return new Promise((i,o)=>{const a=new Yy;a.listenOnce(zy.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Fi.NO_ERROR:const u=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Fi.TIMEOUT:v("Connection",'RPC "'+e+'" timed out'),o(new I(y.DEADLINE_EXCEEDED,"Request time out"));break;case Fi.HTTP_ERROR:const l=a.getStatus();if(v("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const m=f.toLowerCase().replace(/_/g,"-");return Object.values(y).indexOf(m)>=0?m:y.UNKNOWN}(h.status);o(new I(d,h.message))}else o(new I(y.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new I(y.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{v("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(t,"POST",c,r,15)})}ho(e,t,r){const s=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Ky(),o=Hy(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Jy({})),this.uo(a.initMessageHeaders,t,r),Fl()||Bl()||Lg()||ql()||Ug()||$l()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");v("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new Q_({jr:m=>{h?v("Connection","Not sending because WebChannel is closed:",m):(l||(v("Connection","Opening WebChannel transport."),u.open(),l=!0),v("Connection","WebChannel sending:",m),u.send(m))},Wr:()=>u.close()}),f=(m,S,T)=>{m.listen(S,R=>{try{T(R)}catch(k){setTimeout(()=>{throw k},0)}})};return f(u,Xr.EventType.OPEN,()=>{h||v("Connection","WebChannel transport opened.")}),f(u,Xr.EventType.CLOSE,()=>{h||(h=!0,v("Connection","WebChannel transport closed"),d.eo())}),f(u,Xr.EventType.ERROR,m=>{h||(h=!0,fo("Connection","WebChannel transport errored:",m),d.eo(new I(y.UNAVAILABLE,"The operation could not be completed")))}),f(u,Xr.EventType.MESSAGE,m=>{var S;if(!h){const T=m.data[0];N(!!T);const R=T,k=R.error||((S=R[0])===null||S===void 0?void 0:S.error);if(k){v("Connection","WebChannel received error:",k);const j=k.status;let P=function(L){const De=Q[L];if(De!==void 0)return Sd(De)}(j),B=k.message;P===void 0&&(P=y.INTERNAL,B="Unknown error status: "+j+" with message "+k.message),h=!0,d.eo(new I(P,B)),u.close()}else v("Connection","WebChannel received:",T),d.no(T)}}),f(o,Wy.STAT_EVENT,m=>{m.stat===qc.PROXY?v("Connection","Detected buffering proxy"):m.stat===qc.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(){return typeof window!="undefined"?window:null}function ps(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(n){return new Bv(n,!0)}class of{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Jn=e,this.timerId=t,this.lo=r,this.fo=s,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const t=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),s=Math.max(0,t-r);s>0&&v("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,s,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,t,r,s,i,o,a,c){this.Jn=e,this.Ao=r,this.Ro=s,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.Vo=null,this.vo=null,this.stream=null,this.So=new of(e,t)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.Vo===null&&(this.Vo=this.Jn.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}async close(e,t){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():t&&t.code===y.RESOURCE_EXHAUSTED?(X(t.toString()),X("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):t&&t.code===y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(t)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),t=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Po===t&&this.Uo(r,s)},r=>{e(()=>{const s=new I(y.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(s)})})}Uo(e,t){const r=this.Lo(this.Po);this.stream=this.Go(e,t),this.stream.zr(()=>{r(()=>(this.state=2,this.vo=this.Jn.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(s=>{r(()=>this.qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return t=>{this.Jn.enqueueAndForget(()=>this.Po===e?t():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Z_ extends af{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.M=i}Go(e,t){return this.bo.ho("Listen",e,t)}onMessage(e){this.So.reset();const t=Gv(this.M,e),r=function(s){if(!("targetChange"in s))return C.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?C.min():i.readTime?be(i.readTime):C.min()}(e);return this.listener.Ko(t,r)}Qo(e){const t={};t.database=Io(this.M),t.addTarget=function(s,i){let o;const a=i.target;return o=Vs(a)?{documents:Rd(s,a)}:{query:Od(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Ad(s,i.resumeToken):i.snapshotVersion.compareTo(C.min())>0&&(o.readTime=fr(s,i.snapshotVersion.toTimestamp())),o}(this.M,e);const r=Hv(this.M,e);r&&(t.labels=r),this.Oo(t)}jo(e){const t={};t.database=Io(this.M),t.removeTarget=e,this.Oo(t)}}class ew extends af{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.M=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Go(e,t){return this.bo.ho("Write",e,t)}onMessage(e){if(N(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const t=Kv(e.writeResults,e.commitTime),r=be(e.commitTime);return this.listener.Jo(r,t)}return N(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Io(this.M),this.Oo(e)}Ho(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Bs(this.M,r))};this.Oo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=r,this.M=s,this.Zo=!1}tu(){if(this.Zo)throw new I(y.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,t,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ro(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new I(y.UNKNOWN,s.toString())})}co(e,t,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.co(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new I(y.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class nw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.au(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.au(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(X(t),this.su=!1):v("OnlineStateTracker",t)}au(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.cu=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{r.enqueueAndForget(async()=>{qt(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=E(a);c.lu.add(4),await $r(c),c._u.set("Unknown"),c.lu.delete(4),await bi(c)}(this))})}),this._u=new nw(r,s)}}async function bi(n){if(qt(n))for(const e of n.fu)await e(!0)}async function $r(n){for(const e of n.fu)await e(!1)}function Ti(n,e){const t=E(n);t.hu.has(e.targetId)||(t.hu.set(e.targetId,e),ka(t)?Ca(t):Dn(t).Co()&&Sa(t,e))}function pr(n,e){const t=E(n),r=Dn(t);t.hu.delete(e),r.Co()&&cf(t,e),t.hu.size===0&&(r.Co()?r.ko():qt(t)&&t._u.set("Unknown"))}function Sa(n,e){n.wu.Z(e.targetId),Dn(n).Qo(e)}function cf(n,e){n.wu.Z(e),Dn(n).jo(e)}function Ca(n){n.wu=new Vv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.hu.get(e)||null}),Dn(n).start(),n._u.iu()}function ka(n){return qt(n)&&!Dn(n).Do()&&n.hu.size>0}function qt(n){return E(n).lu.size===0}function uf(n){n.wu=void 0}async function sw(n){n.hu.forEach((e,t)=>{Sa(n,e)})}async function iw(n,e){uf(n),ka(n)?(n._u.uu(e),Ca(n)):n._u.set("Unknown")}async function ow(n,e,t){if(n._u.set("Online"),e instanceof kd&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.hu.delete(o),r.wu.removeTarget(o))}(n,e)}catch(r){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await zs(n,r)}else if(e instanceof ds?n.wu.ut(e):e instanceof Cd?n.wu._t(e):n.wu.ht(e),!t.isEqual(C.min()))try{const r=await Zd(n.localStore);t.compareTo(r)>=0&&await function(s,i){const o=s.wu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.hu.get(c);u&&s.hu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.hu.get(a);if(!c)return;s.hu.set(a,c.withResumeToken(se.EMPTY_BYTE_STRING,c.snapshotVersion)),cf(s,a);const u=new it(c.target,a,1,c.sequenceNumber);Sa(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){v("RemoteStore","Failed to raise snapshot:",r),await zs(n,r)}}async function zs(n,e,t){if(!$t(e))throw e;n.lu.add(1),await $r(n),n._u.set("Offline"),t||(t=()=>Zd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await t(),n.lu.delete(1),await bi(n)})}function lf(n,e){return e().catch(t=>zs(n,t,e))}async function An(n){const e=E(n),t=lt(e);let r=e.cu.length>0?e.cu[e.cu.length-1].batchId:-1;for(;aw(e);)try{const s=await $_(e.localStore,r);if(s===null){e.cu.length===0&&t.ko();break}r=s.batchId,cw(e,s)}catch(s){await zs(e,s)}hf(e)&&df(e)}function aw(n){return qt(n)&&n.cu.length<10}function cw(n,e){n.cu.push(e);const t=lt(n);t.Co()&&t.zo&&t.Ho(e.mutations)}function hf(n){return qt(n)&&!lt(n).Do()&&n.cu.length>0}function df(n){lt(n).start()}async function uw(n){lt(n).Xo()}async function lw(n){const e=lt(n);for(const t of n.cu)e.Ho(t.mutations)}async function hw(n,e,t){const r=n.cu.shift(),s=ga.from(r,e,t);await lf(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await An(n)}async function dw(n,e){e&&lt(n).zo&&await async function(t,r){if(s=r.code,Rv(s)&&s!==y.ABORTED){const i=t.cu.shift();lt(t).No(),await lf(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,r)),await An(t)}var s}(n,e),hf(n)&&df(n)}async function Ou(n,e){const t=E(n);t.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const r=qt(t);t.lu.add(3),await $r(t),r&&t._u.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.lu.delete(3),await bi(t)}async function So(n,e){const t=E(n);e?(t.lu.delete(2),await bi(t)):e||(t.lu.add(2),await $r(t),t._u.set("Unknown"))}function Dn(n){return n.mu||(n.mu=function(e,t,r){const s=E(e);return s.tu(),new Z_(t,s.bo,s.authCredentials,s.appCheckCredentials,s.M,r)}(n.datastore,n.asyncQueue,{zr:sw.bind(null,n),Jr:iw.bind(null,n),Ko:ow.bind(null,n)}),n.fu.push(async e=>{e?(n.mu.No(),ka(n)?Ca(n):n._u.set("Unknown")):(await n.mu.stop(),uf(n))})),n.mu}function lt(n){return n.gu||(n.gu=function(e,t,r){const s=E(e);return s.tu(),new ew(t,s.bo,s.authCredentials,s.appCheckCredentials,s.M,r)}(n.datastore,n.asyncQueue,{zr:uw.bind(null,n),Jr:dw.bind(null,n),Yo:lw.bind(null,n),Jo:hw.bind(null,n)}),n.fu.push(async e=>{e?(n.gu.No(),await An(n)):(await n.gu.stop(),n.cu.length>0&&(v("RemoteStore",`Stopping write stream with ${n.cu.length} pending writes`),n.cu=[]))})),n.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ze,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new Aa(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Da(n,e){if(X("AsyncQueue",`${e}: ${n}`),$t(n))return new I(y.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||_.comparator(t.key,r.key):(t,r)=>_.comparator(t.key,r.key),this.keyedMap=_o(),this.sortedSet=new Y(this.comparator)}static emptySet(e){return new rn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new rn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(){this.yu=new Y(_.comparator)}track(e){const t=e.doc.key,r=this.yu.get(t);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(t,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(t):e.type===1&&r.type===2?this.yu=this.yu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):b():this.yu=this.yu.insert(t,e)}pu(){const e=[];return this.yu.inorderTraversal((t,r)=>{e.push(r)}),e}}class yn{constructor(e,t,r,s,i,o,a,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,t,r,s){const i=[];return t.forEach(o=>{i.push({type:0,doc:o})}),new yn(e,t,rn.emptySet(t),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.Iu=void 0,this.listeners=[]}}class pw{constructor(){this.queries=new ft(e=>dd(e),yi),this.onlineState="Unknown",this.Tu=new Set}}async function gw(n,e){const t=E(n),r=e.query;let s=!1,i=t.queries.get(r);if(i||(s=!0,i=new fw),s)try{i.Iu=await t.onListen(r)}catch(o){const a=Da(o,`Initialization of query '${yo(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.listeners.push(e),e.Eu(t.onlineState),i.Iu&&e.Au(i.Iu)&&Na(t)}async function mw(n,e){const t=E(n),r=e.query;let s=!1;const i=t.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return t.queries.delete(r),t.onUnlisten(r)}function yw(n,e){const t=E(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.Au(s)&&(r=!0);o.Iu=s}}r&&Na(t)}function vw(n,e,t){const r=E(n),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(t);r.queries.delete(e)}function Na(n){n.Tu.forEach(e=>{e.next()})}class _w{constructor(e,t,r){this.query=e,this.Ru=t,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new yn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.Vu(e)&&(this.Ru.next(e),t=!0):this.vu(e,this.onlineState)&&(this.Su(e),t=!0),this.Pu=e,t}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let t=!1;return this.Pu&&!this.bu&&this.vu(this.Pu,e)&&(this.Su(this.Pu),t=!0),t}vu(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||t==="Offline")}Vu(e){if(e.docChanges.length>0)return!0;const t=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Su(e){e=yn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this.key=e}}class pf{constructor(e){this.key=e}}class ww{constructor(e,t){this.query=e,this.Fu=t,this.$u=null,this.current=!1,this.Bu=$(),this.mutatedKeys=$(),this.Lu=pd(e),this.Uu=new rn(this.Lu)}get qu(){return this.Fu}Gu(e,t){const r=t?t.Ku:new Pu,s=t?t.Uu:this.Uu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=ls(this.query)&&s.size===this.query.limit?s.last():null,u=Fs(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),f=ha(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),S=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let T=!1;d&&f?d.data.isEqual(f.data)?m!==S&&(r.track({type:3,doc:f}),T=!0):this.Qu(d,f)||(r.track({type:2,doc:f}),T=!0,(c&&this.Lu(f,c)>0||u&&this.Lu(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),T=!0):d&&!f&&(r.track({type:1,doc:d}),T=!0,(c||u)&&(a=!0)),T&&(f?(o=o.add(f),i=S?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),ls(this.query)||Fs(this.query))for(;o.size>this.query.limit;){const l=ls(this.query)?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Uu:o,Ku:r,ei:a,mutatedKeys:i}}Qu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const s=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Ku.pu();i.sort((u,l)=>function(h,d){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return f(h)-f(d)}(u.type,l.type)||this.Lu(u.doc,l.doc)),this.ju(r);const o=t?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new yn(this.query,e.Uu,s,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Ku:new Pu,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(t=>this.Fu=this.Fu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Fu=this.Fu.delete(t)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=$(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const t=[];return e.forEach(r=>{this.Bu.has(r)||t.push(new pf(r))}),this.Bu.forEach(r=>{e.has(r)||t.push(new ff(r))}),t}Ju(e){this.Fu=e.hi,this.Bu=$();const t=this.Gu(e.documents);return this.applyChanges(t,!0)}Yu(){return yn.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class Iw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Ew{constructor(e){this.key=e,this.Xu=!1}}class bw{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.ta=new ft(a=>dd(a),yi),this.ea=new Map,this.na=new Set,this.sa=new Y(_.comparator),this.ia=new Map,this.ra=new Ea,this.oa={},this.ua=new Map,this.aa=Mt.gn(),this.onlineState="Unknown",this.ca=void 0}get isPrimaryClient(){return this.ca===!0}}async function Tw(n,e){const t=Ma(n);let r,s;const i=t.ta.get(e);if(i)r=i.targetId,t.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const o=await Gs(t.localStore,$e(e));t.isPrimaryClient&&Ti(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await xa(t,e,r,a==="current")}return s}async function xa(n,e,t,r){n.ha=(l,h,d)=>async function(f,m,S,T){let R=m.view.Gu(S);R.ei&&(R=await bo(f.localStore,m.query,!1).then(({documents:P})=>m.view.Gu(P,R)));const k=T&&T.targetChanges.get(m.targetId),j=m.view.applyChanges(R,f.isPrimaryClient,k);return Co(f,m.targetId,j.zu),j.snapshot}(n,l,h,d);const s=await bo(n.localStore,e,!0),i=new ww(e,s.hi),o=i.Gu(s.documents),a=Fr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline"),c=i.applyChanges(o,n.isPrimaryClient,a);Co(n,t,c.zu);const u=new Iw(e,t,i);return n.ta.set(e,u),n.ea.has(t)?n.ea.get(t).push(e):n.ea.set(t,[e]),c.snapshot}async function Sw(n,e){const t=E(n),r=t.ta.get(e),s=t.ea.get(r.targetId);if(s.length>1)return t.ea.set(r.targetId,s.filter(i=>!yi(i,e))),void t.ta.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await mn(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),pr(t.remoteStore,r.targetId),vn(t,r.targetId)}).catch(Bt)):(vn(t,r.targetId),await mn(t.localStore,r.targetId,!0))}async function Cw(n,e,t){const r=La(n);try{const s=await function(i,o){const a=E(i),c=Z.now(),u=o.reduce((h,d)=>h.add(d.key),$());let l;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.ai.qs(h,u).next(d=>{l=d;const f=[];for(const m of o){const S=Nv(m,l.get(m.key));S!=null&&f.push(new kn(m.key,S,id(S.value.mapValue),Le.exists(!0)))}return a.$s.addMutationBatch(h,c,f,o)})).then(h=>(h.applyToLocalDocumentSet(l),{batchId:h.batchId,changes:l}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.oa[i.currentUser.toKey()];c||(c=new Y(O)),c=c.insert(o,a),i.oa[i.currentUser.toKey()]=c}(r,s.batchId,t),await pt(r,s.changes),await An(r.remoteStore)}catch(s){const i=Da(s,"Failed to persist write");t.reject(i)}}async function gf(n,e){const t=E(n);try{const r=await V_(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.ia.get(i);o&&(N(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Xu=!0:s.modifiedDocuments.size>0?N(o.Xu):s.removedDocuments.size>0&&(N(o.Xu),o.Xu=!1))}),await pt(t,r,e)}catch(r){await Bt(r)}}function Mu(n,e,t){const r=E(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ta.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=E(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Eu(o)&&(c=!0)}),c&&Na(a)}(r.eventManager,e),s.length&&r.Zu.Ko(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kw(n,e,t){const r=E(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.ia.get(e),i=s&&s.key;if(i){let o=new Y(_.comparator);o=o.insert(i,z.newNoDocument(i,C.min()));const a=$().add(i),c=new Vr(C.min(),new Map,new q(O),o,a);await gf(r,c),r.sa=r.sa.remove(i),r.ia.delete(e),Pa(r)}else await mn(r.localStore,e,!1).then(()=>vn(r,e,t)).catch(Bt)}async function Aw(n,e){const t=E(n),r=e.batch.batchId;try{const s=await U_(t.localStore,e);Oa(t,r,null),Ra(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await pt(t,s)}catch(s){await Bt(s)}}async function Dw(n,e,t){const r=E(n);try{const s=await function(i,o){const a=E(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.$s.lookupMutationBatch(c,o).next(l=>(N(l!==null),u=l.keys(),a.$s.removeMutationBatch(c,l))).next(()=>a.$s.performConsistencyCheck(c)).next(()=>a.ai.qs(c,u))})}(r.localStore,e);Oa(r,e,t),Ra(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await pt(r,s)}catch(s){await Bt(s)}}function Ra(n,e){(n.ua.get(e)||[]).forEach(t=>{t.resolve()}),n.ua.delete(e)}function Oa(n,e,t){const r=E(n);let s=r.oa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.oa[r.currentUser.toKey()]=s}}function vn(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.ea.get(e))n.ta.delete(r),t&&n.Zu.la(r,t);n.ea.delete(e),n.isPrimaryClient&&n.ra.Ri(e).forEach(r=>{n.ra.containsKey(r)||mf(n,r)})}function mf(n,e){n.na.delete(e.path.canonicalString());const t=n.sa.get(e);t!==null&&(pr(n.remoteStore,t),n.sa=n.sa.remove(e),n.ia.delete(t),Pa(n))}function Co(n,e,t){for(const r of t)r instanceof ff?(n.ra.addReference(r.key,e),Nw(n,r)):r instanceof pf?(v("SyncEngine","Document no longer in limbo: "+r.key),n.ra.removeReference(r.key,e),n.ra.containsKey(r.key)||mf(n,r.key)):b()}function Nw(n,e){const t=e.key,r=t.path.canonicalString();n.sa.get(t)||n.na.has(r)||(v("SyncEngine","New document in limbo: "+t),n.na.add(r),Pa(n))}function Pa(n){for(;n.na.size>0&&n.sa.size<n.maxConcurrentLimboResolutions;){const e=n.na.values().next().value;n.na.delete(e);const t=new _(F.fromString(e)),r=n.aa.next();n.ia.set(r,new Ew(t)),n.sa=n.sa.insert(t,r),Ti(n.remoteStore,new it($e(mi(t.path)),r,2,Ee.A))}}async function pt(n,e,t){const r=E(n),s=[],i=[],o=[];r.ta.isEmpty()||(r.ta.forEach((a,c)=>{o.push(r.ha(c,e,t).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),s.push(u);const l=Ia.Js(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.Zu.Ko(s),await async function(a,c){const u=E(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(c,h=>p.forEach(h.zs,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>p.forEach(h.Hs,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!$t(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.si.get(h),f=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(f);u.si=u.si.insert(h,m)}}}(r.localStore,i))}async function xw(n,e){const t=E(n);if(!t.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const r=await Xd(t.localStore,e);t.currentUser=e,function(s,i){s.ua.forEach(o=>{o.forEach(a=>{a.reject(new I(y.CANCELLED,i))})}),s.ua.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pt(t,r.ci)}}function Rw(n,e){const t=E(n),r=t.ia.get(e);if(r&&r.Xu)return $().add(r.key);{let s=$();const i=t.ea.get(e);if(!i)return s;for(const o of i){const a=t.ta.get(o);s=s.unionWith(a.view.qu)}return s}}async function Ow(n,e){const t=E(n),r=await bo(t.localStore,e.query,!0),s=e.view.Ju(r);return t.isPrimaryClient&&Co(t,e.targetId,s.zu),s}async function Pw(n,e){const t=E(n);return tf(t.localStore,e).then(r=>pt(t,r))}async function Mw(n,e,t,r){const s=E(n),i=await function(o,a){const c=E(o),u=E(c.$s);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.ln(l,a).next(h=>h?c.ai.qs(l,h):p.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await An(s.remoteStore):t==="acknowledged"||t==="rejected"?(Oa(s,e,r||null),Ra(s,e),function(o,a){E(E(o).$s).dn(a)}(s.localStore,e)):b(),await pt(s,i)):v("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Lw(n,e){const t=E(n);if(Ma(t),La(t),e===!0&&t.ca!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await Lu(t,r.toArray());t.ca=!0,await So(t.remoteStore,!0);for(const i of s)Ti(t.remoteStore,i)}else if(e===!1&&t.ca!==!1){const r=[];let s=Promise.resolve();t.ea.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(vn(t,o),mn(t.localStore,o,!0))),pr(t.remoteStore,o)}),await s,await Lu(t,r),function(i){const o=E(i);o.ia.forEach((a,c)=>{pr(o.remoteStore,c)}),o.ra.bi(),o.ia=new Map,o.sa=new Y(_.comparator)}(t),t.ca=!1,await So(t.remoteStore,!1)}}async function Lu(n,e,t){const r=E(n),s=[],i=[];for(const o of e){let a;const c=r.ea.get(o);if(c&&c.length!==0){a=await Gs(r.localStore,$e(c[0]));for(const u of c){const l=r.ta.get(u),h=await Ow(r,l);h.snapshot&&i.push(h.snapshot)}}else{const u=await ef(r.localStore,o);a=await Gs(r.localStore,u),await xa(r,yf(u),o,!1)}s.push(a)}return r.Zu.Ko(i),s}function yf(n){return ud(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function Uw(n){const e=E(n);return E(E(e.localStore).persistence).Os()}async function Vw(n,e,t,r){const s=E(n);if(s.ca)return void v("SyncEngine","Ignoring unexpected query state notification.");const i=s.ea.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await tf(s.localStore,fd(i[0])),a=Vr.createSynthesizedRemoteEventForCurrentChange(e,t==="current");await pt(s,o,a);break}case"rejected":await mn(s.localStore,e,!0),vn(s,e,r);break;default:b()}}async function Fw(n,e,t){const r=Ma(n);if(r.ca){for(const s of e){if(r.ea.has(s)){v("SyncEngine","Adding an already active target "+s);continue}const i=await ef(r.localStore,s),o=await Gs(r.localStore,i);await xa(r,yf(i),o.targetId,!1),Ti(r.remoteStore,o)}for(const s of t)r.ea.has(s)&&await mn(r.localStore,s,!1).then(()=>{pr(r.remoteStore,s),vn(r,s)}).catch(Bt)}}function Ma(n){const e=E(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=gf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kw.bind(null,e),e.Zu.Ko=yw.bind(null,e.eventManager),e.Zu.la=vw.bind(null,e.eventManager),e}function La(n){const e=E(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Aw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Dw.bind(null,e),e}class vf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Ei(e.databaseInfo.databaseId),this.sharedClientState=this.da(e),this.persistence=this._a(e),await this.persistence.start(),this.gcScheduler=this.wa(e),this.localStore=this.ma(e)}wa(e){return null}ma(e){return Qd(this.persistence,new Yd,e.initialUser,this.M)}_a(e){return new z_(ba.Wi,this.M)}da(e){return new rf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $w extends vf{constructor(e,t,r){super(),this.ga=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ga.initialize(this,e),await La(this.ga.syncEngine),await An(this.ga.remoteStore),await this.persistence.Is(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}ma(e){return Qd(this.persistence,new Yd,e.initialUser,this.M)}wa(e){const t=this.persistence.referenceDelegate.garbageCollector;return new D_(t,e.asyncQueue)}_a(e){const t=Jd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?_e.withCacheSize(this.cacheSizeBytes):_e.DEFAULT;return new wa(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,sf(),ps(),this.M,this.sharedClientState,!!this.forceOwnership)}da(e){return new rf}}class Bw extends $w{constructor(e,t){super(e,t,!1),this.ga=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.ga.syncEngine;this.sharedClientState instanceof ji&&(this.sharedClientState.syncEngine={kr:Mw.bind(null,t),Mr:Vw.bind(null,t),Or:Fw.bind(null,t),Os:Uw.bind(null,t),Nr:Pw.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Is(async r=>{await Lw(this.ga.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):r||this.gcScheduler.stop())})}da(e){const t=sf();if(!ji.vt(t))throw new I(y.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Jd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ji(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class _f{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Mu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xw.bind(null,this.syncEngine),await So(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new pw}createDatastore(e){const t=Ei(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new X_(s));var s;return function(i,o,a,c){return new tw(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Mu(this.syncEngine,a,0),o=Ru.vt()?new Ru:new J_,new rw(t,r,s,i,o);var t,r,s,i,o}createSyncEngine(e,t){return function(r,s,i,o,a,c,u){const l=new bw(r,s,i,o,a,c);return u&&(l.ca=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=E(e);v("RemoteStore","RemoteStore shutting down."),t.lu.add(5),await $r(t),t.du.shutdown(),t._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ya(this.observer.next,e)}error(e){this.observer.error?this.ya(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}pa(){this.muted=!0}ya(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=oe.UNAUTHENTICATED,this.clientId=Xh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{v("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(v("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(y.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ze;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Da(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wf(n,e){n.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Xd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function If(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Gw(n);v("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(s=>Ou(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>Ou(e.remoteStore,i)),n.onlineComponents=e}async function Gw(n){return n.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await wf(n,new vf)),n.offlineComponents}async function Ef(n){return n.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await If(n,new _f)),n.onlineComponents}function Kw(n){return Ef(n).then(e=>e.syncEngine)}async function Uu(n){const e=await Ef(n),t=e.eventManager;return t.onListen=Tw.bind(null,e.syncEngine),t.onUnlisten=Sw.bind(null,e.syncEngine),t}const Vu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(n,e,t){if(!t)throw new I(y.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Hw(n,e,t,r){if(e===!0&&r===!0)throw new I(y.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Fu(n){if(!_.isDocumentKey(n))throw new I(y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function $u(n){if(_.isDocumentKey(n))throw new I(y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ua(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":b()}function sn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new I(y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ua(n);throw new I(y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new I(y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new I(y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Hw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t,r){this._authCredentials=t,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bu({}),this._settingsFrozen=!1,e instanceof ct?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new I(y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ct(s.options.projectId)}(e))}get app(){if(!this._app)throw new I(y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new I(y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bu(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Qy;switch(t.type){case"gapi":const r=t.client;return N(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new tv(r,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new I(y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Vu.get(e);t&&(v("ComponentProvider","Removing Datastore"),Vu.delete(e),t.terminate())}(this),Promise.resolve()}}function Tf(n,e,t,r={}){var s;const i=(n=sn(n,Si))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&fo("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=oe.MOCK_USER;else{o=Pg(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new I(y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new oe(c)}n._authCredentials=new Xy(new Qh(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ot(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ke(this.firestore,e,this._key)}}class Br{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Br(this.firestore,e,this._query)}}class ot extends Br{constructor(e,t,r){super(e,t,mi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new _(e))}withConverter(e){return new ot(this.firestore,e,this._path)}}function zw(n,e,...t){if(n=Te(n),bf("collection","path",e),n instanceof Si){const r=F.fromString(e,...t);return $u(r),new ot(n,null,r)}{if(!(n instanceof ke||n instanceof ot))throw new I(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(e,...t));return $u(r),new ot(n.firestore,null,r)}}function Sf(n,e,...t){if(n=Te(n),arguments.length===1&&(e=Xh.R()),bf("doc","path",e),n instanceof Si){const r=F.fromString(e,...t);return Fu(r),new ke(n,null,new _(r))}{if(!(n instanceof ke||n instanceof ot))throw new I(y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(e,...t));return Fu(r),new ke(n.firestore,n instanceof ot?n.converter:null,new _(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new of(this,"async_queue_retry"),this.Ua=()=>{const t=ps();t&&v("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const e=ps();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ua)}get isShuttingDown(){return this.Ma}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.qa(),this.Ga(e)}enterRestrictedMode(e){if(!this.Ma){this.Ma=!0,this.Ba=e||!1;const t=ps();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Ua)}}enqueue(e){if(this.qa(),this.Ma)return new Promise(()=>{});const t=new ze;return this.Ga(()=>this.Ma&&this.Ba?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ka.push(e),this.Ka()))}async Ka(){if(this.ka.length!==0){try{await this.ka[0](),this.ka.shift(),this.So.reset()}catch(e){if(!$t(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.ka.length>0&&this.So.Io(()=>this.Ka())}}Ga(e){const t=this.Na.then(()=>(this.$a=!0,e().catch(r=>{this.Fa=r,this.$a=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw X("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.$a=!1,r))));return this.Na=t,t}enqueueAfterDelay(e,t,r){this.qa(),this.La.indexOf(e)>-1&&(t=0);const s=Aa.createAndSchedule(this,e,t,r,i=>this.Qa(i));return this.Oa.push(s),s}qa(){this.Fa&&b()}verifyOperationInProgress(){}async ja(){let e;do e=this.Na,await e;while(e!==this.Na)}Wa(e){for(const t of this.Oa)if(t.timerId===e)return!0;return!1}za(e){return this.ja().then(()=>{this.Oa.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Oa)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ja()})}Ha(e){this.La.push(e)}Qa(e){const t=this.Oa.indexOf(e);this.Oa.splice(t,1)}}function qu(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of t)if(s in r&&typeof r[s]=="function")return!0;return!1}(n,["next","error","complete"])}class gr extends Si{constructor(e,t,r){super(e,t,r),this.type="firestore",this._queue=new Ww,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Cf(this),this._firestoreClient.terminate()}}function ko(n=Fo()){return Vo(n,"firestore").getImmediate()}function Va(n){return n._firestoreClient||Cf(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Cf(n){var e;const t=n._freezeSettings(),r=function(s,i,o,a){return new av(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new jw(n._authCredentials,n._appCheckCredentials,n._queue,r)}function kf(n){Yw(n=sn(n,gr));const e=Va(n),t=n._freezeSettings(),r=new _f;return Jw(e,r,new Bw(r,t.cacheSizeBytes))}function Jw(n,e,t){const r=new ze;return n.asyncQueue.enqueue(async()=>{try{await wf(n,t),await If(n,e),r.resolve()}catch(s){if(!function(i){return i.name==="FirebaseError"?i.code===y.FAILED_PRECONDITION||i.code===y.UNIMPLEMENTED:typeof DOMException!="undefined"&&i instanceof DOMException?i.code===22||i.code===20||i.code===11:!0}(s))throw s;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function Yw(n){if(n._initialized||n._terminated)throw new I(y.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new I(y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _n(se.fromBase64String(e))}catch(t){throw new I(y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new _n(se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new I(y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new I(y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return O(this._lat,e._lat)||O(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=/^__.*__$/;class Xw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new kn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ur(e,this.data,t,this.fieldTransforms)}}function Af(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class qa{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.M=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ja(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ya(){return this.settings.Ya}Xa(e){return new qa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Za(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Xa({path:r,tc:!1});return s.ec(e),s}nc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Xa({path:r,tc:!1});return s.Ja(),s}sc(e){return this.Xa({path:void 0,tc:!0})}ic(e){return Ws(e,this.settings.methodName,this.settings.rc||!1,this.path,this.settings.oc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ja(){if(this.path)for(let e=0;e<this.path.length;e++)this.ec(this.path.get(e))}ec(e){if(e.length===0)throw this.ic("Document fields must not be empty");if(Af(this.Ya)&&Qw.test(e))throw this.ic('Document fields cannot begin and end with "__"')}}class Zw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.M=r||Ei(e)}uc(e,t,r,s=!1){return new qa({Ya:e,methodName:t,oc:r,path:ce.emptyPath(),tc:!1,rc:s},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function eI(n){const e=n._freezeSettings(),t=Ei(n._databaseId);return new Zw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function tI(n,e,t,r,s,i={}){const o=n.uc(i.merge||i.mergeFields?2:0,e,t,s);Rf("Data must be an object, but it was:",o,r);const a=Nf(r,o);let c,u;if(i.merge)c=new Ls(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=nI(e,h,t);if(!o.contains(d))throw new I(y.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);sI(l,d)||l.push(d)}c=new Ls(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new Xw(new Ie(a),c,u)}class ja extends $a{_toFieldTransform(e){return new Id(e.path,new fn)}isEqual(e){return e instanceof ja}}function Df(n,e){if(xf(n=Te(n)))return Rf("Unsupported field value:",e,n),Nf(n,e);if(n instanceof $a)return function(t,r){if(!Af(r.Ya))throw r.ic(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ic(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.tc&&e.Ya!==4)throw e.ic("Nested arrays are not supported");return function(t,r){const s=[];let i=0;for(const o of t){let a=Df(o,r.sc(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(n,e)}return function(t,r){if((t=Te(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Tv(r.M,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=Z.fromDate(t);return{timestampValue:fr(r.M,s)}}if(t instanceof Z){const s=new Z(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:fr(r.M,s)}}if(t instanceof Ba)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof _n)return{bytesValue:Ad(r.M,t._byteString)};if(t instanceof ke){const s=r.databaseId,i=t.firestore._databaseId;if(!i.isEqual(s))throw r.ic(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:da(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.ic(`Unsupported field value: ${Ua(t)}`)}(n,e)}function Nf(n,e){const t={};return ed(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sn(n,(r,s)=>{const i=Df(s,e.Za(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function xf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Z||n instanceof Ba||n instanceof _n||n instanceof ke||n instanceof $a)}function Rf(n,e,t){if(!xf(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Ua(t);throw r==="an object"?e.ic(n+" a custom object"):e.ic(n+" "+r)}}function nI(n,e,t){if((e=Te(e))instanceof Fa)return e._internalPath;if(typeof e=="string")return Of(n,e);throw Ws("Field path arguments must be of type string or ",n,!1,void 0,t)}const rI=new RegExp("[~\\*/\\[\\]]");function Of(n,e,t){if(e.search(rI)>=0)throw Ws(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Fa(...e.split("."))._internalPath}catch{throw Ws(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ws(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new I(y.INVALID_ARGUMENT,a+n+c)}function sI(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ga("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class iI extends Pf{data(){return super.data()}}function Ga(n,e){return typeof e=="string"?Of(n,e):e instanceof Fa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mf extends Pf{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new gs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ga("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class gs extends Mf{data(e={}){return super.data(e)}}class oI{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new jn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new gs(this._firestore,this._userDataWriter,r.key,r,new jn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new I(y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new gs(r._firestore,r._userDataWriter,o.doc.key,o.doc,new jn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new gs(r._firestore,r._userDataWriter,o.doc.key,o.doc,new jn(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:aI(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function aI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(n){if(Fs(n)&&n.explicitOrderBy.length===0)throw new I(y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class uI{}function lI(n,...e){for(const t of e)n=t._apply(n);return n}class hI extends uI{constructor(e,t){super(),this.hc=e,this.dc=t,this.type="orderBy"}_apply(e){const t=function(r,s,i){if(r.startAt!==null)throw new I(y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new I(y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new nn(s,i);return function(a,c){if(ld(a)===null){const u=hd(a);u!==null&&fI(a,u,c.field)}}(r,o),o}(e._query,this.hc,this.dc);return new Br(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Lr(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function dI(n,e="asc"){const t=e,r=Ga("orderBy",n);return new hI(r,t)}function fI(n,e,t){if(!t.isEqual(e))throw new I(y.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{convertValue(e,t="none"){switch(xt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return H(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Nt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw b()}}convertObject(e,t){const r={};return Sn(e.fields,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new Ba(H(e.latitude),H(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=nd(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ar(e));default:return null}}convertTimestamp(e){const t=at(e);return new Z(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=F.fromString(e);N(Ld(r));const s=new ct(r.get(1),r.get(3)),i=new _(r.popFirst(5));return s.isEqual(t)||X(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Lf extends pI{constructor(e){super(),this.firestore=e}convertBytes(e){return new _n(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,t)}}function mI(n,e){const t=sn(n.firestore,gr),r=Sf(n),s=gI(n.converter,e);return vI(t,[tI(eI(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Le.exists(!1))]).then(()=>r)}function yI(n,...e){var t,r,s;n=Te(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||qu(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(qu(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(n instanceof ke)u=sn(n.firestore,gr),l=mi(n._key.path),c={next:h=>{e[o]&&e[o](_I(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=sn(n,Br);u=sn(h.firestore,gr),l=h._query;const d=new Lf(u);c={next:f=>{e[o]&&e[o](new oI(u,d,h,f))},error:e[o+1],complete:e[o+2]},cI(n._query)}return function(h,d,f,m){const S=new qw(m),T=new _w(d,S,f);return h.asyncQueue.enqueueAndForget(async()=>gw(await Uu(h),T)),()=>{S.pa(),h.asyncQueue.enqueueAndForget(async()=>mw(await Uu(h),T))}}(Va(u),l,a,c)}function vI(n,e){return function(t,r){const s=new ze;return t.asyncQueue.enqueueAndForget(async()=>Cw(await Kw(t),r,s)),s.promise}(Va(n),e)}function _I(n,e,t){const r=t.docs.get(e._key),s=new Lf(n);return new Mf(n,s,e._key,r,new jn(t.hasPendingWrites,t.fromCache),e.converter)}function wI(){return new ja("serverTimestamp")}(function(n,e=!0){(function(t){Tn=t})(Sr),un(new St("firestore",(t,{options:r})=>{const s=t.getProvider("app").getImmediate(),i=new gr(s,new Zy(t.getProvider("auth-internal")),new rv(t.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),st(jc,"3.4.7",n),st(jc,"3.4.7","esm2017")})();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Ka(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Uf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const II=Uf,Vf=new br("auth","Firebase",Uf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new Lo("@firebase/auth");function ms(n,...e){ju.logLevel<=U.ERROR&&ju.error(`Auth (${Sr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,...e){throw Ha(n,...e)}function Ue(n,...e){return Ha(n,...e)}function Ff(n,e,t){const r=Object.assign(Object.assign({},II()),{[e]:t});return new br("auth","Firebase",r).create(e,{appName:n.name})}function EI(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ae(n,"argument-error"),Ff(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ha(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Vf.create(n,...e)}function A(n,e,...t){if(!n)throw Ha(e,...t)}function Ke(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ms(e),new Error(e)}function Ye(n,e){n||Ke(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=new Map;function He(n){Ye(n instanceof Function,"Expected a class definition");let e=Gu.get(n);return e?(Ye(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Gu.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(n,e){const t=Vo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Cs(i,e!=null?e:{}))return s;Ae(s,"already-initialized")}return t.initialize({options:e})}function TI(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(He);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function SI(){return Ku()==="http:"||Ku()==="https:"}function Ku(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SI()||$l()||"connection"in navigator)?navigator.onLine:!0}function kI(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ye(t>e,"Short delay should be less than long delay!"),this.isMobile=Fl()||Bl()}get(){return CI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(n,e){Ye(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=new qr(3e4,6e4);function jr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Gr(n,e,t,r,s={}){return Bf(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Tr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),$f.fetch()(qf(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Bf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},AI),e);try{const s=new NI(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Gi(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gi(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Gi(n,"email-already-in-use",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ff(n,l,u);Ae(n,l)}}catch(s){if(s instanceof Vt)throw s;Ae(n,"network-request-failed")}}async function Kr(n,e,t,r,s={}){const i=await Gr(n,e,t,r,s);return"mfaPendingCredential"in i&&Ae(n,"multi-factor-auth-required",{_serverResponse:i}),i}function qf(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?za(n.config,s):`${n.config.apiScheme}://${s}`}class NI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ue(this.auth,"network-request-failed")),DI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ue(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(n,e){return Gr(n,"POST","/v1/accounts:delete",e)}async function RI(n,e){return Gr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OI(n,e=!1){const t=Te(n),r=await t.getIdToken(e),s=Wa(r);A(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xn(Ki(s.auth_time)),issuedAtTime:Xn(Ki(s.iat)),expirationTime:Xn(Ki(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ki(n){return Number(n)*1e3}function Wa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ms("JWT malformed, contained fewer than 3 sections"),null;try{const s=Rg(t);return s?JSON.parse(s):(ms("Failed to decode base64 JWT payload"),null)}catch(s){return ms("Caught error parsing JWT payload as JSON",s),null}}function PI(n){const e=Wa(n);return A(e,"internal-error"),A(typeof e.exp!="undefined","internal-error"),A(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Vt&&MI(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function MI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xn(this.lastLoginAt),this.creationTime=Xn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(n){var e;const t=n.auth,r=await n.getIdToken(),s=await mr(n,RI(t,{idToken:r}));A(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?FI(i.providerUserInfo):[],a=VI(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new jf(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function UI(n){const e=Te(n);await Js(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VI(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function FI(n){return n.map(e=>{var{providerId:t}=e,r=Ka(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(n,e){const t=await Bf(n,{},async()=>{const r=Tr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=qf(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$f.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken!="undefined","internal-error"),A(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):PI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await $I(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new yr;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(A(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(A(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yr,this.toJSON())}_performRefresh(){return Ke("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n,e){A(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class Tt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Ka(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new jf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await mr(this,this.stsTokenManager.getToken(this.auth,e));return A(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return OI(this,e)}reload(){return UI(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Js(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mr(this,xI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,S=(a=t.tenantId)!==null&&a!==void 0?a:void 0,T=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,R=(u=t.createdAt)!==null&&u!==void 0?u:void 0,k=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:j,emailVerified:P,isAnonymous:B,providerData:L,stsTokenManager:De}=t;A(j&&De,e,"internal-error");const pe=yr.fromJSON(this.name,De);A(typeof j=="string",e,"internal-error"),Xe(h,e.name),Xe(d,e.name),A(typeof P=="boolean",e,"internal-error"),A(typeof B=="boolean",e,"internal-error"),Xe(f,e.name),Xe(m,e.name),Xe(S,e.name),Xe(T,e.name),Xe(R,e.name),Xe(k,e.name);const Ne=new Tt({uid:j,auth:e,email:d,emailVerified:P,displayName:h,isAnonymous:B,photoURL:m,phoneNumber:f,tenantId:S,stsTokenManager:pe,createdAt:R,lastLoginAt:k});return L&&Array.isArray(L)&&(Ne.providerData=L.map(W=>Object.assign({},W))),T&&(Ne._redirectEventId=T),Ne}static async _fromIdTokenResponse(e,t,r=!1){const s=new yr;s.updateFromServerResponse(t);const i=new Tt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Js(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Gf.type="NONE";const Hu=Gf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(n,e,t){return`firebase:${n}:${e}:${t}`}class on{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ys(this.userKey,s.apiKey,i),this.fullPersistenceKey=ys("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new on(He(Hu),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||He(Hu);const o=ys(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=Tt._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new on(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new on(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jf(e))return"Blackberry";if(Yf(e))return"Webos";if(Ja(e))return"Safari";if((e.includes("chrome/")||Hf(e))&&!e.includes("edge/"))return"Chrome";if(Wf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Kf(n=J()){return/firefox\//i.test(n)}function Ja(n=J()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hf(n=J()){return/crios\//i.test(n)}function zf(n=J()){return/iemobile/i.test(n)}function Wf(n=J()){return/android/i.test(n)}function Jf(n=J()){return/blackberry/i.test(n)}function Yf(n=J()){return/webos/i.test(n)}function Ci(n=J()){return/iphone|ipad|ipod/i.test(n)}function BI(n=J()){var e;return Ci(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qI(){return ql()&&document.documentMode===10}function Qf(n=J()){return Ci(n)||Wf(n)||Yf(n)||Jf(n)||/windows phone/i.test(n)||zf(n)}function jI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n,e=[]){let t;switch(n){case"Browser":t=zu(J());break;case"Worker":t=`${zu(J())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Sr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wu(this),this.idTokenSubscription=new Wu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=He(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await on.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var t;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Js(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Te(e):null;return t&&A(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(He(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new br("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&He(e)||this._popupRedirectResolver;A(t,this,"argument-error"),this.redirectPersistenceManager=await on.create(this,[He(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return A(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof t=="function"?e.addObserver(t,r,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function Nn(n){return Te(n)}class Wu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gg(t=>this.observer=t)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Zf(n,e,t){const r=Nn(n);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=ep(e),{host:o,port:a}=KI(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||HI()}function ep(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function KI(n){const e=ep(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ju(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ju(o)}}}function Ju(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function HI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ke("not implemented")}_getIdTokenResponse(e){return Ke("not implemented")}_linkToIdToken(e,t){return Ke("not implemented")}_getReauthenticationResolver(e){return Ke("not implemented")}}async function zI(n,e){return Gr(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WI(n,e){return Kr(n,"POST","/v1/accounts:signInWithPassword",jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(n,e){return Kr(n,"POST","/v1/accounts:signInWithEmailLink",jr(n,e))}async function YI(n,e){return Kr(n,"POST","/v1/accounts:signInWithEmailLink",jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Ya{constructor(e,t,r,s=null){super("password",r);this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new vr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new vr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return WI(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return JI(e,{email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return zI(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return YI(e,{idToken:t,email:this._email,oobCode:this._password});default:Ae(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function an(n,e){return Kr(n,"POST","/v1/accounts:signInWithIdp",jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI="http://localhost";class Lt extends Ya{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const t=new Lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ae("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Ka(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Lt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return an(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,an(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,an(e,t)}buildRequest(){const e={requestUri:QI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Tr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZI(n){const e=Vn(Fn(n)).link,t=e?Vn(Fn(e)).deep_link_id:null,r=Vn(Fn(n)).deep_link_id;return(r?Vn(Fn(r)).link:null)||r||t||e||n}class Qa{constructor(e){var t,r,s,i,o,a;const c=Vn(Fn(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=XI((s=c.mode)!==null&&s!==void 0?s:null);A(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=ZI(e);try{return new Qa(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.providerId=xn.PROVIDER_ID}static credential(e,t){return vr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Qa.parseLink(t);return A(r,"argument-error"),vr._fromEmailAndCode(e,r.code,r.tenantId)}}xn.PROVIDER_ID="password";xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends Xa{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends Hr{constructor(){super("facebook.com")}static credential(e){return Lt._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tt.credential(e.oauthAccessToken)}catch{return null}}}tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";tt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends Hr{constructor(){super("google.com");this.addScope("profile")}static credential(e,t){return Lt._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Pe.credential(t,r)}catch{return null}}}Pe.GOOGLE_SIGN_IN_METHOD="google.com";Pe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends Hr{constructor(){super("github.com")}static credential(e){return Lt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch{return null}}}nt.GITHUB_SIGN_IN_METHOD="github.com";nt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends Hr{constructor(){super("twitter.com")}static credential(e,t){return Lt._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Me.credential(t,r)}catch{return null}}}Me.TWITTER_SIGN_IN_METHOD="twitter.com";Me.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(n,e){return Kr(n,"POST","/v1/accounts:signUp",jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Tt._fromIdTokenResponse(e,r,s),o=Yu(r);return new Ut({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Yu(r);return new Ut({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Yu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys extends Vt{constructor(e,t,r,s){var i;super(t.code,t.message);this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ys.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ys(e,t,r,s)}}function tp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ys._fromErrorAndOperation(n,i,e,r):i})}async function t0(n,e,t=!1){const r=await mr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ut._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n0(n,e,t=!1){const{auth:r}=n,s="reauthenticate";try{const i=await mr(n,tp(r,s,e,n),t);A(i.idToken,r,"internal-error");const o=Wa(i.idToken);A(o,r,"internal-error");const{sub:a}=o;return A(n.uid===a,r,"user-mismatch"),Ut._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ae(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function np(n,e,t=!1){const r="signIn",s=await tp(n,r,e),i=await Ut._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function r0(n,e){return np(Nn(n),e)}async function s0(n,e,t){const r=Nn(n),s=await e0(r,{returnSecureToken:!0,email:e,password:t}),i=await Ut._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function i0(n,e,t){return r0(Te(n),xn.credential(e,t))}function o0(n,e,t,r){return Te(n).onAuthStateChanged(e,t,r)}function a0(n){return Te(n).signOut()}const Qs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qs,"1"),this.storage.removeItem(Qs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(){const n=J();return Ja(n)||Ci(n)}const u0=1e3,l0=10;class sp extends rp{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=c0()&&jI(),this.fallbackToPolling=Qf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);qI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,l0):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},u0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}sp.type="LOCAL";const h0=sp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip extends rp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ip.type="SESSION";const op=ip;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ki(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,i)),c=await d0(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ki.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Za("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return window}function p0(n){Ve().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(){return typeof Ve().WorkerGlobalScope!="undefined"&&typeof Ve().importScripts=="function"}async function g0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function m0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function y0(){return ap()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="firebaseLocalStorageDb",v0=1,Xs="firebaseLocalStorage",up="fbase_key";class zr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ai(n,e){return n.transaction([Xs],e?"readwrite":"readonly").objectStore(Xs)}function _0(){const n=indexedDB.deleteDatabase(cp);return new zr(n).toPromise()}function Do(){const n=indexedDB.open(cp,v0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Xs,{keyPath:up})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Xs)?e(r):(r.close(),await _0(),e(await Do()))})})}async function Qu(n,e,t){const r=Ai(n,!0).put({[up]:e,value:t});return new zr(r).toPromise()}async function w0(n,e){const t=Ai(n,!1).get(e),r=await new zr(t).toPromise();return r===void 0?null:r.value}function Xu(n,e){const t=Ai(n,!0).delete(e);return new zr(t).toPromise()}const I0=800,E0=3;class lp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Do(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>E0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ap()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ki._getInstance(y0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await g0(),!this.activeServiceWorker)return;this.sender=new f0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((t=r[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||m0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Do();return await Qu(e,Qs,"1"),await Xu(e,Qs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>w0(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ai(s,!1).getAll();return new zr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),I0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lp.type="LOCAL";const b0=lp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function S0(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ue("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",T0().appendChild(r)})}function C0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new qr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(n,e){return e?He(e):(A(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec extends Ya{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return an(e,this._buildIdpRequest())}_linkToIdToken(e,t){return an(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return an(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function k0(n){return np(n.auth,new ec(n),n.bypassAuthState)}function A0(n){const{auth:e,user:t}=n;return A(t,e,"internal-error"),n0(t,new ec(n),n.bypassAuthState)}async function D0(n){const{auth:e,user:t}=n;return A(t,e,"internal-error"),t0(t,new ec(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return k0;case"linkViaPopup":case"linkViaRedirect":return D0;case"reauthViaPopup":case"reauthViaRedirect":return A0;default:Ae(this.auth,"internal-error")}}resolve(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=new qr(2e3,1e4);class Zt extends dp{constructor(e,t,r,s,i){super(e,t,s,i);this.provider=r,this.authWindow=null,this.pollId=null,Zt.currentPopupAction&&Zt.currentPopupAction.cancel(),Zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Ye(this.filter.length===1,"Popup operations only handle one event");const e=Za();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ue(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,N0.get())};e()}}Zt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0="pendingRedirect",Hi=new Map;class R0 extends dp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r);this.eventId=null}async execute(){let e=Hi.get(this.auth._key());if(!e){try{const r=await O0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Hi.set(this.auth._key(),e)}return this.bypassAuthState||Hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function O0(n,e){const t=pp(e),r=fp(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function P0(n,e){return fp(n)._set(pp(e),"true")}function fp(n){return He(n._redirectPersistence)}function pp(n){return ys(x0,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(n,e,t){return M0(n,e,t)}async function M0(n,e,t){const r=Nn(n);EI(n,e,Xa);const s=hp(r,t);return await P0(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function L0(n,e,t=!1){const r=Nn(n),s=hp(r,e),o=await new R0(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=10*60*1e3;class V0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!F0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!gp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ue(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=U0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zu(e))}saveEventToCache(e){this.cachedEventUids.add(Zu(e)),this.lastProcessedEventTime=Date.now()}}function Zu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function gp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function F0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $0(n,e={}){return Gr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,q0=/^https?/;async function j0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await $0(n);for(const t of e)try{if(G0(t))return}catch{}Ae(n,"unauthorized-domain")}function G0(n){const e=Ao(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!q0.test(t))return!1;if(B0.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=new qr(3e4,6e4);function el(){const n=Ve().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function H0(n){return new Promise((e,t)=>{var r,s,i;function o(){el(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{el(),t(Ue(n,"network-request-failed"))},timeout:K0.get()})}if(!((s=(r=Ve().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ve().gapi)===null||i===void 0)&&i.load)o();else{const a=C0("iframefcb");return Ve()[a]=()=>{gapi.load?o():t(Ue(n,"network-request-failed"))},S0(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw vs=null,e})}let vs=null;function z0(n){return vs=vs||H0(n),vs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=new qr(5e3,15e3),J0="__/auth/iframe",Y0="emulator/auth/iframe",Q0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},X0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Z0(n){const e=n.config;A(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?za(e,Y0):`https://${n.config.authDomain}/${J0}`,r={apiKey:e.apiKey,appName:n.name,v:Sr},s=X0.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Tr(r).slice(1)}`}async function eE(n){const e=await z0(n),t=Ve().gapi;return A(t,n,"internal-error"),e.open({where:document.body,url:Z0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Q0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ue(n,"network-request-failed"),a=Ve().setTimeout(()=>{i(o)},W0.get());function c(){Ve().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nE=500,rE=600,sE="_blank",iE="http://localhost";class tl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oE(n,e,t,r=nE,s=rE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},tE),{width:r.toString(),height:s.toString(),top:i,left:o}),u=J().toLowerCase();t&&(a=Hf(u)?sE:t),Kf(u)&&(e=e||iE,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(BI(u)&&a!=="_self")return aE(e||"",a),new tl(null);const h=window.open(e||"",a,l);A(h,n,"popup-blocked");try{h.focus()}catch{}return new tl(h)}function aE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE="__/auth/handler",uE="emulator/auth/handler";function nl(n,e,t,r,s,i){A(n.config.authDomain,n,"auth-domain-config-required"),A(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Sr,eventId:s};if(e instanceof Xa){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",jg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Hr){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${lE(n)}?${Tr(a).slice(1)}`}function lE({config:n}){return n.emulator?za(n,uE):`https://${n.authDomain}/${cE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="webStorageSupport";class hE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=op,this._completeRedirectFn=L0}async _openPopup(e,t,r,s){var i;Ye((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=nl(e,t,r,Ao(),s);return oE(e,o,Za())}async _openRedirect(e,t,r,s){return await this._originValidation(e),p0(nl(e,t,r,Ao(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Ye(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await eE(e),r=new V0(e);return t.register("authEvent",s=>(A(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zi,{type:zi},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[zi];o!==void 0&&t(!!o),Ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=j0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qf()||Ja()||Ci()}}const dE=hE;var rl="@firebase/auth",sl="0.19.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gE(n){un(new St("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{A(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),A(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xf(n)},l=new GI(a,c,u);return TI(l,t),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),un(new St("auth-internal",e=>{const t=Nn(e.getProvider("auth").getImmediate());return(r=>new fE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),st(rl,sl,pE(n)),st(rl,sl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(n=Fo()){const e=Vo(n,"auth");return e.isInitialized()?e.getImmediate():bI(n,{popupRedirectResolver:dE,persistence:[b0,h0,op]})}gE("Browser");/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp={firebase:{apiKey:"AIzaSyDQIOx_Q1YHsqr_cE3aO6OYmA5OCd5Si90",authDomain:"deliverhealthy-37c25.firebaseapp.com",projectId:"deliverhealthy-37c25",storageBucket:"deliverhealthy-37c25.appspot.com",messagingSenderId:"641486451606",appId:"1:641486451606:web:599692918d219c32e463b7",measurementId:"G-0QKQW5FPDL"}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(){const n=Wl().length>0,e=zl(mp.firebase),t=ko(e),r=ei(e);return{firebaseApp:e,firestore:t,auth:r,isConfigured:n}}function yE({auth:n,firestore:e}){location.hostname==="localhost"&&(Tf(e,"localhost",8080),Zf(n,"http://localhost:9099"))}function tc(){const n=mE();return n.isConfigured||(yE(n),kf(n.firestore)),n}function vE(n){const{firestore:e}=tc();let r=Sf(e,"users/roles/admin",n).id;if(r==null)return!1;if(r!=null)return!0}function _E({caseId:n}){const{firestore:e}=tc(),t=zw(e,"supportCases",n,"messages"),r=lI(t,dI("timestamp"));return{stream:o=>yI(r,a=>{const c=a.docs.map(u=>{const l=!u.metadata.hasPendingWrites;return ve({isDelivered:l,id:u.id},u.data())});o(c)}),addMessage:o=>mI(t,ve({timestamp:wI()},o))}}function wE(n){const{auth:e}=tc();return o0(e,t=>{console.log(t),n(t)})}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(n){const{onEnter:e}=n;return g("div",{class:rt.inputContainer,children:g("input",{type:"text",placeholder:"Type your message here to get started...",onKeyUp:t=>{t.key==="Enter"&&(e(t.target.value),t.target.value="")}})})}function EE(n){const{children:e}=n;return g("div",{class:rt.container,children:e})}function bE(n){const{messages:e,user:t,name:r}=n;console.log("What is the username from chatlist props: ",r);const s=Po(null),i=r;return console.log("What is the username: ",i),Fp(()=>{const o=s.current.scrollHeight;s.current.scroll(0,o)},[e.length]),g("div",{class:rt.scrollContainer,children:g("ul",{class:rt.chatList,ref:s,children:e.map(o=>g(TE,{message:o,name:i},o.id))})})}function TE(n){const{message:e,name:t}=n;let{id:r,text:s,role:i,isDelivered:o,userid:a}=e;const c=vE(a);console.log("Is is true that this user is admin?: ",c),i=i==null?"other":i;const u=i.replace(i.charAt(0),i.charAt(0).toUpperCase()),l=o?"":"Pending",h=rt[`messageContainer${u}`],d=rt[`message${u}${l}`],f=rt[`delivered${u}`],m=rt.identity;return V("li",{id:r,class:h,children:[g("div",{class:m,children:i!="self"?c?"Administrator":"Customer":""}),g("div",{class:m,children:i=="self"?"me: "+t:a}),g("div",{class:d,children:s}),g("div",{class:f,children:o?"Delivered":""})]})}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE extends Oe{componentDidMount(){const{caseId:e}=this.props,{stream:t,addMessage:r}=_E({caseId:e});t(s=>{const i=this.props.user.uid;s=s.map(o=>{const a=o.uid===i?"self":"other",c=i;return console.log("First report of userid from DB: ",i),Be(ve({},o),{role:a,userid:c})}),this.props.setMessages(s)}),this.addMessage=r}render(e){return console.log("What happens to props.name: ",e.name),V(EE,{children:[g(bE,{messages:e.messages,name:e.name}),g(IE,{onEnter:t=>{this.addMessage({text:t,uid:e.user.uid})}})]})}}const CE="_contentRow_hnn54_17",kE="_contentGrid_hnn54_22",AE="_content_hnn54_17",DE="_dressLogout_hnn54_43";var _r={contentRow:CE,contentGrid:kE,content:AE,dressLogout:DE};function il(n){const{type:e}=n,{auth:t}=yp();switch(e){case"google":{const r={foo:"bar"};history.pushState(r,"intermediate page","/case"),Zs(t,new Pe);break}case"twitter":{const r={foo:"bar"};history.pushState(r,"intermediate page","/case"),Zs(t,new Me);break}case"email":{s0(t,n.email,n.password);break}default:throw new Error("No idea what provider you are trying to use")}}function ol(n){const{type:e}=n,{auth:t}=yp();switch(e){case"google":{const r={foo:"bar"};history.pushState(r,"intermediate page","/case"),Zs(t,new Pe);break}case"twitter":{const r={foo:"bar"};history.pushState(r,"intermediate page","/case"),Zs(t,new Me);break}case"email":{i0(t,n.email,n.password);break}default:throw new Error("No idea what provider you are trying to use")}}function NE(){console.log("We should be logging OUTTTT!");const n=ei();a0(n).then(()=>{console.log("Logged out successfully!")}).catch(e=>{console.log("Some logout error occured.")})}function yp(){if(Wl().length!=0)return{firebaseApp:Fo(),firestore:ko(),auth:ei()};{const t=zl(mp.firebase),r=ko(t),s=ei(t);return location.hostname==="localhost"&&(Tf(r,"localhost",8080),Zf(s,"http://localhost:9099",{disableWarnings:!0})),kf(r).catch(console.error),{firebaseApp:t,firestore:r,auth:s}}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(n){const{heading:e}=n;return V("div",{class:_r.contentRow,children:[g("h3",{children:e}),g("button",{class:"icon",onClick:()=>NE(),children:e})]})}function RE(n){const{children:e}=n;return g("div",{class:_r.contentGrid,children:g("div",{class:_r.content,children:e})})}function OE(n){const{heading:e,children:t}=n;return V("div",{class:_r.contentRow,children:[V("h3",{children:["> ",e]}),t]})}function al(n){const{heading:e,children:t}=n;return V("div",{class:_r.contentRow,children:[V("h4",{children:["> ",e]}),t]})}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(){return V(RE,{children:[g(xE,{heading:"Logout"}),g(OE,{heading:"Chat with Support",children:g("p",{children:"We are here for you! Our support team is ready to answer your questions during our business hours."})}),V(al,{heading:"Business Hours",children:[g("p",{children:"We're open Monday through Friday, except on major holidays."}),V("ul",{children:[g("li",{children:"Mon: 7 a.m. - 9 p.m. ET"}),g("li",{children:"Tue: 7 a.m. - 9 p.m. ET"}),g("li",{children:"Wed: 7 a.m. - 9 p.m. ET"}),g("li",{children:"Thu: 7 a.m. - 8 p.m. ET"}),g("li",{children:"Fri: 9 a.m. - 5 p.m. ET"})]})]}),g(al,{heading:"Questions?",children:V("p",{children:["Check out our list of ",g("a",{href:"#",children:"Frequently Asked Questions"})," to see if the most common things other customers are asking about."]})})]})}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE extends Oe{render(e,t){return V(Ll,{children:[g(Ml,{children:g(vp,{})}),g(hg,{children:g(SE,ve({},e))})]})}}const ME="_signInContainerUnseen_1piy8_17",LE="_signInContainerSeen_1piy8_24",UE="_signInContainer_1piy8_17",VE="_signInHeader_1piy8_41";var No={signInContainerUnseen:ME,signInContainerSeen:LE,signInContainer:UE,signInHeader:VE};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(n){const{user:e,children:t,header:r}=n;return g("div",{class:No.signInContainer,children:V("main",{children:[g("header",{class:No.signInHeader,children:g("h4",{children:r})}),g("div",{children:t})]})})}function wp(n){return g("header",{class:No.signInHeader,children:g("h4",{children:n.children})})}const FE="_signInDivider_7ehze_17";var $E={signInDivider:FE};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(n){const{text:e}=n;return g("div",{children:g("div",{class:$E.signInDivider,children:e})})}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(n){const{onClick:e}=n;return g(nc,{text:"Sign in with Email",onClick:e,svg:()=>g(zE,{})})}function qE(n){const{onClick:e}=n;return g(nc,{text:"Sign in with Google",onClick:e,svg:()=>g(KE,{})})}function jE(n){const{text:e,onClick:t}=n;return g("button",{class:"icon",onClick:t,children:g("span",{children:e})})}function GE(n){const{onClick:e}=n;return g(nc,{text:"Sign in with Twitter",onClick:e,svg:()=>g(HE,{})})}function nc(n){const{svg:e,text:t,onClick:r}=n;return V("button",{class:"icon",onClick:r,children:[e(),g("span",{children:t})]})}function KE(){return g("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:g("path",{d:"M1.60106 4.22266C2.08639 3.26153 2.7869 2.42531 3.64809 1.77904C4.50929 1.13277 5.50797 0.693883 6.56644 0.496508C7.62492 0.299133 8.71465 0.348593 9.75089 0.64104C10.7871 0.933488 11.7419 1.46104 12.5411 2.18266L10.5311 4.19266C9.81116 3.50293 8.84791 3.12553 7.85106 3.14266C6.97896 3.15497 6.13267 3.44041 5.43128 3.95883C4.72988 4.47725 4.2087 5.20255 3.94106 6.03266C3.65287 6.89591 3.65287 7.82941 3.94106 8.69266C4.14031 9.30619 4.47821 9.86559 4.92854 10.3275C5.37888 10.7893 5.92955 11.1412 6.53785 11.3559C7.14615 11.5706 7.79573 11.6423 8.4362 11.5655C9.07668 11.4886 9.69085 11.2652 10.2311 10.9127C10.5937 10.6713 10.9039 10.3591 11.1427 9.99473C11.3816 9.6304 11.5443 9.22151 11.6211 8.79266H7.85106V6.09266H14.4511C14.5311 6.54266 14.5711 7.02266 14.5711 7.52266C14.5711 9.65266 13.8111 11.4427 12.4811 12.6627C11.2111 13.7992 9.55475 14.4074 7.85106 14.3627C6.65665 14.3633 5.48193 14.0583 4.43869 13.4767C3.39545 12.8951 2.51838 12.0562 1.89093 11.0399C1.26349 10.0235 0.906542 8.86354 0.854053 7.67028C0.801565 6.47701 1.05528 5.29017 1.59106 4.22266H1.60106Z",fill:"white"})})}function HE(){return g("svg",{width:"17",height:"14",viewBox:"0 0 17 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:g("path",{d:"M14.7154 4.13182C14.7251 4.27182 14.7251 4.41182 14.7251 4.55311C14.7251 8.85827 11.4477 13.8234 5.45476 13.8234V13.8208C3.68444 13.8234 1.95089 13.3163 0.460571 12.3602C0.717991 12.3912 0.9767 12.4067 1.23606 12.4073C2.70315 12.4086 4.12831 11.9163 5.28251 11.0099C3.88831 10.9834 2.66573 10.0744 2.23864 8.7473C2.72702 8.84149 3.23025 8.82214 3.7096 8.69117C2.1896 8.38407 1.09606 7.04859 1.09606 5.49762C1.09606 5.48343 1.09606 5.46988 1.09606 5.45633C1.54896 5.70859 2.05606 5.84859 2.57476 5.86407C1.14315 4.9073 0.701862 3.00278 1.56638 1.51375C3.22057 3.54923 5.66122 4.78665 8.28122 4.91762C8.01864 3.78601 8.37735 2.6002 9.2238 1.80472C10.5361 0.57117 12.5999 0.634396 13.8335 1.94601C14.5632 1.80214 15.2625 1.5344 15.9025 1.15504C15.6593 1.90923 15.1502 2.54988 14.4702 2.95698C15.1161 2.88085 15.747 2.70794 16.3412 2.44407C15.9038 3.09956 15.3528 3.67052 14.7154 4.13182Z",fill:"white"})})}function zE(){return g("svg",{width:"21",height:"17",viewBox:"0 0 21 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:g("path",{d:"M18.3942 0.533691H2.39417C1.29417 0.533691 0.404165 1.43369 0.404165 2.53369L0.394165 14.5337C0.394165 15.6337 1.29417 16.5337 2.39417 16.5337H18.3942C19.4942 16.5337 20.3942 15.6337 20.3942 14.5337V2.53369C20.3942 1.43369 19.4942 0.533691 18.3942 0.533691ZM18.3942 14.5337H2.39417V4.53369L10.3942 9.53369L18.3942 4.53369V14.5337ZM10.3942 7.53369L2.39417 2.53369H18.3942L10.3942 7.53369Z",fill:"#EDEBF3"})})}const WE="_socialButtons_1ftim_17";var cl={socialButtons:WE};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(n){const{onClick:e}=n;return V("div",{class:cl.signInSocial,children:[V("div",{class:cl.socialButtons,children:[g(qE,{onClick:t=>e(t,"google")}),g(GE,{onClick:t=>e(t,"twitter")})]}),g(BE,{text:"or"})]})}const JE="_signInForm_1fpqt_17",YE="_inputRow_1fpqt_24",QE="_inputControl_1fpqt_30",XE="_inputControlError_1fpqt_36 _inputControl_1fpqt_30",ZE="_inputError_1fpqt_51";var wn={signInForm:JE,inputRow:YE,inputControl:QE,inputControlError:XE,inputError:ZE};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(n){const{onSubmit:e}=n,t=Po(null),[r,s]=Cl({first:null,last:null,email:null,password:null});return g("form",{ref:t,method:"",noValidate:!0,onSubmit:i=>{i.preventDefault();const o=Tp(t),{hasErrors:a,errors:c}=bp(o);a?s(c):e(o)},children:V("div",{class:wn.signInForm,children:[V(It,{children:[g(en,{label:"First",name:"first",placeholder:"Sparky",error:r.first}),g(en,{label:"Last",name:"last",placeholder:"McFirebase",error:r.last})]}),g(It,{children:g(en,{label:"Email",name:"email",type:"email",placeholder:"sparkythebest@firebase.com",error:r.email})}),g(It,{children:g(en,{label:"Password",name:"password",type:"password",error:r.password})}),g(It,{children:g(Ip,{})})]})})}function tb(n){const{onSubmit:e}=n,t=Po(null),[r,s]=Cl({first:null,last:null,email:null,password:null});return g("form",{ref:t,method:"",noValidate:!0,onSubmit:i=>{i.preventDefault();const o=Tp(t),{hasErrors:a,errors:c}=bp(o);a?s(c):e(o)},children:V("div",{class:wn.signInForm,children:[g(It,{children:g(en,{label:"Email",name:"email",type:"email",placeholder:"sparkythebest@firebase.com",error:r.email})}),g(It,{children:g(en,{label:"Password",name:"password",type:"password",error:r.password})}),g(It,{children:g(Ip,{})})]})})}function It(n){const{children:e}=n;return g("div",{class:wn.inputRow,children:e})}function en(n){const{label:e,name:t,value:r,placeholder:s,type:i,error:o}=n,a=o!=null,c=a?g(nb,{message:o}):null,u=a?wn.inputControlError:wn.inputControl;return V("div",{class:u,children:[g("label",{htmlFor:t,children:e}),g("input",{name:t,type:i||"text",placeholder:s||"",value:r}),c]})}function nb(n){const{message:e}=n;return g("div",{class:wn.inputError,children:g("p",{children:e})})}function bp(n){let e={},t=!1;const r={email:/^\S+@\S+\.\S+$/,password:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/};return Object.keys(n).forEach(s=>{const i=n[s];i==""&&(e[s]="Can't be empty",t=!0),s==="email"&&(r.email.test(i)||(e[s]="Enter a valid email")),s==="password"&&(r.password.test(i)||(e[s]="Password must contain 8 characters, 1 uppercase, 1 lowercase, and 1 number"))}),{hasErrors:t,errors:e}}function Tp(n){const e=new FormData(n.current);return{first:e.get("first"),last:e.get("last"),email:e.get("email"),password:e.get("password")}}const rb="_painting_1x1rn_17",sb="_circleGroup_1x1rn_31",ib="_cornerLeft_1x1rn_37",ob="_cornerRight_1x1rn_44",ab="_bounceUp_1x1rn_1",cb="_bounceUpHigher_1x1rn_1",ub="_bounceUpHigherer_1x1rn_1",lb="_bounceUpHighest_1x1rn_1";var as={painting:rb,circleGroup:sb,cornerLeft:ib,cornerRight:ob,bounceUp:ab,bounceUpHigher:cb,bounceUpHigherer:ub,bounceUpHighest:lb};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(){return g("div",{class:as.painting,children:V("div",{class:as.circleGroup,children:[g("div",{class:as.cornerLeft,children:g(hb,{})}),g("div",{class:as.cornerRight,children:g(fb,{})}),g(db,{})]})})}function hb(){return V("svg",{width:"59",height:"69",viewBox:"0 0 59 69",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[g("circle",{opacity:"0.2",cx:"11.8049",cy:"34.6083",r:"11.4029",fill:"#C8BAF1"}),g("circle",{opacity:"0.2",cx:"46.6794",cy:"11.8025",r:"11.4029",fill:"#C8BAF1"}),g("circle",{opacity:"0.2",cx:"46.6794",cy:"57.4141",r:"11.4029",fill:"#C8BAF1"})]})}function db(){return V("svg",{width:"587",height:"100vh",viewBox:"0 0 587 251",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[g("circle",{cx:"460.896",cy:"125.5",r:"125.17",fill:"currentColor"}),g("circle",{cx:"375.566",cy:"125.5",r:"125.17",fill:"currentColor"}),g("circle",{cx:"250.397",cy:"125.5",r:"125.17",fill:"currentColor"}),g("circle",{cx:"125.227",cy:"125.5",r:"125.17",fill:"currentColor"})]})}function fb(){return V("svg",{width:"68",height:"70",viewBox:"0 0 68 70",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[g("ellipse",{opacity:"0.1",cx:"18.8638",cy:"17.6982",rx:"17.9698",ry:"17.1043",fill:"#C8BAF1"}),g("ellipse",{opacity:"0.3",cx:"55.2673",cy:"46.378",rx:"12.4552",ry:"11.5755",fill:"#C8BAF1"}),g("ellipse",{opacity:"0.2",cx:"13.3493",cy:"57.9536",rx:"12.4552",ry:"11.5755",fill:"#C8BAF1"})]})}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb extends Oe{render(e,t){return console.log("at SignIn, isSignIn value is: ",e.isSignIn),V(Pl,{appendClass:"theme-dark",children:[V(_p,{user:e.user,children:[g(wp,{children:"Sign in to your account"}),g(Ep,{onClick:(r,s)=>{console.log({type:s}),ol({type:s})}}),g(tb,{onSubmit:r=>{ol(ve({type:"email"},r))}}),g(jE,{onClick:()=>{this.props.setIsSignIn(!1)},text:"Sign Up"})]}),g(Sp,{})]})}}class gb extends Oe{render(e,t){return V(Pl,{appendClass:"theme-dark",children:[V(_p,{children:[g(wp,{children:"Create an account"}),g(Ep,{onClick:(r,s)=>{console.log({type:s});const i=!0;this.props.setIsSignIn(i),il({type:s})}}),g(eb,{onSubmit:r=>{il(ve({type:"email"},r))}})]}),g(Sp,{})]})}}/**
 * @license
 * 
 * 
 * 
 * 
 */function mb(){return g(Ll,{children:g(Ml,{children:g(vp,{})})})}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb extends Oe{constructor(){super();this.state={user:null,name:null,messages:[],isSignIn:!0}}componentDidMount(){wE(e=>{if(e!=null){const t=e.displayName;console.log("We define username here: ",t),this.setState(Be(ve({},this.state),{user:e,name:e.displayName})),console.log("INITIALIZE STATE WITH NAME: ",this.state.name),Un("/cases/fCBYR7HTFZJ2DNgk4Uqr",!0),console.log("onAuth has executed with user!=null")}else e==null&&(console.log("Right before routing, isSignIn value is: ",this.state.isSignIn),this.state.isSignIn?Un("/signin",!0):Un("/signup",!0))})}render(e,t){return this.state.isSignIn==!1&&Un("/signup",!0),V(xl,{children:[g(PE,Be(ve({},t),{path:"/cases/:caseId?",setMessages:r=>{this.setState(Be(ve({},t),{messages:r}))}})),g(pb,Be(ve({},t),{path:"/signin",setIsSignIn:r=>{console.log("at main, isSignIn value is: ",r),this.setState(Be(ve({},t),{isSignIn:r}))}})),g(gb,Be(ve({},t),{path:"/signup",setIsSignIn:r=>{console.log("at main, isSignIn value is: ",r),this.setState(Be(ve({},t),{isSignIn:r}))}})),g(mb,{path:"/case"})]})}}Ro(g(yb,{}),document.getElementById("app"));
