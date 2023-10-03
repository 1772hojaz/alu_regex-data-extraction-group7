// Import Faker.js
const faker = require('faker');

// Generate mock restaurant data
function generateMockRestaurantData() {
    const name = faker.company.companyName();
    const cuisine = faker.lorem.word();
    return `${name} - ${cuisine}`;
}

module.exports = generateMockRestaurantData;
