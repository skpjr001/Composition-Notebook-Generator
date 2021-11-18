const fs = require('fs')

//Function to setup initial folders
InitialSetup();

function InitialSetup() {

  // Create input directory for storing images
  fs.mkdir(__dirname+'/input', {recursive: true},(err)=>{
    console.log("dirname",__dirname);
    if (err) throw err;
  })

  // Create output directory for output pdfs
  fs.mkdir(__dirname+'/output', {recursive: true},(err)=>{
    if (err) throw err;
  })
  
}



module.exports={

}
