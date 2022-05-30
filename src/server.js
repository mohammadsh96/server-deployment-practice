'use strict';

const express =require("express");
const app =express();
const stamper =  require("../MiddleWare/Stamper");
const handleNotFoundError =  require("../handlers/404");
const handleError =  require("../handlers/500")

app.get("/" , (req,res)=>{
   console.log("hello from log");
   res.send("hello") ;
    })

app.get("/data", (req,res)=>{
    console.log("hello from data route");
    res.json ({
    id : "0795956190" , 
    name : "mohammad alsharideh", 
    email : "mhmd.shrydh1996@gmail.com" 
    })
    })

 app.get('/test', stamper, (req, res) => {
      res.json({
          id: 1,
          name: 'testmohammad',
          email: 'testMohammad@gmail.com',
         time: req.timeStamp
        });
    });

app.get("/bad" , (req ,res)=>{
   let errors = 500 ;
   for(let i =0 ; i<error.length ; i++){
    console.log(me);
    
    }
    res.status(500).send(me); 

    })

app.use('*',handleNotFoundError);
app.use(handleError);

function start (PORT){
    app.listen(PORT ,()=>{

        console.log(`mohammad server on port ${PORT}`) ;
    }) ;



}
 module.exports ={

  app:app,
start:start , 

 }