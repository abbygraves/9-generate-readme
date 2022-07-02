const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## **Description:**
  ${data.description}
  
  <br/>
  
  ## **Table of Contents**
  ### [Description](#Description)
  ### [Installation](#Installation)
  ### [Usage](#Usage)
  ### [License](#License)
  ### [Credit](#Credit)
  ### [Tests](#Tests)
  ### [Questions](#Questions)
  
  <br/>
  
  ## **Installation**
  ${data.installation}
  
  <br/>
  
  ## **Usage**
  ${data.usage}
  
  <br/>
  
  ## **License**
  ${data.license}
  
  <br/>
  
  ## **Credit**
  ${data.credit}
  
  <br/>
  
  ## **Tests**
  ${data.tests}
  
  <br/>
  
  ## **Questions**
  ### Github username: 
  ${data.github}
  ### Email address: 
  ${data.email}
  
  ${data.reachMe}
`;
}




module.exports = generateMarkdown;
