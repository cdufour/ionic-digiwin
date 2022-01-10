const fs = require("fs")

fs.readFile("file1.txt", (err, fileContent) => {
  if (err) {
    console.log("Une erreur s'est produite")
  } else {
    console.log(fileContent.toString())
  }
})

try {
  const file2 = fs.readFileSync("file2.txt")
  console.log(file2.toString())
} catch(err) {
  console.log("Une erreur s'est produite")
}



console.log("fin du programme")