generateReadme = (data) => {
  //create a badges function for #badges
    return `
    # ${data.title}   
  
    ## Description
    ${data.description}

    ## Badges

    ## Table of Contents
  
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
  
    ## Installation
  
    ${data.installation}
  
    ## Usage
  
    ${data.usage}
  
    ## Credits
  
    ${data.credits}
  
    ## License
  
    ${data.license}



    ## Contributing
  
    ${data.contributing}
  
    ## Tests
  
    ${data.tests}
  
    ## Questions

    https://github.com/${data.github}
  
    ${data.emailAddress}
    
    `;
  }
  module.exports = generateReadme;