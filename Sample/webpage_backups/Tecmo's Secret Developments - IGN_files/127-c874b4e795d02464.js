(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[127],{43106:function(e,n,i){var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"slottersHubFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"SlotterBlock"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slotters"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"slotterBlockRequiredFields"},directives:[]}]}}]}}],loc:{start:0,end:155}};t.loc.source={body:"#import './slotterBlockRequiredFieldsFragment.gql'\n\nfragment slottersHubFields on SlotterBlock {\n  id\n  slotters {\n    ...slotterBlockRequiredFields\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var r={};t.definitions=t.definitions.concat(i(71085).definitions.filter(function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!r[n]&&(r[n]=!0,!0)}));var o={};function a(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}t.definitions.forEach(function(e){if(e.name){var n=new Set;(function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})})(e,n),o[e.name.value]=n}}),e.exports=t,e.exports.slottersHubFields=function(e,n){var i={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=o[n]||new Set,r=new Set,l=new Set;for(t.forEach(function(e){l.add(e)});l.size>0;){var s=l;l=new Set,s.forEach(function(e){r.has(e)||(r.add(e),(o[e]||new Set).forEach(function(e){l.add(e)}))})}return r.forEach(function(n){var t=a(e,n);t&&i.definitions.push(t)}),i}(t,"slottersHubFields")},57211:function(e,n,i){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"SlottersHub"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"region"}},type:{kind:"NamedType",name:{kind:"Name",value:"Region"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slotter"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}},{kind:"Argument",name:{kind:"Name",value:"region"},value:{kind:"Variable",name:{kind:"Name",value:"region"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"slottersHubFields"},directives:[]}]}}]}}],loc:{start:0,end:196}};t.loc.source={body:"#import './fragments/slottersHubFieldsFragment.gql'\nquery SlottersHub($id: Int, $slug: String, $region: Region) {\n  slotter(id: $id, slug: $slug, region: $region) {\n    ...slottersHubFields\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var r={};t.definitions=t.definitions.concat(i(43106).definitions.filter(function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!r[n]&&(r[n]=!0,!0)}));var o={};function a(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}t.definitions.forEach(function(e){if(e.name){var n=new Set;(function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})})(e,n),o[e.name.value]=n}}),e.exports=t,e.exports.SlottersHub=function(e,n){var i={kind:e.kind,definitions:[a(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=o[n]||new Set,r=new Set,l=new Set;for(t.forEach(function(e){l.add(e)});l.size>0;){var s=l;l=new Set,s.forEach(function(e){r.has(e)||(r.add(e),(o[e]||new Set).forEach(function(e){l.add(e)}))})}return r.forEach(function(n){var t=a(e,n);t&&i.definitions.push(t)}),i}(t,"SlottersHub")},83203:function(e,n,i){"use strict";var t=i(59499),r=i(4730);i(67294);var o=i(63169),a=i(85893),l=["items"],s=["id"];function d(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),i.push.apply(i,t)}return i}function u(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?d(Object(i),!0).forEach(function(n){(0,t.Z)(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}n.Z=function(e){var n=e.items,i=void 0===n?[]:n,t=(0,r.Z)(e,l);return null==i?void 0:i.map(function(e){var n=e.id,i=(0,r.Z)(e,s);return(0,a.jsx)(o.Z,u({},u(u({id:n},i),t)),n)})}},10127:function(e,n,i){"use strict";i.d(n,{Z:function(){return R}});var t=i(59499),r=i(4730),o=i(67294),a=i(97842),l=i(80955),s=i(83203),d=i(17674),u=i(57211),c=i.n(u),f=i(43106),v=i.n(f),m=i(20137),g=i(39630),p=i(7048);function b(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),i.push.apply(i,t)}return i}function k(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?b(Object(i),!0).forEach(function(n){(0,t.Z)(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}var O=[],h=function(e){var n,i,t=e.id,r=(0,p.X)(),o=(0,d.Z)(r,1)[0],a=(0,g.Z)({id:"SlotterBlock:".concat(t),fragment:v(),fragmentName:"slottersHubFields"});return(null==a?void 0:null===(n=a.slotters)||void 0===n?void 0:n.length)>0&&a.slotters.map(function(e,n){var i=e.id;return e.position!==n&&o(i,n)}),k({items:null!==(i=null==a?void 0:a.slotters)&&void 0!==i?i:O},a)},y=function(){var e,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=i.id,r=i.slug,o=i.region,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=(0,p.X)(),u=(0,d.Z)(s,1)[0],f=(0,a.KEQ)({id:t,slug:r,region:o?(0,a.tC0)(o):void 0}),v=(0,m.Z)(k({purge:"Slotters Hub ".concat(r||t),query:c(),variables:f,dataPath:"slotter",skip:!t&&!r&&!o,onCompleted:function(e){var n,i=e.slotter,t=void 0===i?{}:i;return(null==t?void 0:null===(n=t.slotters)||void 0===n?void 0:n.length)>0&&t.slotters.map(function(e,n){return u(e.id,n)})}},l));return k({items:null!==(e=null===(n=v.data)||void 0===n?void 0:n.slotters)&&void 0!==e?e:O},v)},S=i(84130),j=i(95976),w=i(48293),N=i(85893),D=["slug","loading","error","items","fallback","children"],P=["id","slug"],E=["id"],F=["id","slug","children"];function Z(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),i.push.apply(i,t)}return i}function H(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(i),!0).forEach(function(n){(0,t.Z)(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Z(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}var x=function(e){var n=e.slug,i=e.loading,t=e.error,l=e.items,s=e.fallback,d=void 0===s?n?(0,N.jsx)(S.Z,{slug:n,blockType:a.MRu.hub}):void 0:s,u=e.children,c=(0,r.Z)(e,D);return(0,N.jsxs)(j.Z,{around:"SlottersHubResponse",children:[(0,N.jsx)(w.Z,{error:t}),!i&!l.length&&d?d:o.cloneElement(u,H({loading:i,items:l},c))]})},q=function(e){var n=e.id,i=e.slug,t=(0,r.Z)(e,P),o=y({id:n,slug:i,region:(0,l.qt)().region}),a=o.items,s=o.loading,d=o.error;return(0,N.jsx)(x,H({},H({slug:i,items:a,loading:s,error:d},t)))},V=function(e){var n=e.id,i=(0,r.Z)(e,E),t=h({id:n}),o=t.id,a=t.items;return o?(0,N.jsx)(x,H({},H({items:a},i))):(0,N.jsx)(q,H({},H({id:n},i)))},R=(0,j.P)({around:"SlottersHub"})(function(e){var n=e.id,i=e.slug,t=e.children,o=void 0===t?(0,N.jsx)(s.Z,{}):t,a=(0,r.Z)(e,F);return n?(0,N.jsx)(V,H({},H({id:n,slug:i,children:o},a))):i?(0,N.jsx)(q,H({},H({slug:i,children:o},a))):o})}}]);