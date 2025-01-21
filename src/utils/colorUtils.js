// Generate a random hex color
function randomHex() {
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

// Generate a descriptive name for the gradient
function generateGradientName(colors) {
  const themes = ['Sky', 'Ocean', 'Forest', 'Sunset', 'Dawn', 'Dusk', 'Aurora', 
    'Cosmic', 'Desert', 'Mountain', 'River', 'Beach', 'Galaxy', 'Rainbow', 
    'Crystal', 'Arctic', 'Tropical', 'Mystic', 'Dream', 'Fantasy'];
  
  const adjectives = ['Deep', 'Bright', 'Soft', 'Vivid', 'Gentle', 'Rich', 
    'Warm', 'Cool', 'Fresh', 'Dark', 'Light', 'Glowing', 'Radiant', 'Peaceful', 
    'Wild', 'Calm', 'Fierce', 'Subtle', 'Bold', 'Serene'];

  const theme = themes[Math.floor(Math.random() * themes.length)];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const number = Math.floor(Math.random() * 100) + 1;

  return `${adjective} ${theme} ${number}`;
}

export function generateGradients(count) {
  const gradients = new Set(); // Use Set to ensure unique combinations

  while (gradients.size < count) {
    const gradient = {
      name: '',
      colors: [randomHex(), randomHex()]
    };
    
    // Generate a unique name
    let name;
    do {
      name = generateGradientName(gradient.colors);
    } while ([...gradients].some(g => g.name === name));
    
    gradient.name = name;
    
    // Convert to string for Set comparison
    const gradientStr = JSON.stringify(gradient);
    gradients.add(gradient);
  }

  return [...gradients];
}