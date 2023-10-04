// Import Faker.js
const faker = require('faker')

// Generate mock ingredient data
function generateMockIngredientData () {
  // Generate a random number of ingredients (e.g., between 3 and 7)
  const numIngredients = faker.random.number({ min: 3, max: 7 })
  const ingredients = []

  for (let i = 0; i < numIngredients; i++) {
    const ingredient = faker.lorem.words(faker.random.number({ min: 1, max: 3 }))
    ingredients.push(ingredient)
  }

  return ingredients.join(', ')
}

module.exports = generateMockIngredientData
