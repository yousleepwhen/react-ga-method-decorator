import { event, EventArgs } from "react-ga";

export const gaEvent = function(value?: EventArgs) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;
    if (typeof original === "function") {
      try {
        // @ts-ignore
        descriptor.value = function(...args) {
          original.apply(this, args);
          const name =
            target.constructor && target.constructor.name
              ? target.constructor.name
              : "";
          const label = `${name}-${propertyKey}`;
          event(
            value
              ? { ...value, label }
              : { category: "Unknown Category", action: "Unknown Action" }
          );
        };
      } catch (e) {
        console.error('gaEvent Decorator Error ' + e);
      }
    }
  };
};
