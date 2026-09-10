const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "application/json");
    res.write("<h1>I am sandeep singh</h1>");
    res.end();
  }

  if(req.url === "/contact"){
    res.setHeader(('content-Type',''))
    res.write("<h1>Have a project or want to collaborate?</h1>");
    res.end();
  }
});
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
