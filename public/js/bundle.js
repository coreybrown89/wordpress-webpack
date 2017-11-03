/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "html {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0;\n  font: 16px/1 sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased; }\n\nh1,\nh2,\nh3,\nh4,\np,\nblockquote,\nfigure,\nol,\nul {\n  margin: 0;\n  padding: 0; }\n\nmain,\nli {\n  display: block; }\n\nh1,\nh2,\nh3,\nh4 {\n  font-size: inherit; }\n\nstrong {\n  font-weight: bold; }\n\na,\nbutton {\n  color: inherit;\n  transition: .3s; }\n\na {\n  text-decoration: none; }\n\nbutton {\n  overflow: visible;\n  border: 0;\n  font: inherit;\n  -webkit-font-smoothing: inherit;\n  letter-spacing: inherit;\n  background: none;\n  cursor: pointer; }\n\n::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\n:focus {\n  outline: 0; }\n\nimg {\n  max-width: 100%;\n  height: auto;\n  border: 0; }\n\na {\n  color: inherit;\n  text-decoration: none; }\n\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n  font-weight: 300; }\n\n:focus {\n  outline: none; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nfigure {\n  margin: 0;\n  font-size: 1em; }\n\nh1 {\n  color: green; }\n\np {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n  font-weight: normal;\n  font-size: 18px; }\n\nstrong {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n  font-weight: normal; }\n\nmark {\n  background: none; }\n\n.container {\n  margin: 0 auto;\n  max-width: 1100px;\n  width: 80%; }\n\n/* Slider */\n.slick-slider {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent; }\n\n.slick-list {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  margin: 0;\n  padding: 0; }\n  .slick-list:focus {\n    outline: none; }\n  .slick-list.dragging {\n    cursor: pointer;\n    cursor: hand; }\n\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n.slick-track {\n  position: relative;\n  left: 0;\n  top: 0;\n  display: block; }\n  .slick-track:before, .slick-track:after {\n    content: \"\";\n    display: table; }\n  .slick-track:after {\n    clear: both; }\n  .slick-loading .slick-track {\n    visibility: hidden; }\n\n.slick-slide {\n  float: left;\n  height: 100%;\n  min-height: 1px;\n  display: none; }\n  [dir=\"rtl\"] .slick-slide {\n    float: right; }\n  .slick-slide img {\n    display: block; }\n  .slick-slide.slick-loading img {\n    display: none; }\n  .slick-slide.dragging img {\n    pointer-events: none; }\n  .slick-initialized .slick-slide {\n    display: block; }\n  .slick-loading .slick-slide {\n    visibility: hidden; }\n  .slick-vertical .slick-slide {\n    display: block;\n    height: auto;\n    border: 1px solid transparent; }\n\n.slick-arrow.slick-hidden {\n  display: none; }\n\n.plyr input[type=range]:focus,\n.plyr:focus {\n  outline: 0; }\n\n.plyr .plyr__video-embed iframe,\n.plyr__tooltip {\n  pointer-events: none; }\n\n@-webkit-keyframes plyr-progress {\n  to {\n    background-position: 25px 0; } }\n\n@keyframes plyr-progress {\n  to {\n    background-position: 25px 0; } }\n\n.plyr {\n  position: relative;\n  max-width: 100%;\n  min-width: 200px;\n  direction: ltr; }\n\n.plyr,\n.plyr *,\n.plyr::after,\n.plyr::before {\n  box-sizing: border-box; }\n\n.plyr a,\n.plyr button,\n.plyr input,\n.plyr label {\n  -ms-touch-action: manipulation;\n  touch-action: manipulation; }\n\n.plyr audio,\n.plyr video {\n  width: 100%;\n  height: auto;\n  vertical-align: middle;\n  border-radius: inherit; }\n\n.plyr input[type=range] {\n  display: block;\n  height: 20px;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  vertical-align: middle;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  cursor: pointer;\n  border: none;\n  background: 0 0; }\n\n.plyr input[type=range]::-webkit-slider-runnable-track {\n  height: 8px;\n  background: 0 0;\n  border: 0;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  user-select: none; }\n\n.plyr input[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  margin-top: -4px;\n  position: relative;\n  height: 16px;\n  width: 16px;\n  background: #fff;\n  border: 2px solid transparent;\n  border-radius: 100%;\n  transition: background .2s ease, border .2s ease, -webkit-transform .2s ease;\n  transition: background .2s ease, border .2s ease, transform .2s ease;\n  transition: background .2s ease, border .2s ease, transform .2s ease, -webkit-transform .2s ease;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.15);\n  box-sizing: border-box; }\n\n.plyr input[type=range]::-moz-range-track {\n  height: 8px;\n  background: 0 0;\n  border: 0;\n  border-radius: 4px;\n  -moz-user-select: none;\n  user-select: none; }\n\n.plyr input[type=range]::-moz-range-thumb {\n  position: relative;\n  height: 16px;\n  width: 16px;\n  background: #fff;\n  border: 2px solid transparent;\n  border-radius: 100%;\n  transition: background .2s ease, border .2s ease, -webkit-transform .2s ease;\n  transition: background .2s ease, border .2s ease, transform .2s ease;\n  transition: background .2s ease, border .2s ease, transform .2s ease, -webkit-transform .2s ease;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.15);\n  box-sizing: border-box; }\n\n.plyr input[type=range]::-ms-track {\n  height: 8px;\n  background: 0 0;\n  border: 0;\n  color: transparent; }\n\n.plyr input[type=range]::-ms-fill-upper {\n  height: 8px;\n  background: 0 0;\n  border: 0;\n  border-radius: 4px;\n  -ms-user-select: none;\n  user-select: none; }\n\n.plyr input[type=range]::-ms-fill-lower {\n  height: 8px;\n  border: 0;\n  border-radius: 4px;\n  -ms-user-select: none;\n  user-select: none;\n  background: #335fe6; }\n\n.plyr input[type=range]::-ms-thumb {\n  position: relative;\n  height: 16px;\n  width: 16px;\n  background: #fff;\n  border: 2px solid transparent;\n  border-radius: 100%;\n  transition: background .2s ease, border .2s ease, -webkit-transform .2s ease;\n  transition: background .2s ease, border .2s ease, transform .2s ease;\n  transition: background .2s ease, border .2s ease, transform .2s ease, -webkit-transform .2s ease;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.15);\n  box-sizing: border-box;\n  margin-top: 0; }\n\n.plyr input[type=range]::-ms-tooltip {\n  display: none; }\n\n.plyr input[type=range]::-moz-focus-outer {\n  border: 0; }\n\n.plyr input[type=range].tab-focus:focus {\n  outline-offset: 3px; }\n\n.plyr input[type=range]:active::-webkit-slider-thumb {\n  background: #335fe6;\n  border-color: #fff;\n  -webkit-transform: scale(1.25);\n          transform: scale(1.25); }\n\n.plyr input[type=range]:active::-moz-range-thumb {\n  background: #335fe6;\n  border-color: #fff;\n  transform: scale(1.25); }\n\n.plyr input[type=range]:active::-ms-thumb {\n  background: #335fe6;\n  border-color: #fff;\n  transform: scale(1.25); }\n\n.plyr--video input[type=range].tab-focus:focus {\n  outline: rgba(255, 255, 255, 0.5) dotted 1px; }\n\n.plyr--audio input[type=range].tab-focus:focus {\n  outline: rgba(86, 93, 100, 0.5) dotted 1px; }\n\n.plyr__sr-only {\n  clip: rect(1px, 1px, 1px, 1px);\n  overflow: hidden;\n  position: absolute !important;\n  padding: 0 !important;\n  border: 0 !important;\n  height: 1px !important;\n  width: 1px !important; }\n\n.plyr__video-wrapper {\n  position: relative;\n  background: #000;\n  border-radius: inherit; }\n\n.plyr__video-embed {\n  padding-bottom: 56.25%;\n  height: 0;\n  border-radius: inherit;\n  overflow: hidden;\n  z-index: 0; }\n\n.plyr__video-embed iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.plyr__video-embed > div {\n  position: relative;\n  padding-bottom: 200%;\n  -webkit-transform: translateY(-35.95%);\n          transform: translateY(-35.95%); }\n\n.plyr video::-webkit-media-text-track-container {\n  display: none; }\n\n.plyr__captions {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 20px;\n  -webkit-transform: translateY(-40px);\n          transform: translateY(-40px);\n  transition: -webkit-transform .3s ease;\n  transition: transform .3s ease;\n  transition: transform .3s ease, -webkit-transform .3s ease;\n  color: #fff;\n  font-size: 16px;\n  text-align: center;\n  font-weight: 400; }\n\n.plyr__captions span {\n  border-radius: 2px;\n  padding: 3px 10px;\n  background: rgba(0, 0, 0, 0.7);\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n  line-height: 150%; }\n\n.plyr__captions span:empty {\n  display: none; }\n\n@media (min-width: 768px) {\n  .plyr__captions {\n    font-size: 24px; } }\n\n.plyr--captions-active .plyr__captions {\n  display: block; }\n\n.plyr--hide-controls .plyr__captions {\n  -webkit-transform: translateY(-15px);\n          transform: translateY(-15px); }\n\n@media (min-width: 1024px) {\n  .plyr--fullscreen-active .plyr__captions {\n    font-size: 32px; } }\n\n.plyr::-webkit-media-controls {\n  display: none; }\n\n.plyr__controls {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  line-height: 1;\n  text-align: center; }\n\n.plyr__controls .plyr__progress,\n.plyr__controls .plyr__time,\n.plyr__controls > button {\n  margin-left: 5px; }\n\n.plyr__controls .plyr__progress:first-child,\n.plyr__controls .plyr__time:first-child,\n.plyr__controls > button:first-child {\n  margin-left: 0; }\n\n.plyr__controls .plyr__volume {\n  margin-left: 5px; }\n\n.plyr__controls [data-plyr=pause] {\n  margin-left: 0; }\n\n.plyr__controls button {\n  position: relative;\n  display: inline-block;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  overflow: visible;\n  vertical-align: middle;\n  padding: 7px;\n  border: 0;\n  background: 0 0;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: background .3s ease, color .3s ease, opacity .3s ease;\n  color: inherit; }\n\n.plyr__controls button svg {\n  width: 18px;\n  height: 18px;\n  display: block;\n  fill: currentColor; }\n\n.plyr__controls button:focus {\n  outline: 0; }\n\n.plyr__controls .icon--captions-on,\n.plyr__controls .icon--exit-fullscreen,\n.plyr__controls .icon--muted {\n  display: none; }\n\n@media (min-width: 480px) {\n  .plyr__controls .plyr__progress,\n  .plyr__controls .plyr__time,\n  .plyr__controls > button {\n    margin-left: 10px; } }\n\n.plyr--hide-controls .plyr__controls {\n  opacity: 0;\n  pointer-events: none; }\n\n.plyr--video .plyr__controls {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2;\n  padding: 50px 10px 10px;\n  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit;\n  color: #fff;\n  transition: opacity .3s ease; }\n\n.plyr--video .plyr__controls button.tab-focus:focus,\n.plyr--video .plyr__controls button:hover {\n  background: #335fe6;\n  color: #fff; }\n\n.plyr--audio .plyr__controls {\n  padding: 10px;\n  border-radius: inherit;\n  background: #fff;\n  border: 1px solid #dbe3e8;\n  color: #565D64; }\n\n.plyr--audio .plyr__controls button.tab-focus:focus,\n.plyr--audio .plyr__controls button:hover,\n.plyr__play-large {\n  background: #335fe6;\n  color: #fff; }\n\n.plyr__play-large {\n  display: none;\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding: 10px;\n  border: 4px solid currentColor;\n  border-radius: 100%;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);\n  transition: all .3s ease; }\n\n.plyr__play-large svg {\n  position: relative;\n  left: 2px;\n  width: 20px;\n  height: 20px;\n  display: block;\n  fill: currentColor; }\n\n.plyr__play-large:focus {\n  outline: rgba(255, 255, 255, 0.5) dotted 1px; }\n\n.plyr .plyr__play-large {\n  display: inline-block; }\n\n.plyr--audio .plyr__play-large,\n.plyr--playing .plyr__controls [data-plyr=play],\n.plyr__controls [data-plyr=pause] {\n  display: none; }\n\n.plyr--playing .plyr__play-large {\n  opacity: 0;\n  visibility: hidden; }\n\n.plyr--playing .plyr__controls [data-plyr=pause] {\n  display: inline-block; }\n\n.plyr--captions-active .plyr__controls .icon--captions-on,\n.plyr--fullscreen-active .icon--exit-fullscreen,\n.plyr--muted .plyr__controls .icon--muted {\n  display: block; }\n\n.plyr [data-plyr=captions],\n.plyr [data-plyr=fullscreen],\n.plyr--captions-active .plyr__controls .icon--captions-on + svg,\n.plyr--fullscreen-active .icon--exit-fullscreen + svg,\n.plyr--muted .plyr__controls .icon--muted + svg {\n  display: none; }\n\n.plyr--captions-enabled [data-plyr=captions],\n.plyr--fullscreen-enabled [data-plyr=fullscreen] {\n  display: inline-block; }\n\n.plyr__tooltip {\n  position: absolute;\n  z-index: 2;\n  bottom: 100%;\n  margin-bottom: 10px;\n  padding: 5px 7.5px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.7);\n  border-radius: 3px;\n  color: #fff;\n  font-size: 14px;\n  line-height: 1.3;\n  -webkit-transform: translate(-50%, 10px) scale(0.8);\n          transform: translate(-50%, 10px) scale(0.8);\n  -webkit-transform-origin: 50% 100%;\n          transform-origin: 50% 100%;\n  transition: opacity .2s .1s ease, -webkit-transform .2s .1s ease;\n  transition: transform .2s .1s ease, opacity .2s .1s ease;\n  transition: transform .2s .1s ease, opacity .2s .1s ease, -webkit-transform .2s .1s ease; }\n\n.plyr__tooltip::before {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  bottom: -4px;\n  border-right: 4px solid transparent;\n  border-top: 4px solid rgba(0, 0, 0, 0.7);\n  border-left: 4px solid transparent;\n  z-index: 2; }\n\n.plyr button.tab-focus:focus .plyr__tooltip,\n.plyr button:hover .plyr__tooltip,\n.plyr__tooltip--visible {\n  opacity: 1;\n  -webkit-transform: translate(-50%, 0) scale(1);\n          transform: translate(-50%, 0) scale(1); }\n\n.plyr button:hover .plyr__tooltip {\n  z-index: 3; }\n\n.plyr__controls button:first-child .plyr__tooltip {\n  left: 0;\n  -webkit-transform: translate(0, 10px) scale(0.8);\n          transform: translate(0, 10px) scale(0.8);\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%; }\n\n.plyr__controls button:first-child .plyr__tooltip::before {\n  left: 16px; }\n\n.plyr__controls button:last-child .plyr__tooltip {\n  right: 0;\n  -webkit-transform: translate(0, 10px) scale(0.8);\n          transform: translate(0, 10px) scale(0.8);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%; }\n\n.plyr__controls button:last-child .plyr__tooltip::before {\n  left: auto;\n  right: 16px;\n  -webkit-transform: translateX(50%);\n          transform: translateX(50%); }\n\n.plyr__controls button:first-child .plyr__tooltip--visible,\n.plyr__controls button:first-child.tab-focus:focus .plyr__tooltip,\n.plyr__controls button:first-child:hover .plyr__tooltip,\n.plyr__controls button:last-child .plyr__tooltip--visible,\n.plyr__controls button:last-child.tab-focus:focus .plyr__tooltip,\n.plyr__controls button:last-child:hover .plyr__tooltip {\n  -webkit-transform: translate(0, 0) scale(1);\n          transform: translate(0, 0) scale(1); }\n\n.plyr__progress {\n  position: relative;\n  display: none;\n  -ms-flex: 1;\n  -webkit-box-flex: 1;\n          flex: 1; }\n\n.plyr__progress input[type=range] {\n  position: relative;\n  z-index: 2; }\n\n.plyr__progress input[type=range]::-webkit-slider-runnable-track {\n  background: 0 0; }\n\n.plyr__progress input[type=range]::-moz-range-track {\n  background: 0 0; }\n\n.plyr__progress input[type=range]::-ms-fill-upper {\n  background: 0 0; }\n\n.plyr__progress .plyr__tooltip {\n  left: 0; }\n\n.plyr .plyr__progress {\n  display: inline-block; }\n\n.plyr__progress--buffer,\n.plyr__progress--played,\n.plyr__volume--display {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n  height: 8px;\n  margin: -4px 0 0;\n  padding: 0;\n  vertical-align: top;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n  border-radius: 100px; }\n\n.plyr__progress--buffer::-webkit-progress-bar,\n.plyr__progress--played::-webkit-progress-bar,\n.plyr__volume--display::-webkit-progress-bar {\n  background: 0 0; }\n\n.plyr__progress--buffer::-webkit-progress-value,\n.plyr__progress--played::-webkit-progress-value,\n.plyr__volume--display::-webkit-progress-value {\n  background: currentColor;\n  border-radius: 100px;\n  min-width: 8px; }\n\n.plyr__progress--buffer::-moz-progress-bar,\n.plyr__progress--played::-moz-progress-bar,\n.plyr__volume--display::-moz-progress-bar {\n  background: currentColor;\n  border-radius: 100px;\n  min-width: 8px; }\n\n.plyr__progress--buffer::-ms-fill,\n.plyr__progress--played::-ms-fill,\n.plyr__volume--display::-ms-fill {\n  border-radius: 100px; }\n\n.plyr__progress--played,\n.plyr__volume--display {\n  z-index: 1;\n  color: #335fe6;\n  background: 0 0;\n  transition: none; }\n\n.plyr__progress--played::-webkit-progress-value,\n.plyr__volume--display::-webkit-progress-value {\n  min-width: 8px;\n  max-width: 99%;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  transition: none; }\n\n.plyr__progress--played::-moz-progress-bar,\n.plyr__volume--display::-moz-progress-bar {\n  min-width: 8px;\n  max-width: 99%;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  transition: none; }\n\n.plyr__progress--played::-ms-fill,\n.plyr__volume--display::-ms-fill {\n  display: none; }\n\n.plyr__progress--buffer::-webkit-progress-value {\n  transition: width .2s ease; }\n\n.plyr__progress--buffer::-moz-progress-bar {\n  transition: width .2s ease; }\n\n.plyr__progress--buffer::-ms-fill {\n  transition: width .2s ease; }\n\n.plyr--video .plyr__progress--buffer,\n.plyr--video .plyr__volume--display {\n  background: rgba(255, 255, 255, 0.25); }\n\n.plyr--video .plyr__progress--buffer {\n  color: rgba(255, 255, 255, 0.25); }\n\n.plyr--audio .plyr__progress--buffer,\n.plyr--audio .plyr__volume--display {\n  background: rgba(198, 214, 219, 0.66); }\n\n.plyr--audio .plyr__progress--buffer {\n  color: rgba(198, 214, 219, 0.66); }\n\n.plyr--loading .plyr__progress--buffer {\n  -webkit-animation: plyr-progress 1s linear infinite;\n          animation: plyr-progress 1s linear infinite;\n  background-size: 25px 25px;\n  background-repeat: repeat-x;\n  background-image: linear-gradient(-45deg, rgba(0, 0, 0, 0.15) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.15) 75%, transparent 75%, transparent);\n  color: transparent; }\n\n.plyr--video.plyr--loading .plyr__progress--buffer {\n  background-color: rgba(255, 255, 255, 0.25); }\n\n.plyr--audio.plyr--loading .plyr__progress--buffer {\n  background-color: rgba(198, 214, 219, 0.66); }\n\n.plyr__time {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 14px; }\n\n.plyr__time + .plyr__time {\n  display: none; }\n\n@media (min-width: 768px) {\n  .plyr__time + .plyr__time {\n    display: inline-block; } }\n\n.plyr__time + .plyr__time::before {\n  content: '\\2044';\n  margin-right: 10px; }\n\n.plyr__volume {\n  display: none; }\n\n.plyr .plyr__volume {\n  -ms-flex: 1;\n  -webkit-box-flex: 1;\n          flex: 1;\n  position: relative; }\n\n.plyr .plyr__volume input[type=range] {\n  position: relative;\n  z-index: 2; }\n\n@media (min-width: 480px) {\n  .plyr .plyr__volume {\n    display: block;\n    max-width: 60px; } }\n\n@media (min-width: 768px) {\n  .plyr .plyr__volume {\n    max-width: 100px; } }\n\n.plyr--is-ios .plyr__volume,\n.plyr--is-ios [data-plyr=mute] {\n  display: none !important; }\n\n.plyr--fullscreen-active {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 10000000;\n  background: #000;\n  border-radius: 0 !important; }\n\n.plyr--fullscreen-active video {\n  height: 100%; }\n\n.plyr--fullscreen-active .plyr__video-wrapper {\n  height: 100%;\n  width: 100%; }\n\n.plyr--fullscreen-active .plyr__video-embed {\n  overflow: visible; }\n\n.plyr--fullscreen-active .plyr__controls {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.plyr--fullscreen-active.plyr--vimeo .plyr__video-wrapper {\n  height: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n", ""]);

// exports


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

(function ($) {
	$(document).ready(function () {
		// what are you waiting for?
		console.log('webpack is working, yo');
	});
})(jQuery);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ })
/******/ ]);