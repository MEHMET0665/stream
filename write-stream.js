const fs=require('fs')
const file='video.mp4'
const myReadStream=fs.createReadStream(file)
const myWriteStream=fs.createWriteStream('NewVideo.mp4')
myReadStream.pipe(myWriteStream);
myWriteStream.on('finish',()=>{
  console.log('New file created')
})