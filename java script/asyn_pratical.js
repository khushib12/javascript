function download_file(url,downloader)
{console.log("downloading file:"+ url)

setTimeout(function (){
    let filepath="c:\\windows\\xyz.txt"

    console.log("file was downloaded to:"+filepath)
    downloaded(filepath)},3000)
}

downloadedfile("http://google.com//logo.png"),function (path)
{
    console.log("we got the file at"+ path)
}
