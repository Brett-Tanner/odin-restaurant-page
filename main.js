/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/initialSetup.ts":
/*!*****************************!*\
  !*** ./src/initialSetup.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generatePage: () => (/* binding */ generatePage)
/* harmony export */ });
/* harmony import */ var _images_beans_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/beans.jpg */ "./src/images/beans.jpg");
/* harmony import */ var _images_cake_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/cake.jpg */ "./src/images/cake.jpg");
/* harmony import */ var _images_cheese_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/cheese.jpg */ "./src/images/cheese.jpg");
/* harmony import */ var _images_noodles_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/noodles.jpg */ "./src/images/noodles.jpg");
/* harmony import */ var _images_fan_cay_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/fan_cay.jpg */ "./src/images/fan_cay.jpg");
/* harmony import */ var _images_happyBirthday_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/happyBirthday.jpg */ "./src/images/happyBirthday.jpg");
/* harmony import */ var _images_NewYear_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/NewYear.jpg */ "./src/images/NewYear.jpg");
/* harmony import */ var _images_pho_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/pho.jpg */ "./src/images/pho.jpg");
/* harmony import */ var _images_vika_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/vika.jpg */ "./src/images/vika.jpg");
/* harmony import */ var _images_yoghurt_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/yoghurt.jpg */ "./src/images/yoghurt.jpg");











const main = document.getElementById("content");
const foodPics = [
    _images_beans_jpg__WEBPACK_IMPORTED_MODULE_0__,
    _images_cake_jpg__WEBPACK_IMPORTED_MODULE_1__,
    _images_cheese_jpg__WEBPACK_IMPORTED_MODULE_2__,
    _images_noodles_jpg__WEBPACK_IMPORTED_MODULE_3__,
    _images_fan_cay_jpg__WEBPACK_IMPORTED_MODULE_4__,
    _images_happyBirthday_jpg__WEBPACK_IMPORTED_MODULE_5__,
    _images_NewYear_jpg__WEBPACK_IMPORTED_MODULE_6__,
    _images_noodles_jpg__WEBPACK_IMPORTED_MODULE_3__,
    _images_pho_jpg__WEBPACK_IMPORTED_MODULE_7__,
    _images_vika_jpg__WEBPACK_IMPORTED_MODULE_8__,
    _images_yoghurt_jpg__WEBPACK_IMPORTED_MODULE_9__,
];
function addHeading(text, headingSize = "h1") {
    const heading = document.createElement(headingSize);
    heading.innerText = text;
    main === null || main === void 0 ? void 0 : main.appendChild(heading);
}
function addImage(path) {
    const img = document.createElement("img");
    img.src = path;
    main === null || main === void 0 ? void 0 : main.appendChild(img);
}
function generatePage() {
    addHeading("Welcome to Vika's fine dining!", "h1");
    foodPics.forEach((pic) => {
        addImage(pic);
    });
}


/***/ }),

/***/ "./src/images/NewYear.jpg":
/*!********************************!*\
  !*** ./src/images/NewYear.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2792bc57dbf8bef5145.jpg";

/***/ }),

/***/ "./src/images/beans.jpg":
/*!******************************!*\
  !*** ./src/images/beans.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "738a4a3cf68e6217a5cc.jpg";

/***/ }),

/***/ "./src/images/cake.jpg":
/*!*****************************!*\
  !*** ./src/images/cake.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29c56c74341b94682c14.jpg";

/***/ }),

/***/ "./src/images/cheese.jpg":
/*!*******************************!*\
  !*** ./src/images/cheese.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d18c7a69d1b21a17ee46.jpg";

/***/ }),

/***/ "./src/images/fan_cay.jpg":
/*!********************************!*\
  !*** ./src/images/fan_cay.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc2fd0a251f4e9ccd50c.jpg";

/***/ }),

/***/ "./src/images/happyBirthday.jpg":
/*!**************************************!*\
  !*** ./src/images/happyBirthday.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c321779fa7fa2accd5ac.jpg";

/***/ }),

/***/ "./src/images/noodles.jpg":
/*!********************************!*\
  !*** ./src/images/noodles.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35729254f511ab63b60a.jpg";

/***/ }),

/***/ "./src/images/pho.jpg":
/*!****************************!*\
  !*** ./src/images/pho.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a77166ef35a138500a39.jpg";

/***/ }),

/***/ "./src/images/vika.jpg":
/*!*****************************!*\
  !*** ./src/images/vika.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a80b538c0fbb9df546e.jpg";

/***/ }),

/***/ "./src/images/yoghurt.jpg":
/*!********************************!*\
  !*** ./src/images/yoghurt.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c50295b09121d138fb03.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initialSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialSetup */ "./src/initialSetup.ts");

(0,_initialSetup__WEBPACK_IMPORTED_MODULE_0__.generatePage)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDRjtBQUNJO0FBQ007QUFDTDtBQUNhO0FBQ1o7QUFDQTtBQUNSO0FBQ0U7QUFDTTtBQUUzQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2hELE1BQU0sUUFBUSxHQUFHO0lBQ2YsOENBQUs7SUFDTCw2Q0FBSTtJQUNKLCtDQUFNO0lBQ04sZ0RBQVc7SUFDWCxnREFBTTtJQUNOLHNEQUFhO0lBQ2IsZ0RBQU87SUFDUCxnREFBTztJQUNQLDRDQUFHO0lBQ0gsNkNBQUk7SUFDSixnREFBTztDQUNSLENBQUM7QUFJRixTQUFTLFVBQVUsQ0FBQyxJQUFZLEVBQUUsY0FBdUIsSUFBSTtJQUMzRCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BELE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLElBQVk7SUFDNUIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztJQUNmLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekIsQ0FBQztBQUVNLFNBQVMsWUFBWTtJQUMxQixVQUFVLENBQUMsZ0NBQWdDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ3ZCLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7QUNsQjhDO0FBRTlDLDJEQUFZLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWxTZXR1cC50cyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJlYW5zIGZyb20gXCIuL2ltYWdlcy9iZWFucy5qcGdcIjtcbmltcG9ydCBDYWtlIGZyb20gXCIuL2ltYWdlcy9jYWtlLmpwZ1wiO1xuaW1wb3J0IENoZWVzZSBmcm9tIFwiLi9pbWFnZXMvY2hlZXNlLmpwZ1wiO1xuaW1wb3J0IENoZWVzeUJyZXR0IGZyb20gXCIuL2ltYWdlcy9ub29kbGVzLmpwZ1wiO1xuaW1wb3J0IEZhbkNheSBmcm9tIFwiLi9pbWFnZXMvZmFuX2NheS5qcGdcIjtcbmltcG9ydCBIYXBweUJpcnRoZGF5IGZyb20gXCIuL2ltYWdlcy9oYXBweUJpcnRoZGF5LmpwZ1wiO1xuaW1wb3J0IE5ld1llYXIgZnJvbSBcIi4vaW1hZ2VzL05ld1llYXIuanBnXCI7XG5pbXBvcnQgTm9vZGxlcyBmcm9tIFwiLi9pbWFnZXMvbm9vZGxlcy5qcGdcIjtcbmltcG9ydCBQaG8gZnJvbSBcIi4vaW1hZ2VzL3Boby5qcGdcIjtcbmltcG9ydCBWaWthIGZyb20gXCIuL2ltYWdlcy92aWthLmpwZ1wiO1xuaW1wb3J0IFlvZ2h1cnQgZnJvbSBcIi4vaW1hZ2VzL3lvZ2h1cnQuanBnXCI7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5jb25zdCBmb29kUGljcyA9IFtcbiAgQmVhbnMsXG4gIENha2UsXG4gIENoZWVzZSxcbiAgQ2hlZXN5QnJldHQsXG4gIEZhbkNheSxcbiAgSGFwcHlCaXJ0aGRheSxcbiAgTmV3WWVhcixcbiAgTm9vZGxlcyxcbiAgUGhvLFxuICBWaWthLFxuICBZb2dodXJ0LFxuXTtcblxudHlwZSBoZWFkaW5nID0gXCJoMVwiIHwgXCJoMlwiIHwgXCJoM1wiIHwgXCJoNFwiIHwgXCJoNVwiO1xuXG5mdW5jdGlvbiBhZGRIZWFkaW5nKHRleHQ6IHN0cmluZywgaGVhZGluZ1NpemU6IGhlYWRpbmcgPSBcImgxXCIpIHtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaGVhZGluZ1NpemUpO1xuICBoZWFkaW5nLmlubmVyVGV4dCA9IHRleHQ7XG4gIG1haW4/LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xufVxuXG5mdW5jdGlvbiBhZGRJbWFnZShwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nLnNyYyA9IHBhdGg7XG4gIG1haW4/LmFwcGVuZENoaWxkKGltZyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVBhZ2UoKSB7XG4gIGFkZEhlYWRpbmcoXCJXZWxjb21lIHRvIFZpa2EncyBmaW5lIGRpbmluZyFcIiwgXCJoMVwiKTtcbiAgZm9vZFBpY3MuZm9yRWFjaCgocGljKSA9PiB7XG4gICAgYWRkSW1hZ2UocGljKTtcbiAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgZ2VuZXJhdGVQYWdlIH0gZnJvbSBcIi4vaW5pdGlhbFNldHVwXCI7XG5cbmdlbmVyYXRlUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9