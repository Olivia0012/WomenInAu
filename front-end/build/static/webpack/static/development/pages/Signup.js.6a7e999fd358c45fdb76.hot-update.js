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

  switch (this.props.errStatus) {
    case -1:
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

    case -2:
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

    case -3:
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
          lineNumber: 178
        },
        __self: this
      }, __jsx(_components_myLayoutBefore__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }), __jsx("div", {
        style: {
          display: this.state.errAlert
        },
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, __jsx(ErrAlert1, {
        errStatus: this.state.errStatus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      })), __jsx("div", {
        style: {
          display: this.state.successAlert
        },
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, __jsx(_components_successAlert__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Success",
        content: "Your application has been successfully submitted! Please wait for approving.",
        url: "/signin",
        button: "Ok",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      })), __jsx(_components_Privacy__WEBPACK_IMPORTED_MODULE_14__["Privacy"], {
        show: this.state.showP,
        finish: this.handleshow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }), __jsx("div", {
        style: bannerStyle,
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "account info")), __jsx("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, __jsx("div", {
        style: boxStyle,
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
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
          lineNumber: 195
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
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
        name: "confirm",
        placeholder: "Enter your password again",
        ref: this.cfmInput,
        onChange: this.handleChange,
        required: "required",
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }), __jsx("span", {
        style: {
          color: 'red'
        },
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, this.state.errMsg), __jsx("br", {
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
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
          lineNumber: 206
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      })), __jsx("div", {
        style: bannerStyle,
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, "Personal info")), __jsx("div", {
        style: boxStyle,
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
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
          lineNumber: 215
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
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
          lineNumber: 219
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
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
          lineNumber: 222
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      })), __jsx("div", {
        style: boxStyle,
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-610606959" + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
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
          lineNumber: 228
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-610606959" + " " + "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
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
          lineNumber: 232
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-610606959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
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
          lineNumber: 236
        },
        __self: this
      }), __jsx("button", {
        onClick: this.handleClick,
        className: "jsx-610606959" + " " + "btn-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
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
          lineNumber: 243
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
          lineNumber: 244
        },
        __self: this
      }, "Send application")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "610606959",
        __self: this
      }, "input.jsx-610606959:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);}.check-input.jsx-610606959{position:relative;width:40px;}.btn-none.jsx-610606959{border:none;background-color:#fff;}.btn-none.jsx-610606959: hover.jsx-610606959{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3JrcGxhY2VcXGZyb250LWVuZFxccGFnZXNcXFNpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3UGdDLEFBRzhDLEFBTUgsQUFJUCxBQU1oQixZQUwwQixHQUt6QixHQVRjLEdBTkEsUUFPZCxFQU5xRixHQVVyRiw4RUFSRCx5RUFBQyIsImZpbGUiOiJEOlxcd29ya3BsYWNlXFxmcm9udC1lbmRcXHBhZ2VzXFxTaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudHMvbXlMYXlvdXRCZWZvcmVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtBbGVydH0gZnJvbSAnLi9jb21wb25lbnRzL3dhcm5BbGVydCc7XHJcbmltcG9ydCBBbGVydDEgZnJvbSAnLi9jb21wb25lbnRzL3N1Y2Nlc3NBbGVydCc7XHJcbmltcG9ydCB7UG9zdH0gZnJvbSBcIi4vY29tcG9uZW50cy9odHRwXCI7XHJcbmltcG9ydCBcIi4vY3NzL2FwcC5jc3NcIjtcclxuaW1wb3J0IHsgUHJpdmFjeSB9IGZyb20gXCIuL2NvbXBvbmVudHMvUHJpdmFjeVwiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5cclxuY29uc3QgaW5wdXRTdHlsZSA9e1xyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIG91dGxpbmVTdHlsZTogJ25vbmUnICxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJyxcclxuICAgIGJvcmRlclJhZGl1czogJzNweCcsXHJcbiAgICBwYWRkaW5nOiAnMTJweCAxMnB4JyxcclxuICAgIHdpZHRoOiAnNzAlJyxcclxuICAgIGZvbnRGYW1pbHk6IFwiTWljcm9zb2Z0IHNvZnRcIixcclxuICAgIFxyXG59XHJcbmNvbnN0IGJveFN0eWxlPXtcclxuICAgIHBvc2l0aW9uOidyZWxhdGl2ZScsXHJcbiAgICBsZWZ0OicyMCUnLFxyXG4gICAgdGV4dEFsaWduOidjZW50ZXInLFxyXG4gICAgd2lkdGg6XCI2MCVcIixcclxuICAgIG1hcmdpbkJvdHRvbTonMjBweCcsXHJcbiAgICBwYWRkaW5nOiczMHB4JyxcclxuICAgIGJvcmRlcjonMnB4IHNvbGlkICAjZmZkNjMzJyxcclxuICAgIGJvcmRlclJhZGl1czonMnB4JyxcclxuIFxyXG59XHJcblxyXG5jb25zdCBiYW5uZXJTdHlsZSA9e1xyXG4gICAgcG9zaXRpb246J3JlbGF0aXZlJyxcclxuICAgIGxlZnQ6JzIwJScsXHJcbiAgICB0ZXh0QWxpZ246J2NlbnRlcicsXHJcbiAgICBtYXJnaW5Ub3A6XCIyMHB4XCIsXHJcbiAgICB3aWR0aDpcIjYwJVwiLFxyXG4gICAgcGFkZGluZzogJzEwcHggMTBweCcsXHJcbiAgICBib3JkZXI6JzJweCBzb2xpZCAgI2ZmZDYzMycsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjZmZkNjMzXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6JzJweCcsXHJcbiAgIFxyXG59XHJcblxyXG52YXIgc2FsdCA9IGJjcnlwdC5nZW5TYWx0U3luYygxMCk7XHJcblxyXG5mdW5jdGlvbiBFcnJBbGVydDEocHJvcHMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzKVxyXG4gICAgICAgIHN3aXRjaCh0aGlzLnByb3BzLmVyclN0YXR1cyl7XHJcbiAgICAgICAgICAgIGNhc2UgLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHRpdGxlPVwiV2FybmluZyFcIiBjb250ZW50PVwiWW91ciBlbWFpbCBoYXMgYWxyZWFkeSBhcHBsaWNhdGVkLCBwbGVhc2Ugc2lnbiBpbiFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSBcclxuICAgICAgICAgICAgY2FzZSAtMjpcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgdGl0bGU9XCJXYXJuaW5nIVwiIGNvbnRlbnQ9XCJVc2VybmFtZSBoYXMgYWxyZWFkeSBiZWVuIHRva2VuLCBwbGVhc2UgY2hhbmdlIVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGNhc2UgLTM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHRpdGxlPVwiV2FybmluZyFcIiBjb250ZW50PVwiUGxlYXNlIGVudGVyIHRoZSBzYW1lIHBhc3N3b3JkIVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5jbGFzcyBhY2NvdW50SW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7ZXJyTXNnOicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDonJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHN3OicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZm06JycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob25lOicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3RpdmF0aW9uOicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlOicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJBbGVydDonbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NBbGVydDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93UDonbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyclN0YXR1czowLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnBzd0lucHV0ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2ZtSW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2xvc2UgPSB0aGlzLmhhbmRsZUNsb3NlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlc2hvdyA9IHRoaXMuaGFuZGxlc2hvdy5iaW5kKHRoaXMpXHJcbiAgICB9XHJcbiAgICBoYW5kbGVDbGljaz0oZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93UDonYmxvY2snfSlcclxuICAgIH1cclxuICAgIGhhbmRsZXNob3c9KCk9PntcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93UDonbm9uZSd9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQ2xvc2UoKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZXJyQWxlcnQ6ICdub25lJ1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAgICAgaGFuZGxlQ2hhbmdlKGV2ZW50KXtcclxuICAgICAgICAgICAgbGV0IGVyciA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgICAgICBsZXQgdmFsID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgcHN3ID0gdGhpcy5wc3dJbnB1dC5jdXJyZW50LnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgY2ZtID0gdGhpcy5jZm1JbnB1dC5jdXJyZW50LnZhbHVlO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgW25hbWVdOnZhbCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYocHN3ICE9PScnJiZjZm0gIT09Jycpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihwc3cgPT0gY2ZtKXtcclxuICAgICAgICAgICAgICAgICAgICBlcnIgPSAnJ1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyID0gJ0RpZmZlcmVudCBwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcHN3OiB0aGlzLnBzd0lucHV0LmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6ZXJyLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucHN3SW5wdXQuY3VycmVudC52YWx1ZSAhPT0gdGhpcy5jZm1JbnB1dC5jdXJyZW50LnZhbHVlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGVyckFsZXJ0OidibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyU3RhdHVzOiAnLTMnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHN3ID0gYmNyeXB0Lmhhc2hTeW5jKHRoaXMuc3RhdGUucGFzc3dvcmQsIHNhbHQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBwc3c6IHBzdyxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTogdGhpcy5zdGF0ZS51c2VyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmU6IHRoaXMuc3RhdGUucGhvbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogdGhpcy5zdGF0ZS5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vdGl2YXRpb246IHRoaXMuc3RhdGUubW90aXZhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBleHBlcmllbmNlOiB0aGlzLnN0YXRlLmV4cGVyaWVuY2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFBvc3QoJ3NpZ251cCcsZGF0YSkudGhlbihyZXM9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzID09ICd0cnVlJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0FsZXJ0OiBcImJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzPT0nLTEnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJBbGVydDogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyU3RhdHVzOiByZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzPT0nLTInKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJBbGVydDogXCJibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyU3RhdHVzOiByZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZW5kZXIoKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cImNvbnRhaW5lcjFcIj5cclxuICAgICAgICAgICAgICAgICAgIDxMYXlvdXQvPlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IHRoaXMuc3RhdGUuZXJyQWxlcnR9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVyckFsZXJ0MSBlcnJTdGF0dXM9e3RoaXMuc3RhdGUuZXJyU3RhdHVzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiB0aGlzLnN0YXRlLnN1Y2Nlc3NBbGVydH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQxIHRpdGxlID0gXCJTdWNjZXNzXCIgY29udGVudCA9IFwiWW91ciBhcHBsaWNhdGlvbiBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgc3VibWl0dGVkISBQbGVhc2Ugd2FpdCBmb3IgYXBwcm92aW5nLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD1cIi9zaWduaW5cIiBidXR0b249XCJPa1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxQcml2YWN5IHNob3c9e3RoaXMuc3RhdGUuc2hvd1B9IGZpbmlzaD17dGhpcy5oYW5kbGVzaG93fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YmFubmVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BY2NvdW50IGluZm88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Ym94U3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGUgPSB7aW5wdXRTdHlsZX0gdHlwZT1cImVtYWlsXCIgbmFtZT0gXCJlbWFpbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQ9XCJyZXF1aXJlZFwiLz48YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlID0ge2lucHV0U3R5bGV9IHR5cGU9XCJwYXNzd29yZFwiIG5hbWUgPSBcInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwYXNzd29yZFwiICByZWY9e3RoaXMucHN3SW5wdXR9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkPVwicmVxdWlyZWRcIi8+PGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZSA9IHtpbnB1dFN0eWxlfSB0eXBlPVwicGFzc3dvcmRcIiBuYW1lID0gXCJjb25maXJtXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwYXNzd29yZCBhZ2FpblwiICByZWY9e3RoaXMuY2ZtSW5wdXR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkPVwicmVxdWlyZWRcIi8+PHNwYW4gc3R5bGU9e3tjb2xvcjoncmVkJ319Pnt0aGlzLnN0YXRlLmVyck1zZ308L3NwYW4+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlID0ge2lucHV0U3R5bGV9IHR5cGU9XCJ0ZXh0XCIgbmFtZSA9IFwibmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcmVhbCBuYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQ9XCJyZXF1aXJlZFwiLz48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Jhbm5lclN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UGVyc29uYWwgaW5mbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Ym94U3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGUgPSB7aW5wdXRTdHlsZX0gdHlwZT1cInRleHRcIiBuYW1lID0gXCJ1c2VyTmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgdXNlck5hbWVcIiAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQ9XCJyZXF1aXJlZFwiLz48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGUgPSB7aW5wdXRTdHlsZX0gdHlwZT1cIm51bWJlclwiIG5hbWUgPSBcInBob25lXCIgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwaG9uZSBoZXJlXCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPjxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGUgPSB7aW5wdXRTdHlsZX0gdHlwZT1cInRleHRcIiBuYW1lID0gXCJhZGRyZXNzXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBhZGRyZXNzXCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQ9XCJyZXF1aXJlZFwiLz48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtib3hTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHN0eWxlPXt7bWFyZ2luQm90dG9tOic0MHB4Jyx3aWR0aDonNzAlJyxsZWZ0OicxNSUnLHBvc2l0aW9uOidyZWxhdGl2ZSd9fSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibW90aXZhdGlvblwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJUZXh0YXJlYTFcIiByb3dzPVwiNVwiIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIG1vdGl2YXRpb24nIHJlcXVpcmVkPVwicmVxdWlyZWRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzdHlsZT17e3dpZHRoOic3MCUnLGxlZnQ6JzE1JScscG9zaXRpb246J3JlbGF0aXZlJ319IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJleHBlcmllbmNlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlRleHRhcmVhMlwiIHJvd3M9XCI1XCIgcGxhY2Vob2xkZXI9J0VudGVyIHlvdXIgZXhwZXJpZW5jZScgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiY2hlY2staW5wdXRcIiBuYW1lPVwicHJpdmFjeVwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQ9XCJyZXF1aXJlZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gY2xhc3NOYW1lPVwiYnRuLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJIGhhdmUgcmVhZCB0aGUgcHJpdmFjeSBwb2xpY3kgc3RhdGVtZW50IGluIHRoaXMgbGluaywgYW5kIGFncmVlIHdpdGggaXQgYnkgc2VsZWN0aW5nIHRoaXMgY2hlY2sgYm94LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGUgPXt7dGV4dEFsaWduOidjZW50ZXInLG1hcmdpbkJvdHRvbTonMjBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiBzdHlsZT17e2JvcmRlclJhZGl1czpcIjRweFwiLG1hcmdpblRvcDpcIjIwcHhcIn19PlNlbmQgYXBwbGljYXRpb248L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzY2YWZlOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgOHB4IHJnYmEoMTAyLDE3NSwyMzMsLjYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgOHB4IHJnYmEoMTAyLDE3NSwyMzMsLjYpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGVjay1pbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYnRuLW5vbmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYnRuLW5vbmU6IGhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlclxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWNjb3VudEluZm87Il19 */\n/*@ sourceURL=D:\\workplace\\front-end\\pages\\Signup.js */"));
    }
  }]);

  return accountInfo;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (accountInfo);

/***/ })

})
//# sourceMappingURL=Signup.js.6a7e999fd358c45fdb76.hot-update.js.map