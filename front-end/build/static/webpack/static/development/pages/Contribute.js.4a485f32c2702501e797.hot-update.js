webpackHotUpdate("static\\development\\pages\\Contribute.js",{

/***/ "./pages/Contribute.js":
/*!*****************************!*\
  !*** ./pages/Contribute.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_myLayoutAfter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/myLayoutAfter */ "./pages/components/myLayoutAfter.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data */ "./pages/data.js");
/* harmony import */ var _components_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/http */ "./pages/components/http.js");
/* harmony import */ var _components_successAlert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/successAlert */ "./pages/components/successAlert.js");
/* harmony import */ var _util_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./util/config */ "./pages/util/config.js");
/* harmony import */ var _util_config__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_util_config__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_Tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/Tooltip */ "./pages/components/Tooltip.js");









var _jsxFileName = "D:\\workplace\\front-end\\pages\\Contribute.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;








var inputStyle = {
  marginBottom: '60px',
  outlineStyle: 'none',
  border: '1px solid #ccc',
  borderRadius: '3px',
  padding: '6px 6px',
  width: '70%',
  fontFamily: "Microsoft soft",
  position: 'relative',
  left: "15%"
};
var boxStyle = {
  position: 'relative',
  left: '20%',
  width: "60%",
  marginBottom: '20px',
  padding: '30px',
  border: '2px solid  #ffd633',
  borderRadius: '2px'
};
var bannerStyle = {
  position: 'relative',
  left: '20%',
  textAlign: 'center',
  marginTop: "20px",
  width: "60%",
  padding: '10px 10px',
  border: '2px solid  #ffd633',
  backgroundColor: "#ffd633",
  borderRadius: '2px'
};
var labelStyle = {
  position: 'relative',
  left: "15%"
};
var groupStyles = {
  border: "2px dotted blue",
  color: 'white',
  background: 'blue',
  padding: '5px 0px',
  display: 'flex'
};

var GroupHeading = function GroupHeading(props) {
  return __jsx("div", {
    style: groupStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_11__["components"].GroupHeading, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })));
};

var Relationship =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Relationship, _React$Component);

  function Relationship(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Relationship);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Relationship).call(this, props));
    _this.handleSelect = _this.handleSelect.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Relationship, [{
    key: "handleSelect",
    value: function handleSelect(selectOption, name) {
      var name1 = name.name;

      if (selectOption !== null) {
        var option = selectOption.value;
        this.props.onChange(name1, option);
      } else {
        var _option = '';
        this.props.onChange(name1, _option);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        style: {
          width: '70%',
          left: '15%',
          position: 'relative',
          marginBottom: 60
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "basic-single",
        classNamePrefix: "select",
        isClearable: "true",
        isSearchable: "true",
        name: this.props.name,
        required: "required",
        placeholder: this.props.placeholder,
        onChange: this.handleSelect,
        options: this.props.options,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }));
    }
  }]);

  return Relationship;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

var contribute =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(contribute, _React$Component2);

  function contribute(props) {
    var _this2;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, contribute);

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(contribute).call(this, props));
    _this2.state = {
      type: '',
      submitSuccess: 'none',
      submitSuccess1: 'none',
      moreRe2: 'none',
      moreRe1: 'block',
      date: '',
      occ: '',
      name: '',
      title: '',
      altName: '',
      altNameType: '',
      sDate: '',
      eDate: 'none',
      bPlace: '',
      dPlace: 'none',
      reId: 'none',
      relPair: 'none',
      reId1: 'none',
      relPair1: 'none',
      sumNote: '',
      fullNote: '',
      ePrepared: '',
      showMore: 'none',
      exist: false,
      alertNum: 0
    };
    _this2.relJson = [], // this.props.data.map((item)=>{
    //     const value = item.eId
    //     const label = `${item.eName},${item.sDate},${item.bPlace}`
    //     const rel = {}
    //     rel.label = label,
    //     rel.value = value
    //     this.relJson.push(rel)
    // })
    _this2.existeId = [];
    _this2.handleChange = _this2.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this2));
    _this2.handleClick = _this2.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this2));
    _this2.handleSelect = _this2.handleSelect.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this2));
    _this2.handleMutiSelect = _this2.handleMutiSelect.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this2));
    _this2.errCheck = _this2.errCheck.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this2));
    return _this2;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(contribute, [{
    key: "handleChange",
    value: function handleChange(e) {
      var name = e.target.name;
      var val = e.target.value;
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, name, val));
    }
  }, {
    key: "handleMutiSelect",
    value: function handleMutiSelect(selectOption) {
      if (selectOption !== null) {
        var option = [];
        selectOption.forEach(function (element) {
          option.push(element.label);
        });
        this.setState({
          occ: option
        });
      } else {
        this.setState({
          occ: ''
        });
      }
    }
  }, {
    key: "handleSelect",
    value: function handleSelect(name, val) {
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, name, val));
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var _this3 = this;

      var uId = localStorage.getItem('uId');
      var data = {
        eType: this.state.type,
        eTitle: this.state.eTitle,
        eName: this.state.name,
        alterType: this.state.altNameType,
        alterName: this.state.altName,
        "function": this.state.occ,
        sDate: this.state.sDate,
        eDate: this.state.eDate,
        bPlace: this.state.bPlace,
        dPlace: this.state.dPlace,
        sumNote: this.state.sumNote,
        fullNote: this.state.fullNote,
        ePrepared: this.state.ePrepared,
        eId: 'none',
        rId: 'none',
        reId: this.state.reId,
        relPair: this.state.relPair,
        rId1: 'none',
        reId1: this.state.reId1,
        relPair1: this.state.relPair1,
        aId: 'none',
        euId: uId
      };

      if (e.target.name == "save") {
        Object(_components_http__WEBPACK_IMPORTED_MODULE_14__["Post"])('save_entity', data).then(function (res) {
          if (res == 'true') {
            _this3.setState({
              submitSuccess: 'block'
            });
          }
        });
      } else if (e.target.name == 'submit') {
        Object(_components_http__WEBPACK_IMPORTED_MODULE_14__["Post"])('submit_entity', data).then(function (res) {
          if (res == 'true') {
            _this3.setState({
              submitSuccess1: 'block'
            });
          }
        });
      }

      if (e.target.name == 'addAlt') {
        this.setState({
          moreAlt: 'block'
        });
      } else if (e.target.name == 'deleteAlt') {
        this.setState({
          moreAlt: 'none'
        });
      } else if (e.target.name == 'add1') {
        if (this.state.moreRe1 == 'none') {
          this.setState({
            moreRe1: 'block'
          });
        } else {
          this.setState({
            moreRe2: 'block'
          });
        }
      } else if (e.target.name == 'delete2') {
        this.setState({
          moreRe2: 'none'
        });
      } else if (e.target.name == 'delete1') {
        this.setState({
          moreRe1: 'none'
        });
      } else if (e.target.name == "save-basic") {
        var err = this.errCheck("basic");

        if (err == 0) {
          var _data = {
            eName: this.state.name,
            sDate: this.state.sDate,
            bPlace: this.state.bPlace
          };
          Object(_components_http__WEBPACK_IMPORTED_MODULE_14__["Post"])("check_basic_eInfo", _data).then(function (res) {
            if (res == 'false') {
              _this3.setState({
                showMore: ' block',
                exist: false
              });
            } else {
              _this3.setState({
                showMore: ' block',
                exist: true
              });

              res.map(function (item) {
                _this3.existeId.push(item);
              });
            }
          });
        }
      } else if (e.target.name == "still-contribute") {
        this.setState({
          exist: false
        });
      }
    }
  }, {
    key: "errCheck",
    value: function errCheck(section) {
      var date1 = new Date(this.state.sDate);
      var date2 = new Date(this.state.eDate);
      var err = 0;

      if (section == "basic") {
        if (date1.getTime() > date2.getTime()) {
          alert("check birth date and death date");
          err = 1;
        }
      }

      return err;
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, __jsx(_components_myLayoutAfter__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }), __jsx("div", {
        style: {
          display: this.state.submitSuccess
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, __jsx(_components_successAlert__WEBPACK_IMPORTED_MODULE_15__["default"], {
        title: "Congradulations!",
        content: "Your draft has been saved!",
        button: "Ok",
        url: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      })), __jsx("div", {
        style: {
          display: this.state.submitSuccess1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, __jsx(_components_successAlert__WEBPACK_IMPORTED_MODULE_15__["default"], {
        title: "Congradulations!",
        content: "Your contribute has been submitted!",
        button: "Ok",
        url: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      })), __jsx("div", {
        style: bannerStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, __jsx("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, "Basic Information")), __jsx("form", {
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, __jsx("div", {
        style: boxStyle,
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-382533465" + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, __jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], {
        label: "Type",
        type: "dark",
        tip: "Choose a type",
        id: "type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }), __jsx(Relationship, {
        name: "type",
        placeholder: "select...",
        onChange: this.handleSelect,
        options: _data__WEBPACK_IMPORTED_MODULE_13__["typeOptions"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-382533465" + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, __jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], {
        label: "Name",
        type: "dark",
        id: "name",
        tip: "Type the right name format as:<br />Surname, Firstname, Secondname, Thirdname, etc. in full, no initials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }), this.state.type == 'Person' ? __jsx("input", {
        type: "text",
        style: inputStyle,
        name: "name",
        required: "required",
        placeholder: "Surname, Firstname, Secondname, Thirdname, etc. in full, no initials",
        value: this.state.value,
        onChange: this.handleChange,
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }) : __jsx("input", {
        type: "text",
        style: inputStyle,
        name: "name",
        required: "required",
        placeholder: "Type full name of entity",
        value: this.state.value,
        onChange: this.handleChange,
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-382533465" + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, __jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], {
        label: "Subname of entity",
        type: "dark",
        tip: "Title and honor of entity",
        id: "subname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }), __jsx("input", {
        style: inputStyle,
        type: "text",
        name: "eTitle",
        required: "required",
        placeholder: "Type title of entity",
        value: this.state.value,
        onChange: this.handleChange,
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-382533465" + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, __jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], {
        label: "Alternative Name",
        type: "dark",
        tip: "Previous name of entity",
        id: "altername",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }), __jsx("input", {
        style: inputStyle,
        type: "text",
        name: "altName",
        required: "required",
        placeholder: "Type alternative name here",
        value: this.state.value,
        onChange: this.handleChange,
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-382533465" + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, __jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], {
        label: "Alternative Type",
        type: "dark",
        tip: "Type of previous name of entity. e.g. Person",
        id: "altertype",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }), __jsx("input", {
        style: inputStyle,
        type: "text",
        name: "altNameType",
        required: "required",
        placeholder: "Type alternative name type here",
        value: this.state.value,
        onChange: this.handleChange,
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-382533465" + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, this.state.type == 'Person' ? __jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], {
        label: "Birth Date",
        type: "dark",
        tip: "Birth date of entity",
        id: "bDate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }) : __jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], {
        label: "Date from",
        type: "dark",
        tip: "Established date of entity",
        id: "bDate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }), __jsx("input", {
        type: "Date",
        style: inputStyle,
        name: "sDate",
        required: "required",
        value: this.state.value,
        onChange: this.handleChange,
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-382533465" + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, this.state.type == 'Person' ? __jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], {
        label: "Death Date",
        type: "dark",
        tip: "Death date of entity",
        id: "eDate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }) : __jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], {
        label: "To",
        type: "dark",
        tip: "Last existed date of entity",
        id: "eDate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }), __jsx("input", {
        style: inputStyle,
        type: "Date",
        name: "eDate",
        value: this.state.value,
        onChange: this.handleChange,
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      })), this.state.type == 'Person' ? __jsx("div", {
        className: "jsx-382533465" + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, __jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], {
        label: "Birth Place",
        type: "dark",
        tip: "Type birth place as:<br />District, City, State, Country. in full, no initials",
        id: "bPlace",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }), __jsx("input", {
        style: inputStyle,
        type: "text",
        name: "bPlace",
        value: this.state.value,
        required: "required",
        onChange: this.handleChange,
        placeholder: "District, City, State, Country. in full, no initials",
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      })) : __jsx("div", {
        className: "jsx-382533465" + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, __jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], {
        label: "Place of Existence",
        type: "dark",
        tip: "Type Place of Existence as:<br />District, City, State, Country. in full, no initials",
        id: "bPlace",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }), __jsx("input", {
        style: inputStyle,
        type: "text",
        name: "bPlace",
        value: this.state.value,
        required: "required",
        placeholder: "Place of Existence",
        onChange: this.handleChange,
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      })), this.state.type == 'Person' ? __jsx("div", {
        className: "jsx-382533465" + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, __jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], {
        label: "Death Place",
        type: "dark",
        tip: "Type death place as:<br />District, City, State, Country. in full, no initials",
        id: "dPlace",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }), __jsx("input", {
        style: inputStyle,
        type: "text",
        name: "dPlace",
        value: this.state.value,
        onChange: this.handleChange,
        placeholder: "District, City, State, Country. in full, no initials",
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      })) : __jsx("div", {
        className: "jsx-382533465" + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }, __jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], {
        label: "Place of Last Existence",
        type: "dark",
        tip: "Type Place of Last Existence as: <br />District, City, State, Country. in full, no initials",
        id: "dPlace",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }), __jsx("input", {
        style: inputStyle,
        type: "text",
        name: "dPlace",
        value: this.state.value,
        placeholder: "Place of Last Existence",
        onChange: this.handleChange,
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      })), __jsx("div", {
        style: {
          textAlign: "center",
          marginBottom: '20px'
        },
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }, __jsx("button", {
        name: "save-basic",
        onClick: this.handleClick,
        type: "button",
        style: {
          borderRadius: "4px"
        },
        className: "jsx-382533465" + " " + "btn btn-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }, "Save"))), __jsx("div", {
        style: {
          display: this.state.showMore,
          marginTop: '20px'
        },
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }, this.state.exist == true ? __jsx("div", {
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      }, __jsx("label", {
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      }, "We already have this entity's basic information. Please check them first:"), __jsx("br", {
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      }), __jsx("ul", {
        style: {
          marginBottom: '20px'
        },
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        __self: this
      }, this.existeId.map(function (item) {
        return __jsx("li", {
          key: item.eId,
          className: "jsx-382533465",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 420
          },
          __self: this
        }, __jsx(Link, {
          href: "/../viewEntity/[id]",
          as: "/../viewEntity/".concat(item.eId),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 421
          },
          __self: this
        }, __jsx("a", {
          className: "jsx-382533465",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 422
          },
          __self: this
        }, item.eTitle)));
      })), __jsx("button", {
        name: "still-contirbute",
        type: "button",
        onClick: this.handleClick,
        className: "jsx-382533465" + " " + "btn btn-info btn-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        },
        __self: this
      }, "Still want to contribute?")) : __jsx("div", {
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }, __jsx("div", {
        style: bannerStyle,
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        },
        __self: this
      }, "Detail Information")), __jsx("div", {
        style: boxStyle,
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-382533465" + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, __jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], {
        label: "Occupation",
        type: "dark",
        tip: "Choose as many occpuations as you can",
        id: "function",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        },
        __self: this
      }), __jsx("div", {
        style: {
          width: '70%',
          left: '15%',
          position: 'relative',
          marginBottom: 40
        },
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }, __jsx(react_select__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "basic-single",
        classNamePrefix: "select",
        required: "required",
        isClearable: "true",
        isSearchable: "true",
        isMulti: "true",
        name: "occupation",
        onChange: this.handleMutiSelect,
        options: _data__WEBPACK_IMPORTED_MODULE_13__["occOptions"],
        value: this.state.value,
        components: {
          GroupHeading: GroupHeading
        },
        styles: {
          groupHeading: function groupHeading(base) {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, base, {
              flex: '1 1',
              color: 'white',
              margin: 0
            });
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        },
        __self: this
      }))), __jsx("div", {
        className: "jsx-382533465" + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        },
        __self: this
      }, __jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], {
        label: "Summary Note",
        type: "dark",
        tip: "Type brief life experience of entity",
        id: "sumNote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        },
        __self: this
      }), __jsx("textarea", {
        rows: "5",
        style: inputStyle,
        type: "text",
        name: "sumNote",
        required: "required",
        placeholder: "Type summary here",
        value: this.state.value,
        onChange: this.handleChange,
        className: "jsx-382533465" + " " + "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-382533465" + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }, __jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], {
        label: "Full Note",
        type: "dark",
        tip: "Type full life experience of entity",
        id: "fullNote",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        },
        __self: this
      }), __jsx("textarea", {
        rows: "5",
        style: inputStyle,
        type: "text",
        name: "fullNote",
        required: "required",
        placeholder: "Type full note here",
        value: this.state.value,
        onChange: this.handleChange,
        className: "jsx-382533465" + " " + "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474
        },
        __self: this
      }))), __jsx("div", {
        style: bannerStyle,
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      }, "Relationship")), __jsx("div", {
        style: boxStyle,
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        },
        __self: this
      }, __jsx("div", {
        style: {
          display: this.state.moreRe1
        },
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-382533465" + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      }, __jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], {
        label: "Related Entity",
        type: "dark",
        tip: "Choose the related entity by name,birth date, and birth place",
        id: "rel1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        },
        __self: this
      }), __jsx(Relationship, {
        name: "reId",
        placeholder: "select...",
        onChange: this.handleSelect,
        options: this.relJson,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        },
        __self: this
      }), __jsx(_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], {
        label: "Relationship Pairs",
        type: "dark",
        tip: "Former part of pair represents related entity<br/>Later one represents this entity",
        id: "rel1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }), __jsx(Relationship, {
        name: "relPair",
        placeholder: "select as related entity - entity",
        onChange: this.handleSelect,
        options: _data__WEBPACK_IMPORTED_MODULE_13__["pairOptions"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        },
        __self: this
      }))), __jsx("div", {
        style: {
          textAlign: 'center',
          marginBottom: '20px',
          marginTop: '20px'
        },
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        },
        __self: this
      }, __jsx("button", {
        name: "add1",
        type: "button",
        style: {
          borderRadius: "4px"
        },
        onClick: this.handleClick,
        className: "jsx-382533465" + " " + "btn btn-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        },
        __self: this
      }, "Add"), __jsx("button", {
        name: "delete1",
        type: "button",
        style: {
          borderRadius: "4px",
          marginLeft: "50px"
        },
        onClick: this.handleClick,
        className: "jsx-382533465" + " " + "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        },
        __self: this
      }, "Delete"))), __jsx("div", {
        style: {
          display: this.state.moreRe2
        },
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501
        },
        __self: this
      }, __jsx("div", {
        style: boxStyle,
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-382533465" + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        },
        __self: this
      }, __jsx("label", {
        style: labelStyle,
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        },
        __self: this
      }, "Related Entity"), __jsx("br", {
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        },
        __self: this
      }), __jsx(Relationship, {
        name: "reId1",
        placeholder: "select...",
        onChange: this.handleSelect,
        options: this.relJson,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        },
        __self: this
      }), __jsx("label", {
        style: labelStyle,
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        },
        __self: this
      }, "Relationship"), __jsx("br", {
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        },
        __self: this
      }), __jsx(Relationship, {
        name: "relPair1",
        placeholder: "select as related entity - entity",
        onChange: this.handleSelect,
        options: _data__WEBPACK_IMPORTED_MODULE_13__["pairOptions"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507
        },
        __self: this
      }), __jsx("div", {
        style: {
          textAlign: 'center',
          marginBottom: '20px'
        },
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        },
        __self: this
      }, __jsx("button", {
        name: "add2",
        type: "button",
        style: {
          borderRadius: "4px"
        },
        onClick: this.handleClick,
        className: "jsx-382533465" + " " + "btn btn-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509
        },
        __self: this
      }, "Add"), __jsx("button", {
        name: "delete2",
        type: "button",
        style: {
          borderRadius: "4px",
          marginLeft: "50px"
        },
        onClick: this.handleClick,
        className: "jsx-382533465" + " " + "btn btn-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        },
        __self: this
      }, "Delete"))))), __jsx("div", {
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-382533465" + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        },
        __self: this
      }, __jsx("label", {
        style: labelStyle,
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      }, "ePrepared by"), __jsx("br", {
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 518
        },
        __self: this
      }), __jsx("input", {
        style: inputStyle,
        type: "text",
        name: "ePrepared",
        placeholder: "Type entity ePrepared by...",
        value: this.state.value,
        onChange: this.handleChange,
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        },
        __self: this
      })), __jsx("div", {
        style: {
          textAlign: 'center',
          marginBottom: '20px'
        },
        className: "jsx-382533465",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      }, __jsx("button", {
        type: "button",
        name: "submit",
        onClick: this.handleClick,
        style: {
          borderRadius: "4px",
          marginTop: "20px"
        },
        className: "jsx-382533465" + " " + "btn btn-info btn-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524
        },
        __self: this
      }, "Send entity"), __jsx("button", {
        type: "button",
        name: "save",
        onClick: this.handleClick,
        style: {
          borderRadius: "4px",
          marginTop: "20px",
          marginLeft: "50px"
        },
        className: "jsx-382533465" + " " + "btn btn-danger btn-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        },
        __self: this
      }, "Save entity"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "382533465",
        __self: this
      }, "input.jsx-382533465:focus{border-color:#000;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3JrcGxhY2VcXGZyb250LWVuZFxccGFnZXNcXENvbnRyaWJ1dGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcWhCZ0MsQUFHMkMsa0JBQ1IsVUFDdUUsaUZBRXRGLHlFQUFDIiwiZmlsZSI6IkQ6XFx3b3JrcGxhY2VcXGZyb250LWVuZFxccGFnZXNcXENvbnRyaWJ1dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4vY29tcG9uZW50cy9teUxheW91dEFmdGVyJztcclxuaW1wb3J0IFNlbGVjdCx7Y29tcG9uZW50c30gZnJvbSAncmVhY3Qtc2VsZWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdHlwZU9wdGlvbnMsIG9jY09wdGlvbnMsIHBhaXJPcHRpb25zIH0gZnJvbSAnLi9kYXRhJ1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi9jb21wb25lbnRzL2h0dHAnXHJcbmltcG9ydCBBbGVydDEgZnJvbSAnLi9jb21wb25lbnRzL3N1Y2Nlc3NBbGVydCdcclxuaW1wb3J0ICcuL3V0aWwvY29uZmlnJ1xyXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnLi9jb21wb25lbnRzL1Rvb2x0aXAnXHJcblxyXG5cclxuY29uc3QgaW5wdXRTdHlsZSA9e1xyXG4gICAgbWFyZ2luQm90dG9tOiAnNjBweCcsXHJcbiAgICBvdXRsaW5lU3R5bGU6ICdub25lJyAsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2NjYycsXHJcbiAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxyXG4gICAgcGFkZGluZzogJzZweCA2cHgnLFxyXG4gICAgd2lkdGg6ICc3MCUnLFxyXG4gICAgZm9udEZhbWlseTogXCJNaWNyb3NvZnQgc29mdFwiLFxyXG4gICAgcG9zaXRpb246J3JlbGF0aXZlJyxcclxuICAgIGxlZnQ6XCIxNSVcIlxyXG59O1xyXG5cclxuY29uc3QgYm94U3R5bGU9e1xyXG4gICAgcG9zaXRpb246J3JlbGF0aXZlJyxcclxuICAgIGxlZnQ6JzIwJScsXHJcbiAgICB3aWR0aDpcIjYwJVwiLFxyXG4gICAgbWFyZ2luQm90dG9tOicyMHB4JyxcclxuICAgIHBhZGRpbmc6JzMwcHgnLFxyXG4gICAgYm9yZGVyOicycHggc29saWQgICNmZmQ2MzMnLFxyXG4gICAgYm9yZGVyUmFkaXVzOicycHgnXHJcblxyXG59O1xyXG5jb25zdCBiYW5uZXJTdHlsZSA9e1xyXG4gICAgcG9zaXRpb246J3JlbGF0aXZlJyxcclxuICAgIGxlZnQ6JzIwJScsXHJcbiAgICB0ZXh0QWxpZ246J2NlbnRlcicsXHJcbiAgICBtYXJnaW5Ub3A6XCIyMHB4XCIsXHJcbiAgICB3aWR0aDpcIjYwJVwiLFxyXG4gICAgcGFkZGluZzogJzEwcHggMTBweCcsXHJcbiAgICBib3JkZXI6JzJweCBzb2xpZCAgI2ZmZDYzMycsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjZmZkNjMzXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6JzJweCdcclxufTtcclxuY29uc3QgbGFiZWxTdHlsZT17ICAgXHJcbiAgICBwb3NpdGlvbjoncmVsYXRpdmUnLFxyXG4gICAgbGVmdDpcIjE1JVwiXHJcbn07XHJcbmNvbnN0IGdyb3VwU3R5bGVzID0ge1xyXG4gICAgYm9yZGVyOiBgMnB4IGRvdHRlZCBibHVlYCxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYmFja2dyb3VuZDogJ2JsdWUnLFxyXG4gICAgcGFkZGluZzogJzVweCAwcHgnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIH07XHJcbiAgXHJcbmNvbnN0IEdyb3VwSGVhZGluZyA9IHByb3BzID0+IChcclxuICAgIDxkaXYgc3R5bGU9e2dyb3VwU3R5bGVzfT5cclxuICAgICAgPGNvbXBvbmVudHMuR3JvdXBIZWFkaW5nIHsuLi5wcm9wc30gLz4gIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbmNsYXNzIFJlbGF0aW9uc2hpcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3QgPSB0aGlzLmhhbmRsZVNlbGVjdC5iaW5kKHRoaXMpXHJcbiAgICB9XHJcbiAgICBoYW5kbGVTZWxlY3Qoc2VsZWN0T3B0aW9uLG5hbWUpe1xyXG4gICAgICAgIGxldCBuYW1lMSA9IG5hbWUubmFtZVxyXG4gICAgICAgIGlmKHNlbGVjdE9wdGlvbiE9PW51bGwpe1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gc2VsZWN0T3B0aW9uLnZhbHVlXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmFtZTEsIG9wdGlvbilcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9ICcnXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UobmFtZTEsIG9wdGlvbilcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBzdHlsZSA9IHt7d2lkdGg6JzcwJScsbGVmdDonMTUlJyxwb3NpdGlvbjoncmVsYXRpdmUnLG1hcmdpbkJvdHRvbTo2MH19PlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFzaWMtc2luZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVQcmVmaXg9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlzQ2xlYXJhYmxlPVwidHJ1ZVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9IHt0aGlzLnByb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0ge3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge3RoaXMuaGFuZGxlU2VsZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMucHJvcHMub3B0aW9uc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIGNvbnRyaWJ1dGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgICAgICB0eXBlOicnLFxyXG4gICAgICAgICAgICBzdWJtaXRTdWNjZXNzOiAnbm9uZScsXHJcbiAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3MxOiAnbm9uZScsXHJcbiAgICAgICAgICAgIG1vcmVSZTI6ICdub25lJyxcclxuICAgICAgICAgICAgbW9yZVJlMTogJ2Jsb2NrJyxcclxuICAgICAgICAgICAgZGF0ZTonJyxcclxuICAgICAgICAgICAgb2NjOicnLFxyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICBhbHROYW1lOiAnJyxcclxuICAgICAgICAgICAgYWx0TmFtZVR5cGU6ICcnLFxyXG4gICAgICAgICAgICBzRGF0ZTogJycsXHJcbiAgICAgICAgICAgIGVEYXRlOidub25lJyxcclxuICAgICAgICAgICAgYlBsYWNlOicnLFxyXG4gICAgICAgICAgICBkUGxhY2U6J25vbmUnLFxyXG4gICAgICAgICAgICByZUlkOidub25lJyxcclxuICAgICAgICAgICAgcmVsUGFpcjogJ25vbmUnLFxyXG4gICAgICAgICAgICByZUlkMTonbm9uZScsXHJcbiAgICAgICAgICAgIHJlbFBhaXIxOiAnbm9uZScsXHJcbiAgICAgICAgICAgIHN1bU5vdGU6JycsXHJcbiAgICAgICAgICAgIGZ1bGxOb3RlOicnLFxyXG4gICAgICAgICAgICBlUHJlcGFyZWQ6ICcnLFxyXG4gICAgICAgICAgICBzaG93TW9yZTogJ25vbmUnLFxyXG4gICAgICAgICAgICBleGlzdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFsZXJ0TnVtOiAwLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZWxKc29uID0gW10sXHJcbiAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMucHJvcHMuZGF0YS5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHZhbHVlID0gaXRlbS5lSWRcclxuICAgICAgICAvLyAgICAgY29uc3QgbGFiZWwgPSBgJHtpdGVtLmVOYW1lfSwke2l0ZW0uc0RhdGV9LCR7aXRlbS5iUGxhY2V9YFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vICAgICBjb25zdCByZWwgPSB7fVxyXG4gICAgICAgIC8vICAgICByZWwubGFiZWwgPSBsYWJlbCxcclxuICAgICAgICAvLyAgICAgcmVsLnZhbHVlID0gdmFsdWVcclxuICAgICAgICAvLyAgICAgdGhpcy5yZWxKc29uLnB1c2gocmVsKVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLmV4aXN0ZUlkID0gW11cclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdCA9IHRoaXMuaGFuZGxlU2VsZWN0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVNdXRpU2VsZWN0ID0gdGhpcy5oYW5kbGVNdXRpU2VsZWN0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5lcnJDaGVjayA9IHRoaXMuZXJyQ2hlY2suYmluZCh0aGlzKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgIFxyXG4gICAgaGFuZGxlQ2hhbmdlKGUpe1xyXG4gICAgICAgIGxldCBuYW1lID0gZS50YXJnZXQubmFtZVxyXG4gICAgICAgIGxldCB2YWwgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVNdXRpU2VsZWN0KHNlbGVjdE9wdGlvbil7XHJcbiAgICAgICAgaWYoc2VsZWN0T3B0aW9uIT09bnVsbCl7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBbXTtcclxuICAgICAgICAgICAgc2VsZWN0T3B0aW9uLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24ucHVzaChlbGVtZW50LmxhYmVsKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBvY2M6IG9wdGlvblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIG9jYzogJydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIGhhbmRsZVNlbGVjdChuYW1lLCB2YWwpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBbbmFtZV0gOiB2YWxcclxuICAgICAgICB9KVxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soZSl7XHJcbiAgICAgICAgbGV0IHVJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1SWQnKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGVUeXBlOnRoaXMuc3RhdGUudHlwZSxcclxuICAgICAgICAgICAgZVRpdGxlOiB0aGlzLnN0YXRlLmVUaXRsZSxcclxuICAgICAgICAgICAgZU5hbWUgOiB0aGlzLnN0YXRlLm5hbWUsXHJcbiAgICAgICAgICAgIGFsdGVyVHlwZTogdGhpcy5zdGF0ZS5hbHROYW1lVHlwZSxcclxuICAgICAgICAgICAgYWx0ZXJOYW1lOiB0aGlzLnN0YXRlLmFsdE5hbWUsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uOiB0aGlzLnN0YXRlLm9jYyxcclxuICAgICAgICAgICAgc0RhdGU6IHRoaXMuc3RhdGUuc0RhdGUsXHJcbiAgICAgICAgICAgIGVEYXRlOiB0aGlzLnN0YXRlLmVEYXRlLFxyXG4gICAgICAgICAgICBiUGxhY2U6IHRoaXMuc3RhdGUuYlBsYWNlLFxyXG4gICAgICAgICAgICBkUGxhY2U6IHRoaXMuc3RhdGUuZFBsYWNlLFxyXG4gICAgICAgICAgICBzdW1Ob3RlOiB0aGlzLnN0YXRlLnN1bU5vdGUsXHJcbiAgICAgICAgICAgIGZ1bGxOb3RlOiB0aGlzLnN0YXRlLmZ1bGxOb3RlLFxyXG4gICAgICAgICAgICBlUHJlcGFyZWQ6IHRoaXMuc3RhdGUuZVByZXBhcmVkLFxyXG4gICAgICAgICAgICBlSWQ6ICdub25lJyxcclxuICAgICAgICAgICAgcklkOiAnbm9uZScsXHJcbiAgICAgICAgICAgIHJlSWQ6IHRoaXMuc3RhdGUucmVJZCxcclxuICAgICAgICAgICAgcmVsUGFpcjogdGhpcy5zdGF0ZS5yZWxQYWlyLFxyXG4gICAgICAgICAgICBySWQxOiAnbm9uZScsXHJcbiAgICAgICAgICAgIHJlSWQxOiB0aGlzLnN0YXRlLnJlSWQxLFxyXG4gICAgICAgICAgICByZWxQYWlyMTogdGhpcy5zdGF0ZS5yZWxQYWlyMSxcclxuICAgICAgICAgICAgYUlkOidub25lJyxcclxuICAgICAgICAgICAgZXVJZCA6IHVJZCwgXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihlLnRhcmdldC5uYW1lID09IFwic2F2ZVwiKXtcclxuICAgICAgICAgICAgUG9zdCgnc2F2ZV9lbnRpdHknLGRhdGEpLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYocmVzID09ICd0cnVlJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3M6ICdibG9jaydcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNlIGlmKGUudGFyZ2V0Lm5hbWUgPT0nc3VibWl0Jyl7XHJcbiAgICAgICAgICAgIFBvc3QoJ3N1Ym1pdF9lbnRpdHknLGRhdGEpLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgICBpZihyZXMgPT0gJ3RydWUnKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0U3VjY2VzczE6ICdibG9jaydcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihlLnRhcmdldC5uYW1lPT0nYWRkQWx0Jyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbW9yZUFsdDogJ2Jsb2NrJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihlLnRhcmdldC5uYW1lPT0nZGVsZXRlQWx0Jyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbW9yZUFsdDogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNlIGlmKGUudGFyZ2V0Lm5hbWU9PSdhZGQxJyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUubW9yZVJlMSA9PSAnbm9uZScpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9yZVJlMTogJ2Jsb2NrJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9yZVJlMjogJ2Jsb2NrJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfSBlbHNlIGlmKGUudGFyZ2V0Lm5hbWU9PSdkZWxldGUyJyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgbW9yZVJlMjogJ25vbmUnIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZSBpZihlLnRhcmdldC5uYW1lPT0nZGVsZXRlMScpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIG1vcmVSZTE6ICdub25lJyBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfWVsc2UgaWYoZS50YXJnZXQubmFtZSA9PSBcInNhdmUtYmFzaWNcIil7XHJcbiAgICAgICAgICAgIGxldCBlcnIgPSB0aGlzLmVyckNoZWNrKFwiYmFzaWNcIilcclxuICAgICAgICAgICAgaWYoZXJyID09MCl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVOYW1lOnRoaXMuc3RhdGUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBzRGF0ZTogdGhpcy5zdGF0ZS5zRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBiUGxhY2UgOiB0aGlzLnN0YXRlLmJQbGFjZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgUG9zdChcImNoZWNrX2Jhc2ljX2VJbmZvXCIsZGF0YSkudGhlbihyZXMgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzID09ICdmYWxzZScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TW9yZTogJyBibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd01vcmU6ICcgYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMubWFwKGl0ZW09PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpc3RlSWQucHVzaChpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB9ZWxzZSBpZihlLnRhcmdldC5uYW1lID09IFwic3RpbGwtY29udHJpYnV0ZVwiKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBleGlzdDogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIGVyckNoZWNrKHNlY3Rpb24pe1xyXG4gICAgICAgIGxldCBkYXRlMSA9IG5ldyBEYXRlKHRoaXMuc3RhdGUuc0RhdGUpO1xyXG4gICAgICAgIGxldCBkYXRlMiA9IG5ldyBEYXRlKHRoaXMuc3RhdGUuZURhdGUpO1xyXG4gICAgICAgIGxldCBlcnIgPSAwXHJcbiAgICAgICAgaWYoc2VjdGlvbiA9PSBcImJhc2ljXCIpe1xyXG4gICAgICAgICAgICBpZihkYXRlMS5nZXRUaW1lKCk+ZGF0ZTIuZ2V0VGltZSgpKXtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiY2hlY2sgYmlydGggZGF0ZSBhbmQgZGVhdGggZGF0ZVwiKVxyXG4gICAgICAgICAgICAgICAgZXJyID0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlcnJcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgPExheW91dCAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPSB7e2Rpc3BsYXk6IHRoaXMuc3RhdGUuc3VibWl0U3VjY2Vzc319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBbGVydDEgdGl0bGU9XCJDb25ncmFkdWxhdGlvbnMhXCIgY29udGVudD1cIllvdXIgZHJhZnQgaGFzIGJlZW4gc2F2ZWQhXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uPVwiT2tcIiB1cmw9Jy8nIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9IHt7ZGlzcGxheTogdGhpcy5zdGF0ZS5zdWJtaXRTdWNjZXNzMX19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBbGVydDEgdGl0bGU9XCJDb25ncmFkdWxhdGlvbnMhXCIgY29udGVudD1cIllvdXIgY29udHJpYnV0ZSBoYXMgYmVlbiBzdWJtaXR0ZWQhXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uPVwiT2tcIiB1cmw9Jy8nIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtiYW5uZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkJhc2ljIEluZm9ybWF0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2JveFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgbGFiZWw9XCJUeXBlXCIgdHlwZT0nZGFyaycgdGlwPSdDaG9vc2UgYSB0eXBlJyBpZD1cInR5cGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVsYXRpb25zaGlwIG5hbWUgPSBcInR5cGVcIiBwbGFjZWhvbGRlciA9IFwic2VsZWN0Li4uXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0fSBvcHRpb25zPXt0eXBlT3B0aW9uc30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGxhYmVsPVwiTmFtZVwiIHR5cGU9J2RhcmsnIGlkPVwibmFtZVwiIHRpcD0nVHlwZSB0aGUgcmlnaHQgbmFtZSBmb3JtYXQgYXM6PGJyIC8+U3VybmFtZSwgRmlyc3RuYW1lLCBTZWNvbmRuYW1lLCBUaGlyZG5hbWUsIGV0Yy4gaW4gZnVsbCwgbm8gaW5pdGlhbHMnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50eXBlPT0nUGVyc29uJz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHN0eWxlID0ge2lucHV0U3R5bGV9IG5hbWU9IFwibmFtZVwiIHJlcXVpcmVkID1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3VybmFtZSwgRmlyc3RuYW1lLCBTZWNvbmRuYW1lLCBUaGlyZG5hbWUsIGV0Yy4gaW4gZnVsbCwgbm8gaW5pdGlhbHNcIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZSA9IHtpbnB1dFN0eWxlfSBuYW1lPSBcIm5hbWVcIiByZXF1aXJlZCA9XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgZnVsbCBuYW1lIG9mIGVudGl0eVwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBsYWJlbD1cIlN1Ym5hbWUgb2YgZW50aXR5XCIgdHlwZT0nZGFyaycgdGlwPSdUaXRsZSBhbmQgaG9ub3Igb2YgZW50aXR5JyBpZD1cInN1Ym5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlID0ge2lucHV0U3R5bGV9IHR5cGU9XCJ0ZXh0XCIgbmFtZSA9IFwiZVRpdGxlXCIgcmVxdWlyZWQgPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHRpdGxlIG9mIGVudGl0eVwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBsYWJlbD1cIkFsdGVybmF0aXZlIE5hbWVcIiB0eXBlPSdkYXJrJyB0aXA9J1ByZXZpb3VzIG5hbWUgb2YgZW50aXR5JyBpZD1cImFsdGVybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGUgPSB7aW5wdXRTdHlsZX0gdHlwZT1cInRleHRcIiBuYW1lID0gXCJhbHROYW1lXCIgcmVxdWlyZWQgPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGFsdGVybmF0aXZlIG5hbWUgaGVyZVwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBsYWJlbD1cIkFsdGVybmF0aXZlIFR5cGVcIiB0eXBlPSdkYXJrJyB0aXA9J1R5cGUgb2YgcHJldmlvdXMgbmFtZSBvZiBlbnRpdHkuIGUuZy4gUGVyc29uJyBpZD1cImFsdGVydHlwZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGUgPSB7aW5wdXRTdHlsZX0gdHlwZT1cInRleHRcIiBuYW1lID0gXCJhbHROYW1lVHlwZVwiIHJlcXVpcmVkID1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhbHRlcm5hdGl2ZSBuYW1lIHR5cGUgaGVyZVwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnR5cGU9PSdQZXJzb24nP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBsYWJlbD1cIkJpcnRoIERhdGVcIiB0eXBlPSdkYXJrJyB0aXA9J0JpcnRoIGRhdGUgb2YgZW50aXR5JyBpZD1cImJEYXRlXCIgLz46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGxhYmVsPVwiRGF0ZSBmcm9tXCIgdHlwZT0nZGFyaycgdGlwPSdFc3RhYmxpc2hlZCBkYXRlIG9mIGVudGl0eScgaWQ9XCJiRGF0ZVwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIkRhdGVcIiBzdHlsZSA9IHtpbnB1dFN0eWxlfSBuYW1lPSBcInNEYXRlXCIgcmVxdWlyZWQgPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudHlwZT09J1BlcnNvbic/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGxhYmVsPVwiRGVhdGggRGF0ZVwiIHR5cGU9J2RhcmsnIHRpcD0nRGVhdGggZGF0ZSBvZiBlbnRpdHknIGlkPVwiZURhdGVcIiAvPjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgbGFiZWw9XCJUb1wiIHR5cGU9J2RhcmsnIHRpcD0nTGFzdCBleGlzdGVkIGRhdGUgb2YgZW50aXR5JyBpZD1cImVEYXRlXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZSA9IHtpbnB1dFN0eWxlfSB0eXBlPVwiRGF0ZVwiIG5hbWUgPSBcImVEYXRlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudHlwZT09J1BlcnNvbic/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBsYWJlbD1cIkJpcnRoIFBsYWNlXCIgdHlwZT0nZGFyaycgdGlwPSdUeXBlIGJpcnRoIHBsYWNlIGFzOjxiciAvPkRpc3RyaWN0LCBDaXR5LCBTdGF0ZSwgQ291bnRyeS4gaW4gZnVsbCwgbm8gaW5pdGlhbHMnIGlkPVwiYlBsYWNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGUgPSB7aW5wdXRTdHlsZX0gdHlwZT1cInRleHRcIiBuYW1lID0gXCJiUGxhY2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gcmVxdWlyZWQgPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpc3RyaWN0LCBDaXR5LCBTdGF0ZSwgQ291bnRyeS4gaW4gZnVsbCwgbm8gaW5pdGlhbHNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGxhYmVsPVwiUGxhY2Ugb2YgRXhpc3RlbmNlXCIgdHlwZT0nZGFyaycgdGlwPSdUeXBlIFBsYWNlIG9mIEV4aXN0ZW5jZSBhczo8YnIgLz5EaXN0cmljdCwgQ2l0eSwgU3RhdGUsIENvdW50cnkuIGluIGZ1bGwsIG5vIGluaXRpYWxzJyBpZD1cImJQbGFjZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlID0ge2lucHV0U3R5bGV9IHR5cGU9XCJ0ZXh0XCIgbmFtZSA9IFwiYlBsYWNlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9ICByZXF1aXJlZCA9XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPVwiUGxhY2Ugb2YgRXhpc3RlbmNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50eXBlPT0nUGVyc29uJz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgbGFiZWw9XCJEZWF0aCBQbGFjZVwiIHR5cGU9J2RhcmsnIHRpcD0nVHlwZSBkZWF0aCBwbGFjZSBhczo8YnIgLz5EaXN0cmljdCwgQ2l0eSwgU3RhdGUsIENvdW50cnkuIGluIGZ1bGwsIG5vIGluaXRpYWxzJyBpZD1cImRQbGFjZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlID0ge2lucHV0U3R5bGV9IHR5cGU9XCJ0ZXh0XCIgbmFtZSA9IFwiZFBsYWNlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlzdHJpY3QsIENpdHksIFN0YXRlLCBDb3VudHJ5LiBpbiBmdWxsLCBubyBpbml0aWFsc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgbGFiZWw9XCJQbGFjZSBvZiBMYXN0IEV4aXN0ZW5jZVwiIHR5cGU9J2RhcmsnIHRpcD0nVHlwZSBQbGFjZSBvZiBMYXN0IEV4aXN0ZW5jZSBhczogPGJyIC8+RGlzdHJpY3QsIENpdHksIFN0YXRlLCBDb3VudHJ5LiBpbiBmdWxsLCBubyBpbml0aWFscycgaWQ9XCJkUGxhY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZSA9IHtpbnB1dFN0eWxlfSB0eXBlPVwidGV4dFwiIG5hbWUgPSBcImRQbGFjZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9XCJQbGFjZSBvZiBMYXN0IEV4aXN0ZW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlID17e3RleHRBbGlnbjpcImNlbnRlclwiLCBtYXJnaW5Cb3R0b206JzIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1pbmZvXCIgbmFtZT1cInNhdmUtYmFzaWNcIiBvbkNsaWNrID17dGhpcy5oYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBzdHlsZT17e2JvcmRlclJhZGl1czpcIjRweFwifX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogdGhpcy5zdGF0ZS5zaG93TW9yZSxtYXJnaW5Ub3A6JzIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmV4aXN0ID09IHRydWU/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5XZSBhbHJlYWR5IGhhdmUgdGhpcyBlbnRpdHkncyBiYXNpYyBpbmZvcm1hdGlvbi4gUGxlYXNlIGNoZWNrIHRoZW0gZmlyc3Q6PC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17e21hcmdpbkJvdHRvbTogJzIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmV4aXN0ZUlkLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uZUlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvLi4vdmlld0VudGl0eS9baWRdXCIgYXM9e2AvLi4vdmlld0VudGl0eS8ke2l0ZW0uZUlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5lVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCJzdGlsbC1jb250aXJidXRlXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlN0aWxsIHdhbnQgdG8gY29udHJpYnV0ZT88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtiYW5uZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGV0YWlsIEluZm9ybWF0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Ym94U3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cImZvcm0tZ3JvdXBcIiAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGxhYmVsPVwiT2NjdXBhdGlvblwiIHR5cGU9J2RhcmsnIHRpcD0nQ2hvb3NlIGFzIG1hbnkgb2NjcHVhdGlvbnMgYXMgeW91IGNhbicgaWQ9XCJmdW5jdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIHN0eWxlID0ge3t3aWR0aDonNzAlJyxsZWZ0OicxNSUnLHBvc2l0aW9uOidyZWxhdGl2ZScsbWFyZ2luQm90dG9tOjQwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFzaWMtc2luZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZVByZWZpeD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCA9XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NsZWFyYWJsZT1cInRydWVcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNdWx0aT0gXCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvY2N1cGF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge3RoaXMuaGFuZGxlTXV0aVNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e29jY09wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3sgR3JvdXBIZWFkaW5nIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwSGVhZGluZzogYmFzZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmJhc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogJzEgMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBsYWJlbD1cIlN1bW1hcnkgTm90ZVwiIHR5cGU9J2RhcmsnIHRpcD0nVHlwZSBicmllZiBsaWZlIGV4cGVyaWVuY2Ugb2YgZW50aXR5JyBpZD1cInN1bU5vdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lID1cImZvcm0tY29udHJvbFwiIHJvd3M9XCI1XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge2lucHV0U3R5bGV9IHR5cGU9XCJ0ZXh0XCIgbmFtZSA9IFwic3VtTm90ZVwiIHJlcXVpcmVkID1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHN1bW1hcnkgaGVyZVwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBsYWJlbD1cIkZ1bGwgTm90ZVwiIHR5cGU9J2RhcmsnIHRpcD0nVHlwZSBmdWxsIGxpZmUgZXhwZXJpZW5jZSBvZiBlbnRpdHknIGlkPVwiZnVsbE5vdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lID1cImZvcm0tY29udHJvbFwiIHJvd3M9XCI1XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge2lucHV0U3R5bGV9IHR5cGU9XCJ0ZXh0XCIgbmFtZSA9IFwiZnVsbE5vdGVcIiByZXF1aXJlZCA9XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBmdWxsIG5vdGUgaGVyZVwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtiYW5uZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UmVsYXRpb25zaGlwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtib3hTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6dGhpcy5zdGF0ZS5tb3JlUmUxfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cImZvcm0tZ3JvdXBcIiAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBsYWJlbD1cIlJlbGF0ZWQgRW50aXR5XCIgdHlwZT0nZGFyaycgdGlwPSdDaG9vc2UgdGhlIHJlbGF0ZWQgZW50aXR5IGJ5IG5hbWUsYmlydGggZGF0ZSwgYW5kIGJpcnRoIHBsYWNlJyBpZD1cInJlbDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbGF0aW9uc2hpcCBuYW1lID0gXCJyZUlkXCIgcGxhY2Vob2xkZXIgPSBcInNlbGVjdC4uLlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdH0gb3B0aW9ucz17dGhpcy5yZWxKc29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGxhYmVsPVwiUmVsYXRpb25zaGlwIFBhaXJzXCIgdHlwZT0nZGFyaycgdGlwPSdGb3JtZXIgcGFydCBvZiBwYWlyIHJlcHJlc2VudHMgcmVsYXRlZCBlbnRpdHk8YnIvPkxhdGVyIG9uZSByZXByZXNlbnRzIHRoaXMgZW50aXR5JyBpZD1cInJlbDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbGF0aW9uc2hpcCBuYW1lID0gXCJyZWxQYWlyXCIgcGxhY2Vob2xkZXIgPSBcInNlbGVjdCBhcyByZWxhdGVkIGVudGl0eSAtIGVudGl0eVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdH0gb3B0aW9ucz17cGFpck9wdGlvbnN9Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGUgPXt7dGV4dEFsaWduOidjZW50ZXInLG1hcmdpbkJvdHRvbTonMjBweCcsbWFyZ2luVG9wOicyMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9J2FkZDEnIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBzdHlsZT17e2JvcmRlclJhZGl1czpcIjRweFwifX0gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbmFtZT0nZGVsZXRlMScgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOlwiNHB4XCIsbWFyZ2luTGVmdDpcIjUwcHhcIn19IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PkRlbGV0ZTwvYnV0dG9uPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogdGhpcy5zdGF0ZS5tb3JlUmUyfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Ym94U3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cImZvcm0tZ3JvdXBcIiAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e2xhYmVsU3R5bGV9PlJlbGF0ZWQgRW50aXR5PC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVsYXRpb25zaGlwIG5hbWUgPSBcInJlSWQxXCIgcGxhY2Vob2xkZXIgPSBcInNlbGVjdC4uLlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdH0gb3B0aW9ucz17dGhpcy5yZWxKc29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17bGFiZWxTdHlsZX0+UmVsYXRpb25zaGlwPC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVsYXRpb25zaGlwIG5hbWUgPSBcInJlbFBhaXIxXCIgcGxhY2Vob2xkZXIgPSBcInNlbGVjdCBhcyByZWxhdGVkIGVudGl0eSAtIGVudGl0eVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdH0gb3B0aW9ucz17cGFpck9wdGlvbnN9Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9e3t0ZXh0QWxpZ246J2NlbnRlcicsbWFyZ2luQm90dG9tOicyMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9J2FkZDInIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBzdHlsZT17e2JvcmRlclJhZGl1czpcIjRweFwifX0gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbmFtZT0nZGVsZXRlMicgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOlwiNHB4XCIsbWFyZ2luTGVmdDpcIjUwcHhcIn19IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PkRlbGV0ZTwvYnV0dG9uPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17bGFiZWxTdHlsZX0+ZVByZXBhcmVkIGJ5PC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGUgPSB7aW5wdXRTdHlsZX0gdHlwZT1cInRleHRcIiBuYW1lID0gXCJlUHJlcGFyZWRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGVudGl0eSBlUHJlcGFyZWQgYnkuLi5cIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9e3t0ZXh0QWxpZ246J2NlbnRlcicsbWFyZ2luQm90dG9tOicyMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLWxnXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gc3R5bGU9e3tib3JkZXJSYWRpdXM6XCI0cHhcIixtYXJnaW5Ub3A6XCIyMHB4XCJ9fT5TZW5kIGVudGl0eTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJzYXZlXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLWxnXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gc3R5bGU9e3tib3JkZXJSYWRpdXM6XCI0cHhcIixtYXJnaW5Ub3A6XCIyMHB4XCIsbWFyZ2luTGVmdDpcIjUwcHhcIn19PlNhdmUgZW50aXR5PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OmZvY3Vze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDhweCByZ2JhKDEwMiwxNzUsMjMzLC42KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDhweCByZ2JhKDEwMiwxNzUsMjMzLC42KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250cmlidXRlOyJdfQ== */\n/*@ sourceURL=D:\\workplace\\front-end\\pages\\Contribute.js */")));
    }
  }]);

  return contribute;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (contribute);

/***/ })

})
//# sourceMappingURL=Contribute.js.4a485f32c2702501e797.hot-update.js.map