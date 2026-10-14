import Joi from 'joi';

// Create new user
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

// Update user
const updateUserSchema = Joi.object({
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
});

// Reset password
const resetPasswordSchema = Joi.object({
  old_password: Joi.string().trim().min(6).required().messages({
    'any.required': 'Password is required',
    'string.min': 'Password must be at least 6 characters long',
    'string.empty': 'Password is required',
  }),
  new_password: Joi.string().trim().min(6).required().messages({
    'any.required': 'Password is required',
    'string.min': 'Password must be at least 6 characters long',
    'string.empty': 'Password is required',
  }),
});

export { createNewUserSchema, updateUserSchema, resetPasswordSchema };
