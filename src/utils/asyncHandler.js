
// write the create the utility through promises

const asyncHandler = (fn) => {
    (req,res,next) =>{
        Promise.resolve(fn(req,res,next)).catch(err => next(err))
    }
}



export {asyncHandler}


// write the utility through through the try-catch
/*
const asyncHandler = (fn) => async (req,res,next) => {

    try {
        await fn(req,res,next);
    } catch (error) {
        res.status(error.code  || 500).json({
            success : false,
            message: error.message
        })
    }

}*/