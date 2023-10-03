// Import Faker.js
const faker = require('faker');

// Generate mock color data
function generateMockColorData() {
    const color = faker.commerce.color();
    return `rgb(${faker.random.number(255)}, ${faker.random.number(255)}, ${faker.random.number(255)})`;
}

module.exports = generateMockColorData;
