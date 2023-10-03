// Import Faker.js
const faker = require('faker');

// Generate mock RGB color data
function generateMockColorData() {
    // Generate random RGB values
    const red = faker.random.number(255);
    const green = faker.random.number(255);
    const blue = faker.random.number(255);

    return `rgb(${red}, ${green}, ${blue})`;
}

module.exports = generateMockColorData;
