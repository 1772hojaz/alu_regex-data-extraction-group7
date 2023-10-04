// Import Faker.js
const faker = require('faker')

// Generate mock email addresses
function generateMockEmailData () {
  const email = faker.internet.email()
  return email
}

module.exports = generateMockEmailData
