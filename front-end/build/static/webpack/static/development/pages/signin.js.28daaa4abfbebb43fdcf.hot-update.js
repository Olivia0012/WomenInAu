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
          var same = bcryptjs__WEBPACK_IMPORTED_MODULE_10___default.a.compareSync(_this2.state.email, res.psw);
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
      }, "input.jsx-3193488362:focus{border-color:#66afe9;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3b3JrcGxhY2VcXGZyb250LWVuZFxccGFnZXNcXHNpZ25pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSGdDLEFBR2tELHFCQUNYLFVBQ3VFLGlGQUV0Rix5RUFBQyIsImZpbGUiOiJEOlxcd29ya3BsYWNlXFxmcm9udC1lbmRcXHBhZ2VzXFxzaWduaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudHMvbXlMYXlvdXRCZWZvcmVcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7QWxlcnR9IGZyb20gJy4vY29tcG9uZW50cy93YXJuQWxlcnQnO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9odHRwXCI7XHJcblxyXG5jb25zdCBib3hTdHlsZT17XHJcbiAgICBwb3NpdGlvbjoncmVsYXRpdmUnLFxyXG4gICAgbGVmdDonMjAlJyxcclxuICAgIHRleHRBbGlnbjonY2VudGVyJyxcclxuICAgIHdpZHRoOlwiNjAlXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206JzIwcHgnLFxyXG4gICAgcGFkZGluZzonMzBweCcsXHJcbiAgICBib3JkZXI6JzJweCBzb2xpZCAgI2ZmZDYzMycsXHJcbiAgICBib3JkZXJSYWRpdXM6JzJweCcsXHJcbiAgICBcclxufTsgICBcclxuY29uc3QgYmFubmVyU3R5bGUgPXtcclxuICAgIHBvc2l0aW9uOidyZWxhdGl2ZScsXHJcbiAgICBsZWZ0OicyMCUnLFxyXG4gICAgdGV4dEFsaWduOidjZW50ZXInLFxyXG4gICAgbWFyZ2luVG9wOlwiMjBweFwiLFxyXG4gICAgd2lkdGg6XCI2MCVcIixcclxuICAgIHBhZGRpbmc6ICcxMHB4IDEwcHgnLFxyXG4gICAgYm9yZGVyOicycHggc29saWQgICNmZmQ2MzMnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOlwiI2ZmZDYzM1wiLFxyXG4gICAgYm9yZGVyUmFkaXVzOicycHgnLFxyXG59O1xyXG5cclxuY29uc3QgaW5wdXRTdHlsZSA9e1xyXG4gICAgbWFyZ2luOiAzMCxcclxuICAgIG91dGxpbmVTdHlsZTogJ25vbmUnICxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJyxcclxuICAgIGJvcmRlclJhZGl1czogJzNweCcsXHJcbiAgICBwYWRkaW5nOiAnMTBweCAxMHB4JyxcclxuICAgIHdpZHRoOiAnNzAlJyxcclxuICAgIGZvbnRTaXplOiAnMjRweCcsXHJcbiAgICBmb250RmFtaWx5OiBcIk1pY3Jvc29mdCBzb2Z0XCIsXHJcblxyXG59O1xyXG52YXIgc2FsdCA9IGJjcnlwdC5nZW5TYWx0U3luYygxMCk7XHJcbmNsYXNzIHNpZ25pbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7ZW1haWw6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBzaG93QWxlcnQ6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICBlcnI6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6JydcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZSA9IHRoaXMuaGFuZGxlQ2xvc2UuYmluZCh0aGlzKVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG4gICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgbGV0IHZhbCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbH0pO1xyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBoYW5kbGVDbG9zZSgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzaG93QWxlcnQ6J25vbmUnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGhhbmRsZVN1Ym1pdChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHBzdyA9IGJjcnlwdC5oYXNoU3luYyh0aGlzLnN0YXRlLnBhc3N3b3JkLCBzYWx0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwc3cpXHJcbiAgICAgICAgdmFyIGRhdGEgPXtcclxuICAgICAgICAgICAgZW1haWw6dGhpcy5zdGF0ZS5lbWFpbCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6cHN3XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBQb3N0KCdzaWduaW4nLCBkYXRhKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIGlmKHJlcz09Jy0xJ3x8IHJlcyA9PSAnLTInKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dBbGVydDogJyBibG9jayd9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyOiByZXN9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNhbWUgPSBiY3J5cHQuY29tcGFyZVN5bmModGhpcy5zdGF0ZS5lbWFpbCxyZXMucHN3KVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2FtZSlcclxuICAgICAgICAgICAgICAgIGlmKHNhbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1SWQnLHJlcy51SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyb2xlJyxyZXMucm9sZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTonLycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiByZXNcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0FsZXJ0OiAnIGJsb2NrJ30pXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgIFxyXG4gICAgXHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IHRoaXMuc3RhdGUuc2hvd0FsZXJ0fX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyPT0nLTEnPzxBbGVydCB0aXRsZSA9J3dhcm5pbmchJyBjb250ZW50ID0gJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQhJyBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfS8+OlxyXG4gICAgICAgICAgICAgICAgICAgIDxBbGVydCB0aXRsZSA9J3dhcm5pbmchJyBjb250ZW50ID0gJ1lvdXIgYXBwbGljYXRpb24gaGFzIG5vdCBiZWVuIGFwcHJvdmVkISBQbGVhc2Ugd2FpdC4nIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9Lz59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Jhbm5lclN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TaWduIGluPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2JveFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGUgPSB7aW5wdXRTdHlsZX0gcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9IFwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+PGJyLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGUgPSB7aW5wdXRTdHlsZX0gcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWUgPSBcInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCIgc3R5bGU9e3tib3JkZXJSYWRpdXM6XCI0cHhcIixtYXJnaW5Ub3A6XCIyMHB4XCJ9fT5TaWduIGluPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDpmb2N1c3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzY2YWZlOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA4cHggcmdiYSgxMDIsMTc1LDIzMywuNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDAgOHB4IHJnYmEoMTAyLDE3NSwyMzMsLjYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOidyZWQnfX0+aGF2ZSBubyBhY2NvdW50PyZuYnNwOyZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nL3NpZ251cCc+c2lnbiB1cDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBzaWduaW47Il19 */\n/*@ sourceURL=D:\\workplace\\front-end\\pages\\signin.js */"))), __jsx("div", {
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
//# sourceMappingURL=signin.js.28daaa4abfbebb43fdcf.hot-update.js.map