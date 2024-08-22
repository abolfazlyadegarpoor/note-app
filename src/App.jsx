import { useState } from "react";

import "./App.css";
import NoteApp from "./components/NoteApp";
import NoteHeader from "./components/NoteHeader/NoteHeader";

function App() {
  // const [notes, setNotes] = useState([]);

  const [sortBy, setSortBy] = useState("latest");

  const sortChangeHandler = (sortType) => {
    setSortBy(sortType);
  };

  return (
    <div className="container">
      <NoteHeader onSort={sortChangeHandler} sortBy={sortBy} />
      <NoteApp sortBy={sortBy} />
    </div>
  );
}

export default App;
