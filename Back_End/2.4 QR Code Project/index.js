/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      /* Pass your questions in here */

      message: "Type your url : ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    // Use user feedback for... whatever!!

    images(url);
    textfile(url);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
//creatin qr images
function images(input) {
  var qr_png = qr.image(input);
  qr_png.pipe(fs.createWriteStream("qrImages/" + input + ".png"));
}

// creating text file
function textfile(input) {
  fs.writeFile("URL.txt", input, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}
