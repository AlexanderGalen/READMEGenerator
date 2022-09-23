// include our dependencies
let inquirer = require("inquirer");
let fs = require("fs");
const { title } = require("process");

// an array of questions to prompt the user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Input the title of your README',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Input the description of your repository',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Input the installation instructions for your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license you wish to use for your project',
        choices: ["MIT","Apache", "GNU"],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Describe how to contribute to your repository',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe how to test your project',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Input a link to your github account',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Input your email address',
    },


];

// function to generate markdown using user input
function generateMarkdown(answers) {

}

// function to write README file
function writeToFile(fileName, data) {
    outputDir = "output/"
    fs.writeFile(outputDir + fileName, data, (err) => {
        console.log(err);
    });

}

// TODO: function to initialize app
function init() {

    // use inquire to prompt user for questions to use in readme
    inquirer.prompt(questions)
    .then((answers) => {
        // create base readme markdown with input data via template literal
        let markdownContent = generateMarkdown(answers);

         // create and append table of contents with internal links to other parts of the readme
         
         // write our markdown to a file
        writeToFile("README.md", markdownContent, (err) => {
            err ? console.log(err) : console.log("Sucessfully saved readme in output dir");
        });
        // end execution with code 0 for success
        return 0;

    })
    

}

// Function call to initialize app
init();
