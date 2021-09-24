const fs = require('fs');



module.exports = () => {fs.readdir(__dirname, (err, files) => {
  if (err) {
    process.stdout.write(err);
  }else {
    process.stdout.write("\nCurrent directory filenames:");
    files.forEach(file => {
      process.stdout.write(file);
    })
  }
})
  return;
}

// module.exports = fs.readdir;

