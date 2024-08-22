import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import useCounter from "../useCounter";

describe("render useCounter custom hook", () => {
  // it("should increment counter by 1", () => {
  //   const { result } = renderHook(() => useCounter({ initialState: 0 }));
  //   console.log("renderHook result is=>", result);
  //   const { count, increment } = result.current;
  //   act(() => {
  //     increment();
  //   });
  //   expect(count).toBe(1);
  // });
  it("should decrement counter by 1", () => {
    const { result } = renderHook(() => useCounter({ initialState: 0 }));
    // const { count, decrement } = result.current;
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(-1);
  });
  it("should have initial state", () => {
    const { result } = renderHook(() => useCounter({ initialState: 0 }));
    expect(result.current.count).toBe(0);
  });
});
