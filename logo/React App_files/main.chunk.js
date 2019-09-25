(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.alpha60 {\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.4);\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./DNDSprites/DragonPlus.jpg */ "./src/DNDSprites/DragonPlus.jpg"));

// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\ndiv.charStats {\n  background-color: black;\n  background-size:contain;\n  width: 13rem;\n  border: 3px solid orange;\n  position: absolute;\n  left: 1rem;\n  top: 1rem;\n  padding-bottom: 2rem;\n}\n\ndiv.proficiencyInfo{\n  background-color: black;\n  width: 17rem;\n  border: 3px solid greenyellow;\n  position: absolute;\n  left: 15rem;\n  top: 1rem;\n  font-size: 13px;\n}\n\ndiv.hpInfo {\n  background-color: black;\n  width: 15rem;\n  border: 3px solid white;\n  position: absolute;\n  left : 33rem;\n  top: 1rem;\n}\n\ndiv.charInfo {\n  width: 60rem;\n  height: 15rem;\n  border: 3px solid red;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 1rem;\n  position: relative;\n  background-color: black;\n}\n\ndiv.subCont {\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  width: 60rem;\n}\n\ndiv.mainStats {\n  position: relative;\n  padding-top: .5rem;\n}\n\ndiv.mod{\n  background-color: black;\n  border: 1px solid black;\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  width: 2rem;\n  margin-top: 1rem;\n}\n\ndiv.mainInfo{\n  position: absolute;\n  text-align: left;\n  left: 1rem;\n  top: 1rem;\n}\n\ndiv.definingInfo{\n  position: absolute;\n  left: 15rem;\n  top: 1rem;\n  text-align: left\n}\n\ndiv.profSkills{\n  background-color: black;\n  position: relative;\n  border: 1px dotted red;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\ndiv.profStats{\n  background-color: black;\n  position: relative;\n  border: 1px dotted blue;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\ntable.tableProf{\n  text-align: center;\n  width: 100%;\n}\n\ntable.tr{\n  text-align: left;\n}\n\ntable.tableSkills{\n  text-align: center;\n  width: 100%;\n}\n\ntd.profData{\n  text-align: left;\n  position: absolute;\n  left: 1rem;\n}\n\ntd.skillData{\n  text-align: left;\n  position: absolute;\n  left: 1rem;\n}\n\ndiv.hpData{\n  text-align: right;\n  padding-left: 1rem;\n}\n\n#userviewdiv{\n  color: whitesmoke;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#Footer{\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  bottom: 0;\n  color: white;\n  font-size: x-small;\n}\n\n#mainrow{\n  margin-bottom: 50px;\n  width: 100%;\n}\n\nimg.avatar{\n  width: 200px;\n  padding: 1rem;\n  position: absolute;\n}\n\ndiv.loginDiv{\n  width: 20rem;\n  right: 20rem;\n  top: 5rem;\n  padding: 1rem;\n  background-color: whitesmoke;\n  border: 2px solid black;\n  position: absolute;\n}\n\ndiv.cardPreview{\n  margin: 1rem;\n}", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Containers_MainContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Containers/MainContainer */ "./src/Containers/MainContainer.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/peterviss/Documents/Developments/Projects/All-Summer-Days-FRONTEND/src/App.js";





function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Containers_MainContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Components/AbilityScore.js":
/*!****************************************!*\
  !*** ./src/Components/AbilityScore.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Users/peterviss/Documents/Developments/Projects/All-Summer-Days-FRONTEND/src/Components/AbilityScore.js";



const AbilityScore = props => {
  const cost = num => {
    if (num === 8) {
      return 0;
    } else if (num === 9) {
      return 1;
    } else if (num === 10) {
      return 2;
    } else if (num === 11) {
      return 3;
    } else if (num === 12) {
      return 4;
    } else if (num === 13) {
      return 5;
    } else if (num === 14) {
      return 7;
    } else if (num === 15) {
      return 9;
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "formGridCity",
    onChange: props.setScore,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    style: {
      color: 'red'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    className: props.name,
    value: props.score,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, props.score)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outline-info",
    value: props.score,
    onClick: event => props.buy(event, props),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "+"), " ", " ", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      color: 'cyan'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "Cost To Increase: ", cost(props.score))));
};

/* harmony default export */ __webpack_exports__["default"] = (AbilityScore);

/***/ }),

/***/ "./src/Components/Button.js":
/*!**********************************!*\
  !*** ./src/Components/Button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Users/peterviss/Documents/Developments/Projects/All-Summer-Days-FRONTEND/src/Components/Button.js";



const Buttons = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    size: "sm",
    onClick: props.clickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, props.title);
};

/* harmony default export */ __webpack_exports__["default"] = (Buttons);

/***/ }),

/***/ "./src/Components/CharForm.js":
/*!************************************!*\
  !*** ./src/Components/CharForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_peterviss_Documents_Developments_Projects_All_Summer_Days_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_images_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-images-upload */ "./node_modules/react-images-upload/compiled.js");
/* harmony import */ var react_images_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_images_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _AbilityScore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AbilityScore */ "./src/Components/AbilityScore.js");

var _jsxFileName = "/Users/peterviss/Documents/Developments/Projects/All-Summer-Days-FRONTEND/src/Components/CharForm.js";





class CharForm extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      redirect: false,
      pictures: [],
      chosen: [],
      skills: null,
      instr: null,
      tools: null,
      className: null,
      skillNum: 0,
      intrNum: 0,
      toolNum: 0,
      abilityScore: 27,
      character: {
        firstname: "",
        lastname: "",
        char_class_id: null,
        level: 2,
        strength: 8,
        dexterity: 8,
        constitution: 8,
        intelligence: 8,
        wisdom: 8,
        charisma: 8,
        hitpoints: 0,
        max_hp: 0,
        age: 0,
        height: 0,
        weight: 0,
        eyes: "",
        skin: "",
        hair: "",
        background: "",
        alignment: "",
        proficiency_ids: [],
        avatar: []
      }
    };

    this.onDrop = picture => {
      this.setState({
        character: Object(_Users_peterviss_Documents_Developments_Projects_All_Summer_Days_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.character, {
          avatar: this.state.character.avatar.concat(picture)
        })
      });
    };

    this.displayProf = () => {
      return this.state.chosen.map(choose => {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, choose);
      });
    };

    this.pointBuy = (cost, num, props) => {
      let obj = Object.keys(this.state.character);
      let name = obj.filter(key => {
        if (key === props.name.toLowerCase()) {
          return key;
        } else {
          return null;
        }
      });

      if (this.state.abilityScore < cost) {
        alert("You Have Do Not Have Enough Points!");
      } else {
        this.setState({
          abilityScore: this.state.abilityScore - cost,
          character: Object(_Users_peterviss_Documents_Developments_Projects_All_Summer_Days_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.character, {
            [name]: num + 1
          })
        });
      }

      debugger;
    };

    this.pointCost = (event, props) => {
      let cost = 0;
      let num = parseInt(event.target.value);

      if (num === 8) {
        cost = 0;
        return this.pointBuy(cost, num, props);
      } else if (num === 9) {
        cost = 1;
        return this.pointBuy(cost, num, props);
      } else if (num === 10) {
        cost = 2;
        return this.pointBuy(cost, num, props);
      } else if (num === 11) {
        cost = 3;
        return this.pointBuy(cost, num, props);
      } else if (num === 12) {
        cost = 4;
        return this.pointBuy(cost, num, props);
      } else if (num === 13) {
        cost = 5;
        return this.pointBuy(cost, num, props);
      } else if (num === 14) {
        cost = 7;
        return this.pointBuy(cost, num, props);
      } else if (num === 15) {
        cost = 9;
        return this.pointBuy(cost, num, props);
      }
    };

    this.getClass = event => {
      let name = this.props.classList.filter(list => {
        if (list.name === event.target.value) {
          return list;
        } else {
          return null;
        }
      });
      let skill = name[0].choose_proficiencies[0];
      let instruments = name[0].choose_proficiencies[1] ? name[0].choose_proficiencies[1] : null;
      let tools = name[0].choose_proficiencies[2] ? name[0].choose_proficiencies[2] : null;
      let num1 = skill.slice(-1)[0].choose;
      let num2 = instruments ? instruments.slice(-1)[0].choose : 0;
      let num3 = tools ? tools.slice(-1)[0].choose : 0;
      this.setState({
        skills: skill,
        instr: instruments,
        tools: tools,
        skillNum: num1,
        instrNum: num2,
        toolNum: num3,
        className: name[0],
        character: Object(_Users_peterviss_Documents_Developments_Projects_All_Summer_Days_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.character, {
          hitpoints: parseInt(name[0].hit_die),
          max_hp: parseInt(name[0].hit_die),
          char_class_id: name[0].id
        })
      });
      return;
    };

    this.setClassList = (event, theKey, theNum) => {
      let keyMe = theKey[0];
      let newestName = this.state.className.choose_proficiencies.map(arr => {
        return arr.filter(prof => {
          if (prof.name === event.target.value) {
            return prof;
          } else {
            return null;
          }
        });
      });
      let newestArr = newestName.filter(arr => {
        return arr.length !== 0;
      });

      if (this.state.character.proficiency_ids.includes(newestArr[0][0].id)) {
        alert("Already Selected");
      } else {
        this.setState({
          chosen: [...this.state.chosen, event.target.value],
          [keyMe]: theNum,
          className: Object(_Users_peterviss_Documents_Developments_Projects_All_Summer_Days_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.className),
          character: Object(_Users_peterviss_Documents_Developments_Projects_All_Summer_Days_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.character, {
            proficiency_ids: [newestArr[0][0].id, ...this.state.character.proficiency_ids]
          })
        });
      }
    };

    this.displaySkillProfs = () => {
      let keys = Object.keys(this.state);
      let theKey = keys.filter(key => {
        return key === 'skillNum';
      });
      let theNum = this.state.skillNum - 1;

      if (this.state.skillNum !== 0) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
          controlId: "exampleForm.ControlSelect2",
          onChange: event => this.setClassList(event, theKey, theNum),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
          style: {
            color: 'red'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        }, "Skills to Choose: ", this.state.skillNum), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
          as: "select",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }, "please choose"), this.state.className.choose_proficiencies[0].map((prof, i) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          key: i,
          value: prof.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, prof.name))));
      } else {
        return null;
      }
    };

    this.displayInstProfs = () => {
      let keys = Object.keys(this.state);
      let theKey = keys.filter(key => {
        return key === 'instrNum';
      });
      let theNum = this.state.instrNum - 1;

      if (this.state.instrNum !== 0) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
          controlId: "exampleForm.ControlSelect2",
          onChange: event => this.setClassList(event, theKey, theNum),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
          style: {
            color: 'white'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, "Intruments to Choose: ", this.state.instrNum), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
          as: "select",
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        }, "please choose"), this.state.className.choose_proficiencies[1].map(prof => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          key: prof.id,
          value: prof.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, prof.name))));
      } else {
        return;
      }
    };

    this.displayToolsProfs = () => {
      let keys = Object.keys(this.state);
      let theKey = keys.filter(key => {
        return key === 'toolNum';
      });
      let theNum = this.state.toolNum - 1;

      if (this.state.toolNum !== 0) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
          controlId: "exampleForm.ControlSelect2",
          onChange: event => this.setClassList(event, theKey, theNum),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
          style: {
            color: 'white'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225
          },
          __self: this
        }, "Tools to Choose: ", this.state.toolNum), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
          as: "select",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          },
          __self: this
        }, "please choose"), this.state.className.choose_proficiencies[2].map(prof => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          key: prof.id,
          value: prof.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          },
          __self: this
        }, prof.name))));
      } else {
        return;
      }
    };

    this.stating = event => {
      let num = parseInt(event.target.value) ? parseInt(event.target.value) : event.target.value;
      let name = event.target.classList[0];
      this.setState({
        character: Object(_Users_peterviss_Documents_Developments_Projects_All_Summer_Days_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.character, {
          [name]: num
        })
      });
    };

    this.submitForm = event => {
      event.preventDefault();
      let character = this.state.character;
      const pProf = this.state.className.passive_proficiencies.map(prof => prof.id);
      const sThrows = this.state.className.saving_throws.map(prof => prof.id);
      character.proficiency_ids = [...character.proficiency_ids, ...pProf, ...sThrows];
      character.user_id = this.props.loggedInUser.id;
      fetch("http://".concat(window.location.hostname, ":5000/characters"), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          character
        })
      }).then(resp => resp.json()).then(data => {
        this.props.newChar(data);
        this.props.routeProps.history.push('/characters');
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      onSubmit: this.submitForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      sm: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
      controlId: "formBasicEmail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
      style: {
        color: 'red'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    }, "First Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
      type: "",
      placeholder: "put name first here",
      className: "firstname",
      onChange: this.stating,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
      controlId: "exampleForm.ControlInput1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
      style: {
        color: 'red'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289
      },
      __self: this
    }, "Last Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
      type: "",
      placeholder: "put name last here",
      className: "lastname",
      onChange: this.stating,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
      controlId: "exampleForm.ControlInput1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
      style: {
        color: 'red'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296
      },
      __self: this
    }, "Level"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
      as: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298
      },
      __self: this
    }, "2"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
      controlId: "exampleForm.ControlSelect2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
      style: {
        color: 'red'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302
      },
      __self: this
    }, "Age"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
      type: "number",
      className: "age",
      onChange: this.stating,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
      controlId: "exampleForm.ControlSelect2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
      style: {
        color: 'red'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307
      },
      __self: this
    }, "Height In Centimeters"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
      type: "number",
      className: "height",
      onChange: this.stating,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
      controlId: "exampleForm.ControlSelect2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
      style: {
        color: 'red'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312
      },
      __self: this
    }, "Weight In Lbs"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
      type: "number",
      className: "weight",
      onChange: this.stating,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      sm: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
      controlId: "exampleForm.ControlSelect2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
      style: {
        color: 'red'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320
      },
      __self: this
    }, "Eye Color"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
      as: "select",
      className: "eyes",
      onChange: this.stating,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322
      },
      __self: this
    }, "please choose"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: this
    }, "Yellow"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: this
    }, "Amber"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325
      },
      __self: this
    }, "Brown"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326
      },
      __self: this
    }, "Hazel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327
      },
      __self: this
    }, "Green"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328
      },
      __self: this
    }, "Blue"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329
      },
      __self: this
    }, "Gray"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330
      },
      __self: this
    }, "Aqua"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331
      },
      __self: this
    }, "Red"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: this
    }, "Purple"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      },
      __self: this
    }, "Pale Brown"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334
      },
      __self: this
    }, "Pale Blue"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335
      },
      __self: this
    }, "Pale Green"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336
      },
      __self: this
    }, "Pale Gray"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337
      },
      __self: this
    }, "Deep Blue"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338
      },
      __self: this
    }, "Violet Red"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339
      },
      __self: this
    }, "Orange"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340
      },
      __self: this
    }, "Spring Green"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341
      },
      __self: this
    }, "Sea Green"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342
      },
      __self: this
    }, "Emerald Green"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
      controlId: "exampleForm.ControlSelect2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
      style: {
        color: 'red'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346
      },
      __self: this
    }, "Skin Color"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
      as: "select",
      className: "skin",
      onChange: this.stating,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348
      },
      __self: this
    }, "please choose"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    }, "Pale"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }, "Fair"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351
      },
      __self: this
    }, "Light"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352
      },
      __self: this
    }, "Light Tan"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353
      },
      __self: this
    }, "Tan"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354
      },
      __self: this
    }, "Dark Tan"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355
      },
      __self: this
    }, "Brown"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356
      },
      __self: this
    }, "Dark Brown"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357
      },
      __self: this
    }, "Black"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358
      },
      __self: this
    }, "Gray"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359
      },
      __self: this
    }, "White"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360
      },
      __self: this
    }, "Gold"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361
      },
      __self: this
    }, "Silver"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362
      },
      __self: this
    }, "Bronze"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363
      },
      __self: this
    }, "Red"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364
      },
      __self: this
    }, "Orange"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365
      },
      __self: this
    }, "Yellow"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366
      },
      __self: this
    }, "Green"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367
      },
      __self: this
    }, "Blue"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368
      },
      __self: this
    }, "Purple"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369
      },
      __self: this
    }, "Pale Yellow"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370
      },
      __self: this
    }, "Dark Red"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371
      },
      __self: this
    }, "Light Red"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372
      },
      __self: this
    }, "Amber"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373
      },
      __self: this
    }, "Olive"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374
      },
      __self: this
    }, "Aqua"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375
      },
      __self: this
    }, "Pale Brown"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376
      },
      __self: this
    }, "Pale Blue"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377
      },
      __self: this
    }, "Pale Green"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378
      },
      __self: this
    }, "Pale Gray"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379
      },
      __self: this
    }, "Deep Blue"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380
      },
      __self: this
    }, "Violet Red"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381
      },
      __self: this
    }, "Red Orange"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382
      },
      __self: this
    }, "Spring Green"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383
      },
      __self: this
    }, "Sea Green"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384
      },
      __self: this
    }, "Emerald Green"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
      controlId: "exampleForm.ControlSelect2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
      style: {
        color: 'red'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388
      },
      __self: this
    }, "Hair Color"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
      as: "select",
      className: "hair",
      onChange: this.stating,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390
      },
      __self: this
    }, "please choose"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391
      },
      __self: this
    }, "Black"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392
      },
      __self: this
    }, "Gray"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393
      },
      __self: this
    }, "Platinum"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394
      },
      __self: this
    }, "White"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395
      },
      __self: this
    }, "Dark Blonde"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396
      },
      __self: this
    }, "Blonde"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397
      },
      __self: this
    }, "Bleach Blonde"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398
      },
      __self: this
    }, "Dark Redhead"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399
      },
      __self: this
    }, "Redhead"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400
      },
      __self: this
    }, "Light Redhead"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401
      },
      __self: this
    }, "Brunette"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402
      },
      __self: this
    }, "Auburn"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403
      },
      __self: this
    }, "Yellow"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404
      },
      __self: this
    }, "Amber"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405
      },
      __self: this
    }, "Brown"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406
      },
      __self: this
    }, "Hazel"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407
      },
      __self: this
    }, "Green"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408
      },
      __self: this
    }, "Blue"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409
      },
      __self: this
    }, "Gray"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410
      },
      __self: this
    }, "Aqua"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411
      },
      __self: this
    }, "Red"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412
      },
      __self: this
    }, "Purple"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413
      },
      __self: this
    }, "Pale Brown"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414
      },
      __self: this
    }, "Pale Blue"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415
      },
      __self: this
    }, "Pale Green"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416
      },
      __self: this
    }, "Pale Gray"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417
      },
      __self: this
    }, "Deep Blue"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418
      },
      __self: this
    }, "Violet Red"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419
      },
      __self: this
    }, "Red Orange"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420
      },
      __self: this
    }, "Spring Green"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421
      },
      __self: this
    }, "Sea Green"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422
      },
      __self: this
    }, "Emerald Green"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
      controlId: "exampleForm.ControlTextarea1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
      style: {
        color: 'red'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426
      },
      __self: this
    }, "Background"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
      as: "textarea",
      rows: "3",
      className: "background",
      onChange: this.stating,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
      controlId: "exampleForm.ControlSelect2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
      style: {
        color: 'red'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430
      },
      __self: this
    }, "Alignment"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
      as: "select",
      className: "alignment",
      onChange: this.stating,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 431
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432
      },
      __self: this
    }, "please choose"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433
      },
      __self: this
    }, "Lawful Good"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434
      },
      __self: this
    }, "Neutral Good "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435
      },
      __self: this
    }, "Chaotic Good "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436
      },
      __self: this
    }, "Lawful Neutral "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437
      },
      __self: this
    }, "Chaotic Neutral "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438
      },
      __self: this
    }, "Lawful Evil "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439
      },
      __self: this
    }, "Neutral Evil "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 440
      },
      __self: this
    }, "Chaotic Evil")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      sm: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445
      },
      __self: this
    }, this.state.className ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
      controlId: "exampleForm.ControlInput1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 447
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
      style: {
        color: 'red'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448
      },
      __self: this
    }, "Character Class"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
      as: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 449
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 450
      },
      __self: this
    }, this.state.className.name))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
      controlId: "exampleForm.ControlSelect1",
      onChange: this.getClass,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
      style: {
        color: 'red'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 455
      },
      __self: this
    }, "Character Class"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
      as: "select",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457
      },
      __self: this
    }, "Please Choose"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458
      },
      __self: this
    }, "Barbarian"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459
      },
      __self: this
    }, "Bard"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460
      },
      __self: this
    }, "Cleric"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461
      },
      __self: this
    }, "Druid"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462
      },
      __self: this
    }, "Fighter"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463
      },
      __self: this
    }, "Monk"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464
      },
      __self: this
    }, "Paladin"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465
      },
      __self: this
    }, "Ranger"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 466
      },
      __self: this
    }, "Rogue"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 467
      },
      __self: this
    }, "Sorcerer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 468
      },
      __self: this
    }, "Warlock"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 469
      },
      __self: this
    }, "Wizard"))), this.state.className ? this.displaySkillProfs() : null, this.state.className ? this.displayInstProfs() : null, this.state.className ? this.displayToolsProfs() : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AbilityScore__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: 'Strength',
      abilityScore: this.state.abilityScore,
      score: this.state.character.strength,
      setScore: this.setScore,
      choice: this.state.choices,
      buy: this.pointCost,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 475
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AbilityScore__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: 'Dexterity',
      abilityScore: this.state.abilityScore,
      score: this.state.character.dexterity,
      setScore: this.setScore,
      choice: this.state.choices,
      buy: this.pointCost,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 476
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AbilityScore__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: 'Constitution',
      abilityScore: this.state.abilityScore,
      score: this.state.character.constitution,
      setScore: this.setScore,
      choice: this.state.choices,
      buy: this.pointCost,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 477
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AbilityScore__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: 'Intelligence',
      abilityScore: this.state.abilityScore,
      score: this.state.character.intelligence,
      setScore: this.setScore,
      choice: this.state.choices,
      buy: this.pointCost,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 478
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AbilityScore__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: 'Wisdom',
      abilityScore: this.state.abilityScore,
      score: this.state.character.wisdom,
      setScore: this.setScore,
      choice: this.state.choices,
      buy: this.pointCost,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 479
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AbilityScore__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: 'Charisma',
      abilityScore: this.state.abilityScore,
      score: this.state.character.charisma,
      setScore: this.setScore,
      choice: this.state.choices,
      buy: this.pointCost,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variant: "primary",
      type: "submit",
      style: {
        width: '10rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 483
      },
      __self: this
    }, "Submit")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      sm: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 489
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      border: "primary",
      style: {
        width: '10rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 490
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 491
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 492
      },
      __self: this
    }, " Points Left: ", this.state.abilityScore))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 495
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      border: "primary",
      style: {
        width: '18rem'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 496
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Card"].Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498
      },
      __self: this
    }, " Chosen Proficiences:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 499
      },
      __self: this
    }, this.displayProf()))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_images_upload__WEBPACK_IMPORTED_MODULE_2___default.a, {
      withIcon: true,
      buttonText: "Choose images",
      onChange: this.onDrop,
      imgExtension: ['.jpg', '.gif', '.png', '.gif'],
      maxFileSize: 5242880,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 505
      },
      __self: this
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CharForm);

/***/ }),

/***/ "./src/Components/CharacterCard.js":
/*!*****************************************!*\
  !*** ./src/Components/CharacterCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Users/peterviss/Documents/Developments/Projects/All-Summer-Days-FRONTEND/src/Components/CharacterCard.js";



const CharacterCard = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      width: "15rem",
      color: "white",
      margin: "1rem",
      padding: "1rem"
    },
    onClick: () => props.onClickHandler(props.character),
    bg: 'dark',
    variant: 'dark',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Img, {
    variant: "top",
    src: props.character.avatar_available ? props.character.image_url : "https://via.placeholder.com/200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, props.character.firstname, " ", props.character.lastname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Class : ", props.character.char_class.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Level : ", props.character.level), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Level : ", props.character.max_hp))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "NOT IN CAMPAIGN"))));
};

/* harmony default export */ __webpack_exports__["default"] = (CharacterCard);

/***/ }),

/***/ "./src/Components/CharacterCardPreview.js":
/*!************************************************!*\
  !*** ./src/Components/CharacterCardPreview.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Button */ "./src/Components/Button.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/peterviss/Documents/Developments/Projects/All-Summer-Days-FRONTEND/src/Components/CharacterCardPreview.js";





const CharacterCardPreview = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      width: "24rem",
      color: "white",
      marginTop: "3.7rem",
      marginLeft: "10rem",
      padding: "1rem"
    },
    bg: 'dark',
    variant: 'dark',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Img, {
    variant: "top",
    src: props.character.avatar_available ? props.character.image_url : "https://via.placeholder.com/200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, props.character.firstname, " ", props.character.lastname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "STATS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Strength: ", props.character.strength), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Dexterity: ", props.character.dexterity), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Constitution: ", props.character.constitution), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Intelligence: ", props.character.intelligence, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Wisdom: ", props.character.wisdom), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Charisma: ", props.character.charisma)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "MAX HP: ", props.character.strength), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "AC: ", 10 + props.getProficiencyMod(props.character.dexterity))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "NOT IN CAMPAIGN"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "justify-content-lg-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cardPreview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/stats",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    clickHandler: props.showCharacter,
    title: "Show Character",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cardPreview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Delete",
    clickHandler: props.deleteCharacter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CharacterCardPreview);

/***/ }),

/***/ "./src/Components/Login.js":
/*!*********************************!*\
  !*** ./src/Components/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/peterviss/Documents/Developments/Projects/All-Summer-Days-FRONTEND/src/Components/Login.js";



const loginUrl = "http://".concat(window.location.hostname, ":5000/login");
class Login extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.onChangeHandler = e => {
      this.setState({
        [e.currentTarget.name]: e.currentTarget.value
      });
    };

    this.loginHandler = e => {
      e.preventDefault();
      e.persist();
      const data = this.state;
      fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(res => res.json()).then(info => {
        if (info.authenticated === "true") {
          this.setState({
            loggedIn: true
          });
          let userinfo = JSON.parse(info.userinfo);
          this.props.updateLoggedInUser(userinfo);
          this.props.setCharacters(userinfo.characters);
        } else {
          alert(info.message);
        }
      });
    };

    this.state = {
      username: "",
      password: "",
      loggedIn: false
    };
  }

  render() {
    return this.state.loggedIn ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: "/characters",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "loginDiv",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      controlId: "formGroupUsername",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Username"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      type: "username",
      name: "username",
      placeholder: "Enter username",
      onChange: this.onChangeHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      controlId: "formGroupPassword",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
      type: "password",
      name: "password",
      placeholder: "Password",
      onChange: this.onChangeHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "primary",
      type: "submit",
      onClick: this.loginHandler,
      onSubmit: this.loginHandler,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Submit")));
  }

}

/***/ }),

/***/ "./src/Components/Navibar.js":
/*!***********************************!*\
  !*** ./src/Components/Navibar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Users/peterviss/Documents/Developments/Projects/All-Summer-Days-FRONTEND/src/Components/Navibar.js";



const Navibar = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    bg: 'dark',
    variant: 'dark',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "All Summer Days"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
    className: "justify-content-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, props.loggedInUser.username ? props.loggedInUser.username : "Login")));
};

/* harmony default export */ __webpack_exports__["default"] = (Navibar);

/***/ }),

/***/ "./src/Components/Userview.js":
/*!************************************!*\
  !*** ./src/Components/Userview.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Users/peterviss/Documents/Developments/Projects/All-Summer-Days-FRONTEND/src/Components/Userview.js";



const Userview = props => {
  if (props.character.id) {
    const characterProf = props.character.proficiencies.map(prof => prof.name);
    const modSTR = props.getProficiencyMod(props.character.strength);
    const modDEX = props.getProficiencyMod(props.character.dexterity);
    const modCON = props.getProficiencyMod(props.character.constitution);
    const modINT = props.getProficiencyMod(props.character.intelligence);
    const modWIS = props.getProficiencyMod(props.character.wisdom);
    const modCHA = props.getProficiencyMod(props.character.charisma);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      className: "justify-content-lg-center",
      id: "userviewdiv",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      sm: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "charInfo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainInfo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }, "Name: ", "".concat(props.character.firstname, " ").concat(props.character.lastname)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    }, "Class: ", props.character.char_class.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }, "Level: ", props.character.level)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "definingInfo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    }, "Eyes: ", props.character.eyes), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    }, "Skin: ", props.character.skin), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    }, "Hair: ", props.character.hair), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }, "Age: ", props.character.age), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, "Height: ", props.character.height, "cm"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    }, "Weight: ", props.character.weight, "lbs")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: props.character.avatar_available ? props.character.image_url : "https://via.placeholder.com/200",
      alt: 'Avatar',
      className: "avatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "subCont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "charStats",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainStats",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    }, "Strength: ", props.character.strength, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mod",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    }, " ", modSTR)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainStats",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }, "Dexterity: ", props.character.dexterity, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mod",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }, " ", modDEX)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainStats",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }, "Constitution: ", props.character.constitution, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mod",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    }, " ", modCON)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainStats",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: undefined
    }, "Intelligence: ", props.character.intelligence, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mod",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: undefined
    }, " ", modINT)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainStats",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    }, "Wisdom: ", props.character.wisdom, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mod",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: undefined
    }, " ", modWIS)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mainStats",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: undefined
    }, "Charisma: ", props.character.charisma, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mod",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: undefined
    }, " ", modCHA))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "proficiencyInfo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: undefined
    }, "___ Inspiration"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: undefined
    }, "+", props.character.level, " Proficiency Bonus"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profStats",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      className: "tableProf",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "profData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: undefined
    }, characterProf.includes("Saving Throw: STR") ? "\u25CF ".concat(modSTR + props.character.level) : "\u25CB ".concat(modSTR)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: undefined
    }, "Strength")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "profData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: undefined
    }, characterProf.includes("Saving Throw: DEX") ? "\u25CF ".concat(modDEX + props.character.level) : "\u25CB ".concat(modDEX), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: undefined
    }, "Dexterity")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "profData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: undefined
    }, characterProf.includes("Saving Throw: CON") ? "\u25CF ".concat(modCON + props.character.level) : "\u25CB ".concat(modCON), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: undefined
    }, "Constitution")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "profData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: undefined
    }, characterProf.includes("Saving Throw: INT") ? "\u25CF ".concat(modINT + props.character.level) : "\u25CB ".concat(modINT), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: undefined
    }, "Intelligence")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "profData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: undefined
    }, characterProf.includes("Saving Throw: WIS") ? "\u25CF ".concat(modWIS + props.character.level) : "\u25CB ".concat(modWIS)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: undefined
    }, " Wisdom")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "profData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: undefined
    }, characterProf.includes("Saving Throw: CHA") ? "\u25CF ".concat(modCHA + props.character.level) : "\u25CB ".concat(modCHA), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: undefined
    }, "Charisma")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: undefined
    }, "SAVING THROWS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profSkills",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      className: "tableSkills",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "skillData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: undefined
    }, characterProf.includes("Skill: Acrobatics<") ? "\u25CF ".concat(modDEX + props.character.level) : "\u25CB ".concat(modDEX)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: undefined
    }, "Acrobatics(Dex)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "skillData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: undefined
    }, characterProf.includes("Skill: Animal Handling") ? "\u25CF ".concat(modWIS + props.character.level) : "\u25CB ".concat(modWIS), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: undefined
    }, "Animal Handling(Wis)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "skillData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: undefined
    }, characterProf.includes("Skill: Arcana") ? "\u25CF ".concat(modINT + props.character.level) : "\u25CB ".concat(modINT), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: undefined
    }, "Arcana(Int)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "skillData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: undefined
    }, characterProf.includes("Skill: Athletics") ? "\u25CF ".concat(modSTR + props.character.level) : "\u25CB ".concat(modSTR), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: undefined
    }, "Athletics(Str)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "skillData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: undefined
    }, characterProf.includes("Skill: Deception") ? "\u25CF ".concat(modCHA + props.character.level) : "\u25CB ".concat(modCHA)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: undefined
    }, "Deception(Cha)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "skillData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: undefined
    }, characterProf.includes("Skill: History") ? "\u25CF ".concat(modINT + props.character.level) : "\u25CB ".concat(modINT), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: undefined
    }, "History(Int)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "skillData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: undefined
    }, characterProf.includes("Skill: Insight") ? "\u25CF ".concat(modWIS + props.character.level) : "\u25CB ".concat(modWIS)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: undefined
    }, "Insight(Wis)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "skillData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: undefined
    }, characterProf.includes("Skill: Intimidation") ? "\u25CF ".concat(modSTR + props.character.level) : "\u25CB ".concat(modSTR), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: undefined
    }, "Intimidation(Str)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "skillData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: undefined
    }, characterProf.includes("Skill: Investigation") ? "\u25CF ".concat(modINT + props.character.level) : "\u25CB ".concat(modINT), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: undefined
    }, "Investigation(Int)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "skillData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: undefined
    }, characterProf.includes("Skill: Medicine") ? "\u25CF ".concat(modWIS + props.character.level) : "\u25CB ".concat(modWIS), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: undefined
    }, "Medicine(Wis)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "skillData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: undefined
    }, characterProf.includes("Skill: Nature") ? "\u25CF ".concat(modINT + props.character.level) : "\u25CB ".concat(modINT), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: undefined
    }, "Nature(Int)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "skillData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: undefined
    }, characterProf.includes("Skill: Perception") ? "\u25CF ".concat(modWIS + props.character.level) : "\u25CB ".concat(modWIS)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: undefined
    }, "Perception(Wis)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "skillData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: undefined
    }, characterProf.includes("Skill: Persuasion") ? "\u25CF ".concat(modCHA + props.character.level) : "\u25CB ".concat(modCHA), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: undefined
    }, "Persuasion(Cha)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "skillData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: undefined
    }, characterProf.includes("Skill: Religion") ? "\u25CF ".concat(modINT + props.character.level) : "\u25CB ".concat(modINT), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: undefined
    }, "Religion(Int)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "skillData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: undefined
    }, characterProf.includes("Skill: Sleight of Hand") ? "\u25CF ".concat(modDEX + props.character.level) : "\u25CB ".concat(modDEX), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: undefined
    }, "Sleight of Hand(Dex)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "skillData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: undefined
    }, characterProf.includes("Skill: Stealth") ? "\u25CF ".concat(modDEX + props.character.level) : "\u25CB ".concat(modDEX)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: undefined
    }, "Stealth(Dex)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "skillData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: undefined
    }, characterProf.includes("Skill: Survival") ? "\u25CF ".concat(modWIS + props.character.level) : "\u25CB ".concat(modWIS), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: undefined
    }, "Survival(Wis)")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: undefined
    }, "SKILLS"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hpInfo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hpData",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: undefined
    }, "AC: ", 10 + modDEX)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: undefined
    }, "MAX HP: ", props.character.max_hp)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: undefined
    }, "CURRENT HP: ", props.character.hitpoints)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: undefined
    }, "HIT DIE: ", props.character.char_class.hit_die)))))))));
  } else {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Userview);

/***/ }),

/***/ "./src/Containers/CharacterContainer.js":
/*!**********************************************!*\
  !*** ./src/Containers/CharacterContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_CharacterCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/CharacterCard */ "./src/Components/CharacterCard.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Button */ "./src/Components/Button.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/peterviss/Documents/Developments/Projects/All-Summer-Days-FRONTEND/src/Containers/CharacterContainer.js";



 // import CharForm from '../Components/CharForm'



class CharacterContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      checked: true
    };

    this.displayCharacters = () => {
      return this.props.characters.map(character => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_CharacterCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: character.id,
        character: character,
        onClickHandler: this.props.selectCharacter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }));
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginTop: "2rem"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      className: "justify-content-lg-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      to: '/form',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      clickHandler: this.newCharacter,
      title: "New Character",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, this.displayCharacters())));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CharacterContainer);

/***/ }),

/***/ "./src/Containers/MainContainer.js":
/*!*****************************************!*\
  !*** ./src/Containers/MainContainer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CharacterContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CharacterContainer */ "./src/Containers/CharacterContainer.js");
/* harmony import */ var _Components_CharacterCardPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/CharacterCardPreview */ "./src/Components/CharacterCardPreview.js");
/* harmony import */ var _Components_CharForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/CharForm */ "./src/Components/CharForm.js");
/* harmony import */ var _Components_Navibar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Navibar */ "./src/Components/Navibar.js");
/* harmony import */ var _Components_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Login */ "./src/Components/Login.js");
/* harmony import */ var _Components_Userview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Userview */ "./src/Components/Userview.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/peterviss/Documents/Developments/Projects/All-Summer-Days-FRONTEND/src/Containers/MainContainer.js";








 // const charUrl = `http://${window.location.hostname}:5000/characters`

const classUrl = "http://".concat(window.location.hostname, ":5000/class"); // console.log(window.location.hostname)

class MainContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      allCharacters: [],
      selectedCharacter: {},
      classList: [],
      loggedInUser: {}
    };

    this.updateLoggedInUser = user => {
      this.setState({
        loggedInUser: user
      });
    };

    this.getProficiencyMod = stat => {
      if (stat === 1) {
        return -5;
      } else if (stat >= 2 && stat <= 3) {
        return -4;
      } else if (stat >= 4 && stat <= 5) {
        return -3;
      } else if (stat >= 6 && stat <= 7) {
        return -2;
      } else if (stat >= 8 && stat <= 9) {
        return -1;
      } else if (stat >= 10 && stat <= 11) {
        return 0;
      } else if (stat >= 12 && stat <= 13) {
        return 1;
      } else if (stat >= 14 && stat <= 15) {
        return 2;
      } else if (stat >= 16 && stat <= 17) {
        return 3;
      } else if (stat >= 18 && stat <= 19) {
        return 4;
      } else if (stat >= 20 && stat <= 21) {
        return 5;
      } else if (stat >= 22 && stat <= 23) {
        return 6;
      } else if (stat >= 24 && stat <= 25) {
        return 7;
      } else if (stat >= 26 && stat <= 27) {
        return 8;
      } else if (stat >= 28 && stat <= 29) {
        return 9;
      } else {
        return 10;
      }
    };

    this.deleteCharacter = () => {
      fetch("http://".concat(window.location.hostname, ":5000/characters/").concat(this.state.selectedCharacter.id), {
        method: 'DELETE'
      }).then(resp => resp.json()).then(data => this.updateAllCharacter(data));
    };

    this.setCharacters = characters => {
      this.setState({
        allCharacters: characters
      });
    };

    this.selectCharacter = characterObj => {
      this.setState({
        selectedCharacter: characterObj
      });
    };

    this.updateAllCharacter = delCharacter => {
      this.setState({
        allCharacters: this.state.allCharacters.filter(char => char.id !== delCharacter.id),
        selectedCharacter: {}
      });
    };

    this.addtoAllCharacters = newCharacter => {
      this.setState({
        allCharacters: [...this.state.allCharacters, newCharacter],
        redirectToCharPage: true
      });
    };
  }

  componentDidMount() {
    fetch(classUrl).then(resp => resp.json()).then(classes => this.setState({
      classList: classes
    }));
  }

  render() {
    // console.log(this.state.allCharacters)
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Navibar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      loggedInUser: this.state.loggedInUser,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
      id: "mainrow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, this.state.loggedInUser.username ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Redirect"], {
      to: "/characters",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Redirect"], {
      to: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
      exact: true,
      path: "/login",
      render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        sm: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Login__WEBPACK_IMPORTED_MODULE_5__["default"], {
        updateLoggedInUser: this.updateLoggedInUser,
        setCharacters: this.setCharacters,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
      exact: true,
      path: "/stats",
      render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        sm: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Userview__WEBPACK_IMPORTED_MODULE_6__["default"], {
        getProficiencyMod: this.getProficiencyMod,
        character: this.state.selectedCharacter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
      exact: true,
      path: "/characters",
      render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        sm: 7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CharacterContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
        updateAllCharacter: this.updateAllCharacter,
        characters: this.state.allCharacters,
        selectCharacter: this.selectCharacter,
        selectedCharacter: this.state.selectedCharacter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        sm: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, this.state.selectedCharacter.id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_CharacterCardPreview__WEBPACK_IMPORTED_MODULE_2__["default"], {
        character: this.state.selectedCharacter,
        getProficiencyMod: this.getProficiencyMod,
        showCharacter: this.showCharacter,
        deleteCharacter: this.deleteCharacter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }) : null)),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
      exact: true,
      path: "/form",
      render: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        sm: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_CharForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
        routeProps: props,
        newChar: this.addtoAllCharacters,
        redirectToCharPage: this.state.redirectToCharPage,
        classList: this.state.classList,
        loggedInUser: this.state.loggedInUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MainContainer);

/***/ }),

/***/ "./src/DNDSprites/DragonPlus.jpg":
/*!***************************************!*\
  !*** ./src/DNDSprites/DragonPlus.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/DragonPlus.8ef26fc8.jpg";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/peterviss/Documents/Developments/Projects/All-Summer-Days-FRONTEND/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/peterviss/Documents/Developments/Projects/All-Summer-Days-FRONTEND/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/peterviss/Documents/Developments/Projects/All-Summer-Days-FRONTEND/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map