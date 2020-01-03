const fs = require('fs');
fs.writeFile('file2.txt', "This is the second file", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('File Successfully Created');
       
    }
});

fs.rename('file2.txt','file.txt',(err)=>{
    if(err)
    console.log(err);
    else
    console.log('File Successfully Renamed');
});
