import { baseColors } from './colorKeywords';
import { findMatchingColors, containsColorReference, isColorInFamily } from './colorMatching';

export function searchGradients(gradients, searchTerm) {
  const term = searchTerm.toLowerCase().trim();
  
  if (!term) return gradients;

  return gradients.filter(gradient => {
    // Direct name match
    if (gradient.name.toLowerCase().includes(term)) return true;

    // Find matching colors from our color dictionary
    const matchingColors = findMatchingColors(term, baseColors);
    
    // Check if gradient name contains any of the matching colors or their variations
    const nameMatch = matchingColors.some(([color, variations]) => 
      containsColorReference(gradient.name, color, variations)
    );

    if (nameMatch) return true;

    // Check if any of the gradient's actual colors match the search term
    return matchingColors.some(([colorName]) => 
      gradient.colors.some(hexColor => isColorInFamily(hexColor, colorName))
    );
  });
}