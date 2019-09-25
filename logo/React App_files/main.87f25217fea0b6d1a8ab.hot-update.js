webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.87f25217fea0b6d1a8ab.hot-update.js.map