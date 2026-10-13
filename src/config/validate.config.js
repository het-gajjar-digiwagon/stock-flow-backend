import Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string().trim().email().required().messages({
    'any.required': 'Invalid email format',
    'string.email': 'Invalid email format',
    'string.empty': 'Invalid email format',
  }),
  password: Joi.string().trim().min(6).required().messages({
    'any.required': 'Password is required',
    'string.min': 'Password must be at least 6 characters long',
    'string.empty': 'Password is required',
  }),
}).unknown(true);

const createNewUserSchema = Joi.object({
  name: Joi.string()
    .trim()
    .required()
    .messages({
      'any.required': 'Name is required',
      'string.empty': 'Name is required',
    })
    .max(100),
  email: Joi.string().trim().email().required().messages({
    'any.required': 'Invalid email format',
    'string.email': 'Invalid email format',
    'string.empty': 'Invalid email format',
  }),
  password: Joi.string().trim().min(6).required().messages({
    'any.required': 'Password is required',
    'string.min': 'Password must be at least 6 characters long',
    'string.empty': 'Password is required',
  }),
});

export { loginSchema, createNewUserSchema };
