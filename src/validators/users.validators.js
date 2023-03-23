const {check, validationResult, param} = require('express-validator');
const validateResult = require('../utils/validate');

const createUserValidator = [
check("username", "Error in username field")
.exists().withMessage("Username field is required")
.notEmpty().withMessage("Username field cannot be empty")
.isString().withMessage("Username field must be a string")
.isLength({min: 6, max: 30}).withMessage("Username field must have a length between 6 and 30 characters"),
check("email", "Error in email field")
.exists().withMessage("Email field is required")
.notEmpty().withMessage("Email field cannot be empty")
.isString().withMessage("Email field must be a string")
.isLength({min: 7, max: 50}).withMessage("Email field must have a length between 7 and 50 characters")
.isEmail().withMessage("Email field must have a valid format example: 'user@email.com'"),
check("password","Error in password field")
.exists().withMessage("Password field is required")
.notEmpty().withMessage("Password field cannot be empty")
.isString().withMessage("Password field must be a string")
.isLength({min: 8}).withMessage("Password field must have a minimum length of 8 characters"),
(req, res, next) => {
validateResult(req, res, next);
}
]

const updateUserValidator = [
param("id").isInt().withMessage("Id must be an integer"),
check("firstName")
.isString()
.exists()
.withMessage("User's first name not found")
.notEmpty()
.withMessage("First name field cannot be an empty string"),
check("lastName")
.isString()
.exists()
.withMessage("User's last name not found")
.notEmpty()
.withMessage("Last name field cannot be an empty string"),
check("email", "Email cannot be changed").not().exists(),
(req, res, next) => {
validateResult(req, res, next);
}
]

module.exports = {
createUserValidator,
updateUserValidator,
}