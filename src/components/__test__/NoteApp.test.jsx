import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NoteContextProvider } from "../../store/NoteContext";
import NoteApp from "../NoteApp";
// const submitClick = vi.fn();
const addNote = (notes) => {
  const titleInputelement = screen.getByPlaceholderText("Note title");
  const descriptionInputelement =
    screen.getByPlaceholderText(/note description/i);
  const submitButton = screen.getByRole("button", { name: "Add new note" });
  for (const note of notes) {
    fireEvent.change(titleInputelement, {
      target: { value: note.title },
    });
    fireEvent.change(descriptionInputelement, {
      target: { value: note.description },
    });
    fireEvent.click(submitButton);
  }
};

describe("NoteApp", () => {
  it("should empty input after submit", () => {
    render(<NoteApp sortBy={"latest"} />);

    const titleInputelement = screen.getByPlaceholderText("Note title");
    addNote([{ title: "title1", description: "description1" }]);

    expect(titleInputelement.value).toBe("");
  });
  it(" should add multy note", () => {
    render(
      <NoteContextProvider>
        <NoteApp sortBy={"latest"} />
      </NoteContextProvider>
    );
    // render(<NoteApp sortBy={"latest"} />);
    addNote([
      { title: "title", description: "description1" },
      { title: "title", description: "description2" },
    ]);
    const divElements = screen.getAllByText(/title/i);
    expect(divElements.length).toBe(2);
  });
  it(" should not have note item with complete class in initial render", () => {
    render(
      <NoteContextProvider>
        <NoteApp sortBy={"latest"} />
      </NoteContextProvider>
    );
    // render(<NoteApp sortBy={"latest"} />);
    addNote([{ title: "title", description: "description1" }]);
    const divElements = screen.getByTestId(/note-item/i);
    expect(divElements).not.toHaveClass("completed");
  });
  it(" should have note item with complete class when check input", () => {
    render(
      <NoteContextProvider>
        <NoteApp sortBy={"latest"} />
      </NoteContextProvider>
    );
    // render(<NoteApp sortBy={"latest"} />);
    addNote([{ title: "title", description: "description1" }]);
    const divElements = screen.getByTestId(/note-item/i);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(divElements).toHaveClass("completed");
  });
});
