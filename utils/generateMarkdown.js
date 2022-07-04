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
  <details>
  <summary>Click to expand</summary>

  ### [Built With](#Built-With:)
  ### [Description](#Description)
  ### [Installation](#Installation)
  ### [Usage](#Usage)
  ### [Credit](#Credit)
  ### [Tests](#Tests)
  ### [Contact Me](#Got-Questions?)
  ### [License](#License)
  </details>

  <br/>
  
  ## **Built With:**
  + ${data.languages}
  + ${data.otherBuiltWith}


  ## **Installation** 
  ${data.installation} 

  <br/>
  
  ## **Usage**
  ${data.usage}
  
  <br/>
  
  ## **Credit**
  ${data.credit}
  
  <br/>
  
  ## **Tests**
  ${data.tests}
  
  <br/>
  
  ## **Got Questions?**
  Feel free to reach out with questions or comments regarding ${data.title}!
  
  [My GitHub Profile](https://github.com/${data.github})&nbsp; 📂  &nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;[Email Me](${data.email})&nbsp; 📧

  <br/>
  
  ## **License**
  ${data.license}
  `;
}




module.exports = generateMarkdown;
