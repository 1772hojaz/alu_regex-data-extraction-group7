// Import Faker.js
const faker = require('faker');

// Generate mock event dates and times
function generateMockEventData() {
    const date = faker.date.future();
    return `${date.toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })}`;
}

module.exports = generateMockEventData;
