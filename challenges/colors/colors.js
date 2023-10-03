// Import the mock data generation function for color
const generateMockColorData = require('./colors/mock-color-data.js');

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

// Simulate using mock data in the color file
const extractedData = extractColorInfo(mockColorData);

// Log the extracted data
console.log('Extracted Data:', extractedData);
