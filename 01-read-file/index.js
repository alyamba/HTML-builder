let fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname, 'text.txt'), 'utf8', function(error, fileContent){
   if(error) throw error; // ошибка чтения файла, если есть
   console.log(fileContent); // содержимое файла
});