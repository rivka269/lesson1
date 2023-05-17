var express = require("express");
var router = express.Router();
var castModule = require("./Queu");



router.use((req,res,next)=>{
    console.log("cast request");
    next();
});

router.get("/", (req, res)=> {
    req.session.name = "myname";
    console.log(req.session);
    return res.json("hello");
});

router.get("/getAll", (req, res)=> {
    
    console.log(req.session);
    return res.json(castModule.getAll());
});

router.get("/getById/:myid", (req, res)=> {

    var id = req.params.myid;
    console.log(id);
    var cast = castModule.getItemById(id);
    if (cast != undefined)
    {
        res.send("wertyuiklkjhgfd"); 
    res.status(200, {"Content-Type":"application/json"})
    res.json(cast);
    }
    if (cast == undefined){
        res.status(404).send({ error: error.message })
       
    }
  
});


// const axios = require('axios');

// const ACCESS_KEY = 'uxraoiCZnZ8I5WztWMruLj5hQ3kCFIr5';
// const PHONE_NUMBER = '14158586273'; // Example phone number

// axios.get(`http://apilayer.net/api/validate?access_key=${ACCESS_KEY}&number=${PHONE_NUMBER}`)
//   .then(response => {
//     const data = response.data;
//     if (data.valid) {
//       console.log('Phone number is valid');
//     } else {
//       console.log('Phone number is not valid');
//     }
//   })
//   .catch(error => {
//     console.error('Error validating phone number:', error);
//   });


router.post("/add",express.json(), (req, res)=> {
    const cast = req.body;
    if(!cast.emele.includes("@")||cast.name==""||cast.emel==""||cast.id==""||cast.pone=="")
    res.send("אין אפשרות");
    else
    castModule.addItem(cast);
//Zxdcfvgbhnjmk,l.Zxcvbn
    res.status(200, {"Content-Type":"application/text"});
    res.send("success");
});

router.put("/update/:id", (req, res)=> {
    var cast = req.body;
    castModule.updateItem(cast);
    res.status(200, {"Content-Type":"application/text"});
    res.send("success");
});

router.get("/delete/:id", (req, res)=> {

    var id = req.params.id;
    res.status(200, {"Content-Type":"application/text"})
    res.send(castModule.removeItem(id));
});


module.exports = router;