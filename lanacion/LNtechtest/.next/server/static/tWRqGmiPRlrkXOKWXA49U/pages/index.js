module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "3w4u":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Listado_container__3jwLe"
};


/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "A/9y":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Etiquetas_container__1ZItg"
};


/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__("4vsW");
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./components/Header/Header.jsx

var __jsx = external_react_default.a.createElement;
function LogoLaNacion() {
  const styles = {
    height: 31
  };
  return __jsx("img", {
    src: "/media/La_Nacion_Logo.png",
    alt: "La Nacion",
    style: styles
  });
}
function Header() {
  const headerStyles = {
    display: 'block',
    background: 'white',
    paddingTop: 15,
    paddingBottom: 15,
    position: 'fixed',
    top: 0,
    width: '100%',
    borderBottom: '1px solid rgb(204, 204, 204)',
    textAlign: 'center'
  };
  return __jsx("header", {
    style: headerStyles
  }, __jsx(LogoLaNacion, null));
}
// CONCATENATED MODULE: ./components/banners/TopBanner.jsx

var TopBanner_jsx = external_react_default.a.createElement;
function TopBanner() {
  const containerStyles = {
    width: '100% !important',
    backgroundColor: '#f3f3f3',
    marginBottom: 40
  };
  const bannerStyles = {
    width: 1260,
    height: 170,
    background: '#a0dbe9',
    margin: 'auto'
  };
  return TopBanner_jsx("div", {
    id: "top-banner-container",
    style: containerStyles
  }, TopBanner_jsx("div", {
    id: "top-banner",
    style: bannerStyles
  }));
}
// CONCATENATED MODULE: ./components/banners/SideBanner.jsx

var SideBanner_jsx = external_react_default.a.createElement;
function SideBanner() {
  const styles = {
    width: 300,
    height: 600,
    background: '#a0dbe9'
  };
  return SideBanner_jsx("div", {
    id: "side-banner",
    style: styles
  });
}
// CONCATENATED MODULE: ./utils/tags.js
const getTagsMap = articles => {
  const tagsMap = [];
  articles && articles.forEach(article => {
    article.taxonomy.tags.forEach(tag => {
      const mapIndex = tagsMap.findIndex(tagMapped => tagMapped.slug === tag.slug);

      if (mapIndex === -1) {
        tagsMap.push({
          slug: tag.slug,
          text: tag.text,
          count: 1
        });
      } else {
        tagsMap[mapIndex].count++;
      }
    });
  });
  return tagsMap.sort((tagA, tagB) => tagB.count - tagA.count);
};
// EXTERNAL MODULE: ./components/Listado/Etiquetas.module.scss
var Etiquetas_module = __webpack_require__("A/9y");
var Etiquetas_module_default = /*#__PURE__*/__webpack_require__.n(Etiquetas_module);

// CONCATENATED MODULE: ./components/Listado/Etiquetas.jsx

var Etiquetas_jsx = external_react_default.a.createElement;

function Etiquetas({
  tags
}) {
  const slicedTags = tags.slice(0, 10);
  return Etiquetas_jsx("div", {
    className: Etiquetas_module_default.a.container
  }, slicedTags.map((tag, i) => Etiquetas_jsx("a", {
    key: i,
    href: `/tema/${tag.slug}`
  }, tag.text)));
}
// EXTERNAL MODULE: ./components/Listado/PreviewArticulo.module.scss
var PreviewArticulo_module = __webpack_require__("jgct");
var PreviewArticulo_module_default = /*#__PURE__*/__webpack_require__.n(PreviewArticulo_module);

// CONCATENATED MODULE: ./utils/fechas.js
const mapaMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const formatearFecha = fechaISO => {
  const date = new Date(fechaISO);
  return `${date.getDate()} de ${mapaMeses[date.getMonth() - 1]} de ${date.getFullYear()}`;
};
// CONCATENATED MODULE: ./components/Listado/PreviewArticulo.jsx

var PreviewArticulo_jsx = external_react_default.a.createElement;


function PreviewArticulo({
  article
}) {
  const fechaFormateada = formatearFecha(article.display_date);
  return article.subtype === '7' && PreviewArticulo_jsx("article", {
    className: PreviewArticulo_module_default.a.container
  }, PreviewArticulo_jsx("section", null, PreviewArticulo_jsx("a", {
    href: article.website_url
  }, PreviewArticulo_jsx("picture", null, PreviewArticulo_jsx("img", {
    src: article.promo_items && article.promo_items.basic && article.promo_items.basic.url
  })))), PreviewArticulo_jsx("div", null, PreviewArticulo_jsx("h2", null, PreviewArticulo_jsx("a", {
    href: article.website_url
  }, PreviewArticulo_jsx("span", null, article.headlines.basic), " ", article.headlines.basic.subtitle)), PreviewArticulo_jsx("h4", null, fechaFormateada)));
}
// EXTERNAL MODULE: ./components/Listado/Listado.module.scss
var Listado_module = __webpack_require__("3w4u");
var Listado_module_default = /*#__PURE__*/__webpack_require__.n(Listado_module);

// CONCATENATED MODULE: ./components/Listado/Listado.jsx

var Listado_jsx = external_react_default.a.createElement;




function Listado({
  articles
}) {
  const tagsMap = getTagsMap(articles);
  return Listado_jsx("div", {
    className: Listado_module_default.a.container
  }, Listado_jsx("h1", null, "Acumulado Grilla"), Listado_jsx(Etiquetas, {
    tags: tagsMap
  }), Listado_jsx("section", null, articles.map((article, i) => Listado_jsx(PreviewArticulo, {
    key: i,
    article: article
  }))), Listado_jsx("button", null, "Mas notas"));
}
;
// CONCATENATED MODULE: ./components/index.js




// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;


const contentContainerStyle = {
  paddingTop: 100,
  display: 'fixed'
};
const contentLayoutStyle = {
  display: 'flex',
  justifyContent: 'center'
};

function Index({
  data: {
    articles
  }
}) {
  return pages_jsx("div", {
    className: "site-layout"
  }, pages_jsx(Header, null), pages_jsx("main", {
    className: "content-container",
    style: contentContainerStyle
  }, pages_jsx(TopBanner, null), pages_jsx("div", {
    className: "content-layout",
    style: contentLayoutStyle
  }, pages_jsx(Listado, {
    articles: articles
  }), pages_jsx(SideBanner, null))));
}

async function getServerSideProps() {
  const res = await external_node_fetch_default()('https://api-test-ln.herokuapp.com/articles');
  const data = await res.json();
  return {
    props: {
      data
    }
  };
}
/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "jgct":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "PreviewArticulo_container__1lpK1"
};


/***/ })

/******/ });