"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/nJ4vwAo1AaL8XQT7p7XK");
  web3 = new _web2.default(provider);
}

exports.default = web3;