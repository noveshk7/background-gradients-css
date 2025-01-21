// Helper functions for color matching
export function isColorMatch(searchTerm, color, variations) {
  const term = searchTerm.toLowerCase();
  if (term === color) return true;
  return variations.some(variation => 
    term.includes(variation.toLowerCase()) || 
    variation.toLowerCase().includes(term)
  );
}

export function findMatchingColors(searchTerm, colors) {
  return Object.entries(colors).filter(([color, variations]) => 
    isColorMatch(searchTerm, color, variations)
  );
}

export function containsColorReference(text, color, variations) {
  const lowerText = text.toLowerCase();
  return lowerText.includes(color) || 
         variations.some(v => lowerText.includes(v.toLowerCase()));
}

// New function to check if a hex color is in a specific color family
export function isColorInFamily(hexColor, colorName) {
  const colorRanges = {
    red: (r, g, b) => r > 150 && g < 100 && b < 100,
    blue: (r, g, b) => b > 150 && r < 100 && g < 100,
    green: (r, g, b) => g > 150 && r < 100 && b < 100,
    yellow: (r, g, b) => r > 150 && g > 150 && b < 100,
    purple: (r, g, b) => r > 100 && b > 150 && g < 100,
    orange: (r, g, b) => r > 150 && g > 100 && b < 50,
    pink: (r, g, b) => r > 150 && g < 150 && b > 100,
    brown: (r, g, b) => r > 100 && g < 150 && b < 100,
    white: (r, g, b) => r > 200 && g > 200 && b > 200,
    black: (r, g, b) => r < 50 && g < 50 && b < 50,
    gray: (r, g, b) => Math.abs(r - g) < 30 && Math.abs(g - b) < 30 && Math.abs(r - b) < 30,
    aqua: (r, g, b) => g > 150 && b > 150 && r < 100
  };

  // Convert hex to RGB
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  return colorRanges[colorName]?.(r, g, b) || false;
}