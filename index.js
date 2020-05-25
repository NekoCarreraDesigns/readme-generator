const fs = require("fs");
const inquirer = require("inquirer");
let generateMarkdown = require("./utils/generateMarkdown")


inquirer.prompt([{
    type: "input",
    name: "name",
    message: "What is your Github username?"

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
    choices: [//"MIT", "Apache", "GNU", "MPL"
        {
            key: "MIT",
            name: "MIT",
            url: "https://api.github.com/licenses/mit"

        },
        {
            key: "Apache",
            name: "Apache License 2.0",
            url: "https://api.github.com/licenses/apache-2.0"

        },
        {
            key: "MPL-2.0",
            name: "Mozilla Public License",
            url: "https://api.github.com/licenses/mpl-2.0"
        },
        {
            key: "GPL-3.0",
            name: "GNU General Pubic License v3.0",
            url: "https://api.github.com/licenses/gpl-3.0"
        },
    ]
},
{
    type: "input",
    name: "installation",
    message: "Are there any keys for installation?"
},
{
    type: "input",
    name: "contributions",
    message: "Who is contributing to the project?"
},
{
    type: "input",
    name: "tests",
    message: "Are there tests to perform?"
},
]).then(function (data) {

    fs.writeFile("README.md", generateMarkdown(data), "utf8", function (err) {
        if (err) {
            console.log(err);
        }

    });


});


function writeToFile() {

}

function init() {

}
init();