const fs = require('fs');

const filePath = 'd:\\aman\\stripe-clone\\stripe-clone\\components\\StripeProducts.tsx';
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const startIndex = lines.findIndex(l => l.startsWith('function AnimatedGridBackground() {'));
const endIndex = lines.findIndex(l => l.startsWith('export default function StripeProducts() {'));

if (startIndex !== -1 && endIndex !== -1) {
  lines.splice(startIndex, endIndex - startIndex);
} else {
  console.error("Could not find the bounds to slice.");
}

const importIndex = lines.findIndex(l => l.includes('lucide-react";'));
if (importIndex !== -1) {
  lines.splice(importIndex + 1, 0, '\nimport AnimatedGridBackground from "./AnimatedGridBackground";', 'import FeatureCard from "./FeatureCard";');
}

fs.writeFileSync(filePath, lines.join('\n'));
console.log('Successfully updated StripeProducts.tsx');
