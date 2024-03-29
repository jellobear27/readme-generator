// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  // Define badge URLs or SVGs for each license
  const licenseBadges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "APACHE2.0":
      "[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  };

  // Return the badge corresponding to the provided license, or an empty string if not found
  return licenseBadges[license] || "";
}

function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  const licenseLinks = {
    MIT: "https://opensource.org/licenses/MIT",
    "APACHE2.0": "https://opensource.org/licenses/Apache-2.0",
  };

  return licenseLinks[license] || "";
}

function renderLicenceSection() {
  return `
    ## License
    
    This project is licensed under the [${license} License](${renderLicenseLink(
    license
  )}).
    `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.name}
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Contact-Me
* Name - ${data.name}
* Email - ${data.email}
* Github - [${data.creator}](https:github.com/${data.creator}/)

## Testing
\`\`\`
${data.test}


## Credits

${data.credits}

`;
}

module.exports = generateMarkdown;
