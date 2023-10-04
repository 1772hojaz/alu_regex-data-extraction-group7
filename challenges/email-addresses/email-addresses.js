#!/usr/bin/node

// Import the mock data generation function for email addresses
const generateMockEmailData = require('../../mock-data/email-addresses-data.js')

// Function to extract email addresses using regex
function extractEmailAddresses (apiResponse) {
  // Regular expression for extracting email addresses
  const regex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/g
  const matches = apiResponse.match(regex)

  if (matches) {
    return matches
  } else {
    return null // No email addresses found
  }
}

// Generate mock email data
const mockEmailData = generateMockEmailData()

// Simulate using mock data in the email addresses file
const extractedEmailAddresses = extractEmailAddresses(mockEmailData)

// Log the extracted email addresses
console.log('Extracted Email Addresses:', extractedEmailAddresses)

module.exports = extractEmailAddresses // Export the function
