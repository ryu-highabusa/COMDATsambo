"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2985,2757],{45338:function(e,t,r){r.d(t,{QS:function(){return u}});var n=r(67294);let i={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},s={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},o="mousemove",a="mouseup";function c(e,t){if(0===t)return e;let r=Math.PI/180*t,n=e[0]*Math.cos(r)+e[1]*Math.sin(r),i=e[1]*Math.cos(r)-e[0]*Math.sin(r);return[n,i]}function u(e){var t,r,u;let g;let{trackMouse:l}=e,d=n.useRef(Object.assign({},s)),h=n.useRef(Object.assign({},i)),p=n.useRef(Object.assign({},h.current));for(g in p.current=Object.assign({},h.current),h.current=Object.assign(Object.assign({},i),e),i)void 0===h.current[g]&&(h.current[g]=i[g]);let[f,v]=n.useMemo(()=>(function(e,t){let r=t=>{let r="touches"in t;r&&t.touches.length>1||e((e,i)=>{i.trackMouse&&!r&&(document.addEventListener(o,n),document.addEventListener(a,l));let{clientX:u,clientY:g}=r?t.touches[0]:t,d=c([u,g],i.rotationAngle);return i.onTouchStartOrOnMouseDown&&i.onTouchStartOrOnMouseDown({event:t}),Object.assign(Object.assign(Object.assign({},e),s),{initial:d.slice(),xy:d,start:t.timeStamp||0})})},n=t=>{e((e,r)=>{let n="touches"in t;if(n&&t.touches.length>1)return e;if(t.timeStamp-e.start>r.swipeDuration)return e.swiping?Object.assign(Object.assign({},e),{swiping:!1}):e;let{clientX:s,clientY:o}=n?t.touches[0]:t,[a,u]=c([s,o],r.rotationAngle),g=a-e.xy[0],l=u-e.xy[1],d=Math.abs(g),h=Math.abs(l),p=(t.timeStamp||0)-e.start,f=Math.sqrt(d*d+h*h)/(p||1),v=[g/(p||1),l/(p||1)],O=d>h?g>0?"Right":"Left":l>0?"Down":"Up",S="number"==typeof r.delta?r.delta:r.delta[O.toLowerCase()]||i.delta;if(d<S&&h<S&&!e.swiping)return e;let w={absX:d,absY:h,deltaX:g,deltaY:l,dir:O,event:t,first:e.first,initial:e.initial,velocity:f,vxvy:v};w.first&&r.onSwipeStart&&r.onSwipeStart(w),r.onSwiping&&r.onSwiping(w);let b=!1;return(r.onSwiping||r.onSwiped||r[`onSwiped${O}`])&&(b=!0),b&&r.preventScrollOnSwipe&&r.trackTouch&&t.cancelable&&t.preventDefault(),Object.assign(Object.assign({},e),{first:!1,eventData:w,swiping:!0})})},u=t=>{e((e,r)=>{let n;if(e.swiping&&e.eventData){if(t.timeStamp-e.start<r.swipeDuration){n=Object.assign(Object.assign({},e.eventData),{event:t}),r.onSwiped&&r.onSwiped(n);let i=r[`onSwiped${n.dir}`];i&&i(n)}}else r.onTap&&r.onTap({event:t});return r.onTouchEndOrOnMouseUp&&r.onTouchEndOrOnMouseUp({event:t}),Object.assign(Object.assign(Object.assign({},e),s),{eventData:n})})},g=()=>{document.removeEventListener(o,n),document.removeEventListener(a,l)},l=e=>{g(),u(e)},d=(e,t)=>{let s=()=>{};if(e&&e.addEventListener){let o=Object.assign(Object.assign({},i.touchEventOptions),t.touchEventOptions),a=[["touchstart",r,o],["touchmove",n,Object.assign(Object.assign({},o),t.preventScrollOnSwipe?{passive:!1}:{})],["touchend",u,o]];a.forEach(([t,r,n])=>e.addEventListener(t,r,n)),s=()=>a.forEach(([t,r])=>e.removeEventListener(t,r))}return s},h={ref:t=>{null!==t&&e((e,r)=>{if(e.el===t)return e;let n={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),n.cleanUpTouch=void 0),r.trackTouch&&t&&(n.cleanUpTouch=d(t,r)),Object.assign(Object.assign(Object.assign({},e),{el:t}),n)})}};return t.trackMouse&&(h.onMouseDown=r),[h,d]})(e=>d.current=e(d.current,h.current),{trackMouse:l}),[l]);return d.current=(t=d.current,r=h.current,u=p.current,r.trackTouch&&t.el?t.cleanUpTouch?r.preventScrollOnSwipe!==u.preventScrollOnSwipe||r.touchEventOptions.passive!==u.touchEventOptions.passive?(t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:v(t.el,r)})):t:Object.assign(Object.assign({},t),{cleanUpTouch:v(t.el,r)}):(t.cleanUpTouch&&t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:void 0}))),f}},49294:function(e,t,r){r.d(t,{c:function(){return S}});var n=r(14912),i=r(25452),s=r(72203),o=r(67294),a=r(46580),c=r(98697),u=r(41317);class g{receiveHandlerId(e){this.handlerId!==e&&(this.handlerId=e,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(e){this.dragSourceOptionsInternal=e}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(e){this.dragPreviewOptionsInternal=e}reconnect(){let e=this.reconnectDragSource();this.reconnectDragPreview(e)}reconnectDragSource(){let e=this.dragSource,t=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return(t&&this.disconnectDragSource(),this.handlerId)?e?(t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=e,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,e,this.dragSourceOptions)),t):(this.lastConnectedDragSource=e,t):t}reconnectDragPreview(e=!1){let t=this.dragPreview,r=e||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(r&&this.disconnectDragPreview(),this.handlerId){if(!t){this.lastConnectedDragPreview=t;return}r&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=t,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,t,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!(0,a.w)(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!(0,a.w)(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(e){this.hooks=(0,u.p)({dragSource:(e,t)=>{this.clearDragSource(),this.dragSourceOptions=t||null,(0,c.d)(e)?this.dragSourceRef=e:this.dragSourceNode=e,this.reconnectDragSource()},dragPreview:(e,t)=>{this.clearDragPreview(),this.dragPreviewOptions=t||null,(0,c.d)(e)?this.dragPreviewRef=e:this.dragPreviewNode=e,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=e}}var l=r(5109),d=r(66618);let h=!1,p=!1;class f{receiveHandlerId(e){this.sourceId=e}getHandlerId(){return this.sourceId}canDrag(){(0,n.k)(!h,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return h=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{h=!1}}isDragging(){if(!this.sourceId)return!1;(0,n.k)(!p,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return p=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{p=!1}}subscribeToStateChange(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}isDraggingSource(e){return this.internalMonitor.isDraggingSource(e)}isOverTarget(e,t){return this.internalMonitor.isOverTarget(e,t)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(e){return this.internalMonitor.subscribeToOffsetChange(e)}canDragSource(e){return this.internalMonitor.canDragSource(e)}canDropOnTarget(e){return this.internalMonitor.canDropOnTarget(e)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.sourceId=null,this.internalMonitor=e.getMonitor()}}var v=r(55872);class O{beginDrag(){let e=this.spec,t=this.monitor,r=null;return null!=(r="object"==typeof e.item?e.item:"function"==typeof e.item?e.item(t):{})?r:null}canDrag(){let e=this.spec,t=this.monitor;return"boolean"==typeof e.canDrag?e.canDrag:"function"!=typeof e.canDrag||e.canDrag(t)}isDragging(e,t){let r=this.spec,n=this.monitor,{isDragging:i}=r;return i?i(n):t===e.getSourceId()}endDrag(){let e=this.spec,t=this.monitor,r=this.connector,{end:n}=e;n&&n(t.getItem(),t),r.reconnect()}constructor(e,t,r){this.spec=e,this.monitor=t,this.connector=r}}function S(e,t){let r=(0,s.w)(e,t);(0,n.k)(!r.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");let a=function(){let e=(0,l.N)();return(0,o.useMemo)(()=>new f(e),[e])}(),c=function(e,t){let r=(0,l.N)(),n=(0,o.useMemo)(()=>new g(r.getBackend()),[r]);return(0,d.L)(()=>(n.dragSourceOptions=e||null,n.reconnect(),()=>n.disconnectDragSource()),[n,e]),(0,d.L)(()=>(n.dragPreviewOptions=t||null,n.reconnect(),()=>n.disconnectDragPreview()),[n,t]),n}(r.options,r.previewOptions);return!function(e,t,r){let i=(0,l.N)(),s=function(e,t,r){let n=(0,o.useMemo)(()=>new O(e,t,r),[t,r]);return(0,o.useEffect)(()=>{n.spec=e},[e]),n}(e,t,r),a=(0,o.useMemo)(()=>{let t=e.type;return(0,n.k)(null!=t,"spec.type must be defined"),t},[e]);(0,d.L)(function(){if(null!=a){let[e,n]=(0,v.w)(a,s,i);return t.receiveHandlerId(e),r.receiveHandlerId(e),n}},[i,t,r,s,a])}(r,a,c),[(0,i.J)(r.collect,a,c),(0,o.useMemo)(()=>c.hooks.dragSource(),[c]),(0,o.useMemo)(()=>c.hooks.dragPreview(),[c])]}},76224:function(e,t,r){r.d(t,{f:function(){return o}});var n=r(67294),i=r(85685),s=r(5109);function o(e){let t=(0,s.N)(),r=t.getMonitor(),[o,a]=(0,i.r)(r,e);return(0,n.useEffect)(()=>r.subscribeToOffsetChange(a)),(0,n.useEffect)(()=>r.subscribeToStateChange(a)),o}}}]);