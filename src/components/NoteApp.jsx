import AddNewNote from "./AddNewNote/AddNewNote";
import NoteList from "./NoteList/NoteList";
import NoteStatus from "./NoteStatus/NoteStatus";

const NoteApp = ({ sortBy }) => {
  return (
    <div className="note-app">
      <AddNewNote />
      <div className="note-container">
        <NoteStatus />
        <NoteList sortBy={sortBy} />
      </div>
    </div>
  );
};

export default NoteApp;
