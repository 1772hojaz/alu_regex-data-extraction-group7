#!/usr/bin/node

// Import the mock data generation function for product codes
// const extractProductCodes = require('../../mock-data/product-codes-data.js');

// Function to extract product codes using regex
function extractProductCodes (apiResponse) {
  const regex = /[A-Z]{2}\d{3}/g // Use 'g' flag to find all matching codes
  const matches = apiResponse.match(regex)

  if (matches) {
    return matches
  } else {
    return null // No matches found
  }
}

module.exports = extractProductCodes
