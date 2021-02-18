const fs = require('fs');
const file = 'video.mp4'
let progress=0;
const myReadStream=fs.createReadStream(file)
fs.stat(file,(err,data)=>{
  const total=data.size;
})
myReadStream.on('data',(chunk)=>{
    progress+=chunk.length;
    console.log(progress)
})

myReadStream.on('end',()=>{
    console.log("Data reading finished...");
})
