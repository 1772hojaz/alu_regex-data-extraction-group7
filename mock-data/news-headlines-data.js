// Import Faker.js
const faker = require('faker');

// Generate mock news headlines
function generateMockNewsData() {
    const headline = faker.lorem.sentence();
    const subheader = faker.lorem.words(3);
    return `${headline}: ${subheader}`;
}

module.exports = generateMockNewsData;
