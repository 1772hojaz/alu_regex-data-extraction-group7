// Import the mock data generation function for color
const generateMockColorData = require('../../mock-data/color-data.js');

// Suppress deprecation warnings
// process.env.NODE_NO_WARNINGS = 1;

// Function to extract RGB color values using regex
function extractColorInfo(apiResponse) {
    const regex = /rgb\((\d+), (\d+), (\d+)\)/;
    const matches = apiResponse.match(regex);

    if (matches) {
        const red = matches[1];
        const green = matches[2];
        const blue = matches[3];
        return {
            red: parseInt(red),
            green: parseInt(green),
            blue: parseInt(blue),
        };
    } else {
        return null; // No match found
    }
}

// Generate mock color data
const mockColorData = generateMockColorData();

// Extract color data
const extractedData = extractColorInfo(mockColorData);

// Log the extracted data
console.log('Extracted Data:', extractedData); // Modified to log extractedData

module.exports = extractColorInfo; // Export the function
