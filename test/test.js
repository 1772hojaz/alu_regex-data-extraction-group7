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

// Test Case for event info challenge file
const extractEventInfo = require('../challenges/event-infos/event-info.js'); // Import event info extraction function

describe('Event Info Extraction', () => {
    it('should correctly extract event info', () => {
        const mockEventData = 'Oct 15, 2023, 03:30 PM';
        const extractedEventInfo = extractEventInfo(mockEventData);
        const expectedEventInfo = 'Oct 15, 2023, 03:30 PM';

        assert.strictEqual(extractedEventInfo, expectedEventInfo);
    });

    it('should handle no event info found', () => {
        const mockEventData = 'No event info in this text.';
        const extractedEventInfo = extractEventInfo(mockEventData);

        assert.strictEqual(extractedEventInfo, null); // No event info found
    });
});

// Test Case for news headlines challenge file
const extractHeadlines = require('../challenges/headlines/headlines.js'); // Import headlines extraction function

describe('Headlines Extraction', () => {
    it('should correctly extract news headlines', () => {
        const mockNewsData = 'Breaking News: A Major Event in the World';
        const extractedHeadlines = extractHeadlines(mockNewsData);
        const expectedHeadlines = {
            headline: 'Breaking News',
            subheader: 'A Major Event in the World',
        };

        assert.deepStrictEqual(extractedHeadlines, expectedHeadlines);
    });

    it('should handle no headlines found', () => {
        const mockNewsData = 'No headlines in this text.';
        const extractedHeadlines = extractHeadlines(mockNewsData);

        assert.strictEqual(extractedHeadlines, null); // No headlines found
    });
});

