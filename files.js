const fs = require('fs');

fs.writeFile('./docs/blog2.txt', 'hello world', () => {
    console.log('file was written');
})


fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});