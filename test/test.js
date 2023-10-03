const assert = require('assert'); // Include Node.js assert module

// Test Case for color challenge file
const extractColorInfo = require('../challenges/colors/colors.js'); // Import color extraction function

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

// Test Case for email addresses challenge file
const extractEmailAddresses = require('../challenges/email-addresses/email-addresses.js'); // Import email address extraction function

describe('Email Address Extraction', () => {
    it('should correctly extract email addresses', () => {
        const mockEmailData = 'user@example.com, test123@gmail.com, info@company.co';
        const extractedEmailAddresses = extractEmailAddresses(mockEmailData);
        const expectedEmailAddresses = ['user@example.com', 'test123@gmail.com', 'info@company.co'];

        assert.deepStrictEqual(extractedEmailAddresses, expectedEmailAddresses);
    });

    it('should handle no email addresses found', () => {
        const mockEmailData = 'This is some random text without email addresses';
        const extractedEmailAddresses = extractEmailAddresses(mockEmailData);

        assert.strictEqual(extractedEmailAddresses, null); // No email addresses found
    });
});
