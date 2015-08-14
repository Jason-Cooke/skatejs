(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', '../util/data', '../global/registry', '../util/walk-tree'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('../util/data'), require('../global/registry'), require('../util/walk-tree'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.data, global.registry, global.walkTree);
    global.unknown = mod.exports;
  }
})(this, function (exports, module, _utilData, _globalRegistry, _utilWalkTree) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _data = _interopRequireDefault(_utilData);

  var _registry = _interopRequireDefault(_globalRegistry);

  var _walkTree = _interopRequireDefault(_utilWalkTree);

  function callDetachedOnDescendants(elem, id) {
    (0, _walkTree['default'])(elem.childNodes, function (child) {
      _registry['default'].find(child).forEach(function (Ctor) {
        return Ctor.prototype.detachedCallback.call(child);
      });
    }, function (child) {
      return !(0, _data['default'])(child, id).detached;
    });
  }

  module.exports = function (opts) {
    /* jshint expr: true */
    return function () {
      var info = (0, _data['default'])(this, opts.id);

      if (info.detached) return;
      info.detached = true;
      info.attached = false;

      callDetachedOnDescendants(this, opts.id);
      opts.detached.call(this);
    };
  };
});