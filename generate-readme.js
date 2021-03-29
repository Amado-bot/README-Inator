const fs = require('fs')

const writeFile = (data) =>  {
  fs.writeFileSync('./dist/README.md', data)
  };

  module.exports= writeFile;