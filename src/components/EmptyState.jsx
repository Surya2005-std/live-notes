function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-icon">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="6" y="6" width="28" height="28" rx="8" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
          <path d="M13 15h14M13 20h9M13 25h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.4"/>
        </svg>
      </div>
      <p className="empty-title">No notes yet</p>
      <p className="empty-sub">Type something above and press Enter</p>
    </div>
  );
}

export default EmptyState;
