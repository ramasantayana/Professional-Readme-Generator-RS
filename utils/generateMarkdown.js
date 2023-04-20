// *DONE*TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license !== "None") {
    badge = `![License](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
  return badge;
}

// *DONE* TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  if (license !== 'None') {
    link = `\n* [License](#license)\n`;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  let lic = ''
if (license !== 'None') {
    lic = `## License

This project is licensed under the ${license} license.`;
  }
  return lic;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

${data.installationInstructions}

## Usage

${data.usageInformation}

${renderLicenseSection(data.license)}

## Contributing

${data.contributionGuidelines}

## Tests

${data.testInstructions}

## Questions

For any questions about this project, open an issue or contact me directly at ${
    data.email
  }. You can find more of my other projects at [${data.git_hub}](https://github.com/${
    data.git_hub
  }/).

`;
}

module.exports = generateMarkdown;
