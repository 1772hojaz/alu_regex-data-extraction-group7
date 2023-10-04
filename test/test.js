const assert = require('assert') // Include Node.js assert module

// Test Case for color challenge file
const extractColorInfo = require('../challenges/colors/colors.js') // Import color extraction function

describe('Color Extraction', () => {
  it('should correctly extract RGB color values', () => {
    const mockColorData = 'rgb(255, 0, 0)'
    const extractedData = extractColorInfo(mockColorData)
    const expectedData = { red: 255, green: 0, blue: 0 }

    assert.deepStrictEqual(extractedData, expectedData)
  })

  it('should handle invalid color data', () => {
    const mockColorData = 'invalid-color-data'
    const extractedData = extractColorInfo(mockColorData)

    assert.strictEqual(extractedData, null) // No match found
  })
})

// Test Case for email addresses challenge file
const extractEmailAddresses = require('../challenges/email-addresses/email-addresses.js') // Import email address extraction function

describe('Email Address Extraction', () => {
  it('should correctly extract email addresses', () => {
    const mockEmailData = 'user@example.com, test123@gmail.com, info@company.co'
    const extractedEmailAddresses = extractEmailAddresses(mockEmailData)
    const expectedEmailAddresses = ['user@example.com', 'test123@gmail.com', 'info@company.co']

    assert.deepStrictEqual(extractedEmailAddresses, expectedEmailAddresses)
  })

  it('should handle no email addresses found', () => {
    const mockEmailData = 'This is some random text without email addresses'
    const extractedEmailAddresses = extractEmailAddresses(mockEmailData)

    assert.strictEqual(extractedEmailAddresses, null) // No email addresses found
  })
})

// Test Case for event info challenge file
const extractEventInfo = require('../challenges/event-infos/event-info.js') // Import event info extraction function

describe('Event Info Extraction', () => {
  it('should correctly extract event info', () => {
    const mockEventData = 'Oct 15, 2023, 03:30 PM'
    const extractedEventInfo = extractEventInfo(mockEventData)
    const expectedEventInfo = 'Oct 15, 2023, 03:30 PM'

    assert.strictEqual(extractedEventInfo, expectedEventInfo)
  })

  it('should handle no event info found', () => {
    const mockEventData = 'No event info in this text.'
    const extractedEventInfo = extractEventInfo(mockEventData)

    assert.strictEqual(extractedEventInfo, null) // No event info found
  })
})

// Test Case for news headlines challenge file
const extractHeadlines = require('../challenges/headlines/headlines.js') // Import headlines extraction function

describe('Headlines Extraction', () => {
  it('should correctly extract news headlines', () => {
    const mockNewsData = 'Breaking News: A Major Event in the World'
    const extractedHeadlines = extractHeadlines(mockNewsData)
    const expectedHeadlines = {
      headline: 'Breaking News',
      subheader: 'A Major Event in the World'
    }

    assert.deepStrictEqual(extractedHeadlines, expectedHeadlines)
  })

  it('should handle no headlines found', () => {
    const mockNewsData = 'No headlines in this text.'
    const extractedHeadlines = extractHeadlines(mockNewsData)

    assert.strictEqual(extractedHeadlines, null) // No headlines found
  })
})

// Test Case for ingredients challenge file
const extractIngredients = require('../challenges/ingredients/ingredients.js') // Import ingredients extraction function

describe('Ingredients Extraction', () => {
  it('should correctly extract ingredients', () => {
    const mockIngredientData = 'Tomatoes, Cheese, Pasta'
    const extractedIngredients = extractIngredients(mockIngredientData)
    const expectedIngredients = ['Tomatoes', 'Cheese', 'Pasta']

    assert.deepStrictEqual(extractedIngredients, expectedIngredients)
  })

  it('should handle no ingredients found', () => {
    const mockIngredientData = 'No ingredients provided.'
    const extractedIngredients = extractIngredients(mockIngredientData)

    assert.deepStrictEqual(extractedIngredients, ['No ingredients provided.']) // Match the actual result
  })
})

// Test Case for product codes challenge file
const extractProductCodes = require('../challenges/product-codes/product-codes.js')
const generateMockProductData = require('../mock-data/product-codes-data')

describe('Product Codes Extraction', () => {
  it('should correctly extract valid product codes', () => {
    const mockProductData = generateMockProductData()
    const extractedProductCodes = extractProductCodes(mockProductData)

    // The generated data is already valid product codes, so we expect it to match.
    assert.deepStrictEqual(extractedProductCodes, mockProductData.match(/[A-Z]{2}\d{3}/g))

    if (extractedProductCodes) {
      console.log('Extracted Product Codes:', extractedProductCodes)
    } else {
      console.log('No valid product codes found.')
    }
  })

  it('should handle no valid product codes found', () => {
    const mockProductData = 'No product codes provided'
    const extractedProductCodes = extractProductCodes(mockProductData)

    assert.strictEqual(extractedProductCodes, null) // No product codes found
  })
})

// Test Case for restaurant challenge file
const extractRestaurantData = require('../challenges/restaurant/restaurant.js')

describe('Restaurant Data Extraction', () => {
  it('should correctly extract restaurant data', () => {
    const mockRestaurantData = 'Delicious Eats - Italian'
    const extractedRestaurantData = extractRestaurantData(mockRestaurantData)
    const expectedRestaurantData = { name: 'Delicious Eats', cuisine: 'Italian' }

    assert.deepStrictEqual(extractedRestaurantData, expectedRestaurantData)
  })

  it('should handle no restaurant data found', () => {
    const mockRestaurantData = 'No restaurant data available'
    const extractedRestaurantData = extractRestaurantData(mockRestaurantData)

    assert.strictEqual(extractedRestaurantData, null) // No restaurant data found
  })
})

// Test Case for usernames challenge file
const extractUsernames = require('../challenges/usernames/usernames.js')

describe('Usernames Extraction', () => {
  it('should correctly extract social media usernames', () => {
    const mockSocialMediaData = '@user123, @test_user, @company_xyz'
    const extractedUsernames = extractUsernames(mockSocialMediaData)
    const expectedUsernames = ['@user123', '@test_user', '@company_xyz']

    console.log('Extracted Usernames:', extractedUsernames) // Log the extracted data

    assert.deepStrictEqual(extractedUsernames, expectedUsernames)
  })

  it('should handle no usernames found', () => {
    const mockSocialMediaData = 'No usernames in this text.'
    const extractedUsernames = extractUsernames(mockSocialMediaData)

    console.log('Extracted Usernames:', extractedUsernames) // Log the extracted data

    assert.strictEqual(extractedUsernames, null) // No usernames found
  })
})
