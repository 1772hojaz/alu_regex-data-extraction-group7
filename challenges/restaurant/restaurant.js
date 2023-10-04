#!/usr/bin/node

// Import Faker.js
const faker = require('faker')

// Function to extract restaurant data
function extractRestaurantData (apiResponse) {
  const regex = /([A-Z][a-zA-Z\s-]+) - ([a-zA-Z\s]+)/ // A pattern for restaurant name and cuisine
  const match = apiResponse.match(regex)

  if (match) {
    const name = match[1]
    const cuisine = match[2]
    const extractedData = { name, cuisine }
    console.log('Extracted Restaurant Data:', extractedData)
    return extractedData
  } else {
    console.log('No restaurant data found.')
    return null // No match found
  }
}

module.exports = extractRestaurantData
