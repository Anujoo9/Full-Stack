
function downloadFile(path,downloaded){
    console.log(`Started download from   ${path}`)
    setTimeout(()=>{
        downloaded(path.split('/').pop())
    },3000);
};

function uploadFile(fileName,upload){
    console.log(`Starting to Upload ${fileName}`)
    setTimeout(()=>{
        upload();
    },3000);
}

function compressFile(fileName, compressed){
    console.log(`Starting to compress ${fileName}`)
    setTimeout(()=>{
        compressed(fileName.split('.')[0]+'.zip')
    },2000);
}

const URL = "https://whatsapp.com/user/profile.jpg";

downloadFile(URL,function(fileName){ //callback hell ,, nested call backs
    console.log(`file downloaded ${fileName}`)
    compressFile(fileName,function(compressedFile){
        console.log(`File compression completed ${compressedFile}`)
    });
    uploadFile(fileName,function(){
        console.log(`File is compressed ${fileName}`)
    })

});
   

// downloadFile(URL,function(fileName){
//     console.log(`File ${fileName} is downloaded `)
// });
