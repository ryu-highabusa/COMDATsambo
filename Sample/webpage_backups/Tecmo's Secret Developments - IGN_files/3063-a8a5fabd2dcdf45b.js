"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3063],{13720:function(e,t,i){i.d(t,{Go:function(){return x},dW:function(){return u}}),i(63553);var n=i(59499),a=i(4730),s=i(67294),o=i(97842),r=i(85893),l=["indexUpdated","isSlideshow","adFrequency","sliderAdsDisabled","children"];function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach(function(t){(0,n.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var m=s.createContext({index:0});m.Consumer;var u=function(e){var t=e.indexUpdated,i=e.isSlideshow,n=void 0===i||i,c=e.adFrequency,u=e.sliderAdsDisabled,x=e.children,f=(0,a.Z)(e,l),p=(0,s.useState)(0),y=p[0],w=p[1],h=(0,s.useState)(0),b=h[0],g=h[1],j=(0,s.useState)(!1),v=j[0],k=j[1];return(0,s.useEffect)(function(){u&&k(!1)},[u]),(0,s.useEffect)(function(){0===b||b%c!=0||u||k(!0)},[b,c,u]),(0,r.jsx)(m.Provider,{value:{index:y,isAdBreak:v,setIsAdBreak:k,changeCurrentIndex:function(e){var i=e.index,a=e.isThumbnail,s=void 0!==a&&a;return function(){if(n){var e=null==f?void 0:f.content,a=null==f?void 0:f.position,r=(0,o.abn)(d(d({},e),{},{contentType:"slideshow"}));(0,o.vYk)("slideshow_open",d({event_category:"Content",event_action:"Slideshow",event_label:"Open",engagement:1,position:a},r)),s&&(0,o.vYk)("slideshow_thumbnail",d({event_category:"Content",event_action:"Slideshow",event_label:"Thumbnail Open",position:a},r))}return w(i),t&&t()}},changeIndex:function(e){var t=e.index;return function(){if(n){var e=null==f?void 0:f.content,i=null==f?void 0:f.position,a=(0,o.abn)(d(d({},e),{},{contentType:"slideshow"}));(0,o.vYk)("slideshow_changeslide",d({event_category:"Content",event_action:"Slideshow",event_label:"Change Slide",engagement:1,position:i},a)),(0,o.uLU)()}w(t),g(function(e){return e+1})}}},children:x})},x=function(){return(0,s.useContext)(m)}},13063:function(e,t,i){i.d(t,{Z:function(){return er}});var n=i(19848),a=i.n(n),s=i(67294),o=i(21993),r=i(14180),l=i(13720),c=i(96809),d=i(51841),m=i(55727),u=i(38509),x=i(2238),f=i(43955),p=i(93967),y=i.n(p),w=i(78476),h=i(38731),b=i(85893),g=(0,s.memo)(function(e){var t=e.isAdBreak,i=e.slug,n=e.title,o=e.caption,l=e.rightRailAdDisabled,c=(0,s.useMemo)(function(){return o&&(0,b.jsx)(h.Z,{html:o,element:(0,b.jsx)(u.Z,{})})},[o]);return(0,b.jsxs)("div",{className:a().dynamic([["2533015627",[r.Z.mediumPlusDownOrLandscape,w.DB]]])+" "+(y()("slideshow-rail",{hidden:t})||""),children:[(0,b.jsx)("div",{"data-cy":"image-info",className:a().dynamic([["2533015627",[r.Z.mediumPlusDownOrLandscape,w.DB]]])+" image-info",children:(0,b.jsxs)(d.Z,{condition:void 0!==i,wrapper:(0,b.jsx)(m.Z,{type:"slideshow",params:{slug:i}}),children:[(0,b.jsx)(x.Z,{className:"title",children:n}),c]})}),!l&&(0,b.jsx)("div",{className:a().dynamic([["2533015627",[r.Z.mediumPlusDownOrLandscape,w.DB]]])+" ad",children:(0,b.jsx)(f.Z,{mixName:"slideshow",position:"slideshow"})}),(0,b.jsx)(a(),{id:"2533015627",dynamic:[r.Z.mediumPlusDownOrLandscape,w.DB],children:[".slideshow-rail.__jsx-style-dynamic-selector{width:300px;height:calc(100vh - 100px);-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;gap:var(--lessStandardSpacer);overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:var(--standardSpacer);padding-bottom:60px;}",".slideshow-rail.__jsx-style-dynamic-selector .image-info.__jsx-style-dynamic-selector{overflow:hidden auto;min-height:50px;}",".slideshow-rail.__jsx-style-dynamic-selector .image-info.__jsx-style-dynamic-selector a{color:inherit;}",".slideshow-rail.__jsx-style-dynamic-selector .image-info.__jsx-style-dynamic-selector a:hover{-webkit-text-decoration:underline;text-decoration:underline;}",".slideshow-rail.__jsx-style-dynamic-selector .image-info.__jsx-style-dynamic-selector .title{margin-bottom:var(--minimumSpacer);}",".slideshow-rail.hidden.__jsx-style-dynamic-selector{display:none;}",".ad{text-align:center;margin-top:auto;}",".ad:after{content:'ADVERTISEMENT';font-size:0.688em;}","@media ".concat(r.Z.mediumPlusDownOrLandscape,"{.slideshow-rail.__jsx-style-dynamic-selector{max-height:25%;width:100%;}.slideshow-rail.__jsx-style-dynamic-selector .image-info.__jsx-style-dynamic-selector{overflow:auto;}.slideshow-rail.__jsx-style-dynamic-selector{background:var(--theme-elements-slideshow-bottomCaptionBackground);padding:0 var(--lessCompactSpacer) var(--minimumSpacer);padding-top:var(--veryCompactSpacer);margin:0;position:absolute;bottom:0;z-index:var(--maxZIndex);}.modal-overlay.dark-theme .slideshow-rail{background:").concat(w.DB,";}}")]})]})}),j=i(97842),v=i(90260),k=i(4602),_=i(17316),O=i(14744),Z=i(16174),D=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},P=function(){var e=(0,s.useState)(D()),t=e[0],i=e[1];return(0,s.useEffect)(function(){function e(){i(D())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),t},L=i(86220),S=i(77529),N=i(59499),C=i(90116),A=i(17674),I=i(64565),E=i(86059),M=i(66769),B=(0,i(39145).V)("IconGrid"),z=i(55446);function R(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function T(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?R(Object(i),!0).forEach(function(t){(0,N.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):R(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}var q=(0,s.memo)(function(e){var t=e.isShowingGallery,i=e.goBack,n=e.showGallery,o=e.onClose,l=e.index,c=void 0===l?0:l,d=e.total,m=(0,s.useCallback)(function(){n(),(0,j.vYk)("slideshow_gallery",{event_category:"Content",event_action:"Slideshow",event_label:"Gallery",engagement:1})},[n]),u=(0,s.useMemo)(function(){return(0,b.jsx)(I.Z,{"data-cy":"image-gallery",title:"Image Gallery",onClick:m,children:(0,b.jsx)(B,{"data-cy":"icon-image-gallery",size:"small",title:"Image Gallery"})})},[m]),f=(0,s.useMemo)(function(){return(0,b.jsx)(I.Z,{"data-cy":"image-back",title:"Back",onClick:i,children:(0,b.jsx)(M.Z,{"data-cy":"icon-image-back",size:"small",title:"Back"})})},[i]),p=(0,s.useRef)(null),h=(0,s.useState)(null),g=h[0],v=h[1],k=(0,s.useState)(c),_=k[0],O=k[1],Z=(0,s.useMemo)(function(){return o&&(0,b.jsx)(E.Z,{"data-cy":"icon-close",size:"small",onClick:o})},[o]),D=g?(g-6*(d-1))/d:0,P=(0,z.q_)(function(){return{to:{x:c*(D+6)}}},[c,D]),L=(0,A.Z)(P,2),S=L[0],N=L[1],R=(0,s.useRef)(null);(0,s.useEffect)(function(){var e=p.current;if(e){var t=new ResizeObserver(function(e){var t,i=function(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return G(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return G(e,t)}}(e))){i&&(e=i);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,r=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return o=e.done,e},e:function(e){r=!0,s=e},f:function(){try{o||null==i.return||i.return()}finally{if(r)throw s}}}}(e);try{for(i.s();!(t=i.n()).done;){var n=t.value;v(n.contentRect.width)}}catch(e){i.e(e)}finally{i.f()}});return t.observe(e),function(){t.disconnect()}}},[]);var q=(0,s.useMemo)(function(){return{width:D}},[D]);return(0,s.useEffect)(function(){R.current&&c!==_&&(N.start({from:{x:_*(D+6)},to:{x:c*(D+6)}}),O(c))},[c,_,N,D]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:a().dynamic([["391520938",[60,r.Z.mediumPlusDownOrLandscape,w.oA]]])+" slideshow-header",children:[!t&&(0,b.jsxs)("div",{ref:p,className:a().dynamic([["391520938",[60,r.Z.mediumPlusDownOrLandscape,w.oA]]])+" progress",children:[(0,C.Z)(Array(d)).map(function(e,t){return(0,b.jsx)("div",{style:q,className:a().dynamic([["391520938",[60,r.Z.mediumPlusDownOrLandscape,w.oA]]])+" bar"},t)}),(0,b.jsx)(z.q.div,{className:y()("bar","bar-current"),style:T(T({},q),S),ref:R})]}),(0,b.jsxs)("div",{className:a().dynamic([["391520938",[60,r.Z.mediumPlusDownOrLandscape,w.oA]]])+" buttons-bar",children:[t?f:u,(0,b.jsx)(x.Z,{"data-cy":"caption",children:t?"".concat(d," images"):"".concat(c+1," of ").concat(d)}),Z]})]}),(0,b.jsx)(a(),{id:"391520938",dynamic:[60,r.Z.mediumPlusDownOrLandscape,w.oA],children:[".slideshow-header{background:var(--theme-elements-slideshow-headerBackground);padding:var(--lessCompactSpacer) ".concat(60,"px;}"),".slideshow-header .buttons-bar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".slideshow-header .buttons-bar .caption{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".slideshow-header .progress{position:relative;width:100%;height:2px;margin-bottom:var(--lessCompactSpacer);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".slideshow-header .progress .bar{height:100%;background-color:var(--neutral-translucent-50);}",".slideshow-header .progress .bar-current{background-color:var(--theme-elements-slideshow-activeBar);position:absolute;left:0;}","@media ".concat(r.Z.mediumPlusDownOrLandscape,"{.slideshow-header{padding:var(--lessCompactSpacer);position:absolute;width:100%;z-index:var(--maxZIndex);}}"),".modal-overlay.dark-theme .slideshow-header{background:".concat(w.oA,";}"),".modal-overlay.dark-theme .bar-current{background-color:var(--neutralWhite);}"]})]})}),F={backdropFilter:"blur(0.5em)"},Q=function(e){var t=e.total,i=e.items,n=e.paginationCount,o=e.error,l=e.loading,d=e.loadingMore,m=e.shouldLoadMore,u=e.onLoadMore,x=e.hide,f=e.changeIndex,p=e.goBack,y=e.onClose,w=e.rightRailAdDisabled,h=e.slug,D=e.title,N=function(e){var t=e.index;return function(){return f({index:t})(),x()}},C=(0,L.Z)("".concat(r.Z.mediumPlusDownOrLandscape)),A=P(),I=A.width,E=A.height,M=C?I<E?(I-120-4*S.Ih)/2-2:(I-120-4*S.Ih*3)/4-2:194,B=(0,s.useMemo)(function(){return{width:"".concat(M,"px")}},[M]),z=(0,s.useMemo)(function(){return{crop:"1:1",width:M}},[M]),R=(0,s.useMemo)(function(){return(0,b.jsx)(_.Z,{sx:B})},[B]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(q,{goBack:p,total:t,isShowingGallery:!0,onClose:y}),(0,b.jsxs)("div",{className:a().dynamic([["3342741858",[r.Z.mediumPlusDownOrLandscape,r.Z.mediumPlusDownOrLandscape,r.Z.mediumPlusDownOrLandscape]]])+" content",children:[(0,b.jsx)(c.Z,{direction:"row",className:"stack",spacing:4,children:(0,b.jsxs)(O.DP,{items:i,error:o,skeleton:R,count:void 0===n?12:n,loading:l,loadingMore:d,fallback:(0,b.jsx)("p",{className:a().dynamic([["3342741858",[r.Z.mediumPlusDownOrLandscape,r.Z.mediumPlusDownOrLandscape,r.Z.mediumPlusDownOrLandscape]]]),children:"No Images"}),children:[i.map(function(e,t){var i=e.url,n=e.caption,a=e.embargoDate,s=!isNaN(Date.parse(a));return(0,b.jsxs)(k.ZP,{"data-cy":"view-image",tag:"button",type:"button",onClick:N({index:t}),"aria-label":"View Image",aspectRatio:"1:1",sx:B,children:[(0,b.jsx)(Z.ZP,{aspectRatio:"1:1",src:i,imageOptions:z,alt:n||"",shape:"rounded",hoverOpacity:!0}),s&&(0,b.jsx)(v.Z,{shape:"rounded",label:"Embargoed",title:"Embargoed until ".concat((0,j.J8E)(a)),sx:F})]},t)}),m&&(0,b.jsx)(k.ZP,{"data-cy":"load-more",tag:"button",type:"button",onClick:u,"aria-label":"Load More",aspectRatio:"1:1",sx:B,children:(0,b.jsx)(v.Z,{shape:"rounded",label:"Load More"})},"load-more")]})}),(0,b.jsx)(g,{rightRailAdDisabled:w,title:D,slug:h})]}),(0,b.jsx)(a(),{id:"3342741858",dynamic:[r.Z.mediumPlusDownOrLandscape,r.Z.mediumPlusDownOrLandscape,r.Z.mediumPlusDownOrLandscape],children:[".content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;overflow:hidden auto;padding:0 60px;}","@media ".concat(r.Z.mediumPlusDownOrLandscape,"{.content.__jsx-style-dynamic-selector .sidebar{display:none;}}"),"@media ".concat(r.Z.mediumPlusDownOrLandscape,"{.content.__jsx-style-dynamic-selector .slideshow-rail{display:none;}}"),".content.__jsx-style-dynamic-selector .stack{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:100%;overflow:auto;}","@media ".concat(r.Z.mediumPlusDownOrLandscape,"{.content.__jsx-style-dynamic-selector .stack{padding-top:60px;}}"),".content.__jsx-style-dynamic-selector .stack{padding-bottom:60px;}",".content.__jsx-style-dynamic-selector .stack .progressive-image{width:100%;}"]})]})},Y=i(50029),U=i(87794),V=i.n(U),W=i(45338),X=i(59565),J=i(47735),$=i(98195),H=i(64717);function K(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function ee(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?K(Object(i),!0).forEach(function(t){(0,N.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):K(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var et=function(e){var t,i=e.items,n=e.index,s=e.children,o=null==i?void 0:null===(t=i[n])||void 0===t?void 0:t.url;return o?(0,b.jsxs)(m.Z,{type:"image",action:"download",params:{src:o},children:[s,(0,b.jsx)(a(),{id:"2171482729",children:[".ee{height:100%;}"]})]}):s},ei=function(e){var t=e.index,i=e.slideIndex,n=e.total,a=e.effect,s=e.children,o=i===t,r="left"===a?0===t?i===n-1:i===t-1:t===n-1?0===i:i===t+1;return(0,b.jsx)("div",{"data-cy":"slide-".concat(i),id:"slide-".concat(i),"data-index":i,className:y()("slide-container",a,{active:o},{"no-longer-active":r}),children:s},i)},en=function(){var e=(0,l.Go)(),t=e.isAdBreak,i=e.setIsAdBreak,n=(0,s.useState)(!0),o=n[0],r=n[1];(0,s.useEffect)(function(){var e;return t&&(r(!0),e=setTimeout(function(){return r(!1)},2500)),function(){return clearTimeout(e)}},[t]);var c=(0,s.useCallback)(function(){(0,j.vYk)("slideshow_continueButton",{event_category:"Content",event_action:"Slideshow",event_label:"Continue Button",engagement:1}),i(!1);var e=document.querySelector('.slide-ad-container [data-pos="slideshow"]');if(e){var t,n,a=e.id;null===(t=window)||void 0===t||null===(n=t.Pogo)||void 0===n||n.refreshAds([a])}},[i]);return(0,b.jsxs)("div",{"data-cy":"slide-ad",className:"jsx-2899523912 "+(y()("slide-ad-container",{active:t})||""),children:[(0,b.jsx)(f.Z,{mixName:"mrecAd",position:"slideshow"}),(0,b.jsxs)("div",{className:"jsx-2899523912 row",children:[(0,b.jsx)(x.Z,{children:"ADVERTISEMENT"}),(0,b.jsx)($.Z,{className:y()("continue-button",{disabled:o}),type:"button",size:"small",color:"primary",disabled:o,onAnimationEnd:function(){return r(!1)},onClick:c,children:"Continue"})]}),(0,b.jsx)(a(),{id:"2899523912",children:[".pogo-slot{background-color:var(--neue-gray-90);}",".slide-ad-container.jsx-2899523912{pointer-events:all;position:absolute;left:-100vw;padding:0;margin:0;height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:var(--compactSpacer);}",".slide-ad-container.active.jsx-2899523912{left:0;}",".slide-ad-container.jsx-2899523912 .row.jsx-2899523912{position:absolute;bottom:var(--compactSpacer);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0 60px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}",".slide-ad-container.jsx-2899523912 .row.jsx-2899523912 .continue-button{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;max-height:-webkit-fit-content;max-height:-moz-fit-content;max-height:fit-content;}",".slide-ad-container.jsx-2899523912 .row.jsx-2899523912 .continue-button.disabled{background:linear-gradient( to left, var(--theme-elements-button-disabled-background) 50%, var(--theme-elements-button-primary-default-background) 50% ) right;background-size:200%;-webkit-animation:fade-in-jsx-2899523912 1.75s 0.25s;animation:fade-in-jsx-2899523912 1.75s 0.25s;}","@-webkit-keyframes fade-in-jsx-2899523912{100%{background-position:left;}}","@keyframes fade-in-jsx-2899523912{100%{background-position:left;}}"]})]})},ea=function(){return{from:{opacity:0}}},es=function(e){var t;return e.start({to:(t=(0,Y.Z)(V().mark(function e(t){return V().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({opacity:1,config:{duration:200}});case 2:return e.next=4,t({opacity:0,config:{duration:200}});case 4:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)})})},eo=function(e){var t=e.items,i=e.loading,n=e.adsDisabled,o=e.index,c=e.itemTotal,d=e.onLoadMore,m=e.changeIndex,u=e.shouldLoadMore,x=e.allowBack,f=(0,l.Go)().isAdBreak,p=(0,s.useState)("left"),w=p[0],h=p[1],g=(0,s.useCallback)(function(){if(x){if("left"===w&&h("right"),0===o)return m({index:c-1})();m({index:o-1})()}},[m,w,o,c,x]),k=(0,s.useCallback)(function(){if("right"===w&&h("left"),o===c-1){if(!u)return m({index:0})();requestAnimationFrame(d)}m({index:o+1})()},[m,w,o,c,d,u]),_=(0,W.QS)({onSwipedLeft:k,onSwipedRight:g,preventScrollOnSwipe:!0,trackMouse:!0});(0,X.Z)("ArrowLeft",g),(0,X.Z)("ArrowRight",k);var O=(0,z.q_)(ea),D=(0,A.Z)(O,2),P=D[0],L=D[1],S=(0,z.q_)(ea),N=(0,A.Z)(S,2),C=N[0],I=N[1],E=(0,s.useCallback)(function(){es(I),k()},[I,k]),B=(0,s.useCallback)(function(){es(L),g()},[L,g]);return(0,b.jsxs)("div",ee(ee({},_),{},{className:a().dynamic([["3265082504",[r.Z.mediumPlusDownOrLandscape,r.Z.mediumPlusDownOrLandscape]]])+" "+(_&&null!=_.className&&_.className||"slider"),children:[!n&&(0,b.jsx)(en,{}),(0,b.jsx)("div",{"data-cy":"slides",className:a().dynamic([["3265082504",[r.Z.mediumPlusDownOrLandscape,r.Z.mediumPlusDownOrLandscape]]])+" "+(y()("slides",{hidden:f})||""),children:(0,b.jsx)(J.Z,{loading:i,size:"xlarge",color:"#d1d5db",children:(0,b.jsxs)(et,{items:t,index:o,children:[(0,j.$Nq)(t,o,2).map(function(e,i){var n,s=e.url,l=e.embargoDate;5>=t.length?n=i:(n=o+(i-2))<0?n=t.length+n:n>t.length-1&&(n-=t.length);var c=!isNaN(Date.parse(l));return(0,b.jsx)(ei,{index:o,slideIndex:n,total:t.length,effect:w,children:(0,b.jsxs)("div",{className:a().dynamic([["3265082504",[r.Z.mediumPlusDownOrLandscape,r.Z.mediumPlusDownOrLandscape]]])+" "+(y()("slide-wrapper",{embargoed:c})||""),children:[(0,b.jsx)("div",{"data-cy":"slide",className:a().dynamic([["3265082504",[r.Z.mediumPlusDownOrLandscape,r.Z.mediumPlusDownOrLandscape]]])+" slide",children:(0,b.jsxs)("picture",{className:a().dynamic([["3265082504",[r.Z.mediumPlusDownOrLandscape,r.Z.mediumPlusDownOrLandscape]]]),children:[(0,b.jsx)("source",{srcSet:(0,j.sQv)(s,{width:1400}),media:"(min-width: 1441px)",className:a().dynamic([["3265082504",[r.Z.mediumPlusDownOrLandscape,r.Z.mediumPlusDownOrLandscape]]])}),(0,b.jsx)("source",{srcSet:(0,j.sQv)(s,{width:1e3}),media:"(min-width: 1041px)",className:a().dynamic([["3265082504",[r.Z.mediumPlusDownOrLandscape,r.Z.mediumPlusDownOrLandscape]]])}),(0,b.jsx)("source",{srcSet:(0,j.sQv)(s,{width:820}),media:"(min-width: 861px)",className:a().dynamic([["3265082504",[r.Z.mediumPlusDownOrLandscape,r.Z.mediumPlusDownOrLandscape]]])}),(0,b.jsx)("source",{srcSet:(0,j.sQv)(s,{width:600}),media:"(max-width: 640px)",className:a().dynamic([["3265082504",[r.Z.mediumPlusDownOrLandscape,r.Z.mediumPlusDownOrLandscape]]])}),(0,b.jsx)(Z.ZP,{src:s,alt:"Image ".concat(n+1),fitToContainer:!0})]})}),c&&(0,b.jsx)(v.Z,{label:"embargoed until ".concat((0,j.J8E)(l)),sx:{backdropFilter:"blur(0.5em)"}})]})},n)}),(0,b.jsxs)("div",{className:a().dynamic([["3265082504",[r.Z.mediumPlusDownOrLandscape,r.Z.mediumPlusDownOrLandscape]]])+" areas-container",children:[(0,b.jsx)("div",{onClick:B,className:a().dynamic([["3265082504",[r.Z.mediumPlusDownOrLandscape,r.Z.mediumPlusDownOrLandscape]]])+" area",children:(0,b.jsx)(z.q.div,{className:y()("arrow","arrow-left"),style:P,children:(0,b.jsx)(M.Z,{size:"small"})})}),(0,b.jsx)("div",{onClick:E,className:a().dynamic([["3265082504",[r.Z.mediumPlusDownOrLandscape,r.Z.mediumPlusDownOrLandscape]]])+" area",children:(0,b.jsx)(z.q.div,{className:y()("arrow","arrow-right"),style:C,children:(0,b.jsx)(H.Z,{size:"small"})})})]})]})})}),(0,b.jsx)(a(),{id:"3265082504",dynamic:[r.Z.mediumPlusDownOrLandscape,r.Z.mediumPlusDownOrLandscape],children:[".slides.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;height:100%;width:100%;padding:0;margin:0;overflow:hidden;}",".slides.__jsx-style-dynamic-selector>.loading{margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100%;width:100%;}",".slides.hidden.__jsx-style-dynamic-selector{display:none;}",".slide-container{position:absolute;top:0;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);opacity:0;padding:0;margin:0;height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-animation-duration:0.3s;animation-duration:0.3s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}","@media ".concat(r.Z.mediumPlusDownOrLandscape,"{.slide-container{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}}"),".slide-container.active{z-index:calc(var(--minZIndex) + 1);opacity:1;}",".slide-container.active.left{-webkit-animation-name:slide-left-__jsx-style-dynamic-selector;animation-name:slide-left-__jsx-style-dynamic-selector;}",".slide-container.active.right{-webkit-animation-name:slide-right-__jsx-style-dynamic-selector;animation-name:slide-right-__jsx-style-dynamic-selector;}",".slide-container.no-longer-active.left{-webkit-animation-name:slide-more-left-__jsx-style-dynamic-selector;animation-name:slide-more-left-__jsx-style-dynamic-selector;}",".slide-container.no-longer-active.right{-webkit-animation-name:slide-more-right-__jsx-style-dynamic-selector;animation-name:slide-more-right-__jsx-style-dynamic-selector;}","@-webkit-keyframes slide-right-__jsx-style-dynamic-selector{from{opacity:0;left:0;}to{opacity:1;left:50%;}}","@keyframes slide-right-__jsx-style-dynamic-selector{from{opacity:0;left:0;}to{opacity:1;left:50%;}}","@-webkit-keyframes slide-more-right-__jsx-style-dynamic-selector{from{opacity:1;left:50%;}to{opacity:0;left:100%;}}","@keyframes slide-more-right-__jsx-style-dynamic-selector{from{opacity:1;left:50%;}to{opacity:0;left:100%;}}","@-webkit-keyframes slide-left-__jsx-style-dynamic-selector{from{opacity:0;left:100%;}to{opacity:1;left:50%;}}","@keyframes slide-left-__jsx-style-dynamic-selector{from{opacity:0;left:100%;}to{opacity:1;left:50%;}}","@-webkit-keyframes slide-more-left-__jsx-style-dynamic-selector{from{opacity:1;left:50%;}to{opacity:0;left:0;}}","@keyframes slide-more-left-__jsx-style-dynamic-selector{from{opacity:1;left:50%;}to{opacity:0;left:0;}}",".up-next.__jsx-style-dynamic-selector{margin-top:auto;margin-bottom:auto;}",".slide-wrapper.__jsx-style-dynamic-selector{position:relative;width:100%;}",".slide.__jsx-style-dynamic-selector{width:100%;text-align:center;min-height:20vh;max-height:70vh;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}",".slide.__jsx-style-dynamic-selector .progressive-image{pointer-events:none;object-fit:contain;max-height:70vh;background-color:transparent;}",".slide.__jsx-style-dynamic-selector .progressive-image.loading{background-color:var(--theme-elements-background-surfaceColor);}","@media ".concat(r.Z.mediumPlusDownOrLandscape,"{.slide-container{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.slide-wrapper.__jsx-style-dynamic-selector{height:100%;}.slide.__jsx-style-dynamic-selector{height:100%;max-height:none;}.slide.__jsx-style-dynamic-selector .progressive-image{max-height:100vh;}}"),".arrows-container.__jsx-style-dynamic-selector{width:100%;height:100%;z-index:calc(var(--minZIndex) + 1);position:relative;}",".arrows-container.__jsx-style-dynamic-selector .row-pagination-button{z-index:calc(var(--minZIndex) + 1);position:absolute;top:46%;margin:0 var(--lessCompactSpacer);height:-webkit-max-content;height:-moz-max-content;height:max-content;width:-webkit-max-content;width:-moz-max-content;width:max-content;}",".arrows-container.__jsx-style-dynamic-selector .row-pagination-button.previous{left:0;}",".arrows-container.__jsx-style-dynamic-selector .row-pagination-button.next{right:0;}",".arrows-container.__jsx-style-dynamic-selector:hover .row-pagination-button,.arrows-container.__jsx-style-dynamic-selector:active .row-pagination-button,.arrows-container.__jsx-style-dynamic-selector:focus .row-pagination-button{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".areas-container.__jsx-style-dynamic-selector{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}",".areas-container.__jsx-style-dynamic-selector .area.__jsx-style-dynamic-selector{width:50%;height:100%;position:relative;z-index:calc(var(--minZIndex) + 1);}",".areas-container.__jsx-style-dynamic-selector .area.__jsx-style-dynamic-selector .arrow{position:absolute;top:calc(50% - 25px);width:50px;height:50px;border-radius:25px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--neue-gray-80);}",".areas-container.__jsx-style-dynamic-selector .area.__jsx-style-dynamic-selector .arrow-right{right:24px;}",".areas-container.__jsx-style-dynamic-selector .area.__jsx-style-dynamic-selector .arrow-left{left:24px;}"]})]}))},er=function(e){var t,i=e.slug,n=e.error,s=e.itemTotal,d=void 0===s?0:s,m=e.items,u=e.loading,x=void 0!==u&&u,f=e.loadingMore,p=void 0!==f&&f,y=e.shouldLoadMore,w=void 0!==y&&y,h=e.total,j=void 0===h?0:h,v=e.onLoadMore,k=void 0===v?function(){}:v,_=e.sliderAdsDisabled,O=e.rightRailAdDisabled,Z=e.title,D=e.onClose,P=(0,o.Z)(!1),L=P.display,S=P.show,N=P.hide,C=(0,l.Go)(),A=C.index,I=C.changeIndex,E=C.isAdBreak;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{"data-cy":"slideshow-block",className:a().dynamic([["3465577505",[r.Z.mediumPlusDownOrLandscape]]])+" slideshow",children:L?(0,b.jsx)(Q,{rightRailAdDisabled:O,goBack:N,onClose:D,hide:N,changeIndex:I,loading:x,loadingMore:p,error:n,items:m,shouldLoadMore:w,onLoadMore:k,total:j,title:Z}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(q,{showGallery:S,onClose:D,index:A,total:j}),(0,b.jsxs)("div",{className:a().dynamic([["3465577505",[r.Z.mediumPlusDownOrLandscape]]])+" content",children:[(0,b.jsx)(c.Z,{className:"image-container",spacing:2,children:(0,b.jsx)(eo,{loading:x||p,items:m,adsDisabled:_,index:A,changeIndex:I,allowBack:A>0||d===j,itemTotal:d,shouldLoadMore:w,onLoadMore:k})}),(0,b.jsx)(g,{isAdBreak:E,rightRailAdDisabled:O,caption:null===(t=m[A])||void 0===t?void 0:t.caption,slug:i,title:Z})]})]})}),(0,b.jsx)(a(),{id:"3465577505",dynamic:[r.Z.mediumPlusDownOrLandscape],children:[".slideshow.__jsx-style-dynamic-selector{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}",".content.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;overflow-y:auto;padding:0 60px;-webkit-flex:1;-ms-flex:1;flex:1;}",".content.__jsx-style-dynamic-selector .image-container{-webkit-flex:1 0 50vh;-ms-flex:1 0 50vh;flex:1 0 50vh;}","@media ".concat(r.Z.mediumPlusDownOrLandscape,"{.content.__jsx-style-dynamic-selector{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0;}}"),".slider{position:relative;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;}"]})]})}}}]);