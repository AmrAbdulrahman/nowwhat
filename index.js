const pngStringify = require('console-png');
const image = require('fs').readFileSync('./img/ghassan.png');
 
pngStringify(image, function(err, string) {
  console.log(err ? 'Ghassan is busy now, do whatever you want :D' : string);
});
