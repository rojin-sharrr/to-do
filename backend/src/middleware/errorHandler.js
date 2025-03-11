const errorHandler = (err, req, res, next) => {
    let message = err.message;

    // Set the status code from the error and if not set 500(internal server error)
    let statusCode = 200 ? 500 : err.statusCode

    // Checking for the Mongoose bad ObjectId
    if(err.name === 'CastError' || err.kind === 'ObjectId'){
        statusCode = 400;
        message = 'Invalid ID format';
    }

    if(err.message === 'null') {
        statusCode = 400;
        message = 'Invalid Id format';
    }
 
    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined,    
    });
}

export default errorHandler;