!function(){function e(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=a.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,a){n[e]=a},a.parcelRequired7c6=r);var o=r("1WSnx"),l=document.querySelector(".feedback-form");window.addEventListener("load",(function(){var e=localStorage.getItem("feedback-form-state"),a=JSON.parse(e);try{Array.from(l.elements).forEach((function(e){"email"===e.name&&(e.value=a.email),"message"===e.name&&(e.value=a.message)}))}catch(e){}})),l.addEventListener("input",e(o).throttle((function(e){e.preventDefault();var a={};Array.from(l.elements).forEach((function(e){"email"===e.name&&(a.email=e.value),"message"===e.name&&(a.message=e.value)}));var t=JSON.stringify(a);localStorage.setItem("feedback-form-state",t)}),500)),l.addEventListener("submit",(function(e){e.preventDefault(),Array.from(l.elements).forEach((function(e){"email"!==e.name&&"message"!==e.name||(e.value="")}));var a=localStorage.getItem("feedback-form-state"),t=JSON.parse(a);console.log(t),localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.1b8935b2.js.map