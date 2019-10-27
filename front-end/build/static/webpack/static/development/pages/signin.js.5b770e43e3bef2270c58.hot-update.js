webpackHotUpdate("static\\development\\pages\\signin.js",{

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_myLayoutBefore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/myLayoutBefore */ "./pages/components/myLayoutBefore.js");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bcryptjs */ "./node_modules/bcryptjs/dist/bcrypt.js");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_warnAlert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/warnAlert */ "./pages/components/warnAlert.js");
/* harmony import */ var _components_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/http */ "./pages/components/http.js");







var _jsxFileName = "D:\\workplace\\front-end\\pages\\signin.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;





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
var inputStyle = {
  margin: 30,
  outlineStyle: 'none',
  border: '1px solid #ccc',
  borderRadius: '3px',
  padding: '10px 10px',
  width: '70%',
  fontSize: '24px',
  fontFamily: "Microsoft soft"
};
var salt = bcryptjs__WEBPACK_IMPORTED_MODULE_10___default.a.genSaltSync(10);

var signin =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(signin, _React$Component);

  function signin(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, signin);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(signin).call(this, props));
    _this.state = {
      email: '',
      password: '',
      showAlert: 'none',
      err: '',
      data: ''
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleClose = _this.handleClose.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(signin, [{
    key: "handleChange",
    value: function handleChange(event) {
      var name = event.target.name;
      var val = event.target.value;
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, val));
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        showAlert: 'none'
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      var psw = bcryptjs__WEBPACK_IMPORTED_MODULE_10___default.a.hashSync(this.state.password, salt);
      console.log(psw);
      var data = {
        email: this.state.email,
        password: psw
      };
      Object(_components_http__WEBPACK_IMPORTED_MODULE_13__["Post"])('signin', data).then(function (res) {
        console.log(res);

        if (res == '-1' || res == '-2') {
          _this2.setState({
            showAlert: ' block'
          });

          _this2.setState({
            err: res
          });
        } else {
          var same = bcryptjs__WEBPACK_IMPORTED_MODULE_10___default.a.compareSync(_this2.state.password, res.password);
          console.log(same);

          if (same) {
            localStorage.setItem('uId', res.uId);
            localStorage.setItem('role', res.role);
            next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push({
              pathname: '/',
              query: res
            });
          } else {
            _this2.setState({
              showAlert: ' block'
            });
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx(_components_myLayoutBefore__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), __jsx("div", {
        style: {
          display: this.state.showAlert
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, this.state.err == '-1' ? __jsx(_components_warnAlert__WEBPACK_IMPORTED_MODULE_12__["Alert"], {
        title: "warning!",
        content: "Invalid email or password!",
        onClick: this.handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }) : __jsx(_components_warnAlert__WEBPACK_IMPORTED_MODULE_12__["Alert"], {
        title: "warning!",
        content: "Your application has not been approved! Please wait.",
        onClick: this.handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      })), __jsx("div", {
        style: bannerStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Sign in")), __jsx("form", {
        onSubmit: this.handleSubmit,
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx("div", {
        style: boxStyle,
        className: "jsx-3193488362",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, __jsx("input", {
        style: inputStyle,
        required: "required",
        type: "email",
        name: "email",
        placeholder: "Enter your email",
        value: this.state.value,
        onChange: this.handleChange,
        className: "jsx-3193488362",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-3193488362",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }), __jsx("input", {
        style: inputStyle,
        required: "required",
        type: "password",
        name: "password",
        placeholder: "Enter your password",
        value: this.state.value,
        onChange: this.handleChange,
        className: "jsx-3193488362",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), __jsx("br", {
        className: "jsx-3193488362",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), __jsx("button", {
        type: "submit",
        style: {
          borderRadius: "4px",
          marginTop: "20px"
        },
        className: "jsx-3193488362" + " " + "btn btn-primary btn-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Sign in"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3193488362",
        __self: this
      }, "input.jsx-3193488362:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3JrcGxhY2VcXGZyb250LWVuZFxccGFnZXNcXHNpZ25pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSGdDLEFBR2tELHFCQUNYLFVBQ3VFLGlGQUV0Rix5RUFBQyIsImZpbGUiOiJEOlxcd29ya3BsYWNlXFxmcm9udC1lbmRcXHBhZ2VzXFxzaWduaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudHMvbXlMYXlvdXRCZWZvcmVcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7QWxlcnR9IGZyb20gJy4vY29tcG9uZW50cy93YXJuQWxlcnQnO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9odHRwXCI7XHJcblxyXG5jb25zdCBib3hTdHlsZT17XHJcbiAgICBwb3NpdGlvbjoncmVsYXRpdmUnLFxyXG4gICAgbGVmdDonMjAlJyxcclxuICAgIHRleHRBbGlnbjonY2VudGVyJyxcclxuICAgIHdpZHRoOlwiNjAlXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206JzIwcHgnLFxyXG4gICAgcGFkZGluZzonMzBweCcsXHJcbiAgICBib3JkZXI6JzJweCBzb2xpZCAgI2ZmZDYzMycsXHJcbiAgICBib3JkZXJSYWRpdXM6JzJweCcsXHJcbiAgICBcclxufTsgICBcclxuY29uc3QgYmFubmVyU3R5bGUgPXtcclxuICAgIHBvc2l0aW9uOidyZWxhdGl2ZScsXHJcbiAgICBsZWZ0OicyMCUnLFxyXG4gICAgdGV4dEFsaWduOidjZW50ZXInLFxyXG4gICAgbWFyZ2luVG9wOlwiMjBweFwiLFxyXG4gICAgd2lkdGg6XCI2MCVcIixcclxuICAgIHBhZGRpbmc6ICcxMHB4IDEwcHgnLFxyXG4gICAgYm9yZGVyOicycHggc29saWQgICNmZmQ2MzMnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOlwiI2ZmZDYzM1wiLFxyXG4gICAgYm9yZGVyUmFkaXVzOicycHgnLFxyXG59O1xyXG5cclxuY29uc3QgaW5wdXRTdHlsZSA9e1xyXG4gICAgbWFyZ2luOiAzMCxcclxuICAgIG91dGxpbmVTdHlsZTogJ25vbmUnICxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJyxcclxuICAgIGJvcmRlclJhZGl1czogJzNweCcsXHJcbiAgICBwYWRkaW5nOiAnMTBweCAxMHB4JyxcclxuICAgIHdpZHRoOiAnNzAlJyxcclxuICAgIGZvbnRTaXplOiAnMjRweCcsXHJcbiAgICBmb250RmFtaWx5OiBcIk1pY3Jvc29mdCBzb2Z0XCIsXHJcblxyXG59O1xyXG52YXIgc2FsdCA9IGJjcnlwdC5nZW5TYWx0U3luYygxMCk7XHJcbmNsYXNzIHNpZ25pbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7ZW1haWw6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzaG93QWxlcnQ6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICBlcnI6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6JydcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZSA9IHRoaXMuaGFuZGxlQ2xvc2UuYmluZCh0aGlzKVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG4gICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgbGV0IHZhbCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbH0pO1xyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBoYW5kbGVDbG9zZSgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93QWxlcnQ6J25vbmUnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGhhbmRsZVN1Ym1pdChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHBzdyA9IGJjcnlwdC5oYXNoU3luYyh0aGlzLnN0YXRlLnBhc3N3b3JkLCBzYWx0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwc3cpXHJcbiAgICAgICAgdmFyIGRhdGEgPXtcclxuICAgICAgICAgICAgZW1haWw6dGhpcy5zdGF0ZS5lbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6cHN3XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBQb3N0KCdzaWduaW4nLCBkYXRhKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIGlmKHJlcz09Jy0xJ3x8IHJlcyA9PSAnLTInKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dBbGVydDogJyBibG9jayd9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyOiByZXN9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNhbWUgPSBiY3J5cHQuY29tcGFyZVN5bmModGhpcy5zdGF0ZS5wYXNzd29yZCxyZXMucGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzYW1lKVxyXG4gICAgICAgICAgICAgICAgaWYoc2FtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VJZCcscmVzLnVJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JvbGUnLHJlcy5yb2xlKTtcclxuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOicvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHJlc1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93QWxlcnQ6ICcgYmxvY2snfSlcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgXHJcbiAgICBcclxuICAgIH1cclxuICAgICAgICBcclxuICAgICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExheW91dC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogdGhpcy5zdGF0ZS5zaG93QWxlcnR9fT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnI9PSctMSc/PEFsZXJ0IHRpdGxlID0nd2FybmluZyEnIGNvbnRlbnQgPSAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCEnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9Lz46XHJcbiAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHRpdGxlID0nd2FybmluZyEnIGNvbnRlbnQgPSAnWW91ciBhcHBsaWNhdGlvbiBoYXMgbm90IGJlZW4gYXBwcm92ZWQhIFBsZWFzZSB3YWl0Licgb25DbGljaz17dGhpcy5oYW5kbGVDbG9zZX0vPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17YmFubmVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlNpZ24gaW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Ym94U3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZSA9IHtpbnB1dFN0eWxlfSByZXF1aXJlZD1cInJlcXVpcmVkXCIgdHlwZT1cImVtYWlsXCIgbmFtZT0gXCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZSA9IHtpbnB1dFN0eWxlfSByZXF1aXJlZD1cInJlcXVpcmVkXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZSA9IFwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiBzdHlsZT17e2JvcmRlclJhZGl1czpcIjRweFwiLG1hcmdpblRvcDpcIjIwcHhcIn19PlNpZ24gaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OmZvY3Vze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNjZhZmU5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDhweCByZ2JhKDEwMiwxNzUsMjMzLC42KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA4cHggcmdiYSgxMDIsMTc1LDIzMywuNilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6J3JlZCd9fT5oYXZlIG5vIGFjY291bnQ/Jm5ic3A7Jm5ic3A7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScvc2lnbnVwJz5zaWduIHVwPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNpZ25pbjsiXX0= */\n/*@ sourceURL=D:\\workplace\\front-end\\pages\\signin.js */"))), __jsx("div", {
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, __jsx("span", {
        style: {
          color: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "have no account?\xA0\xA0"), __jsx("a", {
        href: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "sign up")));
    }
  }]);

  return signin;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (signin);

/***/ })

})
//# sourceMappingURL=signin.js.5b770e43e3bef2270c58.hot-update.js.map