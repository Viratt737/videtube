const asyncHandler = (requestHandler) => async(req, res, next) =>{
    try{
       await requestHandler(req, res,next);
    }catch(err) {
        res.status(err.status || 500).json({
            success : false,
            msg : err.message
        })
    }
}
module.exports = asyncHandler;