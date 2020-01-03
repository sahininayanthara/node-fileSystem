const fs = require('fs');
fs.writeFile('file3.txt', "This is the third file", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('File Successfully Created');
       
    }
});


fs.appendFile('file3.txt', '. Some data being appended', (err)=>{
    if(err)
    console.log(err);
    else
    console.log('Successfully appended data to file');
});