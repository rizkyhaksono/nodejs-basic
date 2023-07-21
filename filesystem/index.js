const fs = require('fs');

// const data = fs.readFileSync('note.txt', 'utf-8');

// console.log(data);

const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        console.log(error);
        return;
    }
    console.log(data);
};
 
fs.readFile('note.txt', 'UTF-8', fileReadCallback);