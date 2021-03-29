const fs = require('fs')

const writeFile = (data) =>  {
  fs.writeFileSync('sample.md', data)
  };

  module.exports= writeFile;