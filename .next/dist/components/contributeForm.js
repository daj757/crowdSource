"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/DJ/Dropbox/PREWORK_DJ/Code/crowdSource/components/contributeForm.js";


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      errMsg: "",
      contribution: "",
      disabled: true,
      loading: false
    }, _this.validate = function (input) {
      var pattern = /[+-]?([0-9]*[.])?[0-9]+/g;
      pattern.test(input) ? _this.setState({ disabled: false }) : _this.setState({ disabled: true });
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errMsg: "" });
                campaign = (0, _campaign2.default)(_this.props.address);
                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return campaign.methods.contribute().send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.contribution, "ether")
                });

              case 9:
                _routes.Router.replaceRoute("/campaigns/" + _this.props.address);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);

                _this.setState({ errMsg: _context.t0.message });

              case 15:
                _this.setState({ loading: false, contribution: "" });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContributeForm, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errMsg, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "Amount to contribute"), _react2.default.createElement(_semanticUiReact.Input, {
        label: "ether",
        labelPosition: "right",
        value: this.state.contribution,
        onChange: function onChange(event) {
          _this3.setState({ contribution: event.target.value });
          _this3.validate(event.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Opps!", content: this.state.errMsg, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement(_semanticUiReact.Button, {
        disabled: this.state.disabled,
        loading: this.state.loading,
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Contribute!"));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsImVyck1zZyIsImNvbnRyaWJ1dGlvbiIsImRpc2FibGVkIiwibG9hZGluZyIsInZhbGlkYXRlIiwicGF0dGVybiIsInRlc3QiLCJpbnB1dCIsInNldFN0YXRlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInZhbHVlIiwidXRpbHMiLCJ0b1dlaSIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU8sQUFBUzs7QUFDL0IsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SUFFakIsQTs7Ozs7Ozs7Ozs7Ozs7OzROLEFBQ0o7Y0FBUSxBQUNFLEFBQ1I7b0JBRk0sQUFFUSxBQUNkO2dCQUhNLEFBR0ksQUFDVjtlLEFBSk0sQUFJRztBQUpILEFBQ04sYSxBQU1GLFdBQVcsaUJBQVMsQUFDbEI7VUFBTSxVQUFOLEFBQWdCLEFBQ2hCO2NBQUEsQUFBUSxLQUFSLEFBQWEsU0FDVCxNQUFBLEFBQUssU0FBUyxFQUFFLFVBRHBCLEFBQ0ksQUFBYyxBQUFZLFdBQzFCLE1BQUEsQUFBSyxTQUFTLEVBQUUsVUFGcEIsQUFFSSxBQUFjLEFBQVksQUFDL0I7QSxhQUVELEE7MkZBQVcsaUJBQUEsQUFBTSxPQUFOO3NCQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQUFBLEFBQU0sQUFDTjtzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxRQUEvQixBQUFjLEFBQXlCLEFBQ2pDO0FBSEcsMkJBR1Esd0JBQVMsTUFBQSxBQUFLLE1BSHRCLEFBR1EsQUFBb0I7Z0NBSDVCO2dDQUFBO3VCQUtnQixjQUFBLEFBQUssSUFMckIsQUFLZ0IsQUFBUzs7bUJBQTFCO0FBTEMsb0NBQUE7Z0NBQUE7Z0NBTUQsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCO3dCQUM1QixTQURpQyxBQUNqQyxBQUFTLEFBQ2Y7eUJBQU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixjQVI5QixBQU1ELEFBQW1DLEFBRWhDLEFBQTBDO0FBRlYsQUFDdkMsaUJBREk7O21CQUlOOytCQUFBLEFBQU8sNkJBQTJCLE1BQUEsQUFBSyxNQVZoQyxBQVVQLEFBQTZDO2dDQVZ0QztBQUFBOzttQkFBQTtnQ0FBQTtnREFZUDs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsUUFBUSxZQVpqQixBQVlQLEFBQWMsQUFBYzs7bUJBRTlCO3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxPQUFPLGNBZHZCLEFBY1QsQUFBYyxBQUFnQzs7bUJBZHJDO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7Ozs7Ozs7NkJBZ0JGO21CQUNQOzs2QkFDRSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHlDQUFBLEFBQUM7ZUFBRCxBQUNRLEFBQ047dUJBRkYsQUFFZ0IsQUFDZDtlQUFPLEtBQUEsQUFBSyxNQUhkLEFBR29CLEFBQ2xCO2tCQUFVLHlCQUFTLEFBQ2pCO2lCQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsTUFBQSxBQUFNLE9BQXBDLEFBQWMsQUFBNkIsQUFDM0M7aUJBQUEsQUFBSyxTQUFTLE1BQUEsQUFBTSxPQUFwQixBQUEyQixBQUM1QjtBQVBIOztvQkFBQTtzQkFISixBQUNFLEFBRUUsQUFVRjtBQVZFO0FBQ0UsMkJBU0osQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO29CQUFsRDtzQkFiRixBQWFFLEFBQ0E7QUFEQTswQkFDQSxBQUFDO2tCQUNXLEtBQUEsQUFBSyxNQURqQixBQUN1QixBQUNyQjtpQkFBUyxLQUFBLEFBQUssTUFGaEIsQUFFc0IsQUFDcEI7aUJBSEY7O29CQUFBO3NCQUFBO0FBQUE7QUFDRSxTQWhCTixBQUNFLEFBY0UsQUFTTDs7Ozs7QUF4RDBCLEEsQUEyRDdCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImNvbnRyaWJ1dGVGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ESi9Ecm9wYm94L1BSRVdPUktfREovQ29kZS9jcm93ZFNvdXJjZSJ9