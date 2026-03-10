import fs from "fs";
import pdf from "pdf-parse/lib/pdf-parse.js";

const dataBuffer = fs.readFileSync("assets/Khushi_Kakkar_Resume.pdf");

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(function(error) {
    console.error(error);
});
