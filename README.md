# Regex - Onboarding Hackathon

Welcome to the "Regex - Onboarding Hackathon" project! This project is a part of the onboarding process for our team and is designed to help you learn and practice data extraction using regular expressions in JavaScript.

![Project Preview](./Images/page-overview.png)

## Table of Contents

- [Get Started](#get-started)
- [Repository Structure](#repository-structure)
- [Project Overview](#project-overview)
- [Challenges](#challenges)
- [Implementation](#implementation)
- [Testing](#testing)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact Information](#contact-information)

## Get Started

1. Clone this repository: `https://github.com/1772hojaz/alu_regex-data-extraction-group7.git`

2. Choose your preferred JavaScript code editor or IDE to work on the project (We recommend VS Code preferably).

3. Navigate to the project directory: cd `alu_regex-data-extraction-group7`

4. Install the latest versions of these dependencies: `node.js`, `npm` or `nvm` and `mocha` if your machine is not up-to-date.

5. Start implementing and testing the data extraction functions.

6. Have fun and happy coding!

## Repository Structure

- `challenges`: This folder contains the code for all challenges, including the functions for data extraction.
- `mock-data`: This folder contains subfolders of the mock data files that `faker.js` generated.
- `test.js`: You can write your test cases and conduct testing in this file.
- `README.md`: You're currently reading it! This document provides an overview of the project.

## Project Overview

You have just graduated with a degree in computer science and landed your first job as a Junior Software Engineer at a startup building a new social media app. The app aggregates data from different sources and displays it to users in a personalized feed. The backend engineering team has built an API that pulls in data from various sources like news outlets, social networks, blogs, etc., but the data is raw and unstructured. Your task is to write scripts to extract and structure specific kinds of data from the raw API responses.

## Challenges

There are 8 challenges in this project and they are the data types the product team needs to extract:

1. Restaurant names and cuisines
2. Ingredient lists from recipes
3. RGB color values
4. Social media usernames
5. Product codes
6. News headlines
7. Event dates and times
8. Email addresses

![RGB color values challenge](./Images/color-challenge-file.png)

## Implementation

We are using JavaScript for implementation. In the code, we created functions to extract data for each challenge based on the provided patterns. Regular expressions will be our primary tool for data extraction.

## Testing

To ensure the correctness of our functions, we created test cases for each challenge. We tested our functions with different API responses, including valid data, edge cases, and cases where no matches are found. Manual testing and automated testing using JavaScript testing frameworks are both encouraged and we did use them.

![Test File](./Images/test-file.png)

## Usage

For each challenge, we used the provided functions to extract data from raw API responses. Here's a basic structure for using the functions:

```javascript
const apiResponse = "Raw API Response Data";
const extractedData = extractDataFunction(apiResponse);
console.log(extractedData);
```

## Contributions

Contributions are welcome! If you have any suggestions or improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [African Leadership University, ALU Rwanda].

## Acknowledgments

This project used external libraries and it is inspired by real-world data extraction challenges often encountered in software development. We hope it helps you sharpen your regular expression and data extraction skills when you try it :)

## Contact Information

For inquiries and support, feel free to contact our team at [e.adewusi@alustudent.com].

![Full Test File](./Images/code.png)
