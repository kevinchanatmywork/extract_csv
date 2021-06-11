const { timeEnd } = require('console');
const csv = require('csv-parser');
const fs = require('fs');
const fs_write = require("fs");
//const ouput_file_name = 'output.html';
var extract_array = [];

// delete all file content
//fs.writeFile(ouput_file_name, '<html>\n', function(){console.log('done')})


function replaceAllBackSlash(targetStr){
  var index=targetStr.indexOf("\\");
  while(index >= 0){
      targetStr=targetStr.replace("\\","");
      index=targetStr.indexOf("\\");
  }
  return targetStr;
}

fs.createReadStream('testing.csv')
  .pipe(csv())
  .on('data', (row) => {
    var str = '';
    //console.log(row);
    //console.log(typeof(row));
    //console.log(row['field1']);
    //console.log(row['field2']);
    //extract_array.push([row['field1'],row['field2']]);
    //str+='<field1>'+row['field1']+'</field1>\n';
    //str+='<field2>'+row['field2']+'</field2>\n';

    str +=row['field2'];
    str = str.replace(":","");
    str = str.replace("/","");
    str = replaceAllBackSlash(str);
    //console.log(str);


    fs_write.appendFile('output_folder/'+ str +'.html',row['field1'],(err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });  
           
  })
  .on('end', () => {
    console.log('CSV file successfully processed');

    //console.log(extract_array);
  });


  console.log(extract_array);