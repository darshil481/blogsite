import Joi from 'joi';
import { errorMessage } from '../Constants/error.constant';
import { patternPhone } from "../Constants/variable.constant"
export const RegisterSchema = Joi.object({
    first_name: Joi.string()
      .required()
      .max(50)
      .label('First Name')
      .messages({ ...errorMessage }),
    last_name: Joi.string()
      .required()
      .max(50)
      .label('Last Name')
      .messages({ ...errorMessage }),
    email: Joi.string()
      .email()
      .required()
      .max(100)
      .label('Email')
      .messages({ ...errorMessage, 'string.email': '{#label} must be a valid email' }),
    password: Joi.string()
      .min(8)
      .max(254)
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)
      .required()
      .label('Password')
      .messages({
        ...errorMessage,
        'string.pattern.base':
          '{#label} must have at least one uppercase character, one lowercase character, one numeric character and one special character',
      }),
    user_name: Joi.string()
      .required()
      .max(50)
      .label('User name')
      .messages({ ...errorMessage }),
    mob_no: Joi.string()
      .regex(patternPhone)
      .required()
      .label('Mobile No.')
      .messages({ ...errorMessage }),
  }).options({
    abortEarly: false,
  });