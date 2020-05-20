const fs = require("fs");
const inquirer = require("inquirer");
const dotenv = require("dotenv");

inquirer.prompt([{
    type: "input",
    name: "name",
    message: "What is your username?"

},
{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "What is your project about?"

},
{
    type: "input",
    name: "contents",
    message: "Please enter a table of contents"
},
{
    type: "input",
    name: "usage",
    message: "What is your project used for?"
},
{
    type: "checkbox",
    name: "licenses",
    message: "What type of license will you be using?",
    choices: [
        "MIT",
        "Apache",
        "GNU",
        "BSD"
    ]


},
])


const questions = []

function writeToFile() {

}

function init() {

}
init();