// ⬇︎ --- GUIDELINES THAT CAME WITH STARTER CODE (#'s MATCH TO WORKING CODE BELOW) --- ⬇︎

// TODO - (1): Include packages needed for this application

// // TODO - (2): Create an array of questions for user input
// const questions = [];

// // TODO - (3): Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO - (4): Create a function to initialize app
// function init() {}

// // (5) - Function call to initialize app
// init();

// ⬆︎ --- GUIDELINES THAT CAME WITH STARTER CODE (#'s MATCH TO WORKING CODE BELOW)  --- ⬆︎
// ——―——————————―——————————―——————————―——————————―——————————―————————


// (1) - ⬇︎ PACKAGES & VARIABLES
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");


// (2): USER QUESTIONS PROMPT
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title!");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "description",
    message: "Include a description of your project:",
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please include a description!");
        return false;
      }
    }
  },
  {
    type: "checkbox",
    name: "languages",
    message: "What was used to build this project? Select all that apply.",
    choices: ["HTML", "CSS", "JavaScript"],
    validate: languagesInput => {
      if (languagesInput) {
        return true;
      } else {
        console.log("Please select at least one option!");
        return false;
      }
    }
  },
  {
    type: "confirm",
    name: "confirmOtherBuiltWith",
    message: "Would you like add anything else to the 'Built With:' section?",
    default: false
  },
  {
    type: "input",
    name: "otherBuiltWith",
    message: "Please enter them each seperated by a comma:",
    when: ({ confirmOtherBuiltWith }) => {
      if (confirmOtherBuiltWith) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?", // (Provide a step-by-step description of how to get the development environment running.)
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please provide the installation instructions!");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "usage",
    message: "How does someone use the app? (instructions)",
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please provide the usage instructions!");
        return false;
      }
    }
  },
  {
    type: "confirm",
    name: "confirmCredit",
    message: "Would you like to provide credit or add contributors to this project?",
    default: true
  },
  {
    type: "input",
    name: "credit",
    message: "Please enter credit and/or contributors:",
    when: ({ confirmCredit }) => {
      if (confirmCredit) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license:",
    choices: ["MIT", "GPL", "Apache", "none"],
    validate: licenseInput => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Please select an option!");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "tests",
    message: "What commands are used to run tests? (if none please enter 'N/A') ",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your github username!");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please provide your email address!");
        return false;
      }
    }
  },
];




// TODO - (3): CREATE A FUNCTION TO WRITE README FILE
function writeToFile(fileContent) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", fileContent, err => {
      if (err) {
        reject(err);
        return
      } resolve({
        ok: true,
        message: "File Created!"
      });
    });
  });
};




// TODO - (4): CREATE A FUNCTION TO INITIALIZE APP
function init() {
  inquirer.prompt(questions)
    .then(function (userInput) {
      console.log(userInput);
      var readmeData = generateMarkdown(userInput);
      writeToFile(readmeData);
    });
  };



// (5) - CALL THE FUNCTION TO INITIALIZE APP
init();



// ——―——————————―——————————―——————————―——————————―——————————―————————



