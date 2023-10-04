#!/usr/bin/node

// Import the mock data generation function for event info
const generateMockEventData = require('../../mock-data/event-info-data.js')

// Function to extract event info using regex
function extractEventInfo (apiResponse) {
  const regex = /(\w{3} \d{2}, \d{4}, \d{2}:\d{2} [APap][Mm])/
  const matches = apiResponse.match(regex)

  if (matches) {
    const eventInfo = matches[0]
    return eventInfo
  } else {
    return null // No match found
  }
}

// Generate mock event info data
const mockEventData = generateMockEventData()

// Simulate using mock data in the event info file
const extractedEventInfo = extractEventInfo(mockEventData)

// Log the extracted event info
console.log('Extracted Event Info:', extractedEventInfo)

module.exports = extractEventInfo // Export the function
