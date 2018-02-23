webpackHotUpdate(5,{

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = __webpack_require__(523);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(717);

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = __webpack_require__(478);

var _layout = __webpack_require__(1106);

var _layout2 = _interopRequireDefault(_layout);

var _routes = __webpack_require__(709);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/DJ/Dropbox/PREWORK_DJ/Code/crowdSource/pages/index.js?entry";


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: "renderCampaigns",
    value: function renderCampaigns() {
      var items = this.props.campaigns.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: "/campaigns/" + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          }, _react2.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          }, "View campaign")),
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_semanticUiReact.Container, { text: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_semanticUiReact.Header, {
        as: "h1",
        style: (0, _defineProperty3.default)({
          fontSize: "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: ".99em"
        }, "marginBottom", ".1em"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "Crowd Coin ", _react2.default.createElement(_semanticUiReact.Image, { size: "large", src: "../static/crypto.png", __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), _react2.default.createElement(_semanticUiReact.Header, {
        as: "h2",
        content: "A crowd funding site with complete transparecny. Built on the ethereum platform. To test out on the Rinkeby test network have MetaMask installed in your browser.",
        style: {
          fontSize: "1.7em",
          fontWeight: "normal",
          marginTop: ".5em",
          marginBottom: "5em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      })), _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Open Campaigns"), _react2.default.createElement(_routes.Link, { route: "/campaigns/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { floated: "right", animated: true, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Content, { visible: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Create Campaign"), _react2.default.createElement(_semanticUiReact.Button.Content, { hidden: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "add circle", __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }))))), this.renderCampaigns()));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context.sent;
                return _context.abrupt("return", { campaigns: campaigns });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhcmQiLCJCdXR0b24iLCJJY29uIiwiQ29udGFpbmVyIiwiSGVhZGVyIiwiUmVzcG9uc2l2ZSIsIkltYWdlIiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7c0NBTWMsQUFDaEI7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBVyxBQUNoRDs7a0JBQU8sQUFDRyxBQUNSO3VDQUNFLEFBQUMsOEJBQUssdUJBQU4sQUFBMkI7d0JBQTNCOzBCQUFBLEFBQ0U7QUFERjtXQUFBLGtCQUNFLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxhQUpDLEFBR0gsQUFDRSxBQUdKO2lCQVBGLEFBQU8sQUFPRSxBQUVWO0FBVFEsQUFDTDtBQUZKLEFBQWMsQUFXZCxPQVhjOzJDQVdQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0EsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsNENBQVUsTUFBWDtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQztZQUFELEFBQ0ssQUFDSDs7b0JBQUEsQUFDWSxBQUNWO3NCQUZGLEFBRWMsQUFDWjt3QkFIRixBQUdnQixBQUNkO3FCQUpGLEFBSWE7QUFIWCwyQkFISixBQUVFLEFBS2dCOztvQkFQbEI7c0JBQUE7QUFBQTtBQUNFLFNBU1csK0JBQUEsQUFBQyx3Q0FBTSxNQUFQLEFBQVksU0FBUSxLQUFwQixBQUF3QjtvQkFBeEI7c0JBWGYsQUFDRSxBQVVhLEFBRWI7QUFGYTsyQkFFYixBQUFDO1lBQUQsQUFDSyxBQUNIO2lCQUZGLEFBRVUsQUFFUjs7b0JBQU8sQUFDSyxBQUNWO3NCQUZLLEFBRU8sQUFDWjtxQkFISyxBQUdNLEFBQ1g7d0JBUkosQUFJUyxBQUlTO0FBSlQsQUFDTDs7b0JBTEo7c0JBZEosQUFDRSxBQWFFLEFBWUY7QUFaRTtBQUNFLDJCQVdKLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxtQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxTQUFSLEFBQWdCLFNBQVEsVUFBeEIsTUFBaUMsU0FBakMsQUFBMEM7b0JBQTFDO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHdCQUFBLEFBQVEsV0FBUSxTQUFoQjtvQkFBQTtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUNBLG9DQUFDLGNBQUQsd0JBQUEsQUFBUSxXQUFRLFFBQWhCO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFQVixBQUVFLEFBQ0UsQUFDRSxBQUVFLEFBQ0UsQUFLUDtBQUxPO21CQWxDZCxBQUNFLEFBMEJFLEFBWUcsQUFBSyxBQUliOzs7Ozs7Ozs7Ozs7dUJBL0R5QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUJBQWhCLEFBQXVDLEE7O21CQUF6RDtBO2lEQUNDLEVBQUUsV0FBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSGlCLEEsQUFvRTVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ESi9Ecm9wYm94L1BSRVdPUktfREovQ29kZS9jcm93ZFNvdXJjZSJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/DJ/Dropbox/PREWORK_DJ/Code/crowdSource/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/DJ/Dropbox/PREWORK_DJ/Code/crowdSource/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jZWJkNTMwYjhmOGM3Y2ZiZTVjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MzBjMzM3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vZXRoZXJldW0vZmFjdG9yeVwiO1xuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgQnV0dG9uLFxuICBJY29uLFxuICBDb250YWluZXIsXG4gIEhlYWRlcixcbiAgUmVzcG9uc2l2ZSxcbiAgSW1hZ2Vcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcblxuY2xhc3MgQ2FtcGFpZ25JbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xuICAgIHJldHVybiB7IGNhbXBhaWducyB9O1xuICB9XG5cbiAgcmVuZGVyQ2FtcGFpZ25zKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5jYW1wYWlnbnMubWFwKGFkZHJlc3MgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxuICAgICAgICBkZXNjcmlwdGlvbjogKFxuICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke2FkZHJlc3N9YH0+XG4gICAgICAgICAgICA8YT5WaWV3IGNhbXBhaWduPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSxcbiAgICAgICAgZmx1aWQ6IHRydWVcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxDb250YWluZXIgdGV4dD5cbiAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICBhcz1cImgxXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjRlbVwiLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogXCIuOTllbVwiLFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiLjFlbVwiXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENyb3dkIENvaW4gPEltYWdlIHNpemU9XCJsYXJnZVwiIHNyYz1cIi4uL3N0YXRpYy9jcnlwdG8ucG5nXCIgLz5cbiAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICBhcz1cImgyXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJBIGNyb3dkIGZ1bmRpbmcgc2l0ZSB3aXRoIGNvbXBsZXRlIHRyYW5zcGFyZWNueS4gQnVpbHQgb24gdGhlIGV0aGVyZXVtIHBsYXRmb3JtLlxuICAgICAgICAgICAgVG8gdGVzdCBvdXQgb24gdGhlIFJpbmtlYnkgdGVzdCBuZXR3b3JrIGhhdmUgTWV0YU1hc2sgaW5zdGFsbGVkIGluIHlvdXIgYnJvd3Nlci5cIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMS43ZW1cIixcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIi41ZW1cIixcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjVlbVwiXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj5PcGVuIENhbXBhaWduczwvaDI+XG4gICAgICAgICAgPExpbmsgcm91dGU9XCIvY2FtcGFpZ25zL25ld1wiPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxCdXR0b24gZmxvYXRlZD1cInJpZ2h0XCIgYW5pbWF0ZWQgcHJpbWFyeT17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbi5Db250ZW50IHZpc2libGU+Q3JlYXRlIENhbXBhaWduPC9CdXR0b24uQ29udGVudD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uLkNvbnRlbnQgaGlkZGVuPlxuICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImFkZCBjaXJjbGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uLkNvbnRlbnQ+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJDYW1wYWlnbnMoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQTtBQUFBOztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBUkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUhBOztBQUhBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFFQTtBQUZBO0FBRUE7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7O0FBTEE7QUFZQTtBQVpBO0FBQ0E7O0FBV0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBS0E7QUFMQTtBQVNBOzs7Ozs7Ozs7Ozs7QUEvREE7QUFDQTtBQURBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=