(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{115:function(e,t,o){"use strict";o(20),o(216)},132:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getOverflowOptions=l,t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.arrowWidth,o=void 0===t?5:t,a=e.horizontalArrowShift,i=void 0===a?16:a,f=e.verticalArrowShift,p=void 0===f?12:f,u=e.autoAdjustOverflow,c=void 0===u||u,b={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(i+o),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(p+o)]},topRight:{points:["br","tc"],offset:[i+o,-4]},rightTop:{points:["tl","cr"],offset:[4,-(p+o)]},bottomRight:{points:["tr","bc"],offset:[i+o,4]},rightBottom:{points:["bl","cr"],offset:[4,p+o]},bottomLeft:{points:["tl","bc"],offset:[-(i+o),4]},leftBottom:{points:["br","cl"],offset:[-4,p+o]}};return Object.keys(b).forEach(function(t){b[t]=e.arrowPointAtCenter?n({},b[t],{overflow:l(c),targetOffset:s}):n({},r.placements[t],{overflow:l(c)}),b[t].ignoreShake=!0}),b};var r=o(133);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}var a={adjustX:1,adjustY:1},i={adjustX:0,adjustY:0},s=[0,0];function l(e){return"boolean"==typeof e?e?a:i:n({},i,e)}},133:function(e,t,o){"use strict";t.__esModule=!0;var r={adjustX:1,adjustY:1},n=[0,0],a=t.placements={left:{points:["cr","cl"],overflow:r,offset:[-4,0],targetOffset:n},right:{points:["cl","cr"],overflow:r,offset:[4,0],targetOffset:n},top:{points:["bc","tc"],overflow:r,offset:[0,-4],targetOffset:n},bottom:{points:["tc","bc"],overflow:r,offset:[0,4],targetOffset:n},topLeft:{points:["bl","tl"],overflow:r,offset:[0,-4],targetOffset:n},leftTop:{points:["tr","tl"],overflow:r,offset:[-4,0],targetOffset:n},topRight:{points:["br","tr"],overflow:r,offset:[0,-4],targetOffset:n},rightTop:{points:["tl","tr"],overflow:r,offset:[4,0],targetOffset:n},bottomRight:{points:["tr","br"],overflow:r,offset:[0,4],targetOffset:n},rightBottom:{points:["bl","br"],overflow:r,offset:[4,0],targetOffset:n},bottomLeft:{points:["tl","bl"],overflow:r,offset:[0,4],targetOffset:n},leftBottom:{points:["br","bl"],overflow:r,offset:[-4,0],targetOffset:n}};t.default=a},140:function(e,t,o){"use strict";o(20),o(320),o(187)},141:function(e,t,o){"use strict";o.r(t);var r=o(2),n=o.n(r),a=o(11),i=o.n(a),s=o(5),l=o.n(s),f=o(4),p=o.n(f),u=o(6),c=o.n(u),b=o(1),y=o.n(b),m=o(0),d=o.n(m),g=o(33),v={adjustX:1,adjustY:1},h=[0,0],w={left:{points:["cr","cl"],overflow:v,offset:[-4,0],targetOffset:h},right:{points:["cl","cr"],overflow:v,offset:[4,0],targetOffset:h},top:{points:["bc","tc"],overflow:v,offset:[0,-4],targetOffset:h},bottom:{points:["tc","bc"],overflow:v,offset:[0,4],targetOffset:h},topLeft:{points:["bl","tl"],overflow:v,offset:[0,-4],targetOffset:h},leftTop:{points:["tr","tl"],overflow:v,offset:[-4,0],targetOffset:h},topRight:{points:["br","tr"],overflow:v,offset:[0,-4],targetOffset:h},rightTop:{points:["tl","tr"],overflow:v,offset:[4,0],targetOffset:h},bottomRight:{points:["tr","br"],overflow:v,offset:[0,4],targetOffset:h},rightBottom:{points:["bl","br"],overflow:v,offset:[4,0],targetOffset:h},bottomLeft:{points:["tl","bl"],overflow:v,offset:[0,4],targetOffset:h},leftBottom:{points:["br","bl"],overflow:v,offset:[-4,0],targetOffset:h}},O=function(e){function t(){return l()(this,t),p()(this,e.apply(this,arguments))}return c()(t,e),t.prototype.componentDidUpdate=function(){var e=this.props.trigger;e&&e.forcePopupAlign()},t.prototype.render=function(){var e=this.props,t=e.overlay,o=e.prefixCls,r=e.id;return y.a.createElement("div",{className:o+"-inner",id:r,role:"tooltip"},"function"==typeof t?t():t)},t}(y.a.Component);O.propTypes={prefixCls:d.a.string,overlay:d.a.oneOfType([d.a.node,d.a.func]).isRequired,id:d.a.string,trigger:d.a.any};var P=O,C=function(e){function t(){var o,r,n;l()(this,t);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return o=r=p()(this,e.call.apply(e,[this].concat(i))),r.getPopupElement=function(){var e=r.props,t=e.arrowContent,o=e.overlay,n=e.prefixCls,a=e.id;return[y.a.createElement("div",{className:n+"-arrow",key:"arrow"},t),y.a.createElement(P,{key:"content",trigger:r.trigger,prefixCls:n,id:a,overlay:o})]},r.saveTrigger=function(e){r.trigger=e},n=o,p()(r,n)}return c()(t,e),t.prototype.getPopupDomNode=function(){return this.trigger.getPopupDomNode()},t.prototype.render=function(){var e=this.props,t=e.overlayClassName,o=e.trigger,r=e.mouseEnterDelay,a=e.mouseLeaveDelay,s=e.overlayStyle,l=e.prefixCls,f=e.children,p=e.onVisibleChange,u=e.afterVisibleChange,c=e.transitionName,b=e.animation,m=e.placement,d=e.align,v=e.destroyTooltipOnHide,h=e.defaultVisible,O=e.getTooltipContainer,P=i()(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer"]),C=n()({},P);return"visible"in this.props&&(C.popupVisible=this.props.visible),y.a.createElement(g.a,n()({popupClassName:t,ref:this.saveTrigger,prefixCls:l,popup:this.getPopupElement,action:o,builtinPlacements:w,popupPlacement:m,popupAlign:d,getPopupContainer:O,onPopupVisibleChange:p,afterPopupVisibleChange:u,popupTransitionName:c,popupAnimation:b,defaultPopupVisible:h,destroyPopupOnHide:v,mouseLeaveDelay:a,popupStyle:s,mouseEnterDelay:r},C),f)},t}(b.Component);C.propTypes={trigger:d.a.any,children:d.a.any,defaultVisible:d.a.bool,visible:d.a.bool,placement:d.a.string,transitionName:d.a.oneOfType([d.a.string,d.a.object]),animation:d.a.any,onVisibleChange:d.a.func,afterVisibleChange:d.a.func,overlay:d.a.oneOfType([d.a.node,d.a.func]).isRequired,overlayStyle:d.a.object,overlayClassName:d.a.string,prefixCls:d.a.string,mouseEnterDelay:d.a.number,mouseLeaveDelay:d.a.number,getTooltipContainer:d.a.func,destroyTooltipOnHide:d.a.bool,align:d.a.object,arrowContent:d.a.any,id:d.a.string},C.defaultProps={prefixCls:"rc-tooltip",mouseEnterDelay:0,destroyTooltipOnHide:!1,mouseLeaveDelay:.1,align:{},placement:"right",trigger:["hover"],arrowContent:null};var j=C;t.default=j},743:function(e,t,o){__NEXT_REGISTER_PAGE("/",function(){return e.exports=o(759),{page:e.exports.default}})},759:function(e,t,o){"use strict";o.r(t);var r=o(1),n=o.n(r),a=(o(168),o(70)),i=o.n(a),s=(o(169),o(71)),l=o.n(s),f=(o(92),o(46)),p=o.n(f),u=(o(140),o(23)),c=o.n(u),b=(o(81),o(47)),y=o.n(b),m=(o(115),o(94)),d=o.n(m),g=(o(134),o(14)),v=o.n(g),h=o(17),w=o.n(h),O=(o(744),o(21)),P=o.n(O),C=o(85),j=o.n(C),E=o(39);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function _(e,t,o,r,n,a,i){try{var s=e[a](i),l=s.value}catch(e){return void o(e)}s.done?t(l):Promise.resolve(l).then(r,n)}function N(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){A(e,t,o[t])})}return e}function S(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function R(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  mutation SIGN_UP_MUTATION($userName: String!, $password: String!) {\n    signUp(userName: $userName, password: $password) {\n      id\n      userName\n    }\n  }\n"]);return R=function(){return e},e}var B=P()(R()),L=function(e){function t(){var e,o,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return r=this,n=(e=D(t)).call.apply(e,[this].concat(i)),o=!n||"object"!==T(n)&&"function"!=typeof n?V(r):n,A(V(V(o)),"state",{isDirty:!1}),A(V(V(o)),"onBlurHandler",function(e){var t=e.target.value;o.setState({isDirty:o.state.isDirty||!!t})}),A(V(V(o)),"submitHandler",function(e){e.preventDefault(),o.props.form.validateFields(function(e,t){})}),A(V(V(o)),"compareToFirstPassword",function(e,t,r){t!==o.props.form.getFieldValue("password")?r("Passwords are not equal"):r()}),A(V(V(o)),"compareToSecondPassword",function(e,t,r){var n=o.props.form;t&&o.state.isDirty&&n.validateFields(["passwordVerification"],{force:!0}),r()}),o}var o,a,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,r["Component"]),o=t,(a=[{key:"render",value:function(){var e=this,t=this.props.form,o=this.props.form.getFieldDecorator,r={labelCol:{xs:{span:24},sm:{span:24}},wrapperCol:{xs:{span:24},sm:{span:24}}};return n.a.createElement(i.a,{type:"flex",justify:"center",align:"middle"},n.a.createElement(l.a,x({},{xs:{span:24},sm:{span:15},md:{span:8},lg:{span:8},xl:{span:6},xxl:{span:4}},{className:"centered-col"}),n.a.createElement(E.Mutation,{mutation:B,variables:N({},t.getFieldsValue(["userName","password"]))},function(t,a){var i=a.loading;a.error,a.data;return n.a.createElement("fieldset",{disabled:i,"aria-busy":i},n.a.createElement(c.a,{onSubmit:function(o){o.preventDefault(),e.props.form.validateFields(function(){var e,o=(e=w.a.mark(function e(o,r){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o){e.next=6;break}return e.next=3,t();case 3:return e.sent,e.next=6,j.a.push("/boards");case 6:case"end":return e.stop()}},e,this)}),function(){var t=this,o=arguments;return new Promise(function(r,n){var a=e.apply(t,o);function i(e){_(a,r,n,i,s,"next",e)}function s(e){_(a,r,n,i,s,"throw",e)}i(void 0)})});return function(e,t){return o.apply(this,arguments)}}())},className:"form-container",layout:"vertical",hideRequiredMark:!1},n.a.createElement(c.a.Item,x({},r,{label:n.a.createElement("span",null,"Username ",n.a.createElement(d.a,{title:"This is the name others users will see"},n.a.createElement(v.a,{type:"question-circle-o"})))}),o("userName",{rules:[{required:!0,message:"Please type a non-empty username",whitespace:!0,type:"string"}]})(n.a.createElement(y.a,{allowClear:!0,prefix:n.a.createElement(v.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter a username",size:"large"}))),n.a.createElement(c.a.Item,x({},r,{label:"Password"}),o("password",{rules:[{required:!0,message:"Please enter a password"},{validator:e.compareToSecondPassword}],validateTrigger:"onBlur"})(n.a.createElement(y.a,{prefix:n.a.createElement(v.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Choose a password",size:"large"}))),n.a.createElement(c.a.Item,x({},r,{label:"Confirm your password"}),o("passwordVerification",{rules:[{required:!0,validator:e.compareToFirstPassword}],validateTrigger:"onBlur"})(n.a.createElement(y.a,{prefix:n.a.createElement(v.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Repeat your password",size:"large",onBlur:e.onBlurHandler}))),n.a.createElement(c.a.Item,r,n.a.createElement(p.a,{size:"large",type:"primary",htmlType:"submit",className:"login-form-button",block:!0},"Register"))))})))}}])&&S(o.prototype,a),s&&S(o,s),t}(),F=c.a.create({})(L);function z(e){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t){return!t||"object"!==z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var U=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),H(this,I(t).apply(this,arguments))}var o,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,r["Component"]),o=t,(a=[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(F,null))}}])&&q(o.prototype,a),i&&q(o,i),t}();t.default=U},85:function(e,t,o){e.exports=o(78)},94:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};r.get||r.set?Object.defineProperty(t,o,r):t[o]=e[o]}return t.default=e,t}(o(1)),n=o(32),a=f(o(141)),i=f(o(8)),s=f(o(132)),l=o(16);function f(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}var d=function(e){function t(e){var o,n,s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,s=c(t).call(this,e),(o=!s||"object"!==p(s)&&"function"!=typeof s?y(n):s).onVisibleChange=function(e){var t=o.props.onVisibleChange;"visible"in o.props||o.setState({visible:!o.isNoTitle()&&e}),t&&!o.isNoTitle()&&t(e)},o.onPopupAlign=function(e,t){var r=o.getPlacements(),n=Object.keys(r).filter(function(e){return r[e].points[0]===t.points[0]&&r[e].points[1]===t.points[1]})[0];if(n){var a=e.getBoundingClientRect(),i={top:"50%",left:"50%"};n.indexOf("top")>=0||n.indexOf("Bottom")>=0?i.top="".concat(a.height-t.offset[1],"px"):(n.indexOf("Top")>=0||n.indexOf("bottom")>=0)&&(i.top="".concat(-t.offset[1],"px")),n.indexOf("left")>=0||n.indexOf("Right")>=0?i.left="".concat(a.width-t.offset[0],"px"):(n.indexOf("right")>=0||n.indexOf("Left")>=0)&&(i.left="".concat(-t.offset[0],"px")),e.style.transformOrigin="".concat(i.left," ").concat(i.top)}},o.saveTooltip=function(e){o.tooltip=e},o.renderTooltip=function(e){var t=e.getPopupContainer,n=e.getPrefixCls,s=y(y(o)),l=s.props,f=s.state,p=l.prefixCls,u=l.title,c=l.overlay,b=l.openClassName,d=l.getPopupContainer,g=l.getTooltipContainer,v=l.children,h=n("tooltip",p),w=f.visible;"visible"in l||!o.isNoTitle()||(w=!1);var O,P,C,j=o.getDisabledCompatibleChildren(r.isValidElement(v)?v:r.createElement("span",null,v)),E=j.props,T=(0,i.default)(E.className,(O={},P=b||"".concat(h,"-open"),C=!0,P in O?Object.defineProperty(O,P,{value:C,enumerable:!0,configurable:!0,writable:!0}):O[P]=C,O));return r.createElement(a.default,m({},o.props,{prefixCls:h,getTooltipContainer:d||g||t,ref:o.saveTooltip,builtinPlacements:o.getPlacements(),overlay:c||u||"",visible:w,onVisibleChange:o.onVisibleChange,onPopupAlign:o.onPopupAlign}),w?(0,r.cloneElement)(j,{className:T}):j)},o.state={visible:!!e.visible||!!e.defaultVisible},o}var o,n,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r.Component),o=t,f=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:null}}],(n=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"getPlacements",value:function(){var e=this.props,t=e.builtinPlacements,o=e.arrowPointAtCenter,r=e.autoAdjustOverflow;return t||(0,s.default)({arrowPointAtCenter:o,verticalArrowShift:8,autoAdjustOverflow:r})}},{key:"getDisabledCompatibleChildren",value:function(e){if((e.type.__ANT_BUTTON||"button"===e.type)&&e.props.disabled){var t=function(e,t){var o={},r=m({},e);return t.forEach(function(t){e&&t in e&&(o[t]=e[t],delete r[t])}),{picked:o,omitted:r}}(e.props.style,["position","left","right","top","bottom","float","display","zIndex"]),o=t.picked,n=t.omitted,a=m({display:"inline-block"},o,{cursor:"not-allowed",width:e.props.block?"100%":null}),i=m({},n,{pointerEvents:"none"}),s=(0,r.cloneElement)(e,{style:i,className:null});return r.createElement("span",{style:a,className:e.props.className},s)}return e}},{key:"isNoTitle",value:function(){var e=this.props,t=e.title,o=e.overlay;return!t&&!o}},{key:"render",value:function(){return r.createElement(l.ConfigConsumer,null,this.renderTooltip)}}])&&u(o.prototype,n),f&&u(o,f),t}();d.defaultProps={placement:"top",transitionName:"zoom-big-fast",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0},(0,n.polyfill)(d);var g=d;t.default=g}},[[743,1,0,2]]]);