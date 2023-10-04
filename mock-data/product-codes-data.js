// Import Faker.js
const faker = require('faker')

// Generate mock product codes
function generateMockProductData () {
  const code = `${faker.random.alpha().toUpperCase()}${faker.random.alpha().toUpperCase()}${faker.random.number(999)}`
  return code
}

module.exports = generateMockProductData
