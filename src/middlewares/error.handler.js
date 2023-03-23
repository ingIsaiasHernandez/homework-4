const {
    ValidationError, 
    DatabaseError,
    ConnectionError,
    ConnectionAcquireTimeoutError,
    ConnectionRefusedError,
    ConnectionTimedOutError,
    InvalidConnectionError,
} = require('sequelize');

const logError = (err, req, res, next) => {
    console.log(err);
    next(err);
}

const errorHandler = (error, req, res, next) => {
    let {status} = error;

    return res.status(status || 500).json({
        message: error.message,
        errorName: error.name
    })
}

const ormErrorHandler = (error, req, res, next) => {
    if (
        error instanceof ConnectionError ||
        error instanceof ConnectionTimedOutError ||
        error instanceof ConnectionRefusedError ||
        error instanceof ConnectionTimedOutError ||
        error instanceof InvalidConnectionError ||
        error instanceof ConnectionAcquireTimeoutError
    ) {
        return res.status(409).json({
            name: error.name,
            message: "Database connection error"
        })
    }

    if(error instanceof ValidationError){
        return res.status(409).json({
            name: error.name,
            message: error.message,
            errors: error.errors
        });
    }

    if (error instanceof DatabaseError) {
        return res.status(409).json({
            name: error.name,
            message: error.message,
            errors: error.message,
            params: error["parameters"]
        })
    }

    next(error);
}

module.exports = {
    logError,
    errorHandler,
    ormErrorHandler
}