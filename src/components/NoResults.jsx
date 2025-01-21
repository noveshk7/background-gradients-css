import React from 'react';

export function NoResults({ searchTerm }) {
  return (
    <div className="no-results">
      <h2>No gradients found for "{searchTerm}"</h2>
      <p>Try searching for:</p>
      <ul>
        <li>Basic colors (e.g., "blue", "red", "green")</li>
        <li>Color variations (e.g., "navy", "crimson", "emerald")</li>
        <li>Themes (e.g., "sunset", "ocean", "forest")</li>
        <li>Moods (e.g., "calm", "vivid", "bold")</li>
      </ul>
    </div>
  );
}