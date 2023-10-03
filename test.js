// Test Case for color challenge file
const assert = require('assert'); // Include Node.js assert module

const extractColorInfo = require('./challenges/colors/colors.js'); // Import color extraction function

describe('Color Extraction', () => {
    it('should correctly extract RGB color values', () => {
        const mockColorData = 'rgb(255, 0, 0)';
        const extractedData = extractColorInfo(mockColorData);
        const expectedData = { red: 255, green: 0, blue: 0 };

        assert.deepStrictEqual(extractedData, expectedData);
    });

    it('should handle invalid color data', () => {
        const mockColorData = 'invalid-color-data';
        const extractedData = extractColorInfo(mockColorData);

        assert.strictEqual(extractedData, null); // No match found
    });
});
