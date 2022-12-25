// File System in NODEJS

const fs = require('fs')
// Read File

// fs.readFile('./blog1.txt', (err, data)=>{
//     if(err){ console.log(err); } 
//     else { console.log(data.toString()); }});

// Write File
// fs.writeFile('blog2.txt', 'Hello World of Ninja', ()=>{
//     console.log("Blog1 has updated");
// })

// Create directory

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err)=>{
//         if(err) { console.log(err)}
//         else { console.log(" folder created");}
//     }) 
// }
// else {
//     fs.rmdir('./assets', (err)=>{
//         if(err){ console.log(err); }
//         else { console.log("folder deleted");}
//     })
// }

// Delete File
// if(fs.existsSync('./blog2.txt')){
//     fs.unlink('./blog2.txt', (err)=>{
//         if(err){ console.log(err); }
//         else { console.log('file deleted'); }}
//     )
// }


