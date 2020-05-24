function generateMarkdown(data) {
    return `
  # Title: ${data.title}
  
  # Description: ${data.description}
  
  # Usage: ${data.usage}

  # License ${data.license}

  # Contributors ${data.contributions}
  
  `;
}

module.exports = generateMarkdown;
