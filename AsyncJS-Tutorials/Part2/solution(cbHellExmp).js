/*
 * Implement a set of dummy functions which can mimic the behavior of the following functions:
 * 1. download -> This function should mimic downloading of some content from a url
 * 2. writeFile -> This function should mimic writing of some content to a file
 * 3. upload -> This function should mimic uploading the file to a server
 *
 * Now after you've implemented these functions, try to use them in a scenario where we first
 * download a file, then write it to a disk and then upload it to a server.
*/


function download(url, callback) {
 console.log("Downloading from", url);
 setTimeout(() => {
  console.log("Download is done");
  let downloadedData = "Some data";
  callback?.(downloadedData)
 }, 3000);
}

download("https://github.com/tanyaaa05/Portfolio-WebPage", function handleDownload(data) {
 console.log("Data downloaded is", data);
});

function writeFile(data, fileName, callback) {
 // fileName tells the name of the file to be created in which data will be written
 console.log("Writing", data, "to file");
 setTimeout(() => {
  console.log("Writing to file", fileName, "is done");
  let status = "Success";
  callback?.(status);
 }, 2000);
}

function upload(fileName, url, callback) {
 // fileName tells the name of the file to be uploaded
 console.log("Uploading file", fileName, "is done");
 setTimeout(() => {
  console.log("Upload is done");
  let uploadStatus = "Success";
  callback?.(uploadStatus);
 }, 3000);
}

function process() {
 download("https://github.com/tanyaaa05/Portfolio-WebPage", (data) => {
  writeFile(data, "File.txt", (status) => {
   upload("File.txt", "https://github.com/tanyaaa05", (uploadStatus) => {
    console.log("All Done");
   });
  });
 });
}

process();


