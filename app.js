require('dotenv').config();

const express = require('express');
const expressLayout = require("express-ejs-layouts");

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'));

//Templating Engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
//EJS
app.set("view engine", "ejs");

app.use('/', require('./server/routes/main'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})