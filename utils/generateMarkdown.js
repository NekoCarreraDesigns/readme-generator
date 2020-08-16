const generateCredits = require("./credits.js")

function generateMarkdown(data) {
  let credits = data.credits;
  let links = generateCredits(credits);
  return `
  # Title: ${data.title}

  ![last commit](https://img.shields.io/github/last-commit/${data.username}/${data.repo}?style=flat-square)![license badge](https://img.shields.io/github/license/${data.username}/${data.repo}?style=flat-square)

  ### URL: ${data.url}

  ## Description 
  
  ${data.description}

  ## Table of Contents 
   
  * [Installation](#installation)
  * [Usage](#usage)
  * [Future Developments](#futureDevelopments)
  * [Credits](#credits)
  * [Questions](#questions)
  
  ## Installation 
  \`\`\
  ${data.installation}
  \`\`\
  
  ## Usage 
  
  ${data.usage}

  ## Future Developments

  ${data.FutureDevelopments}

  ## Credits

  ${links}

  ## Contributors: 
  
  ${data.contributors}

  ## Questions?

  Contact me at  [${data.email}]
  
  or[![Follow on Github] (https://img.shields.io/github/followers/${data.username}?label=Follow&style=social)](http://www.github.com/${data.username})

  Copyright © 2020 ${data.name} (http://www.github.com/${data.username})

  ---

  ##### _Created with [NekoCarreraDesigns readme generator] (https://github.com/NekoCarreraDesigns/readme-generator)

  `;
}

module.exports = generateMarkdown;
