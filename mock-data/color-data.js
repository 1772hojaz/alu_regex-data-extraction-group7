// Import Faker.js
const faker = require('faker');

// Generate mock RGB color data
function generateMockColorData() {
    // Generate random RGB values
    const red = faker.random.number(255);
    const green = faker.random.number(255);
    const blue = faker.random.number(255);

    // For the file to return fixed RGB values instead of random ones
    // Return a specific RGB color (e.g., red)
    // const mockColorData = 'rgb(255, 0, 0)';


    return `rgb(${red}, ${green}, ${blue})`;
}

module.exports = generateMockColorData;
