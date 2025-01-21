import React from 'react';

export function Header({ searchTerm, onSearch }) {
  return (
    <div className="header">
      <h1>NoWay Gradients</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search gradients..."
          value={searchTerm}
          onChange={onSearch}
          onClick={(e) => e.stopPropagation()}
          aria-label="Search gradients"
        />
      </div>
    </div>
  );
}