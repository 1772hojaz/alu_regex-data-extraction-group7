// Import the mock data generation function
const generateMockColorData = require('./mock-data/colors/mock-color-data.js');

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

const apiResponse = generateMockColorData();
const colorData = extractColorInfo(apiResponse);
console.log("Color Data:", colorData);
// module.exports = extractColorInfo;
