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

function errAlert1(props) {
  switch (props.errStatus) {
    case -1:
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx(_components_warnAlert__WEBPACK_IMPORTED_MODULE_10__["Alert"], {
        title: "Warning!",
        content: "Your email has already applicated, please sign in!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }));

    case -2:
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx(_components_warnAlert__WEBPACK_IMPORTED_MODULE_10__["Alert"], {
        title: "Warning!",
        content: "Username has already been token, please change!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }));

    case -3:
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx(_components_warnAlert__WEBPACK_IMPORTED_MODULE_10__["Alert"], {
        title: "Warning!",
        content: "Please enter the same password!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
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
      }, __jsx("errAlert1", {
        errStatus: this.state.errStatus,
        className: "jsx-610606959",
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
      }, "input.jsx-610606959:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);}.check-input.jsx-610606959{position:relative;width:40px;}.btn-none.jsx-610606959{border:none;background-color:#fff;}.btn-none.jsx-610606959: hover.jsx-610606959{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3JrcGxhY2VcXGZyb250LWVuZFxccGFnZXNcXFNpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3UGdDLEFBRzhDLEFBTUgsQUFJUCxBQU1oQixZQUwwQixHQUt6QixHQVRjLEdBTkEsUUFPZCxFQU5xRixHQVVyRiw4RUFSRCx5RUFBQyIsImZpbGUiOiJEOlxcd29ya3BsYWNlXFxmcm9udC1lbmRcXHBhZ2VzXFxTaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudHMvbXlMYXlvdXRCZWZvcmVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtBbGVydH0gZnJvbSAnLi9jb21wb25lbnRzL3dhcm5BbGVydCc7XHJcbmltcG9ydCBBbGVydDEgZnJvbSAnLi9jb21wb25lbnRzL3N1Y2Nlc3NBbGVydCc7XHJcbmltcG9ydCB7UG9zdH0gZnJvbSBcIi4vY29tcG9uZW50cy9odHRwXCI7XHJcbmltcG9ydCBcIi4vY3NzL2FwcC5jc3NcIjtcclxuaW1wb3J0IHsgUHJpdmFjeSB9IGZyb20gXCIuL2NvbXBvbmVudHMvUHJpdmFjeVwiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5cclxuY29uc3QgaW5wdXRTdHlsZSA9e1xyXG4gICAgbWFyZ2luOiAyMCxcclxuICAgIG91dGxpbmVTdHlsZTogJ25vbmUnICxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJyxcclxuICAgIGJvcmRlclJhZGl1czogJzNweCcsXHJcbiAgICBwYWRkaW5nOiAnMTJweCAxMnB4JyxcclxuICAgIHdpZHRoOiAnNzAlJyxcclxuICAgIGZvbnRGYW1pbHk6IFwiTWljcm9zb2Z0IHNvZnRcIixcclxuICAgIFxyXG59XHJcbmNvbnN0IGJveFN0eWxlPXtcclxuICAgIHBvc2l0aW9uOidyZWxhdGl2ZScsXHJcbiAgICBsZWZ0OicyMCUnLFxyXG4gICAgdGV4dEFsaWduOidjZW50ZXInLFxyXG4gICAgd2lkdGg6XCI2MCVcIixcclxuICAgIG1hcmdpbkJvdHRvbTonMjBweCcsXHJcbiAgICBwYWRkaW5nOiczMHB4JyxcclxuICAgIGJvcmRlcjonMnB4IHNvbGlkICAjZmZkNjMzJyxcclxuICAgIGJvcmRlclJhZGl1czonMnB4JyxcclxuIFxyXG59XHJcblxyXG5jb25zdCBiYW5uZXJTdHlsZSA9e1xyXG4gICAgcG9zaXRpb246J3JlbGF0aXZlJyxcclxuICAgIGxlZnQ6JzIwJScsXHJcbiAgICB0ZXh0QWxpZ246J2NlbnRlcicsXHJcbiAgICBtYXJnaW5Ub3A6XCIyMHB4XCIsXHJcbiAgICB3aWR0aDpcIjYwJVwiLFxyXG4gICAgcGFkZGluZzogJzEwcHggMTBweCcsXHJcbiAgICBib3JkZXI6JzJweCBzb2xpZCAgI2ZmZDYzMycsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjZmZkNjMzXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6JzJweCcsXHJcbiAgIFxyXG59XHJcblxyXG52YXIgc2FsdCA9IGJjcnlwdC5nZW5TYWx0U3luYygxMCk7XHJcblxyXG5mdW5jdGlvbiBlcnJBbGVydDEocHJvcHMpe1xyXG4gICAgc3dpdGNoKHByb3BzLmVyclN0YXR1cyl7XHJcbiAgICAgICAgY2FzZSAtMTpcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QWxlcnQgdGl0bGU9XCJXYXJuaW5nIVwiIGNvbnRlbnQ9XCJZb3VyIGVtYWlsIGhhcyBhbHJlYWR5IGFwcGxpY2F0ZWQsIHBsZWFzZSBzaWduIGluIVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSBcclxuICAgICAgICBjYXNlIC0yOlxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBbGVydCB0aXRsZT1cIldhcm5pbmchXCIgY29udGVudD1cIlVzZXJuYW1lIGhhcyBhbHJlYWR5IGJlZW4gdG9rZW4sIHBsZWFzZSBjaGFuZ2UhXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgY2FzZSAtMzpcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QWxlcnQgdGl0bGU9XCJXYXJuaW5nIVwiIGNvbnRlbnQ9XCJQbGVhc2UgZW50ZXIgdGhlIHNhbWUgcGFzc3dvcmQhXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuY2xhc3MgYWNjb3VudEluZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge2Vyck1zZzonJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzdzonJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2ZtOicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZTonJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzczonJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW90aXZhdGlvbjonJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZTonJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyQWxlcnQ6J25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQWxlcnQ6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1A6J25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJTdGF0dXM6MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5wc3dJbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgICAgICAgICB0aGlzLmNmbUlucHV0ID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNsb3NlID0gdGhpcy5oYW5kbGVDbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXNob3cgPSB0aGlzLmhhbmRsZXNob3cuYmluZCh0aGlzKVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQ2xpY2s9KGUpPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1A6J2Jsb2NrJ30pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVzaG93PSgpPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1A6J25vbmUnfSlcclxuICAgIH1cclxuICAgIGhhbmRsZUNsb3NlKCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGVyckFsZXJ0OiAnbm9uZSdcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgICAgIGhhbmRsZUNoYW5nZShldmVudCl7XHJcbiAgICAgICAgICAgIGxldCBlcnIgPSAnJztcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICAgICAgbGV0IHZhbCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgbGV0IHBzdyA9IHRoaXMucHN3SW5wdXQuY3VycmVudC52YWx1ZTtcclxuICAgICAgICAgICAgbGV0IGNmbSA9IHRoaXMuY2ZtSW5wdXQuY3VycmVudC52YWx1ZTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIFtuYW1lXTp2YWwsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKHBzdyAhPT0nJyYmY2ZtICE9PScnKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYocHN3ID09IGNmbSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyID0gJydcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGVyciA9ICdEaWZmZXJlbnQgcGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHBzdzogdGhpcy5wc3dJbnB1dC5jdXJyZW50LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZXJyTXNnOmVycixcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaGFuZGxlU3VibWl0KGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZih0aGlzLnBzd0lucHV0LmN1cnJlbnQudmFsdWUgIT09IHRoaXMuY2ZtSW5wdXQuY3VycmVudC52YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJBbGVydDonYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICAgIGVyclN0YXR1czogJy0zJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdmFyIHBzdyA9IGJjcnlwdC5oYXNoU3luYyh0aGlzLnN0YXRlLnBhc3N3b3JkLCBzYWx0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcHN3OiBwc3csXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6IHRoaXMuc3RhdGUudXNlck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lOiB0aGlzLnN0YXRlLnBob25lLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMuc3RhdGUuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBtb3RpdmF0aW9uOiB0aGlzLnN0YXRlLm1vdGl2YXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZTogdGhpcy5zdGF0ZS5leHBlcmllbmNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBQb3N0KCdzaWdudXAnLGRhdGEpLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcyA9PSAndHJ1ZScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NBbGVydDogXCJibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlcz09Jy0xJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyQWxlcnQ6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyclN0YXR1czogcmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlcz09Jy0yJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyQWxlcnQ6IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyclN0YXR1czogcmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVuZGVyKCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJjb250YWluZXIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8TGF5b3V0Lz5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiB0aGlzLnN0YXRlLmVyckFsZXJ0fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxlcnJBbGVydDEgZXJyU3RhdHVzPXt0aGlzLnN0YXRlLmVyclN0YXR1c30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogdGhpcy5zdGF0ZS5zdWNjZXNzQWxlcnR9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0MSB0aXRsZSA9IFwiU3VjY2Vzc1wiIGNvbnRlbnQgPSBcIllvdXIgYXBwbGljYXRpb24gaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHN1Ym1pdHRlZCEgUGxlYXNlIHdhaXQgZm9yIGFwcHJvdmluZy5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw9XCIvc2lnbmluXCIgYnV0dG9uPVwiT2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8UHJpdmFjeSBzaG93PXt0aGlzLnN0YXRlLnNob3dQfSBmaW5pc2g9e3RoaXMuaGFuZGxlc2hvd30vPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Jhbm5lclN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QWNjb3VudCBpbmZvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2JveFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlID0ge2lucHV0U3R5bGV9IHR5cGU9XCJlbWFpbFwiIG5hbWU9IFwiZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkPVwicmVxdWlyZWRcIi8+PGJyLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZSA9IHtpbnB1dFN0eWxlfSB0eXBlPVwicGFzc3dvcmRcIiBuYW1lID0gXCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIiAgcmVmPXt0aGlzLnBzd0lucHV0fSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZD1cInJlcXVpcmVkXCIvPjxici8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGUgPSB7aW5wdXRTdHlsZX0gdHlwZT1cInBhc3N3b3JkXCIgbmFtZSA9IFwiY29uZmlybVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmQgYWdhaW5cIiAgcmVmPXt0aGlzLmNmbUlucHV0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZD1cInJlcXVpcmVkXCIvPjxzcGFuIHN0eWxlPXt7Y29sb3I6J3JlZCd9fT57dGhpcy5zdGF0ZS5lcnJNc2d9PC9zcGFuPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZSA9IHtpbnB1dFN0eWxlfSB0eXBlPVwidGV4dFwiIG5hbWUgPSBcIm5hbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHJlYWwgbmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkPVwicmVxdWlyZWRcIi8+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtiYW5uZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlBlcnNvbmFsIGluZm88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2JveFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlID0ge2lucHV0U3R5bGV9IHR5cGU9XCJ0ZXh0XCIgbmFtZSA9IFwidXNlck5hbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHVzZXJOYW1lXCIgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkPVwicmVxdWlyZWRcIi8+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlID0ge2lucHV0U3R5bGV9IHR5cGU9XCJudW1iZXJcIiBuYW1lID0gXCJwaG9uZVwiIHJlcXVpcmVkPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGhvbmUgaGVyZVwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz48YnIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlID0ge2lucHV0U3R5bGV9IHR5cGU9XCJ0ZXh0XCIgbmFtZSA9IFwiYWRkcmVzc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgYWRkcmVzc1wiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkPVwicmVxdWlyZWRcIi8+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Ym94U3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzdHlsZT17e21hcmdpbkJvdHRvbTonNDBweCcsd2lkdGg6JzcwJScsbGVmdDonMTUlJyxwb3NpdGlvbjoncmVsYXRpdmUnfX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm1vdGl2YXRpb25cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiVGV4dGFyZWExXCIgcm93cz1cIjVcIiBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBtb3RpdmF0aW9uJyByZXF1aXJlZD1cInJlcXVpcmVkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgc3R5bGU9e3t3aWR0aDonNzAlJyxsZWZ0OicxNSUnLHBvc2l0aW9uOidyZWxhdGl2ZSd9fSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZXhwZXJpZW5jZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJUZXh0YXJlYTJcIiByb3dzPVwiNVwiIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIGV4cGVyaWVuY2UnIHJlcXVpcmVkPVwicmVxdWlyZWRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImNoZWNrLWlucHV0XCIgbmFtZT1cInByaXZhY3lcIiBjaGVja2VkPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkPVwicmVxdWlyZWRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cImJ0bi1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSSBoYXZlIHJlYWQgdGhlIHByaXZhY3kgcG9saWN5IHN0YXRlbWVudCBpbiB0aGlzIGxpbmssIGFuZCBhZ3JlZSB3aXRoIGl0IGJ5IHNlbGVjdGluZyB0aGlzIGNoZWNrIGJveC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlID17e3RleHRBbGlnbjonY2VudGVyJyxtYXJnaW5Cb3R0b206JzIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCIgc3R5bGU9e3tib3JkZXJSYWRpdXM6XCI0cHhcIixtYXJnaW5Ub3A6XCIyMHB4XCJ9fT5TZW5kIGFwcGxpY2F0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0OmZvY3Vze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICM2NmFmZTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDhweCByZ2JhKDEwMiwxNzUsMjMzLC42KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDhweCByZ2JhKDEwMiwxNzUsMjMzLC42KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2hlY2staW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1ub25le1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ0bi1ub25lOiBob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFjY291bnRJbmZvOyJdfQ== */\n/*@ sourceURL=D:\\workplace\\front-end\\pages\\Signup.js */"));
    }
  }]);

  return accountInfo;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (accountInfo);

/***/ })

})
//# sourceMappingURL=Signup.js.e9ecfaae6075b18c5b20.hot-update.js.map