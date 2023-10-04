#!/usr/bin/node

// Import the mock data generation function for headlines
const generateMockNewsData = require('../../mock-data/news-headlines-data.js')

// Function to extract news headlines using regex
function extractHeadlines (apiResponse) {
  const regex = /(.+): (.+)/
  const matches = apiResponse.match(regex)

  if (matches) {
    const headline = matches[1]
    const subheader = matches[2]
    return {
      headline,
      subheader
    }
  } else {
    return null // No match found
  }
}

// Generate mock news data
const mockNewsData = generateMockNewsData()

// Simulate using mock data in the headlines file
const extractedHeadlines = extractHeadlines(mockNewsData)

// Log the extracted headlines
console.log('Extracted Headlines:', extractedHeadlines)

module.exports = extractHeadlines // Export the function
