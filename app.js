// var exp = require("express");
// var app = exp();
// var boydParser = require("body-parser");
// app.use(boydParser());



// //יבוא הקונטרולר
// var castModule = require("./controlercast");
// //הפניה לנתיב
// //כל הפניות שיגיעו מנתיב שמתחיל ב animal
// //יועברו למודול הנ"ל
// app.use("/cast", castModule);



// app.get("/getall", (req, res) => {
//     res.send("seccess");
// });

// app.use((error, req, res, next) => {
//     res.send({ error: error.message })
// })

// app.listen(5000, () => {
//     console.log("Server running at port 5000")
// });
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//import the controller
const castModule = require("./controlercast");

//Reference to the path
//All references that come from a path that starts with animal
//will be transferred to the above module
app.use("/cast", castModule);

app.use((error, req, res, next) => {
  res.send({ error: error.message })
})

app.listen(5000, () => {
  console.log("Server running at port 5000")
});

module.exports = app;