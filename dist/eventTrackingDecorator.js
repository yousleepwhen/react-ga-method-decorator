(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react-ga"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react-ga"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactGa);
    global.eventTrackingDecorator = mod.exports;
  }
})(this, function (_exports, _reactGa) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.gaEvent = void 0;

  const gaEvent = function (value) {
    return function (target, propertyKey, descriptor) {
      const original = descriptor.value;

      if (typeof original === "function") {
        try {
          // @ts-ignore
          descriptor.value = function (...args) {
            original.apply(this, args);
            const name = target.constructor && target.constructor.name ? target.constructor.name : "";
            const label = `${name}-${propertyKey}`;
            (0, _reactGa.event)(value ? { ...value,
              label
            } : {
              category: "Unknown Category",
              action: "Unknown Action"
            }); // console.log(target.constructor.name)
            // console.log(target, propertyKey, descriptor)
          };
        } catch (e) {
          console.error(e);
        }
      }
    };
  };

  _exports.gaEvent = gaEvent;
});