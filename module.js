const express = require("express");
const app = express();
// respond with "Hello Class!" on the homepage
app.get("/students", (req, res) => {
res.send("Hello Class!");
});
const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>')
})
