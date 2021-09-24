const fs = require('fs');

module.exports = (file) => { fs.readFile(file, 'utf8',  (err, data) => {
  if (err)
    console.log(err);
  else {
    console.log(data);
  }
})
  return;
};


// module.exports = fs.readFile;
