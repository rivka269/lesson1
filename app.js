var exp = require("express");
var app = exp();
var boydParser = require("body-parser");
app.use(boydParser());


//Middleware: פונקציות ביניים
//היכולת לתפוס את הפניות לשרת, גם לפני שהן מנותבות לפעולות הספציפיות
//סדר הפעולות יהיה כסדר הכתיבה
// app.use((req,res,next)=>{
//     var d = new Date();
//     console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
//     next();
// });

// app.use((req, res, next) => {
//     const remoteIp = req.connection.remoteAddress;
//     if (!ips.includes(remoteIp)) {
//         next(new Error("Your ip ivalid"));
//     }
//     next();
// });

//Router: היכולת לבזר לקבצים שונים את הפונקציות שמאזינות לבקשות הקליינט
//למעשה, זהו מנגנון ניתוב שיודע להפנות את הבקשות שמגיעות ל app
//לקבצים השונים

//יבוא הקונטרולר
var castModule = require("./controlercast");
//הפניה לנתיב
//כל הפניות שיגיעו מנתיב שמתחיל ב animal
//יועברו למודול הנ"ל
app.use("/cast", castModule);



app.get("/getall", (req, res) => {
    res.send("seccess");
});

app.use((error, req, res, next) => {
    res.send({ error: error.message })
})

app.listen(5000, () => {
    console.log("Server running at port 5000")
});