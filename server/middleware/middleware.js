const jwt = require("jsonwebtoken")

function formValidation(req, res, next){
    const body = req.body
    if(body.username.length < 5 || body.username.length > 15 || body.username === undefined){
        res.status(400).json({message: "Please Complete Data"})
    } 
    else if(body.password.length < 8 || body.password === undefined ){
        res.status(400).json({message: "Please Complete Data"})
    }else{
        next()
    }
}

function authenticateToken(req, res, next){
    const token = req.get("Authorization")

    if(token === null){
        res.status(403).json({message: "AND STAY OUT!"})
    } else {
        jwt.verify(token, process.env.SECRET, (err, result)=>{
            if(err){
                res.status(400).json({message: "NOT TODAY"})
            } else {
                next()
            }
        })
    }
}

module.exports = {formValidation, authenticateToken}