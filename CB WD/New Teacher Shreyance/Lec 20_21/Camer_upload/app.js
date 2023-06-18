// Download -- url
function Download(url){
    setTimeout(() => {
        console.log(`Downloding from ${url}`)
        Compress(url);
    }, 2000);
}
// Compress zip
function Compress(url){
    setTimeout(() => {
        console.log("Compressing")
        Upload(url);
    }, 3000);
}

//Upload
function Upload(url){
    setTimeout(() => {
        console.log(`Uploaded $ {url}`)
    }, 2000);
}
const  url= "abc.com"
let x = url.split('.')
const str = x[0]

Download(str )