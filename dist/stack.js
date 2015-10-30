'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var stack = Symbol();

var Stack = (function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this[stack] = [];
  }

  _createClass(Stack, [{
    key: 'push',
    value: function push(el) {
      this[stack].push(el);
      return this;
    }
  }, {
    key: 'pop',
    value: function pop() {
      return this[stack].pop();
    }
  }, {
    key: 'length',
    get: function get() {
      return this[stack].length;
    }
  }]);

  return Stack;
})();

exports['default'] = Stack;
module.exports = exports['default'];
//# sourceMappingURL=stack.js.map
