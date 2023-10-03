// Function to extract RGB color values
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

module.exports = extractColorInfo;
