const fs = require('fs');
 fs.writeFile('file4.txt', "This is the forth file", (err)=>{
     if(err){
         console.log(err);
     }else{
         console.log('File Successfully Created');
        
     }
 });

 fs.unlink('file4.txt',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('successfully deleted the file');
       
    }
 })

