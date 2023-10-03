// Function to extract social media usernames
function extractSocialMediaInfo(apiResponse) {
    const regex = /@([A-Za-z0-9_]+)/;
    const matches = apiResponse.match(regex);

    if (matches) {
        return matches[1];
    } else {
        return null; // No match found
    }
}

module.exports = extractSocialMediaInfo;
