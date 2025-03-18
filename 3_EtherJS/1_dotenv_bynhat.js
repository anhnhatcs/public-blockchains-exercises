// Import the dotenv package
require('dotenv').config();

// Now you can access environment variables via process.env
console.log('Environment variables loaded successfully');

// Print out specific environment variables
console.log('ALCHEMY_KEY:', process.env.ALCHEMY_KEY);

// If you want to print all environment variables (be careful with sensitive data)
// console.log('All env variables:', process.env);