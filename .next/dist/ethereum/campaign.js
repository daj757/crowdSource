"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _CrowdSource = require("./build/CrowdSource.json");

var _CrowdSource2 = _interopRequireDefault(_CrowdSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_CrowdSource2.default.interface), address);
};