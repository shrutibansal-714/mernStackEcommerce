const Errorhander = require("../utils/errorhander");


module.exports = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server error";


    // Wrong Mongodb Id error  {Cast Error}
    if(err.name == "CastError"){
        const message = `Resource not found ...Id is Invalid : ${err.path}`;
        err = new Errorhander(message , 400);
    }

     //mongoose duplicate key error
     if(err.code == 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered `
        err = new Errorhander(message , 400);
    }

      //wrong jwt token
      if(err.code == "JSONWebTokenError"){
        const message = `JSON Web Token is invalid , try again `
        err = new Errorhander(message , 400);
    }

     //jwt expire error
     if(err.code == "TokenExpireError"){
        const message = `JSON Web Token is expire , try again `
        err = new Errorhander(message , 400);
    }


    res.status(err.statusCode).json({
        success: false,
        message : err.message
    })
}