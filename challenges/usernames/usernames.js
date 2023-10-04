#!/usr/bin/node

// Import Faker.js
const faker = require('faker');

// Function to extract social media usernames using regex
function extractUsernames(apiResponse) {
    const regex = /@(\w+)/g; // A pattern for usernames starting with '@'
    const matches = apiResponse.match(regex);

    if (matches) {
        return matches;
    } else {
        return null; // No matches found
    }
}

module.exports = extractUsernames;
