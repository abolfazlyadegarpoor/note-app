import { useState } from "react";
import { useNoteContext } from "../../store/NoteContext";

const AddNewNote = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const { dispatchNotes } = useNoteContext();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (noteTitle.trim().length === 0 || noteDescription.trim().length === 0) {
      return;
    }
    const newNote = {
      title: noteTitle,
      description: noteDescription,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toLocaleString(),
    };
    dispatchNotes({ type: "ADD", payload: { newNote } });
    setNoteDescription("");
    setNoteTitle("");
  };
  const titleChangeHandler = (event) => {
    setNoteTitle(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setNoteDescription(event.target.value);
  };
  return (
    <div className="add-new-note">
      <h1>Add new note</h1>
      <form className="note-form" onSubmit={formSubmitHandler}>
        <input
          value={noteTitle}
          type="text"
          className="text-field"
          placeholder="Note title"
          onChange={titleChangeHandler}
        />
        <input
          value={noteDescription}
          type="text"
          className="text-field"
          placeholder="Note description..."
          onChange={descriptionChangeHandler}
        />
        <button className="btn btn--primary">Add new note</button>
      </form>
    </div>
  );
};

export default AddNewNote;
