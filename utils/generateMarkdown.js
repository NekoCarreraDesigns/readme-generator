function generateMarkdown(data) {
  return `
  # Title: ${data.title}
  
  # Description: ${data.description}

  # Contents: ${data.contents}
  
  # Usage: ${data.usage}

  # License ${data.licenses}

  # Contributors ${data.contributions}
  
  `;
}

module.exports = generateMarkdown;