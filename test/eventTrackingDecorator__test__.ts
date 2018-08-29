import { gaEvent } from "../src";

describe("Decorator Test", () => {
  class TestClass {
    constructor() {
      this.testFunction = this.testFunction.bind(this);
    }
    @gaEvent({ category: "test", action: "action" })
    testFunction() {}

    @gaEvent()
    testFunction2() {}
  }

  it("should be call gaEvent", () => {
    const testInstance = new TestClass();
    const spy = jest.spyOn(testInstance, "testFunction");
    const logSpy = jest.spyOn(console, "warn");
    testInstance.testFunction();
    expect(spy).toHaveBeenCalled();
    expect(logSpy).toBeCalledWith(
      "[react-ga]",
      "ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"
    );
  });

  it("should be Unknown Category, Unknown Action", () => {
    const testInstance = new TestClass();
    const spy = jest.spyOn(testInstance, "testFunction2");
    const logSpy = jest.spyOn(console, "warn");
    testInstance.testFunction2();
    expect(spy).toHaveBeenCalled();
    expect(logSpy).toBeCalledWith(
      "[react-ga]",
      "ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"
    );
  });
});
