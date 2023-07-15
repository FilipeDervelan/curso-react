const { body } = require('express-validator');

const userCreateValidation = () => {
	return [
		body('name')
			.isString()
			.withMessage('Name is required')
			.isLength({ min: 3 })
			.withMessage('Name need 3 min characters'),
		body('email')
			.isString()
			.withMessage('Email is required')
			.isEmail()
			.withMessage('An valid email is required'),
		body('password').isString().withMessage('Password need 3 min characters'),
		body('confirmpassword')
			.isString()
			.withMessage('Password confirm is required')
			.custom((value, { req }) => {
				if (value != req.body.password) {
					throw new Error('Passwords are different');
				}
				return true;
			}),
	];
};

const loginValidation = () => {
	return [
		body('email')
			.isString()
			.withMessage('E-mail is required')
			.isEmail()
			.withMessage('Put an valid e-mail'),
		body('password').isString().withMessage('Password is required'),
	];
};

const userUpdateValidation = () => {
	return [
		body('name')
			.optional()
			.isLength({ min: 3 })
			.withMessage('Name need 3 characters'),
		body('password')
			.optional()
			.isLength({ min: 5 })
			.withMessage('Password need 5 characters'),
	];
};

module.exports = {
	userCreateValidation,
	loginValidation,
	userUpdateValidation,
};
