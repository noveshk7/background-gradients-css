import React from 'react';

export function GradientInfo({ gradient, showCopied, onCopy }) {
  return (
    <div className="gradient-info">
      <h2>{gradient.name}</h2>
      <button 
        className="copy-button" 
        onClick={onCopy}
        title="Copy gradient CSS"
      >
        {showCopied ? 'Copied!' : 'Copy CSS'}
      </button>
    </div>
  );
}