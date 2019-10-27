webpackHotUpdate("static\\development\\pages\\Signup.js",{

/***/ "./pages/Signup.js":
/*!*************************!*\
  !*** ./pages/Signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_myLayoutBefore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/myLayoutBefore */ "./pages/components/myLayoutBefore.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_warnAlert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/warnAlert */ "./pages/components/warnAlert.js");
/* harmony import */ var _components_successAlert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/successAlert */ "./pages/components/successAlert.js");
/* harmony import */ var _components_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/http */ "./pages/components/http.js");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./css/app.css */ "./pages/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Privacy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/Privacy */ "./pages/components/Privacy.js");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! bcryptjs */ "./node_modules/bcryptjs/dist/bcrypt.js");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_15__);







var _jsxFileName = "D:\\workplace\\front-end\\pages\\Signup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;








var inputStyle = {
  margin: 20,
  outlineStyle: 'none',
  border: '1px solid #ccc',
  borderRadius: '3px',
  padding: '12px 12px',
  width: '70%',
  fontFamily: "Microsoft soft"
};
var boxStyle = {
  position: 'relative',
  left: '20%',
  textAlign: 'center',
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
var salt = bcryptjs__WEBPACK_IMPORTED_MODULE_15___default.a.genSaltSync(10);

function ErrAlert1(props) {
  console.log(props);

  switch (props.errStatus) {
    case "-1":
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx(_components_warnAlert__WEBPACK_IMPORTED_MODULE_10__["Alert"], {
        title: "Warning!",
        content: "Your email has already applicated, please sign in!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }));

    case "-2":
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx(_components_warnAlert__WEBPACK_IMPORTED_MODULE_10__["Alert"], {
        title: "Warning!",
        content: "Username has already been token, please change!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }));

    case "-3":
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx(_components_warnAlert__WEBPACK_IMPORTED_MODULE_10__["Alert"], {
        title: "Warning!",
        content: "Please enter the same password!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }));

    case 0:
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      });
  }
}

var accountInfo =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(accountInfo, _React$Component);

  function accountInfo(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, accountInfo);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(accountInfo).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function (e) {
      e.preventDefault();

      _this.setState({
        showP: 'block'
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleshow", function () {
      _this.setState({
        showP: 'none'
      });
    });

    _this.state = {
      errMsg: '',
      email: '',
      psw: '',
      cfm: '',
      phone: '',
      address: '',
      motivation: '',
      experience: '',
      errAlert: 'none',
      successAlert: "none",
      name: '',
      showP: 'none',
      errStatus: 0
    };
    _this.pswInput = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.cfmInput = react__WEBPACK_IMPORTED_MODULE_9___default.a.createRef();
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleClose = _this.handleClose.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleshow = _this.handleshow.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(accountInfo, [{
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        errAlert: 'none'
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var err = '';
      var name = event.target.name;
      var val = event.target.value;
      var psw = this.pswInput.current.value;
      var cfm = this.cfmInput.current.value;
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, val));

      if (psw !== '' && cfm !== '') {
        if (psw == cfm) {
          err = '';
        } else {
          err = 'Different password';
        }
      }

      this.setState({
        psw: this.pswInput.current.value,
        errMsg: err
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();

      if (this.pswInput.current.value !== this.cfmInput.current.value) {
        this.setState({
          errAlert: 'block',
          errStatus: '-3'
        });
      } else {
        var psw = bcryptjs__WEBPACK_IMPORTED_MODULE_15___default.a.hashSync(this.state.password, salt);
        var data = {
          email: this.state.email,
          psw: psw,
          userName: this.state.userName,
          name: this.state.name,
          phone: this.state.phone,
          address: this.state.address,
          motivation: this.state.motivation,
          experience: this.state.experience
        };
        Object(_components_http__WEBPACK_IMPORTED_MODULE_12__["Post"])('signup', data).then(function (res) {
          console.log(res);

          if (res == 'true') {
            _this2.setState({
              successAlert: "block"
            });
          } else if (res == '-1') {
            _this2.setState({
              errAlert: "block",
              errStatus: res
            });
          } else if (res == '-2') {
            _this2.setState({
              errAlert: "block",
              errStatus: res
            });
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-610606959" + " " + "container1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, __jsx(_components_myLayoutBefore__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }), __jsx("div", {
        style: {
          display: this.state.errAlert
        },
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, __jsx(ErrAlert1, {
        errStatus: this.state.errStatus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      })), __jsx("div", {
        style: {
          display: this.state.successAlert
        },
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, __jsx(_components_successAlert__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Success",
        content: "Your application has been successfully submitted! Please wait for approving.",
        url: "/signin",
        button: "Ok",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      })), __jsx(_components_Privacy__WEBPACK_IMPORTED_MODULE_14__["Privacy"], {
        show: this.state.showP,
        finish: this.handleshow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }), __jsx("div", {
        style: bannerStyle,
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "account info")), __jsx("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, __jsx("div", {
        style: boxStyle,
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, __jsx("input", {
        style: inputStyle,
        type: "email",
        name: "email",
        placeholder: "Enter your email",
        value: this.state.value,
        onChange: this.handleChange,
        required: "required",
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }), __jsx("input", {
        style: inputStyle,
        type: "password",
        name: "password",
        placeholder: "Enter your password",
        ref: this.pswInput,
        value: this.state.value,
        onChange: this.handleChange,
        required: "required",
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }), __jsx("input", {
        style: inputStyle,
        type: "password",
        name: "confirm",
        placeholder: "Enter your password again",
        ref: this.cfmInput,
        onChange: this.handleChange,
        required: "required",
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }), __jsx("span", {
        style: {
          color: 'red'
        },
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, this.state.errMsg), __jsx("br", {
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }), __jsx("input", {
        style: inputStyle,
        type: "text",
        name: "name",
        placeholder: "Enter your real name",
        value: this.state.value,
        onChange: this.handleChange,
        required: "required",
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      })), __jsx("div", {
        style: bannerStyle,
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, "Personal info")), __jsx("div", {
        style: boxStyle,
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, __jsx("input", {
        style: inputStyle,
        type: "text",
        name: "userName",
        placeholder: "Enter your userName",
        value: this.state.value,
        onChange: this.handleChange,
        required: "required",
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }), __jsx("input", {
        style: inputStyle,
        type: "number",
        name: "phone",
        required: "required",
        placeholder: "Enter your phone here",
        value: this.state.value,
        onChange: this.handleChange,
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }), __jsx("input", {
        style: inputStyle,
        type: "text",
        name: "address",
        placeholder: "Enter your address",
        value: this.state.value,
        onChange: this.handleChange,
        required: "required",
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      })), __jsx("div", {
        style: boxStyle,
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-610606959" + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, __jsx("textarea", {
        style: {
          marginBottom: '40px',
          width: '70%',
          left: '15%',
          position: 'relative'
        },
        name: "motivation",
        onChange: this.handleChange,
        value: this.state.value,
        id: "Textarea1",
        rows: "5",
        placeholder: "Enter your motivation",
        required: "required",
        className: "jsx-610606959" + " " + "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-610606959" + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, __jsx("textarea", {
        style: {
          width: '70%',
          left: '15%',
          position: 'relative'
        },
        name: "experience",
        onChange: this.handleChange,
        value: this.state.value,
        id: "Textarea2",
        rows: "5",
        placeholder: "Enter your experience",
        required: "required",
        className: "jsx-610606959" + " " + "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, __jsx("input", {
        type: "checkbox",
        name: "privacy",
        checked: this.state.value,
        onChange: this.handleChange,
        required: "required",
        className: "jsx-610606959" + " " + "check-input",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }), __jsx("button", {
        onClick: this.handleClick,
        className: "jsx-610606959" + " " + "btn-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, "I have read the privacy policy statement in this link, and agree with it by selecting this check box.")), __jsx("div", {
        style: {
          textAlign: 'center',
          marginBottom: '20px'
        },
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, __jsx("button", {
        type: "submit",
        style: {
          borderRadius: "4px",
          marginTop: "20px"
        },
        className: "jsx-610606959" + " " + "btn btn-primary btn-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, "Send application")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "610606959",
        __self: this
      }, "input.jsx-610606959:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);}.check-input.jsx-610606959{position:relative;width:40px;}.btn-none.jsx-610606959{border:none;background-color:#fff;}.btn-none.jsx-610606959: hover.jsx-610606959{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3JrcGxhY2VcXGZyb250LWVuZFxccGFnZXNcXFNpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0UGdDLEFBRzhDLEFBTUgsQUFJUCxBQU1oQixZQUwwQixHQUt6QixHQVRjLEdBTkEsUUFPZCxFQU5xRixHQVVyRiw4RUFSRCx5RUFBQyIsImZpbGUiOiJEOlxcd29ya3BsYWNlXFxmcm9udC1lbmRcXHBhZ2VzXFxTaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudHMvbXlMYXlvdXRCZWZvcmVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtBbGVydH0gZnJvbSAnLi9jb21wb25lbnRzL3dhcm5BbGVydCc7XHJcbmltcG9ydCBBbGVydDEgZnJvbSAnLi9jb21wb25lbnRzL3N1Y2Nlc3NBbGVydCc7XHJcbmltcG9ydCB7UG9zdH0gZnJvbSBcIi4vY29tcG9uZW50cy9odHRwXCI7XHJcbmltcG9ydCBcIi4vY3NzL2FwcC5jc3NcIjtcclxuaW1wb3J0IHsgUHJpdmFjeSB9IGZyb20gXCIuL2NvbXBvbmVudHMvUHJpdmFjeVwiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5cclxuY29uc3QgaW5wdXRTdHlsZSA9e1xyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIG91dGxpbmVTdHlsZTogJ25vbmUnICxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJyxcclxuICAgIGJvcmRlclJhZGl1czogJzNweCcsXHJcbiAgICBwYWRkaW5nOiAnMTJweCAxMnB4JyxcclxuICAgIHdpZHRoOiAnNzAlJyxcclxuICAgIGZvbnRGYW1pbHk6IFwiTWljcm9zb2Z0IHNvZnRcIixcclxuICAgIFxyXG59XHJcbmNvbnN0IGJveFN0eWxlPXtcclxuICAgIHBvc2l0aW9uOidyZWxhdGl2ZScsXHJcbiAgICBsZWZ0OicyMCUnLFxyXG4gICAgdGV4dEFsaWduOidjZW50ZXInLFxyXG4gICAgd2lkdGg6XCI2MCVcIixcclxuICAgIG1hcmdpbkJvdHRvbTonMjBweCcsXHJcbiAgICBwYWRkaW5nOiczMHB4JyxcclxuICAgIGJvcmRlcjonMnB4IHNvbGlkICAjZmZkNjMzJyxcclxuICAgIGJvcmRlclJhZGl1czonMnB4JyxcclxuIFxyXG59XHJcblxyXG5jb25zdCBiYW5uZXJTdHlsZSA9e1xyXG4gICAgcG9zaXRpb246J3JlbGF0aXZlJyxcclxuICAgIGxlZnQ6JzIwJScsXHJcbiAgICB0ZXh0QWxpZ246J2NlbnRlcicsXHJcbiAgICBtYXJnaW5Ub3A6XCIyMHB4XCIsXHJcbiAgICB3aWR0aDpcIjYwJVwiLFxyXG4gICAgcGFkZGluZzogJzEwcHggMTBweCcsXHJcbiAgICBib3JkZXI6JzJweCBzb2xpZCAgI2ZmZDYzMycsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjZmZkNjMzXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6JzJweCcsXHJcbiAgIFxyXG59XHJcblxyXG52YXIgc2FsdCA9IGJjcnlwdC5nZW5TYWx0U3luYygxMCk7XHJcblxyXG5mdW5jdGlvbiBFcnJBbGVydDEocHJvcHMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzKVxyXG4gICAgICAgIHN3aXRjaChwcm9wcy5lcnJTdGF0dXMpe1xyXG4gICAgICAgICAgICBjYXNlIFwiLTFcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgdGl0bGU9XCJXYXJuaW5nIVwiIGNvbnRlbnQ9XCJZb3VyIGVtYWlsIGhhcyBhbHJlYWR5IGFwcGxpY2F0ZWQsIHBsZWFzZSBzaWduIGluIVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIFxyXG4gICAgICAgICAgICBjYXNlIFwiLTJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgdGl0bGU9XCJXYXJuaW5nIVwiIGNvbnRlbnQ9XCJVc2VybmFtZSBoYXMgYWxyZWFkeSBiZWVuIHRva2VuLCBwbGVhc2UgY2hhbmdlIVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGNhc2UgXCItM1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydCB0aXRsZT1cIldhcm5pbmchXCIgY29udGVudD1cIlBsZWFzZSBlbnRlciB0aGUgc2FtZSBwYXNzd29yZCFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbn1cclxuXHJcbmNsYXNzIGFjY291bnRJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHtlcnJNc2c6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc3c6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNmbTonJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdGl2YXRpb246JycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2U6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyckFsZXJ0Oidub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0FsZXJ0OiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dQOidub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyU3RhdHVzOjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMucHN3SW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICAgICAgdGhpcy5jZm1JbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDbG9zZSA9IHRoaXMuaGFuZGxlQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVzaG93ID0gdGhpcy5oYW5kbGVzaG93LmJpbmQodGhpcylcclxuICAgIH1cclxuICAgIGhhbmRsZUNsaWNrPShlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dQOidibG9jayd9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlc2hvdz0oKT0+e1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dQOidub25lJ30pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVDbG9zZSgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlcnJBbGVydDogJ25vbmUnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgICAgICBoYW5kbGVDaGFuZ2UoZXZlbnQpe1xyXG4gICAgICAgICAgICBsZXQgZXJyID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgICAgIGxldCB2YWwgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBwc3cgPSB0aGlzLnBzd0lucHV0LmN1cnJlbnQudmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBjZm0gPSB0aGlzLmNmbUlucHV0LmN1cnJlbnQudmFsdWU7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBbbmFtZV06dmFsLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZihwc3cgIT09JycmJmNmbSAhPT0nJyl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKHBzdyA9PSBjZm0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGVyciA9ICcnXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBlcnIgPSAnRGlmZmVyZW50IHBhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwc3c6IHRoaXMucHN3SW5wdXQuY3VycmVudC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGVyck1zZzplcnIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYodGhpcy5wc3dJbnB1dC5jdXJyZW50LnZhbHVlICE9PSB0aGlzLmNmbUlucHV0LmN1cnJlbnQudmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyQWxlcnQ6J2Jsb2NrJyxcclxuICAgICAgICAgICAgICAgICAgICBlcnJTdGF0dXM6ICctMydcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHZhciBwc3cgPSBiY3J5cHQuaGFzaFN5bmModGhpcy5zdGF0ZS5wYXNzd29yZCwgc2FsdCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBzdzogcHN3LFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lOiB0aGlzLnN0YXRlLnVzZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogdGhpcy5zdGF0ZS5waG9uZSxcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiB0aGlzLnN0YXRlLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgbW90aXZhdGlvbjogdGhpcy5zdGF0ZS5tb3RpdmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2U6IHRoaXMuc3RhdGUuZXhwZXJpZW5jZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgUG9zdCgnc2lnbnVwJyxkYXRhKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMgPT0gJ3RydWUnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQWxlcnQ6IFwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihyZXM9PSctMScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyckFsZXJ0OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJTdGF0dXM6IHJlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihyZXM9PSctMicpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyckFsZXJ0OiBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJTdGF0dXM6IHJlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbmRlcigpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwiY29udGFpbmVyMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgPExheW91dC8+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogdGhpcy5zdGF0ZS5lcnJBbGVydH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXJyQWxlcnQxIGVyclN0YXR1cz17dGhpcy5zdGF0ZS5lcnJTdGF0dXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IHRoaXMuc3RhdGUuc3VjY2Vzc0FsZXJ0fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydDEgdGl0bGUgPSBcIlN1Y2Nlc3NcIiBjb250ZW50ID0gXCJZb3VyIGFwcGxpY2F0aW9uIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBzdWJtaXR0ZWQhIFBsZWFzZSB3YWl0IGZvciBhcHByb3ZpbmcuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPVwiL3NpZ25pblwiIGJ1dHRvbj1cIk9rXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFByaXZhY3kgc2hvdz17dGhpcy5zdGF0ZS5zaG93UH0gZmluaXNoPXt0aGlzLmhhbmRsZXNob3d9Lz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtiYW5uZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFjY291bnQgaW5mbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtib3hTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZSA9IHtpbnB1dFN0eWxlfSB0eXBlPVwiZW1haWxcIiBuYW1lPSBcImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZD1cInJlcXVpcmVkXCIvPjxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGUgPSB7aW5wdXRTdHlsZX0gdHlwZT1cInBhc3N3b3JkXCIgbmFtZSA9IFwicGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCIgIHJlZj17dGhpcy5wc3dJbnB1dH0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQ9XCJyZXF1aXJlZFwiLz48YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlID0ge2lucHV0U3R5bGV9IHR5cGU9XCJwYXNzd29yZFwiIG5hbWUgPSBcImNvbmZpcm1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkIGFnYWluXCIgIHJlZj17dGhpcy5jZm1JbnB1dH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQ9XCJyZXF1aXJlZFwiLz48c3BhbiBzdHlsZT17e2NvbG9yOidyZWQnfX0+e3RoaXMuc3RhdGUuZXJyTXNnfTwvc3Bhbj48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGUgPSB7aW5wdXRTdHlsZX0gdHlwZT1cInRleHRcIiBuYW1lID0gXCJuYW1lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciByZWFsIG5hbWVcIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZD1cInJlcXVpcmVkXCIvPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YmFubmVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QZXJzb25hbCBpbmZvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtib3hTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZSA9IHtpbnB1dFN0eWxlfSB0eXBlPVwidGV4dFwiIG5hbWUgPSBcInVzZXJOYW1lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB1c2VyTmFtZVwiICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZD1cInJlcXVpcmVkXCIvPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZSA9IHtpbnB1dFN0eWxlfSB0eXBlPVwibnVtYmVyXCIgbmFtZSA9IFwicGhvbmVcIiByZXF1aXJlZD1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBob25lIGhlcmVcIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+PGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZSA9IHtpbnB1dFN0eWxlfSB0eXBlPVwidGV4dFwiIG5hbWUgPSBcImFkZHJlc3NcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGFkZHJlc3NcIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZD1cInJlcXVpcmVkXCIvPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2JveFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgc3R5bGU9e3ttYXJnaW5Cb3R0b206JzQwcHgnLHdpZHRoOic3MCUnLGxlZnQ6JzE1JScscG9zaXRpb246J3JlbGF0aXZlJ319IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJtb3RpdmF0aW9uXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlRleHRhcmVhMVwiIHJvd3M9XCI1XCIgcGxhY2Vob2xkZXI9J0VudGVyIHlvdXIgbW90aXZhdGlvbicgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHN0eWxlPXt7d2lkdGg6JzcwJScsbGVmdDonMTUlJyxwb3NpdGlvbjoncmVsYXRpdmUnfX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImV4cGVyaWVuY2VcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiVGV4dGFyZWEyXCIgcm93cz1cIjVcIiBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBleHBlcmllbmNlJyByZXF1aXJlZD1cInJlcXVpcmVkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJjaGVjay1pbnB1dFwiIG5hbWU9XCJwcml2YWN5XCIgY2hlY2tlZD17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZD1cInJlcXVpcmVkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBjbGFzc05hbWU9XCJidG4tbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEkgaGF2ZSByZWFkIHRoZSBwcml2YWN5IHBvbGljeSBzdGF0ZW1lbnQgaW4gdGhpcyBsaW5rLCBhbmQgYWdyZWUgd2l0aCBpdCBieSBzZWxlY3RpbmcgdGhpcyBjaGVjayBib3guXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9e3t0ZXh0QWxpZ246J2NlbnRlcicsbWFyZ2luQm90dG9tOicyMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOlwiNHB4XCIsbWFyZ2luVG9wOlwiMjBweFwifX0+U2VuZCBhcHBsaWNhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dDpmb2N1c3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNjZhZmU5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA4cHggcmdiYSgxMDIsMTc1LDIzMywuNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA4cHggcmdiYSgxMDIsMTc1LDIzMywuNilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNoZWNrLWlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5idG4tbm9uZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5idG4tbm9uZTogaG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhY2NvdW50SW5mbzsiXX0= */\n/*@ sourceURL=D:\\workplace\\front-end\\pages\\Signup.js */"));
    }
  }]);

  return accountInfo;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (accountInfo);

/***/ })

})
//# sourceMappingURL=Signup.js.9ccf9f6def9cdefb4e2e.hot-update.js.map