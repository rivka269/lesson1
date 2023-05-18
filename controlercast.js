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
    //ש'דקגרכאעטיוחןלםךפף'קראטון
    console.log(req.session);
    return res.json(castModule.getAll());
});

router.get("/getById/:myid", (req, res)=> {

    var id = req.params.myid;
    console.log(id);
    var cast = castModule.getItemById(id);
    if (cast != undefined)
    {
        
    res.status(200, {"Content-Type":"application/json"})
    res.json(cast);
    }
    if (cast == undefined) {
      res.status(404).send({ error: 'Cast not found' });
    }
       
  
  
});

const axios = require('axios');

async function validatePhone(phone) {
  const apiKey = 'uxraoiCZnZ8I5WztWMruLj5hQ3kCFIr5';
  const url = `http://apilayer.net/api/validate?access_key=${apiKey}&number=${phone}`;
  
  try {
    const response = await axios.get(url);
    const data = response.data;
    
    // Return true if the phone number is valid
    return data.valid;
  } catch (error) {
    console.error(error.response.data);
    return false;
  }
}

// router.post("/add", express.json(), async (req, res) => {
//   const cast = req.body;
  
//   if (!cast.email.includes("@") || cast.name == "" || cast.email == "" || cast.id == "" || cast.phone == "") {
//     res.status(400).send("Bad Request");
//   } else {
//     // Call the validation function with the phone number
//     const isValid = await validatePhone(cast.pone);

//     if (isValid) {
//       castModule.addItem(cast);
//       res.status(200).send("Success");
//     } else {
//       res.status(401).send("Unauthorized");
//     }
//   }
// });

//zxcvbnm,./,mnbvcxzcvbnm,.
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


router.post("/add",express.json(), async (req, res)=> {
    const cast = req.body;

    if(!cast.emele.includes("@")||cast.name==""||cast.emel==""||cast.id==""||cast.pone=="")
    res.send("אין אפשרות");
    else {
            // Call the validation function with the phone number
            const isValid = await validatePhone(cast.pone);
        
            if (isValid) {
              castModule.addItem(cast);
              res.status(200).send("Success");
            } else {
              res.status(401).send("Unauthorized");
            }
          }
        });
        

router.put("/update/:id", (req, res)=> {
    var cast = req.body;
    castModule.updateItem(cast);
    res.status(200, {"Content-Type":"application/text"});
    res.send("success");
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const isRemoved = castModule.removeItem(id);
  if (isRemoved) {
    res.status(200).send("true");
  } else {
    res.status(404).send({ error: 'Cast not found' });
  }
});


module.exports = router;