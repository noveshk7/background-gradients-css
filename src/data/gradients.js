import { generateGradients } from '../utils/colorUtils';

// Predefined gradients for consistent starting point
const predefinedGradients = [
  {
    name: "Cosmic Fusion",
    colors: ["#ff00cc", "#333399"]
  },
  {
    name: "Deep Ocean",
    colors: ["#2E3192", "#1BFFFF"]
  },
  {
    name: "Sunset Vibes",
    colors: ["#FF512F", "#F09819"]
  },
  {
    name: "Northern Lights",
    colors: ["#43cea2", "#185a9d"]
  },
  {
    name: "Purple Bliss",
    colors: ["#360033", "#0b8793"]
  }
];

// Generate remaining gradients to reach 1000
const generatedGradients = generateGradients(995);

// Combine predefined and generated gradients
export const gradients = [...predefinedGradients, ...generatedGradients];