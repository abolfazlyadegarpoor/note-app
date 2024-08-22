import { useNoteContext } from "../../store/NoteContext";

const NoteList = (props) => {
  const { notes, dispatchNotes } = useNoteContext();
  let sortedNoteList;
  switch (props.sortBy) {
    case "latest":
      sortedNoteList = [...notes];
      break;
    case "newest":
      sortedNoteList = [...notes];
      sortedNoteList.reverse();
      break;
    case "completed":
      sortedNoteList = [...notes.filter((note) => note.completed)];
      break;
  }
  const noteList = sortedNoteList.map((note) => {
    return (
      <NoteItem
        key={note.id}
        {...note}
        onRemove={dispatchNotes.bind(null, {
          type: "REMOVE",
          payload: { noteId: note.id },
        })}
        onComplete={dispatchNotes.bind(null, {
          type: "COMPLETE",
          payload: { noteId: note.id },
        })}
      />
    );
  });
  return <div className="note-list">{noteList}</div>;
};

export default NoteList;

const NoteItem = (props) => {
  return (
    <div
      data-testid="note-item"
      className={`note-item ${props.completed ? "completed" : ""}`}
    >
      <div className="note-item__header">
        <div>
          <div className="title">{props.title}</div>
          <p className="desc">{props.description}</p>
        </div>
        <div className="actions">
          <button onClick={props.onRemove}>❌</button>
          <input
            type="checkbox"
            name={props.id}
            id={props.id}
            checked={props.completed}
            onChange={props.onComplete}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(props.createdAt).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </div>
    </div>
  );
};
