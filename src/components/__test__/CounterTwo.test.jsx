import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import CounterTwo from "../CounterTwo";

describe("counter #2", () => {
  it("should render currectly", () => {
    render(
      <CounterTwo
        count={0}
        incrementHandler={() => {}}
        decrementHandler={() => {}}
      />
    );
    const hElement = screen.getByRole("heading", { level: 1 });
    expect(hElement).toBeInTheDocument();
  });
  it("should render increment function currectly", () => {
    const incrementHandler = vi.fn();
    const decrementHandler = vi.fn();
    render(
      <CounterTwo
        count={0}
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
      />
    );
    const incrementBtnElement = screen.getByRole("button", {
      name: "Increment",
    });
    fireEvent.click(incrementBtnElement);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
  });
});
