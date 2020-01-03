const fs = require('fs');
 fs.writeFile('file1.txt', "This is the first file", (err)=>{
     if(err){
         console.log(err);
     }else{
         console.log('File Successfully Created');
        fs.readFile('file1.txt','utf8',(err,file)=>{
             if(err){
                console.log(err);
             }else{
                 console.log(file);  
             }
         });
     }
 });

