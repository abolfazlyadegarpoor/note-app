import { useNoteContext } from "../../store/NoteContext";
import Message from "../Message/Message";

const NoteStatus = () => {
  const { notes } = useNoteContext();
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  const openNotes = allNotes - completedNotes;
  if (allNotes === 0) {
    return <Message icon="📛" text="note dosnt exist" />;
  }
  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        Open <span>{openNotes}</span>
      </li>
    </ul>
  );
};

export default NoteStatus;
