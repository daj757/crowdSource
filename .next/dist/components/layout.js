"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

var _header = require("./header");

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement("div", null, _react2.default.createElement(_semanticUiReact.Container, null, _react2.default.createElement(_header2.default, null), props.children, _react2.default.createElement(_head2.default, null, _react2.default.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
  }))));
};