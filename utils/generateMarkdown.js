// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string

function renderLicenseBadge(license) {
  if (license == '') {
    return '';
  }
  return `![License: ](https://img.shields.io/badge/License-${license}-blueviolet.svg)`
}

// Function that returns the license link for the table of contents
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (license == '') {
    console.log("None");
    return '';
  }
  console.log(license);
  return `[License](#license)`;
}

// Function that creates and returns the license section of the README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (license == '') {
    console.log('');
    return '';
  }
  console.log(license);
  return `## License
    
  This project is licensed under the terms of the ${license} license.
  
  `;
}


// Function to generate markdown for the README file
function generateMarkdown(data) {
  return `# ${data.title}       ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions, please contact me via email at ${data.email}.

  Visit my GitHub page at [${data.githubUserName}](https://github.com/${data.githubUserName}/)!
`;
}

module.exports = generateMarkdown;
