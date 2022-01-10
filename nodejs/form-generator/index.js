const fs = require("fs")

const students = [
  { firstname: "Camille", lastname: "DAVID" },
  { firstname: "Mickael", lastname: "FORMONT" },
  { firstname: "Paul", lastname: "ORHON" }
]

function main() {
  students.forEach((student, index) => {

    let filename = "form_" + (index+1) + ".html"
    
    fs.writeFile("forms/" + filename, template(student), () => {
      console.log("fichier généré")
    })

  })
}

function template(student) {
 return `
 <html>
   <head>
     <title>${student.firstname} ${student.lastname}</title>
   </head>
   <body>
     <h1>Formulaire d'évaluation</h1>
     <h2>Etudiant: ${student.firstname} ${student.lastname}</h2>
     <form>
       <label>Formation suivie</label>
       <input type="text" />
     </form>
   </body>
 </html>
  `
}

main()