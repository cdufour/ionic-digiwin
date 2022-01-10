const http = require("http")

http
  .createServer((req, res) => {

    if (req.url == "/crash") {
      return res.end("<h1>Tu veux ma mort ?</h1>")
    }

    console.log("Le client veut: " + req.url)
    res.end("ok")
  })
  .listen(3000)