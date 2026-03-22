import { useState } from "react";

function timeAgo(isoString) {
  const diff = Math.floor((Date.now() - new Date(isoString)) / 1000);
  if (diff < 5) return "Just now";
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return new Date(isoString).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function NoteCard({ note, onDelete }) {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    setDeleting(true);
    setTimeout(() => onDelete(note.id), 280);
  };

  return (
    <li className={`note-card ${deleting ? "removing" : ""}`}>
      <div className="note-dot" />
      <div className="note-content">
        <p className="note-text">{note.text}</p>
        <div className="note-footer">
          <span className="note-time">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{marginRight:3,verticalAlign:'middle'}}>
              <circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" strokeWidth="1"/>
              <path d="M5.5 3v2.5l1.5 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            {timeAgo(note.createdAt)}
          </span>
          <button className="delete-btn" onClick={handleDelete} aria-label="Delete note">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2 2l9 9M11 2l-9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}

export default NoteCard;