'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _listNode = require('./list-node');

var _listNode2 = _interopRequireDefault(_listNode);

var head = Symbol();
var tail = Symbol();
var size = Symbol();

var List = (function () {
  function List() {
    _classCallCheck(this, List);

    this[head] = null;
    this[tail] = null;
    this[size] = 0;
  }

  _createClass(List, [{
    key: 'prepend',
    value: function prepend(element) {
      var node = new _listNode2['default'](element);

      this[size] += 1;

      if (this[head] === null) {
        this[head] = node;
        return this;
      }

      node.next = this[head];
      this[head].previous = node;

      if (this[tail] === null) {
        this[tail] = this[head];
      }

      this[head] = node;

      return this;
    }
  }, {
    key: 'append',
    value: function append(element) {
      var node = new _listNode2['default'](element);

      this[size] += 1;

      if (this[head] === null) {
        this[head] = node;
        return this;
      }

      if (this[tail] === null) {
        this[tail] = node;
        this[tail].previous = this[head];
        this[head].next = this[tail];
        return this;
      }

      this[tail].next = node;
      node.previous = this[tail];
      this[tail] = node;

      return this;
    }
  }, {
    key: 'first',
    value: function first() {
      return this[head].element;
    }
  }, {
    key: 'last',
    value: function last() {
      return this[tail].element;
    }
  }, {
    key: 'get',
    value: function get(pos) {
      if (pos >= this[size]) {
        return;
      }

      if (pos + 1 > this[size] / 2) {
        return this.getFromTail(pos);
      }

      return this.getFromHead(pos);
    }
  }, {
    key: 'getFromHead',
    value: function getFromHead(pos) {
      var cur = 0;
      var node = this[head];

      while (cur < pos) {
        node = node.next;
        cur++;
      }

      return node.element;
    }
  }, {
    key: 'getFromTail',
    value: function getFromTail(pos) {
      var cur = this[size] - 1;
      var node = this[tail];

      while (cur > pos) {
        node = node.previous;
        cur--;
      }

      return node.element;
    }
  }, {
    key: 'forEach',
    value: function forEach(fn) {
      var node = this[head];

      while (node !== null) {
        fn(node.element);
        node = node.next;
      }
    }
  }, {
    key: 'size',
    get: function get() {
      return this[size];
    }
  }]);

  return List;
})();

exports['default'] = List;
module.exports = exports['default'];
//# sourceMappingURL=list.js.map
