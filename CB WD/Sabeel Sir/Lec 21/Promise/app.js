
function downloadFile(path) {
    console.log(`Started download from   ${path}`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(path.split('/').pop());
        }, 3000);
})
};

function uploadFile(fileName) {
    console.log(`Starting to Upload ${fileName}`)
    return new Promise((resolve,reject) =>{

    setTimeout(() => {
        resolve(`File is compressed ${fileName}` + fileName);
    }, 3000);
})
}

function compressFile(fileName) {
    console.log(`Starting to compress ${fileName}`)
    return new Promise(()=>{
        setTimeout(() => {
            resolve(fileName.split('.')[0] + '.zip')
        }, 2000);
    })
  
}

const URL = "https://whatsapp.com/user/profile.jpg";

downloadFile(URL)
.then((fileName)=>{
    console.log(`File ${fileName} is downloaded `)
    return compressFile(fileName);
})
.then((compressFileName) =>{
    console.log(`File compresssed successfullt ${compressFileName}`);
    return upload(compressFileName)
})
.then((uploadedPath)=>{
    console.log(`File uploaded successfully ${uploadedPath}`)
})
.cath ((err)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Everything is done")
})




// Promise ,, Creation of Promise
const p = new Promise((resolve, reject) => {
    resolve(100);
    // reject(new Error("Something went wrong"))
})


// consuming the promise
p.then((value) => { // value = 100
    console.log(value)
})
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Inside final Block")
    })