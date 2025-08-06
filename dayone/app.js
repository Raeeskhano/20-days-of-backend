const fs = require("fs");

//creating file
fs.writeFile("text.txt", "Hello, this file is created using node.js", (err) => {
  if (err) {
    console.error("error writing to file", err);
  } else {
    console.log("file created sucessfully ");
  }
});

//apend new data to existing file
// fs.appendFile("text.txt", "okay, that's look amaaazing!", (err) => {
//   if (err) {
//     console.error("error writing to file", err);
//   } else {
//     console.log("file created sucessfully");
//   }
// });

//renaming file
// fs.rename("text.txt", "Hello.txt", (err) => {
//   if (err) {
//     console.error("error writing to file", err);
//   } else {
//     console.log("file renamed sucessfully");
//   }
// });

//copying file to the folder
// fs.copyFile("Hello.txt", "./copy/chacha.txt", (err) => {
//   if (err) {
//     console.log("error while copying file", err);
//   } else {
//     console.log("done copying file");
//   }
// });

//deleting file
// fs.unlink("Hello.txt", (err) => {
//   if (err) {
//     console.log("error while deleting file", err);
//   } else {
//     console.log("sucessfully deleted file");
//   }
// });

//removing directory
// fs.rm("./copy", { recursive: true }, (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("done");
//   }
// });

//reading file
fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) {
    console.log("error:", err);
  } else {
    console.log("data:", data);
  }
});
