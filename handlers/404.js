'use strict';

module.exports = (req ,res,next)=>{
    res.status(404).send({
        route:req.path,
        message:"oops ! error (404) page not found",
       
    });
next();
}