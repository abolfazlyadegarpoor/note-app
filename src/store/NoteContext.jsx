import { createContext, useContext, useReducer } from "react";

const INITIAL_NOTE = [];
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD":
      return state.concat(payload.newNote);

    case "REMOVE":
      return state.filter((note) => note.id !== payload.noteId);

    case "COMPLETE":
      return state.map((note) =>
        note.id === payload.noteId
          ? { ...note, completed: !note.completed }
          : { ...note }
      );

    default:
      return state;
  }
};

export const NoteContext = createContext({
  notes: [],
  dispatchNotes: (dispatchType) => {},
});

export const NoteContextProvider = ({ children }) => {
  const [notes, dispatchNotes] = useReducer(reducer, INITIAL_NOTE);
  return (
    <NoteContext.Provider value={{ notes, dispatchNotes }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => {
  return useContext(NoteContext);
};
