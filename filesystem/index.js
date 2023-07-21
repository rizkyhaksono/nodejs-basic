const fs = require('fs');

// path resolve
// const { resolve } = require('path');

const fileReadCallback = (error, data) => {
  if(error) {
    console.log('Gagal membaca berkas');
    return;
  }
  console.log(data);
};

// fs.readFile(resolve(__dirname, 'note.txt'), 'UTF-8', fileReadCallback);
fs.readFile('./filesystem/note.txt', 'UTF-8', fileReadCallback);