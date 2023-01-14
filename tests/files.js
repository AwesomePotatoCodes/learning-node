const fs = require('fs');

function read(filepath, encoding) {
  fs.readFile(filepath, encoding, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    return data;
  });
}

// fs.readFile('files/opinion.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

const contents = read('files/opinions.txt', 'utf8');
console.log(`File reads "${contents}"`);
