// dépendances
const express = require("express") // node_modules/express
const cors = require("cors");
const { generate_token } = require('./utils')

// globales
const app = express()
const port = 3001

const students = [
  { id: 1, firstname: "Camille", lastname: "DAVID" },
  { id: 2, firstname: "Mickael", lastname: "FORMONT" },
  { id: 857, firstname: "Paul", lastname: "ORHON" }
]

// middleware
function useless(req, res, next) {
  console.log("Middleware")
  next()
}

//app.use(useless)

// utilisation d'un mdw permettant de désérialiser json des corps de requêtes POST
// ajoute une propriété body à l'objet req (request)
app.use(express.json())

app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("Homepage")
})

app.get("/crash", (req, res) => {
  res.send("Tu veux ma mort ?")
})

app.get("/file1", (req, res) => {
  //res.sendFile(__dirname + "/static/file1.txt")
  res.sendFile(__dirname + "/static/loup.jpg")
})

app.get("/student", (req, res) => {
  res.json(students)
})

app.get("/student/:id", (req, res) => {
  const result = students.filter(s => s.id == req.params.id)
  if (result.length > 0) {
    res.json(result[0])
  } else {
    res.json({result: "NO_STUDENT_FOR_THIS_ID"})
  }
})

app.post("/login", (req, res) => {
  const { email, password  } = req.body
  console.log(email, password)
  const access = email == "toto@gmail.com" && password == "azerty"

  if (access) {
    res.setHeader("Access-Control-Expose-Headers", "X-Token");
    res.setHeader("X-Token", generate_token(64))
    res.json({ access })
  } else {
    res.json({ access })
  }

})

// créer une route square qui prend dans l'url un paramètre "val"
// et renvoie au client le carré de val
app.get("/square/:val", (req, res) => {
  const val = parseInt(req.params.val)

  if (isNaN(val)) {
    res.status(404)
    return res.json({ "result": "OPERATION_IMPOSSIBLE" })
  }

  res.json({ value: val, square: val * val })
})


app.listen(port, () => {
  console.log("express server running on port " + port)
})