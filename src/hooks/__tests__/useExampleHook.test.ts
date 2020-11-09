import { renderHook } from "@testing-library/react-hooks";

describe("test suit", () => {
  it("should test something here", () => {
    const { useExampleHook } = require("../useExampleHook");
    const { result } = renderHook(() => useExampleHook());

    expect(result.current.stateA).toBeUndefined();
    expect(result.current.stateB).toBeUndefined();
  });
});
