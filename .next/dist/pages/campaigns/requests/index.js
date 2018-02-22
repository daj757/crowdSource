"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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

var _layout = require("../../../components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../../../routes");

var _campaign = require("../../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _requestRow = require("../../../components/requestRow");

var _requestRow2 = _interopRequireDefault(_requestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).call.apply(_ref, [this].concat(args))), _this), _this.renderRow = function () {
      return _this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_requestRow2.default, {
          request: request,
          id: index,
          key: index,
          address: _this.props.address,
          approversCount: _this.props.approversCount
        });
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: "render",
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_layout2.default, null, _react2.default.createElement("h3", null, "Requests"), _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests/new" }, _react2.default.createElement("a", null, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: "right", style: { maginBottom: 10 } }, "Add Request"))), _react2.default.createElement(_semanticUiReact.Table, { celled: true, selectable: true }, _react2.default.createElement(Header, null, _react2.default.createElement(Row, null, _react2.default.createElement(HeaderCell, null, "ID"), _react2.default.createElement(HeaderCell, null, "Description"), _react2.default.createElement(HeaderCell, null, "Amount in Ether"), _react2.default.createElement(HeaderCell, null, "Recipient Wallet Address"), _react2.default.createElement(HeaderCell, null, "Approval Count"), _react2.default.createElement(HeaderCell, null, "Approve"), _react2.default.createElement(HeaderCell, null, "Finalize"))), _react2.default.createElement(Body, null, this.renderRow())), _react2.default.createElement("div", null, "Found ", this.props.requestCount, " requests."));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, approversCount, requestCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = (0, _campaign2.default)(address);
                _context.next = 4;
                return campaign.methods.getRequestCount().call();

              case 4:
                approversCount = _context.sent;
                _context.next = 7;
                return campaign.methods.getRequestCount().call();

              case 7:
                requestCount = _context.sent;
                _context.next = 10;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 10:
                requests = _context.sent;
                return _context.abrupt("return", { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

              case 12:
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

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;