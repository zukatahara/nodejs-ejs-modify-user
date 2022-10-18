const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection')
const route = require('./server/routes/router');
//
const app = express();
dotenv.config()
const PORT = process.env.PORT || 3000;

//log request
app.use(morgan('tiny'));
//mongodb connection string
connectDB()
//parse request to body-parser
app.use(bodyParser.urlencoded({ extended: true }))
//set view engine
app.set("view engine", "ejs")
// app.set("view", path.resolve(__dirname, "views/ejs")) //the same above
//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//load routers
app.use('/', route)

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}/`))