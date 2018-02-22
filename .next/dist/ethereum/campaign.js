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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbiIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXFCLEFBQXJCLEFBRUE7Ozs7OztrQkFBZSxtQkFBVyxBQUN4QjtTQUFPLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUFzQixLQUFLLEFBQUwsTUFBVyxzQkFBUyxBQUFwQixBQUF0QixZQUFzRCxBQUF0RCxBQUFQLEFBQ0Q7QUFGRCIsImZpbGUiOiJjYW1wYWlnbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvREovRHJvcGJveC9QUkVXT1JLX0RKL0NvZGUvY3Jvd2RTb3VyY2UifQ==