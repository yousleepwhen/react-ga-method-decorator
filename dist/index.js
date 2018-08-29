(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./eventTrackingDecorator"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./eventTrackingDecorator"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.eventTrackingDecorator);
    global.index = mod.exports;
  }
})(this, function (_exports, _eventTrackingDecorator) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "gaEvent", {
    enumerable: true,
    get: function () {
      return _eventTrackingDecorator.gaEvent;
    }
  });
});