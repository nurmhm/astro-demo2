
// Read the JSON file asynchronously
const fs = require('fs');



fs.readFile('data.json', 'utf8', (err, data) =>{
    if(err)console.log(err);
    const jsondata = JSON.parse(data);
    
    let markdown = '';

    jsondata.forEach(item => {
        markdown += `## ${item.title} \n\n * ${item.description}\n\n`;
    })

    fs.writeFile('Output.md', markdown, 'utf8' , err=>{
        if(err)console.log(err);
    })   
    console.log('markdown file created');
})