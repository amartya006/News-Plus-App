const express = require('express');
const app = express();
const server = require('http').Server(app);
const indexRoutes = require("./routes/indexRoutes.js");

app.use(express.static("Assets"));
app.set('view engine', 'ejs');




// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them


app.use(indexRoutes);

server.listen(3000, ()=> {
    console.log("Port Started at Server 3000");
})
