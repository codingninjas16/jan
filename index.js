//read a file

// const fs = require('fs');
const fs = require('fs/promises');
const path = require('path');

const readFilePath = path.join(__dirname,'template.html');
const writeFilePath = path.join(__dirname,'copy.html');
//1
// fs.readFile(readFilePath,'utf-8',function(err,data){
//     if(err){
//         console.log('error',err);
//         return;
//     }
//     console.log('data',data);
//     //write
//     fs.writeFile(writeFilePath,data,function(err,data){
//         if(err){
//             console.log('error',err);
//             return;
//         }
//         console.log('data copied succesfully');
//     })

// })
//2nd way promises
// fs.readFile(readFilePath,'utf-8')
//     .then((data) => {
//         return fs.writeFile(writeFilePath,data)
//     }).
//     then((data) =>{
//         console.log('copied succesfully');
//     }).catch((err)=>{
//         console.log('err',err);
//     })
let replaceData = {
    first_name:'nikki',
    last_name:'abc',
    email:'n1@gmail.com'   
};

async function readAndWrite(){
    try {
        let data = await fs.readFile(readFilePath,'utf-8');
        data = stringReplace(data);
        await fs.writeFile(writeFilePath,data);
        console.log('data -copied succesfully');
    } catch (error) {
        console.log('err',error);
    }
    
}

function stringReplace(data){
    //keys 
    //for in 
    let keys = Object.keys(replaceData); ['first_name','last_name','email']
    keys.map((item) =>{
        let placeHolderName = `<%=${item.toUpperCase()}%>`;
        data = data.replace(placeHolderName,replaceData[item]);
    })
    return data;
}
readAndWrite();

console.log('i am last line');


// let data = [1,2,3];
// for(let i = 0;i< data.length;i++){
//     data[i] = data[i]*2;
// }

// data.map((item,index)=>{
// RETURN ITEM*2;
// })