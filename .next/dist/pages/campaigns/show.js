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

var _layout = require("../../components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _campaign = require("../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require("semantic-ui-react");

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _contributeForm = require("../../components/contributeForm");

var _contributeForm2 = _interopRequireDefault(_contributeForm);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/DJ/Dropbox/PREWORK_DJ/Code/crowdSource/pages/campaigns/show.js?entry";


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).call.apply(_ref, [this].concat(args))), _this), _this.renderCards = function () {
      var _this$props = _this.props,
          balance = _this$props.balance,
          manager = _this$props.manager,
          mininumContribution = _this$props.mininumContribution,
          approversCount = _this$props.approversCount,
          requestCount = _this$props.requestCount;

      var items = [{
        header: manager,
        meta: "Address of manager",
        description: "The manager created this campaign and can create requests to withdraw funds to further campaign goals",
        style: { overflowWrap: "break-word" }
      }, {
        header: mininumContribution,
        meta: "Mininum contribution (wei)",
        description: "You must contribute at least this much wei to become an approver"
      }, {
        header: requestCount,
        meta: "Number of requests",
        description: "A request tries to draw money from the contract. Requests must be approved by approvers."
      }, {
        header: approversCount,
        meta: "Number of approvers",
        description: "Number of people who have already donated to this campaign"
      }, {
        header: _web2.default.utils.fromWei(balance, "ether"),
        meta: "Campaign balance (ether)",
        description: "How much money this campaign has left to spend."
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "Campaign Information"), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_contributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests", __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "View Requests")))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt("return", {
                  address: props.query.address,
                  mininumContribution: summary[0],
                  balance: summary[1],
                  requestCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkxpbmsiLCJDYW1wYWlnblNob3ciLCJyZW5kZXJDYXJkcyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbnVtQ29udHJpYnV0aW9uIiwiYXBwcm92ZXJzQ291bnQiLCJyZXF1ZXN0Q291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwiYWRkcmVzcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFNLEFBQU07O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQVMsQUFBWTs7Ozs7OztJLEFBQ2Y7Ozs7Ozs7Ozs7Ozs7O3dOQWNKLEEsY0FBYyxZQUFNO3dCQU9kLE1BUGMsQUFPVDtVQVBTLEFBRWhCLHNCQUZnQixBQUVoQjtVQUZnQixBQUdoQixzQkFIZ0IsQUFHaEI7VUFIZ0IsQUFJaEIsa0NBSmdCLEFBSWhCO1VBSmdCLEFBS2hCLDZCQUxnQixBQUtoQjtVQUxnQixBQU1oQiwyQkFOZ0IsQUFNaEIsQUFHRjs7VUFBTTtnQkFDSixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFJSSxBQUNGO2VBQU8sRUFBRSxjQU5DLEFBQ1osQUFLUyxBQUFnQjtBQUx6QixBQUNFLE9BRlU7Z0JBUVosQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQVhVLEFBUVosQUFJSTtBQUpKLEFBQ0U7Z0JBS0YsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQWpCVSxBQWNaLEFBSUk7QUFKSixBQUNFO2dCQUtGLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkF2QlUsQUFvQlosQUFJSTtBQUpKLEFBQ0U7Z0JBTVEsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRDdCLEFBQ1UsQUFBNEIsQUFDcEM7Y0FGRixBQUVRLEFBQ047cUJBN0JKLEFBQWMsQUEwQlosQUFHZSxBQUdqQjtBQU5FLEFBQ0U7MkNBS0csQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTtBOzs7Ozs2QkFFQSxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHlDQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFBeUI7QUFBekI7Y0FERixBQUNFLEFBQXlCLEFBQUssQUFDOUIsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsMENBQWUsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7b0JBQXBDO3NCQUpOLEFBQ0UsQUFFRSxBQUNFLEFBR0o7QUFISTs0QkFHSCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQWRkLEFBQ0UsQUFFRSxBQU9FLEFBQ0UsQUFDRSxBQUNFLEFBQ0UsQUFRZjs7Ozs7NEdBL0U0QixBOzs7OzttQkFDckI7QSwyQkFBVyx3QkFBUyxNQUFBLEFBQU0sTUFBTSxBLEFBQXJCOzt1QkFDSyxTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBLEFBQThCOzttQkFBOUM7QTs7MkJBRUssTUFBQSxBQUFNLE1BRFYsQUFDZ0IsQUFDckI7dUNBQXFCLFFBRmhCLEFBRWdCLEFBQVEsQUFDN0I7MkJBQVMsUUFISixBQUdJLEFBQVEsQUFDakI7Z0NBQWMsUUFKVCxBQUlTLEFBQVEsQUFDdEI7a0NBQWdCLFFBTFgsQUFLVyxBQUFRLEFBQ3hCOzJCQUFTLFFBTkosQUFNSSxBQUFRLEE7QUFOWixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTHFCLEEsQUFtRjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL0RKL0Ryb3Bib3gvUFJFV09SS19ESi9Db2RlL2Nyb3dkU291cmNlIn0=