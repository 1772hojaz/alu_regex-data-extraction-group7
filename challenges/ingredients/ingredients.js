#!/usr/bin/node

// Import the mock data generation function for ingredients
const generateMockIngredientData = require('../../mock-data/ingredient-data.js')

// Function to extract ingredients using regex
function extractIngredients (apiResponse) {
  // Split the ingredients by comma and remove any leading/trailing whitespace
  const ingredientsList = apiResponse.split(',').map((ingredient) => ingredient.trim())
  return ingredientsList
}

// Generate mock ingredient data
const mockIngredientData = generateMockIngredientData()

// Simulate using mock data in the ingredients file
const extractedIngredients = extractIngredients(mockIngredientData)

// Log the extracted ingredients
console.log('Extracted Ingredients:', extractedIngredients)

module.exports = extractIngredients // Export the function
