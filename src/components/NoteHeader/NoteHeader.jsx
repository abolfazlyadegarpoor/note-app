import { useNoteContext } from "../../store/NoteContext";

const NoteHeader = (props) => {
  const sortChengeHandler = (event) => {
    props.onSort(event.target.value);
  };
  const { notes } = useNoteContext();
  return (
    <div className="note-header">
      <h1>my notes:{notes.length}</h1>
      <select value={props.sortBy} onChange={sortChengeHandler}>
        <option value="latest">sort based on latest</option>
        <option value="newest">sort based on newest</option>
        <option value="completed">sort based on completed</option>
      </select>
    </div>
  );
};

export default NoteHeader;
