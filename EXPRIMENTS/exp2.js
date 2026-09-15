const fs = require("fs");

fs.writeFile("student.txt", "hello, this file is for students", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("file successfully created");
    }
});

fs.readFile("student.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("err");
    } else {
        console.log("content of file");
        console.log(data);
    }
});

fs.appendFile("student.txt", "file of CSE 3rd sem", (err) => {
    if (err) throw err;
    else {
        console.log("file successfully created");
    }
});

fs.unlink("student.txt", (err) => {
    if (err) {
        console.error("Error deleting file:", err);
        return;
    }
    console.log("File deleted successfully!");
});