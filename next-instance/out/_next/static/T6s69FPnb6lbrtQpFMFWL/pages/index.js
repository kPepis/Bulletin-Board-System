(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{743:function(e,t,r){__NEXT_REGISTER_PAGE("/",function(){return e.exports=r(759),{page:e.exports.default}})},759:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=(r(168),r(70)),i=r.n(a),s=(r(169),r(71)),l=r.n(s),u=(r(92),r(46)),c=r.n(u),p=(r(140),r(23)),f=r.n(p),m=(r(81),r(47)),y=r.n(m),b=(r(115),r(94)),d=r.n(b),w=(r(134),r(14)),v=r.n(w),h=r(17),g=r.n(h),O=(r(744),r(21)),E=r.n(O),P=r(85),j=r.n(P),S=r(39);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function T(e,t,r,n,o,a,i){try{var s=e[a](i),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,o)}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){I(e,t,r[t])})}return e}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  mutation SIGN_UP_MUTATION($userName: String!, $password: String!) {\n    signUp(userName: $userName, password: $password) {\n      id\n      userName\n    }\n  }\n"]);return R=function(){return e},e}var q=E()(R()),z=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return n=this,o=(e=C(t)).call.apply(e,[this].concat(i)),r=!o||"object"!==_(o)&&"function"!=typeof o?D(n):o,I(D(D(r)),"state",{isDirty:!1}),I(D(D(r)),"onBlurHandler",function(e){var t=e.target.value;r.setState({isDirty:r.state.isDirty||!!t})}),I(D(D(r)),"submitHandler",function(e){e.preventDefault(),r.props.form.validateFields(function(e,t){})}),I(D(D(r)),"compareToFirstPassword",function(e,t,n){t!==r.props.form.getFieldValue("password")?n("Passwords are not equal"):n()}),I(D(D(r)),"compareToSecondPassword",function(e,t,n){var o=r.props.form;t&&r.state.isDirty&&o.validateFields(["passwordVerification"],{force:!0}),n()}),r}var r,a,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this,t=this.props.form,r=this.props.form.getFieldDecorator,n={labelCol:{xs:{span:24},sm:{span:24}},wrapperCol:{xs:{span:24},sm:{span:24}}};return o.a.createElement(i.a,{type:"flex",justify:"center",align:"middle"},o.a.createElement(l.a,x({},{xs:{span:24},sm:{span:15},md:{span:8},lg:{span:8},xl:{span:6},xxl:{span:4}},{className:"centered-col"}),o.a.createElement(S.Mutation,{mutation:q,variables:k({},t.getFieldsValue(["userName","password"]))},function(t,a){var i=a.loading;a.error,a.data;return o.a.createElement("fieldset",{disabled:i,"aria-busy":i},o.a.createElement(f.a,{onSubmit:function(r){r.preventDefault(),e.props.form.validateFields(function(){var e,r=(e=g.a.mark(function e(r,n){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=6;break}return e.next=3,t();case 3:return e.sent,e.next=6,j.a.push("/boards");case 6:case"end":return e.stop()}},e,this)}),function(){var t=this,r=arguments;return new Promise(function(n,o){var a=e.apply(t,r);function i(e){T(a,n,o,i,s,"next",e)}function s(e){T(a,n,o,i,s,"throw",e)}i(void 0)})});return function(e,t){return r.apply(this,arguments)}}())},className:"form-container",layout:"vertical",hideRequiredMark:!1},o.a.createElement(f.a.Item,x({},n,{label:o.a.createElement("span",null,"Username ",o.a.createElement(d.a,{title:"This is the name others users will see"},o.a.createElement(v.a,{type:"question-circle-o"})))}),r("userName",{rules:[{required:!0,message:"Please type a non-empty username",whitespace:!0,type:"string"}]})(o.a.createElement(y.a,{allowClear:!0,prefix:o.a.createElement(v.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter a username",size:"large"}))),o.a.createElement(f.a.Item,x({},n,{label:"Password"}),r("password",{rules:[{required:!0,message:"Please enter a password"},{validator:e.compareToSecondPassword}],validateTrigger:"onBlur"})(o.a.createElement(y.a,{prefix:o.a.createElement(v.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Choose a password",size:"large"}))),o.a.createElement(f.a.Item,x({},n,{label:"Confirm your password"}),r("passwordVerification",{rules:[{required:!0,validator:e.compareToFirstPassword}],validateTrigger:"onBlur"})(o.a.createElement(y.a,{prefix:o.a.createElement(v.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Repeat your password",size:"large",onBlur:e.onBlurHandler}))),o.a.createElement(f.a.Item,n,o.a.createElement(c.a,{size:"large",type:"primary",htmlType:"submit",className:"login-form-button",block:!0},"Register"))))})))}}])&&N(r.prototype,a),s&&N(r,s),t}(),B=f.a.create({})(z);function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function $(e,t){return!t||"object"!==U(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),$(this,A(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(B,null))}}])&&V(r.prototype,a),i&&V(r,i),t}();t.default=H}},[[743,1,0,2]]]);