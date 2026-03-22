import { useState, useEffect } from "react";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import EmptyState from "./components/EmptyState";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("live-notes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("live-notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const note = {
      id: crypto.randomUUID(),
      text: text.trim(),
      createdAt: new Date().toISOString(),
    };
    setNotes((prev) => [note, ...prev]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect x="2" y="2" width="18" height="18" rx="5" fill="currentColor" opacity="0.12"/>
              <path d="M6 7h10M6 11h7M6 15h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            <span>Live Notes</span>
          </div>
          {notes.length > 0 && (
            <span className="note-count">{notes.length} {notes.length === 1 ? "note" : "notes"}</span>
          )}
        </div>
      </header>
      <main className="main">
        <NoteInput onAdd={addNote} />
        {notes.length === 0 ? <EmptyState /> : <NoteList notes={notes} onDelete={deleteNote} />}
      </main>
    </div>
  );
}

export default App;