class t{setAnimation(t){this.animation=t,null==t||t.finished.then((()=>this.clearAnimation())).catch((()=>{}))}clearAnimation(){this.animation=this.generator=void 0}}const e=new WeakMap;function i(t){return e.has(t)||e.set(t,{transforms:[],values:new Map}),e.get(t)}function n(e,i){return e.has(i)||e.set(i,new t),e.get(i)}const s=(t,e,i)=>Math.min(Math.max(i,t),e),a={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},r=(t,e,i)=>-i*t+i*e+t,o=()=>{},c=t=>t,l=(t,e,i)=>e-t==0?1:(i-t)/(e-t);function h(t,e){const i=t[t.length-1];for(let n=1;n<=e;n++){const s=l(0,e,n);t.push(r(i,1,s))}}function u(t){const e=[0];return h(e,t-1),e}const d=t=>"number"==typeof t,f=t=>"object"==typeof t&&Boolean(t.createAnimation),m=t=>Array.isArray(t)&&d(t[0]),p=t=>Array.isArray(t)&&!d(t[0]),y=(t,e,i)=>{const n=e-t;return((i-t)%n+n)%n+t};function g(t,e){return p(t)?t[y(0,t.length,e)]:t}function v(t,e=u(t.length),i=c){const n=t.length,a=n-e.length;return a>0&&h(e,a),a=>{let o=0;for(;o<n-2&&!(a<e[o+1]);o++);let c=s(0,1,l(e[o],e[o+1],a));return c=g(i,o)(c),r(t[o],t[o+1],c)}}const w={ms:t=>1e3*t,s:t=>t/1e3},S=["","X","Y","Z"],T={x:"translateX",y:"translateY",z:"translateZ"},E={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},b={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:E,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:c},skew:E},A=new Map,k=t=>`--motion-${t}`,L=["x","y","z"];["translate","scale","rotate","skew"].forEach((t=>{S.forEach((e=>{L.push(t+e),A.set(k(t+e),b[t])}))}));const O=(t,e)=>L.indexOf(t)-L.indexOf(e),x=new Set(L),M=t=>x.has(t),D=(t,e)=>{T[e]&&(e=T[e]);const{transforms:n}=i(t);var s,a;a=e,-1===(s=n).indexOf(a)&&s.push(a),t.style.transform=I(n)},I=t=>t.sort(O).reduce(j,"").trim(),j=(t,e)=>`${t} ${e}(var(${k(e)}))`,q=t=>t.startsWith("--"),P=new Set;function C(t){if(!P.has(t)){P.add(t);try{const{syntax:e,initialValue:i}=A.has(t)?A.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:e,initialValue:i})}catch(t){}}}const R=(t,e,i)=>(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t;function H(t,e,i,n){if(t===e&&i===n)return c;const s=e=>function(t,e,i,n,s){let a,r,o=0;do{r=e+(i-e)/2,a=R(r,n,s)-t,a>0?i=r:e=r}while(Math.abs(a)>1e-7&&++o<12);return r}(e,0,1,t,i);return t=>0===t||1===t?t:R(s(t),e,n)}const V=(t,e="end")=>i=>{const n=(i="end"===e?Math.min(i,.999):Math.max(i,.001))*t,a="end"===e?Math.floor(n):Math.ceil(n);return s(0,1,a/t)},$={ease:H(.25,.1,.25,1),"ease-in":H(.42,0,1,1),"ease-in-out":H(.42,0,.58,1),"ease-out":H(0,0,.58,1)},F=/\((.*?)\)/;function z(t){if("function"==typeof t)return t;if(Array.isArray(t))return H(...t);if($[t])return $[t];if(t.startsWith("steps")){const e=F.exec(t);if(e){const t=e[1].split(",");return V(parseFloat(t[0]),t[1].trim())}}return c}class W{constructor(t,e=[0,1],{easing:i,duration:n=a.duration,delay:s=a.delay,endDelay:r=a.endDelay,repeat:o=a.repeat,offset:l,direction:h="normal"}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=c,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise(((t,e)=>{this.resolve=t,this.reject=e})),i=i||a.easing,f(i)){const t=i.createAnimation(e,(()=>"0"),!0);i=t.easing,void 0!==t.keyframes&&(e=t.keyframes),void 0!==t.duration&&(n=t.duration)}this.repeat=o,this.easing=p(i)?c:z(i),this.updateDuration(n);const u=v(e,l,p(i)?i.map(z):c);this.tick=e=>{var i;let n=0;n=void 0!==this.pauseTime?this.pauseTime:(e-this.startTime)*this.rate,this.t=n,n/=1e3,n=Math.max(n-s,0),"finished"===this.playState&&void 0===this.pauseTime&&(n=this.totalDuration);const a=n/this.duration;let o=Math.floor(a),c=a%1;!c&&a>=1&&(c=1),1===c&&o--;const l=o%2;("reverse"===h||"alternate"===h&&l||"alternate-reverse"===h&&!l)&&(c=1-c);const d=n>=this.totalDuration?1:Math.min(c,1),f=u(this.easing(d));t(f);void 0===this.pauseTime&&("finished"===this.playState||n>=this.totalDuration+r)?(this.playState="finished",null===(i=this.resolve)||void 0===i||i.call(this,f)):"idle"!==this.playState&&(this.frameRequestId=requestAnimationFrame(this.tick))},this.play()}play(){const t=performance.now();this.playState="running",void 0!==this.pauseTime?this.startTime=t-this.pauseTime:this.startTime||(this.startTime=t),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var t;this.playState="idle",void 0!==this.frameRequestId&&cancelAnimationFrame(this.frameRequestId),null===(t=this.reject)||void 0===t||t.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(t){this.duration=t,this.totalDuration=t*(this.repeat+1)}get currentTime(){return this.t}set currentTime(t){void 0!==this.pauseTime||0===this.rate?this.pauseTime=t:this.startTime=performance.now()-t/this.rate}get playbackRate(){return this.rate}set playbackRate(t){this.rate=t}}const B=t=>m(t)?N(t):t,N=([t,e,i,n])=>`cubic-bezier(${t}, ${e}, ${i}, ${n})`,U=t=>document.createElement("div").animate(t,{duration:.001}),Y={cssRegisterProperty:()=>"undefined"!=typeof CSS&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{U({opacity:[1]})}catch(t){return!1}return!0},finished:()=>Boolean(U({opacity:[0,1]}).finished)},_={},K={};for(const t in Y)K[t]=()=>(void 0===_[t]&&(_[t]=Y[t]()),_[t]);function X(t,e){for(let i=0;i<t.length;i++)null===t[i]&&(t[i]=i?t[i-1]:e());return t}const Z=t=>Array.isArray(t)?t:[t];function G(t){return T[t]&&(t=T[t]),M(t)?k(t):t}const J={get:(t,e)=>{e=G(e);let i=q(e)?t.style.getPropertyValue(e):getComputedStyle(t)[e];if(!i&&0!==i){const t=A.get(e);t&&(i=t.initialValue)}return i},set:(t,e,i)=>{e=G(e),q(e)?t.style.setProperty(e,i):t.style[e]=i}};function Q(t,e=!0){if(t&&"finished"!==t.playState)try{t.stop?t.stop():(e&&t.commitStyles(),t.cancel())}catch(t){}}function tt(t,e,s,r={}){const c=window.__MOTION_DEV_TOOLS_RECORD,l=!1!==r.record&&c;let h,{duration:u=a.duration,delay:m=a.delay,endDelay:y=a.endDelay,repeat:g=a.repeat,easing:v=a.easing,direction:S,offset:T,allowWebkitAcceleration:E=!1}=r;const b=i(t);let k=K.waapi();const L=M(e);L&&D(t,e);const O=G(e),x=n(b.values,O),I=A.get(O);return Q(x.animation,!(f(v)&&x.generator)&&!1!==r.record),()=>{const i=()=>{var e,i;return null!==(i=null!==(e=J.get(t,O))&&void 0!==e?e:null==I?void 0:I.initialValue)&&void 0!==i?i:0};let n=X(Z(s),i);if(f(v)){const t=v.createAnimation(n,i,L,O,x);v=t.easing,void 0!==t.keyframes&&(n=t.keyframes),void 0!==t.duration&&(u=t.duration)}if(q(O)&&(K.cssRegisterProperty()?C(O):k=!1),k){I&&(n=n.map((t=>d(t)?I.toDefaultUnit(t):t))),1!==n.length||K.partialKeyframes()&&!l||n.unshift(i());const e={delay:w.ms(m),duration:w.ms(u),endDelay:w.ms(y),easing:p(v)?void 0:B(v),direction:S,iterations:g+1,fill:"both"};h=t.animate({[O]:n,offset:T,easing:p(v)?v.map(B):void 0},e),h.finished||(h.finished=new Promise(((t,e)=>{h.onfinish=t,h.oncancel=e})));const s=n[n.length-1];h.finished.then((()=>{J.set(t,O,s),h.cancel()})).catch(o),E||(h.playbackRate=1.000001)}else if(L){n=n.map((t=>"string"==typeof t?parseFloat(t):t)),1===n.length&&n.unshift(parseFloat(i()));h=new W((e=>{I&&(e=I.toDefaultUnit(e)),J.set(t,O,e)}),n,Object.assign(Object.assign({},r),{duration:u,easing:v}))}else{const e=n[n.length-1];J.set(t,O,I&&d(e)?I.toDefaultUnit(e):e)}return l&&c(t,e,n,{duration:u,delay:m,easing:v,repeat:g,offset:T},"motion-one"),x.setAnimation(h),h}}const et=(t,e)=>t[e]?Object.assign(Object.assign({},t),t[e]):Object.assign({},t);function it(t,e){var i;return"string"==typeof t?e?(null!==(i=e[t])&&void 0!==i||(e[t]=document.querySelectorAll(t)),t=e[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}const nt=t=>t(),st=(t,e,i=a.duration)=>new Proxy({animations:t.map(nt).filter(Boolean),duration:i,options:e},at),at={get:(t,e)=>{const i=t.animations[0];switch(e){case"duration":return t.duration;case"currentTime":return w.s((null==i?void 0:i[e])||0);case"playbackRate":case"playState":return null==i?void 0:i[e];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(rt)).catch(o)),t.finished;case"stop":return()=>{t.animations.forEach((t=>Q(t)))};case"forEachNative":return e=>{t.animations.forEach((i=>e(i,t)))};default:return void 0===(null==i?void 0:i[e])?void 0:()=>t.animations.forEach((t=>t[e]()))}},set:(t,e,i)=>{switch(e){case"currentTime":i=w.ms(i);case"currentTime":case"playbackRate":for(let n=0;n<t.animations.length;n++)t.animations[n][e]=i;return!0}return!1}},rt=t=>t.finished;function ot(t,e,i){return"function"==typeof t?t(e,i):t}function ct(t,e,i={}){const n=(t=it(t)).length,s=[];for(let a=0;a<n;a++){const r=t[a];for(const t in e){const o=et(i,t);o.delay=ot(o.delay,a,n);const c=tt(r,t,e[t],o);s.push(c)}}return st(s,i,i.duration)}function lt(t,e={}){return st([()=>{const i=new W(t,[0,1],e);return i.finished.catch((()=>{})),i}],e,e.duration)}function ht(t,e,i){return("function"==typeof t?lt:ct)(t,e,i)}function ut(t,e){const i=e-document.getElementById("cepkoncept-navbar").offsetHeight-t;ht((e=>{window.scrollTo(0,t+i*e)}),{duration:2,easing:[.17,.85,.438,.99]})}const dt=Array.from(document.querySelectorAll(".cepkoncept-hero .view-more")),ft=document.getElementById("cepkoncept-projects");dt.forEach((t=>t.addEventListener("click",(t=>{const e=+(ft.dataset.scrollOffset??0);ft instanceof HTMLElement&&ut(window.pageYOffset,ft.offsetTop+e)}))));function mt(t){t instanceof HTMLElement&&(0!==window.pageYOffset?t.classList.add("fixed"):t.classList.remove("fixed"))}document.addEventListener("scroll",(()=>{mt(document.getElementById("cepkoncept-navbar"))})),document.body.onload=function(){mt(document.getElementById("cepkoncept-navbar"))};var pt={};const yt=document.documentElement.clientWidth<document.documentElement.clientHeight,gt=new class{constructor(t,{focusPosition:e,animConfig:i,slideshowConfig:n}){this.sliderId=t,this.slideshowTimer=0,this.listeners=[],this.playState="pause",this.inView=!1;const{slider:s,wrapper:a,focus:r}=this.initializeSlider(t);this.slider=s,this.wrapper=a,this.focus=r,this.animConfig=i,this.focusPosition=e,this.slideshowConfig=n,this.initializeListeners(),this.initializeObservers()}initializeSlider(t){const e=document.querySelector(`[data-slider=${t}]`),i=e?.querySelector("[data-wrapper]"),n=i?.querySelector("[data-focus]");if(!(n instanceof HTMLElement))throw new Error("Focus not specified");if(!(i instanceof HTMLElement))throw new Error("Wrapper not specified");if(!(e instanceof HTMLElement))throw new Error("Slider not a HTMLElement");return e.style.overflow="hidden",e.style.position="relative",i.style.display="flex",i.style.position="absolute",{slider:e,wrapper:i,focus:n}}initializeListeners(){const t=document.querySelector(`[data-left=${this.sliderId}]`),e=document.querySelector(`[data-right=${this.sliderId}]`);t?.addEventListener("click",(()=>{this.jumpToSlide(this.currentSlideNo()-1),this.move()})),e?.addEventListener("click",(()=>{this.jumpToSlide(this.currentSlideNo()+1),this.move()}))}initializeObservers(){const t=new ResizeObserver((t=>this.move()));t.observe(this.slider),Array.from(this.wrapper.children).forEach((e=>t.observe(e)));new IntersectionObserver((t=>{this.inView=t[0].isIntersecting,this.inView&&"play"==this.playState?this.beginSlideshow():this.endSlideshow()}),{threshold:1}).observe(this.slider)}move(){const t=this.computeFocusPoint()-this.focus.offsetLeft-this.wrapper.offsetLeft;return ht(this.wrapper,{x:t},this.animConfig)}changeFocus(t){const e=this.focus,i=this.wrapper.children[t];return i instanceof HTMLElement?(e.toggleAttribute("data-focus"),i.toggleAttribute("data-focus"),this.focus=i,{prev:e,focus:i}):{prev:e,focus:e}}computeFocusPoint(){switch(this.focusPosition){case"start":return 0;case"center":return(this.slider.offsetWidth-this.focus.offsetWidth)/2;case"end":return this.slider.offsetWidth-this.focus.offsetWidth}}currentSlideNo(){return Array.from(this.wrapper.children).findIndex((t=>t===this.focus))}jumpToSlide(t){const{prev:e,focus:i}=this.changeFocus(t),n=this.move();this.listeners.forEach((t=>t({animCtrls:n,prev:e,focus:i,slider:this.slider,slideNo:this.currentSlideNo()})))}beginSlideshow(){if(!this.slideshowConfig)return;const t=this.wrapper.children.length;this.slideshowTimer=setInterval((()=>{this.jumpToSlide((this.currentSlideNo()+1)%t)}),1e3*this.slideshowConfig.duration)}endSlideshow(){this.slideshowConfig&&clearInterval(this.slideshowTimer)}play(){this.playState="play",this.inView&&this.beginSlideshow()}pause(){this.playState="pause",this.endSlideshow()}on(t,e){this.listeners.push(e)}}("projects-slider",{focusPosition:yt?"center":"start",animConfig:{duration:.5,easing:[.767,.01,.18,1.01]}});!function(){const t=document.querySelector(".projects-pagination"),e=Array.from(t?.children||[]);t instanceof HTMLElement&&t.addEventListener("click",(t=>{const i=e.findIndex((e=>e===t.target)),n=e.findIndex((t=>t.classList.contains("active")));gt.jumpToSlide(i),e[i]&&(e[n]?.classList.toggle("active"),e[i]?.classList.toggle("active"))}))}();const vt=document.getElementById("year");if(vt instanceof HTMLElement){const t=new Date(Date.now()).getFullYear();vt.textContent=`${t}`}const wt=Array.from(document.querySelectorAll("[data-nav-link]")),St=Array.from(document.querySelectorAll("[data-nav-target]")),Tt=new IntersectionObserver((t=>{t.forEach((t=>{const e=t.target.dataset.navTarget,i=wt.find((t=>t.dataset.navLink===e));i instanceof HTMLElement&&t.isIntersecting&&(wt.forEach((t=>t.classList.remove("active"))),i.classList.add("active"))}))}),{threshold:.2});St.forEach((t=>Tt.observe(t))),wt.forEach((t=>{t.addEventListener("click",(e=>{e.preventDefault();const i=document.querySelector(`[data-nav-target=${t.dataset.navLink}]`);if(!(i instanceof HTMLElement))return;const n=+(i.dataset.scrollOffset??0);ut(window.pageYOffset,i.offsetTop+n)}))}));
//# sourceMappingURL=index.6d2fc8f2.js.map
