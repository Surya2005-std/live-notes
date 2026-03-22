import { useState, useRef } from "react";

function NoteInput({ onAdd }) {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  const handleSubmit = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText("");
    textareaRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="input-bar">
      <textarea
        ref={textareaRef}
        className="input-field"
        placeholder="Write a note… (Enter to add)"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={1}
      />
      <button
        className={`add-btn ${text.trim() ? "active" : ""}`}
        onClick={handleSubmit}
        disabled={!text.trim()}
        aria-label="Add note"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
}

export default NoteInput;