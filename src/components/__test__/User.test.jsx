import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import User from "../User";

describe("User", () => {
  it("should render", () => {
    render(<User />);
    const headingElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingElement).toBeInTheDocument();
  });
  it("should render list of 2 users", async () => {
    render(<User />);
    const listElement = await screen.findAllByRole("listitem");
    expect(listElement).toHaveLength(2);
  });
});
