import NoteCard from "./NoteCard";

function NoteList({ notes, onDelete }) {
  return (
    <ul className="note-list">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default NoteList;