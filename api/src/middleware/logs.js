
const logRequest = (req,res,next)=>{
    console.log('Request at this path', req.path);
    next();
}

module.exports = logRequest