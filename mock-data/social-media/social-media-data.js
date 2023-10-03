// Import Faker.js
const faker = require('faker');

// Generate mock social media data
function generateMockSocialMediaData() {
    const username = `@${faker.internet.userName()}`;
    return username;
}

module.exports = generateMockSocialMediaData;
