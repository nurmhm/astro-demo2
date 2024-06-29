
const fs = require('fs');
let alldata = [];



const apiconverter = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>{
        alldata = data;
        console.log(alldata);

        let markdown = '';
        alldata.forEach(item=>{
          markdown += `## ${item.name} \n\n * ${item.email}\n\n`
        })
        
        fs.writeFile('apiOutput.md', markdown, 'utf8' , err=>{
          if(err) console.log(err);
        })
    })
}

apiconverter();

      
