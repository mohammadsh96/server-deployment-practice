'use strict';
module.exports=(req,res,next)=>{
    req.timeStamp=new Date();
    next();  
    console.log('its working');
  }